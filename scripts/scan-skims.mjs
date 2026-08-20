/**
 * SKIMS.com QANTE discover inventory scan.
 * Walks key page types, extracts section-like elements, writes JSON + home screenshot.
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dismissAllOverlays, findBlockingOverlays } from "./dismiss-overlays.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "../evidence/_peek");
const OUT_JSON = path.join(OUT_DIR, "skims-scan.json");
const OUT_SCREENSHOT = path.join(OUT_DIR, "skims-home-1440.png");
const BASE = "https://skims.com";

fs.mkdirSync(OUT_DIR, { recursive: true });

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

/** @param {import('playwright').Page} page */
async function checkAccessibility(page, url) {
  const resp = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForTimeout(3000);

  const status = resp?.status() ?? 0;
  const finalUrl = page.url();
  const title = await page.title();
  const bodyText = await page.evaluate(() =>
    (document.body?.innerText || "").replace(/\s+/g, " ").trim().slice(0, 2000)
  );
  const html = await page.content();

  const issues = [];
  if (status === 403) issues.push("HTTP 403");
  if (status >= 500) issues.push(`HTTP ${status}`);
  if (/password|storefront.*password|enter store/i.test(title)) issues.push("password-page");
  if (/captcha|verify you are human|access denied|bot detection|cloudflare/i.test(bodyText))
    issues.push("bot-block-text");
  if (/challenge-platform|cf-browser-verification|datadome|perimeterx/i.test(html))
    issues.push("bot-block-markup");
  if (bodyText.length < 80 && !/skims/i.test(bodyText)) issues.push("empty-or-blocked-body");

  return {
    accessible: issues.length === 0 && status > 0 && status < 400,
    status,
    finalUrl,
    title,
    issues,
    bodyPreview: bodyText.slice(0, 200),
  };
}

/** @param {import('playwright').Page} page */
async function extractPageInventory(page, pageType) {
  return page.evaluate((ptype) => {
    const clean = (t) => (t || "").replace(/\s+/g, " ").trim();

    const isVisible = (el) => {
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      return (
        r.width > 0 &&
        r.height > 0 &&
        s.display !== "none" &&
        s.visibility !== "hidden" &&
        parseFloat(s.opacity) > 0
      );
    };

    const semanticClass =
      /section|hero|banner|slideshow|carousel|grid|collection|product|featured|marquee|announcement|newsletter|footer|content|editorial|lookbook|mosaic|gallery|promo|trust|testimonial|faq|rich-text|image-with|multicolumn|tabs|drawer|nav|header|main|shopify-section/i;

    const candidates = new Set();

    const add = (el, source) => {
      if (!el || el === document.documentElement || el === document.body) return;
      if (!isVisible(el)) return;
      const r = el.getBoundingClientRect();
      if (r.height < 24) return;
      candidates.add(el);
      el.dataset.__scanSource = source;
    };

    document
      .querySelectorAll(
        "shopify-section, [id^='shopify-section-'], section, main, [role='main'], [data-section-id], [data-section-type]"
      )
      .forEach((el) => add(el, "shopify-or-semantic"));

    document.querySelectorAll("main > *, #MainContent > *, main section, #MainContent section").forEach((el) =>
      add(el, "main-child")
    );

    document.querySelectorAll("div[class], header, footer, nav, aside").forEach((el) => {
      const cls = (el.className || "").toString();
      const id = el.id || "";
      if (semanticClass.test(cls) || semanticClass.test(id)) add(el, "semantic-class");
    });

    const sections = [...candidates]
      .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)
      .slice(0, 80)
      .map((el, index) => {
        const r = el.getBoundingClientRect();
        const cls = (el.className || "").toString().slice(0, 200);
        const text = clean(el.innerText).slice(0, 100);
        return {
          index,
          source: el.dataset.__scanSource || "unknown",
          tag: el.tagName.toLowerCase(),
          id: el.id || null,
          classes: cls || null,
          dataSectionId: el.getAttribute("data-section-id") || null,
          dataSectionType: el.getAttribute("data-section-type") || null,
          shopifySectionId: el.id?.startsWith("shopify-section-") ? el.id : null,
          approximateHeight: Math.round(r.height),
          approximateWidth: Math.round(r.width),
          scrollY: Math.round(r.top + window.scrollY),
          textPreview: text,
          childImgCount: el.querySelectorAll("img").length,
          childLinkCount: el.querySelectorAll("a[href]").length,
          hasForm: !!el.querySelector("form"),
          hasVideo: !!el.querySelector("video, iframe"),
        };
      });

    const headerNav = (() => {
      const header =
        document.querySelector("header, [class*='header'], #shopify-section-header, shopify-section[id*='header']") ||
        document.querySelector("[role='banner']");
      if (!header) return { found: false };

      const navLinks = [...header.querySelectorAll("a[href], summary, button[aria-controls]")]
        .filter(isVisible)
        .slice(0, 40)
        .map((el) => ({
          tag: el.tagName.toLowerCase(),
          text: clean(el.textContent).slice(0, 60),
          href: el.getAttribute("href") || null,
          ariaControls: el.getAttribute("aria-controls") || null,
          classes: (el.className || "").toString().slice(0, 100),
        }));

      return {
        found: true,
        tag: header.tagName.toLowerCase(),
        id: header.id || null,
        classes: (header.className || "").toString().slice(0, 200),
        navLinkCount: navLinks.length,
        navLinks,
        hasMegaMenu: !!header.querySelector("[class*='mega'], [class*='Mega'], details, [aria-haspopup]"),
        hasSearchTrigger: !!header.querySelector(
          "[class*='search'], a[href*='/search'], button[aria-controls*='search' i], [data-search]"
        ),
        hasCartTrigger: !!header.querySelector(
          "[class*='cart'], a[href*='/cart'], button[aria-controls*='cart' i], [data-cart]"
        ),
      };
    })();

    const announcementBar = (() => {
      const selectors = [
        "[class*='announcement']",
        "[class*='Announcement']",
        "[id*='announcement']",
        ".shopify-section-announcement-bar",
        "[data-section-type*='announcement']",
        "[class*='promo-bar']",
        "[class*='top-bar']",
      ];
      for (const sel of selectors) {
        const el = document.querySelector(sel);
        if (el && isVisible(el)) {
          return {
            found: true,
            selector: sel,
            tag: el.tagName.toLowerCase(),
            id: el.id || null,
            classes: (el.className || "").toString().slice(0, 200),
            textPreview: clean(el.innerText).slice(0, 150),
          };
        }
      }
      return { found: false };
    })();

    const footerSections = (() => {
      const footer = document.querySelector("footer, [class*='footer'], #shopify-section-footer");
      if (!footer) return { found: false, sections: [] };

      const cols = [...footer.querySelectorAll("nav, [class*='footer'] > div, [class*='column'], details, ul")]
        .filter(isVisible)
        .slice(0, 20)
        .map((el) => ({
          tag: el.tagName.toLowerCase(),
          classes: (el.className || "").toString().slice(0, 120),
          heading:
            clean(el.querySelector("h2, h3, h4, summary, [class*='heading']")?.textContent).slice(0, 60) ||
            null,
          linkCount: el.querySelectorAll("a[href]").length,
          textPreview: clean(el.innerText).slice(0, 80),
        }));

      return {
        found: true,
        tag: footer.tagName.toLowerCase(),
        id: footer.id || null,
        classes: (footer.className || "").toString().slice(0, 200),
        sections: cols,
      };
    })();

    const keySelectors = {
      shopifySections: document.querySelectorAll("shopify-section, [id^='shopify-section-']").length,
      sections: document.querySelectorAll("section").length,
      dataSectionId: document.querySelectorAll("[data-section-id]").length,
      mainLandmarks: document.querySelectorAll("main, [role='main'], #MainContent").length,
      productCards: document.querySelectorAll(
        "[class*='product-card'], [class*='ProductCard'], [class*='grid-product'], [class*='product-item'], [class*='card--product']"
      ).length,
      collectionLinks: document.querySelectorAll("a[href*='/collections/']").length,
      productLinks: document.querySelectorAll("a[href*='/products/']").length,
      blogLinks: document.querySelectorAll("a[href*='/blogs/'], a[href*='/pages/']").length,
      cartDrawer: !!document.querySelector(
        "cart-drawer, #cart-drawer, [class*='cart-drawer'], [id*='CartDrawer']"
      ),
      searchDrawer: !!document.querySelector(
        "search-drawer, #search-drawer, [class*='search-drawer'], [id*='SearchDrawer'], [class*='predictive-search']"
      ),
    };

    return {
      pageType: ptype,
      url: location.href,
      title: document.title,
      sections,
      sectionCount: sections.length,
      headerNav,
      announcementBar,
      footerSections,
      keySelectors,
    };
  }, pageType);
}

/** @param {import('playwright').Page} page */
async function findLink(page, pattern, { exclude = [], preferText = null, requireVisible = true } = {}) {
  return page.evaluate(
    ({ pattern, exclude, preferText, requireVisible }) => {
      const re = new RegExp(pattern, "i");
      const links = [...document.querySelectorAll("a[href]")].filter((a) => {
        const href = a.getAttribute("href") || "";
        if (!re.test(href)) return false;
        if (exclude.some((x) => href.includes(x))) return false;
        if (!requireVisible) return true;
        const r = a.getBoundingClientRect();
        return r.width > 0 && r.height > 0;
      });

      const pick = (pool) => {
        if (preferText) {
          const pt = preferText.toLowerCase();
          const preferred = pool.find((a) => (a.textContent || "").toLowerCase().includes(pt));
          if (preferred) {
            const r = preferred.getBoundingClientRect();
            return {
              href: preferred.href,
              text: (preferred.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80),
              area: r.width * r.height,
            };
          }
        }
        const scored = pool
          .map((a) => ({
            href: a.href,
            text: (a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80),
            area: a.getBoundingClientRect().width * a.getBoundingClientRect().height,
          }))
          .sort((a, b) => b.area - a.area);
        return scored[0] || null;
      };

      const visibleHit = pick(links);
      if (visibleHit) return visibleHit;
      if (requireVisible) {
        const allLinks = [...document.querySelectorAll("a[href]")].filter((a) => {
          const href = a.getAttribute("href") || "";
          return re.test(href) && !exclude.some((x) => href.includes(x));
        });
        return pick(allLinks);
      }
      return null;
    },
    { pattern, exclude, preferText, requireVisible }
  );
}

/** @param {import('playwright').Page} page */
async function scanPage(page, url, pageType, { dismiss = true, waitMs = 2500 } = {}) {
  const resp = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForTimeout(waitMs);
  if (dismiss) await dismissAllOverlays(page);

  const blockers = await findBlockingOverlays(page);
  const inventory = await extractPageInventory(page, pageType);

  return {
    requestedUrl: url,
    status: resp?.status() ?? null,
    ...inventory,
    overlayBlockers: blockers,
    scannedAt: new Date().toISOString(),
  };
}

const report = {
  site: "skims.com",
  baseUrl: BASE,
  scannedAt: new Date().toISOString(),
  viewport: { width: 1440, height: 1000 },
  accessibility: null,
  pages: {},
  urlsUsed: {},
  errors: [],
  botBlockIssues: [],
};

const browser = await chromium.launch({
  headless: true,
  args: ["--disable-blink-features=AutomationControlled"],
});

const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  userAgent: USER_AGENT,
  locale: "en-US",
});

const page = await context.newPage();

try {
  // 1. Accessibility check
  report.accessibility = await checkAccessibility(page, `${BASE}/`);
  if (!report.accessibility.accessible) {
    report.botBlockIssues.push(...report.accessibility.issues);
  }

  if (report.accessibility.accessible) {
    await dismissAllOverlays(page);

    // Home screenshot
    await page.screenshot({ path: OUT_SCREENSHOT, fullPage: true });
    report.homeScreenshot = OUT_SCREENSHOT;

    report.pages.home = await extractPageInventory(page, "home");
    report.pages.home.requestedUrl = `${BASE}/`;
    report.pages.home.overlayBlockers = await findBlockingOverlays(page);
    report.urlsUsed.home = page.url();

    // Footer sections dedicated pass on home
    report.pages.footer = {
      pageType: "footer",
      url: page.url(),
      ...report.pages.home.footerSections,
      headerNav: report.pages.home.headerNav,
      announcementBar: report.pages.home.announcementBar,
    };

    // Collection — find collection link from home
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(800);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);

    const collectionLink = await findLink(page, "/collections/", {
      exclude: ["/collections/all", "/collections/vendors"],
      preferText: "best",
    });
    if (collectionLink?.href) {
      report.urlsUsed.collection = collectionLink.href;
      report.pages.collection = await scanPage(page, collectionLink.href, "collection");
    } else {
      report.errors.push("No collection link found");
    }

    // Search
    report.urlsUsed.search = `${BASE}/search?q=bra`;
    report.pages.search = await scanPage(page, `${BASE}/search?q=bra`, "search");

    // PDP — prefer visible product link from home, else collection/search
    let productLink = await findLink(page, "/products/", {
      exclude: ["gift-card", "gift_card"],
    });
    if (!productLink?.href && report.pages.collection) {
      productLink = await findLink(page, "/products/", {
        exclude: ["gift-card", "gift_card"],
      });
    }
    if (!productLink?.href && report.pages.search) {
      await page.goto(`${BASE}/search?q=bra`, { waitUntil: "domcontentloaded", timeout: 90000 });
      await page.waitForTimeout(2000);
      await dismissAllOverlays(page);
      productLink = await findLink(page, "/products/", {
        exclude: ["gift-card", "gift_card"],
      });
    }
    if (productLink?.href) {
      report.urlsUsed.pdp = productLink.href;
      report.pages.pdp = await scanPage(page, productLink.href, "pdp");
    } else {
      report.errors.push("No visible product link found on home/collection/search");
    }

    // Cart — add to cart on PDP then open drawer
    if (report.pages.pdp) {
      await page.goto(report.urlsUsed.pdp, { waitUntil: "domcontentloaded", timeout: 90000 });
      await page.waitForTimeout(2500);
      await dismissAllOverlays(page);

      const addResult = await page.evaluate(() => {
        const btn =
          document.querySelector(
            "button[name='add'], button[type='submit'][name='add'], [class*='add-to-cart'], button.product-form__submit, form[action*='/cart/add'] button[type='submit']"
          ) ||
          [...document.querySelectorAll("button")].find((b) =>
            /add to (bag|cart)/i.test(b.textContent || "")
          );
        if (!btn) return { clicked: false, reason: "no-add-button" };
        btn.click();
        return { clicked: true, text: (btn.textContent || "").trim().slice(0, 60) };
      });

      await page.waitForTimeout(3000);
      await dismissAllOverlays(page);

      const cartOpened = await page.evaluate(() => {
        const triggers = [
          "button[aria-label*='cart' i]",
          "a[aria-label*='cart' i]",
          "a[href='/cart']",
          "a[href*='/cart']",
          "button[aria-controls*='cart' i]",
          "[class*='cart-count']",
          "[class*='header__icon--cart']",
          "[class*='CartIcon']",
          "[data-cart-toggle]",
          "[data-testid*='cart' i]",
          "cart-icon",
        ];
        for (const sel of triggers) {
          const el = document.querySelector(sel);
          if (el) {
            el.click();
            return { opened: true, selector: sel };
          }
        }
        return { opened: false };
      });

      await page.waitForTimeout(2000);
      await dismissAllOverlays(page);

      report.pages.cart = await extractPageInventory(page, "cart");
      report.pages.cart.requestedUrl = report.urlsUsed.pdp;
      report.pages.cart.addToCart = addResult;
      report.pages.cart.cartDrawerOpened = cartOpened;
      report.pages.cart.overlayBlockers = await findBlockingOverlays(page);
      report.urlsUsed.cart = page.url();
    }

    // Blog/content from footer
    await page.goto(`${BASE}/`, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(2000);
    await dismissAllOverlays(page);

    const contentLink = await page.evaluate(() => {
      const footer = document.querySelector("footer, [class*='footer']");
      const scope = footer || document;
      const links = [...scope.querySelectorAll("a[href]")];
      const priority = [
        /\/blogs\//i,
        /\/pages\//i,
        /about/i,
        /journal/i,
        /story/i,
        /blog/i,
      ];
      for (const re of priority) {
        const hit = links.find((a) => {
          const href = a.getAttribute("href") || "";
          return re.test(href) && !/privacy|terms|cookie|policy|accessibility|contact/i.test(href);
        });
        if (hit) return { href: hit.href, text: (hit.textContent || "").trim().slice(0, 80) };
      }
      return null;
    });

    if (contentLink?.href) {
      report.urlsUsed.content = contentLink.href;
      report.pages.content = await scanPage(page, contentLink.href, "content");
      report.pages.content.footerLinkText = contentLink.text;
    } else {
      report.errors.push("No blog/content link found in footer");
    }
  }
} catch (err) {
  report.errors.push(String(err?.message || err));
} finally {
  await browser.close();
}

// Schema matching heuristics
const SCHEMA_KEYWORDS = {
  "navigation-header-mega": /header|nav|mega|menu|drawer/i,
  "global-menu-drawer": /menu-drawer|mobile-nav|hamburger/i,
  "global-cart-drawer": /cart-drawer|mini.?cart|cart icon/i,
  "global-predictive-search": /predictive-search|search-drawer|search header/i,
  "promo-announcement-bar": /announcement|promo.?bar|top.?bar|marquee.*promo/i,
  "footer-columns-newsletter": /footer|newsletter.*footer|footer.*column/i,
  "hero-slideshow": /hero|slideshow|banner.*hero|video.?hero|media.*hero/i,
  "media-video-hero": /video.*hero|hero.*video|autoplay.*banner/i,
  "product-showcase-grid-featured": /featured.*collection|product.*grid|shop the/i,
  "product-showcase-grid-plp": /collection.*grid|product.*listing|plp|search.*result/i,
  "product-info-main": /product.*info|product.*form|add.?to.?cart|pdp|product-main/i,
  "product-info-tabs": /product.*tab|accordion.*product|details.*tab/i,
  "collection-banner": /collection.*banner|collection.*hero/i,
  "collection-nav-tabs": /collection.*tab|filter.*tab|sub.?nav.*collection/i,
  "collection-nav-slider": /collection.*slider|category.*carousel/i,
  "collection-nav-cards": /collection.*card|shop by category/i,
  "collection-nav-grid": /collection.*grid.*nav|category.*grid/i,
  "search-results": /search.*result|search.*page|results for/i,
  "cart-page-main": /cart.*page|your cart|bag/i,
  "blog-list-main": /blog.*list|journal|articles/i,
  "blog-post-main": /blog.*post|article.*content|page.*content/i,
  "page-content-main": /page.*content|rich.?text|cms.*page/i,
  "editorial-rich-text": /rich.?text|editorial.*text/i,
  "editorial-image-with-text": /image.?with.?text|split.*content/i,
  "editorial-image-with-text-overlay": /overlay.*text|text.*overlay/i,
  "media-mosaic-grid": /mosaic|bento|dynamic.*grid/i,
  "media-scrolling-gallery": /scrolling.*gallery|horizontal.*scroll.*image/i,
  "media-lookbook-slider": /lookbook|shop the look/i,
  "media-shop-the-feed": /shop the feed|instagram|social.*feed/i,
  "promo-scrolling-marquee": /marquee|scrolling.*text|ticker/i,
  "promo-grid-banner": /promo.*grid|banner.*grid|dual.*banner/i,
  "promo-banner-tabs": /banner.*tab|promo.*tab/i,
  "lead-capture-newsletter-band": /newsletter|email.*signup|subscribe/i,
  "lead-capture-form": /contact.*form|signup.*form/i,
  "features-multicolumn": /multicolumn|multi-column|icon.*column/i,
  "features-slider-multicolumn": /slider.*column|carousel.*column/i,
  "faq-collapsible-tabs": /faq|accordion|collapsible/i,
  "trust-icon-row": /trust|icon.*row|benefit.*icon/i,
  "social-proof-brand-logos": /logo.*row|as seen|press|brand.*logo/i,
  "testimonial-quote-carousel": /testimonial|quote|review.*carousel/i,
  "navigation-breadcrumbs": /breadcrumb/i,
  "before-after-slider": /before.*after|compare.*slider/i,
  "editorial-dynamic-grid": /dynamic.*grid|editorial.*grid/i,
  "editorial-layered-images": /layered.*image|stacked.*image/i,
  "editorial-highlight-text-image": /highlight.*text|pull.*quote/i,
  "product-showcase-related": /related.*product|you may also/i,
  "product-showcase-recently-viewed": /recently.*viewed/i,
  "product-showcase-favorites": /favorite|wishlist/i,
  "product-finder-quiz": /quiz|finder|fit finder/i,
  "commerce-tools-products-bundle": /bundle|kit|set.*product/i,
  "comparison-quick-table": /comparison|compare.*table|size.*chart/i,
};

function matchSchemas(pageData) {
  if (!pageData?.sections) return [];
  const blob = pageData.sections
    .map(
      (s) =>
        `${s.tag} ${s.id || ""} ${s.classes || ""} ${s.dataSectionType || ""} ${s.textPreview || ""}`
    )
    .join("\n");
  const extra = [
    pageData.headerNav?.classes,
    pageData.announcementBar?.textPreview,
    pageData.footerSections?.classes,
    pageData.title,
  ]
    .filter(Boolean)
    .join("\n");
  const haystack = `${blob}\n${extra}`;

  return Object.entries(SCHEMA_KEYWORDS)
    .filter(([, re]) => re.test(haystack))
    .map(([id]) => id);
}

report.recommendedSchemaIds = {};
for (const [key, data] of Object.entries(report.pages)) {
  if (data && typeof data === "object") {
    report.recommendedSchemaIds[key] = matchSchemas(data);
  }
}

report.summary = {
  accessible: report.accessibility?.accessible ?? false,
  accessibilityIssues: report.accessibility?.issues ?? [],
  pageUrls: report.urlsUsed,
  sectionCounts: Object.fromEntries(
    Object.entries(report.pages).map(([k, v]) => [k, v?.sectionCount ?? v?.sections?.length ?? 0])
  ),
  keySelectorsByPage: Object.fromEntries(
    Object.entries(report.pages)
      .filter(([, v]) => v?.keySelectors)
      .map(([k, v]) => [k, v.keySelectors])
  ),
  recommendedSchemaIds: report.recommendedSchemaIds,
  errors: report.errors,
};

fs.writeFileSync(OUT_JSON, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report.summary, null, 2));
console.error(`\nWrote ${OUT_JSON}`);
console.error(`Wrote ${OUT_SCREENSHOT}`);
