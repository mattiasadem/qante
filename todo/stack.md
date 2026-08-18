# Todo — Stack (Shopify paid) · Mass

*Kaynak (resmi walk URL):* https://retailer-mass.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/stack  
*Preset klasör:* `default` (Mass)  
*Slug:* `stack`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **retailer/mass**  
`schema_name` = **Stack** · `schema_version` = **1.0.2** · `role` = **main** · theme id `150759768247`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`Shopify.shop` = `retailer-mass.myshopify.com`

**Beklenen vs canlı:** Theme Store listing Stack. Canlı Mass demo **Stack 1.0.2** ve `theme_store_id` **null**. null yazıldı.  
**Diğer preset:** Workbench / Gardenia / Setup / Lager **bu PR’de yok**.

**Durum:** Mod A walk + observation JSON yazıldı; resmi 3vp + interact **sırada**  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/stack/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| PNG | — (capture öncesi) |
| Parallel | yalnız `observations/stack/`, `evidence/stack/`, `todo/stack.md`, `candidates/stack-leftovers.md` |

**Kapsam satırı:**  
`Stack · default (Mass) · retailer/mass · schema_name Stack 1.0.2 · theme_store_id null · home→PDP Indoor Cycling Bike→PLP /collections/cardio→collections→search bike→cart→about/contact→FAQ→blog→404 · 39 obs · 0 yeni şema · leftover: candidates/stack-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + JSON | [ ] capture |
| Mega Equipment 1440 | JSON | [ ] interact |
| Predictive search `bike` | JSON | [ ] interact 3vp |
| Mobile menu 375 + 768 | JSON | [ ] interact |
| Cart drawer empty + filled + qty | JSON | [ ] interact 3vp |
| PDP Indoor Cycling Bike Black→Gray | JSON | [ ] interact 3vp |
| PLP `/collections/cardio` | roster + JSON | [ ] capture |
| Collections index `/collections` | roster + JSON | [ ] capture |
| Search `/search?q=bike` | roster + JSON | [ ] capture |
| Cart page empty + filled + qty | JSON | [ ] interact 3vp |
| About `/pages/about` (`/pages/about-us` 404) | roster + JSON | [ ] capture |
| Contact `/pages/contact` (submit yok) | roster + JSON | [ ] capture |
| FAQ `/pages/faq` | roster + JSON | [ ] capture |
| News + article | roster + JSON | [ ] capture |
| 404 | roster + JSON | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |
| Workbench / Gardenia / Setup / Lager | ⛔ walk dışı | — |

---

## Home roster (DOM)

| # | Stack / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header `.announcement-bar--wrapper` | `promo-announcement-bar` | reuse · locale leftover |
| 2 | `sticky-header` | `navigation-header-mega` | reuse + Equipment hover |
| 3 | slideshow_4DQhHz | `hero-slideshow` | reuse |
| 4 | products_tabs_6aKyL6 | `product-showcase-tabs` | reuse · QV leftover |
| 5 | media_cards_ynDzPB | `promo-grid-banner` | reuse |
| 6 | collections_list_Aw68cc | `collection-nav-image-cards` | reuse |
| 7 | image_with_text_UJbtxe | `editorial-image-with-text` | reuse |
| 8 | product_markers_zQWUTT | `media-lookbook-banner` | reuse · hotspot + slayt |
| 9 | featured_ticker_Dxc6KL | `promo-scrolling-marquee` | reuse |
| 10 | testimonials_C7HqAf | `testimonial-quote-carousel` | reuse |
| 11 | blog_posts_aqAqi3 | `blog-list-main` | reuse |
| 12 | social_media_PWNc8a | `media-shop-the-feed` | reuse · pin yok |
| 13 | collapsible_content_X3E8WQ | `faq-collapsible-tabs` | reuse |
| 14 | multicolumn_PVMiXg | `features-multicolumn` | reuse · sayfa tekrarı leftover |
| 15 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 16 | cart-drawer `#CartDrawer` | `global-cart-drawer` | reuse · interact |
| 17 | header-search / predictive-search | `global-predictive-search` | reuse · interact |
| 18 | header-drawer `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–39 | reuse set | walk | [ ] | [x] | reuse | [ ] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 Equipment hover |
| global-predictive-search | input | [ ] 3vp `bike` |
| global-menu-drawer | open | [ ] 375 + 768 hamburger |
| global-cart-drawer | filled + changed | [ ] empty + Indoor Cycling Bike + qty |
| cart-page-main | filled + changed | [ ] empty + filled + qty |
| product-info-main | changed | [ ] Black → Gray |

---

## Aday / leftover

[`candidates/stack-leftovers.md`](../candidates/stack-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
