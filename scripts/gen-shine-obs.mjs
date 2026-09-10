/**
 * Generate Shine (women-beauty-9) observation JSON — run once, then official capture.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const KAYNAK = "shine";
const PRESET = "default";
const BASE = "https://women-beauty-9.myshopify.com";
const PDP = `${BASE}/products/beauty-liquid-matte`;
const PLP = `${BASE}/collections/skincare`;
const ABOUT = `${BASE}/pages/about-layout-1`;
const CONTACT = `${BASE}/pages/contact-layout-1`;
const FAQ = `${BASE}/pages/faq`;
const STORY = `${BASE}/pages/our-story`;
const BLOG = `${BASE}/blogs/news`;
const POST = `${BASE}/blogs/news/natural-beauty-tips-for-your-daily-body-skin-care`;
const NOTFOUND = `${BASE}/pages/this-page-does-not-exist-qante`;

const DELTA =
  "Shopify.theme.name Shine V-1.5.0 · schema_name Shine · schema_version 1.5.0 · theme_store_id null · role main · id 151002284288 · shop women-beauty-9.myshopify.com · Speedo Themes third-party (Theme Store official değil). Vendor-published demo password 1 (public storefront unlock). Walk host women-beauty-9.myshopify.com only.";

function obs({
  sayfa,
  schemaId,
  selector,
  url = `${BASE}/`,
  notlar = "",
  delta = DELTA,
  file,
  obsSuffix = "",
  extra = {},
}) {
  const fileBase = file || `${schemaId}${obsSuffix ? `-${obsSuffix.replace(/^\./, "")}` : ""}`;
  const observationId = `${KAYNAK}.${PRESET}.${sayfa}.${schemaId}${obsSuffix}`;
  const evidenceSlug = fileBase;
  return {
    relDir: `observations/${KAYNAK}/${PRESET}/${sayfa}`,
    fileName: `${fileBase}.json`,
    base: {
      observationId,
      schemaId,
      kaynak: KAYNAK,
      preset: PRESET,
      sayfa,
      url,
      selector,
      evidenceSlug,
      evidence: [],
      storefrontPassword: "1",
      notlar,
      delta,
      capture: {
        url,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
      ...extra,
    },
  };
}

const items = [
  // HOME
  obs({
    sayfa: "home",
    schemaId: "promo-announcement-bar",
    selector: "#shopify-section-sections--19497186951424__announcement_bar_fHNTbB",
    notlar: "Üst şerit: Free shipping and gift over $50.",
    delta: "Tek satır announcement. Country/locale bu barda değil.",
  }),
  obs({
    sayfa: "home",
    schemaId: "navigation-header-mega",
    selector: "#shopify-section-sections--19497186951424__header",
    notlar:
      "Shop / Best Sellers / Themes / Shop By / Collections + Search + wishlist 0 + Log in + Cart. Logo Shine. details#Details-HeaderMenu-1..5.",
    extra: { captureMode: "viewport" },
  }),
  obs({
    sayfa: "home",
    schemaId: "hero-slideshow",
    selector:
      "#shopify-section-template--19497186066688__3b7cb796-4e44-4edc-96f9-002a08ba8170",
    notlar:
      "Be you, Be Beautiful · Revel Your Most Radiant Shine · Shop Now. İkinci slayt Beauty that Inspires / Love the Skin You're In. slideshow-component.",
    delta: "En az 2 slayt. Speedo image-banner slideshow.",
  }),
  obs({
    sayfa: "home",
    schemaId: "social-proof-brand-logos",
    selector: "#shopify-section-template--19497186066688__logo_slider_ebLLt4",
    notlar: "logo_slider — logo-3…logo-10 PNG şerit. Metin yok.",
    delta: "Marka adı slot’ta görünmüyor; yalnız görsel.",
  }),
  obs({
    sayfa: "home",
    schemaId: "collection-nav-image-cards",
    selector:
      "#shopify-section-template--19497186066688__07468762-302d-4441-92a3-3b98a30b4cbe",
    notlar:
      "Skincare / Makeup / Facecare / Bundle / Best Sellers. slider-component.",
    delta: "Speedo 07468762 collection list — Andrea/Qreal aynı blok ailesi.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    selector:
      "#shopify-section-template--19497186066688__0617c2f2-69ec-4df8-a506-b2616d4e1db4",
    notlar:
      "Our Best Sellers · Eye Shadow Lipstick $99/$89 · Beauty Liquid Matte · quick shop.",
    delta: "QUICK SHOP kartta. Wishlist/compare leftover.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-image-with-text",
    selector:
      "#shopify-section-template--19497186066688__multicolumn_video_text_enVxxQ",
    notlar:
      "Glow from Within · lorem · Shop Collection. İki deferred-media + orta metin.",
    delta: "multicolumn_video_text — video medya; tek video-hero değil.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-image-with-text",
    file: "editorial-image-with-text-2",
    obsSuffix: ".2",
    selector: "#shopify-section-template--19497186066688__text_with_image_pw6YLT",
    notlar:
      "Empower Your Skin care + üç görsel (image-with-text-img-1/2/3) + high-performance ingredients metni.",
    delta: "İkinci IWT instance. CTA yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "before-after-slider",
    selector: "#shopify-section-template--19497186066688__before_after_yLGr3p",
    notlar: "before-img.jpg / after-img.jpg. Başlık metni boş.",
    delta: "Metin yok; yalnız karşılaştırma görselleri.",
  }),
  obs({
    sayfa: "home",
    schemaId: "testimonial-quote-carousel",
    selector: "#shopify-section-template--19497186066688__section_reviews_9KT7pk",
    notlar: "What People Are Saying · Ralph Edwards / Kristin Watson alıntı. slider-component.",
    delta: "İsim + tırnak; yıldız görünmedi.",
  }),
  obs({
    sayfa: "home",
    schemaId: "blog-list-main",
    selector:
      "#shopify-section-template--19497186066688__588ae6a9-e23f-4b45-83e9-2723eeb61871",
    notlar:
      "Latest Blog · 23 Sep 2025 · Natural Beauty Tips… / Younger-Looking Skin / All-Natural Ingredients… · READ MORE.",
    delta: "Home featured-blog instance.",
  }),
  obs({
    sayfa: "home",
    schemaId: "media-shop-the-feed",
    selector: "#shopify-section-template--19497186066688__shopable_videos_gwWM7G",
    notlar: "Quick Shine Tips · shine-tips-1…7.gif şerit. slider-component.",
    delta: "shopable_videos — GIF akış; ürün hotspot bu karede okunmadı.",
  }),
  obs({
    sayfa: "home",
    schemaId: "trust-icon-row",
    selector: "#shopify-section-template--19497186066688__service_icon_cRV7DD",
    notlar:
      "service_icon: free-shipping / money-back-guaranteed / secure-payment / award-winning SVG. Düz metin boş.",
    delta: "Etiket görselde; innerText boş.",
  }),
  obs({
    sayfa: "home",
    schemaId: "footer-columns-newsletter",
    selector: "#shopify-section-sections--19497186918656__footer",
    notlar:
      "Newslatter Subscribe + email + Quick Links (About Us /pages/about-layout-1 · Contact /pages/contact-layout-1 · Faq /pages/faq) · Collections · policies · Compare. Submit yok.",
    delta: "Ayrı newsletter section yok — bant footer içinde. PII submit yok.",
  }),
  obs({
    sayfa: "home",
    schemaId: "global-cart-drawer",
    selector: "#CartDrawer",
    notlar: "Dawn #CartDrawer. Statik prepareClick #cart-icon-bubble.",
    extra: {
      captureMode: "viewport",
      prepareClick: "#cart-icon-bubble",
    },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-menu-drawer",
    selector: "#menu-drawer",
    notlar: "#menu-drawer · hamburger summary.header__icon--menu. 1440’ta 0×0 olabilir.",
    extra: {
      captureMode: "viewport",
      prepareClick: ".header__icon--menu",
    },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-predictive-search",
    selector: "details-modal.header__search",
    notlar: "details-modal.header__search + predictive-search. 1440 inline / mobil ikon.",
    extra: {
      captureMode: "viewport",
      prepareClick: "summary.header__icon--search",
    },
  }),

  // PLP skincare
  obs({
    sayfa: "collection",
    schemaId: "collection-banner",
    selector: "#shopify-section-template--19497185804544__banner",
    url: PLP,
    notlar: "Collection: Skincare başlık bandı.",
  }),
  obs({
    sayfa: "collection",
    schemaId: "collection-nav-slider",
    selector: "#shopify-section-template--19497185804544__collection_slider_mM7Ybk",
    url: PLP,
    notlar:
      "Cosmetics · Make Up · Facecare · Bundle · Bodycare · Skincare · Accessories şerit.",
    delta: "PLP üstü koleksiyon slider.",
  }),
  obs({
    sayfa: "collection",
    schemaId: "product-showcase-grid-plp",
    selector: "#shopify-section-template--19497185804544__product-grid",
    url: PLP,
    notlar: "Filters Color/Availability/Price + ürün grid. Home › Skincare.",
    delta: "Dikey facets. infiniteScroll görülmedi.",
  }),

  // collections index
  obs({
    sayfa: "collections",
    schemaId: "collection-nav-grid",
    selector: "#shopify-section-template--19497186099456__main",
    url: `${BASE}/collections`,
    notlar:
      "COLLECTIONS grid: Accessories / Best Sellers / Bodycare / Bundle / Cosmetics / Facecare…",
  }),

  // search
  obs({
    sayfa: "search",
    schemaId: "search-results",
    selector: "#shopify-section-template--19497186885888__main",
    url: `${BASE}/search?q=cream`,
    notlar: "Search: 10 results found for cream. Filters + Relevance.",
    delta: "Title 10 sonuç. Submit yok.",
  }),

  // cart
  obs({
    sayfa: "cart",
    schemaId: "cart-page-main",
    selector: "#shopify-section-template--19497185673472__cart-items",
    url: `${BASE}/cart`,
    notlar:
      "Your cart is empty · Continue Shopping · Have an account? Log in. cart-footer h=0 boşken.",
    delta: "Boş kare. Dolu interact. Checkout / Log in yok.",
  }),

  // PDP
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-main",
    selector: "#shopify-section-template--19497186656512__main",
    url: PDP,
    notlar:
      "Beauty Liquid Matte $99/$89 · Color Antique White / White Chocolate / Pale Taupe · qty · Add To Cart · Buy it now. Stock 350 · Hurry up countdown. Size Guide.",
    delta: "variant-selects Color. BUY IT NOW leftover. WhatsApp/email leftover.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-tabs",
    selector:
      "#shopify-section-template--19497186656512__79582f51-5736-4bff-b870-bba69393ad36",
    url: PDP,
    notlar: "Description / Additional Information / Shipping And Delivery.",
    delta: "Üç sekme. Qreal aynı 79582f51 ailesi.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "media-video-hero",
    selector: "#shopify-section-template--19497186656512__video_NWBDjf",
    url: PDP,
    notlar: "New Arrival · Our Latest Collection · lorem. deferred-media.",
    delta: "PDP video. Autoplay doğrulanmadı.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "features-multicolumn",
    selector: "#shopify-section-template--19497186656512__multicolumn_VH4Wqb",
    url: PDP,
    notlar: "Made with Love / Innovation & Safe / Eco Friendly — 3 kolon.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "editorial-image-with-text-overlay",
    selector: "#shopify-section-template--19497186656512__image_banner_UmFDDa",
    url: PDP,
    notlar: "image_banner — görsel bant; dump’ta düz metin boş.",
    delta: "Görsel-only overlay adayı.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "editorial-image-with-text",
    selector: "#shopify-section-template--19497186656512__multirow_nmyQVH",
    url: PDP,
    notlar:
      "LATEST Feel fresh, look fabulous. / TRENDING Beauty begins with confidence. multirow.",
    delta: "İki satır IWT stacked.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "trust-icon-row",
    file: "trust-icon-row-2",
    obsSuffix: ".2",
    selector: "#shopify-section-template--19497186656512__service_icon_yLrPgn",
    url: PDP,
    notlar:
      "FREE SHIPPING / SUPPORT 24/7 / 100% MONEY BACK / SECURE PAYMENTS.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-grid-banner",
    selector: "#shopify-section-template--19497186656512__sub_banner_3tq9yU",
    url: PDP,
    notlar:
      "Exclusive Offer! New Season, New Style Up to 50% Off Shop Now · Shop Our Latest Arrivals Incredible Deals.",
    delta: "İki hücre promo. Timer yok.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "faq-collapsible-tabs",
    selector:
      "#shopify-section-template--19497186656512__collapsible_content_Ya3Wzj",
    url: PDP,
    notlar:
      "Faq · How do I place an order? / shipping / return / exchange / size. details.",
    delta: "PDP collapsible; sayfa FAQ ayrı.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "promo-scrolling-marquee",
    selector:
      "#shopify-section-template--19497186656512__custom_announcement_bar_zqchrk",
    url: PDP,
    notlar:
      "Free shipping on orders over £75 · 10% OFF · Returns 60 days · SALE 20% SPEEDO · Email List 20% off.",
    delta: "custom_announcement_bar kayan şerit.",
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "product-showcase-related",
    selector: "#shopify-section-template--19497186656512__related-products",
    url: PDP,
    notlar: "You may also like · Dazzleshadow Liquid $30/$24.99 · Eye Shadow Lipstick.",
  }),

  // about-layout-1
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text-overlay",
    selector: "#shopify-section-template--19497186132224__parallax_PVEayx",
    url: ABOUT,
    notlar: "About Us parallax başlık. Footer About Us → /pages/about-layout-1.",
    delta: "/pages/about ve /about-us 404.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    selector:
      "#shopify-section-template--19497186132224__f669d7ea-1643-46b7-94d0-4e4adc864320",
    url: ABOUT,
    notlar: "About Me! + lorem + VIEW MORE.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    selector: "#shopify-section-template--19497186132224__multicolumn_JJN6DY",
    url: ABOUT,
    notlar: "Made with Love / Innovation & Safe / Eco Friendly.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    file: "features-multicolumn-2",
    obsSuffix: ".2",
    selector: "#shopify-section-template--19497186132224__image_with_icons_MDF73t",
    url: ABOUT,
    notlar:
      "Shine Beauty Work and Quality · Best skin care products / Natural ingredients / End-to-end beauty solution.",
    delta: "image_with_icons — ikon + başlık + metin. Takım şeması değil.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text-overlay",
    file: "editorial-image-with-text-overlay-2",
    obsSuffix: ".2",
    selector:
      "#shopify-section-template--19497186132224__ae0f69b9-8d77-4132-bc45-5023d341eb82",
    url: ABOUT,
    notlar: "Finding Unique Beauty + lorem overlay.",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "social-proof-brand-logos",
    selector: "#shopify-section-template--19497186132224__brand_logo_k3ngrY",
    url: ABOUT,
    notlar: "brand_logo şerit (metin boş).",
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "page-content-main",
    selector: "#shopify-section-template--19497186263296__main",
    url: STORY,
    notlar:
      "Our Story düz sayfa: Introduction / Philosophy / Team / Commitment lorem.",
    delta: "/pages/our-story page template. Footer About Us bu değil.",
  }),

  // contact-layout-1
  obs({
    sayfa: "contact",
    schemaId: "editorial-image-with-text-overlay",
    selector: "#shopify-section-template--19497186328832__parallax_xhTEL3",
    url: CONTACT,
    notlar: "Contact Us parallax. Footer Contact Us → /pages/contact-layout-1. /pages/contact aynı template.",
  }),
  obs({
    sayfa: "contact",
    schemaId: "features-multicolumn",
    selector:
      "#shopify-section-template--19497186328832__63e84545-2bed-47a8-b557-6b8674fa1904",
    url: CONTACT,
    notlar:
      "Main Office · Workiva Ames IA · +91 123-456-7890 · info@example.com.",
    delta: "Tek ofis kartı + iletişim. Map ayrı leftover.",
  }),
  obs({
    sayfa: "contact",
    schemaId: "lead-capture-form",
    selector:
      "#shopify-section-template--19497186328832__contact_form_with_image_HhhxgY",
    url: CONTACT,
    notlar:
      "We'd Love To Hear From You! Name / Email* / Phone / Comment / Submit. Submit yok.",
    delta: "PII stop.",
  }),

  // FAQ
  obs({
    sayfa: "faq-support",
    schemaId: "editorial-image-with-text-overlay",
    selector: "#shopify-section-template--19497186492672__parallax_MU48pr",
    url: FAQ,
    notlar: "Faq's parallax başlık. /pages/faqs 404.",
  }),
  obs({
    sayfa: "faq-support",
    schemaId: "faq-collapsible-tabs",
    selector:
      "#shopify-section-template--19497186492672__cb435de1-8958-455d-8843-8a9ef3413466",
    url: FAQ,
    notlar:
      "Frequently asked question · Can I choose whichever styles I want? (açık) + 5 kapalı.",
    delta: "İlk soru açık (openFirst).",
  }),

  // blog
  obs({
    sayfa: "blog-list",
    schemaId: "blog-list-main",
    selector: "#shopify-section-template--19497185640704__main",
    url: BLOG,
    notlar: "News listesi · 23 Sep 2025 kartlar + READ MORE.",
  }),
  obs({
    sayfa: "blog-post",
    schemaId: "blog-post-main",
    selector: "#shopify-section-template--19497185607936__main",
    url: POST,
    notlar:
      "Natural Beauty Tips For Your Daily Body Skin Care · SEPTEMBER 23, 2025 · Share + gövde.",
  }),

  // 404
  obs({
    sayfa: "not-found",
    schemaId: "page-content-main",
    selector: "#shopify-section-template--19497185575168__main",
    url: NOTFOUND,
    notlar:
      "404 · Page not found · We’re sorry something has gone wrong on our end. · Back To Homepage · Continue Shopping.",
    delta: "/pages/about-us /about /contact-us /faqs aynı 404 template.",
  }),
];

for (const item of items) {
  const dir = path.join(root, item.relDir);
  fs.mkdirSync(dir, { recursive: true });
  const dest = path.join(dir, item.fileName);
  fs.writeFileSync(dest, JSON.stringify(item.base, null, 2) + "\n");
  console.log("wrote", path.relative(root, dest));
}
console.log("total", items.length);
