# Todo — Pebble (Shopify paid) · FoxEcom · Little

*Kaynak:* https://pebble-little.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/pebble  
*Preset:* `default` (Little) · *Slug:* `pebble`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **[Live] Pebble-1-0-0**  
`schema_name` = **Pebble** · `schema_version` = **1.3.0** · `role` = **main** · theme id `152827625610`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `pebble-little.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact (CRO leftover) + validate **bitti** (0 error)  
**PR:** draft https://github.com/mattiasadem/qante/pull/261 — CRO interact turu

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/pebble/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **46** |
| Evidence PNG | **156** |
| Parallel | yalnız `observations/pebble/`, `evidence/pebble/`, `todo/pebble.md`, `candidates/pebble-leftovers.md` |

**Kapsam satırı:**  
`Pebble · default (Little) · [Live] Pebble-1-0-0 · schema_name Pebble 1.3.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→our-story/contact→blog→404 · 46 obs · 156 PNG · 0 yeni şema · leftover: candidates/pebble-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster + header/footer + conversion | roster + capture | [x] |
| Mega Shop 1440 | interact | [x] |
| Predictive search `polo` | interact 3vp | [x] |
| Mobile menu 375 | interact | [x] |
| Mobile menu 768 | interact | [x] |
| Cart drawer empty + filled + qty | interact 3vp | [x] |
| PDP Logo Polo Red Size 3Y→8Y | interact 3vp | [x] |
| PLP `/collections/all` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=polo` | roster + capture | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| About `/pages/our-story` (`/pages/about` 404) | roster + capture | [x] |
| Contact `/pages/contact` (submit yok) | roster + capture | [x] |
| News + Child on pink structure | roster + capture | [x] |
| 404 leftover | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Pebble / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header | `navigation-header-mega` | reuse · interact |
| 2 | slideshow_DqmGRC | `hero-slideshow` | reuse |
| 3 | collection_tabs_DM9Rwj | `collection-nav-image-cards` | reuse |
| 4 | scrolling_cards_aPwhgj | `editorial-images-scroll` | reuse · delta |
| 5 | collection_highlight_YV6p8F | `collection-nav-tabs` | reuse |
| 6 | product_tabs_VFRpjk | `product-showcase-tabs` | reuse |
| 7 | scrolling_card_layered_hwEqKR | `editorial-layered-images` | reuse · delta |
| 8 | custom_section_8WifFy | `promo-scrolling-marquee` | reuse |
| 9 | highlight_text_with_image_zV4HWH | `editorial-highlight-text-image` | reuse |
| 10 | custom_section_jEHjk8 | `media-lookbook-slider` | reuse · hotspot leftover |
| 11 | products_highlight_mTi6q7 | `product-showcase-featured` | reuse |
| 12 | product_suggestion_kmXGYN | `product-showcase-grid-featured` | reuse |
| 13 | products_bundle_mnDxAG | `commerce-tools-products-bundle` | reuse |
| 14 | testimonials_parallax_8FqTjk | `testimonial-quote-carousel` | reuse · parallax delta |
| 15 | custom_section_cjGfXN | `editorial-image-with-text` | reuse |
| 16 | custom_section_AYwNN4 | `promo-scrolling-marquee.2` | reuse |
| 17 | flex_carousel_8kBgwA | `promo-grid-banner` | reuse |
| 18 | custom_section_4yLVt7 | `trust-icon-row` | reuse · global |
| 19 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 20 | menu-drawer | `global-menu-drawer` | reuse · 375/768 |
| 21 | search-drawer / header search | `global-predictive-search` | reuse |
| 22 | #cart-drawer-dialog | `global-cart-drawer` | reuse |
| 23 | popup newsletter | — | leftover PII |
| 24 | quick-add-drawer | — | leftover |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Shop — sidebar + thumb + The Cozy Crew |
| global-predictive-search | input | [x] 3vp `polo` — Logo Polo Red $45 / Cotton Polo $30 |
| global-menu-drawer | open | [x] 375 + 768 |
| global-cart-drawer | filled + changed | [x] $45 → $90 (qty 2) · free-ship $55→$10 |
| cart-page-main | filled + changed | [x] $45 → $90 |
| product-info-main | changed | [x] 3Y in-stock → 8Y Only 2 left |

### CRO interact (leftover tur)

| schemaId | State | Sonuç |
|---|---|---|
| commerce-tools-products-bundle (home) | initial + changed | [x] Pink/3Y → Pink/7Y size select · filled → global-cart-drawer |
| commerce-tools-products-bundle (PDP) | initial | [x] Outfit Inspiration 1/2 · hover/changed yok |
| testimonial-quote-carousel | initial | [x] parallax stacked — carousel changed yok |
| lead-capture-form | initial | [x] PII dur — input yok |

CRO şemaları observation'da yok (yeni şema yok): before-after-slider, promo-banner-countdown, faq-collapsible-tabs, lead-capture-newsletter-band, comparison-quick-table, product-finder-quiz, media-shop-the-feed, media-scrolling-gallery

---

## Aday / leftover

[`candidates/pebble-leftovers.md`](../candidates/pebble-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 120 PNG
- [x] Interact mega / search / menu 375+768 / cart empty+filled+qty / PDP Size — 37 PNG
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
