#!/usr/bin/env node
/**
 * QANTE şema doğrulayıcı — schema-standard.md + styleknobs-standard.md sözleşmesi.
 *
 *   node scripts/validate-schemas.mjs              tüm şemalar
 *   node scripts/validate-schemas.mjs hero-slideshow product-info-tabs
 *   node scripts/validate-schemas.mjs --errors-only
 *   node scripts/validate-schemas.mjs --json
 *
 * Çıkış kodu: ERROR varsa 1, yoksa 0 (WARN çıkışı etkilemez).
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// ─── Dondurulmuş sözlükler (schema-standard.md) ────────────────────────────

const TOP_LEVEL = ['id', 'kategori', 'varyant', 'scope', 'amac', 'slots',
  'styleKnobs', 'dataBindings', 'actions', 'hookNoktalari', 'bagimliliklar', 'responsive'];

const SCOPES = ['global', 'page-template', 'instance'];

const SLOT_TIPS = ['text', 'richtext', 'image', 'video', 'icon', 'link', 'button',
  'number', 'boolean', 'datetime', 'ref', 'object', 'array'];

const RETIRED_TIPS = {
  product: 'ref (hedef: product)',
  productRef: 'ref (hedef: product)',
  menuRef: 'ref (hedef: menu)',
  promoRef: 'ref (hedef: promo)',
  productMiniList: 'array + ref, veya dataBinding',
  progress: 'number slot + *Goster knob',
  toggle: 'styleKnob (*Goster)',
  'toggle+textarea': '*Goster knob + text slot',
};

const SLOT_META = ['tip', 'zorunlu', 'maxLen', 'min', 'max', 'hedef', 'item', 'alanlar', 'not'];
const REF_HEDEF = ['product', 'collection', 'menu', 'blog', 'page', 'promo', 'brand'];

// Slot adları (schema-standard.md §3.5)
const RETIRED_SLOT_NAMES = {
  aciklama: 'metin (text) veya icerik (richtext)',
  slides: 'slaytlar',
  badge: 'rozet',
  eyebrow: 'ustEtiket',
  crossSell: 'oneriler',
  localeSwitcher: 'dilSecici',
  urunRef: 'urun',
  tip: 'tur (tip meta anahtar adı)',
  alanlar: 'formAlanlari (alanlar meta anahtar adı)',
  zorunlu: 'zorunluMu (zorunlu meta anahtar adı)',
  min: 'enAz (min meta anahtar adı)',
  max: 'enCok (max meta anahtar adı)',
  item: 'items (item meta anahtar adı)',
  hedef: 'hedefAdres (hedef meta anahtar adı)',
  maxLen: 'uzunlukSiniri (maxLen meta anahtar adı)',
  not: 'aciklamaNotu (not meta anahtar adı)',
};

// Çekirdek kavramlar: bu ad şu tip(ler)le kullanılır (§3.5)
const CORE_SLOT_TIP = {
  baslik: ['text'], altBaslik: ['text'], ustEtiket: ['text'],
  metin: ['text'], icerik: ['richtext'],
  gorsel: ['image'], ikon: ['icon', 'image'], // ikon: seçim mi yükleme mi
  video: ['video'], poster: ['image'],
  cta: ['button', 'text'],                    // text = hedef sabit, yalnız etiket
  link: ['link'], items: ['array'], etiket: ['text'], ad: ['text'], rozet: ['text'],
};

// Emekli hook konumları
const RETIRED_HOOK_KONUM = { afterItems: 'belowItems', beforeItems: 'aboveItems' };

// Hook sözlüğü (schema-standard.md §6)
const HOOK_BOLGE = new Set(['section', 'header', 'footer', 'announcement', 'menu', 'search',
  'spotlight', 'cart', 'cartDrawer', 'quickView', 'compare', 'productCard', 'buyBox', 'gallery',
  'form', 'newsletter', 'bundle', 'feedItem', 'hotspot']);
const HOOK_KONUM = new Set(['before', 'after', 'aboveItems', 'belowItems', 'badge', 'footer', 'utility']);

const DATA_SOURCES = ['DataSource.product', 'DataSource.productList', 'DataSource.collection',
  'DataSource.collectionList', 'DataSource.cart', 'DataSource.customer', 'DataSource.navigation',
  'DataSource.searchResults', 'DataSource.searchSuggest', 'DataSource.compareList',
  'DataSource.blogList', 'DataSource.blogPost', 'DataSource.paymentMethods'];

const RETIRED_SOURCES = { 'DataSource.navigationMenu': 'DataSource.navigation' };

const RETIRED_ACTIONS = {
  subscribe: 'emit:newsletter.subscribe',
  changeLocale: 'emit:locale.change',
};

const PLATFORM_WORDS = ['shopify', 'ikas', 'woocommerce', 'magento', 'bigcommerce', 'shopware'];

// Token sızıntısı: styleKnobs'ta olmaması gereken adlar
const TOKEN_HINTS = /color|colour|renk|font|spacing|padding|margin|radius|shadow|golge|opacity/i;

const DEVICE_KEYS = ['masaustu', 'tablet', 'mobil'];

// styleKnobs bütçesi (styleknobs-standard.md §5)
const KNOB_MIN = { instance: 4, 'page-template': 4, global: 0 };
const KNOB_MAX = 8;

// Dondurulmuş knob adları (styleknobs-standard.md §3.1–3.5)
const KNOB_NAMES = new Set([
  // 3.1 yerleşim
  'kolon', 'layout', 'hizalama', 'dikeyHizalama', 'yogunluk', 'yukseklik', 'genislik', 'oran',
  // 3.2 konum
  'gorselKonumu', 'metinKonumu', 'tabPozisyon', 'side', 'rozetKonumu', 'altBaslikKonumu', 'icerikYeri',
  // 3.3 davranış
  'autoplay', 'pauseOnHover', 'loop', 'hiz', 'yon', 'sticky', 'kapatilabilir', 'allowMultipleOpen',
  'openFirst', 'secimZorunlu', 'miktarGosterim', 'varyantGosterim', 'ozellikGosterim', 'gecis',
  'infiniteScroll', 'baslangicKonumu',
  // 3.4 gösterge
  'okGoster', 'noktaGoster', 'rozetGoster', 'hizliEkleGoster', 'filtreGoster', 'sortGoster',
  'ikonGoster', 'gorselGoster', 'hotspotGoster', 'timerGoster', 'mobilAccordion', 'aramaGoster',
  'kategoriTabGoster', 'qrGoster', 'sssGoster', 'garantiGoster', 'odemeIkonGoster',
  // 3.5 kart/öğe
  'kartStili', 'gorselBoyut', 'swatchSekli', 'separator', 'dilGosterim', 'butonGenislik',
]);

/**
 * JSON.parse yinelenen anahtarı sessizce ezer — `layout` iki kez yazılırsa
 * ikincisi birinciyi yutar ve kimse fark etmez (styleknobs-standard §3.1).
 * Ham metinden `"styleKnobs": { … }` bloğunu çıkarıp üst seviye anahtarları sayar.
 */
function duplicateKnobKeys(raw) {
  const start = raw.indexOf('"styleKnobs"');
  if (start === -1) return [];
  const open = raw.indexOf('{', start);
  if (open === -1) return [];

  let depth = 0, end = -1, inStr = false, esc = false;
  for (let i = open; i < raw.length; i++) {
    const ch = raw[i];
    if (esc) { esc = false; continue; }
    if (ch === '\\') { esc = true; continue; }
    if (ch === '"') { inStr = !inStr; continue; }
    if (inStr) continue;
    if (ch === '{') depth++;
    else if (ch === '}' && --depth === 0) { end = i; break; }
  }
  if (end === -1) return [];

  const body = raw.slice(open + 1, end);
  const seen = new Map();
  let d = 0; inStr = false; esc = false;
  let keyBuf = null;
  for (let i = 0; i < body.length; i++) {
    const ch = body[i];
    if (esc) { if (inStr && keyBuf !== null) keyBuf += ch; esc = false; continue; }
    if (ch === '\\') { esc = true; continue; }
    if (ch === '"') {
      if (inStr) { inStr = false; } else { inStr = true; if (d === 0) keyBuf = ''; }
      continue;
    }
    if (inStr) { if (d === 0 && keyBuf !== null) keyBuf += ch; continue; }
    if (ch === '{' || ch === '[') d++;
    else if (ch === '}' || ch === ']') d--;
    else if (ch === ':' && d === 0 && keyBuf !== null) {
      seen.set(keyBuf, (seen.get(keyBuf) || 0) + 1);
      keyBuf = null;
    }
  }
  return [...seen.entries()].filter(([, n]) => n > 1).map(([k, n]) => ({ key: k, count: n }));
}

// ─── Yardımcılar ───────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const flags = new Set(args.filter(a => a.startsWith('--')));
const only = args.filter(a => !a.startsWith('--'));

function loadTaxonomy() {
  const dir = join(ROOT, 'taxonomy');
  if (!existsSync(dir)) return { categories: [], version: 'yok' };
  const files = readdirSync(dir).filter(f => f.endsWith('.json')).sort();
  if (!files.length) return { categories: [], version: 'yok' };
  const latest = files[files.length - 1];
  return { ...JSON.parse(readFileSync(join(dir, latest), 'utf8')), version: latest };
}

function schemaFiles() {
  const out = [];
  for (const scope of SCOPES) {
    const dir = join(ROOT, 'sections', scope);
    if (!existsSync(dir)) continue;
    for (const f of readdirSync(dir)) {
      if (!f.endsWith('.json') || f.startsWith('_')) continue;
      if (only.length && !only.includes(basename(f, '.json'))) continue;
      out.push({ path: join(dir, f), scope, id: basename(f, '.json') });
    }
  }
  return out.sort((a, b) => a.id.localeCompare(b.id));
}

function observationsFor(id) {
  const root = join(ROOT, 'observations');
  const hits = [];
  const walk = dir => {
    if (!existsSync(dir)) return;
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name === `${id}.json` || e.name.startsWith(`${id}-`)) hits.push(p);
    }
  };
  walk(root);
  return hits;
}

// ─── Slot doğrulama (özyinelemeli) ─────────────────────────────────────────

function checkSlots(slots, add, path = '') {
  for (const [name, slot] of Object.entries(slots)) {
    const at = path + name;

    if (typeof slot !== 'object' || slot === null || Array.isArray(slot)) {
      add('ERROR', `slot "${at}" obje değil — { "tip": ..., "zorunlu": ... } yaz`);
      continue;
    }

    if (RETIRED_SLOT_NAMES[name]) {
      add('ERROR', `slot adı "${at}" emekli → ${RETIRED_SLOT_NAMES[name]} (standart §3.5)`);
    }

    const tip = slot.tip;

    if (CORE_SLOT_TIP[name] && tip && !CORE_SLOT_TIP[name].includes(tip)) {
      add('WARN', `slot "${at}" çekirdek ad ama tipi "${tip}" — "${name}" için beklenen: ${CORE_SLOT_TIP[name].join(' veya ')} (§3.5)`);
    }

    if (!tip) {
      add('ERROR', `slot "${at}" içinde "tip" yok`);
    } else if (RETIRED_TIPS[tip]) {
      add('ERROR', `slot "${at}" kaldırılmış tip "${tip}" → ${RETIRED_TIPS[tip]}`);
    } else if (!SLOT_TIPS.includes(tip)) {
      add('ERROR', `slot "${at}" bilinmeyen tip "${tip}" (izinli: ${SLOT_TIPS.join(', ')})`);
    }

    if (!('zorunlu' in slot)) add('WARN', `slot "${at}" içinde "zorunlu" yok (standart §3.2)`);
    else if (typeof slot.zorunlu !== 'boolean') add('ERROR', `slot "${at}" "zorunlu" boolean olmalı`);

    for (const k of Object.keys(slot)) {
      if (!SLOT_META.includes(k)) add('WARN', `slot "${at}" bilinmeyen meta anahtarı "${k}"`);
    }

    if (tip === 'text' && !('maxLen' in slot)) add('WARN', `slot "${at}" text ama "maxLen" yok`);

    if (tip === 'ref') {
      if (!slot.hedef) add('ERROR', `slot "${at}" ref ama "hedef" yok`);
      else if (!REF_HEDEF.includes(slot.hedef)) {
        add('ERROR', `slot "${at}" ref hedefi "${slot.hedef}" geçersiz (izinli: ${REF_HEDEF.join(', ')})`);
      }
    }

    if (tip === 'array') {
      if (!slot.item) add('ERROR', `slot "${at}" array ama "item" yok`);
      if (slot.alanlar) add('ERROR', `slot "${at}" array — "alanlar" değil "item" kullan`);
      if (!('min' in slot) || !('max' in slot)) add('WARN', `slot "${at}" array ama min/max eksik`);
      if (slot.item && typeof slot.item === 'object') checkSlots(slot.item, add, at + '.');
    }

    if (tip === 'object') {
      if (!slot.alanlar) add('ERROR', `slot "${at}" object ama "alanlar" yok`);
      if (slot.item) add('ERROR', `slot "${at}" object — "item" değil "alanlar" kullan`);
      if (slot.alanlar && typeof slot.alanlar === 'object') checkSlots(slot.alanlar, add, at + '.');
    }
  }
}

// ─── Şema doğrulama ────────────────────────────────────────────────────────

function validate(file, taxonomy) {
  const issues = [];
  const add = (level, msg) => issues.push({ level, msg });

  let j, raw;
  try {
    raw = readFileSync(file.path, 'utf8');
    j = JSON.parse(raw);
  } catch (e) {
    return { ...file, issues: [{ level: 'ERROR', msg: `JSON parse hatası: ${e.message}` }] };
  }

  for (const { key, count } of duplicateKnobKeys(raw)) {
    add('ERROR', `styleKnobs içinde "${key}" ${count} kez yazılmış — JSON son yazımı tutar, öncekiler kayboldu (styleknobs §3.1)`);
  }

  // Üst seviye
  for (const k of TOP_LEVEL) if (!(k in j)) add('ERROR', `zorunlu alan eksik: "${k}"`);
  for (const k of Object.keys(j)) {
    if (!TOP_LEVEL.includes(k) && !k.startsWith('_')) {
      add('ERROR', `bilinmeyen üst alan "${k}" — standart dışı (not ise "_${k}" yaz)`);
    }
  }

  if (j.id !== file.id) add('ERROR', `id "${j.id}" ≠ dosya adı "${file.id}"`);
  if (j.scope !== file.scope) add('ERROR', `scope "${j.scope}" ≠ klasör "${file.scope}"`);
  if (j.scope && !SCOPES.includes(j.scope)) add('ERROR', `geçersiz scope "${j.scope}"`);

  if (j.kategori && taxonomy.categories?.length && !taxonomy.categories.includes(j.kategori)) {
    add('WARN', `kategori "${j.kategori}" taksonomide yok (${taxonomy.version}) — candidates/ kontrol et`);
  }
  if (!j.amac || j.amac.trim().length < 15) add('WARN', 'amac çok kısa veya boş — tek cümle yaz');

  // slots
  if (j.slots && typeof j.slots === 'object') {
    if (!Object.keys(j.slots).length) add('WARN', 'slots boş — bu bölümde gerçekten editable içerik yok mu?');
    checkSlots(j.slots, add);
  }

  // styleKnobs
  const knobs = j.styleKnobs && typeof j.styleKnobs === 'object' ? j.styleKnobs : {};
  const knobCount = Object.keys(knobs).length;
  const min = KNOB_MIN[j.scope] ?? 0;
  if (knobCount < min && !j._knobNote) {
    add('WARN', `styleKnobs ${knobCount} adet — ${j.scope} için tipik ${min}–${KNOB_MAX} (gerekçe için "_knobNote" ekle)`);
  }
  if (knobCount > KNOB_MAX && !j._knobNote) {
    add('WARN', `styleKnobs ${knobCount} adet — ${KNOB_MAX} üstü için "_knobNote" gerekli`);
  }
  for (const [k, v] of Object.entries(knobs)) {
    if (TOKEN_HINTS.test(k)) add('ERROR', `styleKnob "${k}" token sızıntısı (renk/font/spacing şemaya girmez)`);
    else if (!KNOB_NAMES.has(k)) add('WARN', `styleKnob "${k}" sözlükte yok (styleknobs §3.1–3.5) — mevcut bir adla ifade et veya §5 süreciyle ekle`);

    if (typeof v === 'string') {
      if (v.includes('|')) {
        const opts = v.split('|');
        if (opts.length < 2) add('ERROR', `styleKnob "${k}" pipe enum ama tek değer`);
        if (opts.some(o => o !== o.trim() || !o)) add('ERROR', `styleKnob "${k}" enum boşluk/boş değer içeriyor: "${v}"`);
      } else {
        add('WARN', `styleKnob "${k}" tek string "${v}" — enum ≥2 değer olmalı veya boolean/sayı yap`);
      }
    } else if (v && typeof v === 'object' && !Array.isArray(v)) {
      // cihaz haritası (styleknobs-standard §2.5)
      const keys = Object.keys(v);
      const bad = keys.filter(x => !DEVICE_KEYS.includes(x));
      if (bad.length) add('ERROR', `styleKnob "${k}" cihaz haritası geçersiz anahtar: ${bad.join(', ')} (izinli: ${DEVICE_KEYS.join(', ')})`);
      if (j.responsive?.trim()) add('WARN', `styleKnob "${k}" cihaz haritası + dolu "responsive" — çelişki riski (styleknobs §2.5)`);
    } else if (Array.isArray(v)) {
      if (!v.length) add('ERROR', `styleKnob "${k}" boş dizi`);
    }
  }

  // dataBindings
  if (Array.isArray(j.dataBindings)) {
    for (const b of j.dataBindings) {
      if (typeof b !== 'object' || b === null) {
        add('ERROR', `dataBinding obje olmalı: ${JSON.stringify(b)}`);
        continue;
      }
      if (!b.name) add('ERROR', 'dataBinding "name" yok');
      if (!b.source) add('ERROR', `dataBinding "${b.name}" source yok`);
      else if (RETIRED_SOURCES[b.source]) add('ERROR', `dataBinding "${b.name}" kaldırılmış source "${b.source}" → ${RETIRED_SOURCES[b.source]}`);
      else if (!DATA_SOURCES.includes(b.source)) add('ERROR', `dataBinding "${b.name}" bilinmeyen source "${b.source}"`);
      const blob = JSON.stringify(b).toLowerCase();
      for (const w of PLATFORM_WORDS) {
        if (blob.includes(w)) add('ERROR', `dataBinding "${b.name}" platform adı geçiyor ("${w}") — soyut DataSource kullan`);
      }
    }
  }

  // actions
  if (Array.isArray(j.actions)) {
    if (!j.actions.length) add('ERROR', 'actions boş [] — etkileşim yoksa ["yok"] yaz');
    if (j.actions.includes('yok') && j.actions.length > 1) add('ERROR', '"yok" tek başına kullanılır');
    for (const a of j.actions) {
      if (typeof a !== 'string') { add('ERROR', `action string olmalı: ${JSON.stringify(a)}`); continue; }
      if (RETIRED_ACTIONS[a]) { add('ERROR', `action "${a}" → ${RETIRED_ACTIONS[a]}`); continue; }
      if (a === 'navigate' || a === 'yok') continue;
      const m = /^(emit|listen|filter):([a-z][a-zA-Z]*)\.([a-z][a-zA-Z]*)$/.exec(a);
      if (!m) add('ERROR', `action "${a}" gramere uymuyor (navigate | emit:alan.olay | listen:alan.olay | filter:yol | yok)`);
    }
  }

  // hooks
  if (Array.isArray(j.hookNoktalari)) {
    for (const h of j.hookNoktalari) {
      const m = /^mount:([a-z][a-zA-Z]*)\.([a-zA-Z]+)$/.exec(h);
      if (!m) {
        add('ERROR', `hook "${h}" biçimi yanlış — mount:{bolge}.{konum} (iki parça zorunlu)`);
        continue;
      }
      if (!HOOK_BOLGE.has(m[1])) add('WARN', `hook "${h}" bölgesi "${m[1]}" sözlükte yok (§6)`);
      if (RETIRED_HOOK_KONUM[m[2]]) add('ERROR', `hook "${h}" konumu "${m[2]}" emekli → "${RETIRED_HOOK_KONUM[m[2]]}" (§6)`);
      else if (!HOOK_KONUM.has(m[2])) add('WARN', `hook "${h}" konumu "${m[2]}" sözlükte yok (§6)`);
    }
    if (j.scope === 'instance' && !j.hookNoktalari.length) {
      add('WARN', 'instance section hook önermiyor — en az mount:section.after');
    }
  }

  // bagimliliklar → gerçek şema mı
  if (Array.isArray(j.bagimliliklar)) {
    for (const d of j.bagimliliklar) {
      const found = SCOPES.some(s => existsSync(join(ROOT, 'sections', s, `${d}.json`)));
      if (!found) add('WARN', `bagimlilik "${d}" için şema bulunamadı`);
    }
  }

  // observation + evidence
  const obs = observationsFor(file.id);
  if (!obs.length) add('WARN', 'hiç observation yok — kanıtsız şema');
  else {
    let withEvidence = 0;
    for (const o of obs) {
      try {
        const oj = JSON.parse(readFileSync(o, 'utf8'));
        if (Array.isArray(oj.evidence) && oj.evidence.length >= 3) withEvidence++;
      } catch { /* observation kendi doğrulamasında */ }
    }
    if (!withEvidence) add('WARN', `${obs.length} observation var ama hiçbirinde 3 viewport evidence yok`);
  }

  return { ...file, issues, knobCount, obsCount: obs.length };
}

// ─── Çalıştır ──────────────────────────────────────────────────────────────

const taxonomy = loadTaxonomy();
const files = schemaFiles();
const results = files.map(f => validate(f, taxonomy));

const errors = results.reduce((n, r) => n + r.issues.filter(i => i.level === 'ERROR').length, 0);
const warns = results.reduce((n, r) => n + r.issues.filter(i => i.level === 'WARN').length, 0);

if (flags.has('--json')) {
  console.log(JSON.stringify({ taxonomy: taxonomy.version, files: results.length, errors, warns, results }, null, 2));
  process.exit(errors ? 1 : 0);
}

const C = { red: '\x1b[31m', yellow: '\x1b[33m', green: '\x1b[32m', dim: '\x1b[2m', reset: '\x1b[0m' };
const errorsOnly = flags.has('--errors-only');

for (const r of results) {
  const shown = errorsOnly ? r.issues.filter(i => i.level === 'ERROR') : r.issues;
  if (!shown.length) continue;
  const e = r.issues.filter(i => i.level === 'ERROR').length;
  const w = r.issues.filter(i => i.level === 'WARN').length;
  console.log(`\n${r.scope}/${r.id}  ${C.dim}(${e} error, ${w} warn · ${r.knobCount} knob · ${r.obsCount} obs)${C.reset}`);
  for (const i of shown) {
    const tag = i.level === 'ERROR' ? `${C.red}ERROR${C.reset}` : `${C.yellow}WARN ${C.reset}`;
    console.log(`  ${tag} ${i.msg}`);
  }
}

const clean = results.filter(r => !r.issues.length).length;
console.log(`\n${'─'.repeat(60)}`);
console.log(`${results.length} şema · taksonomi ${taxonomy.version}`);
console.log(`${C.green}${clean} temiz${C.reset} · ${C.red}${errors} error${C.reset} · ${C.yellow}${warns} warn${C.reset}`);
if (errors) console.log(`${C.dim}Sözleşme: schema-standard.md · styleknobs-standard.md${C.reset}`);

process.exit(errors ? 1 : 0);
