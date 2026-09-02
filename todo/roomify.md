# Todo — Roomify (Speedo Themes · third-party Shopify 2.0)

*Kaynak:* https://pandora-furniture.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/speedo-furniture-shopify-theme-os-2-0  
*Preset:* `default` · *Slug:* `roomify`  
*Vendor:* Speedo Themes (Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Pandora-furniture V-1.5.0**  
`schema_name` = **Pandora_furniture** · `schema_version` = **1.5.0** · `role` = **main** · theme id `140750651549`  
`theme_store_id` = **null**  
shop `pandora-furniture.myshopify.com`

**Şifre:** Canlı `/password` duvarı. Vendor demo şifresi `1` — aynı host. Başka host yok.

**Durum:** Mod A walk + resmi 3vp + interact (devam)  
**PR:** draft (bu branch) · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/roomify/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Unlock | `storefrontPassword: "1"` · `scripts/storefront-password.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| Parallel | yalnız `observations/roomify/`, `evidence/roomify/`, `todo/roomify.md`, `candidates/roomify-leftovers.md` + capture unlock helper |

**Kapsam satırı:**  
`Roomify · default · Pandora-furniture V-1.5.0 / schema_name Pandora_furniture 1.5.0 · theme_store_id null · home→PDP Thompson Bed→PLP Home Office→/collections→search sofa→cart→about/contact→news+article→404 · 39 obs · 0 yeni şema · leftover: candidates/roomify-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + capture | [ ] |
| Header kapalı + Shop menü 1440 | interact | [ ] |
| Predictive search `sofa` | interact 3vp | [ ] |
| Mobile hamburger 375 + 768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact | [ ] |
| PDP Thompson Bed Size/Color | interact | [ ] |
| PLP `/collections/home-office` | roster + capture | [ ] |
| Collections index `/collections` | roster + capture | [ ] |
| Search `/search?q=sofa` | roster + capture | [ ] |
| Cart `/cart` empty + filled + qty | interact | [ ] |
| About `/pages/about-us` | roster + capture | [ ] |
| Contact form (submit yok) | roster + capture | [ ] |
| News + article | roster + capture | [ ] |
| 404 | roster + capture | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Section id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega yok |
| 3 | 165665788459900955 | `hero-slideshow` | reuse · 2 slayt |
| 4 | 16570995443f9c794f | `collection-nav-icon-buttons` | reuse · Shop By Furniture |
| 5 | 166367820573a5e22c | `editorial-rich-text` | reuse · Our Story (görsel yok) |
| 6 | 165666442841fa5a70 | `collection-nav-image-cards` | reuse · 6 kategori |
| 7 | 165666889162d379a4 | `product-showcase-tabs` | reuse · BEST/NEW/TOP |
| 8 | 16566581471a0cd9a8 | `editorial-image-with-text-overlay` | reuse · Standout Storage |
| 9 | 16570220444d9ed8e2 | `promo-grid-banner` | reuse · 20%/40% |
| 10 | 1656658688fda267ab | `testimonial-quote-carousel` | reuse |
| 11 | 16566582873b027b44 | `blog-list-main` | reuse |
| 12 | 1663676130f16e8b3b | `faq-collapsible-tabs` | reuse |
| 13 | 1660652947e3543e1b | `editorial-image-with-text-overlay.2` | reuse · parallax |
| 14 | 1656667513043b6e26 | `media-shop-the-feed` | reuse · @Furniture |
| 15 | 1659001743407f50e5 | `trust-icon-row` | reuse |
| 16 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 17 | newsletter-popup | — | leftover h=0 |
| 18 | details-modal.header__search | `global-predictive-search` | reuse |
| 19 | #menu-drawer | `global-menu-drawer` | reuse · 375/768 |
| 20 | #CartDrawer | `global-cart-drawer` | reuse · gerçek drawer |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | collection-nav-icon-buttons | home | [ ] | [x] | reuse | [ ] |
| 5 | editorial-rich-text | home | [ ] | [x] | reuse | [ ] |
| 6 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 7 | product-showcase-tabs | home | [ ] | [x] | reuse | [ ] |
| 8 | editorial-image-with-text-overlay | home | [ ] | [x] | reuse | [ ] |
| 9 | promo-grid-banner | home | [ ] | [x] | reuse | [ ] |
| 10 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 11 | blog-list-main | home | [ ] | [x] | reuse | [ ] |
| 12 | faq-collapsible-tabs | home | [ ] | [x] | reuse | [ ] |
| 13 | editorial-image-with-text-overlay.2 | home | [ ] | [x] | reuse | [ ] |
| 14 | media-shop-the-feed | home | [ ] | [x] | reuse | [ ] |
| 15 | trust-icon-row | home | [ ] | [x] | reuse | [ ] |
| 16 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 17 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 18 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 19 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 20 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 21 | trust-icon-row | product-detail | [ ] | [x] | reuse | [ ] |
| 22 | editorial-image-with-text | product-detail | [ ] | [x] | reuse | [ ] |
| 23 | editorial-image-with-text.2 | product-detail | [ ] | [x] | reuse | [ ] |
| 24 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 25 | collection-banner | collection | [ ] | [x] | reuse | [ ] |
| 26 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 27 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 28 | search-results | search | [ ] | [x] | reuse | [ ] |
| 29 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 30 | product-showcase-grid-featured | cart | [ ] | [x] | reuse | [ ] |
| 31 | editorial-image-with-text-overlay | about-brand | [ ] | [x] | reuse | [ ] |
| 32 | editorial-image-with-text | about-brand | [ ] | [x] | reuse | [ ] |
| 33 | features-multicolumn | about-brand | [ ] | [x] | reuse | [ ] |
| 34 | editorial-image-with-text.2 | about-brand | [ ] | [x] | reuse | [ ] |
| 35 | editorial-image-with-text-overlay | contact | [ ] | [x] | reuse | [ ] |
| 36 | lead-capture-form | contact | [ ] | [x] | reuse | [ ] |
| 37 | blog-list-main | blog-list | [ ] | [x] | reuse | [ ] |
| 38 | blog-post-main | blog-post | [ ] | [x] | reuse | [ ] |
| 39 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (kareye bakılacak)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 Shop |
| global-predictive-search | input | [ ] 3vp `sofa` |
| global-menu-drawer | open (+ changed) | [ ] 375 + 768 |
| global-cart-drawer | filled + changed | [ ] |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed | [ ] Size/Color |
| product-showcase-tabs | changed | [ ] NEW ARRIVALS |
| faq-collapsible-tabs | changed | [ ] ilk soru |

---

## Aday / leftover

[`candidates/roomify-leftovers.md`](../candidates/roomify-leftovers.md)

---

## Evidence backlog

- [ ] Statik 3vp (`capture-observation.mjs`)
- [ ] Mega/dropdown / search / mobile / cart empty+filled+qty / PDP variant
- [ ] Email / account / checkout / newsletter submit — **yapılmayacak**
