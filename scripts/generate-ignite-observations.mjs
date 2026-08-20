#!/usr/bin/env node
/**
 * Generate Ignite (Benchmark) Mod A observation JSON files.
 * Run: node scripts/generate-ignite-observations.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const BASE = "https://benchmark-electronics-demo.myshopify.com";

const THEME_DELTA =
  "Shopify.theme.name DEV - DO NOT EDIT · id 129323303010 · schema_name Ignite · schema_version 2.6.1 · theme_store_id null · role main · shop benchmark-electronics-demo.myshopify.com · resmi Electronics demo.";

/**
 * schemaId = reuse type. instance > 1 → file `-2.json`, observationId `.2`
 * @type {Array<{sayfa:string, schemaId:string, instance?:number, selector:string, url:string, notlar:string, delta?:string, captureMode?:string, prepareClick?:string, prepareFill?:object}>}
 */
const OBS = [
  // HOME
  { sayfa: "home", schemaId: "promo-announcement-bar", selector: "#shopify-section-sections--15968300204130__announcement-bar", url: `${BASE}/`, notlar: "Mid-season sale · Shop Phones / Shop Watches · Trade in up to $100." },
  { sayfa: "home", schemaId: "navigation-header-mega", selector: "#shopify-section-sections--15968300204130__header", url: `${BASE}/`, notlar: "Inline search + product-type filter + mega nav + cart.", delta: THEME_DELTA },
  { sayfa: "home", schemaId: "hero-slideshow", selector: "#shopify-section-template--15968305610850__472108d4-aa24-49f9-830c-6ed10958395d", url: `${BASE}/`, notlar: "Time for the upgrade next level? Obsidian · From $899 · 3 slides." },
  { sayfa: "home", schemaId: "product-showcase-grid-featured", selector: "#shopify-section-template--15968305610850__featured_collection_PCNhTz", url: `${BASE}/`, notlar: "Best-selling tech product grid." },
  { sayfa: "home", schemaId: "media-video-hero", selector: "#shopify-section-template--15968305610850__video_banner_HNjJyy", url: `${BASE}/`, notlar: "Shot on the Pixa 9 Pro video banner." },
  { sayfa: "home", schemaId: "editorial-rich-text", selector: "#shopify-section-template--15968305610850__rich_text_R96JMV", url: `${BASE}/`, notlar: "Engineered to perfection. Designed for you." },
  { sayfa: "home", schemaId: "features-multicolumn", selector: "#shopify-section-template--15968305610850__multicolumn_mkJbMy", url: `${BASE}/`, notlar: "Edge Pixa 9 AI features 3 columns." },
  { sayfa: "home", schemaId: "comparison-quick-table", selector: "#shopify-section-template--15968305610850__product_compare_kc3xBH", url: `${BASE}/`, notlar: "Compare Prime Solar / S24 Plus / Edge Pixa 9 chart." },
  { sayfa: "home", schemaId: "editorial-dynamic-grid", selector: "#shopify-section-template--15968305610850__gallery_kLy64j", url: `${BASE}/`, notlar: "Smarter detail mosaic gallery + smartwatch." },
  { sayfa: "home", schemaId: "collection-nav-image-cards", selector: "#shopify-section-template--15968305610850__collection_list_8epked", url: `${BASE}/`, notlar: "Our range · Audio Phones Laptops etc image cards." },
  { sayfa: "home", schemaId: "media-lookbook-banner", selector: "#shopify-section-template--15968305610850__image_hotspots_ixAdVR", url: `${BASE}/`, notlar: "Made for motion · 3 View hotspot pins." },
  { sayfa: "home", schemaId: "media-scrolling-gallery", selector: "#shopify-section-template--15968305610850__social_video_reel_eqX8WG", url: `${BASE}/`, notlar: "Fresh tech unboxed · social video reel 1/7." },
  { sayfa: "home", schemaId: "collection-nav-banners", selector: "#shopify-section-template--15968305610850__gallery_A4anjN", url: `${BASE}/`, notlar: "Find your next phone banner grid." },
  { sayfa: "home", schemaId: "features-multicolumn", instance: 2, selector: "#shopify-section-template--15968305610850__multicolumn_MkC9aa", url: `${BASE}/`, notlar: "Fine details epic photos macro columns." },
  { sayfa: "home", schemaId: "lead-capture-newsletter-band", selector: "#shopify-section-template--15968305610850__ribbon_banner_GLgrEp", url: `${BASE}/`, notlar: "10% off sign-in ribbon. Submit yok." },
  { sayfa: "home", schemaId: "product-showcase-grid-featured", instance: 2, selector: "#shopify-section-template--15968305610850__product_list_qeF8yc", url: `${BASE}/`, notlar: "Latest laptops slider." },
  { sayfa: "home", schemaId: "editorial-image-with-text", selector: "#shopify-section-template--15968305610850__flexible_columns_MNfPtB", url: `${BASE}/`, notlar: "INTRODUCING Pixa 9 Pro flexible columns." },
  { sayfa: "home", schemaId: "editorial-image-with-text", instance: 2, selector: "#shopify-section-template--15968305610850__image_with_collapsible_content_qcRLWf", url: `${BASE}/`, notlar: "Your perfect training partner + collapsible tabs." },
  { sayfa: "home", schemaId: "trust-icon-row", selector: "#shopify-section-template--15968305610850__stats_JYTTVY", url: `${BASE}/`, notlar: "142k products · 95% reviews · 12 territories.", delta: "Sayı satırı; ikon yok." },
  { sayfa: "home", schemaId: "testimonial-quote-carousel", selector: "#shopify-section-template--15968305610850__testimonials_LDg7tU", url: `${BASE}/`, notlar: "Fast shipping testimonial carousel." },
  { sayfa: "home", schemaId: "promo-scrolling-marquee", selector: "#shopify-section-template--15968305610850__scrolling_text_9ymWCM", url: `${BASE}/`, notlar: "Scrolling text ticker (thin band)." },
  { sayfa: "home", schemaId: "editorial-image-with-text", instance: 3, selector: "#shopify-section-template--15968305610850__video_with_text_fbpiJb", url: `${BASE}/`, notlar: "Can your old phone do this? Solar S24 Ultra video." },
  { sayfa: "home", schemaId: "promo-scrolling-marquee", instance: 2, selector: "#shopify-section-template--15968305610850__scrolling_text_XDEjRT", url: `${BASE}/`, notlar: "More to explore marquee." },
  { sayfa: "home", schemaId: "collection-nav-tabs", selector: "#shopify-section-template--15968305610850__section_tabs_8VdWhe", url: `${BASE}/`, notlar: "Find your vibe · Cobalt Violet / Jade Green tabs." },
  { sayfa: "home", schemaId: "editorial-image-with-text-overlay", selector: "#shopify-section-template--15968305610850__image_banner_jnrrDg", url: `${BASE}/`, notlar: "Purple smartphone banner (Cobalt Violet tab)." },
  // image_banner_JyNFje hidden display:none — leftover ignite-image-banner-tab-sibling-hidden
  { sayfa: "home", schemaId: "trust-icon-row", instance: 2, selector: "#shopify-section-template--15968305610850__icons_with_text_iUiqVT", url: `${BASE}/`, notlar: "WELL TRUSTED / SUPER FAST / EXPERT HELP / BEST PRICES." },
  { sayfa: "home", schemaId: "footer-columns-newsletter", selector: "#shopify-section-sections--15968300105826__footer", url: `${BASE}/`, notlar: "Footer columns + newsletter. Submit yok." },
  { sayfa: "home", schemaId: "global-menu-drawer", selector: "#menu-drawer", url: `${BASE}/`, notlar: "375 hamburger drawer.", captureMode: "viewport", prepareClick: "header-drawer summary[aria-label='Menu']" },
  { sayfa: "home", schemaId: "global-predictive-search", selector: ".predictive-search", url: `${BASE}/`, notlar: "Inline search · headphone → Sound On Headphones £23.", prepareFill: { selector: "input.search__input", value: "headphone" } },
  { sayfa: "home", schemaId: "global-cart-drawer", selector: "cart-drawer .drawer__inner", url: `${BASE}/`, notlar: "Empty cart drawer.", captureMode: "viewport", prepareClick: "#cart-icon-bubble" },

  // PDP
  { sayfa: "product-detail", schemaId: "navigation-breadcrumbs", selector: "#shopify-section-template--16056720064610__breadcrumbs", url: `${BASE}/products/pixa-9`, notlar: "Home / New In / Phones / Edge Pixa 9" },
  { sayfa: "product-detail", schemaId: "product-info-main", selector: "#shopify-section-template--16056720064610__main", url: `${BASE}/products/pixa-9`, notlar: "Edge Pixa 9 · From £596 · 4 colors · ADD TO CART." },
  { sayfa: "product-detail", schemaId: "editorial-rich-text", selector: "#shopify-section-template--16056720064610__rich_text_6irmLJ", url: `${BASE}/products/pixa-9`, notlar: "Quality throughout." },
  { sayfa: "product-detail", schemaId: "trust-icon-row", selector: "#shopify-section-template--16056720064610__stats_bJWtWh", url: `${BASE}/products/pixa-9`, notlar: "26h battery · 95% reviews · 64GB storage." },
  { sayfa: "product-detail", schemaId: "editorial-rich-text", instance: 2, selector: "#shopify-section-template--16056720064610__rich_text_ECfFyc", url: `${BASE}/products/pixa-9`, notlar: "DESIGN · Seamless unibody design." },
  { sayfa: "product-detail", schemaId: "editorial-image-with-text-overlay", selector: "#shopify-section-template--16056720064610__image_banner_iYNjhX", url: `${BASE}/products/pixa-9`, notlar: "Crystal clear. Sharper images." },
  { sayfa: "product-detail", schemaId: "editorial-image-with-text", selector: "#shopify-section-template--16056720064610__flexible_columns_PH6Xa8", url: `${BASE}/products/pixa-9`, notlar: "CAMERA · A major leap in zoom." },
  { sayfa: "product-detail", schemaId: "editorial-image-with-text", instance: 2, selector: "#shopify-section-template--16056720064610__image_with_text_HtFM4m", url: `${BASE}/products/pixa-9`, notlar: "WHY SETTLE? Engineered to impress." },
  { sayfa: "product-detail", schemaId: "features-multicolumn", selector: "#shopify-section-template--16056720064610__multicolumn_eUDh7G", url: `${BASE}/products/pixa-9`, notlar: "igniteOS · Fresh look. More wonder." },
  { sayfa: "product-detail", schemaId: "media-video-hero", selector: "#shopify-section-template--16056720064610__video_banner_FW9kd4", url: `${BASE}/products/pixa-9`, notlar: "Did we mention the camera? video banner." },
  { sayfa: "product-detail", schemaId: "editorial-image-with-text", instance: 3, selector: "#shopify-section-template--16056720064610__image_with_text_EDTQh6", url: `${BASE}/products/pixa-9`, notlar: "YOUR SHADE · A colour for every style." },
  { sayfa: "product-detail", schemaId: "editorial-image-with-text", instance: 4, selector: "#shopify-section-template--16056720064610__flexible_columns_zxBdUE", url: `${BASE}/products/pixa-9`, notlar: "Worth an upgrade? 100%." },
  { sayfa: "product-detail", schemaId: "faq-collapsible-tabs", selector: "#shopify-section-template--16056720064610__collapsible_content_t3C4Tq", url: `${BASE}/products/pixa-9`, notlar: "Phone FAQs accordion + search." },
  { sayfa: "product-detail", schemaId: "editorial-rich-text", instance: 3, selector: "#shopify-section-template--16056720064610__rich_text_Kmy9yw", url: `${BASE}/products/pixa-9`, notlar: "What's in the box?" },
  { sayfa: "product-detail", schemaId: "features-multicolumn", instance: 2, selector: "#shopify-section-template--16056720064610__multicolumn_RibcJR", url: `${BASE}/products/pixa-9`, notlar: "Charging Cable · Manual · Warranty · Packaging." },
  { sayfa: "product-detail", schemaId: "testimonial-quote-carousel", selector: "#shopify-section-template--16056720064610__testimonials_ThfnWD", url: `${BASE}/products/pixa-9`, notlar: "Instantly faster testimonial." },

  // COLLECTION
  { sayfa: "collection", schemaId: "navigation-breadcrumbs", selector: "#shopify-section-template--18890136715362__breadcrumbs", url: `${BASE}/collections/phones`, notlar: "Phones PLP breadcrumbs." },
  { sayfa: "collection", schemaId: "collection-banner", selector: "#shopify-section-template--18890136715362__banner-split", url: `${BASE}/collections/phones`, notlar: "Phones (20) split banner." },
  { sayfa: "collection", schemaId: "product-showcase-grid-plp", selector: "#shopify-section-template--18890136715362__product-grid", url: `${BASE}/collections/phones`, notlar: "20 products · facets · sort grid." },
  { sayfa: "collection", schemaId: "editorial-rich-text", selector: "#shopify-section-template--18890136715362__rich_text_qNNc9k", url: `${BASE}/collections/phones`, notlar: "Cheapest deals on Phones." },
  { sayfa: "collection", schemaId: "comparison-quick-table", selector: "#shopify-section-template--18890136715362__product_compare_9xQqnR", url: `${BASE}/collections/phones`, notlar: "PLP product compare chart." },
  { sayfa: "collection", schemaId: "collection-nav-image-cards", selector: "#shopify-section-template--18890136715362__gallery_nmyEDw", url: `${BASE}/collections/phones`, notlar: "Related collections gallery." },

  // COLLECTIONS INDEX
  { sayfa: "collections", schemaId: "navigation-breadcrumbs", selector: "#shopify-section-template--15968305643618__breadcrumbs", url: `${BASE}/collections`, notlar: "Collections index breadcrumbs." },
  { sayfa: "collections", schemaId: "collection-nav-grid", selector: "#shopify-section-template--15968305643618__main", url: `${BASE}/collections`, notlar: "All collections grid." },

  // SEARCH
  { sayfa: "search", schemaId: "search-results", selector: "#shopify-section-template--15968305905762__main", url: `${BASE}/search?q=headphone`, notlar: "6 results for headphone · brand facet." },

  // CART
  { sayfa: "cart", schemaId: "cart-page-main", selector: "#shopify-section-template--15968305283170__cart", url: `${BASE}/cart`, notlar: "Empty cart page." },
  { sayfa: "cart", schemaId: "product-showcase-grid-featured", selector: "#shopify-section-template--15968305283170__featured-collection", url: `${BASE}/cart`, notlar: "Can we tempt you? upsell grid." },

  // BLOG LIST
  { sayfa: "blog-list", schemaId: "navigation-breadcrumbs", selector: "#shopify-section-template--15968305250402__breadcrumbs", url: `${BASE}/blogs/news`, notlar: "Home / News (title Grapevine)." },
  { sayfa: "blog-list", schemaId: "blog-list-main", selector: "#shopify-section-template--15968305250402__main", url: `${BASE}/blogs/news`, notlar: "Grapevine article grid." },
  { sayfa: "blog-list", schemaId: "editorial-image-with-text", selector: "#shopify-section-template--15968305250402__image_with_text_XRBNmA", url: `${BASE}/blogs/news`, notlar: "FEATURED ARTICLE smart phone evolution." },
  { sayfa: "blog-list", schemaId: "product-showcase-grid-featured", selector: "#shopify-section-template--15968305250402__featured_collection_WrcthK", url: `${BASE}/blogs/news`, notlar: "Our favourite phones on blog list." },

  // BLOG POST
  { sayfa: "blog-post", schemaId: "navigation-breadcrumbs", selector: "#shopify-section-template--15968305217634__breadcrumbs", url: `${BASE}/blogs/grapevine/from-work-to-play-the-most-versatile-laptops-of-the-year`, notlar: "Article breadcrumbs." },
  { sayfa: "blog-post", schemaId: "blog-post-main", selector: "#shopify-section-template--15968305217634__main", url: `${BASE}/blogs/grapevine/from-work-to-play-the-most-versatile-laptops-of-the-year`, notlar: "Versatile Laptops article body." },
  { sayfa: "blog-post", schemaId: "product-showcase-grid-featured", selector: "#shopify-section-template--15968305217634__product_list_7DntMk", url: `${BASE}/blogs/grapevine/from-work-to-play-the-most-versatile-laptops-of-the-year`, notlar: "Mentioned in this article products." },
];

function fileBase(entry) {
  if (!entry.instance || entry.instance === 1) return entry.schemaId;
  return `${entry.schemaId}-${entry.instance}`;
}

function observationId(entry) {
  const base = `ignite.default.${entry.sayfa}.${entry.schemaId}`;
  if (!entry.instance || entry.instance === 1) return base;
  return `${base}.${entry.instance}`;
}

let written = 0;
for (const entry of OBS) {
  const dir = path.join(root, "observations/ignite/default", entry.sayfa);
  fs.mkdirSync(dir, { recursive: true });
  const base = fileBase(entry);
  const outPath = path.join(dir, `${base}.json`);

  const obs = {
    observationId: observationId(entry),
    schemaId: entry.schemaId,
    kaynak: "ignite",
    preset: "default",
    sayfa: entry.sayfa,
    url: entry.url,
    selector: entry.selector,
    evidenceSlug: base,
    evidence: [],
    notlar: entry.notlar,
    delta: entry.delta || "",
    capture: {
      url: entry.url,
      viewports: ["375", "768", "1440"],
      mode: entry.captureMode || "section",
      method: entry.captureMode === "viewport" ? "viewport" : "margin-box+minPad8",
      updatedAt: "",
    },
  };

  if (entry.captureMode) obs.captureMode = entry.captureMode;
  if (entry.prepareClick) {
    obs.prepareClick = entry.prepareClick;
    obs.capture.prepareClick = entry.prepareClick;
  }
  if (entry.prepareFill) {
    obs.prepareFill = entry.prepareFill;
    obs.capture.prepareFill = entry.prepareFill;
  }

  fs.writeFileSync(outPath, JSON.stringify(obs, null, 2) + "\n");
  written++;
}

console.log(`Wrote ${written} observation files`);
