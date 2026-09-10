/**
 * Batch static 3vp capture for Matress observations.
 */
import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const obsRoot = path.join(root, "observations/matress/default");

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (ent.name.endsWith(".json")) acc.push(p);
  }
  return acc;
}

const files = walk(obsRoot).sort();
const skip = process.env.SKIP ? Number(process.env.SKIP) : 0;
const only = process.env.ONLY || null;
const list = only
  ? files.filter((f) => f.includes(only))
  : files.slice(skip);

console.log(`Capturing ${list.length} / ${files.length} (skip=${skip})`);

let ok = 0;
let fail = 0;
for (const file of list) {
  const rel = path.relative(root, file);
  console.log(`\n>>> ${rel}`);
  const r = spawnSync("node", ["scripts/capture-observation.mjs", file], {
    cwd: root,
    encoding: "utf8",
    timeout: 240000,
  });
  if (r.stdout) process.stdout.write(r.stdout);
  if (r.stderr) process.stderr.write(r.stderr);
  if (r.status === 0) {
    ok += 1;
  } else {
    fail += 1;
    console.error(`FAIL ${rel} status=${r.status}`);
  }
}
console.log(`\nDone ok=${ok} fail=${fail}`);
if (fail) process.exit(1);
