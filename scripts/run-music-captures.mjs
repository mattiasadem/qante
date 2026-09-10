/**
 * Batch static 3vp capture for Music observations.
 * Usage: node scripts/run-music-captures.mjs
 */
import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const obsRoot = path.join(root, "observations/music/default");

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith(".json")) acc.push(p);
  }
  return acc;
}

const files = walk(obsRoot).sort();
const start = Number(process.env.START || 0);
const only = process.env.ONLY || "";
const list = only
  ? files.filter((f) => f.includes(only))
  : files.slice(start);

console.log(`Music captures: ${list.length} files (from ${files.length})`);

for (let i = 0; i < list.length; i++) {
  const file = list[i];
  console.log(`\n[${i + 1}/${list.length}] ${path.relative(root, file)}`);
  const code = await new Promise((resolve) => {
    const child = spawn(
      "node",
      ["scripts/capture-observation.mjs", file],
      { cwd: root, stdio: "inherit" }
    );
    child.on("close", resolve);
  });
  if (code !== 0) {
    console.error(`FAIL ${file} exit=${code}`);
  }
}
