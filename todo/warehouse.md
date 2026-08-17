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

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/warehouse/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** |
| Observation | **35** |
| PNG | **123** |
| Parallel | yalnız `observations/warehouse/`, `evidence/warehouse/`, `todo/warehouse.md`, `candidates/warehouse-leftovers.md` |

**Kapsam satırı:**  
`Warehouse · default · Warehouse 3.1.0 / schema_name Warehouse · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→blog→404 · 35 obs · 123 PNG · 0 yeni şema · leftover: candidates/warehouse-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + capture | [x] |
| Mega All Products 1440 | interact | [x] |
| Predictive search `jbl` | interact 3vp | [x] |
| Mobile menu 375 + 768 | interact | [x] |
| Mini-cart empty + filled + qty | interact 3vp | [x] |
| PDP Charge 3 Black→Blue | interact 3vp | [x] |
| PLP `/collections/all` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=jbl` | roster + capture | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| About `/pages/about` | roster + capture | [x] |
| Contact form (submit yok) | roster + capture | [x] |
| FAQ `/pages/faq` | roster + capture | [x] |
| News + article | roster + capture | [x] |
| 404 | roster + capture | [x] |
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
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | promo-grid-banner | home | [x] | [x] | reuse | [x] |
| 5 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 6 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 7 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 8 | promo-grid-banner.2 | home | [x] | [x] | reuse | [x] |
| 9 | editorial-rich-text | home | [x] | [x] | reuse | [x] |
| 10 | social-proof-brand-logos | home | [x] | [x] | reuse | [x] |
| 11 | product-showcase-grid-featured.2 | home | [x] | [x] | reuse | [x] |
| 12 | product-showcase-featured | home | [x] | [x] | reuse | [x] |
| 13 | product-showcase-grid-featured.3 | home | [x] | [x] | reuse | [x] |
| 14 | blog-list-main | home | [x] | [x] | reuse | [x] |
| 15 | lead-capture-newsletter-band | home | [x] | [x] | reuse | [x] |
| 16 | collection-nav-icon-buttons | home | [x] | [x] | reuse | [x] |
| 17 | trust-icon-row | home | [x] | [x] | reuse | [x] |
| 18 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 19 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 20 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 21 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 22 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 23 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 24 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 25 | product-showcase-recently-viewed | collection | [x] | [x] | reuse | [x] |
| 26 | promo-grid-banner | collection | [x] | [x] | reuse | [x] |
| 27 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 28 | search-results | search | [x] | [x] | reuse | [x] |
| 29 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 30 | page-content-main | about-brand | [x] | [x] | reuse | [x] |
| 31 | lead-capture-form | contact | [x] | [x] | reuse | [x] |
| 32 | faq-collapsible-tabs | faq-support | [x] | [x] | reuse | [x] |
| 33 | blog-list-main | blog-list | [x] | [x] | reuse | [x] |
| 34 | blog-post-main | blog-post | [x] | [x] | reuse | [x] |
| 35 | page-content-main | not-found | [x] | [x] | reuse | [x] |

---

## Interact (kareye bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 All Products — Audio / Hi-Fi / TV / Our Selection + JBL From $39.95 |
| global-predictive-search | input | [x] 3vp `jbl` — Stage A125C / A135C / Charge 3 |
| global-menu-drawer | open | [x] 375 + 768 |
| global-cart-drawer | filled + changed | [x] $99.95 → $199.90 (qty 2) |
| cart-page-main | filled + changed | [x] $99.95 → $199.90 |
| product-info-main | changed | [x] Black → Blue (SKU + görsel + stok 56→116) |

---

## Aday / leftover

[`candidates/warehouse-leftovers.md`](../candidates/warehouse-leftovers.md)

---

## Evidence backlog

- [x] Statik 3vp (87 PNG)
- [x] Mega / search / mobile 375+768 / cart empty+filled+qty / PDP Color (36 PNG)
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
