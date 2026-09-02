/**
 * Optional Shopify storefront password unlock.
 * Observation: storePassword or capture.storePassword
 * Env: STOREFRONT_PASSWORD
 * Only posts the published demo password on the observation's own origin.
 * Skips when storefront_digest is already set or the password field is hidden
 * (second goto in interaction steps must not hang on /password).
 */

export function readStorePassword(obs) {
  return (
    obs?.storePassword ||
    obs?.capture?.storePassword ||
    process.env.STOREFRONT_PASSWORD ||
    null
  );
}

export async function unlockStorefrontIfNeeded(page, obs, originUrl) {
  const password = readStorePassword(obs);
  if (!password) return false;

  const origin = new URL(originUrl || obs.url).origin;

  const cookies = await page.context().cookies(origin);
  if (cookies.some((c) => c.name === "storefront_digest")) return false;

  await page.goto(`${origin}/password`, {
    waitUntil: "domcontentloaded",
    timeout: 90000,
  });
  await page.waitForTimeout(400);

  const input = page.locator("input[type='password']").first();
  if ((await input.count()) === 0) return false;
  if (!(await input.isVisible().catch(() => false))) return false;

  await input.fill(password);
  const submit = page
    .locator(
      "form[action*='password'] button[type='submit'], form[action*='password'] input[type='submit'], button:has-text('Enter'), input[type='submit']"
    )
    .first();
  await submit.click({ timeout: 8000 });
  await page.waitForTimeout(1500);
  return true;
}
