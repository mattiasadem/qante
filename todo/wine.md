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

**Durum:** first inventory + interact · 48 obs · 0 yeni şema · 190 PNG  
**PR:** draft · **main’e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/wine/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **48** |
| PNG | **190** |
| Parallel | `observations/wine/`, `evidence/wine/`, `todo/wine.md`, `candidates/wine-leftovers.md`, unlock host map |

**Kapsam satırı:**  
`Wine · default · Wine-v-1-5-0-new / schema_name Wine 1.5.0 · theme_store_id null · shop wineshop-online-store.myshopify.com · password 1 · home→PDP bohemian-bliss→PLP /collections/red-wine→/collections→search wine→cart→our-story/about-layout-1/contact/faq→news+post · 48 obs · 190 PNG · 0 yeni şema · leftover: candidates/wine-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] static |
| Header Shop mega 1440 | [x] interact | [x] Shop 6 kart |
| Predictive search `wine` | [x] interact | [x] PRODUCTS listesi |
| Mobile menu 375 + 768 | [x] interact | [x] 1440 host yok |
| Cart drawer empty + filled + qty | [x] interact | [x] $520 → $1040 |
| PDP Bohemian Bliss (varyant yok) + tabs | [x] obs | [x] Shipping sekmesi |
| PLP `/collections/red-wine` + filter | [x] obs | [x] Dry 1440; 375/768 missing |
| Collections `/collections` | [x] obs | [x] static |
| Search `/search?q=wine` | [x] obs | [x] static |
| Cart page empty + filled | [x] obs | [x] $520 → $1040 |
| Our Story `/pages/our-story` | [x] obs | [x] static |
| About layout 1 | [x] obs | [x] static |
| Contact form (submit yok) | [x] obs | [x] static |
| FAQ `/pages/faq` | [x] obs | [x] Q2 açık |
| News + dry white wines post | [x] obs | [x] static |
| Featured kart hover 1440 | [x] interact | [x] 2. görsel; 375/768 yok |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `announcement_bar_fHNTbB` | `promo-announcement-bar` | reuse |
| 2 | `__header` | `navigation-header-mega` | reuse · Shop mega 6 kart |
| 3 | `__3b7cb796…` WELCOME | `hero-slideshow` | reuse |
| 4 | `custom_collection_list_H796W3` | `collection-nav-image-cards` | reuse · 2 kart |
| 5 | `__0617c2f2…` ürün şeridi | `product-showcase-grid-featured` | reuse · hover 1440 |
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
| 17 | `#CartDrawer` | `global-cart-drawer` | reuse · empty/filled/qty |
| 18 | `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |
| 19 | `details-modal.header__search` | `global-predictive-search` | reuse · wine |
| — | `#newsletter-popup` h=0 | — | leftover PII |

---

## Aday / leftover

[`candidates/wine-leftovers.md`](../candidates/wine-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static
- [x] Interact header / search / menu / cart / featured / FAQ / PDP tabs / PLP
- [x] `node scripts/validate-schemas.mjs` — şema değişmedi
