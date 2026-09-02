# Todo — WallFresh (Speedo Themes) · default

*Kaynak (resmi walk URL):* https://pandora-wallpaper-2.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/wallfresh-premium-shopify-wallpaper-themes-shopify-2-0-theme  
*Preset:* `default` · *Slug:* `wallfresh`  
*Vendor:* Speedo Themes (üçüncü taraf Shopify 2.0; Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Wallfresh-v-1-5-0-latest-updates-new**  
`schema_name` = **Wallfresh** · `schema_version` = **1.5.0** · `role` = **main** · theme id `177073029435`  
`theme_store_id` = **null**  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
`Shopify.shop` = `pandora-wallpaper-2.myshopify.com` · locale `en` · country `US` · currency `USD`

**Unlock:** Vendor ürün sayfası “Please enter password "1" to view demo.” Aynı host `/password` — public storefront unlock. Başka host yok.

**Durum:** 🟡 Mod A roster yazıldı — 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/wallfresh/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` · `unlock-storefront.mjs` (`storefrontPassword: "1"`) |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **49** |
| Parallel | yalnız `observations/wallfresh/`, `evidence/wallfresh/`, `todo/wallfresh.md`, `candidates/wallfresh-leftovers.md`, unlock host satırı |

**Kapsam satırı:**  
`WallFresh · default · Wallfresh-v-1-5-0-latest-updates-new / schema_name Wallfresh 1.5.0 / theme_store_id null · shop pandora-wallpaper-2.myshopify.com · home→PDP milton-and-king-antique-straight-wallpaper Color Amphibian→Light Brume→PLP bedroom→/collections→search wallpaper→cart empty→about-layout-1→our-story→contact→faq→news+post · 49 obs · 0 yeni şema · leftover: candidates/wallfresh-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (header→footer) | [x] obs | [ ] capture |
| Header Shop mega 1440 | [x] obs | [ ] interact |
| Predictive search | [x] obs | [ ] interact |
| Mobile menu 375 + 768 | [x] obs | [ ] interact |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| PDP Milton Antique Color Amphibian→Light Brume | [x] obs | [ ] interact |
| PLP `/collections/bedroom` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=wallpaper` | [x] obs | [ ] capture |
| Cart `/cart` empty | [x] obs | [ ] filled + qty |
| About `/pages/about-layout-1` | [x] obs | [ ] capture |
| Our Story `/pages/our-story` | [x] obs | [ ] capture |
| Contact `/pages/contact` (submit yok) | [x] obs | [ ] capture |
| FAQ `/pages/faq` | [x] obs | [ ] ilk soru |
| Blog `/blogs/news` + article | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Section id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header | `navigation-header-mega` | reuse · Shop/Bestseller/Themes/Collections mega-menu |
| 2 | menu-drawer | `global-menu-drawer` | reuse · `#Details-menu-drawer-container` |
| 3 | header-search | `global-predictive-search` | reuse · `details-modal.header__search` |
| 4 | CartDrawer | `global-cart-drawer` | reuse · `#cart-icon-bubble` |
| 5 | 3b7cb796-… | `hero-slideshow` | reuse · Decorate your Walls |
| 6 | categories_slider_CxFgWw | `collection-nav-slider` | reuse |
| 7 | collection_list_6CfM3W | `collection-nav-image-cards` | reuse · Shop by Category |
| 8 | video_QMCjXL | `media-video-hero` | reuse · metinsiz |
| 9 | featured_collection_HjpWE7 | `product-showcase-grid-featured` | reuse · Best Sellers slider |
| 10 | image_with_text_block_aCV6p9 | `editorial-image-with-text` | reuse · 2 stacked çift |
| 11 | testimonial_d6pHJf | `testimonial-quote-carousel` | reuse |
| 12 | testimonial_faQmaB | `testimonial-quote-carousel.2` | reuse |
| 13 | before_after_CNbGkh | `before-after-slider` | reuse |
| 14 | featured_collection_8iQFVH | `product-showcase-grid-featured.2` | reuse · New Arrivals |
| 15 | 588ae6a9-… | `blog-list-main` | reuse · Latest News |
| 16 | collage_gallery_mcVbca | `media-mosaic-grid` | reuse · Wall Gallery |
| 17 | custom_instagram_N8fnnR | `media-scrolling-gallery` | reuse · @WallFresh |
| 18 | footer | `footer-columns-newsletter` | reuse |
| 19 | newsletter-popup | — | leftover 0px / PII |

---

## Aday / leftover

[`candidates/wallfresh-leftovers.md`](../candidates/wallfresh-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact — mega 1440 · search · hamburger · cart drawer+page · PDP Color · FAQ
- [ ] PNG bak → stateFindings
- [ ] `node scripts/validate-schemas.mjs`
