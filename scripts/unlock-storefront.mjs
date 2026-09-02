/**
 * Shopify storefront password wall (Speedo / vendor demos).
 * Public demo unlock — not a private account. Vendor publishes the password
 * on the theme product page (Gemora/Pandora: `1`).
 *
 * Call after every navigation that may land on /password.
 */

export async function unlockStorefront(page, password) {
  const url = page.url();
  const title = await page.title().catch(() => "");
  const bodyText = await page
    .locator("body")
    .innerText()
    .catch(() => "");
  const formCount = await page
    .locator("form[action*='password'], input[type='password'][name='password'], input#password")
    .count()
    .catch(() => 0);

  const isWall =
    /\/password/i.test(url) ||
    /password protected|enter the store|enter store/i.test(`${title}\n${bodyText}`) ||
    formCount > 0;

  if (!isWall) return false;

  let pwd = password || process.env.QANTE_STOREFRONT_PASSWORD || "";
  if (!pwd) {
    const hint = `${title}\n${bodyText}`.match(/password[:\s]+["']?(\d+)["']?/i);
    pwd = hint?.[1] || "1";
  }

  const input = page
    .locator(
      "form[action*='password'] input[type='password'], input[name='password'], input#Password, input#password"
    )
    .first();
  await input.waitFor({ state: "visible", timeout: 8000 }).catch(() => {});
  if (!(await input.count())) return false;

  await input.fill(pwd);
  const submit = page
    .locator(
      "form[action*='password'] button[type='submit'], form[action*='password'] input[type='submit'], button:has-text('Enter'), input[type='submit'][name='commit']"
    )
    .first();

  await Promise.all([
    page
      .waitForNavigation({ waitUntil: "domcontentloaded", timeout: 30000 })
      .catch(() => {}),
    submit.click({ force: true }).catch(() => input.press("Enter")),
  ]);
  await page.waitForTimeout(1500);
  return true;
}
