/**
 * Shopify storefront password wall.
 * Password comes from observation.unlockPassword or
 * observations/{kaynak}/storefront.json (vendor-published demo password).
 * Do not invent a host. If no password is recorded, throw — caller stops.
 */

import fs from "fs";
import path from "path";

export function resolveStorefrontPassword(obs, qanteRoot) {
  if (obs?.unlockPassword) return String(obs.unlockPassword);
  const kaynak = obs?.kaynak;
  if (!kaynak || !qanteRoot) return null;
  const p = path.join(qanteRoot, "observations", kaynak, "storefront.json");
  if (!fs.existsSync(p)) return null;
  try {
    const s = JSON.parse(fs.readFileSync(p, "utf8"));
    return s.unlockPassword ? String(s.unlockPassword) : null;
  } catch {
    return null;
  }
}

function onPasswordPath(url) {
  try {
    return /\/password\/?$/.test(new URL(url).pathname);
  } catch {
    return /\/password/.test(String(url));
  }
}

export async function unlockStorefrontIfNeeded(page, obs, qanteRoot) {
  const form = page.locator(
    'form[action*="/password"] input[type="password"], input[name="password"]'
  );
  const needsUnlock = onPasswordPath(page.url()) || (await form.count()) > 0;
  if (!needsUnlock) return false;

  const pw = resolveStorefrontPassword(obs, qanteRoot);
  if (!pw) {
    throw new Error(
      `Password wall at ${page.url()} — stop. No unlockPassword and no observations/${obs?.kaynak || "?"}/storefront.json`
    );
  }

  const input = page.locator('input[type="password"], input[name="password"]').first();
  await input.waitFor({ state: "visible", timeout: 12000 });
  await input.fill(pw);
  const btn = page
    .locator('form[action*="/password"] button[type="submit"], form[action*="/password"] input[type="submit"], button[type="submit"]')
    .first();
  await btn.click();
  await page.waitForTimeout(2200);

  if (onPasswordPath(page.url())) {
    throw new Error(`Password wall still up after unlock at ${page.url()} — stop`);
  }
  return true;
}
