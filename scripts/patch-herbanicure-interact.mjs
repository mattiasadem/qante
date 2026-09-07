import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const BASE = "https://herbanicure.myshopify.com";
const PDP = `${BASE}/products/100-organically-grown-king-kratom-extract-powder`;
const PLP = `${BASE}/collections/all`;
const FAQ = `${BASE}/pages/faq`;

const patches = {
  "observations/herbanicure/default/home/global-cart-drawer.json": {
    interactionStates: ["initial", "filled", "changed"],
    interactionSteps: [
      { state: "initial", action: "goto", value: BASE, capture: false },
      { state: "initial", action: "click", selector: "a.header__icon--cart", capture: true, captureMode: "viewport", etiket: "bos", not: "Boş drawer" },
      { state: "filled", action: "goto", value: PDP, capture: false },
      { state: "filled", action: "addToCart", selector: "button[name='add'].product-form__submit", capture: false, not: "PDP ATC" },
      { state: "filled", action: "waitFor", value: 1500, capture: true, captureMode: "viewport", captureSelector: "#CartDrawer", etiket: "kratom-eklendi", not: "King Kratom Extract Powder $14.95" },
      { state: "changed", action: "click", selector: "#CartDrawer button[name='plus']", capture: true, captureMode: "viewport", captureSelector: "#CartDrawer", etiket: "adet-2", not: "Adet 2 → $29.90" },
    ],
    stateFindings: {
      initial: "Boş drawer: Your cart is empty + Continue shopping.",
      filled: "King Kratom Extract Powder · $14.95 · adet 1.",
      changed: "Adet 2 · satır $29.90 · Estimated total güncellendi.",
    },
    interactionNote: "Checkout tıklanmadı.",
    "capture.method": "interaction-steps",
  },
  "observations/herbanicure/default/home/global-menu-drawer.json": {
    interactionStates: ["open"],
    interactionSteps: [
      { state: "open", action: "goto", value: BASE, capture: false },
      {
        state: "open",
        action: "click",
        selector: "header-drawer summary.header__icon--menu, #Details-menu-drawer-container > summary",
        viewports: ["375", "768"],
        capture: true,
        captureMode: "viewport",
        etiket: "hamburger",
        not: "Home/Shop/About us/Brands/Contact + Log in",
      },
    ],
    stateFindings: {
      open: "375/768: düz linkler; mega/akordeon yok.",
    },
    interactionNote: "1440 hamburger yok.",
    "capture.method": "interaction-steps",
  },
  "observations/herbanicure/default/home/global-predictive-search.json": {
    interactionStates: ["open", "input"],
    interactionSteps: [
      { state: "open", action: "goto", value: BASE, capture: false },
      { state: "open", action: "click", selector: "summary.header__icon--search", capture: true, captureMode: "viewport", etiket: "arama-bos", not: "Search modal açık" },
      {
        state: "input",
        action: "fill",
        selector: "#Search-In-Modal, predictive-search input[type='search']",
        value: "kratom",
        capture: true,
        captureMode: "viewport",
        etiket: "arama-kratom",
        not: "katalogSorgu=kratom",
      },
    ],
    stateFindings: {
      open: "Search modal + boş input.",
      input: "kratom yazılınca ürün önerileri listesi.",
    },
    interactionNote: "Search görünür (Hubble leftover değil).",
    "capture.method": "interaction-steps",
  },
  "observations/herbanicure/default/collection/product-showcase-grid-plp.json": {
    interactionStates: ["initial", "hover"],
    interactionSteps: [
      { state: "initial", action: "goto", value: PLP, capture: true, etiket: "ilk-hal", not: "PLP grid kapalı" },
      {
        state: "hover",
        action: "hover",
        selector: "#shopify-section-template--21845676851498__product-grid .card__media",
        capture: true,
        etiket: "kart-hover",
        not: "İkinci görsel veya quick-add",
      },
    ],
    stateFindings: {
      initial: "Sort by + facet filtreler + ürün kartları.",
      hover: "1440: kart hover ikinci görsel veya quick-add.",
    },
    missingStates: [],
    interactionNote: "375/768 hover değişmeyebilir.",
    "capture.method": "interaction-steps",
  },
  "observations/herbanicure/default/product-detail/product-info-main.json": {
    interactionStates: ["initial", "changed"],
    interactionSteps: [
      { state: "initial", action: "goto", value: PDP, capture: true, etiket: "adet-1", not: "Qty 1" },
      {
        state: "changed",
        action: "click",
        selector: "button[name='plus'], .quantity__button[name='plus']",
        capture: true,
        etiket: "adet-2",
        not: "Qty 1→2",
      },
    ],
    stateFindings: {
      initial: "King Kratom Extract Powder $14.95 · qty 1 · Description metinleri açık.",
      changed: "Qty input 2; Add to cart aynı.",
    },
    interactionNote: "Varyant swatch yok; qty changed.",
    "capture.method": "interaction-steps",
  },
  "observations/herbanicure/default/faq-support/faq-collapsible-tabs.json": {
    interactionStates: ["initial", "changed"],
    interactionSteps: [
      { state: "initial", action: "goto", value: FAQ, capture: false },
      { state: "initial", action: "scrollTo", selector: "#shopify-section-template--21845677277482__c4d0abac-cb42-461a-a0b7-40d09d151673", capture: true, etiket: "orders", not: "ORDERS aktif" },
      { state: "changed", action: "click", selector: ".panel-heading.faq_group_3", capture: true, etiket: "payment", not: "PAYMENT sekmesi" },
    ],
    stateFindings: {
      initial: "ORDERS aktif; sipariş SSS listesi görünür.",
      changed: "PAYMENT aktif; ödeme soruları.",
    },
    interactionNote: "faq-templates panel-heading; details değil.",
    "capture.method": "interaction-steps",
  },
  "observations/herbanicure/default/cart/cart-page-main.json": {
    interactionStates: ["initial", "filled"],
    interactionSteps: [
      { state: "initial", action: "goto", value: `${BASE}/cart`, capture: true, etiket: "bos", not: "Boş sepet" },
      { state: "filled", action: "goto", value: PDP, capture: false },
      { state: "filled", action: "addToCart", selector: "button[name='add'].product-form__submit", capture: false },
      { state: "filled", action: "goto", value: `${BASE}/cart`, capture: true, etiket: "dolu", not: "King Kratom satırı" },
    ],
    stateFindings: {
      initial: "Your cart is empty.",
      filled: "King Kratom Extract Powder satırı + Estimated total $14.95.",
    },
    interactionNote: "Checkout tıklanmadı.",
    "capture.method": "interaction-steps",
  },
};

for (const [rel, patch] of Object.entries(patches)) {
  const fp = path.join(root, rel);
  const obs = JSON.parse(fs.readFileSync(fp, "utf8"));
  for (const [k, v] of Object.entries(patch)) {
    if (k.startsWith("capture.")) {
      const sub = k.split(".")[1];
      obs.capture[sub] = v;
    } else {
      obs[k] = v;
    }
  }
  fs.writeFileSync(fp, JSON.stringify(obs, null, 2) + "\n");
  console.log("patched", rel);
}
