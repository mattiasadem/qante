#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const files = [
  'observations/obvi/default/blog-list/blog-list-main-3.json',
  'observations/obvi/default/blog-post/blog-post-main-3.json',
  'observations/obvi/default/blog-post/editorial-image-with-text-overlay.json',
  'observations/obvi/default/about-brand/promo-scrolling-marquee.json',
  'observations/obvi/default/about-brand/editorial-image-with-text-2.json',
  'observations/obvi/default/about-brand/page-content-main.json',
  'observations/obvi/default/bundle/commerce-tools-products-bundle.json',
  'observations/obvi/default/collection/collection-nav-tabs-3.json',
  'observations/obvi/default/collection/product-showcase-grid-plp-3.json',
  'observations/obvi/default/home/global-menu-drawer.json',
];

const results = [];
for (const rel of files) {
  const abs = path.join(root, rel);
  const raw = await import('node:fs').then((fs) => JSON.parse(fs.readFileSync(abs, 'utf8')));
  const hasSteps = Array.isArray(raw.interactionSteps) && raw.interactionSteps.length > 0;
  const script = hasSteps ? 'capture-interaction.mjs' : 'capture-observation.mjs';
  console.log(`\n>>> ${script} ${rel}`);
  const r = spawnSync('node', [path.join(__dirname, script), abs], {
    cwd: __dirname,
    encoding: 'utf8',
    timeout: 600000,
  });
  const ok = r.status === 0;
  if (!ok) {
    console.error(r.stdout);
    console.error(r.stderr);
  } else {
    console.log(r.stdout.split('\n').slice(-8).join('\n'));
  }
  results.push({ file: rel, script, ok, status: r.status });
  spawnSync('sleep', ['8']);
}

console.log('\n=== SUMMARY ===');
for (const r of results) console.log(r.ok ? 'OK ' : 'FAIL', r.file);
process.exit(results.some((r) => !r.ok) ? 1 : 0);
