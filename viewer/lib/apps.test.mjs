import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { loadApps } from "./apps.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const APPS_DIR = join(ROOT, "apps");

const TOP_LEVEL = [
  "id",
  "kategori",
  "varyant",
  "scope",
  "amac",
  "sorun",
  "link",
  "yuzey",
  "entegrasyon",
  "ikasTur",
  "ikasOlaylar",
  "ikasSayfa",
  "ikasLink",
  "ikasSablon",
  "ikasHedef",
  "ikasKapsam",
  "ikasAksiyon",
  "ikasWebhook",
  "ayarlar",
  "dataBindings",
  "actions",
  "hookNoktalari",
  "bagimliliklar",
  "ikasKarsilik",
  "tespit",
];

describe("apps inventory", () => {
  it("loads all apps without parse errors", () => {
    const data = loadApps(ROOT);
    assert.equal(data.parseErrors.length, 0, data.parseErrors.map((e) => e.error).join("; "));
    assert.ok(data.apps.length >= 28);
  });

  it("every apps/*.json has exactly 25 contract keys (+ optional _ keys)", () => {
    const files = readdirSync(APPS_DIR).filter((n) => n.endsWith(".json") && !n.startsWith("_"));
    assert.ok(files.length > 0);

    for (const name of files) {
      const schema = JSON.parse(readFileSync(join(APPS_DIR, name), "utf8"));
      const id = name.replace(/\.json$/, "");
      assert.equal(schema.id, id, `${name}: id must match filename`);

      const keys = Object.keys(schema).filter((k) => !k.startsWith("_"));
      assert.deepEqual(
        keys.sort(),
        [...TOP_LEVEL].sort(),
        `${name}: must have exactly 25 top-level keys`
      );

      assert.ok(schema.entegrasyon?.shopify && Array.isArray(schema.entegrasyon.shopify));
      assert.ok(schema.entegrasyon?.ikas && Array.isArray(schema.entegrasyon.ikas));
      assert.ok(
        schema.ikasLink === "yok" || /^https:\/\//.test(schema.ikasLink),
        `${name}: ikasLink`
      );
      assert.ok(["starter", "webhook-listener", "yok"].includes(schema.ikasSablon));
      assert.ok(
        ["studio-section", "storefront-script", "admin-iframe", "webhook", "yok"].includes(
          schema.ikasHedef
        )
      );
      assert.ok(schema.tespit && typeof schema.tespit.shopify === "string");
      assert.ok(typeof schema.tespit.ikas === "string");
    }
  });
});
