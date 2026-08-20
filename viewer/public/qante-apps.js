/* QANTE Appler — standalone Shopify app inventory */

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

const state = {
  q: "",
  kategori: [],
  scope: [],
  expanded: null,
};

let appsData = null;

function $(sel) {
  return document.querySelector(sel);
}

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function api(path) {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(`${path} → ${res.status}`);
  return res.json();
}

function matchSearch(app) {
  const q = state.q.trim().toLowerCase();
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
    ...(app.yuzey || []),
    ...(app.entegrasyon?.shopify || []),
    ...(app.entegrasyon?.ikas || []),
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

function matchFilters(app) {
  if (state.kategori.length && !state.kategori.includes(app.kategori)) return false;
  if (state.scope.length && !state.scope.includes(app.scope)) return false;
  return true;
}

function appsFiltered() {
  if (!appsData) return [];
  return (appsData.apps || []).filter((app) => matchSearch(app) && matchFilters(app));
}

function toggleFilter(dim, value) {
  const arr = state[dim];
  const i = arr.indexOf(value);
  if (i >= 0) arr.splice(i, 1);
  else arr.push(value);
  state.expanded = null;
  render();
}

function renderFilterChips(containerId, dim, counts, labelFn) {
  const el = $(containerId);
  const keys = Object.keys(counts || {}).sort((a, b) =>
    (labelFn(a) || a).localeCompare(labelFn(b) || b, "tr")
  );
  el.innerHTML = keys
    .map((key) => {
      const active = state[dim].includes(key);
      const label = labelFn(key) || key;
      const n = counts[key] || 0;
      return `<button type="button" class="apps-chip ${active ? "active" : ""}" data-dim="${esc(dim)}" data-val="${esc(key)}">${esc(label)} <span class="n">${n}</span></button>`;
    })
    .join("");
}

function renderCard(app) {
  const expanded = state.expanded === app.id;
  const katLabel = APP_KATEGORI_LABEL[app.kategori] || app.kategori;
  const scopeLabel = APP_SCOPE_LABEL[app.scope] || app.scope;

  const yuzeyChips = (app.yuzey || []).length
    ? app.yuzey.map((y) => `<span class="chip mono">${esc(y)}</span>`).join("")
    : `<span class="chip queue">—</span>`;

  const shopifyEnt = (app.entegrasyon?.shopify || [])
    .map((e) => `<span class="chip">${esc(e)}</span>`)
    .join("") || `<span class="chip queue">—</span>`;

  const ikasEnt = (app.entegrasyon?.ikas || [])
    .map((e) => `<span class="chip mono">${esc(e)}</span>`)
    .join("") || `<span class="chip queue">—</span>`;

  const linkHtml = app.link
    ? `<a class="app-card-link" href="${esc(app.link)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${esc(app.link)}</a>`
    : "";

  const expandHtml = expanded
    ? `<div class="app-card-expand"><pre class="mono">${esc(JSON.stringify(app.schema, null, 2))}</pre></div>`
    : "";

  return `<article class="app-card ${expanded ? "expanded" : ""}" data-app="${esc(app.id)}" tabindex="0" role="button" aria-expanded="${expanded}">
    <div class="app-card-head">
      <div>
        <div class="app-card-title">${esc(app.varyant)}</div>
        <div class="app-card-id">${esc(app.id)}</div>
      </div>
    </div>
    <div class="chips">
      <span class="chip">${esc(katLabel)}</span>
      <span class="chip">${esc(scopeLabel)}</span>
    </div>
    <p class="app-card-amac">${esc(app.amac)}</p>
    ${app.sorun ? `<p class="app-card-sorun">${esc(app.sorun)}</p>` : ""}
  <div class="card" style="margin-top:.55rem;padding:.55rem .65rem">
    <div class="card-head" style="padding:0;margin-bottom:.35rem"><strong style="font-size:.78rem">Yüzey</strong></div>
    <div class="chips" style="margin-top:0">${yuzeyChips}</div>
  </div>
  <div class="card" style="margin-top:.45rem;padding:.55rem .65rem">
    <div class="card-head" style="padding:0;margin-bottom:.35rem"><strong style="font-size:.78rem">Entegrasyon</strong></div>
    <p class="amac" style="font-size:.72rem;margin:0 0 .25rem;color:var(--muted)">Shopify</p>
    <div class="chips" style="margin-top:0;margin-bottom:.35rem">${shopifyEnt}</div>
    <p class="amac" style="font-size:.72rem;margin:0 0 .25rem;color:var(--muted)">ikas</p>
    <div class="chips" style="margin-top:0">${ikasEnt}</div>
  </div>
    ${linkHtml}
    ${expandHtml}
  </article>`;
}

function render() {
  const flat = appsFiltered();
  const total = appsData?.counts?.total || 0;
  $("#apps-count").textContent = `${flat.length} / ${total}`;

  renderFilterChips(
    "#kategori-chips",
    "kategori",
    appsData?.counts?.byKategori,
    (k) => APP_KATEGORI_LABEL[k] || k
  );
  renderFilterChips(
    "#scope-chips",
    "scope",
    appsData?.counts?.byScope,
    (k) => APP_SCOPE_LABEL[k] || k
  );

  const main = $("#main");
  if (!flat.length) {
    main.innerHTML = `<p class="empty">Eşleşen uygulama yok.</p>`;
    return;
  }

  main.innerHTML = `
    <p class="apps-meta">Kaynak: <code>apps/*.json</code> · sözleşme: <code>app-schema-standard.md</code></p>
    <div class="apps-grid">${flat.map(renderCard).join("")}</div>
  `;
}

async function load() {
  appsData = await api("/api/apps");
  render();
}

function syncUrl() {
  const p = new URLSearchParams();
  if (state.q) p.set("q", state.q);
  if (state.kategori.length) p.set("kategori", state.kategori.join(","));
  if (state.scope.length) p.set("scope", state.scope.join(","));
  if (state.expanded) p.set("app", state.expanded);
  const url = p.toString() ? `?${p}` : location.pathname;
  history.replaceState(null, "", url);
}

function readUrl() {
  const p = new URLSearchParams(location.search);
  state.q = p.get("q") || "";
  state.kategori = (p.get("kategori") || "").split(",").filter(Boolean);
  state.scope = (p.get("scope") || "").split(",").filter(Boolean);
  state.expanded = p.get("app") || null;
}

function wireEvents() {
  $("#q").addEventListener("input", () => {
    state.q = $("#q").value;
    state.expanded = null;
    syncUrl();
    render();
  });

  $("#reload").addEventListener("click", () => load());

  $("#filters").addEventListener("click", (e) => {
    const chip = e.target.closest(".apps-chip[data-dim]");
    if (!chip) return;
    toggleFilter(chip.dataset.dim, chip.dataset.val);
    syncUrl();
  });

  $("#main").addEventListener("click", (e) => {
    const card = e.target.closest(".app-card[data-app]");
    if (!card) return;
    const id = card.dataset.app;
    state.expanded = state.expanded === id ? null : id;
    syncUrl();
    render();
    if (state.expanded) {
      document.querySelector(`.app-card[data-app="${CSS.escape(state.expanded)}"]`)?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
      e.preventDefault();
      $("#q").focus();
    }
  });
}

readUrl();
$("#q").value = state.q;
wireEvents();
load().catch((err) => {
  $("#main").innerHTML = `<p class="empty">Yüklenemedi: ${esc(err.message)}</p>`;
});
