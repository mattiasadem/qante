# Todo — Furnix (Speedo / Decora)

*Kaynak (yalnız resmi walk):* https://pandora-furniture-6.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/decora-elegant-home-decor-shopify-theme-o-s-2-0  
*Preset klasör:* `default` · slug `furnix`  
*Vendor:* Speedo Themes (third-party Shopify 2.0)

**Storefront password:** `/` **302** → `/password`. Vendor yayınlı şifre **1** (ürün sayfası: “Please enter password 1 to view demo.” + `<title>` Pandora Furniture 6 (password: 1)). Başka host uydurulmadı.

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Decora-v-1-5-0-latest-updates New**  
`schema_name` = **Decora** · `schema_version` = **1.5.0** · `role` = **main** · theme id `134494290128`  
`theme_store_id` = **null** · `handle` = `"null"` · `style.id` / `style.handle` = **null**  
Walk host = `Shopify.shop` = `pandora-furniture-6.myshopify.com` · locale `en` · country `US` · currency `USD`

**Durum:** Mod A walk + resmi 3vp (devam) + interact (devam)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/furnix/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **40** |
| Parallel | yalnız `observations/furnix/`, `evidence/furnix/`, `todo/furnix.md`, `candidates/furnix-leftovers.md`, unlock helper |

**Kapsam satırı:**  
`Furnix · default · Decora 1.5.0 (listing slug furnix) · theme_store_id null · shop pandora-furniture-6.myshopify.com · password 1 (vendor-published) · home→PLP collection-layout-1→PDP Executive Arm Chair→search chair→collections→cart empty · 40 obs · 0 yeni şema · leftover: candidates/furnix-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Shop mega hover 1440 | [ ] interact | [ ] |
| Predictive search `chair` | [ ] interact | [ ] |
| Mobile menu 375 + 768 | [ ] interact | [ ] |
| Cart drawer empty + filled + qty | [ ] interact | [ ] |
| PDP Executive Arm Color / Leg Finish | [ ] interact | [ ] |
| PLP `/collections/collection-layout-1` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=chair` | [x] obs | [ ] capture |
| Cart page empty + filled + qty | [x] obs empty | [ ] interact |
| Map / related-products empty / account / checkout / newsletter submit | ⛔ leftover / dur | — |

---

## Home roster (DOM)

| # | Decora / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header / #site-header | `navigation-header-mega` | reuse · viewport (section h=1) |
| 3 | slideshow | `hero-slideshow` | reuse |
| 4 | categories_slider_rxtayN | `collection-nav-icon-buttons` | reuse |
| 5 | rich_text_ib4CLy | `editorial-rich-text` | reuse |
| 6 | sub_banner_QdDGEA | `promo-grid-banner` | reuse |
| 7 | offer_banner_kCHEA6 | `editorial-image-with-text-overlay` | reuse · metin boş |
| 8 | shopable_videos_p8JbA3 | `media-shop-the-feed` | reuse · video |
| 9 | rich_text_nkbnJL | `editorial-rich-text.2` | reuse |
| 10 | new_categories_slider_jMiVWf | `collection-nav-slider` | reuse |
| 11 | featured-product Best Selling | `product-showcase-grid-featured` | reuse |
| 12 | custom_announcement_bar_zqchrk | `promo-scrolling-marquee` | reuse |
| 13 | deal_image_banner_ca9Mjy | `promo-banner-countdown` | reuse |
| 14 | count_down_y3dLyy | `features-multicolumn` | reuse · istatistik |
| 15 | testimonial_d6pHJf | `testimonial-quote-carousel` | reuse |
| 16 | testimonial_BUi47R | `testimonial-quote-carousel.2` | reuse |
| 17 | sub_banner_jR9yMt | `promo-grid-banner.2` | reuse |
| 18 | collapsible_content_DUWzad | `faq-collapsible-tabs` | reuse |
| 19 | image_with_icons_MDF73t | `editorial-image-with-text` | reuse |
| 20 | service_icon_yLrPgn | `trust-icon-row` | reuse |
| 21 | image_banner_VRUfhY | `editorial-image-with-text-overlay.2` | reuse |
| 22 | before_after_ywkJDB | `before-after-slider` | reuse |
| 23 | Latest Blog | `blog-list-main` | reuse |
| 24 | custom_instagram_N8fnnR | `media-mosaic-grid` | reuse |
| 25 | brand_logo_HXQTj9 | `social-proof-brand-logos` | reuse |
| 26 | map_r3DcBq | — | leftover |
| 27 | newsletter_JaqXmE | `lead-capture-newsletter-band` | reuse · submit yok |
| 28 | footer | `footer-columns-newsletter` | reuse |
| — | CartDrawer | `global-cart-drawer` | reuse |
| — | menu-drawer | `global-menu-drawer` | reuse |
| — | details-modal.header__search | `global-predictive-search` | reuse |

---

## Other templates

| # | id | sayfa | JSON | Done |
|---|---|---|---|---|
| 1 | collection-banner | collection | [x] | [ ] 3vp |
| 2 | product-showcase-grid-plp | collection | [x] | [ ] 3vp |
| 3 | collection-nav-grid | collections | [x] | [ ] 3vp |
| 4 | search-results | search | [x] | [ ] 3vp |
| 5 | cart-page-main | cart | [x] | [ ] 3vp |
| 6 | product-info-main | product-detail | [x] | [ ] interact |
| 7 | product-info-tabs | product-detail | [x] | [ ] 3vp |
| 8 | media-video-hero | product-detail | [x] | [ ] 3vp |
| 9 | features-multicolumn | product-detail | [x] | [ ] 3vp |
| 10 | editorial-image-with-text | product-detail | [x] | [ ] 3vp |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 Shop mega |
| global-predictive-search | input | [ ] `chair` |
| global-menu-drawer | open | [ ] 375+768 |
| global-cart-drawer | filled + changed | [ ] |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed | [ ] Color / Leg Finish |
| product-showcase-grid-featured | hover | [ ] ikinci görsel / quick-add |
| faq-collapsible-tabs | changed | [ ] ilk soru |

---

## Aday / şemaya sığmayan

- [`candidates/furnix-leftovers.md`](../candidates/furnix-leftovers.md)

---

## Evidence backlog

- [ ] Resmi 3vp `capture-observation.mjs` (40 obs)
- [ ] Interact capture
- [ ] `node scripts/validate-schemas.mjs`
