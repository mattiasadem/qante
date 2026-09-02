/**
 * Shopify storefront password wall (public demo unlock, not an account).
 * Vendor Speedo Themes publishes demo password `1` on the product page.
 *
 * Call after every goto that may land on /password.
 */

export async function unlockStorefrontIfNeeded(page, password = "1") {
  const href = page.url();
  let path = "/";
  try {
    path = new URL(href).pathname;
  } catch {
    return false;
  }

  const onPasswordPath = /\/password\/?$/.test(path);
  const templateHint = await page
    .locator('[data-template="password"], body.password, #password-modal, form[action*="/password"]')
    .count()
    .catch(() => 0);

  if (!onPasswordPath && !templateHint) return false;

  const input = page
    .locator(
      'form[action*="/password"] input[type="password"], form[action*="/password"] input[name="password"], input#Password, input[name="password"][type="password"]'
    )
    .first();

  if (!(await input.count())) return false;

  await input.waitFor({ state: "visible", timeout: 8000 }).catch(() => {});
  await input.fill(String(password));

  const submit = page
    .locator(
      'form[action*="/password"] button[type="submit"], form[action*="/password"] input[type="submit"], button[name="commit"], button:has-text("Enter")'
    )
    .first();

  if (await submit.count()) {
    await submit.click({ force: true }).catch(() => input.press("Enter"));
  } else {
    await input.press("Enter");
  }

  await page.waitForTimeout(2200);
  await page.waitForLoadState("domcontentloaded").catch(() => {});
  return true;
}
