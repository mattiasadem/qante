# Todo — Hollow Socks (hollowsocks.com)

*Kaynak:* https://hollowsocks.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **followhollow/main** · `schema_name`: **Shopify Theme Lab** · `schema_version`: 1.1.0 · `theme_store_id`: null · role `main`  
*Shop:* `followhollow.myshopify.com` · theme id `151218847913`

**Durum:** Mod A walk — observation roster yazıldı; resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/hollowsocks/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/hollowsocks/` · `evidence/hollowsocks/` · `todo/hollowsocks.md` · `candidates/hollowsocks-*.md` |

**Kapsam satırı:**  
`Hollow Socks · default · followhollow/main (Shopify Theme Lab 1.1.0) · home→PDP→PLP→search→cart-drawer→content→footer→mobile · roster 38 obs · 0 yeni şema · leftover: 404/Junip/Gorgias/blog-0/advertorials/cart-page`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | roster | [ ] |
| Mega (data-meganav-ignore) / search form / cart drawer / mobile menu | roster | [ ] |
| PDP `/products/crew-performance-alpaca-socks` | roster | [ ] |
| Compression PDP | ⛔ leftover (section map eksik) | — |
| PLP `/collections/all` | roster | [ ] |
| Search `/search?q=alpaca` | roster | [ ] |
| Cart `/cart` | ⛔ main height 0 — drawer | — |
| About `/pages/about-us` | roster | [ ] |
| Help FAQ `/pages/why-alpaca` | roster | [ ] |
| Size guide | roster | [ ] |
| Privacy | roster | [ ] |
| FAQ Gorgias `/pages/faqs` | roster wrapper | [ ] |
| Contact Gorgias | roster wrapper · form yok | [ ] |
| Blog list/post | ⛔ main height 0 | — |
| Reviews / 404 / advertorials / quiz | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | trust-icon-row | home | [ ] | [x] | reuse | [ ] |
| 5 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 6 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 7 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 8 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 9 | trust-icon-row.2 | home | [ ] | [x] | reuse | [ ] |
| 10 | editorial-image-with-text | home | [ ] | [x] | reuse | [ ] |
| 11 | media-shop-the-feed | home | [ ] | [x] | reuse | [ ] |
| 12 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 13 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 14 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 15 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 16 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 17–22 | PDP perks/related/table/trust/FAQ/marquee | product-detail | [ ] | [x] | reuse | [ ] |
| 23–24 | PLP categories + grid | collection | [ ] | [x] | reuse | [ ] |
| 25–26 | search hero + results | search | [ ] | [x] | reuse | [ ] |
| 27–32 | About | about-brand | [ ] | [x] | reuse | [ ] |
| 33–34 | why-alpaca help | faq-support | [ ] | [x] | reuse | [ ] |
| 35 | size-guide | size-guide | [ ] | [x] | reuse | [ ] |
| 36 | privacy | policy | [ ] | [x] | reuse | [ ] |
| 37 | faqs Gorgias | faqs | [ ] | [x] | reuse | [ ] |
| 38 | contact Gorgias | contact | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | bekliyor — data-meganav-ignore |
| global-predictive-search | input | bekliyor — düz form |
| global-cart-drawer | initial · filled · changed | bekliyor |
| global-menu-drawer | open | bekliyor 375/768 |
| faq-collapsible-tabs | changed | bekliyor |
| product-info-main | changed | bekliyor varyant |

---

## Aday / leftover

[`candidates/hollowsocks-leftovers.md`](../candidates/hollowsocks-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / cart / menu / FAQ interact
- [ ] Newsletter / contact submit — **yapılmayacak** (PII)
