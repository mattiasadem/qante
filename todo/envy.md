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

**Durum:** Mod A walk + resmi 3vp + interact + validate **devam**  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/envy/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **60** |
| PNG | (capture sonrası) |
| Parallel | yalnız `observations/envy/`, `evidence/envy/`, `todo/envy.md`, `candidates/envy-leftovers.md` |

**Kapsam satırı:**  
`Envy · default (Boho) · New Account Component - 9.6.26 / schema_name Envy 36.0.4 · theme_store_id null · home→PDP Floral Dress→PLP /collections/all→/collections→search dress→cart→about-us-new/contact-us→faqs→blog+article→404 · 60 obs · 0 yeni şema · leftover: candidates/envy-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + obs | [ ] capture |
| Mega Shop 1440 | interact obs | [ ] |
| Predictive search `dress` | interact obs | [ ] |
| Mobile menu 375 + 768 | interact obs | [ ] |
| Cart drawer empty + filled + qty | interact obs | [ ] |
| PDP Floral Dress Extra Small→Medium | interact obs | [ ] |
| PLP `/collections/all` | roster + obs | [ ] |
| Collections index `/collections` | roster + obs | [ ] |
| Search `/search?q=dress` | roster + obs | [ ] |
| Cart page empty + filled + qty | interact obs | [ ] |
| About `/pages/about-us-new` (`/pages/about` 404) | roster + obs | [ ] |
| Contact `/pages/contact-us` (submit yok) | roster + obs | [ ] |
| FAQ `/pages/faqs` (`/pages/faq` 404) | roster + obs | [ ] |
| Blog `/blogs/blog` + Lena article | roster + obs | [ ] |
| 404 | roster + obs | [ ] |
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
| 6 | scrolling_banner_TCUcff | `media-scrolling-gallery` | reuse · görsel ticker |
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
| 1–20 | home + overlays | home | [ ] | [x] | reuse | [ ] |
| 21 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 22–25 | PDP extras + recently viewed | product-detail | [ ] | [x] | reuse | [ ] |
| 26–28 | PLP banner/nav/grid | collection | [ ] | [x] | reuse | [ ] |
| 29 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 30–31 | search + newsletter | search | [ ] | [x] | reuse | [ ] |
| 32–33 | cart + bestsellers | cart | [ ] | [x] | reuse | [ ] |
| 34–43 | about roster | about-brand | [ ] | [x] | reuse | [ ] |
| 44–49 | contact | contact | [ ] | [x] | reuse | [ ] |
| 50–54 | FAQ | faq-support | [ ] | [x] | reuse | [ ] |
| 55–58 | blog + article | blog-list/post | [ ] | [x] | reuse | [ ] |
| 59–60 | 404 | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 Shop mega |
| global-predictive-search | input | [ ] 3vp `dress` |
| global-menu-drawer | open | [ ] 375 + 768 |
| global-cart-drawer | filled + changed | [ ] empty → Floral qty1 → qty2 |
| cart-page-main | filled + changed | [ ] empty → Floral qty1 → qty2 |
| product-info-main | changed | [ ] Extra Small → Medium |

---

## Aday / leftover

[`candidates/envy-leftovers.md`](../candidates/envy-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / mobile 375+768 / cart empty+filled+qty / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
