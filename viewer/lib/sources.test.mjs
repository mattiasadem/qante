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
import { industriesForKaynak } from "./industries.mjs";
import {
  AWAITING_APPROVAL,
  KAYNAK_SOURCES,
  SOURCE_IDS,
  SOURCE_LABELS,
  assertOfficialSourceMap,
  sourceCounts,
  sourceForKaynak,
} from "./sources.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

const IKAS_12 = [
  "ali",
  "alina",
  "asil",
  "ata",
  "ediz-ege",
  "eylul",
  "kerem",
  "kumsal",
  "market",
  "selim",
  "serel",
  "sumru",
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
    kaynakTip: sourceForKaynak(kaynak),
    ...extra,
  };
}

describe("source list", () => {
  it("is the closed three: shopify, dtc, ikas", () => {
    assert.deepEqual([...SOURCE_IDS], ["shopify", "dtc", "ikas"]);
    assert.deepEqual(SOURCE_LABELS, {
      shopify: "Shopify",
      dtc: "DTC",
      ikas: "ikas",
    });
  });

  it("maps only closed-list strings", () => {
    assert.deepEqual(assertOfficialSourceMap(), []);
  });

  it("has no awaiting leftover stores", () => {
    assert.deepEqual([...AWAITING_APPROVAL], []);
  });

  it("counts 69 shopify / 66 dtc / 12 ikas", () => {
    assert.deepEqual(sourceCounts(), {
      kaynak: 147,
      shopify: 69,
      dtc: 66,
      ikas: 12,
      awaiting: 0,
    });
  });
});

describe("kaynak source coverage", () => {
  const onDisk = fs
    .readdirSync(path.join(ROOT, "observations"))
    .filter((name) => {
      if (name.startsWith("_")) return false;
      return fs.statSync(path.join(ROOT, "observations", name)).isDirectory();
    })
    .sort();

  it("documents every disk kaynak in candidates/kaynak-tip.md", () => {
    const md = fs.readFileSync(path.join(ROOT, "candidates/kaynak-tip.md"), "utf8");
    const missing = onDisk.filter((id) => !md.includes(`\`${id}\``));
    assert.deepEqual(missing, []);
    assert.match(md, /147 \/ 147/);
    assert.match(md, /`kaynakTip`/);
  });

  it("maps every observation kaynak to exactly one source (147/147)", () => {
    const leftover = [];
    for (const kaynak of onDisk) {
      const tip = sourceForKaynak(kaynak);
      if (!SOURCE_IDS.includes(tip)) leftover.push(kaynak);
    }
    assert.equal(onDisk.length, Object.keys(KAYNAK_SOURCES).length);
    assert.deepEqual(leftover, []);
  });

  it("classifies official ikas 12 as ikas", () => {
    for (const kaynak of IKAS_12) {
      assert.equal(sourceForKaynak(kaynak), "ikas", kaynak);
    }
  });

  it("classifies live theme-on-Shopify stores as dtc, not shopify", () => {
    for (const kaynak of ["beardbrand", "bleame", "flybyjing", "hellobubble"]) {
      assert.equal(sourceForKaynak(kaynak), "dtc", kaynak);
    }
  });

  it("classifies official theme-demo slugs as shopify", () => {
    for (const kaynak of ["hyper", "dawn", "sense", "prestige", "blockshop"]) {
      assert.equal(sourceForKaynak(kaynak), "shopify", kaynak);
    }
  });
});

describe("kaynakTip facet", () => {
  const rows = [
    stubRow("graza"),
    stubRow("bandit"),
    stubRow("hyper"),
    stubRow("ali"),
    stubRow("beardbrand"),
  ];
  const inv = { rows, taxonomy: { categories: [] } };

  it("parses ?kaynakTip=shopify,dtc", () => {
    const f = parseFilters(new URLSearchParams("kaynakTip=shopify,dtc"));
    assert.deepEqual(f.kaynakTip, ["shopify", "dtc"]);
  });

  it("filtering one source only returns those stores", () => {
    const shopify = applyFilters(
      rows,
      parseFilters(new URLSearchParams({ kaynakTip: "shopify" }))
    );
    assert.deepEqual(
      shopify.map((r) => r.kaynak),
      ["hyper"]
    );
    const dtc = applyFilters(
      rows,
      parseFilters(new URLSearchParams({ kaynakTip: "dtc" }))
    );
    assert.deepEqual(
      dtc.map((r) => r.kaynak),
      ["graza", "bandit", "beardbrand"]
    );
    const ikas = applyFilters(
      rows,
      parseFilters(new URLSearchParams({ kaynakTip: "ikas" }))
    );
    assert.deepEqual(
      ikas.map((r) => r.kaynak),
      ["ali"]
    );
  });

  it("does not return Shopify demo rows when filtering DTC", () => {
    const kaynaks = applyFilters(
      rows,
      parseFilters(new URLSearchParams({ kaynakTip: "dtc" }))
    ).map((r) => r.kaynak);
    assert.ok(!kaynaks.includes("hyper"));
    assert.ok(!kaynaks.includes("ali"));
  });

  it("seeds all three chips and ignores own dimension for counts", () => {
    const f = parseFilters(new URLSearchParams({ kaynakTip: "dtc" }));
    const facets = computeFacets(inv, f);
    assert.deepEqual(
      facets.kaynakTip.map((x) => x.value),
      ["shopify", "dtc", "ikas"]
    );
    const shopify = facets.kaynakTip.find((x) => x.value === "shopify");
    const dtc = facets.kaynakTip.find((x) => x.value === "dtc");
    const ikas = facets.kaynakTip.find((x) => x.value === "ikas");
    assert.equal(shopify.count, 1);
    assert.equal(dtc.count, 3);
    assert.equal(ikas.count, 1);
    assert.equal(shopify.label, "Shopify");
  });

  it("puts kaynakTip on light rows", () => {
    assert.equal(lightRow(stubRow("graza")).kaynakTip, "dtc");
    assert.equal(lightRow(stubRow("hyper")).kaynakTip, "shopify");
    assert.equal(lightRow(stubRow("sumru")).kaynakTip, "ikas");
  });
});
