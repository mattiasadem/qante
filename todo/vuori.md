# Todo — Vuori

*Kaynak:* https://vuoriclothing.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* `Shopify.theme` / `schema_name` / `theme_store_id` **yok**. Platform **Next.js** on Netlify (`x-powered-by: Next.js`). Headless Shopify (`Shopify.shop = Vuori Clothing`). Contentstack CMS. MUI + Swiper + Algolia + Yotpo. `#shopify-section-*` yok.

**Durum:** Mod A walk + resmi 3vp kapandı  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/vuori/default/` |
| Capture | resmi `capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| PNG | **81** |
| Validator | 65 şema · 0 error · 0 warn |
| Parallel | yalnız `observations/vuori/`, `evidence/vuori/`, `todo/vuori.md`, `candidates/vuori-*.md` |

**Kapsam satırı:**  
`Vuori · default · Next.js headless Shopify · home→PDP→PLP→search→cart→blog→content→footer · 27 obs · 81 PNG · 0 yeni şema · leftover: candidates/vuori-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ obs | [x] |
| Hero / featured / editorial / category nav / color nav / bottom hero | ✅ obs | [x] |
| Search flyout / mobile menu | ✅ obs | [x] |
| PDP Sedona hoodie | ✅ obs | [x] |
| PLP `/collections/womens` | ✅ obs | [x] |
| Search `/search?q=shorts` | ✅ obs | [x] |
| Cart `/cart` (drawer yok) | ✅ obs | [x] |
| Blog `/blogs` + 1 post | ✅ obs | [x] |
| About `/pages/our-story` | ✅ obs | [x] |
| Policy `/pages/privacy-policy` | ✅ obs | [x] |
| Mega hover / filled cart / PDP breadcrumbs mobile | leftover | — |
| Newsletter / login / checkout | ⛔ PII yok | — |

---

## Bileşen roster (27)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | product-showcase-featured | home | [x] | [x] | reuse | [x] |
| 5 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 6 | collection-nav-slider | home | [x] | [x] | reuse | [x] |
| 7 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 8 | media-video-hero | home | [x] | [x] | reuse | [x] |
| 9 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 10 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 11 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 12 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 13 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 14 | product-showcase-related.2 | product-detail | [x] | [x] | reuse | [x] |
| 15 | product-showcase-related.3 | product-detail | [x] | [x] | reuse | [x] |
| 16 | editorial-image-with-text | product-detail | [x] | [x] | reuse | [x] |
| 17 | navigation-breadcrumbs | collection | [x] | [x] | reuse | [x] |
| 18 | collection-banner | collection | [x] | [x] | reuse | [x] |
| 19 | collection-nav-slider | collection | [x] | [x] | reuse | [x] |
| 20 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 21 | search-results | search | [x] | [x] | reuse | [x] |
| 22 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 23 | blog-list-main | blog-list | [x] | [x] | reuse | [x] |
| 24 | editorial-dynamic-grid | blog-list | [x] | [x] | reuse | [x] |
| 25 | blog-post-main | blog-post | [x] | [x] | reuse | [x] |
| 26 | page-content-main | about-brand | [x] | [x] | reuse | [x] |
| 27 | page-content-main.2 | policy | [x] | [x] | reuse | [x] |

PDP breadcrumbs yalnız desktop — collection observation temsilci. `global-cart-drawer` yok (cart sayfa).

---

## Aday / leftover

[`candidates/vuori-leftovers.md`](../candidates/vuori-leftovers.md)

---

## Evidence backlog

- [x] Walk rotası 3vp (27 obs · 81 PNG)
- [x] Validator temiz
- [ ] Mega hover / filled cart interact — leftover
- [ ] Newsletter / login / checkout — **yapılmayacak** (PII)
