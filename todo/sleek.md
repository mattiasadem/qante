# Todo — Sleek (FoxEcom, paid)

*Kaynak (resmi walk ONLY):* https://sleek-theme-demo.myshopify.com/  
*Yasak URL yok (bu vitrin açık).*  
*Preset:* `default` (Glossy vitrin) · *Slug:* `sleek`  
*Theme Store:* https://themes.shopify.com/themes/sleek

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **[Update Theme Store] Sleek**  
`schema_name` = **Sleek** · `schema_version` = **2.3.0** · `role` = **main** · theme id `179881967905`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `sleek-glossy.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact (nav/cart/PDP + **CRO**) + validate **bitti** (0 error)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/sleek/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **59** |
| PNG | **214** |
| Parallel | yalnız `observations/sleek/`, `evidence/sleek/`, `todo/sleek.md`, `candidates/sleek-leftovers.md` |

**Kapsam satırı:**  
`Sleek · default (Glossy) · [Update Theme Store] Sleek / schema_name Sleek 2.3.0 · theme_store_id null · home→PDP Water Lock→PLP accessories→collections→search skin→cart→about/contact→faqs→blog our-journey→404 · 59 obs · 214 PNG · 0 yeni şema · CRO interact 3/4 · leftover: candidates/sleek-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion | roster | [x] |
| Mega Shop 1440 | interact | [x] |
| Predictive search `moisturizer` | interact 3vp | [x] |
| Mobile menu 375 | interact | [x] |
| Mobile menu 768 | interact | [x] |
| Cart drawer empty + filled + qty | interact 3vp | [x] |
| PDP Water Lock Size 100ml→150ml | interact 3vp | [x] |
| PLP `/collections/accessories` | roster | [x] |
| Collections index `/collections` | roster | [x] |
| Search `/search?q=skin` | roster | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| About `/pages/about` (`/pages/about-us` 404) | roster | [x] |
| Contact `/pages/contact` (submit yok) | roster | [x] |
| FAQ `/pages/faqs` | roster | [x] |
| Blog `/blogs/our-journey` + Top Lipsticks | roster | [x] |
| 404 leftover | roster | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Sleek / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | scrolling_promotion_KhdTdc | `promo-announcement-bar` | reuse · header ticker |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | slideshow_q3U4Jn | `hero-slideshow` | reuse |
| 4 | product_tabs_iJHLzK | `product-showcase-tabs` | reuse |
| 5 | highlight_text_with_image_9KLzcX | `editorial-highlight-text-image` | reuse |
| 6 | collection_list_Pr36qH | `collection-nav-slider` | reuse |
| 7 | products_bundle_cFjE73 | `commerce-tools-products-bundle` | reuse · **interact** changed |
| 8 | multicolumn_mQAQbW | `features-multicolumn` | reuse · press quotes |
| 9 | card_images_YfYkKC | `collection-nav-cards` | reuse |
| 10 | feature_list_cW3d9c | `trust-icon-row` | reuse |
| 11 | rich_text_7rBwdd | `editorial-rich-text` | reuse |
| 12 | custom_content_rhXbV3 | `editorial-custom-content` | reuse |
| 13 | image_with_text_MgddA8 | `editorial-image-with-text` | reuse |
| 14 | products_showcase_9KVeQe | `product-showcase-featured` | reuse |
| 15 | scrolling_promotion_htQpcB | `promo-scrolling-marquee` | reuse |
| 16 | featured_products_tab_yYcGgw | `product-showcase-tabs.2` | reuse |
| 17 | testimonials_8JHr3L | `testimonial-quote-carousel` | reuse · **interact** changed 768/1440 |
| 18 | collapsible_tabs_KNKLiF | `faq-collapsible-tabs` | reuse · **interact** changed |
| 19 | rich_text_J3XnPC | `editorial-rich-text.2` | reuse |
| 20 | custom_content_dxQmWd | `editorial-custom-content.2` | reuse |
| 21 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 22 | #MenuDrawer | `global-menu-drawer` | reuse · 375/768 |
| 23 | #SearchDrawer | `global-predictive-search` | reuse |
| 24 | #CartDrawer | `global-cart-drawer` | reuse |
| 25 | quick-view / popup | — | leftover 0px / PII |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] Shop hover 1440 — Best Sellers + Skincare/Makeup + Trend This Week |
| global-predictive-search | input | [x] `moisturizer` 3vp — Water Lock + Moisturizers collection |
| global-menu-drawer | open / changed | [x] 375/768 hamburger; changed = Presets panel. 1440 hamburger yok |
| global-cart-drawer | filled + changed | [x] empty → 100ml $39 qty1 → qty2 $78 |
| cart-page-main | filled + changed | [x] empty → $39 → qty2 $78 |
| product-info-main | changed | [x] 100ml 221 stock → 150ml 222 stock; fiyat $39 |
| commerce-tools-products-bundle | initial + changed | [x] Rose quartz 100ml→150ml; Add all to cart tıklanmadı |
| faq-collapsible-tabs (home) | initial + changed | [x] shipping açık → packaging sorusu açık |
| testimonial-quote-carousel (home) | initial + changed | [x] Jaroslava K. → Alexandra M. (768/1440). 375 changed yok |

---

## Aday / leftover

[`candidates/sleek-leftovers.md`](../candidates/sleek-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / menu / cart / PDP Size / **CRO bundle+faq+testimonial**
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error / 0 warn
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
