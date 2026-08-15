# Todo — Bleame (bleame.com)

*Kaynak:* https://bleame.com · *Preset:* `default`  
*Tema (storefront, görüldü):* **Bleame 2.0 [Loox] - OPT** · `schema_name`: Focal · `schema_version`: 11.1.0 · `theme_store_id`: 714 · theme id `149117534383` · shop `bleame-com.myshopify.com`

**Durum:** Mod A walk kapandı — 48 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/51 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/bleame/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/bleame/`, `evidence/bleame/`, `todo/bleame.md`, `candidates/bleame-*.md` |

**Kapsam satırı:**  
`Bleame · default · Bleame 2.0 [Loox] - OPT / Focal 11.1.0 · home→PDP→PLP→search→cart drawer+page→our-story→contact/how-to/privacy→blog→footer→mobile · 48 obs · 0 yeni şema · leftover: Loox / help 404 / empty pages / SMS PII / predictive opener hidden`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer | ✅ | ✅ |
| Mega / search / cart drawer / mobile menu | ✅ interact | ✅ (mega N/A · menu 1440 N/A · search forceOpen) |
| PDP `/products/crystal-hair-eraser` | ✅ | ✅ |
| PLP `/collections/all` | ✅ 1 ürün | ✅ |
| Search `/search?q=crystal` | ✅ 4 ürün + pages/journal | ✅ |
| Cart `/cart` + drawer | ✅ empty page + empty/filled drawer | ✅ |
| Our Story `/pages/our-story` | ✅ | ✅ |
| Contact / how-to / privacy | ✅ form yok | ✅ |
| Blog list + post | ✅ | ✅ |
| Partner (2 blok) | ✅ | ✅ |
| Reviews / 404 / help / SMS / empty pages | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 4 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 5 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 6 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 7 | promo-banner-tabs | home | [x] + Leg | [x] | reuse | [x] |
| 8 | product-showcase-featured | home | [x] | [x] | reuse | [x] |
| 9 | features-multicolumn.2 | home | [x] | [x] | reuse | [x] |
| 10 | testimonial-quote-carousel.2 | home | [x] | [x] | reuse | [x] |
| 11 | faq-collapsible-tabs | home | [x] + friction | [x] | reuse | [x] |
| 12 | editorial-rich-text | home | [x] | [x] | reuse | [x] |
| 13 | trust-icon-row | home | [x] | [x] | reuse | [x] |
| 14 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 15 | global-cart-drawer | home | [x] empty+filled | [x] | reuse | [x] |
| 16 | global-predictive-search | home | [x] forceOpen | [x] | reuse | [x] leftover |
| 17 | global-menu-drawer | home | [x] 375+768 | [x] | reuse | [x] |
| 18 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 19 | media-scrolling-gallery | product-detail | [x] | [x] | reuse | [x] |
| 20 | promo-banner-tabs | product-detail | [x] | [x] | reuse | [x] |
| 21 | features-multicolumn | product-detail | [x] | [x] | reuse | [x] |
| 22 | features-multicolumn.2 | product-detail | [x] | [x] | reuse | [x] |
| 23 | testimonial-quote-carousel | product-detail | [x] | [x] | reuse | [x] |
| 24 | comparison-quick-table | product-detail | [x] | [x] | reuse | [x] |
| 25 | editorial-image-with-text | product-detail | [x] | [x] | reuse | [x] |
| 26 | faq-collapsible-tabs | product-detail | [x] | [x] | reuse | [x] |
| 27 | trust-icon-row | product-detail | [x] | [x] | reuse | [x] |
| 28 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 29 | collection-banner | collection | [x] | [x] | reuse | [x] |
| 30 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 31 | search-results | search | [x] | [x] | reuse | [x] |
| 32 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 33 | product-showcase-related | cart | [x] | [x] | reuse | [x] |
| 34 | media-video-hero | about-brand | [x] | [x] | reuse | [x] |
| 35–39 | editorial-image-with-text ×5 | about-brand | [x] | [x] | reuse | [x] |
| 40 | editorial-rich-text | about-brand | [x] | [x] | reuse | [x] |
| 41 | features-multicolumn | about-brand | [x] | [x] | reuse | [x] |
| 42 | editorial-rich-text.2 + IWT.6 | partner | [x] | [x] | reuse | [x] |
| 43 | page-content-main | contact | [x] | [x] | reuse | [x] |
| 44 | page-content-main | faq-support | [x] | [x] | reuse | [x] |
| 45 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 46 | blog-list-main | blog-list | [x] | [x] | reuse | [x] |
| 47 | blog-post-main | blog-post | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial | Mega yok |
| global-menu-drawer | open | 375/768 SHOP/REVIEWS/HELP + trust |
| global-predictive-search | open | forceOpen; opener gizli; öneri yok |
| global-cart-drawer | initial, filled | boş START SHOPPING; 2-pack $53 + free scrub |
| promo-banner-tabs | changed | Leg — farklı medya |
| faq-collapsible-tabs | changed | friction açık; ilk kapandı |

---

## Aday / leftover

[`candidates/bleame-leftovers.md`](../candidates/bleame-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp
- [x] Overlay / cart / menu / FAQ / tabs interact
- [x] Predictive opener yoklandı — gizli (leftover)
- [ ] Cart qty `changed`
- [ ] PDP 1 Pack radio `changed`
- [ ] Newsletter / contact / SMS submit — **yapılmayacak** (PII)
