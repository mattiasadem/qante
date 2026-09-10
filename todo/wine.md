# Todo — Wine (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://wineshop-online-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/wine-best-wine-store-shopify-2-0-theme  
*Preset:* `default` · slug `wine`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Wine-v-1-5-0-new**  
`schema_name` = **Wine** · `schema_version` = **1.5.0** · `role` = **main** · theme id `142703067292`  
`theme_store_id` = **null**  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
`Shopify.shop` = `wineshop-online-store.myshopify.com` · locale `en` · country `US` · currency `USD`

**Unlock:** Vendor ürün sayfası demo password `1`. Aynı host `/password` — public storefront-unlock. Başka host yok.

**Durum:** Mod A observations yazıldı · 48 obs · 0 yeni şema · static 3vp + interact sırada  
**PR:** draft · **main’e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/wine/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **48** |
| Parallel | `observations/wine/`, `evidence/wine/`, `todo/wine.md`, `candidates/wine-leftovers.md`, unlock host map |

**Kapsam satırı:**  
`Wine · default · Wine-v-1-5-0-new / schema_name Wine 1.5.0 · theme_store_id null · shop wineshop-online-store.myshopify.com · password 1 · home→PDP bohemian-bliss→PLP /collections/red-wine→/collections→search wine→cart→our-story/about-layout-1/contact/faq→news+post · 48 obs · 0 yeni şema · leftover: candidates/wine-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] static |
| Header Shop mega 1440 | [ ] interact | [ ] |
| Predictive search `wine` | [ ] interact | [ ] |
| Mobile menu 375 + 768 | [ ] interact | [ ] |
| Cart drawer empty + filled + qty | [ ] interact | [ ] |
| PDP Bohemian Bliss (varyant yok) + tabs | [x] obs | [ ] interact tabs |
| PLP `/collections/red-wine` + filter | [x] obs | [ ] interact |
| Collections `/collections` | [x] obs | [ ] static |
| Search `/search?q=wine` | [x] obs | [ ] static |
| Cart page empty + filled | [x] obs | [ ] interact |
| Our Story `/pages/our-story` | [x] obs | [ ] static |
| About layout 1 | [x] obs | [ ] static |
| Contact form (submit yok) | [x] obs | [ ] static |
| FAQ `/pages/faq` | [x] obs | [ ] interact |
| News + dry white wines post | [x] obs | [ ] static |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `announcement_bar_fHNTbB` | `promo-announcement-bar` | reuse |
| 2 | `__header` | `navigation-header-mega` | reuse · Shop mega |
| 3 | `__3b7cb796…` WELCOME | `hero-slideshow` | reuse |
| 4 | `custom_collection_list_H796W3` | `collection-nav-image-cards` | reuse · 2 kart |
| 5 | `__0617c2f2…` ürün şeridi | `product-showcase-grid-featured` | reuse |
| 6 | `image_banner_9XKg9z` | `editorial-image-with-text-overlay` | reuse |
| 7 | `sub_banner_C7F97i` | `promo-grid-banner` | reuse |
| 8 | `featured_collection_CJ3UXm` | `product-showcase-grid-featured.2` | reuse |
| 9 | `image_banner_JmW9NK` | `editorial-image-with-text-overlay.2` | reuse |
| 10 | `collection_list_C4fRjh` | `collection-nav-image-cards.2` | reuse |
| 11 | `image_slider_width_product_AVVVDe` | `product-showcase-grid-featured.3` | reuse · görsel+ürün |
| 12 | `rich_text_with_image_nCAPDj` | `editorial-image-with-text` | reuse |
| 13 | `__588ae6a9…` Latest Blog | `blog-list-main` | reuse |
| 14 | `map_XxftPg` | — | leftover harita |
| 15 | `custom_announcement_bar_m3A7zE` | `promo-scrolling-marquee` | reuse |
| 16 | `__footer` | `footer-columns-newsletter` | reuse · submit yok |
| 17 | `#CartDrawer` | `global-cart-drawer` | reuse |
| 18 | `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |
| 19 | `details-modal.header__search` | `global-predictive-search` | reuse |
| — | `#newsletter-popup` h=0 | — | leftover PII |

---

## Aday / leftover

[`candidates/wine-leftovers.md`](../candidates/wine-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static
- [ ] Interact header / search / menu / cart / featured / FAQ / PDP tabs / PLP
- [ ] `node scripts/validate-schemas.mjs` — şema değişmedi
