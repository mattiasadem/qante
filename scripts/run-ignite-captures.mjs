#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const obsRoot = path.join(root, "observations/ignite/default");

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
  console.log(`\n>>> capture-observation ${rel}`);
  const r = spawnSync("node", ["capture-observation.mjs", abs], {
    cwd: __dirname,
    encoding: "utf8",
    timeout: 600000,
  });
  const ok = r.status === 0;
  if (!ok) {
    console.error(r.stdout?.slice(-2000));
    console.error(r.stderr?.slice(-2000));
  } else {
    const lines = r.stdout.trim().split("\n");
    console.log(lines.slice(-3).join("\n"));
  }
  results.push({ file: rel, ok, status: r.status });
}

console.log("\n=== SUMMARY ===");
const okCount = results.filter((r) => r.ok).length;
for (const r of results) console.log(r.ok ? "OK  " : "FAIL", r.file);
console.log(`\n${okCount}/${results.length} OK`);
process.exit(okCount === results.length ? 0 : 1);
