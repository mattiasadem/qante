# Todo — Magic Spoon (magicspoon.com)

*Kaynak:* https://magicspoon.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **magicspoon-shopify/MAIN** · `schema_name`: **null** · `schema_version`: **null** · `theme_store_id`: **null** (custom) · shop `magic-spoon.myshopify.com` · theme id `133025103934` · role `main`

**Durum:** Mod A walk + observation JSON yazıldı — resmi 3vp capture sırada  
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
`Magic Spoon · default · magicspoon-shopify/MAIN (schema_name null, custom, magic-spoon.myshopify.com) · home→PDP cocoa→PLP shop-all→search cocoa→cart+Rebuy drawer→our-story→faq→contact→privacy→404→footer→mobile · 31 obs · 0 yeni şema · leftover: candidates/magicspoon-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ JSON | ⬜ capture |
| CEREAL mega 1440 / cart empty+filled / mobile menu | ✅ interact JSON | ⬜ capture |
| PDP `/products/cocoa-cereal-case` + one-time | ✅ JSON | ⬜ capture |
| PLP `/collections/shop-all` + CEREAL filter | ✅ JSON | ⬜ capture |
| Search `/search?q=cocoa` (30) | ✅ JSON | ⬜ capture |
| Cart `/cart` boş | ✅ JSON | ⬜ capture |
| About `/pages/our-story` | ✅ JSON | ⬜ capture |
| FAQ `/pages/faq` + Shipping tab | ✅ JSON | ⬜ capture |
| Contact `/pages/contact` (form **PII yok**) | ✅ JSON | ⬜ capture |
| Privacy `section#page` | ✅ JSON | ⬜ capture |
| Blog `/blogs/news` | ⛔ boş | leftover |
| 404 | ✅ leftover + JSON | ⬜ capture |
| Reviews / locator / jobs / tracking | ⛔ leftover | — |
| Newsletter / account / checkout | ⛔ PII yok | — |
| Header predictive search | ⛔ yok | leftover |

---

## Bileşen roster (31)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home + CEREAL 1440 | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | collection-nav-image-cards | home flavors | [ ] | [x] | reuse | [ ] |
| 5 | features-multicolumn | home subscribe | [ ] | [x] | reuse | [ ] |
| 6 | product-showcase-grid-featured | home bestsellers | [ ] | [x] | reuse | [ ] |
| 7 | product-showcase-grid-featured.2 | home UGC | [ ] | [x] | reuse | [ ] |
| 8 | collection-nav-tabs | home MS78 | [ ] | [x] | reuse | [ ] |
| 9 | testimonial-quote-carousel | home press | [ ] | [x] | reuse | [ ] |
| 10 | features-multicolumn.2 | home 3-up | [ ] | [x] | reuse | [ ] |
| 11 | editorial-rich-text | home guarantee | [ ] | [x] | reuse | [ ] |
| 12 | footer-columns-newsletter | home #footer-links | [ ] | [x] | reuse | [ ] |
| 13 | global-cart-drawer | home Rebuy | [ ] | [x] | reuse | [ ] |
| 14 | global-menu-drawer | home 375/768 | [ ] | [x] | reuse | [ ] |
| 15 | product-info-main | product-detail | [ ] | [x] + one-time | reuse | [ ] |
| 16 | features-multicolumn | product-detail nutrients | [ ] | [x] | reuse | [ ] |
| 17 | editorial-image-with-text | product-detail ingredients | [ ] | [x] | reuse | [ ] |
| 18 | testimonial-quote-carousel | product-detail UGC | [ ] | [x] | reuse | [ ] |
| 19 | comparison-quick-table | product-detail us-vs-them | [ ] | [x] | reuse | [ ] |
| 20 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 21 | faq-collapsible-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 22 | product-showcase-grid-plp | collection | [ ] | [x] + CEREAL | reuse | [ ] |
| 23 | faq-collapsible-tabs | collection | [ ] | [x] | reuse | [ ] |
| 24 | search-results | search | [ ] | [x] | reuse | [ ] |
| 25 | cart-page-main | cart | [ ] | [x] boş | reuse | [ ] |
| 26 | editorial-rich-text | about-brand | [ ] | [x] | reuse | [ ] |
| 27 | faq-collapsible-tabs | faq-support | [ ] | [x] + Shipping | reuse | [ ] |
| 28 | editorial-rich-text | contact | [ ] | [x] PII yok | reuse | [ ] |
| 29 | features-multicolumn | contact touts | [ ] | [x] | reuse | [ ] |
| 30 | page-content-main | policy | [ ] | [x] | reuse | [ ] |
| 31 | page-content-main | not-found | [ ] | [x] leftover | reuse | [ ] |

---

## Interact (plan)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | open 1440 | CEREAL hover mega |
| global-cart-drawer | initial/filled/changed | Rebuy boş + cocoa + qty |
| global-menu-drawer | open 375/768 | `#mobile-slides` |
| product-info-main | changed | Subscribe → one-time |
| product-showcase-grid-plp | changed | CEREAL filter |
| faq-collapsible-tabs (PDP + page) | changed | accordion / Shipping tab |

---

## Açık soru

- Header search yok — `global-predictive-search` yazılmadı (leftover).
- Rebuy qty stepper var mı — capture’da yoklanır.
- PLP quick-buy modal açılmadı (leftover).
