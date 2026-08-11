/* QANTE viewer — vanilla, bağımlılıksız. */

const DIMS = ["kaynak", "preset", "sayfa", "kategori", "scope", "viewport"];
const DIM_LABEL = {
  kaynak: "Tema",
  preset: "Preset",
  sayfa: "Sayfa",
  kategori: "Kategori",
  scope: "Scope",
  viewport: "Viewport",
};
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
  preset: [],
  sayfa: [],
  kategori: [],
  scope: [],
  viewport: [],
  evidence: "",
  schemaState: "",
  sel: null,
  selObs: null,
  vp: "compare",
};

let stats = null;
let items = null;
let facets = null;
let lightboxList = [];
let lightboxIndex = 0;
let openFacets = new Set(JSON.parse(localStorage.getItem("qante.openFacets") || '["kaynak","sayfa","kategori"]'));
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
  $("#stats").textContent =
    `${c.schemas} şema · ${c.observations} gözlem · ${c.themes} tema · ${c.pages} sayfa · ` +
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
  const shotCount = data.groups.reduce((n, g) => n + g.evidenceCount, 0);
  $("#n-browse").textContent = rowCount ? ` ${rowCount}` : "";
  $("#n-gallery").textContent = shotCount ? ` ${shotCount}` : "";

  renderTabs();
  renderSidebar();

  if (state.view === "browse") {
    if (!keepDetail) await renderDetail();
  } else if (state.view === "gallery") {
    renderGallery();
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
      chips.push(
        `<button class="active-chip" data-dim="${d}" data-val="${esc(v)}">${DIM_LABEL[d]}: ${esc(v)}</button>`
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
  return `<details class="facet" data-facet="${dim}" ${isOpen ? "open" : ""}>
    <summary>${DIM_LABEL[dim]}${sel.size ? ` (${sel.size})` : ""}</summary>
    <div class="facet-body">${body}</div>
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
    ${DIMS.map(facetBlock).join("")}
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
      <strong>${esc(items.groupLabel)} · ${items.total}</strong>
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

  main.innerHTML = `
    ${head}
    ${renderVpTabs()}
    <h3>Gözlemler (${obs.length}${hiddenCount ? ` / ${obsAll.length}, ${hiddenCount} filtre dışı` : ""})</h3>
    ${cards}
  `;
  main.scrollTop = 0;
  wireImages();
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

/* ---------------- gallery ---------------- */

function renderGallery() {
  const rows = items.groups.flatMap((g) => g.items);
  const shots = rows.flatMap((r) =>
    r.evidence
      .filter((e) => state.vp === "compare" || e.viewport === state.vp)
      .map((e) => ({ ...e, row: r }))
  );

  $("#main").innerHTML = `
    <h2>Galeri</h2>
    <p class="amac">${shots.length} görsel · filtreye uyan tüm evidence</p>
    ${renderVpTabs()}
    ${
      shots.length
        ? `<div class="gallery">${shots
            .map(
              (s) => `<figure>
                <img src="/${esc(s.path)}" alt="${esc(s.path)}" loading="lazy" decoding="async" data-shot="${esc(s.path)}" />
                <figcaption>
                  <span>${esc(s.row.schemaId)}</span>
                  <span>${esc(s.row.kaynak || "—")} · ${esc(s.viewport || "?")}</span>
                </figcaption>
              </figure>`
            )
            .join("")}</div>`
        : `<p class="empty">Görsel yok. Filtreyi gevşet veya capture çalıştır.</p>`
    }
  `;
  wireImages();
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
      const flat = items?.groups.flatMap((g) => g.items) || [];
      if (!flat.length) return;
      const idx = flat.findIndex(
        (r) =>
          r.schemaId === state.sel &&
          ((r.observationId && r.observationId === state.selObs) ||
            (!r.observationId && !state.selObs))
      );
      const next =
        e.key === "j"
          ? Math.min(flat.length - 1, idx + 1)
          : Math.max(0, idx - 1);
      const picked = flat[next < 0 ? 0 : next];
      state.sel = picked.schemaId;
      state.selObs = picked.observationId || null;
      state.view = "browse";
      refresh();
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
