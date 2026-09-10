import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const files = [
  "observations/levitate/default/home/navigation-header-mega.json",
  "observations/levitate/default/home/global-predictive-search.json",
  "observations/levitate/default/home/global-menu-drawer.json",
  "observations/levitate/default/home/global-cart-drawer.json",
  "observations/levitate/default/cart/cart-page-main.json",
  "observations/levitate/default/product-detail/product-info-main.json",
  "observations/levitate/default/product-detail/product-info-tabs.json",
  "observations/levitate/default/home/product-showcase-tabs.json",
  "observations/levitate/default/home/product-showcase-featured.json",
  "observations/levitate/default/faq-support/faq-collapsible-tabs.json",
  "observations/levitate/default/collection/product-showcase-grid-plp.json",
];

const results = [];
for (const rel of files) {
  const abs = path.join(root, rel);
  process.stdout.write(`\n>>> INTERACT ${rel}\n`);
  try {
    execSync(`node capture-interaction.mjs ${abs}`, {
      cwd: path.join(root, "scripts"),
      encoding: "utf8",
      timeout: 420000,
      stdio: "inherit",
    });
    results.push({ rel, ok: true });
  } catch (e) {
    results.push({ rel, ok: false, error: e.message?.slice(0, 200) });
    process.stdout.write(`    FAIL ${e.message?.slice(0, 180)}\n`);
  }
  await new Promise((r) => setTimeout(r, 2000));
}

fs.writeFileSync("/tmp/levitate-interact-summary.json", JSON.stringify(results, null, 2));
console.log("\n=== INTERACT SUMMARY ===");
console.log(JSON.stringify(results, null, 2));
