/**
 * Levitate Mod A static 3vp captures.
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const DELAY_MS = 2000;
const RETRY_WAIT_MS = 8000;
const MAX_RETRIES = 2;

function findObs() {
  const base = path.join(root, "observations/levitate/default");
  const out = [];
  for (const dir of fs.readdirSync(base)) {
    const p = path.join(base, dir);
    if (!fs.statSync(p).isDirectory()) continue;
    for (const f of fs.readdirSync(p)) {
      if (f.endsWith(".json")) out.push(`observations/levitate/default/${dir}/${f}`);
    }
  }
  return out.sort();
}

const observations = findObs();
const results = [];
for (const rel of observations) {
  const abs = path.join(root, rel);
  const obs = JSON.parse(fs.readFileSync(abs, "utf8"));
  if (obs.interactionSteps?.length) {
    results.push({ rel, ok: true, skipped: true, reason: "interact-only" });
    process.stdout.write(`    skip (interact-only) ${rel}\n`);
    continue;
  }
  const evDir = path.join(root, "evidence", obs.kaynak, obs.preset, obs.sayfa);
  const slug = obs.evidenceSlug || obs.schemaId;
  const existing = ["375", "768", "1440"].filter((vp) =>
    fs.existsSync(path.join(evDir, `${slug}.${vp}.png`))
  );
  if (existing.length >= 3 && !obs.interactionSteps?.length) {
    results.push({ rel, ok: true, skipped: true, pngs: 3 });
    process.stdout.write(`    skip (already ${existing.length} vp) ${rel}\n`);
    continue;
  }
  process.stdout.write(`\n>>> ${rel}\n`);
  let captured = false;
  for (let attempt = 1; attempt <= MAX_RETRIES && !captured; attempt++) {
    if (attempt > 1) {
      process.stdout.write(`    retry ${attempt}\n`);
      await new Promise((r) => setTimeout(r, RETRY_WAIT_MS));
    }
    try {
      execSync(`node capture-observation.mjs ${abs}`, {
        cwd: path.join(root, "scripts"),
        encoding: "utf8",
        timeout: 300000,
        stdio: "inherit",
      });
      const onDisk = ["375", "768", "1440"].filter((vp) =>
        fs.existsSync(path.join(evDir, `${slug}.${vp}.png`))
      ).length;
      if (onDisk >= 3) {
        results.push({ rel, ok: true, pngs: onDisk });
        captured = true;
      } else {
        process.stdout.write(`    only ${onDisk}/3 on disk\n`);
      }
    } catch (e) {
      const onDisk = ["375", "768", "1440"].filter((vp) =>
        fs.existsSync(path.join(evDir, `${slug}.${vp}.png`))
      ).length;
      if (onDisk >= 3) {
        results.push({ rel, ok: true, pngs: onDisk, recovered: true });
        captured = true;
      } else {
        process.stdout.write(`    err: ${e.message?.slice(0, 180)}\n`);
      }
    }
  }
  if (!captured) results.push({ rel, ok: false, error: "retries exhausted" });
  await new Promise((r) => setTimeout(r, DELAY_MS));
}

const summary = {
  ok: results.filter((r) => r.ok).length,
  total: results.length,
  fail: results.filter((r) => !r.ok),
};
fs.writeFileSync("/tmp/levitate-capture-summary.json", JSON.stringify({ summary, results }, null, 2));
console.log("\n=== SUMMARY ===");
console.log(`${summary.ok}/${summary.total} ok`);
console.log(JSON.stringify(summary.fail, null, 2));
