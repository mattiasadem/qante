#!/usr/bin/env node
/**
 * Local proof that evidence is reachable via public/ static path (Vercel layout)
 * and Listeler counts match expectations.
 *
 *   node scripts/verify-vercel-static.mjs
 */

import fs from "fs";
import path from "path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SAMPLE_REL = "hyper/default/home/hero-slideshow.1440.png";
const SAMPLE_PUBLIC = path.join(ROOT, "public", "evidence", SAMPLE_REL);

const prep = spawnSync("node", ["scripts/vercel-prepare.mjs"], {
  cwd: ROOT,
  encoding: "utf8",
});
if (prep.status !== 0) {
  console.error(prep.stdout || prep.stderr);
  process.exit(prep.status || 1);
}

if (!fs.existsSync(SAMPLE_PUBLIC)) {
  console.error("verify-vercel-static: missing", SAMPLE_PUBLIC);
  process.exit(1);
}

const buf = fs.readFileSync(SAMPLE_PUBLIC);
const isPng = buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47;
if (!isPng) {
  console.error("verify-vercel-static: not a PNG", SAMPLE_PUBLIC);
  process.exit(1);
}

const candidates = spawnSync("node", ["scripts/validate-candidates.mjs"], {
  cwd: ROOT,
  encoding: "utf8",
});
process.stdout.write(candidates.stdout || "");
if (candidates.status !== 0) {
  process.stderr.write(candidates.stderr || "");
  process.exit(candidates.status || 1);
}

console.log(
  `verify-vercel-static: OK public/evidence/${SAMPLE_REL} (${buf.length} bytes PNG)`
);
