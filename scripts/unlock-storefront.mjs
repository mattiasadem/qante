/**
 * Shopify storefront password gate (vendor-published demo password).
 * Observation.storefrontPassword veya SHOPIFY_STOREFRONT_PASSWORD.
 */

export async function unlockStorefrontIfNeeded(page, { password, targetUrl } = {}) {
  const pwd = page.locator(
    'form[action*="/password"] input[type="password"], input[name="password"]'
  );
  const n = await pwd.count();
  if (!n) return { unlocked: false, reason: "no-form" };

  const secret = password || process.env.SHOPIFY_STOREFRONT_PASSWORD || "";
  if (!secret) {
    console.warn(
      "Storefront password form present; set observation.storefrontPassword"
    );
    return { unlocked: false, reason: "no-password" };
  }

  await pwd.first().fill(String(secret));
  const submit = page.locator(
    'form[action*="/password"] button[type="submit"], form[action*="/password"] input[type="submit"]'
  );
  if (await submit.count()) await submit.first().click();
  else await pwd.first().press("Enter");
  await page.waitForTimeout(2000);

  if (targetUrl) {
    const now = new URL(page.url());
    const want = new URL(targetUrl, now.origin);
    const nowPath = now.pathname.replace(/\/$/, "") + now.search;
    const wantPath = want.pathname.replace(/\/$/, "") + want.search;
    if (nowPath !== wantPath) {
      await page.goto(targetUrl, { waitUntil: "domcontentloaded", timeout: 90000 });
      await page.waitForTimeout(1500);
    }
  }

  return { unlocked: true };
}
