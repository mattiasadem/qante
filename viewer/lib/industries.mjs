/**
 * ikas Theme Marketplace industries — closed list + kaynak map.
 *
 * Industry is a store vertical (kaynak), not SCHEMA kategori.
 * Official chip names are frozen from themes.ikas.com (2026-08-19).
 * Do not invent, rename, or translate.
 */

export const OFFICIAL_INDUSTRIES = Object.freeze([
  "Art & Handcraft",
  "Beauty & Health",
  "Books, Music & Video",
  "Electronics & Software",
  "Fashion & Clothing",
  "Flowers & Gifts",
  "Food & Beverage",
  "Hardware & Automotive",
  "Home & Furniture",
  "Jewelry & Accessories",
  "Pet Care",
  "Sports & Activities",
]);

export const UNTAGGED = "—";

const ART = "Art & Handcraft";
const BEAUTY = "Beauty & Health";
const BOOKS = "Books, Music & Video";
const ELECTRONICS = "Electronics & Software";
const FASHION = "Fashion & Clothing";
const FLOWERS = "Flowers & Gifts";
const FOOD = "Food & Beverage";
const HARDWARE = "Hardware & Automotive";
const HOME = "Home & Furniture";
const JEWELRY = "Jewelry & Accessories";
const PET = "Pet Care";
const SPORTS = "Sports & Activities";

const OFFICIAL_SET = new Set(OFFICIAL_INDUSTRIES);

/**
 * kaynak → one or more official industries.
 * Omit a slug to leave it untagged ("—").
 * Evidence notes live in candidates/industries.md.
 */
export const KAYNAK_INDUSTRIES = Object.freeze({
  // ikas official 12 — categoryIds from themes.ikas.com HTML (2026-08-19)
  ali: [SPORTS, FASHION, ELECTRONICS, FOOD],
  alina: [HARDWARE, ELECTRONICS],
  asil: [FASHION, JEWELRY, HOME, BEAUTY, ART],
  ata: [BEAUTY, FASHION, FLOWERS, JEWELRY, HOME],
  "ediz-ege": [JEWELRY, BEAUTY],
  eylul: [HOME, FASHION, HARDWARE, SPORTS],
  kerem: [FASHION, SPORTS, ELECTRONICS],
  kumsal: [FASHION, HOME, ART, BOOKS],
  market: [FLOWERS, FOOD],
  selim: [FASHION, HOME, BEAUTY, FLOWERS, ART],
  serel: [HOME, PET, ART, JEWELRY, FASHION],
  sumru: [ART],

  // Live DTC — what they sell
  amberjack: [FASHION, SPORTS],
  atoms: [FASHION],
  bachans: [FOOD],
  bandit: [FASHION, SPORTS],
  beardbrand: [BEAUTY],
  bleame: [BEAUTY],
  boka: [BEAUTY],
  brez: [FOOD],
  buckmason: [FASHION],
  chamberlaincoffee: [FOOD],
  chomps: [FOOD],
  cometeer: [FOOD],
  comradsocks: [FASHION, SPORTS],
  cuts: [FASHION, SPORTS],
  cymbiotika: [BEAUTY],
  davidprotein: [FOOD],
  desoi: [FOOD],
  dieux: [BEAUTY],
  drinktrip: [FOOD],
  dukecannon: [BEAUTY],
  fellow: [HOME, FOOD],
  flamingoestate: [FOOD, BEAUTY, HOME],
  flybyjing: [FOOD],
  functionhealth: [BEAUTY],
  ghia: [FOOD],
  graza: [FOOD],
  greatjonesgoods: [HOME],
  gruns: [BEAUTY],
  hellobubble: [BEAUTY],
  herocosmetics: [BEAUTY],
  hexclad: [HOME],
  hiyo: [FOOD],
  im8health: [BEAUTY],
  javy: [FOOD],
  kettleandfire: [FOOD],
  kizik: [FASHION],
  lemme: [BEAUTY],
  madeincookware: [HOME],
  magicmind: [BEAUTY, FOOD],
  magicspoon: [FOOD],
  materialkitchen: [HOME],
  moom: [BEAUTY, FOOD],
  moonjuice: [BEAUTY],
  necessaire: [BEAUTY],
  novoslabs: [BEAUTY],
  obvi: [BEAUTY],
  omsom: [FOOD],
  onceuponafarm: [FOOD],
  onnit: [BEAUTY, SPORTS],
  pamos: [FOOD],
  partakefoods: [FOOD],
  primalqueen: [BEAUTY],
  representclo: [FASHION],
  rhone: [FASHION, SPORTS],
  shinesty: [FASHION],
  starface: [BEAUTY],
  takearecess: [FOOD, BEAUTY],
  tenthousand: [FASHION, SPORTS],
  topicals: [BEAUTY],
  trueclassictees: [FASHION],
  vegamour: [BEAUTY],
  vessi: [FASHION],
  vollebak: [FASHION, SPORTS],
  waterboy: [FOOD],
  westernrise: [FASHION],
  xeroshoes: [FASHION, SPORTS],

  // Official Shopify theme demos — walked catalog / preset vertical
  atelier: [FASHION],
  atlas: [ELECTRONICS],
  awaken: [BEAUTY],
  "be-yours": [HOME],
  blockshop: [BEAUTY],
  borders: [FASHION],
  bricks: [FASHION],
  broadcast: [BEAUTY],
  canopy: [FOOD],
  colorblock: [FASHION, HOME],
  combine: [HOME],
  concept: [BEAUTY],
  craft: [HOME, ART],
  crave: [FOOD],
  dawn: [FASHION],
  district: [FASHION],
  dwell: [HOME],
  eclipse: [FASHION],
  envy: [FASHION],
  eurus: [FOOD],
  expanse: [HOME],
  fabric: [FASHION, HOME],
  flow: [FOOD, BEAUTY],
  heritage: [FASHION],
  homage: [FASHION],
  horizon: [FASHION],
  hyper: [FASHION, BEAUTY, ELECTRONICS, FOOD],
  impact: [ELECTRONICS],
  impulse: [FASHION, BEAUTY],
  kingdom: [HOME],
  local: [FOOD, HOME],
  maker: [FOOD],
  minion: [ELECTRONICS],
  motion: [SPORTS, FASHION],
  "palo-alto": [FASHION],
  pebble: [FASHION],
  pipeline: [FASHION],
  pitch: [BEAUTY],
  prestige: [FASHION, BEAUTY, JEWELRY],
  publisher: [FASHION, BOOKS],
  purevea: [BEAUTY],
  refresh: [BEAUTY],
  ride: [SPORTS],
  rise: [FASHION],
  ritual: [FASHION],
  savor: [FOOD],
  sense: [BEAUTY],
  showcase: [HOME],
  sleek: [BEAUTY],
  stack: [SPORTS],
  stiletto: [FASHION],
  stretch: [FASHION, BEAUTY],
  studio: [ART],
  symmetry: [FASHION, JEWELRY, ART],
  taiga: [SPORTS, FASHION],
  taste: [FOOD],
  tinker: [HOME],
  trade: [HOME],
  triumph: [FASHION, SPORTS],
  venue: [FASHION],
  vessel: [FOOD, HOME],
  warehouse: [ELECTRONICS],
  wonder: [BEAUTY],
  woodstock: [ELECTRONICS],
  zest: [FASHION],
});

/**
 * Untagged / mixed / generic kaynaklar — not applied to the map.
 * proposed may be empty when even a guess would force-fit.
 */
export const AWAITING_APPROVAL = Object.freeze([
  {
    kaynak: "empire",
    proposed: [],
    why: "Empire demo catalog is placeholder merch (Super Pen / Oak); no store vertical.",
  },
  {
    kaynak: "highlight",
    proposed: [FASHION, HOME, FOOD],
    why: "Highlight demo mixes sweatshirt/tote, birdhouse, and Home & food in one catalog.",
  },
  {
    kaynak: "origin",
    proposed: [],
    why: "First-party Origin demo is generic (no nav catalog); do not force-fit.",
  },
  {
    kaynak: "spotlight",
    proposed: [],
    why: "Spotlight demo is generic creative-culture chrome; no product vertical.",
  },
]);

export function isOfficialIndustry(value) {
  return OFFICIAL_SET.has(value);
}

export function industriesForKaynak(kaynak) {
  const list = KAYNAK_INDUSTRIES[kaynak];
  return list ? [...list] : [];
}

export function matchesEndustriFilter(industries, selected) {
  if (!selected?.length) return true;
  const list = Array.isArray(industries) ? industries : [];
  const untagged = list.length === 0;
  return selected.some((v) =>
    v === UNTAGGED || v === "" ? untagged : list.includes(v)
  );
}

export function countEndustri(rows) {
  const map = new Map();
  for (const row of rows) {
    const list = Array.isArray(row.endustri) ? row.endustri : [];
    if (!list.length) {
      map.set(UNTAGGED, (map.get(UNTAGGED) || 0) + 1);
      continue;
    }
    for (const v of list) map.set(v, (map.get(v) || 0) + 1);
  }
  return map;
}

export function seedEndustriFacets(countMap, selected = []) {
  const facets = OFFICIAL_INDUSTRIES.map((value) => ({
    value,
    count: countMap.get(value) || 0,
  }));
  facets.push({ value: UNTAGGED, count: countMap.get(UNTAGGED) || 0 });
  for (const sel of selected) {
    if (!facets.some((x) => x.value === sel)) {
      facets.push({ value: sel, count: 0 });
    }
  }
  return facets;
}

export function assertOfficialMap(map = KAYNAK_INDUSTRIES) {
  const unknown = [];
  for (const [kaynak, list] of Object.entries(map)) {
    for (const value of list) {
      if (!OFFICIAL_SET.has(value)) unknown.push(`${kaynak}: ${value}`);
    }
  }
  return unknown;
}
