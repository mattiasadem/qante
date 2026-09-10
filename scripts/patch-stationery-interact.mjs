#!/usr/bin/env node
/**
 * Add interactionSteps to Stationery observations. Does not wipe evidence.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const HOST = "https://book-online-store-2.myshopify.com";
const HOME = `${HOST}/`;
const PDP = `${HOST}/products/green-plain-book-cover`;
const FAQ = `${HOST}/pages/faq`;
const CART = `${HOST}/cart`;

function patch(rel, extra) {
  const abs = path.join(root, rel);
  const o = JSON.parse(fs.readFileSync(abs, "utf8"));
  Object.assign(o, extra);
  fs.writeFileSync(abs, JSON.stringify(o, null, 2) + "\n");
  console.log("patched", rel);
}

patch("observations/stationery/default/home/navigation-header-mega.json", {
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
      not: "SHOP hover — summary içindeki <a href=/collections/all> tıklanmadı",
    },
    {
      state: "open",
      action: "forceOpen",
      selector: "#Details-HeaderMenu-1",
      viewports: ["1440"],
      capture: true,
      captureMode: "viewport",
      etiket: "shop-mega",
      not: "forceOpen details — 7 ürün kartı + görsel",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

patch("observations/stationery/default/home/global-menu-drawer.json", {
  captureMode: "viewport",
  interactionStates: ["open"],
  interactionSteps: [
    { state: "open", action: "goto", value: HOME, capture: false },
    { state: "open", action: "waitFor", value: 2500, capture: false },
    {
      state: "open",
      action: "forceOpen",
      selector: "#Details-menu-drawer-container",
      viewports: ["375", "768", "1440"],
      capture: true,
      captureMode: "viewport",
      etiket: "hamburger",
      not: "Parent details open — #menu-drawer kapalıyken off-screen",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

patch("observations/stationery/default/home/global-predictive-search.json", {
  captureMode: "viewport",
  interactionStates: ["initial", "input"],
  interactionSteps: [
    { state: "initial", action: "goto", value: HOME, capture: false },
    { state: "initial", action: "waitFor", value: 2500, capture: false },
    {
      state: "initial",
      action: "forceOpen",
      selector: "details-modal.header__search details",
      capture: true,
      captureMode: "viewport",
      etiket: "arama-bos",
      not: "İkon tık headless'te modal açmayabilir — inner details forceOpen",
    },
    {
      state: "input",
      action: "fill",
      selector: "#Search-In-Modal",
      value: "pencil",
      capture: true,
      captureMode: "viewport",
      etiket: "arama-pencil",
      not: "katalogSorgu=pencil (scan + Colored pencil Crayon / Pencil Case)",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

patch("observations/stationery/default/home/global-cart-drawer.json", {
  captureMode: "viewport",
  interactionStates: ["open", "filled", "changed"],
  interactionSteps: [
    { state: "open", action: "goto", value: HOME, capture: false },
    { state: "open", action: "waitFor", value: 2500, capture: false },
    {
      state: "open",
      action: "forceOpen",
      selector: "cart-drawer",
      capture: true,
      captureMode: "viewport",
      etiket: "sepet-bos",
      not: "Boş drawer + YOU MAY LIKE",
    },
    { state: "filled", action: "goto", value: PDP, capture: false },
    { state: "filled", action: "waitFor", value: 2500, capture: false },
    {
      state: "filled",
      action: "addToCart",
      selector: "product-form button.product-form__submit, button[name='add']",
      capture: false,
      not: "Green Plain Book Cover ATC",
    },
    { state: "filled", action: "waitFor", value: 1500, capture: false },
    {
      state: "filled",
      action: "click",
      selector: "#cart-icon-bubble, a.header__icon--cart",
      capture: true,
      captureMode: "viewport",
      etiket: "kitap-eklendi",
      not: "Dolu drawer",
    },
    {
      state: "changed",
      action: "click",
      selector: "#CartDrawer button[name='plus'], cart-drawer button[name='plus']",
      capture: true,
      captureMode: "viewport",
      etiket: "adet-artti",
      not: "Drawer adet +1",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

patch("observations/stationery/default/cart/cart-page-main.json", {
  captureMode: "viewport",
  interactionStates: ["initial", "filled", "changed"],
  interactionSteps: [
    { state: "initial", action: "goto", value: CART, capture: false },
    { state: "initial", action: "waitFor", value: 2000, capture: false },
    {
      state: "initial",
      action: "waitFor",
      value: 400,
      capture: true,
      captureMode: "viewport",
      etiket: "sepet-bos",
      not: "Boş cart sayfası",
    },
    { state: "filled", action: "goto", value: PDP, capture: false },
    { state: "filled", action: "waitFor", value: 2500, capture: false },
    {
      state: "filled",
      action: "addToCart",
      selector: "product-form button.product-form__submit, button[name='add']",
      capture: false,
    },
    { state: "filled", action: "waitFor", value: 1200, capture: false },
    { state: "filled", action: "goto", value: CART, capture: false },
    { state: "filled", action: "waitFor", value: 2500, capture: false },
    {
      state: "filled",
      action: "waitFor",
      value: 400,
      capture: true,
      captureMode: "viewport",
      etiket: "kitap-qty1",
      not: "Dolu cart satırı",
    },
    {
      state: "changed",
      action: "click",
      selector: "cart-items button[name='plus'], quantity-input button[name='plus'], button[name='plus']",
      capture: true,
      captureMode: "viewport",
      etiket: "adet-artti",
      not: "Sayfa adet +1",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

patch("observations/stationery/default/product-detail/product-info-main.json", {
  interactionStates: ["initial", "changed"],
  interactionSteps: [
    { state: "initial", action: "goto", value: PDP, capture: false },
    { state: "initial", action: "waitFor", value: 2500, capture: false },
    {
      state: "initial",
      action: "scrollTo",
      selector: "#shopify-section-template--16396373983326__main",
      capture: true,
      etiket: "color-green",
      not: "Color: Green qty 1",
    },
    {
      state: "changed",
      action: "click",
      selector: "label.swatch-input__label[for='template--16396373983326__main-1-1']",
      capture: true,
      etiket: "color-red",
      not: "Red swatch — probe: Color: Red + product-1-9.jpg",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

patch("observations/stationery/default/faq-support/faq-collapsible-tabs.json", {
  interactionStates: ["initial", "changed"],
  interactionSteps: [
    { state: "initial", action: "goto", value: FAQ, capture: false },
    { state: "initial", action: "waitFor", value: 2000, capture: false },
    {
      state: "initial",
      action: "scrollTo",
      selector:
        "#shopify-section-template--16396373819486__cb435de1-8958-455d-8843-8a9ef3413466",
      capture: true,
      etiket: "ilk-acik",
      not: "openFirst: Can I choose whichever styles I want?",
    },
    {
      state: "changed",
      action: "click",
      selector:
        "#Details-template--20640852508978__cb435de1-8958-455d-8843-8a9ef3413466-collapsible_row-2-template--16396373819486__cb435de1-8958-455d-8843-8a9ef3413466 > summary",
      capture: true,
      etiket: "ikinci-soru",
      not: "I like my styles but they don’t fit!",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

patch("observations/stationery/default/home/product-showcase-grid-featured.json", {
  interactionStates: ["hover"],
  interactionSteps: [
    { state: "hover", action: "goto", value: HOME, capture: false },
    { state: "hover", action: "waitFor", value: 2500, capture: false },
    {
      state: "hover",
      action: "scrollTo",
      selector:
        "#shopify-section-template--16396373393502__0617c2f2-69ec-4df8-a506-b2616d4e1db4",
      capture: false,
    },
    {
      state: "hover",
      action: "hover",
      selector:
        "#shopify-section-template--16396373393502__0617c2f2-69ec-4df8-a506-b2616d4e1db4 .product-card-wrapper .card__inner",
      capture: true,
      etiket: "kart-hover",
      not: "İkinci görsel / quick-add çıkıyor mu",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

patch("observations/stationery/default/product-detail/product-info-tabs.json", {
  interactionStates: ["initial", "changed"],
  interactionSteps: [
    { state: "initial", action: "goto", value: PDP, capture: false },
    { state: "initial", action: "waitFor", value: 2000, capture: false },
    {
      state: "initial",
      action: "scrollTo",
      selector:
        "#shopify-section-template--16396373983326__79582f51-5736-4bff-b870-bba69393ad36",
      capture: true,
      etiket: "description",
      not: "Description sekmesi açık",
    },
    {
      state: "changed",
      action: "click",
      selector:
        "#shopify-section-template--16396373983326__79582f51-5736-4bff-b870-bba69393ad36 [role='tab']:nth-child(2), #shopify-section-template--16396373983326__79582f51-5736-4bff-b870-bba69393ad36 button:has-text('Additional Information'), #shopify-section-template--16396373983326__79582f51-5736-4bff-b870-bba69393ad36 a:has-text('Additional Information')",
      capture: true,
      etiket: "additional",
      not: "Additional Information paneli",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "",
});

console.log("done");
