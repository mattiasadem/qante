/**
 * Shopify storefront password wall — vendor-published demo password only.
 * Observation: storefrontPassword (veya capture.storefrontPassword).
 * Şifre yoksa /password'ta durur; başka host denemez.
 */
export async function unlockStorefrontIfNeeded(page, obs = {}) {
  const password =
    obs.storefrontPassword || obs.capture?.storefrontPassword || null;
  const url = page.url();
  const onPassword =
    /\/password\/?(\?|$)/i.test(url) ||
    (await page
      .locator('#password, input[name="password"][type="password"]')
      .count()
      .catch(() => 0));
  if (!onPassword) return false;
  if (!password) {
    throw new Error(
      `Storefront password wall: ${url} — observation.storefrontPassword yok; başka host denenmedi.`
    );
  }
  const field = page.locator('#password, input[name="password"][type="password"]').first();
  await field.waitFor({ state: "visible", timeout: 15000 });
  await field.fill(String(password));
  const submit = page.locator('form[action*="/password"] button[type="submit"], button:has-text("Enter")').first();
  await submit.click();
  await page.waitForURL((u) => !/\/password\/?(\?|$)/i.test(u.pathname), {
    timeout: 20000,
  });
  await page.waitForTimeout(800);
  return true;
}
