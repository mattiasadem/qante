import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const files = [
  "observations/wine/default/home/navigation-header-mega.json",
  "observations/wine/default/home/global-predictive-search.json",
  "observations/wine/default/home/global-menu-drawer.json",
  "observations/wine/default/home/global-cart-drawer.json",
  "observations/wine/default/cart/cart-page-main.json",
  "observations/wine/default/home/product-showcase-grid-featured.json",
  "observations/wine/default/product-detail/product-info-tabs.json",
  "observations/wine/default/faq-support/faq-collapsible-tabs.json",
  "observations/wine/default/collection/product-showcase-grid-plp.json",
];

const results = [];
for (const rel of files) {
  const abs = path.join(root, rel);
  process.stdout.write(`\n>>> interact ${rel}\n`);
  try {
    const out = execSync(`node capture-interaction.mjs ${abs}`, {
      cwd: path.join(root, "scripts"),
      encoding: "utf8",
      timeout: 420000,
    });
    process.stdout.write(out.slice(-800));
    results.push({ rel, ok: true });
  } catch (e) {
    const msg = String(e.stdout || e.message || e).slice(0, 400);
    process.stdout.write(msg + "\n");
    results.push({ rel, ok: false, error: msg });
  }
  await new Promise((r) => setTimeout(r, 2000));
}

console.log("\n=== INTERACT SUMMARY ===");
console.log(JSON.stringify(results, null, 2));
