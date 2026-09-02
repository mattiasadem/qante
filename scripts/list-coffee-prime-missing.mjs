#!/usr/bin/env node
/** List coffee-prime observations missing static 3vp PNGs */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const base = path.join(root, "observations/coffee-prime/default");
const missing = [];
for (const dir of fs.readdirSync(base)) {
  const p = path.join(base, dir);
  if (!fs.statSync(p).isDirectory()) continue;
  for (const f of fs.readdirSync(p).filter((x) => x.endsWith(".json"))) {
    const obs = JSON.parse(fs.readFileSync(path.join(p, f), "utf8"));
    if (obs.interactionSteps?.length) continue;
    const slug = obs.evidenceSlug || obs.schemaId;
    const evDir = path.join(root, "evidence", obs.kaynak, obs.preset, obs.sayfa);
    const have = ["375", "768", "1440"].filter((vp) =>
      fs.existsSync(path.join(evDir, `${slug}.${vp}.png`))
    );
    if (have.length < 3) {
      missing.push({ rel: `observations/coffee-prime/default/${dir}/${f}`, have: have.length, slug });
    }
  }
}
console.log(JSON.stringify({ total: missing.length, missing }, null, 2));
