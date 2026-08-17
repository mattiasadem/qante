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

**Durum:** Mod A walk + resmi 3vp + interact + validate  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/expanse/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/expanse/`, `evidence/expanse/`, `todo/expanse.md`, `candidates/expanse-leftovers.md` |

**Kapsam satırı:**  
`Expanse · default (Furniture) · expanse/classic/production · schema_name Expanse 6.1.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→our-story/contact-us→faq→blog→404 · 0 yeni şema · leftover: candidates/expanse-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion blocks | roster | [ ] capture |
| Mega Homestyle 1440 | interact | [ ] |
| Predictive search `chair` | interact 3vp | [ ] |
| Mobile menu 375 | interact | [ ] |
| Mobile menu 768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact 3vp | [ ] |
| PDP iBed Size Small→X-Large | interact 3vp | [ ] |
| PLP `/collections/decor` | roster | [ ] capture |
| Collections index `/collections` | roster | [ ] capture |
| Search `/search?q=chair` | roster | [ ] capture |
| Cart page empty + filled + qty | interact 3vp | [ ] |
| About `/pages/our-story` (`/pages/about` 404) | roster | [ ] capture |
| Contact `/pages/contact-us` (submit yok) | roster | [ ] capture |
| FAQ `/pages/faq` | roster | [ ] capture |
| News + article | roster | [ ] capture |
| 404 leftover | roster | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

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
| navigation-header-mega | open | Homestyle hover 1440 — Decor/Kitchen/Tabletop/More |
| global-predictive-search | input | `chair` — OH Chair $75 + Eames pen + Fantasy Animals |
| global-menu-drawer | open | 375/768 header-drawer. 1440 hamburger yok |
| global-cart-drawer | filled + changed | empty → iBed Small $25 → qty |
| cart-page-main | filled + changed | empty → iBed $25 → qty |
| product-info-main | changed | Small $25 → X-Large $40 (Save $10, low stock 4) |

---

## Aday / leftover

[`candidates/expanse-leftovers.md`](../candidates/expanse-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
