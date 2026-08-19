/**
 * apps/ klasörünü okur — AppSchema envanteri.
 */

import fs from "fs";
import path from "path";

export function loadApps(root) {
  const dir = path.join(root, "apps");
  if (!fs.existsSync(dir)) {
    return {
      generatedAt: new Date().toISOString(),
      apps: [],
      counts: { total: 0, byKategori: {}, byScope: {} },
      parseErrors: [],
    };
  }

  const files = fs
    .readdirSync(dir)
    .filter((n) => n.endsWith(".json") && !n.startsWith("_"))
    .sort();

  const apps = [];
  const parseErrors = [];
  const byKategori = {};
  const byScope = {};

  for (const name of files) {
    const full = path.join(dir, name);
    const rel = `apps/${name}`;
    try {
      const schema = JSON.parse(fs.readFileSync(full, "utf8"));
      const id = name.replace(/\.json$/, "");
      if (schema.id !== id) {
        parseErrors.push({ file: rel, error: `id mismatch: ${schema.id}` });
      }
      apps.push({
        id: schema.id || id,
        path: rel,
        kategori: schema.kategori || "",
        varyant: schema.varyant || "",
        scope: schema.scope || "",
        amac: schema.amac || "",
        yuzey: schema.yuzey || [],
        entegrasyon: schema.entegrasyon || [],
        ikasKarsilik: schema.ikasKarsilik || "",
        schema,
      });
      byKategori[schema.kategori] = (byKategori[schema.kategori] || 0) + 1;
      byScope[schema.scope] = (byScope[schema.scope] || 0) + 1;
    } catch (e) {
      parseErrors.push({ file: rel, error: String(e.message || e) });
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    apps,
    appById: Object.fromEntries(apps.map((a) => [a.id, a])),
    counts: {
      total: apps.length,
      byKategori,
      byScope,
    },
    parseErrors,
  };
}
