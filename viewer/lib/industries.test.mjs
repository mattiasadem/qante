import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import {
  applyFilters,
  computeFacets,
  lightRow,
  parseFilters,
} from "./facets.mjs";
import {
  AWAITING_APPROVAL,
  KAYNAK_INDUSTRIES,
  OFFICIAL_INDUSTRIES,
  UNTAGGED,
  assertOfficialMap,
  industriesForKaynak,
} from "./industries.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

const OFFICIAL = [
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
];

function stubRow(kaynak, extra = {}) {
  return {
    kind: "observation",
    key: `${kaynak}.home.hero`,
    schemaId: "hero-slideshow",
    observationId: `${kaynak}.default.home.hero-slideshow`,
    kaynak,
    preset: "default",
    sayfa: "home",
    kategori: "hero",
    scope: "instance",
    varyant: "",
    amac: "",
    notlar: "",
    selector: "#hero",
    evidenceStatus: "full",
    viewports: ["375", "768", "1440"],
    missingViewports: [],
    evidence: [],
    evidenceCount: 3,
    hasSchema: true,
    endustri: industriesForKaynak(kaynak),
    kaynakTip: "",
    ...extra,
  };
}

describe("official industry list", () => {
  it("is the frozen ikas 12, exact names", () => {
    assert.deepEqual([...OFFICIAL_INDUSTRIES], OFFICIAL);
  });

  it("maps only closed-list strings", () => {
    assert.deepEqual(assertOfficialMap(), []);
  });

  it("has no awaiting leftover stores", () => {
    assert.deepEqual([...AWAITING_APPROVAL], []);
  });
});

describe("kaynak coverage", () => {
  const onDisk = fs
    .readdirSync(path.join(ROOT, "observations"))
    .filter((name) => {
      if (name.startsWith("_")) return false;
      return fs.statSync(path.join(ROOT, "observations", name)).isDirectory();
    })
    .sort();

  it("maps every observation kaynak (178/178, none untagged)", () => {
    const leftover = [];
    for (const kaynak of onDisk) {
      const mapped = Object.hasOwn(KAYNAK_INDUSTRIES, kaynak);
      if (!mapped || industriesForKaynak(kaynak).length === 0) {
        leftover.push(kaynak);
      }
    }
    assert.equal(onDisk.length, Object.keys(KAYNAK_INDUSTRIES).length);
    assert.deepEqual(leftover, []);
  });
});

describe("endustri facet", () => {
  const rows = [
    stubRow("graza"),
    stubRow("bandit"),
    stubRow("hexclad"),
    stubRow("fixture-untagged"),
    stubRow("blockshop"),
  ];
  const inv = { rows, taxonomy: { categories: [] } };

  it("parses ?endustri=Fashion%20%26%20Clothing", () => {
    const f = parseFilters(
      new URLSearchParams("endustri=Fashion%20%26%20Clothing")
    );
    assert.deepEqual(f.endustri, ["Fashion & Clothing"]);
  });

  it("filters to rows whose kaynak maps to that industry", () => {
    const f = parseFilters(
      new URLSearchParams({ endustri: "Fashion & Clothing" })
    );
    const got = applyFilters(rows, f);
    assert.deepEqual(
      got.map((r) => r.kaynak),
      ["bandit"]
    );
    assert.ok(
      got.every((r) => r.endustri.includes("Fashion & Clothing"))
    );
  });

  it("does not return Food rows when filtering Fashion", () => {
    const f = parseFilters(
      new URLSearchParams({ endustri: "Fashion & Clothing" })
    );
    const kaynaks = applyFilters(rows, f).map((r) => r.kaynak);
    assert.ok(!kaynaks.includes("graza"));
    assert.ok(!kaynaks.includes("hexclad"));
    assert.ok(!kaynaks.includes("blockshop"));
    assert.ok(!kaynaks.includes("fixture-untagged"));
  });

  it("keeps untagged rows behind —", () => {
    const f = parseFilters(new URLSearchParams(`endustri=${UNTAGGED}`));
    const got = applyFilters(rows, f);
    assert.deepEqual(
      got.map((r) => r.kaynak),
      ["fixture-untagged"]
    );
  });

  it("seeds all 12 chips plus — and ignores own dimension for counts", () => {
    const f = parseFilters(
      new URLSearchParams({ endustri: "Fashion & Clothing" })
    );
    const facets = computeFacets(inv, f);
    assert.deepEqual(
      facets.endustri.map((x) => x.value),
      [...OFFICIAL, UNTAGGED]
    );
    const fashion = facets.endustri.find((x) => x.value === "Fashion & Clothing");
    const food = facets.endustri.find((x) => x.value === "Food & Beverage");
    assert.equal(fashion.count, 1);
    assert.equal(food.count, 1);
  });

  it("puts endustri on light rows", () => {
    const row = lightRow(stubRow("graza"));
    assert.deepEqual(row.endustri, ["Food & Beverage"]);
  });
});
