# Todo — District (Style Hatch, paid)

*Kaynak:* https://district-theme-demo.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/district  
*Preset:* `default` · *Slug:* `district`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **LIVE - district/live/district-theme-demo**  
`schema_name` = **District** · `schema_version` = **7.1.1** · `role` = **main** · theme id `122133119029`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `district-theme-demo.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft https://github.com/mattiasadem/qante/pull/174 — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/district/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **28** · **95 PNG** |
| Parallel | yalnız `observations/district/`, `evidence/district/`, `todo/district.md`, `candidates/district-leftovers.md` |

**Kapsam satırı:**  
`District · default · LIVE - district/live/district-theme-demo · schema_name District 7.1.1 · theme_store_id null · home→PDP→PLP→collections→search→cart→about-us/contact-us→faqs→blog→404 · 28 obs · 95 PNG · 0 yeni şema · leftover: candidates/district-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + capture | [x] |
| Mega SHOP 1440 | interact | [x] |
| Predictive search `shirt` | interact 3vp | [x] |
| Mobile menu 375 | interact | [x] |
| Mobile menu 768 | leftover (hamburger 0×0) | — |
| Cart page empty + filled + qty | interact 3vp · drawer yok | [x] |
| PDP Enjoy The Journey Black→White | interact 3vp | [x] |
| PLP `/collections/all` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=shirt` | roster + capture | [x] |
| About `/pages/about-us` | roster + capture | [x] |
| Contact form (submit yok) | roster + capture | [x] |
| FAQs `/pages/faqs` (accordion yok) | roster + capture | [x] |
| News + article | roster + capture | [x] |
| 404 leftover | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM `data-section-type`)

| # | District type | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | promos | `promo-announcement-bar` | reuse |
| 2 | header-top | — | leftover (utility: search/currency/account/cart) |
| 3 | header | `navigation-header-mega` | reuse · SHOP mega 1440 |
| 4 | liquid `custom_liquid_w7ik7A` | — | leftover h=0 |
| 5 | slideshow | `hero-slideshow` | reuse · autoplay slayt (Gather / New Classics) |
| 6 | gallery | `collection-nav-image-cards` | reuse · 5 kart |
| 7 | custom-content lookbook_preview | `media-lookbook-banner` | reuse |
| 8 | collection (tees + text) | `product-showcase-grid-featured` | reuse · Premium Tees |
| 9 | collection (everyday carry) | `product-showcase-grid-featured.2` | reuse |
| 10 | looks | `media-shop-the-feed` | reuse |
| 11 | custom-content Iceland | `editorial-image-with-text` | reuse · CTA `#` |
| 12 | blog-featured | `blog-list-main` | reuse |
| 13 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 14 | menu-drawer | `global-menu-drawer` | reuse · 375 |
| 15 | #ModalPredictiveSearch | `global-predictive-search` | reuse |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | 1440 SHOP mega 5 kolon + görsel: CLOTHING / WOMENS / EVERYDAY CARRY / WORKSPACE / TEES |
| global-predictive-search | input | `shirt` 3vp — Do A Lot With A Little $28 + Search for 'shirt' |
| global-menu-drawer | open | 375 drawer: Shop/Best Sellers/Blog/About/More + Log in. 768/1440 hamburger yok |
| cart-page-main | filled + changed | empty → Enjoy The Journey BLACK SMALL qty1 $28 → qty2 $56. Drawer yok |
| product-info-main | changed | COLOR BLACK $28 → COLOR WHITE $28 (beyaz tisort) |

---

## Aday / leftover

[`candidates/district-leftovers.md`](../candidates/district-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / menu / PDP Color
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
