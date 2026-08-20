#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const obsRoot = path.join(root, "observations/boost/default");

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".json")) out.push(p);
  }
  return out;
}

const obsFiles = walk(obsRoot).sort();
const results = [];

for (const abs of obsFiles) {
  const rel = path.relative(root, abs);
  console.log(`\n>>> capture-observation.mjs ${rel}`);
  const r = spawnSync("node", [path.join(__dirname, "capture-observation.mjs"), abs], {
    cwd: __dirname,
    encoding: "utf8",
    timeout: 600000,
  });
  const ok = r.status === 0;
  if (!ok) {
    console.error(r.stdout);
    console.error(r.stderr);
  } else {
    console.log(r.stdout.split("\n").slice(-6).join("\n"));
  }
  results.push({ file: rel, ok, status: r.status });
}

console.log("\n=== SUMMARY ===");
for (const r of results) {
  console.log(r.ok ? "OK " : "FAIL", r.file);
}
process.exit(results.some((r) => !r.ok) ? 1 : 0);
