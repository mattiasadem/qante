# Todo — Guccy (Speedo Themes)

*Kaynak (resmi walk URL):* https://fashion-store-clean-20.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/guccy-premium-fashion-shopify-template-o-s-2-0  
*Preset klasör:* `default`  
*Slug:* `guccy`  
*Vendor:* Speedo Themes (üçüncü taraf Shopify 2.0 — Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Guccy V-1.5.0 Latest**  
`schema_name` = **Guccy** · `schema_version` = **1.5.0** · `role` = **main** · theme id `141876822115`  
`theme_store_id` = **null**  
`Shopify.shop` = `fashion-store-clean-20.myshopify.com`

**Password:** `/` **302** → `/password`. Vendor şifresi ürün sayfasında ve password title’da: **"1"**. Başka host kullanılmadı. Auth: `observations/guccy/_auth.json`.

**Durum:** Mod A walk + resmi 3vp + shopper interact (menu drawer açık kare leftover)  
**PR:** draft — main’e merge yok

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/guccy/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/guccy/`, `evidence/guccy/`, `todo/guccy.md`, `candidates/guccy-leftovers.md` |

**Kapsam satırı:**  
`Guccy · default · Guccy V-1.5.0 Latest · schema_name Guccy 1.5.0 · theme_store_id null · fashion-store-clean-20 (password 1) · home→PDP→PLP→collections→search→cart→faq→contact→blog · 45 obs · 157 PNG · 0 yeni şema`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | ✅ | ✅ |
| Mega / hamburger | mega ✅ · hamburger leftover | mega 1440 |
| Predictive search | ✅ shirt | ✅ |
| Cart drawer empty + filled | ✅ empty 3vp · filled 375/1440 · 768 lookbook leftover | ✅ |
| PDP variant | ✅ White swatch | ✅ |
| PLP `/collections/tops` | ✅ | ✅ |
| Collections index `/collections` | ✅ | ✅ |
| Search `/search?q=shirt` | ✅ | ✅ |
| Cart page empty + filled | ✅ | ✅ |
| FAQ `/pages/faq` | ✅ | ✅ |
| Contact `/pages/contact` (submit yok) | ✅ | ✅ |
| Blog + article | ✅ | ✅ |
| About layout 1–4 | leftover | — |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster

| # | Guccy section | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse + interact |
| 3 | categories_slider | `collection-nav-slider` | reuse |
| 4 | slideshow | `hero-slideshow` | reuse |
| 5 | custom_announcement_bar | `promo-scrolling-marquee` | reuse |
| 6 | collection-list | `collection-nav-image-cards` | reuse |
| 7 | rich_text | `editorial-rich-text` | reuse |
| 8 | featured-product (Best Selling/New) | `product-showcase-tabs` | reuse |
| 9 | deal_image_banner | `promo-banner-countdown` | reuse |
| 10 | testimonial | `testimonial-quote-carousel` | reuse |
| 11 | testimonial.2 | `testimonial-quote-carousel.2` | reuse |
| 12 | shopable_videos | `media-shop-the-feed` | reuse |
| 13 | blog posts | `blog-list-main` | reuse |
| 14 | featured_collection | `product-showcase-grid-featured` | reuse |
| 15 | lookbook | `media-lookbook-banner` | reuse |
| 16 | brand_logo | `social-proof-brand-logos` | reuse |
| 17 | video | `media-video-hero` | reuse |
| 18 | custom_instagram | `media-mosaic-grid` | reuse |
| 19 | service_icon | `trust-icon-row` | reuse |
| 20 | custom_announcement_bar.2 | `promo-scrolling-marquee.2` | reuse |
| 21 | footer | `footer-columns-newsletter` | reuse |
| 22 | CartDrawer | `global-cart-drawer` | reuse + interact |
| 23 | Search-In-Modal | `global-predictive-search` | reuse + interact |
| 24 | menu-drawer | `global-menu-drawer` | reuse · açık kare leftover |

---

## Interact

| Component | State | Kanıt |
|---|---|---|
| navigation-header-mega | initial / open / changed | Shop mega 3 kolon+Best Sellers; Mens 6 kare |
| global-predictive-search | open / input | Search boş → shirt SUGGESTIONS+PRODUCTS |
| global-cart-drawer | initial / filled | empty 3vp; filled 375/1440; 768 lookbook leftover |
| cart-page-main | initial / filled | empty + Oversized Tee satırı 3vp |
| product-info-main | initial / changed | Color Black → White + galeri |
| global-menu-drawer | — | 2 deneme başarısız · leftover |

---

## Evidence backlog

- [x] Official 3vp static
- [x] Interact mega / search / cart / PDP variant
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs` — 0 error
- [ ] Hamburger açık kare (menu-opening)
- [ ] 768 filled drawer (lookbook örtüyor)
