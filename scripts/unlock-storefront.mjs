/**
 * Public Shopify storefront password (vendor-published demo unlock).
 * Observation: storefrontPassword or capture.storefrontPassword
 * Env: QANTE_STOREFRONT_PASSWORD
 */
export async function unlockStorefrontIfNeeded(page, obs = {}) {
  const password =
    obs.storefrontPassword ||
    obs.capture?.storefrontPassword ||
    process.env.QANTE_STOREFRONT_PASSWORD ||
    null;
  if (!password) return false;

  const url = page.url();
  const title = await page.title().catch(() => "");
  const onPassword =
    /\/password\/?(\?|$)/.test(url) ||
    /password protected|enter store password/i.test(title);
  if (!onPassword) return false;

  const field = page.locator("#password, input[name='password']").first();
  const visible = await field.isVisible({ timeout: 8000 }).catch(() => false);
  if (!visible) return false;

  await field.fill(password);
  const btn = page
    .locator("form[action*='password'] button[type='submit'], form[action*='password'] button")
    .first();
  if (await btn.count()) await btn.click();
  else await field.press("Enter");
  await page.waitForTimeout(2000);
  return true;
}
