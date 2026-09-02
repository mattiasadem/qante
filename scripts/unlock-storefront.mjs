/**
 * Shopify storefront password (public demo unlock, not an account).
 * Observation: storefrontPassword: "1"
 */
export async function unlockStorefrontIfNeeded(page, password) {
  if (!password) return false;
  const url = page.url();
  const input = page.locator("input[type='password'], input[name='password']").first();
  const onPassword =
    /\/password/i.test(url) || (await input.count()) > 0;
  if (!onPassword) return false;
  if (!(await input.count())) return false;
  await input.fill(String(password));
  const submit = page
    .locator(
      "form[action*='password'] button[type='submit'], form[action*='password'] [type='submit'], button[name='commit'], button[type='submit']"
    )
    .first();
  if (await submit.count()) await submit.click();
  else await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);
  return true;
}

export async function gotoUnlocked(page, url, password) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
  const unlocked = await unlockStorefrontIfNeeded(page, password);
  if (unlocked) {
    const now = page.url();
    const target = new URL(url);
    const landed = new URL(now);
    if (
      landed.origin === target.origin &&
      landed.pathname.replace(/\/$/, "") !== target.pathname.replace(/\/$/, "")
    ) {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
      await page.waitForTimeout(800);
    }
  }
  return unlocked;
}
