# Todo — Material Kitchen (materialkitchen.com)

*Kaynak:* https://materialkitchen.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **08/10 - RC Variant Change Asset [EDIT HERE]** · `schema_name`: Themekit template theme · `schema_version`: 1.0.0 · `theme_store_id`: null · role `main` · theme.id `141671563326`  
*Shop:* `material-kitchen.myshopify.com`

**Durum:** Mod A walk kapandı — 44 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/100 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/materialkitchen/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Validate | `npm run validate` → 65 temiz · 0 error · 0 warn (şema dosyasına dokunulmadı) |
| Gözlem / kanıt | 44 obs · 152 PNG |
| Parallel | yalnız `observations/materialkitchen/`, `evidence/materialkitchen/`, `todo/materialkitchen.md`, `candidates/materialkitchen-*.md` |

**Kapsam satırı:**  
`Material Kitchen · default · 08/10 - RC Variant Change Asset [EDIT HERE] (Themekit template theme 1.0.0, theme_store_id null) · home→PDP→PLP→search→cart→content→footer→404→mobile · 44 obs · 152 PNG · 0 yeni şema · leftover: Okendo / reading ızgara / help boş / Loop / Faire / store locator / cart qty`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ |
| Mega Shop 1440 | ✅ interact | ✅ (375/768 hamburger) |
| Predictive search overlay | ✅ initial+input | ✅ (375/768 menüde; fill statik) |
| Cart drawer boş + dolu | ✅ interact | ✅ qty leftover |
| Mobile menu 375+768 | ✅ interact | ✅ (1440 N/A) |
| PDP `/products/the-mk-free-board` + Cloud | ✅ | ✅ |
| PLP `/collections/prep` | ✅ | ✅ |
| PLP `/collections/all` | ✅ | ✅ |
| Search `/search?q=knife` | ✅ 17 sonuç | ✅ |
| Cart `/cart` | ✅ viewport | ✅ (375/768 SCA h=0) |
| About `/pages/about` | ✅ 5 section | ✅ |
| FAQ `/pages/faq` + What is Material | ✅ | ✅ |
| Contact `/pages/contact` | ✅ form **gönderilmedi** | ✅ |
| Privacy / Terms | ✅ `.legal` | ✅ |
| Recipes + shortbreads + Reading hero | ✅ | ✅ |
| Gallery / bestsellers / reviews ticker / press | ✅ | ✅ |
| Help / about-us / store locator / gifts LP | ⛔ leftover | — |
| 404 | ✅ custom not-found | ✅ |
| Newsletter / account / contact submit | ⛔ PII | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] + mega | [x] | reuse | [x] |
| 3 | global-predictive-search | home | [x] + input | [x] | reuse | [x] |
| 4 | global-cart-drawer | home | [x] empty+filled | [x] | reuse | [x] qty leftover |
| 5 | global-menu-drawer | home | [x] 375+768 | [x] | reuse | [x] |
| 6 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 7 | editorial-image-with-text | home kitchenware | [x] | [x] | reuse | [x] |
| 8 | product-showcase-grid-featured | home Rebuy | [x] | [x] | reuse | [x] |
| 9 | editorial-image-with-text-overlay | home MK Board | [x] | [x] | reuse | [x] |
| 10 | testimonial-quote-carousel | home press | [x] | [x] | reuse | [x] |
| 11 | editorial-image-with-text.2 | home cake | [x] | [x] | reuse | [x] |
| 12 | testimonial-quote-carousel.2 | home UGC | [x] | [x] | reuse | [x] |
| 13 | blog-list-main | home reading | [x] | [x] | reuse | [x] |
| 14 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 15 | product-info-main | product-detail | [x] + Cloud | [x] | reuse | [x] |
| 16 | product-info-tabs | PDP specs | [x] | [x] | reuse | [x] |
| 17 | features-multicolumn | PDP USP | [x] | [x] | reuse | [x] |
| 18 | editorial-image-with-text | PDP | [x] | [x] | reuse | [x] |
| 19 | product-showcase-featured | PDP morefor | [x] | [x] | reuse | [x] |
| 20 | product-showcase-grid-plp | collection prep | [x] | [x] | reuse | [x] |
| 21–22 | quotes + articles | collection | [x] | [x] | reuse | [x] |
| 23 | product-showcase-grid-plp | collection-all | [x] | [x] | reuse | [x] |
| 24 | search-results | search | [x] | [x] | reuse | [x] |
| 25 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 26–30 | about (5) | about-brand | [x] | [x] | reuse | [x] |
| 31 | faq-collapsible-tabs | faq-support | [x] | [x] | reuse | [x] |
| 32 | lead-capture-form | contact | [x] | [x] | reuse | [x] |
| 33–34 | privacy + terms | policy | [x] | [x] | reuse | [x] |
| 35 | 404 | not-found | [x] | [x] | reuse | [x] |
| 36–38 | recipes + post + hub hero | blog-* | [x] | [x] | reuse | [x] |
| 39 | media-shop-the-feed | lookbook | [x] | [x] | reuse | [x] |
| 40–41 | bestsellers | landing-campaign | [x] | [x] | reuse | [x] |
| 42–43 | reviews ticker + quote | testimonial-ugc | [x] | [x] | reuse | [x] |
| 44 | press | about-brand | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop: yeşil dikey mega — Shop all / Prepware / Knives / Sets / Tools / Tabletop / Ceramics / Storage + Care / Final Sale / Gift Card |
| global-predictive-search | initial, input | 1440 Suggested + `knife` — liste statik; “no results” metni |
| global-cart-drawer | initial, filled | boş: You have no items… + We recommend; dolu: MK Free Board Ocean (Checkout’a girilmedi) |
| global-menu-drawer | open | 375/768 hamburger (1440 0px) |
| product-info-main | changed | Cloud swatch — beyaz tahta |
| faq-collapsible-tabs | changed | What is Material? |

---

## Aday / leftover

[`candidates/materialkitchen-leftovers.md`](../candidates/materialkitchen-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp — **152 PNG**
- [x] Mega / search / cart / menu / FAQ / swatch interact
- [ ] Cart qty `changed` — plus selector eşleşmedi
- [ ] Newsletter / account / contact submit — **yapılmayacak** (PII)
