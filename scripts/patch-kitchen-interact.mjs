/**
 * Add Kitchen Ware interactionSteps onto existing observations.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const BASE = "https://kitchen-ware-online-store.myshopify.com";
const PDP = `${BASE}/products/pressure-cooker-3-litre`;

function patch(rel, extra) {
  const abs = path.join(root, rel);
  const obs = JSON.parse(fs.readFileSync(abs, "utf8"));
  Object.assign(obs, extra);
  fs.writeFileSync(abs, JSON.stringify(obs, null, 2) + "\n");
  console.log("patched", rel);
}

patch("observations/kitchen/default/home/navigation-header-mega.json", {
  captureMode: "viewport",
  interactionStates: ["initial", "open"],
  interactionSteps: [
    {
      state: "initial",
      action: "goto",
      value: `${BASE}/`,
      capture: false,
    },
    {
      state: "initial",
      action: "waitFor",
      value: 2500,
      capture: true,
      captureMode: "viewport",
      etiket: "kapali",
      not: "Shop mega kapalı",
    },
    {
      state: "open",
      action: "hover",
      selector: "#Details-HeaderMenu-2 > summary",
      viewports: ["1440"],
      capture: false,
    },
    {
      state: "open",
      action: "waitFor",
      value: 800,
      viewports: ["1440"],
      capture: true,
      captureMode: "viewport",
      etiket: "shop-mega",
      not: "Shop mega kolon/koleksiyon kartları. Yazılı Shop <a> tıklanmaz.",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "1440 hover details#Details-HeaderMenu-2. 375/768 hamburger ayrı global-menu-drawer. Account tıklanmadı.",
});

patch("observations/kitchen/default/home/global-menu-drawer.json", {
  captureMode: "viewport",
  interactionStates: ["open"],
  interactionSteps: [
    {
      state: "open",
      action: "goto",
      value: `${BASE}/`,
      capture: false,
    },
    {
      state: "open",
      action: "waitFor",
      value: 2500,
      capture: false,
    },
    {
      state: "open",
      action: "click",
      selector: "summary.header__icon--menu",
      viewports: ["375", "768"],
      value: 1200,
      capture: false,
    },
    {
      state: "open",
      action: "forceOpen",
      selector: "#menu-drawer",
      viewports: ["375", "768"],
      capture: false,
    },
    {
      state: "open",
      action: "waitFor",
      value: 800,
      viewports: ["375", "768"],
      capture: true,
      captureMode: "viewport",
      etiket: "hamburger",
      not: "Drawer açık: Home/Shop/Best Sellers…",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "1440 hamburger 0×0. Shop yazılı <a href=/collections/all>; boş chevron yoklandı değil. Log in tıklanmadı.",
});

patch("observations/kitchen/default/home/global-predictive-search.json", {
  captureMode: "viewport",
  interactionStates: ["input"],
  interactionSteps: [
    {
      state: "input",
      action: "goto",
      value: `${BASE}/`,
      capture: false,
    },
    {
      state: "input",
      action: "waitFor",
      value: 2500,
      capture: false,
    },
    {
      state: "input",
      action: "click",
      selector:
        "details-modal.header__search summary.header__icon--search, summary.header__icon--search",
      capture: false,
    },
    {
      state: "input",
      action: "waitFor",
      value: 800,
      capture: false,
    },
    {
      state: "input",
      action: "fill",
      selector: "#Search-In-Modal",
      value: "pan",
      capture: true,
      captureMode: "viewport",
      etiket: "arama-pan",
      not: "katalogSorgu pan — Hawkins Futura / Pressure Cooker beklenir",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "fill = pan (vitrin ürün adı). Hesap/form yok.",
});

patch("observations/kitchen/default/home/global-cart-drawer.json", {
  captureMode: "viewport",
  interactionStates: ["filled", "changed"],
  interactionSteps: [
    {
      state: "filled",
      action: "goto",
      value: PDP,
      capture: false,
    },
    {
      state: "filled",
      action: "waitFor",
      value: 4000,
      capture: false,
    },
    {
      state: "filled",
      action: "addToCart",
      selector:
        "form[action*='/cart/add'] button[name='add'], button[name='add']",
      capture: false,
      not: "Pressure Cooker $85 1 Litre",
    },
    {
      state: "filled",
      action: "waitFor",
      value: 1800,
      capture: true,
      captureMode: "viewport",
      etiket: "sepete-eklendi",
      not: "ATC sonrası drawer. Açılmazsa #cart-icon-bubble.",
    },
    {
      state: "changed",
      action: "click",
      selector: "#CartDrawer button[name='plus']",
      capture: false,
    },
    {
      state: "changed",
      action: "waitFor",
      value: 1500,
      capture: true,
      captureMode: "viewport",
      etiket: "adet-artti",
      not: "qty 1→2 · $85→$170 beklenir",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "ATC UI tercih; fallback /cart/add.js interactionNote. Checkout tıklanmadı.",
});

patch("observations/kitchen/default/cart/cart-page-main.json", {
  interactionStates: ["initial", "filled", "changed"],
  interactionSteps: [
    {
      state: "initial",
      action: "goto",
      value: `${BASE}/cart`,
      capture: false,
    },
    {
      state: "initial",
      action: "waitFor",
      value: 2000,
      capture: true,
      etiket: "cart-bos",
      not: "Your cart is empty",
    },
    {
      state: "filled",
      action: "goto",
      value: PDP,
      capture: false,
    },
    {
      state: "filled",
      action: "waitFor",
      value: 3500,
      capture: false,
    },
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
      value: `${BASE}/cart`,
      capture: false,
    },
    {
      state: "filled",
      action: "waitFor",
      value: 2000,
      capture: true,
      etiket: "sepete-eklendi",
      not: "Pressure Cooker satırı $85",
    },
    {
      state: "changed",
      action: "click",
      selector: "button[name='plus']",
      capture: false,
    },
    {
      state: "changed",
      action: "waitFor",
      value: 1500,
      capture: true,
      etiket: "adet-artti",
      not: "qty 2 · $170",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "Checkout / Log in tıklanmadı. cart-footer sibling boşken h=0.",
});

patch("observations/kitchen/default/product-detail/product-info-main.json", {
  interactionStates: ["initial", "changed"],
  interactionSteps: [
    {
      state: "initial",
      action: "goto",
      value: PDP,
      capture: false,
    },
    {
      state: "initial",
      action: "waitFor",
      value: 2500,
      capture: true,
      etiket: "ilk-hal",
      not: "Size 1 Litre seçili $85",
    },
    {
      state: "changed",
      action: "click",
      selector: "label[for='template--20650346840157__main-1-2']",
      capture: true,
      etiket: "5-litre",
      not: "5 Litre pill. Fiyat $85 aynı beklenir.",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "BUY IT NOW tıklanmadı. 2 Litre yoklandı değil.",
});

patch("observations/kitchen/default/product-detail/product-info-tabs.json", {
  interactionStates: ["initial", "changed"],
  interactionSteps: [
    {
      state: "initial",
      action: "goto",
      value: PDP,
      capture: false,
    },
    {
      state: "initial",
      action: "waitFor",
      value: 2000,
      capture: true,
      etiket: "description",
      not: "Description açık",
    },
    {
      state: "changed",
      action: "click",
      selector:
        "#shopify-section-template--20650346840157__79582f51-5736-4bff-b870-bba69393ad36 a[href='#tab3']",
      capture: true,
      etiket: "shipping",
      not: "Shipping And Delivery sekmesi",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "Additional Information yoklandı değil.",
});

patch("observations/kitchen/default/home/product-showcase-tabs.json", {
  interactionStates: ["initial", "changed"],
  interactionSteps: [
    {
      state: "initial",
      action: "goto",
      value: `${BASE}/`,
      capture: false,
    },
    {
      state: "initial",
      action: "waitFor",
      value: 2500,
      capture: true,
      etiket: "accessories",
      not: "ACCESSORIES aktif · Pressure Cooker / Vegetable Slicer",
    },
    {
      state: "changed",
      action: "click",
      selector:
        "a[href='#template--20650347331677__homepage_product_tab_RncYLf-tab-2']",
      capture: true,
      etiket: "featured",
      not: "FEATURED sekmesi — kart seti değişmeli",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "QUICK SHOP dialog leftover; LATEST yoklandı değil.",
});

patch("observations/kitchen/default/faq-support/faq-collapsible-tabs.json", {
  interactionStates: ["initial", "changed"],
  interactionSteps: [
    {
      state: "initial",
      action: "goto",
      value: `${BASE}/pages/faq`,
      capture: false,
    },
    {
      state: "initial",
      action: "waitFor",
      value: 2000,
      capture: true,
      etiket: "ilk-acik",
      not: "İlk soru açık (styles I want)",
    },
    {
      state: "changed",
      action: "click",
      selector:
        "#Details-template--20640852508978__cb435de1-8958-455d-8843-8a9ef3413466-collapsible_row-2-template--20650347036765__cb435de1-8958-455d-8843-8a9ef3413466 > summary",
      capture: true,
      etiket: "styles-fit",
      not: "İkinci soru (don't fit) açılır",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "3+ soru yoklandı değil. Account/refund tıklanmadı.",
});

patch("observations/kitchen/default/collection/product-showcase-grid-plp.json", {
  interactionStates: ["hover", "changed"],
  interactionSteps: [
    {
      state: "hover",
      action: "goto",
      value: `${BASE}/collections/all`,
      capture: false,
    },
    {
      state: "hover",
      action: "waitFor",
      value: 2500,
      capture: false,
    },
    {
      state: "hover",
      action: "hover",
      selector:
        "#shopify-section-template--20650347266141__product-grid .card-wrapper",
      viewports: ["1440"],
      capture: true,
      etiket: "kart-hover",
      not: "İlk kart hover — ikinci görsel / quick add",
    },
    {
      state: "changed",
      action: "click",
      selector:
        "[id='Details-filter.v.t.shopify.color-pattern-template--20650347266141__product-grid'] summary",
      viewports: ["1440"],
      capture: false,
    },
    {
      state: "changed",
      action: "waitFor",
      value: 400,
      viewports: ["1440"],
      capture: false,
    },
    {
      state: "changed",
      action: "click",
      selector:
        "#shopify-section-template--20650347266141__product-grid label:has-text('Black (7)')",
      viewports: ["1440"],
      capture: true,
      etiket: "filter-black",
      not: "Color Black 7 ürün — grid daralır",
    },
  ],
  stateFindings: {},
  missingStates: [],
  interactionNote: "375/768 hover parmakta yok. Filter yalnız 1440 sidebar.",
});
