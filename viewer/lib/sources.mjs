/**
 * Inventory website source — closed list + kaynak map.
 *
 * Source is how the store was inventoried (official theme demo vs live
 * brand vs ikas marketplace), not SCHEMA kategori and not Endüstri.
 * A live brand that happens to run a Shopify theme is still DTC.
 *
 * Docs: candidates/kaynak-tip.md
 */

export const SOURCE_IDS = Object.freeze(["shopify", "dtc", "ikas"]);

export const SOURCE_LABELS = Object.freeze({
  shopify: "Shopify",
  dtc: "DTC",
  ikas: "ikas",
});

const SOURCE_SET = new Set(SOURCE_IDS);

/**
 * kaynak → exactly one of shopify | dtc | ikas.
 * Omit a slug only if unknown (then Awaiting). Untagged stores must stay 0.
 */
export const KAYNAK_SOURCES = Object.freeze({
  // ikas official 12
  ali: "ikas",
  alina: "ikas",
  asil: "ikas",
  ata: "ikas",
  "ediz-ege": "ikas",
  eylul: "ikas",
  kerem: "ikas",
  kumsal: "ikas",
  market: "ikas",
  selim: "ikas",
  serel: "ikas",
  sumru: "ikas",

  // Live DTC brands (dtc-69 + other live stores). Theme-on-Shopify ≠ Shopify source.
  amberjack: "dtc",
  atoms: "dtc",
  bachans: "dtc",
  bandit: "dtc",
  beardbrand: "dtc", // Split theme, live store
  bleame: "dtc", // Focal theme, live store
  boka: "dtc",
  brez: "dtc",
  buckmason: "dtc",
  chamberlaincoffee: "dtc",
  chomps: "dtc",
  cometeer: "dtc",
  comradsocks: "dtc",
  cuts: "dtc",
  cymbiotika: "dtc",
  davidprotein: "dtc",
  desoi: "dtc",
  dieux: "dtc",
  drinktrip: "dtc",
  dukecannon: "dtc",
  fellow: "dtc",
  flamingoestate: "dtc",
  flybyjing: "dtc", // Shapes theme, live store
  functionhealth: "dtc",
  ghia: "dtc",
  graza: "dtc",
  greatjonesgoods: "dtc",
  gruns: "dtc",
  hellobubble: "dtc", // Baseline theme, live store
  herocosmetics: "dtc",
  hexclad: "dtc",
  hiyo: "dtc",
  im8health: "dtc",
  javy: "dtc",
  kettleandfire: "dtc",
  kizik: "dtc",
  lemme: "dtc",
  madeincookware: "dtc",
  magicmind: "dtc",
  magicspoon: "dtc",
  materialkitchen: "dtc",
  moom: "dtc",
  moonjuice: "dtc",
  necessaire: "dtc",
  novoslabs: "dtc",
  obvi: "dtc",
  omsom: "dtc",
  onceuponafarm: "dtc",
  onnit: "dtc",
  pamos: "dtc",
  partakefoods: "dtc",
  primalqueen: "dtc",
  representclo: "dtc",
  rhone: "dtc",
  shinesty: "dtc",
  starface: "dtc",
  takearecess: "dtc",
  tenthousand: "dtc",
  topicals: "dtc",
  trueclassictees: "dtc",
  vegamour: "dtc",
  vessi: "dtc",
  vollebak: "dtc",
  waterboy: "dtc",
  westernrise: "dtc",
  xeroshoes: "dtc",
  allbirds: "dtc",
  away: "dtc",
  brooklinen: "dtc",
  caraway: "dtc",
  casper: "dtc",
  everlane: "dtc",
  glossier: "dtc",
  intothegloss: "dtc",
  liquiddeath: "dtc",
  mejuri: "dtc",
  olipop: "dtc",
  outdoorvoices: "dtc",
  poppi: "dtc",
  rarebeauty: "dtc",
  ridge: "dtc",
  rothys: "dtc",
  seed: "dtc",
  skims: "dtc",
  vuori: "dtc",

  // Official Theme Store / first-party demo slugs (not live-brand walks)
  alchemy: "shopify",
  atelier: "shopify",
  atlas: "shopify",
  awaken: "shopify",
  beautify: "shopify",
  "be-yours": "shopify",
  blockshop: "shopify",
  boost: "shopify",
  borders: "shopify",
  bricks: "shopify",
  broadcast: "shopify",
  canopy: "shopify",
  colorblock: "shopify",
  combine: "shopify",
  concept: "shopify",
  craft: "shopify",
  crave: "shopify",
  critters: "shopify",
  dawn: "shopify",
  district: "shopify",
  drop: "shopify",
  dwell: "shopify",
  eclipse: "shopify",
  empire: "shopify",
  enterprise: "shopify",
  envy: "shopify",
  eurus: "shopify",
  expanse: "shopify",
  exhibit: "shopify",
  fabric: "shopify",
  flow: "shopify",
  heritage: "shopify",
  highlight: "shopify",
  homage: "shopify",
  honey: "shopify",
  horizon: "shopify",
  hyper: "shopify",
  ignite: "shopify",
  impact: "shopify",
  impulse: "shopify",
  kingdom: "shopify",
  local: "shopify",
  maker: "shopify",
  minion: "shopify",
  motion: "shopify",
  origin: "shopify",
  "palo-alto": "shopify",
  pebble: "shopify",
  pipeline: "shopify",
  pitch: "shopify",
  prestige: "shopify",
  publisher: "shopify",
  purevea: "shopify",
  refresh: "shopify",
  ride: "shopify",
  rise: "shopify",
  ritual: "shopify",
  savor: "shopify",
  sense: "shopify",
  showcase: "shopify",
  sleek: "shopify",
  spotlight: "shopify",
  stack: "shopify",
  startup: "shopify",
  stiletto: "shopify",
  stockist: "shopify",
  streamline: "shopify",
  stretch: "shopify",
  studio: "shopify",
  symmetry: "shopify",
  taiga: "shopify",
  taste: "shopify",
  tinker: "shopify",
  trade: "shopify",
  triumph: "shopify",
  venue: "shopify",
  vessel: "shopify",
  warehouse: "shopify",
  wonder: "shopify",
  woodstock: "shopify",
  zest: "shopify",
});

/** No leftover stores — every disk kaynak is tagged. */
export const AWAITING_APPROVAL = Object.freeze([]);

export function isOfficialSource(value) {
  return SOURCE_SET.has(value);
}

export function sourceForKaynak(kaynak) {
  return KAYNAK_SOURCES[kaynak] || "";
}

export function sourceLabel(id) {
  return SOURCE_LABELS[id] || id || "";
}

export function matchesKaynakTipFilter(source, selected) {
  if (!selected?.length) return true;
  return selected.includes(source);
}

export function countKaynakTip(rows) {
  const map = new Map();
  for (const row of rows) {
    const v = row.kaynakTip || "";
    if (!v) continue;
    map.set(v, (map.get(v) || 0) + 1);
  }
  return map;
}

export function seedKaynakTipFacets(countMap, selected = []) {
  const facets = SOURCE_IDS.map((value) => ({
    value,
    label: SOURCE_LABELS[value],
    count: countMap.get(value) || 0,
  }));
  for (const sel of selected) {
    if (!facets.some((x) => x.value === sel)) {
      facets.push({
        value: sel,
        label: SOURCE_LABELS[sel] || sel,
        count: 0,
      });
    }
  }
  return facets;
}

export function assertOfficialSourceMap(map = KAYNAK_SOURCES) {
  const unknown = [];
  for (const [kaynak, value] of Object.entries(map)) {
    if (!SOURCE_SET.has(value)) unknown.push(`${kaynak}: ${value}`);
  }
  return unknown;
}

export function sourceCounts(map = KAYNAK_SOURCES) {
  const counts = { shopify: 0, dtc: 0, ikas: 0 };
  for (const value of Object.values(map)) {
    if (counts[value] != null) counts[value] += 1;
  }
  return {
    kaynak: Object.keys(map).length,
    ...counts,
    awaiting: AWAITING_APPROVAL.length,
  };
}
