# Todo — Casper

*Kaynak:* https://casper.com/ · *Preset:* default · *Shop:* `e75063-e5.myshopify.com` · *Theme:* Release-26-32-082026-1009 (`schema_name` Impact 6.0.1)

**Şu anki odak:** Mod A first inventory kapalı — interact / preset delta bekliyor.

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/casper/default/` |
| Capture | resmi `capture-observation.mjs` |
| Platform | Canlı Shopify (DTC, dtc-69 dışı) |
| Kapsam satırı | Casper · default · storefront + listicle-advertorial · 39 obs · 117 PNG · 0 yeni şema |

---

## Rota checklist

| Rota | Durum | 3vp |
|---|---|---|
| Home (announcement, hero promo, video hero, proof, reviews, collections, carousel, quiz, instant, icons, UGC, press, store, FAQ, search drawer, footer) | [x] | [x] |
| PDP `/products/casper-one-foam` (buy box, CR band, accordion, tabs, compare, highlighted reviews) | [x] | [x] |
| Collection `/collections/mattresses` (banner, PLP grid, rich text, bundle media, trust band) | [x] | [x] |
| Search `/search?q=mattress` | [x] | [x] |
| Cart `/cart` (tam sayfa; drawer değil) | [x] | [x] |
| Blog list `/blogs/article` | [x] | [x] |
| Blog post (bunk bed mattress sizes) | [x] | [x] |
| Footer (home observation) | [x] | [x] |
| Listicle-advertorial `/blogs/article/casper-gifts` | [x] | [x] |

---

## Listicle-advertorial — `/blogs/article/casper-gifts`

| # | schemaId | Done | 3vp |
|---|---|---|---|
| 1 | blog-post-main (article banner) | [x] | [x] |
| 2 | editorial-rich-text (intro + TOC viewport) | [x] | [x] |
| 3 | editorial-image-with-text (item #1 Casper Pillows) | [x] | [x] |
| 4 | editorial-image-with-text-2 (item #2 Backrest Pillow) | [x] | [x] |
| 5 | editorial-image-with-text-3 (item #5 Dog Bed) | [x] | [x] |
| 6 | editorial-rich-text-2 (closing CTA + reviewer bio) | [x] | [x] |
| 7 | blog-list-main (Reading next carousel) | [x] | [x] |

*Gözlem kökü:* `observations/casper/default/listicle-gift-guide/` · *Evidence:* `evidence/casper/default/listicle-gift-guide/`

---

## Bileşen roster (32)

| # | schemaId | sayfa | Done |
|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] |
| 2 | navigation-header-mega | home | [x] |
| 3 | promo-banner-countdown | home | [x] |
| 4 | media-video-hero | home | [x] |
| 5 | trust-icon-row | home | [x] |
| 6 | testimonial-quote-carousel | home | [x] |
| 7 | collection-nav-image-cards | home | [x] |
| 8 | collection-nav-slider | home | [x] |
| 9 | editorial-image-with-text-overlay | home | [x] |
| 10 | editorial-custom-content | home | [x] |
| 11 | features-multicolumn | home | [x] |
| 12 | media-shop-the-feed | home | [x] |
| 13 | editorial-rich-text | home | [x] |
| 14 | editorial-image-with-text | home | [x] |
| 15 | faq-collapsible-tabs | home | [x] |
| 16 | global-predictive-search | home | [x] |
| 17 | footer-columns-newsletter | home | [x] |
| 18 | product-info-main | product-detail | [x] |
| 19 | editorial-image-with-text-overlay | product-detail | [x] |
| 20 | product-info-tabs | product-detail | [x] |
| 21 | product-info-tabs-2 | product-detail | [x] |
| 22 | comparison-quick-table | product-detail | [x] |
| 23 | testimonial-quote-carousel-2 | product-detail | [x] |
| 24 | collection-banner | collection | [x] |
| 25 | product-showcase-grid-plp | collection | [x] |
| 26 | editorial-rich-text | collection | [x] |
| 27 | editorial-image-with-text | collection | [x] |
| 28 | trust-icon-row-2 | collection | [x] |
| 29 | search-results | search | [x] |
| 30 | cart-page-main | cart | [x] |
| 31 | blog-list-main | blog | [x] |
| 32 | blog-post-main | blog-post | [x] |

---

## Aday / şemaya sığmayan

→ [`candidates/casper-leftovers.md`](../candidates/casper-leftovers.md)

---

## Evidence backlog

- [x] Mod A statik 3vp — storefront 32 obs · 96 PNG
- [x] Listicle-advertorial `/blogs/article/casper-gifts` — 7 obs · 21 PNG
- [ ] Interact: cart filled, search input, mega menu, FAQ accordion (qc backlog)
