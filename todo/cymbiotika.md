# Todo — Cymbiotika (cymbiotika.com)

*Kaynak:* https://cymbiotika.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **cym-theme-com/live** · `schema_name`: **Sprout** · `schema_version`: **0.01** · `theme_store_id`: null (custom) · shop `mitolife.myshopify.com` · theme id `129492189231` · role `main`

**Durum:** Mod A walk kapandı — 36 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/cymbiotika/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/cymbiotika/`, `evidence/cymbiotika/`, `todo/cymbiotika.md`, `candidates/cymbiotika-*.md` |

**Kapsam satırı:**  
`Cymbiotika · default · cym-theme-com/live / Sprout 0.01 (custom, mitolife.myshopify.com) · home→PDP glutathione→PLP→search→cart-drawer→content→footer→mobile · 36 obs · 0 yeni şema · leftover: 404/Stockist/Frontrow/Firework/Vue/seals-chrome/no-cart-page`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ |
| Mega Shop Best Sellers 1440 | ✅ interact | ✅ (yalnız 1440 open) |
| Cart drawer boş + dolu + qty | ✅ interact | ✅ boş 3vp · dolu/qty 768/1440 · 375 filled yok |
| Predictive search drawer | ✅ open | ✅ (input piksel yok) |
| Mobile menu 375/768 | ✅ interact | ✅ (1440 N/A) |
| PDP `/products/glutathione` | ✅ | ✅ (seals leftover) |
| PLP `/collections/all-products-collection` | ✅ | ✅ |
| Search `/search?q=glutathione` | ✅ | ✅ |
| Cart `/cart` | ⛔ `/?cart=` drawer | — |
| About `/pages/about-us` | ✅ | ✅ |
| FAQ `/pages/faq-1` | ✅ | ✅ |
| Contact `/pages/contact-us` | ✅ form PII yok | ✅ |
| Privacy | ✅ | ✅ (uzun) |
| Blog + 1 yazı | ✅ | ✅ |
| Quiz `/pages/quiz` | ✅ landing | ✅ (adım PII) |
| 404 | ✅ + leftover pageType | ✅ |
| Store locator / liposomes / Brecka / recipes/press | ⛔ leftover | — |
| Newsletter / contact submit | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home + mega | [x] + Shop 1440 | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] 2 slayt + nokta | reuse | [x] |
| 4 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 5 | features-multicolumn | home problem | [x] | [x] | reuse | [x] |
| 6 | editorial-rich-text | home difference | [x] | [x] header sızıntı | reuse | [x] |
| 7 | features-multicolumn-2 | home clinical | [x] | [x] | reuse | [x] |
| 8 | comparison-quick-table | home | [x] | [x] | reuse | [x] |
| 9 | testimonial-quote-carousel | home Brecka | [x] | [x] | reuse | [x] |
| 10 | blog-list-main | home journal | [x] | [x] | reuse | [x] |
| 11 | media-shop-the-feed | home Firework | [x] | [x] | reuse | [x] |
| 12 | footer-columns-newsletter | home | [x] | [x] PII yok | reuse | [x] |
| 13 | global-cart-drawer | home | [x] boş+dolu+qty | [x] 375 filled yok | reuse | [x] |
| 14 | global-predictive-search | home | [x] open | [x] input yok | reuse | [x] |
| 15 | global-menu-drawer | home | [x] 375/768 | [x] 1440 N/A | reuse | [x] |
| 16–24 | PDP glutathione | product-detail | [x] | [x] seals leftover | reuse | [x] |
| 25–27 | PLP banner/grid | collection | [x] | [x] | reuse | [x] |
| 28 | search-results | search | [x] | [x] | reuse | [x] |
| 29 | editorial-custom-content | about-brand | [x] | [x] | reuse | [x] |
| 30 | faq-collapsible-tabs | faq-support | [x] | [x] | reuse | [x] |
| 31 | lead-capture-form | contact | [x] | [x] PII yok | reuse | [x] |
| 32 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 33–34 | blog-list + post | blog-* | [x] | [x] | reuse | [x] |
| 35 | page-content-main | not-found | [x] | [x] | reuse | [x] |
| 36 | product-finder-quiz | quiz | [x] landing | [x] | reuse | [x] |

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop Best Sellers hover — Customer Favorites + 3 ürün |
| global-cart-drawer | initial, filled, changed | Boş 3vp. 768/1440 Glutathione 1×$61.60 → qty 2 / $116.16. ATC **ui**. 375 filled yok (bot-wall) |
| global-predictive-search | initial (open) | Popular searches + recommended. `input` aynı kare |
| global-menu-drawer | open | 375 tam ekran + 768 sol panel. 1440 N/A |

---

## Aday / leftover

[`candidates/cymbiotika-leftovers.md`](../candidates/cymbiotika-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp
- [x] Mega / cart boş+dolu+qty / search open / mobile menu
- [ ] Cart filled 375
- [ ] Search input sonuç listesi
- [ ] PDP seals (header crop)
- [ ] Shop by Benefit / Learn mega
- [ ] Newsletter / contact submit — **yapılmayacak** (PII)
