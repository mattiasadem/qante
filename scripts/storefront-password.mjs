/**
 * Shopify storefront password unlock for capture scripts.
 * Vendor-published demo passwords only (e.g. Speedo PawPets product page: `1`).
 */

export const DEFAULT_STOREFRONT_PASSWORDS = {
  pawpets: "1",
};

export function resolveStorefrontPassword(obs) {
  return (
    obs?.storefrontPassword ||
    obs?.capture?.storefrontPassword ||
    process.env.STOREFRONT_PASSWORD ||
    DEFAULT_STOREFRONT_PASSWORDS[obs?.kaynak] ||
    null
  );
}

/**
 * If the page is the storefront password wall, enter the published password
 * and return to `returnUrl` when Shopify drops us on `/`.
 */
export async function unlockStorefrontIfNeeded(
  page,
  password,
  { returnUrl } = {}
) {
  if (!password) return false;

  const field = page
    .locator(
      'form[action*="/password"] input[type="password"], #Password, #password, input[name="password"]'
    )
    .first();

  const onPassword =
    /\/password/i.test(page.url()) ||
    (await field.isVisible().catch(() => false));

  if (!onPassword) return false;

  await field.waitFor({ state: "visible", timeout: 8000 }).catch(() => {});
  if (!(await field.count())) return false;

  await field.fill(String(password));
  const submit = page
    .locator(
      'form[action*="/password"] button[type="submit"], form[action*="/password"] input[type="submit"], #login_form button, button:has-text("Enter")'
    )
    .first();
  if (await submit.count()) await submit.click();
  else await field.press("Enter");
  await page.waitForTimeout(2000);

  if (returnUrl) {
    const now = new URL(page.url());
    const want = new URL(returnUrl);
    if (
      now.pathname.replace(/\/$/, "") !== want.pathname.replace(/\/$/, "") ||
      now.search !== want.search
    ) {
      await page.goto(returnUrl, {
        waitUntil: "domcontentloaded",
        timeout: 90000,
      });
      await page.waitForTimeout(1500);
    }
  }
  return true;
}
