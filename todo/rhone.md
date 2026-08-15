# Todo — Rhone

*Kaynak:* https://www.rhone.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* Theme Store / `Shopify.theme.name` / `schema_name` **yok**. `Shopify.theme` boş nesne. Shop `rhone.myshopify.com`. Vitrin **custom Nuxt** (`#__nuxt`, `/_nuxt/*.js`) + **Nacelle** + Shopify backend.

**Durum:** Mod A walk + resmi 3vp + interact (kapanış)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/rhone/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/rhone/`, `evidence/rhone/`, `todo/rhone.md`, `candidates/rhone-*.md` |

**Kapsam satırı:**  
`Rhone · default · Nuxt+Nacelle · tema adı yok · home→PDP→PLP→search→cart→content→footer→mobile · 28 obs · 104 PNG · 0 yeni şema · leftover candidates/rhone-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ obs | [x] |
| Hero video / mosaic / shop-your-day / DY tabs / sbs / Tolstoy / pre-footer | ✅ obs | [x] |
| Mega / search overlay / cart drawer / mobile menu | ✅ interact | [x] |
| PDP `/products/mens-origin-tee-slim-fit/` | ✅ obs | [x] |
| PLP `/collections/mens-view-all/` | ✅ obs | [x] |
| Search `/search?q=tee` | ✅ obs | [x] |
| Cart `/cart/` + drawer | ✅ obs | [x] |
| About `/pages/about-us/` | ✅ 3 temsilci | [x] |
| Terms `/pages/terms-of-use/` | ✅ | [x] |
| Returns `/pages/returns/` | ✅ 1 temsilci | [x] |
| Store locator `/store-locator/` | ✅ heading | [x] |
| Mental Fitness `/pages/mental-fitness/` | ✅ 1 temsilci | [x] |
| NYC / 12 Pursuits / New to Rhone | leftover | — |
| FAQ / Resale / Contact / Blog / 404 | leftover | — |
| Newsletter / login / return portal | ⛔ PII yok | — |

---

## Bileşen roster (28)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | media-video-hero | home | [x] | [x] | reuse | [x] |
| 4 | media-mosaic-grid | home | [x] | [x] | reuse | [x] |
| 5 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 6 | product-showcase-tabs | home | [x] | [x] | reuse | [x] |
| 7 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 8 | media-shop-the-feed | home | [x] | [x] | reuse | [x] |
| 9 | collection-nav-image-cards.2 | home | [x] | [x] | reuse | [x] |
| 10 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 11 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 12 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 13 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 14 | navigation-breadcrumbs | product-detail | [x] | [x] | reuse | [x] |
| 15 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 16 | media-lookbook-slider | product-detail | [x] | [x] | reuse | [x] |
| 17 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 18 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 19 | editorial-rich-text | collection | [x] | [x] | reuse | [x] |
| 20 | search-results | search | [x] | [x] | reuse | [x] |
| 21 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 22–24 | about (3) | about-brand | [x] | [x] | reuse | [x] |
| 25 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 26 | editorial-rich-text | returns | [x] | [x] | reuse | [x] |
| 27 | page-content-main | store-locator | [x] | [x] | reuse | [x] |
| 28 | collection-nav-image-cards | mental-fitness | [x] | [x] | reuse | [x] |

PLP DY `#dy-recommendations-656481` leftover (4vp tavan).

---

## Interact (piksel değişince)

| Bileşen | State | 3vp | Not |
|---|---|---|---|
| navigation-header-mega | initial, open | [x] 1440 mega | 375/768 hamburger |
| global-predictive-search | input | [x] 1440 | Origin Tee; 375/768 leftover |
| global-cart-drawer | initial, filled, changed | [x] 3vp | UI ATC; qty 1→2 |
| global-menu-drawer | open | [x] 375/768 | 1440 N/A |
| product-showcase-tabs | changed | [x] 768/1440 | 375 iskelet |
| product-info-main | changed | [x] 768/1440 | 375 aynı kare |

---

## Aday / leftover

[`candidates/rhone-leftovers.md`](../candidates/rhone-leftovers.md)

---

## Evidence backlog

- [x] Home static 3vp
- [x] Interact (mega/search/cart/menu/tabs/swatch)
- [x] PDP / PLP / search / cart 3vp
- [x] Content templates 3vp
- [x] Validator
