# Todo — BREZ (drinkbrez.com)

*Kaynak:* https://www.drinkbrez.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **BREZ Original Production** · `schema_name`: Dawn · `schema_version`: 9.0.0 · `theme_store_id`: null (custom Dawn)

**Durum:** Mod A walk roster yazıldı — resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/brez/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/brez/`, `evidence/brez/`, `todo/brez.md`, `candidates/brez-*.md` |

**Kapsam satırı (hedef):**  
`BREZ · default · BREZ Original Production (Dawn 9.0 custom) · home→PDP→PLP→search→cart→content→footer→mobile · 41 obs · 0 yeni şema · leftover: age-gate / Okendo / Rebuy / Stockist / Gorgias / 404`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer | roster | [ ] |
| Mega / search / cart drawer / mobile menu | roster | [ ] |
| PDP `/products/og` | roster | [ ] |
| PLP `/collections/shop-all` | roster | [ ] |
| Search `/search?q=og` | roster | [ ] |
| Cart `/cart` | roster | [ ] |
| FAQ `/pages/faq` | roster | [ ] |
| Contact `/pages/contact` | roster | [ ] |
| Recipes `/pages/mocktail-recipes` | roster | [ ] |
| Store locator `/pages/storelocator` | leftover | [ ] |
| Subscribe `/pages/subscription` | roster | [ ] |
| Bundle `/pages/build-your-own-bundle` | roster | [ ] |
| Policy privacy | roster | [ ] |
| Warning / labs | roster | [ ] |
| 404 / blogs/news | leftover | [ ] |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | [x] | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | [x] | [ ] |
| 3 | media-video-hero | home | [ ] | [x] | [x] | [ ] |
| 4 | editorial-image-with-text | home | [ ] | [x] | [x] | [ ] |
| 5 | editorial-image-with-text-2 | home | [ ] | [x] | [x] | [ ] |
| 6 | product-showcase-grid-featured | home | [ ] | [x] | [x] | [ ] |
| 7 | product-showcase-grid-featured-2 | home | [ ] | [x] | [x] | [ ] |
| 8 | promo-grid-banner | home | [ ] | [x] | [x] | [ ] |
| 9 | editorial-rich-text | home | [ ] | [x] | [x] | [ ] |
| 10 | testimonial-quote-carousel | home | [ ] | [x] | [x] | [ ] |
| 11 | faq-collapsible-tabs | home | [ ] | [x] | [x] | [ ] |
| 12 | editorial-layered-images | home | [ ] | [x] | [x] | [ ] |
| 13 | footer-columns-newsletter | home | [ ] | [x] | [x] | [ ] |
| 14 | global-cart-drawer | home | [ ] | [x] | [x] | [ ] |
| 15 | global-predictive-search | home | [ ] | [x] | [x] | [ ] |
| 16 | global-menu-drawer | home | [ ] | [x] | [x] | [ ] |
| 17 | product-info-main | product-detail | [ ] | [x] | [x] | [ ] |
| 18 | faq-collapsible-tabs | product-detail | [ ] | [x] | [x] | [ ] |
| 19 | editorial-custom-content | product-detail | [ ] | [x] | [x] | [ ] |
| 20 | product-showcase-related | product-detail | [ ] | [x] | [x] | [ ] |
| 21 | collection-banner | collection | [ ] | [x] | [x] | [ ] |
| 22 | product-showcase-grid-plp | collection | [ ] | [x] | [x] | [ ] |
| 23 | search-results | search | [ ] | [x] | [x] | [ ] |
| 24 | cart-page-main | cart | [ ] | [x] | [x] | [ ] |
| 25 | faq-collapsible-tabs | faq-support | [ ] | [x] | [x] | [ ] |
| 26 | editorial-image-with-text-overlay | contact | [ ] | [x] | [x] | [ ] |
| 27 | lead-capture-form | contact | [ ] | [x] | [x] | [ ] |
| 28 | editorial-custom-content | recipes | [ ] | [x] | [x] | [ ] |
| 29 | media-shop-the-feed | recipes | [ ] | [x] | [x] | [ ] |
| 30 | page-content-main | store-locator | [ ] | [x] | leftover | [ ] |
| 31–35 | subscribe (5) | subscribe | [ ] | [x] | [x] | [ ] |
| 36–37 | bundle (2) | bundle | [ ] | [x] | [x] | [ ] |
| 38 | page-content-main | policy | [ ] | [x] | [x] | [ ] |
| 39 | page-content-main | warning | [ ] | [x] | [x] | [ ] |
| 40 | editorial-rich-text | labs | [ ] | [x] | [x] | [ ] |
| 41 | page-content-main | not-found | [ ] | [x] | leftover | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | open | 1440 Shop details mega |
| global-predictive-search | input | katalog `og` |
| global-cart-drawer | initial / filled / changed | Rebuy; ATC `/products/og` |
| global-menu-drawer | open | 375/768 hamburger |
| faq-collapsible-tabs | changed | home veya FAQ ilk soru |
| product-info-main | changed | Strength 5→10mg |

---

## Aday / leftover

[`candidates/brez-leftovers.md`](../candidates/brez-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / FAQ / strength interact
- [ ] Age-gate 21+ (dismiss overlay öldürüyor; cookie yok)
- [ ] Newsletter / contact / checkout — **yapılmayacak** (PII)
