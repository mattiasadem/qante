# Todo — Rhone

*Kaynak:* https://www.rhone.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* Theme Store / `Shopify.theme.name` / `schema_name` **yok**. `Shopify.theme` boş nesne. Shop `rhone.myshopify.com`. Vitrin **custom Nuxt** (`#__nuxt`, `/_nuxt/*.js`) + **Nacelle** + Shopify backend.

**Durum:** Mod A walk + resmi 3vp + interact (devam)  
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
`Rhone · default · Nuxt+Nacelle · tema adı yok · home→PDP→PLP→search→cart→content→footer→mobile · 29 obs · PNG TBD · 0 yeni şema · leftover candidates/rhone-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ obs | [ ] capture |
| Hero video / mosaic / shop-your-day / DY tabs / sbs / Tolstoy / pre-footer | ✅ obs | [ ] |
| Mega / search overlay / cart drawer / mobile menu | ✅ interact adımları | [ ] |
| PDP `/products/mens-origin-tee-slim-fit/` | ✅ obs | [ ] |
| PLP `/collections/mens-view-all/` | ✅ obs | [ ] |
| Search `/search?q=tee` | ✅ obs | [ ] |
| Cart `/cart/` + drawer | ✅ obs | [ ] |
| About `/pages/about-us/` | ✅ 3 temsilci | [ ] |
| Terms `/pages/terms-of-use/` | ✅ | [ ] |
| Returns `/pages/returns/` | ✅ 1 temsilci | [ ] |
| Store locator `/store-locator/` | ✅ heading | [ ] |
| Mental Fitness `/pages/mental-fitness/` | ✅ 1 temsilci | [ ] |
| NYC / 12 Pursuits / New to Rhone | leftover | — |
| FAQ / Resale / Contact / Blog / 404 | leftover | — |
| Newsletter / login / return portal | ⛔ PII yok | — |

---

## Bileşen roster (29)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | media-video-hero | home | [ ] | [x] | reuse | [ ] |
| 4 | media-mosaic-grid | home | [ ] | [x] | reuse | [ ] |
| 5 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 6 | product-showcase-tabs | home | [ ] | [x] | reuse | [ ] |
| 7 | editorial-image-with-text | home | [ ] | [x] | reuse | [ ] |
| 8 | media-shop-the-feed | home | [ ] | [x] | reuse | [ ] |
| 9 | collection-nav-image-cards.2 | home | [ ] | [x] | reuse | [ ] |
| 10 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 11 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 12 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 13 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 14 | navigation-breadcrumbs | product-detail | [ ] | [x] | reuse | [ ] |
| 15 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 16 | media-lookbook-slider | product-detail | [ ] | [x] | reuse | [ ] |
| 17 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 18 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 19 | editorial-rich-text | collection | [ ] | [x] | reuse | [ ] |
| 20 | product-showcase-related | collection | [ ] | [x] | reuse | [ ] |
| 21 | search-results | search | [ ] | [x] | reuse | [ ] |
| 22 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 23–25 | about (3) | about-brand | [ ] | [x] | reuse | [ ] |
| 26 | page-content-main | policy | [ ] | [x] | reuse | [ ] |
| 27 | editorial-rich-text | returns | [ ] | [x] | reuse | [ ] |
| 28 | page-content-main | store-locator | [ ] | [x] | reuse | [ ] |
| 29 | collection-nav-image-cards | mental-fitness | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | 3vp | Not |
|---|---|---|---|
| navigation-header-mega | initial, open | [ ] 1440 mega | 375/768 hamburger |
| global-predictive-search | input | [ ] | Origin Tee |
| global-cart-drawer | initial, filled, changed | [ ] | Origin Tee qty |
| global-menu-drawer | open | [ ] 375/768 | 1440 N/A |
| product-showcase-tabs | changed | [ ] | For her |
| product-info-main | changed | [ ] | renk swatch |

---

## Aday / leftover

[`candidates/rhone-leftovers.md`](../candidates/rhone-leftovers.md)

---

## Evidence backlog

- [ ] Home static 3vp
- [ ] Interact (mega/search/cart/menu/tabs/swatch)
- [ ] PDP / PLP / search / cart 3vp
- [ ] Content templates 3vp
- [ ] Validator
