/**
 * Public Shopify storefront password wall (vendor-published demo password).
 * Observation.storefrontPassword or STOREFRONT_PASSWORD.
 * No-op when the form is absent (already unlocked / open store).
 */
export async function unlockStorefront(page, password) {
  if (!password) return false;
  const input = page
    .locator(
      'form[action*="/password"] input[name="password"], input[type="password"][name="password"], #Password'
    )
    .first();
  if (!(await input.count())) return false;
  const visible = await input.isVisible().catch(() => false);
  if (!visible) return false;
  await input.fill(String(password));
  const submit = page
    .locator(
      'form[action*="/password"] button[type="submit"], form[action*="/password"] input[type="submit"], form[action*="/password"] button'
    )
    .first();
  if (await submit.count()) await submit.click();
  else await input.press("Enter");
  await page.waitForTimeout(2000);
  return true;
}

export function storefrontPasswordFrom(obs) {
  return (
    obs?.storefrontPassword ||
    obs?.capture?.storefrontPassword ||
    process.env.STOREFRONT_PASSWORD ||
    null
  );
}
