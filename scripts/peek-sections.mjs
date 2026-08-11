import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import {
  dismissAllOverlays,
  assertCleanForScreenshot,
} from "./dismiss-overlays.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "../evidence/_peek");
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto("https://hyper-theme-demo.myshopify.com/", {
  waitUntil: "domcontentloaded",
  timeout: 90000,
});
await page.waitForTimeout(4000);
await dismissAllOverlays(page);
await assertCleanForScreenshot(page);

const targets = [
  {
    name: "empty-180",
    sel: ".section.section--padding.page-width.page-width--fixed",
    pick: async (p) => {
      const all = p.locator(".section.section--padding.page-width.page-width--fixed");
      const n = await all.count();
      for (let i = 0; i < n; i++) {
        const box = await all.nth(i).boundingBox();
        if (box && box.height > 150 && box.height < 220) return all.nth(i);
      }
      return null;
    },
  },
  {
    name: "custom-content-empty",
    sel: "[class*='custom_content_JxRy7x'], [id*='custom_content_JxRy7x']",
    pick: async (p) => p.locator("[id*='custom_content_JxRy7x'], [class*='custom_content_JxRy7x']").first(),
  },
  {
    name: "testimonials",
    sel: ".section-testimonials",
    pick: async (p) => p.locator(".section-testimonials").first(),
  },
];

const report = [];
for (const t of targets) {
  const loc = await t.pick(page);
  if (!loc || !(await loc.count())) {
    report.push({ name: t.name, ok: false });
    continue;
  }
  await loc.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  const box = await loc.boundingBox();
  const imgCount = await loc.locator("img").count();
  const text = (await loc.innerText()).split("\n").map((s) => s.trim()).filter(Boolean).slice(0, 10);
  const out = path.join(outDir, `${t.name}.png`);
  await loc.screenshot({ path: out });
  report.push({ name: t.name, ok: true, box, imgCount, text, out });
}

console.log(JSON.stringify(report, null, 2));
await browser.close();
