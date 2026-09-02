import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const HOST = "https://fashion-store-clean-11.myshopify.com";
const TEMA = "seabikini";
const PRESET = "default";
const THEME =
  "Shopify.theme.name Seabikini-v-1-5-0 · schema_name Seabikini · schema_version 1.5.0 · theme_store_id null · role main · id 171062952255 · shop fashion-store-clean-11.myshopify.com · Speedo Themes third-party (Theme Store official değil).";

function obs(partial) {
  const sayfa = partial.sayfa;
  const schemaId = partial.schemaId;
  const observationId = `${TEMA}.${PRESET}.${sayfa}.${schemaId}${partial.instance ? "." + partial.instance : ""}`;
  const fileStem = partial.instance ? `${schemaId}-${partial.instance}` : schemaId;
  const out = {
    observationId,
    schemaId,
    kaynak: TEMA,
    preset: PRESET,
    sayfa,
    url: partial.url,
    selector: partial.selector,
    evidenceSlug: fileStem,
    evidence: [],
    notlar: partial.notlar,
    delta: partial.delta ? `${partial.delta} ${THEME}` : THEME,
    storefrontPassword: "1",
  };
  if (partial.captureMode) out.captureMode = partial.captureMode;
  if (partial.prepareClick) out.prepareClick = partial.prepareClick;
  if (partial.prepareForceOpen) out.prepareForceOpen = partial.prepareForceOpen;
  return { fileStem, sayfa, out };
}

const items = [
  // ── home ──
  obs({
    sayfa: "home",
    schemaId: "promo-announcement-bar",
    url: `${HOST}/`,
    selector:
      "#shopify-section-sections--23256779915583__c46903b8-b556-4b1c-b67b-6a54d0a61ac8",
    notlar:
      "Header-group swiper announcement-bar-msg. Mesajlar: FREE SHIPPING ON ORDERS OVER £75 · SALE 20% OFF ALL. USE CODE ORANGE · 100-DAY EASY RETURNS · JOIN OUR EMAIL LIST AND GET 20% FIRST ORDER.",
    delta:
      "Dawn announcement değil — Speedo swiper marquee, 4 dönen mesaj (şema mesajlar max 3). timer yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "navigation-header-mega",
    url: `${HOST}/`,
    selector: "#shopify-section-sections--23256779915583__header",
    notlar:
      "Dawn header--middle-center drawer-menu. Logo Fashion Store Clean 11. 1440 hamburger + wishlist + search + cart. Sosyal Facebook/Instagram/X/Pinterest. Inline mega yok.",
    delta:
      "Mega panel yok. header.drawer-menu — hamburger 375/768/1440. Wishlist /pages/wishlist. Account login drawer içinde.",
  }),
  obs({
    sayfa: "home",
    schemaId: "hero-slideshow",
    url: `${HOST}/`,
    selector:
      "#shopify-section-template--23256779391295__3b7cb796-4e44-4edc-96f9-002a08ba8170",
    notlar:
      "LUXURY SWIMWEAR & BIKINIS + lorem + SHOP NOW. En az 3 slayt; main-banner-1 / main-banner-_m.v-1 / main-bnner-7.",
    delta: "Speedo slideshow; mobil ayrı görsel (_m.v). Autoplay/ok/nokta evidence'da.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    url: `${HOST}/`,
    selector:
      "#shopify-section-template--23256779391295__featured_collection",
    notlar:
      "SHOP BIKINI + lorem. Kartlar: SUMMER SWIMWEAR BATHING SUIT $69/$59 Sale · WOMEN HOT SEXY BLACK NET PADDED BRA BIKINI $40 · FULL COVERAGE BEGINNERS BRA - WHITE.",
    delta: "Dawn featured-collection. Kart hover 2. görsel (product-1-1).",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-rich-text",
    url: `${HOST}/`,
    selector:
      "#shopify-section-template--23256779391295__f585c67b-de5a-4b0e-bd28-b8279214508d",
    notlar:
      "Başlık yok. Dawn rich-text: Share information about your brand with your customers…",
    delta: "Başlık slotu boş; yalnız gövde metin. color-scheme-d9f67556.",
  }),
  obs({
    sayfa: "home",
    schemaId: "promo-scrolling-marquee",
    url: `${HOST}/`,
    selector:
      "#shopify-section-template--23256779391295__68b5f9b2-89f1-4b8f-bec4-4e28a892492b",
    notlar:
      "Tekrarlayan şerit: PRODUCT OFFERS FOR ATTRACTING CUSTOMER(S).",
    delta: "Görsel yok; yalnız metin marquee.",
  }),
  obs({
    sayfa: "home",
    schemaId: "collection-nav-image-cards",
    url: `${HOST}/`,
    selector:
      "#shopify-section-template--23256779391295__07468762-302d-4441-92a3-3b98a30b4cbe",
    notlar:
      "SHOP BY CATEGORY + lorem. 3 kart: BEACHWEAR · SWIMWEAR · NIGHTWEAR (Category-1.png).",
    delta: "3 büyük görsel kart; koleksiyon linkleri /collections/beachwear|swimwear|nightwear.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    instance: "2",
    url: `${HOST}/`,
    selector:
      "#shopify-section-template--23256779391295__74b4724b-d91d-4448-a0b7-bc832b624be8",
    notlar:
      "BEST SELLING + lorem. SEXY ROYAL BLUE STRAPPY HALTER… $69.",
    delta: "İkinci featured-collection. Aynı tip, ayrı instance.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-image-with-text",
    url: `${HOST}/`,
    selector:
      "#shopify-section-template--23256779391295__9523e883-4fdf-4ceb-a649-5dc38f874eec",
    notlar:
      "BRALETTE BIKINIS + lorem. Multirow-img-1.png. Dawn multirow, ~1206px.",
    delta: "Dawn multirow — birden fazla görsel+metin satırı tek section.",
  }),
  obs({
    sayfa: "home",
    schemaId: "trust-icon-row",
    url: `${HOST}/`,
    selector:
      "#shopify-section-template--23256779391295__27810045-c5a7-4308-9844-e561725ca462",
    notlar:
      "FREE SHIPPING · TOP NOTCH SUPPORT + lorem. Service_icon_1.svg.",
    delta: "Dawn multicolumn ikon sırası; en az 2 kolon.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-image-with-text-overlay",
    url: `${HOST}/`,
    selector:
      "#shopify-section-template--23256779391295__b4e42d3d-9cea-4d71-941c-1488efa21895",
    notlar:
      "MEET THE TRENDS OF THE SEASON. + lorem + SHOP. image-banner.png.",
    delta: "Dawn image-banner overlay.",
  }),
  obs({
    sayfa: "home",
    schemaId: "blog-list-main",
    url: `${HOST}/`,
    selector:
      "#shopify-section-template--23256779391295__1f806fa0-a719-4be7-9517-30f5c0bd94da",
    notlar:
      "LATEST NEWS. Kart: LAUNCHING A NEW COLLECTION THIS WEEK! (blog-1.png).",
    delta: "Home featured-blog, tam blog listesi değil.",
  }),
  obs({
    sayfa: "home",
    schemaId: "footer-columns-newsletter",
    url: `${HOST}/`,
    selector: "#shopify-section-sections--23256779882815__footer",
    notlar:
      "QUICK LINKS Home/About Us/Faq's/Blog/Contact Us · SHOP Beachwear/Swimwear/Nightwear. footer-logo.svg. Newsletter form #ContactFooter — submit yok.",
    delta: "Newsletter submit PII, duruldu.",
  }),
  obs({
    sayfa: "home",
    schemaId: "global-menu-drawer",
    url: `${HOST}/`,
    selector: "#menu-drawer",
    captureMode: "viewport",
    prepareClick: "#Details-menu-drawer-container > summary.header__icon--menu",
    notlar:
      "Hamburger → #menu-drawer. Home · Shop (classic/designer/string/retro bikini) · Best seller · New arrival · Beachwear · Swimwear · Nightwear. Log in + sosyal.",
    delta:
      "1440 hamburger VAR (Dawn large-up inline değil; header.drawer-menu). Mega yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "global-predictive-search",
    url: `${HOST}/`,
    selector: ".search-modal",
    captureMode: "viewport",
    prepareClick: "summary.header__icon--search",
    notlar:
      "Search summary → .search-modal form action=/search. Predictive host Dawn modal.",
    delta: "Öneri listesi interact'te. Submit yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "global-cart-drawer",
    url: `${HOST}/`,
    selector: "#CartDrawer",
    captureMode: "viewport",
    prepareClick: "#cart-icon-bubble",
    notlar:
      "cart-drawer empty. Your cart / Check out. #cart-icon-bubble href=/cart Dawn intercept.",
    delta: "Boş drawer. Dolu hâl interact.",
  }),

  // ── product-detail ──
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-main",
    url: `${HOST}/products/summer-swimwear-bathing-suit`,
    selector: "#shopify-section-template--23256779653439__main",
    notlar:
      "SUMMER SWIMWEAR BATHING SUIT $69/$59. Color swatch Red. Size pills S/M/L/XL. Quantity stepper. ADD TO CART.",
    delta:
      "Dawn main-product. Color yalnız Red (changed Size). Sticky ATC evidence'da.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-tabs",
    url: `${HOST}/products/summer-swimwear-bathing-suit`,
    selector:
      "#shopify-section-template--23256779653439__79582f51-5736-4bff-b870-bba69393ad36",
    notlar:
      "DESCRIPTION · ADDITIONAL INFORMATION · SHIPPING AND DELIVERY.",
    delta: "Dawn collapsible-content / tabs. Accordion vs tabs evidence'da.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "editorial-image-with-text",
    url: `${HOST}/products/summer-swimwear-bathing-suit`,
    selector:
      "#shopify-section-template--23256779653439__d362ffb7-87b2-4f33-9e31-9a3ab6c75890",
    notlar: "LATEST FASHION STYLE + lorem. product-page-img.png.",
    delta: "PDP image-with-text.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "editorial-image-with-text-overlay",
    url: `${HOST}/products/summer-swimwear-bathing-suit`,
    selector:
      "#shopify-section-template--23256779653439__9b8a63c6-2ca2-4a21-84e3-e499e13d2740",
    notlar: "DISCOVER LINGERIE + lorem + SHOP NOW. product-page-banner.png.",
    delta: "PDP image-banner.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "product-showcase-related",
    url: `${HOST}/products/summer-swimwear-bathing-suit`,
    selector: "#shopify-section-template--23256779653439__related-products",
    notlar:
      "YOU MAY ALSO LIKE + lorem. YOUNG WOMAN NIGHTWEAR GRAY BIKINI $59.",
    delta: "Dawn related-products.",
  }),

  // ── collection ──
  obs({
    sayfa: "collection",
    schemaId: "collection-banner",
    url: `${HOST}/collections/all`,
    selector: "#shopify-section-template--23256779129151__banner",
    notlar: "Collection: Products. Dawn main-collection-banner.",
    delta: "Görsel yok; başlık bant.",
  }),
  obs({
    sayfa: "collection",
    schemaId: "product-showcase-grid-plp",
    url: `${HOST}/collections/all`,
    selector: "#shopify-section-template--23256779129151__product-grid",
    notlar:
      "Sort by Featured / Most relevant / Best selling / A-Z / price. Ürün grid /collections/all.",
    delta: "Filtre/sort Dawn facets. infiniteScroll evidence'da.",
  }),

  // ── collections index ──
  obs({
    sayfa: "collections",
    schemaId: "collection-nav-grid",
    url: `${HOST}/collections`,
    selector: "#shopify-section-template--23256779424063__main",
    notlar:
      "COLLECTIONS. BEACHWEAR · BEST SELLER · BRALETTE · CLASSIC BIKINI · DESIGNER BIKINI · FEATURED COLLECTION · NEW ARRIVAL.",
    delta: "Dawn list-collections.",
  }),

  // ── search ──
  obs({
    sayfa: "search",
    schemaId: "search-results",
    url: `${HOST}/search?q=bikini`,
    selector: "#shopify-section-template--23256779850047__main",
    notlar:
      "Search: 10 results for bikini. Filter Size/Availability/Price. Sort Relevance.",
    delta: "Dawn main-search. Predictive ayrı overlay.",
  }),

  // ── cart ──
  obs({
    sayfa: "cart",
    schemaId: "cart-page-main",
    url: `${HOST}/cart`,
    selector: "#shopify-section-template--23256778998079__cart-items",
    notlar:
      "Boş: Your cart is empty · CONTINUE SHOPPING · Have an account? Log in. cart-footer h=0 boşken.",
    delta: "Dolu + qty interact. Checkout tıklanmadı.",
  }),

  // ── about-brand ──
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text-overlay",
    url: `${HOST}/pages/about-us`,
    selector:
      "#shopify-section-template--23256779456831__e173a41e-9331-41a9-ad88-ef362cf658f8",
    notlar: "ABOUT US sayfa banner.",
    delta: "Dawn image-banner; yalnız başlık.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    url: `${HOST}/pages/about-us`,
    selector:
      "#shopify-section-template--23256779456831__f669d7ea-1643-46b7-94d0-4e4adc864320",
    notlar: "ABOUT ME! + lorem.",
    delta: "About image-with-text.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    url: `${HOST}/pages/about-us`,
    selector:
      "#shopify-section-template--23256779456831__dbc23b1d-b633-4783-868d-b25b10ce7ede",
    notlar:
      "MEET THE TEAM. Amelia Fashion Designer + sosyal ikonlar.",
    delta: "Ekip kartları; features-multicolumn'a oturdu.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text-overlay",
    instance: "2",
    url: `${HOST}/pages/about-us`,
    selector:
      "#shopify-section-template--23256779456831__ae0f69b9-8d77-4132-bc45-5023d341eb82",
    notlar: "NEW BLANKS JUST DROPPED tam genişlik banner.",
    delta: "İkinci image-banner; CTA görünmedi.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    instance: "2",
    url: `${HOST}/pages/about-us`,
    selector:
      "#shopify-section-template--23256779456831__db25c28a-883d-46d4-81ce-031967d87130",
    notlar: "OUR WORK + lorem.",
    delta: "İkinci IWT.",
  }),

  // ── faq-support ──
  obs({
    sayfa: "faq-support",
    schemaId: "editorial-image-with-text-overlay",
    url: `${HOST}/pages/faqs`,
    selector:
      "#shopify-section-template--23256779522367__81b13599-f7fc-430d-8b6d-fb2415e95f4d",
    notlar: "FAQ'S. faq-banner.png.",
    delta: "FAQ sayfa banner. /pages/faq 404.",
  }),
  obs({
    sayfa: "faq-support",
    schemaId: "faq-collapsible-tabs",
    url: `${HOST}/pages/faqs`,
    selector:
      "#shopify-section-template--23256779522367__cb435de1-8958-455d-8843-8a9ef3413466",
    notlar:
      "Frequently asked question. Can I choose whichever styles I want? + lorem.",
    delta: "Dawn collapsible-content. Açık/kapalı interact.",
  }),

  // ── contact ──
  obs({
    sayfa: "contact",
    schemaId: "editorial-image-with-text-overlay",
    url: `${HOST}/pages/contact`,
    selector:
      "#shopify-section-template--23256779489599__589129dd-889c-48e9-8433-acb94802ff8c",
    notlar: "CONTACT US sayfa banner.",
    delta: "Dawn image-banner.",
  }),
  obs({
    sayfa: "contact",
    schemaId: "features-multicolumn",
    url: `${HOST}/pages/contact`,
    selector:
      "#shopify-section-template--23256779489599__63e84545-2bed-47a8-b557-6b8674fa1904",
    notlar:
      "MAIN OFFICE Workiva Ames IA · CALL US TODAY! +91 123-456-7890 · EMAIL info@example.com.",
    delta: "3 bilgi kolonu. Form ayrı.",
  }),
  obs({
    sayfa: "contact",
    schemaId: "lead-capture-form",
    url: `${HOST}/pages/contact`,
    selector: "#shopify-section-template--23256779489599__form",
    notlar:
      "WE'D LOVE TO HEAR FROM YOU! Name / Email * / Phone / Comment / SUBMIT. Submit PII, dur.",
    delta: "Dawn contact form. input/submit yoklandı değil.",
  }),

  // ── blog ──
  obs({
    sayfa: "blog-list",
    schemaId: "blog-list-main",
    url: `${HOST}/blogs/news`,
    selector: "#shopify-section-template--23256778965311__main",
    notlar:
      "News. LAUNCHING A NEW COLLECTION THIS WEEK! OCTOBER 14, 2023. Sayfa 2 var.",
    delta: "Dawn main-blog.",
  }),
  obs({
    sayfa: "blog-post",
    schemaId: "blog-post-main",
    url: `${HOST}/blogs/news/launching-a-new-collection-this-week`,
    selector: "#shopify-section-template--23256778932543__main",
    notlar:
      "LAUNCHING A NEW COLLECTION THIS WEEK! OCTOBER 14, 2023. Share. Sample Unordered/Ordered List.",
    delta: "Dawn article.",
  }),

  // ── 404 ──
  obs({
    sayfa: "not-found",
    schemaId: "page-content-main",
    url: `${HOST}/404-qante-probe-missing`,
    selector: "#shopify-section-template--23256778899775__main",
    notlar: "404 · Page not found · CONTINUE SHOPPING.",
    delta: "Dawn 404. /pages/about ve /pages/faq aynı şablon.",
  }),
];

for (const { fileStem, sayfa, out } of items) {
  const dir = path.join(root, "observations", TEMA, PRESET, sayfa);
  fs.mkdirSync(dir, { recursive: true });
  const dest = path.join(dir, `${fileStem}.json`);
  fs.writeFileSync(dest, JSON.stringify(out, null, 2) + "\n");
  console.log(path.relative(root, dest));
}
console.log("count", items.length);
