# Todo — Wearix (Speedo Themes / Pandora Fashion)

*Kaynak:* https://pandora-fashi.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/speedo-pandora-fashion-apparel-shopify-theme  
*Preset:* `default`  
*Slug:* `wearix`  
*Vendor:* Speedo Themes (üçüncü parti Shopify 2.0, Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Pandora-fashi-fashion-latest V-1.5.0**  
`schema_name` = **pandora_fashi** · `schema_version` = **1.5.0** · `role` = **main** · theme id `137361916078`  
`theme_store_id` = **null**  
shop `pandora-fashi.myshopify.com`

**Demo kapısı:** Storefront password wall. Ürün sayfası ve mağaza adı vendor şifresini yayınlıyor: **"Please enter password 1 to view demo."** / `pandora-fashi (password: 1)`. Başka host uydurulmadı.

**Durum:** Mod A walk + 3vp capture + interact (devam)  
**PR:** draft (bu branch) · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/wearix/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `capture-interaction.mjs` |
| Storefront password | observation `storefrontPassword: "1"` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** (mevcut tipler reuse) |
| Observation | **35** |
| Parallel | yalnız `observations/wearix/`, `evidence/wearix/`, `todo/wearix.md`, `candidates/wearix-leftovers.md`, unlock helper |

**Kapsam satırı:**  
`Wearix · default · Pandora-fashi-fashion-latest V-1.5.0 / schema_name pandora_fashi 1.5.0 · theme_store_id null · home→PDP stylish-white-trouser-suit→PLP men-t-shirt→collections→search hoodie→cart empty→about-us→contact→news+article→404 · 35 obs · 0 yeni şema · leftover: candidates/wearix-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster | [ ] |
| Mega Shop 1440 | interact | [ ] |
| Predictive search `hoodie` | interact | [ ] |
| Mobile menu 375 + 768 | interact | [ ] |
| Cart drawer empty + filled | interact | [ ] |
| PDP variant / ATC | interact | [ ] |
| PLP `/collections/men-t-shirt` | roster | [ ] |
| Collections index `/collections` | roster | [ ] |
| Search `/search?q=hoodie` | roster | [ ] |
| Cart `/cart` empty + filled | interact | [ ] |
| About `/pages/about-us` | roster | [ ] |
| Contact form (submit yok) | roster | [ ] |
| News + article | roster | [ ] |
| 404 | roster | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 5 | collection-nav-icon-buttons | home | [ ] | [x] | reuse | [ ] |
| 6 | product-showcase-tabs | home | [ ] | [x] | reuse | [ ] |
| 7 | editorial-image-with-text-overlay | home | [ ] | [x] | reuse | [ ] |
| 8 | promo-grid-banner | home | [ ] | [x] | reuse | [ ] |
| 9 | media-video-hero | home | [ ] | [x] | reuse | [ ] |
| 10 | blog-list-main | home | [ ] | [x] | reuse | [ ] |
| 11 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 12 | faq-collapsible-tabs | home | [ ] | [x] | reuse | [ ] |
| 13 | media-shop-the-feed | home | [ ] | [x] | reuse | [ ] |
| 14 | trust-icon-row | home | [ ] | [x] | reuse | [ ] |
| 15 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 16 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 17 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 18 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 19 | collection-banner | collection | [ ] | [x] | reuse | [ ] |
| 20 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 21 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 22 | trust-icon-row | product-detail | [ ] | [x] | reuse | [ ] |
| 23–24 | editorial-image-with-text ×2 | product-detail | [ ] | [x] | reuse | [ ] |
| 25 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 26 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 27 | product-showcase-grid-featured | cart | [ ] | [x] | reuse | [ ] |
| 28 | search-results | search | [ ] | [x] | reuse | [ ] |
| 29 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 30 | blog-list-main | blog | [ ] | [x] | reuse | [ ] |
| 31 | blog-post-main | blog-post | [ ] | [x] | reuse | [ ] |
| 32 | page-content-main | about-brand | [ ] | [x] | reuse | [ ] |
| 33 | editorial-rich-text | contact | [ ] | [x] | reuse | [ ] |
| 34 | lead-capture-form | contact | [ ] | [x] | reuse | [ ] |
| 35 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |

---

## Aday / şemaya sığmayan

- [`candidates/wearix-leftovers.md`](../candidates/wearix-leftovers.md)

---

## Evidence backlog

- [ ] 3vp capture `capture-observation.mjs`
- [ ] Interact: mega / hamburger / search / cart drawer / PDP variant / FAQ / tabs / cart filled
- [ ] Validator
