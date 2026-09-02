/**
 * Public Shopify storefront password unlock (demo password pages).
 * Not a private account — vendor-published storefront password only.
 */

export async function unlockStorefront(page, password) {
  if (!password) return false;

  const url = page.url();
  const title = await page.title().catch(() => "");
  const pathname = (() => {
    try {
      return new URL(url).pathname;
    } catch {
      return "";
    }
  })();

  const formCount = await page
    .locator(
      'form[action*="/password"], #login_form, input[name="password"], input[type="password"]'
    )
    .count()
    .catch(() => 0);

  const looksLocked =
    /\/password\/?$/i.test(pathname) ||
    /password/i.test(title) ||
    (formCount > 0 && /password|storefront/i.test(title + pathname));

  if (!looksLocked) return false;

  const field = page
    .locator(
      'form[action*="/password"] input[type="password"], form[action*="/password"] input[name="password"], #Password, input[name="password"], input[type="password"]'
    )
    .first();

  if (!(await field.count())) return false;

  await field.fill(String(password)).catch(() => {});
  const submit = page
    .locator(
      'form[action*="/password"] button[type="submit"], form[action*="/password"] input[type="submit"], form[action*="/password"] button, #login_form button, button[type="submit"]'
    )
    .first();
  if (await submit.count()) {
    await submit.click().catch(() => field.press("Enter"));
  } else {
    await field.press("Enter").catch(() => {});
  }
  await page.waitForLoadState("domcontentloaded", { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(1500);
  return !/\/password\/?$/i.test((() => {
    try {
      return new URL(page.url()).pathname;
    } catch {
      return "";
    }
  })());
}

export function passwordFromObservation(obs, url) {
  if (obs?.storePassword) return String(obs.storePassword);
  try {
    const host = new URL(url || obs?.url || "").hostname;
    if (host === "midnight-perfume.myshopify.com") return "1";
  } catch {
    /* ignore */
  }
  return null;
}
