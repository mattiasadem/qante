# Todo — Warehouse (Maestrooo, paid) · Metal

*Kaynak:* https://warehouse-theme-metal.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/warehouse  
*Preset:* `default` · Metal — resmi Theme Store preview  
*Slug:* `warehouse`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Warehouse new font**  
`schema_name` = **Warehouse** · `schema_version` = **3.1.0** · `role` = **main** · theme id `132658626611`  
`theme_store_id` = **null** (canlıda yok; 7.x / Theme Store id uydurulmadı)  
shop `warehouse-theme-metal.myshopify.com`

**Beklenen vs canlı:** Theme Store listing güncel Maestrooo Warehouse (7.x iddia). Canlı Metal demo **Warehouse 3.1.0** ve `theme_store_id` **null**. 3.1.0 yazıldı.

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/warehouse/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/warehouse/`, `evidence/warehouse/`, `todo/warehouse.md`, `candidates/warehouse-leftovers.md` |

**Kapsam satırı:**  
`Warehouse · default · Warehouse 3.1.0 / schema_name Warehouse · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→blog→404 · leftover: candidates/warehouse-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster | [ ] |
| Mega All Products 1440 | interact | [ ] |
| Predictive search `jbl` | interact 3vp | [ ] |
| Mobile menu 375 + 768 | interact | [ ] |
| Mini-cart empty + filled + qty | interact 3vp | [ ] |
| PDP Charge 3 Black→Blue | interact 3vp | [ ] |
| PLP `/collections/all` | roster | [ ] |
| Collections index `/collections` | roster | [ ] |
| Search `/search?q=jbl` | roster | [ ] |
| Cart page empty + filled + qty | interact 3vp | [ ] |
| About `/pages/about` | roster | [ ] |
| Contact form (submit yok) | roster | [ ] |
| FAQ `/pages/faq` | roster | [ ] |
| News + article | roster | [ ] |
| 404 | roster | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM `data-section-type`)

| # | Warehouse type | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | popups | — | leftover (h=0, e-posta) |
| 3 | header | `navigation-header-mega` | reuse + mega hover |
| 4 | slideshow | `hero-slideshow` | reuse |
| 5 | promo-block | `promo-grid-banner` | reuse |
| 6 | offers | `features-multicolumn` | reuse |
| 7 | collection-list | `collection-nav-image-cards` | reuse |
| 8 | featured-collection | `product-showcase-grid-featured` | reuse ×3 |
| 9 | mosaic | `promo-grid-banner` `.2` | reuse |
| 10 | rich-text | `editorial-rich-text` | reuse |
| 11 | logo-list | `social-proof-brand-logos` | reuse |
| 12 | product | `product-showcase-featured` | reuse |
| 13 | blog-posts | `blog-list-main` | reuse |
| 14 | map | — | leftover (şema yok) |
| 15 | newsletter | `lead-capture-newsletter-band` | reuse · submit yok |
| 16 | quick-links | `collection-nav-icon-buttons` | reuse · ikon yok |
| 17 | recently-viewed-products | `product-showcase-recently-viewed` | PLP warmup |
| 18 | text-with-icons | `trust-icon-row` | reuse |
| 19 | footer | `footer-columns-newsletter` | reuse |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | promo-grid-banner | home | [ ] | [x] | reuse | [ ] |
| 5 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 6 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 7 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 8 | promo-grid-banner.2 | home | [ ] | [x] | reuse | [ ] |
| 9 | editorial-rich-text | home | [ ] | [x] | reuse | [ ] |
| 10 | social-proof-brand-logos | home | [ ] | [x] | reuse | [ ] |
| 11 | product-showcase-grid-featured.2 | home | [ ] | [x] | reuse | [ ] |
| 12 | product-showcase-featured | home | [ ] | [x] | reuse | [ ] |
| 13 | product-showcase-grid-featured.3 | home | [ ] | [x] | reuse | [ ] |
| 14 | blog-list-main | home | [ ] | [x] | reuse | [ ] |
| 15 | lead-capture-newsletter-band | home | [ ] | [x] | reuse | [ ] |
| 16 | collection-nav-icon-buttons | home | [ ] | [x] | reuse | [ ] |
| 17 | trust-icon-row | home | [ ] | [x] | reuse | [ ] |
| 18 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 19 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 20 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 21 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 22 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 23 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 24 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 25 | product-showcase-recently-viewed | collection | [ ] | [x] | reuse | [ ] |
| 26 | promo-grid-banner | collection | [ ] | [x] | reuse | [ ] |
| 27 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 28 | search-results | search | [ ] | [x] | reuse | [ ] |
| 29 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 30 | page-content-main | about-brand | [ ] | [x] | reuse | [ ] |
| 31 | lead-capture-form | contact | [ ] | [x] | reuse | [ ] |
| 32 | faq-collapsible-tabs | faq-support | [ ] | [x] | reuse | [ ] |
| 33 | blog-list-main | blog-list | [ ] | [x] | reuse | [ ] |
| 34 | blog-post-main | blog-post | [ ] | [x] | reuse | [ ] |
| 35 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 All Products hover |
| global-predictive-search | input | [ ] 3vp `jbl` |
| global-menu-drawer | open | [ ] 375 + 768 |
| global-cart-drawer | filled + changed | [ ] |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed | [ ] Black→Blue |

---

## Aday / leftover

[`candidates/warehouse-leftovers.md`](../candidates/warehouse-leftovers.md)

---

## Evidence backlog

- [ ] Statik 3vp
- [ ] Mega / search / mobile menu / cart empty+filled+qty / PDP Color
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
