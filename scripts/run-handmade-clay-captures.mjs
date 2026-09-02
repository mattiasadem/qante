/**
 * Handmade Clay (Speedo Themes) — Mod A static + interact captures.
 * Official demo: https://luxury-handmade-ultimate.myshopify.com/ · password 1
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BASE = "https://luxury-handmade-ultimate.myshopify.com/";
const TEMA = "handmade-clay";
const PRESET = "default";
const DELTA =
  "Shopify.theme.name Luxury-handmade-ultimate V-1-5-0 · schema_name luxury_handmade_ultimate · schema_version 1.5.0 · theme_store_id null · role main · id 173445611830 · shop luxury-handmade-ultimate.myshopify.com · Dawn-like OS 2.0. Vendor-published demo password 1 (public storefront unlock).";

function obsPath(sayfa, file) {
  return path.join(ROOT, "observations", TEMA, PRESET, sayfa, file);
}

function writeObs(sayfa, file, data) {
  const p = obsPath(sayfa, file);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + "\n");
  return p;
}

function baseObs({ schemaId, sayfa, url, selector, notlar, file, suffix = "" }) {
  const slug = file.replace(".json", "");
  return {
    observationId: `${TEMA}.${PRESET}.${sayfa}.${slug}`,
    schemaId,
    kaynak: TEMA,
    preset: PRESET,
    sayfa,
    url,
    selector,
    evidenceSlug: slug,
    evidence: [],
    storefrontPassword: "1",
    notlar,
    delta: DELTA,
    capture: {
      url,
      viewports: ["375", "768", "1440"],
      mode: "section",
      method: "margin-box+minPad8",
      updatedAt: "",
    },
  };
}

const HOME = BASE;
const PLP = `${BASE}collections/all`;
const PDP = `${BASE}products/floral-leaf-clay-drop-earrings`;
const CART = `${BASE}cart`;
const SEARCH = `${BASE}search?q=clay`;
const COLLECTIONS = `${BASE}collections`;
const ABOUT = `${BASE}pages/our-story`;
const CONTACT = `${BASE}pages/contact`;
const FAQ = `${BASE}pages/faq`;
const BLOG = `${BASE}blogs/news`;
const BLOG_POST = `${BASE}blogs/news/seasonal-trends-in-jewellery-and-accessories`;

const staticObs = [
  // home
  ["home", "promo-announcement-bar.json", baseObs({ schemaId: "promo-announcement-bar", sayfa: "home", url: HOME, selector: "#shopify-section-sections--23698075287862__header-announcement", notlar: "Üst ticker: Ship to us and canada / Up to 50% off. Marquee.", file: "promo-announcement-bar.json" })],
  ["home", "promo-announcement-bar-2.json", baseObs({ schemaId: "promo-announcement-bar", sayfa: "home", url: HOME, selector: "#shopify-section-sections--23698075287862__f67164a2-301d-4f04-982f-e94fd0dad345", notlar: "FREE Shipping USD60 + Facebook / Instagram / Pinterest.", file: "promo-announcement-bar-2.json" })],
  ["home", "hero-slideshow.json", baseObs({ schemaId: "hero-slideshow", sayfa: "home", url: HOME, selector: "#shopify-section-template--23698074665270__8c77ee53-00e0-4644-9e4a-471416874f60", notlar: "HI FRIENDS! GRATEFUL THAT YOU ARE HERE! + SHOP NOW. slideshow-component.", file: "hero-slideshow.json" })],
  ["home", "editorial-rich-text.json", baseObs({ schemaId: "editorial-rich-text", sayfa: "home", url: HOME, selector: "#shopify-section-template--23698074665270__bd1f6a88-64d4-41da-850d-e037c49336b8", notlar: "Welcome — marka tanıtım rich text.", file: "editorial-rich-text.json" })],
  ["home", "editorial-rich-text-2.json", baseObs({ schemaId: "editorial-rich-text", sayfa: "home", url: HOME, selector: "#shopify-section-template--23698074665270__cc09d110-a601-4b1c-a67b-e50649affb15", notlar: "Polymer Clay earrings quote block — büyük alıntı metin.", file: "editorial-rich-text-2.json" })],
  ["home", "collection-nav-grid.json", baseObs({ schemaId: "collection-nav-grid", sayfa: "home", url: HOME, selector: "#shopify-section-template--23698074665270__1740af2e-5db0-4545-a8fe-e8e08985cb2d", notlar: "Handmade Collection — Spring/Summer/Fall/Rings grid + VIEW ALL CATEGORIES.", file: "collection-nav-grid.json" })],
  ["home", "editorial-image-with-text.json", baseObs({ schemaId: "editorial-image-with-text", sayfa: "home", url: HOME, selector: "#shopify-section-template--23698074665270__4c3d8f88-fdc0-46ab-934e-7d651419c12e", notlar: "Hi, I am Maria! — image-with-text founder story.", file: "editorial-image-with-text.json" })],
  ["home", "blog-list-main.json", baseObs({ schemaId: "blog-list-main", sayfa: "home", url: HOME, selector: "#shopify-section-template--23698074665270__a5bd3b43-ca44-443d-9b55-344eea67b6ab", notlar: "Latest Blog — 3 kart önizleme.", file: "blog-list-main.json" })],
  ["home", "testimonial-quote-carousel.json", baseObs({ schemaId: "testimonial-quote-carousel", sayfa: "home", url: HOME, selector: "#shopify-section-template--23698074665270__d835426e-57a5-43d9-b1a6-4aca249ba26b", notlar: "What Customer says About Us! — quote carousel.", file: "testimonial-quote-carousel.json" })],
  ["home", "lead-capture-newsletter-band.json", baseObs({ schemaId: "lead-capture-newsletter-band", sayfa: "home", url: HOME, selector: "#shopify-section-template--23698074665270__fefc41c9-9204-410b-9e3e-239350896b99", notlar: "Subscribe to our emails — Email input. Submit yok.", file: "lead-capture-newsletter-band.json" })],
  ["home", "features-multicolumn.json", baseObs({ schemaId: "features-multicolumn", sayfa: "home", url: HOME, selector: "#shopify-section-template--23698074665270__627eb6c8-1373-423b-8735-1e2c942b1d2b", notlar: "Free shipping USA / Handmade collection / 3 kolon ikon.", file: "features-multicolumn.json" })],
  ["home", "media-shop-the-feed.json", baseObs({ schemaId: "media-shop-the-feed", sayfa: "home", url: HOME, selector: "#shopify-section-template--23698074665270__09bbe40a-42cb-45eb-9b1a-7d4b61d0aeeb", notlar: "@LuxuryJewelry — Instagram grid.", file: "media-shop-the-feed.json" })],
  ["home", "footer-columns-newsletter.json", baseObs({ schemaId: "footer-columns-newsletter", sayfa: "home", url: HOME, selector: "#shopify-section-sections--23698075255094__footer", notlar: "Footer: sosyal, policy linkler, ödeme ikonları, country selector.", file: "footer-columns-newsletter.json" })],
  // collection
  ["collection", "collection-banner.json", baseObs({ schemaId: "collection-banner", sayfa: "collection", url: PLP, selector: "#shopify-section-template--23698074632502__banner", notlar: "Collection: Products başlık bandı.", file: "collection-banner.json" })],
  // collections
  ["collections", "collection-nav-grid.json", baseObs({ schemaId: "collection-nav-grid", sayfa: "collections", url: COLLECTIONS, selector: "#shopify-section-template--23698074698038__main", notlar: "Collections index — BRACELET / EARRINGS / RINGS vb. grid.", file: "collection-nav-grid.json" })],
  // product-detail static blocks
  ["product-detail", "features-multicolumn.json", baseObs({ schemaId: "features-multicolumn", sayfa: "product-detail", url: PDP, selector: "#shopify-section-template--23698074927414__multicolumn", notlar: "PDP altı 3 kolon trust.", file: "features-multicolumn.json" })],
  ["product-detail", "editorial-image-with-text.json", baseObs({ schemaId: "editorial-image-with-text", sayfa: "product-detail", url: PDP, selector: "#shopify-section-template--23698074927414__image-with-text", notlar: "Responsibly Sourced — image-with-text.", file: "editorial-image-with-text.json" })],
  ["product-detail", "product-showcase-related.json", baseObs({ schemaId: "product-showcase-related", sayfa: "product-detail", url: PDP, selector: "#shopify-section-template--23698074927414__related-products", notlar: "You may also like — related products grid.", file: "product-showcase-related.json" })],
  // cart
  ["cart", "product-showcase-grid-featured.json", baseObs({ schemaId: "product-showcase-grid-featured", sayfa: "cart", url: CART, selector: "#shopify-section-template--23698074599734__featured-collection", notlar: "Cart page Featured collection upsell.", file: "product-showcase-grid-featured.json" })],
  // search
  ["search", "search-results.json", baseObs({ schemaId: "search-results", sayfa: "search", url: SEARCH, selector: "#shopify-section-template--23698074992950__main", notlar: "Search results clay — 9 sonuç, filtre + sort.", file: "search-results.json" })],
  // about-brand
  ["about-brand", "page-content-main.json", baseObs({ schemaId: "page-content-main", sayfa: "about-brand", url: ABOUT, selector: "#shopify-section-template--23698074730806__main", notlar: "Our story sayfa başlığı.", file: "page-content-main.json" })],
  ["about-brand", "editorial-image-with-text.json", baseObs({ schemaId: "editorial-image-with-text", sayfa: "about-brand", url: ABOUT, selector: "#shopify-section-template--23698074730806__768eb67c-7932-4065-a353-3d2092e9d7ff", notlar: "Hi, I am Maria! — about story.", file: "editorial-image-with-text.json" })],
  ["about-brand", "editorial-image-with-text-2.json", baseObs({ schemaId: "editorial-image-with-text", sayfa: "about-brand", url: ABOUT, selector: "#shopify-section-template--23698074730806__95a2e35d-733a-4924-b874-70a731fe7d4d", notlar: "Our Work — image-with-text.", file: "editorial-image-with-text-2.json" })],
  ["about-brand", "editorial-image-with-text-3.json", baseObs({ schemaId: "editorial-image-with-text", sayfa: "about-brand", url: ABOUT, selector: "#shopify-section-template--23698074730806__811e5e9d-0d04-41f3-b17a-d939f0db16f8", notlar: "We're Eco-Friendly! — image-with-text.", file: "editorial-image-with-text-3.json" })],
  // contact
  ["contact", "page-content-main.json", baseObs({ schemaId: "page-content-main", sayfa: "contact", url: CONTACT, selector: "#shopify-section-template--23698074763574__main", notlar: "Contact Us başlık.", file: "page-content-main.json" })],
  ["contact", "editorial-image-with-text.json", baseObs({ schemaId: "editorial-image-with-text", sayfa: "contact", url: CONTACT, selector: "#shopify-section-template--23698074763574__2d46ef1b-34ed-48ba-9877-fbdf46a8d5cd", notlar: "Hi, I am Maria! — contact hero.", file: "editorial-image-with-text.json" })],
  ["contact", "lead-capture-form.json", baseObs({ schemaId: "lead-capture-form", sayfa: "contact", url: CONTACT, selector: "#shopify-section-template--23698074763574__form", notlar: "We'd love to hear from you! — contact form. Submit yok.", file: "lead-capture-form.json" })],
  // faq-support
  ["faq-support", "page-content-main.json", baseObs({ schemaId: "page-content-main", sayfa: "faq-support", url: FAQ, selector: "#shopify-section-template--23698074796342__main", notlar: "Faq sayfa başlığı.", file: "page-content-main.json" })],
  // blog
  ["blog-list", "blog-list-main.json", baseObs({ schemaId: "blog-list-main", sayfa: "blog-list", url: BLOG, selector: "#shopify-section-template--23698074566966__main", notlar: "News blog list.", file: "blog-list-main.json" })],
  ["blog-post", "blog-post-main.json", baseObs({ schemaId: "blog-post-main", sayfa: "blog-post", url: BLOG_POST, selector: "#shopify-section-template--23698074534198__main", notlar: "Seasonal trends in jewellery and accessories.", file: "blog-post-main.json" })],
];

// interact observations
const interactObs = [
  {
    sayfa: "home",
    file: "navigation-header-mega.json",
    data: {
      ...baseObs({
        schemaId: "navigation-header-mega",
        sayfa: "home",
        url: HOME,
        selector: "#shopify-section-sections--23698075287862__header",
        notlar: "header--top-center. Nav: Home / Shop (Details-HeaderMenu-2) / Our Story / Contact / Faq's / Blog. Search + wishlist + cart.",
        file: "navigation-header-mega.json",
      }),
      captureMode: "viewport",
      interactionStates: ["initial", "open"],
      interactionSteps: [
        { state: "initial", action: "goto", value: HOME, capture: false },
        { state: "initial", action: "waitFor", value: 2500, capture: false },
        { state: "initial", action: "press", value: "Escape", capture: true, captureMode: "viewport", etiket: "kapali", not: "Dropdown kapalı header." },
        { state: "open", action: "hover", selector: "#Details-HeaderMenu-2 > summary", viewports: ["1440"], capture: true, captureMode: "viewport", etiket: "shop-dropdown", not: "Shop hover: Earrings / Necklace / Rings / Bracelet. Mega yok." },
      ],
      stateFindings: {
        initial: "375/768: hamburger + search + wishlist 0 + sepet. 1440: Home / Shop chevron / Our Story / Contact / Faq's / Blog.",
        open: "1440 Shop hover: Earrings, Necklace, Rings, Bracelet. URL home.",
      },
      missingStates: [{ state: "open", sebep: "375/768 hamburger global-menu-drawer'da." }],
      interactionNote: "Hover summary. Click Shop <a> PLP'ye gider. Log in / wishlist tıklanmadı.",
      capture: { url: HOME, viewports: ["375", "768", "1440"], mode: "viewport", method: "interaction-steps", updatedAt: "" },
    },
  },
  {
    sayfa: "home",
    file: "global-predictive-search.json",
    data: {
      ...baseObs({
        schemaId: "global-predictive-search",
        sayfa: "home",
        url: HOME,
        selector: "predictive-search.search-modal__form",
        notlar: "predictive-search + Search modal.",
        file: "global-predictive-search.json",
      }),
      captureMode: "viewport",
      prepareClick: "summary.header__icon--search, .header__icon--search, #Search-In-Modal-1",
      interactionStates: ["initial", "input"],
      interactionSteps: [
        { state: "initial", action: "goto", value: HOME, capture: false },
        { state: "initial", action: "waitFor", value: 2500, capture: false },
        { state: "initial", action: "click", selector: "summary.header__icon--search", capture: true, captureMode: "viewport", etiket: "arama-bos", not: "Boş Search overlay." },
        { state: "input", action: "fill", selector: "#Search-In-Modal-1, #Search-In-Modal", value: "clay", capture: true, captureMode: "viewport", etiket: "arama-clay", not: "katalogSorgu=clay." },
      ],
      stateFindings: {
        initial: "Search placeholder + büyüteç + X. Öneri yok.",
        input: "clay: suggestions + products (Floral Leaf Clay Drop Earrings vb.) + Search for clay.",
      },
      missingStates: [],
      interactionNote: "katalogSorgu clay. Submit/PII yok.",
      capture: { url: HOME, viewports: ["375", "768", "1440"], mode: "viewport", method: "interaction-steps", updatedAt: "", prepareClick: "summary.header__icon--search" },
    },
  },
  {
    sayfa: "home",
    file: "global-menu-drawer.json",
    data: {
      ...baseObs({
        schemaId: "global-menu-drawer",
        sayfa: "home",
        url: HOME,
        selector: "#menu-drawer",
        notlar: "details#Details-menu-drawer-container. Shop nested accordion.",
        file: "global-menu-drawer.json",
      }),
      captureMode: "viewport",
      prepareClick: "summary.header__icon--menu",
      interactionStates: ["open", "changed"],
      interactionSteps: [
        { state: "open", action: "goto", value: HOME, capture: false },
        { state: "open", action: "waitFor", value: 2500, capture: false },
        { state: "open", action: "click", selector: "summary.header__icon--menu", viewports: ["375", "768"], capture: true, captureMode: "viewport", etiket: "hamburger", not: "Drawer açık; 1440 hamburger 0×0." },
        { state: "changed", action: "click", selector: "#Details-menu-drawer-menu-item-2 > summary", viewports: ["375", "768"], capture: true, captureMode: "viewport", etiket: "shop-akordeon", not: "Shop nested — Earrings / Necklace / Rings / Bracelet." },
      ],
      stateFindings: {
        open: "375/768: Home, Shop →, Our Story, Contact, Faq's, Blog; Log in + locale + sosyal.",
        changed: "Shop → geri oku + Earrings / Necklace / Rings / Bracelet. URL home.",
      },
      missingStates: [{ state: "open", sebep: "1440 hamburger 0×0 — beklenen." }],
      interactionNote: "Log in / locale tıklanmadı.",
      capture: { url: HOME, viewports: ["375", "768"], mode: "viewport", method: "interaction-steps", updatedAt: "", prepareClick: "summary.header__icon--menu" },
    },
  },
  {
    sayfa: "home",
    file: "global-cart-drawer.json",
    data: {
      ...baseObs({
        schemaId: "global-cart-drawer",
        sayfa: "home",
        url: HOME,
        selector: "#CartDrawer",
        notlar: "cart-drawer. Opener #cart-icon-bubble.",
        file: "global-cart-drawer.json",
      }),
      captureMode: "viewport",
      prepareClick: "#cart-icon-bubble",
      interactionStates: ["initial", "filled", "changed"],
      interactionSteps: [
        { state: "initial", action: "goto", value: HOME, capture: false },
        { state: "initial", action: "waitFor", value: 3500, capture: false },
        { state: "initial", action: "click", selector: "#cart-icon-bubble, a.header__icon--cart", capture: true, captureMode: "viewport", etiket: "cart-bos", not: "Boş drawer." },
        { state: "filled", action: "goto", value: PDP, capture: false },
        { state: "filled", action: "waitFor", value: 4000, capture: false },
        { state: "filled", action: "addToCart", selector: "#ProductSubmitButton-template--23698074927414__main, button[name='add']", capture: false },
        { state: "filled", action: "waitFor", value: 1800, capture: true, captureMode: "viewport", etiket: "sepete-eklendi", not: "Floral Leaf Clay Drop Earrings $22 ATC." },
        { state: "changed", action: "click", selector: "#CartDrawer button[name='plus']", capture: false },
        { state: "changed", action: "waitFor", value: 1500, capture: true, captureMode: "viewport", etiket: "adet-artti", not: "qty 1→2." },
      ],
      stateFindings: {
        initial: "Your cart is empty. CONTINUE SHOPPING.",
        filled: "Floral Leaf Clay Drop Earrings qty 1 $22.00. CHECK OUT + View Cart.",
        changed: "qty 2; Estimated total $44.00 USD.",
      },
      missingStates: [],
      interactionNote: "ATC UI. Checkout tıklanmadı.",
      capture: { url: HOME, viewports: ["375", "768", "1440"], mode: "viewport", method: "interaction-steps", updatedAt: "", prepareClick: "#cart-icon-bubble" },
    },
  },
  {
    sayfa: "home",
    file: "product-showcase-grid-featured.json",
    data: {
      ...baseObs({
        schemaId: "product-showcase-grid-featured",
        sayfa: "home",
        url: HOME,
        selector: "#shopify-section-template--23698074665270__featured_collection",
        notlar: "New Collection. Quick-add ADD TO CART / CHOOSE OPTIONS.",
        file: "product-showcase-grid-featured.json",
      }),
      interactionStates: ["initial", "hover"],
      interactionSteps: [
        { state: "initial", action: "goto", value: HOME, capture: false },
        { state: "initial", action: "waitFor", value: 2500, capture: false },
        { state: "initial", action: "scrollTo", selector: "#shopify-section-template--23698074665270__featured_collection", capture: true, etiket: "ilk-kartlar", not: "New Collection grid." },
        { state: "hover", action: "hover", selector: "#Slide-template--23698074665270__featured_collection-1", capture: true, etiket: "hover-ikinci-gorsel", not: "İlk kart hover — 2. görsel + ATC." },
      ],
      stateFindings: {
        initial: "New Collection. 3d Printed Bracelet / Floral Leaf / Rainbow / Polka Dot kartları.",
        hover: "İlk kart: ADD TO CART + ikinci görsel swap.",
      },
      missingStates: [],
      interactionNote: "Quick-add görünür; QV yok.",
      capture: { url: HOME, viewports: ["375", "768", "1440"], mode: "section", method: "interaction-steps", updatedAt: "" },
    },
  },
  {
    sayfa: "home",
    file: "faq-collapsible-tabs.json",
    data: {
      ...baseObs({
        schemaId: "faq-collapsible-tabs",
        sayfa: "home",
        url: HOME,
        selector: "#shopify-section-template--23698074665270__fe3efae2-131f-4aca-bdc0-0dc718364dda",
        notlar: "Frequently Asked Questions — accordion home.",
        file: "faq-collapsible-tabs.json",
      }),
      interactionStates: ["initial", "changed"],
      interactionSteps: [
        { state: "initial", action: "goto", value: HOME, capture: false },
        { state: "initial", action: "waitFor", value: 2500, capture: false },
        { state: "initial", action: "scrollTo", selector: "#shopify-section-template--23698074665270__fe3efae2-131f-4aca-bdc0-0dc718364dda", capture: true, etiket: "accordion-kapali", not: "Tüm sorular kapalı." },
        { state: "changed", action: "click", selector: "#shopify-section-template--23698074665270__fe3efae2-131f-4aca-bdc0-0dc718364dda details > summary", capture: true, etiket: "ilk-soru-acik", not: "İlk FAQ sorusu açık." },
      ],
      stateFindings: {
        initial: "Are your jewelry hypoallergenic? / How durable… kapalı (+).",
        changed: "İlk soru açık (−) — cevap metni görünür.",
      },
      missingStates: [],
      interactionNote: "İlk details summary tık.",
      capture: { url: HOME, viewports: ["375", "768", "1440"], mode: "section", method: "interaction-steps", updatedAt: "" },
    },
  },
  {
    sayfa: "collection",
    file: "product-showcase-grid-plp.json",
    data: {
      ...baseObs({
        schemaId: "product-showcase-grid-plp",
        sayfa: "collection",
        url: PLP,
        selector: "#shopify-section-template--23698074632502__product-grid",
        notlar: "Filter: Color / Size / Availability / Price. Sort Featured.",
        file: "product-showcase-grid-plp.json",
      }),
      interactionStates: ["initial", "open", "changed"],
      interactionSteps: [
        { state: "initial", action: "goto", value: PLP, capture: false },
        { state: "initial", action: "waitFor", value: 3000, capture: false },
        { state: "initial", action: "scrollTo", selector: "#shopify-section-template--23698074632502__product-grid", capture: true, etiket: "filtre-kapali", not: "Filtreler kapalı." },
        { state: "open", action: "click", selector: "[id='Details-filter.v.availability-template--23698074632502__product-grid'] > summary", viewports: ["1440"], capture: true, etiket: "availability-acik", not: "1440 Availability panel." },
        { state: "changed", action: "click", selector: "#Filter-filter.v.availability-1", viewports: ["1440"], capture: true, etiket: "availability-secildi", not: "In stock checkbox." },
      ],
      stateFindings: {
        initial: "Filter: Color / Size / Availability / Price. Sort Featured.",
        open: "Availability: In stock / Out of stock.",
        changed: "Chip Availability: In stock.",
      },
      missingStates: [{ state: "open", sebep: "375/768 mobil filter drawer çekilmedi." }],
      interactionNote: "1440 desktop facet. Wishlist tıklanmadı.",
      capture: { url: PLP, viewports: ["375", "768", "1440"], mode: "section", method: "interaction-steps", updatedAt: "" },
    },
  },
  {
    sayfa: "product-detail",
    file: "product-info-main.json",
    data: {
      ...baseObs({
        schemaId: "product-info-main",
        sayfa: "product-detail",
        url: PDP,
        selector: "#shopify-section-template--23698074927414__main",
        notlar: "Floral Leaf Clay Drop Earrings. Galeri + ADD TO CART. Varyant yok.",
        file: "product-info-main.json",
      }),
      interactionStates: ["initial", "changed"],
      interactionSteps: [
        { state: "initial", action: "goto", value: PDP, capture: false },
        { state: "initial", action: "waitFor", value: 3000, capture: false },
        { state: "initial", action: "scrollTo", selector: "#shopify-section-template--23698074927414__main", capture: true, etiket: "accordion-kapali", not: "Materials kapalı." },
        { state: "changed", action: "click", selector: "#Details-collapsible-row-0-template--23698074927414__main > summary", capture: true, etiket: "materials-acik", not: "Materials accordion açık." },
      ],
      stateFindings: {
        initial: "Floral Leaf Clay Drop Earrings $22.00 Sale. ADD TO CART. Materials kapalı.",
        changed: "Materials açık — placeholder metin. Varyant UI yok.",
      },
      missingStates: [{ state: "changed", sebep: "Varyant swatch yok — accordion only." }],
      interactionNote: "Buy it now tıklanmadı.",
      capture: { url: PDP, viewports: ["375", "768", "1440"], mode: "section", method: "interaction-steps", updatedAt: "" },
    },
  },
  {
    sayfa: "cart",
    file: "cart-page-main.json",
    data: {
      ...baseObs({
        schemaId: "cart-page-main",
        sayfa: "cart",
        url: CART,
        selector: "#shopify-section-template--23698074599734__cart-items",
        notlar: "Cart page — empty + filled + qty.",
        file: "cart-page-main.json",
      }),
      interactionStates: ["initial", "filled", "changed"],
      interactionSteps: [
        { state: "initial", action: "goto", value: CART, capture: false },
        { state: "initial", action: "waitFor", value: 3000, capture: false },
        { state: "initial", action: "scrollTo", selector: "#shopify-section-template--23698074599734__cart-items", capture: true, etiket: "cart-bos", not: "Boş sepet." },
        { state: "filled", action: "goto", value: PDP, capture: false },
        { state: "filled", action: "waitFor", value: 3000, capture: false },
        { state: "filled", action: "addToCart", selector: "#ProductSubmitButton-template--23698074927414__main", capture: false },
        { state: "filled", action: "goto", value: CART, capture: false },
        { state: "filled", action: "waitFor", value: 3000, capture: false },
        { state: "filled", action: "scrollTo", selector: "#shopify-section-template--23698074599734__cart-items", capture: true, etiket: "cart-dolu", not: "1 ürün $22." },
        { state: "changed", action: "click", selector: "#shopify-section-template--23698074599734__cart-items button[name='plus']", capture: false },
        { state: "changed", action: "waitFor", value: 1500, capture: false },
        { state: "changed", action: "scrollTo", selector: "#shopify-section-template--23698074599734__cart-items", capture: true, etiket: "adet-artti", not: "qty 2." },
      ],
      stateFindings: {
        initial: "Your cart is empty. CONTINUE SHOPPING.",
        filled: "Floral Leaf Clay Drop Earrings qty 1 $22.00. Estimated total.",
        changed: "qty 2; total $44.00.",
      },
      missingStates: [],
      interactionNote: "Checkout tıklanmadı.",
      capture: { url: CART, viewports: ["375", "768", "1440"], mode: "section", method: "interaction-steps", updatedAt: "" },
    },
  },
  {
    sayfa: "faq-support",
    file: "faq-collapsible-tabs.json",
    data: {
      ...baseObs({
        schemaId: "faq-collapsible-tabs",
        sayfa: "faq-support",
        url: FAQ,
        selector: "#shopify-section-template--23698074796342__29680075-200c-4000-9de0-3df91944cabe",
        notlar: "Frequently asked question — dedicated FAQ page accordion.",
        file: "faq-collapsible-tabs.json",
      }),
      interactionStates: ["initial", "changed"],
      interactionSteps: [
        { state: "initial", action: "goto", value: FAQ, capture: false },
        { state: "initial", action: "waitFor", value: 2500, capture: false },
        { state: "initial", action: "scrollTo", selector: "#shopify-section-template--23698074796342__29680075-200c-4000-9de0-3df91944cabe", capture: true, etiket: "accordion-kapali", not: "Kapalı." },
        { state: "changed", action: "click", selector: "#shopify-section-template--23698074796342__29680075-200c-4000-9de0-3df91944cabe details > summary", capture: true, etiket: "ilk-soru-acik", not: "İlk soru açık." },
      ],
      stateFindings: {
        initial: "FAQ soruları kapalı.",
        changed: "İlk soru açık — cevap görünür.",
      },
      missingStates: [],
      interactionNote: "",
      capture: { url: FAQ, viewports: ["375", "768", "1440"], mode: "section", method: "interaction-steps", updatedAt: "" },
    },
  },
];

const written = [];

for (const [sayfa, file, data] of staticObs) {
  written.push(writeObs(sayfa, file, data));
}

for (const { sayfa, file, data } of interactObs) {
  written.push(writeObs(sayfa, file, data));
}

console.log(`Wrote ${written.length} observation files.`);

function runCapture(obsFile, useInteraction = false) {
  const script = useInteraction ? "capture-interaction.mjs" : "capture-observation.mjs";
  const r = spawnSync("node", [path.join(__dirname, script), obsFile], {
    cwd: __dirname,
    stdio: "inherit",
    env: { ...process.env },
  });
  return r.status === 0;
}

let ok = 0;
let fail = 0;

for (const [sayfa, file] of staticObs) {
  const p = obsPath(sayfa, file);
  process.stdout.write(`static ${file}... `);
  if (runCapture(p, false)) {
    console.log("ok");
    ok++;
  } else {
    console.log("FAIL");
    fail++;
  }
}

for (const { sayfa, file } of interactObs) {
  const p = obsPath(sayfa, file);
  process.stdout.write(`interact ${file}... `);
  if (runCapture(p, true)) {
    console.log("ok");
    ok++;
  } else {
    console.log("FAIL");
    fail++;
  }
}

console.log(`\nDone: ${ok} ok, ${fail} fail, ${written.length} total.`);
