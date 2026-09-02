# Todo — Olelia (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://jewelry-online-shop-4.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/olelia-jewelry-exquisite-jewelry-shopify-template-o-s-2-0  
*Preset klasör:* `default` · slug `olelia`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Olelia-v-1-5-0-latest-updates new**  
`schema_name` = **Olelia** · `schema_version` = **1.5.0** · `role` = **main** · theme id `146057625765`  
`theme_store_id` = **null**  
`Shopify.shop` = `jewelry-online-shop-4.myshopify.com`  
Storefront `/` **302** → `/password`. Vendor product page: *Please enter password "1" to view demo.* Public unlock used; no other host.

**Durum:** Mod A walk (home + PLP + PDP + cart + search + collections) + interact + validate  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/olelia/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **46** |
| Parallel | yalnız `observations/olelia/`, `evidence/olelia/`, `todo/olelia.md`, `candidates/olelia-leftovers.md`, unlock helper |

**Kapsam satırı:**  
`Olelia · default · Olelia-v-1-5-0-latest-updates new / schema_name Olelia 1.5.0 · theme_store_id null · shop jewelry-online-shop-4.myshopify.com · home→PLP rings→PDP gold-diamond-pendant-necklace→cart→search gold→collections · 46 obs · 0 yeni şema · leftover: candidates/olelia-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Shop mega hover 1440 | [ ] interact | [ ] |
| Predictive search `gold` | [ ] interact | [ ] |
| Mobile menu 375 + 768 | [ ] interact | [ ] |
| Cart drawer empty + filled + qty | [ ] interact | [ ] |
| PDP Gold necklace (static) + Candid Love variant | [x] obs | [ ] interact |
| PLP `/collections/rings` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=gold` | [x] obs | [ ] capture |
| Cart page empty + filled + qty | [x] obs | [ ] interact |
| About / FAQ / blog / contact | leftover | — |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Olelia / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | categories_slider (types) | `collection-nav-slider` | reuse |
| 4 | slideshow Perfect for Every Occasion | `hero-slideshow` | reuse |
| 5 | custom_announcement_bar | `promo-scrolling-marquee` | reuse |
| 6 | collage_category Trending | `collection-nav-image-cards` | reuse |
| 7 | rich_text Find by Shapes | `editorial-rich-text` | reuse |
| 8 | categories_slider (shapes) | `collection-nav-slider.2` | reuse |
| 9 | featured Best Selling | `product-showcase-grid-featured` | reuse |
| 10 | deal_image_banner | `promo-banner-countdown` | reuse |
| 11 | offer_banner_with_slider | `promo-grid-banner` | reuse |
| 12 | rich_text manifesto | `editorial-rich-text.2` | reuse |
| 13 | sub_banner 2-up | `promo-grid-banner.2` | reuse |
| 14 | testimonial Happy Customers | `testimonial-quote-carousel` | reuse |
| 15 | testimonial Great Selection | `testimonial-quote-carousel.2` | reuse |
| 16 | image_banner Unique Story | `editorial-image-with-text-overlay` | reuse |
| 17 | featured New Arrival | `product-showcase-grid-featured.2` | reuse |
| 18 | collection_list Gender | `collection-nav-cards` | reuse |
| 19 | image_banner Gift | `editorial-image-with-text-overlay.2` | reuse |
| 20 | featured Trending | `product-showcase-grid-featured.3` | reuse |
| 21 | collection_list Earrings | `collection-nav-cards.2` | reuse |
| 22 | video | `media-video-hero` | reuse |
| 23 | Latest Blog | `blog-list-main` | reuse |
| 24 | brand_logo | `social-proof-brand-logos` | reuse |
| 25 | collage_instagram | `media-mosaic-grid` | reuse |
| 26 | newsletter | `lead-capture-newsletter-band` | reuse · submit yok |
| 27 | footer | `footer-columns-newsletter` | reuse |
| 28 | CartDrawer | `global-cart-drawer` | reuse · interact |
| 29 | menu-drawer | `global-menu-drawer` | reuse · interact |
| 30 | predictive-search | `global-predictive-search` | reuse · interact |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–30 | home static + overlays | home | [ ] | [x] | reuse | [ ] |
| 31–33 | banner / slider / PLP | collection | [ ] | [x] | reuse | [ ] |
| 34 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 35–44 | PDP blocks | product-detail | [ ] | [x] | reuse | [ ] |
| 45 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 46 | search-results | search | [ ] | [x] | reuse | [ ] |

---

## Interact

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | pending |
| global-predictive-search | input | pending |
| global-menu-drawer | open | pending |
| global-cart-drawer | filled + changed | pending |
| cart-page-main | filled + changed | pending |
| product-info-main | changed (Candid Love color) | pending |

Stop: email / account / checkout / newsletter submit / PII

---

## Aday / leftover

[`candidates/olelia-leftovers.md`](../candidates/olelia-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact Shop mega / search / cart / menu / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
