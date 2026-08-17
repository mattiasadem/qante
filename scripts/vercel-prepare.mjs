#!/usr/bin/env node
/**
 * Vercel build step: expose evidence PNGs as CDN static assets without
 * bundling them into api/index.mjs (keeps the serverless bundle small).
 *
 * Creates public/evidence → ../evidence (symlink). Vercel serves public/
 * at the deployment root before SPA rewrites hit the function.
 */

import fs from "fs";
import path from "path";
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

fs.symlinkSync(evidenceDir, linkPath, "dir");

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

console.log("vercel-prepare: public/evidence → evidence/ (static CDN, not in function bundle)");
