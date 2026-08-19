/* QANTE viewer — vanilla, bağımlılıksız. */

const DIMS = ["kaynak", "tp", "sayfa", "kategori", "scope", "viewport", "endustri", "kaynakTip"];
// Yan panelde düz facet olarak çizilenler (tema+preset iç içe ağaçta)
const FLAT_DIMS = ["sayfa", "kategori", "scope", "viewport"];
const DIM_LABEL = {
  kaynak: "Tema",
  tp: "Preset",
  sayfa: "Sayfa",
  kategori: "Kategori",
  scope: "Scope",
  viewport: "Viewport",
  endustri: "Endüstri",
  kaynakTip: "Kaynak",
};
const KAYNAK_TIP_LABEL = { shopify: "Shopify", dtc: "DTC", ikas: "ikas" };

/** Varsayılan açık facet’ler — tema ağacı kritik (Hyper ailesi burada) */
const DEFAULT_OPEN_FACETS = ["kaynakTip", "endustri", "tema", "sayfa", "kategori"];
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
  endustri: [],
  kaynakTip: [],
  evidence: "",
  schemaState: "",
  sel: null,
  selObs: null,
  selCand: null,
  selList: null,
  selApp: null,
  croType: null,
  vp: "compare",
};

let stats = null;
let items = null;
let facets = null;
let candidatesData = null;
let appsData = null;
let croData = null;
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
if (localStorage.getItem("qante.openFacets.v3") !== "1") {
  openFacets.add("endustri");
  localStorage.setItem("qante.openFacets", JSON.stringify([...openFacets]));
  localStorage.setItem("qante.openFacets.v3", "1");
}
if (localStorage.getItem("qante.openFacets.v4") !== "1") {
  openFacets.add("kaynakTip");
  localStorage.setItem("qante.openFacets", JSON.stringify([...openFacets]));
  localStorage.setItem("qante.openFacets.v4", "1");
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
  if (state.selList) p.set("list", state.selList);
  if (state.selApp) p.set("app", state.selApp);
  if (state.view === "cro" && state.croType) p.set("type", state.croType);
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
  state.selList = p.get("list") || null;
  state.selApp = p.get("app") || null;
  state.croType = p.get("type") || null;
  state.vp = p.get("vp") || "compare";
}

async function api(path, params) {
  const url = params ? `${path}?${params}` : path;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`${path} → ${res.status}`);
  return res.json();
}

/* ---------------- Chrome bildirim (tab açıkken) ---------------- */

const SEEN_THEMES_KEY = "qante.seenThemePresets";
const THEME_POLL_MS = 10 * 60 * 1000;

function themePresetList(data) {
  return data?.counts?.themePresetList || [];
}

function seenThemes() {
  try {
    return new Set(JSON.parse(localStorage.getItem(SEEN_THEMES_KEY) || "[]"));
  } catch {
    return new Set();
  }
}

function saveSeenThemes(list) {
  localStorage.setItem(SEEN_THEMES_KEY, JSON.stringify([...new Set(list)].sort()));
}

function seedSeenThemes(data) {
  if (seenThemes().size === 0) saveSeenThemes(themePresetList(data));
}

function syncNotifyBtn() {
  const btn = $("#notify-btn");
  if (!btn) return;
  if (!("Notification" in window)) {
    btn.hidden = true;
    return;
  }
  const p = Notification.permission;
  btn.classList.toggle("on", p === "granted");
  btn.classList.toggle("off", p === "denied");
  btn.textContent =
    p === "granted" ? "Bildirim açık" : p === "denied" ? "Bildirim kapalı — tıkla" : "Bildirim aç";
  btn.title =
    p === "denied"
      ? "Chrome bu siteyi engellemiş. Adres çubuğundaki kilit → Bildirimler → İzin ver"
      : "Yeni tema gelince Chrome bildirimi";
}

async function askNotifyPermission() {
  if (!("Notification" in window)) return "denied";
  if (Notification.permission === "denied") {
    syncNotifyBtn();
    window.alert(
      "Chrome bildirimleri bu site için kapalı.\n\n" +
        "1. Adres çubuğunda kilit / slayt ikonuna tıkla\n" +
        "2. Bildirimler → İzin ver (Allow)\n" +
        "3. Sayfayı yenile\n\n" +
        "veya chrome://settings/content/notifications → localhost’u listeden sil"
    );
    return "denied";
  }
  if (Notification.permission !== "default") {
    syncNotifyBtn();
    return Notification.permission;
  }
  const result = await Notification.requestPermission();
  syncNotifyBtn();
  if (result === "granted") seedSeenThemes(stats);
  return result;
}

function showThemeNotification(added) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  const body =
    added.length === 1
      ? `Yeni tema/preset: ${added[0]}`
      : `${added.length} yeni: ${added.slice(0, 4).join(", ")}${added.length > 4 ? "…" : ""}`;
  const n = new Notification("QANTE envanter", {
    body,
    tag: "qante-theme",
    silent: false,
  });
  n.onclick = () => {
    window.focus();
    n.close();
  };
}

async function checkThemeNotify({ announce = false } = {}) {
  let data;
  try {
    data = await api("/api/stats", new URLSearchParams({ fresh: "1" }));
  } catch {
    return;
  }
  const now = themePresetList(data);
  const seen = seenThemes();
  if (seen.size === 0) {
    saveSeenThemes(now);
    return;
  }
  const added = now.filter((k) => !seen.has(k));
  if (added.length && announce) showThemeNotification(added);
  saveSeenThemes([...seen, ...now]);
}

function wireThemeNotify() {
  syncNotifyBtn();
  $("#notify-btn")?.addEventListener("click", () => askNotifyPermission());
  if ("Notification" in window) {
    setInterval(() => {
      if (Notification.permission === "granted") checkThemeNotify({ announce: true });
    }, THEME_POLL_MS);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible" && Notification.permission === "granted") {
        checkThemeNotify({ announce: true });
      }
    });
  }
}

/* ---------------- boot ---------------- */

async function boot() {
  readUrl();
  $("#q").value = state.q;
  bindEvents();
  await loadStats();
  seedSeenThemes(stats);
  wireThemeNotify();
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

  if (state.view === "candidates" || state.view === "lists" || !candidatesData) {
    candidatesData = await api("/api/candidates");
    const n =
      (candidatesData.counts?.candidates || 0) +
      (candidatesData.counts?.misfits || 0);
    $("#n-candidates").textContent = n ? ` ${n}` : "";
    const nList = candidatesData.counts?.lists || 0;
    $("#n-lists").textContent = nList ? ` ${nList}` : "";
  }

  if (state.view === "apps" || !appsData) {
    appsData = await api("/api/apps");
    const nApps = appsData.counts?.total || 0;
    $("#n-apps").textContent = nApps ? ` ${nApps}` : "";
  }

  if (state.view === "cro" || !croData) {
    croData = await api("/api/cro");
    const nCro = croData.counts?.observations || 0;
    $("#n-cro").textContent = nCro ? ` ${nCro}` : "";
  }

  renderTabs();
  if (state.view === "candidates") {
    renderCandidatesSidebar();
  } else if (state.view === "lists") {
    renderListsSidebar();
  } else if (state.view === "apps") {
    renderAppsSidebar();
  } else if (state.view === "cro") {
    renderCroSidebar();
  } else {
    renderSidebar();
  }

  if (state.view === "browse") {
    if (!keepDetail) await renderDetail();
  } else if (state.view === "candidates") {
    renderCandidatesDetail();
  } else if (state.view === "lists") {
    renderListsDetail();
  } else if (state.view === "apps") {
    renderAppsDetail();
  } else if (state.view === "cro") {
    renderCroDetail();
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
      const shown =
        d === "tp"
          ? v.replace("/", " › ")
          : d === "kaynakTip"
            ? KAYNAK_TIP_LABEL[v] || v
            : v;
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

function chipFacetBlock(dim, title, labelOf = (v) => v) {
  const opts = facets[dim] || [];
  if (!opts.length) return "";
  const sel = new Set(state[dim]);
  const body = opts
    .map((o) => {
      const label = o.label || labelOf(o.value);
      return `<label class="facet-opt chip-toggle${o.count ? "" : " zero"}${sel.has(o.value) ? " on" : ""}">
        <input type="checkbox" data-dim="${dim}" value="${esc(o.value)}" ${sel.has(o.value) ? "checked" : ""} />
        <span>${esc(label)}</span>
        <span class="n">${o.count}</span>
      </label>`;
    })
    .join("");
  const isOpen = openFacets.has(dim) || sel.size > 0;
  const selNote = sel.size ? ` · ${sel.size} seçili` : "";
  return `<details class="facet" data-facet="${dim}" ${isOpen ? "open" : ""}>
    <summary>${esc(title)} · ${opts.length}${selNote}</summary>
    <div class="facet-body chip-row">${body}</div>
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
    ${chipFacetBlock("kaynakTip", "Kaynak", (v) => KAYNAK_TIP_LABEL[v] || v)}
    ${chipFacetBlock("endustri", "Endüstri")}
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
      state.selObs = el.dataset.gotoObs || null;
      state.view = "browse";
      refresh();
    };
  });
}

/* ---------------- listeler (tema / DTC takip) ---------------- */

const LIST_STATUS_LABEL = {
  done: "yapılmış",
  "in progress": "yapılıyor",
  "": "kuyruk",
};

const LIST_GROUP_ORDER = ["Shopify temalar", "DTC-69", "Shopify appler"];

function listStatusKey(row) {
  const s = String(row?.status || "").trim().toLowerCase();
  if (s === "done") return "done";
  if (s === "in progress") return "in progress";
  return "";
}

function listStatusChip(status) {
  const key = listStatusKey({ status });
  const cls = key === "done" ? "ok" : key === "in progress" ? "warn" : "queue";
  return `<span class="chip ${cls}">${esc(LIST_STATUS_LABEL[key])}</span>`;
}

function listCounts(rows) {
  let done = 0;
  let progress = 0;
  let queued = 0;
  for (const r of rows) {
    const k = listStatusKey(r);
    if (k === "done") done++;
    else if (k === "in progress") progress++;
    else queued++;
  }
  return { done, progress, queued, total: rows.length };
}

function listCountLabel(c) {
  return `${c.done} yapılmış · ${c.progress} yapılıyor · ${c.queued} kuyruk`;
}

function listsFlat() {
  if (!candidatesData) return [];
  const q = (state.q || "").trim().toLowerCase();
  return (candidatesData.lists || []).filter((row) => {
    if (!q) return true;
    const hay = [row.title, row.domain, row.slug, row.walkUrl, row.notes, row.developer, row.group]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

function renderListsSidebar() {
  const flat = listsFlat();
  if (!state.selList && flat[0]) state.selList = flat[0].id;
  if (state.selList && !flat.some((r) => r.id === state.selList) && flat[0]) {
    state.selList = flat[0].id;
  }

  const byGroup = new Map();
  for (const row of flat) {
    const g = row.group || "Liste";
    if (!byGroup.has(g)) byGroup.set(g, []);
    byGroup.get(g).push(row);
  }

  const keys = [
    ...LIST_GROUP_ORDER.filter((k) => byGroup.has(k)),
    ...[...byGroup.keys()].filter((k) => !LIST_GROUP_ORDER.includes(k)),
  ];

  const groupsHtml = keys
    .map((key) => {
      const rows = byGroup.get(key) || [];
      const c = listCounts(rows);
      const head = `<div class="group-head"><span>▾ ${esc(key)}</span><span>${c.total}</span></div>`;
      const buttons = rows
        .map((row) => {
          const active = state.selList === row.id;
          const sub = row.slug || row.walkUrl || row.developer || "";
          return `<button class="item ${active ? "active" : ""}" data-list="${esc(row.id)}">
            <div class="id">${esc(row.title)}</div>
            <div class="sub">${esc(sub)}</div>
            <div class="chips">${listStatusChip(row.status)}</div>
          </button>`;
        })
        .join("");
      return head + buttons;
    })
    .join("");

  const all = listCounts(flat);
  $("#sidebar").innerHTML = `
    <div class="facet-head list-head">
      <strong>Listeler · ${flat.length}</strong>
      <span class="list-head-count">${esc(listCountLabel(all))}</span>
    </div>
    <p class="amac" style="padding:.55rem .85rem;margin:0;font-size:.78rem">
      Shopify temaları ve DTC-69 siteleri — yapılmış / yapılıyor / kuyruk.
      Kaynak: <code>candidates/shopify-themes.md</code>, <code>candidates/dtc-69-brands.md</code>, <code>candidates/shopify-apps.md</code>
    </p>
    ${groupsHtml || `<p class="empty">Liste kaydı yok</p>`}
  `;
}

function renderListsDetail() {
  const main = $("#main");
  const flat = listsFlat();
  let row = flat.find((r) => r.id === state.selList);
  if (!row && flat[0]) {
    state.selList = flat[0].id;
    row = flat[0];
    syncUrl();
  }
  if (!row) {
    main.innerHTML = `<p class="empty">Liste kaydı yok. <code>candidates/</code> içinde Status sütunlu tablo gerekir.</p>`;
    return;
  }

  const groupRows = flat.filter((r) => r.group === row.group);
  const c = listCounts(groupRows);
  const walk = row.walkUrl
    ? `<a href="${esc(row.walkUrl)}" target="_blank" rel="noopener">${esc(row.walkUrl)}</a>`
    : "—";
  const store = row.storeUrl && row.storeUrl !== row.walkUrl
    ? `<a href="${esc(row.storeUrl)}" target="_blank" rel="noopener">${esc(row.storeUrl)}</a>`
    : "";

  main.innerHTML = `
    <p class="list-count-head">${esc(row.group)} · ${esc(listCountLabel(c))}</p>
    <h2>${esc(row.title)}</h2>
    <p class="amac">${row.theme ? "Shopify teması" : "DTC site"} · #${esc(row.num)}</p>
    <div class="chips">
      ${listStatusChip(row.status)}
      ${row.developer ? `<span class="chip">${esc(row.developer)}</span>` : ""}
      ${row.price ? `<span class="chip">${esc(row.price)}</span>` : ""}
      ${row.slug ? `<span class="chip mono">${esc(row.slug)}</span>` : ""}
      <span class="chip mono">${esc(row.sourceFile)}</span>
    </div>
    <div class="card" style="margin-top:1rem">
      <div class="card-head"><strong>Walk URL</strong></div>
      <p class="amac">${walk}</p>
    </div>
    ${
      row.slug
        ? `<div class="card">
      <div class="card-head"><strong>Slug</strong></div>
      <p class="amac"><code>observations/${esc(row.slug)}</code></p>
    </div>`
        : ""
    }
    ${
      row.notes
        ? `<div class="card">
      <div class="card-head"><strong>Notlar</strong></div>
      <div class="cand-md">${simpleMd(row.notes)}</div>
    </div>`
        : ""
    }
    ${
      store
        ? `<div class="card">
      <div class="card-head"><strong>Theme Store</strong></div>
      <p class="amac">${store}</p>
    </div>`
        : ""
    }
  `;
  wireCandLinks();
  main.scrollTop = 0;
  document.querySelector("#sidebar .item.active")?.scrollIntoView({
    block: "nearest",
  });
}

/* ---------------- Apps (AppSchema) ---------------- */

const APP_KATEGORI_LABEL = {
  pixel: "Piksel",
  capture: "Yakalama",
  reviews: "Yorumlar",
  loyalty: "Sadakat",
  merchandising: "Merchandising",
  bar: "Bar",
  payments: "Ödeme",
  builder: "Builder",
  wishlist: "Favori",
};

const APP_SCOPE_LABEL = {
  head: "head",
  overlay: "overlay",
  "in-flow": "in-flow",
  checkout: "checkout",
  page: "page",
};

function appsFlat() {
  if (!appsData) return [];
  const q = (state.q || "").trim().toLowerCase();
  return (appsData.apps || []).filter((app) => {
    if (!q) return true;
    const hay = [
      app.id,
      app.kategori,
      app.varyant,
      app.scope,
      app.amac,
      app.sorun,
      app.link,
      app.ikasKarsilik,
      app.ikasTur,
      app.ikasSablon,
      app.ikasHedef,
      app.ikasLink,
      app.ikasYayin,
      app.ikasHost,
      ...(app.ikasKapsam || []),
      ...(app.ikasWebhook || []),
      ...(app.yuzey || []),
      ...(app.ikasOlaylar || []),
      ...(app.ikasSayfa || []),
      ...(app.entegrasyon?.shopify || []),
      ...(app.entegrasyon?.ikas || []),
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

function renderAppsSidebar() {
  const flat = appsFlat();
  if (!state.selApp && flat[0]) state.selApp = flat[0].id;
  if (state.selApp && !flat.some((a) => a.id === state.selApp) && flat[0]) {
    state.selApp = flat[0].id;
  }

  const byKategori = new Map();
  for (const app of flat) {
    const g = APP_KATEGORI_LABEL[app.kategori] || app.kategori || "Diğer";
    if (!byKategori.has(g)) byKategori.set(g, []);
    byKategori.get(g).push(app);
  }

  const keys = [...byKategori.keys()].sort((a, b) => a.localeCompare(b, "tr"));

  const groupsHtml = keys
    .map((key) => {
      const rows = byKategori.get(key) || [];
      const head = `<div class="group-head"><span>▾ ${esc(key)}</span><span>${rows.length}</span></div>`;
      const buttons = rows
        .map((app) => {
          const active = state.selApp === app.id;
          return `<button class="item ${active ? "active" : ""}" data-app="${esc(app.id)}">
            <div class="id">${esc(app.varyant)}</div>
            <div class="sub">${esc(app.id)}</div>
            <div class="chips">
              <span class="chip">${esc(APP_SCOPE_LABEL[app.scope] || app.scope)}</span>
            </div>
          </button>`;
        })
        .join("");
      return head + buttons;
    })
    .join("");

  $("#sidebar").innerHTML = `
    <div class="facet-head list-head">
      <strong>Appler · ${flat.length}</strong>
      <span class="list-head-count">AppSchema v0</span>
    </div>
    <p class="amac" style="padding:.55rem .85rem;margin:0;font-size:.78rem">
      Shopify uygulama envanteri — tema section'larından ayrı katman.
      Kaynak: <code>apps/*.json</code> · sözleşme: <code>app-schema-standard.md</code>
    </p>
    ${groupsHtml || `<p class="empty">Uygulama şeması yok</p>`}
  `;
}

function renderAppsDetail() {
  const main = $("#main");
  const flat = appsFlat();
  let app = flat.find((a) => a.id === state.selApp);
  if (!app && flat[0]) {
    state.selApp = flat[0].id;
    app = flat[0];
    syncUrl();
  }
  if (!app) {
    main.innerHTML = `<p class="empty">Uygulama şeması yok. <code>apps/</code> altında AppSchema JSON gerekir.</p>`;
    return;
  }

  const yuzeyChips = (app.yuzey || []).length
    ? app.yuzey.map((y) => `<span class="chip mono">${esc(y)}</span>`).join("")
    : `<span class="chip queue">— (head / builder)</span>`;

  const shopifyEnt = (app.entegrasyon?.shopify || [])
    .map((e) => `<span class="chip">${esc(e)}</span>`)
    .join("") || `<span class="chip queue">—</span>`;

  const ikasEnt = (app.entegrasyon?.ikas || [])
    .map((e) => `<span class="chip mono">${esc(e)}</span>`)
    .join("") || `<span class="chip queue">—</span>`;

  const ikasOlayChips = (app.ikasOlaylar || []).length
    ? app.ikasOlaylar.map((e) => `<span class="chip mono">${esc(e)}</span>`).join("")
    : `<span class="chip queue">—</span>`;

  const ikasSayfaChips = (app.ikasSayfa || []).length
    ? app.ikasSayfa.map((e) => `<span class="chip mono">${esc(e)}</span>`).join("")
    : `<span class="chip queue">—</span>`;

  const ikasKapsamChips = (app.ikasKapsam || []).length
    ? app.ikasKapsam.map((e) => `<span class="chip mono">${esc(e)}</span>`).join("")
    : `<span class="chip queue">—</span>`;

  const ikasWebhookChips = (app.ikasWebhook || []).length
    ? app.ikasWebhook.map((e) => `<span class="chip mono">${esc(e)}</span>`).join("")
    : `<span class="chip queue">—</span>`;

  const ikasAksiyonHtml = (app.ikasAksiyon || []).length
    ? app.ikasAksiyon
        .map((a) => `<span class="chip mono">${esc(a.yer)} · ${esc(a.tip)}</span>`)
        .join("")
    : `<span class="chip queue">—</span>`;

  const ikasLinkHtml =
    app.ikasLink && app.ikasLink !== "yok"
      ? `<a href="${esc(app.ikasLink)}" target="_blank" rel="noopener">${esc(app.ikasLink)}</a>`
      : `<span class="chip queue">yok</span>`;

  const tespitShopify = app.tespit?.shopify?.trim() || "—";
  const tespitIkas = app.tespit?.ikas?.trim() || "—";

  main.innerHTML = `
    <p class="list-count-head">${esc(APP_KATEGORI_LABEL[app.kategori] || app.kategori)} · ${esc(APP_SCOPE_LABEL[app.scope] || app.scope)}</p>
    <h2>${esc(app.id)}</h2>
    <p class="amac">${esc(app.amac)}</p>
  ${
    app.link
      ? `<p class="amac"><a href="${esc(app.link)}" target="_blank" rel="noopener">${esc(app.link)}</a></p>`
      : ""
  }
  ${
    app.sorun
      ? `<div class="card" style="margin-top:.75rem">
      <div class="card-head"><strong>Sorun</strong></div>
      <p class="amac">${esc(app.sorun)}</p>
    </div>`
      : ""
  }
    <div class="chips">
      <span class="chip">${esc(app.varyant)}</span>
      <span class="chip">${esc(APP_KATEGORI_LABEL[app.kategori] || app.kategori)}</span>
      <span class="chip">${esc(APP_SCOPE_LABEL[app.scope] || app.scope)}</span>
      <span class="chip">ikas: ${esc(app.ikasTur || "yok")}</span>
      <span class="chip">${esc(app.ikasSablon || "yok")}</span>
      <span class="chip">${esc(app.ikasHedef || "yok")}</span>
      <span class="chip">yayın: ${esc(app.ikasYayin || "yok")}</span>
      <span class="chip">host: ${esc(app.ikasHost || "yok")}</span>
      <span class="chip mono">${esc(app.path)}</span>
    </div>
    <div class="card" style="margin-top:1rem">
      <div class="card-head"><strong>ikas link</strong></div>
      <p class="amac">${ikasLinkHtml}</p>
    </div>
    <div class="card">
      <div class="card-head"><strong>Entegrasyon · Shopify</strong></div>
      <div class="chips">${shopifyEnt}</div>
    </div>
    <div class="card">
      <div class="card-head"><strong>Entegrasyon · ikas</strong></div>
      <div class="chips">${ikasEnt}</div>
    </div>
    <div class="card">
      <div class="card-head"><strong>ikas olaylar</strong></div>
      <div class="chips">${ikasOlayChips}</div>
    </div>
    <div class="card">
      <div class="card-head"><strong>ikas sayfa</strong></div>
      <div class="chips">${ikasSayfaChips}</div>
    </div>
    <div class="card">
      <div class="card-head"><strong>ikas kapsam</strong></div>
      <div class="chips">${ikasKapsamChips}</div>
    </div>
    <div class="card">
      <div class="card-head"><strong>ikas aksiyon</strong></div>
      <div class="chips">${ikasAksiyonHtml}</div>
    </div>
    <div class="card">
      <div class="card-head"><strong>ikas webhook</strong></div>
      <div class="chips">${ikasWebhookChips}</div>
    </div>
    <div class="card">
      <div class="card-head"><strong>ikas yayın / host</strong></div>
      <div class="chips">
        <span class="chip">${esc(app.ikasYayin || "yok")}</span>
        <span class="chip">${esc(app.ikasHost || "yok")}</span>
      </div>
    </div>
    <div class="card">
      <div class="card-head"><strong>tespit</strong></div>
      <p class="amac mono" style="font-size:.78rem">shopify: ${esc(tespitShopify)}<br/>ikas: ${esc(tespitIkas)}</p>
    </div>
    <div class="card">
      <div class="card-head"><strong>Yüzey</strong></div>
      <div class="chips">${yuzeyChips}</div>
    </div>
    <div class="card">
      <div class="card-head"><strong>ikas karşılığı</strong></div>
      <p class="amac">${esc(app.ikasKarsilik || "yok")}</p>
    </div>
    ${
      app.ayarlar && Object.keys(app.ayarlar).length
        ? `<div class="card">
      <div class="card-head"><strong>Ayarlar</strong> <span class="chip mono">${Object.keys(app.ayarlar).length} slot</span></div>
      <pre class="mono" style="font-size:.72rem;overflow:auto;max-height:200px">${esc(JSON.stringify(app.ayarlar, null, 2))}</pre>
    </div>`
        : ""
    }
    ${
      app.schema?.bagimliliklar?.length
        ? `<div class="card">
      <div class="card-head"><strong>Bağımlılıklar</strong></div>
      <div class="chips">${app.schema.bagimliliklar.map((b) => `<span class="chip mono">${esc(b)}</span>`).join("")}</div>
    </div>`
        : ""
    }
    <div class="card">
      <div class="card-head"><strong>Şema JSON</strong></div>
      <pre class="mono" style="font-size:.72rem;overflow:auto;max-height:320px">${esc(JSON.stringify(app.schema, null, 2))}</pre>
    </div>
  `;
  main.scrollTop = 0;
  document.querySelector("#sidebar .item.active")?.scrollIntoView({
    block: "nearest",
  });
}

/* ---------------- CRO / funnel ---------------- */

function croMatchHay(m) {
  return [m.observationId, m.schemaId, m.kaynak, m.preset, m.sayfa, m.kategori, m.kaynakTip, m.why]
    .join(" ")
    .toLowerCase();
}

function croMatchEndustri(m) {
  if (!state.endustri.length) return true;
  const inds = m.endustri || [];
  const untagged = !inds.length;
  return state.endustri.some((v) => (v === "—" ? untagged : inds.includes(v)));
}

function croMatchKaynakTip(m) {
  if (!state.kaynakTip.length) return true;
  return state.kaynakTip.includes(m.kaynakTip);
}

function croTypesFiltered() {
  if (!croData) return [];
  const q = (state.q || "").trim().toLowerCase();
  const facetOn = state.endustri.length > 0 || state.kaynakTip.length > 0;
  return (croData.types || [])
    .map((t) => {
      let matches = (t.matches || []).filter(
        (m) => croMatchEndustri(m) && croMatchKaynakTip(m)
      );
      if (q) {
        const typeHit = `${t.id} ${t.titleEn} ${t.titleTr} ${t.purpose}`.toLowerCase().includes(q);
        matches = matches.filter((m) => croMatchHay(m).includes(q));
        if (typeHit) return { ...t, matches, count: matches.length };
        if (!matches.length) return null;
        return { ...t, matches, count: matches.length };
      }
      if (!facetOn) return t;
      return { ...t, matches, count: matches.length };
    })
    .filter(Boolean);
}

function renderCroSidebar() {
  const types = croTypesFiltered();
  if (!state.croType && types[0]) state.croType = types[0].id;
  if (state.croType && !types.some((t) => t.id === state.croType) && types[0]) {
    state.croType = types[0].id;
  }

  const byGroup = new Map();
  for (const t of types) {
    const g = t.group === "funnel" ? "Diğer funnel" : "CRO tipleri";
    if (!byGroup.has(g)) byGroup.set(g, []);
    byGroup.get(g).push(t);
  }

  const groupsHtml = [...byGroup.entries()]
    .map(([key, rows]) => {
      const head = `<div class="group-head"><span>▾ ${esc(key)}</span><span>${rows.length}</span></div>`;
      const buttons = rows
        .map((t) => {
          const active = state.croType === t.id;
          const empty = t.count === 0;
          return `<button class="item ${active ? "active" : ""}${empty ? " zero" : ""}" data-cro-type="${esc(t.id)}">
            <div class="id">${esc(t.titleTr)}</div>
            <div class="sub">${esc(t.titleEn)} · ${esc(t.id)}</div>
            <div class="chips">
              <span class="chip ${empty ? "queue" : "ok"}">${t.count}</span>
            </div>
          </button>`;
        })
        .join("");
      return head + buttons;
    })
    .join("");

  const nObs = croData?.counts?.observations || 0;
  const nHit = croData?.counts?.typesWithHits || 0;
  $("#sidebar").innerHTML = `
    <div class="facet-head list-head">
      <strong>CRO · ${types.length}</strong>
      <span class="list-head-count">${nObs} eşleşen gözlem · ${nHit} tipte var</span>
    </div>
    <p class="amac" style="padding:.55rem .85rem;margin:0;font-size:.78rem">
      Funnel / CRO section tipleri — mevcut envanterden (yürüyüş yok).
      Allowlist: <code>viewer/lib/cro-schemas.mjs</code>
    </p>
    ${groupsHtml || `<p class="empty">CRO tipi yok</p>`}
  `;
}

function renderCroDetail() {
  const main = $("#main");
  const types = croTypesFiltered();
  let type = types.find((t) => t.id === state.croType);
  if (!type && types[0]) {
    state.croType = types[0].id;
    type = types[0];
    syncUrl();
  }
  if (!type) {
    main.innerHTML = `<p class="empty">Aramaya uyan CRO tipi yok.</p>`;
    return;
  }

  const cards = type.matches.length
    ? type.matches.map(croMatchCard).join("")
    : `<p class="empty">henüz yok — bu tip envanterde eşleşmedi. Sonraki yürüyüşte bakılacak.</p>`;

  main.innerHTML = `
    <p class="list-count-head">${type.group === "funnel" ? "Diğer funnel" : "CRO tipleri"} · ${type.count} eşleşme</p>
    <h2>${esc(type.titleTr)}</h2>
    <p class="amac">${esc(type.purpose)}</p>
    <div class="chips">
      <span class="chip mono">${esc(type.id)}</span>
      <span class="chip">${esc(type.titleEn)}</span>
      ${
        type.count
          ? `<span class="chip ok">${type.count} gözlem</span>`
          : `<span class="chip queue">henüz yok</span>`
      }
    </div>
    <h3>Eşleşen gözlemler</h3>
    ${cards}
  `;
  wireImages();
  wireCandLinks();
  main.scrollTop = 0;
  document.querySelector("#sidebar .item.active")?.scrollIntoView({
    block: "nearest",
  });
}

function croMatchCard(m) {
  const thumbs = (m.evidence || [])
    .slice(0, 3)
    .map(
      (e) => `<figure>
        <img src="/${esc(e.path)}" alt="${esc(e.path)}" loading="lazy" decoding="async" data-shot="${esc(e.path)}" />
        <figcaption><span>${esc(e.viewport || "?")}px</span></figcaption>
      </figure>`
    )
    .join("");
  const slug = [m.kaynak, m.preset].filter(Boolean).join("/");
  return `<div class="card">
    <div class="card-head">
      <div>
        <strong>${esc(m.observationId || m.schemaId)}</strong>
        <div class="sub" style="color:var(--muted);font-size:.76rem">${esc(slug)} · ${esc(m.sayfa || "—")}</div>
      </div>
      <button class="linkish" data-goto-schema="${esc(m.schemaId)}" data-goto-obs="${esc(m.observationId || "")}">Envanter ↗</button>
    </div>
    <p class="amac">${esc(m.why)}</p>
    <div class="chips">
      <span class="chip mono">${esc(m.schemaId)}</span>
      ${m.sayfa ? `<span class="chip">${esc(m.sayfa)}</span>` : ""}
      ${m.kategori ? `<span class="chip">${esc(m.kategori)}</span>` : ""}
      ${m.evidenceCount ? `<span class="chip ok">${m.evidenceCount} SS</span>` : `<span class="chip miss">SS yok</span>`}
    </div>
    ${thumbs ? `<div class="shots compare cro-thumbs" style="margin-top:.6rem">${thumbs}</div>` : ""}
  </div>`;
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
    croData = null;
    await loadStats();
    await checkThemeNotify({ announce: true });
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

    const croItem = e.target.closest(".item[data-cro-type]");
    if (croItem) {
      state.croType = croItem.dataset.croType;
      state.view = "cro";
      return refresh();
    }

    const listItem = e.target.closest(".item[data-list]");
    if (listItem) {
      state.selList = listItem.dataset.list;
      state.view = "lists";
      return refresh();
    }

    const appItem = e.target.closest(".item[data-app]");
    if (appItem) {
      state.selApp = appItem.dataset.app;
      state.view = "apps";
      return refresh();
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
      state.selObs = goto.dataset.gotoObs || null;
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
