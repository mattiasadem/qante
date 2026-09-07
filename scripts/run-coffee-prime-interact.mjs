/**
 * Coffee Prime interact captures — run after static 3vp batch.
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const interactObs = [
  "observations/coffee-prime/default/home/navigation-header-mega.json",
  "observations/coffee-prime/default/home/global-menu-drawer.json",
  "observations/coffee-prime/default/home/global-predictive-search.json",
  "observations/coffee-prime/default/home/global-cart-drawer.json",
  "observations/coffee-prime/default/home/product-showcase-grid-featured.json",
  "observations/coffee-prime/default/product-detail/product-info-main.json",
  "observations/coffee-prime/default/cart/cart-page-main.json",
  "observations/coffee-prime/default/faq-support/faq-collapsible-tabs.json",
  "observations/coffee-prime/default/about-brand/faq-collapsible-tabs.json",
];

const results = [];
for (const rel of interactObs) {
  const abs = path.join(root, rel);
  process.stdout.write(`\n>>> interact ${rel}\n`);
  try {
    const out = execSync(`node capture-interaction.mjs ${abs}`, {
      cwd: path.join(root, "scripts"),
      encoding: "utf8",
      timeout: 600000,
    });
    const last = out.trim().split("\n").pop();
    let parsed = {};
    try {
      parsed = JSON.parse(last);
    } catch {
      parsed = { raw: last.slice(0, 200) };
    }
    results.push({ rel, ok: true, ...parsed });
  } catch (e) {
    results.push({ rel, ok: false, error: e.message?.slice(0, 300) });
  }
  await new Promise((r) => setTimeout(r, 3000));
}

console.log("\n=== INTERACT SUMMARY ===");
console.log(JSON.stringify(results, null, 2));
