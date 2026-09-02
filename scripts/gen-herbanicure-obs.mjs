import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const BASE = "https://herbanicure.myshopify.com";
const DELTA =
  "Shopify.theme.name Herbanicure V-1.2.0 · id 163707814186 · schema_name Herbanicure · schema_version 1.2.0 · theme_store_id null · role main · shop herbanicure.myshopify.com · walk https://herbanicure.myshopify.com/ · Speedo Themes third-party (not Theme Store) · public demo password 1";

const obsList = [
  // home
  { sayfa: "home", schemaId: "promo-announcement-bar", selector: "#shopify-section-sections--21845677474090__announcement-bar", url: BASE, notlar: "Üst şerit: sosyal ikonlar + Free Shipping mesajı.", delta: DELTA },
  { sayfa: "home", schemaId: "navigation-header-mega", selector: "#shopify-section-sections--21845677474090__header", url: BASE, notlar: "Logo + Home/Shop/About us/Brands/Contact + search + account + Cart. Dawn header-drawer.", delta: "Mega kolon yok; düz linkler. sticky." },
  { sayfa: "home", schemaId: "hero-slideshow", selector: "#shopify-section-template--21845677113642__ab77ea8b-f2ee-4ae5-818d-238cd2bcee70", url: BASE, notlar: "BUY HIGHEST QUALITY KRATOM ONLINE + SHOP NOW. slideshow-component.", delta: "Çoklu slayt; mobil ayrı görsel." },
  { sayfa: "home", schemaId: "collection-nav-image-cards", selector: "#shopify-section-template--21845677113642__2f339a32-6617-457d-bb29-f8dd16493928", url: BASE, notlar: "Shop By Kratom Category: CAPSULES, LIQUIDS vb. görsel kart + SHOP NOW.", delta: "5 kategori kartı; slider yok." },
  { sayfa: "home", schemaId: "product-showcase-grid-featured", selector: "#shopify-section-template--21845677113642__featured_collection", url: BASE, notlar: "Featured Collections ürün grid. Add to cart / Choose options.", delta: "4 kolon kart; quick-add." },
  { sayfa: "home", schemaId: "product-showcase-grid-featured", file: "product-showcase-grid-featured-2", obsSuffix: ".2", selector: "#shopify-section-template--21845677113642__fde2a339-856e-41cf-ab73-4a9f63f9118e", url: BASE, notlar: "Best Sellers ürün grid.", delta: "Featured ile aynı şema; başlık Best Sellers." },
  { sayfa: "home", schemaId: "editorial-image-with-text-overlay", selector: "#shopify-section-template--21845677113642__196fb344-881a-40e1-acea-192f89e4435f", url: BASE, notlar: "SAVE MORE WITH COUPONS AND 70% OFF + SHOP NOW.", delta: "Promo banner overlay." },
  { sayfa: "home", schemaId: "testimonial-quote-carousel", selector: "#shopify-section-template--21845677113642__864fd33e-26a5-4332-b63a-e9a2e488ba68", url: BASE, notlar: "Customer Reviews carousel. Ok ile kaydırma.", delta: "Yıldız + alıntı kartları." },
  { sayfa: "home", schemaId: "blog-list-main", selector: "#shopify-section-template--21845677113642__289e548d-0fa1-4306-9b4b-c4269480a19b", url: BASE, notlar: "Latest Blog: 2 yazı kartı + View all.", delta: "Home featured-blog instance." },
  { sayfa: "home", schemaId: "social-proof-brand-logos", selector: "#shopify-section-template--21845677113642__3c54d540-d0f5-40b2-a194-db3e8418a6a6", url: BASE, notlar: "Shop By Brands logo grid + View All BRANDS.", delta: "6 marka logosu." },
  { sayfa: "home", schemaId: "lead-capture-newsletter-band", selector: "#shopify-section-sections--21845677441322__449abd6e-5838-40c7-a270-60beda7f757e", url: BASE, notlar: "Subscribe To Our Newsletter + email + Subscribe. Submit yok.", delta: "Global footer-group section; tüm sayfalarda." },
  { sayfa: "home", schemaId: "footer-columns-newsletter", selector: "#shopify-section-sections--21845677441322__footer", url: BASE, notlar: "Quick links + Get in touch + sosyal + ödeme ikonları.", delta: "4 kolon footer." },
  { sayfa: "home", schemaId: "global-cart-drawer", selector: "#CartDrawer", url: BASE, notlar: "cart-drawer overlay.", delta: "Dawn cart-drawer.", captureMode: "viewport", prepareClick: "a.header__icon--cart" },
  { sayfa: "home", schemaId: "global-menu-drawer", selector: "#menu-drawer", url: BASE, notlar: "Hamburger menü drawer.", delta: "Düz linkler; mega yok.", captureMode: "viewport", prepareClick: "header-drawer summary.header__icon--menu, #Details-menu-drawer-container > summary" },
  { sayfa: "home", schemaId: "global-predictive-search", selector: "details-modal.header__search", url: BASE, notlar: "Arama modal + predictive-search.", delta: "Search görünür (Hubble'dan farklı).", captureMode: "viewport", prepareClick: "summary.header__icon--search" },
  // collection PLP
  { sayfa: "collection", schemaId: "collection-banner", selector: "#shopify-section-template--21845676851498__banner", url: `${BASE}/collections/all`, notlar: "Collection: Products başlık bandı.", delta: "" },
  { sayfa: "collection", schemaId: "product-showcase-grid-plp", selector: "#shopify-section-template--21845676851498__product-grid", url: `${BASE}/collections/all`, notlar: "PLP grid + Sort by + facet filtreler.", delta: "Çok ürün; quick-add/Choose options." },
  // PDP
  { sayfa: "product-detail", schemaId: "product-info-main", selector: "#shopify-section-template--21845677375786__main", url: `${BASE}/products/100-organically-grown-king-kratom-extract-powder`, notlar: "King Kratom Extract Powder $14.95 · qty · Description accordion · Share.", delta: "Varyant swatch yok; qty var." },
  { sayfa: "product-detail", schemaId: "product-showcase-related", selector: "#shopify-section-template--21845677375786__related-products", url: `${BASE}/products/100-organically-grown-king-kratom-extract-powder`, notlar: "Related products carousel/grid.", delta: "" },
  // cart
  { sayfa: "cart", schemaId: "cart-page-main", selector: "#shopify-section-template--21845676818730__cart-items", url: `${BASE}/cart`, notlar: "Your cart boş veya dolu.", delta: "cart-footer ayrı section; items ana blok." },
  // search
  { sayfa: "search", schemaId: "search-results", selector: "#shopify-section-template--21845677408554__main", url: `${BASE}/search?q=kratom`, notlar: "Search results kratom — 12 sonuç.", delta: "" },
  // collections index
  { sayfa: "collections", schemaId: "collection-nav-grid", selector: "#shopify-section-template--21845677146410__main", url: `${BASE}/collections`, notlar: "Collections listesi grid.", delta: "" },
  // about
  { sayfa: "about-brand", schemaId: "page-content-main", selector: "#shopify-section-template--21845677179178__88a19c22-865f-4c4b-aaa7-647d4616693c", url: `${BASE}/pages/about-us`, notlar: "About Us sayfa başlığı.", delta: "" },
  { sayfa: "about-brand", schemaId: "editorial-image-with-text", selector: "#shopify-section-template--21845677179178__f7a0790e-14b7-4833-9b16-854a6a4cd4e2", url: `${BASE}/pages/about-us`, notlar: "Görsel + metin about bloğu.", delta: "" },
  { sayfa: "about-brand", schemaId: "editorial-image-with-text", file: "editorial-image-with-text-2", obsSuffix: ".2", selector: "#shopify-section-template--21845677179178__fb627f5d-a1f0-449c-995c-f5795ba6cb77", url: `${BASE}/pages/about-us`, notlar: "Choose All-Natural High-Quality Kratom.", delta: "İkinci IWT instance." },
  { sayfa: "about-brand", schemaId: "testimonial-quote-carousel", selector: "#shopify-section-template--21845677179178__f35bb285-2236-4a30-a97e-2c25f2880e19", url: `${BASE}/pages/about-us`, notlar: "Customer Reviews about sayfası.", delta: "Home ile aynı şema." },
  // faq
  { sayfa: "faq-support", schemaId: "page-content-main", selector: "#shopify-section-template--21845677277482__7e58fc30-45ae-4591-bf90-df027e66c1ba", url: `${BASE}/pages/faq`, notlar: "frequently ask questions başlık.", delta: "/pages/faqs 404; doğru yol /pages/faq." },
  { sayfa: "faq-support", schemaId: "faq-collapsible-tabs", selector: "#shopify-section-template--21845677277482__c4d0abac-cb42-461a-a0b7-40d09d151673", url: `${BASE}/pages/faq`, notlar: "Have Any Questions? ORDERS/PAYMENT/POINTS/RETURNS/SHIPPING sekmeleri.", delta: "faq-templates.css; panel-heading grupları." },
  // contact
  { sayfa: "contact", schemaId: "lead-capture-form", selector: "#shopify-section-template--21845677244714__form", url: `${BASE}/pages/contact`, notlar: "Contact form: name/email/phone/message. Submit yok.", delta: "" },
  // blog
  { sayfa: "blog-list", schemaId: "blog-list-main", selector: "#shopify-section-template--21845676785962__main", url: `${BASE}/blogs/news`, notlar: "News blog listesi.", delta: "" },
  // 404
  { sayfa: "not-found", schemaId: "page-content-main", file: "page-content-main", obsSuffix: ".2", selector: "#shopify-section-template--21845676720426__main", url: `${BASE}/nope-page-404`, notlar: "Page not found 404.", delta: "" },
  // brands page
  { sayfa: "about-brand", schemaId: "social-proof-brand-logos", file: "social-proof-brand-logos-2", obsSuffix: ".2", selector: "#shopify-section-template--21845677211946__9e562d16-d324-4f89-8d30-15e3b291360f", url: `${BASE}/pages/brands`, notlar: "Our Brands sayfası logo grid.", delta: "/pages/brands ayrı template." },
];

for (const item of obsList) {
  const fileBase = item.file || item.schemaId;
  const obsSuffix = item.obsSuffix || "";
  const observationId = `herbanicure.default.${item.sayfa}.${item.schemaId}${obsSuffix}`;
  const dir = path.join(root, "observations", "herbanicure", "default", item.sayfa);
  fs.mkdirSync(dir, { recursive: true });
  const out = {
    observationId,
    schemaId: item.schemaId,
    kaynak: "herbanicure",
    preset: "default",
    sayfa: item.sayfa,
    url: item.url,
    selector: item.selector,
    evidenceSlug: fileBase,
    evidence: [],
    storefrontPassword: "1",
    notlar: item.notlar,
    delta: item.delta || DELTA,
    capture: {
      url: item.url,
      viewports: ["375", "768", "1440"],
      mode: item.captureMode || "section",
      method: "margin-box+minPad8",
      updatedAt: "",
    },
  };
  if (item.captureMode) {
    out.captureMode = item.captureMode;
    out.prepareClick = item.prepareClick;
    out.capture.prepareClick = item.prepareClick;
  }
  const outPath = path.join(dir, `${fileBase}.json`);
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n");
  console.log("wrote", outPath);
}

console.log(`Total: ${obsList.length} observations`);
