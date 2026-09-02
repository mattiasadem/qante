# Todo — Bevaria (Speedo Themes · third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://beverages-online-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/bevaria-sophisticated-beverage-shopify-template-o-s-2-0  
*Preset:* `default` · slug `bevaria`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Bevaria-v-1-5-0-latest-updates-new**  
`schema_name` = **Bevaria** · `schema_version` = **1.5.0** · `role` = **main** · theme id `150290759935`  
`theme_store_id` = **null**  
`Shopify.shop` = `beverages-online-store.myshopify.com` · locale `en` · country `US` · currency `USD`

**Unlock:** Vendor ürün sayfası + storefront title `beverages-online-store (password: 1)`. Public storefront password `1` girildi → `/` açıldı. Başka host yok.

**Durum:** Mod A 50 obs + static 3vp (147 PNG; menu 1440 + home slider 375 skip) · interact sırada  
**PR:** draft · **main’e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/bevaria/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **50** |
| Parallel | `observations/bevaria/`, `evidence/bevaria/`, `todo/bevaria.md`, `candidates/bevaria-leftovers.md`, `scripts/unlock-storefront.mjs` |

**Kapsam satırı:**  
`Bevaria · default · Bevaria-v-1-5-0-latest-updates-new / schema_name Bevaria 1.5.0 · theme_store_id null · password 1 (vendor-published) · home→PDP PURA→PLP best-selling→collections→search energy→cart→faq/contact/our-story/about-layout-1→news+post · 50 obs · 0 yeni şema · leftover: candidates/bevaria-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] static (slider 375 leftover) |
| Header Shop mega 1440 | [ ] interact | [ ] |
| Predictive search `energy` | [ ] interact | [ ] |
| Mobile menu 375 + 768 | [ ] interact | [ ] |
| Cart drawer empty + filled + qty | [ ] interact | [ ] |
| PDP PURA flavour swatch | [x] obs | [x] static · changed sırada |
| PLP `/collections/best-selling` | [x] obs | [x] static · filter sırada |
| Collections `/collections` | [x] obs | [x] |
| Search `/search?q=energy` | [x] obs | [x] static |
| Cart page empty + filled | [x] obs | [x] empty · filled sırada |
| FAQ `/pages/faq` | [x] obs | [x] static · accordion sırada |
| Contact `/pages/contact` (submit yok) | [x] obs | [x] |
| Our Story + About layout 1 | [x] obs | [x] |
| News + vegan article | [x] obs | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Bevaria / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `announcement_bar_fHNTbB` | `promo-announcement-bar` | reuse |
| 2 | `__header` | `navigation-header-mega` | reuse · mega + interact |
| 3 | `categories_slider_txebkg` | `collection-nav-slider` | reuse |
| 4 | slideshow `__3b7cb796…` | `hero-slideshow` | reuse |
| 5 | `icon_with_image_cbrkPE` | `editorial-image-with-text` | reuse · 4 ikon delta |
| 6 | `featured_collection_jAK8tq` | `product-showcase-grid-featured` | reuse |
| 7 | `image_banner_X9kUxQ` | `editorial-image-with-text-overlay` | reuse |
| 8 | collection-list `__07468762…` | `collection-nav-image-cards` | reuse |
| 9 | `image_with_text_TwkyGQ` | `editorial-image-with-text.2` | reuse |
| 10 | featured `__0617c2f2…` | `product-showcase-grid-featured.2` | reuse |
| 11 | `customer_reviews_frcza3` | `testimonial-quote-carousel` | reuse |
| 12 | Latest Blog `__588ae6a9…` | `blog-list-main` | reuse |
| 13 | `brand_logo_hpgNUr` | `social-proof-brand-logos` | reuse |
| 14 | `custom_instagram_N8fnnR` | `media-mosaic-grid` | reuse |
| 15 | `newsletter_JaqXmE` | `lead-capture-newsletter-band` | reuse · PII yok |
| 16 | `__footer` | `footer-columns-newsletter` | reuse |
| 17 | `#CartDrawer` | `global-cart-drawer` | reuse · interact |
| 18 | `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |
| 19 | `details-modal.header__search` | `global-predictive-search` | reuse · energy |
| — | `#newsletter-popup` h=0 | — | leftover PII |

---

## Aday / leftover

[`candidates/bevaria-leftovers.md`](../candidates/bevaria-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (147 PNG; menu 1440 zero; slider 375 zero)
- [ ] Interact header / search / menu / cart / featured hover / FAQ / PDP flavour / PLP filter / cart page
- [ ] `node scripts/validate-schemas.mjs` — 0 error (şema değişmedi)
