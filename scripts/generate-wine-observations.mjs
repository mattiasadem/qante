/**
 * Speedo Wine first-inventory observations — official host only.
 * Run: node scripts/generate-wine-observations.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const KAYNAK = "wine";
const PRESET = "default";
const BASE = "https://wineshop-online-store.myshopify.com/";
const PDP =
  "https://wineshop-online-store.myshopify.com/products/ridge-vineyard-bohemian-bliss-natural-red-wine";
const PLP = "https://wineshop-online-store.myshopify.com/collections/red-wine";
const COLLECTIONS = "https://wineshop-online-store.myshopify.com/collections";
const SEARCH = "https://wineshop-online-store.myshopify.com/search?q=wine";
const CART = "https://wineshop-online-store.myshopify.com/cart";
const CONTACT = "https://wineshop-online-store.myshopify.com/pages/contact";
const FAQ = "https://wineshop-online-store.myshopify.com/pages/faq";
const STORY = "https://wineshop-online-store.myshopify.com/pages/our-story";
const ABOUT = "https://wineshop-online-store.myshopify.com/pages/about-layout-1";
const BLOG = "https://wineshop-online-store.myshopify.com/blogs/news";
const POST =
  "https://wineshop-online-store.myshopify.com/blogs/news/the-most-expert-tips-on-choosing-dry-white-wines";

const DELTA =
  "Shopify.theme.name Wine-v-1-5-0-new · schema_name Wine · schema_version 1.5.0 · theme_store_id null · role main · id 142703067292 · shop wineshop-online-store.myshopify.com · Speedo Themes third-party OS 2.0 (Theme Store resmi değil). Vendor-published demo password 1 (public storefront unlock). Official host wineshop-online-store.myshopify.com only.";

function obs({
  sayfa,
  schemaId,
  selector,
  url = BASE,
  notlar = "",
  suffix = "",
  extra = {},
}) {
  const fileSuffix = suffix ? `-${suffix}` : "";
  const idSuffix = suffix ? `.${suffix}` : "";
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
    evidenceSlug: schemaId + fileSuffix,
    evidence: [],
    notlar,
    delta: DELTA,
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
    selector:
      "#shopify-section-sections--18166098100380__announcement_bar_fHNTbB",
    notlar:
      "Facebook / Instagram / X / Pinterest + Join our Email List and receive 20% off your first order. / Free shipping on orders over £75. Sağ Country/region USD + Language English.",
  }),
  obs({
    sayfa: "home",
    schemaId: "navigation-header-mega",
    selector: "#shopify-section-sections--18166098100380__header",
    notlar:
      "Logo Wine. Nav: Shop / Bestseller / Themes / Shop By / Collections. details#Details-HeaderMenu-1…5 + MegaMenu-Content-*. Sağ wishlist 0 + compare 0 + Log in + Cart. 375 hamburger summary.header__icon--menu. Account tıklanmadı.",
    extra: { captureMode: "viewport" },
  }),
  obs({
    sayfa: "home",
    schemaId: "hero-slideshow",
    selector:
      "#shopify-section-template--18166097215644__3b7cb796-4e44-4edc-96f9-002a08ba8170",
    notlar:
      "slideshow-component. WELCOME TO OUR WINE YARD FACTORY · SHOP NOW. İki slayt metni aynı (tekrar).",
  }),
  obs({
    sayfa: "home",
    schemaId: "collection-nav-image-cards",
    selector:
      "#shopify-section-template--18166097215644__custom_collection_list_H796W3",
    notlar:
      "custom_collection_list iki büyük kart: Bright. Light. Fruity. / Super Detox Wine · Cleansing. Refreshing. Flavourful. / Energy Boosting Red Wine.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    selector:
      "#shopify-section-template--18166097215644__0617c2f2-69ec-4df8-a506-b2616d4e1db4",
    notlar:
      "Başlık yok. Ürün şeridi: Rustic 2020 White Wine $325/$225 · Winter Spice 2021 Rosé · Amarone 2012. preorder/30% rozet + Add to cart.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-image-with-text-overlay",
    selector:
      "#shopify-section-template--18166097215644__image_banner_9XKg9z",
    notlar:
      "7 DAYS. 7 REDWINES. + smoothie haftalık teklif metni + SHOP NOW. Tam genişlik banner, metin sağda.",
  }),
  obs({
    sayfa: "home",
    schemaId: "promo-grid-banner",
    selector:
      "#shopify-section-template--18166097215644__sub_banner_C7F97i",
    notlar:
      "İki kolon: Up to 15% off Detox Wine / SHOP NOW · Up to 30% off Energy Boosting Wine / SHOP NOW.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    suffix: "2",
    selector:
      "#shopify-section-template--18166097215644__featured_collection_CJ3UXm",
    notlar:
      "Best Selling Wines. Ridge Vineyard Bohemian Bliss $620/$520 · Whispering Willow · Cava Natural Rosé. Add to cart.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-image-with-text-overlay",
    suffix: "2",
    selector:
      "#shopify-section-template--18166097215644__image_banner_JmW9NK",
    notlar:
      "VIP, SAVOR, AND ENJOY THE RICH WINE OF LIFE WITH A GLASS OF WINE. + The perfect accompaniment… CTA yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "collection-nav-image-cards",
    suffix: "2",
    selector:
      "#shopify-section-template--18166097215644__collection_list_C4fRjh",
    notlar:
      "Shop By Category — RED WINE / WHITE WINE / ROSE WINE / BEST CHOICE / NEW WINE / SALE. Kart başlığı görsel üstünde.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    suffix: "3",
    selector:
      "#shopify-section-template--18166097215644__image_slider_width_product_AVVVDe",
    notlar:
      "Red Wine Selection / Only our best wins. Sol görsel slayt + sağ ürün kartları (Rustic / Royal Reserve / Winter Spice). image_slider_width_product.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-image-with-text",
    selector:
      "#shopify-section-template--18166097215644__rich_text_with_image_nCAPDj",
    notlar:
      "Üç başlık Energy Boosting Wines / Super Detox Wines / Super Green Wines + sağda homepage-rich-text-with-image-01.png. Link yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "blog-list-main",
    selector:
      "#shopify-section-template--18166097215644__588ae6a9-e23f-4b45-83e9-2723eeb61871",
    notlar:
      "Latest Blog — 3 kart: The Most Expert Tips On Choosing Dry White Wines · How to choose a good wine for a friend's · Natural and Organic Wines Take Center Stage.",
  }),
  obs({
    sayfa: "home",
    schemaId: "promo-scrolling-marquee",
    selector:
      "#shopify-section-template--18166097215644__custom_announcement_bar_m3A7zE",
    notlar:
      "Kayan şerit: Free next day delivery · 100% Organic Wine · 4.9 Stars Ratting · SALE 20% off all. Use code SPEEDO · Join our Email List…",
  }),
  obs({
    sayfa: "home",
    schemaId: "footer-columns-newsletter",
    selector: "#shopify-section-sections--18166098067612__footer",
    notlar:
      "Quick Links (Home/About Us/Contact Us/Faq/Blog) · Shop (Red/White/Rose/Best choice/New wine) · Information (Terms/Refund/Privacy/Shipping/Compare) · Newsletter + SUBSCRIBE + Payment methods. Submit yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "global-cart-drawer",
    selector: "#CartDrawer",
    notlar:
      "#CartDrawer + cart-drawer. Opener a#cart-icon-bubble href=/cart. Kapalı kare yanıltır — interact.",
    extra: {
      captureMode: "viewport",
      prepareClick: "a#cart-icon-bubble",
    },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-menu-drawer",
    selector: "#menu-drawer",
    notlar:
      "Hamburger #Details-menu-drawer-container → #menu-drawer. 1440 gizli (0×0).",
    extra: {
      captureMode: "viewport",
      prepareClick: "#Details-menu-drawer-container > summary",
    },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-predictive-search",
    selector: "details-modal.header__search",
    notlar:
      "summary.header__icon--search → #Search-In-Modal. Kapalı predictive-search 0px. katalogSorgu wine.",
    extra: {
      captureMode: "viewport",
      prepareClick: "summary.header__icon--search",
    },
  }),

  obs({
    sayfa: "collection",
    schemaId: "collection-banner",
    url: PLP,
    selector: "#shopify-section-template--18166096953500__banner",
    notlar: "Collection: Red wine.",
  }),
  obs({
    sayfa: "collection",
    schemaId: "collection-nav-slider",
    url: PLP,
    selector:
      "#shopify-section-template--18166096953500__collection_slider_mM7Ybk",
    notlar:
      "Yatay koleksiyon şeridi: New wine / Best Seller / Super Green Wines / Super Detox Wine / Rose wine / White wine / Energy Boosting Red Wine / Best choice.",
  }),
  obs({
    sayfa: "collection",
    schemaId: "product-showcase-grid-plp",
    url: PLP,
    selector: "#shopify-section-template--18166096953500__product-grid",
    notlar:
      "Home Red wine + Filters Wine sweetness (Dry) / Category / Availability + ürün ızgarası.",
  }),

  obs({
    sayfa: "collections",
    schemaId: "collection-nav-grid",
    url: COLLECTIONS,
    selector: "#shopify-section-template--18166097248412__main",
    notlar:
      "COLLECTIONS ızgara: Best choice / Best Seller / Collection layout 1–3 + diğer koleksiyon kartları.",
  }),

  obs({
    sayfa: "search",
    schemaId: "search-results",
    url: SEARCH,
    selector: "#shopify-section-template--18166098034844__main",
    notlar:
      'Search results · 25 results for "wine". Filters Wine sweetness / Category / Availability + ızgara.',
  }),

  obs({
    sayfa: "cart",
    schemaId: "cart-page-main",
    url: CART,
    selector: "#shopify-section-template--18166096822428__cart-items",
    notlar:
      "Your cart is empty + Continue Shopping + Have an account? Log in. cart-footer boşken h=0.",
  }),

  obs({
    sayfa: "contact",
    schemaId: "editorial-rich-text",
    url: CONTACT,
    selector: "#shopify-section-template--18166097608860__rich_text_NHb3xF",
    notlar: "Contact Us başlığı.",
  }),
  obs({
    sayfa: "contact",
    schemaId: "lead-capture-form",
    url: CONTACT,
    selector:
      "#shopify-section-template--18166097608860__contact_form_TQQ3Yn",
    notlar:
      "Contact form · Name/Email/Phone/Comment. Submit yok (PII).",
  }),

  obs({
    sayfa: "faq-support",
    schemaId: "editorial-image-with-text-overlay",
    url: FAQ,
    selector: "#shopify-section-template--18166097641628__parallax_MU48pr",
    notlar: "Parallax bant: Faq's.",
  }),
  obs({
    sayfa: "faq-support",
    schemaId: "faq-collapsible-tabs",
    url: FAQ,
    selector:
      "#shopify-section-template--18166097641628__cb435de1-8958-455d-8843-8a9ef3413466",
    notlar:
      "Frequently asked question. İlk: Can I choose whichever styles I want? + lorem.",
  }),

  obs({
    sayfa: "about-brand",
    schemaId: "page-content-main",
    url: STORY,
    selector: "#shopify-section-template--18166097412252__main",
    notlar:
      "Our Story — Introduction + fashion-forward placeholder metin ([Brand Name]). Tek ana gövde.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text-overlay",
    url: ABOUT,
    selector: "#shopify-section-template--18166097281180__parallax_PVEayx",
    notlar: "Parallax About Us. about-layout-1.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    url: ABOUT,
    selector:
      "#shopify-section-template--18166097281180__f669d7ea-1643-46b7-94d0-4e4adc864320",
    notlar: "About Me! + lorem. about-layout-1.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    url: ABOUT,
    selector:
      "#shopify-section-template--18166097281180__multicolumn_JJN6DY",
    notlar:
      "Made with Love / Innovation & Safe / Eco Friendly — giysi placeholder kopyası.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    suffix: "2",
    url: ABOUT,
    selector:
      "#shopify-section-template--18166097281180__image_with_icons_MDF73t",
    notlar:
      "The Art of Wine: Sip and Savor + Ingredients / Packaging ikon satırları.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    suffix: "3",
    url: ABOUT,
    selector:
      "#shopify-section-template--18166097281180__ae0f69b9-8d77-4132-bc45-5023d341eb82",
    notlar: "A World of Wine to Discover + lorem.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    suffix: "2",
    url: ABOUT,
    selector:
      "#shopify-section-template--18166097281180__dbc23b1d-b633-4783-868d-b25b10ce7ede",
    notlar:
      "Our Team — Evelyn Fashion Designer / Maverick Director / Sophia Marketing Manager.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "social-proof-brand-logos",
    url: ABOUT,
    selector:
      "#shopify-section-template--18166097281180__brand_logo_k3ngrY",
    notlar: "Marka logo şeridi. Metin yok (görsel-only).",
  }),

  obs({
    sayfa: "blog-list",
    schemaId: "blog-list-main",
    url: BLOG,
    selector: "#shopify-section-template--18166096789660__main",
    notlar: "News — üç yazı kartı, 15 Sep 2025 / 20 May 2025.",
  }),
  obs({
    sayfa: "blog-post",
    schemaId: "blog-post-main",
    url: POST,
    selector: "#shopify-section-template--18166096756892__main",
    notlar:
      "The Most Expert Tips On Choosing Dry White Wines · SEPTEMBER 15, 2025 · Share.",
  }),

  obs({
    sayfa: "product-detail",
    schemaId: "product-info-main",
    url: PDP,
    selector: "#shopify-section-template--18166097936540__main",
    notlar:
      "Ridge Vineyard Bohemian Bliss Natural Red Wine. Galeri 7 medya · $620/$520 · 2 reviews · Low stock 10 · Hurry up countdown · qty + Add To Cart + Buy it now. Varyant yok. EXTRA INFORMATION / SHIPPING & RETURNS / MATERIALS. Buy it now tıklanmadı.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-tabs",
    url: PDP,
    selector:
      "#shopify-section-template--18166097936540__79582f51-5736-4bff-b870-bba69393ad36",
    notlar:
      "Description / Additional Information / Shipping And Delivery. İlk sekme Bohemian bliss metni.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "media-video-hero",
    url: PDP,
    selector: "#shopify-section-template--18166097936540__video_NWBDjf",
    notlar:
      "New Arrival / Our Latest Collection + lorem. video_NWBDjf.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "features-multicolumn",
    url: PDP,
    selector:
      "#shopify-section-template--18166097936540__multicolumn_VH4Wqb",
    notlar:
      "Made with Love / Innovation & Safe / Eco Friendly — giysi placeholder.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "editorial-image-with-text",
    url: PDP,
    selector: "#shopify-section-template--18166097936540__multirow_nmyQVH",
    notlar:
      "LATEST Latest White Wine Finds + TRENDING Trending Red Wine Arrivals. multirow.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "trust-icon-row",
    url: PDP,
    selector:
      "#shopify-section-template--18166097936540__service_icon_yLrPgn",
    notlar:
      "FREE SHIPPING / SUPPORT 24/7 / 100% MONEY BACK / SECURE PAYMENTS.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-grid-banner",
    url: PDP,
    selector:
      "#shopify-section-template--18166097936540__sub_banner_7DQhez",
    notlar:
      "İki kolon: Exclusive Offer! New Season, New Style Up to 50% Off · Shop Our Latest Arrivals Incredible Deals.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "faq-collapsible-tabs",
    url: PDP,
    selector:
      "#shopify-section-template--18166097936540__collapsible_content_Ya3Wzj",
    notlar:
      "Faq — How do I place an order? / shipping / return / exchange / size. Giysi placeholder.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-scrolling-marquee",
    url: PDP,
    selector:
      "#shopify-section-template--18166097936540__custom_announcement_bar_zqchrk",
    notlar:
      "Kayan: Free shipping on orders over £75 · 10% OFF on all clothing · Returns extended to 60 days · SALE 20% SPEEDO.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "product-showcase-related",
    url: PDP,
    selector: "#shopify-section-template--18166097936540__related-products",
    notlar:
      "You may also like — Winter Spice 2021 Rosé Wine $325/$225 + diğerleri.",
  }),
];

let n = 0;
for (const { relDir, fileName, base } of items) {
  const dir = path.join(root, relDir);
  fs.mkdirSync(dir, { recursive: true });
  const dest = path.join(dir, fileName);
  fs.writeFileSync(dest, JSON.stringify(base, null, 2) + "\n");
  n += 1;
  console.log("wrote", path.relative(root, dest));
}
console.log(`\n${n} observations`);
