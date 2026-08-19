#!/usr/bin/env node
/**
 * QANTE AppSchema doğrulayıcı — app-schema-standard.md sözleşmesi.
 *
 *   node scripts/validate-apps.mjs
 *   node scripts/validate-apps.mjs --errors-only
 *   node scripts/validate-apps.mjs --json
 *
 * Çıkış kodu: ERROR varsa 1, yoksa 0 (WARN çıkışı etkilemez).
 */

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
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
  "ayarlar",
  "dataBindings",
  "actions",
  "hookNoktalari",
  "bagimliliklar",
  "ikasKarsilik",
];

const KATEGORI = new Set([
  "pixel",
  "capture",
  "reviews",
  "loyalty",
  "merchandising",
  "bar",
  "payments",
  "builder",
  "wishlist",
]);

const SCOPES = new Set(["head", "overlay", "in-flow", "checkout", "page"]);

const YUZEY = new Set([
  "announcement_bar",
  "free_shipping_bar",
  "popup_modal",
  "flyout",
  "spin_wheel",
  "embedded_form",
  "review_stars",
  "review_widget",
  "review_carousel",
  "ugc_gallery",
  "review_floating_tab",
  "bnpl_messaging",
  "loyalty_launcher",
  "loyalty_points_badge",
  "loyalty_page",
  "wishlist_button",
  "wishlist_drawer",
  "wishlist_page",
  "product_recs",
  "cart_drawer",
  "social_proof_toast",
  "trust_badge",
]);

const ENTEGRASYON = new Set([
  "web-pixel",
  "app-embed",
  "app-block",
  "script-tag",
  "checkout-extension",
  "page-runtime",
]);

const DATA_SOURCES = new Set([
  "DataSource.product",
  "DataSource.productList",
  "DataSource.collection",
  "DataSource.collectionList",
  "DataSource.cart",
  "DataSource.customer",
  "DataSource.navigation",
  "DataSource.searchResults",
  "DataSource.searchSuggest",
  "DataSource.compareList",
  "DataSource.blogList",
  "DataSource.blogPost",
  "DataSource.paymentMethods",
]);

const HOOK_BOLGE = new Set([
  "section",
  "header",
  "footer",
  "announcement",
  "menu",
  "search",
  "spotlight",
  "cart",
  "cartDrawer",
  "quickView",
  "compare",
  "productCard",
  "buyBox",
  "gallery",
  "form",
  "newsletter",
  "bundle",
  "feedItem",
  "hotspot",
]);

const HOOK_KONUM = new Set([
  "before",
  "after",
  "aboveItems",
  "belowItems",
  "badge",
  "footer",
  "utility",
]);

const PLATFORM_WORDS = [
  "shopify",
  "ikas",
  "woocommerce",
  "magento",
  "bigcommerce",
  "shopware",
];

const ACTION_RE =
  /^(navigate|yok|emit:[a-zA-Z]+\.[a-zA-Z]+|listen:[a-zA-Z]+\.[a-zA-Z]+|filter:[a-zA-Z.]+)$/;

const SLOT_TIPS = [
  "text",
  "richtext",
  "image",
  "video",
  "icon",
  "link",
  "button",
  "number",
  "boolean",
  "datetime",
  "ref",
  "object",
  "array",
];

const SLOT_META = ["tip", "zorunlu", "maxLen", "min", "max", "hedef", "item", "alanlar", "not"];
const REF_HEDEF = ["product", "collection", "menu", "blog", "page", "promo", "brand"];
const LINK_RE = /^https:\/\/.+/;

const errorsOnly = process.argv.includes("--errors-only");
const jsonOut = process.argv.includes("--json");

function err(file, msg) {
  return { file, level: "ERROR", msg };
}

function warn(file, msg) {
  return { file, level: "WARN", msg };
}

function listAppFiles() {
  if (!existsSync(APPS_DIR)) return [];
  return readdirSync(APPS_DIR)
    .filter((n) => n.endsWith(".json") && !n.startsWith("_"))
    .sort();
}

function checkAyarSlots(slots, file, issues, path = "") {
  for (const [name, slot] of Object.entries(slots)) {
    const at = path + name;
    if (typeof slot !== "object" || slot === null || Array.isArray(slot)) {
      issues.push(err(file, `ayarlar slot "${at}" obje değil`));
      continue;
    }
    if (!slot.tip) {
      issues.push(err(file, `ayarlar slot "${at}" tip eksik`));
    } else if (!SLOT_TIPS.includes(slot.tip)) {
      issues.push(err(file, `ayarlar slot "${at}" geçersiz tip "${slot.tip}"`));
    }
    if (!("zorunlu" in slot)) {
      issues.push(err(file, `ayarlar slot "${at}" zorunlu eksik`));
    } else if (typeof slot.zorunlu !== "boolean") {
      issues.push(err(file, `ayarlar slot "${at}" zorunlu boolean olmalı`));
    }
    for (const k of Object.keys(slot)) {
      if (!SLOT_META.includes(k)) {
        issues.push(warn(file, `ayarlar slot "${at}" bilinmeyen meta "${k}"`));
      }
    }
    if (slot.tip === "ref") {
      if (!slot.hedef) issues.push(err(file, `ayarlar slot "${at}" ref hedef eksik`));
      else if (!REF_HEDEF.includes(slot.hedef)) {
        issues.push(err(file, `ayarlar slot "${at}" geçersiz ref hedef "${slot.hedef}"`));
      }
    }
    if (slot.tip === "array" && slot.item && typeof slot.item === "object") {
      checkAyarSlots(slot.item, file, issues, `${at}.`);
    }
    if (slot.tip === "object" && slot.alanlar && typeof slot.alanlar === "object") {
      checkAyarSlots(slot.alanlar, file, issues, `${at}.`);
    }
  }
}

function validateApp(filePath) {
  const file = basename(filePath);
  const issues = [];
  let raw;
  let schema;

  try {
    raw = readFileSync(filePath, "utf8");
    schema = JSON.parse(raw);
  } catch (e) {
    issues.push(err(file, `JSON parse: ${e.message}`));
    return issues;
  }

  const id = basename(file, ".json");
  if (schema.id !== id) {
    issues.push(err(file, `id "${schema.id}" !== dosya adı "${id}"`));
  }

  const keys = Object.keys(schema);
  const required = new Set(TOP_LEVEL);
  for (const k of keys) {
    if (k.startsWith("_")) continue;
    if (!required.has(k)) {
      issues.push(err(file, `izin verilmeyen anahtar: "${k}" (yalnızca _ ile başlayan ekstra)`));
    }
  }
  for (const k of TOP_LEVEL) {
    if (!(k in schema)) {
      issues.push(err(file, `eksik zorunlu alan: "${k}"`));
    }
  }

  if (!KATEGORI.has(schema.kategori)) {
    issues.push(err(file, `geçersiz kategori: "${schema.kategori}"`));
  }

  if (!SCOPES.has(schema.scope)) {
    issues.push(err(file, `geçersiz scope: "${schema.scope}"`));
  }

  if (!Array.isArray(schema.yuzey)) {
    issues.push(err(file, "yuzey array olmalı"));
  } else {
    for (const y of schema.yuzey) {
      if (!YUZEY.has(y)) issues.push(err(file, `geçersiz yuzey: "${y}"`));
    }
    if (schema.scope === "head" && schema.yuzey.length > 0) {
      issues.push(err(file, "scope head iken yuzey [] olmalı"));
    }
  }

  if (!Array.isArray(schema.entegrasyon) || schema.entegrasyon.length === 0) {
    issues.push(err(file, "entegrasyon boş olamaz"));
  } else {
    for (const e of schema.entegrasyon) {
      if (!ENTEGRASYON.has(e)) issues.push(err(file, `geçersiz entegrasyon: "${e}"`));
    }
  }

  if (!Array.isArray(schema.dataBindings)) {
    issues.push(err(file, "dataBindings array olmalı"));
  } else {
    for (const b of schema.dataBindings) {
      if (!b || typeof b !== "object") {
        issues.push(err(file, "dataBindings elemanı obje olmalı"));
        continue;
      }
      if (!b.name || !b.source) {
        issues.push(err(file, "dataBinding name ve source zorunlu"));
      }
      if (!DATA_SOURCES.has(b.source)) {
        issues.push(err(file, `geçersiz DataSource: "${b.source}"`));
      }
      const blob = JSON.stringify(b).toLowerCase();
      for (const w of PLATFORM_WORDS) {
        if (blob.includes(w)) {
          issues.push(err(file, `dataBindings içinde platform adı: "${w}"`));
        }
      }
    }
  }

  if (!Array.isArray(schema.actions) || schema.actions.length === 0) {
    issues.push(err(file, "actions boş [] yasak — yoksa [\"yok\"] kullan"));
  } else {
    for (const a of schema.actions) {
      if (!ACTION_RE.test(a)) {
        issues.push(err(file, `geçersiz action: "${a}"`));
      }
    }
    if (schema.actions.includes("yok") && schema.actions.length > 1) {
      issues.push(err(file, "yok tek başına kullanılmalı"));
    }
  }

  if (!Array.isArray(schema.hookNoktalari)) {
    issues.push(err(file, "hookNoktalari array olmalı"));
  } else {
    for (const h of schema.hookNoktalari) {
      const m = /^mount:([^.]+)\.(.+)$/.exec(h);
      if (!m) {
        issues.push(err(file, `geçersiz hook: "${h}" — mount:{bolge}.{konum}`));
        continue;
      }
      if (!HOOK_BOLGE.has(m[1])) {
        issues.push(err(file, `geçersiz hook bolge: "${m[1]}"`));
      }
      if (!HOOK_KONUM.has(m[2])) {
        issues.push(err(file, `geçersiz hook konum: "${m[2]}"`));
      }
    }
    if (schema.scope === "head" && schema.hookNoktalari.length > 0) {
      issues.push(err(file, "scope head iken hookNoktalari [] olmalı"));
    }
  }

  if (!Array.isArray(schema.bagimliliklar)) {
    issues.push(err(file, "bagimliliklar array olmalı"));
  }

  if (typeof schema.ikasKarsilik !== "string" || !schema.ikasKarsilik.trim()) {
    issues.push(err(file, "ikasKarsilik boş string olamaz — bilinmiyorsa \"yok\""));
  }

  if (typeof schema.amac !== "string" || !schema.amac.trim()) {
    issues.push(err(file, "amac boş olamaz"));
  } else if (schema.amac.includes("\n")) {
    issues.push(warn(file, "amac tek cümle olmalı"));
  }

  if (typeof schema.sorun !== "string" || !schema.sorun.trim()) {
    issues.push(err(file, "sorun boş olamaz"));
  } else if (schema.sorun.split(/[.!?]/).filter(Boolean).length > 3) {
    issues.push(warn(file, "sorun 1–2 cümle olmalı"));
  }

  if (typeof schema.link !== "string" || !LINK_RE.test(schema.link.trim())) {
    issues.push(err(file, "link geçerli https:// URL olmalı"));
  }

  if (!schema.ayarlar || typeof schema.ayarlar !== "object" || Array.isArray(schema.ayarlar)) {
    issues.push(err(file, "ayarlar obje olmalı"));
  } else {
    const isPurePixel = schema.kategori === "pixel" && schema.scope === "head";
    const keys = Object.keys(schema.ayarlar);
    if (isPurePixel) {
      if (keys.length > 0) {
        issues.push(err(file, "saf piksel (kategori pixel + scope head) iken ayarlar {} olmalı"));
      }
    } else if (keys.length === 0) {
      issues.push(err(file, "ayarlar boş {} yalnızca saf piksellerde"));
    } else {
      checkAyarSlots(schema.ayarlar, file, issues);
    }
  }

  if (typeof schema.varyant !== "string" || !schema.varyant.trim()) {
    issues.push(err(file, "varyant boş olamaz"));
  }

  const expectedPrefix = `app-${schema.kategori}-`;
  if (!id.startsWith(expectedPrefix)) {
    issues.push(
      err(file, `id "${id}" app-{kategori}-{slug} formatında olmalı (beklenen prefix: ${expectedPrefix})`)
    );
  }

  return issues;
}

function main() {
  const files = listAppFiles();
  const allIssues = [];

  for (const f of files) {
    allIssues.push(...validateApp(join(APPS_DIR, f)));
  }

  const errors = allIssues.filter((i) => i.level === "ERROR");
  const warnings = allIssues.filter((i) => i.level === "WARN");

  if (jsonOut) {
    console.log(
      JSON.stringify(
        {
          ok: errors.length === 0,
          appCount: files.length,
          errors: errors.length,
          warnings: warnings.length,
          issues: allIssues,
        },
        null,
        2
      )
    );
  } else {
    console.log(`validate-apps: ${files.length} app, ${errors.length} error, ${warnings.length} warn`);
    for (const i of allIssues) {
      if (errorsOnly && i.level !== "ERROR") continue;
      console.log(`  [${i.level}] ${i.file}: ${i.msg}`);
    }
    if (errors.length) {
      console.error("validate-apps: FAILED");
    } else {
      console.log("validate-apps: OK");
    }
  }

  process.exit(errors.length ? 1 : 0);
}

main();
