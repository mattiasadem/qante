# Todo — Cuts (cutsclothing.com)

*Kaynak:* https://www.cutsclothing.com · *Preset:* `default`  
*Tema (storefront):* **görünmüyor** — uydurulmadı. `powered-by`: Shopify, Oxygen, Hydrogen, **Hydrogen + Pack Digital**. Shop: `cuts-clothing.myshopify.com`.

**Durum:** Mod A walk yazıldı — resmi 3vp / interact kuyrukta  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/cuts/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/cuts/`, `evidence/cuts/`, `todo/cuts.md`, `candidates/cuts-*.md` |

**Kapsam satırı:**  
`Cuts · default · Hydrogen+Pack Digital · home→PDP→PLP→search→cart→content→footer→mobile · 30 obs · 0 yeni şema · leftover: blog/locator/404/Kustomer/Okendo`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | ✅ yazıldı | ⬜ capture |
| Mega / search overlay / cart drawer / mobile menu | ✅ interact adımları | ⬜ capture |
| PDP `/products/white-crew-curve-hem` (AO Curve-Hem Tee) | ✅ | ⬜ |
| PLP `/collections/bestsellers` | ✅ | ⬜ |
| Search `/search?q=tee` | ✅ | ⬜ |
| Cart `/cart` boş + drawer | ✅ | ⬜ filled |
| About `/pages/about-us` | ✅ 2 temsilci | ⬜ |
| Rewards `/pages/cuts-club` | ✅ hero + FAQ | ⬜ |
| Policy `/pages/privacy-policy` | ✅ | ⬜ |
| Returns `/pages/returns` | ✅ hero | ⬜ |
| Blog `/blogs/blog` | ⛔ boş gövde — candidate | — |
| Store locator | ⛔ boş gövde — candidate | — |
| 404 custom | ⛔ candidate | — |
| FAQ / Contact / Size+Fit | ⛔ Kustomer dış | — |
| Newsletter / login / portal form | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 5 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 6 | promo-grid-banner | home | [ ] | [x] | reuse | [ ] |
| 7 | product-showcase-grid-featured.2 | home | [ ] | [x] | reuse | [ ] |
| 8 | hero-slideshow.2 | home | [ ] | [x] | reuse | [ ] |
| 9 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 10 | editorial-image-with-text-overlay | home | [ ] | [x] | reuse | [ ] |
| 11 | editorial-rich-text | home | [ ] | [x] | reuse | [ ] |
| 12 | promo-grid-banner.2 | home | [ ] | [x] | reuse | [ ] |
| 13 | media-shop-the-feed | home | [ ] | [x] | reuse | [ ] |
| 14 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 15 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 16 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 17 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 18 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 19 | product-info-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 20 | features-multicolumn | product-detail | [ ] | [x] | reuse | [ ] |
| 21 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 22 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 23 | search-results | search | [ ] | [x] | reuse | [ ] |
| 24 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 25–26 | about editorial | about-brand | [ ] | [x] | reuse | [ ] |
| 27–28 | rewards hero + FAQ | rewards | [ ] | [x] | reuse | [ ] |
| 29 | page-content-main | policy | [ ] | [x] | reuse | [ ] |
| 30 | editorial-image-with-text-overlay | returns | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişen)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Men hover → mega |
| global-predictive-search | initial, input | boş overlay; `tee` fill |
| global-cart-drawer | initial, filled | boş; ATC beden M |
| global-menu-drawer | open | 375/768 hamburger (1440 N/A) |
| faq-collapsible-tabs | changed | Club benefits accordion |

---

## Aday / leftover

[`candidates/cuts-leftovers.md`](../candidates/cuts-leftovers.md) · [`candidates/cuts-404s.md`](../candidates/cuts-404s.md)

---

## Evidence backlog

- [ ] Claiming 30 obs resmi 3vp
- [ ] Overlay / mega / FAQ interact
- [ ] Cart qty `changed`
- [ ] PLP filter panel `changed`
- [ ] Women mega
- [ ] Newsletter / login / return portal — **yapılmayacak** (PII)
