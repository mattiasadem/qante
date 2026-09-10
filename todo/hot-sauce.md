# Todo — Hot Sauce (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://food-online-store-2.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/hot-sauce-best-sauce-shop-shopify-2-0-theme  
*Preset:* `default` · slug `hot-sauce`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Hot Sauce V-1.5.0**  
`schema_name` = **Hot Sauce** · `schema_version` = **1.5.0** · `role` = **main** · theme id `146022531235`  
`theme_store_id` = **null**  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
`Shopify.shop` = `food-online-store-2.myshopify.com` · locale `en` · country `US` · currency `USD`

**Unlock:** Vendor ürün sayfası “Please enter password `1` to view demo.” Aynı host `/password` — public storefront-unlock. Başka host yok. Title unlock sonrası `food-online-store-2`.

**Durum:** Mod A + official 3vp · 41 obs · 122 PNG · 0 yeni şema · interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/hot-sauce/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **41** |
| Parallel | `observations/hot-sauce/`, `evidence/hot-sauce/`, `todo/hot-sauce.md`, `candidates/hot-sauce-leftovers.md` + unlock host map |

**Kapsam satırı:**  
`Hot Sauce · default · Hot Sauce V-1.5.0 / schema_name Hot Sauce 1.5.0 · theme_store_id null · shop food-online-store-2.myshopify.com · password 1 · home→PDP chili-sauce-bottle-mockup→PLP best-sellers→/collections→search sauce→cart empty→our-story/contact/faqs→news+funny-stories · 41 obs · 0 yeni şema · leftover: candidates/hot-sauce-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] static |
| Header Shop mega 1440 | [x] obs | [ ] interact |
| Predictive search `chili` / `sauce` | [x] obs | [ ] interact |
| Mobile menu 375 + 768 | [x] obs | [x] static open 375/768 · 1440 zero · [ ] interact |
| Cart drawer empty + filled + qty | [x] obs | [x] static empty · [ ] interact filled |
| PDP Chili Sauce Bottle Mockup (qty; varyant yok) | [x] obs | [x] static · [ ] interact qty + tabs |
| Featured Best Sellers hover | [x] obs | [x] static · [ ] interact |
| PLP `/collections/best-sellers` + filter | [x] obs | [x] static · [ ] interact |
| Collections `/collections` | [x] obs | [x] static |
| Search `/search?q=sauce` | [x] obs | [x] static |
| Cart page empty + filled | [x] obs | [x] static empty · [ ] interact |
| About `/pages/our-story` | [x] obs | [x] static |
| Contact form (submit yok) | [x] obs | [x] static |
| FAQ `/pages/faqs` | [x] obs | [x] static · [ ] interact |
| News + funny-stories post | [x] obs | [x] static |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `announcement_bar_fHNTbB` | `promo-announcement-bar` | reuse |
| 2 | `__header` | `navigation-header-mega` | reuse · Shop/Bestsellers/Themes/Collections mega |
| 3 | `collection_slider_wk9nMQ` | `collection-nav-slider` | reuse |
| 4 | `__3b7cb796…` slideshow | `hero-slideshow` | reuse |
| 5 | `featured_collection_TzVDQq` | `product-showcase-grid-featured` | reuse · slider |
| 6 | `service_icon_UT88rn` | `trust-icon-row` | reuse |
| 7 | `image_with_text_KYVzJY` | `editorial-image-with-text` | reuse |
| 8 | `image_with_text_PwTJpC` | `editorial-image-with-text.2` | reuse |
| 9 | `text_with_image_fR6bD3` | `editorial-layered-images` | reuse · 3 görsel |
| 10 | `section_reviews_xAk64M` | `testimonial-quote-carousel` | reuse |
| 11 | `video_TpaWLj` | `media-video-hero` | reuse |
| 12 | `__588ae6a9…` Recipes | `blog-list-main` | reuse |
| 13 | `brand_logo_VE8LhL` | `social-proof-brand-logos` | reuse |
| 14 | `instagram_feed_diqjiz` | `media-mosaic-grid` | reuse · pin yok |
| 15 | `custom_announcement_bar_zqchrk` | `promo-scrolling-marquee` | reuse |
| 16 | `newsletter_TtPD6k` | `lead-capture-newsletter-band` | reuse · submit yok |
| 17 | `__footer` | `footer-columns-newsletter` | reuse |
| 18 | `#CartDrawer` | `global-cart-drawer` | reuse |
| 19 | `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |
| 20 | `details-modal.header__search` | `global-predictive-search` | reuse |
| — | `#newsletter-popup` h=0 | — | leftover PII |
| — | wishlist / compare pages | — | leftover |
| — | related-products h boş | — | leftover |

---

## Aday / leftover

[`candidates/hot-sauce-leftovers.md`](../candidates/hot-sauce-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (122 PNG · menu 1440 zero-size)
- [ ] Interact header / search / menu / cart / featured / FAQ / PDP / PLP
- [ ] `node scripts/validate-schemas.mjs` — şema değişmedi
