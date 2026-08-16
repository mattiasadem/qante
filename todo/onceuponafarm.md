# Todo — Once Upon a Farm (onceuponafarm)

*Kaynak (liste):* https://onceuponafarm.com · *Canlı vitrin:* https://onceuponafarmorganics.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **`[ 1.0.1 ]`** · `schema_name`: **Horizon** · `schema_version`: **1.0.0** · `theme_store_id`: **null** · role `main` · id `131083763794`  
*Shop:* `uponafarm-manufactur.myshopify.com`

**Durum:** Mod A walk yazılıyor — 36 obs · resmi 3vp sırada · leftover kayıtlı  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/onceuponafarm/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/onceuponafarm/`, `evidence/onceuponafarm/`, `todo/onceuponafarm.md`, `candidates/onceuponafarm-*.md` |

**Kapsam satırı:**  
`Once Upon a Farm · default · [ 1.0.1 ] / Horizon 1.0.0 custom (theme_store_id null) · listed onceuponafarm.com parked → live onceuponafarmorganics.com · home→PDP→PLP→search→cart→content→footer→mobile · 36 obs · 0 yeni şema`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/marquee/stage/category/bestsellers/quotes/subscribe | [x] obs | [ ] capture |
| Header kapalı + Shop All mega 1440 | [x] obs | [ ] interact |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| Predictive search open + pouch | [x] obs | [ ] interact |
| Mobile hamburger 375+768 | [x] obs | [ ] interact |
| PDP Baby Starter Box + 16/24 Pack | [x] obs | [ ] capture + changed |
| PLP `/collections/refrigerated-pouches` | [x] obs | [ ] capture |
| Search `/search?q=pouch` | [x] obs | [ ] capture |
| Cart `/cart` empty + you-may-also-like | [x] obs | [ ] capture |
| About `/pages/our-story` | [x] obs | [ ] capture |
| FAQ `/pages/faq-page` General | [x] obs | [ ] capture |
| Policy `/pages/shipping-returns` | [x] obs | [ ] capture |
| Blog list + school-lunch post | [x] obs | [ ] capture |
| Footer (cart URL — home 35px) | [x] obs | [ ] capture |
| `onceuponafarm.com` listed | ⛔ parked | leftover |
| 404 / Kustomer / builder / quiz / locator / Yotpo | ⛔ | leftover |
| Newsletter / account / checkout | ⛔ PII | — |

---

## Bileşen roster (36)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | [x] | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | [x] | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | [x] | [ ] |
| 4 | promo-scrolling-marquee | home | [ ] | [x] | [x] | [ ] |
| 5 | collection-nav-cards | home | [ ] | [x] | [x] | [ ] |
| 6 | editorial-image-with-text | home | [ ] | [x] | [x] | [ ] |
| 7 | collection-nav-cards.2 | home | [ ] | [x] | [x] | [ ] |
| 8 | product-showcase-grid-featured | home | [ ] | [x] | [x] | [ ] |
| 9 | testimonial-quote-carousel | home | [ ] | [x] | [x] | [ ] |
| 10 | editorial-image-with-text-overlay | home | [ ] | [x] | [x] | [ ] |
| 11 | footer-columns-newsletter | home | [ ] | [x] | [x] | [ ] |
| 12 | global-cart-drawer | home | [ ] | [x] | [x] | [ ] |
| 13 | global-predictive-search | home | [ ] | [x] | [x] | [ ] |
| 14 | global-menu-drawer | home | [ ] | [x] | [x] | [ ] |
| 15 | product-info-main | product-detail | [ ] | [x] | [x] | [ ] |
| 16 | media-video-hero | product-detail | [ ] | [x] | [x] | [ ] |
| 17 | collection-nav-cards | product-detail | [ ] | [x] | [x] | [ ] |
| 18 | promo-scrolling-marquee | product-detail | [ ] | [x] | [x] | [ ] |
| 19 | faq-collapsible-tabs | product-detail | [ ] | [x] | [x] | [ ] |
| 20 | collection-nav-cards | collection | [ ] | [x] | [x] | [ ] |
| 21 | product-showcase-grid-plp | collection | [ ] | [x] | [x] | [ ] |
| 22 | search-results | search | [ ] | [x] | [x] | [ ] |
| 23 | cart-page-main | cart | [ ] | [x] | [x] | [ ] |
| 24 | product-showcase-related | cart | [ ] | [x] | [x] | [ ] |
| 25–32 | about-brand ×8 | about-brand | [ ] | [x] | [x] | [ ] |
| 33 | faq-collapsible-tabs | faq-support | [ ] | [x] | [x] | [ ] |
| 34 | page-content-main | policy | [ ] | [x] | [x] | [ ] |
| 35 | blog-list-main | blog-list | [ ] | [x] | [x] | [ ] |
| 36 | blog-post-main | blog-post | [ ] | [x] | [x] | [ ] |

---

## Aday / leftover

[`candidates/onceuponafarm-leftovers.md`](../candidates/onceuponafarm-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Interact: mega / search / cart empty+filled+qty / menu / PDP 16→24
- [ ] `npm run validate`
- [ ] Newsletter / account / checkout — **yapılmayacak** (PII)
