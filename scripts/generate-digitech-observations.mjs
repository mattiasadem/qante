#!/usr/bin/env node
/**
 * One-shot generator for Digitech (Speedo) first-inventory observations.
 * Run from repo root: node scripts/generate-digitech-observations.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const obsRoot = path.join(root, "observations/digitech/default");

const BASE = "https://digital-gallery-shop.myshopify.com/";
const PDP =
  "https://digital-gallery-shop.myshopify.com/products/digital-planner-email-templates-for-digital-branding";
const PLP = "https://digital-gallery-shop.myshopify.com/collections/all";
const COLLECTIONS = "https://digital-gallery-shop.myshopify.com/collections";
const SEARCH = "https://digital-gallery-shop.myshopify.com/search?q=planner";
const CART = "https://digital-gallery-shop.myshopify.com/cart";
const ABOUT = "https://digital-gallery-shop.myshopify.com/pages/about-us";
const CONTACT = "https://digital-gallery-shop.myshopify.com/pages/contact";
const FAQ = "https://digital-gallery-shop.myshopify.com/pages/faqs";
const BLOG = "https://digital-gallery-shop.myshopify.com/blogs/news";
const BLOG_POST =
  "https://digital-gallery-shop.myshopify.com/blogs/news/tips-for-implementing-a-successful-influencer-marketing-strategy";
const NOT_FOUND =
  "https://digital-gallery-shop.myshopify.com/pages/this-page-does-not-exist-xyz";

const DELTA =
  "Shopify.theme.name Digital Gallery Shop V-1.5.0 · schema_name Digital gallery shop · schema_version 1.5.0 · theme_store_id null · role main · id 143567782103 · shop digital-gallery-shop.myshopify.com · Speedo Themes third-party (Theme Store official değil). storefrontPassword=1 (speedothemes.com product page).";

function obs({
  sayfa,
  schemaId,
  url,
  selector,
  notlar,
  deltaExtra = "",
  evidenceSlug,
  observationSuffix = "",
  interaction = null,
}) {
  const slug = evidenceSlug || schemaId;
  const fileName = observationSuffix ? `${schemaId}-${observationSuffix}.json` : `${schemaId}.json`;
  const obsId = observationSuffix
    ? `digitech.default.${sayfa}.${schemaId}.${observationSuffix}`
    : `digitech.default.${sayfa}.${schemaId}`;
  const o = {
    observationId: obsId,
    schemaId,
    kaynak: "digitech",
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
      mode: "section",
      method: interaction ? "interaction-steps" : "margin-box+minPad8",
      updatedAt: "",
    },
  };
  if (interaction) Object.assign(o, interaction);
  return { fileName, dir: path.join(obsRoot, sayfa), data: o };
}

const items = [
  obs({
    sayfa: "home",
    schemaId: "promo-announcement-bar",
    url: BASE,
    selector: "#shopify-section-sections--18138755563735__announcement_bar_fHNTbB",
    notlar:
      "2 mesaj swiper: 20% off email + free shipping £75. announcement-bar-section header-group içinde.",
  }),
  obs({
    sayfa: "home",
    schemaId: "navigation-header-mega",
    url: BASE,
    selector: "#shopify-section-sections--18138755563735__header",
    notlar:
      "header--top-center. HOME / SHOP mega (#Details-HeaderMenu-2) / ABOUT / BLOG / CONTACT. Üst şerit: ülke+para (6), dil (4), sosyal. Wishlist 0 · Compare 0 · Search · Cart. Hamburger 1440.",
    interaction: {
      captureMode: "viewport",
      interactionStates: ["initial", "open"],
      interactionSteps: [
        { state: "initial", action: "goto", value: BASE, capture: false },
        { state: "initial", action: "waitFor", value: 2500, capture: false },
        {
          state: "initial",
          action: "press",
          value: "Escape",
          capture: true,
          captureMode: "viewport",
          etiket: "kapali",
          not: "Mega kapalı header",
        },
        {
          state: "open",
          action: "forceOpen",
          selector: "#Details-HeaderMenu-2",
          viewports: ["1440"],
          capture: true,
          captureMode: "viewport",
          etiket: "shop-mega",
          not: "SHOP mega: Email Templates, Social Media Bundles, Business Branding, Digital Planners kartları",
        },
      ],
      stateFindings: {},
      missingStates: [],
      interactionNote: "",
    },
  }),
  obs({
    sayfa: "home",
    schemaId: "hero-slideshow",
    url: BASE,
    selector:
      "#shopify-section-template--18138755104983__3b7cb796-4e44-4edc-96f9-002a08ba8170",
    notlar:
      "Digital Planner - Weekly 2024 + lorem + TRY IT NOW! En az 2 slayt; dots/ok evidence'da.",
  }),
  obs({
    sayfa: "home",
    schemaId: "features-multicolumn",
    url: BASE,
    selector: "#shopify-section-template--18138755104983__multicolumn_yKHV3p",
    notlar: "4 kolon: CHOOSE PRODUCT / PURCHASE / CUSTOMIZE / BUILD YOUR BRAND. İkon + başlık + metin.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    url: BASE,
    selector: "#shopify-section-template--18138755104983__0617c2f2-69ec-4df8-a506-b2616d4e1db4",
    notlar: "BESTSELLERS featured collection grid. SALE badge. Quick view yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-image-with-text",
    url: BASE,
    selector: "#shopify-section-template--18138755104983__image_with_text_TFeitD",
    notlar: "ABOUT US — görsel + iki paragraf lorem + READ MORE.",
  }),
  obs({
    sayfa: "home",
    schemaId: "collection-nav-image-cards",
    url: BASE,
    selector: "#shopify-section-template--18138755104983__07468762-302d-4441-92a3-3b98a30b4cbe",
    notlar:
      "SHOP BY COLLECTION — 4 büyük kart: Email Templates, Social Media Bundles, Business Branding, Digital Planners.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    url: BASE,
    selector: "#shopify-section-template--18138755104983__featured_collection",
    notlar: "OUR FAVORITES ikinci featured collection.",
    observationSuffix: "2",
    evidenceSlug: "product-showcase-grid-featured-2",
  }),
  obs({
    sayfa: "home",
    schemaId: "lead-capture-newsletter-band",
    url: BASE,
    selector: "#shopify-section-template--18138755104983__newsletter_6Xpm7F",
    notlar: "KEEP IN TOUCH — e-posta + SIGN UP. Submit yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "features-multicolumn",
    url: BASE,
    selector: "#shopify-section-template--18138755104983__6ce4ce05-75d7-44ab-a8cc-d1d7a96f840c",
    notlar: "2 kolon: BUYING EASY + MAKE BRAND. İkon satırı.",
    observationSuffix: "2",
    evidenceSlug: "features-multicolumn-2",
  }),
  obs({
    sayfa: "home",
    schemaId: "footer-columns-newsletter",
    url: BASE,
    selector: "#shopify-section-sections--18138755530967__footer",
    notlar:
      "QUICK LINKS + COLLECTIONS + GET IN TOUCH + sosyal + ödeme ikonları. Footer newsletter submit yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "global-menu-drawer",
    url: BASE,
    selector: "#menu-drawer",
    notlar:
      "details#Details-menu-drawer-container. HOME / SHOP nested (4 koleksiyon) / ABOUT / BLOG / CONTACT / Wishlist / Compare / Account.",
    interaction: {
      captureMode: "viewport",
      prepareClick: "#Details-menu-drawer-container > summary",
      interactionStates: ["initial", "open", "changed"],
      interactionSteps: [
        { state: "initial", action: "goto", value: BASE, capture: false },
        { state: "initial", action: "waitFor", value: 2500, capture: false },
        {
          state: "initial",
          action: "press",
          value: "Escape",
          capture: true,
          captureMode: "viewport",
          etiket: "kapali",
          viewports: ["375", "768", "1440"],
        },
        {
          state: "open",
          action: "click",
          selector: "#Details-menu-drawer-container > summary",
          viewports: ["375", "768", "1440"],
          capture: true,
          captureMode: "viewport",
          etiket: "menu-acik",
          not: "Ana drawer açık",
        },
        {
          state: "changed",
          action: "click",
          selector: "#Details-menu-drawer-menu-item-2 > summary",
          viewports: ["375", "768", "1440"],
          capture: true,
          captureMode: "viewport",
          etiket: "shop-alt",
          not: "SHOP alt menü 4 koleksiyon",
        },
      ],
      stateFindings: {},
      missingStates: [],
      interactionNote: "",
    },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-predictive-search",
    url: BASE,
    selector: ".search-modal, details-modal.header__search",
    notlar: "details-modal.header__search. Predictive suggestions + products.",
    interaction: {
      captureMode: "viewport",
      interactionStates: ["initial", "input"],
      interactionSteps: [
        { state: "initial", action: "goto", value: BASE, capture: false },
        { state: "initial", action: "waitFor", value: 2000, capture: false },
        {
          state: "initial",
          action: "click",
          selector: "details-modal.header__search summary, .header__icon--search",
          capture: true,
          captureMode: "viewport",
          etiket: "bos-modal",
          not: "Arama modal boş",
        },
        {
          state: "input",
          action: "fill",
          selector: "#Search-In-Modal, .search-modal input[type='search']",
          value: "planner",
          capture: true,
          captureMode: "viewport",
          etiket: "planner-sonuc",
          not: "planner yazılı öneri + ürün",
        },
      ],
      stateFindings: {},
      missingStates: [],
      interactionNote: "",
    },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-cart-drawer",
    url: BASE,
    selector: "#CartDrawer",
    notlar: "Cart drawer overlay. Boş / dolu / qty.",
    interaction: {
      captureMode: "viewport",
      interactionStates: ["initial", "filled", "changed"],
      interactionSteps: [
        { state: "initial", action: "goto", value: BASE, capture: false },
        {
          state: "initial",
          action: "addToCart",
          value: { url: PDP, clearFirst: true, skipIfFilled: true },
          capture: false,
        },
        {
          state: "initial",
          action: "click",
          selector: "a[href='/cart'], .header__icon--cart, #cart-icon-bubble",
          capture: true,
          captureMode: "viewport",
          etiket: "bos",
          not: "Drawer boş veya temizlendikten sonra",
        },
        {
          state: "filled",
          action: "addToCart",
          value: { url: PDP, clearFirst: true },
          capture: false,
        },
        {
          state: "filled",
          action: "click",
          selector: "a[href='/cart'], .header__icon--cart, #cart-icon-bubble",
          capture: true,
          captureMode: "viewport",
          etiket: "dolu-1",
          not: "1 ürün $39",
        },
        {
          state: "changed",
          action: "click",
          selector: "#CartDrawer .quantity__button[name='plus'], .cart-drawer .quantity__button[name='plus']",
          capture: true,
          captureMode: "viewport",
          etiket: "qty-2",
          not: "Adet 2",
        },
      ],
      stateFindings: {},
      missingStates: [],
      interactionNote: "",
    },
  }),
  // PDP
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-main",
    url: PDP,
    selector: "#shopify-section-template--18138755432663__main",
    notlar:
      "Digital planner email templates. ~~$130~~ $39. Qty stepper. ADD TO CART. Digital download — varyant yok, yalnız qty. Share accordion.",
    interaction: {
      interactionStates: ["initial", "changed"],
      interactionSteps: [
        { state: "initial", action: "goto", value: PDP, capture: true, etiket: "qty-1", not: "Qty 1" },
        {
          state: "changed",
          action: "click",
          selector: "#shopify-section-template--18138755432663__main .quantity__button[name='plus']",
          capture: true,
          etiket: "qty-2",
          not: "Qty 1→2",
        },
      ],
      stateFindings: {},
      missingStates: [],
      interactionNote: "Size/color swatch yok — digital product. changed = qty.",
    },
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "features-multicolumn",
    url: PDP,
    selector: "#shopify-section-template--18138755432663__multicolumn_jGKirq",
    notlar: "HOW IT WORKS? — 3 kolon süreç.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "editorial-image-with-text",
    url: PDP,
    selector: "#shopify-section-template--18138755432663__d362ffb7-87b2-4f33-9e31-9a3ab6c75890",
    notlar: "DESIGNED TO SAVE YOUR TIME — IWT.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "product-showcase-related",
    url: PDP,
    selector: "#shopify-section-template--18138755432663__related-products",
    notlar: "YOU MAY ALSO LIKE — related products grid.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "lead-capture-newsletter-band",
    url: PDP,
    selector: "#shopify-section-template--18138755432663__newsletter_8QbwDJ",
    notlar: "KEEP IN TOUCH PDP alt band.",
    observationSuffix: "2",
    evidenceSlug: "lead-capture-newsletter-band-2",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "features-multicolumn",
    url: PDP,
    selector: "#shopify-section-template--18138755432663__multicolumn_JCdwKY",
    notlar: "PDP alt 3 kolon trust/features.",
    observationSuffix: "2",
    evidenceSlug: "features-multicolumn-2",
  }),
  // PLP
  obs({
    sayfa: "collection",
    schemaId: "collection-banner",
    url: PLP,
    selector: "#shopify-section-template--18138754842839__banner",
    notlar: "Collection: Products başlık şeridi.",
  }),
  obs({
    sayfa: "collection",
    schemaId: "product-showcase-grid-plp",
    url: PLP,
    selector: "#shopify-section-template--18138754842839__product-grid",
    notlar: "26 ürün grid + FILTERS yan panel (1440). Sort yok.",
  }),
  // Collections
  obs({
    sayfa: "collections",
    schemaId: "collection-nav-grid",
    url: COLLECTIONS,
    selector: "#shopify-section-template--18138755137751__main",
    notlar: "COLLECTIONS — 4 koleksiyon kart grid.",
  }),
  // Search
  obs({
    sayfa: "search",
    schemaId: "search-results",
    url: SEARCH,
    selector: "#shopify-section-template--18138755498199__main",
    notlar: 'Search results "planner" — 6 sonuç + Filters.',
  }),
  // Cart
  obs({
    sayfa: "cart",
    schemaId: "cart-page-main",
    url: CART,
    selector: "#shopify-section-template--18138754810071__cart-items",
    notlar: "Your cart empty / filled. Qty stepper sayfada.",
    interaction: {
      interactionStates: ["initial", "filled", "changed"],
      interactionSteps: [
        {
          state: "initial",
          action: "goto",
          value: CART,
          capture: false,
        },
        {
          state: "initial",
          action: "addToCart",
          value: { url: PDP, clearFirst: true, skipIfFilled: false },
          capture: false,
        },
        {
          state: "initial",
          action: "goto",
          value: CART,
          capture: true,
          etiket: "bos",
          not: "Sepet boş (clear sonrası)",
        },
        {
          state: "filled",
          action: "addToCart",
          value: { url: PDP, clearFirst: true },
          capture: false,
        },
        {
          state: "filled",
          action: "goto",
          value: CART,
          capture: true,
          etiket: "dolu-1",
          not: "1 satır $39",
        },
        {
          state: "changed",
          action: "click",
          selector: "#shopify-section-template--18138754810071__cart-items .quantity__button[name='plus']",
          capture: true,
          etiket: "qty-2",
          not: "Adet 2",
        },
      ],
      stateFindings: {},
      missingStates: [],
      interactionNote: "",
    },
  }),
  // About
  obs({
    sayfa: "about-brand",
    schemaId: "page-content-main",
    url: ABOUT,
    selector: "#shopify-section-template--18138755170519__main",
    notlar: "About Us sayfa başlığı bandı.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    url: ABOUT,
    selector: "#shopify-section-template--18138755170519__db25c28a-883d-46d4-81ce-031967d87130",
    notlar: "WELCOME TO DIGITAL GALLERY hero IWT.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    url: ABOUT,
    selector: "#shopify-section-template--18138755170519__multicolumn_f69H6P",
    notlar: "3 kolon: CHOOSE / PURCHASE / CUSTOMIZE.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    url: ABOUT,
    selector: "#shopify-section-template--18138755170519__multirow_RkJUXf",
    notlar: "Multirow: LET'S CREATE + CUSTOM PRODUCT DESIGN & STRATEGY.",
    observationSuffix: "2",
    evidenceSlug: "editorial-image-with-text-2",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text-overlay",
    url: ABOUT,
    selector: "#shopify-section-template--18138755170519__custom_image_HxGVtn",
    notlar: "500+ CUSTOMERS — overlay metin + arka plan görsel.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    url: ABOUT,
    selector: "#shopify-section-template--18138755170519__left_right_image_with_text_Eyk97k",
    notlar: "DIGITAL PRODUCT BOOTCAMP IWT.",
    observationSuffix: "3",
    evidenceSlug: "editorial-image-with-text-3",
  }),
  // Contact
  obs({
    sayfa: "contact",
    schemaId: "editorial-image-with-text",
    url: CONTACT,
    selector: "#shopify-section-template--18138755236055__image_with_text_EnmbTP",
    notlar: "CONTACT US üst banner IWT.",
  }),
  obs({
    sayfa: "contact",
    schemaId: "lead-capture-form",
    url: CONTACT,
    selector: "#shopify-section-template--18138755236055__form",
    notlar: "GET IN TOUCH — adres/telefon/e-posta + form alanları. SUBMIT yok.",
  }),
  // FAQ
  obs({
    sayfa: "faq-support",
    schemaId: "page-content-main",
    url: FAQ,
    selector: "#shopify-section-template--18138755268823__main",
    notlar: "Faq's sayfa başlığı.",
  }),
  obs({
    sayfa: "faq-support",
    schemaId: "faq-collapsible-tabs",
    url: FAQ,
    selector: "#shopify-section-template--18138755268823__cb435de1-8958-455d-8843-8a9ef3413466",
    notlar: "FAQ accordion — çok soru. İlk açık olabilir.",
    interaction: {
      interactionStates: ["initial", "changed"],
      interactionSteps: [
        { state: "initial", action: "goto", value: FAQ, capture: true, etiket: "kapali", not: "İlk durum" },
        {
          state: "changed",
          action: "click",
          selector:
            "#shopify-section-template--18138755268823__cb435de1-8958-455d-8843-8a9ef3413466 details:nth-of-type(2) summary",
          capture: true,
          etiket: "q2-acik",
          not: "2. soru açık",
        },
      ],
      stateFindings: {},
      missingStates: [],
      interactionNote: "",
    },
  }),
  // Blog
  obs({
    sayfa: "blog-list",
    schemaId: "blog-list-main",
    url: BLOG,
    selector: "#shopify-section-template--18138754777303__main",
    notlar: "News blog list — kart grid + tarih.",
  }),
  obs({
    sayfa: "blog-post",
    schemaId: "blog-post-main",
    url: BLOG_POST,
    selector: "#shopify-section-template--18138754744535__main",
    notlar: "Tips For Implementing A Successful Influencer Marketing Strategy makale.",
  }),
  // 404
  obs({
    sayfa: "not-found",
    schemaId: "page-content-main",
    url: NOT_FOUND,
    selector: "#shopify-section-template--18138754711767__main",
    notlar: "404 Page not found + CONTINUE SHOPPING.",
  }),
];

let written = 0;
for (const { fileName, dir, data } of items) {
  fs.mkdirSync(dir, { recursive: true });
  const out = path.join(dir, fileName);
  fs.writeFileSync(out, JSON.stringify(data, null, 2) + "\n");
  written++;
}
console.log(`Wrote ${written} observations to ${obsRoot}`);
