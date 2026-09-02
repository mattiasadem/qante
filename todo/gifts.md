# Todo — Gifts Treasures (Speedo Themes, third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://gift-online-shop-1.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/gifts-treasures-shopify-gifts-themes-0s-2-0  
*Preset:* `default` · *Slug:* `gifts`  
*Vendor:* Speedo Themes (Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **gifts-treasures-v-1-5-0-latest-updates-new**  
`schema_name` = **Gifts-treasures** · `schema_version` = **1.5.0** · `role` = **main** · theme id `175659352228`  
`theme_store_id` = **null**  
`Shopify.shop` = `gift-online-shop-1.myshopify.com`  
Title: `Gifts Treasures - Best Shopify Gifts Store – gift-online-shop-1 (password: 1)`  
Storefront password (ürün sayfasında yayın): **`1`** — public storefront-unlock. Aynı host `/password`, başka vitrin yok.

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/gifts/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| Parallel | yalnız `observations/gifts/`, `evidence/gifts/`, `todo/gifts.md`, `candidates/gifts-leftovers.md` + unlock host |

**Kapsam satırı:**  
`Gifts Treasures · default · gifts-treasures-v-1-5-0-latest-updates-new / schema_name Gifts-treasures 1.5.0 · theme_store_id null · shop gift-online-shop-1.myshopify.com · Speedo Themes · password 1 (vendor) · home→PDP wireless-headphones (varyant yok)→PLP /collections/all→/collections→search gift→cart empty+filled→our-story→faq→contact→news+post→404 · 39 obs · 0 yeni şema · leftover: candidates/gifts-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster | [ ] capture |
| Mega Shop / Best Sellers / Shop By 1440 | roster | [ ] interact |
| Predictive search `gift` | roster | [ ] interact |
| Mobile menu 375 + 768 | roster | [ ] interact |
| Cart drawer empty + filled + qty | roster | [ ] interact |
| PDP Wireless Headphones (qty; varyant yok) | roster | [ ] capture + qty |
| Featured / tabs / card hover | roster | [ ] interact |
| PLP `/collections/all` + filter | roster | [ ] capture + interact |
| Collections `/collections` | roster | [ ] capture |
| Search `/search?q=gift` | roster | [ ] capture |
| Cart page empty + filled + qty | roster | [ ] interact |
| About `/pages/our-story` | roster | [ ] capture |
| Contact form (submit yok) | roster | [ ] capture |
| FAQ `/pages/faq` | roster | [ ] capture + interact |
| News + presents-that-bring-joy | roster | [ ] capture |
| 404 `/pages/about-us` | roster | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Gifts / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · 5 mega |
| 3 | categories_slider_P6CBfQ | `collection-nav-slider` | reuse |
| 4 | `__3b7cb796` slideshow | `hero-slideshow` | reuse |
| 5 | collection_slider_7dbDpG | `collection-nav-image-cards` | reuse |
| 6 | collection_list_ftkyVj | `collection-nav-grid` | reuse · occasions |
| 7 | homepage_product_tab_drR49d | `product-showcase-tabs` | reuse |
| 8 | sub_banner_iRrfVQ | `promo-grid-banner` | reuse |
| 9 | image_with_text_iHxWD7 | `editorial-image-with-text` | reuse |
| 10 | image_banner_LCwDMk | `editorial-image-with-text-overlay` | reuse |
| 11 | custom_testimonial_NJMxje | `testimonial-quote-carousel` | reuse |
| 12 | custom_instagram_N8fnnR | `media-shop-the-feed` | reuse · pin yok |
| 13 | service_icon_c6AY6T | `trust-icon-row` | reuse |
| 14 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 15 | newsletter-popup | — | leftover · h=0 / PII |
| 16 | `#CartDrawer` | `global-cart-drawer` | reuse |
| 17 | `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |
| 18 | `details:has(#Search-In-Modal-1)` | `global-predictive-search` | reuse |

---

## Aday / leftover

[`candidates/gifts-leftovers.md`](../candidates/gifts-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu / cart / FAQ / tabs / hover / PLP / qty
- [ ] `node scripts/validate-schemas.mjs`
