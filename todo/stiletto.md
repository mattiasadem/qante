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

**Durum:** Mod A walk + observation iskeleti yazıldı; resmi 3vp + interact capture devam ediyor.  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/stiletto/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/stiletto/`, `evidence/stiletto/`, `todo/stiletto.md`, `candidates/stiletto-leftovers.md` |

**Kapsam satırı:**  
`Stiletto · default (Vogue) · stiletto-v6-1-0 · schema_name Stiletto 6.1.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 60 obs · 0 yeni şema · leftover: candidates/stiletto-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + obs | [ ] capture |
| Mega CLOTHING 1440 | interact obs | [ ] |
| Predictive search `dress` | interact obs | [ ] |
| Mobile menu 375 | interact obs | [ ] |
| Mobile menu 768 | interact obs | [ ] |
| Cart drawer empty + filled + qty | interact obs | [ ] |
| PDP Behati XS→S | interact obs | [ ] |
| PLP `/collections/dresses-1` | roster + obs | [ ] |
| Collections index `/collections` | roster + obs | [ ] |
| Search `/search?q=dress` | roster + obs | [ ] |
| Cart page empty + filled + qty | interact obs | [ ] |
| About `/pages/about-us` | roster + obs | [ ] |
| Contact `/pages/contact` (submit yok) | roster + obs | [ ] |
| FAQ `/pages/faq` | roster + obs | [ ] |
| Journal + article | roster + obs | [ ] |
| 404 | roster + obs | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM `data-section-type`)

| # | Stiletto type | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | quick-cart | `global-cart-drawer` | reuse · interact |
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
| 28 | header menu modal | `global-menu-drawer` | reuse · 375/768 |
| 29 | #MainQuickSearch | `global-predictive-search` | reuse |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | CLOTHING hover 1440 — capture bekleniyor |
| global-predictive-search | input | `dress` 3vp — capture bekleniyor |
| global-menu-drawer | open | 375/768 — capture bekleniyor |
| global-cart-drawer | filled + changed | Behati — capture bekleniyor |
| cart-page-main | filled + changed | Behati — capture bekleniyor |
| product-info-main | changed | XS→S — capture bekleniyor |

---

## Aday / leftover

[`candidates/stiletto-leftovers.md`](../candidates/stiletto-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
