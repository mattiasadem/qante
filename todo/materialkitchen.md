# Todo — Material Kitchen (materialkitchen.com)

*Kaynak:* https://materialkitchen.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **08/10 - RC Variant Change Asset [EDIT HERE]** · `schema_name`: Themekit template theme · `schema_version`: 1.0.0 · `theme_store_id`: null · role `main` · theme.id `141671563326`  
*Shop:* `material-kitchen.myshopify.com`

**Durum:** Mod A walk yazıldı — resmi 3vp capture kuyrukta  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/materialkitchen/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Validate | şema dosyasına dokunulmadı |
| Gözlem / kanıt | 44 obs · PNG capture sonrası |
| Parallel | yalnız `observations/materialkitchen/`, `evidence/materialkitchen/`, `todo/materialkitchen.md`, `candidates/materialkitchen-*.md` |

**Kapsam satırı:**  
`Material Kitchen · default · 08/10 - RC Variant Change Asset [EDIT HERE] (Themekit template theme 1.0.0, theme_store_id null) · home→PDP→PLP→search→cart→content→footer→404→mobile · 44 obs · 0 yeni şema · leftover: Okendo / reading ızgara / help boş / Loop / Faire / store locator`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ obs | ⬜ capture |
| Mega Shop 1440 | ✅ interact adım | ⬜ |
| Predictive search overlay | ✅ initial+input (statik suggested) | ⬜ |
| Cart drawer boş + dolu + qty | ✅ interact adım | ⬜ |
| Mobile menu 375+768 | ✅ interact adım | ⬜ (1440 N/A) |
| PDP `/products/the-mk-free-board` + Cloud | ✅ + specs/USP/editorial/morefor | ⬜ |
| PLP `/collections/prep` | ✅ grid+quotes+articles | ⬜ |
| PLP `/collections/all` | ✅ grouped template | ⬜ |
| Search `/search?q=knife` | ✅ 17 sonuç | ⬜ |
| Cart `/cart` SCA | ✅ empty $0 | ⬜ |
| About `/pages/about` | ✅ 5 section | ⬜ |
| FAQ `/pages/faq` + What is Material | ✅ | ⬜ |
| Contact `/pages/contact` | ✅ form **gönderilmedi** | ⬜ |
| Privacy / Terms | ✅ `.legal` | ⬜ |
| Recipes + shortbreads + Reading hero | ✅ | ⬜ |
| Gallery / bestsellers / reviews ticker / press | ✅ | ⬜ |
| Help / about-us / store locator / gifts LP | ⛔ leftover | — |
| 404 | ✅ custom not-found | ⬜ |
| Newsletter / account / contact submit | ⛔ PII | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] + mega | [x] | reuse | [ ] |
| 3 | global-predictive-search | home | [ ] + input | [x] | reuse | [ ] |
| 4 | global-cart-drawer | home | [ ] empty+filled+qty | [x] | reuse | [ ] |
| 5 | global-menu-drawer | home | [ ] 375+768 | [x] | reuse | [ ] |
| 6 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 7 | editorial-image-with-text | home kitchenware | [ ] | [x] | reuse | [ ] |
| 8 | product-showcase-grid-featured | home Rebuy | [ ] | [x] | reuse | [ ] |
| 9 | editorial-image-with-text-overlay | home MK Board | [ ] | [x] | reuse | [ ] |
| 10 | testimonial-quote-carousel | home press | [ ] | [x] | reuse | [ ] |
| 11 | editorial-image-with-text.2 | home cake | [ ] | [x] | reuse | [ ] |
| 12 | testimonial-quote-carousel.2 | home UGC | [ ] | [x] | reuse | [ ] |
| 13 | blog-list-main | home reading | [ ] | [x] | reuse | [ ] |
| 14 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 15 | product-info-main | product-detail | [ ] + Cloud | [x] | reuse | [ ] |
| 16 | product-info-tabs | PDP specs | [ ] | [x] | reuse | [ ] |
| 17 | features-multicolumn | PDP USP | [ ] | [x] | reuse | [ ] |
| 18 | editorial-image-with-text | PDP | [ ] | [x] | reuse | [ ] |
| 19 | product-showcase-featured | PDP morefor | [ ] | [x] | reuse | [ ] |
| 20 | product-showcase-grid-plp | collection prep | [ ] | [x] | reuse | [ ] |
| 21–22 | quotes + articles | collection | [ ] | [x] | reuse | [ ] |
| 23 | product-showcase-grid-plp | collection-all | [ ] | [x] | reuse | [ ] |
| 24 | search-results | search | [ ] | [x] | reuse | [ ] |
| 25 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 26–30 | about (5) | about-brand | [ ] | [x] | reuse | [ ] |
| 31 | faq-collapsible-tabs | faq-support | [ ] | [x] | reuse | [ ] |
| 32 | lead-capture-form | contact | [ ] | [x] | reuse | [ ] |
| 33–34 | privacy + terms | policy | [ ] | [x] | reuse | [ ] |
| 35 | 404 | not-found | [ ] | [x] | reuse | [ ] |
| 36–38 | recipes + post + hub hero | blog-* | [ ] | [x] | reuse | [ ] |
| 39 | media-shop-the-feed | lookbook | [ ] | [x] | reuse | [ ] |
| 40–41 | bestsellers | landing-campaign | [ ] | [x] | reuse | [ ] |
| 42–43 | reviews ticker + quote | testimonial-ugc | [ ] | [x] | reuse | [ ] |
| 44 | press | about-brand | [ ] | [x] | reuse | [ ] |

---

## Interact (plan)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop mega |
| global-predictive-search | initial, input | 1440 Suggested + `knife` (statik) |
| global-cart-drawer | initial, filled, changed | boş + MK Board + qty |
| global-menu-drawer | open | 375/768 hamburger |
| product-info-main | changed | Cloud swatch |
| faq-collapsible-tabs | changed | What is Material? |

---

## Aday / leftover

[`candidates/materialkitchen-leftovers.md`](../candidates/materialkitchen-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Mega / search / cart / menu / FAQ / swatch interact
- [ ] Newsletter / account / contact submit — **yapılmayacak** (PII)
