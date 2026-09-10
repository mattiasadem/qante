/**
 * Second pass: remaining Stationery templates + overlay selectors.
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { unlockStorefrontIfNeeded, STOREFRONT_UA } from "./unlock-storefront.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HOST = "https://book-online-store-2.myshopify.com";
const outPath = path.resolve(
  __dirname,
  "../evidence/_peek/stationery-scan-pages.json"
);

async function extract(page, label) {
  return page.evaluate((pageLabel) => {
    const sections = [...document.querySelectorAll("[id^='shopify-section-']")].map(
      (el, i) => {
        const r = el.getBoundingClientRect();
        const text = (el.innerText || "")
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean)
          .slice(0, 28);
        return {
          i,
          id: el.id,
          cls: String(el.className || "").slice(0, 200),
          childCls: String(el.firstElementChild?.className || "").slice(0, 160),
          h: Math.round(r.height),
          text,
        };
      }
    );
    const overlaySels = [
      "cart-drawer",
      "#CartDrawer",
      "#cart-drawer",
      ".cart-drawer",
      "predictive-search",
      "details-modal.header__search",
      "#SearchModal",
      ".header__search",
      "menu-drawer",
      "#menu-drawer",
      "#Details-menu-drawer-container",
      ".menu-drawer",
      "quick-add-modal",
      "#QuickAdd",
      ".quick-add-modal",
    ];
    const overlays = {};
    for (const sel of overlaySels) {
      const el = document.querySelector(sel);
      if (!el) {
        overlays[sel] = null;
        continue;
      }
      overlays[sel] = {
        id: el.id,
        tag: el.tagName,
        cls: String(el.className).slice(0, 120),
        h: Math.round(el.getBoundingClientRect().height),
      };
    }
    const searchInputs = [...document.querySelectorAll("input[type='search'], input[name='q']")].map(
      (el) => ({
        name: el.name,
        type: el.type,
        id: el.id,
        cls: String(el.className).slice(0, 80),
        placeholder: el.placeholder,
      })
    );
    const cartBtns = [...document.querySelectorAll("a[href*='/cart'], button[name='add'], form[action*='/cart/add'] button")].map(
      (el) => ({
        tag: el.tagName,
        href: el.getAttribute("href"),
        cls: String(el.className).slice(0, 100),
        text: (el.innerText || "").trim().slice(0, 40),
        aria: el.getAttribute("aria-controls"),
      })
    ).slice(0, 12);
    return {
      label: pageLabel,
      url: location.href,
      title: document.title,
      sections,
      overlays,
      searchInputs,
      cartBtns,
    };
  }, label);
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  userAgent: STOREFRONT_UA,
  viewport: { width: 1440, height: 1100 },
});
const page = await context.newPage();

async function go(url) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
  await unlockStorefrontIfNeeded(page, { storefrontPassword: "1" });
  await page.waitForTimeout(2000);
}

const paths = [
  "/pages/our-story",
  "/pages/about-layout-1",
  "/blogs/news/creative-ideas-for-office-stationery-organization",
  "/pages/wishlist",
  "/pages/compare",
  "/collections/bestseller",
  "/products/colored-pencil-crayon",
];

const report = [];
for (const p of paths) {
  try {
    await go(`${HOST}${p}`);
    report.push(await extract(page, p));
  } catch (err) {
    report.push({ label: p, error: String(err) });
  }
}

fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
console.log(
  JSON.stringify(
    report.map((p) => ({
      label: p.label,
      url: p.url,
      title: p.title,
      err: p.error,
      sections: p.sections?.map((s) => ({
        id: s.id.replace("shopify-section-", ""),
        h: s.h,
        text: s.text.slice(0, 8),
      })),
      overlays: p.overlays,
    })),
    null,
    2
  )
);
await browser.close();
