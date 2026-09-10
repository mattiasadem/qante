import fs from "fs";

const HOME = "https://women-beauty-9.myshopify.com/";
const PDP = "https://women-beauty-9.myshopify.com/products/beauty-liquid-matte";
const PLP = "https://women-beauty-9.myshopify.com/collections/skincare";
const CART = "https://women-beauty-9.myshopify.com/cart";
const FAQ = "https://women-beauty-9.myshopify.com/pages/faq";
const HEADER = "#shopify-section-sections--19497186951424__header";
const ATC =
  "#shopify-section-template--19497186656512__main button[name='add']";

function patch(rel, extra) {
  const p = new URL(rel, import.meta.url).pathname.replace(
    "/scripts/patch-shine-interact.mjs",
    `/${rel}`
  );
  // resolve from cwd
  const file = rel.startsWith("/") ? rel : `/workspace/${rel}`;
  const o = JSON.parse(fs.readFileSync(file, "utf8"));
  Object.assign(o, extra);
  fs.writeFileSync(file, JSON.stringify(o, null, 2) + "\n");
  console.log("patched", rel);
}

patch("observations/shine/default/home/navigation-header-mega.json", {
  interactionStates: ["initial", "open"],
  interactionSteps: [
    { state: "initial", action: "goto", value: HOME, capture: false },
    { state: "initial", action: "waitFor", value: 1500, capture: false },
    {
      state: "initial",
      action: "press",
      value: "Escape",
      capture: true,
      captureMode: "viewport",
      etiket: "kapali",
      not: "Shop kapalı header",
    },
    {
      state: "open",
      action: "hover",
      selector: "#Details-HeaderMenu-1 > summary",
      viewports: ["1440"],
      capture: false,
      not: "Shop hover — probe open:true",
    },
    {
      state: "open",
      action: "forceOpen",
      selector: "#Details-HeaderMenu-1",
      viewports: ["1440"],
      capture: true,
      captureMode: "viewport",
      etiket: "shop-mega",
      not: "6 koleksiyon kart + açıklama. Yazılı Shop <a> tıklanmadı.",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "375/768 hamburger ayrı global-menu-drawer (statik open var).",
});

patch("observations/shine/default/home/global-predictive-search.json", {
  interactionStates: ["initial", "input"],
  interactionSteps: [
    { state: "input", action: "goto", value: HOME, capture: false },
    {
      state: "input",
      action: "click",
      selector: "summary.header__icon--search",
      value: 800,
      capture: false,
      not: "Search modal",
    },
    {
      state: "input",
      action: "forceOpen",
      selector: "details-modal.header__search details",
      capture: false,
      not: "Pin modal if click missed",
    },
    {
      state: "input",
      action: "fill",
      selector: "#Search-In-Modal",
      value: "cream",
      capture: true,
      captureMode: "viewport",
      captureSelector: HEADER,
      etiket: "cream",
      not: "katalogSorgu cream — Face Cream / Cosmetics Cream",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "Yalnız #Search-In-Modal (template input yok). Submit yok.",
});

patch("observations/shine/default/home/global-cart-drawer.json", {
  interactionStates: ["initial", "filled", "changed"],
  interactionSteps: [
    { state: "initial", action: "goto", value: HOME, capture: false },
    {
      state: "initial",
      action: "click",
      selector: "#cart-icon-bubble",
      value: 1800,
      capture: false,
    },
    {
      state: "initial",
      action: "forceOpen",
      selector: "cart-drawer",
      capture: true,
      captureMode: "viewport",
      captureSelector: HEADER,
      etiket: "bos",
      not: "Boş çekmece + YOU MAY LIKE",
    },
    { state: "filled", action: "goto", value: PDP, capture: false },
    { state: "filled", action: "waitFor", value: 2500, capture: false },
    {
      state: "filled",
      action: "addToCart",
      selector: ATC,
      capture: false,
      not: "PDP ATC — global name=add QuickAdd tuzağı",
    },
    { state: "filled", action: "waitFor", value: 1800, capture: true, captureMode: "viewport", captureSelector: HEADER, etiket: "dolu", not: "Beauty Liquid Matte satırı" },
    {
      state: "changed",
      action: "click",
      selector: "#CartDrawer button[name='plus']",
      capture: true,
      captureMode: "viewport",
      captureSelector: HEADER,
      etiket: "adet-2",
      not: "Adet +",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "Checkout / Log in yok.",
});

patch("observations/shine/default/cart/cart-page-main.json", {
  interactionStates: ["initial", "filled", "changed"],
  interactionSteps: [
    { state: "initial", action: "goto", value: CART, capture: true, etiket: "bos", not: "Boş sepet" },
    { state: "filled", action: "goto", value: PDP, capture: false },
    { state: "filled", action: "waitFor", value: 2500, capture: false },
    { state: "filled", action: "addToCart", selector: ATC, capture: false },
    { state: "filled", action: "goto", value: CART, capture: true, etiket: "dolu", not: "Matte satırı" },
    {
      state: "changed",
      action: "click",
      selector: "button[name='plus'], .quantity__button[name='plus']",
      capture: true,
      etiket: "adet-2",
      not: "Adet +",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "Checkout / Log in tıklanmadı.",
});

patch("observations/shine/default/product-detail/product-info-main.json", {
  interactionStates: ["initial", "changed"],
  interactionSteps: [
    { state: "initial", action: "goto", value: PDP, capture: false },
    { state: "initial", action: "waitFor", value: 2500, capture: false },
    {
      state: "initial",
      action: "scrollTo",
      selector: "#shopify-section-template--19497186656512__main",
      capture: true,
      etiket: "antique-white",
      not: "Color Antique White · 350 in stock",
    },
    {
      state: "changed",
      action: "click",
      selector: "label[for='template--19497186656512__main-1-1']",
      capture: true,
      etiket: "white-chocolate",
      not: "White Chocolate — URL ?variant= · stok 290. PDP kalır.",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "BUY IT NOW leftover. Checkout yok.",
});

patch("observations/shine/default/faq-support/faq-collapsible-tabs.json", {
  interactionStates: ["initial", "changed"],
  interactionSteps: [
    { state: "initial", action: "goto", value: FAQ, capture: false },
    { state: "initial", action: "waitFor", value: 1500, capture: false },
    {
      state: "initial",
      action: "scrollTo",
      selector:
        "#shopify-section-template--19497186492672__cb435de1-8958-455d-8843-8a9ef3413466",
      capture: true,
      etiket: "q1-acik",
      not: "İlk soru açık",
    },
    {
      state: "changed",
      action: "click",
      selector:
        "#shopify-section-template--19497186492672__cb435de1-8958-455d-8843-8a9ef3413466 details:nth-of-type(2) summary",
      capture: true,
      etiket: "q2-acik",
      not: "İkinci soru da açık (allowMultipleOpen)",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "Account info sorusu tıklanmadı.",
});

patch("observations/shine/default/collection/product-showcase-grid-plp.json", {
  interactionStates: ["initial", "hover"],
  interactionSteps: [
    { state: "initial", action: "goto", value: PLP, capture: true, etiket: "grid", not: "Skincare grid" },
    {
      state: "hover",
      action: "hover",
      selector: "#product-grid .grid__item",
      viewports: ["1440"],
      capture: true,
      etiket: "kart-hover",
      not: "İkinci görsel / quick shop. Probe text değişmedi.",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "QUICK SHOP tıklanmadı.",
});
