/**
 * Shopify storefront password wall (public demo unlock, not an account).
 * Observation: storefrontPassword · capture.storefrontPassword · STOREFRONT_PASSWORD
 */

export function storefrontPasswordFrom(obs) {
  return (
    obs?.storefrontPassword ||
    obs?.capture?.storefrontPassword ||
    process.env.STOREFRONT_PASSWORD ||
    null
  );
}

export async function unlockStorefrontIfNeeded(page, password) {
  if (!password) return false;
  const onPasswordPage = /\/password/i.test(page.url());
  const formCount = await page
    .locator(
      'form[action*="/password"] input[type="password"], input[name="form_type"][value="storefront_password"]'
    )
    .count()
    .catch(() => 0);
  if (!onPasswordPage && !formCount) return false;

  const field = page.locator('input[type="password"]').first();
  if (!(await field.count())) return false;
  await field.waitFor({ state: "visible", timeout: 8000 }).catch(() => {});
  await field.fill(String(password));
  const submit = page
    .locator(
      'form[action*="/password"] button[type="submit"], form[action*="/password"] [type="submit"]'
    )
    .first();
  if (await submit.count()) await submit.click();
  else await field.press("Enter");
  await page.waitForTimeout(2200);
  return true;
}

/** goto + password unlock + return to the requested path if the wall bounced to /. */
export async function gotoMaybeUnlock(page, url, password) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
  const unlocked = await unlockStorefrontIfNeeded(page, password);
  if (!unlocked) return false;
  const target = new URL(url);
  const now = new URL(page.url());
  const samePath =
    now.origin === target.origin &&
    now.pathname.replace(/\/$/, "") === target.pathname.replace(/\/$/, "");
  if (!samePath && !/\/password/i.test(now.pathname)) {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
  }
  return true;
}
