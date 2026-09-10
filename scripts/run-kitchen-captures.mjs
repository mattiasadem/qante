/**
 * Kitchen Ware Mod A static 3vp captures.
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const DELAY_MS = 2500;
const RETRY_WAIT_MS = 20000;
const MAX_RETRIES = 2;

function findObs() {
  const base = path.join(root, "observations/kitchen/default");
  const out = [];
  for (const dir of fs.readdirSync(base)) {
    const p = path.join(base, dir);
    if (!fs.statSync(p).isDirectory()) continue;
    for (const f of fs.readdirSync(p)) {
      if (f.endsWith(".json")) out.push(`observations/kitchen/default/${dir}/${f}`);
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
    process.stdout.write(`skip interact-only ${rel}\n`);
    continue;
  }
  const evDir = path.join(root, "evidence", obs.kaynak, obs.preset, obs.sayfa);
  const slug = obs.evidenceSlug || obs.schemaId;
  const existing = ["375", "768", "1440"].filter((vp) =>
    fs.existsSync(path.join(evDir, `${slug}.${vp}.png`))
  );
  if (existing.length >= 3) {
    results.push({ rel, ok: true, skipped: true, pngs: 3 });
    process.stdout.write(`skip already ${rel}\n`);
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
      const out = execSync(`node capture-observation.mjs ${abs}`, {
        cwd: path.join(root, "scripts"),
        encoding: "utf8",
        timeout: 300000,
      });
      const last = out.trim().split("\n").pop();
      let pngs = 0;
      try {
        const parsed = JSON.parse(last);
        pngs = (parsed.results || []).filter((r) => r.file).length;
      } catch {
        pngs = (out.match(/\.png/g) || []).length;
      }
      if (pngs >= 3) {
        results.push({ rel, ok: true, pngs });
        captured = true;
      } else {
        results.push({ rel, ok: false, error: `only ${pngs}/3` });
      }
    } catch (e) {
      results.push({ rel, ok: false, error: String(e.message || e).slice(0, 240) });
    }
  }
  await new Promise((r) => setTimeout(r, DELAY_MS));
}

console.log("\n=== SUMMARY ===");
const ok = results.filter((r) => r.ok).length;
console.log(`${ok}/${results.length} ok`);
console.log(JSON.stringify(results.filter((r) => !r.ok), null, 2));
