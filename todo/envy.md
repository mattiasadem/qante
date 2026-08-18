# Todo — Envy (Eight Themes, paid) · Boho

*Kaynak:* https://eight-boho-demo.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/envy  
*Preset:* `default` (Boho) — resmi Theme Store preview  
*Slug:* `envy`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **New Account Component - 9.6.26**  
`schema_name` = **Envy** · `schema_version` = **36.0.4** · `role` = **main** · theme id `143200747586`  
`theme_store_id` = **null** (canlıda yok; Theme Store numeric id uydurulmadı)  
`Shopify.shop` = `envy-oslo.myshopify.com`  
Walk host: `eight-boho-demo.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft https://github.com/mattiasadem/qante/pull/199 — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/envy/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **60** |
| PNG | **198** |
| Validate | **65 temiz · 0 error · 0 warn** |
| Parallel | yalnız `observations/envy/`, `evidence/envy/`, `todo/envy.md`, `candidates/envy-leftovers.md` |

**Kapsam satırı:**  
`Envy · default (Boho) · New Account Component - 9.6.26 / schema_name Envy 36.0.4 · theme_store_id null · role main · id 143200747586 · shop envy-oslo.myshopify.com · home→PDP Floral Dress→PLP /collections/all→/collections→search dress→cart empty/filled/qty→about-us-new/contact-us→faqs→blog+Lena article→404 · 60 obs · 198 PNG · 0 yeni şema · leftover: candidates/envy-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + capture | [x] |
| Mega Shop 1440 | interact | [x] |
| Predictive search `dress` | interact 3vp | [x] |
| Mobile menu 375 + 768 | interact | [x] |
| Cart drawer empty + filled + qty | interact 3vp | [x] |
| PDP Floral Dress Extra Small→Medium | interact 3vp | [x] |
| PLP `/collections/all` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=dress` | roster + capture | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| About `/pages/about-us-new` (`/pages/about` 404) | roster + capture | [x] |
| Contact `/pages/contact-us` (submit yok) | roster + capture | [x] |
| FAQ `/pages/faqs` (`/pages/faq` 404) | roster + capture | [x] |
| Blog `/blogs/blog` + Lena article | roster + capture | [x] |
| 404 | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Envy / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse + Shop mega hover |
| 3 | offers-drawer | — | leftover (h=0) |
| 4 | video_popup | — | leftover (h=0) |
| 5 | image_slideshow | `hero-slideshow` | reuse |
| 6 | scrolling_banner_TCUcff | `social-proof-brand-logos` | reuse · VOGUE/ELLE |
| 7 | collage_builder_zQfKwQ | `promo-grid-banner` | reuse |
| 8 | scrolling_banner_RjPXPn | `promo-scrolling-marquee` | reuse |
| 9 | 3643d38b Trending | `product-showcase-grid-featured` | reuse |
| 10 | collage_builder_LcWFLT | `promo-banner-countdown` | reuse |
| 11 | navigation_banner | `collection-nav-icon-buttons` | reuse · ikon zayıf |
| 12 | 50b03afc empower | `collection-nav-image-cards` | reuse |
| 13 | featured dresses | `product-showcase-grid-featured.2` | reuse |
| 14 | shop_the_look | `media-lookbook-slider` | reuse |
| 15 | Journal | `blog-list-main` | reuse |
| 16 | social_proof | `testimonial-quote-carousel` | reuse |
| 17 | featured bags | `product-showcase-grid-featured.3` | reuse |
| 18 | newsletter | `lead-capture-newsletter-band` | reuse · submit yok |
| 19 | footer-main | `footer-columns-newsletter` | reuse |
| 20 | footer-bottom | — | leftover (© + USD) |
| 21 | search-dropdown | `global-predictive-search` | reuse |
| 22 | #NavDrawer | `global-menu-drawer` | reuse · 375/768 |
| 23 | cart-drawer | `global-cart-drawer` | reuse |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | social-proof-brand-logos | home | [x] | [x] | reuse | [x] |
| 5 | promo-grid-banner | home | [x] | [x] | reuse | [x] |
| 6 | promo-scrolling-marquee | home | [x] | [x] | reuse | [x] |
| 7 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 8 | promo-banner-countdown | home | [x] | [x] | reuse | [x] |
| 9 | collection-nav-icon-buttons | home | [x] | [x] | reuse | [x] |
| 10 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 11 | product-showcase-grid-featured.2 | home | [x] | [x] | reuse | [x] |
| 12 | media-lookbook-slider | home | [x] | [x] | reuse | [x] |
| 13 | blog-list-main | home | [x] | [x] | reuse | [x] |
| 14 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 15 | product-showcase-grid-featured.3 | home | [x] | [x] | reuse | [x] |
| 16 | lead-capture-newsletter-band | home | [x] | [x] | reuse | [x] |
| 17 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 18 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 19 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 20 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 21 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 22 | editorial-image-with-text-overlay | product-detail | [x] | [x] | reuse | [x] |
| 23 | editorial-rich-text | product-detail | [x] | [x] | reuse | [x] |
| 24 | editorial-image-with-text | product-detail | [x] | [x] | reuse | [x] |
| 25 | product-showcase-recently-viewed | product-detail | [x] | [x] | reuse | [x] |
| 26 | collection-banner | collection | [x] | [x] | reuse | [x] |
| 27 | collection-nav-image-cards | collection | [x] | [x] | reuse | [x] |
| 28 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 29 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 30 | search-results | search | [x] | [x] | reuse | [x] |
| 31 | lead-capture-newsletter-band | search | [x] | [x] | reuse | [x] |
| 32 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 33 | product-showcase-grid-featured | cart | [x] | [x] | reuse | [x] |
| 34–43 | about roster | about-brand | [x] | [x] | reuse | [x] |
| 44–49 | contact | contact | [x] | [x] | reuse | [x] |
| 50–54 | FAQ | faq-support | [x] | [x] | reuse | [x] |
| 55–58 | blog + article | blog-list/post | [x] | [x] | reuse | [x] |
| 59–60 | 404 | not-found | [x] | [x] | reuse | [x] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Shop — Clothing / Accessories / Home Goods + gift card + sale |
| global-predictive-search | input | [x] 3vp `dress` — Suggestions + Smock/Floral/Panorama |
| global-menu-drawer | open | [x] 375 + 768 Shop(+) / Our story / Blog / Theme Features / USD / Account |
| global-cart-drawer | filled + changed | [x] empty → qty1 $132 → qty2 $264 |
| cart-page-main | filled + changed | [x] empty → qty1 $132 → qty2 $264 |
| product-info-main | changed | [x] Extra Small → Medium (swatch; fiyat $132) |

---

## Aday / leftover

[`candidates/envy-leftovers.md`](../candidates/envy-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 162 PNG
- [x] Interact mega / search / mobile 375+768 / cart empty+filled+qty / PDP Size — 36 PNG
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 65 temiz · 0 error · 0 warn
