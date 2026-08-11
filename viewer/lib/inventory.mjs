/**
 * Envanter okuma + cache + fs.watch invalidation.
 * Disk tek kaynak; cache sadece hız için.
 */

import fs from "fs";
import path from "path";

const VIEWPORTS = ["375", "768", "1440"];

export function createInventory(root) {
  let cache = null;
  const watchers = [];

  function invalidate() {
    cache = null;
  }

  function watchDir(dir) {
    if (!fs.existsSync(dir)) return;
    try {
      const w = fs.watch(dir, { recursive: true }, invalidate);
      w.on("error", () => {});
      watchers.push(w);
    } catch {
      // recursive watch desteklenmiyorsa sessizce geç — /api/*?fresh=1 ile aşılır
    }
  }

  for (const d of ["sections", "observations", "evidence", "taxonomy"]) {
    watchDir(path.join(root, d));
  }

  function get({ fresh = false } = {}) {
    if (fresh) invalidate();
    if (!cache) cache = build(root);
    return cache;
  }

  function close() {
    for (const w of watchers) {
      try {
        w.close();
      } catch {}
    }
  }

  return { get, invalidate, close };
}

function walk(dir, pred, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const full = path.join(dir, name);
    let st;
    try {
      st = fs.statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) walk(full, pred, acc);
    else if (pred(full, name)) acc.push(full);
  }
  return acc;
}

function readJson(file) {
  try {
    return { data: JSON.parse(fs.readFileSync(file, "utf8")), error: null };
  } catch (e) {
    return { data: null, error: String(e.message || e) };
  }
}

function parseViewport(evidencePath) {
  // {slug}.{375|768|1440}.png
  const m = /\.(\d{2,5})\.(png|jpg|jpeg|webp)$/i.exec(evidencePath);
  return m ? m[1] : null;
}

function loadTaxonomy(root) {
  const dir = path.join(root, "taxonomy");
  if (!fs.existsSync(dir)) return { version: null, categories: [], pageTypes: [] };
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .sort();
  const latest = files[files.length - 1];
  if (!latest) return { version: null, categories: [], pageTypes: [] };
  const { data } = readJson(path.join(dir, latest));
  return {
    version: data?.version || latest.replace(/\.json$/, ""),
    file: `taxonomy/${latest}`,
    categories: data?.categories || [],
    pageTypes: data?.pageTypes || [],
    candidateQueue: data?.candidateQueue || [],
  };
}

function build(root) {
  const rel = (p) => path.relative(root, p).split(path.sep).join("/");
  const parseErrors = [];

  const schemas = walk(
    path.join(root, "sections"),
    (f) => f.endsWith(".json") && !path.basename(f).startsWith("_")
  ).map((f) => {
    const { data, error } = readJson(f);
    if (error) parseErrors.push({ path: rel(f), error });
    const d = data || {};
    const styleKnobs = d.styleKnobs || {};
    return {
      path: rel(f),
      id: d.id || path.basename(f, ".json"),
      kategori: d.kategori || "",
      tur: d.tur || "",
      varyant: d.varyant || "",
      scope: d.scope || "",
      amac: d.amac || "",
      slotCount: Object.keys(d.slots || {}).length,
      actionCount: (d.actions || []).length,
      dataBindingCount: (d.dataBindings || []).length,
      hookCount: (d.hookNoktalari || []).length,
      styleKnobKeys: Object.keys(styleKnobs),
      data: d,
    };
  });

  const observations = walk(
    path.join(root, "observations"),
    (f) => f.endsWith(".json") && !path.basename(f).startsWith("_")
  ).map((f) => {
    const { data, error } = readJson(f);
    if (error) parseErrors.push({ path: rel(f), error });
    const d = data || {};
    const evidence = (d.evidence || []).map((e) => ({
      path: e,
      exists: fs.existsSync(path.join(root, e)),
      viewport: parseViewport(e),
      bytes: (() => {
        try {
          return fs.statSync(path.join(root, e)).size;
        } catch {
          return 0;
        }
      })(),
    }));
    const present = evidence.filter((e) => e.exists);
    const presentVps = present.map((e) => e.viewport).filter(Boolean);
    const missingVps = VIEWPORTS.filter((v) => !presentVps.includes(v));
    return {
      path: rel(f),
      observationId:
        d.observationId ||
        `${d.kaynak || "?"}.${d.preset || "?"}.${d.sayfa || "?"}.${d.schemaId || "?"}`,
      schemaId: d.schemaId || "",
      kaynak: d.kaynak || "",
      preset: d.preset || "",
      sayfa: d.sayfa || "",
      selector: d.selector || "",
      url: d.url || d.capture?.url || "",
      notlar: d.notlar || "",
      delta: d.delta || "",
      evidence,
      presentViewports: presentVps,
      missingViewports: missingVps,
      evidenceStatus:
        present.length === 0
          ? "none"
          : missingVps.length === 0
            ? "full"
            : "partial",
      capture: d.capture || null,
      data: d,
    };
  });

  const schemaById = new Map(schemas.map((s) => [s.id, s]));
  const obsBySchema = new Map();
  for (const o of observations) {
    if (!obsBySchema.has(o.schemaId)) obsBySchema.set(o.schemaId, []);
    obsBySchema.get(o.schemaId).push(o);
  }

  const taxonomy = loadTaxonomy(root);

  // Satırlar = filtre/gruplama birimi.
  // Her gözlem bir satır; gözlemi olmayan şema da "boşluk" satırı olarak girer.
  const rows = [];
  for (const o of observations) {
    const s = schemaById.get(o.schemaId) || null;
    rows.push({
      kind: "observation",
      key: o.observationId,
      schemaId: o.schemaId,
      schemaPath: s?.path || null,
      observationId: o.observationId,
      observationPath: o.path,
      kaynak: o.kaynak,
      preset: o.preset,
      sayfa: o.sayfa,
      kategori: s?.kategori || s?.tur || "",
      scope: s?.scope || "",
      varyant: s?.varyant || "",
      amac: s?.amac || "",
      selector: o.selector,
      url: o.url,
      notlar: o.notlar,
      evidenceStatus: o.evidenceStatus,
      viewports: o.presentViewports,
      missingViewports: o.missingViewports,
      evidence: o.evidence
        .filter((e) => e.exists)
        .map((e) => ({ path: e.path, viewport: e.viewport })),
      evidenceCount: o.evidence.filter((e) => e.exists).length,
      hasSchema: Boolean(s),
    });
  }
  for (const s of schemas) {
    if ((obsBySchema.get(s.id) || []).length === 0) {
      rows.push({
        kind: "schema-only",
        key: `schema:${s.id}`,
        schemaId: s.id,
        schemaPath: s.path,
        observationId: null,
        observationPath: null,
        kaynak: "",
        preset: "",
        sayfa: "",
        kategori: s.kategori || s.tur || "",
        scope: s.scope || "",
        varyant: s.varyant || "",
        amac: s.amac || "",
        selector: "",
        url: "",
        notlar: "",
        evidenceStatus: "none",
        viewports: [],
        missingViewports: VIEWPORTS,
        evidence: [],
        evidenceCount: 0,
        hasSchema: true,
      });
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    root,
    viewportSet: VIEWPORTS,
    taxonomy,
    schemas,
    observations,
    rows,
    schemaById,
    obsBySchema,
    parseErrors,
    counts: {
      schemas: schemas.length,
      observations: observations.length,
      evidenceFiles: observations.reduce(
        (n, o) => n + o.evidence.filter((e) => e.exists).length,
        0
      ),
      fullEvidence: observations.filter((o) => o.evidenceStatus === "full").length,
      partialEvidence: observations.filter((o) => o.evidenceStatus === "partial")
        .length,
      noEvidence: observations.filter((o) => o.evidenceStatus === "none").length,
      themes: new Set(observations.map((o) => o.kaynak).filter(Boolean)).size,
      pages: new Set(observations.map((o) => o.sayfa).filter(Boolean)).size,
    },
  };
}

export { VIEWPORTS };
