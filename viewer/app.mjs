/**
 * Paylaşılan request handler — lokal server + Vercel.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createInventory } from "./lib/inventory.mjs";
import {
  parseFilters,
  applyFilters,
  computeFacets,
  groupRows,
  lightRow,
  coverage,
  GROUPS,
  DIMENSIONS,
} from "./lib/facets.mjs";
import { runHealth } from "./lib/health.mjs";
import { loadCandidates } from "./lib/candidates.mjs";
import { buildCro } from "./lib/cro.mjs";
import { externalEvidenceUrl } from "./lib/evidence-external.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const PUBLIC_DIR = path.join(__dirname, "public");
export const ROOT = path.resolve(__dirname, "..");

const inventory = createInventory(ROOT);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".md": "text/plain; charset=utf-8",
};

function send(res, status, body, type = "text/plain; charset=utf-8", headers = {}) {
  res.writeHead(status, { "Content-Type": type, ...headers });
  res.end(body);
}

function json(res, payload, status = 200) {
  send(res, status, JSON.stringify(payload), MIME[".json"], {
    "Cache-Control": "no-store",
  });
}

function safeJoin(root, reqPath) {
  const decoded = decodeURIComponent(reqPath.split("?")[0]);
  const clean = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const full = path.join(root, clean);
  if (!full.startsWith(root)) return null;
  return full;
}

function serveStatic(res, file) {
  const ext = path.extname(file).toLowerCase();
  const isImage = [".png", ".jpg", ".jpeg", ".webp", ".svg"].includes(ext);
  send(res, 200, fs.readFileSync(file), MIME[ext] || "application/octet-stream", {
    "Cache-Control": isImage ? "public, max-age=3600" : "no-store",
  });
}

const routes = {
  "/api/stats": (url, res, inv) => {
    json(res, {
      generatedAt: inv.generatedAt,
      counts: inv.counts,
      taxonomy: {
        version: inv.taxonomy.version,
        file: inv.taxonomy.file,
        categoryCount: inv.taxonomy.categories.length,
        pageTypeCount: inv.taxonomy.pageTypes.length,
      },
      viewportSet: inv.viewportSet,
      groups: Object.entries(GROUPS).map(([k, v]) => ({ value: k, label: v.label })),
      dimensions: DIMENSIONS,
      health: (() => {
        const h = runHealth(inv);
        return { total: h.total, bySeverity: h.bySeverity };
      })(),
    });
  },

  "/api/facets": (url, res, inv) => {
    const f = parseFilters(url.searchParams);
    json(res, { generatedAt: inv.generatedAt, filters: f, facets: computeFacets(inv, f) });
  },

  "/api/items": (url, res, inv) => {
    const f = parseFilters(url.searchParams);
    const filtered = applyFilters(inv.rows, f);
    const groups = groupRows(filtered, f.group);

    const total = filtered.length;
    let paged = groups;
    if (f.limit) {
      let remaining = f.offset + f.limit;
      let skip = f.offset;
      paged = [];
      for (const g of groups) {
        if (remaining <= 0) break;
        const items = g.items.slice(skip, skip + remaining);
        skip = Math.max(0, skip - g.items.length);
        if (items.length) {
          paged.push({ ...g, items });
          remaining -= items.length;
        }
      }
    }

    json(res, {
      generatedAt: inv.generatedAt,
      filters: f,
      total,
      groupBy: f.group,
      groupLabel: (GROUPS[f.group] || GROUPS.schema).label,
      groups: paged.map((g) => ({
        key: g.key,
        count: g.count,
        evidenceCount: g.evidenceCount,
        items: g.items.map(lightRow),
      })),
      facets: computeFacets(inv, f),
    });
  },

  "/api/coverage": (url, res, inv) => {
    json(res, { generatedAt: inv.generatedAt, ...coverage(inv) });
  },

  "/api/health": (url, res, inv) => {
    json(res, runHealth(inv));
  },

  "/api/candidates": (_url, res) => {
    json(res, loadCandidates(ROOT));
  },

  "/api/cro": (_url, res, inv) => {
    json(res, buildCro(inv));
  },

  "/api/observation": (url, res, inv) => {
    const id = url.searchParams.get("id") || "";
    const p = url.searchParams.get("path") || "";
    const found = inv.observations.find(
      (o) => (id && o.observationId === id) || (p && o.path === p)
    );
    if (!found) return json(res, { error: "observation bulunamadı", id, path: p }, 404);
    json(res, found);
  },
};

export function handleRequest(req, res) {
  const host = req.headers?.host || "localhost";
  const url = new URL(req.url || "/", `http://${host}`);
  const p = url.pathname;

  try {
    if (p.startsWith("/api/")) {
      const inv = inventory.get({ fresh: url.searchParams.get("fresh") === "1" });

      if (routes[p]) return routes[p](url, res, inv);

      if (p.startsWith("/api/schema/")) {
        const id = decodeURIComponent(p.slice("/api/schema/".length));
        const schema = inv.schemaById.get(id) || null;
        const observations = inv.obsBySchema.get(id) || [];
        if (!schema && observations.length === 0) {
          return json(res, { error: "şema bulunamadı", id }, 404);
        }
        return json(res, {
          generatedAt: inv.generatedAt,
          id,
          schema,
          observations,
          orphan: !schema,
        });
      }

      return json(res, { error: "bilinmeyen endpoint", path: p }, 404);
    }

    if (p === "/" || p === "/index.html") {
      return serveStatic(res, path.join(PUBLIC_DIR, "index.html"));
    }

    let file = safeJoin(PUBLIC_DIR, p);
    if (!file || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      file = safeJoin(ROOT, p);
    }
    if (!file || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      if (p.startsWith("/evidence/")) {
        const external = externalEvidenceUrl(p);
        if (external) {
          res.writeHead(302, {
            Location: external,
            "Cache-Control": "public, max-age=3600",
          });
          res.end();
          return;
        }
      }
      return send(res, 404, "Not found");
    }
    return serveStatic(res, file);
  } catch (e) {
    return json(res, { error: String(e && e.stack ? e.stack : e) }, 500);
  }
}

export function closeInventory() {
  inventory.close();
}
