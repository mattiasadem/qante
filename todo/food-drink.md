# Todo — Food & Drink (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://food-online-store-1.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/food-drink-shopify-restaurant-theme-shopify-os-2-0  
*Preset:* `default` · slug `food-drink`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Food & Drink V-1.5.0**  
`schema_name` = **Food & Drink** · `schema_version` = **1.5.0** · `role` = **main** · theme id `138021077169`  
`theme_store_id` = **null**  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
`Shopify.shop` = `food-online-store-1.myshopify.com` · locale `en`

**Unlock:** Vendor ürün sayfası “Please enter password 1 to view demo.” Aynı host `/password` — public storefront-unlock. Başka host yok.

**Durum:** Mod A roster yazıldı · 3vp capture + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/food-drink/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **36** |
| Parallel | `observations/food-drink/`, `evidence/food-drink/`, `todo/food-drink.md`, `candidates/food-drink-leftovers.md`, unlock host map |

**Kapsam satırı:**  
`Food & Drink · default · Food & Drink V-1.5.0 / schema_name Food & Drink 1.5.0 · theme_store_id null · shop food-online-store-1.myshopify.com · password 1 · home→PDP natural-cows-milk→PLP /collections/all→collections→search banana→cart→about/contact/faqs→news+post · 36 obs · 0 yeni şema · leftover: candidates/food-drink-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] static |
| Header Shop mega 1440 | [x] obs | [ ] interact |
| Predictive search `banana` | [x] obs | [ ] interact |
| Mobile menu 375 + 768 | [x] obs | [ ] interact |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| PDP Natural Cow's Milk Fat-free→Full fat | [x] obs | [ ] interact |
| PDP tabs DESCRIPTION→SHIPPING | [x] obs | [ ] interact |
| PLP `/collections/all` + hover/filter | [x] obs | [ ] |
| Collections `/collections` | [x] obs | [ ] static |
| Search `/search?q=banana` | [x] obs | [ ] static |
| Cart page empty + filled | [x] obs | [ ] interact |
| About `/pages/about` | [x] obs | [ ] static |
| Contact form (submit yok) | [x] obs | [ ] static |
| FAQ `/pages/faqs` | [x] obs | [ ] interact |
| News + prep post | [x] obs | [ ] static |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `__c46903b8…` ticker | `promo-announcement-bar` | reuse |
| 2 | `__header` | `navigation-header-mega` | reuse · Shop mega |
| 3 | `__3b7cb796…` ONLY THE BEST | `hero-slideshow` | reuse |
| 4 | `__collection_slider_iF7JYX` | `collection-nav-slider` | reuse |
| 5 | `__0617c2f2…` Best Seller | `product-showcase-grid-featured` | reuse |
| 6 | `__8b5479f1…` Organic Fresh Fruits | `editorial-image-with-text` | reuse |
| 7 | `__featured_collection` | `product-showcase-grid-featured.2` | reuse |
| 8 | `__sub_banner_HBn9KN` | `promo-grid-banner` | reuse |
| 9 | `__testimonials_rxy6M4` | `testimonial-quote-carousel` | reuse |
| 10 | `__588ae6a9…` Latest Blog | `blog-list-main` | reuse |
| 11 | `__6ce4ce05…` 3 ikon | `trust-icon-row` | reuse |
| 12 | `__footer` | `footer-columns-newsletter` | reuse · submit yok |
| 13 | `#CartDrawer` | `global-cart-drawer` | reuse |
| 14 | `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |
| 15 | `predictive-search` | `global-predictive-search` | reuse |
| — | `#newsletter-popup` h=0 | — | leftover PII |
| — | wishlist / compare pages | — | leftover |

---

## Aday / leftover

[`candidates/food-drink-leftovers.md`](../candidates/food-drink-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static
- [ ] Interact header / search / menu / cart / featured / FAQ / PDP / PLP
- [ ] `node scripts/validate-schemas.mjs` — 0 error hedef
