# Todo — De Soi (desoi)

*Kaynak (liste):* https://desoi.com · *Canlı vitrin:* https://drinkdesoi.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **Drink De Soi - New Theme Dev** · `schema_name`: **Hyper** · `schema_version`: **1.3.2** · `theme_store_id`: **null** · role `main` · id `185084608879`  
*Shop:* `drinkdesoi.myshopify.com`

**Durum:** Mod A walk — observation yazıldı; resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/desoi/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/desoi/`, `evidence/desoi/`, `todo/desoi.md`, `candidates/desoi-*.md` |

**Kapsam satırı:**  
`De Soi · default · Drink De Soi - New Theme Dev / Hyper 1.3.2 custom (theme_store_id null) · listed desoi.com parked → live drinkdesoi.com · home→PDP→PLP→search→Rebuy cart→content→footer→mobile · 66 obs · 0 yeni şema`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/marquee/tabs/featured/press/feed/footer | [x] obs | [ ] capture |
| Header kapalı + Shop mega 1440 | [x] obs | [ ] interact |
| Rebuy cart empty + filled | [x] obs | [ ] interact |
| Mobile hamburger 375+768 | [x] obs | [ ] interact |
| PDP Spritz Italiano | [x] obs | [ ] capture |
| PLP `/collections/best-sellers` | [x] obs | [ ] capture |
| Search `/search?q=spritz` | [x] obs | [ ] capture |
| About `/pages/about-us` | [x] obs | [ ] capture |
| FAQ `/pages/faq` ×5 | [x] obs | [ ] + first accordion |
| Contact + newsletter (PII dur) | [x] obs | [ ] capture |
| Subscribe LP + quiz | [x] obs | [ ] quiz PII dur |
| Stories + adaptogens post | [x] obs | [ ] capture |
| Recipes + Peachy Keen | [x] obs | [ ] capture |
| Privacy + shipping | [x] obs | [ ] capture |
| Reviews / find-us / wholesale / 404 | [x] obs | leftover notları |
| Header search | ⛔ yok | leftover |
| Native `/cart` page | ⛔ Rebuy + `/?viewcart=true` | leftover |
| `desoi.com` listed URL | ⛔ parked / for sale | leftover |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | promo-scrolling-marquee | home | [ ] | [x] | reuse | [ ] |
| 5 | editorial-custom-content | home | [ ] | [x] | reuse | [ ] |
| 6 | editorial-image-with-text | home | [ ] | [x] | reuse | [ ] |
| 7 | before-after-slider | home | [ ] | [x] | reuse | [ ] |
| 8 | promo-banner-tabs | home | [ ] | [x] | reuse | [ ] |
| 9 | product-showcase-tabs | home | [ ] | [x] | reuse | [ ] |
| 10–11 | custom-content-2 + marquee-2 | home | [ ] | [x] | reuse | [ ] |
| 12 | editorial-rich-text | home | [ ] | [x] | reuse | [ ] |
| 13 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 14 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 15–16 | image-with-text 2–3 | home | [ ] | [x] | reuse | [ ] |
| 17 | social-proof-brand-logos | home | [ ] | [x] | reuse | [ ] |
| 18 | media-shop-the-feed | home | [ ] | [x] | reuse | [ ] |
| 19 | hero-slideshow-2 | home | [ ] | [x] | reuse | [ ] |
| 20 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 21 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 22 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 23 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 24–30 | PDP marquee/benefits/occasions/related/feed | product-detail | [ ] | [x] | reuse | [ ] |
| 31–33 | breadcrumbs / collection slider / PLP grid | collection | [ ] | [x] | reuse | [ ] |
| 34 | search-results | search | [ ] | [x] | reuse | [ ] |
| 35–38 | about hero + founders + mission | about-brand | [ ] | [x] | reuse | [ ] |
| 39–46 | FAQ icons + 5 accordion | faq-support | [ ] | [x] | reuse | [ ] |
| 47–66 | contact / policy / 404 / LP / blog | * | [ ] | [x] | reuse | [ ] |

---

## Aday / leftover

[`candidates/desoi-leftovers.md`](../candidates/desoi-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Mega / Rebuy cart / hamburger / tabs / FAQ / quiz interact
- [ ] Header search — yok
- [ ] Newsletter / contact / quiz e-posta — **yapılmayacak** (PII)
