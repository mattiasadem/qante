# Todo — Music (Speedo Themes, third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://musical-online-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/music-musical-instruments-store-shopify-2-0-theme  
*Preset:* `default` · *Slug:* `music`  
*Vendor:* Speedo Themes (Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Music-v-1-5-0-latest-updates-new**  
`schema_name` = **Music** · `schema_version` = **1.5.0** · `role` = **main** · theme id `135699103818`  
`theme_store_id` = **null**  
`Shopify.shop` = `musical-online-store.myshopify.com` · locale `en` · country `US` · currency `USD`  
Title: `Music - Musical Instruments Store – musical-online-store`  
Storefront password (ürün sayfasında yayın): **`1`** — “Please enter password "1" to view demo.” Aynı host `/password`, başka vitrin yok.

**Durum:** Mod A walk + resmi 3vp + interact — devam  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/music/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **43** |
| Parallel | yalnız `observations/music/`, `evidence/music/`, `todo/music.md`, `candidates/music-leftovers.md` + unlock host |

**Kapsam satırı:**  
`Music · default · Music-v-1-5-0-latest-updates-new / schema_name Music 1.5.0 · theme_store_id null · shop musical-online-store.myshopify.com · Speedo Themes · password 1 (vendor) · home→PDP guitar-flamenco-guitar Color→PLP /collections/all→/collections→search guitar→cart empty+filled→about-us→faq Q2→contact→news+article→404 · 43 obs · 0 yeni şema · leftover: candidates/music-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster | [ ] capture |
| Mega Shop 1440 | roster | [ ] interact |
| Predictive search `guitar` | roster | [ ] interact |
| Mobile menu | roster | [ ] interact |
| Cart drawer empty + filled + qty | roster | [ ] interact |
| PDP Guitar Flamenco Color Orange→Red | roster | [ ] interact |
| Featured Best Sellers hover | roster | [ ] interact |
| PLP `/collections/all` + filter | roster | [ ] capture + interact |
| Collections `/collections` | roster | [ ] capture |
| Search `/search?q=guitar` | roster | [ ] capture |
| Cart page empty + filled | roster | [ ] interact |
| About `/pages/about-us` | roster | [ ] capture |
| Contact `/pages/contact` (submit yok) | roster | [ ] capture |
| FAQ `/pages/faq` ikinci soru | roster | [ ] capture + interact |
| News + world-of-strings | roster | [ ] capture |
| 404 | roster | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Music / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `custom_announcement_bar_aaH9yx` | `promo-scrolling-marquee` | reuse · SALE/CLEARANCE/FREE SHIPPING |
| 2 | header | `navigation-header-mega` | reuse · 5 mega |
| 3 | `__3b7cb796` slideshow | `hero-slideshow` | reuse |
| 4 | `featured_product_slider_tbBCPj` | `product-showcase-grid-featured` | reuse · Best Sellers |
| 5 | `custom_image_with_text_VWTtJ7` | `editorial-image-with-text` | reuse |
| 6 | `lookbook_WzJ9Xp` | `media-lookbook-banner` | reuse · View product |
| 7 | `featured_product_JgYAkX` | `product-showcase-featured` | reuse · Flamenco |
| 8 | `collection_list_3XLX7r` | `collection-nav-image-cards` | reuse · 6 kart |
| 9 | `featured_product_slider_AjpHgQ` | `product-showcase-grid-featured` `.2` | reuse · Popular |
| 10 | `video_rGF9UX` | `media-video-hero` | reuse · poster |
| 11 | `custom_section_reviews_VXLN4D` | `testimonial-quote-carousel` | reuse |
| 12 | `featured_blog_NpKtLp` | `blog-list-main` | reuse |
| 13 | `custom_instagram_3eM9FD` | `media-shop-the-feed` | reuse · hotspot yok |
| 14 | footer | `footer-columns-newsletter` | reuse · SEND dur |
| 15 | newsletter-popup | — | leftover · zenon / PII |
| 16 | `#CartDrawer` | `global-cart-drawer` | reuse |
| 17 | `#menu-drawer` | `global-menu-drawer` | reuse |
| 18 | `details:has(#Search-In-Modal)` | `global-predictive-search` | reuse |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–17 | home + overlays | home | [ ] 3vp + interact | [x] | reuse | [ ] |
| 18–22 | product-info + video + tabs + IWT + trust | product-detail | [ ] 3vp + Color | [x] | reuse | [ ] |
| 23–25 | banner + slider + grid | collection | [ ] 3vp + filter | [x] | reuse | [ ] |
| 26 | collections index | collections | [ ] 3vp | [x] | reuse | [ ] |
| 27 | search guitar | search | [ ] 3vp | [x] | reuse | [ ] |
| 28 | cart | cart | [ ] 3vp + filled | [x] | reuse | [ ] |
| 29–31 | overlay + adres + form | contact | [ ] 3vp | [x] | reuse | [ ] |
| 32–38 | about blocks | about-brand | [ ] 3vp | [x] | reuse | [ ] |
| 39–40 | overlay + FAQ | faq-support | [ ] 3vp + Q2 | [x] | reuse | [ ] |
| 41–42 | news + article | blog | [ ] 3vp | [x] | reuse | [ ] |
| 43 | 404 | not-found | [ ] 3vp | [x] | reuse | [ ] |

---

## Aday / leftover

[`candidates/music-leftovers.md`](../candidates/music-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu / cart / PDP Color / FAQ / featured hover / tabs / PLP filter
- [ ] PNG bak → stateFindings (şema değişmedi)
- [ ] `node scripts/validate-schemas.mjs`
