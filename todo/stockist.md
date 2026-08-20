# Todo — Stockist (Noord, paid)

*Kaynak:* https://mart-vinyl.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/stockist  
*Preset:* `default` · *Slug:* `stockist`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **mart/vinyl**  
`schema_name` = **Stockist** · `schema_version` = **1.1.1** · `role` = **main** · theme id `137682223174`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `mart-vinyl.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + validate **bitti** (0 error)  
**PR:** draft — Stockist discover

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/stockist/default/` |
| Capture | resmi `scripts/capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **40** · **118 PNG** |
| Parallel | yalnız `observations/stockist/`, `evidence/stockist/`, `todo/stockist.md`, `candidates/stockist-leftovers.md` |

**Kapsam satırı:**  
`Stockist · default · mart/vinyl · schema_name Stockist 1.1.1 · theme_store_id null · home→PDP→PLP→search→cart drawer→blog→footer · 40 obs · 118 PNG · 0 yeni şema · leftover: candidates/stockist-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + capture | [x] |
| Predictive search `notebook` | capture prepareFill | [x] |
| Mobile aside-menu 375/768/1440 | capture prepareClick | [x] |
| Cart drawer empty | capture prepareClick | [x] |
| PDP `/products/the-last-starborn-witch` | roster + capture | [x] |
| PLP `/collections/frontpage` | roster + capture | [x] |
| Search `/search?q=notebook` | roster + capture | [x] |
| Blog list `/blogs/news` | roster + capture | [x] |
| Blog post reading-habit article | roster + capture | [x] |
| Footer | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM section id → QANTE)

| # | Stockist section | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | information_bar | `promo-announcement-bar` | reuse · 375/768 zero-size leftover |
| 2 | header | `navigation-header-mega` | reuse |
| 3 | slideshow | `hero-slideshow` | reuse |
| 4 | collection_carousel | `collection-nav-image-cards` | reuse |
| 5 | product_carousel (NEW BOOKS) | `product-showcase-grid-featured` | reuse |
| 6 | collection_slider | `media-lookbook-banner` | reuse |
| 7 | compare | `before-after-slider` | reuse |
| 8 | product_markers | `media-shop-the-feed` | reuse |
| 9 | image_multicolumn | `collection-nav-grid` | reuse |
| 10 | countdown | `promo-banner-countdown` | reuse |
| 11 | ticker | `promo-scrolling-marquee` | reuse |
| 12 | product_carousel (NEW ARRIVALS) | `product-showcase-grid-featured.2` | reuse |
| 13 | categories_list | `collection-nav-image-cards.2` | reuse |
| 14 | image_with_text | `editorial-image-with-text` | reuse |
| 15 | gallery_with_text | `media-lookbook-banner.2` | reuse |
| 16 | content_banner | `editorial-image-with-text.2` | reuse |
| 17 | featured_product | `product-showcase-featured` | reuse |
| 18 | testimonials | `testimonial-quote-carousel` | reuse |
| 19 | featured_blog | `blog-list-main` | reuse |
| 20 | collapsible_content | `faq-collapsible-tabs` | reuse |
| 21 | image_collage | `media-shop-the-feed.2` | reuse · Instagram |
| 22 | multicolumn | `features-multicolumn` | reuse |
| 23 | footer | `footer-columns-newsletter` | reuse |
| 24 | aside-menu | `global-menu-drawer` | reuse · delta aside-menu |
| 25 | cart-drawer | `global-cart-drawer` | reuse |
| 26 | predictive-search | `global-predictive-search` | reuse |
| 27 | popup / notification_banner | — | leftover overlay |

---

## Aday / leftover

[`candidates/stockist-leftovers.md`](../candidates/stockist-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] `npm run validate` — 0 error
