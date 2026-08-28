/**
 * Generic evidence capture — observation JSON'dan okur, 3 viewport SS alır.
 *
 * Usage:
 *   node capture-observation.mjs ../observations/hyper/default/home/hero-slideshow.json
 *   node capture-observation.mjs <obs.json> --url https://...
 *
 * Observation alanları:
 *   selector (zorunlu), kaynak, preset, sayfa, schemaId, observationId
 *   url? (yoksa --url veya tema default map)
 *   evidenceSlug? (dosya adı kökü; default: schemaId)
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

const viewports = JSON.parse(
  fs.readFileSync(path.join(__dirname, "viewports.json"), "utf8")
).viewports;

function parseArgs(argv) {
  const args = { obsPath: null, url: null };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === "--url") args.url = argv[++i];
    else if (!args.obsPath) args.obsPath = argv[i];
  }
  return args;
}

function evidenceDir(obs) {
  return path.join(
    qanteRoot,
    "evidence",
    obs.kaynak,
    obs.preset,
    obs.sayfa
  );
}

function evidenceRel(obs, filename) {
  return `evidence/${obs.kaynak}/${obs.preset}/${obs.sayfa}/${filename}`;
}

const { obsPath, url: urlArg } = parseArgs(process.argv);
if (!obsPath) {
  console.error(
    "Usage: node capture-observation.mjs <observation.json> [--url https://...]"
  );
  process.exit(1);
}

const absObs = path.resolve(obsPath);
const obs = JSON.parse(fs.readFileSync(absObs, "utf8"));

if (!obs.selector) {
  console.error("observation.selector zorunlu");
  process.exit(1);
}

const url =
  urlArg || obs.url || DEFAULT_URLS[obs.kaynak] || null;
if (!url) {
  console.error("URL yok: observation.url veya --url veya DEFAULT_URLS[kaynak]");
  process.exit(1);
}

const slug = obs.evidenceSlug || obs.schemaId || "section";
const outDir = evidenceDir(obs);
fs.mkdirSync(outDir, { recursive: true });

const headed =
  process.env.QANTE_HEADED === "1" || process.env.QANTE_HEADED === "true";
const browser = await chromium.launch({
  headless: !headed,
  args: headed ? ["--disable-blink-features=AutomationControlled"] : [],
});
const headedUserAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
const evidence = [];
const results = [];

try {
  for (const vp of viewports) {
    // Viewport boyutunu değiştir; isMobile/UA ile Shopify demo redirect
    // (ör. Nexvo home → /collections/portables) tetikleme.
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      ...(headed ? { userAgent: headedUserAgent } : {}),
    });

    const warmupUrl = obs.warmupUrl || obs.capture?.warmupUrl || null;
    if (warmupUrl) {
      await page.goto(warmupUrl, { waitUntil: "domcontentloaded", timeout: 90000 });
      await page.waitForTimeout(2000);
      await dismissAllOverlays(page);
    }

    const target = new URL(url);
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(3500);

    // Cloudflare / bot interstitial — kısa bekle + reload (DTC storefront)
    for (let cf = 0; cf < 6; cf++) {
      const title = await page.title().catch(() => "");
      if (!/just a moment/i.test(title)) break;
      console.warn(`Cloudflare challenge (${vp.id}), wait ${8 + cf * 4}s…`);
      await page.waitForTimeout(8000 + cf * 4000);
      await page.reload({ waitUntil: "domcontentloaded", timeout: 90000 }).catch(() => {});
      await page.waitForTimeout(3500);
    }

    // Mobil/tablet redirect veya overlay click ile sayfa kaydıysa home'a geri al
    const landed = new URL(page.url());
    if (
      landed.origin === target.origin &&
      landed.pathname.replace(/\/$/, "") !== target.pathname.replace(/\/$/, "")
    ) {
      console.warn(
        `URL kaydı (${vp.id}): ${landed.pathname} → yeniden ${target.pathname || "/"}`
      );
      await page.goto(url, { waitUntil: "networkidle", timeout: 90000 }).catch(() =>
        page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 })
      );
      await page.waitForTimeout(2500);
    }

    // Overlay dismiss bazen CTA/link'e tıklayabiliyor — stabilize olana kadar geri al
    for (let d = 0; d < 3; d++) {
      await dismissAllOverlays(page);
      const afterDismiss = new URL(page.url());
      if (
        afterDismiss.origin === target.origin &&
        afterDismiss.pathname.replace(/\/$/, "") !==
          target.pathname.replace(/\/$/, "")
      ) {
        console.warn(
          `Dismiss sonrası URL kaydı (${vp.id}): ${afterDismiss.pathname} → geri`
        );
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
        await page.waitForTimeout(2500);
        continue;
      }
      break;
    }

    await assertCleanForScreenshot(page);
    await page.waitForTimeout(800);

    // Lazy section hydrate: kısa scroll pass, sonra hedefe in.
    // Infinite-scroll PLP (50k+ px) taranırsa sayfa ölür — tavan 4 viewport.
    await page.evaluate(async () => {
      const step = Math.max(400, Math.floor(window.innerHeight * 0.85));
      const docMax = Math.max(
        document.body?.scrollHeight || 0,
        document.documentElement?.scrollHeight || 0
      );
      const max = Math.min(docMax, window.innerHeight * 4);
      for (let y = 0; y < max; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(400);

    const prepareScroll =
      obs.prepareScroll || obs.capture?.prepareScroll || obs.selector;
    if (prepareScroll) {
      const scrollTarget = page.locator(prepareScroll).first();
      // Selector henüz yoksa kısa bekle (hydrate)
      await scrollTarget
        .waitFor({ state: "attached", timeout: 12000 })
        .catch(() => {});
      if (await scrollTarget.count()) {
        await scrollTarget.scrollIntoViewIfNeeded().catch(() => {});
        await page.waitForTimeout(500);
      }
    }

    // Opsiyonel: drawer/modal aç (observation.prepareClick veya capture.prepareClick)
    const prepareClick =
      obs.prepareClick || obs.capture?.prepareClick || null;
    if (prepareClick) {
      // Görünür opener tercih et — gizli close/overlay veya yanlış link .first() tuzağı
      const openers = page.locator(prepareClick);
      const n = await openers.count();
      let clicked = false;
      for (let i = 0; i < n; i++) {
        const opener = openers.nth(i);
        if (await opener.isVisible().catch(() => false)) {
          await opener.click({ force: true }).catch(() => {});
          clicked = true;
          break;
        }
      }
      if (!clicked && n) {
        await openers.first().click({ force: true }).catch(() => {});
        clicked = true;
      }
      if (!clicked) console.warn(`prepareClick eşleşmedi: ${prepareClick}`);
      else await page.waitForTimeout(1200);
    }

    const prepareFill = obs.prepareFill || obs.capture?.prepareFill || null;
    if (prepareFill?.selector) {
      const field = page.locator(prepareFill.selector).first();
      if (await field.count()) {
        await field.click({ force: true }).catch(() => {});
        const q = (prepareFill.value || "").trim();
        if (!q) {
          console.warn("prepareFill.value yok — katalog kelimesi yaz; chair sabit değil");
        } else {
          await field.fill(q).catch(() => {});
        }
        await page.waitForTimeout(1200);
      }
    }

    // Force-open: bazı overlay'ler gizli/zero-size; JS ile aç
    if (obs.prepareForceOpen || obs.capture?.prepareForceOpen) {
      await page.evaluate((sel) => {
        const els = [...document.querySelectorAll(sel)];
        for (const el of els) {
          el.hidden = false;
          el.removeAttribute("hidden");
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
          if (getComputedStyle(el).display === "none") {
            el.style.setProperty("display", "block", "important");
          }
        }
        document.documentElement.classList.add(
          "overflow-hidden",
          "drawer-open",
          "modal-showing"
        );
      }, obs.selector);
      await page.waitForTimeout(800);
    }

    const all = page.locator(obs.selector);
    const count = await all.count();
    if (!count) {
      await page.close();
      throw new Error(`Selector eşleşmedi (${vp.id}): ${obs.selector}`);
    }

    // Birden fazla eşleşmede en büyük görünür kutuyu seç (ör. çoklu quick-view host)
    let loc = all.first();
    let box = null;
    let best = -1;
    for (let i = 0; i < count; i++) {
      const candidate = all.nth(i);
      await candidate.waitFor({ state: "attached", timeout: 5000 }).catch(() => {});
      const b = await candidate.boundingBox();
      if (b && b.width >= 8 && b.height >= 8) {
        const area = b.width * b.height;
        if (area > best) {
          best = area;
          loc = candidate;
          box = b;
        }
      }
    }

    if (!box) {
      await page.evaluate((sel) => {
        const els = [...document.querySelectorAll(sel)];
        for (const el of els) {
          el.hidden = false;
          el.removeAttribute("hidden");
          el.classList.add("active", "open", "is-open");
          el.classList.remove("drawer--loading", "loading", "is-loading");
          el.setAttribute("open", "");
          el.setAttribute("aria-hidden", "false");
          if (typeof el.open === "boolean") el.open = true;
        }
        document.documentElement.classList.add("overflow-hidden", "drawer-open");
      }, obs.selector);
      await page.waitForTimeout(400);
      for (let i = 0; i < count; i++) {
        const candidate = all.nth(i);
        const b = await candidate.boundingBox();
        if (b && b.width >= 8 && b.height >= 8) {
          const area = b.width * b.height;
          if (area > best) {
            best = area;
            loc = candidate;
            box = b;
          }
        }
      }
    }

    if (!box || box.height < 8 || box.width < 8) {
      await page.close();
      results.push({
        viewport: vp.id,
        label: vp.label,
        skipped: true,
        reason: "zero-size",
      });
      continue;
    }

    const filename = `${slug}.${vp.id}.png`;
    const outPath = path.join(outDir, filename);

    // capture.mode:
    //   section  → margin-box kırp (default)
    //   viewport → tüm viewport (drawer/modal: masaüstünde sağ panel + sayfa bağlamı)
    // Drawer loading spinner / page loader temizliği (SS'e gömülmesin)
    await page.evaluate((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        el.classList.remove("drawer--loading", "loading", "is-loading");
      });
      document.querySelectorAll(
        ".loading-bar, .loading-overlay, .spinner-overlay, [class*='page-loading']"
      ).forEach((el) => {
        el.style?.setProperty("display", "none", "important");
      });
      // Tam ekran ortalanmış spinner kutusu (drawer--loading artığı)
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
    }, obs.selector);
    await page.waitForTimeout(300);

    const mode = obs.captureMode || obs.capture?.mode || "section";
    let clipInfo;
    if (mode === "viewport") {
      // Drawer açıldıktan sonra görünür paneli bekle; sayfayı üste al
      await page.evaluate(() => window.scrollTo(0, 0));
      await loc.waitFor({ state: "visible", timeout: 8000 }).catch(() => {});
      await page.waitForTimeout(500);
      await page.screenshot({ path: outPath, fullPage: false });
      clipInfo = {
        mode: "viewport",
        viewport: page.viewportSize(),
      };
    } else {
      clipInfo = await screenshotSectionWithPadding(page, loc, outPath, {
        minPad: 8,
      });
    }

    const rel = evidenceRel(obs, filename);
    evidence.push(rel);
    results.push({
      viewport: vp.id,
      label: vp.label,
      file: rel,
      bytes: fs.statSync(outPath).size,
      clipInfo,
    });

    await page.close();
    // Cloudflare / bot walls: ardışık viewport yüklemeleri arasında nefes
    await new Promise((r) => setTimeout(r, 5000));
  }

  // observation.evidence güncelle (3 viewport path)
  obs.evidence = evidence;
  const mode = obs.captureMode || obs.capture?.mode || "section";
  obs.capture = {
    ...(obs.capture || {}),
    url,
    viewports: viewports.map((v) => v.id),
    mode,
    method: mode === "viewport" ? "viewport" : "margin-box+minPad8",
    updatedAt: new Date().toISOString(),
  };
  if (obs.prepareClick && !obs.capture.prepareClick) {
    obs.capture.prepareClick = obs.prepareClick;
  }
  fs.writeFileSync(absObs, JSON.stringify(obs, null, 2) + "\n");

  console.log(
    JSON.stringify(
      { ok: true, observationId: obs.observationId, results },
      null,
      2
    )
  );
} finally {
  await browser.close();
}
