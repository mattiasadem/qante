/**
 * CRO / funnel section classifier.
 *
 * Mines live inventory (observations + schemas). No static dump.
 * Deterministic: kategori/schemaId maps first, then keyword hits on real
 * text fields. False positives are worse than misses.
 *
 * Haystack fields (investigated from inventory.mjs + observation JSON):
 *   schemaId, kategori, sayfa, amac, notlar, delta, observationId,
 *   selector, url, varyant
 * Interaction stateFindings / nav open-copy are NOT used (too noisy).
 *
 * Chrome (nav/footer/search/cart) and PDP buy-box schemas are excluded
 * from keyword rules. Tight kategori/schemaId maps still apply.
 */

export const CRO_GROUP = "cro";
export const FUNNEL_GROUP = "funnel";

/** 17 catalog types — English ids are frozen keys. */
export const CRO_CATALOG = [
  {
    id: "one-feature",
    titleEn: "One Feature",
    titleTr: "Tek özellik",
    purpose: "Tek bir ürün özelliğini merkeze alan blok. Çok kolonlu özellik ızgarası buraya girmez.",
  },
  {
    id: "us-vs-them",
    titleEn: "Us vs Them",
    titleTr: "Biz vs onlar",
    purpose: "Markayı rakibe / “klasik”e karşı konumlayan karşılaştırma (us vs them).",
  },
  {
    id: "reviews-testimonials",
    titleEn: "Reviews & Testimonials",
    titleTr: "Yorum / sosyal kanıt",
    purpose: "Müşteri alıntısı, yorum, testimonial. Basın logosu şeridi değil.",
  },
  {
    id: "whats-inside",
    titleEn: "What's Inside?",
    titleTr: "İçinde ne var",
    purpose: "Ürünün içinde ne olduğunu anlatan blok (what's inside).",
  },
  {
    id: "back-in-stock",
    titleEn: "Back In Stock",
    titleTr: "Stoka döndü",
    purpose: "Stoka dönüş duyurusu. PDP/PLP rozeti değil.",
  },
  {
    id: "how-its-made",
    titleEn: "How It's Made",
    titleTr: "Nasıl üretiliyor",
    purpose: "Üretim / zanaat anlatımı (how it's made, craftsmanship). How it works rehberi değil.",
  },
  {
    id: "sneak-peeks",
    titleEn: "Sneak Peeks",
    titleTr: "Ön izleme",
    purpose: "Yakında / sneak peek / coming soon teaser.",
  },
  {
    id: "one-benefit",
    titleEn: "One Benefit",
    titleTr: "Tek fayda",
    purpose: "Tek bir faydayı merkeze alan blok. Genel features-benefits ızgarası değil.",
  },
  {
    id: "recipes",
    titleEn: "Recipes",
    titleTr: "Tarif / kullanım",
    purpose: "Tarif hub’ı, tarif yazısı veya tarif ızgarası. Nav’daki Recipes linki değil.",
  },
  {
    id: "bestsellers-trending",
    titleEn: "Bestsellers & Trending",
    titleTr: "Çok satan / trend",
    purpose: "Çok satan / trend ürün vitrini. Menüdeki Bestsellers değil.",
  },
  {
    id: "faqs-qnas",
    titleEn: "FAQs & QnAs",
    titleTr: "SSS",
    purpose: "SSS / accordion / soru-cevap section.",
  },
  {
    id: "product-guides",
    titleEn: "Product Guides",
    titleTr: "Ürün rehberi",
    purpose: "How to use, how it works, product guide. Buy-box akordeonu değil.",
  },
  {
    id: "before-after",
    titleEn: "Before & After",
    titleTr: "Önce / sonra",
    purpose: "Öncesi/sonrası slider veya kesik karşılaştırma.",
  },
  {
    id: "myth-vs-fact",
    titleEn: "Myth vs Fact",
    titleTr: "Efsane vs gerçek",
    purpose: "Efsane vs gerçek / myth busters bloğu.",
  },
  {
    id: "sourcing",
    titleEn: "Sourcing",
    titleTr: "Kaynak / tedarik",
    purpose: "Kaynak / tedarik / izlenebilir malzeme anlatımı.",
  },
  {
    id: "product-comparison",
    titleEn: "Product Comparison",
    titleTr: "Ürün karşılaştırması",
    purpose: "Ürünleri yan yana karşılaştıran tablo/kart. Compare drawer değil.",
  },
  {
    id: "lets-talk-numbers",
    titleEn: "Let's Talk Numbers",
    titleTr: "Rakamlar",
    purpose: "İstatistik / yüzde / rakam kolonu. Buy-box’taki % recommended değil.",
  },
];

/** Nearby funnel patterns — only emitted when inventory actually hits. */
export const FUNNEL_EXTRAS = [
  {
    id: "quiz",
    titleEn: "Quiz",
    titleTr: "Quiz / ürün bulucu",
    purpose: "Çok adımlı ürün keşif testi. Nav’daki Quiz linki değil.",
  },
  {
    id: "lead-capture",
    titleEn: "Lead capture",
    titleTr: "Lead / e-posta",
    purpose: "Newsletter bandı veya lead formu (footer dışı).",
  },
  {
    id: "countdown",
    titleEn: "Countdown",
    titleTr: "Geri sayım",
    purpose: "Kampanya / lansman geri sayımı.",
  },
  {
    id: "guarantee",
    titleEn: "Guarantee",
    titleTr: "Garanti",
    purpose: "Garanti sayfası veya ürün garanti bloğu. Footer linki / ikon satırı değil.",
  },
  {
    id: "ugc-grid",
    titleEn: "UGC grid",
    titleTr: "UGC ızgarası",
    purpose: "UGC / shop-the-feed görsel ızgarası. Alıntı carousel değil.",
  },
  {
    id: "ingredients",
    titleEn: "Ingredients",
    titleTr: "İçerik / formül",
    purpose: "Key ingredients / ingredients-first bloğu. What's inside daha sıkıysa oraya gider.",
  },
];

const TYPE_BY_ID = new Map(
  [...CRO_CATALOG, ...FUNNEL_EXTRAS].map((t) => [t.id, t])
);

/** Nav / chrome — keyword rules skip these. */
export const CHROME_SCHEMAS = new Set([
  "navigation-header-mega",
  "global-menu-drawer",
  "footer-columns-newsletter",
  "global-predictive-search",
  "global-cart-drawer",
  "navigation-breadcrumbs",
  "search-results",
  "cart-page-main",
  "global-quick-view",
  "global-compare-drawer",
]);

/** PDP buy box — accordion “Ingredients / How to use” is not a CRO section. */
export const BUYBOX_SCHEMAS = new Set(["product-info-main", "product-info-tabs"]);

const RECIPE_CONTENT = new Set([
  "blog-list-main",
  "blog-post-main",
  "editorial-image-with-text",
  "editorial-image-with-text-overlay",
  "editorial-rich-text",
  "editorial-custom-content",
  "editorial-dynamic-grid",
  "editorial-highlight-text-image",
  "media-lookbook-slider",
  "media-shop-the-feed",
]);

const GUIDE_CONTENT = new Set([
  "features-multicolumn",
  "features-slider-multicolumn",
  "editorial-image-with-text",
  "editorial-image-with-text-overlay",
  "editorial-rich-text",
  "editorial-timeline",
  "editorial-custom-content",
  "collection-nav-slider",
  "blog-list-main",
]);

const MADE_CONTENT = new Set([
  "editorial-image-with-text",
  "editorial-image-with-text-overlay",
  "editorial-rich-text",
  "editorial-timeline",
  "editorial-dynamic-grid",
  "editorial-custom-content",
  "features-multicolumn",
  "features-slider-multicolumn",
  "trust-icon-row",
]);

function isChrome(schemaId) {
  return CHROME_SCHEMAS.has(schemaId);
}

function isBuybox(schemaId) {
  return BUYBOX_SCHEMAS.has(schemaId);
}

function haystackOf(rec) {
  return [
    rec.schemaId,
    rec.kategori,
    rec.sayfa,
    rec.amac,
    rec.notlar,
    rec.delta,
    rec.observationId,
    rec.selector,
    rec.url,
    rec.varyant,
  ]
    .filter(Boolean)
    .join("\n");
}

function hasRe(text, re) {
  return re.test(text);
}

/** Section heading in notlar — not a card badge or sibling leftover. */
function isBestsellerHeading(notlar) {
  const n = String(notlar || "");
  if (!n) return false;
  const cleaned = n
    .replace(/\bBESTSELLER\b/g, "")
    .replace(/\bbest ?seller rozeti\b/gi, "")
    .replace(/rozet[^.]{0,48}best ?seller/gi, "")
    .replace(/\(\s*best ?seller\s*\)/gi, "");
  return /(?:^|[.!?/·—:—]\s*)(?:[A-Za-zÇĞİÖŞÜçğıöşü ]{0,28})?\b(?:best ?sellers|bestsellers|trending|best selling|çok satan)\b/i.test(
    cleaned
  );
}

/** Recipe hub / article — not a VIEW RECIPES CTA or sibling-template note. */
function isRecipeSection(rec) {
  const url = rec.url || "";
  const notlar = rec.notlar || "";
  if (rec.sayfa === "recipes") return true;
  if (/\/(blogs\/)?recipes\b|\/cocktail-recipes\b/i.test(url)) return true;
  if (/recipe for inclusivity|view recipes|aynı template/i.test(notlar)) return false;
  if (/ALL POSTS|COMMUNITY \/ NEWS/i.test(notlar) && /RECIPES sekm/i.test(notlar)) return false;
  if (/^recipes?\b/i.test(notlar.trim())) return true;
  if (/\bRECIPES\b/.test(notlar)) return true;
  if (/inspiration & recipes/i.test(notlar)) return true;
  if (/cocktail recipes|tarif kart|tarif slayt|tarif metni|tarif \( /i.test(notlar)) return true;
  return false;
}

function clip(s, n = 80) {
  const t = String(s || "").replace(/\s+/g, " ").trim();
  if (!t) return "";
  return t.length > n ? `${t.slice(0, n - 1)}…` : t;
}

function add(hits, type, why) {
  if (hits.some((h) => h.type === type)) return;
  hits.push({ type, why });
}

/**
 * Classify one observation-shaped record.
 * @returns {{ type: string, why: string }[]}
 */
export function classifyRecord(rec) {
  const hits = [];
  if (!rec || rec.kind === "schema-only") return hits;

  const schemaId = rec.schemaId || "";
  const kategori = rec.kategori || "";
  const sayfa = rec.sayfa || "";
  const hay = haystackOf(rec);
  const chrome = isChrome(schemaId);
  const buybox = isBuybox(schemaId);
  const skipLoose = chrome || buybox;

  // --- Tight kategori / schemaId maps (chrome still skipped) ---
  if (!chrome && (kategori === "faq" || schemaId.startsWith("faq-"))) {
    add(hits, "faqs-qnas", `kategori/şema FAQ (${schemaId || kategori})`);
  }

  if (!chrome && (kategori === "testimonial-ugc" || schemaId === "testimonial-quote-carousel")) {
    add(hits, "reviews-testimonials", `kategori/şema testimonial (${schemaId || kategori})`);
  }

  if (!chrome && (kategori === "before-after" || schemaId === "before-after-slider")) {
    add(hits, "before-after", `kategori/şema before-after (${schemaId || kategori})`);
  }

  if (
    !chrome &&
    schemaId === "comparison-quick-table" &&
    !/karşılaştırma tablosu değil|karsilastirma tablosu degil/i.test(hay)
  ) {
    add(hits, "product-comparison", "şema comparison-quick-table");
  }

  if (!chrome && (kategori === "lead-capture" || schemaId.startsWith("lead-capture-"))) {
    add(hits, "lead-capture", `kategori/şema lead-capture (${schemaId || kategori})`);
  }

  if (!chrome && (schemaId === "product-finder-quiz" || rec.varyant === "quiz")) {
    add(hits, "quiz", `şema/varyant quiz (${schemaId})`);
  }

  if (!chrome && (schemaId === "promo-banner-countdown" || /countdown/i.test(schemaId))) {
    add(hits, "countdown", `şema geri sayım (${schemaId})`);
  }

  if (!chrome && schemaId === "media-shop-the-feed") {
    add(hits, "ugc-grid", "şema media-shop-the-feed (UGC / shop the feed)");
  }
  if (!chrome && schemaId === "media-scrolling-gallery" && /ugc/i.test(hay)) {
    add(hits, "ugc-grid", "şema media-scrolling-gallery + UGC metni");
  }

  // --- Keyword rules (no chrome / buy-box) ---
  if (!skipLoose) {
    if (
      hasRe(hay, /us-?vs-?them|usvsthem|us vs them|\bvs them\b|\bvs classic/i) ||
      hasRe(hay, /stack up to/)
    ) {
      add(hits, "us-vs-them", `us vs them metni: ${clip(rec.notlar || rec.delta || rec.selector)}`);
    }

    if (hasRe(hay, /what'?s inside|whats-inside|i[cç]inde ne var/i)) {
      add(hits, "whats-inside", `what's inside: ${clip(rec.notlar || rec.url)}`);
    }

    if (
      hasRe(hay, /back in stock|back-in-stock|stoka d[oö]nd[uü]/i) &&
      !/product-showcase-grid-plp|product-showcase-grid-featured|product-showcase-related/.test(
        schemaId
      )
    ) {
      add(hits, "back-in-stock", `stoka döndü duyurusu: ${clip(rec.notlar)}`);
    }

    if (
      hasRe(hay, /how it'?s made|how-its-made|nas[iı]l [uü]retil/i) ||
      (sayfa === "craftsmanship" && MADE_CONTENT.has(schemaId))
    ) {
      add(
        hits,
        "how-its-made",
        sayfa === "craftsmanship"
          ? `craftsmanship sayfası + ${schemaId}`
          : `how it's made: ${clip(rec.notlar || rec.amac)}`
      );
    }

    if (hasRe(hay, /sneak peek/i)) {
      add(hits, "sneak-peeks", `sneak peek: ${clip(rec.notlar)}`);
    } else if (
      hasRe(hay, /coming soon/i) &&
      (schemaId === "promo-banner-countdown" || sayfa.includes("landing"))
    ) {
      add(hits, "sneak-peeks", `coming soon teaser: ${clip(rec.notlar)}`);
    }

    if (hasRe(hay, /\bone feature\b|tek [oö]zellik|one-feature/i)) {
      add(hits, "one-feature", `tek özellik: ${clip(rec.notlar || rec.amac)}`);
    }

    if (hasRe(hay, /\bone benefit\b|tek fayda|one-benefit/i) && !/glutathione-benefits/i.test(hay)) {
      add(hits, "one-benefit", `tek fayda: ${clip(rec.notlar || rec.amac)}`);
    }

    if (RECIPE_CONTENT.has(schemaId) && isRecipeSection(rec) && !/recipe for inclusivity/i.test(hay)) {
      add(
        hits,
        "recipes",
        `tarif içeriği (${schemaId}${sayfa === "recipes" ? ", sayfa recipes" : ""})`
      );
    }

    if (
      kategori === "product-showcase" &&
      schemaId !== "product-showcase-grid-plp" &&
      schemaId !== "product-showcase-related" &&
      schemaId !== "product-showcase-recently-viewed" &&
      schemaId !== "product-finder-quiz" &&
      isBestsellerHeading(rec.notlar)
    ) {
      add(hits, "bestsellers-trending", `vitrin + bestseller/trend: ${clip(rec.notlar)}`);
    }

    if (
      GUIDE_CONTENT.has(schemaId) &&
      (hasRe(hay, /product guides?|ürün rehberi/i) ||
        hasRe(rec.notlar || "", /^how to use\b|how to use ·|how-to-use/i) ||
        sayfa === "how-it-works")
    ) {
      add(
        hits,
        "product-guides",
        sayfa === "how-it-works"
          ? `how-it-works sayfası + ${schemaId}`
          : `rehber: ${clip(rec.notlar || rec.amac)}`
      );
    }

    if (hasRe(hay, /myth vs fact|myth-vs-fact|efsane vs|myth busters/i) && schemaId !== "blog-list-main") {
      add(hits, "myth-vs-fact", `myth vs fact: ${clip(rec.notlar)}`);
    }

    if (
      hasRe(hay, /\bsourcing\b|tedarik/i) &&
      !/tedarik kart/i.test(hay) &&
      kategori !== "testimonial-ugc" &&
      schemaId !== "testimonial-quote-carousel" &&
      (kategori === "editorial" ||
        kategori === "trust" ||
        kategori === "features-benefits" ||
        sayfa === "active-ingredients" ||
        sayfa === "about-brand")
    ) {
      add(hits, "sourcing", `sourcing/tedarik: ${clip(rec.notlar)}`);
    }

    if (
      hasRe(hay, /percentage_stats|let'?s talk numbers|by the numbers|\brakamlar\b/i)
    ) {
      add(hits, "lets-talk-numbers", `rakam/istatistik: ${clip(rec.notlar || rec.selector)}`);
    }

    if (
      sayfa === "guarantee" ||
      (/\/pages\/guarantee\b|\/guarantee\/?$/i.test(rec.url || "") &&
        (schemaId === "page-content-main" || kategori === "editorial" || kategori === "trust"))
    ) {
      add(hits, "guarantee", `garanti sayfası (${schemaId})`);
    } else if (
      hasRe(rec.notlar || "", /^product guarantee\b/i) &&
      (kategori === "editorial" || schemaId === "page-content-main")
    ) {
      add(hits, "guarantee", `ürün garanti bloğu: ${clip(rec.notlar)}`);
    }

    if (
      !hits.some((h) => h.type === "whats-inside") &&
      kategori !== "faq" &&
      !schemaId.startsWith("faq-") &&
      (hasRe(rec.notlar || "", /key ingredients|ingredients first|100% natural ingredients/i) ||
        (sayfa === "active-ingredients" &&
          (kategori === "editorial" || kategori === "features-benefits")))
    ) {
      add(hits, "ingredients", `içerik/formül: ${clip(rec.notlar || sayfa)}`);
    }
  }

  return hits;
}

function lightMatch(row, why) {
  return {
    observationId: row.observationId,
    schemaId: row.schemaId,
    kaynak: row.kaynak,
    preset: row.preset,
    sayfa: row.sayfa,
    kategori: row.kategori,
    url: row.url || "",
    why,
    evidenceStatus: row.evidenceStatus,
    viewports: row.viewports || [],
    evidence: (row.evidence || []).slice(0, 3),
    evidenceCount: row.evidenceCount || 0,
    hasSchema: row.hasSchema,
    endustri: row.endustri || [],
  };
}

function typePayload(meta, group, matches) {
  return {
    id: meta.id,
    titleEn: meta.titleEn,
    titleTr: meta.titleTr,
    purpose: meta.purpose,
    group,
    count: matches.length,
    matches,
  };
}

/**
 * Build CRO payload from a live inventory snapshot.
 */
export function buildCro(inv) {
  const buckets = new Map();
  for (const t of CRO_CATALOG) buckets.set(t.id, []);

  const rows = (inv.rows || []).filter((r) => r.kind === "observation");
  for (const row of rows) {
    const schema = inv.schemaById?.get(row.schemaId);
    const obs = (inv.observations || []).find((o) => o.observationId === row.observationId);
    const rec = {
      ...row,
      varyant: schema?.varyant || "",
      delta: obs?.delta || "",
      amac: row.amac || schema?.amac || "",
    };
    const hits = classifyRecord(rec);
    for (const hit of hits) {
      if (!buckets.has(hit.type)) buckets.set(hit.type, []);
      buckets.get(hit.type).push(lightMatch(row, hit.why));
    }
  }

  const croTypes = CRO_CATALOG.map((meta) =>
    typePayload(meta, CRO_GROUP, buckets.get(meta.id) || [])
  );

  const extraTypes = FUNNEL_EXTRAS.map((meta) =>
    typePayload(meta, FUNNEL_GROUP, buckets.get(meta.id) || [])
  ).filter((t) => t.count > 0);

  const types = [...croTypes, ...extraTypes];
  const matchedIds = new Set();
  for (const t of types) {
    for (const m of t.matches) {
      if (m.observationId) matchedIds.add(m.observationId);
    }
  }

  return {
    generatedAt: inv.generatedAt,
    groups: [
      { id: CRO_GROUP, title: "CRO tipleri", types: croTypes },
      ...(extraTypes.length
        ? [{ id: FUNNEL_GROUP, title: "Diğer funnel", types: extraTypes }]
        : []),
    ],
    types,
    counts: {
      catalog: CRO_CATALOG.length,
      extras: extraTypes.length,
      typesWithHits: types.filter((t) => t.count > 0).length,
      matches: types.reduce((n, t) => n + t.count, 0),
      observations: matchedIds.size,
    },
  };
}

export function typeById(id) {
  return TYPE_BY_ID.get(id) || null;
}
