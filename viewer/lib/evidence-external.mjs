/**
 * Evidence PNGs are not uploaded to Vercel — served from GitHub via jsDelivr CDN.
 * Local dev still reads evidence/ from disk (viewer/app.mjs).
 */

export const EVIDENCE_REPO = "mattiasadem/qante";
export const EVIDENCE_REF = "main";
export const EVIDENCE_CDN_BASE = `https://cdn.jsdelivr.net/gh/${EVIDENCE_REPO}@${EVIDENCE_REF}`;

const EVIDENCE_IMAGE = /\.(png|jpe?g|webp)$/i;

/** @param {string} pathname URL path (/evidence/...) or repo-relative (evidence/...) */
export function externalEvidenceUrl(pathname) {
  const clean = String(pathname || "").replace(/^\//, "");
  if (!clean.startsWith("evidence/")) return null;
  return `${EVIDENCE_CDN_BASE}/${clean}`;
}

/** Vercel Lambda has no evidence/ tree; listed paths are served via jsDelivr. */
export function isRemoteEvidenceEnv(env = process.env) {
  return Boolean(env?.VERCEL);
}

/**
 * Observation-listed repo evidence image (not an arbitrary disk path).
 * @param {string} listedPath
 */
export function isRepoEvidencePath(listedPath) {
  const clean = String(listedPath || "").replace(/^\/+/, "");
  if (!clean.startsWith("evidence/")) return false;
  if (clean.includes("..") || clean.includes("\\") || clean.includes("\0")) return false;
  return EVIDENCE_IMAGE.test(clean);
}
