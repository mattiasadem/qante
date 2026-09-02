#!/usr/bin/env node
import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const files = [
  "observations/herbanicure/default/home/global-cart-drawer.json",
  "observations/herbanicure/default/home/global-menu-drawer.json",
  "observations/herbanicure/default/home/global-predictive-search.json",
  "observations/herbanicure/default/collection/product-showcase-grid-plp.json",
  "observations/herbanicure/default/product-detail/product-info-main.json",
  "observations/herbanicure/default/faq-support/faq-collapsible-tabs.json",
  "observations/herbanicure/default/cart/cart-page-main.json",
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
      console.log(code === 0 ? `OK ${f}` : `FAIL ${f}\n${out.slice(-800)}`);
      resolve(code);
    });
  });
}

let fail = 0;
for (const f of files) {
  const code = await run(f);
  if (code !== 0) fail++;
}
console.log(`Interact done: ${files.length - fail}/${files.length}`);
process.exit(fail > 0 ? 1 : 0);
