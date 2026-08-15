# Todo — Graza (graza.co)

*Kaynak:* https://www.graza.co · *Preset:* `default`  
*Tema (storefront):* **baggy – production** · `schema_name`: Graza · `theme_store_id`: null (custom)

**Durum:** Mod A walk kapandı — 43 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/6 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/graza/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız graza paths |

**Kapsam satırı:**  
`Graza · default · baggy – production · 12 şablon · 43 obs · 161 PNG · 0 yeni şema · custom Shopify · leftover: search page / 404 / store locator / about TOC`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/instagram | ✅ | ✅ |
| Mega / search overlay / cart drawer / mobile menu | ✅ interact | ✅ (menu 1440 N/A) |
| PDP `/products/sizzle` | ✅ + Glass format | ✅ |
| PLP `/collections/olive-oil` | ✅ + BUNDLES tab | ✅ |
| Search `/search?q=drizzle` | ⛔ Vue `#search` boş krem | ✅ boş kare |
| Cart `/cart` | ✅ stub Back to Shop | ✅ |
| About `/pages/about-us` | ✅ (page-anchor nav candidate) | ✅ |
| FAQ `/pages/faqs` | ✅ + ilk soru açık | ✅ |
| Recipes / Culture / Education / Glog | ✅ | ✅ |
| Article garlic-potatoes | ✅ | ✅ |
| Policy privacy | ✅ Shopify native | ✅ |
| Wholesale | ✅ | ✅ |
| Subscribe | ✅ tabs + lineup + video | ✅ |
| 404 / contact page / store locator | ⛔ candidates | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [x] | [x] | [x] | [x] |
| 2 | media-video-hero | home | [x] | [x] | [x] | [x] |
| 3 | promo-announcement-bar | home | [x] 1440 | [x] | [x] | [x] |
| 4 | promo-grid-banner | home | [x] | [x] | [x] | [x] |
| 5 | editorial-images-scroll | home | [x] | [x] | [x] | [x] |
| 6 | product-showcase-grid-featured | home | [x] | [x] | [x] | [x] |
| 7 | promo-scrolling-marquee | home | [x] | [x] | [x] | [x] |
| 8 | blog-list-main | home | [x] | [x] | [x] | [x] |
| 9 | editorial-image-with-text-overlay | home | [x] | [x] | [x] | [x] |
| 10 | media-shop-the-feed | home | [x] | [x] | [x] | [x] |
| 11 | footer-columns-newsletter | home | [x] | [x] | [x] | [x] |
| 12 | global-cart-drawer | home | [x] | [x] | [x] | [x] |
| 13 | global-predictive-search | home | [x] | [x] | [x] | [x] |
| 14 | global-menu-drawer | home | [x] 375+768 | [x] | [x] | [x] |
| 15 | product-showcase-grid-plp | collection | [x] | [x] | [x] | [x] |
| 16 | product-info-main | product-detail | [x] | [x] | [x] | [x] |
| 17 | editorial-rich-text | product-detail | [x] | [x] | [x] | [x] |
| 18 | features-multicolumn | product-detail | [x] | [x] | [x] | [x] |
| 19 | comparison-quick-table | product-detail | [x] | [x] | [x] | [x] |
| 20 | product-showcase-grid-featured | product-detail | [x] | [x] | [x] | [x] |
| 21 | features-slider-multicolumn | product-detail | [x] | [x] | [x] | [x] |
| 22 | testimonial-quote-carousel | product-detail | [x] | [x] | [x] | [x] |
| 23 | product-showcase-related | product-detail | [x] | [x] | [x] | [x] |
| 24 | search-results | search | [x] boş | [x] | [x] | [x] leftover |
| 25 | cart-page-main | cart | [x] | [x] | [x] | [x] |
| 26–30 | about-brand (5) | about-brand | [x] | [x] | [x] | [x] |
| 31 | faq-collapsible-tabs | faq-support | [x] | [x] | [x] | [x] |
| 32–35 | blog-list ×4 | recipes/culture/edu/glog | [x] | [x] | [x] | [x] |
| 36–38 | blog-post (3) | blog-post | [x] | [x] | [x] | [x] |
| 39 | page-content-main | policy | [x] | [x] | [x] | [x] |
| 40 | page-content-main | wholesale | [x] | [x] | [x] | [x] |
| 41–43 | subscribe (3) | subscribe | [x] | [x] | [x] | [x] |

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop → lime mega (Olive Oil / Collection / Featured) |
| global-predictive-search | initial, input | `drizzle` → 14 items + IN THE GLOG |
| global-cart-drawer | initial, filled, changed | boş kedi; Sizzle $16; **changed yalnız 1440** QTY 2 / $32 |
| global-menu-drawer | open | 375/768 hamburger (static prepareClick) |
| faq-collapsible-tabs | changed | Where is your product made? → Jaén cevabı |
| product-showcase-grid-plp | changed | BUNDLES → Stock up & save + set kartları |
| product-info-main | changed | Glass 750ml — Sizzle Glass $19.99/$18.99 |

---

## Aday / leftover

[`candidates/graza-leftovers.md`](../candidates/graza-leftovers.md)

- 404 dance (`/pages/contact`, `/collections/refills`, `/blogs/glog`, `/pages/shipping`, `/pages/glug-club`)
- Store locator height 0
- About sticky page-anchor nav
- `/search` Vue hydrate boş (overlay çalışıyor)
- Cart qty + 375/768 viewport dışı
- Announcement bar 375/768 zero-size

---

## Evidence backlog

- [x] Claiming obs resmi 3vp — **161 PNG** (static + interact)
- [x] Overlay / tab / format interact
- [ ] Search page hydrate (chrome)
- [ ] Cart qty 375/768 (viewport dışı; 2 deneme, dur)
- Mega open / cart qty+ yalnız 1440 (beklenen)
