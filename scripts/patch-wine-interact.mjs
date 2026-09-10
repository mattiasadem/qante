/**
 * Add interactionSteps to Wine observations AFTER static 3vp exists.
 * Does not overwrite existing evidence[].
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const BASE = "https://wineshop-online-store.myshopify.com/";
const PDP =
  "https://wineshop-online-store.myshopify.com/products/ridge-vineyard-bohemian-bliss-natural-red-wine";
const PLP = "https://wineshop-online-store.myshopify.com/collections/red-wine";
const CART = "https://wineshop-online-store.myshopify.com/cart";
const FAQ = "https://wineshop-online-store.myshopify.com/pages/faq";

function load(rel) {
  const abs = path.join(root, rel);
  return { abs, obs: JSON.parse(fs.readFileSync(abs, "utf8")) };
}

function save(abs, obs) {
  fs.writeFileSync(abs, JSON.stringify(obs, null, 2) + "\n");
}

const patches = {
  "observations/wine/default/home/navigation-header-mega.json": (obs) => {
    obs.captureMode = "viewport";
    obs.interactionStates = ["initial", "open"];
    obs.interactionSteps = [
      {
        state: "initial",
        action: "goto",
        value: BASE,
        capture: false,
      },
      {
        state: "initial",
        action: "waitFor",
        value: 2500,
        capture: false,
      },
      {
        state: "initial",
        action: "press",
        value: "Escape",
        capture: true,
        captureMode: "viewport",
        etiket: "kapali",
        not: "Shop mega kapalı. 375/768 hamburger ayrı global-menu-drawer.",
      },
      {
        state: "open",
        action: "hover",
        selector: "#Details-HeaderMenu-1 > summary",
        viewports: ["1440"],
        capture: true,
        captureMode: "viewport",
        etiket: "shop-mega",
        not: "Hover Shop summary — click Shop /collections/all sayfaya gider.",
        value: 1800,
      },
    ];
    obs.stateFindings = {
      initial: "",
      open: "",
    };
    obs.missingStates = [];
    obs.interactionNote =
      "Click Shop /collections/all. Account/wishlist tıklanmadı.";
  },

  "observations/wine/default/home/global-predictive-search.json": (obs) => {
    obs.captureMode = "viewport";
    obs.prepareClick = "summary.header__icon--search";
    obs.interactionStates = ["open", "input"];
    obs.interactionSteps = [
      { state: "open", action: "goto", value: BASE, capture: false },
      { state: "open", action: "waitFor", value: 2000, capture: false },
      {
        state: "open",
        action: "forceOpen",
        selector: "details-modal.header__search details",
        capture: false,
      },
      {
        state: "open",
        action: "forceOpen",
        selector: ".search-modal",
        capture: false,
      },
      {
        state: "open",
        action: "waitFor",
        selector: "#Search-In-Modal",
        capture: true,
        captureMode: "viewport",
        etiket: "arama-acik",
        not: "Search modal forceOpen.",
      },
      {
        state: "input",
        action: "fill",
        selector: "#Search-In-Modal",
        value: "wine",
        capture: true,
        captureMode: "viewport",
        etiket: "arama-wine",
        not: "katalogSorgu wine — öneri/ürün listesi.",
      },
    ];
    obs.stateFindings = { open: "", input: "" };
    obs.missingStates = [];
    obs.interactionNote = "katalogSorgu wine (vitrin ürün/arama). Account yok.";
  },

  "observations/wine/default/home/global-menu-drawer.json": (obs) => {
    obs.captureMode = "viewport";
    obs.prepareClick = "#Details-menu-drawer-container > summary";
    obs.interactionStates = ["open"];
    obs.interactionSteps = [
      { state: "open", action: "goto", value: BASE, capture: false },
      {
        state: "open",
        action: "waitFor",
        value: 2000,
        viewports: ["375", "768"],
        capture: false,
      },
      {
        state: "open",
        action: "click",
        selector: "#Details-menu-drawer-container > summary",
        viewports: ["375", "768"],
        capture: false,
      },
      {
        state: "open",
        action: "waitFor",
        value: 800,
        viewports: ["375", "768"],
        capture: false,
      },
      {
        state: "open",
        action: "forceOpen",
        selector: "#menu-drawer",
        viewports: ["375", "768"],
        capture: true,
        captureMode: "viewport",
        etiket: "mobil-menu-acik",
        not: "375/768 hamburger. 1440 drawer yok.",
      },
    ];
    obs.stateFindings = { open: "" };
    obs.missingStates = [];
    obs.interactionNote = "1440 hamburger 0×0 — open yalnız 375/768.";
  },

  "observations/wine/default/home/global-cart-drawer.json": (obs) => {
    obs.captureMode = "viewport";
    obs.prepareClick = "a#cart-icon-bubble";
    obs.interactionStates = ["initial", "filled", "changed"];
    obs.interactionSteps = [
      { state: "initial", action: "goto", value: BASE, capture: false },
      { state: "initial", action: "waitFor", value: 2000, capture: false },
      {
        state: "initial",
        action: "forceOpen",
        selector: "cart-drawer",
        capture: false,
      },
      {
        state: "initial",
        action: "forceOpen",
        selector: "#CartDrawer",
        capture: true,
        captureMode: "viewport",
        etiket: "cart-bos",
        not: "Boş drawer.",
      },
      { state: "filled", action: "goto", value: PDP, capture: false },
      { state: "filled", action: "waitFor", value: 2500, capture: false },
      {
        state: "filled",
        action: "addToCart",
        selector: "#ProductSubmitButton-template--18166097936540__main",
        capture: false,
        not: "Bohemian Bliss ATC. Checkout tıklanmadı.",
      },
      { state: "filled", action: "waitFor", value: 1500, capture: false },
      {
        state: "filled",
        action: "forceOpen",
        selector: "cart-drawer",
        capture: false,
      },
      {
        state: "filled",
        action: "forceOpen",
        selector: "#CartDrawer",
        capture: true,
        captureMode: "viewport",
        etiket: "sepete-eklendi",
        not: "Dolu drawer. Beklenen: Bohemian Bliss satırı.",
      },
      {
        state: "changed",
        action: "click",
        selector: "#CartDrawer button[name='plus']",
        capture: false,
      },
      { state: "changed", action: "waitFor", value: 800, capture: false },
      {
        state: "changed",
        action: "forceOpen",
        selector: "#CartDrawer",
        capture: true,
        captureMode: "viewport",
        etiket: "adet-artti",
        not: "Adet + → ara toplam.",
      },
    ];
    obs.stateFindings = { initial: "", filled: "", changed: "" };
    obs.missingStates = [];
    obs.interactionNote =
      "addToCart PDP button[name=add]. Checkout / kupon / hesap yok.";
  },

  "observations/wine/default/cart/cart-page-main.json": (obs) => {
    obs.interactionStates = ["initial", "filled", "changed"];
    obs.interactionSteps = [
      {
        state: "initial",
        action: "goto",
        value: CART,
        capture: true,
        etiket: "cart-bos",
        not: "Boş cart sayfası.",
      },
      { state: "filled", action: "goto", value: PDP, capture: false },
      { state: "filled", action: "waitFor", value: 2500, capture: false },
      {
        state: "filled",
        action: "addToCart",
        selector: "button[name='add']",
        capture: false,
      },
      {
        state: "filled",
        action: "goto",
        value: CART,
        capture: true,
        etiket: "sepete-eklendi",
        not: "Dolu cart. Checkout tıklanmadı.",
      },
      {
        state: "changed",
        action: "click",
        selector: "button[name='plus']",
        capture: true,
        etiket: "adet-artti",
        not: "Adet 2.",
      },
    ];
    obs.stateFindings = { initial: "", filled: "", changed: "" };
    obs.missingStates = [];
    obs.interactionNote = "Checkout / hesap tıklanmadı.";
  },

  "observations/wine/default/home/product-showcase-grid-featured.json": (obs) => {
    obs.interactionStates = ["hover"];
    obs.interactionSteps = [
      { state: "hover", action: "goto", value: BASE, capture: false },
      { state: "hover", action: "waitFor", value: 2000, capture: false },
      {
        state: "hover",
        action: "scrollTo",
        selector:
          "#shopify-section-template--18166097215644__0617c2f2-69ec-4df8-a506-b2616d4e1db4",
        capture: false,
      },
      {
        state: "hover",
        action: "hover",
        selector:
          "#shopify-section-template--18166097215644__0617c2f2-69ec-4df8-a506-b2616d4e1db4 .card__media",
        viewports: ["1440"],
        capture: true,
        etiket: "kart-hover",
        not: "İkinci görsel / quick add. 375/768 hover yok sayılabilir.",
      },
    ];
    obs.stateFindings = { hover: "" };
    obs.missingStates = [];
    obs.interactionNote = "375/768 hover beklenmez.";
  },

  "observations/wine/default/product-detail/product-info-main.json": (obs) => {
    obs.interactionStates = ["initial", "changed"];
    obs.interactionSteps = [
      {
        state: "initial",
        action: "goto",
        value: PDP,
        capture: true,
        etiket: "ilk-hal",
        not: "Bohemian Bliss. Varyant yok.",
      },
      {
        state: "changed",
        action: "click",
        selector:
          "#shopify-section-template--18166097936540__main details.product__accordion summary, #shopify-section-template--18166097936540__main .product__accordion summary",
        capture: true,
        etiket: "extra-information",
        not: "EXTRA INFORMATION akordeon. Varyant yok — qty/accordion pixel.",
      },
    ];
    obs.stateFindings = { initial: "", changed: "" };
    obs.missingStates = [];
    obs.interactionNote =
      "Varyant yok. Buy it now / WhatsApp / hesap tıklanmadı.";
  },

  "observations/wine/default/product-detail/product-info-tabs.json": (obs) => {
    obs.interactionStates = ["initial", "changed"];
    obs.interactionSteps = [
      {
        state: "initial",
        action: "goto",
        value: PDP,
        capture: true,
        etiket: "description",
        not: "Description açık.",
      },
      {
        state: "changed",
        action: "click",
        selector:
          "#shopify-section-template--18166097936540__79582f51-5736-4bff-b870-bba69393ad36 a:nth-of-type(3)",
        capture: true,
        etiket: "shipping",
        not: "Shipping And Delivery sekmesi. Beklenen: Description alt çizgi kalkar, kargo metni.",
      },
    ];
    obs.stateFindings = { initial: "", changed: "" };
    obs.missingStates = [];
    obs.interactionNote = "Varyant yok. Sekme click unique id scan ile.";
  },

  "observations/wine/default/faq-support/faq-collapsible-tabs.json": (obs) => {
    obs.interactionStates = ["initial", "changed"];
    obs.interactionSteps = [
      {
        state: "initial",
        action: "goto",
        value: FAQ,
        capture: true,
        etiket: "ilk-hal",
        not: "FAQ kapalı veya ilk açık.",
      },
      {
        state: "changed",
        action: "click",
        selector:
          "#Details-template--20640852508978__cb435de1-8958-455d-8843-8a9ef3413466-collapsible_row-2-template--18166097641628__cb435de1-8958-455d-8843-8a9ef3413466 > summary",
        capture: true,
        etiket: "soru-acik",
        not: "İkinci soru (I like my styles…) açık. İlk zaten açık.",
      },
    ];
    obs.stateFindings = { initial: "", changed: "" };
    obs.missingStates = [];
    obs.interactionNote = "Submit/form yok.";
  },

  "observations/wine/default/collection/product-showcase-grid-plp.json": (obs) => {
    obs.interactionStates = ["initial", "changed"];
    obs.interactionSteps = [
      {
        state: "initial",
        action: "goto",
        value: PLP,
        capture: true,
        etiket: "filtre-yok",
        not: "Red wine ızgara, filtre seçilmedi.",
      },
      {
        state: "changed",
        action: "click",
        selector: "label[for='Filter-filter.v.t.shopify.wine-sweetness-1']",
        viewports: ["1440"],
        capture: true,
        etiket: "filtre-dry",
        not: "Wine sweetness Dry. 375/768 sidebar yok olabilir.",
      },
    ];
    obs.stateFindings = { initial: "", changed: "" };
    obs.missingStates = [];
    obs.interactionNote = "375/768 filtre drawer ikinci deneme.";
  },
};

for (const [rel, fn] of Object.entries(patches)) {
  const { abs, obs } = load(rel);
  fn(obs);
  save(abs, obs);
  console.log("patched", rel);
}
console.log(Object.keys(patches).length, "interact patches");
