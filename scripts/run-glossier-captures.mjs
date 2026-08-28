/**
 * Sequential Glossier Mod A captures — Cloudflare-sensitive; one obs at a time.
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const DELAY_MS = 12000;
const RETRY_WAIT_MS = 45000;
const MAX_RETRIES = 3;

const observations = [
  "observations/glossier/default/home/promo-announcement-bar.json",
  "observations/glossier/default/home/navigation-header-mega.json",
  "observations/glossier/default/home/hero-slideshow.json",
  "observations/glossier/default/home/product-showcase-grid-featured.json",
  "observations/glossier/default/home/editorial-image-with-text.json",
  "observations/glossier/default/home/collection-nav-image-cards.json",
  "observations/glossier/default/home/testimonial-quote-carousel.json",
  "observations/glossier/default/home/media-shop-the-feed.json",
  "observations/glossier/default/home/footer-columns-newsletter.json",
  "observations/glossier/default/home/global-predictive-search.json",
  "observations/glossier/default/home/global-cart-drawer.json",
  "observations/glossier/default/home/global-menu-drawer.json",
  "observations/glossier/default/product-detail/product-info-main.json",
  "observations/glossier/default/product-detail/testimonial-quote-carousel.json",
  "observations/glossier/default/product-detail/faq-collapsible-tabs.json",
  "observations/glossier/default/product-detail/editorial-image-with-text.json",
  "observations/glossier/default/product-detail/product-showcase-related.json",
  "observations/glossier/default/product-detail/media-shop-the-feed.json",
  "observations/glossier/default/collection/product-showcase-grid-plp.json",
  "observations/glossier/default/search/search-results.json",
  "observations/glossier/default/about-brand/editorial-rich-text.json",
  "observations/glossier/default/about-brand/editorial-image-with-text.json",
  "observations/glossier/default/about-brand/media-lookbook-banner.json",
];

const results = [];
for (const rel of observations) {
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) {
    results.push({ rel, ok: false, error: "missing json" });
    continue;
  }
  process.stdout.write(`\n>>> ${rel}\n`);
  let captured = false;
  for (let attempt = 1; attempt <= MAX_RETRIES && !captured; attempt++) {
    if (attempt > 1) {
      process.stdout.write(`    retry ${attempt}/${MAX_RETRIES} after ${RETRY_WAIT_MS}ms\n`);
      await new Promise((r) => setTimeout(r, RETRY_WAIT_MS));
    }
    try {
      const out = execSync(`node capture-observation.mjs ${abs}`, {
        cwd: path.join(root, "scripts"),
        encoding: "utf8",
        timeout: 300000,
      });
      const parsed = JSON.parse(out.trim().split("\n").pop());
      const pngs = (parsed.results || []).filter((r) => r.file).length;
      if (pngs >= 3) {
        results.push({ rel, ok: true, attempt, observationId: parsed.observationId, pngs });
        captured = true;
      } else {
        results.push({ rel, ok: false, attempt, error: `only ${pngs}/3 PNG` });
      }
    } catch (e) {
      results.push({ rel, ok: false, attempt, error: e.message?.slice(0, 200) });
    }
  }
  await new Promise((r) => setTimeout(r, DELAY_MS));
}

console.log("\n=== CAPTURE SUMMARY ===");
console.log(JSON.stringify(results, null, 2));
const ok = results.filter((r) => r.ok).length;
console.log(`\n${ok}/${results.length} succeeded`);
