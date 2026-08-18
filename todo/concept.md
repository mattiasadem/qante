# Todo — Concept (RoarTheme, paid) · Beauty Blossom / default

*Kaynak (yalnız resmi walk):* https://concept-theme.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/concept  
*Preset klasör:* `default` · slug `concept`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Concept-1-1-2-sections-ready (Beauty Blossom)**  
`schema_name` = **Concept** · `schema_version` = **1.1.2** · `role` = **main** · theme id `137476276463`  
`theme_store_id` = **null** (canlıda yok; Theme Store id uydurulmadı)  
shop `concept-theme.myshopify.com`

**Diğer preset'ler (THEME DEMO mega, yürünmedi):** Luxe Beauty `137577660655` · Accessories Avenue `137622028527` · Furniture Fusion `137322856687` · Cosmetic Harmony `138330046703` · Furniture Finesse `137894789359` · Dreamy Decor `139085644015` · Vogue Vault `141404373231`

**Durum:** Mod A walk + observation JSON · 3vp/interact kuyruk  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/concept/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **43** |
| Parallel | yalnız `observations/concept/`, `evidence/concept/`, `todo/concept.md`, `candidates/concept-leftovers.md` |

**Kapsam satırı:**  
`Concept · default (Beauty Blossom) · Concept-1-1-2-sections-ready · schema_name Concept 1.1.2 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 43 obs · 0 yeni şema · leftover: candidates/concept-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster | [ ] capture |
| Mega SHOPS 1440 | interact JSON | [ ] |
| Predictive search `cream` | interact JSON | [ ] |
| Mobile menu 375 + 768 | interact JSON | [ ] |
| Cart drawer empty + filled + qty | interact JSON | [ ] |
| PDP Vita-Botanical White→Blue | interact JSON | [ ] |
| PLP `/collections/skincare` | roster | [ ] |
| Collections `/collections` | roster | [ ] |
| Search `/search?q=cream` | roster | [ ] |
| Cart page empty + filled + qty | interact JSON | [ ] |
| About `/pages/about-us` | roster | [ ] |
| Contact form (submit yok) | roster | [ ] |
| FAQ `/pages/theme-faqs` | roster | [ ] |
| Blog list + Beauty Lab post | roster | [ ] |
| 404 | roster | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Concept / class | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | slideshow | `hero-slideshow` | reuse |
| 4 | f-collection What's New | `product-showcase-grid-featured` | reuse |
| 5 | spotl-products | `product-showcase-featured` | reuse + delta |
| 6 | i-banner | `editorial-image-with-text-overlay` | reuse |
| 7 | marquee | `promo-scrolling-marquee` | reuse |
| 8 | f-collection Enchanté | `product-showcase-grid-featured.2` | reuse |
| 9 | db-banner | `editorial-image-with-text-overlay.2` | reuse |
| 10 | f-collection Essentials | `product-showcase-grid-featured.3` | reuse |
| 11 | f-product-tab | `product-showcase-tabs` | reuse |
| 12 | quotes | `testimonial-quote-carousel` | reuse |
| 13 | f-blog | `blog-list-main` | reuse |
| 14 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 15 | newsletter-popup | — | leftover 0px / PII |
| 16 | recently-purchased | — | leftover 0×0 |
| 17 | before-you-leave | — | leftover 0×0 |
| 18 | predictive-search | `global-predictive-search` | reuse · interact |
| 19 | menu-drawer | `global-menu-drawer` | reuse · 375/768 |
| 20 | CartDrawer | `global-cart-drawer` | reuse · interact |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–17 | home static + overlays | home | [ ] | [x] | reuse | [ ] |
| 18 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 19–22 | trust / collage / tabs / related | product-detail | [ ] | [x] | reuse | [ ] |
| 23–24 | grid-plp + collage | collection | [ ] | [x] | reuse | [ ] |
| 25 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 26 | search-results | search | [ ] | [x] | reuse | [ ] |
| 27 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 28–36 | about ×9 | about-brand | [ ] | [x] | reuse | [ ] |
| 37–38 | contact | contact | [ ] | [x] | reuse | [ ] |
| 39–40 | faq | faq-support | [ ] | [x] | reuse | [ ] |
| 41–42 | blog list + post | blog-* | [ ] | [x] | reuse | [ ] |
| 43 | 404 | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 SHOPS mega |
| global-predictive-search | input | [ ] 3vp `cream` |
| global-menu-drawer | open | [ ] 375 + 768 |
| global-cart-drawer | filled + changed | [ ] $70 → qty 2 |
| cart-page-main | filled + changed | [ ] $70 → qty 2 |
| product-info-main | changed | [ ] White → Blue $70→$72 |

Stop: email / account / checkout / newsletter submit / contact Send / PII

---

## Aday / leftover

[`candidates/concept-leftovers.md`](../candidates/concept-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu 375+768 / cart empty+filled+qty / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
- [ ] Newsletter / account / checkout — **yapılmayacak** (PII)
