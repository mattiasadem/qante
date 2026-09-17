#!/usr/bin/env node
/**
 * Vercel Ignored Build Step.
 * Exit 0 = skip the build. Exit 1 = continue.
 *
 * Inventory PR branches used to create a full function bundle on every
 * Cursor agent push. Only `main` (and CLI/manual deploys with no git ref)
 * should produce a new deployment.
 */
const ref = process.env.VERCEL_GIT_COMMIT_REF || "";
if (!ref || ref === "main") process.exit(1);
process.exit(0);
