/**
 * Shopify storefront password wall (public demo unlock, not an account).
 * Observation.storefrontPassword veya STOREFRONT_PASSWORD.
 * /password formuna yazıp submit eder; cookie sonrası hedef URL'ye döner.
 */

export async function unlockStorefrontIfNeeded(page, password, targetUrl) {
  const pw = password == null ? "" : String(password).trim();
  if (!pw) return false;

  const needs = await page.evaluate(() => {
    const path = location.pathname || "";
    const hasForm = Boolean(
      document.querySelector("form[action*='password'] input[name='password']")
    );
    const hasInput = Boolean(
      document.querySelector("input[type='password'][name='password']")
    );
    return /\/password\/?$/i.test(path) || hasForm || hasInput;
  });
  if (!needs) return false;

  const input = page
    .locator("form[action*='password'] input[name='password'], input[name='password']")
    .first();
  if (!(await input.count())) return false;

  await input.fill(pw);
  const form = page.locator("form[action*='password']").first();
  if (await form.count()) {
    await Promise.all([
      page.waitForNavigation({ waitUntil: "domcontentloaded", timeout: 20000 }).catch(() => {}),
      form.evaluate((el) => {
        if (typeof el.requestSubmit === "function") el.requestSubmit();
        else el.submit();
      }),
    ]);
  } else {
    await input.press("Enter");
    await page.waitForTimeout(1500);
  }
  await page.waitForTimeout(1200);

  if (targetUrl) {
    const want = new URL(targetUrl);
    const now = new URL(page.url());
    if (
      now.origin === now.origin &&
      now.pathname.replace(/\/$/, "") !== want.pathname.replace(/\/$/, "")
    ) {
      await page.goto(targetUrl, { waitUntil: "domcontentloaded", timeout: 90000 }).catch(() => {});
      await page.waitForTimeout(1500);
    }
  }
  return true;
}
