# Todo — Fitness (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://fitness-online-store-1.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/fitness-shopify-fitness-and-gyms-theme-os-2-0  
*Preset:* `default` · slug `fitness`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **fitness-v-1-5-0-latest-updates-new**  
`schema_name` = **Fitness** · `schema_version` = **1.5.0** · `role` = **main** · theme id `144062316591`  
`theme_store_id` = **null**  
`Shopify.shop` = `fitness-online-store-1.myshopify.com`  
Title: `Fitness Equipment & Gym Clothing – Fitness-online-store-1`

**Password wall:** GET `/` → `/password`. Vendor ürün sayfası: *Please enter password "1" to view demo.* Public storefront-unlock `1` — aynı host. Başka host uydurulmadı.

**Durum:** 🟡 51 obs + 3vp + interact/stateFindings · menu `open` + featured `hover` missingStates · 0 yeni şema  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/fitness/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **51** |
| Parallel | yalnız `observations/fitness/`, `evidence/fitness/`, `todo/fitness.md`, `candidates/fitness-leftovers.md` + unlock host |

**Kapsam satırı:**  
`Fitness · default · fitness-v-1-5-0-latest-updates-new / schema_name Fitness 1.5.0 · theme_store_id null · shop fitness-online-store-1.myshopify.com · password 1 · home→PDP thermal-pants→PLP best-seller→/collections→search gym→cart→about-layout-1+our-story→contact→faq→news+article→404 · 51 obs · 3vp + interact · 0 yeni şema · leftover: candidates/fitness-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (hero→footer + overlays) | [x] obs | [x] capture |
| Shop mega 1440 | [x] interact | [x] |
| Predictive search `gym`/`nike` | [x] interact | [x] |
| Mobile menu 375 + 768 | [x] interact | [x] missingStates open |
| Cart drawer empty + filled + qty | [x] interact | [x] |
| PDP Color Black→Grey | [x] interact | [x] |
| PLP `/collections/best-seller` + filter | [x] obs | [x] capture / [x] interact |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=gym` | [x] obs | [x] capture |
| Cart page empty + filled | [x] obs | [x] capture / [x] interact |
| About `/pages/about-layout-1` + our-story | [x] obs | [x] capture |
| Contact form (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faq` | [x] obs | [x] capture / [x] interact |
| News + article | [x] obs | [x] capture |
| 404 | [x] obs | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Fitness / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `__header` sticky | `navigation-header-mega` | reuse · 4 mega |
| 2 | `__image_slider_tHHD3N` | `hero-slideshow` | reuse |
| 3 | `__rich_text_TdEKYM` | `editorial-rich-text` | reuse |
| 4 | `__categories_slider_GcPMLE` | `collection-nav-slider` | reuse |
| 5 | `__07468762…` Trainings we Offer | `collection-nav-image-cards` | reuse |
| 6 | `__0617c2f2…` Top Brand Products | `product-showcase-grid-featured` | reuse |
| 7 | `__deal_image_banner_ca9Mjy` | `promo-banner-countdown` | reuse |
| 8 | `__pricing_plan_QpaLNR` | — | leftover · gym plan kartları |
| 9 | `__shopable_videos_iC3x3T` | `media-shop-the-feed` | reuse |
| 10 | `__featured_collection_9Yn4RW` | `product-showcase-grid-featured.2` | reuse |
| 11 | `__testimonial_d6pHJf` | `testimonial-quote-carousel` | reuse |
| 12 | `__testimonial_hDbCzL` | `testimonial-quote-carousel.2` | reuse |
| 13 | `__service_icon_4FD67X` Body & mind | `features-multicolumn` | reuse |
| 14 | `__588ae6a9…` Latest News | `blog-list-main` | reuse |
| 15 | `__custom_instagram_E7dTLP` | `media-mosaic-grid` | reuse |
| 16 | `__brand_logo_4rz8dn` | `social-proof-brand-logos` | reuse |
| 17 | `__newsletter_NbrYKQ` | `lead-capture-newsletter-band` | reuse · PII yok |
| 18 | `__footer` | `footer-columns-newsletter` | reuse |
| 19 | `#CartDrawer` | `global-cart-drawer` | reuse |
| 20 | `#menu-drawer` | `global-menu-drawer` | reuse |
| 21 | `details-modal.header__search` | `global-predictive-search` | reuse |
| — | announcement-bar | — | yok |
| — | `#newsletter-popup` h=0 | — | leftover PII |
| — | Quick shop / quick-add | — | leftover · QV modal yok |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–21 | home + overlays | home | [x] | [x] | reuse | [x] |
| 22–30 | PDP thermal-pants | product-detail | [x] | [x] | reuse | [x] |
| 31–33 | banner / slider / PLP | collection | [x] | [x] | reuse | [x] |
| 34 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 35 | search-results | search | [x] | [x] | reuse | [x] |
| 36 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 37–44 | about-layout-1 + our-story | about-brand | [x] | [x] | reuse | [x] |
| 45–47 | contact | contact | [x] | [x] | reuse | [x] |
| 48–49 | faq | faq-support | [x] | [x] | reuse | [x] |
| 50–51 | news + article | blog | [x] | [x] | reuse | [x] |
| 52 | 404 | not-found | [x] | [x] | reuse | [x] |

---

## Aday / leftover

[`candidates/fitness-leftovers.md`](../candidates/fitness-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp `capture-observation.mjs` (menu 375/1440 `#menu-drawer` width 0 until details open — interact forceOpen)
- [x] Interact: mega / search / cart drawer+page / PDP swatch / FAQ / PLP filter
- [x] Menu `open` + featured `hover` — iki deneme, `missingStates` (kare değişmedi)
