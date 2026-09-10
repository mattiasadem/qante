/**
 * Music shopper-state captures — run after static 3vp + patch-music-interact.
 */
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const interactObs = [
  "observations/music/default/home/navigation-header-mega.json",
  "observations/music/default/home/global-menu-drawer.json",
  "observations/music/default/home/global-predictive-search.json",
  "observations/music/default/home/global-cart-drawer.json",
  "observations/music/default/home/product-showcase-grid-featured.json",
  "observations/music/default/product-detail/product-info-main.json",
  "observations/music/default/product-detail/product-info-tabs.json",
  "observations/music/default/collection/product-showcase-grid-plp.json",
  "observations/music/default/cart/cart-page-main.json",
  "observations/music/default/faq-support/faq-collapsible-tabs.json",
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
      parsed = { raw: last.slice(0, 300) };
    }
    results.push({ rel, ok: true, ...parsed });
  } catch (e) {
    results.push({ rel, ok: false, error: (e.message || "").slice(0, 400) });
    console.error(e.stdout?.slice?.(-800) || e.message);
  }
  await new Promise((r) => setTimeout(r, 4000));
}

console.log("\n=== INTERACT SUMMARY ===");
console.log(JSON.stringify(results, null, 2));
