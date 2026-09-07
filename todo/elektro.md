# Todo — Elektro (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://sonix-electronics-store-2.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/elektro-cutting-edge-electronics-shopify-template-o-s-2-0  
*Preset klasör:* `default` · slug `elektro`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Elektro-v-1-5-0-latest-updates-new-speed**  
`schema_name` = **Elektro** · `schema_version` = **1.5.0** · `role` = **main** · theme id `136395325505`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
Walk host + `Shopify.shop` = `sonix-electronics-store-2.myshopify.com` · locale `en` · country `US` · currency `USD`

**Password wall:** GET `/` → `/password`. Title `Elektro - Best Shopify Electronics Store – Sonix Electronics Store 2 (password: 1)`. Vendor ürün sayfası: *Please enter password 1 to view demo.* Public storefront-unlock `1` — hesap değil. **Başka host uydurulmadı.**

**Durum:** Mod A + 3vp + interact bitti (0 yeni şema)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/elektro/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **55** |
| Parallel | yalnız `observations/elektro/`, `evidence/elektro/`, `todo/elektro.md`, `candidates/elektro-leftovers.md`, unlock host satırı |

**Kapsam satırı:**  
`Elektro · default · Elektro-v-1-5-0-latest-updates-new-speed / schema_name Elektro 1.5.0 · theme_store_id null · shop sonix-electronics-store-2.myshopify.com · password 1 · home→PDP JBL Clip Color→PLP cameras→/collections→search speaker→cart→about-layout-1→our-story→contact-layout-1→news+post→404 · 55 obs · 0 yeni şema · leftover: candidates/elektro-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] 3vp |
| Shop mega hover 1440 | [x] open — 6 kare kart | [x] |
| Predictive search `speaker` | [x] 1440 PRODUCTS · 375/768 missing | [x] |
| Mobile menu 375 + 768 | missingStates — kare kapalı | — |
| Cart drawer empty + filled + qty | [x] $310 → $620 | [x] |
| PDP JBL Clip Color Grayish Blue→Black | [x] galeri + label | [x] |
| PLP `/collections/cameras` | [x] obs | [x] 3vp |
| Collections `/collections` | [x] obs | [x] 3vp |
| Search `/search?q=speaker` | [x] obs | [x] 3vp |
| Cart page empty + filled | [x] boş → satır → qty 2 | [x] |
| About `/pages/about-layout-1` (footer About Us) | [x] obs | [x] 3vp |
| Our Story `/pages/our-story` | [x] obs | [x] 3vp |
| Contact `/pages/contact-layout-1` (submit yok) | [x] obs | [x] 3vp |
| FAQ `/pages/faq` | leftover — home'a düşüyor | — |
| News + article | [x] obs | [x] 3vp |
| 404 | [x] obs | [x] 3vp |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | categories_slider_annBwQ | `collection-nav-slider` | reuse |
| 4 | slideshow Huge Saving on VR | `hero-slideshow` | reuse |
| 5 | custom_announcement_bar_zqchrk | `promo-scrolling-marquee` | reuse |
| 6 | text_with_image_LeYYPR | `editorial-image-with-text` | reuse |
| 7 | featured-product Best Selling | `product-showcase-grid-featured` | reuse |
| 8 | deal_image_banner_ca9Mjy | `promo-banner-countdown` | reuse |
| 9 | brand_logo_YVEyj3 | `social-proof-brand-logos` | reuse |
| 10 | sub_banner_X36AkU | `promo-grid-banner` | reuse |
| 11 | shopable_videos_KKQwqw | `media-shop-the-feed` | reuse |
| 12 | testimonial_d6pHJf | `testimonial-quote-carousel` | reuse |
| 13 | testimonial_gTEpHY | `testimonial-quote-carousel.2` | reuse |
| 14 | bestseller_product_hfbLR7 New Arrival | `product-showcase-grid-featured.2` | reuse |
| 15 | collapsible_content_4fhKMf | `faq-collapsible-tabs` | reuse · interact |
| 16 | before_after_G7rNQK | `before-after-slider` | reuse · interact |
| 17 | Latest Blog | `blog-list-main` | reuse |
| 18 | lookbook_VBXKPg | `media-lookbook-banner` | reuse |
| 19 | service_icon_yLrPgn | `trust-icon-row` | reuse |
| 20 | custom_instagram_N8fnnR | `media-mosaic-grid` | reuse |
| 21 | newsletter_JaqXmE | `lead-capture-newsletter-band` | reuse · submit yok |
| 22 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 23 | newsletter-popup | — | leftover 0px / PII |
| 24 | CartDrawer | `global-cart-drawer` | reuse · interact |
| 25 | details-modal.header__search | `global-predictive-search` | reuse · interact |
| 26 | menu-drawer | `global-menu-drawer` | reuse · 375/768 |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–25 | home static + overlays | home | [x] | [x] | reuse | [x] |
| 26–35 | PDP JBL + tabs/video/IWT/related | product-detail | [x] | [x] | reuse | [x] |
| 36–38 | banner + slider + PLP | collection | [x] | [x] | reuse | [x] |
| 39 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 40 | search-results | search | [x] | [x] | reuse | [x] |
| 41 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 42–48 | about-layout-1 | about-brand | [x] | [x] | reuse | [x] |
| 49 | page-content-main | our-story | [x] | [x] | reuse | [x] |
| 50–52 | contact-layout-1 | contact | [x] | [x] | reuse | [x] |
| 53–54 | news + post | blog-* | [x] | [x] | reuse | [x] |
| 55 | 404 | not-found | [x] | [x] | reuse | [x] |

---

## Interact (plan)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 | 6 kare: Cameras / Mobile Devices / Laptops / Refrigerators / Smart TV / Accessories |
| global-predictive-search | input speaker | 1440 PRODUCTS JBL + HomePod · 375/768 missing |
| global-menu-drawer | open 375/768 | missingStates |
| global-cart-drawer | filled + changed | Grayish Blue $310 → adet 2 $620 · YOU MAY LIKE leftover |
| cart-page-main | filled + changed | boş → satır $310 → $620 |
| product-info-main | changed Color | Grayish Blue → Black |
| product-showcase-grid-featured | hover | missingStates (kare=initial) |
| faq-collapsible-tabs | changed | missingStates (kare=initial) |
| before-after-slider | changed | missingStates (ayırıcı %50) |

---

## Aday / leftover

[`candidates/elektro-leftovers.md`](../candidates/elektro-leftovers.md)
