/**
 * Stationery interact captures.
 */
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const DELAY_MS = 3000;

const files = [
  "observations/stationery/default/home/navigation-header-mega.json",
  "observations/stationery/default/home/global-menu-drawer.json",
  "observations/stationery/default/home/global-predictive-search.json",
  "observations/stationery/default/home/global-cart-drawer.json",
  "observations/stationery/default/cart/cart-page-main.json",
  "observations/stationery/default/product-detail/product-info-main.json",
  "observations/stationery/default/faq-support/faq-collapsible-tabs.json",
  "observations/stationery/default/home/product-showcase-grid-featured.json",
  "observations/stationery/default/product-detail/product-info-tabs.json",
];

const results = [];
for (const rel of files) {
  const abs = path.join(root, rel);
  process.stdout.write(`\n>>> ${rel}\n`);
  try {
    execSync(`node capture-interaction.mjs ${abs}`, {
      cwd: path.join(root, "scripts"),
      encoding: "utf8",
      stdio: "inherit",
      timeout: 420000,
    });
    results.push({ rel, ok: true });
  } catch (e) {
    process.stdout.write(`    ERR ${String(e.message || e).slice(0, 200)}\n`);
    results.push({ rel, ok: false, error: String(e.message || e).slice(0, 200) });
  }
  await new Promise((r) => setTimeout(r, DELAY_MS));
}

console.log("\n=== INTERACT SUMMARY ===");
console.log(JSON.stringify(results, null, 2));
