import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const script = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "ignore-vercel-build.mjs",
);

function run(env) {
  return spawnSync(process.execPath, [script], {
    env: { ...process.env, ...env },
    encoding: "utf8",
  }).status;
}

describe("ignore-vercel-build", () => {
  it("builds main", () => {
    assert.equal(run({ VERCEL_GIT_COMMIT_REF: "main" }), 1);
  });

  it("builds CLI / manual deploys with no git ref", () => {
    assert.equal(run({ VERCEL_GIT_COMMIT_REF: "" }), 1);
  });

  it("skips inventory preview branches", () => {
    assert.equal(run({ VERCEL_GIT_COMMIT_REF: "cursor/hot-sauce-inventory-cd61" }), 0);
    assert.equal(run({ VERCEL_GIT_COMMIT_REF: "feat/shop-siparis" }), 0);
  });
});
