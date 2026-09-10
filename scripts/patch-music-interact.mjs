/**
 * Add shopper-state steps to Music observations (after static 3vp).
 * Does not invent schemas — only interaction fields.
 */
import fs from "fs";
import path from "path";

const HOST = "https://musical-online-store.myshopify.com";
const root = path.resolve(import.meta.dirname, "..");

const patches = {
  "observations/music/default/home/navigation-header-mega.json": {
    captureMode: "viewport",
    interactionStates: ["initial", "open"],
    interactionSteps: [
      { state: "initial", action: "goto", value: `${HOST}/`, capture: false },
      { state: "initial", action: "waitFor", value: 2500, capture: false },
      {
        state: "initial",
        action: "press",
        value: "Escape",
        capture: true,
        captureMode: "viewport",
        etiket: "kapali",
        not: "Mega kapalı header. 375/768 hamburger ayrı global-menu-drawer.",
      },
      {
        state: "open",
        action: "hover",
        selector: "#Details-HeaderMenu-1 > summary",
        viewports: ["1440"],
        capture: false,
        not: "Hover önce; iç <a href=/collections/all> sayfaya gider.",
      },
      {
        state: "open",
        action: "forceOpen",
        selector: "details#Details-HeaderMenu-1",
        viewports: ["1440"],
        capture: true,
        captureMode: "viewport",
        etiket: "mega-shop",
        not: "Shop mega image cards.",
      },
    ],
    stateFindings: {},
    missingStates: [],
    interactionNote:
      "Shop = Details-HeaderMenu-1. Hover details.open bırakmazsa forceOpen. 375/768 hamburger ayrı observation.",
  },
  "observations/music/default/home/global-menu-drawer.json": {
    captureMode: "viewport",
    prepareClick: "#Details-menu-drawer-container > summary.header__icon--menu",
    interactionStates: ["open"],
    interactionSteps: [
      { state: "open", action: "goto", value: `${HOST}/`, capture: false },
      { state: "open", action: "waitFor", value: 2500, capture: false },
      {
        state: "open",
        action: "click",
        selector: "#Details-menu-drawer-container > summary.header__icon--menu",
        viewports: ["375", "768"],
        capture: true,
        captureMode: "viewport",
        etiket: "hamburger",
        not: "1440 inline mega olabilir — 375/768 hamburger.",
      },
    ],
    stateFindings: {},
    missingStates: [],
    interactionNote:
      "header-drawer data-breakpoint=desktop. Yazılı <a> tıklanmadı. Log in / wishlist yok.",
  },
  "observations/music/default/home/global-predictive-search.json": {
    captureMode: "viewport",
    prepareClick: "summary.header__icon--search",
    interactionStates: ["initial", "input"],
    interactionSteps: [
      { state: "initial", action: "goto", value: `${HOST}/`, capture: false },
      { state: "initial", action: "waitFor", value: 2500, capture: false },
      {
        state: "initial",
        action: "click",
        selector: "summary.header__icon--search",
        capture: true,
        captureMode: "viewport",
        etiket: "modal-bos",
        not: "Arama modalı boş",
      },
      {
        state: "input",
        action: "fill",
        selector: "#Search-In-Modal, .search-modal input[name='q']",
        value: "guitar",
        capture: true,
        captureMode: "viewport",
        etiket: "guitar",
        not: "katalogSorgu guitar (Flamenco Guitar / 4 search results)",
      },
    ],
    stateFindings: {},
    missingStates: [],
    interactionNote: "katalogSorgu=guitar. Form submit / hesap yok.",
  },
  "observations/music/default/home/global-cart-drawer.json": {
    captureMode: "viewport",
    prepareClick: "#cart-icon-bubble",
    interactionStates: ["initial", "filled", "changed"],
    interactionSteps: [
      { state: "initial", action: "goto", value: `${HOST}/`, capture: false },
      { state: "initial", action: "waitFor", value: 3500, capture: false },
      {
        state: "initial",
        action: "click",
        selector: "#cart-icon-bubble",
        capture: true,
        captureMode: "viewport",
        etiket: "cart-bos",
        not: "Boş drawer",
      },
      {
        state: "filled",
        action: "goto",
        value: `${HOST}/products/guitar-flamenco-guitar`,
        capture: false,
      },
      { state: "filled", action: "waitFor", value: 4000, capture: false },
      {
        state: "filled",
        action: "addToCart",
        selector:
          "#quick-add-7913126756426-submit, button[name='add'], [id^='ProductSubmitButton']",
        capture: false,
        not: "Flamenco Guitar $129 Orange",
      },
      { state: "filled", action: "waitFor", value: 1800, capture: true, captureMode: "viewport", etiket: "sepete-eklendi", not: "ATC drawer" },
      {
        state: "changed",
        action: "click",
        selector: "#CartDrawer button[name='plus']",
        capture: false,
      },
      { state: "changed", action: "waitFor", value: 1500, capture: true, captureMode: "viewport", etiket: "adet-artti", not: "qty 1→2" },
    ],
    stateFindings: {},
    missingStates: [],
    interactionNote: "addToCart UI. Checkout / Log in tıklanmadı. /cart/clear yok.",
  },
  "observations/music/default/home/product-showcase-grid-featured.json": {
    interactionStates: ["hover"],
    interactionSteps: [
      { state: "hover", action: "goto", value: `${HOST}/`, capture: false },
      {
        state: "hover",
        action: "scrollTo",
        selector:
          "#shopify-section-template--17181903814730__featured_product_slider_tbBCPj",
        capture: false,
      },
      {
        state: "hover",
        action: "hover",
        selector:
          "#shopify-section-template--17181903814730__featured_product_slider_tbBCPj .card, #shopify-section-template--17181903814730__featured_product_slider_tbBCPj .card__media",
        viewports: ["1440"],
        capture: true,
        etiket: "kart-hover",
        not: "Quick shop / ikinci görsel / wishlist. 375/768 parmakta hover yok.",
      },
    ],
    stateFindings: {},
    missingStates: [],
    interactionNote: "Best Sellers ilk kart. Hover yalnız renk ise token — şemaya girmez.",
  },
  "observations/music/default/product-detail/product-info-main.json": {
    interactionStates: ["initial", "changed"],
    interactionSteps: [
      {
        state: "initial",
        action: "goto",
        value: `${HOST}/products/guitar-flamenco-guitar`,
        capture: false,
      },
      { state: "initial", action: "waitFor", value: 3000, capture: false },
      {
        state: "initial",
        action: "scrollTo",
        selector: "#shopify-section-template--17181904404554__main",
        capture: true,
        etiket: "orange",
        not: "Instrument color Orange $129",
      },
      {
        state: "changed",
        action: "click",
        selector: "label[for='template--17181904404554__main-1-1']",
        capture: false,
      },
      {
        state: "changed",
        action: "waitFor",
        value: 1500,
        capture: true,
        etiket: "red",
        not: "Color → Red",
      },
    ],
    stateFindings: {},
    missingStates: [],
    interactionNote: "Red label[for=template--17181904404554__main-1-1]. BUY IT NOW tıklanmadı.",
  },
  "observations/music/default/product-detail/product-info-tabs.json": {
    interactionStates: ["initial", "changed"],
    interactionSteps: [
      {
        state: "initial",
        action: "goto",
        value: `${HOST}/products/guitar-flamenco-guitar`,
        capture: false,
      },
      { state: "initial", action: "waitFor", value: 2500, capture: false },
      {
        state: "initial",
        action: "scrollTo",
        selector:
          "#shopify-section-template--17181904404554__79582f51-5736-4bff-b870-bba69393ad36",
        capture: true,
        etiket: "description",
        not: "Description açık",
      },
      {
        state: "changed",
        action: "click",
        selector:
          "#shopify-section-template--17181904404554__79582f51-5736-4bff-b870-bba69393ad36 a, #shopify-section-template--17181904404554__79582f51-5736-4bff-b870-bba69393ad36 button, #shopify-section-template--17181904404554__79582f51-5736-4bff-b870-bba69393ad36 [role=tab], #shopify-section-template--17181904404554__79582f51-5736-4bff-b870-bba69393ad36 summary",
        capture: false,
        not: "Additional Information — ilk eşleşen Description olabilir; probe sonrası daralt",
      },
      {
        state: "changed",
        action: "waitFor",
        value: 800,
        capture: true,
        etiket: "additional",
        not: "Additional Information paneli",
      },
    ],
    stateFindings: {},
    missingStates: [],
    interactionNote: "Tab kontrolü scan sonrası daraltılacak. Form yok.",
  },
  "observations/music/default/collection/product-showcase-grid-plp.json": {
    interactionStates: ["initial", "changed"],
    interactionSteps: [
      { state: "initial", action: "goto", value: `${HOST}/collections/all`, capture: false },
      { state: "initial", action: "waitFor", value: 3000, capture: false },
      {
        state: "initial",
        action: "scrollTo",
        selector: "#shopify-section-template--17181903552586__product-grid",
        capture: true,
        etiket: "filtre-yok",
        not: "Tüm ürünler",
      },
      {
        state: "changed",
        action: "click",
        selector: "label[for='Filter-filter.p.t.category-5']",
        viewports: ["1440"],
        capture: false,
      },
      {
        state: "changed",
        action: "waitFor",
        value: 2500,
        capture: true,
        viewports: ["1440"],
        etiket: "guitars",
        not: "Category Guitars (1)",
      },
    ],
    stateFindings: {},
    missingStates: [],
    interactionNote: "label[for=Filter-filter.p.t.category-5] Guitars. Color label metni boştu.",
  },
  "observations/music/default/cart/cart-page-main.json": {
    interactionStates: ["initial", "filled", "changed"],
    interactionSteps: [
      { state: "initial", action: "goto", value: `${HOST}/cart`, capture: false },
      { state: "initial", action: "waitFor", value: 3000, capture: false },
      {
        state: "initial",
        action: "scrollTo",
        selector: "#shopify-section-template--17181903421514__cart-items",
        capture: true,
        etiket: "cart-bos",
        not: "Boş cart sayfası",
      },
      {
        state: "filled",
        action: "goto",
        value: `${HOST}/products/guitar-flamenco-guitar`,
        capture: false,
      },
      { state: "filled", action: "waitFor", value: 3500, capture: false },
      {
        state: "filled",
        action: "addToCart",
        selector:
          "#quick-add-7913126756426-submit, button[name='add'], [id^='ProductSubmitButton']",
        capture: false,
      },
      { state: "filled", action: "goto", value: `${HOST}/cart`, capture: false },
      { state: "filled", action: "waitFor", value: 2500, capture: true, etiket: "sepet-dolu", not: "Flamenco satır" },
      {
        state: "changed",
        action: "click",
        selector:
          "#shopify-section-template--17181903421514__cart-items button[name='plus'], quantity-input button[name='plus']",
        capture: false,
      },
      { state: "changed", action: "waitFor", value: 1500, capture: true, etiket: "adet-artti", not: "qty 1→2" },
    ],
    stateFindings: {},
    missingStates: [],
    interactionNote: "addToCart UI sonra /cart. Checkout / Log in tıklanmadı.",
  },
  "observations/music/default/faq-support/faq-collapsible-tabs.json": {
    interactionStates: ["initial", "changed"],
    interactionSteps: [
      { state: "initial", action: "goto", value: `${HOST}/pages/faq`, capture: false },
      { state: "initial", action: "waitFor", value: 2500, capture: false },
      {
        state: "initial",
        action: "scrollTo",
        selector:
          "#shopify-section-template--17181904240714__cb435de1-8958-455d-8843-8a9ef3413466",
        capture: true,
        etiket: "ilk-acik",
        not: "Q1 açık (openFirst)",
      },
      {
        state: "changed",
        action: "click",
        selector:
          "#shopify-section-template--17181904240714__cb435de1-8958-455d-8843-8a9ef3413466 details:nth-of-type(2) > summary",
        capture: true,
        etiket: "ikinci-acik",
        not: "Q2 I like my instruments, but they don't feel right for me anymore!",
      },
    ],
    stateFindings: {},
    missingStates: [],
    interactionNote: "İkinci details > summary. Form yok.",
  },
};

for (const [rel, patch] of Object.entries(patches)) {
  const abs = path.join(root, rel);
  const obs = JSON.parse(fs.readFileSync(abs, "utf8"));
  Object.assign(obs, patch);
  fs.writeFileSync(abs, JSON.stringify(obs, null, 2) + "\n");
  console.log("patched", rel);
}
