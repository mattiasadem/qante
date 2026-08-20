# Todo — Outdoor Voices (outdoorvoices.com)

*Kaynak:* https://www.outdoorvoices.com/ · *Preset:* `default`  
*Tema (storefront):* **Outdoor Voices Theme 0.1.0** · `schema_name` Outdoor Voices Theme · `theme_store_id` **null** · shop `outdoor-voices.myshopify.com` · role main · handle August OV Outdoors_Kindred

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/outdoorvoices/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| PNG | **90** |
| Validator | 65 şema · 0 error · 0 warn |
| Parallel | yalnız `observations/outdoorvoices/`, `evidence/outdoorvoices/`, `todo/outdoorvoices.md`, `candidates/outdoorvoices-leftovers.md` |

**Kapsam satırı:**  
`Outdoor Voices · default · Outdoor Voices Theme 0.1.0 · home→PDP→PLP→search→cart-drawer→blog→about→footer · 27 obs · 90 PNG · 0 yeni şema · leftover: Okendo reviews, FAQ/help-center, Doofinder`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ resmi |
| Mega / search overlay / cart drawer / mobile menu | ✅ interact | ✅ |
| PDP RecTrek Zip Pant | ✅ | ✅ |
| PLP `/collections/w-new-arrivals` | ✅ | ✅ |
| Search `/search?q=pant` | ✅ | ✅ |
| Cart drawer (boş + filled) | ✅ interact | ✅ |
| Blog `/blogs/stories` + post | ✅ | ✅ |
| About `/pages/about-us` | ✅ | ✅ |
| FAQ `/pages/faq` | ⛔ boş gövde | leftover |
| PDP Okendo reviews | ⛔ leftover | — |
| Checkout / login / newsletter submit | ⛔ PII yok | — |

---

## Bileşen roster (27)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | editorial-image-with-text-overlay | home | [x] | [x] | reuse | [x] |
| 4 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 5 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 6 | editorial-image-with-text.2 | home | [x] | [x] | reuse | [x] |
| 7 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 8 | collection-nav-image-cards.2 | home | [x] | [x] | reuse | [x] |
| 9 | promo-grid-banner | home | [x] | [x] | reuse | [x] |
| 10 | editorial-rich-text | home | [x] | [x] | reuse | [x] |
| 11 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 12 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 13 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 14 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 15 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 16 | product-info-tabs | product-detail | [x] | [x] | reuse | [x] |
| 17 | features-multicolumn | product-detail | [x] | [x] | reuse | [x] |
| 18 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 19 | collection-banner | collection | [x] | [x] | reuse | [x] |
| 20 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 21 | search-results | search | [x] | [x] | reuse | [x] |
| 22 | blog-list-main | blog-list | [x] | [x] | reuse | [x] |
| 23 | blog-post-main | blog-post | [x] | [x] | reuse | [x] |
| 24 | editorial-image-with-text-overlay | about-brand | [x] | [x] | reuse | [x] |
| 25 | editorial-rich-text | about-brand | [x] | [x] | reuse | [x] |
| 26 | editorial-image-with-text | about-brand | [x] | [x] | reuse | [x] |
| 27 | editorial-rich-text.2 | about-brand | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişen)

| Bileşen | State | 3vp | Not |
|---|---|---|---|
| navigation-header-mega | initial, open | ✅ | open yalnız 1440 Women hover mega |
| global-predictive-search | initial, input | ✅ | Doofinder popular + pant input |
| global-cart-drawer | initial, filled | ✅ | boş drawer + RecTrek ATC |
| global-menu-drawer | open | ✅ | 375/768 hamburger; 1440 N/A |
| product-info-main | initial, changed | ✅ | buybox + beden pill |

---

## Aday / leftover

[`candidates/outdoorvoices-leftovers.md`](../candidates/outdoorvoices-leftovers.md)
