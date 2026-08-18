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

**Durum:** Mod A walk + resmi 3vp + interact + validate (devam)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/sleek/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **59** |
| Parallel | yalnız `observations/sleek/`, `evidence/sleek/`, `todo/sleek.md`, `candidates/sleek-leftovers.md` |

**Kapsam satırı:**  
`Sleek · default (Glossy) · [Update Theme Store] Sleek / schema_name Sleek 2.3.0 · theme_store_id null · home→PDP Water Lock→PLP accessories→collections→search skin→cart→about/contact→faqs→blog our-journey→404 · 59 obs · 0 yeni şema · leftover: candidates/sleek-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion | roster | [ ] capture |
| Mega Shop 1440 | interact | [ ] |
| Predictive search `moisturizer` | interact 3vp | [ ] |
| Mobile menu 375 | interact | [ ] |
| Mobile menu 768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact 3vp | [ ] |
| PDP Water Lock Size 100ml→150ml | interact 3vp | [ ] |
| PLP `/collections/accessories` | roster | [ ] capture |
| Collections index `/collections` | roster | [ ] capture |
| Search `/search?q=skin` | roster | [ ] capture |
| Cart page empty + filled + qty | interact 3vp | [ ] |
| About `/pages/about` (`/pages/about-us` 404) | roster | [ ] capture |
| Contact `/pages/contact` (submit yok) | roster | [ ] capture |
| FAQ `/pages/faqs` | roster | [ ] capture |
| Blog `/blogs/our-journey` + Top Lipsticks | roster | [ ] capture |
| 404 leftover | roster | [ ] capture |
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
| 7 | products_bundle_cFjE73 | `commerce-tools-products-bundle` | reuse |
| 8 | multicolumn_mQAQbW | `features-multicolumn` | reuse · press quotes |
| 9 | card_images_YfYkKC | `collection-nav-cards` | reuse |
| 10 | feature_list_cW3d9c | `trust-icon-row` | reuse |
| 11 | rich_text_7rBwdd | `editorial-rich-text` | reuse |
| 12 | custom_content_rhXbV3 | `editorial-custom-content` | reuse |
| 13 | image_with_text_MgddA8 | `editorial-image-with-text` | reuse |
| 14 | products_showcase_9KVeQe | `product-showcase-featured` | reuse |
| 15 | scrolling_promotion_htQpcB | `promo-scrolling-marquee` | reuse |
| 16 | featured_products_tab_yYcGgw | `product-showcase-tabs.2` | reuse |
| 17 | testimonials_8JHr3L | `testimonial-quote-carousel` | reuse |
| 18 | collapsible_tabs_KNKLiF | `faq-collapsible-tabs` | reuse |
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
| navigation-header-mega | open | [ ] Shop hover 1440 |
| global-predictive-search | input | [ ] `moisturizer` 3vp |
| global-menu-drawer | open / changed | [ ] 375/768 |
| global-cart-drawer | filled + changed | [ ] empty → 100ml $39 → qty 2 |
| cart-page-main | filled + changed | [ ] empty → filled → qty |
| product-info-main | changed | [ ] 100ml → 150ml |

---

## Aday / leftover

[`candidates/sleek-leftovers.md`](../candidates/sleek-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu / cart / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
