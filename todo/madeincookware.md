# Todo — Made In (madeincookware.com)

*Kaynak:* https://madeincookware.com · *Preset:* `default`  
*Tema (storefront):* **görünmedi** — custom headless (Tailwind + UUID `section` id; `Shopify.theme` / `schema_name` / Theme Store id yok). Ad uydurulmadı.

**Durum:** Mod A walk — observation yazıldı; resmi 3vp + interact sırada  
**PR:** (draft · main'e merge yok)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/madeincookware/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/madeincookware/`, `evidence/madeincookware/`, `todo/madeincookware.md`, `candidates/madeincookware-*.md` |

**Kapsam satırı:**  
`Made In · default · tema adı görünmedi (custom headless) · home→PDP→PLP→search→cart drawer→content→footer→mobile · obs yazıldı · 3vp/interact bekliyor`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/newsletter | [x] JSON | [ ] |
| Mega / search overlay / cart drawer / mobile menu | [x] JSON | [ ] interact |
| PDP `/products/the-stainless-sets/10-piece` | [x] JSON | [ ] |
| PDP frying pan + gift card | [x] JSON | [ ] |
| PLP `/collections/cookware` + `/collections/sets` | [x] JSON | [ ] |
| Search `/search?s=griddle` | [x] JSON | [ ] |
| Cart `/cart` | ⛔ home — drawer | [ ] |
| About `/pages/about-us` | [x] JSON | [ ] |
| Help `/pages/help-center` | [x] JSON | [ ] |
| Contact `/pages/contact-us` | [x] JSON · form **gönderilmedi** | [ ] |
| Warranty / returns / accessibility | [x] JSON | [ ] |
| Blog `/blogs` + Kamagata | [x] JSON | [ ] |
| Recycle LP | [x] JSON | [ ] |
| Reviews / locations / privacy host | ⛔ leftover | — |
| 404 `/pages/about` + qante | ⛔ candidates | — |
| Newsletter / contact submit | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 2 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 3 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 4 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 5 | promo-grid-banner | home | [ ] | [x] | reuse | [ ] |
| 6 | collection-nav-icon-buttons | home | [ ] | [x] | reuse | [ ] |
| 7 | media-video-hero | home | [ ] | [x] | reuse | [ ] |
| 8 | product-showcase-tabs | home | [ ] | [x] | reuse | [ ] |
| 9 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 10 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 11 | lead-capture-newsletter-band | home | [ ] | [x] | reuse | [ ] |
| 12 | editorial-rich-text | home | [ ] | [x] | reuse | [ ] |
| 13 | media-shop-the-feed | home | [ ] | [x] | reuse | [ ] |
| 14 | editorial-image-with-text-overlay | home | [ ] | [x] | reuse | [ ] |
| 15 | collection-nav-slider | home | [ ] | [x] | reuse | [ ] |
| 16 | blog-list-main | home | [ ] | [x] | reuse | [ ] |
| 17 | lead-capture-newsletter-band.2 | home | [ ] | [x] | reuse | [ ] |
| 18 | editorial-image-with-text | home | [ ] | [x] | reuse | [ ] |
| 19 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 20 | product-showcase-grid-featured.2 | home | [ ] | [x] | reuse | [ ] |
| 21 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 22 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 23 | product-showcase-grid-featured | PDP included | [ ] | [x] | reuse | [ ] |
| 24 | features-multicolumn | PDP | [ ] | [x] | reuse | [ ] |
| 25 | testimonial-quote-carousel | PDP press | [ ] | [x] | reuse | [ ] |
| 26 | media-shop-the-feed | PDP | [ ] | [x] | reuse | [ ] |
| 27 | editorial-image-with-text | PDP | [ ] | [x] | reuse | [ ] |
| 28 | faq-collapsible-tabs | PDP | [ ] | [x] | reuse | [ ] |
| 29 | product-showcase-related | PDP | [ ] | [x] | reuse | [ ] |
| 30 | product-info-main.2 | frying pan | [ ] | [x] | reuse | [ ] |
| 31 | product-info-main.3 | gift card | [ ] | [x] | reuse | [ ] |
| 32 | collection-nav-slider | collection | [ ] | [x] | reuse | [ ] |
| 33 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 34 | editorial-rich-text | collection | [ ] | [x] | reuse | [ ] |
| 35 | collection-banner | sets | [ ] | [x] | reuse | [ ] |
| 36 | search-results | search | [ ] | [x] | reuse | [ ] |
| 37–39 | about (3) | about-brand | [ ] | [x] | reuse | [ ] |
| 40–41 | help | faq-support | [ ] | [x] | reuse | [ ] |
| 42–43 | contact | contact | [ ] | [x] | reuse | [ ] |
| 44–47 | policy (4) | policy | [ ] | [x] | reuse | [ ] |
| 48–49 | blog list | blog-list | [ ] | [x] | reuse | [ ] |
| 50–51 | Kamagata | blog-post | [ ] | [x] | reuse | [ ] |
| 52 | recycle | landing-campaign | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Cookware click mega |
| global-predictive-search | initial, input | Popular + `griddle` ürünler |
| global-cart-drawer | initial, filled | boş + frying pan ATC |
| global-menu-drawer | open | 375/768 |
| product-info-main | changed | 13-Piece |
| faq-collapsible-tabs | changed | PDP + Help |

---

## Aday / leftover

[`candidates/madeincookware-leftovers.md`](../candidates/madeincookware-leftovers.md) · [`candidates/madeincookware-404s.md`](../candidates/madeincookware-404s.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / mega / search / cart / menu / FAQ / size interact
- [ ] PLP full grid (30k px) — toolbar karesi
- [ ] Compare Sets selector
- [ ] PDP reviews widget
- [ ] Newsletter / contact submit — **yapılmayacak** (PII)
