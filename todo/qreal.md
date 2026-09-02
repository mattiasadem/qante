# Todo — Qreal (Speedo Themes · Qreal Cosmetic)

*Kaynak (yalnız resmi walk):* https://women-beauty-8.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/qreal-cosmetic-modern-cosmetic-shopify-theme-o-s-2-0  
*Preset:* `default` · *Slug:* `qreal`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (storefront, uydurulmadı):**  
`Shopify.theme.name` = **Qreal-v-1-5-0-latest-updates-new**  
`schema_name` = **Qreal** · `schema_version` = **1.5.0** · `role` = **main** · theme id `139539906620`  
`theme_store_id` = **null**  
shop `women-beauty-8.myshopify.com`  
Sayfa başlığı: **Women Beauty 8**

**Password:** Speedo ürün sayfası “Please enter password `1` to view demo.” Aynı host `/password` — public storefront-unlock. Başka host yok.

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/qreal/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Unlock | `scripts/unlock-storefront.mjs` — `/password` + `1` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/qreal/`, `evidence/qreal/`, `todo/qreal.md`, `candidates/qreal-leftovers.md` + Speedo password helper |

**Kapsam satırı:**  
`Qreal · default · Qreal-v-1-5-0-latest-updates-new / schema_name Qreal 1.5.0 · theme_store_id null · shop women-beauty-8.myshopify.com · password 1 · home→PDP Brightening Serum 50→100ml→PLP best-selling hover→search foundation→cart filled+qty→collections→about-layout-1 (IWT + overlay×2)/our-story→contact→faq accordion→news+skincare post→404 · 52 obs · 0 yeni şema · leftover: candidates/qreal-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/hero/categories/featured/banners/videos/testimonials/countdown/blog/IG/newsletter/footer | roster | [x] |
| Mega Shop 1440 | interact | [x] forceOpen retry |
| Predictive search `foundation` | interact | [x] |
| Mobile menu 375+768 | interact | [x] |
| Cart drawer empty + filled + qty | interact | [x] |
| PDP Brightening Serum Size 50→100ml | interact | [x] |
| PLP `/collections/best-selling` | roster + hover | [x] |
| Collections `/collections` | roster | [x] |
| Search `/search?q=serum` (3) | roster | [x] |
| Cart `/cart` empty + filled | interact | [x] |
| About `/pages/about-layout-1` (footer About Us) | roster | [x] IWT-2→overlay.2 |
| Our Story `/pages/our-story` | roster | [x] |
| Contact `/pages/contact` (submit yok) | roster | [x] |
| FAQ `/pages/faq` | roster + interact | [x] |
| Blog `/blogs/news` + skincare article | roster | [x] |
| 404 leftover | roster | [x] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · Shop mega |
| 3 | categories_slider_eC4XDP | `collection-nav-slider` | reuse |
| 4 | 3b7cb796 slideshow | `hero-slideshow` | reuse |
| 5 | custom_announcement_bar_zqchrk | `promo-scrolling-marquee` | reuse |
| 6 | 07468762 Shop By Categories | `collection-nav-image-cards` | reuse |
| 7 | text_with_image_JHGwdn | `editorial-image-with-text` | reuse |
| 8 | offer_banner_G88F9N | `editorial-image-with-text-overlay` | reuse · görsel-only |
| 9 | 0617c2f2 Best Selling | `product-showcase-grid-featured` | reuse |
| 10 | rich_text_Q3n6Vw | `editorial-rich-text` | reuse |
| 11 | sub_banner_wrQTEc | `promo-grid-banner` | reuse |
| 12 | shopable_videos_EbHM6Y | `media-shop-the-feed` | reuse |
| 13 | testimonial_d6pHJf | `testimonial-quote-carousel` | reuse |
| 14 | testimonial_exjMhR | `testimonial-quote-carousel.2` | reuse |
| 15 | collection_list_GpyfGF | `collection-nav-slider.2` | reuse |
| 16 | deal_image_banner_ca9Mjy | `promo-banner-countdown` | reuse |
| 17 | 588ae6a9 Latest Blog | `blog-list-main` | reuse |
| 18 | custom_instagram_N8fnnR | `media-scrolling-gallery` | reuse |
| 19 | newsletter_JaqXmE | `lead-capture-newsletter-band` | reuse · submit yok |
| 20 | footer | `footer-columns-newsletter` | reuse |
| 21 | #CartDrawer | `global-cart-drawer` | reuse · interact |
| 22 | #menu-drawer | `global-menu-drawer` | reuse · interact |
| 23 | details-modal.header__search | `global-predictive-search` | reuse · interact |
| — | QuickAdd-* | leftover | — |
| — | Our Team / wishlist / compare | leftover | — |

---

## Diğer şablonlar

| sayfa | URL | schemaId |
|---|---|---|
| product-detail | `/products/treatment-skin-care-organic-brightening-serum` | `product-info-main` · tabs · video · features · IWT multirow · trust · sub-banner · FAQ · related |
| collection | `/collections/best-selling` | `collection-banner` · `collection-nav-slider` · `product-showcase-grid-plp` |
| collections | `/collections` | `collection-nav-grid` |
| search | `/search?q=serum` | `search-results` |
| cart | `/cart` | `cart-page-main` |
| contact | `/pages/contact` | `editorial-rich-text` · `lead-capture-form` |
| faq-support | `/pages/faq` | overlay · `faq-collapsible-tabs` |
| about-brand | `/pages/about-layout-1` | overlay · overlay.2 (Finding Unique Cosmetic) · IWT About Me! · features ×2 · logos |
| about-brand | `/pages/our-story` | `page-content-main` |
| blog-list | `/blogs/news` | `blog-list-main` |
| blog-post | `/blogs/news/discover-the-best-skincare-…` | `blog-post-main` |
| not-found | `/pages/this-page-does-not-exist-qante` | `page-content-main` |

Aynı tip = şemaya dokunma, observation + delta. Yeni şema yok.

---

## Aday / leftover

[`candidates/qreal-leftovers.md`](../candidates/qreal-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega (forceOpen retry) · search foundation · cart filled+qty · PDP 50→100ml · FAQ ikinci satır · menu 375/768 · PLP hover
- [ ] `npm run validate` (commit sonrası)
