# Todo — Comrad (comradsocks.com)

*Kaynak:* https://comradsocks.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **comradsocks/main** · `schema_name`: **Simplistic** · `schema_version`: 3.0.26 · `theme_store_id`: null · role `main`  
*Shop:* `comradsocks.myshopify.com` · theme id `150078030041`

**Durum:** Mod A walk yazıldı — 3vp / interact henüz  
**PR:** draft (main'e merge yok)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/comradsocks/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/comradsocks/` · `evidence/comradsocks/` · `todo/comradsocks.md` · `candidates/comradsocks-*.md` |

**Kapsam satırı:**  
`Comrad · default · comradsocks/main (Simplistic 3.0.26) · home→PDP→PLP→search→cart-drawer→content→footer→mobile · obs yazıldı · 3vp bekliyor`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | obs | [ ] |
| Mega Shop 1440 | obs | [ ] interact |
| Search bar overlay | obs | [ ] interact |
| Cart drawer boş + dolu | obs | [ ] interact |
| Mobile menu 375+768 | obs | [ ] interact |
| PDP `/products/knee-high-compression-socks-solid` | obs | [ ] |
| PLP `/collections/compression-socks-for-all-day-comfort` | obs | [ ] |
| Search `/search?q=compression` | obs | [ ] |
| Cart `/cart` | ⛔ home redirect — drawer | — |
| About `/pages/our-story` | obs | [ ] |
| FAQ | obs | [ ] + 2. soru interact |
| HSA/FSA Truemed | obs | [ ] + ilk FAQ |
| Contact (form **gönderilmedi**) | obs | [ ] |
| Journal + article | obs | [ ] |
| Terms + privacy | obs | [ ] |
| Sock quiz landing | obs | [ ] Start yok |
| How compression works | obs | [ ] |
| 404 / Alia 20% / reviews app / Replo hydrate | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home Replo | [ ] | [x] | reuse | [ ] |
| 4 | trust-icon-row | home | [ ] | [x] | reuse | [ ] |
| 5 | promo-scrolling-marquee | home press | [ ] | [x] | reuse | [ ] |
| 6 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 7–10 | editorial-rich-text ×4 | home | [ ] | [x] | reuse | [ ] |
| 11 | collection-nav-slider | home levels | [ ] | [x] | reuse | [ ] |
| 12 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 13 | collection-nav-image-cards.2 | home types | [ ] | [x] | reuse | [ ] |
| 14 | product-showcase-tabs | home | [ ] | [x] | reuse | [ ] |
| 15 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 16 | media-shop-the-feed | home video | [ ] | [x] | reuse | [ ] |
| 17 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 18 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 19 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 20 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 21–25 | PDP info + 4 section | product-detail | [ ] | [x] | reuse | [ ] |
| 26–28 | PLP banner/grid/faq | collection | [ ] | [x] | reuse | [ ] |
| 29 | search-results | search | [ ] | [x] | reuse | [ ] |
| 30–32 | Our Story | about-brand | [ ] | [x] | reuse | [ ] |
| 33–36 | FAQ | faq-support | [ ] | [x] | reuse | [ ] |
| 37–40 | HSA | hsa | [ ] | [x] | reuse | [ ] |
| 41–42 | contact | contact | [ ] | [x] | reuse | [ ] |
| 43–44 | journal + article | blog | [ ] | [x] | reuse | [ ] |
| 45–46 | terms + privacy | policy | [ ] | [x] | reuse | [ ] |
| 47 | product-finder-quiz | quiz | [ ] | [x] | reuse | [ ] |
| 48–52 | how-it-works | how-it-works | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Plan |
|---|---|---|
| navigation-header-mega | open | 1440 Shop hover |
| global-predictive-search | input | `knee` / katalog |
| global-cart-drawer | filled · changed | Companions ATC |
| global-menu-drawer | open | 375/768 hamburger |
| product-showcase-tabs | changed | Best Sellers |
| product-info-main | changed | renk/beden swatch |
| faq-collapsible-tabs FAQ | changed | 2. soru |
| faq-collapsible-tabs HSA | changed | ilk soru |

---

## Aday / leftover

[`candidates/comradsocks-leftovers.md`](../candidates/comradsocks-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / tab / FAQ / cart / swatch interact
- [ ] Video testimonials hydrate
- [ ] Alia 20% Off (PII yok)
- [ ] `/cart` sayfa (redirect)
