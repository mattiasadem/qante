#!/usr/bin/env node
/**
 * Vercel deploy layout checks (no evidence upload, CDN redirect, Listeler counts).
 *
 *   node scripts/verify-vercel-deploy.mjs
 */

import fs from "fs";
import path from "path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "url";
import {
  EVIDENCE_CDN_BASE,
  externalEvidenceUrl,
} from "../viewer/lib/evidence-external.mjs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SAMPLE_REL = "evidence/hyper/default/home/hero-slideshow.1440.png";
const SAMPLE_PATH = "/evidence/hyper/default/home/hero-slideshow.1440.png";

function fail(msg) {
  console.error(`verify-vercel-deploy: ${msg}`);
  process.exit(1);
}

const vercelignore = fs.readFileSync(path.join(ROOT, ".vercelignore"), "utf8");
if (!/^\s*evidence\/\*\*\s*$/m.test(vercelignore)) {
  fail(".vercelignore must exclude evidence/**");
}
if (!/public\/evidence\/\*\*/.test(vercelignore)) {
  fail(".vercelignore must exclude public/evidence/**");
}

const vercelJson = JSON.parse(fs.readFileSync(path.join(ROOT, "vercel.json"), "utf8"));
const redirect = (vercelJson.redirects || []).find((r) =>
  String(r.source || "").startsWith("/evidence/")
);
if (!redirect?.destination?.includes("jsdelivr.net/gh/mattiasadem/qante")) {
  fail("vercel.json must redirect /evidence/* to jsDelivr GitHub CDN");
}
if (vercelJson.buildCommand) {
  fail("vercel.json must not run a buildCommand that copies evidence");
}

const fn = vercelJson.functions?.["api/index.mjs"];
if (!fn?.excludeFiles?.includes("evidence")) {
  fail("vercel.json must exclude evidence from api/index.mjs bundle");
}
if (!String(fn.excludeFiles).includes("viewer/**/*.test.mjs")) {
  fail("vercel.json must exclude viewer tests from api/index.mjs bundle");
}

const deployEnabled = vercelJson.git?.deploymentEnabled;
if (!deployEnabled || deployEnabled["*"] !== false || deployEnabled.main !== true) {
  fail("vercel.json must disable Git deploys on every branch except main");
}
if (vercelJson.ignoreCommand !== "node scripts/ignore-vercel-build.mjs") {
  fail("vercel.json must skip preview builds via scripts/ignore-vercel-build.mjs");
}

const ignoreMain = spawnSync(
  process.execPath,
  ["scripts/ignore-vercel-build.mjs"],
  { cwd: ROOT, env: { ...process.env, VERCEL_GIT_COMMIT_REF: "main" } },
);
if (ignoreMain.status !== 1) {
  fail("ignore-vercel-build must continue (exit 1) on main");
}
const ignorePreview = spawnSync(
  process.execPath,
  ["scripts/ignore-vercel-build.mjs"],
  {
    cwd: ROOT,
    env: { ...process.env, VERCEL_GIT_COMMIT_REF: "cursor/example-inventory" },
  },
);
if (ignorePreview.status !== 0) {
  fail("ignore-vercel-build must skip (exit 0) on preview branches");
}
console.log("verify-vercel-deploy: Git deploys only on main; preview branches skipped");

const cdnUrl = externalEvidenceUrl(SAMPLE_PATH);
if (!cdnUrl?.startsWith(EVIDENCE_CDN_BASE)) {
  fail("externalEvidenceUrl misconfigured");
}

const localSample = path.join(ROOT, SAMPLE_REL);
if (!fs.existsSync(localSample)) {
  fail(`local sample missing: ${SAMPLE_REL}`);
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

const head = spawnSync(
  "curl",
  ["-sS", "-o", "/dev/null", "-w", "%{http_code} %{content_type} %{size_download}", cdnUrl],
  { encoding: "utf8" }
);
if (head.status !== 0) {
  fail(`CDN HEAD failed: ${head.stderr || head.stdout}`);
}
const parts = (head.stdout || "").trim().split(/\s+/);
const [status, type, size] = parts;
if (status !== "200" || !type?.includes("image/png") || Number(size) < 700000) {
  fail(`CDN sample bad: ${head.stdout?.trim()}`);
}

console.log(`verify-vercel-deploy: OK CDN ${cdnUrl} (${size} bytes PNG)`);
console.log(`verify-vercel-deploy: redirect → ${redirect.destination}`);
