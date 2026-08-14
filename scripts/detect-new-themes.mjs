/**
 * HEAD vs HEAD~1: yeni tema / preset klasörü var mı?
 * Usage: node detect-new-themes.mjs [--github-output]
 */
import { execSync } from "child_process";

function sh(cmd) {
  try {
    return execSync(cmd, { encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

const before = sh("git rev-parse HEAD~1");
if (!before) {
  console.log("No parent commit — skip");
  process.exit(0);
}

const added = sh("git diff --name-only --diff-filter=A HEAD~1 HEAD")
  .split("\n")
  .filter(Boolean);

const hits = [];
for (const f of added) {
  const m = f.match(/^observations\/([^/]+)\/([^/]+)\//);
  if (!m) continue;
  const [, theme, preset] = m;
  if (theme.startsWith("_")) continue;
  hits.push({ theme, preset, file: f });
}

function existed(theme, preset) {
  const path = preset
    ? `observations/${theme}/${preset}`
    : `observations/${theme}`;
  const listed = sh(`git ls-tree -r --name-only HEAD~1 -- ${path}`);
  return Boolean(listed);
}

const newThemes = new Map();
const newPresets = new Map();

for (const h of hits) {
  if (!existed(h.theme)) {
    if (!newThemes.has(h.theme)) newThemes.set(h.theme, new Set());
    newThemes.get(h.theme).add(h.preset);
  } else if (!existed(h.theme, h.preset)) {
    const key = `${h.theme}/${h.preset}`;
    if (!newPresets.has(key)) newPresets.set(key, h);
  }
}

const themes = [...newThemes.entries()].map(([theme, presets]) => ({
  theme,
  presets: [...presets].sort(),
}));
const presets = [...newPresets.keys()].sort();

const lines = [];
for (const t of themes) {
  lines.push(`Yeni tema: ${t.theme} (${t.presets.join(", ")})`);
}
for (const p of presets) {
  lines.push(`Yeni preset: ${p}`);
}

const text = lines.join("\n");
const hasNew = lines.length > 0;

if (process.argv.includes("--github-output")) {
  const out = process.env.GITHUB_OUTPUT;
  const body = [
    `has_new=${hasNew}`,
    `count=${lines.length}`,
    `text<<EOF`,
    text || "(yok)",
    `EOF`,
  ].join("\n");
  if (out) {
    const fs = await import("fs");
    fs.appendFileSync(out, body + "\n");
  } else {
    console.log(body);
  }
} else {
  console.log(hasNew ? text : "Yeni tema/preset yok");
}

if (hasNew) {
  console.error(text);
}
