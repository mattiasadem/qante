# Todo — Cuts (cutsclothing.com)

*Kaynak:* https://www.cutsclothing.com · *Preset:* `default`  
*Tema (storefront):* **görünmüyor** — uydurulmadı. `powered-by`: Shopify, Oxygen, Hydrogen, **Hydrogen + Pack Digital**. Shop: `cuts-clothing.myshopify.com`.

**Durum:** Mod A walk + resmi 3vp + interact bitti  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/cuts/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| PNG | **111** (30 obs 3vp + overlay/interact ekleri) |
| Validator | 65 şema · 0 error · 0 warn |
| Parallel | yalnız `observations/cuts/`, `evidence/cuts/`, `todo/cuts.md`, `candidates/cuts-*.md` |

**Kapsam satırı:**  
`Cuts · default · Hydrogen+Pack Digital · home→PDP→PLP→search→cart→content→footer→mobile · 30 obs · 111 PNG · 0 yeni şema · leftover: blog/locator/404/Kustomer/Okendo/qty/filters`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | ✅ | ✅ |
| Mega / search overlay / cart drawer / mobile menu | ✅ | ✅ interact |
| PDP `/products/white-crew-curve-hem` (AO Curve-Hem Tee) | ✅ | ✅ |
| PLP `/collections/bestsellers` | ✅ | ✅ |
| Search `/search?q=tee` | ✅ | ✅ |
| Cart `/cart` boş + drawer | ✅ | ✅ filled |
| About `/pages/about-us` | ✅ 2 temsilci | ✅ |
| Rewards `/pages/cuts-club` | ✅ hero + FAQ | ✅ changed |
| Policy `/pages/privacy-policy` | ✅ | ✅ |
| Returns `/pages/returns` | ✅ hero | ✅ |
| Blog `/blogs/blog` | ⛔ boş gövde — candidate | — |
| Store locator | ⛔ boş gövde — candidate | — |
| 404 custom | ⛔ candidate | — |
| FAQ / Contact / Size+Fit | ⛔ Kustomer dış | — |
| Newsletter / login / portal form | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 5 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 6 | promo-grid-banner | home | [x] | [x] | reuse | [x] |
| 7 | product-showcase-grid-featured.2 | home | [x] | [x] | reuse | [x] |
| 8 | hero-slideshow.2 | home | [x] | [x] | reuse | [x] |
| 9 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 10 | editorial-image-with-text-overlay | home | [x] | [x] | reuse | [x] |
| 11 | editorial-rich-text | home | [x] | [x] | reuse | [x] |
| 12 | promo-grid-banner.2 | home | [x] | [x] | reuse | [x] |
| 13 | media-shop-the-feed | home | [x] | [x] | reuse | [x] |
| 14 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 15 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 16 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 17 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 18 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 19 | product-info-tabs | product-detail | [x] | [x] | reuse | [x] |
| 20 | features-multicolumn | product-detail | [x] | [x] | reuse | [x] |
| 21 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 22 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 23 | search-results | search | [x] | [x] | reuse | [x] |
| 24 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 25–26 | about editorial | about-brand | [x] | [x] | reuse | [x] |
| 27–28 | rewards hero + FAQ | rewards | [x] | [x] | reuse | [x] |
| 29 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 30 | editorial-image-with-text-overlay | returns | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişen)

| Bileşen | State | 3vp | Not |
|---|---|---|---|
| navigation-header-mega | initial, open | ✅ | open yalnız 1440 Men hover (FEATURED…FABRICS + New Releases). 375/768 N/A |
| global-predictive-search | initial, input | ✅ | `tee` → chip + ürün satırı + See All 354 Results |
| global-cart-drawer | initial, filled | ✅ | White / M qty 1 $38; Hydrogen UI ATC (cart.js yok) |
| global-menu-drawer | open | ✅ | 375/768 hamburger. 1440 N/A (unsuffixed 1440 = kapalı home) |
| faq-collapsible-tabs | changed | ✅ | Benefits açık: VIP / Legacy listesi |

---

## Aday / leftover

[`candidates/cuts-leftovers.md`](../candidates/cuts-leftovers.md) · [`candidates/cuts-404s.md`](../candidates/cuts-404s.md)

---

## Evidence backlog (bilinçli açık)

- [x] Claiming 30 obs resmi 3vp
- [x] Overlay / mega / FAQ interact
- [ ] Cart qty `changed` — leftover
- [ ] PLP filter panel `changed` — leftover
- [ ] Women mega — leftover
- [ ] Menu alt akordeon (Featured) — leftover
- [ ] Newsletter / login / return portal — **yapılmayacak** (PII)
