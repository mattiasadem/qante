# Todo — Coffee Prime (Speedo Themes · third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://coffee-prime.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/shopify-coffee-theme  
*Preset:* `default` · slug `coffee-prime`  
*Vendor:* Speedo Themes (Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Coffee-prime V-1.5.0**  
`schema_name` = **coffee_prime** · `schema_version` = **1.5.0** · `role` = **main** · theme id `171096473906`  
`theme_store_id` = **null**  
`Shopify.shop` = `coffee-prime.myshopify.com`  
Title: `Best Shopify Coffee Theme – coffee-prime (password: 1)`  
Storefront password (ürün sayfasında yayın): **`1`** — aynı host `/password`, başka vitrin yok.

**Durum:** Mod A walk + interact (devam)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/coffee-prime/default/` |
| Capture | `capture-observation.mjs` + `capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **45** (9 interact) |
| Evidence | **170 PNG** |

**Kapsam satırı:**  
`Coffee Prime · default · Coffee-prime V-1.5.0 / schema_name coffee_prime 1.5.0 · theme_store_id null · shop coffee-prime.myshopify.com · Speedo Themes · password 1 · home→PDP premium-filter-ground→PLP /collections/all→/collections→search coffee→cart→about-us/contact/faq→news+post→404 · 45 obs · 170 PNG · 0 yeni şema · leftover: candidates/coffee-prime-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] static |
| Header Shop dropdown 1440 | [x] interact | [ ] open |
| Predictive search `coffee` | [x] interact | [ ] input |
| Mobile menu 375 + 768 | [x] interact | [ ] open+changed |
| Cart drawer/page empty + filled + qty | [x] interact | [ ] 3vp |
| PDP Size 1kg→2kg | [x] interact | [ ] |
| PLP `/collections/all` | [x] obs | [ ] static |
| Collections `/collections` | [x] obs | [ ] static |
| Search `/search?q=coffee` | [x] obs | [ ] static |
| Cart page empty + filled + qty | [x] interact | [ ] 3vp |
| About `/pages/about-us` | [x] obs | [ ] static |
| Contact form (submit yok) | [x] obs | [ ] static |
| FAQ `/pages/faq` (`/pages/faqs` 404) | [x] obs + interact | [ ] |
| News + fruits article | [x] obs | [ ] static |
| 404 `/pages/faqs` | [x] obs | [ ] static |
| Featured hover BEST SELLERS | [x] interact | [ ] hover |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Coffee Prime / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse · locale + sosyal + FREE SHIPPING |
| 2 | header_1 | `navigation-header-mega` | reuse · mega yok · Shop dropdown · All Categories |
| 3 | slideshow | `hero-slideshow` | reuse |
| 4 | multicolumn | `features-multicolumn` | reuse · WHAT COFFEE IS BEST |
| 5 | new_collection | `collection-nav-image-cards` | reuse · 5 kategori |
| 6 | featured collection | `product-showcase-grid-featured` | reuse · wishlist + ATC hover |
| 7 | image-with-text | `editorial-image-with-text` | reuse · Our Story |
| 8 | image-banner | `editorial-image-with-text-overlay` | reuse · SUMMER SALE |
| 9 | blog | `blog-list-main` | reuse |
| 10 | testimonials | `testimonial-quote-carousel` | reuse |
| 11 | instagram | `media-shop-the-feed` | reuse |
| 12 | footer trust | `trust-icon-row` | reuse |
| 13 | footer | `footer-columns-newsletter` | reuse |
| 14 | #CartDrawer | `global-cart-drawer` | reuse |
| 15 | #menu-drawer | `global-menu-drawer` | reuse |
| 16 | .search-modal | `global-predictive-search` | reuse |
| — | newsletter-popup | — | leftover PII |
| — | #category-box | — | leftover · All Categories |

---

## Aday / leftover

[`candidates/coffee-prime-leftovers.md`](../candidates/coffee-prime-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (~111 PNG)
- [x] Interact header / search (1440 input) / menu (768) / cart / featured / FAQ / PDP / cart page (~59 PNG)
- [x] `node scripts/validate-schemas.mjs` — 0 error
