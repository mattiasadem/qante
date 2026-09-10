/**
 * Add interactionSteps to Levitate observations after static 3vp.
 * Run after capture-observation batch. Does not invent schemas.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const BASE = "https://backpack-online-store-2.myshopify.com/";
const PDP = `${BASE}products/sports-charms-bogg-bag`;
const HOME = BASE;
const CART = `${BASE}cart`;
const FAQ = `${BASE}pages/faq`;
const PLP = `${BASE}collections/all`;

function load(rel) {
  const abs = path.join(root, rel);
  return { abs, obs: JSON.parse(fs.readFileSync(abs, "utf8")) };
}

function save(abs, obs) {
  fs.writeFileSync(abs, JSON.stringify(obs, null, 2) + "\n");
}

function patch(rel, fields) {
  const { abs, obs } = load(rel);
  Object.assign(obs, fields);
  save(abs, obs);
  console.log("patched", rel);
}

// Header mega 1440
patch("observations/levitate/default/home/navigation-header-mega.json", {
  captureMode: "viewport",
  interactionStates: ["initial", "open"],
  interactionSteps: [
    { state: "initial", action: "goto", value: HOME, capture: false },
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
      not: "SHOP summary — tıklama /collections'a gider",
    },
    {
      state: "open",
      action: "forceOpen",
      selector: "#Details-HeaderMenu-1",
      viewports: ["1440"],
      capture: true,
      captureMode: "section",
      captureSelector: "#MegaMenu-Content-1",
      etiket: "shop-mega",
      not: "SHOP mega koleksiyon kartları",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

// Predictive search
patch("observations/levitate/default/home/global-predictive-search.json", {
  captureMode: "section",
  prepareClick: "summary.header__icon--search",
  interactionStates: ["initial", "input"],
  interactionSteps: [
    { state: "initial", action: "goto", value: HOME, capture: false },
    { state: "initial", action: "waitFor", value: 2500, capture: false },
    {
      state: "initial",
      action: "click",
      selector: "summary.header__icon--search",
      capture: false,
    },
    {
      state: "initial",
      action: "forceOpen",
      selector: "details:has(#Search-In-Modal)",
      capture: true,
      captureMode: "section",
      captureSelector: ".search-modal",
      etiket: "modal-bos",
      not: "Boş Search çubuğu",
    },
    {
      state: "input",
      action: "fill",
      selector: "#Search-In-Modal",
      value: "ANDIBRO",
      capture: true,
      captureMode: "section",
      captureSelector: ".search-modal",
      etiket: "andibro",
      not: "katalogSorgu ANDIBRO — PRODUCTS",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "katalogSorgu=ANDIBRO (WOMAN LEATHER ANDIBRO CHERRY BAG). Storefront /search boş; predictive ürün döner.",
});

// Menu drawer
patch("observations/levitate/default/home/global-menu-drawer.json", {
  captureMode: "section",
  prepareClick: "#Details-menu-drawer-container > summary",
  interactionStates: ["open"],
  interactionSteps: [
    { state: "open", action: "goto", value: HOME, capture: false },
    { state: "open", action: "waitFor", value: 2500, capture: false },
    {
      state: "open",
      action: "click",
      selector: "#Details-menu-drawer-container > summary",
      viewports: ["375", "768"],
      capture: false,
    },
    {
      state: "open",
      action: "forceOpen",
      selector: "#Details-menu-drawer-container",
      viewports: ["375", "768"],
      capture: false,
    },
    {
      state: "open",
      action: "forceOpen",
      selector: "#menu-drawer",
      viewports: ["375", "768"],
      capture: true,
      captureMode: "section",
      captureSelector: "#menu-drawer",
      etiket: "hamburger",
      not: "Drawer açık — 1440 hamburger gizli",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

// Cart drawer
patch("observations/levitate/default/home/global-cart-drawer.json", {
  captureMode: "viewport",
  prepareClick: "#cart-icon-bubble",
  interactionStates: ["initial", "filled", "changed"],
  interactionSteps: [
    { state: "initial", action: "goto", value: HOME, capture: false },
    { state: "initial", action: "waitFor", value: 2500, capture: false },
    { state: "initial", action: "click", selector: "#cart-icon-bubble", capture: false },
    { state: "initial", action: "forceOpen", selector: "cart-drawer", capture: false },
    {
      state: "initial",
      action: "forceOpen",
      selector: "#CartDrawer",
      capture: true,
      captureMode: "section",
      captureSelector: "#CartDrawer",
      etiket: "bos",
      not: "Boş cart drawer",
    },
    { state: "filled", action: "goto", value: PDP, capture: false },
    { state: "filled", action: "waitFor", value: 2500, capture: false },
    {
      state: "filled",
      action: "addToCart",
      selector: "form[action*='/cart/add'] button[name='add'], button[name='add']",
      capture: false,
    },
    {
      state: "filled",
      action: "waitFor",
      value: 2000,
      capture: true,
      captureMode: "viewport",
      etiket: "sepete-eklendi",
      not: "BOGG satır",
    },
    {
      state: "changed",
      action: "click",
      selector: "#CartDrawer button[name='plus'], #CartDrawer .quantity__button[name='plus']",
      capture: true,
      captureMode: "viewport",
      etiket: "adet-artti",
      not: "qty 1 → 2",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

// Cart page
patch("observations/levitate/default/cart/cart-page-main.json", {
  interactionStates: ["initial", "filled", "changed"],
  interactionSteps: [
    { state: "initial", action: "goto", value: CART, capture: true, etiket: "bos", not: "Boş sepet sayfası" },
    { state: "filled", action: "goto", value: PDP, capture: false },
    { state: "filled", action: "waitFor", value: 2000, capture: false },
    {
      state: "filled",
      action: "addToCart",
      selector: "form[action*='/cart/add'] button[name='add'], button[name='add']",
      capture: false,
    },
    { state: "filled", action: "goto", value: CART, capture: false },
    { state: "filled", action: "waitFor", value: 1500, capture: true, etiket: "sepete-eklendi", not: "BOGG satır" },
    {
      state: "changed",
      action: "click",
      selector: "button[name='plus'], .quantity__button[name='plus']",
      capture: true,
      etiket: "adet-artti",
      not: "qty 1 → 2",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

// PDP variant
patch("observations/levitate/default/product-detail/product-info-main.json", {
  interactionStates: ["initial", "changed"],
  interactionSteps: [
    {
      state: "initial",
      action: "goto",
      value: PDP,
      capture: true,
      etiket: "grey-mare",
      not: "Color Grey Mare",
    },
    {
      state: "changed",
      action: "click",
      selector: "label[for='template--24569858916641__main-1-1']",
      value: 2000,
      capture: true,
      etiket: "pastel-grey",
      not: "Color Grey Mare → Pastel Grey",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

// PDP tabs
patch("observations/levitate/default/product-detail/product-info-tabs.json", {
  interactionStates: ["initial", "changed"],
  interactionSteps: [
    { state: "initial", action: "goto", value: PDP, capture: true, etiket: "description", not: "Description açık" },
    {
      state: "changed",
      action: "click",
      selector:
        "#shopify-section-template--24569858916641__79582f51-5736-4bff-b870-bba69393ad36 button:has-text('Additional Information'), #shopify-section-template--24569858916641__79582f51-5736-4bff-b870-bba69393ad36 [role='tab']:has-text('Additional')",
      value: 1500,
      capture: true,
      etiket: "additional",
      not: "Description → Additional Information",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

// Home tabs
patch("observations/levitate/default/home/product-showcase-tabs.json", {
  interactionStates: ["initial", "changed"],
  interactionSteps: [
    { state: "initial", action: "goto", value: HOME, capture: true, etiket: "women", not: "WOMEN sekmesi" },
    {
      state: "changed",
      action: "click",
      selector:
        "#shopify-section-template--24569858162977__featured_tab_dGXFqP button:has-text('MEN'), #shopify-section-template--24569858162977__featured_tab_dGXFqP [role='tab']:has-text('MEN')",
      value: 1500,
      capture: true,
      etiket: "men",
      not: "WOMEN → MEN kart seti",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

// Featured product color
patch("observations/levitate/default/home/product-showcase-featured.json", {
  interactionStates: ["initial", "changed"],
  interactionSteps: [
    { state: "initial", action: "goto", value: HOME, capture: true, etiket: "country-squire", not: "Color Country Squire" },
    {
      state: "changed",
      action: "click",
      selector: "label[for='template--24569858162977__featured_product_9tmLw3-1-1']",
      value: 1500,
      capture: true,
      etiket: "red",
      not: "Country Squire → Red",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

// FAQ page
patch("observations/levitate/default/faq-support/faq-collapsible-tabs.json", {
  interactionStates: ["initial", "changed"],
  interactionSteps: [
    { state: "initial", action: "goto", value: FAQ, capture: true, etiket: "ilk-soru", not: "İlk accordion hali" },
    {
      state: "changed",
      action: "click",
      selector:
        "#shopify-section-template--24569858588961__cb435de1-8958-455d-8843-8a9ef3413466 details:nth-of-type(2) summary, #shopify-section-template--24569858588961__cb435de1-8958-455d-8843-8a9ef3413466 .accordion__title",
      value: 1000,
      capture: true,
      etiket: "ikinci-soru",
      not: "İkinci soru aç",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

// PLP hover + filter
patch("observations/levitate/default/collection/product-showcase-grid-plp.json", {
  interactionStates: ["initial", "hover", "changed"],
  interactionSteps: [
    { state: "initial", action: "goto", value: PLP, capture: true, etiket: "grid", not: "18 ürün grid" },
    {
      state: "hover",
      action: "hover",
      selector: "#product-grid .card-wrapper, #product-grid .card, .product-card-wrapper",
      viewports: ["1440"],
      capture: true,
      etiket: "kart-hover",
      not: "Quick view / ikinci görsel",
    },
    {
      state: "changed",
      action: "click",
      selector:
        "facet-filters-form input[type='checkbox'][value='Black'], facet-filters-form label:has-text('Black')",
      viewports: ["1440"],
      value: 1500,
      capture: true,
      etiket: "filter-black",
      not: "Color Black facet",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

console.log("interact patches applied");
