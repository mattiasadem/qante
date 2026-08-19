/**
 * candidates/ klasörünü okur — aday kategoriler + sığmayanlar + takip listeleri.
 * Markdown dosyalarından hafif yapı çıkarır (bağımlılıksız).
 *
 * Status sütunlu tablolar (shopify-themes.md, dtc-69-brands.md) `lists` olur;
 * Aday sekmesi yalnız ADAY + sığmayanlar kullanır.
 */

import fs from "fs";
import path from "path";

const LIST_GROUP_BY_FILE = {
  "shopify-themes.md": "Shopify temalar",
  "dtc-69-brands.md": "DTC-69",
  "shopify-apps.md": "Shopify appler",
};

export function loadCandidates(root) {
  const dir = path.join(root, "candidates");
  if (!fs.existsSync(dir)) {
    return { generatedAt: new Date().toISOString(), candidates: [], misfits: [], lists: [], files: [] };
  }

  const files = fs
    .readdirSync(dir)
    .filter((n) => n.endsWith(".md") && n !== "README.md")
    .sort();

  const candidates = [];
  const misfits = [];
  const lists = [];
  const docs = [];

  for (const name of files) {
    const full = path.join(dir, name);
    const raw = fs.readFileSync(full, "utf8");
    const rel = `candidates/${name}`;
    const title = (raw.match(/^#\s+(.+)$/m) || [])[1]?.trim() || name;
    const slug =
      (raw.match(/^#\s*ADAY:\s*([^\s]+)/im) || [])[1] ||
      name.replace(/\.md$/, "");

    const tables = parseAllMdTables(raw);
    const tableRows = tables[0]?.rows || [];
    const isMisfitDoc =
      /sığmayan|sigmayan/i.test(name) || /sığmayan/i.test(title);

    if (isMisfitDoc && tableRows.length) {
      for (const row of tableRows) {
        const gozlem = cell(row, ["gözlem", "gozlem", "#"]) || cell(row, Object.keys(row)[1] || "");
        const neden = cell(row, ["neden section değil?", "neden", "neden section degil?"]);
        const karar = cell(row, ["karar önerisi", "karar onerisi", "karar"]);
        const num = cell(row, ["#", "no", "num"]);
        if (!gozlem || /^[-—–]+$/.test(gozlem)) continue;
        if (gozlem === "#" || gozlem.toLowerCase() === "gözlem") continue;
        misfits.push({
          id: `misfit:${slug}:${num || misfits.length + 1}`,
          kind: "misfit",
          sourceFile: rel,
          sourceTitle: title,
          num: num || String(misfits.length + 1),
          gozlem,
          neden: neden || "",
          karar: karar || "",
        });
      }
      docs.push({ path: rel, title, kind: "misfit-doc", rowCount: tableRows.length });
      continue;
    }

    if (/^#\s*ADAY:/im.test(raw) || /aday/i.test(name)) {
      candidates.push({
        id: `candidate:${slug}`,
        kind: "candidate",
        slug,
        title,
        sourceFile: rel,
        durum: meta(raw, "Durum") || "",
        kaynak: meta(raw, "Kaynak") || "",
        gerekce: sectionBody(raw, "Gerekçe") || sectionBody(raw, "Gerekce") || "",
        ornekler: sectionBody(raw, "Örnekler") || sectionBody(raw, "Ornekler") || "",
        oneri: sectionBody(raw, "Öneri") || sectionBody(raw, "Oneri") || "",
        karar: sectionBody(raw, "Karar") || "",
        raw,
      });
      docs.push({ path: rel, title, kind: "candidate", slug });
      continue;
    }

    const statusTables = tables.filter((t) => t.headers.includes("status"));
    if (statusTables.length) {
      const group = LIST_GROUP_BY_FILE[name] || title;
      let added = 0;
      for (const table of statusTables) {
        for (const row of table.rows) {
          const item = listRowFromCells(row, { rel, title, group, slug, index: lists.length });
          if (!item) continue;
          lists.push(item);
          added++;
        }
      }
      docs.push({ path: rel, title, kind: "list-doc", group, rowCount: added });
      continue;
    }

    docs.push({ path: rel, title, kind: "doc", raw });
  }

  return {
    generatedAt: new Date().toISOString(),
    candidates,
    misfits,
    lists,
    files: docs,
    counts: {
      candidates: candidates.length,
      misfits: misfits.length,
      lists: lists.length,
      files: docs.length,
    },
  };
}

function listRowFromCells(row, { rel, title, group, slug, index }) {
  const num = cell(row, ["#", "no", "num"]);
  const status = normalizeListStatus(cell(row, ["status", "durum"]));
  const theme = stripMd(cell(row, ["theme", "tema"]));
  const domain = stripMd(cell(row, ["domain", "site"]));
  const name = theme || domain || stripMd(cell(row, ["app", "name", "ad"]));
  if (!name || name === "#" || /^[-—–]+$/.test(name)) return null;

  const walkUrl =
    firstUrl(cell(row, ["walk url", "walk", "demo"])) ||
    firstUrl(cell(row, ["url"]));
  const notes = cell(row, ["notes", "not", "notlar"]);
  const itemSlug = cell(row, ["slug"]) || kebab(name);

  return {
    id: `list:${slug}:${num || index + 1}`,
    kind: "list",
    group,
    sourceFile: rel,
    sourceTitle: title,
    num: num || String(index + 1),
    status,
    title: name,
    theme: theme || "",
    domain: domain || "",
    developer: stripMd(cell(row, ["developer", "geliştirici", "gelistirici"])),
    price: cell(row, ["price", "fiyat"]),
    walkUrl,
    slug: itemSlug,
    notes,
    storeUrl: firstUrl(cell(row, ["theme"])) || firstUrl(notes),
  };
}

function normalizeListStatus(raw) {
  const s = String(raw || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
  if (s === "done") return "done";
  if (s === "in progress" || s === "in-progress") return "in progress";
  return "";
}

function kebab(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function stripMd(s) {
  return String(s || "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .trim();
}

function firstUrl(s) {
  const md = String(s || "").match(/\((https?:\/\/[^)\s]+)\)/);
  if (md) return md[1];
  const bare = String(s || "").match(/https?:\/\/[^\s)|]+/);
  return bare ? bare[0] : "";
}

function meta(raw, label) {
  const re = new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`, "i");
  const m = raw.match(re);
  return m ? m[1].trim() : "";
}

function sectionBody(raw, heading) {
  const re = new RegExp(
    `##\\s+${heading}\\s*\\n([\\s\\S]*?)(?=\\n##\\s+|$)`,
    "i"
  );
  const m = raw.match(re);
  return m ? m[1].trim() : "";
}

function parseAllMdTables(raw) {
  const lines = raw.split(/\r?\n/);
  const tables = [];
  let headers = null;
  let rows = [];

  const flush = () => {
    if (headers) tables.push({ headers, rows });
    headers = null;
    rows = [];
  };

  for (const line of lines) {
    if (!/^\|.+\|$/.test(line.trim())) {
      if (headers) flush();
      continue;
    }
    const cells = line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
    if (/^[-:|\s]+$/.test(line)) continue;
    if (!headers) {
      headers = cells.map((h) => h.toLowerCase());
      continue;
    }
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = cells[i] || "";
    });
    rows.push(obj);
  }
  flush();
  return tables;
}

function cell(row, keys) {
  const list = Array.isArray(keys) ? keys : [keys];
  for (const k of list) {
    if (row[k] != null && row[k] !== "") return String(row[k]).trim();
  }
  return "";
}
