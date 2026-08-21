# Todo — Rothy's (rothys.com)

*Kaynak:* https://rothys.com/ · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **`rothys/production`** · `schema_name`: **DNA** · `schema_version`: **26.08.19** · `theme_store_id`: **null** · shop `rothys.myshopify.com` · theme id `141189120094` · role `main`

**Durum:** Mod A walk kapandı · 38 obs · 111 PNG · 0 yeni şema  
**PR:** (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/rothys/default/` |
| Capture | resmi `scripts/capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/rothys/`, `evidence/rothys/`, `todo/rothys.md`, `candidates/rothys-leftovers.md` |

**Kapsam satırı:**  
`Rothy's · default · rothys/production (DNA 26.08.19, custom) · home→PDP→PLP→search→cart-drawer→content→footer→mobile · 38 obs · 111 PNG · 0 yeni şema · leftover: Yotpo / filled-cart / search-375-768 / mega-hover / product_diagram / video_player / PLP-filters`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer | [x] | [x] |
| Mega hover 1440 / search overlay / cart drawer / mobile menu | [x] partial | [x] search 1440 only; menu 375/768; cart empty |
| PDP `/products/womens-daily-flat-black` | [x] | [x] |
| PLP `/collections/womens-shoes` | [x] | [x] |
| Search `/search?q=sneaker` | [x] | [x] |
| Cart `/cart` | ⛔ drawer only | [x] empty |
| About `/pages/about` | [x] | [x] |
| Blog `/blogs/the-loop` + clogs article | [x] | [x] |
| FAQ `/pages/faq` | [x] | [x] |
| Privacy `/policies/privacy-policy` | [x] | [x] |
| Ivy LP / sustainability / contact / stores | ⛔ candidates | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | editorial-image-with-text-overlay | home | [x] MEET IVY | [x] | reuse | [x] |
| 4 | editorial-dynamic-grid | home | [x] Ivy grid | [x] | reuse | [x] |
| 5 | editorial-image-with-text | home | [x] NEW ARRIVALS | [x] | reuse | [x] |
| 6 | editorial-rich-text | home | [x] GOOD TASTE | [x] | reuse | [x] |
| 7 | product-showcase-grid-featured | home | [x] carousel | [x] | reuse | [x] |
| 8 | editorial-rich-text-2 | home | [x] PRE-FALL | [x] | reuse | [x] |
| 9 | editorial-dynamic-grid-2 | home | [x] SHOP COLLECTION | [x] | reuse | [x] |
| 10 | collection-nav-image-cards | home | [x] category tiles | [x] | reuse | [x] |
| 11 | footer-columns-newsletter | home | [x] PII yok | [x] | reuse | [x] |
| 12 | global-cart-drawer | home | [x] empty | [x] | reuse | [x] |
| 13 | global-predictive-search | home | [x] 1440 only | [x] | reuse | [x] |
| 14 | global-menu-drawer | home | [x] 375/768 | [x] | reuse | [x] |
| 15 | navigation-breadcrumbs | product-detail | [x] | [x] | reuse | [x] |
| 16 | product-info-main | product-detail | [x] Daily Flat | [x] | reuse | [x] |
| 17 | trust-icon-row | product-detail | [x] icons | [x] | reuse | [x] |
| 18 | editorial-image-with-text | product-detail | [x] spotlight | [x] | reuse | [x] |
| 19 | editorial-image-with-text-overlay | product-detail | [x] banner | [x] | reuse | [x] |
| 20–21 | product-showcase-related ×2 | product-detail | [x] | [x] | reuse | [x] |
| 22 | collection-nav-image-cards | product-detail | [x] cross-sell | [x] | reuse | [x] |
| 23 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 24 | collection-nav-image-cards | collection | [x] | [x] | reuse | [x] |
| 25 | editorial-rich-text | collection | [x] seo_text | [x] | reuse | [x] |
| 26 | search-results | search | [x] 369 sneaker | [x] | reuse | [x] |
| 27–31 | about (5) | about-brand | [x] | [x] | reuse | [x] |
| 32–34 | blog list (3) | blog-list | [x] | [x] | reuse | [x] |
| 35–36 | blog post (2) | blog-post | [x] | [x] | reuse | [x] |
| 37 | faq-collapsible-tabs | faq-support | [x] widget | [x] | reuse | [x] |
| 38 | page-content-main | policy | [x] | [x] | reuse | [x] |

---

## Aday / leftover

[`candidates/rothys-leftovers.md`](../candidates/rothys-leftovers.md)

---

## Evidence backlog

- [x] Home static 3vp (5 ilk deneme flaky — retry OK)
- [x] PDP / PLP / search / content 3vp
- [x] Cart drawer empty · search 1440 · mobile menu 375/768
- [x] `npm run validate` temiz
- [ ] Mega hover 1440 interact
- [ ] Search query fill 375/768 (dna-search zero-size host)
- [ ] Filled cart drawer (dna-mini-cart cart/add.js refresh)
- [ ] Yotpo reviews app block PDP
