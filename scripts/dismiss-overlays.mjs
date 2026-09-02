/**
 * Screenshot öncesi: cookie, newsletter, modal, floating tab temizliği.
 * Hero / main content içindeki absolute katmanlara DOKUNMA.
 * Temiz değilse throw — SS alma.
 */

function isInsideMainContent(el) {
  return Boolean(
    el.closest(
      "main, #MainContent, [class*='slideshow'], [class*='Slideshow'], [class*='hero'], [class*='Hero'], header, footer, nav"
    )
  );
}

export async function dismissAllOverlays(page, { rounds = 8 } = {}) {
  for (let i = 0; i < rounds; i++) {
    await page.keyboard.press("Escape").catch(() => {});
    await page.waitForTimeout(200);

    const clickSelectors = [
      'button:has-text("Accept all")',
      'button:has-text("Accept All")',
      'button:has-text("Accept")',
      'button:has-text("Allow all")',
      'button:has-text("Allow All")',
      'button:has-text("Got it")',
      'button:has-text("I agree")',
      'button:has-text("Close")',
      '[aria-label="Close"]',
      'button[aria-label*="Close" i]',
      'button[aria-label*="close" i]',
      '[aria-label*="Dismiss" i]',
      ".popup-close",
      ".modal__close",
      ".modal-close",
      "[data-popup-close]",
      "[class*='newsletter'] button[class*='close']",
      "[class*='popup'] button[class*='close']",
    ];

    for (const sel of clickSelectors) {
      try {
        const el = page.locator(sel).first();
        if (await el.isVisible({ timeout: 400 })) {
          const meta = await el
            .evaluate((n) => {
              const cls = (n.className || "").toString();
              const r = n.getBoundingClientRect();
              const a = n.closest("a") || (n.tagName === "A" ? n : null);
              const href = a?.getAttribute("href") || "";
              return {
                chrome:
                  /mobile-menu|minicart|js-search-toggle|leaderboard|global-overlay|js-global-overlay|raffle-popup-overlay/.test(
                    cls
                  ),
                w: r.width,
                h: r.height,
                href,
              };
            })
            .catch(() => null);
          if (!meta) continue;
          // Chrome toggles + full-viewport overlays: force-click opens menu
          // or hits a promo (Bandit blog → /pages/bandit-world-tour-2026).
          if (meta.chrome || meta.w > 200 || meta.h > 80) continue;
          if (
            meta.href &&
            !meta.href.startsWith("#") &&
            !meta.href.startsWith("javascript") &&
            meta.href !== "/"
          ) {
            continue;
          }
          await el.click({ force: true, timeout: 1000 });
          await page.waitForTimeout(250);
        }
      } catch {}
    }

    await page.evaluate(() => {
      const kill = (el) => el?.style?.setProperty("display", "none", "important");
      const inMain = (el) =>
        Boolean(
          el.closest(
            "main, #MainContent, [class*='slideshow'], [class*='Slideshow'], [class*='hero'], [class*='Hero'], header, footer, nav"
          )
        );

      document.querySelectorAll("*").forEach((el) => {
        if (inMain(el)) return;

        const text = (el.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
        const cls = (el.className || "").toString().toLowerCase();
        const s = getComputedStyle(el);
        const r = el.getBoundingClientRect();

        // Kenar floating promo tab (body altında)
        if (
          (text.includes("special offers") || text.includes("for you")) &&
          r.width < 90 &&
          r.height > 120 &&
          (r.right > innerWidth - 100 || r.left < 100)
        ) {
          kill(el);
          return;
        }

        if (s.position !== "fixed") return;
        if (s.visibility === "hidden" || s.opacity === "0") return;
        const id = (el.id || "").toLowerCase();
        const tag = (el.tagName || "").toLowerCase();
        if (
          id === "search-drawer" ||
          id === "cart-drawer" ||
          tag === "search-drawer" ||
          tag === "cart-drawer"
        ) {
          return;
        }

        const coversCenter =
          r.width > 360 &&
          r.height > 280 &&
          r.left < innerWidth * 0.5 &&
          r.right > innerWidth * 0.5 &&
          r.top < innerHeight * 0.55 &&
          r.bottom > innerHeight * 0.35;

        const looksModal =
          cls.includes("popup") ||
          cls.includes("modal") ||
          cls.includes("newsletter") ||
          cls.includes("dialog") ||
          el.getAttribute("role") === "dialog";

        const isCookie =
          text.includes("cookie") && r.height < 420 && r.width > 200;

        if (coversCenter || (looksModal && r.width > 280) || isCookie) {
          kill(el);
        }
      });

      document.querySelectorAll(
        "[class*='overlay'], [class*='backdrop'], [class*='scrim']"
      ).forEach((el) => {
        if (inMain(el)) return;
        const s = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        if (
          s.position === "fixed" &&
          r.width > innerWidth * 0.5 &&
          r.height > innerHeight * 0.5
        ) {
          kill(el);
        }
      });

      document.querySelectorAll("newsletter-popup").forEach((el) => {
        el.style?.setProperty("display", "none", "important");
        el.removeAttribute("open");
        el.hidden = true;
      });

      // Speedo / third-party FOMO toast — fixed corner, not a section
      document.querySelectorAll("#prodNotify").forEach((el) => {
        el.style?.setProperty("display", "none", "important");
        el.classList.remove("active");
        el.hidden = true;
      });

      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    });

    await page.waitForTimeout(300);
  }
}

export async function findBlockingOverlays(page) {
  return page.evaluate(() => {
    const inMain = (el) =>
      Boolean(
        el.closest(
          "main, #MainContent, [class*='slideshow'], [class*='Slideshow'], [class*='hero'], [class*='Hero'], header, footer, nav"
        )
      );

    const blockers = [];
    document.querySelectorAll("*").forEach((el) => {
      if (inMain(el)) return;
      const s = getComputedStyle(el);
      if (s.display === "none" || s.visibility === "hidden" || s.opacity === "0")
        return;
      if (s.position !== "fixed") return;
      const r = el.getBoundingClientRect();
      if (r.width < 40 || r.height < 40) return;

      const coversCenter =
        r.width > 360 &&
        r.height > 280 &&
        r.left < innerWidth * 0.5 &&
        r.right > innerWidth * 0.5 &&
        r.top < innerHeight * 0.55 &&
        r.bottom > innerHeight * 0.35;

      const edgeTab =
        r.width < 90 &&
        r.height > 120 &&
        (r.right > innerWidth - 100 || r.left < 100) &&
        (el.textContent || "").toLowerCase().includes("offer");

      if (coversCenter || edgeTab) {
        blockers.push({
          tag: el.tagName,
          cls: (el.className || "").toString().slice(0, 80),
          text: (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 60),
          w: Math.round(r.width),
          h: Math.round(r.height),
        });
      }
    });
    return blockers.slice(0, 8);
  });
}

export async function assertCleanForScreenshot(page) {
  const blockers = await findBlockingOverlays(page);
  if (blockers.length) {
    throw new Error(
      `Screenshot iptal: ekranda hâlâ overlay var:\n${JSON.stringify(blockers, null, 2)}`
    );
  }
}
