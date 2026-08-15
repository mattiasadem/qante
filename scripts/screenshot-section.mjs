/**
 * Component sınırı:
 * 1) border box + CSS margin
 * 2) minPad (radius)
 * Section viewport’tan uzunsa → element.screenshot() (clip kırılmaz)
 */

export async function getSectionMarginBox(locator) {
  return locator.evaluate((el) => {
    const r = el.getBoundingClientRect();
    const s = getComputedStyle(el);
    const mt = parseFloat(s.marginTop) || 0;
    const mb = parseFloat(s.marginBottom) || 0;
    const ml = parseFloat(s.marginLeft) || 0;
    const mr = parseFloat(s.marginRight) || 0;
    return {
      borderBox: {
        x: r.x,
        y: r.y,
        width: r.width,
        height: r.height,
      },
      margins: { top: mt, bottom: mb, left: ml, right: mr },
      marginBox: {
        x: r.x - ml,
        y: r.y - mt,
        width: r.width + ml + mr,
        height: r.height + mt + mb,
      },
    };
  });
}

export async function screenshotSectionWithPadding(
  page,
  locator,
  outPath,
  { minPad = 8 } = {}
) {
  await locator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);

  // Short bars (pills, filter, search header) land under position:sticky
  // announcement+header. Nudge so the clip is the section, not chrome.
  await locator.evaluate((el) => {
    const r = el.getBoundingClientRect();
    if (r.height > 320) return;
    let coverBottom = 0;
    for (const n of document.querySelectorAll(
      "header, .global-header, .global-announcement, [class*='announcement']"
    )) {
      if (n === el || n.contains(el) || el.contains(n)) continue;
      const s = getComputedStyle(n);
      if (s.position !== "fixed" && s.position !== "sticky") continue;
      const hr = n.getBoundingClientRect();
      if (hr.height < 16) continue;
      if (hr.bottom > r.top + 2 && hr.top < r.bottom - 2) {
        coverBottom = Math.max(coverBottom, hr.bottom);
      }
    }
    if (coverBottom > r.top) {
      const delta = coverBottom - r.top + 8;
      window.scrollBy(0, -Math.min(delta, window.scrollY));
    }
  });
  await page.waitForTimeout(200);

  const metrics = await getSectionMarginBox(locator);
  const { borderBox, margins } = metrics;
  const vp = page.viewportSize() || { width: 1440, height: 900 };

  // Full-bleed (genişlik ≈ viewport) ise yatay minPad ekleme — taşar.
  const fullBleedX =
    borderBox.x <= 1 && borderBox.width >= vp.width - 2;

  const padT = Math.max(margins.top, minPad);
  const padB = Math.max(margins.bottom, minPad);
  const padL = fullBleedX ? Math.max(margins.left, 0) : Math.max(margins.left, minPad);
  const padR = fullBleedX ? Math.max(margins.right, 0) : Math.max(margins.right, minPad);

  const neededH = borderBox.height + padT + padB;

  // Sadece dikey sığmazsa element screenshot
  if (neededH > vp.height - 4) {
    await locator.screenshot({ path: outPath });
    return {
      mode: "element",
      reason: "taller-than-viewport",
      margins,
      borderBox,
      appliedPad: { top: 0, bottom: 0, left: 0, right: 0 },
      minPad,
      fullBleedX,
    };
  }

  // Üst pad için scroll hizala
  const absoluteTop =
    (await locator.evaluate((el) => {
      const r = el.getBoundingClientRect();
      return r.top + window.scrollY;
    })) - padT;
  await page.evaluate((y) => window.scrollTo(0, Math.max(0, y)), absoluteTop);
  await page.waitForTimeout(200);

  const after = await getSectionMarginBox(locator);
  const fullBleed2 =
    after.borderBox.x <= 1 && after.borderBox.width >= vp.width - 2;
  const padT2 = Math.max(after.margins.top, minPad);
  const padB2 = Math.max(after.margins.bottom, minPad);
  const padL2 = fullBleed2
    ? Math.max(after.margins.left, 0)
    : Math.max(after.margins.left, minPad);
  const padR2 = fullBleed2
    ? Math.max(after.margins.right, 0)
    : Math.max(after.margins.right, minPad);

  let x = Math.floor(after.borderBox.x - padL2);
  let y = Math.floor(after.borderBox.y - padT2);
  let right = Math.ceil(after.borderBox.x + after.borderBox.width + padR2);
  let bottom = Math.ceil(after.borderBox.y + after.borderBox.height + padB2);

  // Viewport clamp
  x = Math.max(0, x);
  y = Math.max(0, y);
  right = Math.min(vp.width, right);
  bottom = Math.min(vp.height, bottom);

  const width = right - x;
  const height = bottom - y;

  if (width < 8 || height < 8) {
    await locator.screenshot({ path: outPath });
    return {
      mode: "element-fallback",
      reason: "invalid-clip",
      margins: after.margins,
      borderBox: after.borderBox,
      clipAttempt: { x, y, width, height },
      minPad,
    };
  }

  const clip = { x, y, width, height };
  await page.screenshot({ path: outPath, clip });
  return {
    mode: "margin-box",
    clip,
    margins: after.margins,
    borderBox: after.borderBox,
    appliedPad: { top: padT2, bottom: padB2, left: padL2, right: padR2 },
    minPad,
  };
}
