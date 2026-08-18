import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  CRO_CATALOG,
  CHROME_SCHEMAS,
  buildCro,
  classifyRecord,
} from "./cro.mjs";

describe("CRO catalog", () => {
  it("has the 17 frozen English ids", () => {
    assert.equal(CRO_CATALOG.length, 17);
    assert.deepEqual(
      CRO_CATALOG.map((t) => t.id),
      [
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
      ]
    );
  });
});

function typesOf(rec) {
  return classifyRecord({ kind: "observation", ...rec }).map((h) => h.type);
}

describe("classifyRecord", () => {
  it("maps faq kategori / schema to faqs-qnas", () => {
    assert.deepEqual(
      typesOf({ schemaId: "faq-collapsible-tabs", kategori: "faq" }),
      ["faqs-qnas"]
    );
  });

  it("maps testimonial-ugc to reviews-testimonials", () => {
    assert.deepEqual(
      typesOf({ schemaId: "testimonial-quote-carousel", kategori: "testimonial-ugc" }),
      ["reviews-testimonials"]
    );
  });

  it("maps before-after-slider to before-after", () => {
    assert.deepEqual(
      typesOf({ schemaId: "before-after-slider", kategori: "before-after" }),
      ["before-after"]
    );
  });

  it("maps comparison-quick-table to product-comparison", () => {
    assert.deepEqual(
      typesOf({ schemaId: "comparison-quick-table", kategori: "comparison" }),
      ["product-comparison"]
    );
  });

  it("adds us-vs-them when comparison text is us vs them", () => {
    const types = typesOf({
      schemaId: "comparison-quick-table",
      kategori: "comparison",
      selector: "#shopify-section-template__usvsthem_ms53",
      notlar: "How do we stack up to the “classics”?",
      delta: "usvsthem_ms53. Nutrition comparison vs classic cereal",
    });
    assert.ok(types.includes("us-vs-them"));
    assert.ok(types.includes("product-comparison"));
  });

  it("does not treat generic vs in notes as us-vs-them", () => {
    const types = typesOf({
      schemaId: "editorial-image-with-text",
      kategori: "editorial",
      notlar: "Beklenen vs canlı: Theme Store listing.",
    });
    assert.equal(types.includes("us-vs-them"), false);
  });

  it("skips chrome schemas even when notes say Bestseller", () => {
    assert.deepEqual(
      typesOf({
        schemaId: "navigation-header-mega",
        kategori: "navigation",
        notlar: "Shop / Bestseller / Quiz mega",
      }),
      []
    );
    assert.ok(CHROME_SCHEMAS.has("navigation-header-mega"));
  });

  it("skips PDP buy-box back-in-stock / ingredients accordion", () => {
    assert.deepEqual(
      typesOf({
        schemaId: "product-info-main",
        kategori: "product-info",
        notlar: "BACK IN STOCK / BEST SELLER. Accordion: HOW TO USE / INGREDIENTS.",
      }),
      []
    );
  });

  it("matches what's inside on a dedicated block", () => {
    assert.deepEqual(
      typesOf({
        schemaId: "features-multicolumn",
        kategori: "features-benefits",
        sayfa: "about-brand",
        url: "https://takearecess.com/whats-inside",
        notlar: "what's inside ilk kategori: Recess Zero Proof",
      }),
      ["whats-inside"]
    );
  });

  it("maps product-finder-quiz to extra quiz", () => {
    assert.deepEqual(
      typesOf({
        schemaId: "product-finder-quiz",
        kategori: "product-showcase",
        varyant: "quiz",
        notlar: "Hair Quiz. Jebbit iframe.",
      }),
      ["quiz"]
    );
  });

  it("maps lead-capture kategori to extra lead-capture", () => {
    assert.deepEqual(
      typesOf({
        schemaId: "lead-capture-newsletter-band",
        kategori: "lead-capture",
      }),
      ["lead-capture"]
    );
  });

  it("maps countdown schema to extra countdown", () => {
    assert.ok(
      typesOf({
        schemaId: "promo-banner-countdown",
        kategori: "promo",
        notlar: "Sale timer",
      }).includes("countdown")
    );
  });

  it("maps recipe blog-list, not inclusivity metaphor", () => {
    assert.ok(
      typesOf({
        schemaId: "blog-list-main",
        kategori: "editorial",
        sayfa: "blog-list",
        url: "https://theme-taste-demo.myshopify.com/blogs/recipes",
        notlar: "Recipes. Grapefruit Kombucha Float",
      }).includes("recipes")
    );
    assert.equal(
      typesOf({
        schemaId: "editorial-image-with-text",
        kategori: "editorial",
        notlar: "A Recipe For Inclusivity + kurucu hikâyesi",
      }).includes("recipes"),
      false
    );
    assert.equal(
      typesOf({
        schemaId: "editorial-image-with-text",
        kategori: "editorial",
        notlar: "EMBRACING TRADITION + VIEW RECIPES →.",
      }).includes("recipes"),
      false
    );
  });

  it("maps product-showcase + bestsellers heading, not badge or PLP", () => {
    assert.ok(
      typesOf({
        schemaId: "product-showcase-tabs",
        kategori: "product-showcase",
        notlar: "Our Bestsellers — sekmeli koleksiyon vitrini.",
      }).includes("bestsellers-trending")
    );
    assert.equal(
      typesOf({
        schemaId: "product-showcase-grid-plp",
        kategori: "product-showcase",
        notlar: "Bestsellers collection grid",
      }).includes("bestsellers-trending"),
      false
    );
    assert.equal(
      typesOf({
        schemaId: "product-showcase-grid-featured",
        kategori: "product-showcase",
        notlar: "Community Favorites: Instant Angel",
        delta: "Kartta BESTSELLER rozeti, review sayısı.",
      }).includes("bestsellers-trending"),
      false
    );
  });

  it("maps percentage_stats to lets-talk-numbers", () => {
    assert.ok(
      typesOf({
        schemaId: "features-multicolumn",
        kategori: "features-benefits",
        selector: "#shopify-section-template__section_percentage_stats_MkPCBi",
        notlar: "percentage_stats ~825px.",
      }).includes("lets-talk-numbers")
    );
  });

  it("does not treat press-quote sourcing as sourcing type", () => {
    assert.equal(
      typesOf({
        schemaId: "testimonial-quote-carousel",
        kategori: "testimonial-ugc",
        sayfa: "about-brand",
        notlar: "Press quotes: forefront of sourcing… / The best quality…",
      }).includes("sourcing"),
      false
    );
  });

  it("does not treat FAQ ingredients accordion as ingredients extra", () => {
    assert.equal(
      typesOf({
        schemaId: "faq-collapsible-tabs",
        kategori: "faq",
        notlar: "KEY INGREDIENTS accordion: HYALURONIC ACID / RETINOL",
      }).includes("ingredients"),
      false
    );
    assert.ok(
      typesOf({
        schemaId: "faq-collapsible-tabs",
        kategori: "faq",
        notlar: "KEY INGREDIENTS accordion",
      }).includes("faqs-qnas")
    );
  });

  it("does not invent one-feature from generic features-multicolumn", () => {
    assert.equal(
      typesOf({
        schemaId: "features-multicolumn",
        kategori: "features-benefits",
        amac: "Fayda/özellik metinlerini çok kolonlu kart grid’inde sunmak",
        notlar: "Free Shipping & Returns / Contact us 24hrs.",
      }).includes("one-feature"),
      false
    );
  });

  it("skips schema-only rows", () => {
    assert.deepEqual(
      classifyRecord({
        kind: "schema-only",
        schemaId: "faq-collapsible-tabs",
        kategori: "faq",
      }),
      []
    );
  });
});

describe("buildCro", () => {
  it("keeps all 17 types and only emits extras with hits", () => {
    const inv = {
      generatedAt: "2026-01-01T00:00:00.000Z",
      schemaById: new Map([
        ["faq-collapsible-tabs", { varyant: "collapsible-tabs", amac: "SSS" }],
      ]),
      observations: [
        { observationId: "t.default.home.faq-collapsible-tabs", delta: "" },
      ],
      rows: [
        {
          kind: "observation",
          observationId: "t.default.home.faq-collapsible-tabs",
          schemaId: "faq-collapsible-tabs",
          kategori: "faq",
          sayfa: "home",
          kaynak: "t",
          preset: "default",
          amac: "SSS",
          notlar: "",
          url: "",
          evidence: [],
          evidenceCount: 0,
          evidenceStatus: "none",
          viewports: [],
          hasSchema: true,
        },
        {
          kind: "schema-only",
          observationId: null,
          schemaId: "hero-slideshow",
          kategori: "hero",
        },
      ],
    };
    const out = buildCro(inv);
    assert.equal(out.types.filter((t) => t.group === "cro").length, 17);
    const faq = out.types.find((t) => t.id === "faqs-qnas");
    assert.equal(faq.count, 1);
    assert.equal(faq.matches[0].schemaId, "faq-collapsible-tabs");
    assert.equal(out.counts.observations, 1);
    assert.equal(out.counts.extras, 0);
    const empty = out.types.find((t) => t.id === "one-feature");
    assert.equal(empty.count, 0);
    assert.deepEqual(empty.matches, []);
  });
});
