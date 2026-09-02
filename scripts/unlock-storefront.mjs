/**
 * Shopify storefront password wall (public demo unlock).
 * Vendor publishes the password on the theme product page — not a private account.
 *
 * Observation: storefrontPassword: "1"
 * Env fallback: QANTE_STOREFRONT_PASSWORD
 */

export async function unlockStorefront(page, password) {
  const pw = String(password || "").trim();
  if (!pw) return false;

  const url = page.url();
  const title = await page.title().catch(() => "");
  const needsUnlock = await page.evaluate(() => {
    const path = location.pathname.replace(/\/$/, "") || "/";
    if (path === "/password") return true;
    if (document.querySelector('form[action*="/password"] input[type="password"]')) {
      return true;
    }
    const h = (document.body?.innerText || "").slice(0, 800);
    return /this store is password protected/i.test(h);
  });

  if (!needsUnlock && !/\/password\/?$/.test(new URL(url).pathname)) {
    if (!/password protected/i.test(title)) return false;
  }
  if (!needsUnlock && !/password/i.test(title) && !/\/password\/?$/.test(new URL(url).pathname)) {
    return false;
  }

  const field = page
    .locator(
      'form[action*="password"] input[type="password"], input[name="password"][type="password"], #Password, #password'
    )
    .first();
  await field.waitFor({ state: "visible", timeout: 12000 }).catch(() => {});
  if (!(await field.count())) {
    console.warn("unlock-storefront: password field yok");
    return false;
  }
  await field.fill(pw);
  const submit = page
    .locator(
      'form[action*="password"] button[type="submit"], form[action*="password"] input[type="submit"], button:has-text("Enter")'
    )
    .first();
  if (await submit.count()) {
    await submit.click({ timeout: 8000 }).catch(() => field.press("Enter"));
  } else {
    await field.press("Enter");
  }
  await page.waitForTimeout(2000);
  await page.waitForLoadState("domcontentloaded").catch(() => {});
  const after = page.url();
  if (/\/password\/?$/.test(new URL(after).pathname)) {
    console.warn("unlock-storefront: hâlâ /password");
    return false;
  }
  return true;
}

export function passwordFromObs(obs) {
  return (
    obs?.storefrontPassword ||
    obs?.capture?.storefrontPassword ||
    process.env.QANTE_STOREFRONT_PASSWORD ||
    ""
  );
}
