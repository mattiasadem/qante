/**
 * Generate Yoga (Speedo) observation JSON — run once, then batch capture.
 * Official walk host only: sports-online-store-2.myshopify.com
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const KAYNAK = "yoga";
const PRESET = "default";
const BASE = "https://sports-online-store-2.myshopify.com/";
const PDP = `${BASE}products/yoga-pilates-mats-towel`;
const PLP = `${BASE}collections/tops`;
const BLOG_POST = `${BASE}blogs/news/start-your-day-with-a-calming-morning-flow-just-10-minutes-to-boost-energy-and-focus`;

const DELTA =
  "Shopify.theme.name Yoga-and-meditation-v-1-5-0-new · schema_name Yoga and meditation · schema_version 1.5.0 · theme_store_id null · role main · id 126822776890 · handle \"null\" · shop sports-online-store-2.myshopify.com · locale en · country US · currency USD · Speedo Themes third-party (Theme Store official değil). Vendor-published demo password 1 (public storefront unlock, same host). Platform adı dataBindings'e yazılmadı.";

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

const cap = (url) => ({
  capture: {
    url,
    viewports: ["375", "768", "1440"],
    method: "margin-box+minPad8",
    updatedAt: "",
  },
});

const items = [
  // HOME
  obs({
    sayfa: "home",
    schemaId: "promo-announcement-bar",
    selector:
      "#shopify-section-sections--15527519191098__announcement_bar_fHNTbB",
    notlar:
      "Tek satır: 🔥 Black Friday Sale: Save up to 60% with code BLACKFRIDAY. h≈48.",
  }),
  obs({
    sayfa: "home",
    schemaId: "navigation-header-mega",
    selector: "#shopify-section-sections--15527519191098__header",
    notlar:
      "Logo + Home / Shop / Themes / Shop By / Collections. Search · Login · Items(/cart). Mega: Details-HeaderMenu-2..5. Wishlist/compare ikon.",
    extra: { captureMode: "viewport" },
  }),
  obs({
    sayfa: "home",
    schemaId: "hero-slideshow",
    selector:
      "#shopify-section-template--15527518306362__3b7cb796-4e44-4edc-96f9-002a08ba8170",
    notlar:
      "Fitness On Toast / A Loose and Comfortable Outfit is Perfect for Yoga / SHOP NOW. Çok slayt aynı başlık. h≈591.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-rich-text",
    selector:
      "#shopify-section-template--15527518306362__rich_text_Tzzgah",
    notlar:
      "Truly love the Yoga you’re in + Yoga strengthens the body… h≈348.",
  }),
  obs({
    sayfa: "home",
    schemaId: "collection-nav-slider",
    selector:
      "#shopify-section-template--15527518306362__new_collection_slider_pzQXzR",
    notlar:
      "The Best Of Shop Categories. Tops 9 / Bottoms 8 / Outerwear 4 PRODUCTS. new_collection_slider. h≈614.",
  }),
  obs({
    sayfa: "home",
    schemaId: "media-lookbook-banner",
    selector:
      "#shopify-section-template--15527518306362__lookbook_with_video_text_tAXRRB",
    notlar:
      "lookbook-with-video-text. CrossFit Training Wear + ALL COLLECTION. Look görseli + ürün thumb. Video poster (Load video). Kapalı karede hotspot yok. h≈1166.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-tabs",
    selector:
      "#shopify-section-template--15527518306362__homepage_product_tab_QagAUq",
    notlar:
      "Trending Products sekmeleri: New Product / Best Selling / Featured. High Comfort leeveless Tanktop. h≈933.",
  }),
  obs({
    sayfa: "home",
    schemaId: "promo-banner-countdown",
    selector:
      "#shopify-section-template--15527518306362__deal_image_banner_ca9Mjy",
    notlar:
      "DEAL OF THE WEEK / One-Time Only + gün/saat/dk/sn timer + SHOP NOW. h≈459.",
  }),
  obs({
    sayfa: "home",
    schemaId: "promo-grid-banner",
    selector:
      "#shopify-section-template--15527518306362__sub_banner_pjHAD3",
    notlar:
      "İki kart: SAVE 20% OFF Perform Legging Yoga Set / LIMITED EDITION High Waist Yoga S… SHOP NOW. h≈539.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    selector:
      "#shopify-section-template--15527518306362__featured_collection_wHRtMD",
    notlar:
      "Special Products. Yoga & Pilates Mats $80→$70 + Core… h≈815.",
  }),
  obs({
    sayfa: "home",
    schemaId: "testimonial-quote-carousel",
    selector:
      "#shopify-section-template--15527518306362__custom_testimonial_wVKAXF",
    notlar:
      "What Clients Are Saying. custom_testimonial tırnak alıntı. h≈524.",
  }),
  obs({
    sayfa: "home",
    schemaId: "blog-list-main",
    selector:
      "#shopify-section-template--15527518306362__featured_blog_8XbWRx",
    notlar:
      "Our Latest Blogs. May 22, 2025 + morning flow / Yoga goes digital 2025. h≈671.",
  }),
  obs({
    sayfa: "home",
    schemaId: "trust-icon-row",
    selector:
      "#shopify-section-template--15527518306362__service_icon_cRV7DD",
    notlar:
      "100 Day returns / Free Shipping / Secure Payment / Customer Support. h≈245.",
  }),
  obs({
    sayfa: "home",
    schemaId: "lead-capture-newsletter-band",
    selector: "#shopify-section-sections--15527519158330__newsletter_f6qcX4",
    notlar:
      "Sign Up for Newsletter + Enter your email. Submit yoklandı değil. h≈116.",
  }),
  obs({
    sayfa: "home",
    schemaId: "footer-columns-newsletter",
    selector: "#shopify-section-sections--15527519158330__footer",
    notlar:
      "About Us / Quick Links / Information / Support + yoga copy. Newsletter ayrı section. h≈509.",
  }),
  obs({
    sayfa: "home",
    schemaId: "global-cart-drawer",
    selector: "#CartDrawer",
    notlar:
      "Dawn cart-drawer. Header Items → /cart. Checkout yok. Boş kare prepareClick.",
    extra: {
      captureMode: "viewport",
      prepareClick:
        "a#cart-icon-bubble, header a[href='/cart'], .header__icon--cart",
    },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-menu-drawer",
    selector: "#menu-drawer",
    notlar:
      "#menu-drawer. Hamburger summary.header__icon--menu (1440 w/h 0). 375/768 open interact.",
    extra: { captureMode: "viewport" },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-predictive-search",
    selector: "details-modal.header__search",
    notlar:
      "details-modal.header__search · #Search-In-Modal. Katalog sorgu yoga.",
    extra: { captureMode: "viewport" },
  }),

  // PDP
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-main",
    url: PDP,
    selector: "#shopify-section-template--15527518896186__main",
    notlar:
      "Yoga & Pilates Mats. Color Purple/Navy/Sky blue/pinkish-purple/Green. Qty + ATC. Fast Shipping / 24/7 / 30 days return. Breadcrumb Home › ürün. h≈983.",
    extra: cap(PDP),
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-tabs",
    url: PDP,
    selector:
      "#shopify-section-template--15527518896186__79582f51-5736-4bff-b870-bba69393ad36",
    notlar:
      "Description / Additional Information / Shipping And Delivery. Enhance your yoga and pilates practice… h≈364.",
    extra: cap(PDP),
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "media-video-hero",
    url: PDP,
    selector: "#shopify-section-template--15527518896186__video_NWBDjf",
    notlar:
      "New Arrival / Our Latest Collection + Lorem. video section. h≈823.",
    extra: cap(PDP),
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "features-multicolumn",
    url: PDP,
    selector: "#shopify-section-template--15527518896186__multicolumn_VH4Wqb",
    notlar:
      "Made with Love / Innovation & Safe / Eco Friendly. h≈427.",
    extra: cap(PDP),
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "editorial-image-with-text",
    url: PDP,
    selector: "#shopify-section-template--15527518896186__multirow_nmyQVH",
    notlar:
      "LATEST / Yoga & Meditation Guide + Yoga & Meditation Practices. multirow. h≈1098.",
    extra: cap(PDP),
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "trust-icon-row",
    suffix: "2",
    url: PDP,
    selector: "#shopify-section-template--15527518896186__service_icon_yLrPgn",
    notlar:
      "FREE SHIPPING / SUPPORT 24/7 / 100% MONEY BACK / SECURE PAYMENTS. h≈200.",
    extra: cap(PDP),
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-grid-banner",
    suffix: "2",
    url: PDP,
    selector: "#shopify-section-template--15527518896186__sub_banner_3tq9yU",
    notlar:
      "İki Exclusive Offer kartı: New Season, New Style Up to 50% Off / Shop Our Latest Arrivals. h≈616.",
    extra: cap(PDP),
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "faq-collapsible-tabs",
    url: PDP,
    selector:
      "#shopify-section-template--15527518896186__collapsible_content_Ya3Wzj",
    notlar:
      "Faq: How do I place an order? / shipping / return policy. h≈490.",
    extra: cap(PDP),
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-scrolling-marquee",
    url: PDP,
    selector:
      "#shopify-section-template--15527518896186__custom_announcement_bar_zqchrk",
    notlar:
      "Marquee: Free shipping on orders over £75 · 10% OFF · Returns 60 days · SALE 20% code SPEEDO. h≈78.",
    extra: cap(PDP),
  }),

  // PLP
  obs({
    sayfa: "collection",
    schemaId: "collection-banner",
    url: PLP,
    selector: "#shopify-section-template--15527518044218__banner",
    notlar: "Collection: Tops. h≈200.",
    extra: cap(PLP),
  }),
  obs({
    sayfa: "collection",
    schemaId: "collection-nav-slider",
    url: PLP,
    selector:
      "#shopify-section-template--15527518044218__collection_slider_FRcchG",
    notlar:
      "Yatay koleksiyon şeridi: Tops Bottoms Outerwear Sound Meditation Fitness Mat… h≈252.",
    extra: cap(PLP),
  }),
  obs({
    sayfa: "collection",
    schemaId: "product-showcase-grid-plp",
    url: PLP,
    selector: "#shopify-section-template--15527518044218__product-grid",
    notlar:
      "9 products. Filters Color (Beige/Black/Blue…) + Availability + Price. Sort. Breadcrumb Home › Tops. h≈1691.",
    extra: cap(PLP),
  }),

  // COLLECTIONS INDEX
  obs({
    sayfa: "collections",
    schemaId: "collection-nav-grid",
    url: `${BASE}collections`,
    selector: "#shopify-section-template--15527518339130__main",
    notlar:
      "COLLECTIONS grid: Best Selling / Bottoms / Collection layout 1… h≈2581.",
    extra: cap(`${BASE}collections`),
  }),

  // SEARCH
  obs({
    sayfa: "search",
    schemaId: "search-results",
    url: `${BASE}search?q=yoga`,
    selector: "#shopify-section-template--15527519125562__main",
    notlar:
      "Search: 8 results for yoga. Filters Color/Category/Availability/Price + Sort. PoseRight EVA Yoga Block. h≈1446.",
    extra: cap(`${BASE}search?q=yoga`),
  }),

  // CART
  obs({
    sayfa: "cart",
    schemaId: "cart-page-main",
    url: `${BASE}cart`,
    selector: "#shopify-section-template--15527517913146__cart-items",
    notlar:
      "Your cart is empty + CONTINUE SHOPPING + Have an account? Log in. cart-footer h=0 boş. Checkout yok.",
    extra: cap(`${BASE}cart`),
  }),

  // CONTACT
  obs({
    sayfa: "contact",
    schemaId: "editorial-rich-text",
    url: `${BASE}pages/contact-us`,
    selector: "#shopify-section-template--15527518699578__rich_text_NHb3xF",
    notlar: "Contact Us başlık. h≈116.",
    extra: cap(`${BASE}pages/contact-us`),
  }),
  obs({
    sayfa: "contact",
    schemaId: "lead-capture-form",
    url: `${BASE}pages/contact-us`,
    selector:
      "#shopify-section-template--15527518699578__contact_form_TQQ3Yn",
    notlar:
      "Contact form. Have any questions… 1-2 business days. SUBMIT yoklandı değil. h≈637.",
    extra: cap(`${BASE}pages/contact-us`),
  }),

  // ABOUT
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text-overlay",
    url: `${BASE}pages/about-layout-1`,
    selector: "#shopify-section-template--15527518371898__parallax_PVEayx",
    notlar: "parallax About Us. h≈300.",
    extra: cap(`${BASE}pages/about-layout-1`),
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    url: `${BASE}pages/about-layout-1`,
    selector:
      "#shopify-section-template--15527518371898__f669d7ea-1643-46b7-94d0-4e4adc864320",
    notlar: "About Me! + Egestas congue… h≈627.",
    extra: cap(`${BASE}pages/about-layout-1`),
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    url: `${BASE}pages/about-layout-1`,
    selector:
      "#shopify-section-template--15527518371898__multicolumn_JJN6DY",
    notlar: "Made with Love / Innovation & Safe / Eco Friendly. h≈371.",
    extra: cap(`${BASE}pages/about-layout-1`),
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    suffix: "2",
    url: `${BASE}pages/about-layout-1`,
    selector:
      "#shopify-section-template--15527518371898__image_with_icons_MDF73t",
    notlar:
      "image_with_icons. YOGA Meditation Work and Quality + Soft Fabric. h≈875.",
    extra: cap(`${BASE}pages/about-layout-1`),
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text-overlay",
    suffix: "2",
    url: `${BASE}pages/about-layout-1`,
    selector:
      "#shopify-section-template--15527518371898__ae0f69b9-8d77-4132-bc45-5023d341eb82",
    notlar: "Elevate Your Practice + lorem. h≈560.",
    extra: cap(`${BASE}pages/about-layout-1`),
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    suffix: "2",
    url: `${BASE}pages/about-layout-1`,
    selector:
      "#shopify-section-template--15527518371898__dbc23b1d-b633-4783-868d-b25b10ce7ede",
    notlar:
      "Our Team: Evelyn Fashion Designer / Isabella Director / Sophia Marketing Manager. h≈616.",
    extra: cap(`${BASE}pages/about-layout-1`),
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "social-proof-brand-logos",
    url: `${BASE}pages/about-layout-1`,
    selector: "#shopify-section-template--15527518371898__brand_logo_k3ngrY",
    notlar: "brand_logo şerit. Kapalı karede metin yok. h≈172.",
    extra: cap(`${BASE}pages/about-layout-1`),
  }),

  // FAQ
  obs({
    sayfa: "faq-support",
    schemaId: "editorial-image-with-text-overlay",
    url: `${BASE}pages/faq`,
    selector: "#shopify-section-template--15527518732346__parallax_MU48pr",
    notlar: "parallax Faq's. h≈300.",
    extra: cap(`${BASE}pages/faq`),
  }),
  obs({
    sayfa: "faq-support",
    schemaId: "faq-collapsible-tabs",
    url: `${BASE}pages/faq`,
    selector:
      "#shopify-section-template--15527518732346__cb435de1-8958-455d-8843-8a9ef3413466",
    notlar:
      "Frequently asked question. Can I choose whichever styles… / they don’t fit / swap / I signed up. h≈526.",
    extra: cap(`${BASE}pages/faq`),
  }),

  // BLOG
  obs({
    sayfa: "blog",
    schemaId: "blog-list-main",
    url: `${BASE}blogs/news`,
    selector: "#shopify-section-template--15527517880378__main",
    notlar:
      "News list. May 22, 2025 morning flow / Yoga goes digital / chair yoga. h≈1129.",
    extra: cap(`${BASE}blogs/news`),
  }),
  obs({
    sayfa: "blog-post",
    schemaId: "blog-post-main",
    url: BLOG_POST,
    selector: "#shopify-section-template--15527517847610__main",
    notlar:
      "Start your day with a calming morning flow… MAY 22, 2025. 1. Begin with Deep Breathing. Share. h≈2121.",
    extra: cap(BLOG_POST),
  }),

  // 404
  obs({
    sayfa: "not-found",
    schemaId: "page-content-main",
    url: `${BASE}404-not-a-page`,
    selector: "#shopify-section-template--15527517814842__main",
    notlar:
      "404 Page not found + BACK TO HOMEPAGE / CONTINUE SHOPPING. h≈392.",
    extra: cap(`${BASE}404-not-a-page`),
  }),
];

let n = 0;
for (const { relDir, fileName, base } of items) {
  const dir = path.join(root, relDir);
  fs.mkdirSync(dir, { recursive: true });
  const dest = path.join(dir, fileName);
  fs.writeFileSync(dest, JSON.stringify(base, null, 2) + "\n");
  n += 1;
  console.log(path.relative(root, dest));
}
console.log(`wrote ${n} observations`);
