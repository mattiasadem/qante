#!/usr/bin/env node
/**
 * Listeler kaynağı doğrulayıcı — candidates/*.md tabloları.
 *
 *   node scripts/validate-candidates.mjs
 *   node scripts/validate-candidates.mjs --json
 *
 * Çıkış kodu: beklenti uyuşmazsa 1, uyuşursa 0.
 */

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadCandidates } from "../viewer/lib/candidates.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const EXPECT = {
  "Shopify temalar": { total: 70, done: 58, inProgress: 0, queue: 12 },
  "DTC-69": { total: 69, done: 66, inProgress: 3, queue: 0 },
  "Shopify appler": { total: 28, done: 28, inProgress: 0, queue: 0 },
};

function summarizeGroup(rows) {
  const done = rows.filter((r) => r.status === "done").length;
  const inProgress = rows.filter((r) => r.status === "in progress").length;
  const queue = rows.filter((r) => !r.status).length;
  return { total: rows.length, done, inProgress, queue };
}

function main() {
  const data = loadCandidates(ROOT);
  const groups = Object.fromEntries(
    [...new Set(data.lists.map((r) => r.group))].map((group) => [
      group,
      summarizeGroup(data.lists.filter((r) => r.group === group)),
    ])
  );

  const failures = [];
  for (const [group, expected] of Object.entries(EXPECT)) {
    const actual = groups[group];
    if (!actual) {
      failures.push(`${group}: group missing`);
      continue;
    }
    for (const key of ["total", "done", "inProgress", "queue"]) {
      if (actual[key] !== expected[key]) {
        failures.push(
          `${group}.${key}: expected ${expected[key]}, got ${actual[key]}`
        );
      }
    }
  }

  const payload = {
    generatedAt: data.generatedAt,
    groups,
    expected: EXPECT,
    ok: failures.length === 0,
    failures,
  };

  if (process.argv.includes("--json")) {
    console.log(JSON.stringify(payload, null, 2));
  } else {
    for (const [group, counts] of Object.entries(groups)) {
      console.log(
        `${group}: total ${counts.total}, done ${counts.done}, in progress ${counts.inProgress}, queue ${counts.queue}`
      );
    }
    if (failures.length) {
      console.error("validate-candidates: FAILED");
      for (const f of failures) console.error(`  - ${f}`);
    } else {
      console.log("validate-candidates: OK");
    }
  }

  process.exit(failures.length ? 1 : 0);
}

main();
