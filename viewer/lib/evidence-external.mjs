/**
 * Evidence PNGs are not uploaded to Vercel — served from GitHub via jsDelivr CDN.
 * Local dev still reads evidence/ from disk (viewer/app.mjs).
 */

export const EVIDENCE_REPO = "mattiasadem/qante";
export const EVIDENCE_REF = "main";
export const EVIDENCE_CDN_BASE = `https://cdn.jsdelivr.net/gh/${EVIDENCE_REPO}@${EVIDENCE_REF}`;

/** @param {string} pathname URL path (/evidence/...) or repo-relative (evidence/...) */
export function externalEvidenceUrl(pathname) {
  const clean = String(pathname || "").replace(/^\//, "");
  if (!clean.startsWith("evidence/")) return null;
  return `${EVIDENCE_CDN_BASE}/${clean}`;
}
