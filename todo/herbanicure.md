# Todo — Herbanicure (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://herbanicure.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/herbanicure-best-nutrition-supplement-store-0s-2-0  
*Preset:* `default` · *Slug:* `herbanicure`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (storefront, uydurulmadı):**  
`Shopify.theme.name` = **Herbanicure V-1.2.0**  
`schema_name` = **Herbanicure** · `schema_version` = **1.2.0** · `role` = **main** · theme id `163707814186`  
`theme_store_id` = **null**  
shop `herbanicure.myshopify.com`

**Password:** Speedo ürün sayfası “Please enter password `1` to view demo.” Aynı host `/password` — public storefront-unlock.

**Durum:** Mod A walk + resmi 3vp + interact + validate  
**PR:** https://github.com/mattiasadem/qante/pull/386 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/herbanicure/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** |
| Observation | **32** |
| Parallel | yalnız `observations/herbanicure/`, `evidence/herbanicure/`, `todo/herbanicure.md`, `candidates/herbanicure-leftovers.md` + unlock helper |

**Kapsam satırı:**  
`Herbanicure · default · Herbanicure V-1.2.0 / schema_name Herbanicure 1.2.0 · theme_store_id null · shop herbanicure.myshopify.com · password 1 · home→PDP king-kratom-powder→PLP all→search kratom→cart→collections→about-us→contact→faq→blog news→brands→404 · 32 obs · 136 PNG · 0 yeni şema · leftover: candidates/herbanicure-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announce→footer) | [x] | [x] |
| Cart drawer boş + filled + qty2 | [x] | [x] interact |
| Menu drawer 375+768 | [x] | [x] interact |
| Predictive search kratom | [x] | [x] interact |
| PDP qty 1→2 | [x] | [x] interact |
| FAQ ORDERS→PAYMENT | [x] | [x] interact |
| PLP hover 1440 | [x] | [x] interact |
| Search `/search?q=kratom` | [x] | [x] |
| Cart `/cart` empty + filled | [x] | [x] interact |
| Collections / about / contact / faq / blog / brands / 404 | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster

| # | Herbanicure / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega yok |
| 3 | hero slideshow | `hero-slideshow` | reuse |
| 4 | Shop By Kratom Category | `collection-nav-image-cards` | reuse |
| 5 | Featured Collections | `product-showcase-grid-featured` | reuse |
| 6 | Best Sellers | `product-showcase-grid-featured` | reuse · obs .2 |
| 7 | SAVE MORE coupons | `editorial-image-with-text-overlay` | reuse |
| 8 | Customer Reviews | `testimonial-quote-carousel` | reuse |
| 9 | Latest Blog | `blog-list-main` | reuse |
| 10 | Shop By Brands | `social-proof-brand-logos` | reuse |
| 11 | newsletter band | `lead-capture-newsletter-band` | reuse · global |
| 12 | footer | `footer-columns-newsletter` | reuse |
| 13 | cart-drawer | `global-cart-drawer` | reuse · interact |
| 14 | search modal | `global-predictive-search` | reuse · kratom |
| 15 | menu-drawer | `global-menu-drawer` | reuse · 375/768 |

---

## Interact

| Bileşen | State | Durum |
|---|---|---|
| global-cart-drawer | initial + filled + qty 1→2 | ✅ |
| global-menu-drawer | open 375/768 | ✅ |
| global-predictive-search | open + input kratom | ✅ |
| product-info-main | changed qty 1→2 | ✅ |
| product-showcase-grid-plp | hover 1440 | ✅ |
| faq-collapsible-tabs | changed ORDERS→PAYMENT | ✅ |
| cart-page-main | filled | ✅ |

---

## Aday / leftover

[`candidates/herbanicure-leftovers.md`](../candidates/herbanicure-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static — 32 obs
- [x] Interact — 7 component
- [x] `npm run validate` — 0 error
