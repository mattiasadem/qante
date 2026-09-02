/**
 * Shopify storefront password wall (public demo unlock, not an account).
 * Observation: storePassword — vendor-published demo password (Speedo: "1").
 * Env: QANTE_STORE_PASSWORD
 *
 * Detects /password (or titled password page), POSTs the form, returns true
 * if a wall was handled so the caller can re-goto the intended URL.
 */

export async function unlockStorefrontIfNeeded(page, obs = {}) {
  const password =
    obs.storePassword ||
    obs.password ||
    process.env.QANTE_STORE_PASSWORD ||
    null;

  const url = page.url();
  const title = await page.title().catch(() => "");
  const hasForm = await page
    .locator('form[action="/password"], form[action*="/password"]')
    .count()
    .catch(() => 0);

  const onWall =
    /\/password(\?|$)/i.test(url) ||
    (/password/i.test(title) && hasForm > 0);

  if (!onWall) return false;
  if (!password) {
    console.warn("Storefront password page but observation.storePassword / QANTE_STORE_PASSWORD yok");
    return false;
  }

  const result = await page.evaluate(async (pwd) => {
    const form = document.querySelector(
      'form[action="/password"], form[action*="/password"]'
    );
    if (!form) return { error: "no-form" };
    const fd = new FormData(form);
    fd.set("password", pwd);
    const res = await fetch(form.getAttribute("action") || "/password", {
      method: "POST",
      body: fd,
      credentials: "same-origin",
      redirect: "follow",
    });
    return { ok: res.ok, status: res.status, url: res.url };
  }, password);

  if (result?.error) {
    console.warn("unlock-storefront:", result.error);
    return false;
  }
  return true;
}
