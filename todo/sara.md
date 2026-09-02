# Todo — SARA Toys (Speedo Themes) · Kids Toys / default

*Kaynak (yalnız resmi walk):* https://sara-toy-store.myshopify.com/  
*Vendor catalog:* https://speedothemes.com/collections/shopify-themes  
*Product:* https://speedothemes.com/products/sara-toys-multipurpose-shopify-kids-themes-for-toy-store-os-2-0  
*Preset klasör:* `default` · slug `sara`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Sara-toys-shop V-1.2.0**  
`schema_name` = **sara-toy-store** · `schema_version` = **1.2.0** · `role` = **main** · theme id `164101292353`  
`theme_store_id` = **null** (Theme Store resmi değil; Speedo third-party OS 2.0)  
Walk host `sara-toy-store.myshopify.com` · `Shopify.shop` = **sara-toy-store.myshopify.com** · locale `en` · country `US` · currency `USD`  
Storefront unlock: vendor publishes password `1` on the product page (public demo, not an account).

**Durum:** Mod A walk + resmi 3vp + interact (pixel-check) · 0 yeni şema  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/sara/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **29** · evidence **119** PNG (statik 3vp + interact) |
| Parallel | yalnız `observations/sara/`, `evidence/sara/`, `todo/sara.md`, `candidates/sara-leftovers.md` |

**Kapsam satırı:**  
`SARA Toys · default · Sara-toys-shop V-1.2.0 / schema_name sara-toy-store 1.2.0 · theme_store_id null · Speedo third-party · shop sara-toy-store.myshopify.com · home→PLP creativity→PDP tablette/adaptateur→search toy→cart empty/filled→collections→404 · 29 obs · 0 yeni şema · interact mega/search/cart/PDP qty · leftover: candidates/sara-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Shop mega 1440 | [x] interact | [x] |
| Predictive search `toy` | [x] interact | [x] |
| Mobile menu 375 + 768 | [x] interact | [x] |
| Cart drawer empty + filled + qty | [x] interact | [x] |
| PDP qty change (sold out product) | [x] interact | [x] |
| PLP `/collections/creativity` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=toy` | [x] obs | [x] capture |
| Cart page empty + filled + qty | [x] interact | [x] |
| 404 | [x] obs | [x] capture |
| FAQ / about / contact / blog | ⛔ Sprint 0 min dışı veya 404 | — |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | SARA / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | slideshow ENRICHING | `hero-slideshow` | reuse |
| 4 | Secure Payment | `features-multicolumn` | reuse |
| 5 | Discover Our products | `collection-nav-slider` | reuse |
| 6 | image_banner | `editorial-image-with-text-overlay` | reuse |
| 7 | Why People Love | `features-multicolumn.2` | reuse |
| 8 | Best Sellers | `product-showcase-grid-featured` | reuse |
| 9 | customers say | `testimonial-quote-carousel` | reuse |
| 10 | Who Are We | `editorial-image-with-text` | reuse |
| 11 | Our Partners | `social-proof-brand-logos` | reuse |
| 12 | 40 Million Crates | `editorial-rich-text` | reuse |
| 13 | Join Community | `lead-capture-newsletter-band` | reuse |
| 14 | footer | `footer-columns-newsletter` | reuse |
| 15 | #CartDrawer | `global-cart-drawer` | reuse · interact |
| 16 | predictive-search | `global-predictive-search` | reuse · interact |
| 17 | #menu-drawer | `global-menu-drawer` | reuse · interact |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–17 | home + overlays | home | [x] | [x] | reuse | [x] |
| 18–20 | banner + PLP + trust | collection | [x] | [x] | reuse | [x] |
| 21–25 | PDP blocks | product-detail | [x] | [x] | reuse | [x] |
| 26 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 27 | search-results | search | [x] | [x] | reuse | [x] |
| 28 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 29 | page-content-main | not-found | [x] | [x] | reuse | [x] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] Shop mega |
| global-predictive-search | input | [x] toy |
| global-menu-drawer | open | [x] 375/768 |
| global-cart-drawer | filled + changed | [x] adaptateur |
| cart-page-main | filled + changed | [x] |
| product-info-main | changed | [x] qty 1→2 |

---

## Aday / şemaya sığmayan

- `candidates/sara-leftovers.md`
