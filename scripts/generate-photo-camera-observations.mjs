#!/usr/bin/env node
/**
 * One-shot generator for Photo Camera (Speedo) first-inventory observations.
 * Run from repo root: node scripts/generate-photo-camera-observations.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const obsRoot = path.join(root, "observations/photo-camera/default");

const BASE = "https://photography-online-store.myshopify.com/";
const PDP =
  "https://photography-online-store.myshopify.com/products/melcam-hd-digital-camera";
const PLP =
  "https://photography-online-store.myshopify.com/collections/accessories";
const COLLECTIONS =
  "https://photography-online-store.myshopify.com/collections";
const SEARCH =
  "https://photography-online-store.myshopify.com/search?q=camera";
const CART = "https://photography-online-store.myshopify.com/cart";
const ABOUT = "https://photography-online-store.myshopify.com/pages/about-us";
const STORY = "https://photography-online-store.myshopify.com/pages/our-story";
const CONTACT = "https://photography-online-store.myshopify.com/pages/contact";
const FAQ = "https://photography-online-store.myshopify.com/pages/faq";
const BLOG = "https://photography-online-store.myshopify.com/blogs/news";
const BLOG_POST =
  "https://photography-online-store.myshopify.com/blogs/news/lights-camera-feast-behind-the-scenes-of-a-food-video-shoot";
const NOT_FOUND =
  "https://photography-online-store.myshopify.com/pages/this-page-does-not-exist-xyz-404";

const DELTA =
  "Shopify.theme.name Photo-camera-v-1-5-0-latest-updates-new · schema_name Photo camera · schema_version 1.5.0 · theme_store_id null · role main · id 168518320375 · shop photography-online-store.myshopify.com · Speedo Themes third-party (Theme Store official değil). storefrontPassword=1 (speedothemes.com product page).";

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
  extra = {},
}) {
  const slug = evidenceSlug || schemaId;
  const fileName = observationSuffix
    ? `${schemaId}-${observationSuffix}.json`
    : `${schemaId}.json`;
  const obsId = observationSuffix
    ? `photo-camera.default.${sayfa}.${schemaId}.${observationSuffix}`
    : `photo-camera.default.${sayfa}.${schemaId}`;
  const o = {
    observationId: obsId,
    schemaId,
    kaynak: "photo-camera",
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
      mode: interaction?.captureMode || "section",
      method: interaction ? "interaction-steps" : "margin-box+minPad8",
      updatedAt: "",
    },
    ...extra,
  };
  if (interaction) Object.assign(o, interaction);
  return { fileName, dir: path.join(obsRoot, sayfa), data: o };
}

const items = [
  obs({
    sayfa: "home",
    schemaId: "promo-announcement-bar",
    url: BASE,
    selector:
      "#shopify-section-sections--23754394370295__announcement_bar_fHNTbB",
    notlar:
      "FREE SHIPPING | 100-DAY EASY RETURNS + FREE SHIPPING ON ORDERS OVER £75. announcement-bar header-group.",
  }),
  obs({
    sayfa: "home",
    schemaId: "navigation-header-mega",
    url: BASE,
    selector: "#shopify-section-sections--23754394370295__header",
    notlar:
      "header. SHOP mega (#Details-HeaderMenu-1) / BESTSELLER / THEMES / SHOP BY / COLLECTIONS. Wishlist 0 · Compare 0 · Log in · locale/currency · search · cart. Hamburger tablet breakpoint (1440 0×0).",
    extra: { captureMode: "viewport" },
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
          action: "hover",
          selector: "#Details-HeaderMenu-1 > summary",
          viewports: ["1440"],
          capture: false,
          not: "SHOP summary hover — tıklanmadı (sayfa kaçış).",
        },
        {
          state: "open",
          action: "forceOpen",
          selector: "#Details-HeaderMenu-1",
          viewports: ["1440"],
          capture: true,
          captureMode: "viewport",
          etiket: "shop-mega",
          not: "SHOP mega panel",
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
    selector: "#shopify-section-template--23754393583863__slideshow_FnJ9xJ",
    notlar:
      "Hi. I am a photographer. I capture Life. slideshow_FnJ9xJ.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-rich-text",
    url: BASE,
    selector: "#shopify-section-template--23754393583863__rich_text_Tzzgah",
    notlar:
      "Tek paragraf: Tips for staying cool and comfortable while maintaining style in hot weather. (demo kopya sapması — kamera değil).",
    deltaExtra: "rich_text_Tzzgah tek satır; CTA yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "collection-nav-image-cards",
    url: BASE,
    selector:
      "#shopify-section-template--23754393583863__07468762-302d-4441-92a3-3b98a30b4cbe",
    notlar:
      "Shop By Categories — 4 kart: Photography / Videography / Portrait / Commercial.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-image-with-text",
    url: BASE,
    selector:
      "#shopify-section-template--23754393583863__image_with_text_kcFg43",
    notlar: "About Us — görsel + iki paragraf lorem + READ MORE.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    url: BASE,
    selector:
      "#shopify-section-template--23754393583863__0617c2f2-69ec-4df8-a506-b2616d4e1db4",
    notlar:
      "Best Selling featured collection. Add To Cart + Quick Shop. Thamronz Jdoel Cam M-12 $699.99→$399.99.",
    extra: { captureMode: "section" },
    interaction: {
      interactionStates: ["initial", "hover"],
      interactionSteps: [
        { state: "initial", action: "goto", value: BASE, capture: false },
        { state: "initial", action: "waitFor", value: 2000, capture: false },
        {
          state: "initial",
          action: "scrollTo",
          selector:
            "#shopify-section-template--23754393583863__0617c2f2-69ec-4df8-a506-b2616d4e1db4",
          capture: true,
          etiket: "ilk-hal",
          not: "Best Selling grid",
        },
        {
          state: "hover",
          action: "hover",
          selector:
            "#shopify-section-template--23754393583863__0617c2f2-69ec-4df8-a506-b2616d4e1db4 .card-wrapper, #shopify-section-template--23754393583863__0617c2f2-69ec-4df8-a506-b2616d4e1db4 .card",
          viewports: ["1440"],
          capture: true,
          etiket: "kart-hover",
          not: "Quick Shop / ikinci görsel",
        },
      ],
      stateFindings: {},
      missingStates: [],
      interactionNote: "",
    },
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-image-with-text",
    url: BASE,
    selector:
      "#shopify-section-template--23754393583863__image_with_text_UVtfNe",
    notlar:
      "DISCOVER NEW EXPERIENCES / Capture Every Second + progress: Build Quality 90% · Lens Kit 79% · Camera Strap 84% + READ MORE.",
    observationSuffix: "2",
    evidenceSlug: "editorial-image-with-text-2",
    deltaExtra: "image_with_text + yüzde barları; ayrı şema yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "media-scrolling-gallery",
    url: BASE,
    selector:
      "#shopify-section-template--23754393583863__video_slider_admkce",
    notlar:
      "video_slider — 4 poster “Load video”, başlık yok. Yatay video şeridi.",
    deltaExtra: "video_slider_admkce → media-scrolling-gallery (metin yok).",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    url: BASE,
    selector:
      "#shopify-section-template--23754393583863__featured_collection_iyjTqX",
    notlar:
      "New Product ikinci featured collection. Camera Spotlight Stage Lighting $180 · Gimbal Rōnin (New rozet).",
    observationSuffix: "2",
    evidenceSlug: "product-showcase-grid-featured-2",
  }),
  obs({
    sayfa: "home",
    schemaId: "testimonial-quote-carousel",
    url: BASE,
    selector:
      "#shopify-section-template--23754393583863__testimonial_d6pHJf",
    notlar:
      "Happy Customers — Jersey J. USA / Allen L. USA. “Best Online Camera Site”.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-featured",
    url: BASE,
    selector:
      "#shopify-section-template--23754393583863__featured_product_N9pBJT",
    notlar:
      "Camera Rangefinder Camera $699.99→$399.99 · NEW · Hurry up! Sales End In countdown · galeri + buy box.",
    deltaExtra: "featured_product + countdown; ATC bu blokta.",
  }),
  obs({
    sayfa: "home",
    schemaId: "blog-list-main",
    url: BASE,
    selector:
      "#shopify-section-template--23754393583863__588ae6a9-e23f-4b45-83e9-2723eeb61871",
    notlar:
      "Latest Blog — 3 kart: Lights Camera Feast / Communication Benefits / Through the Lens. May 8, 2025.",
  }),
  obs({
    sayfa: "home",
    schemaId: "trust-icon-row",
    url: BASE,
    selector:
      "#shopify-section-template--23754393583863__service_icon_cRV7DD",
    notlar:
      "4 ikon: FREE SHIPPING / 90 DAYS RETURN / SECURE PAYMENTS / 24/7 SUPPORT.",
  }),
  obs({
    sayfa: "home",
    schemaId: "footer-columns-newsletter",
    url: BASE,
    selector: "#shopify-section-sections--23754394337527__footer",
    notlar:
      "Newsletter JOIN NOW + Email SUBSCRIBE (submit yok) · sosyal · QUICK LINKS. Ödeme ikonları.",
  }),
  obs({
    sayfa: "home",
    schemaId: "global-menu-drawer",
    url: BASE,
    selector: "#menu-drawer",
    extra: {
      captureMode: "viewport",
      prepareClick: "#Details-menu-drawer-container > summary",
    },
    notlar:
      "details#Details-menu-drawer-container. SHOP / BESTSELLER / THEMES / SHOP BY / COLLECTIONS / Wishlist / Compare / Log in. 1440 hamburger 0×0.",
    interaction: {
      captureMode: "viewport",
      prepareClick: "#Details-menu-drawer-container > summary",
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
          viewports: ["375", "768"],
        },
        {
          state: "open",
          action: "click",
          selector: "#Details-menu-drawer-container > summary",
          viewports: ["375", "768"],
          capture: true,
          captureMode: "viewport",
          etiket: "menu-acik",
          not: "Hamburger drawer",
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
    selector: "predictive-search, details:has(#Search-In-Modal)",
    extra: {
      captureMode: "viewport",
      prepareClick: "summary.header__icon--search",
    },
    notlar:
      "1440 inline predictive-search ~215×32. 375/768 summary.header__icon--search → #Search-In-Modal. katalogSorgu camera.",
    interaction: {
      captureMode: "viewport",
      interactionStates: ["initial", "open", "input"],
      interactionSteps: [
        { state: "initial", action: "goto", value: BASE, capture: false },
        { state: "initial", action: "waitFor", value: 2500, capture: false },
        {
          state: "open",
          action: "click",
          selector: "summary.header__icon--search",
          viewports: ["375", "768"],
          capture: false,
        },
        {
          state: "open",
          action: "forceOpen",
          selector: "details:has(#Search-In-Modal)",
          viewports: ["375", "768"],
          capture: true,
          captureMode: "viewport",
          etiket: "modal-bos",
          not: "Mobil arama modal boş",
        },
        {
          state: "open",
          action: "click",
          selector: "predictive-search input, #Search-In-Template",
          viewports: ["1440"],
          capture: true,
          captureMode: "viewport",
          etiket: "inline-bos",
          not: "1440 inline arama kutusu",
        },
        {
          state: "input",
          action: "fill",
          selector: "#Search-In-Modal, predictive-search input[type='search'], #Search-In-Template",
          value: "camera",
          capture: true,
          captureMode: "viewport",
          etiket: "camera-sonuc",
          not: "camera yazılı öneri / ürün",
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
    extra: {
      captureMode: "viewport",
      prepareClick: "#cart-icon-bubble",
    },
    notlar: "#CartDrawer cart-drawer shipping. Opener #cart-icon-bubble. Boş / dolu / qty.",
    interaction: {
      captureMode: "viewport",
      prepareClick: "#cart-icon-bubble",
      interactionStates: ["initial", "filled", "changed"],
      interactionSteps: [
        { state: "initial", action: "goto", value: BASE, capture: false },
        { state: "initial", action: "waitFor", value: 2500, capture: false },
        {
          state: "initial",
          action: "click",
          selector: "#cart-icon-bubble",
          capture: false,
        },
        {
          state: "initial",
          action: "forceOpen",
          selector: "#CartDrawer",
          capture: true,
          captureMode: "viewport",
          etiket: "bos",
          not: "Boş cart drawer",
        },
        {
          state: "filled",
          action: "goto",
          value: PDP,
          capture: false,
        },
        { state: "filled", action: "waitFor", value: 2500, capture: false },
        {
          state: "filled",
          action: "addToCart",
          selector:
            "form[action*='/cart/add'] button[name='add'], button[name='add']",
          capture: false,
          not: "Melcam HD ATC",
        },
        { state: "filled", action: "waitFor", value: 2000, capture: false },
        {
          state: "filled",
          action: "click",
          selector: "#cart-icon-bubble",
          capture: true,
          captureMode: "viewport",
          etiket: "sepete-eklendi",
          not: "Melcam satır",
        },
        {
          state: "changed",
          action: "click",
          selector:
            "#CartDrawer button[name='plus'], #CartDrawer .quantity__button[name='plus']",
          capture: true,
          captureMode: "viewport",
          etiket: "adet-artti",
          not: "qty 1 → 2",
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
    selector: "#shopify-section-template--23754394108151__main",
    notlar:
      "Melcam HD Digital Camera. Color Black / Powder Blue / Pale Pink swatch. Fast Shipping / 24/7 / 30 days return. ATC + qty.",
    interaction: {
      interactionStates: ["initial", "changed"],
      interactionSteps: [
        {
          state: "initial",
          action: "goto",
          value: PDP,
          capture: true,
          etiket: "renk-black",
          not: "Color Black",
        },
        {
          state: "changed",
          action: "click",
          selector: "label[for='template--23754394108151__main-1-1']",
          value: 2000,
          capture: true,
          etiket: "renk-powder-blue",
          not: "Black → Powder Blue",
        },
      ],
      stateFindings: {},
      missingStates: [],
      interactionNote: "",
    },
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-tabs",
    url: PDP,
    selector:
      "#shopify-section-template--23754394108151__79582f51-5736-4bff-b870-bba69393ad36",
    notlar:
      "Description / Additional Information / Shipping And Delivery. Lexar-kopya metin (demo sapması) + Melcam context.",
    interaction: {
      interactionStates: ["initial", "changed"],
      interactionSteps: [
        { state: "initial", action: "goto", value: PDP, capture: false },
        {
          state: "initial",
          action: "scrollTo",
          selector:
            "#shopify-section-template--23754394108151__79582f51-5736-4bff-b870-bba69393ad36",
          capture: true,
          etiket: "description",
          not: "Description tab",
        },
        {
          state: "changed",
          action: "click",
          selector:
            "#shopify-section-template--23754394108151__79582f51-5736-4bff-b870-bba69393ad36 [role='tab']:nth-of-type(2), #shopify-section-template--23754394108151__79582f51-5736-4bff-b870-bba69393ad36 .tab-link:nth-of-type(2), #shopify-section-template--23754394108151__79582f51-5736-4bff-b870-bba69393ad36 a:has-text('Additional Information')",
          capture: true,
          etiket: "additional",
          not: "Additional Information tab",
        },
      ],
      stateFindings: {},
      missingStates: [],
      interactionNote: "",
    },
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "media-video-hero",
    url: PDP,
    selector: "#shopify-section-template--23754394108151__video_NWBDjf",
    notlar:
      "New Arrival / Our Latest Collection / There are many variations of passages of Lorem Ipsum available.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "features-multicolumn",
    url: PDP,
    selector:
      "#shopify-section-template--23754394108151__multicolumn_6NRgBE",
    notlar:
      "Made with Love / Innovation & Safe / Eco Friendly — giyim kopyası (demo sapması).",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "editorial-image-with-text",
    url: PDP,
    selector: "#shopify-section-template--23754394108151__multirow_nmyQVH",
    notlar:
      "multirow: LATEST Capture Your Moments + TRENDING Achieve Your Visual Goals. İki IWT satırı tek section.",
    deltaExtra: "multirow_nmyQVH → tek IWT observation.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "trust-icon-row",
    url: PDP,
    selector:
      "#shopify-section-template--23754394108151__service_icon_yLrPgn",
    notlar:
      "FREE SHIPPING / SUPPORT 24/7 / 100% MONEY BACK / SECURE PAYMENTS.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-grid-banner",
    url: PDP,
    selector: "#shopify-section-template--23754394108151__sub_banner_tFp34M",
    notlar:
      "2 kart: 40% Discount Capturing Your Vision SHOP NOW · 30% Discount Your Special Moments SHOP NOW.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "faq-collapsible-tabs",
    url: PDP,
    selector:
      "#shopify-section-template--23754394108151__collapsible_content_Qy7PY9",
    notlar:
      "Faq — How Do I Place An Order? / Shipping / Return / Exchange / Size.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-scrolling-marquee",
    url: PDP,
    selector:
      "#shopify-section-template--23754394108151__custom_announcement_bar_kBrkhh",
    notlar:
      "custom_announcement_bar kayan: Free Shipping £75 / 10% Off / Returns 60 Days / Sale 20% Speedo / Email 20%.",
  }),

  // PLP
  obs({
    sayfa: "collection",
    schemaId: "collection-banner",
    url: PLP,
    selector: "#shopify-section-template--23754393321719__banner",
    notlar: "Collection: Accessories — banner-style başlık.",
  }),
  obs({
    sayfa: "collection",
    schemaId: "collection-nav-slider",
    url: PLP,
    selector:
      "#shopify-section-template--23754393321719__collection_slider_Rtpikm",
    notlar:
      "Koleksiyon şeridi: Photography / Wedding / Commercial / Product / Travel / Videography / Macro / Accessories.",
  }),
  obs({
    sayfa: "collection",
    schemaId: "product-showcase-grid-plp",
    url: PLP,
    selector: "#shopify-section-template--23754393321719__product-grid",
    notlar:
      "Accessories PLP. Filters Color (Black 7 / Blue 1) · Size · Availability · Price. Breadcrumb Home Accessories.",
    interaction: {
      interactionStates: ["initial", "changed"],
      interactionSteps: [
        {
          state: "initial",
          action: "goto",
          value: PLP,
          capture: true,
          etiket: "filtre-kapali",
          not: "Filtre paneli + grid",
        },
        {
          state: "changed",
          action: "click",
          selector:
            "#shopify-section-template--23754393321719__product-grid label:has-text('Black'), #Facet-1-template--23754393321719__product-grid input[value='Black'] + label",
          capture: true,
          etiket: "filtre-black",
          not: "Color Black",
        },
      ],
      stateFindings: {},
      missingStates: [],
      interactionNote: "",
    },
  }),

  obs({
    sayfa: "collections",
    schemaId: "collection-nav-grid",
    url: COLLECTIONS,
    selector: "#shopify-section-template--23754393616631__main",
    notlar:
      "COLLECTIONS ızgara: Accessories / Best Seller / Collection layout 1–3 / Commercial / Macro Photography…",
  }),

  obs({
    sayfa: "search",
    schemaId: "search-results",
    url: SEARCH,
    selector: "#shopify-section-template--23754394304759__main",
    notlar:
      "Search: 20 results for camera. Filters Color / Size / Availability / Price · Relevance.",
  }),

  obs({
    sayfa: "cart",
    schemaId: "cart-page-main",
    url: CART,
    selector: "#shopify-section-template--23754393190647__cart-items",
    notlar:
      "Boş: Your cart is empty · Continue Shopping · Log in to check out faster. cart-footer sibling h=0.",
    interaction: {
      interactionStates: ["initial", "filled", "changed"],
      interactionSteps: [
        {
          state: "initial",
          action: "goto",
          value: CART,
          capture: true,
          etiket: "bos",
          not: "Boş sepet sayfası",
        },
        { state: "filled", action: "goto", value: PDP, capture: false },
        { state: "filled", action: "waitFor", value: 2500, capture: false },
        {
          state: "filled",
          action: "addToCart",
          selector:
            "form[action*='/cart/add'] button[name='add'], button[name='add']",
          capture: false,
        },
        {
          state: "filled",
          action: "goto",
          value: CART,
          capture: true,
          etiket: "dolu",
          not: "Melcam satır + toplam",
        },
        {
          state: "changed",
          action: "click",
          selector:
            "button[name='plus'], .quantity__button[name='plus']",
          capture: true,
          etiket: "adet-artti",
          not: "qty 1 → 2",
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
    schemaId: "editorial-image-with-text-overlay",
    url: ABOUT,
    selector: "#shopify-section-template--23816947695863__parallax_fBdrLP",
    notlar: "About Us parallax başlık bandı.",
    deltaExtra: "parallax_fBdrLP page header.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    url: ABOUT,
    selector:
      "#shopify-section-template--23816947695863__image_with_text_cQDErX",
    notlar: "About Me! — görsel + lorem + View More.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    url: ABOUT,
    selector:
      "#shopify-section-template--23816947695863__multicolumn_E97mAP",
    notlar:
      "Made with Love / Innovation & Safe / Eco Friendly — giyim kopyası.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    url: ABOUT,
    selector:
      "#shopify-section-template--23816947695863__image_with_icons_nbKxxL",
    notlar:
      "Photo Camera Work and Quality — Material / Design / Quality + lorem.",
    observationSuffix: "2",
    evidenceSlug: "editorial-image-with-text-2",
    deltaExtra: "image_with_icons → IWT.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text-overlay",
    url: ABOUT,
    selector:
      "#shopify-section-template--23816947695863__image_banner_WawtrM",
    notlar: "Finding Unique Camera + lorem overlay banner.",
    observationSuffix: "2",
    evidenceSlug: "editorial-image-with-text-overlay-2",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    url: ABOUT,
    selector:
      "#shopify-section-template--23816947695863__meet_the_team_whN8LK",
    notlar: "Our Team — Evelyn Fashion Designer + sosyal ikonlar.",
    observationSuffix: "2",
    evidenceSlug: "features-multicolumn-2",
    deltaExtra: "meet_the_team → features-multicolumn (takım kartları).",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "social-proof-brand-logos",
    url: ABOUT,
    selector:
      "#shopify-section-template--23816947695863__brand_logo_iCGMUK",
    notlar: "Marka logo şeridi (metin yok, görseller).",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "page-content-main",
    url: STORY,
    selector: "#shopify-section-template--23754393714935__main",
    notlar:
      "Our Story düz sayfa: Introduction / Philosophy / Team / Commitment placeholder metin.",
  }),

  // Contact
  obs({
    sayfa: "contact",
    schemaId: "editorial-rich-text",
    url: CONTACT,
    selector:
      "#shopify-section-template--23754393878775__rich_text_NHb3xF",
    notlar: "Contact Us başlık bandı.",
  }),
  obs({
    sayfa: "contact",
    schemaId: "lead-capture-form",
    url: CONTACT,
    selector:
      "#shopify-section-template--23754393878775__contact_form_TQQ3Yn",
    notlar:
      "Name / Email * / Phone / Comment / Submit. Submit yoklandı değil (PII).",
  }),

  // FAQ
  obs({
    sayfa: "faq-support",
    schemaId: "editorial-image-with-text-overlay",
    url: FAQ,
    selector:
      "#shopify-section-template--23754393911543__parallax_MU48pr",
    notlar: "Faq's parallax başlık.",
    deltaExtra: "parallax page header.",
  }),
  obs({
    sayfa: "faq-support",
    schemaId: "faq-collapsible-tabs",
    url: FAQ,
    selector:
      "#shopify-section-template--23754393911543__cb435de1-8958-455d-8843-8a9ef3413466",
    notlar:
      "Frequently asked question. Q1 default açık. 6 soru (giyim kopyası).",
    interaction: {
      interactionStates: ["initial", "changed"],
      interactionSteps: [
        { state: "initial", action: "goto", value: FAQ, capture: false },
        {
          state: "initial",
          action: "scrollTo",
          selector:
            "#shopify-section-template--23754393911543__cb435de1-8958-455d-8843-8a9ef3413466",
          capture: true,
          etiket: "q1-acik",
          not: "Q1 default açık",
        },
        {
          state: "changed",
          action: "click",
          selector:
            "details[id*='collapsible_row-2-template--23754393911543'] > summary",
          value: 1200,
          capture: true,
          etiket: "q2-acik",
          not: "Q2 açık",
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
    selector: "#shopify-section-template--23754393157879__main",
    notlar:
      "News listesi: Lights Camera Feast / Communication Benefits / Through the Lens + READ MORE.",
  }),
  obs({
    sayfa: "blog-post",
    schemaId: "blog-post-main",
    url: BLOG_POST,
    selector: "#shopify-section-template--23754393125111__main",
    notlar:
      "Lights, Camera, Feast! Behind the Scenes — MAY 8, 2025 · Share · food-video editorial.",
  }),

  obs({
    sayfa: "not-found",
    schemaId: "page-content-main",
    url: NOT_FOUND,
    selector: "#shopify-section-template--23754393092343__main",
    notlar:
      "404 Page not found · We’re sorry something has gone wrong · Back To Homepage · Continue Shopping.",
  }),
];

for (const { fileName, dir, data } of items) {
  fs.mkdirSync(dir, { recursive: true });
  const dest = path.join(dir, fileName);
  fs.writeFileSync(dest, JSON.stringify(data, null, 2) + "\n");
  console.log("wrote", path.relative(root, dest));
}
console.log("total", items.length);
