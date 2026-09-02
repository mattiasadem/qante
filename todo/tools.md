# Todo — Tools (Speedo Themes)

*Kaynak (yalnız resmi walk):* https://tools-online-store-1.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/tools-shopify-tools-theme-os-2-0  
*Preset:* `default` · *Slug:* `tools`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **tools-v-1-5-0-latest-updates-new**  
`schema_name` = **Tools** · `schema_version` = **1.5.0** · `role` = **main** · theme id `176874815855`  
`theme_store_id` = **null** · `handle` = `"null"`  
`Shopify.shop` = `tools-online-store-1.myshopify.com`  
Title: `Tools - Shopify Tools Theme – Tools Online Store 1 (password: 1)`  
Storefront password (ürün sayfasında yayın): **`1`** — “Please enter password "1" to view demo.” Aynı host `/password`, başka vitrin yok.

**Durum:** Mod A walk + resmi 3vp (devam) · interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/tools/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **49** |
| Parallel | yalnız `observations/tools/`, `evidence/tools/`, `todo/tools.md`, `candidates/tools-leftovers.md`, unlock host satırı |

**Kapsam satırı:**  
`Tools · default · tools-v-1-5-0-latest-updates-new / schema_name Tools 1.5.0 · theme_store_id null · shop tools-online-store-1.myshopify.com · Speedo Themes · password 1 (vendor) · home→PDP miter-saw→PLP cutter→/collections→search tool→cart→about-layout-1→faq→contact→news+article→404 · 49 obs · 0 yeni şema · leftover: candidates/tools-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (header→footer + overlays) | roster | [ ] capture |
| Mega Shop 1440 | roster | [ ] interact |
| Predictive search katalog | roster | [ ] interact |
| Mobile menu 375 + 768 | roster | [ ] interact |
| Cart drawer empty + filled + qty | roster | [ ] interact |
| PDP `/products/miter-saw-tool-ceramic-tile-cutter` | roster | [ ] capture |
| PDP Color jackhammer Yellow→Borage | — | [ ] interact |
| Featured Quick Shop hover | — | [ ] interact |
| PLP `/collections/cutter` + filter | roster | [ ] capture + interact |
| Collections `/collections` | roster | [ ] capture |
| Search `/search?q=tool` | roster | [ ] capture |
| Cart `/cart` empty + filled | roster | [ ] interact |
| About `/pages/about-layout-1` (footer About Us) | roster | [ ] capture |
| Contact `/pages/contact` (submit yok) | roster | [ ] capture |
| FAQ `/pages/faq` | roster | [ ] capture + interact |
| News + master-it article | roster | [ ] capture |
| 404 `/pages/does-not-exist-qante-404` | roster | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM → QANTE)

| # | Tools / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header + utility | `navigation-header-mega` | reuse · mega Shop |
| 2 | `__3b7cb796` slideshow | `hero-slideshow` | reuse |
| 3 | `service_icon_TQa6Lr` | `trust-icon-row` | reuse |
| 4 | `__07468762` Shop By Categories | `collection-nav-image-cards` | reuse |
| 5 | `text_with_media_gallery_wdnwfx` | `editorial-dynamic-grid` | reuse · collage + CTA |
| 6 | `__0617c2f2` New Products | `product-showcase-grid-featured` | reuse |
| 7 | `sub_banner_UDd7ET` | `promo-grid-banner` | reuse |
| 8 | `featured_collection_K9MEmt` | `product-showcase-grid-featured.2` | reuse |
| 9 | `custom_announcement_bar_KPqXaL` | `promo-scrolling-marquee` | reuse |
| 10 | `video_NdTiEh` | `media-video-hero` | reuse · metin boş |
| 11 | `section_reviews_rjt64Q` | `testimonial-quote-carousel` | reuse |
| 12 | `offer_banner_a4YxPg` | `editorial-image-with-text-overlay` | reuse |
| 13 | `shopable_videos_FdDQpd` | `media-shop-the-feed` | reuse |
| 14 | `__588ae6a9` Latest Blog | `blog-list-main` | reuse · home featured |
| 15 | `brand_logo_FMEpek` | `social-proof-brand-logos` | reuse |
| 16 | `newsletter_JaqXmE` | `lead-capture-newsletter-band` | reuse · submit yok |
| 17 | footer | `footer-columns-newsletter` | reuse · form yok |
| 18 | newsletter-popup | — | leftover 0px / PII |
| 19 | `#CartDrawer` | `global-cart-drawer` | reuse · interact |
| 20 | `predictive-search` | `global-predictive-search` | reuse · interact |
| 21 | `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–20 | home + overlays | home | [ ] | [x] | reuse | [ ] |
| 21–29 | PDP miter + tabs/video/IWT/FAQ | product-detail | [ ] | [x] | reuse | [ ] |
| 30–32 | banner + slider + PLP | collection | [ ] | [x] | reuse | [ ] |
| 33 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 34 | search-results | search | [ ] | [x] | reuse | [ ] |
| 35 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 36–41 | about-layout-1 | about-brand | [ ] | [x] | reuse | [ ] |
| 42–43 | faq banner + tabs | faq-support | [ ] | [x] | reuse | [ ] |
| 44–46 | contact banner + office + form | contact | [ ] | [x] | reuse | [ ] |
| 47–48 | news + article | blog / blog-post | [ ] | [x] | reuse | [ ] |
| 49 | 404 | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 | [ ] |
| global-predictive-search | input | [ ] |
| global-menu-drawer | open 375+768 | [ ] |
| global-cart-drawer | initial + filled + changed | [ ] |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed Color jackhammer | [ ] |
| faq-collapsible-tabs | changed | [ ] |
| product-showcase-grid-plp | changed Color | [ ] |
| product-showcase-grid-featured | hover | [ ] |

---

## Aday / leftover

[`candidates/tools-leftovers.md`](../candidates/tools-leftovers.md)

---

## Stop kuralları

Checkout · account login · contact/newsletter submit · PII · gerçek ödeme yok. Sepete ekleme serbest.
