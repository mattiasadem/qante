# Todo — Woodstock (Boostheme, paid) · Light

*Kaynak:* https://woodstock-theme-light.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/woodstock  
*Preset:* `default` (Light) · *Slug:* `woodstock`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Woodstock-Shopify-theme/electronics**  
`schema_name` = **Woodstock** · `schema_version` = **3.3.0** · `role` = **main** · theme id `155629781293`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `woodstock-theme-light.myshopify.com`

**Beklenen vs canlı:** Theme Store listing Boostheme Woodstock. Canlı Light demo **Woodstock 3.3.0** ve `theme_store_id` **null**. null yazıldı.

**Durum:** Mod A walk observations yazıldı · 3vp capture sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/woodstock/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/woodstock/`, `evidence/woodstock/`, `todo/woodstock.md`, `candidates/woodstock-leftovers.md` |

**Kapsam satırı:**  
`Woodstock · default (Light) · Woodstock-Shopify-theme/electronics · schema_name Woodstock 3.3.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→blog→404 · obs yazıldı · PNG sırada · 0 yeni şema · leftover: candidates/woodstock-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + obs | [ ] capture |
| Mega Stores 1440 | interact obs | [ ] |
| Predictive search `watch` | interact obs | [ ] |
| Mobile menu 375 + 768 | interact obs | [ ] |
| Cart drawer empty + filled + qty | interact obs | [ ] |
| PDP Watch I7 black→gym red | interact obs | [ ] |
| PLP `/collections/all` | roster + obs | [ ] |
| Collections index `/collections` | roster + obs | [ ] |
| Search `/search?q=watch` | roster + obs | [ ] |
| Cart page empty + filled + qty | interact obs | [ ] |
| About `/pages/about-us` (`/pages/about` 404) | roster + obs | [ ] |
| Contact `/pages/contact` (submit yok) | roster + obs | [ ] |
| News + article | roster + obs | [ ] |
| 404 | roster + obs | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Woodstock / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header `.header-top` | `promo-announcement-bar` | reuse |
| 2 | `sticky-header` | `navigation-header-mega` | reuse + mega hover |
| 3 | slideshow | `hero-slideshow` | reuse |
| 4 | collections | `collection-nav-image-cards` | reuse |
| 5 | featured products | `product-showcase-grid-featured` | reuse |
| 6 | top cellphones | `product-showcase-grid-featured.2` | reuse |
| 7 | promotion_cards_pinning | `promo-grid-banner` | reuse · pin leftover |
| 8 | top computers | `product-showcase-grid-featured.3` | reuse |
| 9 | lookbook | `media-lookbook-banner` | reuse |
| 10 | scrolling-text | `promo-scrolling-marquee` | reuse |
| 11 | text-icons | `features-multicolumn` | reuse |
| 12 | splash_featured_product | `product-showcase-featured` | reuse |
| 13 | testimonials | `testimonial-quote-carousel` | reuse |
| 14 | blog-posts | `blog-list-main` | reuse |
| 15 | rich_collapsible_content | `faq-collapsible-tabs` | reuse |
| 16 | shoppable_reels | `media-shop-the-feed` | reuse |
| 17 | spacer 40px | — | leftover |
| 18 | newsletter | `lead-capture-newsletter-band` | reuse · submit yok |
| 19 | footer | `footer-columns-newsletter` | reuse |
| 20 | cookies / email-signup | — | leftover 0px / PII |
| 21 | cart-drawer | `global-cart-drawer` | reuse · interact |
| 22 | predictive-search | `global-predictive-search` | reuse · interact |
| 23 | header-drawer | `global-menu-drawer` | reuse · 375/768 |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 5 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 6 | product-showcase-grid-featured.2 | home | [ ] | [x] | reuse | [ ] |
| 7 | promo-grid-banner | home | [ ] | [x] | reuse | [ ] |
| 8 | product-showcase-grid-featured.3 | home | [ ] | [x] | reuse | [ ] |
| 9 | media-lookbook-banner | home | [ ] | [x] | reuse | [ ] |
| 10 | promo-scrolling-marquee | home | [ ] | [x] | reuse | [ ] |
| 11 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 12 | product-showcase-featured | home | [ ] | [x] | reuse | [ ] |
| 13 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 14 | blog-list-main | home | [ ] | [x] | reuse | [ ] |
| 15 | faq-collapsible-tabs | home | [ ] | [x] | reuse | [ ] |
| 16 | media-shop-the-feed | home | [ ] | [x] | reuse | [ ] |
| 17 | lead-capture-newsletter-band | home | [ ] | [x] | reuse | [ ] |
| 18 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 19 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 20 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 21 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 22 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 23 | product-info-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 24 | collection-nav-image-cards | product-detail | [ ] | [x] | reuse | [ ] |
| 25 | editorial-image-with-text | product-detail | [ ] | [x] | reuse | [ ] |
| 26 | collection-banner | collection | [ ] | [x] | reuse | [ ] |
| 27 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 28 | editorial-image-with-text | collection | [ ] | [x] | reuse | [ ] |
| 29 | features-multicolumn | collection | [ ] | [x] | reuse | [ ] |
| 30 | editorial-rich-text | collections | [ ] | [x] | reuse | [ ] |
| 31 | product-showcase-featured | collections | [ ] | [x] | reuse | [ ] |
| 32 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 33 | editorial-image-with-text | collections | [ ] | [x] | reuse | [ ] |
| 34 | features-multicolumn | collections | [ ] | [x] | reuse | [ ] |
| 35 | search-results | search | [ ] | [x] | reuse | [ ] |
| 36 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 37 | product-showcase-related | cart | [ ] | [x] | reuse | [ ] |
| 38 | page-content-main | about-brand | [ ] | [x] | reuse | [ ] |
| 39 | editorial-image-with-text-overlay | about-brand | [ ] | [x] | reuse | [ ] |
| 40 | editorial-rich-text | about-brand | [ ] | [x] | reuse | [ ] |
| 41 | editorial-image-with-text | about-brand | [ ] | [x] | reuse | [ ] |
| 42 | editorial-image-with-text.2 | about-brand | [ ] | [x] | reuse | [ ] |
| 43 | blog-list-main | about-brand | [ ] | [x] | reuse | [ ] |
| 44 | editorial-image-with-text | contact | [ ] | [x] | reuse | [ ] |
| 45 | lead-capture-form | contact | [ ] | [x] | reuse | [ ] |
| 46 | blog-list-main | blog-list | [ ] | [x] | reuse | [ ] |
| 47 | blog-post-main | blog-post | [ ] | [x] | reuse | [ ] |
| 48 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (kareye bakılacak)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 Stores mega |
| global-predictive-search | input | [ ] 3vp `watch` |
| global-menu-drawer | open | [ ] 375 + 768 |
| global-cart-drawer | filled + changed | [ ] |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed | [ ] black → gym red |

---

## Aday / leftover

[`candidates/woodstock-leftovers.md`](../candidates/woodstock-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
