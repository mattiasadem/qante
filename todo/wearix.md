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

**Durum:** Mod A walk + 3vp + interact (kısmi)  
**PR:** https://github.com/mattiasadem/qante/pull/323 (draft) · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/wearix/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `capture-interaction.mjs` |
| Storefront password | observation `storefrontPassword: "1"` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** (mevcut tipler reuse) |
| Observation | **35** |
| Evidence | **143 PNG** |
| Parallel | yalnız `observations/wearix/`, `evidence/wearix/`, `todo/wearix.md`, `candidates/wearix-leftovers.md`, unlock helper |

**Kapsam satırı:**  
`Wearix · default · Pandora-fashi-fashion-latest V-1.5.0 / schema_name pandora_fashi 1.5.0 · theme_store_id null · home→PDP stylish-white-trouser-suit→PLP men-t-shirt→collections→search hoodie→cart empty+filled→about-us→contact→news+article→404 · 35 obs · 143 PNG · 0 yeni şema · leftover: candidates/wearix-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] | [x] |
| Mega Shop 1440 | missingStates | [x] initial |
| Predictive search `hoodie` | missingStates | overlay yok |
| Mobile menu 375 + 768 | missingStates | kapalı kare |
| Cart drawer empty + filled + qty | [x] | [x] |
| PDP variant Black | [x] | [x] |
| FAQ first accordion | [x] | [x] |
| Home tabs NEW ARRIVALS | missingStates | [x] initial |
| PLP `/collections/men-t-shirt` | [x] | [x] |
| Collections index `/collections` | [x] | [x] |
| Search `/search?q=hoodie` | [x] | [x] |
| Cart `/cart` empty + filled + qty | [x] | [x] |
| About `/pages/about-us` | [x] | [x] |
| Contact form (submit yok) | [x] | [x] |
| News + article | [x] | [x] |
| 404 | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 5 | collection-nav-icon-buttons | home | [x] | [x] | reuse | [x] |
| 6 | product-showcase-tabs | home | [x] | [x] | reuse | [x] |
| 7 | editorial-image-with-text-overlay | home | [x] | [x] | reuse | [x] |
| 8 | promo-grid-banner | home | [x] | [x] | reuse | [x] |
| 9 | media-video-hero | home | [x] | [x] | reuse | [x] |
| 10 | blog-list-main | home | [x] | [x] | reuse | [x] |
| 11 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 12 | faq-collapsible-tabs | home | [x] | [x] | reuse | [x] |
| 13 | media-shop-the-feed | home | [x] | [x] | reuse | [x] |
| 14 | trust-icon-row | home | [x] | [x] | reuse | [x] |
| 15 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 16 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 17 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 18 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 19 | collection-banner | collection | [x] | [x] | reuse | [x] |
| 20 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 21 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 22 | trust-icon-row | product-detail | [x] | [x] | reuse | [x] |
| 23–24 | editorial-image-with-text ×2 | product-detail | [x] | [x] | reuse | [x] |
| 25 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 26 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 27 | product-showcase-grid-featured | cart | [x] | [x] | reuse | [x] |
| 28 | search-results | search | [x] | [x] | reuse | [x] |
| 29 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 30 | blog-list-main | blog | [x] | [x] | reuse | [x] |
| 31 | blog-post-main | blog-post | [x] | [x] | reuse | [x] |
| 32 | page-content-main | about-brand | [x] | [x] | reuse | [x] |
| 33 | editorial-rich-text | contact | [x] | [x] | reuse | [x] |
| 34 | lead-capture-form | contact | [x] | [x] | reuse | [x] |
| 35 | page-content-main | not-found | [x] | [x] | reuse | [x] |

---

## Aday / şemaya sığmayan

- [`candidates/wearix-leftovers.md`](../candidates/wearix-leftovers.md)

---

## Evidence backlog

- [x] 3vp capture `capture-observation.mjs`
- [x] Interact: cart drawer empty/filled/qty · cart page empty/filled/qty · PDP Black · FAQ open
- [x] missingStates (2 deneme): mega open · hamburger open/changed · predictive input · tabs changed
- [x] Validator 0 error
