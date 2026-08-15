# Todo — Cymbiotika (cymbiotika.com)

*Kaynak:* https://cymbiotika.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **cym-theme-com/live** · `schema_name`: **Sprout** · `schema_version`: **0.01** · `theme_store_id`: null (custom) · shop `mitolife.myshopify.com` · theme id `129492189231` · role `main`

**Durum:** Mod A walk başladı — observation yazıldı, resmi 3vp + interact sırada  
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
`Cymbiotika · default · cym-theme-com/live / Sprout 0.01 (custom, mitolife.myshopify.com) · home→PDP→PLP→search→cart-drawer→content→footer→mobile · walk açık`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ⬜ capture | ⬜ |
| Mega Shop Best Sellers 1440 | ⬜ interact | ⬜ |
| Cart drawer boş + dolu + qty | ⬜ interact | ⬜ |
| Predictive search drawer | ⬜ interact | ⬜ |
| Mobile menu 375/768 | ⬜ interact | ⬜ |
| PDP `/products/glutathione` | ⬜ capture | ⬜ |
| PLP `/collections/all-products-collection` | ⬜ capture | ⬜ |
| Search `/search?q=glutathione` | ⬜ capture | ⬜ |
| Cart `/cart` | ⛔ `/?cart=` drawer | — |
| About `/pages/about-us` | ⬜ capture | ⬜ |
| FAQ `/pages/faq-1` | ⬜ capture | ⬜ |
| Contact `/pages/contact-us` | ⬜ form PII yok | ⬜ |
| Privacy | ⬜ / leftover yükseklik | ⬜ |
| Blog + 1 yazı | ⬜ capture | ⬜ |
| Quiz `/pages/quiz` | ⬜ / leftover | ⬜ |
| 404 | ⬜ + leftover pageType | ⬜ |
| Store locator / liposomes / Brecka / recipes/press | ⛔ leftover | — |
| Newsletter / contact submit | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] + mega | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 5 | features-multicolumn | home problem | [ ] | [x] | reuse | [ ] |
| 6 | editorial-rich-text | home difference | [ ] | [x] | reuse | [ ] |
| 7 | features-multicolumn-2 | home clinical | [ ] | [x] | reuse | [ ] |
| 8 | comparison-quick-table | home | [ ] | [x] | reuse | [ ] |
| 9 | testimonial-quote-carousel | home Brecka | [ ] | [x] | reuse | [ ] |
| 10 | blog-list-main | home journal | [ ] | [x] | reuse | [ ] |
| 11 | media-shop-the-feed | home Firework | [ ] | [x] | reuse | [ ] |
| 12 | footer-columns-newsletter | home | [ ] | [x] PII yok | reuse | [ ] |
| 13 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 14 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 15 | global-menu-drawer | home | [ ] | [x] 375 0px risk | reuse | [ ] |
| 16–25 | PDP glutathione | product-detail | [ ] | [x] | reuse | [ ] |
| 26–28 | PLP banner/grid | collection | [ ] | [x] | reuse | [ ] |
| 29 | search-results | search | [ ] | [x] | reuse | [ ] |
| 30 | editorial-custom-content | about-brand | [ ] | [x] | reuse | [ ] |
| 31 | faq-collapsible-tabs | faq-support | [ ] | [x] | reuse | [ ] |
| 32 | lead-capture-form | contact | [ ] | [x] PII yok | reuse | [ ] |
| 33 | page-content-main | policy | [ ] | [x] 18k | reuse | [ ] |
| 34–35 | blog-list + post | blog-* | [ ] | [x] | reuse | [ ] |
| 36 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |
| 37 | product-finder-quiz | quiz | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişecekse)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop Best Sellers hover |
| global-cart-drawer | initial, filled, changed | #navbar__cart · ATC glutathione · qty |
| global-predictive-search | initial, input | #navbar__search · glutathione |
| global-menu-drawer | open | 375/768 hamburger — 0px ise leftover |

---

## Aday / leftover

[`candidates/cymbiotika-leftovers.md`](../candidates/cymbiotika-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Mega / cart / search / menu interact
- [ ] Newsletter / contact submit — **yapılmayacak** (PII)
