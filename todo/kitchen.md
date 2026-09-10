# Todo — Kitchen Ware (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://kitchen-ware-online-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/best-kitchen-ware-store-shopify-2-0-template  
*Preset:* `default` · slug `kitchen`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **kitchen-ware-v-1-5-0-OPTIMIZED**  
`schema_name` = **Kitchen Ware** · `schema_version` = **1.5.0** · `role` = **main** · theme id `150878355549`  
`theme_store_id` = **null**  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
`Shopify.shop` = `kitchen-ware-online-store.myshopify.com` · locale `en` · country `US` · currency `USD`

**Unlock:** Vendor ürün sayfası demo password `1`. Aynı host `/password` — public storefront-unlock. Başka host yok.

**Durum:** Mod A + static 3vp + interact yazıldı · 45 obs · 183 PNG · 0 yeni şema  
**PR:** https://github.com/mattiasadem/qante/pull/406 · draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/kitchen/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **45** |
| Evidence PNG | **183** |
| Parallel | `observations/kitchen/`, `evidence/kitchen/`, `todo/kitchen.md`, `candidates/kitchen-leftovers.md`, unlock host map |

**Kapsam satırı:**  
`Kitchen Ware · default · kitchen-ware-v-1-5-0-OPTIMIZED / schema_name Kitchen Ware 1.5.0 · theme_store_id null · shop kitchen-ware-online-store.myshopify.com · password 1 · home→PDP pressure-cooker-3-litre→PLP /collections/all→/collections→search pan→cart→about-layout-1/contact/faq→news+post · 45 obs · 183 PNG · 0 yeni şema · leftover: candidates/kitchen-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announce→footer) | [x] obs | [x] static |
| Header Shop mega 1440 | [x] obs | [x] interact · 6 kart (Bowls / Dining / Accessories / Coasters / Cookware / Candle) |
| Predictive search `pan` | [x] obs | [x] interact · 375/768/1440 PRODUCTS listesi |
| Mobile menu 375 + 768 | [x] obs | [x] interact · 1440 drawer 0×0 leftover |
| Cart drawer empty + filled + qty | [x] obs | [x] interact · $85 → $170 · YOU MAY LIKE leftover |
| PDP Size 1 Litre→5 Litre | [x] obs | [x] interact · galeri değişti · $85 aynı |
| PDP tabs DESCRIPTION→SHIPPING | [x] obs | [x] interact |
| PLP `/collections/all` + hover/filter | [x] obs | [x] static + 1440 hover · Color Black `missingStates.changed` |
| Collections `/collections` | [x] obs | [x] static |
| Search `/search?q=pan` | [x] obs | [x] static |
| Cart page empty + filled | [x] obs | [x] interact · qty 2 $170 |
| About `/pages/about-layout-1` (`/pages/about` 404) | [x] obs | [x] static |
| Contact form (submit yok) | [x] obs | [x] static |
| FAQ `/pages/faq` | [x] obs | [x] interact · allowMultipleOpen |
| News + post | [x] obs | [x] static |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `announcement_bar_fHNTbB` | `promo-announcement-bar` | reuse |
| 2 | `__header` | `navigation-header-mega` | reuse · Shop mega |
| 3 | `__collection_slider_wk9nMQ` | `collection-nav-slider` | reuse |
| 4 | `__3b7cb796…` COOKING EXPERIENCES | `hero-slideshow` | reuse |
| 5 | `__collection_list_4MnmjU` | `collection-nav-image-cards` | reuse |
| 6 | `__custom_announcement_bar_zqchrk` | `promo-scrolling-marquee` | reuse |
| 7 | `__homepage_product_tab_RncYLf` | `product-showcase-tabs` | reuse |
| 8 | `__image_banner_JmW9NK` | `editorial-image-with-text-overlay` | reuse |
| 9 | `__shopable_videos_P86GMK` | `media-shop-the-feed` | reuse |
| 10 | `__custom_multicolumn_list_33RpJf` | `features-multicolumn` | reuse · tarif kartları |
| 11 | `__testimonial_d6pHJf` | `testimonial-quote-carousel` | reuse |
| 12 | `__588ae6a9…` Latest Posts | `blog-list-main` | reuse |
| 13 | `__newsletter_TtPD6k` | `lead-capture-newsletter-band` | reuse · submit yok |
| 14 | `__footer` | `footer-columns-newsletter` | reuse |
| 15 | `#CartDrawer` | `global-cart-drawer` | reuse |
| 16 | `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |
| 17 | `predictive-search` | `global-predictive-search` | reuse |
| — | `#newsletter-popup` h=0 | — | leftover PII |
| — | `shopable-videos-fixed` h=0 | — | leftover |
| — | wishlist / compare pages | — | leftover |

---

## Aday / leftover

[`candidates/kitchen-leftovers.md`](../candidates/kitchen-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static
- [x] Interact header / search / menu / cart / PDP / FAQ / PLP / tabs
- [x] `node scripts/validate-schemas.mjs` — 0 error (13 preexisting warn, unrelated) · 0 yeni şema
