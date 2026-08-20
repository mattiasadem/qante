/**
 * Run capture-observation.mjs for all Honey Paws observations.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const obsRoot = path.join(root, "observations", "honey", "paws");

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (ent.name.endsWith(".json")) out.push(p);
  }
  return out;
}

const files = walk(obsRoot).sort();
const results = [];

for (const file of files) {
  const rel = path.relative(root, file);
  process.stdout.write(`\n=== ${rel} ===\n`);
  const r = spawnSync("node", ["capture-observation.mjs", file], {
    cwd: __dirname,
    encoding: "utf8",
    stdio: "pipe",
  });
  process.stdout.write(r.stdout || "");
  if (r.stderr) process.stderr.write(r.stderr);
  const ok = r.status === 0;
  results.push({ file: rel, ok, status: r.status });
  if (!ok) {
    console.error(`FAILED: ${rel}`);
  }
}

const failed = results.filter((x) => !x.ok);
console.log(
  JSON.stringify(
    {
      total: results.length,
      ok: results.length - failed.length,
      failed: failed.map((f) => f.file),
    },
    null,
    2
  )
);
process.exit(failed.length ? 1 : 0);
