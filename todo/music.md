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

**Durum:** Mod A walk + resmi 3vp + interact (pixel-check) — **kapandı**  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/music/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **43** |
| PNG | **179** (128 statik 3vp + interact) |
| Parallel | yalnız `observations/music/`, `evidence/music/`, `todo/music.md`, `candidates/music-leftovers.md` + unlock host |

**Kapsam satırı:**  
`Music · default · Music-v-1-5-0-latest-updates-new / schema_name Music 1.5.0 · theme_store_id null · shop musical-online-store.myshopify.com · Speedo Themes · password 1 (vendor) · home→PDP guitar-flamenco-guitar Color Red→PLP Guitars→/collections→search guitar→cart empty+filled+qty $129→$258→about-us→faq Q2→contact→news+article→404 · mega/search375/menu/cart/PDP/FAQ/tabs/hover/PLP · 43 obs · 179 PNG · 0 yeni şema · leftover: candidates/music-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster | [x] capture |
| Mega Shop 1440 | roster | [x] interact · 6 image card |
| Predictive search `guitar` | roster | [x] 375/768 PRODUCTS · 1440 missingStates |
| Mobile menu 375 + 768 | roster | [x] interact · changed yok (düz link) |
| Cart drawer empty + filled + qty | roster | [x] interact · 1→2 $129→$258 |
| PDP Guitar Flamenco Color Orange→Red | roster | [x] interact · etiket değişti, görsel aynı |
| Featured Best Sellers hover | roster | [x] interact · kalp/compare/çanta |
| PLP `/collections/all` + filter | roster | [x] capture + interact Guitars |
| Collections `/collections` | roster | [x] capture |
| Search `/search?q=guitar` | roster | [x] capture |
| Cart page empty + filled | roster | [x] interact · $129→$258 |
| About `/pages/about-us` | roster | [x] capture |
| Contact `/pages/contact` (submit yok) | roster | [x] capture |
| FAQ `/pages/faq` ikinci soru | roster | [x] capture + interact Q2 |
| News + world-of-strings | roster | [x] capture |
| 404 | roster | [x] capture |
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
| 1–17 | home + overlays | home | [x] 3vp + interact | [x] | reuse | [x] |
| 18–22 | product-info + video + tabs + IWT + trust | product-detail | [x] 3vp + Color/tabs | [x] | reuse | [x] |
| 23–25 | banner + slider + grid | collection | [x] 3vp + Guitars | [x] | reuse | [x] |
| 26 | collections index | collections | [x] 3vp | [x] | reuse | [x] |
| 27 | search guitar | search | [x] 3vp | [x] | reuse | [x] |
| 28 | cart | cart | [x] 3vp + filled | [x] | reuse | [x] |
| 29–31 | overlay + adres + form | contact | [x] 3vp | [x] | reuse | [x] |
| 32–38 | about blocks | about-brand | [x] 3vp | [x] | reuse | [x] |
| 39–40 | overlay + FAQ | faq-support | [x] 3vp + Q2 | [x] | reuse | [x] |
| 41–42 | news + article | blog | [x] 3vp | [x] | reuse | [x] |
| 43 | 404 | not-found | [x] 3vp | [x] | reuse | [x] |

---

## Aday / leftover

[`candidates/music-leftovers.md`](../candidates/music-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 128 PNG (search 1440 zero-size skip)
- [x] Interact mega / search 375/768 / menu / cart / PDP Color / FAQ / featured hover / tabs / PLP filter
- [x] PNG bak → stateFindings (şema değişmedi)
- [x] `node scripts/validate-schemas.mjs` — 0 error (69 şema, 13 pre-existing warn)
