/**
 * Generate Coffee Prime observation JSON files — run once, then batch capture.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const KAYNAK = "coffee-prime";
const PRESET = "default";
const BASE = "https://coffee-prime.myshopify.com/";
const PDP =
  "https://coffee-prime.myshopify.com/products/premium-filter-ground-coffee-powder-coffee";
const BLOG_POST =
  "https://coffee-prime.myshopify.com/blogs/news/list-of-fruits-that-you-can-put-on-your-coffee";

const DELTA =
  "Shopify.theme.name Coffee-prime V-1.5.0 · schema_name coffee_prime · schema_version 1.5.0 · theme_store_id null · role main · id 171096473906 · shop coffee-prime.myshopify.com · Speedo Themes third-party (Theme Store official değil). Vendor-published demo password 1 (public storefront unlock).";

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
  const idSuffix = suffix ? `.${suffix.replace(/-/g, "")}` : "";
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
    evidenceSlug: schemaId + fileSuffix.replace("-", "-"),
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
  if (suffix) base.evidenceSlug = `${schemaId}-${suffix}`;
  return { relDir, fileName, base };
}

const items = [
  // HOME
  obs({
    sayfa: "home",
    schemaId: "promo-announcement-bar",
    selector: "#shopify-section-sections--23278860337458__announcement-bar",
    notlar:
      "Üst ticker: Country/region UNITED STATES USD, Language ENGLISH, sosyal Facebook/Instagram/YouTube/X, FREE SHIPPING | 100-DAY EASY RETURNS.",
  }),
  obs({
    sayfa: "home",
    schemaId: "navigation-header-mega",
    selector: "#shopify-section-sections--23278860337458__header_1",
    notlar:
      "header_1. Logo Coffee-Prime. All Categories dropdown + Home/Shop/Collection/New Arrival/Best Seller/More. Search, wishlist 0, Log in, Cart. Mega class yok.",
    extra: { captureMode: "viewport" },
  }),
  obs({
    sayfa: "home",
    schemaId: "hero-slideshow",
    selector:
      "#shopify-section-template--23278859616562__165665788459900955",
    notlar:
      "START YOUR DAY WITH / A FRESH ROASTED COFFEE + Shop Now. İki slayt metni aynı (probe).",
  }),
  obs({
    sayfa: "home",
    schemaId: "features-multicolumn",
    selector:
      "#shopify-section-template--23278859616562__d84b8ff4-4187-4df6-95e1-a6ac43dfaa01",
    notlar:
      "WHAT COFFEE IS BEST FOR YOU? Üç kolon: Hand Roasted, Organic Coffee, Direct Trade + View More.",
  }),
  obs({
    sayfa: "home",
    schemaId: "collection-nav-image-cards",
    selector:
      "#shopify-section-template--23278859616562__b94136e3-10bf-41ed-9182-e48f260174fb",
    notlar:
      "SHOP BY CATEGORIES. new_collection class. Instant Coffee, Cold Brew, Hot Brew, Roasted Coffee, Ground Coffee.",
  }),
  obs({
    sayfa: "home",
    schemaId: "product-showcase-grid-featured",
    selector:
      "#shopify-section-template--23278859616562__bcf8bc5c-5c21-404e-bb27-1e1083af2abb",
    notlar:
      "BEST SELLERS. Kartlarda Add To Wishlist + Add To Cart. From $23 varyantlı fiyat.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-image-with-text",
    selector:
      "#shopify-section-template--23278859616562__925927e3-6c09-48c7-8f76-54cd25c9c06c",
    notlar: "Our Story / WELCOME TO COFFEE + Read More.",
  }),
  obs({
    sayfa: "home",
    schemaId: "editorial-image-with-text-overlay",
    selector:
      "#shopify-section-template--23278859616562__c73b660b-8987-49dd-97b5-e76fe8339fbf",
    notlar:
      "section-image-banner. SPECIAL OFFER / SUMMER SALE / Flat 50% Off + Shop Now.",
  }),
  obs({
    sayfa: "home",
    schemaId: "blog-list-main",
    selector:
      "#shopify-section-template--23278859616562__5399aa1d-ef73-4e66-acef-4a8506ca19f0",
    notlar: "OUR LATEST BLOG — üç kart + View All.",
  }),
  obs({
    sayfa: "home",
    schemaId: "testimonial-quote-carousel",
    selector:
      "#shopify-section-template--23278859616562__9098ade9-d563-4397-8612-fddd591e88ca",
    notlar:
      "CUSTOMER REVIEWS / 500,000+ happy customers. John Sullivan, Dianne Russell, Albert Flores — carousel.",
  }),
  obs({
    sayfa: "home",
    schemaId: "media-shop-the-feed",
    selector:
      "#shopify-section-template--23278859616562__1656667513043b6e26",
    notlar: "#coffeetimes / FOLLOW ON INSTAGRAM grid.",
  }),
  obs({
    sayfa: "home",
    schemaId: "trust-icon-row",
    selector:
      "#shopify-section-sections--23278860206386__c868a897-6f2f-410b-a925-bfc6d3125191",
    notlar:
      "Footer-group trust strip: Return 30 days, Free Shipping, Secure Payment, Customer Support.",
  }),
  obs({
    sayfa: "home",
    schemaId: "footer-columns-newsletter",
    selector: "#shopify-section-sections--23278860206386__footer",
    notlar:
      "Privacy/Refund/Terms, About Us, Contact, newsletter Email Subscribe, payment icons, sosyal, © 2023 Coffee-Prime.",
  }),
  obs({
    sayfa: "home",
    schemaId: "global-cart-drawer",
    selector: "#CartDrawer",
    notlar: "cart-drawer is-empty. #cart-icon-bubble.",
    extra: { captureMode: "viewport", prepareClick: "#cart-icon-bubble" },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-menu-drawer",
    selector: "#menu-drawer",
    notlar: "Details-menu-drawer-container. Hamburger 375/768/1440.",
    extra: { captureMode: "viewport" },
  }),
  obs({
    sayfa: "home",
    schemaId: "global-predictive-search",
    selector: ".search-modal",
    notlar: "predictive-search search-modal__form. Header search ikonu.",
    extra: { captureMode: "viewport" },
  }),

  // PDP
  obs({
    sayfa: "product-detail",
    schemaId: "product-info-main",
    url: PDP,
    selector: "#shopify-section-template--23278859944242__main",
    notlar:
      "Premium Filter Ground Coffee $18. Size 1kg/2kg/3kg radio. Qty. Add to cart. HURRY UP countdown, stock, delivery estimate. 5 media thumbs.",
    extra: { capture: { url: PDP, viewports: ["375", "768", "1440"], method: "margin-box+minPad8", updatedAt: "" } },
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "editorial-rich-text",
    url: PDP,
    selector: "#shopify-section-template--23278859944242__165719646980bb5db3",
    notlar: "PRODUCTIVELY BREW-DING + LEARN MORE.",
    extra: { capture: { url: PDP, viewports: ["375", "768", "1440"], method: "margin-box+minPad8", updatedAt: "" } },
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "editorial-image-with-text",
    url: PDP,
    selector: "#shopify-section-template--23278859944242__165727107497788584",
    notlar: "A HEART OF COFFEE + Learn More.",
    extra: { capture: { url: PDP, viewports: ["375", "768", "1440"], method: "margin-box+minPad8", updatedAt: "" } },
  }),
  obs({
    sayfa: "product-detail",
    schemaId: "product-showcase-related",
    url: PDP,
    selector: "#shopify-section-template--23278859944242__related-products",
    notlar: "YOU MAY ALSO LIKE — wishlist + ATC + SALE rozetleri.",
    extra: { capture: { url: PDP, viewports: ["375", "768", "1440"], method: "margin-box+minPad8", updatedAt: "" } },
  }),

  // COLLECTION
  obs({
    sayfa: "collection",
    schemaId: "collection-banner",
    url: `${BASE}collections/all`,
    selector: "#shopify-section-template--23278859321650__banner",
    notlar: "COLLECTION: PRODUCTS başlık bandı.",
    extra: {
      capture: {
        url: `${BASE}collections/all`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "collection",
    schemaId: "product-showcase-grid-plp",
    url: `${BASE}collections/all`,
    selector: "#shopify-section-template--23278859321650__product-grid",
    notlar: "Filter: Size facet. Grid + wishlist + ATC.",
    extra: {
      capture: {
        url: `${BASE}collections/all`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),

  // COLLECTIONS
  obs({
    sayfa: "collections",
    schemaId: "collection-nav-grid",
    url: `${BASE}collections`,
    selector: "#shopify-section-template--23278859649330__main",
    notlar: "COLLECTIONS — Best Seller, Cold Brew vb. kart grid.",
    extra: {
      capture: {
        url: `${BASE}collections`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),

  // CART
  obs({
    sayfa: "cart",
    schemaId: "cart-page-main",
    url: `${BASE}cart`,
    selector: "#shopify-section-template--23278859190578__cart-items",
    notlar: "Your cart is empty + Continue Shopping + Have an account?",
    extra: {
      capture: {
        url: `${BASE}cart`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "cart",
    schemaId: "product-showcase-grid-featured",
    suffix: "2",
    url: `${BASE}cart`,
    selector: "#shopify-section-template--23278859190578__featured-collection",
    notlar: "Boş sepet altı FEATURED COLLECTION + SALE.",
    extra: {
      capture: {
        url: `${BASE}cart`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),

  // SEARCH
  obs({
    sayfa: "search",
    schemaId: "search-results",
    url: `${BASE}search?q=coffee`,
    selector: "#shopify-section-template--23278860173618__main",
    notlar: "Search results coffee — Filter facet + grid.",
    extra: {
      capture: {
        url: `${BASE}search?q=coffee`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),

  // ABOUT
  obs({
    sayfa: "about-brand",
    schemaId: "page-content-main",
    url: `${BASE}pages/about-us`,
    selector: "#shopify-section-template--23278859714866__main",
    notlar: "ABOUT US sayfa başlığı.",
    extra: {
      capture: {
        url: `${BASE}pages/about-us`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    url: `${BASE}pages/about-us`,
    selector: "#shopify-section-template--23278859714866__1657263713c9898be6",
    notlar: "Hi, I am Maria! — Introduce your brand…",
    extra: {
      capture: {
        url: `${BASE}pages/about-us`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    url: `${BASE}pages/about-us`,
    selector: "#shopify-section-template--23278859714866__332fbe29-18b3-45f9-8ed8-643721cba626",
    notlar: "Meet The Team — Jacob Jones, Arlene McCoy + sosyal ikonlar.",
    extra: {
      capture: {
        url: `${BASE}pages/about-us`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-rich-text",
    url: `${BASE}pages/about-us`,
    selector: "#shopify-section-template--23278859714866__16572637446097b15e",
    notlar: "Our Work — iki paragraf metin.",
    extra: {
      capture: {
        url: `${BASE}pages/about-us`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "features-multicolumn",
    suffix: "2",
    url: `${BASE}pages/about-us`,
    selector: "#shopify-section-template--23278859714866__fc87aeed-6349-40fe-8e8a-c9a8a42f1de7",
    notlar:
      "Stat bandı: 225 Times in top 10 Chats, 400 Media Partners, 1800 Mobile Campaigns, 140M Mobile app installs.",
    extra: {
      capture: {
        url: `${BASE}pages/about-us`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "faq-collapsible-tabs",
    url: `${BASE}pages/about-us`,
    selector: "#shopify-section-template--23278859714866__0815a3db-f7bf-43ad-86ee-9cbaf09605ed",
    notlar: "FAQ — Can I choose whichever styles I want? vb. dört soru.",
    extra: {
      capture: {
        url: `${BASE}pages/about-us`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "editorial-image-with-text",
    suffix: "2",
    url: `${BASE}pages/about-us`,
    selector: "#shopify-section-template--23278859714866__16572637927874edf3",
    notlar: "We're Eco-Friendly ! + iki paragraf.",
    extra: {
      capture: {
        url: `${BASE}pages/about-us`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "about-brand",
    schemaId: "media-shop-the-feed",
    url: `${BASE}pages/about-us`,
    selector: "#shopify-section-template--23278859714866__395b258d-4f33-4d80-9d02-1e020462484f",
    notlar: "#coffeetimes instagram bandı about sayfası altı.",
    extra: {
      capture: {
        url: `${BASE}pages/about-us`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),

  // CONTACT
  obs({
    sayfa: "contact",
    schemaId: "page-content-main",
    url: `${BASE}pages/contact`,
    selector: "#shopify-section-template--23278859747634__main",
    notlar: "CONTACT US başlık.",
    extra: {
      capture: {
        url: `${BASE}pages/contact`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "contact",
    schemaId: "editorial-image-with-text",
    url: `${BASE}pages/contact`,
    selector: "#shopify-section-template--23278859747634__d21734d6-5423-4d3c-ba91-3095bc676184",
    notlar: "Hi, I am Maria! contact intro.",
    extra: {
      capture: {
        url: `${BASE}pages/contact`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "contact",
    schemaId: "lead-capture-form",
    url: `${BASE}pages/contact`,
    selector: "#shopify-section-template--23278859747634__form",
    notlar: "We'd love to hear from you! Name/Email/Phone/Comment — Send (submit yok).",
    extra: {
      capture: {
        url: `${BASE}pages/contact`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "contact",
    schemaId: "media-shop-the-feed",
    url: `${BASE}pages/contact`,
    selector: "#shopify-section-template--23278859747634__0d314181-2d38-4ddc-95f8-8cd600076e9f",
    notlar: "Contact altı instagram bandı.",
    extra: {
      capture: {
        url: `${BASE}pages/contact`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),

  // FAQ
  obs({
    sayfa: "faq-support",
    schemaId: "page-content-main",
    url: `${BASE}pages/faq`,
    selector: "#shopify-section-template--23278859813170__main",
    notlar: "FAQ'S sayfa başlığı. /pages/faqs 404.",
    extra: {
      capture: {
        url: `${BASE}pages/faq`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "faq-support",
    schemaId: "faq-collapsible-tabs",
    url: `${BASE}pages/faq`,
    selector: "#shopify-section-template--23278859813170__165665932214209e57",
    notlar: "Frequently asked question — dört genel soru.",
    extra: {
      capture: {
        url: `${BASE}pages/faq`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "faq-support",
    schemaId: "faq-collapsible-tabs",
    suffix: "2",
    url: `${BASE}pages/faq`,
    selector: "#shopify-section-template--23278859813170__2a07f658-ae85-49eb-b8e2-cce30634482e",
    notlar: "Shipping başlıklı ikinci accordion grubu.",
    extra: {
      capture: {
        url: `${BASE}pages/faq`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "faq-support",
    schemaId: "media-shop-the-feed",
    url: `${BASE}pages/faq`,
    selector: "#shopify-section-template--23278859813170__e078f0f2-6727-4b31-9687-2bb86dfed712",
    notlar: "FAQ altı instagram.",
    extra: {
      capture: {
        url: `${BASE}pages/faq`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),

  // BLOG
  obs({
    sayfa: "blog-list",
    schemaId: "blog-list-main",
    url: `${BASE}blogs/news`,
    selector: "#shopify-section-template--23278859157810__main",
    notlar: "NEWS blog listesi.",
    extra: {
      capture: {
        url: `${BASE}blogs/news`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
  obs({
    sayfa: "blog-post",
    schemaId: "blog-post-main",
    url: BLOG_POST,
    selector: "#shopify-section-template--23278859157810__main",
    notlar: "List Of Fruits That You Can Put On Your Coffee makalesi.",
    extra: {
      capture: {
        url: BLOG_POST,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),

  // 404
  obs({
    sayfa: "not-found",
    schemaId: "page-content-main",
    url: `${BASE}pages/faqs`,
    selector: "#shopify-section-template--23278859092274__main",
    notlar: "404 Page not found — /pages/faqs yolu.",
    extra: {
      capture: {
        url: `${BASE}pages/faqs`,
        viewports: ["375", "768", "1440"],
        method: "margin-box+minPad8",
        updatedAt: "",
      },
    },
  }),
];

const written = [];
for (const { relDir, fileName, base } of items) {
  const dir = path.join(root, relDir);
  fs.mkdirSync(dir, { recursive: true });
  const abs = path.join(dir, fileName);
  fs.writeFileSync(abs, JSON.stringify(base, null, 2) + "\n");
  written.push(path.relative(root, abs));
}

console.log(JSON.stringify({ count: written.length, files: written }, null, 2));
