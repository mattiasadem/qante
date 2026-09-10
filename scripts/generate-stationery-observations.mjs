#!/usr/bin/env node
/**
 * One-shot generator — Stationery (Speedo) first inventory.
 * Run from repo root: node scripts/generate-stationery-observations.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const obsRoot = path.join(root, "observations/stationery/default");

const HOST = "https://book-online-store-2.myshopify.com";
const BASE = `${HOST}/`;
const PDP = `${HOST}/products/green-plain-book-cover`;
const PLP = `${HOST}/collections/all`;
const COLLECTIONS = `${HOST}/collections`;
const SEARCH = `${HOST}/search?q=pen`;
const CART = `${HOST}/cart`;
const ABOUT = `${HOST}/pages/about-layout-1`;
const CONTACT = `${HOST}/pages/contact`;
const FAQ = `${HOST}/pages/faq`;
const BLOG = `${HOST}/blogs/news`;
const BLOG_POST = `${HOST}/blogs/news/creative-ideas-for-office-stationery-organization`;
const NOT_FOUND = `${HOST}/pages/this-page-does-not-exist-xyz`;

const DELTA =
  "Shopify.theme.name Stationary & Office Supplies  V-1.5.0 · schema_name Stationary Supplies · schema_version 1.5.0 · theme_store_id null · role main · id 131641770078 · shop book-online-store-2.myshopify.com · Speedo Themes third-party (Theme Store official değil). Vendor-published demo password 1 (public storefront unlock). Platform adı dataBindings'e yazılmadı.";

function obs({
  sayfa,
  schemaId,
  url,
  selector,
  notlar,
  deltaExtra = "",
  evidenceSlug,
  observationSuffix = "",
  extra = {},
}) {
  const slug = evidenceSlug || (observationSuffix ? `${schemaId}-${observationSuffix}` : schemaId);
  const fileName = observationSuffix
    ? `${schemaId}-${observationSuffix}.json`
    : `${schemaId}.json`;
  const obsId = observationSuffix
    ? `stationery.default.${sayfa}.${schemaId}.${observationSuffix.replace(/-/g, "")}`
    : `stationery.default.${sayfa}.${schemaId}`;
  const o = {
    observationId: obsId,
    schemaId,
    kaynak: "stationery",
    preset: "default",
    sayfa,
    url,
    selector,
    evidenceSlug: slug,
    evidence: [],
    storefrontPassword: "1",
    notlar,
    delta: deltaExtra ? `${deltaExtra} ${DELTA}` : DELTA,
    capture: {
      url,
      viewports: ["375", "768", "1440"],
      mode: extra.captureMode || "section",
      method: "margin-box+minPad8",
      updatedAt: "",
    },
    ...extra,
  };
  return { fileName, dir: path.join(obsRoot, sayfa), data: o };
}

const items = [
  // HOME
  obs({
    sayfa: "home",
    schemaId: "navigation-header-mega",
    url: BASE,
    selector: "#shopify-section-sections--16396374278238__header",
    notlar:
      "Header: logo + SHOP / THEMES / SHOP BY / COLLECTIONS mega (details#Details-HeaderMenu-1..4.mega-menu, 6 görsel). Utility: search, wishlist 0, compare 0, Log in, Cart 0. Hamburger #Details-menu-drawer-container.",
    deltaExtra:
      "Mega 4 üst öğede; announcement-bar home'da yok. Wishlist/compare ikonları header utility.",
    extra: { captureMode: "viewport" },
  }),
  obs({
    sayfa: "home",
    schemaId: "hero-slideshow",
    url: BASE,
    selector:
      "#shopify-section-template--16396373393502__3b7cb796-4e44-4edc-96f9-002a08ba8170",
    notlar:
      "slideshow-section. Stationery That Inspires Productivity + lifestyle blurb + Shop Now. 3 slayt (main_banner_1–3 + mobile_main_banner).",
    deltaExtra: "3 slayt aynı metin tekrarı; mobil ayrı görsel.",
  }),
  obs({
    sayfa: "home",
    schemaId: "collection-nav-slider",
    url: BASE,
    selector:
      "#shopify-section-template--16396373393502__categories_slider_CNxecV",
    notlar:
      "Shop by Categories. Yatay kart şeridi: Tape / Bags / Colors / Tapes / Bestsellers / Collection / Book-Pin / Pencil / Pencil Pocket / Notebook.",
    deltaExtra: "categories_slider — daire/kare kart; başlık + görsel + koleksiyon linki.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    url: BASE,
    selector:
      "#shopify-section-template--16396373393502__0617c2f2-69ec-4df8-a506-b2616d4e1db4",
    notlar:
      "featured-product-section class ama ızgara: Best Seller. Green Plain Book Cover $60 NEW, Colored pencil Crayon $50→$45 SALE, Hello Kitty Pencil case −50%.",
    deltaExtra:
      "Tema class featured-product-section; tek ürün buy-box değil, koleksiyon ızgarası. Şema product-showcase-featured uydurulmadı.",
  }),
  obs({
    sayfa: "home",
    schemaId: "promo-banner-countdown",
    url: BASE,
    selector:
      "#shopify-section-template--16396373393502__deal_image_banner_ca9Mjy",
    notlar:
      "LIMITED QUANTITILES / Deal Of The Day / Give thank to the most high + DAYS/HOURS/MINS/SECS + View All Deals. timer_img + mobile banner.",
    deltaExtra: "deal_image_banner — görsel + countdown + CTA. Yazım QUANTITILES demoda.",
  }),
  obs({
    sayfa: "home",
    schemaId: "promo-grid-banner",
    url: BASE,
    selector: "#shopify-section-template--16396373393502__sub_banner_Eya9Ga",
    notlar:
      "İki kutu: EAT YOUR WORDS / Our success is your success / Shop Now; ALL PAGE TYPES / Notebooks 25% Off / Shop Now.",
    deltaExtra: "sub_banner 2 kolon promo.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-image-with-text",
    url: BASE,
    selector:
      "#shopify-section-template--16396373393502__image_with_text_F4DBdN",
    notlar:
      "THE STATIONERO / The Stationery Company + ofis malzemesi paragrafı + Find Out More. Tek görsel the_stationero.png.",
  }),
  obs({
    sayfa: "home",
    schemaId: "media-lookbook-slider",
    url: BASE,
    selector:
      "#shopify-section-template--16396373393502__lookbook_card_slider_w7ydkj",
    notlar:
      "Featured Products / View All. Büyük featured_products.png + ürün kartları (Green Plain Book Cover, Colored pencil Crayon).",
    deltaExtra:
      "lookbook_card_slider — kart rayı + büyük görsel. Hotspot pin karede doğrulanmadı; yeni şema açılmadı.",
  }),
  obs({
    sayfa: "home",
    schemaId: "testimonial-quote-carousel",
    url: BASE,
    selector: "#shopify-section-template--16396373393502__testimonial_d6pHJf",
    notlar:
      "Customer Reviews. Amina / Brayton / Darius / Aleena — Verified Buyer + lorem + review görselleri + Rating.svg.",
    deltaExtra: "Avatar + yıldız + verified; ürün thumb yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "blog-list-main",
    url: BASE,
    selector:
      "#shopify-section-template--16396373393502__588ae6a9-e23f-4b45-83e9-2723eeb61871",
    notlar:
      "Latest Blog. İki büyük kart (Creative Ideas… / A Guide to Must-Have Garment Tools) + Most Popular yan liste.",
    deltaExtra: "Home featured blog; Most Popular yan kolon delta.",
  }),
  obs({
    sayfa: "home",
    schemaId: "social-proof-brand-logos",
    url: BASE,
    selector: "#shopify-section-template--16396373393502__brand_logo_dwWykL",
    notlar: "As seen in: 5 logo (logo_1–5).",
  }),
  obs({
    sayfa: "home",
    schemaId: "footer-columns-newsletter",
    url: BASE,
    selector: "#shopify-section-sections--16396374245470__footer",
    notlar:
      "Newslatter Subscribe + Email. Kolonlar Shop / Support / About. Payment methods + Copyright 2025 Speedo Stationery. Sosyal Facebook/Instagram/YouTube.",
    deltaExtra: "Yazım Newslatter. Newsletter submit yoklandı değil (PII).",
  }),
  obs({
    sayfa: "home",
    schemaId: "global-cart-drawer",
    url: BASE,
    selector: "cart-drawer",
    notlar: "Dawn-benzeri cart-drawer.drawer.is-empty. #CartDrawer sağ panel + shipping.",
    deltaExtra: "Boş kare initial; dolu hâl interact.",
    extra: {
      captureMode: "viewport",
      prepareClick: "#cart-icon-bubble, a.header__icon--cart",
      prepareForceOpen: true,
    },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-predictive-search",
    url: BASE,
    selector: "details-modal.header__search",
    notlar:
      "Predictive-search form. Input #Search-In-Modal placeholder Search. Kapalı kare 0 yükseklik.",
    deltaExtra: "Açık sonuç interact; katalogSorgu pencil/pen.",
    extra: {
      captureMode: "viewport",
      prepareClick: "details-modal.header__search summary.header__icon--search, summary.header__icon--search",
      prepareForceOpen: true,
    },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-menu-drawer",
    url: BASE,
    selector: "#menu-drawer",
    notlar:
      "#Details-menu-drawer-container + #menu-drawer. Mobil hamburger; 1440'ta da opener var.",
    extra: {
      captureMode: "viewport",
      prepareClick: "#Details-menu-drawer-container > summary.header__icon--menu, summary.header__icon--menu",
      prepareForceOpen: true,
    },
  }),

  // PLP
  obs({
    sayfa: "collection",
    schemaId: "collection-banner",
    url: PLP,
    selector: "#shopify-section-template--16396373131358__banner",
    notlar: "Collection: Products + collection-banner.jpg. 200px şerit.",
  }),
  obs({
    sayfa: "collection",
    schemaId: "collection-nav-slider",
    url: PLP,
    selector:
      "#shopify-section-template--16396373131358__collection_slider_mM7Ybk",
    notlar:
      "PLP kategori şeridi: Book-Pin / Pencil / Pencil Pocket / Notebook / Tape / Bags / Colors / Tapes / Bestsellers / Collection.",
    deltaExtra: "Home categories_slider ile aynı aile; PLP'de başlık yok.",
  }),
  obs({
    sayfa: "collection",
    schemaId: "product-showcase-grid-plp",
    url: PLP,
    selector: "#shopify-section-template--16396373131358__product-grid",
    notlar:
      "Home Products breadcrumb + Filters (Color: Beige/Black/Blue…). Ürün ızgarası Alphabet animal keychain ile başlıyor.",
    deltaExtra: "Filtre + sort PLP gövdesinde. Breadcrumb ayrı section değil.",
  }),

  // COLLECTION LIST
  obs({
    sayfa: "collection-list",
    schemaId: "collection-nav-grid",
    url: COLLECTIONS,
    selector: "#shopify-section-template--16396373426270__main",
    notlar:
      "COLLECTIONS ızgarası: bestseller, Book-pin, Collection layout 1–3, Colors, Home page, NEW, Pencil, Tapes.",
  }),

  // SEARCH
  obs({
    sayfa: "search",
    schemaId: "search-results",
    url: SEARCH,
    selector: "#shopify-section-template--16396374212702__main",
    notlar:
      "Search results · q=pen · 11 sonuç. Filters Category/Availability/Price + Relevance sort. Zebra ClickArt Retractable Marker Pen $22.",
  }),

  // CART
  obs({
    sayfa: "cart",
    schemaId: "cart-page-main",
    url: CART,
    selector: "#shopify-section-template--16396373000286__cart-items",
    notlar:
      "Boş: Your cart is empty / Continue Shopping / Have an account? Log in to check out faster.",
    deltaExtra: "cart-footer boşken 0px — leftover. Dolu hâl interact.",
  }),

  // BLOG
  obs({
    sayfa: "blog-list",
    schemaId: "blog-list-main",
    url: BLOG,
    selector: "#shopify-section-template--16396372967518__main",
    notlar:
      "News listesi: Creative Ideas… / A Guide to Must-Have Garment Tools / Rocking a Stylish Yellow School Bag + READ MORE.",
  }),
  obs({
    sayfa: "blog-post",
    schemaId: "blog-post-main",
    url: BLOG_POST,
    selector: "#shopify-section-template--16396372934750__main",
    notlar:
      "Creative Ideas for Office Stationery Organization · MAY 28, 2025 · Share + gövde + Back to blog.",
  }),

  // CONTACT
  obs({
    sayfa: "contact",
    schemaId: "editorial-rich-text",
    url: CONTACT,
    selector: "#shopify-section-template--16396373786718__rich_text_NHb3xF",
    notlar: "Contact Us başlık bloğu (116px).",
  }),
  obs({
    sayfa: "contact",
    schemaId: "lead-capture-form",
    url: CONTACT,
    selector: "#shopify-section-template--16396373786718__contact_form_TQQ3Yn",
    notlar:
      "Contact form: Name / Email * / Phone number / Comment / Submit. Submit yoklandı değil (PII).",
  }),

  // FAQ
  obs({
    sayfa: "faq-support",
    schemaId: "faq-collapsible-tabs",
    url: FAQ,
    selector:
      "#shopify-section-template--16396373819486__cb435de1-8958-455d-8843-8a9ef3413466",
    notlar:
      "Frequently asked question. Can I choose whichever styles I want? (açık cevap) / I like my styles… / How often can I swap… / I signed up! What now?",
  }),

  // ABOUT
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    url: ABOUT,
    selector:
      "#shopify-section-template--16396373459038__f669d7ea-1643-46b7-94d0-4e4adc864320",
    notlar: "About Me! + lorem + View More.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    url: ABOUT,
    selector: "#shopify-section-template--16396373459038__multicolumn_JJN6DY",
    notlar:
      "3 kolon: Made with Love / Innovation & Safe / Eco Friendly (demo metin giyim — stationery preset).",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text-overlay",
    url: ABOUT,
    selector:
      "#shopify-section-template--16396373459038__ae0f69b9-8d77-4132-bc45-5023d341eb82",
    notlar:
      "Finding Unique Items + lorem, tam genişlik görsel üstünde yarı saydam metin bandı.",
    deltaExtra: "Kare overlay; editorial-rich-text uydurulmadı.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "social-proof-brand-logos",
    url: ABOUT,
    selector: "#shopify-section-template--16396373459038__brand_logo_k3ngrY",
    notlar: "About logo şeridi (metin boş, h=159).",
  }),

  // 404
  obs({
    sayfa: "not-found",
    schemaId: "page-content-main",
    url: NOT_FOUND,
    selector: "#shopify-section-template--16396372901982__main",
    notlar:
      "404 / Page not found / We’re sorry something has gone wrong on our end. / Back To Homepage / Continue Shopping.",
    deltaExtra: "taxonomy pageType yok — leftover sayfa tipi. Şema page-content-main reuse.",
  }),

  // PDP
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-main",
    url: PDP,
    selector: "#shopify-section-template--16396373983326__main",
    notlar:
      "Green Plain Book Cover $60. Galeri + Fast Shipping / 24/7 support / 30 days return. People are viewing this right now · Low stock: 10 left · Delivery by Sep 20, 2026 · Hurry up! Sales End In.",
    deltaExtra:
      "Buy-box countdown + stok + teslimat tarihi product-info-main delta; ayrı şema değil. Breadcrumb Home ürün adı aynı section.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-tabs",
    url: PDP,
    selector:
      "#shopify-section-template--16396373983326__79582f51-5736-4bff-b870-bba69393ad36",
    notlar:
      "custom_product__tab: Description / Additional Information / Shipping And Delivery. Description açık (yeşil kapak metni).",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "media-video-hero",
    url: PDP,
    selector: "#shopify-section-template--16396373983326__video_NWBDjf",
    notlar:
      "New Arrival / Our Latest Collection / Lorem + Load video. 823px.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "features-multicolumn",
    url: PDP,
    selector: "#shopify-section-template--16396373983326__multicolumn_VH4Wqb",
    notlar:
      "3 ikon kolon: Made with Love / Innovation & Safe / Eco Friendly (about ile aynı kopya).",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "trust-icon-row",
    url: PDP,
    selector: "#shopify-section-template--16396373983326__service_icon_yLrPgn",
    notlar:
      "FREE SHIPPING / SUPPORT 24/7 / 100% MONEY BACK / SECURE PAYMENTS + 4 ikon.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-grid-banner",
    url: PDP,
    selector: "#shopify-section-template--16396373983326__sub_banner_3tq9yU",
    notlar:
      "İki kutu: Exclusive Offer! NEW SEASON, NEW STYLE Up to 50% Off Shop Now; SHOP OUR LATEST ARRIVALS Incredible Deals Shop Now.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "faq-collapsible-tabs",
    url: PDP,
    selector:
      "#shopify-section-template--16396373983326__collapsible_content_Ya3Wzj",
    notlar:
      "Faq: How do I place an order? / shipping / return policy / return or exchange / right size.",
    deltaExtra: "PDP collapsible_content — sayfa FAQ ile aynı şema, ayrı observation.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-scrolling-marquee",
    url: PDP,
    selector:
      "#shopify-section-template--16396373983326__custom_announcement_bar_zqchrk",
    notlar:
      "Kayan şerit: Free shipping on orders over £75 · 10% OFF on all clothing · Returns extended to 60 days · SALE 20% off all. Use code SPEEDO · Join our Email List…",
    deltaExtra:
      "custom_announcement_bar PDP ortasında (header değil). Home'da announcement yok.",
  }),
];

let n = 0;
for (const { fileName, dir, data } of items) {
  fs.mkdirSync(dir, { recursive: true });
  const dest = path.join(dir, fileName);
  fs.writeFileSync(dest, JSON.stringify(data, null, 2) + "\n");
  n += 1;
  console.log(path.relative(root, dest));
}
console.log(`wrote ${n} observations`);
