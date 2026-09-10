# Todo — Hiking (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://hiking-online-store-1.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/hiking-hiking-mountain-trekking-shopify-themes-0s-2-0  
*Preset klasör:* `default` · slug `hiking`  
*Vendor:* Speedo Themes (üçüncü taraf, Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Hiking-v-1-5-0-latest-updates-new**  
`schema_name` = **Hiking** · `schema_version` = **1.5.0** · `role` = **main** · theme id `179362103590`  
`theme_store_id` = **null**  
`Shopify.shop` = `hiking-online-store-1.myshopify.com` · locale `en` · country `US` · currency `USD`  
Title: `Hiking - Best Shopify Hiking Store – hiking-online-store-1 (password: 1)`  
Storefront password **1** (Speedo product page + title). Public storefront-unlock — aynı host.

**Durum:** Mod A + 3vp + interact pixel-check bitti · 0 yeni şema  
**PR:** draft #384 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/hiking/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **43** |
| Parallel | yalnız `observations/hiking/`, `evidence/hiking/`, `todo/hiking.md`, `candidates/hiking-leftovers.md`, unlock host |

**Kapsam satırı:**  
`Hiking · default · Hiking-v-1-5-0-latest-updates-new / schema_name Hiking 1.5.0 · theme_store_id null · shop hiking-online-store-1.myshopify.com · password 1 · home→PDP folding-camping-chair→PLP /collections/all→/collections→search hike→cart→about-layout-1→contact→faq→news+mastering-the-mountain→404 · 43 obs · 0 yeni şema · leftover: candidates/hiking-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (hero→footer + overlays) | [x] obs | [x] capture |
| Header / Shop mega 1440 | [x] obs | [x] interact |
| Predictive search | [x] obs | [x] interact |
| Mobile menu 375 + 768 | [x] obs | [x] interact (open missingStates) |
| Cart drawer empty + filled + qty | [x] obs | [x] interact (empty missingStates) |
| PDP Folding Camping Chair Color | [x] obs | [x] interact |
| PLP `/collections/all` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=hike` | [x] obs | [x] capture |
| Cart page empty + filled + qty | [x] obs | [x] interact |
| About `/pages/about-layout-1` | [x] obs | [x] capture |
| Contact form (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faq` | [x] obs | [x] interact |
| News + mastering-the-mountain | [x] obs | [x] capture |
| 404 | [x] obs | [x] capture |
| Featured hover | [x] obs | [x] interact (hover missingStates) |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Hiking / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `__header` sticky-header | `navigation-header-mega` | reuse · section h=1 |
| 2 | `__3b7cb796…` slideshow | `hero-slideshow` | reuse |
| 3 | `__07468762…` TREKKING/SHOES/BAGS/CAMPING | `collection-nav-image-cards` | reuse |
| 4 | `__rich_text_LVFCyM` | `editorial-rich-text` | reuse |
| 5 | `__image_slider_width_product_GRttWd` Best Selling | `product-showcase-grid-featured` | reuse · hibrit leftover |
| 6 | `__featured_product_with_banner_fwEw3y` Deal of the Week | `product-showcase-featured` | reuse |
| 7 | `__0617c2f2…` New Arrivals | `product-showcase-grid-featured.2` | reuse |
| 8 | `__testimonial_Yx3KcP` | `testimonial-quote-carousel` | reuse |
| 9 | `__image_banner_VAG334` Ready for hiking | `editorial-image-with-text-overlay` | reuse |
| 10 | `__588ae6a9…` Our News & Events | `blog-list-main` | reuse |
| 11 | `__shopable_videos_kRVYEq` | `media-shop-the-feed` | reuse |
| 12 | `__custom_instagram_67qQJj` | `media-mosaic-grid` | reuse |
| 13 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 14 | `details-modal.header__search` | `global-predictive-search` | reuse · interact |
| 15 | `#Details-menu-drawer-container` | `global-menu-drawer` | reuse · interact |
| 16 | `#CartDrawer` | `global-cart-drawer` | reuse · interact |
| — | `#newsletter-popup` h=0 | — | leftover PII |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–16 | home + overlays | home | [x] | [x] | reuse | [x] |
| 17–25 | chair PDP | product-detail | [x] | [x] | reuse | [x] |
| 26–28 | banner / slider / PLP | collection | [x] | [x] | reuse | [x] |
| 29 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 30 | search-results | search | [x] | [x] | reuse | [x] |
| 31 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 32–35 | about-layout-1 | about-brand | [x] | [x] | reuse | [x] |
| 36–38 | banner / icon-band / form | contact | [x] | [x] | reuse | [x] |
| 39–40 | banner + faq | faq-support | [x] | [x] | reuse | [x] |
| 41–42 | list + post | blog* | [x] | [x] | reuse | [x] |
| 43 | page-content-main | not-found | [x] | [x] | reuse | [x] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Shop mega 6 kart (Trekking / Shoes / Bags / Camping / Hiking Goggles / Hiking Tools) |
| global-menu-drawer | open | [x] iki deneme — missingStates (kare drawer değil) |
| global-predictive-search | input | [x] hike + PRODUCTS listesi |
| global-cart-drawer | filled + changed | [x] chair $105 → $210; empty missingStates |
| cart-page-main | filled + changed | [x] empty + chair $105 → $210 |
| product-info-main | changed Color | [x] Blue→Red; stok 100→50 |
| faq-collapsible-tabs | changed | [x] Q1+Q2 çoklu açık |
| product-showcase-grid-featured | hover 1440 | [x] iki deneme — missingStates (Quick Shop yok) |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/hiking-leftovers.md`](../candidates/hiking-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / menu / cart / PDP Color / FAQ
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs`
