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

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft https://github.com/mattiasadem/qante/pull/185 — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/stack/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| PNG | **135** |
| Parallel | yalnız `observations/stack/`, `evidence/stack/`, `todo/stack.md`, `candidates/stack-leftovers.md` |

**Kapsam satırı:**  
`Stack · default (Mass) · retailer/mass · schema_name Stack 1.0.2 · theme_store_id null · home→PDP Indoor Cycling Bike→PLP /collections/cardio→collections→search bike→cart→about/contact→FAQ→blog→404 · 39 obs · 135 PNG · 0 yeni şema · leftover: candidates/stack-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + capture | [x] |
| Mega Equipment 1440 | interact | [x] |
| Predictive search `bike` | interact 3vp | [x] |
| Mobile menu 375 + 768 | interact | [x] |
| Cart drawer empty + filled + qty | interact 3vp | [x] |
| PDP Indoor Cycling Bike Black→Gray | interact 3vp | [x] |
| PLP `/collections/cardio` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=bike` | roster + capture | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| About `/pages/about` (`/pages/about-us` 404) | roster + capture | [x] |
| Contact `/pages/contact` (submit yok) | roster + capture | [x] |
| FAQ `/pages/faq` | roster + capture | [x] |
| News + article | roster + capture | [x] |
| 404 | roster + capture | [x] |
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
| 1–39 | reuse set | walk | [x] | [x] | reuse | [x] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Equipment — 4 kolon + Lift Without Limits Up to 30% |
| global-predictive-search | input | [x] 3vp `bike` — Spin Bike $995 / Indoor Cycling Bike $849 + Products/Articles |
| global-menu-drawer | open | [x] 375 + 768 hamburger — Equipment chevron / News / About / Features |
| global-cart-drawer | filled + changed | [x] empty $100 away → qty1 $849 → qty2 $1,698 |
| cart-page-main | filled + changed | [x] empty → qty1 $849 → qty2 $1,698 |
| product-info-main | changed | [x] Black In Stock → Gray Low Stock; $849 aynı |

---

## Aday / leftover

[`candidates/stack-leftovers.md`](../candidates/stack-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 33/33
- [x] Interact mega / search / cart / menu / PDP Color — 36 PNG
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
