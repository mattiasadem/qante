/**
 * Shopify storefront password wall — vendor-published demo password.
 * Observation.storefrontPassword veya observations/{tema}/_auth.json.
 * Başka host uydurma; yalnız verilen URL'nin /password formu.
 */
import fs from "fs";
import path from "path";

export function resolveStorefrontPassword(obs, qanteRoot) {
  if (obs?.storefrontPassword) return String(obs.storefrontPassword);
  const kaynak = obs?.kaynak;
  if (!kaynak || !qanteRoot) return null;
  const authPath = path.join(qanteRoot, "observations", kaynak, "_auth.json");
  if (!fs.existsSync(authPath)) return null;
  try {
    const auth = JSON.parse(fs.readFileSync(authPath, "utf8"));
    return auth.storefrontPassword || auth.password || null;
  } catch {
    return null;
  }
}

export async function unlockStorefrontIfNeeded(page, { password } = {}) {
  if (!password) return false;
  const url = page.url();
  const formCount = await page
    .locator('form[action*="password"], input[type="password"][name="password"]')
    .count()
    .catch(() => 0);
  const onPassword = /\/password\/?(\?|$)/.test(url) || formCount > 0;
  if (!onPassword) return false;

  const input = page.locator('input[type="password"], input[name="password"]').first();
  if (await input.count()) {
    await input.fill(String(password));
    const submit = page
      .locator(
        'form[action*="password"] button[type="submit"], form[action*="password"] input[type="submit"], button[type="submit"]'
      )
      .first();
    if (await submit.count()) {
      await submit.click({ timeout: 5000 }).catch(() => input.press("Enter"));
    } else {
      await input.press("Enter");
    }
    await page.waitForTimeout(2000);
    return true;
  }

  const origin = new URL(page.url()).origin;
  await page.request.post(`${origin}/password`, {
    form: { form_type: "storefront_password", utf8: "✓", password: String(password) },
  });
  await page.waitForTimeout(800);
  return true;
}
