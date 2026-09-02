/**
 * Public Shopify storefront password wall.
 * Password from observation.storefrontPassword or SHOPIFY_STOREFRONT_PASSWORD.
 * Does nothing when the page is already unlocked.
 */

export async function unlockStorefrontIfNeeded(page, obs = {}) {
  const password =
    obs.storefrontPassword ||
    process.env.SHOPIFY_STOREFRONT_PASSWORD ||
    null;
  if (!password) return false;

  const url = page.url();
  const input = page.locator("#password, input[name='password']").first();
  const onWall =
    /\/password/i.test(url) ||
    (await input.count().catch(() => 0)) > 0;
  if (!onWall) return false;

  if (!(await input.count())) return false;
  if (!(await input.isVisible().catch(() => false))) return false;

  await input.fill(String(password));
  const submit = page
    .locator("form[action*='password'] button[type='submit'], form[action*='password'] input[type='submit'], button[type='submit']")
    .first();
  if (await submit.count()) await submit.click();
  else await input.press("Enter");
  await page.waitForTimeout(2200);

  if (/\/password/i.test(page.url())) {
    throw new Error("storefront password wall: unlock failed");
  }
  return true;
}
