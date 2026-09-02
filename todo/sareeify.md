# Todo — Sareeify (Speedo Themes) · default

*Kaynak (resmi walk):* https://speedo-sarees.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/shopify-sarees-kurtis-website-template  
*Preset:* `default` · *Slug:* `sareeify`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (vitrinde okundu):**  
`Shopify.theme.name` = **Speedo-Sarees V 1.5.0**  
`schema_name` = **speedo_sarees** · `schema_version` = **1.5.0** · `role` = **main** · theme id `175007367473`  
`theme_store_id` = **null**  
`Shopify.shop` = `speedo-sarees.myshopify.com`  
Storefront password (ürün sayfası): **`1`**

**Durum:** ✅ Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/sareeify/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| Evidence | **141 PNG** (96 static 3vp + 45 interact) |
| Parallel | yalnız `observations/sareeify/`, `evidence/sareeify/`, `todo/sareeify.md`, `candidates/sareeify-leftovers.md` |

**Kapsam satırı:**  
`Sareeify · default · Speedo-Sarees V 1.5.0 / schema_name speedo_sarees 1.5.0 · theme_store_id null · shop speedo-sarees.myshopify.com · home→PDP→PLP→collections→search→cart→about→faqs→contact→news+article→404 · 39 obs · 141 PNG · 0 yeni şema · leftover: candidates/sareeify-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→testimonial/footer) | roster | [x] capture |
| Mega SHOP/SAREES | interact 1440 | [x] |
| Hamburger drawer | interact 375/768/1440 | [x] |
| Predictive search `saree` | interact | [x] |
| Cart drawer empty + filled + qty | interact | [x] |
| PDP qty changed | interact | [x] |
| PDP tabs DESCRIPTION→ADDITIONAL | interact | [x] |
| PLP `/collections/all` + filters | roster | [x] |
| Collections `/collections` | roster | [x] |
| Search `/search?q=saree` | roster | [x] |
| Cart page empty + filled + qty | interact | [x] |
| About `/pages/about-us` | roster | [x] |
| FAQ `/pages/faqs` | roster | [x] |
| Contact (submit yok) | roster | [x] |
| News + article | roster | [x] |
| 404 | roster | [x] |
| store_block / wishlist / compare / checkout | leftover | — |

---

## Home roster

| # | Sareeify / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse · social + PREPAID + locale |
| 2 | header | `navigation-header-mega` | reuse · mega + interact |
| 3 | slideshow 3b7cb796 | `hero-slideshow` | reuse |
| 4 | service_icon | `trust-icon-row` | reuse |
| 5 | collection_list_a3CxBG | `collection-nav-image-cards` | reuse |
| 6 | shopable_videos | `media-shop-the-feed` | reuse |
| 7 | featured New Arrivals | `product-showcase-grid-featured` | reuse |
| 8 | collection_list Curated | `collection-nav-banners` | reuse |
| 9 | featured_collection Saree | `product-showcase-grid-featured.2` | reuse |
| 10 | sub_banner | `promo-grid-banner` | reuse |
| 11 | featured Georgette | `product-showcase-grid-featured.3` | reuse |
| 12 | image_with_text Instant Saree | `editorial-image-with-text` | reuse |
| 13 | collection_list Shop By Category | `collection-nav-image-cards.2` | reuse |
| 14 | homepage_product_tab | `product-showcase-tabs` | reuse |
| 15 | image banner Dress Materials | `editorial-image-with-text.2` | reuse |
| 16 | collection_list Day Wedding | `collection-nav-banners.2` | reuse |
| 17 | blog posts | `blog-list-main` | reuse |
| 18 | custom_instagram | `media-mosaic-grid` | reuse |
| 19 | store_block | — | leftover |
| 20 | testimonial | `testimonial-quote-carousel` | reuse |
| 21 | footer | `footer-columns-newsletter` | reuse |
| 22 | #menu-drawer | `global-menu-drawer` | reuse · interact |
| 23 | .search-modal | `global-predictive-search` | reuse · interact |
| 24 | #CartDrawer | `global-cart-drawer` | reuse · interact |

---

## Interact

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial / open / changed | SHOP mega · SAREES mega 1440 |
| global-menu-drawer | open / changed | hamburger + SHOP nested |
| global-predictive-search | initial / input | boş modal + `saree` |
| global-cart-drawer | initial / filled / changed | boş → lehenga → qty2 |
| cart-page-main | initial / filled / changed | boş → dolu → qty2 |
| product-info-main | initial / changed | qty 1→2 (tek renk) |
| product-info-tabs | initial / changed | DESCRIPTION → ADDITIONAL INFORMATION |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / wishlist / compare

---

## Aday / leftover

[`candidates/sareeify-leftovers.md`](../candidates/sareeify-leftovers.md)
