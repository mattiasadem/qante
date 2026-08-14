/**
 * Etkileşimli evidence capture — observation.interactionSteps'i sırayla koşar,
 * capture:true olan her adımda 3 viewport SS alır.
 *
 * Usage:
 *   node capture-interaction.mjs ../observations/hyper/default/cart-drawer/global-cart-drawer.json
 *   node capture-interaction.mjs <obs.json> --url https://...
 *   node capture-interaction.mjs <obs.json> --state filled,changed   # sadece bu state'leri YAZ
 *   node capture-interaction.mjs <obs.json> --headed                 # tarayıcıyı gör
 *
 * Tasarım:
 *   - Adımlar her viewport için BAŞTAN koşulur → state sızması yok.
 *   - --state yalnız hangi PNG'lerin yazılacağını filtreler; adımların tamamı
 *     yine koşar (çünkü `changed`, `filled` adımlarına bağımlı olabilir).
 *   - Bir adım patlarsa koşu ölmez: o state "broken" işaretlenir, capture'ları
 *     atlanır, sebebi missingStates'e yazılır.
 *
 * Dosya adı: {slug}.{state}.{375|768|1440}.png
 *
 * Adım biçimi (observations/_template-interaction.json):
 *   { "state": "filled", "action": "click", "selector": "...", "value": null,
 *     "capture": true, "captureMode": "viewport", "not": "..." }
 */

import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  dismissAllOverlays,
  assertCleanForScreenshot,
} from "./dismiss-overlays.mjs";
import { screenshotSectionWithPadding } from "./screenshot-section.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const qanteRoot = path.resolve(__dirname, "..");

const DEFAULT_URLS = {
  hyper: "https://hyper-theme-demo.myshopify.com/",
  impulse: "https://impulse-theme-fashion.myshopify.com/",
};

const STATES = ["initial", "hover", "input", "open", "filled", "changed"];

// Türkçe-duyarlı slug: dosya adında etiket için (ş→s, ı→i, boşluk→-)
function slugify(s) {
  return String(s)
    .trim()
    .toLowerCase()
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/İ/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
const ACTIONS = [
  "goto",
  "scrollTo",
  "click",
  "hover",
  "fill",
  "select",
  "press",
  "waitFor",
  "addToCart",
  "forceOpen",
  "mouseMove",
];

const viewports = JSON.parse(
  fs.readFileSync(path.join(__dirname, "viewports.json"), "utf8")
).viewports;

// ─── Args ──────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { obsPath: null, url: null, states: null, headed: false };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--url") args.url = argv[++i];
    else if (a === "--state") args.states = argv[++i].split(",").map((s) => s.trim());
    else if (a === "--headed") args.headed = true;
    else if (!args.obsPath) args.obsPath = a;
  }
  return args;
}

const { obsPath, url: urlArg, states: onlyStates, headed } = parseArgs(process.argv);
if (!obsPath) {
  console.error(
    "Usage: node capture-interaction.mjs <observation.json> [--url URL] [--state a,b] [--headed]"
  );
  process.exit(1);
}

const absObs = path.resolve(obsPath);
const obs = JSON.parse(fs.readFileSync(absObs, "utf8"));

const steps = (obs.interactionSteps || []).filter(
  (s) => s && !String(s.state || "").startsWith("_")
);
if (!steps.length) {
  console.error(
    "observation.interactionSteps boş — şablon: observations/_template-interaction.json"
  );
  process.exit(1);
}

for (const [i, s] of steps.entries()) {
  if (!STATES.includes(s.state)) {
    console.error(
      `Adım ${i}: geçersiz state "${s.state}" — izinli: ${STATES.join(", ")}`
    );
    process.exit(1);
  }
  if (!ACTIONS.includes(s.action)) {
    console.error(
      `Adım ${i}: geçersiz action "${s.action}" — izinli: ${ACTIONS.join(", ")}`
    );
    process.exit(1);
  }
}

const baseUrl = urlArg || obs.url || DEFAULT_URLS[obs.kaynak] || null;
if (!baseUrl) {
  console.error("URL yok: observation.url veya --url veya DEFAULT_URLS[kaynak]");
  process.exit(1);
}

const slug = obs.evidenceSlug || obs.schemaId || "section";
const outDir = path.join(qanteRoot, "evidence", obs.kaynak, obs.preset, obs.sayfa);
fs.mkdirSync(outDir, { recursive: true });

const evidenceRel = (filename) =>
  `evidence/${obs.kaynak}/${obs.preset}/${obs.sayfa}/${filename}`;

// ─── Sayfa hazırlığı (capture-observation.mjs ile aynı davranış) ───────────

async function settle(page, url) {
  const target = new URL(url);
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForTimeout(3500);

  const landed = new URL(page.url());
  if (
    landed.origin === target.origin &&
    landed.pathname.replace(/\/$/, "") !== target.pathname.replace(/\/$/, "")
  ) {
    await page
      .goto(url, { waitUntil: "networkidle", timeout: 90000 })
      .catch(() => page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 }));
    await page.waitForTimeout(2500);
  }

  await dismissAllOverlays(page);

  const afterDismiss = new URL(page.url());
  if (
    afterDismiss.origin === target.origin &&
    afterDismiss.pathname.replace(/\/$/, "") !== target.pathname.replace(/\/$/, "")
  ) {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(2500);
    await dismissAllOverlays(page);
  }

  await assertCleanForScreenshot(page);
  await page.waitForTimeout(800);

  // Lazy section hydrate
  await page.evaluate(async () => {
    const step = Math.max(400, Math.floor(window.innerHeight * 0.85));
    const max = Math.max(
      document.body?.scrollHeight || 0,
      document.documentElement?.scrollHeight || 0
    );
    for (let y = 0; y < max; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(400);
}

// Görünür olanı tercih eden tıklama — gizli close/overlay .first() tuzağı
async function clickVisible(page, selector) {
  const nodes = page.locator(selector);
  await nodes.first().waitFor({ state: "attached", timeout: 12000 }).catch(() => {});
  const n = await nodes.count();
  if (!n) throw new Error(`selector eşleşmedi: ${selector}`);
  for (let i = 0; i < n; i++) {
    const el = nodes.nth(i);
    if (await el.isVisible().catch(() => false)) {
      await el.click({ force: true });
      return;
    }
  }
  await nodes.first().click({ force: true });
}

async function forceOpen(page, selector) {
  await page.evaluate((sel) => {
    for (const el of document.querySelectorAll(sel)) {
      el.hidden = false;
      el.removeAttribute("hidden");
      el.style.removeProperty("display");
      el.classList.add("active", "open", "is-open");
      el.classList.remove("drawer--loading", "loading", "is-loading");
      el.setAttribute("open", "");
      el.setAttribute("aria-hidden", "false");
      if (typeof el.show === "function") el.show();
      if (typeof el.open === "function" && el.open.length === 0) {
        try {
          el.open();
        } catch {}
      }
    }
    document.documentElement.classList.add(
      "overflow-hidden",
      "drawer-open",
      "modal-showing"
    );
  }, selector);
  await page.waitForTimeout(800);
}

async function cartCount(page) {
  return page
    .evaluate(async () => {
      try {
        const r = await fetch("/cart.js", { headers: { Accept: "application/json" } });
        if (!r.ok) return null;
        return (await r.json()).item_count ?? null;
      } catch {
        return null;
      }
    })
    .catch(() => null);
}

/**
 * Sepete ekle. Önce gerçek UI tıklaması (tema davranışını da yakalar),
 * olmazsa /cart/add.js fallback. Hangisi kullanıldığını döner.
 */
async function addToCart(page, selector) {
  const before = (await cartCount(page)) ?? 0;

  if (selector) {
    await clickVisible(page, selector).catch(() => {});
    await page.waitForTimeout(2800);
    const after = await cartCount(page);
    if (after !== null && after > before) return { via: "ui", count: after };
  }

  // Fallback: varyant id'yi formdan oku, AJAX ekle
  const variantId = await page.evaluate(() => {
    const sels = [
      'form[action*="/cart/add"] [name="id"]',
      'form[action*="/cart/add"] input[name="id"]',
      "[data-variant-id]",
    ];
    for (const s of sels) {
      const el = document.querySelector(s);
      const v = el?.value || el?.getAttribute?.("data-variant-id");
      if (v && /^\d+$/.test(String(v).trim())) return String(v).trim();
    }
    return null;
  });
  if (!variantId) throw new Error("sepete eklenemedi: varyant id bulunamadı");

  const ok = await page.evaluate(async (id) => {
    try {
      const r = await fetch("/cart/add.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ id: Number(id), quantity: 1 }] }),
      });
      return r.ok;
    } catch {
      return false;
    }
  }, variantId);
  if (!ok) throw new Error("sepete eklenemedi: /cart/add.js reddetti");

  await page.waitForTimeout(1200);
  const after = await cartCount(page);
  if (after !== null && after <= before) {
    throw new Error("sepete eklenemedi: item_count artmadı");
  }
  return { via: "cart/add.js", count: after };
}

// Spinner / loader temizliği — SS'e gömülmesin
async function cleanLoaders(page, selector) {
  await page.evaluate((sel) => {
    if (sel) {
      document.querySelectorAll(sel).forEach((el) => {
        el.classList.remove("drawer--loading", "loading", "is-loading");
      });
    }
    document
      .querySelectorAll(
        ".loading-bar, .loading-overlay, .spinner-overlay, [class*='page-loading']"
      )
      .forEach((el) => el.style?.setProperty("display", "none", "important"));
    document.querySelectorAll("*").forEach((el) => {
      const cls = (el.className || "").toString().toLowerCase();
      if (!/spinner|loading/.test(cls)) return;
      const s = getComputedStyle(el);
      if (s.position !== "fixed" && s.position !== "absolute") return;
      const r = el.getBoundingClientRect();
      if (r.width > 80 && r.width < 420 && r.height > 80 && r.height < 420) {
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        if (
          Math.abs(cx - innerWidth / 2) < 120 &&
          Math.abs(cy - innerHeight / 2) < 160
        ) {
          el.style.setProperty("display", "none", "important");
        }
      }
    });
  }, selector || null);
  await page.waitForTimeout(300);
}

// En büyük görünür kutuyu seç (çoklu host tuzağı)
async function bestLocator(page, selector) {
  const all = page.locator(selector);
  const count = await all.count();
  if (!count) return { loc: null, box: null };
  let loc = all.first();
  let box = null;
  let best = -1;
  for (let i = 0; i < count; i++) {
    const c = all.nth(i);
    await c.waitFor({ state: "attached", timeout: 5000 }).catch(() => {});
    const b = await c.boundingBox();
    if (b && b.width >= 8 && b.height >= 8 && b.width * b.height > best) {
      best = b.width * b.height;
      loc = c;
      box = b;
    }
  }
  return { loc, box };
}

async function capture(page, step, vp) {
  const selector = step.captureSelector || obs.selector;
  if (!selector) throw new Error("capture için selector yok (obs.selector veya step.captureSelector)");

  await cleanLoaders(page, selector);

  let { loc, box } = await bestLocator(page, selector);
  if (!box) {
    await forceOpen(page, selector);
    ({ loc, box } = await bestLocator(page, selector));
  }
  if (!box || box.width < 8 || box.height < 8) {
    throw new Error(`zero-size / eşleşmedi: ${selector}`);
  }

  const etiketSlug = step.etiket ? "." + slugify(step.etiket) : "";
  const filename = `${slug}.${step.state}${etiketSlug}.${vp.id}.png`;
  const outPath = path.join(outDir, filename);
  const mode = step.captureMode || obs.captureMode || obs.capture?.mode || "section";

  if (mode === "viewport") {
    await page.evaluate(() => window.scrollTo(0, 0));
    await loc.waitFor({ state: "visible", timeout: 8000 }).catch(() => {});
    await page.waitForTimeout(500);
    await page.screenshot({ path: outPath, fullPage: false });
  } else {
    await screenshotSectionWithPadding(page, loc, outPath, { minPad: 8 });
  }

  return {
    file: evidenceRel(filename),
    bytes: fs.statSync(outPath).size,
    mode,
  };
}

// ─── Adım koşucu ───────────────────────────────────────────────────────────

async function runStep(page, step) {
  const sel = step.selector;
  switch (step.action) {
    case "goto":
      await settle(page, step.value || baseUrl);
      return null;
    case "scrollTo": {
      const el = page.locator(sel).first();
      await el.waitFor({ state: "attached", timeout: 12000 });
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      return null;
    }
    case "click":
      await clickVisible(page, sel);
      await page.waitForTimeout(Number(step.value) || 1400);
      return null;
    case "hover": {
      const el = page.locator(sel).first();
      await el.waitFor({ state: "visible", timeout: 12000 });
      await el.scrollIntoViewIfNeeded().catch(() => {});
      await el.hover({ force: true });
      await page.waitForTimeout(Number(step.value) || 900);
      return null;
    }
    case "fill": {
      const nodes = page.locator(sel);
      await nodes.first().waitFor({ state: "attached", timeout: 12000 }).catch(() => {});
      const n = await nodes.count();
      if (!n) throw new Error(`selector eşleşmedi: ${sel}`);
      let el = nodes.first();
      for (let i = 0; i < n; i++) {
        if (await nodes.nth(i).isVisible().catch(() => false)) {
          el = nodes.nth(i);
          break;
        }
      }
      await el.waitFor({ state: "visible", timeout: 12000 });
      await el.click({ force: true }).catch(() => {});
      if (step.value == null || String(step.value).trim() === "") {
        throw new Error("fill value yok — katalog kelimesi yaz (scan.katalogSorgu); chair sabit değil");
      }
      await el.fill(String(step.value));
      await page.waitForTimeout(1600);
      return null;
    }
    case "select": {
      const el = page.locator(sel).first();
      await el.waitFor({ state: "attached", timeout: 12000 });
      await el.selectOption(String(step.value));
      await page.waitForTimeout(1400);
      return null;
    }
    case "press":
      await page.keyboard.press(String(step.value || "Enter"));
      await page.waitForTimeout(1400);
      return null;
    case "waitFor":
      if (sel) {
        await page.locator(sel).first().waitFor({ state: "visible", timeout: 15000 });
      } else {
        await page.waitForTimeout(Number(step.value) || 1000);
      }
      return null;
    case "mouseMove": {
      const [x, y] = String(step.value || "20,400")
        .split(",")
        .map((n) => Number(n.trim()));
      await page.mouse.move(x || 20, y || 400);
      await page.waitForTimeout(500);
      return null;
    }
    case "addToCart":
      return await addToCart(page, sel);
    case "forceOpen":
      await forceOpen(page, sel || obs.selector);
      return null;
    default:
      throw new Error(`bilinmeyen action: ${step.action}`);
  }
}

// ─── Ana koşu ──────────────────────────────────────────────────────────────

const wanted = onlyStates ? new Set(onlyStates) : null;
const capturedFiles = new Map(); // state → [rel...]
const failures = new Map(); // state → sebep
const stepLog = [];

const browser = await chromium.launch({ headless: !headed });

try {
  for (const vp of viewports) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
    });

    // İlk adım goto değilse taban sayfayı biz açalım
    if (steps[0].action !== "goto") await settle(page, baseUrl);

    // Her viewport kendi şansını dener — 375'te patlayan 1440'ta atlanmaz
    const broken = new Set();

    for (const [i, step] of steps.entries()) {
      // Viewport filtresi: adım yalnız belirli viewport'larda koşsun
      // (mega-menu hover = masaüstü, hamburger = mobil gibi ayrımlar için)
      if (Array.isArray(step.viewports) && !step.viewports.includes(vp.id)) continue;
      if (broken.has(step.state)) continue;

      try {
        const info = await runStep(page, step);
        if (info?.via) stepLog.push(`${step.state}/addToCart → ${info.via}`);
      } catch (err) {
        broken.add(step.state);
        if (!failures.has(step.state)) {
          failures.set(
            step.state,
            `adım ${i} (${step.action}${step.selector ? ` ${step.selector}` : ""}): ${err.message}`
          );
        }
        console.warn(`⚠ ${vp.id} · ${step.state} · adım ${i} patladı: ${err.message}`);
        continue;
      }

      if (!step.capture) continue;
      if (wanted && !wanted.has(step.state)) continue;

      try {
        const res = await capture(page, step, vp);
        if (!capturedFiles.has(step.state)) capturedFiles.set(step.state, []);
        capturedFiles.get(step.state).push(res.file);
        console.log(`✓ ${step.state}.${vp.id} → ${res.file} (${res.bytes}B, ${res.mode})`);
      } catch (err) {
        broken.add(step.state);
        if (!failures.has(step.state)) {
          failures.set(step.state, `capture (${vp.id}): ${err.message}`);
        }
        console.warn(`⚠ ${vp.id} · ${step.state} capture patladı: ${err.message}`);
      }
    }

    await page.close();
  }

  // ─── Observation güncelle ────────────────────────────────────────────────

  const newFiles = [...capturedFiles.values()].flat();

  // Mevcut evidence'ı koru (state eki olmayan initial dosyaları dahil),
  // diskte olmayanları düş, yenileri ekle.
  const kept = (obs.evidence || []).filter((rel) =>
    fs.existsSync(path.join(qanteRoot, rel))
  );
  obs.evidence = [...new Set([...kept, ...newFiles])].sort();

  const prevStates = Array.isArray(obs.interactionStates) ? obs.interactionStates : [];
  const capturedStates = [...capturedFiles.keys()];
  const hasUnsuffixedInitial = obs.evidence.some((r) =>
    new RegExp(`/${slug}\\.\\d+\\.png$`).test(r)
  );
  if (hasUnsuffixedInitial && !capturedStates.includes("initial")) {
    capturedStates.unshift("initial"); // eski ek'siz dosyalar initial sayılır
  }
  // --state yalnız yazmayı filtreler; önceki yakalanmış state'leri silme
  const mergedStates = [...new Set([...prevStates, ...capturedStates])];
  obs.interactionStates = STATES.filter((s) => mergedStates.includes(s));

  const missing = [...failures.entries()].map(([state, sebep]) => ({ state, sebep }));
  const declared = [...new Set(steps.map((s) => s.state))].filter(
    (s) => !wanted || wanted.has(s)
  );
  for (const s of declared) {
    if (!obs.interactionStates.includes(s) && !failures.has(s)) {
      missing.push({ state: s, sebep: "adımlar koştu ama capture:true adım yok" });
    }
  }
  obs.missingStates = missing;

  obs.capture = {
    ...(obs.capture || {}),
    url: baseUrl,
    viewports: viewports.map((v) => v.id),
    mode: obs.captureMode || obs.capture?.mode || "section",
    method: "interaction-steps",
    updatedAt: new Date().toISOString(),
  };

  fs.writeFileSync(absObs, JSON.stringify(obs, null, 2) + "\n");

  console.log(
    "\n" +
      JSON.stringify(
        {
          ok: failures.size === 0,
          observationId: obs.observationId,
          interactionStates: obs.interactionStates,
          newEvidence: newFiles.length,
          missingStates: obs.missingStates,
          notes: stepLog,
        },
        null,
        2
      )
  );
} finally {
  await browser.close();
}
