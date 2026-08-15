# Todo — Vessi (vessi.com)

*Kaynak:* https://vessi.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **vessi-storefront/main-us** · `schema_name`: **Vessi** · `schema_version`: 1.0.0 · `theme_store_id`: null (custom) · shop `vessi-footwear.myshopify.com` · theme id `129927970901` · role `main`

**Durum:** Mod A walk — observation JSON yazıldı; resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/vessi/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/vessi/`, `evidence/vessi/`, `todo/vessi.md`, `candidates/vessi-*.md` |

**Kapsam satırı:**  
`Vessi · default · vessi-storefront/main-us (Vessi 1.0.0, custom) · home→PDP→PLP→search→cart-drawer→content→footer→mobile · 46 obs · 0 yeni şema · leftover: 404/reviews/Gorgias/quick-add/ID.me/map`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | JSON | [ ] |
| Women mega 1440 / search `weekend` / cart empty+filled / mobile menu | JSON interact | [ ] |
| PDP `/products/womens-weekend-classic-marble-white` | JSON | [ ] |
| PLP `/collections/women` | JSON | [ ] |
| Search `/search?q=weekend` (64) | JSON | [ ] |
| Cart `/cart` → `/#cart` drawer | JSON | — sayfa yok |
| Our Story `/pages/our-story` | JSON | [ ] |
| Contact (form **yok**; e-posta tile) | JSON | [ ] |
| Blog `/blogs/the-forecast` + `best-waterproof-shoes` | JSON | [ ] |
| Privacy `main#MainContent` | JSON | [ ] |
| Help / returns / warranty / sizing | JSON | [ ] |
| 404 | JSON + leftover | [ ] |
| Newsletter / claim / ID.me / tracking | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] + Women | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | product-showcase-tabs | home | [ ] + Men | [x] | reuse | [ ] |
| 5 | editorial-image-with-text | home banner | [ ] | [x] | reuse | [ ] |
| 6–9 | collection-nav-image-cards ×4 | home | [ ] | [x] | reuse | [ ] |
| 10 | promo-scrolling-marquee | home | [ ] | [x] | reuse | [ ] |
| 11 | editorial-dynamic-grid | home rain | [ ] | [x] | reuse | [ ] |
| 12 | media-shop-the-feed | home IG | [ ] | [x] | reuse | [ ] |
| 13 | faq-collapsible-tabs | home | [ ] | [x] | reuse | [ ] |
| 14 | footer-columns-newsletter | home | [ ] | [x] PII yok | reuse | [ ] |
| 15 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 16 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 17 | global-menu-drawer | home | [ ] 375/768 | [x] | reuse | [ ] |
| 18–24 | PDP 7 section | product-detail | [ ] | [x] | reuse | [ ] |
| 25 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 26 | search-results | search | [ ] | [x] | reuse | [ ] |
| 27–30 | Our Story | about-brand | [ ] | [x] | reuse | [ ] |
| 31–33 | Contact | contact | [ ] | [x] | reuse | [ ] |
| 34–36 | Blog list + post | blog-* | [ ] | [x] | reuse | [ ] |
| 37 | page-content-main | policy | [ ] | [x] | reuse | [ ] |
| 38–45 | help/returns/warranty/sizing | faq-support | [ ] | [x] | reuse | [ ] |
| 46 | page-content-main | not-found | [ ] | leftover | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 Women click drawer |
| global-predictive-search | input | [ ] `weekend` |
| global-cart-drawer | filled | [ ] Weekend Classic |
| global-menu-drawer | open | [ ] 375/768 |
| product-showcase-tabs | changed | [ ] Men |
| product-info-main | changed | [ ] beden 6 |
| faq-collapsible-tabs home | changed | [ ] waterproof |
| faq-collapsible-tabs help | changed | [ ] Sizing tab |

---

## Aday / leftover

[`candidates/vessi-leftovers.md`](../candidates/vessi-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Mega / search / cart / menu / tabs / PDP / FAQ interact
- [ ] Reviews app / Gorgias / quick-add / size-guide
- [ ] Newsletter / warranty claim / ID.me / tracking — **yapılmayacak** (PII)
