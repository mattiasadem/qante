# Todo — Glossier (glossier.com)

*Kaynak:* https://www.glossier.com/ · *Preset:* `default`  
*Tema (storefront):* **3/19 Release 3.49.0** · `schema_name`: Glossier · `schema_version`: 3.49.0 · shop `glossier-admin.myshopify.com`

**Durum:** Mod A walk kapandı — 23 obs · resmi 3vp · leftover kayıtlı  
**PR:** draft — cursor/glossier-discover-94ec

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/glossier/default/` |
| Capture | resmi `capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Validate | `npm run validate` → 65 temiz · 0 error · 0 warn |
| Gözlem / kanıt | 23 obs · 69 PNG |
| Parallel | yalnız `observations/glossier/` · `evidence/glossier/` · `todo/glossier.md` · `candidates/glossier-leftovers.md` |

**Kapsam satırı:**  
`Glossier · default · 3/19 Release 3.49.0 (Glossier 3.49.0) · home→PDP→PLP→search→cart drawer→about→footer · 23 obs · 69 PNG · 0 yeni şema · leftover: external blog / cart shell / reviews app / bot-wall`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + promo/header/footer | ✅ obs | ✅ |
| Hero + featured sets + two-column + visual links | ✅ obs | ✅ |
| Campaign video + UGC | ✅ obs | ✅ |
| Search modal | ✅ obs | ✅ |
| Cart drawer (bag) | ✅ obs | ✅ |
| Mobile menu 375/768 | ✅ obs | ✅ |
| PDP `/products/boy-brow` | ✅ obs | ✅ |
| PLP `/collections/makeup` | ✅ obs | ✅ |
| Search `/search?q=brow` | ✅ obs | ✅ |
| About `/pages/about` | ✅ obs | ✅ |
| Blog `/blogs/gloss` | ⛔ leftover 404 | — |
| Cart `/cart` page | ⛔ leftover shell h=0 | — |
| PDP reviews app | ⛔ leftover widget | — |
| Checkout / account / newsletter submit | ⛔ PII | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 5 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 6 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 7 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 8 | media-shop-the-feed | home | [x] | [x] | reuse | [x] |
| 9 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 10 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 11 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 12 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 13 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 14 | testimonial-quote-carousel | product-detail | [x] | [x] | reuse | [x] |
| 15 | faq-collapsible-tabs | product-detail | [x] | [x] | reuse | [x] |
| 16 | editorial-image-with-text | product-detail | [x] | [x] | reuse | [x] |
| 17 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 18 | media-shop-the-feed | product-detail | [x] | [x] | reuse | [x] |
| 19 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 20 | search-results | search | [x] | [x] | reuse | [x] |
| 21 | editorial-rich-text | about-brand | [x] | [x] | reuse | [x] |
| 22 | editorial-image-with-text | about-brand | [x] | [x] | reuse | [x] |
| 23 | media-lookbook-banner | about-brand | [x] | [x] | reuse | [x] |

---

## Aday / leftover

[`candidates/glossier-leftovers.md`](../candidates/glossier-leftovers.md)

---

## Evidence backlog

- [x] Resmi 3vp — 69 PNG
- [x] `npm run validate` temiz
- [x] Draft PR
