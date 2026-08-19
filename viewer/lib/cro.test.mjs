import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import {
  AWAITING_APPROVAL,
  BUYBOX_SCHEMAS,
  CHROME_SCHEMAS,
  CLOSED_CRO_TYPE_IDS,
  CRO_CATALOG,
  CRO_CATALOG_IDS,
  FUNNEL_EXTRAS,
  FUNNEL_EXTRA_IDS,
  SCHEMA_CLASSIFICATION,
  allowlistCounts,
  buildCro,
  classifyRecord,
  croTypeOf,
  isCroSchema,
  isVitrineSchema,
} from "./cro.mjs";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

function onDiskSchemaIds() {
  const ids = [];
  for (const scope of ["global", "instance"]) {
    const dir = path.join(ROOT, "sections", scope);
    if (!fs.existsSync(dir)) continue;
    for (const name of fs.readdirSync(dir)) {
      if (!name.endsWith(".json") || name.startsWith("_")) continue;
      const raw = JSON.parse(fs.readFileSync(path.join(dir, name), "utf8"));
      ids.push(raw.id || name.replace(/\.json$/, ""));
    }
  }
  return ids.sort();
}

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
    assert.deepEqual(
      CRO_CATALOG.map((t) => t.id),
      [...CRO_CATALOG_IDS]
    );
  });

  it("keeps extras in the closed list including bundle", () => {
    assert.deepEqual(
      FUNNEL_EXTRAS.map((t) => t.id),
      [...FUNNEL_EXTRA_IDS]
    );
    assert.ok(CLOSED_CRO_TYPE_IDS.includes("bundle"));
    assert.deepEqual(
      [...CLOSED_CRO_TYPE_IDS],
      [...CRO_CATALOG_IDS, ...FUNNEL_EXTRA_IDS]
    );
  });
});

describe("schema allowlist", () => {
  const diskIds = onDiskSchemaIds();
  const mapIds = Object.keys(SCHEMA_CLASSIFICATION).sort();

  it("classifies every on-disk schemaId and nothing else", () => {
    assert.deepEqual(mapIds, diskIds);
    assert.equal(diskIds.length, 65);
  });

  it("assigns cro | vitrine; cro has exactly one closed type", () => {
    for (const [id, e] of Object.entries(SCHEMA_CLASSIFICATION)) {
      assert.ok(e.lane === "cro" || e.lane === "vitrine", `${id} lane`);
      if (e.lane === "cro") {
        assert.equal(typeof e.type, "string", `${id} missing type`);
        assert.ok(
          CLOSED_CRO_TYPE_IDS.includes(e.type),
          `${id} type ${e.type} not in closed list`
        );
      } else {
        assert.equal(e.type, undefined, `${id} vitrine must not have a type`);
      }
    }
  });

  it("counts 11 cro / 54 vitrine / 18 awaiting", () => {
    const c = allowlistCounts();
    assert.deepEqual(c, { schemas: 65, cro: 11, vitrine: 54, awaiting: 18 });
  });

  it("lists awaiting rows that already have a default in the map", () => {
    const seen = new Set();
    for (const row of AWAITING_APPROVAL) {
      assert.ok(SCHEMA_CLASSIFICATION[row.schemaId], row.schemaId);
      assert.ok(row.why && row.why.length > 8, row.schemaId);
      assert.equal(seen.has(row.schemaId), false, `dup ${row.schemaId}`);
      seen.add(row.schemaId);
    }
    assert.equal(AWAITING_APPROVAL.length, 18);
  });

  it("documents every schemaId in candidates/cro-types.md", () => {
    const md = fs.readFileSync(path.join(ROOT, "candidates/cro-types.md"), "utf8");
    const missing = diskIds.filter((id) => !md.includes(`\`${id}\``));
    assert.deepEqual(missing, []);
    assert.match(md, /65 şema/);
    assert.match(md, /11 CRO/);
    assert.match(md, /54 vitrine/);
    assert.match(md, /18 awaiting/);
  });

  it("treats chrome + buy-box as vitrine", () => {
    for (const id of CHROME_SCHEMAS) {
      assert.equal(SCHEMA_CLASSIFICATION[id].lane, "vitrine", id);
      assert.equal(SCHEMA_CLASSIFICATION[id].family, "chrome", id);
    }
    assert.ok(CHROME_SCHEMAS.has("navigation-header-mega"));
    assert.deepEqual([...BUYBOX_SCHEMAS].sort(), [
      "product-info-main",
      "product-info-tabs",
    ]);
    assert.ok(isVitrineSchema("product-info-main"));
    assert.equal(croTypeOf("faq-collapsible-tabs"), "faqs-qnas");
    assert.ok(isCroSchema("faq-collapsible-tabs"));
  });
});

function typesOf(rec) {
  return classifyRecord({ kind: "observation", ...rec }).map((h) => h.type);
}

describe("classifyRecord allowlist", () => {
  it("maps dedicated cro schemas to one type", () => {
    assert.deepEqual(
      typesOf({ schemaId: "faq-collapsible-tabs", kategori: "faq" }),
      ["faqs-qnas"]
    );
    assert.deepEqual(
      typesOf({
        schemaId: "testimonial-quote-carousel",
        kategori: "testimonial-ugc",
      }),
      ["reviews-testimonials"]
    );
    assert.deepEqual(
      typesOf({ schemaId: "before-after-slider", kategori: "before-after" }),
      ["before-after"]
    );
    assert.deepEqual(
      typesOf({ schemaId: "comparison-quick-table", kategori: "comparison" }),
      ["product-comparison"]
    );
    assert.deepEqual(
      typesOf({
        schemaId: "product-finder-quiz",
        kategori: "product-showcase",
        varyant: "quiz",
      }),
      ["quiz"]
    );
    assert.deepEqual(
      typesOf({
        schemaId: "lead-capture-newsletter-band",
        kategori: "lead-capture",
      }),
      ["lead-capture"]
    );
    assert.deepEqual(
      typesOf({ schemaId: "promo-banner-countdown", kategori: "promo" }),
      ["countdown"]
    );
    assert.deepEqual(
      typesOf({ schemaId: "media-shop-the-feed", kategori: "media" }),
      ["ugc-grid"]
    );
    assert.deepEqual(
      typesOf({
        schemaId: "commerce-tools-products-bundle",
        kategori: "product-showcase",
        notlar: "Coffee Menu page: August Featured Picks + Best Sellers",
      }),
      ["bundle"]
    );
  });

  it("does not add a second type on a cro schema (us-vs-them copy)", () => {
    const types = typesOf({
      schemaId: "comparison-quick-table",
      kategori: "comparison",
      selector: "#shopify-section-template__usvsthem_ms53",
      notlar: "How do we stack up to the “classics”?",
      delta: "usvsthem_ms53. Nutrition comparison vs classic cereal",
    });
    assert.deepEqual(types, ["product-comparison"]);
  });

  it("does not treat generic vs in vitrine notes as us-vs-them", () => {
    const types = typesOf({
      schemaId: "editorial-image-with-text",
      kategori: "editorial",
      notlar: "Beklenen vs canlı: Theme Store listing.",
    });
    assert.deepEqual(types, []);
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

  it("does not keyword-match vitrine leftovers (editorial / grid / blog)", () => {
    assert.deepEqual(
      typesOf({
        schemaId: "features-multicolumn",
        kategori: "features-benefits",
        sayfa: "about-brand",
        url: "https://takearecess.com/whats-inside",
        notlar: "what's inside ilk kategori: Recess Zero Proof",
      }),
      []
    );
    assert.deepEqual(
      typesOf({
        schemaId: "blog-list-main",
        kategori: "editorial",
        sayfa: "blog-list",
        url: "https://theme-taste-demo.myshopify.com/blogs/recipes",
        notlar: "Recipes. Grapefruit Kombucha Float",
      }),
      []
    );
    assert.deepEqual(
      typesOf({
        schemaId: "product-showcase-tabs",
        kategori: "product-showcase",
        notlar: "Our Bestsellers — sekmeli koleksiyon vitrini.",
      }),
      []
    );
    assert.deepEqual(
      typesOf({
        schemaId: "product-showcase-grid-plp",
        kategori: "product-showcase",
        notlar: "Bestsellers collection grid",
      }),
      []
    );
    assert.deepEqual(
      typesOf({
        schemaId: "features-multicolumn",
        kategori: "features-benefits",
        selector: "#shopify-section-template__section_percentage_stats_MkPCBi",
        notlar: "percentage_stats ~825px.",
      }),
      []
    );
    assert.deepEqual(
      typesOf({
        schemaId: "hero-slideshow",
        kategori: "hero",
        notlar: "BACK IN STOCK / Tote-ally Amazing",
      }),
      []
    );
  });

  it("does not treat FAQ ingredients accordion as ingredients extra", () => {
    assert.deepEqual(
      typesOf({
        schemaId: "faq-collapsible-tabs",
        kategori: "faq",
        notlar: "KEY INGREDIENTS accordion: HYALURONIC ACID / RETINOL",
      }),
      ["faqs-qnas"]
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

describe("classifyRecord leftover (unknown schemaId only)", () => {
  it("maps faq kategori on an unknown schema", () => {
    assert.deepEqual(
      typesOf({ schemaId: "faq-orphan-block", kategori: "faq" }),
      ["faqs-qnas"]
    );
  });

  it("maps what's-inside keyword on an unknown schema", () => {
    assert.deepEqual(
      typesOf({
        schemaId: "unknown-whats-inside",
        kategori: "features-benefits",
        sayfa: "about-brand",
        url: "https://takearecess.com/whats-inside",
        notlar: "what's inside ilk kategori: Recess Zero Proof",
      }),
      ["whats-inside"]
    );
  });

  it("still skips chrome / buy-box names on the leftover path", () => {
    assert.deepEqual(
      typesOf({
        schemaId: "navigation-header-mega",
        kategori: "navigation",
        notlar: "Shop / Bestseller / Quiz mega",
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
        {
          kind: "observation",
          observationId: "t.default.home.product-showcase-tabs",
          schemaId: "product-showcase-tabs",
          kategori: "product-showcase",
          sayfa: "home",
          kaynak: "t",
          preset: "default",
          amac: "vitrin",
          notlar: "Our Bestsellers — sekmeli koleksiyon vitrini.",
          url: "",
          evidence: [],
          evidenceCount: 0,
          evidenceStatus: "none",
          viewports: [],
          hasSchema: true,
        },
      ],
    };
    const out = buildCro(inv);
    assert.equal(out.types.filter((t) => t.group === "cro").length, 17);
    const faq = out.types.find((t) => t.id === "faqs-qnas");
    assert.equal(faq.count, 1);
    assert.equal(faq.matches[0].schemaId, "faq-collapsible-tabs");
    assert.equal(faq.matches[0].lane, "cro");
    assert.equal(out.counts.observations, 1);
    assert.equal(out.counts.extras, 0);
    const empty = out.types.find((t) => t.id === "one-feature");
    assert.equal(empty.count, 0);
    assert.deepEqual(empty.matches, []);
    const bestsellers = out.types.find((t) => t.id === "bestsellers-trending");
    assert.equal(bestsellers.count, 0);
    assert.deepEqual(out.counts.allowlist, {
      schemas: 65,
      cro: 11,
      vitrine: 54,
      awaiting: 18,
    });
  });

  it("CRO filter only returns rows whose schema is cro", () => {
    const bait = {
      kind: "observation",
      notlar:
        "Our Bestsellers / Recipes / what's inside / back in stock / how it's made / how to use / KEY INGREDIENTS / percentage_stats / us vs them / guarantee",
      sayfa: "how-it-works",
      url: "https://example.com/blogs/recipes",
    };
    const leftover = [];
    for (const [schemaId, e] of Object.entries(SCHEMA_CLASSIFICATION)) {
      const hits = classifyRecord({ ...bait, schemaId, kategori: "editorial" });
      if (e.lane === "vitrine") {
        if (hits.length) leftover.push({ schemaId, hits });
      } else {
        assert.deepEqual(
          hits.map((h) => h.type),
          [e.type],
          schemaId
        );
        assert.ok(CLOSED_CRO_TYPE_IDS.includes(e.type), e.type);
      }
    }
    assert.deepEqual(leftover, []);

    const inv = {
      generatedAt: "2026-01-01T00:00:00.000Z",
      schemaById: new Map(),
      observations: [],
      rows: Object.keys(SCHEMA_CLASSIFICATION).map((schemaId) => ({
        kind: "observation",
        observationId: `t.default.home.${schemaId}`,
        schemaId,
        kategori: "editorial",
        sayfa: "home",
        kaynak: "t",
        preset: "default",
        ...bait,
        evidence: [],
        evidenceCount: 0,
        evidenceStatus: "none",
        viewports: [],
        hasSchema: true,
      })),
    };
    const out = buildCro(inv);
    for (const t of out.types) {
      for (const m of t.matches) {
        assert.ok(isCroSchema(m.schemaId), m.schemaId);
        assert.equal(m.lane, "cro");
        assert.ok(CLOSED_CRO_TYPE_IDS.includes(t.id), t.id);
      }
    }
    assert.equal(out.counts.observations, allowlistCounts().cro);
  });
});
