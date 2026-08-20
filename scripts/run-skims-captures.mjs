#!/usr/bin/env node
/**
 * Batch capture for SKIMS first inventory.
 * Standard obs → capture-observation.mjs; filled cart → custom flow.
 */
import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright";
import { dismissAllOverlays } from "./dismiss-overlays.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const viewports = JSON.parse(
  fs.readFileSync(path.join(__dirname, "viewports.json"), "utf8")
).viewports;

const OBS_PATHS = [
  "observations/skims/default/home/promo-announcement-bar.json",
  "observations/skims/default/home/navigation-header-mega.json",
  "observations/skims/default/home/hero-slideshow.json",
  "observations/skims/default/home/collection-nav-cards.json",
  "observations/skims/default/home/hero-slideshow-2.json",
  "observations/skims/default/home/promo-grid-banner.json",
  "observations/skims/default/home/editorial-rich-text.json",
  "observations/skims/default/home/footer-columns-newsletter.json",
  "observations/skims/default/home/global-cart-drawer.json",
  "observations/skims/default/collection/collection-banner.json",
  "observations/skims/default/collection/product-showcase-grid-plp.json",
  "observations/skims/default/collection/product-showcase-related.json",
  "observations/skims/default/collection/collection-nav-cards-2.json",
  "observations/skims/default/search/search-results.json",
  "observations/skims/default/product-detail/product-info-main.json",
  "observations/skims/default/product-detail/product-info-tabs.json",
  "observations/skims/default/product-detail/product-showcase-related.json",
  "observations/skims/default/product-detail/product-showcase-related-2.json",
  "observations/skims/default/product-detail/testimonial-quote-carousel.json",
  "observations/skims/default/blog-list/hero-slideshow.json",
  "observations/skims/default/blog-list/blog-list-main.json",
];

function runCapture(relPath) {
  const abs = path.join(root, relPath);
  console.log(`\n=== capture ${relPath} ===`);
  const r = spawnSync("node", ["capture-observation.mjs", abs], {
    cwd: __dirname,
    stdio: "inherit",
  });
  if (r.status !== 0) throw new Error(`capture failed: ${relPath}`);
}

async function captureFilledCart() {
  const obsPath = path.join(
    root,
    "observations/skims/default/home/global-cart-drawer-2.json"
  );
  const obs = JSON.parse(fs.readFileSync(obsPath, "utf8"));
  const outDir = path.join(root, "evidence/skims/default/home");
  fs.mkdirSync(outDir, { recursive: true });
  const slug = obs.evidenceSlug || "global-cart-drawer-2";
  const pdpUrl =
    "https://skims.com/products/tangle-teezer-x-skims-the-ultimate-detangler-straight-to-wavy-clay";

  const browser = await chromium.launch({ headless: true });
  const evidence = [];

  try {
    for (const vp of viewports) {
      const page = await browser.newPage({
        viewport: { width: vp.width, height: vp.height },
      });
      await page.goto(pdpUrl, { waitUntil: "domcontentloaded", timeout: 90000 });
      await page.waitForTimeout(3500);
      await dismissAllOverlays(page);
      await page.locator(".product-form [data-testid='add-to-bag']").first().click({
        force: true,
      });
      await page.waitForTimeout(5000);
      const loc = page.locator("section.cart-main").first();
      await loc.waitFor({ state: "visible", timeout: 10000 });
      const filename = `${slug}.${vp.id}.png`;
      const outPath = path.join(outDir, filename);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(400);
      await page.screenshot({ path: outPath, fullPage: false });
      evidence.push(`evidence/skims/default/home/${filename}`);
      await page.close();
    }
  } finally {
    await browser.close();
  }

  obs.evidence = evidence;
  obs.capture = {
    ...(obs.capture || {}),
    url: pdpUrl,
    viewports: viewports.map((v) => v.id),
    mode: "viewport",
    method: "add-to-bag-auto-open",
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(obsPath, JSON.stringify(obs, null, 2) + "\n");
  console.log("filled cart capture ok", evidence);
}

const START_AT = Number(process.env.START_AT || 0);

for (let i = START_AT; i < OBS_PATHS.length; i++) {
  runCapture(OBS_PATHS[i]);
}
await captureFilledCart();
console.log("\nAll SKIMS captures complete.");
