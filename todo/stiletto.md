# Todo — Stiletto (Shopify paid) · Fluorescent · Vogue

*Kaynak (resmi walk URL):* https://stiletto-theme-vogue.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/stiletto  
*Preset klasör:* `default` (Vogue)  
*Slug:* `stiletto`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **stiletto-v6-1-0**  
`schema_name` = **Stiletto** · `schema_version` = **6.1.0** · `role` = **main** · theme id `160008405141`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`Shopify.shop` = `stiletto-theme-vogue.myshopify.com`  
Canlı host: `stiletto-theme-vogue.myshopify.com` → **301 primary_domain_redirection** → `stiletto-theme-stiletto.myshopify.com` (aynı mağaza, aynı theme JSON).

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft https://github.com/mattiasadem/qante/pull/169 — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/stiletto/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **60** |
| PNG | **196** (statik kareler popup kapatılarak yeniden çekildi) |
| Parallel | yalnız `observations/stiletto/`, `evidence/stiletto/`, `todo/stiletto.md`, `candidates/stiletto-leftovers.md` |

**Kapsam satırı:**  
`Stiletto · default (Vogue) · stiletto-v6-1-0 · schema_name Stiletto 6.1.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 60 obs · 196 PNG · 0 yeni şema · leftover: candidates/stiletto-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + capture | [x] |
| Mega CLOTHING 1440 | interact | [x] |
| Predictive search `dress` | interact 3vp | [x] |
| Mobile menu 375 | interact | [x] |
| Mobile menu 768 | interact | [x] |
| Cart drawer empty + filled + qty | interact | [x] empty/filled 3vp · qty 1440 |
| PDP Behati XS→S | interact 3vp | [x] |
| PLP `/collections/dresses-1` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=dress` | roster + capture | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| About `/pages/about-us` | roster + capture | [x] |
| Contact `/pages/contact` (submit yok) | roster + capture | [x] |
| FAQ `/pages/faq` | roster + capture | [x] |
| Journal + article | roster + capture | [x] |
| 404 | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM `data-section-type`)

| # | Stiletto type | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | quick-cart | `global-cart-drawer` | reuse · interact · kutu `__container` |
| 4 | popup | — | leftover 0px / PII signup |
| 5 | shoppable-hero (video) | `media-video-hero` | reuse · A PAIR IN MOTION |
| 6 | scrolling-content | `promo-scrolling-marquee` | reuse |
| 7 | rich-text | `editorial-rich-text` | reuse |
| 8 | collection-list-slider | `collection-nav-slider` | reuse |
| 9 | countdown-bar | `promo-banner-countdown` | reuse |
| 10 | image-with-text-split | `editorial-image-with-text` | reuse |
| 11 | featured-collection-slider | `product-showcase-grid-featured` | reuse |
| 12 | shoppable-hero | `media-lookbook-banner` | reuse · BE CHIC |
| 13 | sales-banner | `promo-grid-banner` | reuse |
| 14 | featured-collection-slider | `product-showcase-grid-featured.2` | reuse |
| 15 | shoppable | `media-lookbook-banner.2` | reuse · hotspot |
| 16 | video-hero | `media-video-hero.2` | reuse |
| 17 | shoppable-videos | `media-shop-the-feed` | reuse |
| 18 | grid | `promo-grid-banner.2` | reuse |
| 19 | featured-collection-slider | `product-showcase-grid-featured.3` | reuse |
| 20 | quote | `testimonial-quote-carousel` | reuse |
| 21 | image-hero | `editorial-image-with-text-overlay` | reuse |
| 22 | scrolling-content | `promo-scrolling-marquee.2` | reuse |
| 23 | multi-column (about) | `editorial-image-with-text.2` | reuse · tek portre |
| 24 | blog-posts | `blog-list-main` | reuse |
| 25 | scrolling-text-banner | `promo-scrolling-marquee.3` | reuse · görsel+CTA |
| 26 | multi-column (footer group) | `trust-icon-row` | reuse |
| 27 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 28 | drawer-menu | `global-menu-drawer` | reuse · 375/768 |
| 29 | #MainQuickSearch | `global-predictive-search` | reuse |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | 1440 CLOTHING: 2 kolon + THE CITY EDIT / DISCOVER |
| global-predictive-search | input | `dress` — suggestions + Coastline $349→$259 / Chloe $319 + VIEW ALL RESULTS |
| global-menu-drawer | open | 375/768 siyah drawer + thumb/chevron. Register/Login tıklanmadı |
| global-cart-drawer | filled + changed | empty + Behati $249 3vp; qty 2 / $498 yalnız 1440 |
| cart-page-main | filled + changed | empty → qty1 $249 → qty2 $498 + free shipping 3vp |
| product-info-main | changed | XS → S chip; $249 aynı; Color Pearl |

---

## Aday / leftover

[`candidates/stiletto-leftovers.md`](../candidates/stiletto-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs` / recapture `capture-interaction.mjs`)
- [x] JOIN US + walkthrough kapatıldı; Get 10% Off tab leftover
- [x] Interact mega / search / cart / menu / PDP Size
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
