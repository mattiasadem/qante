/**
 * Hyper home section adaylarını listeler (trust / social-proof avı).
 */
import { chromium } from "playwright";
import {
  dismissAllOverlays,
  assertCleanForScreenshot,
} from "./dismiss-overlays.mjs";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
});

await page.goto("https://hyper-theme-demo.myshopify.com/", {
  waitUntil: "domcontentloaded",
  timeout: 90000,
});
await page.waitForTimeout(4000);
await dismissAllOverlays(page);
await assertCleanForScreenshot(page);

const sections = await page.evaluate(() => {
  const roots = [
    ...document.querySelectorAll(
      "main section, #MainContent section, main > div > *"
    ),
  ];
  return roots.slice(0, 40).map((el, i) => {
    const r = el.getBoundingClientRect();
    const cls = (el.className || "").toString().slice(0, 120);
    const id = el.id || "";
    const text = (el.innerText || "")
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 8);
    const htmlHint = el.outerHTML.slice(0, 200);
    return {
      i,
      tag: el.tagName,
      id,
      cls,
      y: Math.round(r.y + window.scrollY),
      h: Math.round(r.height),
      w: Math.round(r.width),
      text,
      htmlHint,
    };
  });
});

// Keyword filter
const keys =
  /trust|logo|brand|press|partner|as seen|testimonial|review|social|badge|guarantee|secure|payment|featured in|marquee/i;

const scored = sections.map((s) => {
  const blob = `${s.cls} ${s.id} ${s.text.join(" ")} ${s.htmlHint}`;
  return { ...s, hit: keys.test(blob) };
});

console.log(
  JSON.stringify(
    {
      total: sections.length,
      hits: scored.filter((s) => s.hit),
      all: scored.map(({ i, id, cls, y, h, text, hit }) => ({
        i,
        hit,
        id,
        cls,
        y,
        h,
        text,
      })),
    },
    null,
    2
  )
);

await browser.close();
