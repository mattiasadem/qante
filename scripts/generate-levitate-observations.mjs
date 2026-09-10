/**
 * Generate Levitate (Speedo Purse & Bags) observation JSON — run once, then batch capture.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const KAYNAK = "levitate";
const PRESET = "default";
const BASE = "https://backpack-online-store-2.myshopify.com/";
const PDP = `${BASE}products/sports-charms-bogg-bag`;
const PLP = `${BASE}collections/all`;
const COLLECTIONS = `${BASE}collections`;
const SEARCH = `${BASE}search?q=ANDIBRO`;
const CART = `${BASE}cart`;
const ABOUT = `${BASE}pages/about-layout-1`;
const CONTACT = `${BASE}pages/contact`;
const FAQ = `${BASE}pages/faq`;
const BLOG = `${BASE}blogs/news`;
const BLOG_POST = `${BASE}blogs/news/focus-on-your-new-favorite-bowling-bags-1`;
const NOT_FOUND = `${BASE}pages/this-page-does-not-exist-qante`;

const DELTA =
  "Shopify.theme.name Levitate V-1.5.0 · schema_name Purse & Bags · schema_version 1.5.0 · theme_store_id null · role main · id 178196283681 · handle null · shop backpack-online-store-2.myshopify.com · locale en · country US · currency USD · Speedo Themes third-party (Theme Store official değil). Vendor-published demo password 1 (public storefront unlock). Platform adı dataBindings'e yazılmadı.";

function cap(url) {
  return {
    url,
    viewports: ["375", "768", "1440"],
    method: "margin-box+minPad8",
    updatedAt: "",
  };
}

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
  const idSuffix = suffix ? `.${String(suffix).replace(/-/g, "")}` : "";
  const observationId = `${KAYNAK}.${PRESET}.${sayfa}.${schemaId}${idSuffix}`;
  const relDir = `observations/${KAYNAK}/${PRESET}/${sayfa}`;
  const fileName = `${schemaId}${fileSuffix}.json`;
  const base = {
    observationId,
    schemaId,
    kaynak: KAYNAK,
    preset: PRESET,
    sayfa,
    url,
    selector,
    evidenceSlug: `${schemaId}${fileSuffix}`,
    evidence: [],
    storefrontPassword: "1",
    notlar,
    delta,
    capture: cap(url),
    ...extra,
  };
  if (extra.capture) base.capture = { ...cap(url), ...extra.capture };
  return { relDir, fileName, base };
}

const items = [
  // HOME
  obs({
    sayfa: "home",
    schemaId: "promo-announcement-bar",
    selector: "#shopify-section-sections--24569859047713__announcement_bar_fHNTbB",
    notlar:
      "Utility + ticker: Country/region USD, Language English, SUPER SALE UP TO 40% OFF SHOP NOW, FREE SHIPPING ON ORDERS OVER £75 SHOP NOW, gün/saat countdown.",
  }),
  obs({
    sayfa: "home",
    schemaId: "navigation-header-mega",
    selector: "#shopify-section-sections--24569859047713__header",
    notlar:
      "Logo Levitate. 1440 mega: SHOP / BEST SELLERS / THEMES / COLLECTIONS / SHOP BY. Search · wishlist 0 · compare 0 · Log in · Cart. header-drawer data-breakpoint=tablet. Home ölçümde sticky header h=0 olabiliyor — viewport.",
    extra: { captureMode: "viewport" },
  }),
  obs({
    sayfa: "home",
    schemaId: "hero-slideshow",
    selector:
      "#shopify-section-template--24569858162977__3b7cb796-4e44-4edc-96f9-002a08ba8170",
    notlar:
      "Slideshow: NEW COLLECTION LEATHER BAGS WOMEN/MEN · NEW ARRIVALS SADDLE BAGS · BEST SELLER MICRO BAGS.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-tabs",
    selector: "#shopify-section-template--24569858162977__featured_tab_dGXFqP",
    notlar:
      "OUR BEST SELLERS. Sekmeler WOMEN / MEN / CROSSBODY / SHOULDER. Kart: CROSSBODY SHOULDER MESSENGER BAG $120, ANDIBRO CHERRY $150.",
  }),
  obs({
    sayfa: "home",
    schemaId: "collection-nav-image-cards",
    selector:
      "#shopify-section-template--24569858162977__07468762-302d-4441-92a3-3b98a30b4cbe",
    notlar:
      "SHOP BY CATEGORIES. Kart: SATCHEL BAGS / SHOULDER BAGS / BOWLING BAGS + SHOP NOW. Alt metin travel-gear kopyası.",
  }),
  obs({
    sayfa: "home",
    schemaId: "social-proof-brand-logos",
    selector: "#shopify-section-template--24569858162977__brand_logo_R3cUyq",
    notlar: "AS SEEN IN logo şeridi.",
  }),
  obs({
    sayfa: "home",
    schemaId: "promo-banner-countdown",
    selector: "#shopify-section-template--24569858162977__deal_image_banner_ca9Mjy",
    notlar:
      "DEAL OF THE WEEK / ONE-TIME ONLY / Explore our considered collection… / gün-saat-dk-sn timer / GET ONLY $59.00.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    selector:
      "#shopify-section-template--24569858162977__0617c2f2-69ec-4df8-a506-b2616d4e1db4",
    notlar:
      "FEATURE PRODUCT / IDEAL FOR A WEEKEND OUTING. Kart: WOMAN'S STRAP MESSENGER $110, SPORTS CHARMS BOGG $85, ANDIBRO.",
  }),
  obs({
    sayfa: "home",
    schemaId: "promo-scrolling-marquee",
    selector:
      "#shopify-section-template--24569858162977__text_with_image_slider_Uhz7GF",
    notlar: "text_with_image_slider. Tekrarlayan NEW: BOWLING BAGS kayan şerit.",
  }),
  obs({
    sayfa: "home",
    schemaId: "promo-scrolling-marquee",
    suffix: "2",
    selector:
      "#shopify-section-template--24569858162977__text_with_image_slider_gPJgj6",
    notlar: "İkinci marquee: SHOP NEW ARRIVALS tekrarı.",
  }),
  obs({
    sayfa: "home",
    schemaId: "testimonial-quote-carousel",
    selector: "#shopify-section-template--24569858162977__customer_reviews_TiFHPp",
    notlar: "TESTIMONIAL. Lorem ipsum alıntı + carousel.",
  }),
  obs({
    sayfa: "home",
    schemaId: "media-video-hero",
    selector: "#shopify-section-template--24569858162977__video_MakxPW",
    notlar: "MADE IN ITALY / FINEST HANDMADE video bandı.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-featured",
    selector: "#shopify-section-template--24569858162977__featured_product_9tmLw3",
    notlar:
      "OUR SELECTION / PRODUCT OF THE WEEK. NEW MORDERN BOWLING BAGS $200. Color Country Squire / Red / Sepia / Rifle Green. Qty + ATC. Handle /products/mordern-bowling-bags.",
  }),
  obs({
    sayfa: "home",
    schemaId: "blog-list-main",
    selector:
      "#shopify-section-template--24569858162977__588ae6a9-e23f-4b45-83e9-2723eeb61871",
    notlar:
      "NEWS FROM THE BLOG. Kart: FOCUS ON YOUR NEW FAVORITE: BOWLING BAGS / A SHOOTING DAY IN ETRETAT + READ MORE.",
  }),
  obs({
    sayfa: "home",
    schemaId: "lead-capture-newsletter-band",
    selector: "#shopify-section-template--24569858162977__newsletter_eQFiAH",
    notlar:
      "KEEP ME UPDATED / NEWSLETTER + Email SUBSCRIBE. Submit yok (PII).",
  }),
  obs({
    sayfa: "home",
    schemaId: "media-shop-the-feed",
    selector: "#shopify-section-template--24569858162977__custom_instagram_N8fnnR",
    notlar: "JOIN US @LEVITATE #follow on social media görsel grid.",
  }),
  obs({
    sayfa: "home",
    schemaId: "trust-icon-row",
    selector: "#shopify-section-template--24569858162977__service_icon_cRV7DD",
    notlar:
      "EXPRESS DELIVERY / FREE RETURNS / AVAILABLE CUSTOMER SERVICE ikon sırası.",
  }),
  obs({
    sayfa: "home",
    schemaId: "footer-columns-newsletter",
    selector: "#shopify-section-sections--24569859014945__footer",
    notlar:
      "Newsletter Email SUBSCRIBE (submit yok). QUICK LINKS Home / About Us (/pages/about-layout-1) / Faq / Blog. Koleksiyonlar, politikalar, tel, locale. © Levitate.",
  }),
  obs({
    sayfa: "home",
    schemaId: "global-cart-drawer",
    selector: "#CartDrawer",
    notlar: "cart-drawer.drawer.is-empty. #cart-icon-bubble → /cart + drawer.",
    extra: { captureMode: "viewport", prepareClick: "#cart-icon-bubble" },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-menu-drawer",
    selector: "#menu-drawer",
    notlar: "#Details-menu-drawer-container. Hamburger 375/768; 1440 data-breakpoint=tablet gizli.",
    extra: { captureMode: "viewport" },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-predictive-search",
    selector: "details:has(#Search-In-Modal)",
    notlar:
      "summary.header__icon--search → #Search-In-Modal. Predictive ANDIBRO → WOMAN LEATHER ANDIBRO CHERRY BAG. Storefront /search ürün indeksi boş (leftover).",
    extra: { captureMode: "viewport", prepareClick: "summary.header__icon--search" },
  }),

  // PDP
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-main",
    url: PDP,
    selector: "#shopify-section-template--24569858916641__main",
    notlar:
      "SPORTS CHARMS BOGG BAG $85. Color swatch Grey Mare / Pastel Grey / Gainsboro / Columbia Blue / Sonic Silver. Qty + ADD TO CART. Breadcrumb Home.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-tabs",
    url: PDP,
    selector: "#shopify-section-template--24569858916641__79582f51-5736-4bff-b870-bba69393ad36",
    notlar: "Description / Additional Information / Shipping And Delivery sekmeleri.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "media-video-hero",
    url: PDP,
    selector: "#shopify-section-template--24569858916641__video_NWBDjf",
    notlar: "NEW ARRIVAL / OUR LATEST COLLECTION + Lorem video/banner.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "features-multicolumn",
    url: PDP,
    selector: "#shopify-section-template--24569858916641__multicolumn_3FBT8U",
    notlar: "Made with Love / Innovation & Safe / üçüncü kolon (kıyafet kopyası, leftover metin).",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "editorial-image-with-text",
    url: PDP,
    selector: "#shopify-section-template--24569858916641__multirow_nmyQVH",
    notlar: "multirow LATEST / LATEST FASHION STYLE + gövde metin.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "trust-icon-row",
    url: PDP,
    selector: "#shopify-section-template--24569858916641__service_icon_yLrPgn",
    notlar: "FREE SHIPPING / SUPPORT 24/7 / 100% MONEY BACK.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-grid-banner",
    url: PDP,
    selector: "#shopify-section-template--24569858916641__sub_banner_MzMrCE",
    notlar: "40% DISCOUNT WOODEN BLOCK ANIMALS / 30% DISCOUNT TERRA SPECKLE COTTA — çapraz tema kopyası leftover.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "faq-collapsible-tabs",
    url: PDP,
    selector: "#shopify-section-template--24569858916641__collapsible_content_r7HmRj",
    notlar:
      "FAQ: HOW DO I PLACE AN ORDER? / SHIPPING TAKE? / RETURN POLICY? / RETURN OR EXCHANGE? / FIND THE RIGHT…",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-scrolling-marquee",
    url: PDP,
    selector: "#shopify-section-template--24569858916641__custom_announcement_bar_9mDTwW",
    notlar:
      "custom_announcement_bar: FREE SHIPPING / 10% OFF / RETURNS 60 DAYS / SALE 20% USE CODE SPEEDO / EMAIL LIST.",
  }),

  // PLP
  obs({
    sayfa: "collection",
    schemaId: "collection-banner",
    url: PLP,
    selector: "#shopify-section-template--24569857900833__banner",
    notlar: "Collection: Products başlık bandı.",
  }),
  obs({
    sayfa: "collection",
    schemaId: "collection-nav-slider",
    url: PLP,
    selector: "#shopify-section-template--24569857900833__collection_slider_TN9TAQ",
    notlar:
      "Yatay koleksiyon: BOWLING BAGS / BACKPACK BAG / SHOULDER BAGS / HOBO / MICRO / CLUTCHES / MESSENGER / CANTEEN.",
  }),
  obs({
    sayfa: "collection",
    schemaId: "product-showcase-grid-plp",
    url: PLP,
    selector: "#shopify-section-template--24569857900833__product-grid",
    notlar:
      "18 ürün. Filter Color (Beige…Yellow) + Category. Sort Featured/Best selling/price. Kart Quick View. Breadcrumb Home / Products.",
  }),

  // COLLECTIONS
  obs({
    sayfa: "collections",
    schemaId: "collection-nav-grid",
    url: COLLECTIONS,
    selector: "#shopify-section-template--24569858195745__main",
    notlar:
      "COLLECTIONS grid: BACKPACK BAG, BEST SELLER, BOWLING BAGS, CANTEEN, CLUTCHES, LAYOUT 1–3, HOBO…",
  }),

  // SEARCH (storefront index boş — predictive ANDIBRO çalışıyor)
  obs({
    sayfa: "search",
    schemaId: "search-results",
    url: SEARCH,
    selector: "#shopify-section-template--24569858982177__main",
    notlar:
      "Search ANDIBRO: No results found. Check the spelling… Storefront ürün araması boş; predictive aynı sorguda 1 ürün.",
  }),

  // CART
  obs({
    sayfa: "cart",
    schemaId: "cart-page-main",
    url: CART,
    selector: "#shopify-section-template--24569857769761__cart-items",
    notlar:
      "Your cart is empty + CONTINUE SHOPPING + Have an account? Log in. cart-footer h=0 leftover.",
  }),

  // ABOUT (footer About Us)
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text-overlay",
    url: ABOUT,
    selector: "#shopify-section-template--24569858228513__parallax_PVEayx",
    notlar: "Parallax ABOUT US. Footer About Us → /pages/about-layout-1. /pages/about home'a düşer; /about-us 404.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    url: ABOUT,
    selector: "#shopify-section-template--24569858228513__f669d7ea-1643-46b7-94d0-4e4adc864320",
    notlar: "ABOUT ME! + Lorem gövde.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    url: ABOUT,
    selector: "#shopify-section-template--24569858228513__multicolumn_JJN6DY",
    notlar: "MADE WITH LOVE / INNOVATION & SAFE kolonları.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    suffix: "2",
    url: ABOUT,
    selector: "#shopify-section-template--24569858228513__image_with_icons_MDF73t",
    notlar: "image_with_icons. PURSE & BAGS / WORK AND QUALITY / SOFT FABRIC + metin.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    suffix: "2",
    url: ABOUT,
    selector: "#shopify-section-template--24569858228513__ae0f69b9-8d77-4132-bc45-5023d341eb82",
    notlar: "FINDING UNIQUE BAGS + Lorem.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    suffix: "3",
    url: ABOUT,
    selector: "#shopify-section-template--24569858228513__dbc23b1d-b633-4783-868d-b25b10ce7ede",
    notlar: "OUR TEAM: EVELYN Fashion Designer / MAVERICK Director / SOPHIA Marketing Manager.",
  }),

  // CONTACT
  obs({
    sayfa: "contact",
    schemaId: "editorial-rich-text",
    url: CONTACT,
    selector: "#shopify-section-template--24569858556193__rich_text_NHb3xF",
    notlar: "Contact Us sayfa başlığı.",
  }),
  obs({
    sayfa: "contact",
    schemaId: "lead-capture-form",
    url: CONTACT,
    selector: "#shopify-section-template--24569858556193__contact_form_TQQ3Yn",
    notlar:
      "Contact form — Have any questions… Name/Email/Phone/Comment. Send tıklanmadı (PII).",
  }),

  // FAQ
  obs({
    sayfa: "faq-support",
    schemaId: "editorial-image-with-text-overlay",
    url: FAQ,
    selector: "#shopify-section-template--24569858588961__parallax_MU48pr",
    notlar: "Parallax FAQ'S. /pages/faqs 404.",
  }),
  obs({
    sayfa: "faq-support",
    schemaId: "faq-collapsible-tabs",
    url: FAQ,
    selector:
      "#shopify-section-template--24569858588961__cb435de1-8958-455d-8843-8a9ef3413466",
    notlar: "FREQUENTLY ASKED QUESTION — CAN I CHOOSE WHICHEVER STYLES I WANT? + Lorem accordion.",
  }),

  // BLOG
  obs({
    sayfa: "blog-list",
    schemaId: "blog-list-main",
    url: BLOG,
    selector: "#shopify-section-template--24569857736993__main",
    notlar: "NEWS listesi — PRODUCT / STORY etiketli kartlar, Feb 17 2025.",
  }),
  obs({
    sayfa: "blog-post",
    schemaId: "blog-post-main",
    url: BLOG_POST,
    selector: "#shopify-section-template--24569857704225__main",
    notlar: "FOCUS ON YOUR NEW FAVORITE: BOWLING BAGS — Feb 17 2025 + Share.",
  }),

  // 404
  obs({
    sayfa: "not-found",
    schemaId: "page-content-main",
    url: NOT_FOUND,
    selector: "#shopify-section-template--24569857671457__main",
    notlar: "404 Page not found / We’re sorry… / BACK TO HOMEPAGE / CONTINUE SHOPPING.",
  }),
];

const written = [];
for (const { relDir, fileName, base } of items) {
  const dir = path.join(root, relDir);
  fs.mkdirSync(dir, { recursive: true });
  const abs = path.join(dir, fileName);
  fs.writeFileSync(abs, JSON.stringify(base, null, 2) + "\n");
  written.push(path.relative(root, abs));
}

console.log(JSON.stringify({ count: written.length, files: written }, null, 2));
