/**
 * Shopify storefront password wall.
 * Password: observation.storefrontPassword or QANTE_STOREFRONT_PASSWORD.
 * Official Speedo Live Demo forms POST the published storefront password
 * (Luxora product page hidden field = "1") — not a guessed host.
 */
export function storefrontPasswordFrom(obs) {
  return String(
    obs?.storefrontPassword || process.env.QANTE_STOREFRONT_PASSWORD || ""
  ).trim();
}

export async function unlockStorefrontIfNeeded(page, password) {
  const pwd = String(password || process.env.QANTE_STOREFRONT_PASSWORD || "").trim();
  if (!pwd) return { unlocked: false, reason: "no-password" };

  const url = page.url();
  const title = await page.title().catch(() => "");
  const onWall =
    /\/password\/?(\?|$)/i.test(url) ||
    /\(password:/i.test(title) ||
    (await page.locator('form[action*="/password"] input[name="password"]').count()) > 0;

  if (!onWall) return { unlocked: false, reason: "not-on-wall" };

  const form = page.locator('form[action*="/password"]').first();
  if (await form.count()) {
    const field = form.locator('input[name="password"]').first();
    if (await field.count()) {
      await field.fill(pwd).catch(() => {});
    }
    await Promise.all([
      page.waitForNavigation({ waitUntil: "domcontentloaded", timeout: 30000 }).catch(() => {}),
      form.evaluate((el, value) => {
        const input = el.querySelector('input[name="password"]');
        if (input) input.value = value;
        el.submit();
      }, pwd),
    ]);
    await page.waitForTimeout(1200);
    return { unlocked: !/\/password\/?(\?|$)/i.test(page.url()), url: page.url() };
  }

  const origin = new URL(page.url()).origin;
  await page.request.post(`${origin}/password`, {
    form: { form_type: "storefront_password", password: pwd },
    maxRedirects: 5,
  });
  await page.waitForTimeout(400);
  return { unlocked: true, url: page.url(), via: "request" };
}

/** Navigate; if the official demo password wall appears, unlock and retry once. */
export async function gotoUnlocked(page, url, password) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
  const r = await unlockStorefrontIfNeeded(page, password);
  if (r.unlocked || /\/password\/?(\?|$)/i.test(page.url())) {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
  }
  return r;
}
