# Todo — Boost (Clean Canvas, paid) · Spark / default

*Kaynak:* https://spark-theme.myshopify.com/  
*Preset:* `default` (Boost Spark — resmi Theme Store demo)  
*Slug:* `boost`  
*Theme Store:* https://themes.shopify.com/themes/boost  

**Tema (storefront, uydurulmadı):**  
`Shopify.theme.name` = **boost-v8.1.0**  
`schema_name` = **Boost** · `schema_version` = **8.1.0** · `role` = **main** · theme id `160202686521`  
`theme_store_id` = **null**  
shop `spark-theme.myshopify.com`

**Durum:** Mod A walk + resmi 3vp · validate clean · draft PR

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/boost/default/` |
| Capture | resmi `scripts/capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/boost/`, `evidence/boost/`, `todo/boost.md`, `candidates/boost-leftovers.md` |

**Kapsam satırı (hedef):**  
`Boost · default (Spark) · boost-v8.1.0 / schema_name Boost 8.1.0 · theme_store_id null · home→PDP→collection→search→cart→blog→footer · 36 obs · 108 PNG · 0 yeni şema · leftover: candidates/boost-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home — announcement / header / slideshow / collections / scrolling / video / logos / promos / rich-text / get-the-look / featured / blog / testimonials / gallery / multicolumn / footer | roster + capture | [x] |
| Global menu drawer (burger) | capture prepareClick | [x] |
| Inline live search (desktop bar) | capture prepareFill `rice` | [x] |
| PDP `/products/ricebow` | roster + capture | [x] |
| PLP `/collections/toys` | roster + capture | [x] |
| Search `/search?q=rice` | roster + capture | [x] |
| Cart `/cart` (no drawer — `/cart` link) | roster + capture | [x] |
| Blog `/blogs/news` + article | roster + capture | [x] |
| Email / account / checkout / newsletter submit / popup dismiss | ⛔ PII | — |

---

## Bileşen roster (37 obs)

| # | schemaId | sayfa | selector kök |
|---|---|---|---|
| 1 | promo-announcement-bar | home | `#shopify-section-sections--21310314577977__announcement-bar` |
| 2 | navigation-header-mega | home | `#shopify-section-sections--21310314577977__header` |
| 3 | global-menu-drawer | home | `.docked-mobile-navigation-container` |
| 4 | global-predictive-search | home | `.search-bar.desktop-only` |
| 5 | hero-slideshow | home | `#shopify-section-template--21310313988153__slideshow` |
| 6 | collection-nav-image-cards | home | `…__collection-list` |
| 7–8 | promo-scrolling-marquee ×2 | home | scrolling-banner ×2 |
| 9 | media-video-hero | home | background-video |
| 10 | social-proof-brand-logos | home | logo-list |
| 11 | promo-grid-banner | home | promo-images |
| 12 | editorial-rich-text | home | rich-text |
| 13 | media-lookbook-banner | home | get-the-look |
| 14 | product-showcase-grid-featured | home | featured-collection |
| 15 | product-showcase-featured | home | featured-product |
| 16 | blog-list-main | home | featured-blog |
| 17 | testimonial-quote-carousel | home | testimonials |
| 18 | media-mosaic-grid | home | image-gallery |
| 19 | features-multicolumn | home | multi-column |
| 20 | footer-columns-newsletter | home | `#shopify-section-footer` |
| 21–23 | product-info-main / related / recently-viewed | product-detail | PDP template |
| 24–26 | PLP + rich-text + get-the-look | collection | toys |
| 27–29 | search-results + collections + logos | search | `q=rice` |
| 30–32 | overlay hero + cart + promos | cart | `/cart` |
| 33–34 | blog list + video | blog-list | `/blogs/news` |
| 35–37 | article + rich-text + get-the-look | blog-post | weather ricemonsters |

---

## Aday / leftover

[`candidates/boost-leftovers.md`](../candidates/boost-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 36 × 3 = 108 PNG
- [x] `npm run validate` — 0 error
- [ ] Email / account / checkout / newsletter popup submit — **yapılmayacak**
