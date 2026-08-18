# Ali (ikas) — Mod A inventory todo

**Status:** capture complete. 25 observations · 96 official PNGs · 0 new schemas · leftovers in `candidates/ali-leftovers.md`.

## Identity

- Theme: Ali
- Developer: ikascom
- Slug: `ali`
- Preset: `default`
- Platform: **ikas** (not Shopify)
- Official demo: https://dev-alitheme.ikas.shop/
- Theme Store: https://themes.ikas.com/themes/4857cf85-064f-42ba-afc6-9aba4d5b8a43
- Theme Store UUID: `4857cf85-064f-42ba-afc6-9aba4d5b8a43`
- `storefrontThemeId` (read from `__IKAS_DATA__`): `74f53e77-93a4-4e2f-b000-749142d53f82`
- `storefrontId`: `d61280e7-8d90-4733-a630-98bcd92d60ba`

## Rules

- Walk only `https://dev-alitheme.ikas.shop/` — do not invent a host.
- Official `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` at 375 / 768 / 1440.
- 0 new schemas unless a layout is truly new (else leftover).
- Stop: email, account, checkout, newsletter submit, PII.
- Write only: `observations/ali/` · `evidence/ali/` · `todo/ali.md` · `candidates/ali-leftovers.md`.

## Walk (home → PDP → PLP → search → cart → about/contact → FAQ → blog → 404)

- [x] Home `/` (`INDEX`) — 15 observations (12 sections + 3 globals)
- [x] PDP `/puffer-laptop-sleeve-14-` (`PRODUCT`) — `product-info-main` (sleeve, not Kahve Paketi)
- [x] PLP `/tum-urunler` (`CATEGORY`, 30 ürün) — `product-showcase-grid-plp`
- [x] Search `/search?s=kahve` (`SEARCH`, 1 ürün) — `search-results` (real filter is `?s=`, not `?q=`)
- [x] Cart `/cart` (`CART`) — `cart-page-main` (empty + filled + qty)
- [x] About — **no dedicated page** (`/pages/hakkimizda` → 404). Story lives in home `section.ali-srt`. Leftover.
- [x] Contact `/pages/iletisim` (`CUSTOM`) — `lead-capture-form` (no submit)
- [x] FAQ `/pages/sss` (`CUSTOM`) — `faq-collapsible-tabs`
- [x] Blog list `/blog` (`BLOG_INDEX`) — `blog-list-main`
- [x] Blog post `/blog/french-press-sadece-bitki-cayi-icin-degildir-french-press-ile-kremsi-sut-kopugu-yapimi` (`BLOG`) — `blog-post-main`
- [x] 404 `/404-qante-does-not-exist` (`NOT_FOUND`) — `page-content-main`
- [x] Policy `/pages/iade-kosullari` (`CUSTOM`) — `page-content-main` (accordion)

## Interact

- [x] Nav / mega — **no mega**. Hamburger at 375/768/1440. `navigation-header-mega` 3vp + findings.
- [x] Search overlay — Ara → “Ne aramıştınız?” + POPÜLER ARAMALAR + ÖNE ÇIKAN ÜRÜNLER; fill `kahve` → 1 sonuç. 375/768/1440.
- [x] Mobile menu 375/768 — also captured at 1440. Open + KAHVE submenu (`Geri` + 5 coffee links).
- [x] Cart empty / filled / qty — drawer + page. Sleeve Black ₺18 → plus → ₺36. Checkout/kupon not clicked.
- [x] One PDP option — COLOR Black → Gray via `button.ali-vp__swatch[title="Gray"]` at 375/768/1440.

## Captures

- [x] Official `capture-observation.mjs` 375/768/1440 for all 25 observations
- [x] Official `capture-interaction.mjs` for header / search / menu / cart drawer / cart page / PDP
- [x] Pixel-check every `*-changed.png` vs `*-initial.png`; write `stateFindings`
- [x] Remap home trust strip `promo-scrolling-marquee` → `trust-icon-row` after pixel-check (4-col hexagon checks, not a scroller)

## Validate

- [x] `npm run validate` — expect 0 errors (schemas unchanged)

## Do not

- Do not invent Shopify fields (`Shopify.theme` is ABSENT).
- Do not write theme code.
- Do not merge the PR.
- Do not submit email / account / checkout / newsletter / PII.
