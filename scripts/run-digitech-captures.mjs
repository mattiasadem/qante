#!/usr/bin/env node
import { chromium } from "playwright";
import { spawnSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const obsRoot = path.join(root, "observations/digitech/default");

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".json")) out.push(p);
  }
  return out;
}

async function clearCart() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://digital-gallery-shop.myshopify.com/password", {
    waitUntil: "domcontentloaded",
    timeout: 120000,
  });
  await page.fill('input[name="password"]', "1").catch(() => {});
  await page.click('button[type="submit"]').catch(() => {});
  await page.waitForTimeout(1500);
  await page.evaluate(() => fetch("/cart/clear.js", { method: "POST" }));
  await browser.close();
}

const obsFiles = walk(obsRoot).sort();
const results = [];

for (const abs of obsFiles) {
  const rel = path.relative(root, abs);
  const raw = await import("node:fs").then((fs) => fs.readFileSync(abs, "utf8"));
  const obs = JSON.parse(raw);
  const hasSteps =
    Array.isArray(obs.interactionSteps) && obs.interactionSteps.length > 0;
  const script = hasSteps ? "capture-interaction.mjs" : "capture-observation.mjs";

  if (
    obs.schemaId === "global-cart-drawer" ||
    (obs.schemaId === "cart-page-main" && hasSteps)
  ) {
    console.log("Clearing cart before", rel);
    await clearCart();
  }

  console.log(`\n>>> ${script} ${rel}`);
  const r = spawnSync("node", [path.join(__dirname, script), abs], {
    cwd: __dirname,
    encoding: "utf8",
    timeout: 600000,
  });
  const ok = r.status === 0;
  if (!ok) {
    console.error(r.stdout);
    console.error(r.stderr);
  } else {
    console.log(r.stdout.split("\n").slice(-10).join("\n"));
  }
  results.push({ file: rel, script, ok, status: r.status });
}

console.log("\n=== SUMMARY ===");
for (const r of results) {
  console.log(r.ok ? "OK " : "FAIL", r.file, `(${r.script})`);
}
process.exit(results.some((r) => !r.ok) ? 1 : 0);
