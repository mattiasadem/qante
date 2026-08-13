/**
 * Filtreleme, facet sayımı, gruplama.
 * Facet sayıları "kendi boyutu hariç diğer filtreler uygulanmış" halde hesaplanır,
 * böylece çoklu seçim yaparken sayılar sıfırlanmaz.
 */

export const DIMENSIONS = [
  "kaynak",
  "tp", // tema/preset bileşik — preset'i temaya bağlar ( br. "hyper/default")
  "sayfa",
  "kategori",
  "scope",
  "viewport",
];

export const GROUPS = {
  schema: { label: "Şema", field: "schemaId" },
  kaynak: { label: "Tema", field: "kaynak" },
  preset: { label: "Tema › Preset", field: "_kaynakPreset" },
  sayfa: { label: "Sayfa", field: "sayfa" },
  kategori: { label: "Kategori", field: "kategori" },
  scope: { label: "Scope", field: "scope" },
};

/** En önemli → az önemli (düşük rank = önce). Tanımsızlar sona. */
export const SCHEMA_PRIORITY = [
  "navigation-header-mega",
  "promo-announcement-bar",
  "hero-slideshow",
  "product-info-main",
  "product-info-tabs",
  "product-showcase-grid-plp",
  "product-showcase-grid-featured",
  "product-showcase-related",
  "product-showcase-favorites",
  "product-showcase-recently-viewed",
  "collection-banner",
  "search-results",
  "cart-page-main",
  "global-cart-drawer",
  "global-menu-drawer",
  "global-predictive-search",
  "global-quick-view",
  "global-compare-drawer",
  "collection-nav-tabs",
  "collection-nav-grid",
  "collection-nav-slider",
  "collection-nav-icon-buttons",
  "promo-banner-countdown",
  "promo-spotlight-tab",
  "promo-scrolling-marquee",
  "features-multicolumn",
  "features-slider-multicolumn",
  "testimonial-quote-carousel",
  "trust-icon-row",
  "trust-contact-icon-band",
  "comparison-quick-table",
  "before-after-slider",
  "commerce-tools-products-bundle",
  "product-showcase-tabs",
  "promo-grid-banner",
  "promo-banner-tabs",
  "collection-nav-image-cards",
  "collection-nav-cards",
  "collection-nav-banners",
  "social-proof-brand-logos",
  "media-shop-the-feed",
  "media-video-hero",
  "editorial-layered-images",
  "editorial-highlight-text-image",
  "lead-capture-newsletter-band",
  "faq-collapsible-tabs",
  "editorial-image-with-text",
  "editorial-image-with-text-overlay",
  "editorial-rich-text",
  "editorial-custom-content",
  "media-lookbook-banner",
  "media-lookbook-slider",
  "media-scrolling-gallery",
  "lead-capture-form",
  "page-content-main",
  "blog-list-main",
  "blog-post-main",
  "navigation-breadcrumbs",
  "footer-columns-newsletter",
];

export const CATEGORY_PRIORITY = [
  "navigation",
  "hero",
  "product-info",
  "product-showcase",
  "collection-nav",
  "promo",
  "features-benefits",
  "social-proof",
  "testimonial-ugc",
  "trust",
  "comparison",
  "before-after",
  "faq",
  "cta-band",
  "editorial",
  "media",
  "lead-capture",
  "footer",
];

export const PAGE_PRIORITY = [
  "home",
  "product-detail",
  "collection",
  "search",
  "cart",
  "cart-drawer",
  "about-brand",
  "faq-support",
  "contact",
  "blog-list",
  "blog-post",
  "landing-campaign",
  "listicle-advertorial",
  "lookbook",
  "policy",
];

/** Hyper ailesi önce; diğerleri alfabetik. */
export const PRESET_PRIORITY = [
  "default",
  "ceramide",
  "pillar",
  "trove",
  "nexvo",
];

const SCOPE_PRIORITY = ["global", "instance"];

function rankOf(list, value) {
  if (!value) return 9000;
  const i = list.indexOf(value);
  return i === -1 ? 8000 : i;
}

function schemaRank(schemaId) {
  return rankOf(SCHEMA_PRIORITY, schemaId);
}

function groupKeyRank(groupBy, key) {
  if (groupBy === "schema") return schemaRank(key);
  if (groupBy === "kategori") return rankOf(CATEGORY_PRIORITY, key);
  if (groupBy === "sayfa") return rankOf(PAGE_PRIORITY, key);
  if (groupBy === "scope") return rankOf(SCOPE_PRIORITY, key);
  return 0;
}

function compareRows(a, b) {
  const bySchema = schemaRank(a.schemaId) - schemaRank(b.schemaId);
  if (bySchema) return bySchema;
  const byPage = rankOf(PAGE_PRIORITY, a.sayfa) - rankOf(PAGE_PRIORITY, b.sayfa);
  if (byPage) return byPage;
  return (a.observationId || a.schemaId || "").localeCompare(
    b.observationId || b.schemaId || ""
  );
}

export function parseFilters(searchParams) {
  const list = (k) => {
    const raw = searchParams.get(k);
    if (!raw) return [];
    return raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  };
  return {
    q: (searchParams.get("q") || "").trim().toLowerCase(),
    kaynak: list("kaynak"),
    tp: list("tp"),
    sayfa: list("sayfa"),
    kategori: list("kategori"),
    scope: list("scope"),
    viewport: list("viewport"),
    evidence: searchParams.get("evidence") || "",
    schemaState: searchParams.get("schemaState") || "",
    group: searchParams.get("group") || "schema",
    sort: searchParams.get("sort") || "key",
    limit: Number(searchParams.get("limit") || 0) || 0,
    offset: Number(searchParams.get("offset") || 0) || 0,
  };
}

function matchesDimension(row, dim, values) {
  if (!values.length) return true;
  if (dim === "viewport") {
    return values.some((v) => row.viewports.includes(v));
  }
  if (dim === "tp") {
    return values.includes(`${row.kaynak || "?"}/${row.preset || "?"}`);
  }
  return values.includes(row[dim] || "");
}

function matchesQuery(row, q) {
  if (!q) return true;
  const blob = [
    row.schemaId,
    row.observationId,
    row.kaynak,
    row.preset,
    row.sayfa,
    row.kategori,
    row.scope,
    row.varyant,
    row.amac,
    row.notlar,
    row.selector,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return blob.includes(q);
}

function matchesEvidence(row, evidence) {
  if (!evidence) return true;
  if (evidence === "any") return row.evidenceStatus !== "none";
  return row.evidenceStatus === evidence;
}

function matchesSchemaState(row, state) {
  if (!state) return true;
  if (state === "orphan") return !row.hasSchema;
  if (state === "unobserved") return row.kind === "schema-only";
  if (state === "observed") return row.kind === "observation";
  return true;
}

export function applyFilters(rows, f, { skipDimension = null, skipDimensions = null } = {}) {
  const skip = new Set(skipDimensions || (skipDimension ? [skipDimension] : []));
  return rows.filter((row) => {
    if (!matchesQuery(row, f.q)) return false;
    if (!matchesEvidence(row, f.evidence)) return false;
    if (!matchesSchemaState(row, f.schemaState)) return false;
    for (const dim of DIMENSIONS) {
      if (skip.has(dim)) continue;
      if (!matchesDimension(row, dim, f[dim])) return false;
    }
    return true;
  });
}

/**
 * Tema → preset ağacı. Preset her zaman kendi temasının altında sayılır,
 * böylece iki farklı tema aynı preset adını (ör. "default") taşısa bile karışmaz.
 * Sayımlar tema+preset dışındaki filtreler uygulanmış halde hesaplanır.
 */
export function computeThemeTree(inv, f) {
  const scoped = applyFilters(inv.rows, f, { skipDimensions: ["kaynak", "tp"] });
  const themes = new Map();
  for (const row of scoped) {
    const theme = row.kaynak || "?";
    const preset = row.preset || "?";
    if (!themes.has(theme)) themes.set(theme, { count: 0, presets: new Map() });
    const t = themes.get(theme);
    t.count++;
    t.presets.set(preset, (t.presets.get(preset) || 0) + 1);
  }

  // Seçili ama sonuç dışı kalan tema/preset'ler de görünsün (kaldırılabilsin)
  for (const theme of f.kaynak) {
    if (!themes.has(theme)) themes.set(theme, { count: 0, presets: new Map() });
  }
  for (const tp of f.tp) {
    const [theme, preset] = tp.split("/");
    if (!themes.has(theme)) themes.set(theme, { count: 0, presets: new Map() });
    if (!themes.get(theme).presets.has(preset)) themes.get(theme).presets.set(preset, 0);
  }

  return [...themes.entries()]
    .map(([theme, t]) => ({
      theme,
      count: t.count,
      presets: [...t.presets.entries()]
        .map(([value, count]) => ({ value, count, tp: `${theme}/${value}` }))
        .sort(
          (a, b) =>
            rankOf(PRESET_PRIORITY, a.value) - rankOf(PRESET_PRIORITY, b.value) ||
            b.count - a.count ||
            a.value.localeCompare(b.value)
        ),
    }))
    .sort((a, b) => b.count - a.count || a.theme.localeCompare(b.theme));
}

function countValues(rows, dim) {
  const map = new Map();
  for (const row of rows) {
    if (dim === "viewport") {
      for (const v of row.viewports) map.set(v, (map.get(v) || 0) + 1);
      continue;
    }
    const v = row[dim] || "";
    if (!v) continue;
    map.set(v, (map.get(v) || 0) + 1);
  }
  return [...map.entries()]
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => {
      if (dim === "preset") {
        const byPreset =
          rankOf(PRESET_PRIORITY, a.value) - rankOf(PRESET_PRIORITY, b.value);
        if (byPreset) return byPreset;
      }
      if (dim === "sayfa") {
        const byPage =
          rankOf(PAGE_PRIORITY, a.value) - rankOf(PAGE_PRIORITY, b.value);
        if (byPage) return byPage;
      }
      return b.count - a.count || a.value.localeCompare(b.value);
    });
}

export function computeFacets(inv, f) {
  const facets = {};
  for (const dim of DIMENSIONS) {
    const scoped = applyFilters(inv.rows, f, { skipDimension: dim });
    facets[dim] = countValues(scoped, dim);
    // Seçili ama sonuçta olmayan değerler de görünsün (kaldırılabilmesi için)
    for (const sel of f[dim]) {
      if (!facets[dim].some((x) => x.value === sel)) {
        facets[dim].push({ value: sel, count: 0 });
      }
    }
  }

  facets.temaAgaci = computeThemeTree(inv, f);

  const all = applyFilters(inv.rows, f);
  facets.evidence = ["full", "partial", "none"].map((value) => ({
    value,
    count: all.filter((r) => r.evidenceStatus === value).length,
  }));

  // Taksonomide olup hiç gözlemlenmemiş kategoriler → boşluk avı
  const seen = new Set(inv.rows.map((r) => r.kategori).filter(Boolean));
  facets.uncoveredCategories = (inv.taxonomy.categories || []).filter(
    (c) => !seen.has(c)
  );

  return facets;
}

export function groupRows(rows, group) {
  const def = GROUPS[group] || GROUPS.schema;
  const map = new Map();
  for (const row of rows) {
    let key;
    if (def.field === "_kaynakPreset") {
      key = [row.kaynak, row.preset].filter(Boolean).join(" › ") || "—";
    } else {
      key = row[def.field] || "—";
    }
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(row);
  }
  return [...map.entries()]
    .map(([key, items]) => ({
      key,
      count: items.length,
      evidenceCount: items.reduce((n, r) => n + r.evidenceCount, 0),
      items: items.slice().sort(compareRows),
    }))
    .sort((a, b) => {
      const byRank = groupKeyRank(group, a.key) - groupKeyRank(group, b.key);
      if (byRank) return byRank;
      return a.key.localeCompare(b.key);
    });
}

/** Liste için hafif satır (tam JSON gövdesi yok) */
export function lightRow(row) {
  return {
    kind: row.kind,
    key: row.key,
    schemaId: row.schemaId,
    observationId: row.observationId,
    kaynak: row.kaynak,
    preset: row.preset,
    sayfa: row.sayfa,
    kategori: row.kategori,
    scope: row.scope,
    varyant: row.varyant,
    evidenceStatus: row.evidenceStatus,
    viewports: row.viewports,
    missingViewports: row.missingViewports,
    evidenceCount: row.evidenceCount,
    evidence: row.evidence,
    hasSchema: row.hasSchema,
    url: row.url,
  };
}

export function coverage(inv) {
  const themeKeys = [
    ...new Set(
      inv.observations
        .map((o) => [o.kaynak, o.preset].filter(Boolean).join("/"))
        .filter(Boolean)
    ),
  ].sort();

  const schemaIds = [
    ...new Set([
      ...inv.schemas.map((s) => s.id),
      ...inv.observations.map((o) => o.schemaId).filter(Boolean),
    ]),
  ].sort();

  const rows = schemaIds.map((id) => {
    const schema = inv.schemaById.get(id) || null;
    const cells = themeKeys.map((tk) => {
      const [kaynak, preset] = tk.split("/");
      const obs = (inv.obsBySchema.get(id) || []).filter(
        (o) => o.kaynak === kaynak && o.preset === preset
      );
      return {
        theme: tk,
        count: obs.length,
        status: obs.length
          ? obs.every((o) => o.evidenceStatus === "full")
            ? "full"
            : obs.some((o) => o.evidenceStatus !== "none")
              ? "partial"
              : "none"
          : "empty",
      };
    });
    return {
      schemaId: id,
      kategori: schema?.kategori || schema?.tur || "",
      scope: schema?.scope || "",
      hasSchema: Boolean(schema),
      themeCount: cells.filter((c) => c.count > 0).length,
      cells,
    };
  });

  return { themes: themeKeys, rows };
}
