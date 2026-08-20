# Todo — Startup (Shopify paid) · Pixel Union · Tech

*Kaynak:* https://startup-theme-tech.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/startup  
*Preset:* `default` (Tech) · *Slug:* `startup`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Startup Tech v12.3.3 - 2025-05-01**  
`schema_name` = **Startup** · `schema_version` = **12.3.3** · `role` = **main** · theme id `135882997811`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `startup-theme-tech.myshopify.com`

**Durum:** Mod A walk + resmi 3vp · validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/startup/default/` |
| Capture | resmi `scripts/capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/startup/`, `evidence/startup/`, `todo/startup.md`, `candidates/startup-leftovers.md` |

**Kapsam satırı:**  
`Startup · default (Tech) · Startup Tech v12.3.3 · theme_store_id null · home→PDP→PLP→search→cart→blog→footer · 18 obs · 54 PNG · 0 yeni şema · leftover: candidates/startup-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home announcement/header/footer + conversion blocks | roster + capture | [x] |
| Mega | ⛔ yok (drawer nav) | leftover |
| Predictive search header | ⛔ /search link | leftover |
| Mobile menu drawer | capture prepareClick | [x] |
| Cart drawer | ⛔ yok (`/cart` sayfa) | leftover |
| PDP The Rogue Razor Color swatches | capture | [x] |
| PLP `/collections/shave` | roster + capture | [x] |
| Search `/search?q=razor` (5 sonuç) | roster + capture | [x] |
| Cart page empty | capture | [x] |
| Blog list + article | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Startup / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega yok |
| 3 | home-promotion-1 | `hero-slideshow` | reuse · tek slayt |
| 4 | home-text-columns-with-images-1 | `features-multicolumn` | reuse |
| 5 | home-featured-collection-1 | `product-showcase-grid-featured` | reuse |
| 6 | home-image-with-text-overlay-1 | `editorial-image-with-text-overlay` | reuse · metin boş |
| 7 | home-testimonials-1 | `testimonial-quote-carousel` | reuse · statik 2 alıntı |
| 8 | home-faq-1 | `faq-collapsible-tabs` | reuse |
| 9 | home-image-with-text-1 | `editorial-image-with-text` | reuse |
| 10 | footer | `footer-columns-newsletter` | reuse · newsletter yok |
| 11 | drawer-nav | `global-menu-drawer` | reuse · prepareClick |
| 12 | product-reviews (PDP) | — | leftover · şema yok |

---

## Bileşen checklist

| # | Bileşen / id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | [x] | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | [x] | [x] |
| 3 | hero-slideshow | home | [x] | [x] | [x] | [x] |
| 4 | features-multicolumn | home | [x] | [x] | [x] | [x] |
| 5 | product-showcase-grid-featured | home | [x] | [x] | [x] | [x] |
| 6 | editorial-image-with-text-overlay | home | [x] | [x] | [x] | [x] |
| 7 | testimonial-quote-carousel | home | [x] | [x] | [x] | [x] |
| 8 | faq-collapsible-tabs | home | [x] | [x] | [x] | [x] |
| 9 | editorial-image-with-text | home | [x] | [x] | [x] | [x] |
| 10 | footer-columns-newsletter | home | [x] | [x] | [x] | [x] |
| 11 | global-menu-drawer | home | [x] | [x] | [x] | [x] |
| 12 | product-info-main | product-detail | [x] | [x] | [x] | [x] |
| 13 | features-multicolumn-2 | product-detail | [x] | [x] | [x] | [x] |
| 14 | product-showcase-grid-plp | collection | [x] | [x] | [x] | [x] |
| 15 | search-results | search | [x] | [x] | [x] | [x] |
| 16 | cart-page-main | cart | [x] | [x] | [x] | [x] |
| 17 | blog-list-main | blog-list | [x] | [x] | [x] | [x] |
| 18 | blog-post-main | blog-post | [x] | [x] | [x] | [x] |

---

## Aday / leftover

[`candidates/startup-leftovers.md`](../candidates/startup-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart dolu / PDP variant (backlog)
- [x] `npm run validate` — 0 error
