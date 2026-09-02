/**
 * Public storefront password unlock (vendor-published demo passwords only).
 * Used by capture-observation / capture-interaction / scan-affordances
 * when a walk host is behind Shopify /password.
 */

export const PUBLIC_DEMO_PASSWORDS = {
  "speedo-candles-store.myshopify.com": "1",
};

/** Playwright default UA triggers Shopify checkpoint after a burst. */
export const STOREFRONT_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";

function isCheckpointTitle(title) {
  return /just a moment|verifying your connection|needs to be verified/i.test(
    title || ""
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
  const password = obs.storePassword || PUBLIC_DEMO_PASSWORDS[host] || null;
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
  await input.fill(password);
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
