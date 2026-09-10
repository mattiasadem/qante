#!/usr/bin/env node
import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (ent.name.endsWith(".json")) out.push(p);
  }
  return out;
}

const only = process.argv.slice(2);
const obsDir = path.join(root, "observations", "shine");
let files = walk(obsDir).sort();
if (only.length) {
  files = files.filter((f) =>
    only.some((s) => f.includes(s) || path.basename(f).includes(s))
  );
}

function runCapture(f) {
  return new Promise((resolve) => {
    const child = spawn("node", ["capture-observation.mjs", f], {
      cwd: __dirname,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let out = "";
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (out += d));
    child.on("close", (code) => {
      const rel = path.relative(root, f);
      if (code === 0) console.log(`OK ${rel}`);
      else console.error(`FAIL ${rel}\n${out.slice(-800)}`);
      resolve({ code, rel, out });
    });
  });
}

const results = [];
for (const f of files) {
  results.push(await runCapture(f));
  // breathe between observations — Shopify checkpoint
  await new Promise((r) => setTimeout(r, 2500));
}
const fail = results.filter((r) => r.code !== 0);
console.log(`Done: ${files.length - fail.length}/${files.length} ok`);
if (fail.length) {
  console.error("Failed:\n" + fail.map((f) => f.rel).join("\n"));
  process.exit(1);
}
