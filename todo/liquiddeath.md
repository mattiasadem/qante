# Todo — Liquid Death

*Kaynak:* https://liquiddeath.com · *Preset:* default · *Slug:* liquiddeath

**Durum:** Mod A walk + resmi 3vp bitti  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/liquiddeath/default/` |
| Capture | resmi `capture-observation.mjs` |
| Shop | liquiddeath.com · Shopify theme t/743 |
| Platform | Canlı Shopify (Theme Store demo değil; DTC-69 dışı) |
| Parallel | yalnız `observations/liquiddeath/`, `evidence/liquiddeath/`, `todo/liquiddeath.md`, `candidates/liquiddeath-leftovers.md` |

**Kapsam satırı:**  
`Liquid Death · default · home→PDP scary-strawberry→PLP beverages+merch→search yok→Rebuy cart drawer→manifesto/faq/country-club→blog boş→footer · 28 obs · 83 PNG · 0 yeni şema · leftover: candidates/liquiddeath-leftovers.md`

---

## Walkthrough checklist

| Rota | Durum | 3vp |
|---|---|---|
| Home (hero, cans, recycling, merch rebuy, featured pages, footer) | [x] | [x] |
| Header + cart drawer + mobile menu | [x] | [x] (menu 375/768) |
| PDP `/products/scary-strawberry` | [x] | [x] |
| PLP `/collections/beverages` | [x] | [x] |
| Merch `/collections/merch-store` | [x] | [x] |
| Search `/search?q=water` | ⛔ redirect home | — |
| Cart drawer (Rebuy flyout) | [x] | [x] |
| Content `/pages/manifesto` | [x] | [x] |
| FAQ `/pages/faq` | [x] | [x] |
| Country Club `/pages/country-club` | [x] | [x] |
| Blog `/blogs/news` (boş) | [x] | [x] |
| Footer (home) | [x] | [x] |

---

## Bileşen roster (28)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 2 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 3 | editorial-rich-text | home | [x] | [x] | reuse | [x] |
| 4 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 5 | editorial-image-with-text-overlay | home | [x] | [x] | reuse | [x] |
| 6 | editorial-rich-text.2 | home | [x] | [x] | reuse | [x] |
| 7 | product-showcase-related | home | [x] | [x] | reuse | [x] |
| 8 | collection-nav-cards | home | [x] | [x] | reuse | [x] |
| 9 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 10 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 11 | global-menu-drawer | home 375/768 | [x] | [x] | reuse | [x] |
| 12 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 13 | editorial-image-with-text-overlay | product-detail | [x] | [x] | reuse | [x] |
| 14 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 15 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 16 | editorial-image-with-text-overlay | collection-merch | [x] | [x] | reuse | [x] |
| 17 | product-showcase-grid-plp | collection-merch | [x] | [x] | reuse | [x] |
| 18 | blog-list-main | blog-list | [x] | [x] | reuse | [x] |
| 19 | media-video-hero | about-brand | [x] | [x] | reuse | [x] |
| 20 | editorial-rich-text | about-brand | [x] | [x] | reuse | [x] |
| 21 | social-proof-brand-logos | about-brand | [x] | [x] | reuse | [x] |
| 22 | editorial-image-with-text-overlay | about-brand | [x] | [x] | reuse | [x] |
| 23 | testimonial-quote-carousel | about-brand | [x] | [x] | reuse | [x] |
| 24 | product-showcase-related | about-brand | [x] | [x] | reuse | [x] |
| 25 | editorial-rich-text | faq-support | [x] | [x] | reuse | [x] |
| 26 | faq-collapsible-tabs | faq-support | [x] | [x] | reuse | [x] |
| 27 | faq-collapsible-tabs.2 | faq-support | [x] | [x] | reuse | [x] |
| 28 | lead-capture-form | content | [x] | [x] | reuse | [x] |

*Menu drawer 1440 yok (opener `lg:hidden`).*

---

## Aday / şemaya sığmayan

[`candidates/liquiddeath-leftovers.md`](../candidates/liquiddeath-leftovers.md)

---

## Evidence backlog

- [x] Tüm walk route 3vp (83 PNG)
- [x] `npm run validate` temiz
