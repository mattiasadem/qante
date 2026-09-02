/**
 * Shopify storefront password wall.
 * Only runs when the current page is the password form.
 * Password comes from observation.storefrontPassword — never guessed.
 */
export async function unlockStorefrontIfNeeded(page, password) {
  if (!password) return false;

  const url = page.url();
  const title = await page.title().catch(() => "");
  const pw = page.locator('input[name="password"], input[type="password"]').first();
  const hasField = (await pw.count()) > 0;
  const onWall =
    /\/password/i.test(url) ||
    /password/i.test(title) ||
    (hasField && (await pw.isVisible().catch(() => false)));
  if (!onWall || !hasField) return false;

  await pw.fill(String(password));
  const submit = page
    .locator(
      'form[action*="password"] button[type="submit"], form[action*="password"] input[type="submit"], button[type="submit"], input[type="submit"]'
    )
    .first();
  if (await submit.count()) await submit.click();
  else await pw.press("Enter");
  await page.waitForTimeout(2200);
  return true;
}
