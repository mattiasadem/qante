#!/usr/bin/env node
import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const files = [
  "observations/shine/default/home/navigation-header-mega.json",
  "observations/shine/default/home/global-predictive-search.json",
  "observations/shine/default/product-detail/product-info-main.json",
  "observations/shine/default/faq-support/faq-collapsible-tabs.json",
  "observations/shine/default/collection/product-showcase-grid-plp.json",
  "observations/shine/default/home/global-cart-drawer.json",
  "observations/shine/default/cart/cart-page-main.json",
];

function run(f) {
  return new Promise((resolve) => {
    const child = spawn("node", ["capture-interaction.mjs", path.join(root, f)], {
      cwd: __dirname,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let out = "";
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (out += d));
    child.on("close", (code) => {
      if (code === 0) console.log(`OK ${f}`);
      else console.error(`FAIL ${f}\n${out.slice(-1200)}`);
      resolve({ code, f, out });
    });
  });
}

const results = [];
for (const f of files) {
  results.push(await run(f));
  await new Promise((r) => setTimeout(r, 3000));
}
const fail = results.filter((r) => r.code !== 0);
console.log(`Done: ${files.length - fail.length}/${files.length} ok`);
process.exit(fail.length ? 1 : 0);
