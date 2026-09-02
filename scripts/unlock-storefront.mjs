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
  "fashion-store-clean-10.myshopify.com": "1",
  "fashion-store-clean-11.myshopify.com": "1",
  "fashion-store-clean-20.myshopify.com": "1",
  "hubble-nutrition.myshopify.com": "1",
  "jewelry-online-shop-3.myshopify.com": "1",
  "jewelry-online-shop-4.myshopify.com": "1",
  "jewelry-online-shop2.myshopify.com": "1",
  "pandora-beauty-store.myshopify.com": "1",
  "pandora-fashi.myshopify.com": "1",
  "pandora-flower.myshopify.com": "1",
  "pandora-furniture-6.myshopify.com": "1",
  "petz-online-store-2.myshopify.com": "1",
  "speedo-candles-store.myshopify.com": "1",
  "tormeti-fashi.myshopify.com": "1",
  "vedzila-organic.myshopify.com": "1",
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

  // Dawn password template hides the field inside closed <details>
  const details = page.locator("details:has(input[type='password'])").first();
  if (await details.count()) {
    const isOpen = await details.getAttribute("open");
    if (!isOpen) {
      await details
        .locator("summary")
        .first()
        .click({ force: true })
        .catch(() => {});
      await page.waitForTimeout(400);
    }
  }

  const candidates = page.locator(
    "input[type='password']:not([type='hidden']), input[name='password']:not([type='hidden'])"
  );
  const n = await candidates.count();
  let input = null;
  for (let i = 0; i < n; i++) {
    const c = candidates.nth(i);
    if (await c.isVisible().catch(() => false)) {
      input = c;
      break;
    }
  }
  if (!input && n) input = candidates.first();
  if (!input) return { unlocked: false, reason: "no-input" };
  await input.fill(String(password), { force: true });
  const submit = page
    .locator(
      "form[action*='password'] button[type='submit'], form[action*='password'] input[type='submit'], form[action*='password'] button, button:has-text('Enter')"
    )
    .first();
  await submit.click({ force: true });
  await page.waitForTimeout(2000);
  const still = /\/password\/?$/.test(new URL(page.url()).pathname);
  const gate = await waitOutCheckpoint(page);
  return { unlocked: !still && gate.ok, url: page.url(), checkpoint: gate };
}
