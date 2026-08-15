# Todo — BREZ (drinkbrez.com)

*Kaynak:* https://www.drinkbrez.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **BREZ Original Production** · `schema_name`: Dawn · `schema_version`: 9.0.0 · `theme_store_id`: null (custom Dawn)

**Durum:** Mod A walk kapandı — 41 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/16 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/brez/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız brez paths |
| Gözlem / kanıt | 41 obs · **150 PNG** |

**Kapsam satırı:**  
`BREZ · default · BREZ Original Production (Dawn 9.0 custom) · home→PDP→PLP→search→cart→content→footer→mobile · 41 obs · 150 PNG · 0 yeni şema · leftover: age-gate / Okendo-Judge.me PDP / Rivo / 10mg link-out / no predictive list`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer | ✅ | ✅ |
| Mega / search bar / cart drawer / mobile menu | ✅ interact | ✅ (menu 1440 N/A) |
| PDP `/products/og` | ✅ + One Time | ✅ |
| PLP `/collections/shop-all` | ✅ | ✅ (Rebuy overlay) |
| Search `/search?q=og` | ✅ 18 sonuç | ✅ (Rebuy overlay) |
| Cart `/cart` | ✅ boş Dawn sayfa | ✅ |
| FAQ `/pages/faq` | ✅ | ✅ |
| Contact `/pages/contact` | ✅ Gorgias iframe | ✅ form **gönderilmedi** |
| Recipes `/pages/mocktail-recipes` | ✅ | ✅ |
| Store locator `/pages/storelocator` | ✅ Stockist harita | ✅ |
| Subscribe `/pages/subscription` | ✅ | ✅ |
| Bundle `/pages/build-your-own-bundle` | ✅ Rebuy builder | ✅ |
| Policy privacy | ✅ Shopify native | ✅ |
| Warning / labs | ✅ | ✅ (labs başlık; COA leftover) |
| 404 / blogs/news | ✅ Dawn 404 | ✅ candidate |
| Mobile 375 menu | ✅ | ✅ 375/768 |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | [x] | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | [x] | [x] |
| 3 | media-video-hero | home | [x] | [x] | [x] | [x] |
| 4 | editorial-image-with-text | home | [x] | [x] | [x] | [x] |
| 5 | editorial-image-with-text-2 | home | [x] | [x] | [x] | [x] |
| 6 | product-showcase-grid-featured | home | [x] | [x] | [x] | [x] |
| 7 | product-showcase-grid-featured-2 | home | [x] | [x] | [x] | [x] |
| 8 | promo-grid-banner | home | [x] | [x] | [x] | [x] |
| 9 | editorial-rich-text | home | [x] | [x] | [x] | [x] |
| 10 | testimonial-quote-carousel | home | [x] | [x] | [x] | [x] |
| 11 | faq-collapsible-tabs | home | [x] | [x] | [x] | [x] |
| 12 | editorial-layered-images | home | [x] | [x] | [x] | [x] |
| 13 | footer-columns-newsletter | home | [x] | [x] | [x] | [x] |
| 14 | global-cart-drawer | home | [x] | [x] | [x] | [x] |
| 15 | global-predictive-search | home | [x] forceOpen | [x] | [x] | [x] |
| 16 | global-menu-drawer | home | [x] 375+768 | [x] | [x] | [x] |
| 17 | product-info-main | product-detail | [x] | [x] | [x] | [x] |
| 18 | faq-collapsible-tabs | product-detail | [x] | [x] | [x] | [x] |
| 19 | editorial-custom-content | product-detail | [x] | [x] | [x] | [x] |
| 20 | product-showcase-related | product-detail | [x] | [x] | [x] | [x] |
| 21 | collection-banner | collection | [x] | [x] | [x] | [x] |
| 22 | product-showcase-grid-plp | collection | [x] | [x] | [x] | [x] |
| 23 | search-results | search | [x] | [x] | [x] | [x] |
| 24 | cart-page-main | cart | [x] | [x] | [x] | [x] |
| 25 | faq-collapsible-tabs | faq-support | [x] | [x] | [x] | [x] |
| 26 | editorial-image-with-text-overlay | contact | [x] | [x] | [x] | [x] |
| 27 | lead-capture-form | contact | [x] | [x] | [x] | [x] |
| 28 | editorial-custom-content | recipes | [x] | [x] | [x] | [x] |
| 29 | media-shop-the-feed | recipes | [x] | [x] | [x] | [x] |
| 30 | page-content-main | store-locator | [x] | [x] | leftover şema | [x] |
| 31–35 | subscribe (5) | subscribe | [x] | [x] | [x] | [x] |
| 36–37 | bundle (2) | bundle | [x] | [x] | [x] | [x] |
| 38 | page-content-main | policy | [x] | [x] | [x] | [x] |
| 39 | page-content-main | warning | [x] | [x] | [x] | [x] |
| 40 | editorial-rich-text | labs | [x] | [x] | [x] | [x] |
| 41 | page-content-main | not-found | [x] | [x] | leftover | [x] |

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop → THC-INFUSED + FUNCTIONAL mega |
| global-menu-drawer | open | 375/768 hamburger (1440 N/A) |
| global-predictive-search | initial, input `og` | forceOpen üst bar; **öneri listesi yok** |
| global-cart-drawer | initial, filled, changed | boş $125; OG 8pk $38.40 qty1; qty2 $71.80 |
| faq-collapsible-tabs (home) | changed | What do they feel like? → 5 min / 1.5 hr |
| product-info-main | changed | One Time → SOLD OUT $48 (8pk). 10mg link-out |

---

## Aday / leftover

[`candidates/brez-leftovers.md`](../candidates/brez-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp — **150 PNG**
- [x] Overlay / FAQ / selling-plan interact
- [ ] Strength 10mg (ayrı PDP; CF)
- [ ] Search predictive liste (yok — /search sayfası var)
- [ ] PLP/search/bundle karelerinde Rebuy flyout bazen biniyor
- [ ] Newsletter / Gorgias / checkout — **yapılmayacak** (PII)
