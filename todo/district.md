# Todo — District (Style Hatch, paid)

*Kaynak:* https://district-theme-demo.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/district  
*Preset:* `default` · *Slug:* `district`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **LIVE - district/live/district-theme-demo**  
`schema_name` = **District** · `schema_version` = **7.1.1** · `role` = **main** · theme id `122133119029`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `district-theme-demo.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate **devam**  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/district/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **28** (kanıt bekleniyor) |
| Parallel | yalnız `observations/district/`, `evidence/district/`, `todo/district.md`, `candidates/district-leftovers.md` |

**Kapsam satırı:**  
`District · default · LIVE - district/live/district-theme-demo · schema_name District 7.1.1 · theme_store_id null · home→PDP→PLP→collections→search→cart→about-us/contact-us→faqs→blog→404 · 28 obs · 0 yeni şema · leftover: candidates/district-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster yazıldı | [ ] capture |
| Mega SHOP 1440 | interact yazıldı | [ ] |
| Predictive search `shirt` | interact yazıldı | [ ] |
| Mobile menu 375 | interact yazıldı | [ ] |
| Mobile menu 768 | leftover (hamburger 0×0) | — |
| Cart page empty + filled + qty | interact yazıldı · drawer yok | [ ] |
| PDP Enjoy The Journey Black→White | interact yazıldı | [ ] |
| PLP `/collections/all` | roster yazıldı | [ ] |
| Collections index `/collections` | roster yazıldı | [ ] |
| Search `/search?q=shirt` | roster yazıldı | [ ] |
| About `/pages/about-us` | roster yazıldı | [ ] |
| Contact form (submit yok) | roster yazıldı | [ ] |
| FAQs `/pages/faqs` (accordion yok) | roster yazıldı | [ ] |
| News + article | roster yazıldı | [ ] |
| 404 leftover | roster yazıldı | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM `data-section-type`)

| # | District type | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | promos | `promo-announcement-bar` | reuse |
| 2 | header-top | — | leftover (utility: search/currency/account/cart) |
| 3 | header | `navigation-header-mega` | reuse · SHOP mega 1440 |
| 4 | liquid `custom_liquid_w7ik7A` | — | leftover h=0 |
| 5 | slideshow | `hero-slideshow` | reuse |
| 6 | gallery | `collection-nav-image-cards` | reuse · 5 kart |
| 7 | custom-content lookbook_preview | `media-lookbook-banner` | reuse |
| 8 | collection (tees + text) | `product-showcase-grid-featured` | reuse |
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
| navigation-header-mega | open | SHOP hover 1440 — kanıt bekleniyor |
| global-predictive-search | input | `shirt` — yoklandı: Do A Lot With A Little $28 |
| global-menu-drawer | open | 375 drawer. 768 hamburger yok |
| cart-page-main | filled + changed | drawer yok; ATC → `/cart` |
| product-info-main | changed | Black → White swatch |

---

## Aday / leftover

[`candidates/district-leftovers.md`](../candidates/district-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
