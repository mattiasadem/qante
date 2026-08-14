/* QANTE viewer — vanilla, bağımlılıksız. */

const DIMS = ["kaynak", "tp", "sayfa", "kategori", "scope", "viewport"];
// Yan panelde düz facet olarak çizilenler (tema+preset iç içe ağaçta)
const FLAT_DIMS = ["sayfa", "kategori", "scope", "viewport"];
const DIM_LABEL = {
  kaynak: "Tema",
  tp: "Preset",
  sayfa: "Sayfa",
  kategori: "Kategori",
  scope: "Scope",
  viewport: "Viewport",
};

/** Varsayılan açık facet’ler — tema ağacı kritik (Hyper ailesi burada) */
const DEFAULT_OPEN_FACETS = ["tema", "sayfa", "kategori"];
const EVIDENCE_LABEL = { full: "Tam (3 viewport)", partial: "Kısmi", none: "Yok" };
const SCHEMA_STATE_LABEL = {
  observed: "Gözlemi olan",
  unobserved: "Gözlemi olmayan",
  orphan: "Yetim (şema yok)",
};

const state = {
  view: "browse",
  q: "",
  group: "schema",
  kaynak: [],
  tp: [],
  sayfa: [],
  kategori: [],
  scope: [],
  viewport: [],
  evidence: "",
  schemaState: "",
  sel: null,
  selObs: null,
  selCand: null,
  vp: "compare",
};

let stats = null;
let items = null;
let facets = null;
let candidatesData = null;
let lightboxList = [];
let lightboxIndex = 0;
let advancing = false;
let extraWheel = 0;

function browseFlat() {
  return items?.groups.flatMap((g) => g.items) || [];
}

function listPosition() {
  const flat = browseFlat();
  const idx = flat.findIndex(
    (r) =>
      r.schemaId === state.sel &&
      ((r.observationId && r.observationId === state.selObs) ||
        (!r.observationId && !state.selObs))
  );
  return { flat, idx, total: flat.length };
}

async function swapMain(dir, loadFn) {
  const main = $("#main");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !main?.animate) {
    await loadFn();
    return;
  }
  const outY = dir > 0 ? -16 : 16;
  const inY = dir > 0 ? 22 : -22;
  try {
    await main.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: `translateY(${outY}px)` },
      ],
      { duration: 200, easing: "cubic-bezier(.4,0,.2,1)", fill: "forwards" }
    ).finished;
  } catch {
    /* aborted */
  }
  await loadFn();
  try {
    await main.animate(
      [
        { opacity: 0, transform: `translateY(${inY}px)` },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 340, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" }
    ).finished;
  } catch {
    /* aborted */
  }
}

async function goAdjacent(dir) {
  if (state.view !== "browse" || advancing) return;
  const { flat, idx } = listPosition();
  if (!flat.length) return;
  const next = Math.max(0, Math.min(flat.length - 1, (idx < 0 ? 0 : idx) + dir));
  if (next === idx) return;
  const picked = flat[next];
  advancing = true;
  extraWheel = 0;
  state.sel = picked.schemaId;
  state.selObs = picked.observationId || null;
  state.view = "browse";
  try {
    await swapMain(dir, () => refresh());
  } finally {
    advancing = false;
    extraWheel = 0;
  }
}
let openFacets = new Set(
  JSON.parse(localStorage.getItem("qante.openFacets") || JSON.stringify(DEFAULT_OPEN_FACETS))
);
// Eski localStorage’da preset kapalı kalmış olabilir — bir kez zorla aç
if (localStorage.getItem("qante.openFacets.v2") !== "1") {
  for (const d of DEFAULT_OPEN_FACETS) openFacets.add(d);
  localStorage.setItem("qante.openFacets", JSON.stringify([...openFacets]));
  localStorage.setItem("qante.openFacets.v2", "1");
}
let collapsedGroups = new Set();
let filtersOpen = localStorage.getItem("qante.filtersOpen") === "1";

function activeFilterCount() {
  let n = 0;
  for (const d of DIMS) n += state[d].length;
  if (state.evidence) n++;
  if (state.schemaState) n++;
  if (state.q) n++;
  return n;
}

/* ---------------- utils ---------------- */

const $ = (sel) => document.querySelector(sel);

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function qs() {
  const p = new URLSearchParams();
  if (state.q) p.set("q", state.q);
  for (const d of DIMS) if (state[d].length) p.set(d, state[d].join(","));
  if (state.evidence) p.set("evidence", state.evidence);
  if (state.schemaState) p.set("schemaState", state.schemaState);
  if (state.group !== "schema") p.set("group", state.group);
  return p;
}

function syncUrl() {
  const p = qs();
  if (state.view !== "browse") p.set("view", state.view);
  if (state.sel) p.set("sel", state.sel);
  if (state.selObs) p.set("obs", state.selObs);
  if (state.selCand) p.set("cand", state.selCand);
  if (state.vp !== "compare") p.set("vp", state.vp);
  const url = p.toString() ? `?${p}` : location.pathname;
  history.replaceState(null, "", url);
}

function readUrl() {
  const p = new URLSearchParams(location.search);
  state.q = p.get("q") || "";
  for (const d of DIMS) {
    const raw = p.get(d);
    state[d] = raw ? raw.split(",").filter(Boolean) : [];
  }
  state.evidence = p.get("evidence") || "";
  state.schemaState = p.get("schemaState") || "";
  state.group = p.get("group") || "schema";
  state.view = p.get("view") || "browse";
  state.sel = p.get("sel") || null;
  state.selObs = p.get("obs") || null;
  state.selCand = p.get("cand") || null;
  state.vp = p.get("vp") || "compare";
}

async function api(path, params) {
  const url = params ? `${path}?${params}` : path;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`${path} → ${res.status}`);
  return res.json();
}

/* ---------------- boot ---------------- */

async function boot() {
  readUrl();
  $("#q").value = state.q;
  bindEvents();
  await loadStats();
  await refresh();
}

async function loadStats() {
  stats = await api("/api/stats");
  const groupSel = $("#group");
  groupSel.innerHTML = stats.groups
    .map((g) => `<option value="${esc(g.value)}">${esc(g.label)}</option>`)
    .join("");
  groupSel.value = state.group;

  $("#taxonomy-version").textContent = stats.taxonomy.version
    ? `taxonomy ${stats.taxonomy.version}`
    : "";

  const c = stats.counts;
  const presetBit = c.presets ? ` · ${c.presets} preset` : "";
  $("#stats").textContent =
    `${c.schemas} şema · ${c.observations} gözlem · ${c.themes} tema${presetBit} · ${c.pages} sayfa · ` +
    `${c.evidenceFiles} SS (${c.fullEvidence} tam / ${c.partialEvidence} kısmi / ${c.noEvidence} yok)`;

  const h = stats.health;
  const badge = $("#health-badge");
  badge.className =
    "badge-health" +
    (h.bySeverity.error ? " has-error" : h.bySeverity.warn ? " has-warn" : "");
  badge.textContent = h.total
    ? `${h.bySeverity.error} hata · ${h.bySeverity.warn} uyarı`
    : "temiz";
}

async function refresh({ keepDetail = false } = {}) {
  syncUrl();
  const data = await api("/api/items", qs());
  items = data;
  facets = data.facets;

  const rowCount = data.total;
  $("#n-browse").textContent = rowCount ? ` ${rowCount}` : "";

  if (state.view === "gallery") state.view = "browse";

  if (state.view === "candidates" || !candidatesData) {
    candidatesData = await api("/api/candidates");
    const n =
      (candidatesData.counts?.candidates || 0) +
      (candidatesData.counts?.misfits || 0);
    $("#n-candidates").textContent = n ? ` ${n}` : "";
  }

  renderTabs();
  if (state.view === "candidates") {
    renderCandidatesSidebar();
  } else {
    renderSidebar();
  }

  if (state.view === "browse") {
    if (!keepDetail) await renderDetail();
  } else if (state.view === "candidates") {
    renderCandidatesDetail();
  } else if (state.view === "coverage") {
    await renderCoverage();
  } else if (state.view === "health") {
    await renderHealth();
  }
}

/* ---------------- sidebar ---------------- */

function renderTabs() {
  document.querySelectorAll(".tab").forEach((t) => {
    t.setAttribute("aria-selected", String(t.dataset.view === state.view));
  });
}

function activeChips() {
  const chips = [];
  for (const d of DIMS) {
    for (const v of state[d]) {
      const shown = d === "tp" ? v.replace("/", " › ") : v;
      chips.push(
        `<button class="active-chip" data-dim="${d}" data-val="${esc(v)}">${DIM_LABEL[d]}: ${esc(shown)}</button>`
      );
    }
  }
  if (state.evidence) {
    chips.push(
      `<button class="active-chip" data-dim="evidence" data-val="${esc(state.evidence)}">Evidence: ${esc(EVIDENCE_LABEL[state.evidence] || state.evidence)}</button>`
    );
  }
  if (state.schemaState) {
    chips.push(
      `<button class="active-chip" data-dim="schemaState" data-val="${esc(state.schemaState)}">${esc(SCHEMA_STATE_LABEL[state.schemaState] || state.schemaState)}</button>`
    );
  }
  if (state.q) {
    chips.push(`<button class="active-chip" data-dim="q" data-val="">Ara: ${esc(state.q)}</button>`);
  }
  return chips.length ? `<div class="active-chips">${chips.join("")}</div>` : "";
}

function facetBlock(dim) {
  const opts = facets[dim] || [];
  if (!opts.length) return "";
  const sel = new Set(state[dim]);
  const body = opts
    .map(
      (o) => `<label class="facet-opt${o.count ? "" : " zero"}">
        <input type="checkbox" data-dim="${dim}" value="${esc(o.value)}" ${sel.has(o.value) ? "checked" : ""} />
        <span>${esc(o.value)}</span>
        <span class="n">${o.count}</span>
      </label>`
    )
    .join("");
  const isOpen = openFacets.has(dim) || sel.size > 0;
  const selNote = sel.size ? ` · ${sel.size} seçili` : "";
  return `<details class="facet" data-facet="${dim}" ${isOpen ? "open" : ""}>
    <summary>${DIM_LABEL[dim]} · ${opts.length}${selNote}</summary>
    <div class="facet-body">${body}</div>
  </details>`;
}

function themeTreeBlock() {
  const tree = facets.temaAgaci || [];
  if (!tree.length) return "";
  const selTheme = new Set(state.kaynak);
  const selTp = new Set(state.tp);
  const body = tree
    .map((t) => {
      const presets = t.presets
        .map(
          (p) => `<label class="facet-opt preset-opt${p.count ? "" : " zero"}">
            <input type="checkbox" data-dim="tp" value="${esc(p.tp)}" ${selTp.has(p.tp) ? "checked" : ""} />
            <span>${esc(p.value)}</span>
            <span class="n">${p.count}</span>
          </label>`
        )
        .join("");
      return `<div class="tema-grup">
        <label class="facet-opt tema-opt${t.count ? "" : " zero"}">
          <input type="checkbox" data-dim="kaynak" value="${esc(t.theme)}" ${selTheme.has(t.theme) ? "checked" : ""} />
          <span>${esc(t.theme)}</span>
          <span class="n">${t.count}</span>
        </label>
        <div class="preset-list">${presets || `<span class="preset-empty">preset yok</span>`}</div>
      </div>`;
    })
    .join("");
  const selCount = selTheme.size + selTp.size;
  const isOpen = openFacets.has("tema") || selCount > 0 || tree.length >= 1;
  const selNote = selCount ? ` · ${selCount} seçili` : "";
  return `<details class="facet" data-facet="tema" ${isOpen ? "open" : ""}>
    <summary>Tema › Preset · ${tree.length}${selNote}</summary>
    <div class="facet-body tema-agaci">${body}</div>
  </details>`;
}

function statusFacetBlock() {
  const ev = (facets.evidence || [])
    .map(
      (o) => `<label class="facet-opt${o.count ? "" : " zero"}">
        <input type="radio" name="evidence" data-dim="evidence" value="${esc(o.value)}" ${state.evidence === o.value ? "checked" : ""} />
        <span>${esc(EVIDENCE_LABEL[o.value] || o.value)}</span>
        <span class="n">${o.count}</span>
      </label>`
    )
    .join("");
  const st = Object.entries(SCHEMA_STATE_LABEL)
    .map(
      ([v, label]) => `<label class="facet-opt">
        <input type="radio" name="schemaState" data-dim="schemaState" value="${v}" ${state.schemaState === v ? "checked" : ""} />
        <span>${esc(label)}</span>
      </label>`
    )
    .join("");
  const isOpen = openFacets.has("durum") || state.evidence || state.schemaState;
  return `<details class="facet" data-facet="durum" ${isOpen ? "open" : ""}>
    <summary>Durum</summary>
    <div class="facet-body">${ev}<hr style="border:0;border-top:1px solid var(--line);margin:.35rem 0" />${st}</div>
  </details>`;
}

function renderSidebar() {
  const uncovered = facets.uncoveredCategories || [];
  const groupsHtml = items.groups
    .map((g) => {
      const collapsed = collapsedGroups.has(g.key);
      const head = `<div class="group-head" data-group-key="${esc(g.key)}">
        <span>${collapsed ? "▸" : "▾"} ${esc(g.key)}</span>
        <span>${g.count}${g.evidenceCount ? ` · ${g.evidenceCount} SS` : ""}</span>
      </div>`;
      if (collapsed) return head;
      const rows = g.items.map(itemButton).join("");
      return head + rows;
    })
    .join("");

  const nActive = activeFilterCount();
  const filterBody = `
    ${activeChips()}
    ${themeTreeBlock()}
    ${FLAT_DIMS.map(facetBlock).join("")}
    ${statusFacetBlock()}
    ${
      uncovered.length
        ? `<details class="facet" data-facet="bosluk"><summary>Kapsanmayan kategori (${uncovered.length})</summary>
            <div class="facet-body">${uncovered.map((c) => `<span class="chip miss">${esc(c)}</span>`).join(" ")}</div>
           </details>`
        : ""
    }
  `;

  $("#sidebar").innerHTML = `
    <div class="filter-panel ${filtersOpen ? "open" : "closed"}">
      <div class="facet-head filter-toggle" id="filter-toggle" role="button" tabindex="0" aria-expanded="${filtersOpen}" title="Filtreyi aç/kapat">
        <strong>${filtersOpen ? "▾" : "▸"} Filtre${nActive ? ` · ${nActive}` : ""}</strong>
        <span class="filter-head-actions">
          ${nActive ? `<button class="linkish" id="clear-filters" type="button">Temizle</button>` : ""}
        </span>
      </div>
      ${filtersOpen ? `<div class="filter-body">${filterBody}</div>` : nActive ? activeChips() : ""}
    </div>
    <div class="facet-head list-head">
      <strong>${esc(items.groupLabel)} · ${items.groups.length}</strong>
      <span class="list-head-count">${items.total} kayıt</span>
    </div>
    ${groupsHtml || `<p class="empty">Sonuç yok</p>`}
  `;
}

function itemButton(row) {
  const active =
    state.sel === row.schemaId &&
    (row.observationId ? state.selObs === row.observationId : !state.selObs);
  const evChip =
    row.evidenceStatus === "full"
      ? `<span class="chip ok">3/3 SS</span>`
      : row.evidenceStatus === "partial"
        ? `<span class="chip warn">${row.viewports.length}/3 SS</span>`
        : `<span class="chip miss">SS yok</span>`;
  const title =
    state.group === "schema"
      ? row.observationId || row.schemaId
      : row.schemaId;
  const sub =
    row.kind === "schema-only"
      ? "gözlem yok"
      : `${row.kaynak}/${row.preset}/${row.sayfa}`;
  return `<button class="item ${active ? "active" : ""}" data-schema="${esc(row.schemaId)}" data-obs="${esc(row.observationId || "")}">
    <div class="id">${esc(title)}</div>
    <div class="sub">${esc(sub)}</div>
    <div class="chips">
      ${row.kategori ? `<span class="chip">${esc(row.kategori)}</span>` : ""}
      ${row.scope ? `<span class="chip">${esc(row.scope)}</span>` : ""}
      ${evChip}
      ${row.hasSchema ? "" : `<span class="chip miss">şema yok</span>`}
    </div>
  </button>`;
}

/* ---------------- detail (browse) ---------------- */

async function renderDetail() {
  const main = $("#main");
  const flat = items.groups.flatMap((g) => g.items);
  const selectedRow = flat.find(
    (r) =>
      r.schemaId === state.sel &&
      ((r.observationId && r.observationId === state.selObs) ||
        (!r.observationId && !state.selObs))
  );

  if (!state.sel) {
    const first = flat[0];
    if (first) {
      state.sel = first.schemaId;
      state.selObs = first.observationId || null;
      syncUrl();
    } else {
      main.innerHTML = `<p class="empty">Filtreye uyan kayıt yok.</p>`;
      return;
    }
  } else if (!selectedRow) {
    const firstSameSchema = flat.find((r) => r.schemaId === state.sel);
    const firstAny = flat[0];
    const pick = firstSameSchema || firstAny;
    if (pick) {
      state.sel = pick.schemaId;
      state.selObs = pick.observationId || null;
      syncUrl();
    }
  }

  let data;
  try {
    data = await api(`/api/schema/${encodeURIComponent(state.sel)}`);
  } catch {
    main.innerHTML = `<p class="empty">Şema bulunamadı: ${esc(state.sel)}</p>`;
    return;
  }

  const s = data.schema;
  const visibleObsIds = state.selObs
    ? new Set([state.selObs])
    : new Set(
        items.groups
          .flatMap((g) => g.items)
          .filter((r) => r.schemaId === state.sel)
          .map((r) => r.observationId)
          .filter(Boolean)
      );
  const obsAll = data.observations || [];
  const obs = obsAll.filter(
    (o) => visibleObsIds.size === 0 || visibleObsIds.has(o.observationId)
  );
  const hiddenCount = obsAll.length - obs.length;

  const head = s
    ? `<h2>${esc(s.id)}</h2>
       <p class="amac">${esc(s.amac)}</p>
       <div class="chips">
         ${s.kategori ? `<span class="chip">${esc(s.kategori)}</span>` : ""}
         ${s.tur ? `<span class="chip">${esc(s.tur)}</span>` : ""}
         ${s.varyant ? `<span class="chip">${esc(s.varyant)}</span>` : ""}
         ${s.scope ? `<span class="chip">${esc(s.scope)}</span>` : ""}
         <span class="chip">${s.slotCount} slot</span>
         <span class="chip">${s.actionCount} action</span>
         <span class="chip">${s.dataBindingCount} binding</span>
         <span class="chip">${s.hookCount} hook</span>
         <span class="chip mono">${esc(s.path)}</span>
       </div>`
    : `<h2>${esc(state.sel)}</h2>
       <p class="amac">Şema dosyası yok — yetim gözlem. <code>sections/</code> altına tip eklenmeli.</p>`;

  const schemaJson = s
    ? `<details class="raw" open><summary>Şema JSON</summary><pre>${esc(JSON.stringify(s.data, null, 2))}</pre></details>`
    : "";

  const cards = obs.length
    ? obs
        .map((o, i) => obsCard(o, i === 0 ? schemaJson : ""))
        .join("")
    : schemaJson
      ? `<div class="card">${schemaJson}<p class="empty">Bu şema için gözlem yok.</p></div>`
      : `<p class="empty">Bu şema için gözlem yok.</p>`;

  const pos = listPosition();
  const navHint =
    pos.idx < 0
      ? ""
      : `<p class="scroll-next-hint">${
          pos.idx < pos.total - 1
            ? "Alta kaydırınca sonraki şema"
            : "Listenin sonu"
        } · ${pos.idx + 1} / ${pos.total}</p>`;

  main.innerHTML = `
    ${head}
    ${renderVpTabs()}
    <h3>Gözlemler (${obs.length}${hiddenCount ? ` / ${obsAll.length}, ${hiddenCount} filtre dışı` : ""})</h3>
    ${cards}
    ${navHint}
  `;
  main.scrollTop = 0;
  extraWheel = 0;
  wireImages();
  document.querySelector("#sidebar .item.active")?.scrollIntoView({
    block: "nearest",
  });
}

function renderVpTabs() {
  const opts = [
    ["compare", "Karşılaştır"],
    ["375", "375 mobil"],
    ["768", "768 tablet"],
    ["1440", "1440 masaüstü"],
  ];
  return `<div class="vp-tabs" role="tablist" aria-label="Viewport">
    ${opts
      .map(
        ([v, label]) =>
          `<button class="vp-tab" role="tab" data-vp="${v}" aria-selected="${String(state.vp === v)}">${label}</button>`
      )
      .join("")}
  </div>`;
}

function obsCard(o, schemaJson = "") {
  const shots = o.evidence.filter((e) => e.exists);
  const shown =
    state.vp === "compare" ? shots : shots.filter((e) => e.viewport === state.vp);
  const figures = shown.length
    ? shown
        .map(
          (e) => `<figure>
            <img src="/${esc(e.path)}" alt="${esc(e.path)}" loading="lazy" decoding="async" data-shot="${esc(e.path)}" />
            <figcaption><span>${esc(e.viewport || "?")}px</span><span>${Math.round(e.bytes / 1024)} KB</span></figcaption>
          </figure>`
        )
        .join("")
    : `<p class="empty">${shots.length ? `Bu viewport için SS yok (${state.vp})` : "Evidence yok"}</p>`;

  const missing = o.missingViewports.length
    ? `<span class="chip warn">eksik: ${o.missingViewports.join(", ")}</span>`
    : `<span class="chip ok">3/3 viewport</span>`;

  return `<div class="card">
    <div class="card-head">
      <div>
        <strong>${esc(o.observationId)}</strong>
        <div class="sub" style="color:var(--muted);font-size:.76rem">${esc(o.kaynak)} / ${esc(o.preset)} / ${esc(o.sayfa)}</div>
      </div>
      ${o.url ? `<a href="${esc(o.url)}" target="_blank" rel="noopener">Demo ↗</a>` : ""}
    </div>
    ${o.notlar ? `<p class="amac">${esc(o.notlar)}</p>` : ""}
    <div class="chips">
      ${missing}
      <span class="chip mono">${esc(o.selector || "selector yok")}</span>
      <span class="chip mono">${esc(o.path)}</span>
      ${o.delta ? `<span class="chip warn">delta: ${esc(o.delta)}</span>` : ""}
    </div>
    <div class="shots ${state.vp === "compare" ? "compare" : "single"}" style="margin-top:.6rem">${figures}</div>
    ${
      o.missingViewports.length
        ? `<code class="cmd" title="Kopyala">cd qante/scripts &amp;&amp; node capture-observation.mjs ../${esc(o.path)}</code>`
        : ""
    }
    ${schemaJson}
    <details class="raw" open><summary>Observation JSON</summary><pre>${esc(JSON.stringify(o.data, null, 2))}</pre></details>
  </div>`;
}

/* ---------------- candidates / sığmayanlar ---------------- */

function candidatesFlat() {
  if (!candidatesData) return [];
  return [
    ...(candidatesData.candidates || []).map((c) => ({
      ...c,
      listTitle: c.slug || c.title,
      listSub: c.durum || c.sourceFile,
      group: "Aday kategori",
    })),
    ...(candidatesData.misfits || []).map((m) => ({
      ...m,
      listTitle: m.gozlem,
      listSub: m.karar || m.neden,
      group: "Sığmayanlar",
    })),
  ];
}

function renderCandidatesSidebar() {
  const flat = candidatesFlat();
  if (!state.selCand && flat[0]) state.selCand = flat[0].id;

  const byGroup = new Map();
  for (const row of flat) {
    if (!byGroup.has(row.group)) byGroup.set(row.group, []);
    byGroup.get(row.group).push(row);
  }

  const groupsHtml = [...byGroup.entries()]
    .map(([key, rows]) => {
      const head = `<div class="group-head"><span>▾ ${esc(key)}</span><span>${rows.length}</span></div>`;
      const buttons = rows
        .map((row) => {
          const active = state.selCand === row.id;
          return `<button class="item ${active ? "active" : ""}" data-cand="${esc(row.id)}">
            <div class="id">${esc(row.listTitle)}</div>
            <div class="sub">${esc(row.listSub || "")}</div>
            <div class="chips">
              <span class="chip">${esc(row.kind === "candidate" ? "aday" : "sığmayan")}</span>
            </div>
          </button>`;
        })
        .join("");
      return head + buttons;
    })
    .join("");

  $("#sidebar").innerHTML = `
    <div class="facet-head list-head">
      <strong>Aday &amp; sığmayanlar · ${flat.length}</strong>
    </div>
    <p class="amac" style="padding:.55rem .85rem;margin:0;font-size:.78rem">
      18 kategoriye oturmayan adaylar + section yapmadığımız gözlemler.
      Kaynak: <code>candidates/</code>
    </p>
    ${groupsHtml || `<p class="empty">Aday / sığmayan kaydı yok</p>`}
  `;
}

function renderCandidatesDetail() {
  const main = $("#main");
  const flat = candidatesFlat();
  let row = flat.find((r) => r.id === state.selCand);
  if (!row && flat[0]) {
    state.selCand = flat[0].id;
    row = flat[0];
    syncUrl();
  }
  if (!row) {
    main.innerHTML = `<p class="empty">Aday / sığmayan kaydı yok. <code>candidates/</code> altına .md ekle.</p>`;
    return;
  }

  if (row.kind === "candidate") {
    main.innerHTML = `
      <h2>${esc(row.slug)}</h2>
      <p class="amac">${esc(row.title)}</p>
      <div class="chips">
        <span class="chip">aday kategori</span>
        ${row.durum ? `<span class="chip warn">${esc(row.durum)}</span>` : ""}
        ${row.kaynak ? `<span class="chip">${esc(row.kaynak)}</span>` : ""}
        <span class="chip mono">${esc(row.sourceFile)}</span>
      </div>
      ${candBlock("Gerekçe", row.gerekce)}
      ${candBlock("Örnekler", row.ornekler)}
      ${candBlock("Öneri", row.oneri)}
      ${candBlock("Karar", row.karar)}
      <details class="raw" open><summary>Kaynak markdown</summary><pre>${esc(row.raw)}</pre></details>
    `;
    wireCandLinks();
    main.scrollTop = 0;
    return;
  }

  main.innerHTML = `
    <h2>${esc(row.gozlem)}</h2>
    <p class="amac">Şemaya sığmayan gözlem — yeni section yazılmadı.</p>
    <div class="chips">
      <span class="chip">sığmayan</span>
      <span class="chip">#${esc(row.num)}</span>
      <span class="chip mono">${esc(row.sourceFile)}</span>
    </div>
    <div class="card" style="margin-top:1rem">
      <div class="card-head"><strong>Neden section değil?</strong></div>
      <p class="amac">${esc(row.neden)}</p>
    </div>
    <div class="card">
      <div class="card-head"><strong>Karar önerisi</strong></div>
      <p class="amac">${formatKararHtml(row.karar)}</p>
    </div>
  `;
  wireCandLinks();
  main.scrollTop = 0;
}

function candBlock(title, body) {
  if (!body) return "";
  return `<div class="card" style="margin-top:.75rem">
    <div class="card-head"><strong>${esc(title)}</strong></div>
    <div class="cand-md">${simpleMd(body)}</div>
  </div>`;
}

function formatKararHtml(text) {
  const t = String(text || "");
  // `schema-id` → clickable if looks like schema
  return esc(t).replace(
    /`([a-z0-9-]+)`/gi,
    (_, id) =>
      `<button class="linkish" data-goto-schema="${id}">${id}</button>`
  );
}

function simpleMd(src) {
  const lines = String(src || "").split(/\r?\n/);
  let html = "";
  let inUl = false;
  let inTable = false;
  let tableHeadDone = false;

  const closeUl = () => {
    if (inUl) {
      html += "</ul>";
      inUl = false;
    }
  };
  const closeTable = () => {
    if (inTable) {
      html += "</tbody></table></div>";
      inTable = false;
      tableHeadDone = false;
    }
  };

  for (const line of lines) {
    if (/^\|.+\|$/.test(line.trim())) {
      closeUl();
      if (/^[-:|\s]+$/.test(line)) continue;
      const cells = line
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((c) => c.trim());
      if (!inTable) {
        html += `<div class="table-wrap"><table><thead><tr>${cells
          .map((c) => `<th>${inlineMd(c)}</th>`)
          .join("")}</tr></thead><tbody>`;
        inTable = true;
        tableHeadDone = true;
        continue;
      }
      if (tableHeadDone) {
        html += `<tr>${cells.map((c) => `<td>${inlineMd(c)}</td>`).join("")}</tr>`;
      }
      continue;
    }
    closeTable();

    if (/^[-*]\s+/.test(line)) {
      if (!inUl) {
        html += "<ul>";
        inUl = true;
      }
      html += `<li>${inlineMd(line.replace(/^[-*]\s+/, ""))}</li>`;
      continue;
    }
    closeUl();
    if (!line.trim()) continue;
    html += `<p>${inlineMd(line)}</p>`;
  }
  closeUl();
  closeTable();
  return html || `<p class="empty">—</p>`;
}

function inlineMd(s) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(
      /`([a-z0-9._:-]+)`/gi,
      (_, id) =>
        /^[a-z0-9-]+$/i.test(id)
          ? `<button class="linkish" data-goto-schema="${id}">${id}</button>`
          : `<code>${id}</code>`
    );
}

function wireCandLinks() {
  $("#main").querySelectorAll("[data-goto-schema]").forEach((el) => {
    el.onclick = () => {
      state.sel = el.dataset.gotoSchema;
      state.selObs = null;
      state.view = "browse";
      refresh();
    };
  });
}

/* ---------------- coverage ---------------- */

async function renderCoverage() {
  const data = await api("/api/coverage");
  const head = `<tr><th>Şema</th><th>Kategori</th><th>Scope</th><th>Tema</th>${data.themes
    .map((t) => `<th>${esc(t)}</th>`)
    .join("")}</tr>`;
  const body = data.rows
    .map(
      (r) => `<tr>
        <td><button class="linkish" data-goto-schema="${esc(r.schemaId)}">${esc(r.schemaId)}</button></td>
        <td>${esc(r.kategori)}</td>
        <td>${esc(r.scope)}</td>
        <td class="cell">${r.themeCount}</td>
        ${r.cells
          .map(
            (c) =>
              `<td class="cell ${c.status}">${c.count ? c.count : "·"}</td>`
          )
          .join("")}
      </tr>`
    )
    .join("");

  $("#main").innerHTML = `
    <h2>Kapsama matrisi</h2>
    <p class="amac">Satır = şema tipi · kolon = tema/preset · yeşil 3/3 evidence, sarı kısmi, kırmızı evidence yok, nokta hiç gözlem yok</p>
    <div class="table-wrap"><table><thead>${head}</thead><tbody>${body}</tbody></table></div>
  `;
}

/* ---------------- health ---------------- */

async function renderHealth() {
  const h = await api("/api/health");
  const groups = ["error", "warn", "info"];
  const label = { error: "Hata", warn: "Uyarı", info: "Bilgi" };

  const sections = groups
    .map((sev) => {
      const list = h.issues.filter((i) => i.severity === sev);
      if (!list.length) return "";
      return `<h3>${label[sev]} (${list.length})</h3>
        ${list
          .map(
            (i) => `<div class="issue ${sev}">
              <div class="rule">${esc(i.rule)}</div>
              <div class="msg">${esc(i.message)}</div>
              <div class="chips">
                ${i.schemaId ? `<button class="chip" data-goto-schema="${esc(i.schemaId)}">${esc(i.schemaId)}</button>` : ""}
                ${i.path ? `<span class="chip mono">${esc(i.path)}</span>` : ""}
              </div>
              ${i.fix ? `<code class="cmd" title="Kopyala">${esc(i.fix)}</code>` : ""}
            </div>`
          )
          .join("")}`;
    })
    .join("");

  $("#main").innerHTML = `
    <h2>Sağlık raporu</h2>
    <p class="amac">${h.total} bulgu · ${h.bySeverity.error} hata · ${h.bySeverity.warn} uyarı · ${h.bySeverity.info} bilgi</p>
    ${sections || `<p class="empty">Temiz — bulgu yok.</p>`}
  `;
}

/* ---------------- lightbox ---------------- */

function wireImages() {
  const imgs = [...document.querySelectorAll("img[data-shot]")];
  lightboxList = imgs.map((i) => i.dataset.shot);
  imgs.forEach((img, idx) => {
    img.onclick = () => openLightbox(idx);
  });
  document.querySelectorAll("code.cmd").forEach((c) => {
    c.onclick = async () => {
      try {
        await navigator.clipboard.writeText(c.textContent.trim());
        const old = c.textContent;
        c.textContent = "kopyalandı ✓";
        setTimeout(() => (c.textContent = old), 900);
      } catch {}
    };
  });
}

function openLightbox(idx) {
  lightboxIndex = idx;
  const p = lightboxList[idx];
  if (!p) return;
  $("#lb-img").src = `/${p}`;
  $("#lb-title").textContent = p;
  $("#lightbox").classList.add("open");
}

function stepLightbox(delta) {
  if (!lightboxList.length) return;
  lightboxIndex = (lightboxIndex + delta + lightboxList.length) % lightboxList.length;
  openLightbox(lightboxIndex);
}

function closeLightbox() {
  $("#lightbox").classList.remove("open");
  $("#lb-img").src = "";
}

/* ---------------- events ---------------- */

let qTimer = null;

function bindEvents() {
  $("#q").addEventListener("input", (e) => {
    state.q = e.target.value.trim().toLowerCase();
    clearTimeout(qTimer);
    qTimer = setTimeout(() => refresh(), 220);
  });

  $("#group").addEventListener("change", (e) => {
    state.group = e.target.value;
    collapsedGroups.clear();
    refresh();
  });

  $("#reload").addEventListener("click", async () => {
    await api("/api/stats", new URLSearchParams({ fresh: "1" }));
    candidatesData = null;
    await loadStats();
    await refresh();
  });

  $("#health-badge").addEventListener("click", () => {
    state.view = "health";
    refresh();
  });

  document.querySelectorAll(".tab").forEach((t) => {
    t.addEventListener("click", () => {
      state.view = t.dataset.view;
      refresh();
    });
  });

  // Sidebar (delegate)
  $("#sidebar").addEventListener("click", (e) => {
    if (e.target.id === "clear-filters" || e.target.closest("#clear-filters")) {
      e.stopPropagation();
      for (const d of DIMS) state[d] = [];
      state.evidence = "";
      state.schemaState = "";
      state.q = "";
      $("#q").value = "";
      return refresh();
    }

    const toggle = e.target.closest("#filter-toggle");
    if (toggle) {
      filtersOpen = !filtersOpen;
      localStorage.setItem("qante.filtersOpen", filtersOpen ? "1" : "0");
      return renderSidebar();
    }

    const chip = e.target.closest(".active-chip");
    if (chip) {
      const { dim, val } = chip.dataset;
      if (dim === "q") {
        state.q = "";
        $("#q").value = "";
      } else if (dim === "evidence" || dim === "schemaState") {
        state[dim] = "";
      } else {
        state[dim] = state[dim].filter((x) => x !== val);
      }
      return refresh();
    }

    const gh = e.target.closest(".group-head[data-group-key]");
    if (gh) {
      const k = gh.dataset.groupKey;
      collapsedGroups.has(k) ? collapsedGroups.delete(k) : collapsedGroups.add(k);
      return renderSidebar();
    }

    const cand = e.target.closest(".item[data-cand]");
    if (cand) {
      state.selCand = cand.dataset.cand;
      state.view = "candidates";
      return refresh();
    }

    const item = e.target.closest(".item");
    if (item) {
      state.sel = item.dataset.schema;
      state.selObs = item.dataset.obs || null;
      if (state.view !== "browse") state.view = "browse";
      return refresh();
    }
  });

  $("#sidebar").addEventListener("keydown", (e) => {
    if (e.target.id !== "filter-toggle") return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      filtersOpen = !filtersOpen;
      localStorage.setItem("qante.filtersOpen", filtersOpen ? "1" : "0");
      renderSidebar();
    }
  });

  $("#sidebar").addEventListener("change", (e) => {
    const input = e.target.closest("input[data-dim]");
    if (!input) return;
    const dim = input.dataset.dim;
    if (dim === "evidence" || dim === "schemaState") {
      state[dim] = state[dim] === input.value ? "" : input.value;
    } else {
      const v = input.value;
      state[dim] = input.checked
        ? [...new Set([...state[dim], v])]
        : state[dim].filter((x) => x !== v);
    }
    refresh();
  });

  $("#sidebar").addEventListener("toggle", (e) => {
    const d = e.target.closest("details.facet");
    if (!d) return;
    const key = d.dataset.facet;
    d.open ? openFacets.add(key) : openFacets.delete(key);
    localStorage.setItem("qante.openFacets", JSON.stringify([...openFacets]));
  }, true);

  $("#main").addEventListener(
    "wheel",
    (e) => {
      if (state.view !== "browse") return;
      if ($("#lightbox").classList.contains("open")) return;
      if (advancing) return;
      const el = $("#main");
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 12;
      const atTop = el.scrollTop <= 12;
      if (e.deltaY > 0 && atBottom) {
        extraWheel += e.deltaY;
        if (extraWheel > 160) {
          extraWheel = 0;
          goAdjacent(1);
        }
      } else if (e.deltaY < 0 && atTop) {
        extraWheel += -e.deltaY;
        if (extraWheel > 160) {
          extraWheel = 0;
          goAdjacent(-1);
        }
      } else {
        extraWheel = 0;
      }
    },
    { passive: true }
  );

  // Main (delegate)
  $("#main").addEventListener("click", (e) => {
    const vp = e.target.closest(".vp-tab");
    if (vp) {
      state.vp = vp.dataset.vp;
      return refresh();
    }
    const goto = e.target.closest("[data-goto-schema]");
    if (goto) {
      state.sel = goto.dataset.gotoSchema;
      state.selObs = null;
      state.view = "browse";
      return refresh();
    }
  });

  // Lightbox
  $("#lb-close").addEventListener("click", closeLightbox);
  $("#lb-prev").addEventListener("click", () => stepLightbox(-1));
  $("#lb-next").addEventListener("click", () => stepLightbox(1));
  $("#lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox" || e.target.classList.contains("lightbox-body")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    const box = $("#lightbox").classList.contains("open");
    if (box) {
      if (e.key === "Escape") return closeLightbox();
      if (e.key === "ArrowLeft") return stepLightbox(-1);
      if (e.key === "ArrowRight") return stepLightbox(1);
      return;
    }
    const typing = ["INPUT", "TEXTAREA", "SELECT"].includes(
      document.activeElement?.tagName
    );
    if (e.key === "/" && !typing) {
      e.preventDefault();
      $("#q").focus();
      return;
    }
    if (typing) return;
    if (e.key === "j" || e.key === "k") {
      goAdjacent(e.key === "j" ? 1 : -1);
    }
  });

  window.addEventListener("popstate", () => {
    readUrl();
    $("#q").value = state.q;
    $("#group").value = state.group;
    refresh();
  });
}

boot().catch((e) => {
  document.querySelector("#main").innerHTML = `<p class="empty">Hata: ${esc(e.message)}</p>`;
});
