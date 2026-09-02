/**
 * Public Shopify storefront password unlock (demo password pages).
 * Observation: storefrontPassword or capture.storefrontPassword.
 * Only runs when the page is the password form — not a customer account form.
 */

export async function unlockStorefrontPassword(page, obs = {}) {
  const password =
    obs.storefrontPassword || obs.capture?.storefrontPassword || null;
  if (!password) return false;

  const url = page.url();
  const field = page.locator('form[action*="/password"] input[name="password"], input[name="password"][type="password"]').first();
  const onPasswordPath = /\/password\/?(\?|$)/i.test(url);
  const hasField = (await field.count()) > 0;
  if (!onPasswordPath && !hasField) return false;
  if (!onPasswordPath) {
    const visible = await field.isVisible().catch(() => false);
    if (!visible) return false;
  }

  await field.fill(String(password)).catch(() => {});
  const submit = page
    .locator(
      'form[action*="/password"] button[type="submit"], form[action*="/password"] input[type="submit"], form[action*="/password"] button'
    )
    .first();
  if (await submit.count()) {
    await submit.click({ force: true }).catch(() => field.press("Enter"));
  } else {
    await field.press("Enter").catch(() => {});
  }
  await page.waitForTimeout(2000);
  return true;
}
