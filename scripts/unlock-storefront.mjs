/**
 * Vendor-published Shopify storefront password (demo unlock, not an account).
 * Used when a walk host redirects to /password. Do not invent another host.
 */

export const STOREFRONT_PASSWORDS = {
  plantrex: "1",
};

export function storefrontPasswordFor(obs = {}) {
  return obs.storefrontPassword || STOREFRONT_PASSWORDS[obs.kaynak] || null;
}

export async function ensureStorefrontUnlocked(page, { url, kaynak, password } = {}) {
  const pwd = password || STOREFRONT_PASSWORDS[kaynak];
  if (!pwd) return false;
  const origin = new URL(url || page.url() || "https://pandora-flower.myshopify.com/").origin;

  const current = page.url();
  if (
    current &&
    current.startsWith(origin) &&
    current !== "about:blank" &&
    !/\/password(?:\/|$|\?)/.test(new URL(current).pathname)
  ) {
    return true;
  }

  await page.goto(`${origin}/password`, {
    waitUntil: "domcontentloaded",
    timeout: 90000,
  });
  await page.waitForTimeout(400);

  const input = page
    .locator('form[action*="/password"] input[name="password"], input[type="password"]')
    .first();
  if (await input.count()) {
    const visible = await input.isVisible().catch(() => false);
    if (visible) {
      await input.fill(pwd);
      const btn = page
        .locator(
          'form[action*="/password"] button[type="submit"], form[action*="/password"] input[type="submit"], button:has-text("Enter")'
        )
        .first();
      if (await btn.count()) await btn.click();
      else await input.press("Enter");
      await page.waitForTimeout(800);
    }
  }

  if (/\/password(?:\/|$|\?)/.test(new URL(page.url()).pathname)) {
    await page.goto(`${origin}/`, {
      waitUntil: "domcontentloaded",
      timeout: 90000,
    });
    await page.waitForTimeout(400);
  }

  return !/\/password(?:\/|$|\?)/.test(new URL(page.url()).pathname);
}
