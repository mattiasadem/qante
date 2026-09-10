import { spawnSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const files = [
  "observations/matress/default/home/navigation-header-mega.json",
  "observations/matress/default/home/global-menu-drawer.json",
  "observations/matress/default/home/global-predictive-search.json",
  "observations/matress/default/home/product-showcase-grid-featured.json",
  "observations/matress/default/product-detail/product-info-main.json",
  "observations/matress/default/product-detail/product-info-tabs.json",
  "observations/matress/default/product-detail/faq-collapsible-tabs.json",
  "observations/matress/default/faq-support/faq-collapsible-tabs.json",
  "observations/matress/default/collection/product-showcase-grid-plp.json",
  "observations/matress/default/home/global-cart-drawer.json",
  "observations/matress/default/cart/cart-page-main.json",
];

let ok = 0;
let fail = 0;
for (const file of files) {
  console.log(`\n>>> INTERACT ${file}`);
  const r = spawnSync("node", ["scripts/capture-interaction.mjs", file], {
    cwd: root,
    encoding: "utf8",
    timeout: 360000,
  });
  if (r.stdout) process.stdout.write(r.stdout);
  if (r.stderr) process.stderr.write(r.stderr);
  if (r.status === 0) ok += 1;
  else {
    fail += 1;
    console.error(`FAIL ${file} status=${r.status}`);
  }
}
console.log(`\nInteract done ok=${ok} fail=${fail}`);
if (fail) process.exit(1);
