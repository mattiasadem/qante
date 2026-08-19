# Todo — Expanse (Shopify paid) · Archetype · Furniture

*Kaynak:* https://expanse-theme-furniture.myshopify.com/  
*Yasak URL:* https://expanse-theme.myshopify.com/ (password) — **kullanılmadı**  
*Preset:* `default` (Furniture) · *Slug:* `expanse`  
*Theme Store:* https://themes.shopify.com/themes/expanse

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **expanse/classic/production**  
`schema_name` = **Expanse** · `schema_version` = **6.1.0** · `role` = **main** · theme id `138453090501`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `expanse-theme-furniture.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + CRO leftover interact + validate  
**PR:** https://github.com/mattiasadem/qante/pull/221 — **draft · main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/expanse/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/expanse/`, `evidence/expanse/`, `todo/expanse.md`, `candidates/expanse-leftovers.md` |

**Kapsam satırı:**  
`Expanse · default (Furniture) · expanse/classic/production · schema_name Expanse 6.1.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→our-story/contact-us→faq→blog→404 · 46 obs · 156 PNG · 0 yeni şema · leftover: candidates/expanse-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion blocks | roster + capture | [x] |
| Mega Homestyle 1440 | interact | [x] |
| Predictive search `chair` | interact 3vp | [x] |
| Mobile menu 375 | interact | [x] |
| Mobile menu 768 | interact | [x] |
| Cart drawer empty + filled + qty | interact 3vp | [x] |
| PDP iBed Size Small→X-Large | interact 3vp | [x] |
| PLP `/collections/decor` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=chair` | roster + capture | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| About `/pages/our-story` (`/pages/about` 404) | roster + capture | [x] |
| Contact `/pages/contact-us` (submit yok) | roster + capture | [x] |
| FAQ `/pages/faq` | roster + capture | [x] |
| News + article | roster + capture | [x] |
| 404 leftover | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |
| CRO leftover FAQ ilk soru | interact 3vp | [x] |
| CRO leftover testimonials Flickity nokta 3 | interact 3vp | [x] |
| CRO leftover countdown tick | ⛔ donuk 12 | leftover |
| CRO leftover lead-capture fill | ⛔ PII | leftover |

---

## Home roster (DOM)

| # | Expanse / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | toolbar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | newsletter-popup | — | leftover 0px / PII |
| 4 | slideshow-split | `hero-slideshow` | reuse |
| 5 | featured-collections | `collection-nav-image-cards` | reuse · 12 kart > max 8 delta |
| 6 | featured-collection | `product-showcase-grid-featured` | reuse |
| 7 | hotspots | `media-lookbook-banner` | reuse |
| 8 | promo-grid | `promo-grid-banner` | reuse |
| 9 | slideshow | `hero-slideshow.2` | reuse |
| 10 | logo-list | `social-proof-brand-logos` | reuse |
| 11 | newsletter | `lead-capture-newsletter-band` | reuse · submit yok |
| 12 | featured-collection2 | `product-showcase-grid-featured.2` | reuse |
| 13 | promo-grid2 | `promo-grid-banner.2` | reuse |
| 14 | countdown | `promo-banner-countdown` | reuse |
| 15 | slideshow-split2 | `editorial-image-with-text-overlay` | reuse |
| 16 | text-with-icons | `features-multicolumn` | reuse |
| 17 | blog-posts | `blog-list-main` | reuse |
| 18 | footer-promotions | `promo-grid-banner.3` | reuse |
| 19 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 20 | header-drawer mobile-nav | `global-menu-drawer` | reuse · 375/768 |
| 21 | #predictive-search-results | `global-predictive-search` | reuse |
| 22 | .site-header__cart | `global-cart-drawer` | reuse · header dropdown |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | Homestyle hover 1440 — 4 kolon + iBed SALE promo |
| global-predictive-search | input | `chair` 3vp — OH Chair $75 + Eames pen + Fantasy Animals |
| global-menu-drawer | open | 375/768 header-drawer + thumb. 1440 hamburger yok |
| global-cart-drawer | filled + changed | empty → X-Large $40 qty1 → qty2 $80 |
| cart-page-main | filled + changed | empty → X-Large $40 qty1 → qty2 $80 |
| product-info-main | changed | Small $25 (1 left) → X-Large $40 (4 left) |
| faq-collapsible-tabs | changed | İlk soru açık — worldwide shipping |
| testimonial-quote-carousel | changed | Nokta 2 Diana K → nokta 3 Gene H |
| promo-banner-countdown | — | Demo 12 sabit; tick yok |
| lead-capture-form / newsletter-band | — | PII / submit dur |

---

## Aday / leftover

[`candidates/expanse-leftovers.md`](../candidates/expanse-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / menu / PDP Size
- [x] CRO leftover: FAQ + testimonials (countdown/form leftover)
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
