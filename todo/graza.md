# Todo — Graza (graza.co)

*Kaynak:* https://www.graza.co · *Preset:* `default`  
*Tema (storefront):* **baggy – production** · `schema_name`: Graza · `theme_store_id`: null (custom)

**Şu anki odak:** Mod A walk — gözlemler yazıldı; resmi 3vp + interact sırada

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/graza/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/graza/` · `evidence/graza/` · `todo/graza.md` · `candidates/graza-*.md` |

**Kapsam satırı (hedef):**  
`Graza · default · baggy – production · home/PDP/PLP/search/cart/about/faq/blog/policy/subscribe · reuse · custom Shopify`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/instagram | ⬜ obs yazıldı | ⬜ |
| Mega / search overlay / cart drawer / mobile menu | ⬜ obs + prepareClick | ⬜ interact |
| PDP `/products/sizzle` | ⬜ | ⬜ |
| PLP `/collections/olive-oil` (+ `/collections/all` aynı grid) | ⬜ | ⬜ |
| Search `/search?q=drizzle` | ⛔ Vue `#search` headless boş — leftover | ⬜ |
| Cart `/cart` | ⬜ stub “Back to Shop” | ⬜ |
| About `/pages/about-us` | ⬜ | ⬜ |
| FAQ `/pages/faqs` | ⬜ | ⬜ |
| Recipes / Culture / Education / Glog | ⬜ | ⬜ |
| Article `/blogs/recipes/garlic-potatoes` | ⬜ | ⬜ |
| Policy `/policies/privacy-policy` | ⬜ | ⬜ |
| Wholesale `/pages/wholesale` | ⬜ | ⬜ |
| Subscribe `/pages/subscribe` | ⬜ | ⬜ |
| 404 / contact page / store locator | ⛔ candidates | — |

---

## Bileşen roster (obs dosyası)

Her satır: screenshot → not → JSON → kapat

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] | [x] | [x] | [ ] |
| 2 | media-video-hero | home | [ ] | [x] | [x] | [ ] |
| 3 | promo-announcement-bar | home | [ ] | [x] | [x] | [ ] |
| 4 | promo-grid-banner | home | [ ] | [x] | [x] | [ ] |
| 5 | editorial-images-scroll | home | [ ] | [x] | [x] | [ ] |
| 6 | product-showcase-grid-featured | home | [ ] | [x] | [x] | [ ] |
| 7 | promo-scrolling-marquee | home | [ ] | [x] | [x] | [ ] |
| 8 | blog-list-main | home | [ ] | [x] | [x] | [ ] |
| 9 | editorial-image-with-text-overlay | home | [ ] | [x] | [x] | [ ] |
| 10 | media-shop-the-feed | home | [ ] | [x] | [x] | [ ] |
| 11 | footer-columns-newsletter | home | [ ] | [x] | [x] | [ ] |
| 12 | global-cart-drawer | home | [ ] | [x] | [x] | [ ] |
| 13 | global-predictive-search | home | [ ] | [x] | [x] | [ ] |
| 14 | global-menu-drawer | home | [ ] | [x] | [x] | [ ] |
| 15 | product-showcase-grid-plp | collection | [ ] | [x] | [x] | [ ] |
| 16 | product-info-main | product-detail | [ ] | [x] | [x] | [ ] |
| 17 | editorial-rich-text | product-detail | [ ] | [x] | [x] | [ ] |
| 18 | features-multicolumn | product-detail | [ ] | [x] | [x] | [ ] |
| 19 | comparison-quick-table | product-detail | [ ] | [x] | [x] | [ ] |
| 20 | product-showcase-grid-featured | product-detail | [ ] | [x] | [x] | [ ] |
| 21 | features-slider-multicolumn | product-detail | [ ] | [x] | [x] | [ ] |
| 22 | testimonial-quote-carousel | product-detail | [ ] | [x] | [x] | [ ] |
| 23 | product-showcase-related | product-detail | [ ] | [x] | [x] | [ ] |
| 24 | search-results | search | [ ] | [x] | [x] | [ ] |
| 25 | cart-page-main | cart | [ ] | [x] | [x] | [ ] |
| 26 | editorial-rich-text | about-brand | [ ] | [x] | [x] | [ ] |
| 27 | editorial-image-with-text | about-brand | [ ] | [x] | [x] | [ ] |
| 28 | editorial-image-with-text.2 | about-brand | [ ] | [x] | [x] | [ ] |
| 29 | blog-list-main | about-brand | [ ] | [x] | [x] | [ ] |
| 30 | product-showcase-grid-featured | about-brand | [ ] | [x] | [x] | [ ] |
| 31 | faq-collapsible-tabs | faq-support | [ ] | [x] | [x] | [ ] |
| 32 | blog-list-main | blog-list | [ ] | [x] | [x] | [ ] |
| 33 | blog-list-main | blog-list-culture | [ ] | [x] | [x] | [ ] |
| 34 | blog-list-main | blog-list-education | [ ] | [x] | [x] | [ ] |
| 35 | blog-list-main | blog-list-glog | [ ] | [x] | [x] | [ ] |
| 36 | blog-post-main | blog-post | [ ] | [x] | [x] | [ ] |
| 37 | product-showcase-grid-featured | blog-post | [ ] | [x] | [x] | [ ] |
| 38 | blog-list-main | blog-post | [ ] | [x] | [x] | [ ] |
| 39 | page-content-main | policy | [ ] | [x] | [x] | [ ] |
| 40 | page-content-main | wholesale | [ ] | [x] | [x] | [ ] |
| 41 | product-showcase-tabs | subscribe | [ ] | [x] | [x] | [ ] |
| 42 | features-multicolumn | subscribe | [ ] | [x] | [x] | [ ] |
| 43 | media-video-hero | subscribe | [ ] | [x] | [x] | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | open | Shop → lime mega (Olive Oil / Collection / Featured video) |
| global-predictive-search | input | `#search-input` = `drizzle` |
| global-cart-drawer | initial / filled / changed | boş kedi illüstrasyonu; Sizzle add; adet |
| global-menu-drawer | open | 375 hamburger |
| faq-collapsible-tabs | changed | ilk soru aç |
| product-showcase-grid-plp | changed | ALL → BUNDLES veya format chip |
| product-info-main | changed | Squeeze ↔ diğer format (piksel değişirse) |

---

## Aday / şemaya sığmayan

- [`candidates/graza-leftovers.md`](../candidates/graza-leftovers.md)

---

## Evidence backlog

- [ ] Tüm claiming obs için resmi 3vp
- [ ] Overlay interact
- [ ] Search page hydrate (headless boş)
