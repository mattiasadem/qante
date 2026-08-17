# Todo — Colorblock (Shopify first-party)

*Kaynak:* https://theme-colorblock-demo.myshopify.com  
*Preset:* `default` · *Slug:* `colorblock`

**Tema (gözlemlendi, uydurulmadı):**  
`Shopify.theme.name` = **[Colorblock] Theme store demo (latest)**  
`schema_name` = **Dawn** · `schema_version` = **4.0.0** · `role` = **main** · theme id `168341930006`  
`theme_store_id` = **null** (beklenen 1376 vitrinde yok — leftover)

**Şu anki odak:** Mod A walk — statik 3vp + mega/search/cart/menu/PDP option

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/colorblock/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/colorblock/`, `evidence/colorblock/`, `todo/colorblock.md`, `candidates/colorblock-*` |

**Kapsam satırı:**  
`Colorblock · default · Dawn 4.0.0 first-party demo · theme_store_id null · home→PDP→PLP→search→cart→about→contact→blog→404 · 0 yeni şema`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer/newsletter | [ ] | [ ] |
| Mega Shop 1440 | [ ] | [ ] |
| Predictive search `cardi` | [ ] | [ ] |
| Mobile menu 375+768 | [ ] | [ ] |
| PDP Pocket Cardi + Color change | [ ] | [ ] |
| PLP `/collections/mens-cardigans` | [ ] | [ ] |
| Search `/search?q=cardi` | [ ] | [ ] |
| Cart empty + filled + qty (`/cart`; drawer yok) | [ ] | [ ] |
| About `/pages/about-us` | [ ] | [ ] |
| Contact form (submit yok) | [ ] | [ ] |
| Magazine `/blogs/news` + Herbie article | [ ] | [ ] |
| Collections index `/collections` | [ ] | [ ] |
| 404 leftover | [ ] | [ ] |
| FAQ / policy / account / checkout / email | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | editorial-rich-text | home | [ ] | [x] | reuse | [ ] |
| 4 | media-mosaic-grid | home | [ ] | [x] | reuse | [ ] |
| 5 | editorial-rich-text.2–5 | home | [ ] | [x] | reuse | [ ] |
| 6 | media-mosaic-grid.2 | home | [ ] | [x] | reuse | [ ] |
| 7 | media-lookbook-banner | home | [ ] | [x] | reuse | [ ] |
| 8 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 9 | editorial-image-with-text ×3 | home | [ ] | [x] | reuse | [ ] |
| 10 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 11 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 12 | lead-capture-newsletter-band | home | [ ] | [x] | reuse | [ ] |
| 13 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 14 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 15 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 16 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 17 | PDP editorial + color cards + shipping | product-detail | [ ] | [x] | reuse | [ ] |
| 18 | collection-banner + PLP grid | collection | [ ] | [x] | reuse | [ ] |
| 19 | collection-nav-grid | /collections | [ ] | [x] | reuse | [ ] |
| 20 | search-results | search | [ ] | [x] | reuse | [ ] |
| 21 | cart-page-main + featured | cart | [ ] | [x] | reuse | [ ] |
| 22 | about page + slideshow + IWT + mosaic | about-brand | [ ] | [x] | reuse | [ ] |
| 23 | contact + form | contact | [ ] | [x] | reuse | [ ] |
| 24 | blog-list + blog-post | blog-* | [ ] | [x] | reuse | [ ] |
| 25 | 404 page-content-main | policy | [ ] | [x] | reuse | [ ] |

---

## Aday / leftover

[`candidates/colorblock-leftovers.md`](../candidates/colorblock-leftovers.md)

---

## Evidence backlog

- [ ] Home / PDP / PLP / search / cart / about / contact / blog / 404 resmi 3vp
- [ ] Mega / search / cart empty+filled+qty / mobile menu / PDP Color
- [ ] Email / account / checkout / newsletter submit / comment submit — **yapılmayacak**
