/**
 * Shopify storefront password wall (public demo unlock, not an account).
 * Observation: storefrontPassword: "1"
 */

export async function unlockStorefront(page, password) {
  if (!password) return false;
  const url = page.url();
  const input = page
    .locator(
      "input[type='password'], input[name='password'], #Password, #password"
    )
    .first();
  const hasInput = (await input.count()) > 0;
  if (!/\/password/i.test(url) && !hasInput) return false;
  if (!hasInput) return false;
  await input.fill(String(password));
  const submit = page
    .locator(
      "form[action*='password'] button[type='submit'], form[action*='password'] button, form[action*='password'] input[type='submit'], button[name='commit']"
    )
    .first();
  if (await submit.count()) await submit.click();
  else await input.press("Enter");
  await page.waitForTimeout(2200);
  return true;
}

/** goto + unlock; if unlock left us on a different path, return to the target URL. */
export async function gotoAndUnlock(page, url, password) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForTimeout(800);
  const unlocked = await unlockStorefront(page, password);
  if (!unlocked) return false;
  const now = new URL(page.url());
  const target = new URL(url);
  if (
    now.pathname.replace(/\/$/, "") !== target.pathname.replace(/\/$/, "")
  ) {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(1200);
  }
  return true;
}
