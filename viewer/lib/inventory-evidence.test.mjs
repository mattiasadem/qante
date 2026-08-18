import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { after, describe, it } from "node:test";
import {
  isRemoteEvidenceEnv,
  isRepoEvidencePath,
} from "./evidence-external.mjs";
import { createInventory, resolveListedEvidence } from "./inventory.mjs";
import { runHealth } from "./health.mjs";

const listed = [
  "evidence/t/default/home/hero.375.png",
  "evidence/t/default/home/hero.768.png",
  "evidence/t/default/home/hero.1440.png",
];

describe("isRepoEvidencePath", () => {
  it("accepts repo evidence images", () => {
    assert.equal(isRepoEvidencePath("evidence/hyper/default/home/hero.1440.png"), true);
    assert.equal(isRepoEvidencePath("/evidence/t/x.jpg"), true);
    assert.equal(isRepoEvidencePath("evidence/t/x.webp"), true);
  });

  it("rejects non-evidence or unsafe paths", () => {
    assert.equal(isRepoEvidencePath("observations/t.json"), false);
    assert.equal(isRepoEvidencePath("evidence/t/notes.txt"), false);
    assert.equal(isRepoEvidencePath("evidence/../secrets.png"), false);
    assert.equal(isRepoEvidencePath(""), false);
  });
});

describe("isRemoteEvidenceEnv", () => {
  it("is Vercel-only", () => {
    assert.equal(isRemoteEvidenceEnv({}), false);
    assert.equal(isRemoteEvidenceEnv({ VERCEL: "1" }), true);
  });
});

describe("resolveListedEvidence", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "qante-ev-"));
  after(() => fs.rmSync(tmp, { recursive: true, force: true }));

  it("uses disk when the file exists", () => {
    const rel = "evidence/t/default/home/hero.1440.png";
    const full = path.join(tmp, rel);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, "png");
    const got = resolveListedEvidence(tmp, rel, {});
    assert.equal(got.exists, true);
    assert.equal(got.bytes, 3);
    assert.equal(got.viewport, "1440");
  });

  it("local missing file stays missing", () => {
    const got = resolveListedEvidence(tmp, listed[0], {});
    assert.equal(got.exists, false);
    assert.equal(got.bytes, 0);
  });

  it("on Vercel trusts listed evidence image paths", () => {
    const got = resolveListedEvidence(tmp, listed[0], { VERCEL: "1" });
    assert.equal(got.exists, true);
    assert.equal(got.bytes, 0);
    assert.equal(got.viewport, "375");
  });

  it("on Vercel does not trust non-evidence paths", () => {
    const got = resolveListedEvidence(tmp, "tmp/not-evidence.png", { VERCEL: "1" });
    assert.equal(got.exists, false);
  });
});

describe("createInventory evidence status", () => {
  const inventories = [];
  after(() => {
    for (const inv of inventories) inv.close();
  });

  function fixture(withFiles = false) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "qante-inv-"));
    const obsDir = path.join(dir, "observations", "t", "default", "home");
    fs.mkdirSync(obsDir, { recursive: true });
    fs.writeFileSync(
      path.join(obsDir, "hero.json"),
      JSON.stringify({
        observationId: "t.default.home.hero",
        schemaId: "hero",
        kaynak: "t",
        preset: "default",
        sayfa: "home",
        selector: "#hero",
        evidence: listed,
      })
    );
    if (withFiles) {
      for (const rel of listed) {
        const full = path.join(dir, rel);
        fs.mkdirSync(path.dirname(full), { recursive: true });
        fs.writeFileSync(full, "x");
      }
    }
    return dir;
  }

  it("local: listed-but-absent PNGs stay none / exists false", () => {
    const dir = fixture(false);
    const inv = createInventory(dir, { env: {} });
    inventories.push(inv);
    const data = inv.get();
    const row = data.rows[0];
    assert.equal(row.evidenceStatus, "none");
    assert.equal(row.evidenceCount, 0);
    assert.deepEqual(row.evidence, []);
    assert.equal(data.observations[0].evidence.every((e) => !e.exists), true);
  });

  it("local: files on disk stay full with real bytes", () => {
    const dir = fixture(true);
    const inv = createInventory(dir, { env: {} });
    inventories.push(inv);
    const data = inv.get();
    const row = data.rows[0];
    assert.equal(row.evidenceStatus, "full");
    assert.equal(row.evidenceCount, 3);
    assert.equal(data.observations[0].evidence[0].bytes, 1);
  });

  it("Vercel: listed evidence paths become full without files on disk", () => {
    const dir = fixture(false);
    const inv = createInventory(dir, { env: { VERCEL: "1" } });
    inventories.push(inv);
    const data = inv.get();
    const row = data.rows[0];
    assert.equal(row.evidenceStatus, "full");
    assert.equal(row.evidenceCount, 3);
    assert.deepEqual(
      row.evidence.map((e) => e.path),
      listed
    );
    const health = runHealth(data);
    assert.equal(
      health.issues.filter((i) => i.rule === "evidence-file-missing").length,
      0
    );
  });
});
