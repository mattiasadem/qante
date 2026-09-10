/**
 * Generate Kitchen Ware (Speedo) observation JSON — run once, then batch capture.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const KAYNAK = "kitchen";
const PRESET = "default";
const BASE = "https://kitchen-ware-online-store.myshopify.com/";
const PDP =
  "https://kitchen-ware-online-store.myshopify.com/products/pressure-cooker-3-litre";
const PLP = "https://kitchen-ware-online-store.myshopify.com/collections/all";
const COLLECTIONS = "https://kitchen-ware-online-store.myshopify.com/collections";
const SEARCH = "https://kitchen-ware-online-store.myshopify.com/search?q=pan";
const CART = "https://kitchen-ware-online-store.myshopify.com/cart";
const ABOUT =
  "https://kitchen-ware-online-store.myshopify.com/pages/about-layout-1";
const CONTACT = "https://kitchen-ware-online-store.myshopify.com/pages/contact";
const FAQ = "https://kitchen-ware-online-store.myshopify.com/pages/faq";
const BLOG = "https://kitchen-ware-online-store.myshopify.com/blogs/news";
const POST =
  "https://kitchen-ware-online-store.myshopify.com/blogs/news/must-have-kitchen-tools-for-effortless-home-cooking";

const DELTA =
  "Shopify.theme.name kitchen-ware-v-1-5-0-OPTIMIZED · schema_name Kitchen Ware · schema_version 1.5.0 · theme_store_id null · role main · id 150878355549 · shop kitchen-ware-online-store.myshopify.com · Speedo Themes third-party OS 2.0 (Theme Store resmi değil). Vendor-published demo password 1 (public storefront unlock).";

function obs({
  sayfa,
  schemaId,
  selector,
  url = BASE,
  notlar = "",
  delta = DELTA,
  suffix = "",
  extra = {},
}) {
  const fileSuffix = suffix ? `-${suffix}` : "";
  const idSuffix = suffix ? `.${suffix}` : "";
  const observationId = `${KAYNAK}.${PRESET}.${sayfa}.${schemaId}${idSuffix}`;
  const relDir = `observations/${KAYNAK}/${PRESET}/${sayfa}`;
  const fileName = `${schemaId}${fileSuffix}.json`;
  const base = {
    observationId,
    schemaId,
    kaynak: KAYNAK,
    preset: PRESET,
    sayfa,
    url,
    selector,
    evidenceSlug: schemaId + fileSuffix,
    evidence: [],
    notlar,
    delta,
    storefrontPassword: "1",
    capture: {
      url,
      viewports: ["375", "768", "1440"],
      method: "margin-box+minPad8",
      updatedAt: "",
    },
    ...extra,
  };
  return { relDir, fileName, base };
}

const items = [
  obs({
    sayfa: "home",
    schemaId: "promo-announcement-bar",
    selector:
      "#shopify-section-sections--20650346807389__announcement_bar_fHNTbB",
    notlar:
      "Üst ticker: EXTRA 25% OFF SITEWIDE | CODE : SHOP2025 · EXTRA 20% OFF DINING SET | CODE : SHOP2025. slideshow-component. Kupon kodu görüldü; checkout/kupon uygulanmadı.",
  }),
  obs({
    sayfa: "home",
    schemaId: "navigation-header-mega",
    selector: "#shopify-section-sections--20650346807389__header",
    notlar:
      "header--middle-left. Nav Home / Shop (details#Details-HeaderMenu-2.mega-menu) / Best Sellers / Themes / Collections / Category. Search details-modal.header__search, wishlist 0, compare 0, Log in, #cart-icon-bubble Cart. 1440 hamburger 0×0; 375 summary.header__icon--menu. Account tıklanmadı.",
    extra: { captureMode: "viewport" },
  }),
  obs({
    sayfa: "home",
    schemaId: "collection-nav-slider",
    selector:
      "#shopify-section-template--20650347331677__collection_slider_wk9nMQ",
    notlar:
      "Yatay kategori şeridi: Bowls (11), Baskets (5), Cake Stand (2), Coasters (5), Coffee Wear (7), Dining (17), Centerpiece (1), Candle (3), Bestsellers (11), Collection (14). Sayaç merchant değil koleksiyon ürün sayısı.",
  }),
  obs({
    sayfa: "home",
    schemaId: "hero-slideshow",
    selector:
      "#shopify-section-template--20650347331677__3b7cb796-4e44-4edc-96f9-002a08ba8170",
    notlar:
      "slideshow-section. upgrade your · COOKING EXPERIENCES · Upgrade your kitchen with our premium cookware… · SHOP KITCHENWARE. Metin iki kez (slayt tekrarı). CTA /collections/all.",
  }),
  obs({
    sayfa: "home",
    schemaId: "collection-nav-image-cards",
    selector:
      "#shopify-section-template--20650347331677__collection_list_4MnmjU",
    notlar:
      "section-collection-list. 3 büyük kart: Trending Cookware / Bakeware / Accessories · EXPLORE COLLECTION. Slider işaretli. Grid değil; büyük görsel + overlay CTA.",
  }),
  obs({
    sayfa: "home",
    schemaId: "promo-scrolling-marquee",
    selector:
      "#shopify-section-template--20650347331677__custom_announcement_bar_zqchrk",
    notlar:
      "Orta sayfa marquee: FREE SHIPPING ON ORDERS OVER $75 · USE CODE SPEEDO10 FOR ADDITIONAL 10% DISCOUNT · RETURNS EXTENDED TO 30 DAYS · SALE 20% OFF ALL. USE CODE SPEEDO · JOIN OUR EMAIL LIST AND RECEIVE 20% OFF. Kupon uygulanmadı.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-tabs",
    selector:
      "#shopify-section-template--20650347331677__homepage_product_tab_RncYLf",
    notlar:
      "Best Seller. Sekmeler ACCESSORIES / FEATURED / LATEST. Kart: BESTSELLER · Pressure Cooker (5 litre) $85 · QUICK SHOP. Slider + product grid. Tab href #…-tab-1/2/3.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-image-with-text-overlay",
    selector:
      "#shopify-section-template--20650347331677__image_banner_JmW9NK",
    notlar:
      "image_banner. Round Dutch Frypan · Feels like you are on the kitchen · EXPLORE NOW. Tek slayt overlay, koleksiyon bağlamı yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "media-shop-the-feed",
    selector:
      "#shopify-section-template--20650347331677__shopable_videos_P86GMK",
    notlar:
      "shopable_videos. Kartlar NEW Pressure Cooker $85 · ON SALE Hawkins Futura $90 · TRENDING Prato Air Fryer $240. Video/UGC akış + ürün fiyatı. Sibling #shopify-section-shopable-videos-fixed h=0 leftover.",
  }),
  obs({
    sayfa: "home",
    schemaId: "features-multicolumn",
    selector:
      "#shopify-section-template--20650347331677__custom_multicolumn_list_33RpJf",
    notlar:
      "Must-Try Recipes · Check our original chef-crafted recipes…. 4 kart (Dough pice rolls / Fried Chicken Pop / Lavash rolls / Roasted beef). Slider var; ikon USP değil tarif kartı.",
  }),
  obs({
    sayfa: "home",
    schemaId: "testimonial-quote-carousel",
    selector: "#shopify-section-template--20650347331677__testimonial_d6pHJf",
    notlar:
      "What Our Client Says. Leslie A. / Jenny W. / Sophia R. / Courtney H. / Brooklyn S. slideshow-component. Mutfak ürünü yorumları.",
  }),
  obs({
    sayfa: "home",
    schemaId: "blog-list-main",
    selector:
      "#shopify-section-template--20650347331677__588ae6a9-e23f-4b45-83e9-2723eeb61871",
    notlar:
      "Latest Posts. 3 yazı: Must-Have Kitchen Tools… / The truth about non-stick cookware… / Kitchenware That Speeds Up…. READ MORE. Slider.",
  }),
  obs({
    sayfa: "home",
    schemaId: "lead-capture-newsletter-band",
    selector: "#shopify-section-sections--20650346774621__newsletter_TtPD6k",
    notlar:
      "Footer grubu kardeş bant. Newslatter Subscribe (yazım demoda). Be the first to know…. Form var; submit yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "footer-columns-newsletter",
    selector: "#shopify-section-sections--20650346774621__footer",
    notlar:
      "Sosyal Facebook/Instagram/X/Pinterest. Quick Links Home/About Us/Contact Us/Faq/Blog. Shop Cookware. Newsletter ayrı sibling (lead-capture-newsletter-band). Submit yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "global-cart-drawer",
    selector: "#CartDrawer",
    notlar:
      "Dawn cart-drawer.shipping. cart-drawer.is-empty. Opener #cart-icon-bubble. Checkout tıklanmadı.",
    extra: {
      captureMode: "viewport",
      prepareClick: "#cart-icon-bubble",
    },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-menu-drawer",
    selector: "#menu-drawer",
    notlar:
      "details#Details-menu-drawer-container → #menu-drawer. 1440 0×0. Home/Shop/Best Sellers/Themes/Collections/Category + wishlist/compare/Log in + localization. Shop yazılı <a href=/collections/all>.",
    extra: {
      captureMode: "viewport",
      prepareClick: "summary.header__icon--menu",
    },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-predictive-search",
    selector:
      "details-modal.header__search, predictive-search.search-modal__form",
    notlar:
      "details-modal.header__search 28×28 ikon. predictive-search.search-modal__form kapalı w=0. katalogSorgu aday: pan / cooker.",
    extra: {
      captureMode: "viewport",
      prepareClick:
        "details-modal.header__search summary.header__icon--search, summary.header__icon--search",
    },
  }),

  obs({
    sayfa: "product-detail",
    schemaId: "product-info-main",
    selector: "#shopify-section-template--20650346840157__main",
    url: PDP,
    notlar:
      "Pressure Cooker (5 litre) $85. Size 1 Litre / 2 Litre / 5 Litre (hepsi $85 available). Fast Shipping · 24/7 support · 30 days return. Add to cart. Handle pressure-cooker-3-litre; vitrin adı 5 litre.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-tabs",
    selector:
      "#shopify-section-template--20650346840157__79582f51-5736-4bff-b870-bba69393ad36",
    url: PDP,
    notlar:
      "Description / Additional Information / Shipping And Delivery. Açık kare Description lorem. BUY IT NOW yok bu blokta.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "media-video-hero",
    selector: "#shopify-section-template--20650346840157__video_NWBDjf",
    url: PDP,
    notlar:
      "New Arrival · Our Latest Collection · There are many variations of passages of Lorem Ipsum available. Video hero + metin.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "features-multicolumn",
    selector: "#shopify-section-template--20650346840157__multicolumn_VH4Wqb",
    url: PDP,
    notlar:
      "Made with Love / Innovation & Safe / Eco Friendly. Metin moda leftover (handcraft clothes…) — mutfak vitrine uymuyor.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "editorial-image-with-text",
    selector: "#shopify-section-template--20650346840157__multirow_nmyQVH",
    url: PDP,
    notlar:
      "multirow. LATEST Latest Kitchen Style + TRENDING New Kitchen Product. İki görsel+metin satırı, lorem.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "trust-icon-row",
    selector: "#shopify-section-template--20650346840157__service_icon_yLrPgn",
    url: PDP,
    notlar:
      "4 ikon: FREE SHIPPING · SUPPORT 24/7 · 100% MONEY BACK · SECURE PAYMENTS.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-grid-banner",
    selector: "#shopify-section-template--20650346840157__sub_banner_3tq9yU",
    url: PDP,
    notlar:
      "2 kart: Exclusive Offer! New Season, New Style Up to 50% Off Shop Now · Shop Our Latest Arrivals Incredible Deals Shop Now.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "faq-collapsible-tabs",
    selector:
      "#shopify-section-template--20650346840157__collapsible_content_Ya3Wzj",
    url: PDP,
    notlar:
      "Faq. How do I place an order? / shipping / return policy / return or exchange / right size. Kapalı kare.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-scrolling-marquee",
    selector:
      "#shopify-section-template--20650346840157__custom_announcement_bar_zqchrk",
    url: PDP,
    notlar:
      "PDP marquee (home'dan farklı metin): Free shipping on orders over £75 · 10% OFF on all Kitchen ware · Returns extended to 60 days · SALE 20% off all. Use code SPEEDO.",
  }),

  obs({
    sayfa: "collection",
    schemaId: "collection-banner",
    selector: "#shopify-section-template--20650347266141__banner",
    url: PLP,
    notlar: "Collection: Products. 200px banner. /collections/all.",
  }),
  obs({
    sayfa: "collection",
    schemaId: "collection-nav-slider",
    selector:
      "#shopify-section-template--20650347266141__collection_slider_mM7Ybk",
    url: PLP,
    notlar:
      "PLP kategori şeridi: Bowls Wear / Dining Wear / Accessories / Coasters / Cook Wear / Candle Wear / Cake Stand Wear / Coffee Wear. Home slider'dan ayrı instance.",
  }),
  obs({
    sayfa: "collection",
    schemaId: "product-showcase-grid-plp",
    selector: "#shopify-section-template--20650347266141__product-grid",
    url: PLP,
    notlar:
      "Home Products. Filters Color (Beige 4 / Black 7 / Blue 5 / Brown 4…). Sort + grid. Filtre interact ayrı.",
  }),

  obs({
    sayfa: "collections",
    schemaId: "collection-nav-grid",
    selector: "#shopify-section-template--20650347429981__main",
    url: COLLECTIONS,
    notlar:
      "main-list-collection. COLLECTIONS: Accessories, Bakeware, Baskets, Best Seller, Bowls, Cake Stand, Candle, Centerpiece, Coasters, Coffee Wear, Collection layout 1…",
  }),

  obs({
    sayfa: "search",
    schemaId: "search-results",
    selector: "#shopify-section-template--20650347724893__main",
    url: SEARCH,
    notlar:
      "Search: 7 results found for \"pan\". Filters Color/Category/Availability/Price. Sort Relevance. İlk kart Hawkins Futura Nonstick Frying Pan.",
  }),

  obs({
    sayfa: "cart",
    schemaId: "cart-page-main",
    selector: "#shopify-section-template--20650346971229__cart-items",
    url: CART,
    notlar:
      "Your cart is empty · Continue Shopping · Have an account? Log in to check out faster. Sibling cart-footer h=0 boşken. Checkout/login yok.",
  }),

  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text-overlay",
    selector: "#shopify-section-template--20650347397213__parallax_PVEayx",
    url: ABOUT,
    notlar:
      "/pages/about ve /pages/about-us 404. Bu sayfa about-layout-1. Parallax banner yalnız About Us.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    selector:
      "#shopify-section-template--20650347397213__f669d7ea-1643-46b7-94d0-4e4adc864320",
    url: ABOUT,
    notlar: "About Me! + lorem + VIEW MORE.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    selector: "#shopify-section-template--20650347397213__multicolumn_JJN6DY",
    url: ABOUT,
    notlar: "Made with Love / Innovation & Safe / Eco Friendly. 3 kolon.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    suffix: "2",
    selector:
      "#shopify-section-template--20650347397213__image_with_icons_MDF73t",
    url: ABOUT,
    notlar:
      "Kitchen Ware Work and Quality. Material / Design / Quality + lorem. İkon+metin kolonları.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    suffix: "2",
    selector:
      "#shopify-section-template--20650347397213__ae0f69b9-8d77-4132-bc45-5023d341eb82",
    url: ABOUT,
    notlar: "Finding Unique Fashion + lorem. Moda leftover kopya.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    suffix: "3",
    selector:
      "#shopify-section-template--20650347397213__dbc23b1d-b633-4783-868d-b25b10ce7ede",
    url: ABOUT,
    notlar: "Our Team. Freya Product Designer / Oliver Director / Hazel Marketing Manager.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "social-proof-brand-logos",
    selector: "#shopify-section-template--20650347397213__brand_logo_k3ngrY",
    url: ABOUT,
    notlar: "brand_logo. 179px; görünür metin yok (logo şeridi).",
  }),

  obs({
    sayfa: "contact",
    schemaId: "editorial-rich-text",
    selector: "#shopify-section-template--20650347855965__rich_text_NHb3xF",
    url: CONTACT,
    notlar: "Contact Us başlığı. 116px.",
  }),
  obs({
    sayfa: "contact",
    schemaId: "lead-capture-form",
    selector: "#shopify-section-template--20650347855965__contact_form_TQQ3Yn",
    url: CONTACT,
    notlar:
      "Name / Email * / Phone number / Comment / Submit. Submit yok. 1-2 business days metni.",
  }),

  obs({
    sayfa: "faq-support",
    schemaId: "editorial-image-with-text-overlay",
    selector: "#shopify-section-template--20650347036765__parallax_MU48pr",
    url: FAQ,
    notlar: "Faq's parallax banner 300px. /pages/faqs ve /pages/faq-s 404.",
  }),
  obs({
    sayfa: "faq-support",
    schemaId: "faq-collapsible-tabs",
    selector:
      "#shopify-section-template--20650347036765__cb435de1-8958-455d-8843-8a9ef3413466",
    url: FAQ,
    notlar:
      "Frequently asked question. İlk soru açık: Can I choose whichever styles I want? + lorem. Diğerleri kapalı (fit / swap / signed up / refunds / account info).",
  }),

  obs({
    sayfa: "blog-list",
    schemaId: "blog-list-main",
    selector: "#shopify-section-template--20650347003997__main",
    url: BLOG,
    notlar:
      "News. 3 yazı 21 Apr 2025: Must-Have Kitchen Tools… / The truth about non-stick… / Kitchenware That Speeds Up…. READ MORE.",
  }),
  obs({
    sayfa: "blog-post",
    schemaId: "blog-post-main",
    selector: "#shopify-section-template--20650346905693__main",
    url: POST,
    notlar:
      "Must-Have Kitchen Tools for Effortless Home Cooking · APRIL 21, 2025 · Share. Sharp Chef's Knife / Cutting Board gövde.",
  }),
];

let written = 0;
for (const { relDir, fileName, base } of items) {
  const dir = path.join(root, relDir);
  fs.mkdirSync(dir, { recursive: true });
  const dest = path.join(dir, fileName);
  fs.writeFileSync(dest, JSON.stringify(base, null, 2) + "\n");
  written += 1;
  console.log("wrote", path.relative(root, dest));
}
console.log(`\n${written} observations`);
