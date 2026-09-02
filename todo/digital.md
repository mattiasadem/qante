# Todo — Digital (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://digital-gallery-shop-2.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/digital-innovative-digital-products-shopify-theme-o-s-2-0  
*Preset:* `default` · *Slug:* `digital`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **digital-v-1-5-0-latest-updates-new**  
`schema_name` = **Digital** · `schema_version` = **1.5.0** · `role` = **main** · theme id `177910022451`  
`theme_store_id` = **null**  
shop `digital-gallery-shop-2.myshopify.com` · locale `en` · country `US` · currency `USD`

**Unlock:** `/` **302** → `/password`. Dawn `details.password-modal` + “Enter using password”. Vendor şifresi ürün sayfasında: **`1`**. Aynı host — başka demo uydurulmadı.

**Durum:** Mod A walk + observation yazıldı · 3vp capture + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/digital/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| Parallel | yalnız `observations/digital/`, `evidence/digital/`, `todo/digital.md`, `candidates/digital-leftovers.md` + unlock host |

**Kapsam satırı:**  
`Digital · default · digital-v-1-5-0-latest-updates-new / schema_name Digital 1.5.0 · theme_store_id null · shop digital-gallery-shop-2.myshopify.com · password 1 · home→PDP health-wellness→PLP /collections/all→collections→search digital→cart→contact/faq→news+post→our-story→404 · 39 obs · 113 PNG · 0 yeni şema · leftover: candidates/digital-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] static |
| Header SHOP mega 1440 | [ ] interact | [ ] |
| Predictive search `digital` | [ ] interact | [ ] |
| Mobile menu 375 + 768 | [ ] interact | [ ] |
| Cart drawer empty + filled + qty | [ ] interact | [ ] |
| PDP Health And Wellness (varyant yok) | [x] obs | [x] static |
| PLP `/collections/all` | [x] obs | [x] static |
| Collections `/collections` | [x] obs | [x] |
| Search `/search?q=digital` | [x] obs | [x] |
| Cart `/cart` empty + filled | [x] obs empty | [x] empty |
| Contact `/pages/contact` (submit yok) | [x] obs | [x] |
| FAQ `/pages/faq` | [x] obs | [x] static |
| News + membership post | [x] obs | [x] |
| Our Story `/pages/our-story` | [x] obs | [x] |
| 404 | [x] obs | [x] |
| About/contact layout 1–4 / wishlist / compare | leftover | — |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Digital / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `announcement_bar_fHNTbB` | `promo-announcement-bar` | reuse |
| 2 | `header` | `navigation-header-mega` | reuse · SHOP/THEMES mega |
| 3 | `3b7cb796…` | `hero-slideshow` | reuse |
| 4 | `collection_slider_yqTHJd` | `collection-nav-icon-buttons` | reuse · ikon daire |
| 5 | `shopable_videos_LBBUfC` | `media-shop-the-feed` | reuse |
| 6 | `featured_collection_aaAnaN` | `product-showcase-grid-featured` | reuse |
| 7 | `deal_image_banner_ca9Mjy` | `promo-banner-countdown` | reuse |
| 8 | `custom_announcement_bar_HXkCB7` | `promo-scrolling-marquee` | reuse |
| 9 | `brand_logo_YGTJDe` | `social-proof-brand-logos` | reuse |
| 10 | `testimonial_d6pHJf` | `testimonial-quote-carousel` | reuse |
| 11 | `image_with_text_BQi8BX` | `editorial-image-with-text` | reuse |
| 12 | `588ae6a9…` Latest Blog | `blog-list-main` | reuse |
| 13 | `multicolumn_6caJ4H` | `features-multicolumn` | reuse |
| 14 | `custom_instagram_PxAb4p` | `media-mosaic-grid` | reuse |
| 15 | `footer` | `footer-columns-newsletter` | reuse |
| 16 | `#CartDrawer` | `global-cart-drawer` | reuse |
| 17 | `#menu-drawer` | `global-menu-drawer` | reuse |
| 18 | `predictive-search` | `global-predictive-search` | reuse · 1440 inline |
| — | `#newsletter-popup` h=0 | — | leftover PII |

---

## Aday / leftover

[`candidates/digital-leftovers.md`](../candidates/digital-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static — 113 PNG (quick-view fail leftover)
- [ ] Interact header / search / menu / cart / featured / FAQ / PDP tabs / PLP
- [ ] PDP variant — **yok** (products.json hepsi Default Title)
- [ ] `node scripts/validate-schemas.mjs` — 0 error
