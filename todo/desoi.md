# Todo — De Soi (desoi)

*Kaynak (liste):* https://desoi.com · *Canlı vitrin:* https://drinkdesoi.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **Drink De Soi - New Theme Dev** · `schema_name`: **Hyper** · `schema_version`: **1.3.2** · `theme_store_id`: **null** · role `main` · id `185084608879`  
*Shop:* `drinkdesoi.myshopify.com`

**Durum:** Mod A walk complete — 66 obs · resmi 3vp · interact doğrulandı · validator  
**PR:** draft https://github.com/mattiasadem/qante/pull/98 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/desoi/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/desoi/`, `evidence/desoi/`, `todo/desoi.md`, `candidates/desoi-*.md` |

**Kapsam satırı:**  
`De Soi · default · Drink De Soi - New Theme Dev / Hyper 1.3.2 custom (theme_store_id null) · listed desoi.com parked → live drinkdesoi.com · home→PDP→PLP→search→Rebuy cart→content→footer→mobile · 66 obs · 0 yeni şema · 3vp + interact`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/marquee/tabs/featured/press/feed/footer | [x] obs | [x] capture |
| Header kapalı + Shop mega 1440 | [x] obs | [x] interact |
| Rebuy cart empty + filled | [x] obs | [x] interact (375 filled missing) |
| Mobile hamburger 375+768 | [x] obs | [x] interact |
| PDP Spritz Italiano | [x] obs | [x] capture + Skio one-time |
| PLP `/collections/best-sellers` | [x] obs | [x] capture |
| Search `/search?q=spritz` | [x] obs | [x] capture |
| About `/pages/about-us` | [x] obs | [x] capture |
| FAQ `/pages/faq` ×5 | [x] obs | [x] + first accordion |
| Contact + newsletter (PII dur) | [x] obs | [x] capture |
| Subscribe LP + quiz | [x] obs | [x] quiz 375/768; 1440 changed missing |
| Stories + adaptogens post | [x] obs | [x] capture |
| Recipes + Peachy Keen | [x] obs | [x] capture |
| Privacy + shipping | [x] obs | [x] capture |
| Reviews / find-us / wholesale / 404 | [x] obs | leftover notları |
| Header search | ⛔ yok | leftover |
| Native `/cart` page | ⛔ Rebuy + `/?viewcart=true` | leftover |
| `desoi.com` listed URL | ⛔ parked / for sale | leftover |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | promo-scrolling-marquee | home | [x] | [x] | reuse | [x] |
| 5 | editorial-custom-content | home | [x] | [x] | reuse | [x] |
| 6 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 7 | before-after-slider | home | [x] | [x] | reuse | [x] |
| 8 | promo-banner-tabs | home | [x] | [x] | reuse | [x] |
| 9 | product-showcase-tabs | home | [x] | [x] | reuse | [x] |
| 10–11 | custom-content-2 + marquee-2 | home | [x] | [x] | reuse | [x] |
| 12 | editorial-rich-text | home | [x] | [x] | reuse | [x] |
| 13 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 14 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 15–16 | image-with-text 2–3 | home | [x] | [x] | reuse | [x] |
| 17 | social-proof-brand-logos | home | [x] | [x] | reuse | [x] |
| 18 | media-shop-the-feed | home | [x] | [x] | reuse | [x] |
| 19 | hero-slideshow-2 | home | [x] | [x] | reuse | [x] |
| 20 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 21 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 22 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 23 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 24–30 | PDP marquee/benefits/occasions/related/feed | product-detail | [x] | [x] | reuse | [x] |
| 31–33 | breadcrumbs / collection slider / PLP grid | collection | [x] | [x] | reuse | [x] |
| 34 | search-results | search | [x] | [x] | reuse | [x] |
| 35–38 | about hero + founders + mission | about-brand | [x] | [x] | reuse | [x] |
| 39–46 | FAQ icons + 5 accordion | faq-support | [x] | [x] | reuse | [x] |
| 47–66 | contact / policy / 404 / LP / blog | * | [x] | [x] | reuse | [x] |

---

## Aday / leftover

[`candidates/desoi-leftovers.md`](../candidates/desoi-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp
- [x] Mega / Rebuy cart / hamburger / tabs / FAQ / quiz / Skio interact
- [x] Header search — yok
- [x] Newsletter / contact / quiz e-posta — **yapılmayacak** (PII)
- 375 cart filled + quiz 1440 changed — missingStates (ikinci deneme)
