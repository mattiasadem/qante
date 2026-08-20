/**
 * Honey Shopify theme — QANTE Mod A page/section inventory scan.
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dismissAllOverlays } from "./dismiss-overlays.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = "https://honey-paws-theme.myshopify.com";
const OUT_PATH = path.resolve(__dirname, "../evidence/_peek/honey-scan.json");

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });

function absUrl(href, origin) {
  if (!href || href.startsWith("javascript:") || href.startsWith("#")) return null;
  try {
    return new URL(href, origin).href;
  } catch {
    return null;
  }
}

function sameOrigin(url, origin) {
  try {
    return new URL(url).origin === new URL(origin).origin;
  } catch {
    return false;
  }
}

async function extractPageData(page) {
  return page.evaluate(() => {
    const sections = [...document.querySelectorAll(".shopify-section, shopify-section")].map(
      (el) => {
        const r = el.getBoundingClientRect();
        const inner = (el.innerText || "").replace(/\s+/g, " ").trim();
        return {
          id: el.id || null,
          dataSectionType: el.getAttribute("data-section-type") || null,
          classNames: (el.className || "").toString().trim() || null,
          innerTextPreview: inner.slice(0, 200),
          boundingBoxHeight: Math.round(r.height),
        };
      }
    );

    const pickNavLinks = (root) => {
      if (!root) return [];
      const seen = new Set();
      const links = [];
      for (const a of root.querySelectorAll("a[href]")) {
        const href = a.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("javascript:")) continue;
        const text = (a.textContent || "").replace(/\s+/g, " ").trim();
        if (!text) continue;
        const key = `${text}::${href}`;
        if (seen.has(key)) continue;
        seen.add(key);
        links.push({ text, href });
      }
      return links;
    };

    const header =
      document.querySelector("header") ||
      document.querySelector('[role="banner"]') ||
      document.querySelector("#shopify-section-header") ||
      document.querySelector(".header");

    const footer =
      document.querySelector("footer") ||
      document.querySelector('[role="contentinfo"]') ||
      document.querySelector("#shopify-section-footer") ||
      document.querySelector(".footer");

    const headerNavLinks = pickNavLinks(header);
    const footerLinks = pickNavLinks(footer);

    const bodyText = (document.body?.innerText || "").toLowerCase();
    const isPasswordPage =
      Boolean(document.querySelector('form[action*="password"]')) ||
      bodyText.includes("enter store using password") ||
      bodyText.includes("this store is password protected");

    return {
      title: document.title || null,
      sections,
      headerNavLinks,
      footerLinks,
      isPasswordPage,
    };
  });
}

async function scanPage(page, url, label) {
  const result = {
    label,
    requestedUrl: url,
    finalUrl: null,
    title: null,
    httpStatus: null,
    blocked: null,
    isPasswordPage: false,
    is404: false,
    sections: [],
    headerNavLinks: [],
    footerLinks: [],
    error: null,
  };

  try {
    const response = await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 90000,
    });
    await page.waitForTimeout(2500);
    await dismissAllOverlays(page).catch(() => {});

    result.finalUrl = page.url();
    result.httpStatus = response?.status() ?? null;

    if (result.httpStatus === 403) {
      result.blocked = "403";
    }

    const data = await extractPageData(page);
    result.title = data.title;
    result.sections = data.sections;
    result.headerNavLinks = data.headerNavLinks;
    result.footerLinks = data.footerLinks;
    result.isPasswordPage = data.isPasswordPage;

    const titleLower = (data.title || "").toLowerCase();
    const finalLower = result.finalUrl.toLowerCase();
    result.is404 =
      result.httpStatus === 404 ||
      titleLower.includes("404") ||
      titleLower.includes("not found") ||
      finalLower.includes("/404");

    if (data.isPasswordPage) {
      result.blocked = result.blocked || "password";
    }
  } catch (err) {
    result.error = err.message;
  }

  return result;
}

async function findLink(page, { patterns, prefer = null, exclude = [] }) {
  return page.evaluate(
    ({ patterns, prefer, exclude }) => {
      const reList = patterns.map((p) => new RegExp(p, "i"));
      const exList = (exclude || []).map((p) => new RegExp(p, "i"));
      const anchors = [...document.querySelectorAll("a[href]")];

      const score = (a) => {
        const href = a.getAttribute("href") || "";
        const text = (a.textContent || "").replace(/\s+/g, " ").trim();
        if (!href || href.startsWith("#") || href.startsWith("javascript:")) return -1;
        if (exList.some((re) => re.test(href) || re.test(text))) return -1;
        if (!reList.some((re) => re.test(href))) return -1;
        let s = 10;
        if (prefer && new RegExp(prefer, "i").test(text)) s += 20;
        if (href.includes("/products/")) s += 5;
        if (href.includes("/collections/") && !href.includes("/products/")) s += 5;
        if (href.includes("/blogs/")) s += 5;
        if (href.includes("/pages/")) s += 3;
        return s;
      };

      const ranked = anchors
        .map((a) => ({
          href: a.getAttribute("href"),
          text: (a.textContent || "").replace(/\s+/g, " ").trim(),
          score: score(a),
        }))
        .filter((x) => x.score >= 0)
        .sort((a, b) => b.score - a.score);

      return ranked[0] || null;
    },
    { patterns, prefer, exclude }
  );
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

const scan = {
  scannedAt: new Date().toISOString(),
  baseUrl: BASE,
  pages: {},
  discoveredUrls: {},
  blockedPages: [],
  notFoundPages: [],
};

// 1. Home
const home = await scanPage(page, `${BASE}/`, "home");
scan.pages.home = home;
if (home.blocked) scan.blockedPages.push({ label: "home", ...home });
if (home.is404) scan.notFoundPages.push({ label: "home", url: home.finalUrl });

// Discover URLs from home (header + footer + main)
const homeOrigin = home.finalUrl || `${BASE}/`;
const linkBuckets = await page.evaluate(() => {
  const buckets = { product: [], collection: [], blog: [], content: [] };
  for (const a of document.querySelectorAll("a[href]")) {
    const href = a.getAttribute("href") || "";
    const text = (a.textContent || "").replace(/\s+/g, " ").trim();
    if (!href || href.startsWith("#") || href.startsWith("javascript:")) continue;
    const item = { href, text };
    if (/\/products\//.test(href)) buckets.product.push(item);
    else if (/\/collections\/[^/?#]+/.test(href) && !/\/products\//.test(href))
      buckets.collection.push(item);
    else if (/\/blogs\//.test(href)) buckets.blog.push(item);
    else if (/\/pages\//.test(href)) buckets.content.push(item);
  }
  return buckets;
});

const pickFirstUnique = (items, { scoreFn = () => 0 } = {}) => {
  const seen = new Set();
  const ranked = [];
  for (const item of items) {
    const url = absUrl(item.href, homeOrigin);
    if (!url || !sameOrigin(url, BASE) || seen.has(url)) continue;
    seen.add(url);
    ranked.push({ ...item, url, score: scoreFn(item, url) });
  }
  ranked.sort((a, b) => b.score - a.score);
  return ranked[0] || null;
};

const scoreProductLink = (item, url) => {
  let score = 0;
  if (/gift[-_]card/i.test(url)) score -= 50;
  if (/quickshop|add to cart|shop now/i.test(item.text)) score += 10;
  if (item.text && item.text.length > 3 && item.text.length < 80) score += 5;
  return score;
};

let productLink = pickFirstUnique(linkBuckets.product, { scoreFn: scoreProductLink });
if (!productLink) {
  productLink = await findLink(page, {
    patterns: ["^/products/", "/products/"],
    exclude: ["cart", "account"],
  });
  if (productLink) productLink.url = absUrl(productLink.href, homeOrigin);
}

let collectionLink = pickFirstUnique(linkBuckets.collection);
if (!collectionLink) {
  collectionLink = await findLink(page, {
    patterns: ["^/collections/[^/?#]+$", "/collections/"],
    exclude: ["all$", "/products/"],
  });
  if (collectionLink) collectionLink.url = absUrl(collectionLink.href, homeOrigin);
}

let blogLink = pickFirstUnique(linkBuckets.blog);
if (!blogLink) {
  blogLink = await findLink(page, {
    patterns: ["/blogs/"],
    prefer: "blog|journal|stories|news",
    exclude: ["/tag/", "/comments"],
  });
  if (blogLink) blogLink.url = absUrl(blogLink.href, homeOrigin);
}

let contentLink = pickFirstUnique(linkBuckets.content);
if (!contentLink) {
  contentLink = await findLink(page, {
    patterns: ["/pages/"],
    prefer: "about|contact|faq|story",
  });
  if (contentLink) contentLink.url = absUrl(contentLink.href, homeOrigin);
}

scan.discoveredUrls = {
  product: productLink,
  collection: collectionLink,
  blog: blogLink,
  content: contentLink,
};

// 2. PDP
if (productLink?.url) {
  const pdp = await scanPage(page, productLink.url, "pdp");
  scan.pages.pdp = pdp;
  if (pdp.blocked) scan.blockedPages.push({ label: "pdp", ...pdp });
  if (pdp.is404) scan.notFoundPages.push({ label: "pdp", url: pdp.finalUrl });
} else {
  scan.pages.pdp = { skipped: true, reason: "No product URL found on home" };
}

// 3. Collection
if (collectionLink?.url) {
  const collection = await scanPage(page, collectionLink.url, "collection");
  scan.pages.collection = collection;
  if (collection.blocked) scan.blockedPages.push({ label: "collection", ...collection });
  if (collection.is404) scan.notFoundPages.push({ label: "collection", url: collection.finalUrl });
} else {
  scan.pages.collection = { skipped: true, reason: "No collection URL found on home" };
}

// 4. Search
const search = await scanPage(page, `${BASE}/search?q=dog`, "search");
scan.pages.search = search;
if (search.blocked) scan.blockedPages.push({ label: "search", ...search });
if (search.is404) scan.notFoundPages.push({ label: "search", url: search.finalUrl });

// 5. Cart
const cart = await scanPage(page, `${BASE}/cart`, "cart");
scan.pages.cart = cart;
if (cart.blocked) scan.blockedPages.push({ label: "cart", ...cart });
if (cart.is404) scan.notFoundPages.push({ label: "cart", url: cart.finalUrl });

// 6. Blog list + article
if (blogLink?.url) {
  const blogList = await scanPage(page, blogLink.url, "blog-list");
  scan.pages.blogList = blogList;
  if (blogList.blocked) scan.blockedPages.push({ label: "blog-list", ...blogList });
  if (blogList.is404) scan.notFoundPages.push({ label: "blog-list", url: blogList.finalUrl });

  const articleLink = await findLink(page, {
    patterns: ["/blogs/[^/]+/[^/?#]+"],
    exclude: ["/tag/", "/comments", "/blogs/[^/]+/?$"],
  });

  if (articleLink?.href) {
    const articleUrl = absUrl(articleLink.href, blogList.finalUrl || blogLink.url);
    scan.discoveredUrls.blogArticle = { ...articleLink, url: articleUrl };
    const blogArticle = await scanPage(page, articleUrl, "blog-article");
    scan.pages.blogArticle = blogArticle;
    if (blogArticle.blocked) scan.blockedPages.push({ label: "blog-article", ...blogArticle });
    if (blogArticle.is404) scan.notFoundPages.push({ label: "blog-article", url: blogArticle.finalUrl });
  } else {
    scan.pages.blogArticle = { skipped: true, reason: "No article URL found on blog list" };
  }
} else {
  scan.pages.blogList = { skipped: true, reason: "No blog URL found in nav/footer" };
  scan.pages.blogArticle = { skipped: true, reason: "No blog URL found in nav/footer" };
}

// 7. Content page (about/contact)
if (contentLink?.url) {
  const content = await scanPage(page, contentLink.url, "content");
  scan.pages.content = content;
  if (content.blocked) scan.blockedPages.push({ label: "content", ...content });
  if (content.is404) scan.notFoundPages.push({ label: "content", url: content.finalUrl });
} else {
  scan.pages.content = { skipped: true, reason: "No content page URL found in footer/nav" };
}

await browser.close();

fs.writeFileSync(OUT_PATH, JSON.stringify(scan, null, 2));
console.log(`Saved scan to ${OUT_PATH}`);
console.log(JSON.stringify(scan, null, 2));
