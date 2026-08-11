/**
 * Filtreleme, facet sayımı, gruplama.
 * Facet sayıları "kendi boyutu hariç diğer filtreler uygulanmış" halde hesaplanır,
 * böylece çoklu seçim yaparken sayılar sıfırlanmaz.
 */

export const DIMENSIONS = [
  "kaynak",
  "preset",
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
    preset: list("preset"),
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

export function applyFilters(rows, f, { skipDimension = null } = {}) {
  return rows.filter((row) => {
    if (!matchesQuery(row, f.q)) return false;
    if (!matchesEvidence(row, f.evidence)) return false;
    if (!matchesSchemaState(row, f.schemaState)) return false;
    for (const dim of DIMENSIONS) {
      if (dim === skipDimension) continue;
      if (!matchesDimension(row, dim, f[dim])) return false;
    }
    return true;
  });
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
    .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value));
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
      items: items.sort((a, b) =>
        (a.observationId || a.schemaId).localeCompare(
          b.observationId || b.schemaId
        )
      ),
    }))
    .sort((a, b) => a.key.localeCompare(b.key));
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
