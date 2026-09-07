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

const obsDir = path.join(root, "observations", "herbanicure");
const files = walk(obsDir).sort();

function runCapture(f) {
  return new Promise((resolve, reject) => {
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
      else console.error(`FAIL ${rel}\n${out.slice(-500)}`);
      resolve(code);
    });
  });
}

let fail = 0;
for (const f of files) {
  const code = await runCapture(f);
  if (code !== 0) fail++;
}
console.log(`Done: ${files.length - fail}/${files.length} ok`);
process.exit(fail > 0 ? 1 : 0);
