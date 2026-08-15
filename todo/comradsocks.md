# Todo — Comrad (comradsocks.com)

*Kaynak:* https://comradsocks.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **comradsocks/main** · `schema_name`: **Simplistic** · `schema_version`: 3.0.26 · `theme_store_id`: null · role `main`  
*Shop:* `comradsocks.myshopify.com` · theme id `150078030041`

**Durum:** Mod A walk kapandı — 52 obs · resmi 3vp (istisna: trust 1440-only · menu 375/768) · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/41 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/comradsocks/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Gözlem / kanıt | 52 obs · 191 PNG |
| Validate | `validate-schemas.mjs` → 65 temiz · 0 error · 0 warn |
| Parallel | yalnız `observations/comradsocks/` · `evidence/comradsocks/` · `todo/comradsocks.md` · `candidates/comradsocks-*.md` |

**Kapsam satırı:**  
`Comrad · default · comradsocks/main (Simplistic 3.0.26) · home→PDP→PLP→search→cart-drawer→content→footer→mobile · 52 obs · 191 PNG · 0 yeni şema · leftover: 404/Alia/reviews/quiz-steps/listicle/search-mobile/PLP-filters`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ |
| Mega Shop 1440 | ✅ interact | ✅ (375/768 hover N/A) |
| Search 1440 gömülü + PRODUCTS | ✅ interact | ✅ static; input yalnız 1440 |
| Cart drawer boş + dolu + adet | ✅ interact | ✅ |
| Mobile menu 375+768 | ✅ prepareClick | ✅ (1440 N/A) |
| PDP `/products/knee-high-compression-socks-solid` | ✅ + 3-Pack | ✅ |
| PLP `/collections/compression-socks-for-all-day-comfort` | ✅ | ✅ filtre leftover |
| Search `/search?q=compression` | ✅ | ✅ |
| Cart `/cart` | ⛔ home redirect — drawer | — |
| About `/pages/our-story` | ✅ | ✅ |
| FAQ | ✅ + graduated | ✅ |
| HSA/FSA Truemed | ✅ + ilk FAQ | ✅ |
| Contact (form **gönderilmedi**) | ✅ | ✅ |
| Journal + article | ✅ | ✅ |
| Terms + privacy | ✅ | ✅ |
| Sock quiz landing | ✅ | ✅ Start yok |
| How compression works | ✅ | ✅ |
| 404 / Alia 20% / reviews app / listicle | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home Replo | [x] | [x] | reuse | [x] |
| 4 | trust-icon-row | home | [x] 1440 | [x] | reuse | [x] |
| 5 | promo-scrolling-marquee | home press | [x] | [x] | reuse | [x] |
| 6 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 7–10 | editorial-rich-text ×4 | home | [x] | [x] | reuse | [x] |
| 11 | collection-nav-slider | home levels | [x] | [x] | reuse | [x] |
| 12 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 13 | collection-nav-image-cards.2 | home types | [x] | [x] | reuse | [x] |
| 14 | product-showcase-tabs | home | [x] | [x] | reuse | [x] |
| 15 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 16 | media-shop-the-feed | home video | [x] hydrate | [x] | reuse | [x] |
| 17 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 18 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 19 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 20 | global-menu-drawer | home | [x] 375/768 | [x] | reuse | [x] |
| 21–25 | PDP info + 4 section | product-detail | [x] | [x] | reuse | [x] |
| 26–28 | PLP banner/grid/faq | collection | [x] | [x] | reuse | [x] |
| 29 | search-results | search | [x] | [x] | reuse | [x] |
| 30–32 | Our Story | about-brand | [x] | [x] | reuse | [x] |
| 33–36 | FAQ | faq-support | [x] | [x] | reuse | [x] |
| 37–40 | HSA | hsa | [x] | [x] | reuse | [x] |
| 41–42 | contact | contact | [x] | [x] | reuse | [x] |
| 43–44 | journal + article | blog | [x] | [x] | reuse | [x] |
| 45–46 | terms + privacy | policy | [x] | [x] | reuse | [x] |
| 47 | product-finder-quiz | quiz | [x] | [x] | reuse | [x] |
| 48–52 | how-it-works | how-it-works | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | ✅ 1440 Shop hover — kolon + promo |
| global-predictive-search | input | ✅ 1440 knee → PRODUCTS + See all 10; 375/768 leftover |
| global-cart-drawer | filled · changed | ✅ ATC UI; + → (2) $68 |
| global-menu-drawer | open | ✅ 375/768 hamburger; 1440 N/A |
| product-showcase-tabs | changed | ✅ Best Sellers / Workweek Essentials $124.60 |
| product-info-main | changed | ✅ 3-Pack ATC $96.90 |
| faq-collapsible-tabs FAQ | changed | ✅ graduated açık |
| faq-collapsible-tabs HSA | changed | ✅ FSA/HSA tanımı açık |

---

## Aday / leftover

[`candidates/comradsocks-leftovers.md`](../candidates/comradsocks-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (trust 1440-only; menu 375/768)
- [x] Mega / tab / FAQ / HSA / 3-pack / cart / search-1440 interact
- [x] Video testimonials hydrate
- [ ] Alia 20% Off (PII yok)
- [ ] `/cart` sayfa (redirect)
- [ ] Search 375/768 (menu içi)
- [ ] PLP filter/sort/Load More
