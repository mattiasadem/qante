#!/usr/bin/env node
/**
 * Vercel build step: expose evidence PNGs as CDN static assets without
 * bundling them into api/index.mjs (keeps the serverless bundle small).
 *
 * Hardlinks evidence/ into public/evidence/ (cp -al: fast, no duplicate bytes
 * on the build disk; real files for Vercel static upload — symlinks are not
 * reliably followed).
 */

import fs from "fs";
import path from "path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(ROOT, "public");
const linkPath = path.join(publicDir, "evidence");
const evidenceDir = path.join(ROOT, "evidence");

if (!fs.existsSync(evidenceDir)) {
  console.error("vercel-prepare: missing evidence/ directory");
  process.exit(1);
}

fs.mkdirSync(publicDir, { recursive: true });

if (fs.existsSync(linkPath)) {
  fs.rmSync(linkPath, { recursive: true, force: true });
}

const cp = spawnSync("cp", ["-al", evidenceDir, linkPath], { stdio: "inherit" });
if (cp.status !== 0) {
  console.error("vercel-prepare: cp -al evidence public/evidence failed");
  process.exit(cp.status || 1);
}

const sample = path.join(
  linkPath,
  "hyper",
  "default",
  "home",
  "hero-slideshow.1440.png"
);
if (!fs.existsSync(sample)) {
  console.error("vercel-prepare: sample evidence missing:", sample);
  process.exit(1);
}

console.log(
  "vercel-prepare: public/evidence hardlinked from evidence/ (static CDN, not in function bundle)"
);
