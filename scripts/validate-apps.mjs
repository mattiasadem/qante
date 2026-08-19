#!/usr/bin/env node
/**
 * QANTE AppSchema doğrulayıcı — app-schema-standard.md sözleşmesi (v0.3 + ikas crawl).
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
  "ikasTur",
  "ikasOlaylar",
  "ikasSayfa",
  "ikasLink",
  "ikasSablon",
  "ikasHedef",
  "ikasKapsam",
  "ikasAksiyon",
  "ikasWebhook",
  "ikasYayin",
  "ikasHost",
  "ayarlar",
  "dataBindings",
  "actions",
  "hookNoktalari",
  "bagimliliklar",
  "ikasKarsilik",
  "tespit",
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

const IKAS_TUR = new Set(["admin", "ozel", "yok"]);

const IKAS_SABLON = new Set([
  "starter",
  "webhook-listener",
  "dashboard-actions",
  "starter-with-subscription",
  "yok",
]);

const IKAS_YAYIN = new Set(["herkese-acik", "gizli", "izin-verilen-magazalar", "yok"]);

const IKAS_HOST = new Set(["admin-iframe", "external", "yok"]);

const IKAS_HEDEF = new Set([
  "studio-section",
  "storefront-script",
  "admin-iframe",
  "webhook",
  "yok",
]);

const IKAS_KAPSAM = new Set([
  "read_products",
  "write_products",
  "read_orders",
  "write_orders",
  "read_customers",
  "write_customers",
  "read_campaigns",
  "write_campaigns",
  "read_inventories",
  "write_inventories",
]);

const IKAS_AKSIYON_YER = new Set([
  "product-edit",
  "order-view",
  "order-package",
  "order-list-bulk",
]);

const IKAS_AKSIYON_TIP = new Set(["iframe", "api"]);

const IKAS_WEBHOOK = new Set([
  "store/order/created",
  "store/order/updated",
  "store/product/created",
  "store/product/updated",
  "store/customer/created",
  "store/customer/updated",
  "store/customer/statusUpdated",
  "store/stock/created",
  "store/stock/updated",
  "store/app/payment",
  "store/app/deleted",
]);

const SHOPIFY_ENTEGRASYON = new Set([
  "web-pixel",
  "app-embed",
  "app-block",
  "script-tag",
  "checkout-extension",
  "page-runtime",
]);

const IKAS_ENTEGRASYON = new Set([
  "admin-iframe",
  "admin-action-iframe",
  "admin-action-api",
  "storefront-js-script",
  "webhook",
  "admin-graphql",
]);

const DEPRECATED_IKAS_ENTEGRASYON = new Set(["storefront-script", "admin-action"]);

const IKAS_EVENT_TYPE = new Set([
  "PAGE_VIEW",
  "PRODUCT_VIEW",
  "ADD_TO_CART",
  "REMOVE_FROM_CART",
  "BEGIN_CHECKOUT",
  "CHECKOUT_STEP",
  "COMPLETE_CHECKOUT",
  "ADD_TO_WISHLIST",
  "SEARCH",
  "VIEW_CART",
  "VIEW_CATEGORY",
  "VIEW_SEARCH_RESULTS",
  "CUSTOMER_REGISTER",
  "CUSTOMER_LOGIN",
  "CUSTOMER_LOGOUT",
  "CUSTOMER_VISIT",
  "CONTACT_FORM",
]);

const IKAS_PAGE_TYPE = new Set([
  "INDEX",
  "CATEGORY",
  "BRAND",
  "PRODUCT",
  "CUSTOM",
  "ACCOUNT",
  "CART",
  "CHECKOUT",
  "SEARCH",
]);

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

const SHOPIFY_ONLY_INTEGRATIONS = new Set([
  "web-pixel",
  "app-embed",
  "app-block",
  "script-tag",
  "checkout-extension",
  "page-runtime",
]);

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

function validateEntegrasyon(file, entegrasyon, issues) {
  if (!entegrasyon || typeof entegrasyon !== "object" || Array.isArray(entegrasyon)) {
    issues.push(err(file, "entegrasyon { shopify, ikas } obje olmalı"));
    return;
  }
  for (const key of ["shopify", "ikas"]) {
    if (!Array.isArray(entegrasyon[key])) {
      issues.push(err(file, `entegrasyon.${key} array olmalı`));
      return;
    }
  }
  for (const e of entegrasyon.shopify) {
    if (!SHOPIFY_ENTEGRASYON.has(e)) {
      issues.push(err(file, `geçersiz shopify entegrasyon: "${e}"`));
    }
  }
  for (const e of entegrasyon.ikas) {
    if (DEPRECATED_IKAS_ENTEGRASYON.has(e)) {
      issues.push(
        err(
          file,
          `deprecated ikas entegrasyon "${e}" — use storefront-js-script / admin-action-iframe / admin-action-api`
        )
      );
    }
    if (!IKAS_ENTEGRASYON.has(e)) {
      issues.push(err(file, `geçersiz ikas entegrasyon: "${e}"`));
    }
    if (SHOPIFY_ONLY_INTEGRATIONS.has(e)) {
      issues.push(err(file, `ikas tarafında Shopify entegrasyonu yasak: "${e}"`));
    }
  }
  const forbiddenOnIkas = ["app-block", "app-embed", "web-pixel", "script-tag", "page-runtime"];
  for (const e of entegrasyon.ikas) {
    if (forbiddenOnIkas.includes(e)) {
      issues.push(err(file, `ikas tarafında "${e}" yasak — docs'ta theme app extension yok`));
    }
  }
}

function validateApp(filePath) {
  const file = basename(filePath);
  const issues = [];
  let schema;

  try {
    schema = JSON.parse(readFileSync(filePath, "utf8"));
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

  if (!IKAS_TUR.has(schema.ikasTur)) {
    issues.push(err(file, `geçersiz ikasTur: "${schema.ikasTur}"`));
  }

  if (!Array.isArray(schema.ikasOlaylar)) {
    issues.push(err(file, "ikasOlaylar array olmalı"));
  } else {
    for (const ev of schema.ikasOlaylar) {
      if (!IKAS_EVENT_TYPE.has(ev)) {
        issues.push(err(file, `geçersiz ikasOlaylar: "${ev}"`));
      }
    }
  }

  if (!Array.isArray(schema.ikasSayfa)) {
    issues.push(err(file, "ikasSayfa array olmalı"));
  } else {
    for (const pg of schema.ikasSayfa) {
      if (!IKAS_PAGE_TYPE.has(pg)) {
        issues.push(err(file, `geçersiz ikasSayfa: "${pg}"`));
      }
    }
  }

  if (typeof schema.ikasLink !== "string" || !schema.ikasLink.trim()) {
    issues.push(err(file, "ikasLink boş olamaz — doğrulanmış URL veya yok"));
  } else if (schema.ikasLink !== "yok" && !LINK_RE.test(schema.ikasLink.trim())) {
    issues.push(err(file, 'ikasLink "yok" veya geçerli https:// URL olmalı'));
  }

  if (!IKAS_SABLON.has(schema.ikasSablon)) {
    issues.push(err(file, `geçersiz ikasSablon: "${schema.ikasSablon}"`));
  }

  if (!IKAS_HEDEF.has(schema.ikasHedef)) {
    issues.push(err(file, `geçersiz ikasHedef: "${schema.ikasHedef}"`));
  }

  if (!Array.isArray(schema.ikasKapsam)) {
    issues.push(err(file, "ikasKapsam array olmalı"));
  } else {
    for (const s of schema.ikasKapsam) {
      if (!IKAS_KAPSAM.has(s)) issues.push(err(file, `geçersiz ikasKapsam: "${s}"`));
    }
  }

  if (!Array.isArray(schema.ikasAksiyon)) {
    issues.push(err(file, "ikasAksiyon array olmalı"));
  } else {
    for (const a of schema.ikasAksiyon) {
      if (!a || typeof a !== "object") {
        issues.push(err(file, "ikasAksiyon elemanı { yer, tip } obje olmalı"));
        continue;
      }
      if (!IKAS_AKSIYON_YER.has(a.yer)) {
        issues.push(err(file, `geçersiz ikasAksiyon.yer: "${a.yer}"`));
      }
      if (!IKAS_AKSIYON_TIP.has(a.tip)) {
        issues.push(err(file, `geçersiz ikasAksiyon.tip: "${a.tip}"`));
      }
    }
  }

  if (!Array.isArray(schema.ikasWebhook)) {
    issues.push(err(file, "ikasWebhook array olmalı"));
  } else {
    for (const w of schema.ikasWebhook) {
      if (!IKAS_WEBHOOK.has(w)) {
        issues.push(err(file, `geçersiz ikasWebhook: "${w}"`));
      }
    }
  }

  if (!IKAS_YAYIN.has(schema.ikasYayin)) {
    issues.push(err(file, `geçersiz ikasYayin: "${schema.ikasYayin}"`));
  }

  if (!IKAS_HOST.has(schema.ikasHost)) {
    issues.push(err(file, `geçersiz ikasHost: "${schema.ikasHost}"`));
  }

  if (schema.ikasHost === "admin-iframe" && !schema.entegrasyon?.ikas?.includes("admin-iframe")) {
    issues.push(err(file, "ikasHost admin-iframe iken entegrasyon.ikas admin-iframe içermeli"));
  }

  if (schema.ikasHost === "external" && !schema.entegrasyon?.ikas?.includes("admin-iframe")) {
    issues.push(err(file, "ikasHost external iken entegrasyon.ikas admin-iframe içermeli"));
  }

  if (!schema.tespit || typeof schema.tespit !== "object" || Array.isArray(schema.tespit)) {
    issues.push(err(file, "tespit { shopify, ikas } obje olmalı"));
  } else {
    if (typeof schema.tespit.shopify !== "string") {
      issues.push(err(file, "tespit.shopify string olmalı"));
    }
    if (typeof schema.tespit.ikas !== "string") {
      issues.push(err(file, "tespit.ikas string olmalı"));
    }
  }

  if (schema.ikasTur === "yok" && schema.entegrasyon?.ikas?.some(
    (e) => e === "admin-iframe" || e === "admin-action-iframe" || e === "admin-action-api"
  )) {
    issues.push(err(file, "ikasTur yok iken admin-iframe/admin-action-* kullanılamaz"));
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

  validateEntegrasyon(file, schema.entegrasyon, issues);

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
    issues.push(err(file, 'actions boş [] yasak — yoksa ["yok"] kullan'));
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
    issues.push(err(file, 'ikasKarsilik boş string olamaz — bilinmiyorsa "yok"'));
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

  const ikasHasStorefront = schema.entegrasyon?.ikas?.includes("storefront-js-script");

  if (!schema.ayarlar || typeof schema.ayarlar !== "object" || Array.isArray(schema.ayarlar)) {
    issues.push(err(file, "ayarlar obje olmalı"));
  } else {
    const keys = Object.keys(schema.ayarlar);
    const isPureHeadPixel =
      schema.kategori === "pixel" && schema.scope === "head" && !ikasHasStorefront;

    if (isPureHeadPixel && keys.length > 0) {
      issues.push(err(file, "saf head piksel (ikas storefront-js-script yok) iken ayarlar {} olmalı"));
    } else if (!isPureHeadPixel && keys.length === 0) {
      issues.push(err(file, "ayarlar boş {} — merchant veya storefront-js-script ayarı gerekli"));
    } else if (keys.length > 0) {
      checkAyarSlots(schema.ayarlar, file, issues);
    }

    if (ikasHasStorefront) {
      if (!schema.ayarlar.oncelikliScript) {
        issues.push(err(file, "storefront-js-script için ayarlar.oncelikliScript gerekli"));
      }
      if (!schema.ayarlar.publicApiKey) {
        issues.push(err(file, "storefront-js-script için ayarlar.publicApiKey gerekli"));
      }
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
