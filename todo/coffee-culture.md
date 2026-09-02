# Todo — Coffee Culture (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://coffee-prime-2.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/coffee-culture-best-coffee-theme-shopify-2-0-theme  
*Preset:* `default` · slug `coffee-culture`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **coffee-culture-v-1-5-0-latest-updates-new**  
`schema_name` = **Coffee culture** · `schema_version` = **1.5.0** · `role` = **main** · theme id `178172789019`  
`theme_store_id` = **null**  
`Shopify.shop` = `coffee-prime-2.myshopify.com`  
Title: `Coffee Culture - Best Coffee Theme – coffee-prime-2 (password: 1)`

**Password wall:** GET `/` → `/password`. Vendor ürün sayfası: “Please enter password `"1"` to view demo.” Public storefront-unlock `1` — aynı host. Başka host uydurulmadı.

**Durum:** Mod A + interact kapandı · 0 yeni şema  
**PR:** https://github.com/mattiasadem/qante/pull/349 (draft) · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/coffee-culture/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **48** |
| Parallel | `observations/coffee-culture/`, `evidence/coffee-culture/`, `todo/coffee-culture.md`, `candidates/coffee-culture-leftovers.md` + unlock host |

**Kapsam satırı:**  
`Coffee Culture · default · coffee-culture-v-1-5-0-latest-updates-new / schema_name Coffee culture 1.5.0 · theme_store_id null · shop coffee-prime-2.myshopify.com · password 1 · home→PDP mushroom-chaga→PLP /collections/all→/collections→search coffee→cart→about-layout-1→contact-layout-1→faqs→news+article→404 · 48 obs · 0 yeni şema · leftover: candidates/coffee-culture-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (hero→footer + overlays) | [x] obs | [x] capture |
| Shop mega 1440 | [x] interact — 6 koleksiyon kartı | [x] |
| Predictive search `coffee` | [x] interact — PRODUCTS 10 | [x] |
| Mobile menu 375 + 768 | [x] interact — open/changed missingStates | [x] |
| Cart drawer empty + filled + qty | [x] interact — empty missing; $180→$360 | [x] |
| PDP Size 120g→240g | [x] interact — $180 aynı | [x] |
| PLP `/collections/all` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=coffee` | [x] obs | [x] capture |
| Cart page empty + filled | [x] interact — empty / $180 / $360 | [x] |
| About `/pages/about-layout-1` | [x] obs | [x] capture |
| Contact form (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faqs` | [x] interact — Q2 açık, Q1 kaldı | [x] |
| News + first-coffee-shop | [x] obs | [x] capture |
| 404 | [x] obs | [x] capture |
| Featured hover | [x] interact — Quick Shop karede yok | — |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Coffee Culture / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `__header` sticky-header | `navigation-header-mega` | reuse · section h=0 |
| 2 | `__3b7cb796…` slideshow | `hero-slideshow` | reuse |
| 3 | `__custom_announcement_bar_zqchrk` | `promo-scrolling-marquee` | reuse |
| 4 | `__categories_slider_fg39U6` | `collection-nav-slider` | reuse |
| 5 | `__07468762…` Shop Coffee/Gear | `collection-nav-image-cards` | reuse |
| 6 | `__icon_with_image_aeAMjn` | `features-multicolumn` | reuse |
| 7 | `__0617c2f2…` Best Selling | `product-showcase-grid-featured` | reuse |
| 8 | `__deal_image_banner_ca9Mjy` | `promo-banner-countdown` | reuse |
| 9 | `__featured_collection_ebMtLy` | `product-showcase-grid-featured.2` | reuse |
| 10 | `__image_with_text_mJBgpE` | `editorial-image-with-text` | reuse |
| 11 | `__image_banner_hx7LAA` | — | leftover · metin yok |
| 12 | `__shopable_videos_6hMBaR` | `media-shop-the-feed` | reuse |
| 13 | `__testimonial_d6pHJf` | `testimonial-quote-carousel` | reuse |
| 14 | `__testimonial_Ag6cXj` | `testimonial-quote-carousel.2` | reuse |
| 15 | `__image_banner_with_round_3d9EdP` | `editorial-image-with-text.2` | reuse |
| 16 | `__588ae6a9…` Latest Blog | `blog-list-main` | reuse |
| 17 | `__brand_logo_FPxDB7` | `social-proof-brand-logos` | reuse |
| 18 | `__custom_instagram_N8fnnR` | `media-mosaic-grid` | reuse |
| 19 | `__newsletter_RpjQTr` | `lead-capture-newsletter-band` | reuse · PII yok |
| 20 | `__footer` | `footer-columns-newsletter` | reuse |
| 21 | `#CartDrawer` | `global-cart-drawer` | reuse |
| 22 | `#Details-menu-drawer-container` | `global-menu-drawer` | reuse |
| 23 | `details-modal.header__search` | `global-predictive-search` | reuse |
| — | `#newsletter-popup` h=0 | — | leftover PII |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–23 | home + overlays | home | [x] | [x] | reuse | [x] |
| 24–31 | PDP mushroom-chaga | product-detail | [x] | [x] | reuse | [x] |
| 32–34 | banner / slider / PLP | collection | [x] | [x] | reuse | [x] |
| 35 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 36 | search-results | search | [x] | [x] | reuse | [x] |
| 37 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 38–41 | about-layout-1 | about-brand | [x] | [x] | reuse | [x] |
| 42–44 | contact-layout-1 | contact | [x] | [x] | reuse | [x] |
| 45–46 | faqs | faq-support | [x] | [x] | reuse | [x] |
| 47–48 | news + article | blog | [x] | [x] | reuse | [x] |
| 49 | 404 | not-found | [x] | [x] | reuse | [x] |

---

## Aday / leftover

[`candidates/coffee-culture-leftovers.md`](../candidates/coffee-culture-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / menu / cart / PDP variant / featured hover / FAQ
- [x] `node scripts/validate-schemas.mjs` — 0 error (şema değişmedi)
