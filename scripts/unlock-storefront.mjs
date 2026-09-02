/**
 * Public Shopify storefront password wall.
 * Vendor Speedo (and similar demos) publish password `1` on the product page.
 * Only submits when the current document is the /password form — not a login.
 */

const DEFAULT_PASSWORD = "1";

export async function unlockStorefrontIfNeeded(page, password = DEFAULT_PASSWORD) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const url = page.url();
    const title = await page.title().catch(() => "");
    const needs =
      /\/password/i.test(url) ||
      /password/i.test(title) ||
      (await page.locator('form[action*="/password"] input[type="password"], form[action*="/password"] input[name="password"]').count());

    if (!needs) return { unlocked: attempt > 0, url: page.url() };

    const pw = page
      .locator(
        'form[action*="/password"] input[type="password"], form[action*="/password"] input[name="password"], input[type="password"][name="password"]'
      )
      .first();
    if (!(await pw.count())) {
      await page.waitForTimeout(800);
      continue;
    }
    await pw.fill(password);
    const submit = page
      .locator(
        'form[action*="/password"] button[type="submit"], form[action*="/password"] input[type="submit"], form[action*="/password"] button'
      )
      .first();
    if (await submit.count()) await submit.click();
    else await page.keyboard.press("Enter");
    await page.waitForTimeout(1800);
  }
  return { unlocked: true, url: page.url() };
}
