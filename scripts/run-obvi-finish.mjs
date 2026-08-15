#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const files = [
  'observations/obvi/default/community/page-content-main.json',
  'observations/obvi/default/community/editorial-image-with-text.json',
  'observations/obvi/default/about-brand/page-content-main-2.json',
  'observations/obvi/default/about-brand/collection-nav-slider-2.json',
  'observations/obvi/default/faq/faq-collapsible-tabs.json',
  'observations/obvi/default/contact/lead-capture-form.json',
];

const results = [];
for (const rel of files) {
  console.log(`\n>>> capture-observation.mjs ${rel}`);
  const r = spawnSync('node', [path.join(__dirname, 'capture-observation.mjs'), path.join(root, rel)], {
    cwd: __dirname,
    encoding: 'utf8',
    timeout: 600000,
  });
  const ok = r.status === 0;
  if (!ok) {
    console.error(r.stdout);
    console.error(r.stderr);
  } else {
    console.log(r.stdout.split('\n').slice(-6).join('\n'));
  }
  results.push({ file: rel, ok });
  spawnSync('sleep', ['8']);
}
console.log('\n=== SUMMARY ===');
for (const r of results) console.log(r.ok ? 'OK ' : 'FAIL', r.file);
process.exit(results.some((r) => !r.ok) ? 1 : 0);
