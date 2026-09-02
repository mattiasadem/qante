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

**Durum:** Mod A walk + resmi 3vp + interact findings yazıldı  
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
`Roomify · default · Pandora-furniture V-1.5.0 / schema_name Pandora_furniture 1.5.0 · theme_store_id null · home→PDP Thompson Bed→PLP Home Office→/collections→search sofa→cart→about/contact→news+article→404 · 39 obs · 166 PNG · 0 yeni şema · leftover: candidates/roomify-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + capture | [x] |
| Header kapalı + Shop menü 1440 | interact | [x] |
| Predictive search `sofa` | interact 3vp | [x] |
| Mobile hamburger 375 + 768 | interact | [x] missingStates |
| Cart drawer empty + filled + qty | interact | [x] filled+qty; boş drawer yok |
| PDP Thompson Bed Size/Color | interact | [x] initial; changed missing |
| PLP `/collections/home-office` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=sofa` | roster + capture | [x] |
| Cart `/cart` empty + filled + qty | interact | [x] |
| About `/pages/about-us` | roster + capture | [x] |
| Contact form (submit yok) | roster + capture | [x] |
| News + article | roster + capture | [x] |
| 404 | roster + capture | [x] |
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
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | collection-nav-icon-buttons | home | [x] | [x] | reuse | [x] |
| 5 | editorial-rich-text | home | [x] | [x] | reuse | [x] |
| 6 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 7 | product-showcase-tabs | home | [x] | [x] | reuse | [x] |
| 8 | editorial-image-with-text-overlay | home | [x] | [x] | reuse | [x] |
| 9 | promo-grid-banner | home | [x] | [x] | reuse | [x] |
| 10 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 11 | blog-list-main | home | [x] | [x] | reuse | [x] |
| 12 | faq-collapsible-tabs | home | [x] | [x] | reuse | [x] |
| 13 | editorial-image-with-text-overlay.2 | home | [x] | [x] | reuse | [x] |
| 14 | media-shop-the-feed | home | [x] | [x] | reuse | [x] |
| 15 | trust-icon-row | home | [x] | [x] | reuse | [x] |
| 16 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 17 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 18 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 19 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 20 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 21 | trust-icon-row | product-detail | [x] | [x] | reuse | [x] |
| 22 | editorial-image-with-text | product-detail | [x] | [x] | reuse | [x] |
| 23 | editorial-image-with-text.2 | product-detail | [x] | [x] | reuse | [x] |
| 24 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 25 | collection-banner | collection | [x] | [x] | reuse | [x] |
| 26 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 27 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 28 | search-results | search | [x] | [x] | reuse | [x] |
| 29 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 30 | product-showcase-grid-featured | cart | [x] | [x] | reuse | [x] |
| 31 | editorial-image-with-text-overlay | about-brand | [x] | [x] | reuse | [x] |
| 32 | editorial-image-with-text | about-brand | [x] | [x] | reuse | [x] |
| 33 | features-multicolumn | about-brand | [x] | [x] | reuse | [x] |
| 34 | editorial-image-with-text.2 | about-brand | [x] | [x] | reuse | [x] |
| 35 | editorial-image-with-text-overlay | contact | [x] | [x] | reuse | [x] |
| 36 | lead-capture-form | contact | [x] | [x] | reuse | [x] |
| 37 | blog-list-main | blog-list | [x] | [x] | reuse | [x] |
| 38 | blog-post-main | blog-post | [x] | [x] | reuse | [x] |
| 39 | page-content-main | not-found | [x] | [x] | reuse | [x] |

---

## Interact (kareye bakılacak)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Shop dropdown (mega yok) |
| global-predictive-search | input | [x] 3vp `sofa` + 6 PRODUCTS |
| global-menu-drawer | open (+ changed) | [x] missingStates — kare kapalı homepage |
| global-cart-drawer | filled + changed | [x] Duane $400 → qty2 $800 |
| cart-page-main | filled + changed | [x] empty + Duane $400 → $800 |
| product-info-main | changed | [x] missingStates — accordion/varyant yok |
| product-showcase-tabs | changed | [x] missingStates — NEW ARRIVALS md5 aynı |
| faq-collapsible-tabs | changed | [x] 4 soru açık (−) |

---

## Aday / leftover

[`candidates/roomify-leftovers.md`](../candidates/roomify-leftovers.md)

---

## Evidence backlog

- [x] Statik 3vp (`capture-observation.mjs`) — 114 PNG
- [x] Interact PNG bak → stateFindings — 52 ek kare · 166 toplam
- [x] Email / account / checkout / newsletter submit — **yapılmadı**
