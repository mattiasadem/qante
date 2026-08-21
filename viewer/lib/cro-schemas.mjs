/**
 * SchemaId → cro | vitrine. Single source of truth for the CRO tab.
 *
 * lane is the block’s job (conversion vs chrome/merchandising), not `kategori`.
 * A cro schema has exactly one closed type id (17 catalog + extras).
 * Unknown / missing schemaIds fall back to keyword rules in cro.mjs.
 *
 * Docs: candidates/cro-types.md
 */

/** Frozen 17 catalog ids — keep in sync with CRO_CATALOG in cro.mjs. */
export const CRO_CATALOG_IDS = Object.freeze([
  "one-feature",
  "us-vs-them",
  "reviews-testimonials",
  "whats-inside",
  "back-in-stock",
  "how-its-made",
  "sneak-peeks",
  "one-benefit",
  "recipes",
  "bestsellers-trending",
  "faqs-qnas",
  "product-guides",
  "before-after",
  "myth-vs-fact",
  "sourcing",
  "product-comparison",
  "lets-talk-numbers",
]);

/**
 * Nearby funnel extras — inventory-backed types next to the 17.
 * `bundle` added because `commerce-tools-products-bundle` is a dedicated
 * conversion tool with no catalog slot.
 */
export const FUNNEL_EXTRA_IDS = Object.freeze([
  "quiz",
  "lead-capture",
  "countdown",
  "guarantee",
  "ugc-grid",
  "ingredients",
  "bundle",
]);

export const CLOSED_CRO_TYPE_IDS = Object.freeze([
  ...CRO_CATALOG_IDS,
  ...FUNNEL_EXTRA_IDS,
]);

const CLOSED = new Set(CLOSED_CRO_TYPE_IDS);

/**
 * Every on-disk schemaId (sections/global + sections/instance, not _template).
 * @type {Record<string, { lane: "cro" | "vitrine", type?: string, family?: "chrome" | "buybox" }>}
 */
export const SCHEMA_CLASSIFICATION = Object.freeze({
  // --- CRO (dedicated conversion / doubt-reduction) ---
  "before-after-slider": { lane: "cro", type: "before-after" },
  "commerce-tools-products-bundle": { lane: "cro", type: "bundle" },
  "comparison-quick-table": { lane: "cro", type: "product-comparison" },
  "faq-collapsible-tabs": { lane: "cro", type: "faqs-qnas" },
  "lead-capture-form": { lane: "cro", type: "lead-capture" },
  "lead-capture-newsletter-band": { lane: "cro", type: "lead-capture" },
  "media-scrolling-gallery": { lane: "cro", type: "ugc-grid" },
  "media-shop-the-feed": { lane: "cro", type: "ugc-grid" },
  "product-finder-quiz": { lane: "cro", type: "quiz" },
  "promo-banner-countdown": { lane: "cro", type: "countdown" },
  "testimonial-quote-carousel": { lane: "cro", type: "reviews-testimonials" },

  // --- Vitrine: store chrome ---
  "cart-page-main": { lane: "vitrine", family: "chrome" },
  "footer-columns-newsletter": { lane: "vitrine", family: "chrome" },
  "global-cart-drawer": { lane: "vitrine", family: "chrome" },
  "global-compare-drawer": { lane: "vitrine", family: "chrome" },
  "global-menu-drawer": { lane: "vitrine", family: "chrome" },
  "global-predictive-search": { lane: "vitrine", family: "chrome" },
  "global-quick-view": { lane: "vitrine", family: "chrome" },
  "navigation-breadcrumbs": { lane: "vitrine", family: "chrome" },
  "navigation-header-mega": { lane: "vitrine", family: "chrome" },
  "search-results": { lane: "vitrine", family: "chrome" },

  // --- Vitrine: PDP commerce (not a CRO type; do not invent a split) ---
  "product-info-main": { lane: "vitrine", family: "buybox" },
  "product-info-tabs": { lane: "vitrine", family: "buybox" },

  // --- Vitrine: hero / promo merchandising ---
  "hero-slideshow": { lane: "vitrine" },
  "media-lookbook-banner": { lane: "vitrine" },
  "media-lookbook-slider": { lane: "vitrine" },
  "media-mosaic-grid": { lane: "vitrine" },
  "media-video-hero": { lane: "vitrine" },
  "promo-announcement-bar": { lane: "vitrine" },
  "promo-banner-tabs": { lane: "vitrine" },
  "promo-grid-banner": { lane: "vitrine" },
  "promo-scrolling-marquee": { lane: "vitrine" },
  "promo-spotlight-tab": { lane: "vitrine" },

  // --- Vitrine: editorial / blog ---
  "blog-list-main": { lane: "vitrine" },
  "blog-post-main": { lane: "vitrine" },
  "editorial-custom-content": { lane: "vitrine" },
  "editorial-dynamic-grid": { lane: "vitrine" },
  "editorial-highlight-text-image": { lane: "vitrine" },
  "editorial-image-with-text": { lane: "vitrine" },
  "editorial-image-with-text-overlay": { lane: "vitrine" },
  "editorial-images-scroll": { lane: "vitrine" },
  "editorial-layered-images": { lane: "vitrine" },
  "editorial-rich-text": { lane: "vitrine" },
  "editorial-separator": { lane: "vitrine" },
  "editorial-timeline": { lane: "vitrine" },
  "page-content-main": { lane: "vitrine" },

  // --- Vitrine: features / trust / press logos ---
  "features-multicolumn": { lane: "vitrine" },
  "features-slider-multicolumn": { lane: "vitrine" },
  "social-proof-brand-logos": { lane: "vitrine" },
  "trust-contact-icon-band": { lane: "vitrine" },
  "trust-icon-row": { lane: "vitrine" },

  // --- Vitrine: collection nav + generic product merchandising ---
  "collection-banner": { lane: "vitrine" },
  "collection-nav-banners": { lane: "vitrine" },
  "collection-nav-cards": { lane: "vitrine" },
  "collection-nav-grid": { lane: "vitrine" },
  "collection-nav-icon-buttons": { lane: "vitrine" },
  "collection-nav-image-cards": { lane: "vitrine" },
  "collection-nav-slider": { lane: "vitrine" },
  "collection-nav-tabs": { lane: "vitrine" },
  "product-showcase-favorites": { lane: "vitrine" },
  "product-showcase-featured": { lane: "vitrine" },
  "product-showcase-grid-featured": { lane: "vitrine" },
  "product-showcase-grid-plp": { lane: "vitrine" },
  "product-showcase-recently-viewed": { lane: "vitrine" },
  "product-showcase-related": { lane: "vitrine" },
  "product-showcase-tabs": { lane: "vitrine" },
});

/** Nav / chrome — unknown-schema keyword rules skip these names. */
export const CHROME_SCHEMAS = new Set(
  Object.entries(SCHEMA_CLASSIFICATION)
    .filter(([, e]) => e.family === "chrome")
    .map(([id]) => id)
);

/** PDP buy box — accordion “Ingredients / How to use” is not a CRO section. */
export const BUYBOX_SCHEMAS = new Set(
  Object.entries(SCHEMA_CLASSIFICATION)
    .filter(([, e]) => e.family === "buybox")
    .map(([id]) => id)
);

/**
 * Defaults were picked; these still need a human look.
 * Every entry is already in SCHEMA_CLASSIFICATION.
 */
export const AWAITING_APPROVAL = Object.freeze([
  {
    schemaId: "media-scrolling-gallery",
    why: "Amac leads with UGC, but the same strip is also a generic merchandising gallery.",
  },
  {
    schemaId: "media-shop-the-feed",
    why: "UGC shop-the-look is CRO; some uses are lookbook merchandising on a recipes page.",
  },
  {
    schemaId: "comparison-quick-table",
    why: "Stronger job is product-comparison; a few obs are us-vs-them copy of the same table.",
  },
  {
    schemaId: "promo-banner-countdown",
    why: "Schema job is countdown; one coming-soon landing is also sneak-peeks.",
  },
  {
    schemaId: "commerce-tools-products-bundle",
    why: "Dedicated bundle builder — mapped to extra `bundle`, which was not in the original six extras.",
  },
  {
    schemaId: "lead-capture-newsletter-band",
    why: "Mid-page band is lead-capture; can sit chrome-adjacent like a second footer.",
  },
  {
    schemaId: "trust-icon-row",
    why: "Shipping / returns / guarantee icons reduce doubt, but extras exclude icon rows from guarantee.",
  },
  {
    schemaId: "social-proof-brand-logos",
    why: "Press-logo row is vitrine by rule; kategori social-proof is not reviews.",
  },
  {
    schemaId: "product-info-main",
    why: "PDP buy box is vitrine/commerce; sticky ATC / scarcity / accordion live here with no split schema.",
  },
  {
    schemaId: "product-info-tabs",
    why: "PDP tabs often How to use / Ingredients; user said do not invent a split.",
  },
  {
    schemaId: "product-showcase-grid-featured",
    why: "Generic featured grid; many obs are bestsellers-as-social-proof headings on this same schema.",
  },
  {
    schemaId: "product-showcase-tabs",
    why: "Tabbed showcase is merchandising; Best Sellers is often just one tab label.",
  },
  {
    schemaId: "blog-list-main",
    why: "Blog chrome is vitrine; recipe hubs reuse this list with no recipes schema.",
  },
  {
    schemaId: "features-multicolumn",
    why: "Generic benefits grid; what's-inside / ingredients / guides / numbers reuse it.",
  },
  {
    schemaId: "editorial-image-with-text",
    why: "Editorial split is vitrine; how-it's-made / sourcing / how-to reuse it.",
  },
  {
    schemaId: "page-content-main",
    why: "Generic page body; guarantee pages reuse it with no guarantee schema.",
  },
  {
    schemaId: "hero-slideshow",
    why: "Hero is vitrine; a couple of slides are back-in-stock copy, not a scarcity section.",
  },
  {
    schemaId: "promo-spotlight-tab",
    why: "Edge offer tab could be scarcity CRO; no scarcity type and no dedicated schema.",
  },
]);

export function classificationOf(schemaId) {
  if (!schemaId) return null;
  return SCHEMA_CLASSIFICATION[schemaId] || null;
}

export function laneOf(schemaId) {
  return classificationOf(schemaId)?.lane || null;
}

export function croTypeOf(schemaId) {
  const e = classificationOf(schemaId);
  return e?.lane === "cro" ? e.type : null;
}

export function isCroSchema(schemaId) {
  return laneOf(schemaId) === "cro";
}

export function isVitrineSchema(schemaId) {
  return laneOf(schemaId) === "vitrine";
}

export function isClosedCroType(id) {
  return CLOSED.has(id);
}

export function allowlistCounts() {
  const ids = Object.keys(SCHEMA_CLASSIFICATION);
  let cro = 0;
  let vitrine = 0;
  for (const id of ids) {
    if (SCHEMA_CLASSIFICATION[id].lane === "cro") cro += 1;
    else vitrine += 1;
  }
  return {
    schemas: ids.length,
    cro,
    vitrine,
    awaiting: AWAITING_APPROVAL.length,
  };
}

export function croSchemasByType() {
  const byType = new Map();
  for (const [schemaId, e] of Object.entries(SCHEMA_CLASSIFICATION)) {
    if (e.lane !== "cro" || !e.type) continue;
    if (!byType.has(e.type)) byType.set(e.type, []);
    byType.get(e.type).push(schemaId);
  }
  for (const ids of byType.values()) ids.sort();
  return byType;
}

export function vitrineSchemaIds() {
  return Object.entries(SCHEMA_CLASSIFICATION)
    .filter(([, e]) => e.lane === "vitrine")
    .map(([id]) => id)
    .sort();
}
