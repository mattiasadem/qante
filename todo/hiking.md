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

**Durum:** Mod A walk + observation yazıldı · 3vp capture / interact sürüyor  
**PR:** draft · **main'e merge yok**

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
| Home roster (hero→footer + overlays) | [x] obs | [ ] capture |
| Header / Shop mega 1440 | [x] obs | [ ] interact |
| Predictive search | [x] obs | [ ] interact |
| Mobile menu 375 + 768 | [x] obs | [ ] interact |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| PDP Folding Camping Chair Color | [x] obs | [ ] interact |
| PLP `/collections/all` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=hike` | [x] obs | [ ] capture |
| Cart page empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/about-layout-1` | [x] obs | [ ] capture |
| Contact form (submit yok) | [x] obs | [ ] capture |
| FAQ `/pages/faq` | [x] obs | [ ] interact |
| News + mastering-the-mountain | [x] obs | [ ] capture |
| 404 | [x] obs | [ ] capture |
| Featured hover | [ ] | [ ] interact |
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
| 1–16 | home + overlays | home | [ ] | [x] | reuse | [ ] |
| 17–25 | chair PDP | product-detail | [ ] | [x] | reuse | [ ] |
| 26–28 | banner / slider / PLP | collection | [ ] | [x] | reuse | [ ] |
| 29 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 30 | search-results | search | [ ] | [x] | reuse | [ ] |
| 31 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 32–35 | about-layout-1 | about-brand | [ ] | [x] | reuse | [ ] |
| 36–38 | banner / icon-band / form | contact | [ ] | [x] | reuse | [ ] |
| 39–40 | banner + faq | faq-support | [ ] | [x] | reuse | [ ] |
| 41–42 | list + post | blog* | [ ] | [x] | reuse | [ ] |
| 43 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] Shop mega 1440 |
| global-menu-drawer | open | [ ] hamburger 375/768 |
| global-predictive-search | input | [ ] katalogSorgu |
| global-cart-drawer | filled + changed | [ ] |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed Color | [ ] Blue→Red |
| faq-collapsible-tabs | changed | [ ] |
| product-showcase-grid-featured | hover 1440 | [ ] |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/hiking-leftovers.md`](../candidates/hiking-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu / cart / PDP Color / FAQ
- [ ] PNG bak → stateFindings
- [ ] `node scripts/validate-schemas.mjs`
