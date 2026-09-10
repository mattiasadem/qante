/**
 * One-off walk of official Speedo Stationery demo.
 * Unlock password 1 on THIS host only. Do not invent another host.
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { unlockStorefrontIfNeeded, STOREFRONT_UA } from "./unlock-storefront.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HOST = "https://book-online-store-2.myshopify.com";
const outPath = path.resolve(__dirname, "../evidence/_peek/stationery-scan.json");

async function extractPage(page, label) {
  return page.evaluate((pageLabel) => {
    const theme = window.Shopify?.theme || {};
    const shop = window.Shopify?.shop || "";
    const sections = [...document.querySelectorAll("[id^='shopify-section-']")].map(
      (el, i) => {
        const r = el.getBoundingClientRect();
        const text = (el.innerText || "")
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean)
          .slice(0, 14);
        const imgs = [...el.querySelectorAll("img")]
          .map((img) => img.alt || img.src)
          .slice(0, 6);
        const typeHint =
          el.getAttribute("class") ||
          el.firstElementChild?.getAttribute("class") ||
          "";
        return {
          i,
          id: el.id,
          cls: String(typeHint).slice(0, 180),
          tag: el.tagName,
          childTag: el.firstElementChild?.tagName || "",
          childCls: String(el.firstElementChild?.className || "").slice(0, 160),
          y: Math.round(r.y + window.scrollY),
          h: Math.round(r.height),
          w: Math.round(r.width),
          text,
          imgs,
        };
      }
    );
    const links = {
      products: [...document.querySelectorAll('a[href*="/products/"]')]
        .map((a) => a.getAttribute("href"))
        .filter(Boolean)
        .slice(0, 20),
      collections: [...document.querySelectorAll('a[href*="/collections/"]')]
        .map((a) => a.getAttribute("href"))
        .filter(Boolean)
        .slice(0, 20),
      pages: [...document.querySelectorAll('a[href*="/pages/"]')]
        .map((a) => a.getAttribute("href"))
        .filter(Boolean)
        .slice(0, 20),
      blogs: [...document.querySelectorAll('a[href*="/blogs/"]')]
        .map((a) => a.getAttribute("href"))
        .filter(Boolean)
        .slice(0, 20),
    };
    const overlays = {
      cartDrawer: !!document.querySelector(
        "cart-drawer, #CartDrawer, #cart-drawer, [id*='CartDrawer']"
      ),
      search: !!document.querySelector(
        "predictive-search, details-modal.header__search, [id*='Search']"
      ),
      menuDrawer: !!document.querySelector(
        "menu-drawer, #menu-drawer, details.menu-drawer-container, [id*='menu-drawer']"
      ),
      headerDetails: [...document.querySelectorAll("header details")].map((d) => ({
        id: d.id,
        cls: String(d.className).slice(0, 80),
        summary: (d.querySelector("summary")?.innerText || "").slice(0, 80),
      })),
    };
    return {
      label: pageLabel,
      url: location.href,
      title: document.title,
      theme: {
        name: theme.name,
        id: theme.id,
        schema_name: theme.schema_name,
        schema_version: theme.schema_version,
        role: theme.role,
        theme_store_id: theme.theme_store_id,
        handle: theme.handle,
        style: theme.style,
      },
      shop,
      locale: document.documentElement.lang,
      sections,
      links,
      overlays,
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
  const unlock = await unlockStorefrontIfNeeded(page, {
    storefrontPassword: "1",
  });
  await page.waitForTimeout(2500);
  return unlock;
}

const report = { host: HOST, pages: [], sitemap: {} };

const first = await go(`${HOST}/`);
report.unlockHome = first;
report.pages.push(await extractPage(page, "home"));

// Discover sitemap-ish routes from home + common Speedo paths
const extras = [
  "/collections",
  "/collections/all",
  "/search?q=pen",
  "/cart",
  "/blogs/news",
  "/pages/about-us",
  "/pages/contact",
  "/pages/faqs",
  "/pages/faq",
  "/pages/contact-us",
  "/pages",
];

for (const pathName of extras) {
  try {
    const unlock = await go(`${HOST}${pathName}`);
    const data = await extractPage(page, pathName);
    data.unlock = unlock;
    report.pages.push(data);
  } catch (err) {
    report.pages.push({ label: pathName, error: String(err) });
  }
}

// First product from home if present
const home = report.pages.find((p) => p.label === "home");
const productHref = home?.links?.products?.find((h) => /\/products\//.test(h));
if (productHref) {
  const abs = productHref.startsWith("http") ? productHref : `${HOST}${productHref}`;
  try {
    await go(abs);
    report.pages.push(await extractPage(page, "pdp"));
  } catch (err) {
    report.pages.push({ label: "pdp", error: String(err) });
  }
}

const collectionHref = home?.links?.collections?.find(
  (h) => /\/collections\//.test(h) && !/\/collections\/?$/.test(h)
);
if (collectionHref) {
  const abs = collectionHref.startsWith("http")
    ? collectionHref
    : `${HOST}${collectionHref}`;
  try {
    await go(abs);
    report.pages.push(await extractPage(page, "plp"));
  } catch (err) {
    report.pages.push({ label: "plp", error: String(err) });
  }
}

// sitemap
try {
  await go(`${HOST}/sitemap.xml`);
  report.sitemap.xml = await page.evaluate(() => document.body?.innerText?.slice(0, 8000));
} catch (err) {
  report.sitemap.error = String(err);
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
console.log(`wrote ${outPath}`);
console.log(
  JSON.stringify(
    {
      unlock: first,
      theme: home?.theme,
      shop: home?.shop,
      homeSections: home?.sections?.map((s) => ({
        id: s.id,
        h: s.h,
        text: s.text.slice(0, 4),
      })),
      pageLabels: report.pages.map((p) => ({
        label: p.label,
        url: p.url,
        title: p.title,
        n: p.sections?.length,
        err: p.error,
      })),
    },
    null,
    2
  )
);

await browser.close();
