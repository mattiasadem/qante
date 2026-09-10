# Todo — Levitate (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://backpack-online-store-2.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/levitate-purse-bags-shopify-2-0-template  
*Preset:* `default` · slug `levitate`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Levitate V-1.5.0**  
`schema_name` = **Purse & Bags** · `schema_version` = **1.5.0** · `role` = **main** · theme id `178196283681`  
`theme_store_id` = **null**  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
`Shopify.shop` = `backpack-online-store-2.myshopify.com` · locale `en` · country `US` · currency `USD`

**Unlock:** Vendor ürün sayfası “Please enter password 1 to view demo.” Aynı host `/password` — public storefront-unlock. Başka host yok.

**Durum:** Mod A roster yazıldı · 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/levitate/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **49** |
| Parallel | `observations/levitate/`, `evidence/levitate/`, `todo/levitate.md`, `candidates/levitate-leftovers.md`, unlock host map |

**Kapsam satırı:**  
`Levitate · default · Levitate V-1.5.0 / schema_name Purse & Bags 1.5.0 · theme_store_id null · shop backpack-online-store-2.myshopify.com · password 1 · home→PDP sports-charms-bogg-bag Grey Mare→Pastel Grey→PLP /collections/all→/collections→search ANDIBRO (boş)→cart→about-layout-1→contact→faq→news+bowling post→404 · 49 obs · 0 yeni şema · leftover: candidates/levitate-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] static |
| Header Shop mega 1440 | [x] obs | [ ] interact |
| Predictive search `ANDIBRO` | [x] obs | [ ] interact |
| Mobile menu 375 + 768 | [x] obs | [ ] interact |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| PDP SPORTS CHARMS BOGG Color Grey Mare→Pastel Grey | [x] obs | [ ] interact |
| PDP tabs Description→Additional Information | [x] obs | [ ] interact |
| PLP `/collections/all` + hover/filter | [x] obs | [ ] static + interact |
| Collections `/collections` | [x] obs | [ ] static |
| Search `/search?q=ANDIBRO` (boş) | [x] obs | [ ] static |
| Cart page empty + filled | [x] obs | [ ] interact |
| About `/pages/about-layout-1` | [x] obs | [ ] static |
| Contact form (submit yok) | [x] obs | [ ] static |
| FAQ `/pages/faq` | [x] obs | [ ] interact |
| News + bowling post | [x] obs | [ ] static |
| 404 | [x] obs | [ ] static |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `announcement_bar_fHNTbB` | `promo-announcement-bar` | reuse |
| 2 | `__header` | `navigation-header-mega` | reuse · 5 mega |
| 3 | `__3b7cb796…` slideshow | `hero-slideshow` | reuse |
| 4 | `featured_tab_dGXFqP` | `product-showcase-tabs` | reuse |
| 5 | `__07468762…` categories | `collection-nav-image-cards` | reuse |
| 6 | `brand_logo_R3cUyq` | `social-proof-brand-logos` | reuse |
| 7 | `deal_image_banner_ca9Mjy` | `promo-banner-countdown` | reuse |
| 8 | `__0617c2f2…` FEATURE PRODUCT | `product-showcase-grid-featured` | reuse |
| 9 | `text_with_image_slider_Uhz7GF` | `promo-scrolling-marquee` | reuse |
| 10 | `text_with_image_slider_gPJgj6` | `promo-scrolling-marquee.2` | reuse |
| 11 | `customer_reviews_TiFHPp` | `testimonial-quote-carousel` | reuse |
| 12 | `video_MakxPW` | `media-video-hero` | reuse |
| 13 | `featured_product_9tmLw3` | `product-showcase-featured` | reuse |
| 14 | `__588ae6a9…` blog | `blog-list-main` | reuse |
| 15 | `newsletter_eQFiAH` | `lead-capture-newsletter-band` | reuse · submit yok |
| 16 | `custom_instagram_N8fnnR` | `media-shop-the-feed` | reuse |
| 17 | `service_icon_cRV7DD` | `trust-icon-row` | reuse |
| 18 | `__footer` | `footer-columns-newsletter` | reuse · submit yok |
| 19 | `#CartDrawer` | `global-cart-drawer` | reuse |
| 20 | `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |
| 21 | `#Search-In-Modal` | `global-predictive-search` | reuse |
| — | `#newsletter-popup` h=0 | — | leftover |
| — | wishlist / compare / size-guide | — | leftover |

---

## Aday / leftover

[`candidates/levitate-leftovers.md`](../candidates/levitate-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static
- [ ] Interact header / search / menu / cart / featured / FAQ / PDP / PLP
- [ ] `node scripts/validate-schemas.mjs`
