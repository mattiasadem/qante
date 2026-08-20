# Todo — Beautify (Shopify paid) · Cosmetics preset

*Kaynak:* https://beautify-theme-cosmetics.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/beautify · Clean Canvas  
*Preset:* `cosmetics` · *Slug:* `beautify`

**Tema (storefront, yeniden okundu, uydurulmadı):**  
`Shopify.theme.name` = **beautify-v1.3.0**  
`schema_name` = **Beautify** · `schema_version` = **1.3.0** · `role` = **main** · theme id `181103886637`  
`theme_store_id` = **null**  
shop `beautify-theme-cosmetics.myshopify.com`

**Durum:** Mod A walk + resmi 3vp · done  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/beautify/cosmetics/` |
| Capture | resmi `scripts/capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/beautify/`, `evidence/beautify/`, `todo/beautify.md`, `candidates/beautify-leftovers.md` |

**Kapsam satırı:**  
`Beautify · cosmetics · beautify-v1.3.0 / schema_name Beautify 1.3.0 / theme_store_id null · home→PDP blush-multi-stick→PLP best-sellers→search lipstick→cart→blog Beauty Talk→footer · 40 obs · 120 PNG · 0 yeni şema · leftover: candidates/beautify-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/hero/favorites/IWT/highlight/scrolling banner/parallax/before-after/countdown/collections/video/rich/shoppable/get-the-look/carousel/marquee/footer | [x] | [x] |
| Announcement bar (closable — capture script dismiss) | leftover | — |
| Header + predictive search host | [x] | [x] |
| Mobile menu drawer 375/768 | [x] | [x] |
| Cart drawer empty (375/768 prepareClick) | [x] | [x] |
| PDP `/products/blush-multi-stick` | [x] | [x] |
| PLP `/collections/best-sellers` | [x] | [x] |
| Search `/search?q=lipstick` | [x] | [x] |
| Cart `/cart` empty | [x] | [x] |
| Blog list `/blogs/news` | [x] | [x] |
| Blog post summer-proof-your-makeup | [x] | [x] |
| Footer newsletter (submit yok) | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Beautify section id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | — | leftover · dismiss Close |
| 2 | header | `navigation-header-mega` | reuse |
| 3 | header search | `global-predictive-search` | reuse · static host |
| 4 | main-menu-content | `global-menu-drawer` | reuse · prepareClick hamburger |
| 5 | cart-drawer | `global-cart-drawer` | reuse · prepareClick #cart-icon |
| 6 | hero_6VRtwQ | `hero-slideshow` | reuse · tabbed hero delta |
| 7 | rich_text_MC7wKK | `product-showcase-favorites` | reuse |
| 8 | media_with_text_rRAjDw | `editorial-image-with-text` | reuse |
| 9 | highlight_text_with_image | `editorial-highlight-text-image` | reuse |
| 10 | image_banner_scrolling_text | `editorial-image-with-text-overlay` | reuse |
| 11 | parallax_image_with_text | `editorial-image-with-text-overlay.2` | reuse · parallax delta |
| 12 | before_after_image_slider | `before-after-slider` | reuse |
| 13 | image_banner (countdown) | `promo-banner-countdown` | reuse |
| 14 | hero_collections | `collection-nav-slider` | reuse |
| 15 | background_video | `media-video-hero` | reuse |
| 16 | rich_text_8eFFhh | `editorial-rich-text` | reuse |
| 17 | shoppable_image | `media-lookbook-banner` | reuse |
| 18 | rich_text_89jBDn | `editorial-rich-text.2` | reuse |
| 19 | get_the_look | `media-lookbook-slider` | reuse · delta |
| 20 | shoppable_carousel | `media-lookbook-slider.2` | reuse |
| 21 | scrolling_text | `promo-scrolling-marquee` | reuse |
| 22 | footer | `footer-columns-newsletter` | reuse |
| 23 | pop-up | — | leftover |
| 24 | comments (blog post) | — | leftover |

---

## Aday / leftover

[`candidates/beautify-leftovers.md`](../candidates/beautify-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 40 × 3
- [ ] Interact mega · search · cart filled · PDP variant (sonraki tur)
- [x] `npm run validate` — 0 error
