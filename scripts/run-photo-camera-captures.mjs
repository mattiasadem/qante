#!/usr/bin/env node
/**
 * Photo Camera 3vp + optional interact captures.
 * Usage:
 *   node scripts/run-photo-camera-captures.mjs --skip-interact --concurrency 3
 *   node scripts/run-photo-camera-captures.mjs --only-interact
 */
import { spawn } from "node:child_process";
import { readdirSync, statSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const obsRoot = path.join(root, "observations/photo-camera/default");

function arg(name, fallback = null) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : fallback;
}
const only = arg("--only");
const skipInteract = process.argv.includes("--skip-interact");
const onlyInteract = process.argv.includes("--only-interact");
const concurrency = Number(arg("--concurrency", "2")) || 2;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".json")) out.push(p);
  }
  return out;
}

function alreadyHasStatic(obs) {
  const ev = obs.evidence || [];
  return (
    ev.some((e) => e.endsWith(".375.png") && !e.includes(".initial.") && !e.includes(".open.") && !e.includes(".filled.")) &&
    ev.some((e) => e.endsWith(".1440.png"))
  );
}

const obsFiles = walk(obsRoot)
  .filter((p) => (only ? p.includes(`/default/${only}/`) : true))
  .sort();

const jobs = [];
for (const abs of obsFiles) {
  const obs = JSON.parse(readFileSync(abs, "utf8"));
  const hasSteps =
    Array.isArray(obs.interactionSteps) && obs.interactionSteps.length > 0;
  if (onlyInteract) {
    if (hasSteps) jobs.push({ abs, script: "capture-interaction.mjs", obs });
    continue;
  }
  if (skipInteract) {
    if (alreadyHasStatic(obs)) continue;
    jobs.push({ abs, script: "capture-observation.mjs", obs });
    continue;
  }
  jobs.push({
    abs,
    script: hasSteps ? "capture-interaction.mjs" : "capture-observation.mjs",
    obs,
  });
}

function runOne(job) {
  const rel = path.relative(root, job.abs);
  return new Promise((resolve) => {
    console.log(`START ${job.script} ${rel}`);
    const child = spawn("node", [path.join(__dirname, job.script), job.abs], {
      cwd: __dirname,
      encoding: "utf8",
    });
    let out = "";
    let err = "";
    child.stdout.on("data", (d) => {
      out += d;
    });
    child.stderr.on("data", (d) => {
      err += d;
    });
    child.on("close", (status) => {
      const ok = status === 0;
      console.log(ok ? `OK   ${rel}` : `FAIL ${rel} status=${status}`);
      if (!ok) {
        console.error(out.split("\n").slice(-20).join("\n"));
        console.error(err.split("\n").slice(-20).join("\n"));
      }
      resolve({ file: rel, script: job.script, ok, status });
    });
  });
}

async function pool(list, n) {
  const results = [];
  let i = 0;
  async function worker() {
    while (i < list.length) {
      const idx = i++;
      results[idx] = await runOne(list[idx]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(n, list.length) }, worker));
  return results;
}

console.log(`jobs=${jobs.length} concurrency=${concurrency}`);
const results = await pool(jobs, concurrency);
console.log("\n=== SUMMARY ===");
for (const r of results) {
  console.log(r.ok ? "OK " : "FAIL", r.file, `(${r.script})`);
}
process.exit(results.some((r) => !r.ok) ? 1 : 0);
