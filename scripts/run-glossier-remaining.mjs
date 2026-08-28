/**
 * Remaining Glossier captures — sequential with retries.
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const DELAY_MS = 15000;
const RETRY_WAIT_MS = 60000;
const MAX_RETRIES = 4;

const observations = [
  "observations/glossier/default/home/global-predictive-search.json",
  "observations/glossier/default/product-detail/product-info-main.json",
  "observations/glossier/default/product-detail/testimonial-quote-carousel.json",
  "observations/glossier/default/product-detail/faq-collapsible-tabs.json",
  "observations/glossier/default/product-detail/editorial-image-with-text.json",
  "observations/glossier/default/product-detail/product-showcase-related.json",
  "observations/glossier/default/product-detail/media-shop-the-feed.json",
  "observations/glossier/default/collection/product-showcase-grid-plp.json",
  "observations/glossier/default/search/search-results.json",
  "observations/glossier/default/about-brand/editorial-rich-text.json",
  "observations/glossier/default/about-brand/editorial-image-with-text-2.json",
  "observations/glossier/default/about-brand/media-lookbook-banner.json",
];

const results = [];
for (const rel of observations) {
  const abs = path.join(root, rel);
  let captured = false;
  for (let attempt = 1; attempt <= MAX_RETRIES && !captured; attempt++) {
    process.stdout.write(`\n>>> ${rel} attempt ${attempt}\n`);
    if (attempt > 1) await new Promise((r) => setTimeout(r, RETRY_WAIT_MS));
    try {
      const out = execSync(`node capture-observation.mjs ${abs}`, {
        cwd: path.join(root, "scripts"),
        encoding: "utf8",
        timeout: 360000,
      });
      const parsed = JSON.parse(out.trim().split("\n").pop());
      const pngs = (parsed.results || []).filter((r) => r.file).length;
      if (pngs >= 3) {
        results.push({ rel, ok: true, pngs });
        captured = true;
      } else {
        results.push({ rel, ok: false, error: `only ${pngs}/3` });
      }
    } catch (e) {
      results.push({ rel, ok: false, error: e.message?.slice(0, 180) });
    }
  }
  await new Promise((r) => setTimeout(r, DELAY_MS));
}

console.log("\n=== REMAINING CAPTURE SUMMARY ===");
console.log(JSON.stringify(results, null, 2));
console.log(`\n${results.filter((r) => r.ok).length}/${results.length} succeeded`);
