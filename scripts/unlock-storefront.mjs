/**
 * Public storefront password unlock (vendor-published demo passwords only).
 * Used by capture-observation / capture-interaction / scan-affordances
 * when a walk host is behind Shopify /password.
 *
 * Password resolution (first hit):
 *   obs.storefrontPassword · obs.storePassword
 *   obs.capture.storefrontPassword · obs.capture.storePassword
 *   QANTE_STOREFRONT_PASSWORD · SHOPIFY_STOREFRONT_PASSWORD · STOREFRONT_PASSWORD
 *   PUBLIC_DEMO_PASSWORDS[hostname]
 */

export const PUBLIC_DEMO_PASSWORDS = {
  "adlwin-store.myshopify.com": "1",
  "beverages-online-store.myshopify.com": "1",
  "bicycle-online-store-1.myshopify.com": "1",
  "book-online-store-1.myshopify.com": "1",
  "coffee-prime-2.myshopify.com": "1",
  "digital-gallery-shop-2.myshopify.com": "1",
  "fashion-store-clean-10.myshopify.com": "1",
  "fashion-store-clean-11.myshopify.com": "1",
  "fashion-store-clean-20.myshopify.com": "1",
  "fashion-store-clean-21.myshopify.com": "1",
  "fashion-store-clean-5.myshopify.com": "1",
  "gamming-store-1.myshopify.com": "1",
  "glidefeet.myshopify.com": "1",
  "goggles-online-store.myshopify.com": "1",
  "hubble-nutrition.myshopify.com": "1",
  "jewelry-online-shop-3.myshopify.com": "1",
  "jewelry-online-shop-4.myshopify.com": "1",
  "jewelry-online-shop1.myshopify.com": "1",
  "jewelry-online-shop2.myshopify.com": "1",
  "luxury-handmade-ultimate.myshopify.com": "1",
  "midnight-perfume.myshopify.com": "1",
  "pandora-beauty-store.myshopify.com": "1",
  "pandora-fashi.myshopify.com": "1",
  "pandora-flower.myshopify.com": "1",
  "pandora-full-fashion.myshopify.com": "1",
  "pandora-furniture-3.myshopify.com": "1",
  "pandora-furniture-5.myshopify.com": "1",
  "pandora-furniture-6.myshopify.com": "1",
  "pandora-furniture.myshopify.com": "1",
  "pandora-hair-care-3.myshopify.com": "1",
  "pandora-wallpaper.myshopify.com": "1",
  "petz-online-store-2.myshopify.com": "1",
  "petz-online-store.myshopify.com": "1",
  "sonix-electronics-store-2.myshopify.com": "1",
  "speedo-candles-store.myshopify.com": "1",
  "speedo-electro-dropship.myshopify.com": "1",
  "speedo-nutronix.myshopify.com": "1",
  "speedo-sarees.myshopify.com": "1",
  "tormeti-fashi.myshopify.com": "1",
  "toyon-toys-2.myshopify.com": "1",
  "vedzila-organic.myshopify.com": "1",
  "watchez-online-store.myshopify.com": "1",
  "women-beauty-6.myshopify.com": "1",
  "women-beauty-7.myshopify.com": "1",
  "women-beauty-8.myshopify.com": "1",
};

/** Playwright default UA triggers Shopify checkpoint after a burst. */
export const STOREFRONT_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";

function isCheckpointTitle(title) {
  return /just a moment|verifying your connection|needs to be verified/i.test(
    title || ""
  );
}

export function passwordFromObs(obs = {}, host = "") {
  return (
    obs?.storefrontPassword ||
    obs?.storePassword ||
    obs?.capture?.storefrontPassword ||
    obs?.capture?.storePassword ||
    process.env.QANTE_STOREFRONT_PASSWORD ||
    process.env.SHOPIFY_STOREFRONT_PASSWORD ||
    process.env.STOREFRONT_PASSWORD ||
    (host && PUBLIC_DEMO_PASSWORDS[host]) ||
    PUBLIC_DEMO_PASSWORDS[obs?.kaynak] ||
    null
  );
}

export async function waitOutCheckpoint(page) {
  for (let i = 0; i < 6; i++) {
    const title = await page.title().catch(() => "");
    if (!isCheckpointTitle(title)) return { ok: true, waited: i > 0 };
    await page.waitForTimeout(2500);
    if (i === 2 || i === 4) {
      await page.reload({ waitUntil: "domcontentloaded" }).catch(() => {});
    }
  }
  const title = await page.title().catch(() => "");
  return { ok: !isCheckpointTitle(title), waited: true, title };
}

export async function unlockStorefrontIfNeeded(page, obs = {}) {
  const url = page.url();
  let host = "";
  try {
    host = new URL(url).hostname;
  } catch {
    return { unlocked: false, skipped: true };
  }
  const password = passwordFromObs(obs, host);
  const onPassword =
    /\/password\/?$/.test(new URL(page.url()).pathname) ||
    (await page.locator("form[action*='password']").count()) > 0;
  if (!onPassword) {
    const gate = await waitOutCheckpoint(page);
    return { unlocked: gate.ok, alreadyOpen: true, checkpoint: gate };
  }
  if (!password) return { unlocked: false, reason: "no-password" };

  const input = page.locator("input[type='password'], input[name='password']").first();
  if (!(await input.count())) return { unlocked: false, reason: "no-input" };
  await input.fill(String(password));
  const submit = page
    .locator(
      "form[action*='password'] button[type='submit'], form[action*='password'] input[type='submit'], form[action*='password'] button"
    )
    .first();
  await submit.click();
  await page.waitForTimeout(2000);
  const still = /\/password\/?$/.test(new URL(page.url()).pathname);
  const gate = await waitOutCheckpoint(page);
  return { unlocked: !still && gate.ok, url: page.url(), checkpoint: gate };
}
