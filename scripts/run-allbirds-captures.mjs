/**
 * Bootstrap Allbirds Mod A observations + run capture-observation / capture-interaction.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const BASE = "https://www.allbirds.com";
const PDP = `${BASE}/products/mens-tree-runner-nz-medium-grey`;
const COLLECTION = `${BASE}/collections/mens`;
const SEARCH = `${BASE}/search?q=runner&type=product`;
const BLOG_LIST = `${BASE}/blogs/the-perch`;
const BLOG_NEWS = `${BASE}/blogs/news`;
const BLOG_POST = `${BASE}/blogs/the-perch/moonshot-explained`;
const ABOUT = `${BASE}/pages/our-story`;
const HELP = `${BASE}/pages/help`;

/** @type {Array<{file:string, obs:object, interaction?:boolean}>} */
const INVENTORY = [
  {
    file: "home/promo-announcement-bar.json",
    obs: {
      observationId: "allbirds.default.home.promo-announcement-bar",
      schemaId: "promo-announcement-bar",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "home",
      url: BASE + "/",
      selector: "#shopify-section-sections--16476871000144__global-banner",
      evidenceSlug: "promo-announcement-bar",
      evidence: [],
      notlar:
        "Free ground shipping on orders over $100 + demand/shipping delay copy. Tek satır global şerit.",
      delta:
        "Marquee yok; iki cümle yan yana. Timer knob bu karede görünmedi.",
    },
  },
  {
    file: "home/navigation-header-mega.json",
    interaction: true,
    obs: {
      observationId: "allbirds.default.home.navigation-header-mega",
      schemaId: "navigation-header-mega",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "home",
      url: BASE + "/",
      selector:
        "#shopify-section-sections--16476871000144__header .absolute.top-5.right-5.left-5",
      captureMode: "viewport",
      evidenceSlug: "navigation-header-mega",
      evidence: [],
      interactionStates: ["initial", "open"],
      interactionSteps: [
        {
          state: "initial",
          action: "goto",
          value: BASE + "/",
          capture: true,
          captureMode: "viewport",
          etiket: "kapali",
          not: "Sticky bar: NEW ARRIVALS, SHOP ALL, MEN/WOMEN/SALE, search, cart 0",
        },
        {
          state: "open",
          action: "click",
          selector: 'button:visible:has-text("MEN")',
          viewports: ["1440"],
          capture: true,
          captureMode: "viewport",
          etiket: "men-mega",
          not: "MEN click → Shoes/Apparel kolonları + Customer Favorites kartları",
        },
      ],
      stateFindings: {
        initial:
          "Logo; NEW ARRIVALS; SHOP ALL; MEN/WOMEN/SALE; search icon; View Cart 0. Mega kapalı.",
        open:
          "1440 MEN click: New Arrivals/Bestsellers/Leather Alternatives + Men's Shoes alt linkler + Customer Favorites görsel kartları.",
      },
      missingStates: [
        {
          state: "open",
          sebep: "375/768 mega yok — hamburger global-menu-drawer.",
        },
      ],
      notlar:
        "Sticky header; MEN/WOMEN/SALE button mega. Search header'da link (predictive overlay yok).",
      delta:
        "Mega hover değil click ile açılır. Locale switch yok. Free-shipping progress header'da cart badge yanında.",
    },
  },
  {
    file: "home/hero-slideshow.json",
    obs: {
      observationId: "allbirds.default.home.hero-slideshow",
      schemaId: "hero-slideshow",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "home",
      url: BASE + "/",
      selector:
        "#shopify-section-template--16476860579920__full-bleed-hero-us",
      evidenceSlug: "hero-slideshow",
      evidence: [],
      notlar:
        "ALL NEW DASHER NZ COLLECTION — Wildly Comfortable. Super Natural. SHOP MEN / SHOP WOMEN.",
      delta:
        "Tek slayt (full-bleed-hero). Ok/nokta/autoplay yok. İki CTA (Men/Women) aynı slaytta.",
    },
  },
  {
    file: "home/collection-nav-image-cards.json",
    obs: {
      observationId: "allbirds.default.home.collection-nav-image-cards",
      schemaId: "collection-nav-image-cards",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "home",
      url: BASE + "/",
      selector:
        "#shopify-section-template--16476860579920__category_row_T4fLWz",
      evidenceSlug: "collection-nav-image-cards",
      evidence: [],
      notlar:
        "NEW ARRIVALS / MENS / WOMENS / BEST SELLERS — görsel kartlar + SHOP MEN/WOMEN CTA.",
      delta: "4 kartlı satır; üst grup başlığı + alt kart başlıkları.",
    },
  },
  {
    file: "home/product-showcase-grid-featured.json",
    obs: {
      observationId: "allbirds.default.home.product-showcase-grid-featured",
      schemaId: "product-showcase-grid-featured",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "home",
      url: BASE + "/",
      selector:
        "#shopify-section-template--16476860579920__standard-product-carousel-2-us",
      evidenceSlug: "product-showcase-grid-featured",
      evidence: [],
      notlar: "BEST SELLERS — yatay ürün carousel (Tree Runner NZ, Runner NZ Slip On…).",
      delta:
        "layout slider; ok/nokta görünür. dataBinding featured collection.",
    },
  },
  {
    file: "home/promo-grid-banner.json",
    obs: {
      observationId: "allbirds.default.home.promo-grid-banner",
      schemaId: "promo-grid-banner",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "home",
      url: BASE + "/",
      selector: "#shopify-section-template--16476860579920__3x-promo-tiles-us",
      prepareScroll:
        "#shopify-section-template--16476860579920__3x-promo-tiles-us",
      evidenceSlug: "promo-grid-banner",
      evidence: [],
      notlar:
        "3 promo tile: Summer Travel Essentials, New Arrivals, Fresh Colors — her birinde SHOP MEN/WOMEN.",
      delta: "3 kolon eşit grid; her tile görsel + başlık + çift CTA.",
    },
  },
  {
    file: "home/trust-icon-row.json",
    obs: {
      observationId: "allbirds.default.home.trust-icon-row",
      schemaId: "trust-icon-row",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "home",
      url: BASE + "/",
      selector: "#shopify-section-sections--16476870967376__seo_tiles_wGQCxG",
      evidenceSlug: "trust-icon-row",
      evidence: [],
      notlar:
        "Global footer-group SEO tiles: WEAR ALL DAY COMFORT / DESIGNED FOR EVERYDAY / etc.",
      delta:
        "Footer-group'ta global; çoğu sayfada tekrarlanır. İkon + kısa metin satırı.",
    },
  },
  {
    file: "home/footer-columns-newsletter.json",
    obs: {
      observationId: "allbirds.default.home.footer-columns-newsletter",
      schemaId: "footer-columns-newsletter",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "home",
      url: BASE + "/",
      selector: "#shopify-section-sections--16476870967376__footer",
      evidenceSlug: "footer-columns-newsletter",
      evidence: [],
      notlar:
        "SUBSCRIBE TO OUR EMAILS + HELP/COMPANY/SHOP kolonları + sosyal + legal.",
      delta:
        "Newsletter form submit yapılmadı (PII). help@allbirds.com mailto. Our Blog → /blogs/the-perch.",
    },
  },
  {
    file: "home/global-cart-drawer.json",
    interaction: true,
    obs: {
      observationId: "allbirds.default.home.global-cart-drawer",
      schemaId: "global-cart-drawer",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "home",
      url: BASE + "/",
      selector: ".z-takeover.fixed.top-0.right-0",
      captureMode: "viewport",
      evidenceSlug: "global-cart-drawer",
      evidence: [],
      interactionStates: ["initial", "filled"],
      interactionSteps: [
        {
          state: "initial",
          action: "goto",
          value: BASE + "/",
          capture: false,
        },
        {
          state: "initial",
          action: "click",
          selector: 'button[aria-label="View Cart"]:visible',
          capture: true,
          captureMode: "viewport",
          etiket: "cart-bos",
          not: "Your cart is empty + SHOP WOMENS/MENS/SOCKS/SALE linkleri",
        },
        {
          state: "filled",
          action: "goto",
          value: PDP,
          capture: false,
        },
        {
          state: "filled",
          action: "click",
          selector: 'button[aria-label="Select size 10"]',
          capture: false,
        },
        {
          state: "filled",
          action: "click",
          selector: 'button:has-text("Add to Cart - $100")',
          capture: false,
        },
        {
          state: "filled",
          action: "waitFor",
          value: 2500,
          capture: false,
        },
        {
          state: "filled",
          action: "click",
          selector: 'button[aria-label="View Cart"]:visible',
          capture: true,
          captureMode: "viewport",
          etiket: "tree-runner-qty1",
          not: "Men's Tree Runner NZ qty 1 + recommended socks upsell",
        },
      ],
      stateFindings: {
        initial:
          "CART (0); free-shipping progress; empty state koleksiyon linkleri.",
        filled:
          "CART (1); Tree Runner NZ Medium Grey size 10 $100; You've earned free shipping; RECOMMENDED FOR YOU socks.",
      },
      missingStates: [],
      notlar: "Vue cart drawer sağ panel. /cart → ?openCartDrawer=true home.",
      delta:
        "Boş state SHOP WOMENS/MENS/SOCKS/SALE linkleri. Upsell socks carousel dolu sepette.",
    },
  },
  {
    file: "home/global-menu-drawer.json",
    interaction: true,
    obs: {
      observationId: "allbirds.default.home.global-menu-drawer",
      schemaId: "global-menu-drawer",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "home",
      url: BASE + "/",
      selector: ".header-mobile-menu",
      captureMode: "viewport",
      evidenceSlug: "global-menu-drawer",
      evidence: [],
      interactionStates: ["open"],
      interactionSteps: [
        {
          state: "open",
          action: "goto",
          value: BASE + "/",
          capture: false,
        },
        {
          state: "open",
          action: "click",
          selector: 'button[aria-label="Open main menu"]',
          viewports: ["375", "768"],
          capture: true,
          captureMode: "viewport",
          etiket: "hamburger",
          not: "NEW ARRIVALS / SHOP ALL / MEN / WOMEN / SALE üst seviye",
        },
      ],
      stateFindings: {
        open:
          "Tam ekran mobil drawer: NEW ARRIVALS, SHOP ALL, MEN/WOMEN/SALE akordeon okları.",
      },
      missingStates: [
        {
          state: "open",
          sebep: "1440 hamburger yok (desktop mega).",
        },
        {
          state: "changed",
          sebep: "MEN/WOMEN alt menü tıklanmadı — üst drawer yeterli.",
        },
      ],
      notlar: "Mobil/tablet hamburger; MEN/WOMEN/SALE nested.",
      delta: "Desktop mega ayrı observation. Alt akordeon açılmadı.",
    },
  },
  {
    file: "product-detail/product-info-main.json",
    obs: {
      observationId: "allbirds.default.product-detail.product-info-main",
      schemaId: "product-info-main",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "product-detail",
      url: PDP,
      selector:
        "#shopify-section-template--16476865921104__main_product_QqEJXU",
      evidenceSlug: "product-info-main",
      evidence: [],
      notlar:
        "Men's Tree Runner NZ — breadcrumb, galeri, color swatch, size grid, Add to Cart $100, ALSO AVAILABLE IN Women's.",
      delta:
        "Sticky buy box + free shipping badge. Size chart link. Gender cross-link.",
    },
  },
  {
    file: "product-detail/product-info-tabs.json",
    obs: {
      observationId: "allbirds.default.product-detail.product-info-tabs",
      schemaId: "product-info-tabs",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "product-detail",
      url: PDP,
      selector:
        "#shopify-section-template--16476865921104__product_details_v2_YXBp9L",
      evidenceSlug: "product-info-tabs",
      evidence: [],
      notlar:
        "WHY WE LOVE THIS accordion: Best For chips + View technical details / Materials / Care / Reviews.",
      delta:
        "layout accordion (tabs değil). Reviews panel app widget — tıklanmadı.",
    },
  },
  {
    file: "product-detail/media-mosaic-grid.json",
    obs: {
      observationId: "allbirds.default.product-detail.media-mosaic-grid",
      schemaId: "media-mosaic-grid",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "product-detail",
      url: PDP,
      selector: "#shopify-section-template--16476865921104__color-grid",
      evidenceSlug: "media-mosaic-grid",
      evidence: [],
      notlar: "Modern + Refined — renk/lifestyle mozaik grid (Minimalist look…).",
      delta: "PDP alt editorial mozaik; hotspot yok.",
    },
  },
  {
    file: "product-detail/editorial-image-with-text.json",
    obs: {
      observationId: "allbirds.default.product-detail.editorial-image-with-text",
      schemaId: "editorial-image-with-text",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "product-detail",
      url: PDP,
      selector:
        "#shopify-section-template--16476865921104__product_material_hero_feature_W3UqNf",
      evidenceSlug: "editorial-image-with-text",
      evidence: [],
      notlar:
        "BREATHABLE — Tree Knit airy copy + görsel (LIGHTWEIGHT ikinci blok aynı section).",
      delta:
        "Tek section içinde çoklu material feature blokları (3 adet benzer section DOM'da).",
    },
  },
  {
    file: "product-detail/product-showcase-related.json",
    obs: {
      observationId: "allbirds.default.product-detail.product-showcase-related",
      schemaId: "product-showcase-related",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "product-detail",
      url: PDP,
      selector:
        "#shopify-section-template--16476865921104__recommendations_carousel_Cf4ea7",
      evidenceSlug: "product-showcase-related",
      evidence: [],
      notlar: "YOU MAY ALSO LIKE — yatay carousel (Slide, Flip Flop, Tree Runner…).",
      delta: "Shopify recommendations carousel; ok navigasyon.",
    },
  },
  {
    file: "product-detail/editorial-image-with-text-2.json",
    obs: {
      observationId: "allbirds.default.product-detail.editorial-image-with-text.2",
      schemaId: "editorial-image-with-text",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "product-detail",
      url: PDP,
      selector:
        "#shopify-section-template--16476865921104__brand_message_f36Rdi",
      evidenceSlug: "editorial-image-with-text-2",
      evidence: [],
      notlar:
        "Better Things in a Better Way — Nature innovator + LEARN MORE / RESPONSIBILITY linkleri.",
      delta: "Marka mesajı split layout; iki CTA.",
    },
  },
  {
    file: "collection/collection-banner.json",
    obs: {
      observationId: "allbirds.default.collection.collection-banner",
      schemaId: "collection-banner",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "collection",
      url: COLLECTION,
      selector:
        "#shopify-section-template--16476858417232__collection-header",
      evidenceSlug: "collection-banner",
      evidence: [],
      notlar:
        "Home / Men's Shoes — başlık + Sustainable, supportive… alt metin.",
      delta: "Breadcrumb + metin banner; hero görsel overlay yok.",
    },
  },
  {
    file: "collection/product-showcase-grid-plp.json",
    obs: {
      observationId: "allbirds.default.collection.product-showcase-grid-plp",
      schemaId: "product-showcase-grid-plp",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "collection",
      url: COLLECTION,
      selector:
        "#shopify-section-template--16476858417232__collection-product-grid",
      prepareScroll:
        "#shopify-section-template--16476858417232__collection-product-grid",
      evidenceSlug: "product-showcase-grid-plp",
      evidence: [],
      notlar:
        "FILTER (19 products) + MEN/WOMEN chip + sort + ürün grid.",
      delta:
        "Gender filter chip PLP üstünde. Tam grid çok uzun — üst filtre+ilk satır kanıt.",
    },
  },
  {
    file: "collection/faq-collapsible-tabs.json",
    obs: {
      observationId: "allbirds.default.collection.faq-collapsible-tabs",
      schemaId: "faq-collapsible-tabs",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "collection",
      url: COLLECTION,
      selector: "#shopify-section-template--16476858417232__collection-faqs",
      evidenceSlug: "faq-collapsible-tabs",
      evidence: [],
      notlar:
        "MEN'S SHOES SEO FAQ accordion — koleksiyon altında SSS blokları.",
      delta: "PLP altında collection-specific FAQ; kategoriTabGoster yok.",
    },
  },
  {
    file: "search/search-results.json",
    obs: {
      observationId: "allbirds.default.search.search-results",
      schemaId: "search-results",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "search",
      url: SEARCH,
      selector: "main.template-search",
      prepareScroll: "main.template-search",
      evidenceSlug: "search-results",
      evidence: [],
      notlar: 'We found 76 results for "runner" + FILTER + sort + ürün grid.',
      delta:
        "Search icon → /search sayfası (predictive overlay yok). Grid PLP ile aynı aile.",
    },
  },
  {
    file: "blog-list/blog-list-main.json",
    obs: {
      observationId: "allbirds.default.blog-list.blog-list-main",
      schemaId: "blog-list-main",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "blog-list",
      url: BLOG_LIST,
      selector:
        "#shopify-section-template--16476856352848__article_grid_tGLJ4P",
      evidenceSlug: "blog-list-main",
      evidence: [],
      notlar: "The Perch blog — article grid + tag navigation.",
      delta: "page_hero + breadcrumbs üstte ayrı section; grid ana liste.",
    },
  },
  {
    file: "blog-list/blog-list-main-2.json",
    obs: {
      observationId: "allbirds.default.blog-list.blog-list-main.2",
      schemaId: "blog-list-main",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "blog-list",
      url: BLOG_NEWS,
      selector:
        "#shopify-section-template--16476856287312__article_grid_tGLJ4P",
      evidenceSlug: "blog-list-main-2",
      evidence: [],
      notlar: "Press / News blog (/blogs/news) — aynı grid şablonu.",
      delta: "İkinci blog kanalı; The Perch'ten farklı template id.",
    },
  },
  {
    file: "blog-post/blog-post-main.json",
    obs: {
      observationId: "allbirds.default.blog-post.blog-post-main",
      schemaId: "blog-post-main",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "blog-post",
      url: BLOG_POST,
      selector:
        "#shopify-section-template--16476854943824__article-hero, #shopify-section-template--16476854943824__article-header, #shopify-section-template--16476854943824__richtext",
      evidenceSlug: "blog-post-main",
      evidence: [],
      notlar:
        "Moonshot Explained — hero görsel + başlık + article richtext gövdesi.",
      delta:
        "Shopify article sections (hero/header/richtext); main#main tek wrapper değil.",
    },
  },
  {
    file: "about-brand/hero-slideshow.json",
    obs: {
      observationId: "allbirds.default.about-brand.hero-slideshow",
      schemaId: "hero-slideshow",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "about-brand",
      url: ABOUT,
      selector:
        "#shopify-section-template--16476862316624__full_bleed_hero_pjDgPJ",
      evidenceSlug: "hero-slideshow",
      evidence: [],
      notlar: "OUR STORY — Striving for better is in our nature.",
      delta: "About full-bleed hero; tek slayt CTA yok.",
    },
  },
  {
    file: "about-brand/editorial-image-with-text.json",
    obs: {
      observationId: "allbirds.default.about-brand.editorial-image-with-text",
      schemaId: "editorial-image-with-text",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "about-brand",
      url: ABOUT,
      selector:
        "#shopify-section-template--16476862316624__product_social_proof_Waw6FU",
      evidenceSlug: "editorial-image-with-text",
      evidence: [],
      notlar:
        "We set out to create an entirely new category… natural materials manifesto.",
      delta: "Uzun manifesto metni + görsel; CTA yok.",
    },
  },
  {
    file: "about-brand/features-slider-multicolumn.json",
    obs: {
      observationId: "allbirds.default.about-brand.features-slider-multicolumn",
      schemaId: "features-slider-multicolumn",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "about-brand",
      url: ABOUT,
      selector:
        "#shopify-section-template--16476862316624__stories_carousel_pfYLN6",
      evidenceSlug: "features-slider-multicolumn",
      evidence: [],
      notlar:
        "OUR JOURNEY FROM NZ — PREVIOUS/NEXT carousel + hikâye slaytları.",
      delta: "Timeline carousel; ok navigasyon.",
    },
  },
  {
    file: "about-brand/editorial-image-with-text-2.json",
    obs: {
      observationId: "allbirds.default.about-brand.editorial-image-with-text.2",
      schemaId: "editorial-image-with-text",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "about-brand",
      url: ABOUT,
      selector:
        "#shopify-section-template--16476862316624__side_by_side_GVrTiq",
      evidenceSlug: "editorial-image-with-text-2",
      evidence: [],
      notlar:
        "Better Things / Better Way — iki kolon side-by-side manifesto blokları.",
      delta: "Çoklu side-by-side item tek section.",
    },
  },
  {
    file: "about-brand/media-scrolling-gallery.json",
    obs: {
      observationId: "allbirds.default.about-brand.media-scrolling-gallery",
      schemaId: "media-scrolling-gallery",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "about-brand",
      url: ABOUT,
      selector:
        "#shopify-section-template--16476862316624__ugc_scroll_xixmM4",
      evidenceSlug: "media-scrolling-gallery",
      evidence: [],
      notlar:
        "Tim Brown quote + UGC görsel scroll şeridi (co-founder manifesto).",
      delta: "Quote overlay + yatay scroll galeri.",
    },
  },
  {
    file: "about-brand/blog-list-main.json",
    obs: {
      observationId: "allbirds.default.about-brand.blog-list-main",
      schemaId: "blog-list-main",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "about-brand",
      url: ABOUT,
      selector:
        "#shopify-section-template--16476862316624__page_related_articles_dGXeMY",
      evidenceSlug: "blog-list-main",
      evidence: [],
      notlar: "From the Newsroom — 3 article kartı (June 2025 headline…).",
      delta: "About sayfası altında curated blog kartları; tam liste değil.",
    },
  },
  {
    file: "faq-support/page-content-main.json",
    obs: {
      observationId: "allbirds.default.faq-support.page-content-main",
      schemaId: "page-content-main",
      kaynak: "allbirds",
      preset: "default",
      sayfa: "faq-support",
      url: HELP,
      selector:
        "#shopify-section-template--16476861792336__full_width_banner_jJRiaX",
      evidenceSlug: "page-content-main",
      evidence: [],
      notlar:
        "How Can We Help? — Email us at help@allbirds.com banner (/pages/help).",
      delta:
        "/pages/faq 404. Help sayfası yalnız banner; Gorgias/Zendesk widget bu walk'ta görülmedi.",
    },
  },
];

function writeObs(entry) {
  const dir = path.join(root, "observations/allbirds/default", path.dirname(entry.file));
  fs.mkdirSync(dir, { recursive: true });
  const outPath = path.join(root, "observations/allbirds/default", entry.file);
  const obs = {
    ...entry.obs,
    capture: {
      url: entry.obs.url,
      viewports: ["375", "768", "1440"],
      mode: entry.obs.captureMode || "section",
      method: entry.interaction ? "interaction-steps" : "margin-box+minPad8",
      updatedAt: "",
    },
  };
  fs.writeFileSync(outPath, JSON.stringify(obs, null, 2) + "\n");
  return outPath;
}

function run(cmd, args) {
  const r = spawnSync(cmd, args, { cwd: root, stdio: "inherit", encoding: "utf8" });
  return r.status ?? 1;
}

function needsCapture(entry) {
  const obsPath = path.join(root, "observations/allbirds/default", entry.file);
  if (!fs.existsSync(obsPath)) return true;
  const obs = JSON.parse(fs.readFileSync(obsPath, "utf8"));
  const slug = obs.evidenceSlug || obs.schemaId;
  const sayfa = obs.sayfa;
  const dir = path.join(root, "evidence/allbirds/default", sayfa);
  if (entry.interaction) {
    return !fs.existsSync(dir) || fs.readdirSync(dir).filter((f) => f.startsWith(slug)).length < 3;
  }
  for (const vp of ["375", "768", "1440"]) {
    if (!fs.existsSync(path.join(dir, `${slug}.${vp}.png`))) return true;
  }
  return false;
}

const written = INVENTORY.map(writeObs);
console.log(`Wrote ${written.length} observation JSON files.`);

let ok = 0;
let fail = 0;
for (const entry of INVENTORY) {
  const rel = path.join("observations/allbirds/default", entry.file);
  const abs = path.join(root, rel);
  if (!needsCapture(entry)) {
    console.log(`\n>>> skip (complete) ${rel}`);
    ok++;
    continue;
  }
  console.log(`\n>>> capture ${rel}`);
  const code = entry.interaction
    ? run("node", ["scripts/capture-interaction.mjs", abs])
    : run("node", ["scripts/capture-observation.mjs", abs]);
  if (code === 0) ok++;
  else {
    fail++;
    console.error(`!!! failed ${rel} (exit ${code})`);
  }
}
console.log(`\nDone: ${ok} ok, ${fail} failed.`);

console.log("\nAll captures done.");
