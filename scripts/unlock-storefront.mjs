/**
 * Public storefront password unlock (vendor-published demo passwords only).
 * Used by capture-observation / capture-interaction / scan-affordances
 * when a walk host is behind Shopify /password.
 */

export const PUBLIC_DEMO_PASSWORDS = {
  "speedo-candles-store.myshopify.com": "1",
};

export async function unlockStorefrontIfNeeded(page, obs = {}) {
  const url = page.url();
  let host = "";
  try {
    host = new URL(url).hostname;
  } catch {
    return { unlocked: false, skipped: true };
  }
  const password = obs.storePassword || PUBLIC_DEMO_PASSWORDS[host] || null;
  const onPassword =
    /\/password\/?$/.test(new URL(page.url()).pathname) ||
    (await page.locator("form[action*='password']").count()) > 0;
  if (!onPassword) return { unlocked: true, alreadyOpen: true };
  if (!password) return { unlocked: false, reason: "no-password" };

  const input = page.locator("input[type='password'], input[name='password']").first();
  if (!(await input.count())) return { unlocked: false, reason: "no-input" };
  await input.fill(password);
  const submit = page
    .locator(
      "form[action*='password'] button[type='submit'], form[action*='password'] input[type='submit'], form[action*='password'] button"
    )
    .first();
  await submit.click();
  await page.waitForTimeout(2000);
  const still = /\/password\/?$/.test(new URL(page.url()).pathname);
  return { unlocked: !still, url: page.url() };
}
