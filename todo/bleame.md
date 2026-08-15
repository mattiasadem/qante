# Todo — Bleame (bleame.com)

*Kaynak:* https://bleame.com · *Preset:* `default`  
*Tema (storefront, görüldü):* **Bleame 2.0 [Loox] - OPT** · `schema_name`: Focal · `schema_version`: 11.1.0 · `theme_store_id`: 714 · theme id `149117534383` · shop `bleame-com.myshopify.com`

**Durum:** Mod A walk açık — observation yazıldı, 3vp/interact sırada  
**PR:** (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/bleame/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/bleame/`, `evidence/bleame/`, `todo/bleame.md`, `candidates/bleame-*.md` |

**Kapsam satırı:**  
`Bleame · default · Bleame 2.0 [Loox] - OPT / Focal 11.1.0 · home→PDP→PLP→search→cart→content→footer→mobile · (yürüyor)`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer | ⬜ obs yazıldı | ⬜ |
| Mega / search / cart drawer / mobile menu | ⬜ interact | ⬜ |
| PDP `/products/crystal-hair-eraser` | ⬜ | ⬜ |
| PLP `/collections/all` | ⬜ | ⬜ |
| Search `/search?q=crystal` | ⬜ | ⬜ |
| Cart `/cart` + drawer | ⬜ | ⬜ |
| Our Story `/pages/our-story` | ⬜ | ⬜ |
| Contact / how-to / privacy | ⬜ | ⬜ |
| Blog list + post | ⬜ | ⬜ |
| Partner / reviews / 404 / help / SMS | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | editorial-image-with-text | home | [ ] | [x] | reuse | [ ] |
| 4 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 5 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 6 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 7 | promo-banner-tabs | home | [ ] | [x] | reuse | [ ] |
| 8 | product-showcase-featured | home | [ ] | [x] | reuse | [ ] |
| 9 | features-multicolumn.2 | home | [ ] | [x] | reuse | [ ] |
| 10 | testimonial-quote-carousel.2 | home | [ ] | [x] | reuse | [ ] |
| 11 | faq-collapsible-tabs | home | [ ] | [x] | reuse | [ ] |
| 12 | editorial-rich-text | home | [ ] | [x] | reuse | [ ] |
| 13 | trust-icon-row | home | [ ] | [x] | reuse | [ ] |
| 14 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 15 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 16 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 17 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 18 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 19 | media-scrolling-gallery | product-detail | [ ] | [x] | reuse | [ ] |
| 20 | promo-banner-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 21 | features-multicolumn | product-detail | [ ] | [x] | reuse | [ ] |
| 22 | features-multicolumn.2 | product-detail | [ ] | [x] | reuse | [ ] |
| 23 | testimonial-quote-carousel | product-detail | [ ] | [x] | reuse | [ ] |
| 24 | comparison-quick-table | product-detail | [ ] | [x] | reuse | [ ] |
| 25 | editorial-image-with-text | product-detail | [ ] | [x] | reuse | [ ] |
| 26 | faq-collapsible-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 27 | trust-icon-row | product-detail | [ ] | [x] | reuse | [ ] |
| 28 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 29 | collection-banner | collection | [ ] | [x] | reuse | [ ] |
| 30 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 31 | search-results | search | [ ] | [x] | reuse | [ ] |
| 32 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 33 | product-showcase-related | cart | [ ] | [x] | reuse | [ ] |
| 34 | media-video-hero | about-brand | [ ] | [x] | reuse | [ ] |
| 35–39 | editorial-image-with-text ×5 | about-brand | [ ] | [x] | reuse | [ ] |
| 40 | editorial-rich-text | about-brand | [ ] | [x] | reuse | [ ] |
| 41 | features-multicolumn | about-brand | [ ] | [x] | reuse | [ ] |
| 42 | page-content-main | contact | [ ] | [x] | reuse | [ ] |
| 43 | page-content-main | faq-support | [ ] | [x] | reuse | [ ] |
| 44 | page-content-main | policy | [ ] | [x] | reuse | [ ] |
| 45 | blog-list-main | blog-list | [ ] | [x] | reuse | [ ] |
| 46 | blog-post-main | blog-post | [ ] | [x] | reuse | [ ] |

---

## Aday / leftover

[`candidates/bleame-leftovers.md`](../candidates/bleame-leftovers.md) — yazılacak

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / cart / search / menu / FAQ / tabs interact
- [ ] Newsletter / contact / SMS submit — **yapılmayacak** (PII)
