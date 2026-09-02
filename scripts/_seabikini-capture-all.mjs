import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const obsRoot = path.join(root, "observations/seabikini/default");

function walkJson(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walkJson(p, acc);
    else if (name.endsWith(".json")) acc.push(p);
  }
  return acc;
}

const files = walkJson(obsRoot).sort();
const logPath = path.join(root, "evidence/_peek/seabikini-capture-log.json");
const results = [];

for (const file of files) {
  const rel = path.relative(root, file);
  const obs = JSON.parse(fs.readFileSync(file, "utf8"));
  const ev = obs.evidence || [];
  if (ev.filter((p) => /\.(375|768|1440)\.png$/.test(p)).length >= 3) {
    console.log("SKIP", rel);
    results.push({ file: rel, ok: true, skipped: true });
    continue;
  }
  console.log("\n===", rel, "===");
  const started = Date.now();
  const code = await new Promise((resolve) => {
    const child = spawn("node", ["scripts/capture-observation.mjs", file], {
      cwd: root,
      stdio: "inherit",
    });
    child.on("close", resolve);
  });
  results.push({
    file: rel,
    ok: code === 0,
    code,
    ms: Date.now() - started,
  });
  fs.writeFileSync(logPath, JSON.stringify(results, null, 2));
}

const failed = results.filter((r) => !r.ok);
console.log("\nDONE", results.length, "ok", results.length - failed.length, "fail", failed.length);
if (failed.length) console.log(failed);
process.exit(failed.length ? 1 : 0);
