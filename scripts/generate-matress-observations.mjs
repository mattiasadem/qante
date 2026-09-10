/**
 * Generate Matress (Speedo) observation JSON — official demo only.
 * Host: https://mattress-online-store-1.myshopify.com/ · password 1
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const KAYNAK = "matress";
const PRESET = "default";
const BASE = "https://mattress-online-store-1.myshopify.com/";
const PDP = `${BASE}products/duo-plus-mattress`;
const BLOG_POST = `${BASE}blogs/news/the-simple-joy-of-reading-in-bed-creating-your-cozy-nook`;

const DELTA =
  "Shopify.theme.name matress-v-1-5-0-latest-updates-new · schema_name Matress · schema_version 1.5.0 · theme_store_id null · role main · id 126821171258 · handle null · shop mattress-online-store-1.myshopify.com · Speedo Themes third-party (Theme Store official değil). Vendor-published demo password 1 (public storefront unlock).";

function obs({
  sayfa,
  schemaId,
  selector,
  url = BASE,
  notlar = "",
  delta = DELTA,
  suffix = "",
  extra = {},
}) {
  const fileSuffix = suffix ? `-${suffix}` : "";
  const idSuffix = suffix ? `.${suffix}` : "";
  const observationId = `${KAYNAK}.${PRESET}.${sayfa}.${schemaId}${idSuffix}`;
  const relDir = `observations/${KAYNAK}/${PRESET}/${sayfa}`;
  const fileName = `${schemaId}${fileSuffix}.json`;
  const evidenceSlug = schemaId + fileSuffix;
  const base = {
    observationId,
    schemaId,
    kaynak: KAYNAK,
    preset: PRESET,
    sayfa,
    url,
    selector,
    evidenceSlug,
    evidence: [],
    notlar,
    delta,
    storefrontPassword: "1",
    capture: {
      url,
      viewports: ["375", "768", "1440"],
      method: "margin-box+minPad8",
      updatedAt: "",
    },
    ...extra,
  };
  return { relDir, fileName, base };
}

const items = [
  obs({
    sayfa: "home",
    schemaId: "promo-announcement-bar",
    selector: "#shopify-section-sections--15527145996346__announcement_bar_fHNTbB",
    notlar:
      "utility-bar: sosyal Facebook/Instagram/X/Pinterest + 2 mesaj (JOIN OUR EMAIL LIST 20% OFF / Free shipping over £75) + Country/region USD + Language ENGLISH.",
  }),
  obs({
    sayfa: "home",
    schemaId: "navigation-header-mega",
    selector: "#shopify-section-sections--15527145996346__header",
    notlar:
      "header--middle. 1440 inline SHOP · BESTSELLER · THEMES · SHOP BY · COLLECTIONS. details#Details-HeaderMenu-1..5.mega-menu. Search + Wishlist 0 + Compare 0 + Log in + Cart. Hamburger #Details-menu-drawer-container.",
    extra: { captureMode: "viewport" },
  }),
  obs({
    sayfa: "home",
    schemaId: "hero-slideshow",
    selector:
      "#shopify-section-template--15527145111610__3b7cb796-4e44-4edc-96f9-002a08ba8170",
    notlar:
      "MEET OUR NEW MATTRESS / PERFECT SLEEPER PRO + SHOP NOW. slideshow-component. Walk'ta 1 slayt metni görüldü.",
  }),
  obs({
    sayfa: "home",
    schemaId: "trust-icon-row",
    selector:
      "#shopify-section-template--15527145111610__service_icon_cRV7DD",
    notlar:
      "4 vaat: AMERICA'S #1 MATTRESS BRAND · FREE DELIVERY · 90 NIGHT TRIAL · 10 YEAR WARRANTY.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    selector:
      "#shopify-section-template--15527145111610__featured_product_slider_nxrkYp",
    notlar:
      "FOUR MODES TO REST. featured-product-slider. Kartlarda Size Single/Double/Queen/King/Custom + quick-add + wishlist/compare. Duo Plus $150, Ergotech, Hybrid Pocket Spring…",
  }),
  obs({
    sayfa: "home",
    schemaId: "features-multicolumn",
    selector:
      "#shopify-section-template--15527145111610__custom_multicolumn_list_y6H93J",
    notlar:
      "LONG LASTING COMFORT & SUPPORTIVE MATTRESS. 3 kolon: HEALTHY SOUL 100% · RESTLESS PILLOW 1440mins · DELICIOUS SLEEP 95%.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-image-with-text",
    selector:
      "#shopify-section-template--15527145111610__custom_image_with_text_ztfNVw",
    notlar:
      "QUALITYMATTRESS / COMFORT WITH OUR PREMIUM MATTRESSES + gövde metin. custom_image_with_text.",
  }),
  obs({
    sayfa: "home",
    schemaId: "testimonial-quote-carousel",
    selector:
      "#shopify-section-template--15527145111610__testimonials_Khkjqf",
    notlar:
      "TESTIMONIALS / WHAT OUR CUSTOMERS SAY. Ralph Edwards + lorem alıntı. section-testimonials.",
  }),
  obs({
    sayfa: "home",
    schemaId: "media-video-hero",
    selector: "#shopify-section-template--15527145111610__video_MakxPW",
    notlar:
      "video_MakxPW ~676px. Walk innerText boş — poster/video; metin overlay yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "blog-list-main",
    selector:
      "#shopify-section-template--15527145111610__588ae6a9-e23f-4b45-83e9-2723eeb61871",
    notlar:
      "NEWS / OUR BLOGS. May 5, 2025 kartlar: The Simple Joy of Reading in Bed · Layered Comfort… READ MORE.",
  }),
  obs({
    sayfa: "home",
    schemaId: "media-shop-the-feed",
    selector:
      "#shopify-section-template--15527145111610__custom_instagram_N8fnnR",
    notlar: "@MATRESS #follow on social media. custom_instagram. Hotspot yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "promo-scrolling-marquee",
    selector:
      "#shopify-section-template--15527145111610__custom_announcement_bar_m3A7zE",
    notlar:
      "custom_announcement_bar ticker: Free shipping £75 · 10% OFF mattress · Returns 60 days · SALE 20% code SPEEDO · Email 20% off.",
  }),
  obs({
    sayfa: "home",
    schemaId: "footer-columns-newsletter",
    selector: "#shopify-section-sections--15527145963578__footer",
    notlar:
      "UNLOCK 10% OFF YOUR 1ST ORDER!* Email SUBSCRIBE (submit yok). QUICK LINKS / SHOP sizes / INFORMATION policy. Sosyal + ödeme ikonları.",
  }),
  obs({
    sayfa: "home",
    schemaId: "global-cart-drawer",
    selector: "#CartDrawer",
    notlar: "cart-drawer.shipping. #cart-icon-bubble. Boş: is-empty. Checkout tıklanmadı.",
    extra: { captureMode: "viewport", prepareClick: "#cart-icon-bubble" },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-menu-drawer",
    selector: "#menu-drawer",
    notlar:
      "#menu-drawer. SHOP/BESTSELLER/THEMES/SHOP BY/COLLECTIONS + Wishlist/Compare/Log in/locale. 1440 hamburger gizli (inline mega).",
    extra: {
      captureMode: "viewport",
      prepareClick: "#Details-menu-drawer-container > summary",
    },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-predictive-search",
    selector: "details-modal.header__search, details:has(#Search-In-Modal)",
    notlar:
      "details-modal.header__search. #Search-In-Modal name=q. İkinci predictive-search header-search_box. Submit yok.",
    extra: {
      captureMode: "viewport",
      prepareClick: "summary.header__icon--search",
    },
  }),

  obs({
    sayfa: "product-detail",
    schemaId: "product-info-main",
    url: PDP,
    selector: "#shopify-section-template--15527145701434__main",
    notlar:
      "DUO PLUS MATTRESS $160→$150. Size Single/Double/Queen/King/Custom. Qty stepper. ADD TO CART + Buy it now (tıklanmadı). Stock 100 · Delivery Sep 20, 2026 · 17 viewing · countdown. Pairs well with EGO HYBRID. Size Guide.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-tabs",
    url: PDP,
    selector:
      "#shopify-section-template--15527145701434__79582f51-5736-4bff-b870-bba69393ad36",
    notlar:
      "Description / Additional Information / Shipping And Delivery. İlk sekme Description lorem.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "editorial-image-with-text-overlay",
    url: PDP,
    selector: "#shopify-section-template--15527145701434__video_NWBDjf",
    notlar:
      "video_NWBDjf: New Arrival / OUR LATEST COLLECTION + lorem. Video + overlay metin.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "features-multicolumn",
    url: PDP,
    selector: "#shopify-section-template--15527145701434__multicolumn_VH4Wqb",
    notlar:
      "MADE WITH LOVE · INNOVATION & SAFE (+ 3. kolon walk kesildi). Giyim kopyası demo sapması.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "editorial-image-with-text",
    url: PDP,
    selector: "#shopify-section-template--15527145701434__multirow_nmyQVH",
    notlar: "LATEST / THE SLEEP YOU DESERVE + lorem. Dawn multirow.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "trust-icon-row",
    url: PDP,
    selector: "#shopify-section-template--15527145701434__service_icon_yLrPgn",
    notlar:
      "FREE SHIPPING · SUPPORT 24/7 · 100% MONEY BACK. service_icon.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-grid-banner",
    url: PDP,
    selector: "#shopify-section-template--15527145701434__sub_banner_3tq9yU",
    notlar:
      "2 kart: EXCLUSIVE OFFER! New Season UP TO 50% OFF SHOP NOW · Shop Our Latest Arrivals INCREDIBLE DEALS SHOP NOW.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "faq-collapsible-tabs",
    url: PDP,
    selector:
      "#shopify-section-template--15527145701434__collapsible_content_Ya3Wzj",
    notlar:
      "FAQ: How do I place an order? · shipping · return policy · return/exchange · find… collapsible_content.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-scrolling-marquee",
    url: PDP,
    selector:
      "#shopify-section-template--15527145701434__custom_announcement_bar_zqchrk",
    notlar:
      "Ticker: Free shipping £75 · 10% OFF clothing · Returns 60 days · SALE 20% SPEEDO. Giyim kopyası sapması.",
  }),

  obs({
    sayfa: "collection",
    schemaId: "collection-banner",
    url: `${BASE}collections/all`,
    selector: "#shopify-section-template--15527144849466__banner",
    notlar: "Collection: Products başlık bandı.",
  }),
  obs({
    sayfa: "collection",
    schemaId: "product-showcase-grid-plp",
    url: `${BASE}collections/all`,
    selector: "#shopify-section-template--15527144849466__product-grid",
    notlar:
      "Home / Products. Filters Size (Single 21…) Category Fabric Availability Price. Grid Beautyrest Harmony Lux $185. Sort Featured…",
  }),

  obs({
    sayfa: "collections",
    schemaId: "collection-nav-grid",
    url: `${BASE}collections`,
    selector: "#shopify-section-template--15527145144378__main",
    notlar:
      "COLLECTIONS kart: BEST SELLER · COIR · HOME PAGE · HYBRID · INNERSPRING · LATEX · MEMORY FOAM.",
  }),

  obs({
    sayfa: "search",
    schemaId: "search-results",
    url: `${BASE}search?q=mattress`,
    selector: "#shopify-section-template--15527145930810__main",
    notlar:
      "Search: 21 results for mattress. Filters Size/Category/Fabric + sort. Grid.",
  }),

  obs({
    sayfa: "cart",
    schemaId: "cart-page-main",
    url: `${BASE}cart`,
    selector: "#shopify-section-template--15527144718394__cart-items",
    notlar:
      "Your cart is empty · CONTINUE SHOPPING · Have an account? Log in. cart-footer sibling h=0 leftover.",
  }),

  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text-overlay",
    url: `${BASE}pages/about-us`,
    selector: "#shopify-section-template--15527145177146__parallax_PVEayx",
    notlar: "Parallax banner ABOUT US.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    url: `${BASE}pages/about-us`,
    selector:
      "#shopify-section-template--15527145177146__f669d7ea-1643-46b7-94d0-4e4adc864320",
    notlar: "ABOUT ME! + lorem. Image + text.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    url: `${BASE}pages/about-us`,
    selector: "#shopify-section-template--15527145177146__multicolumn_JJN6DY",
    notlar:
      "MADE WITH LOVE · INNOVATION & SAFE (+ kolon). Giyim kopyası demo sapması.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    suffix: "2",
    url: `${BASE}pages/about-us`,
    selector: "#shopify-section-template--15527145177146__image_with_icons_MDF73t",
    notlar:
      "MATTRESS WORK AND QUALITY + SOFT FABRIC madde. image_with_icons.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    suffix: "2",
    url: `${BASE}pages/about-us`,
    selector:
      "#shopify-section-template--15527145177146__ae0f69b9-8d77-4132-bc45-5023d341eb82",
    notlar: "FINDING UNIQUE MATTRESS + lorem.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    suffix: "3",
    url: `${BASE}pages/about-us`,
    selector:
      "#shopify-section-template--15527145177146__dbc23b1d-b633-4783-868d-b25b10ce7ede",
    notlar: "OUR TEAM: EVELYN Fashion Designer · MAVERICK Director · SOPHIA Marketing Manager.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "social-proof-brand-logos",
    url: `${BASE}pages/about-us`,
    selector: "#shopify-section-template--15527145177146__brand_logo_k3ngrY",
    notlar: "brand_logo_k3ngrY ~180px. Walk innerText boş — logo şeridi.",
  }),

  obs({
    sayfa: "contact",
    schemaId: "editorial-rich-text",
    url: `${BASE}pages/contact`,
    selector: "#shopify-section-template--15527145504826__rich_text_NHb3xF",
    notlar: "CONTACT US başlık rich text.",
  }),
  obs({
    sayfa: "contact",
    schemaId: "lead-capture-form",
    url: `${BASE}pages/contact`,
    selector: "#shopify-section-template--15527145504826__contact_form_TQQ3Yn",
    notlar:
      "CONTACT FORM — Have any questions… 1-2 business days. Alanlar var. Submit PII, dur. iframe map leftover.",
  }),

  obs({
    sayfa: "faq-support",
    schemaId: "editorial-image-with-text-overlay",
    url: `${BASE}pages/faq`,
    selector: "#shopify-section-template--15527145537594__parallax_MU48pr",
    notlar: "Parallax FAQ'S. /pages/faqs 404.",
  }),
  obs({
    sayfa: "faq-support",
    schemaId: "faq-collapsible-tabs",
    url: `${BASE}pages/faq`,
    selector:
      "#shopify-section-template--15527145537594__cb435de1-8958-455d-8843-8a9ef3413466",
    notlar:
      "FREQUENTLY ASKED QUESTIONS. 4 details: Can I choose whichever styles I want? (open) · don't fit · swap · I signed up. Giyim kopyası sapması.",
  }),

  obs({
    sayfa: "blog-list",
    schemaId: "blog-list-main",
    url: `${BASE}blogs/news`,
    selector: "#shopify-section-template--15527144685626__main",
    notlar:
      "News list. May 5, 2025 kartlar + READ MORE. The Simple Joy of Reading in Bed…",
  }),
  obs({
    sayfa: "blog-post",
    schemaId: "blog-post-main",
    url: BLOG_POST,
    selector: "#shopify-section-template--15527144652858__main",
    notlar:
      "The Simple Joy of Reading in Bed: Creating Your Cozy Nook · MAY 5, 2025 · Share + gövde.",
  }),

  obs({
    sayfa: "not-found",
    schemaId: "page-content-main",
    url: `${BASE}pages/404`,
    selector: "#shopify-section-template--15527144620090__main",
    notlar:
      "404 Page not found · BACK TO HOMEPAGE · CONTINUE SHOPPING. Ayrıca /pages/about ve /pages/contact-us aynı şablon.",
  }),
];

let n = 0;
for (const { relDir, fileName, base } of items) {
  const dir = path.join(root, relDir);
  fs.mkdirSync(dir, { recursive: true });
  const dest = path.join(dir, fileName);
  fs.writeFileSync(dest, JSON.stringify(base, null, 2) + "\n");
  n += 1;
  console.log(dest.replace(root + "/", ""));
}
console.log(`Wrote ${n} observations`);
