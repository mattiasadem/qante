/**
 * Beautify Mod A — observation roster + capture runner
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const BASE = "https://beautify-theme-cosmetics.myshopify.com";

const kaynak = "beautify";
const preset = "cosmetics";

/** @type {Array<{sayfa:string, schemaId:string, suffix?:string, url:string, selector:string, notlar?:string, delta?:string, captureMode?:string, prepareClick?:string, prepareScroll?:string}>} */
const roster = [
  // ── HOME globals ──
  // promo-announcement-bar skipped: dismiss-overlays clicks aria-label Close → bar collapses (leftover)
  {
    sayfa: "home",
    schemaId: "navigation-header-mega",
    url: `${BASE}/`,
    selector: "#shopify-section-sections--25486040432941__header",
    notlar: "Shop · Cosmetics · Collections · Quiz · Presets · logo · £ · Log in · Search · Bag.",
  },
  {
    sayfa: "home",
    schemaId: "global-predictive-search",
    url: `${BASE}/`,
    selector: "#shopify-section-sections--25486040432941__header",
    notlar: "1440 inline #header-search Search our store. 375/768 search icon in header.",
    delta: "Predictive dropdown interact bu turda yok; header host.",
  },
  {
    sayfa: "home",
    schemaId: "global-menu-drawer",
    url: `${BASE}/`,
    selector: ".main-menu__content",
    captureMode: "viewport",
    prepareClick: "summary.main-menu__toggle",
    notlar: "375/768 hamburger → Shop/Cosmetics/Collections/Quiz/Presets drill.",
    delta: "1440 summary.main-menu__toggle lg:hidden 0×0.",
  },
  {
    sayfa: "home",
    schemaId: "global-cart-drawer",
    url: `${BASE}/`,
    selector: "#cart-drawer",
    captureMode: "viewport",
    prepareClick: "#cart-icon",
    notlar: "375/768 #cart-icon drawer açar (sayfa kalmaz). Boş: Your cart is empty.",
    delta: "1440 #cart-icon href=/cart — drawer static capture yalnız mobil/tablet.",
  },
  // ── HOME sections ──
  {
    sayfa: "home",
    schemaId: "hero-slideshow",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__hero_6VRtwQ",
    notlar: "Beauty that's more than skin deep… Best Sellers / Editors Pick tabs + ürün grid.",
    delta: "hero section — tabbed hero + embedded product grid.",
  },
  {
    sayfa: "home",
    schemaId: "product-showcase-favorites",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__rich_text_MC7wKK",
    notlar: "YOUR FAVORITES · Loved By You · ürün kartları (Matte Lipstick / Plum Berry…).",
    delta: "rich_text section id; favorites carousel/grid.",
  },
  {
    sayfa: "home",
    schemaId: "editorial-image-with-text",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__media_with_text_rRAjDw",
    notlar: "The best in beauty — luxury lighter footprint.",
  },
  {
    sayfa: "home",
    schemaId: "editorial-highlight-text-image",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__highlight_text_with_image_DjNUGD",
    notlar: "A curated selection of clean skincare essentials + cosmetics.",
  },
  {
    sayfa: "home",
    schemaId: "editorial-image-with-text-overlay",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__image_banner_scrolling_text_Rk83c3",
    notlar: "Beauty & Elegance Results guaranteed — scrolling text overlay banner.",
    delta: "image_banner_scrolling_text — marquee metin overlay üstünde.",
  },
  {
    sayfa: "home",
    schemaId: "editorial-image-with-text-overlay",
    suffix: "2",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__parallax_image_with_text_DztiDe",
    notlar: "Flawless finish. Perfect complexion. BEAUTIFUL RESULTS - GUARANTEED.",
    delta: "parallax_image_with_text — parallax scroll (motion/token).",
  },
  {
    sayfa: "home",
    schemaId: "before-after-slider",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__before_after_image_slider_AFjrtg",
    notlar: "Before / After / Drag — Better with Beautify.",
  },
  {
    sayfa: "home",
    schemaId: "promo-banner-countdown",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__image_banner_kXcGFH",
    notlar: "All new Beautify Body Glow · Coming soon! DAY HOUR MIN SEC · Pre-order now.",
  },
  {
    sayfa: "home",
    schemaId: "collection-nav-slider",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__hero_collections_g8RJD4",
    notlar: "All Products — Foundations / Lips / Face kart slider.",
    delta: "hero_collections section type.",
  },
  {
    sayfa: "home",
    schemaId: "media-video-hero",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__background_video_EjnfpG",
    notlar: "THE BEST IN BEAUTY — background video + Shop All CTA.",
    delta: "background_video section.",
  },
  {
    sayfa: "home",
    schemaId: "editorial-rich-text",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__rich_text_8eFFhh",
    notlar: "THE BEAUTIFY WAY — Clean skincare + makeup.",
  },
  {
    sayfa: "home",
    schemaId: "media-lookbook-banner",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__shoppable_image_xwz8ch",
    notlar: "Hotspot: Longwear Foundation · Blush Multi-Stick · View details.",
    delta: "shoppable_image hotspots.",
  },
  {
    sayfa: "home",
    schemaId: "editorial-rich-text",
    suffix: "2",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__rich_text_89jBDn",
    notlar: "CRAFTED WITH CARE — Sustainable. Sophisticated.",
  },
  {
    sayfa: "home",
    schemaId: "media-lookbook-slider",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__get_the_look_FCnVKD",
    notlar: "Get the look — Face / Lips tabs + ürün kartları.",
    delta: "get_the_look section — tabbed lookbook slider.",
  },
  {
    sayfa: "home",
    schemaId: "media-lookbook-slider",
    suffix: "2",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__shoppable_carousel_zHhne6",
    notlar: "Latest Trends — Lip Blush / Makeup Sponge hotspot carousel.",
    delta: "shoppable_carousel.",
  },
  {
    sayfa: "home",
    schemaId: "promo-scrolling-marquee",
    url: `${BASE}/`,
    selector: "#shopify-section-template--25486040006957__scrolling_text_trqAg4",
    notlar: "Beautiful results Guaranteed — horizontal marquee.",
  },
  {
    sayfa: "home",
    schemaId: "footer-columns-newsletter",
    url: `${BASE}/`,
    selector: "#shopify-section-sections--25486040400173__footer",
    notlar: "Newsletter 20% off · Shop/About/Help columns · social · payment icons.",
    delta: "Submit / email doldurulmadı (PII).",
  },
  // ── PDP ──
  {
    sayfa: "pdp",
    schemaId: "product-info-main",
    url: `${BASE}/products/blush-multi-stick`,
    selector: "#shopify-section-template--25486040301869__main",
    notlar: "Blush Multi-Stick — New In · swatches · Pre-order · Add to cart · accordion.",
  },
  {
    sayfa: "pdp",
    schemaId: "editorial-rich-text",
    url: `${BASE}/products/blush-multi-stick`,
    selector: "#shopify-section-template--25486040301869__rich_text_XYxiNd",
    notlar: "EFFORTLESS. REFINED. YOURS. — product intro copy.",
  },
  {
    sayfa: "pdp",
    schemaId: "editorial-image-with-text-overlay",
    url: `${BASE}/products/blush-multi-stick`,
    selector: "#shopify-section-template--25486040301869__image_banner_FtQH96",
    notlar: "The best in beauty banner on PDP.",
  },
  {
    sayfa: "pdp",
    schemaId: "trust-icon-row",
    url: `${BASE}/products/blush-multi-stick`,
    selector: "#shopify-section-template--25486040301869__icons_with_text_4C4RBN",
    notlar: "Free shipping · Special offers · Easy returns icons.",
    delta: "icons_with_text section.",
  },
  {
    sayfa: "pdp",
    schemaId: "editorial-image-with-text",
    url: `${BASE}/products/blush-multi-stick`,
    selector: "#shopify-section-template--25486040301869__media_with_text_pyjjYD",
    notlar: "How to use — Prep the Skin steps.",
  },
  {
    sayfa: "pdp",
    schemaId: "editorial-rich-text",
    suffix: "2",
    url: `${BASE}/products/blush-multi-stick`,
    selector: "#shopify-section-template--25486040301869__rich_text_CYbUax",
    notlar: "Why we love it… Crease-resistant bullet list.",
  },
  {
    sayfa: "pdp",
    schemaId: "product-showcase-related",
    url: `${BASE}/products/blush-multi-stick`,
    selector: "#shopify-section-template--25486040301869__featured_collection_xG8XzT",
    notlar: "You may also like… related product grid.",
    delta: "featured_collection.",
  },
  // ── COLLECTION ──
  {
    sayfa: "collection",
    schemaId: "collection-banner",
    url: `${BASE}/collections/best-sellers`,
    selector: "#shopify-section-template--25486039974189__collection-banner",
    notlar: "Home / Best Sellers · Discover what the beauty world can't live without.",
  },
  {
    sayfa: "collection",
    schemaId: "product-showcase-grid-plp",
    url: `${BASE}/collections/best-sellers`,
    selector: "#shopify-section-template--25486039974189__collection-products",
    notlar: "Editors Pick · Featured · Eyes/Face/Lips tabs · Change layout 2 columns.",
    delta: "collection-products — filter/sort/layout toggle.",
  },
  {
    sayfa: "collection",
    schemaId: "collection-nav-slider",
    url: `${BASE}/collections/best-sellers`,
    selector: "#shopify-section-template--25486039974189__collection_list_PMRU8k",
    notlar: "More Collections — Best Sellers / New / Face / Skin Tint slider.",
    delta: "collection_list.",
  },
  // ── SEARCH ──
  {
    sayfa: "search",
    schemaId: "search-results",
    url: `${BASE}/search?q=lipstick`,
    selector: "#shopify-section-template--25486040367405__main",
    notlar: "56 results for lipstick · Change layout · product grid.",
  },
  {
    sayfa: "search",
    schemaId: "collection-nav-slider",
    url: `${BASE}/search?q=lipstick`,
    selector: "#shopify-section-template--25486040367405__collection_list_YFxLPy",
    notlar: "Best Sellers / New / Face / Skin Tint collection cards below search.",
    delta: "collection_list on search template.",
  },
  // ── CART ──
  {
    sayfa: "cart",
    schemaId: "cart-page-main",
    url: `${BASE}/cart`,
    selector: "#shopify-section-template--25486039908653__main",
    notlar: "Your cart is empty · Start shopping · Estimated total £0.00.",
  },
  {
    sayfa: "cart",
    schemaId: "collection-nav-slider",
    url: `${BASE}/cart`,
    selector: "#shopify-section-template--25486039908653__collection_list_EcmjT3",
    notlar: "Before you go… collection slider.",
    delta: "collection_list on cart.",
  },
  // ── BLOG ──
  {
    sayfa: "blog-list",
    schemaId: "collection-banner",
    url: `${BASE}/blogs/news`,
    selector: "#shopify-section-template--25486039875885__banner",
    notlar: "Home / Beauty Talk · Style tips how-to guides.",
    delta: "Blog list banner — collection-banner reuse.",
  },
  {
    sayfa: "blog-list",
    schemaId: "blog-list-main",
    url: `${BASE}/blogs/news`,
    selector: "#shopify-section-template--25486039875885__main",
    notlar: "Tag filters: Eyes / Foundation / Hydration… + article cards.",
  },
  {
    sayfa: "blog-list",
    schemaId: "collection-nav-slider",
    url: `${BASE}/blogs/news`,
    selector: "#shopify-section-template--25486039875885__collection_list_W6zLmq",
    notlar: "Shop Collections… slider below blog grid.",
  },
  {
    sayfa: "blog-post",
    schemaId: "collection-banner",
    url: `${BASE}/blogs/news/summer-proof-your-makeup-how-to-stay-fresh-in-the-heat`,
    selector: "#shopify-section-template--25486039843117__banner",
    notlar: "Home / Beauty Talk / Summer-proof your makeup — article hero.",
    delta: "Blog post banner.",
  },
  {
    sayfa: "blog-post",
    schemaId: "blog-post-main",
    url: `${BASE}/blogs/news/summer-proof-your-makeup-how-to-stay-fresh-in-the-heat`,
    selector: "#shopify-section-template--25486039843117__main",
    notlar: "Article body — Hot weather makeup tips. Share / tags.",
  },
];

function obsPath(item) {
  const file = item.suffix ? `${item.schemaId}-${item.suffix}.json` : `${item.schemaId}.json`;
  return path.join(root, "observations", kaynak, preset, item.sayfa, file);
}

function writeObs(item) {
  const suffix = item.suffix ? `.${item.suffix.replace(/^-/, "")}` : "";
  const obsIdSuffix = item.suffix ? `.${item.suffix.replace(/-/g, "")}` : "";
  const obs = {
    observationId: `${kaynak}.${preset}.${item.sayfa}.${item.schemaId}${obsIdSuffix}`,
    schemaId: item.schemaId,
    kaynak,
    preset,
    sayfa: item.sayfa,
    url: item.url,
    selector: item.selector,
    evidenceSlug: item.suffix ? `${item.schemaId}-${item.suffix}` : item.schemaId,
    evidence: [],
    notlar: item.notlar || "",
    delta: item.delta || "",
    capture: {
      url: item.url,
      viewports: ["375", "768", "1440"],
      mode: item.captureMode || "section",
      method: item.captureMode === "viewport" ? "viewport" : "margin-box+minPad8",
      updatedAt: "",
    },
  };
  if (item.captureMode) obs.captureMode = item.captureMode;
  if (item.prepareClick) obs.prepareClick = item.prepareClick;
  if (item.prepareScroll) obs.prepareScroll = item.prepareScroll;

  const p = obsPath(item);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obs, null, 2) + "\n");
  return p;
}

const onlyCapture = process.argv.includes("--capture-only");
const onlyWrite = process.argv.includes("--write-only");

if (!onlyCapture) {
  console.log(`Writing ${roster.length} observations…`);
  for (const item of roster) {
    writeObs(item);
    console.log("  wrote", obsPath(item));
  }
}

if (!onlyWrite) {
  console.log("\nCapturing 3VP…");
  let ok = 0;
  let fail = 0;
  for (const item of roster) {
    const p = obsPath(item);
    if (!fs.existsSync(p)) {
      console.error("missing", p);
      fail++;
      continue;
    }
    process.stdout.write(`capture: ${path.basename(p)} … `);
    const r = spawnSync("node", ["capture-observation.mjs", p], {
      cwd: path.join(root, "scripts"),
      encoding: "utf8",
      timeout: 180000,
    });
    if (r.status === 0) {
      ok++;
      console.log("OK");
    } else {
      fail++;
      console.log("FAIL");
      console.error(r.stderr?.slice(-500) || r.stdout?.slice(-500));
    }
  }
  console.log(`\nDone: ${ok} OK, ${fail} FAIL / ${roster.length} total`);
}
