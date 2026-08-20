/**
 * Generate Honey (Paws preset) observation JSON stubs for Mod A discover.
 * Run captures: node scripts/run-honey-captures.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const KAYNAK = "honey";
const PRESET = "paws";
const BASE = "https://honey-paws-theme.myshopify.com";

const URLS = {
  home: `${BASE}/`,
  "product-detail": `${BASE}/products/all-in-one-grooming-kit`,
  collection: `${BASE}/collections/all`,
  search: `${BASE}/search?q=dog`,
  cart: `${BASE}/cart`,
  "blog-list": `${BASE}/blogs/news`,
  "blog-post": `${BASE}/blogs/news/the-healthiest-foods-for-your-cat`,
  "faq-support": `${BASE}/pages/faq`,
  contact: `${BASE}/pages/contact`,
  "about-brand": `${BASE}/pages/theme-features`,
};

/** @type {Array<{sayfa:string, schemaId:string, slug?:string, selector:string, url?:string, delta?:string, notlar?:string, prepareClick?:string, prepareFill?:object, captureMode?:string, skip?:boolean}>} */
const ROSTER = [
  // --- home ---
  {
    sayfa: "home",
    schemaId: "navigation-header-mega",
    selector: "#shopify-section-sections--22517370814752__header",
    notlar: "PAWS logo + language/country + search + cart. Cats/Dogs/Small Pets/Gifts/Blog/Sale.",
    delta: "Honey header mega: Theme Features + pet category nav.",
  },
  {
    sayfa: "home",
    schemaId: "hero-slideshow",
    selector:
      "#shopify-section-template--22517371797792__cd23bce3-ebae-428a-b4f6-5c5b8983911d",
    notlar: "FOR PETS WITH STYLE hero slideshow.",
  },
  {
    sayfa: "home",
    schemaId: "social-proof-brand-logos",
    selector: "#shopify-section-template--22517371797792__logo_banner",
    notlar: "Logo banner strip.",
  },
  {
    sayfa: "home",
    schemaId: "editorial-dynamic-grid",
    selector: "#shopify-section-template--22517371797792__collage",
    notlar: "Collage: Custom Dog Beds.",
    delta: "Honey collage block.",
  },
  {
    sayfa: "home",
    schemaId: "collection-nav-image-cards",
    selector: "#shopify-section-template--22517371797792__multicolor-cards",
    notlar: "HARNESSES / LEASHES / COLLARS / TOYS color cards.",
  },
  {
    sayfa: "home",
    schemaId: "editorial-dynamic-grid",
    slug: "editorial-dynamic-grid-2",
    selector: "#shopify-section-template--22517371797792__media-grid",
    notlar: "Bento media grid: Training Kit + treats.",
    delta: "media-grid bento layout.",
  },
  {
    sayfa: "home",
    schemaId: "editorial-image-with-text",
    selector: "#shopify-section-template--22517371797792__media-with-text",
    notlar: "FOR LOVERS OF CATS & DECOR.",
  },
  {
    sayfa: "home",
    schemaId: "media-lookbook-banner",
    selector: "#shopify-section-template--22517371797792__shop-the-look",
    notlar: "Shop-the-look hotspots: Dog Harness + Parker Leash.",
  },
  {
    sayfa: "home",
    schemaId: "testimonial-quote-carousel",
    selector: "#shopify-section-template--22517371797792__testimonials",
    notlar: "Quote carousel.",
  },
  {
    sayfa: "home",
    schemaId: "features-multicolumn",
    selector: "#shopify-section-template--22517371797792__feature-cards",
    notlar: "ELEVATE THE EVERYDAY feature cards.",
  },
  {
    sayfa: "home",
    schemaId: "collection-nav-image-cards",
    slug: "collection-nav-image-cards-2",
    selector:
      "#shopify-section-template--22517371797792__94c99646-e028-4808-a160-bcd24f3ab28f",
    notlar: "SHOP BY PET: Dogs / Cats / Small Pets.",
  },
  {
    sayfa: "home",
    schemaId: "trust-icon-row",
    selector: "#shopify-section-template--22517371797792__checklist",
    notlar: "DURABLE & COMFORTABLE checklist icons.",
  },
  {
    sayfa: "home",
    schemaId: "product-showcase-featured",
    selector: "#shopify-section-template--22517371797792__featured-product",
    notlar: "Featured product: Paws Identity Tag.",
  },
  {
    sayfa: "home",
    schemaId: "editorial-image-with-text-overlay",
    selector:
      "#shopify-section-template--22517371797792__186b366b-fa66-412a-b54b-07dacf6a8330",
    notlar: "GIFTS FOR CAT LOVERS overlay banner.",
  },
  {
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    selector:
      "#shopify-section-template--22517371797792__featured_collection_MPzqpH",
    notlar: "JUST IN featured collection grid.",
  },
  {
    sayfa: "home",
    schemaId: "promo-banner-countdown",
    selector:
      "#shopify-section-template--22517371797792__b30f67f4-1b9c-46f0-a87c-d9b4afce00eb",
    notlar: "Semi-annual sale countdown.",
  },
  {
    sayfa: "home",
    schemaId: "before-after-slider",
    selector: "#shopify-section-template--22517371797792__before_after_pXgMVQ",
    notlar: "GROOM LIKE A PRO before/after slider.",
  },
  {
    sayfa: "home",
    schemaId: "promo-grid-banner",
    selector:
      "#shopify-section-template--22517371797792__5a3a15b3-9a15-4dfd-8dbe-923381f108bd",
    notlar: "SAVE UP TO 50% promo banner.",
  },
  {
    sayfa: "home",
    schemaId: "collection-nav-grid",
    selector: "#shopify-section-template--22517371797792__collection_list",
    notlar: "SHOP BEDS / TOWERS / WALK GEAR collection list.",
  },
  {
    sayfa: "home",
    schemaId: "collection-nav-image-cards",
    slug: "collection-nav-image-cards-3",
    selector: "#shopify-section-template--22517371797792__featured-shops",
    notlar: "SHOP BY CATEGORY featured shops.",
  },
  {
    sayfa: "home",
    schemaId: "testimonial-quote-carousel",
    slug: "testimonial-quote-carousel-2",
    selector:
      "#shopify-section-template--22517371797792__f86bb395-0229-4f62-a8ed-57207fe8e7c8",
    notlar: "Single customer quote (Misty C.).",
    delta: "Tek alıntı kartı, carousel değil.",
  },
  {
    sayfa: "home",
    schemaId: "promo-grid-banner",
    slug: "promo-grid-banner-2",
    selector: "#shopify-section-template--22517371797792__social-media-banner",
    notlar: "@PAWS Instagram social banner.",
  },
  {
    sayfa: "home",
    schemaId: "media-video-hero",
    selector: "#shopify-section-template--22517371797792__video-column",
    notlar: "TikTok video column: SHOP WITH US.",
  },
  {
    sayfa: "home",
    schemaId: "faq-collapsible-tabs",
    selector: "#shopify-section-template--22517371797792__FAQ",
    notlar: "NEED HELP? inline FAQ + contact info.",
    delta: "Honey FAQ block: email + accordion.",
  },
  {
    sayfa: "home",
    schemaId: "editorial-rich-text",
    selector:
      "#shopify-section-template--22517371797792__50a2cf5a-028e-4409-9a35-640dc7f111fb",
    notlar: "VISIT US store location block.",
  },
  {
    sayfa: "home",
    schemaId: "features-multicolumn",
    slug: "features-multicolumn-2",
    selector: "#shopify-section-template--22517371797792__multicolumn-banner",
    notlar: "FAST SHIPPING / FREE RETURNS / EASY EXCHANGES.",
  },
  {
    sayfa: "home",
    schemaId: "footer-columns-newsletter",
    selector: "#shopify-section-sections--22517370847520__footer",
    notlar: "Footer columns + newsletter field (submit yok).",
  },
  {
    sayfa: "home",
    schemaId: "lead-capture-newsletter-band",
    selector: "#shopify-section-sections--22517370847520__7d63fab8-56c1-4cbb-8cbf-6c7faaa55950",
    notlar: "Footer newsletter band / app block.",
    delta: "Honey footer app embed.",
  },
  {
    sayfa: "home",
    schemaId: "global-cart-drawer",
    selector: "#CartDrawer",
    prepareClick: "#cart-icon-bubble",
    captureMode: "viewport",
    notlar: "Dawn-style cart drawer via #cart-icon-bubble.",
    delta: "cart-drawer component; boş sepet.",
  },
  {
    sayfa: "home",
    schemaId: "global-predictive-search",
    selector: ".search-modal",
    prepareClick: "summary.header__icon--search",
    prepareFill: { selector: "#Search-In-Modal", value: "dog" },
    captureMode: "viewport",
    notlar: "Predictive search modal, query dog.",
  },
  {
    sayfa: "home",
    schemaId: "global-menu-drawer",
    selector: "#menu-drawer",
    prepareClick: "summary.header__icon--menu",
    captureMode: "viewport",
    notlar: "Mobile menu drawer (375/768; 1440 inline nav).",
    delta: "Honey menu-drawer alt-background.",
  },

  // --- product-detail ---
  {
    sayfa: "product-detail",
    schemaId: "product-info-main",
    selector: "#shopify-section-template--22517371044128__product-information",
    notlar: "All-in-One Grooming Kit PDP.",
  },
  {
    sayfa: "product-detail",
    schemaId: "product-info-tabs",
    selector: "#shopify-section-template--22517371044128__product-content",
    notlar: "Product content tabs/accordion.",
  },
  {
    sayfa: "product-detail",
    schemaId: "product-showcase-related",
    selector: "#shopify-section-template--22517371044128__product-recommendations",
    notlar: "You may also like recommendations.",
  },
  {
    sayfa: "product-detail",
    schemaId: "hero-slideshow",
    slug: "hero-slideshow-2",
    selector:
      "#shopify-section-template--22517371044128__d2ecda70-d334-4a80-b143-62d22b49d661",
    notlar: "PDP bottom hero: WHERE STYLE & QUALITY MEET.",
  },

  // --- collection ---
  {
    sayfa: "collection",
    schemaId: "collection-banner",
    selector: "#shopify-section-template--22517371863328__banner",
    notlar: "COLLECTION: ALL banner.",
  },
  {
    sayfa: "collection",
    schemaId: "product-showcase-grid-plp",
    selector: "#shopify-section-template--22517371863328__product-grid",
    notlar: "PLP grid with filters.",
  },

  // --- search ---
  {
    sayfa: "search",
    schemaId: "search-results",
    selector: "#shopify-section-template--22517371830560__main",
    notlar: 'Search results for "dog".',
  },

  // --- cart ---
  {
    sayfa: "cart",
    schemaId: "cart-page-main",
    selector: "#shopify-section-template--22517371011360__main",
    notlar: "Empty cart page.",
  },

  // --- blog ---
  {
    sayfa: "blog-list",
    schemaId: "blog-list-main",
    selector: "#shopify-section-template--22517371273504__main",
    notlar: "News blog index.",
  },
  {
    sayfa: "blog-post",
    schemaId: "blog-post-main",
    selector: "#shopify-section-template--22517371470112__main",
    notlar: "Article: The healthiest foods for your cat.",
  },

  // --- content pages ---
  {
    sayfa: "faq-support",
    schemaId: "editorial-rich-text",
    slug: "editorial-rich-text-faq-header",
    selector: "#shopify-section-template--22517371502880__faq-header",
    notlar: "FAQ page header.",
  },
  {
    sayfa: "faq-support",
    schemaId: "faq-collapsible-tabs",
    slug: "faq-collapsible-tabs-page",
    selector: "#shopify-section-template--22517371502880__faq_1",
    notlar: "FAQ accordion block 1.",
  },
  {
    sayfa: "faq-support",
    schemaId: "faq-collapsible-tabs",
    slug: "faq-collapsible-tabs-page-2",
    selector: "#shopify-section-template--22517371502880__faq_2",
    notlar: "FAQ accordion block 2.",
  },
  {
    sayfa: "contact",
    schemaId: "lead-capture-form",
    selector: "#shopify-section-template--22517371896096__form",
    notlar: "Contact form (submit yok).",
  },
  {
    sayfa: "about-brand",
    schemaId: "page-content-main",
    selector: "#shopify-section-template--22517371306272__main",
    notlar: "Theme Features page title block.",
  },
];

function obsPath(item) {
  const file = item.slug || item.schemaId;
  return path.join(root, "observations", KAYNAK, PRESET, item.sayfa, `${file}.json`);
}

function observationId(item) {
  const base = `${KAYNAK}.${PRESET}.${item.sayfa}.${item.schemaId}`;
  if (!item.slug) return base;
  const suffix = item.slug.replace(item.schemaId, "").replace(/^-/, "");
  if (!suffix) return `${base}.2`;
  const num = suffix.match(/-(\d+)$/)?.[1];
  if (num) return `${base}.${num}`;
  if (suffix.endsWith("-2")) return `${base}.2`;
  return `${base}.${suffix}`;
}

let created = 0;
for (const item of ROSTER) {
  if (item.skip) continue;
  const url = item.url || URLS[item.sayfa];
  const obs = {
    observationId: observationId(item),
    schemaId: item.schemaId,
    kaynak: KAYNAK,
    preset: PRESET,
    sayfa: item.sayfa,
    url,
    selector: item.selector,
    evidenceSlug: item.slug || item.schemaId,
    evidence: [],
    notlar: item.notlar || "",
    delta: item.delta || "",
    capture: {
      url,
      viewports: ["375", "768", "1440"],
      method: "margin-box+minPad8",
      updatedAt: "",
    },
  };
  if (item.prepareClick) obs.prepareClick = item.prepareClick;
  if (item.prepareFill) obs.prepareFill = item.prepareFill;
  if (item.captureMode) {
    obs.captureMode = item.captureMode;
    obs.capture.mode = item.captureMode;
  }

  const out = obsPath(item);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(obs, null, 2) + "\n");
  created++;
}

console.log(JSON.stringify({ created, roster: ROSTER.length }, null, 2));
