# Todo — Magic Spoon (magicspoon.com)

*Kaynak:* https://magicspoon.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **magicspoon-shopify/MAIN** · `schema_name`: **null** · `schema_version`: **null** · `theme_store_id`: **null** (custom) · shop `magic-spoon.myshopify.com` · theme id `133025103934` · role `main`

**Durum:** Mod A walk kapandı — 31 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/magicspoon/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/magicspoon/`, `evidence/magicspoon/`, `todo/magicspoon.md`, `candidates/magicspoon-*.md` |

**Kapsam satırı:**  
`Magic Spoon · default · magicspoon-shopify/MAIN (schema_name null, custom, magic-spoon.myshopify.com) · home→PDP cocoa→PLP shop-all→search cocoa→cart+Rebuy drawer→our-story→faq→contact→privacy→404→footer→mobile · 31 obs · 117 PNG · 0 yeni şema · leftover: candidates/magicspoon-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ |
| CEREAL mega 1440 / cart empty+filled+qty / mobile menu | ✅ interact | ✅ (menu 1440 N/A) |
| PDP `/products/cocoa-cereal-case` + one-time | ✅ + 375 one-time | ✅ (1440/768 Rebuy bleed leftover) |
| PLP `/collections/shop-all` + CEREAL filter | ✅ | ✅ |
| Search `/search?q=cocoa` (30) | ✅ | ✅ (`#searchresults`) |
| Cart `/cart` boş | ✅ | ✅ |
| About `/pages/our-story` | ✅ | ✅ (1440 Rebuy leftover) |
| FAQ `/pages/faq` + Shipping | ✅ | ✅ |
| Contact `/pages/contact` (form **PII yok**) | ✅ | ✅ |
| Privacy `section#page` | ✅ | ✅ |
| Blog `/blogs/news` | ⛔ boş | leftover |
| 404 | ✅ leftover + JSON | ✅ |
| Reviews / locator / jobs / tracking | ⛔ leftover | — |
| Newsletter / account / checkout | ⛔ PII yok | — |
| Header predictive search | ⛔ yok | leftover |

---

## Bileşen roster (31)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home + CEREAL 1440 | [x] 375/768 bar + mega 1440 | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | collection-nav-image-cards | home flavors | [x] | [x] | reuse | [x] |
| 5 | features-multicolumn | home subscribe | [x] | [x] | reuse | [x] |
| 6 | product-showcase-grid-featured | home bestsellers | [x] | [x] | reuse | [x] |
| 7 | product-showcase-grid-featured.2 | home UGC | [x] | [x] | reuse | [x] |
| 8 | collection-nav-tabs | home MS78 | [x] | [x] 1440 Rebuy | reuse | [x] |
| 9 | testimonial-quote-carousel | home press | [x] | [x] | reuse | [x] |
| 10 | features-multicolumn.2 | home 3-up | [x] | [x] | reuse | [x] |
| 11 | editorial-rich-text | home guarantee | [x] | [x] | reuse | [x] |
| 12 | footer-columns-newsletter | home #footer-links | [x] | [x] | reuse | [x] |
| 13 | global-cart-drawer | home Rebuy | [x] boş+dolu+qty 3vp | [x] | reuse | [x] |
| 14 | global-menu-drawer | home 375/768 | [x] | [x] 1440 N/A | reuse | [x] |
| 15 | product-info-main | product-detail | [x] + one-time 375 | [x] | reuse | [x] |
| 16 | features-multicolumn | product-detail nutrients | [x] | [x] | reuse | [x] |
| 17 | editorial-image-with-text | product-detail ingredients | [x] | [x] | reuse | [x] |
| 18 | testimonial-quote-carousel | product-detail UGC | [x] | [x] | reuse | [x] |
| 19 | comparison-quick-table | product-detail us-vs-them | [x] | [x] 1440 Rebuy | reuse | [x] |
| 20 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 21 | faq-collapsible-tabs | product-detail | [x] | [x] | reuse | [x] |
| 22 | product-showcase-grid-plp | collection | [x] + CEREAL | [x] | reuse | [x] |
| 23 | faq-collapsible-tabs | collection | [x] | [x] | reuse | [x] |
| 24 | search-results | search | [x] | [x] | reuse | [x] |
| 25 | cart-page-main | cart | [x] boş | [x] | reuse | [x] |
| 26 | editorial-rich-text | about-brand | [x] | [x] | reuse | [x] |
| 27 | faq-collapsible-tabs | faq-support | [x] + Shipping | [x] | reuse | [x] |
| 28 | editorial-rich-text | contact | [x] | [x] PII yok | reuse | [x] |
| 29 | features-multicolumn | contact touts | [x] | [x] | reuse | [x] |
| 30 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 31 | page-content-main | not-found | [x] leftover | [x] | reuse | [x] |

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | open 1440 | CEREAL → FEATURED FLAVORS cards |
| global-cart-drawer | initial/filled/changed | Rebuy boş; Cocoa $39; qty 2 → $78 |
| global-menu-drawer | open 375/768 | `#mobile-slides` full-screen |
| product-info-main | changed 375 | Subscribe $31.20 → ONE-TIME $39 |
| product-showcase-grid-plp | changed | CEREAL pill + cereal grid |
| faq-collapsible-tabs (page) | changed | Shipping tab questions |

---

## Açık soru

- Header search yok — `global-predictive-search` yazılmadı.
- Rebuy 768/1440 auto-open — close off-viewport; 375 temiz.
- PLP quick-buy modal açılmadı (leftover).
