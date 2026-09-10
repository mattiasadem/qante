/**
 * Kitchen Ware interact captures — one observation at a time.
 */
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const list = [
  "observations/kitchen/default/home/navigation-header-mega.json",
  "observations/kitchen/default/home/global-menu-drawer.json",
  "observations/kitchen/default/home/global-predictive-search.json",
  "observations/kitchen/default/home/product-showcase-tabs.json",
  "observations/kitchen/default/home/global-cart-drawer.json",
  "observations/kitchen/default/cart/cart-page-main.json",
  "observations/kitchen/default/product-detail/product-info-main.json",
  "observations/kitchen/default/product-detail/product-info-tabs.json",
  "observations/kitchen/default/faq-support/faq-collapsible-tabs.json",
  "observations/kitchen/default/collection/product-showcase-grid-plp.json",
];

const results = [];
for (const rel of list) {
  const abs = path.join(root, rel);
  process.stdout.write(`\n>>> INTERACT ${rel}\n`);
  try {
    const out = execSync(`node capture-interaction.mjs ${abs}`, {
      cwd: path.join(root, "scripts"),
      encoding: "utf8",
      timeout: 420000,
    });
    process.stdout.write(out.slice(-800));
    results.push({ rel, ok: true });
  } catch (e) {
    const msg = String(e.stdout || e.message || e).slice(-600);
    process.stdout.write(msg + "\n");
    results.push({ rel, ok: false, error: String(e.message || e).slice(0, 200) });
  }
  await new Promise((r) => setTimeout(r, 3000));
}

console.log("\n=== INTERACT SUMMARY ===");
console.log(JSON.stringify(results, null, 2));
