# Todo — Ghia (ghia.com → drinkghia.com)

*Kaynak (liste):* https://ghia.com · *Canlı vitrin:* https://drinkghia.com · *Preset:* `default`  
*Tema (storefront):* **drink-ghia/main** · `schema_name`: Dawn · `schema_version`: 6.0.2 · `theme_store_id`: null (custom Dawn) · shop `drinkghia.myshopify.com` · theme id `140287115498`

**Durum:** Mod A walk yazıldı — 38 obs · 3vp + interact sırada  
**PR:** (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/ghia/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/ghia/`, `evidence/ghia/`, `todo/ghia.md`, `candidates/ghia-*.md` |

**Kapsam satırı:**  
`Ghia · default · drink-ghia/main / Dawn 6.0.2 custom · ghia.com parked → drinkghia.com · home→PDP→PLP→search→cart drawer→content→footer→mobile · 38 obs · 0 yeni şema · leftover: parked domain / Hue+Okendo reviews / stockists / 404 empty / cart page 0px`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/press | [x] JSON | [ ] capture |
| Mega / search / cart drawer / mobile menu | [x] JSON | [ ] interact |
| PDP `/products/ghia` | [x] JSON | [ ] |
| PLP `/collections/all` | [x] JSON | [ ] |
| Search `/search?q=spritz` | [x] JSON | [ ] |
| Cart `/cart` | ⛔ drawer — page 0px | [ ] empty+filled |
| About `/pages/our-story` | [x] JSON | [ ] |
| Careers `/pages/careers` | [x] JSON | [ ] |
| FAQ `/pages/faq` | [x] JSON | [ ] |
| Contact `/pages/contact` | [x] JSON · form **gönderilmedi** | [ ] |
| Subscribe `/pages/subscribe` | [x] JSON | [ ] |
| Cookbook `/pages/riviera-cookbook` | [x] JSON | [ ] |
| Custom bundle `/pages/custom-bundle` | [x] JSON | [ ] |
| Recipes + watermelon spritz | [x] JSON | [ ] |
| Policy `/pages/privacy-policy` | [x] JSON | [ ] |
| Stockists / reviews / referral / 404 | ⛔ leftover | — |
| ghia.com parked | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | promo-scrolling-marquee | home | [ ] | [x] | reuse | [ ] |
| 5 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 6 | editorial-image-with-text | home | [ ] | [x] | reuse | [ ] |
| 7 | product-showcase-grid-featured.2 | home | [ ] | [x] | reuse | [ ] |
| 8 | hero-slideshow.2 | home | [ ] | [x] | reuse | [ ] |
| 9 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 10 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 11 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 12 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 13 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 14 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 15 | promo-scrolling-marquee | product-detail | [ ] | [x] | reuse | [ ] |
| 16 | editorial-image-with-text | product-detail | [ ] | [x] | reuse | [ ] |
| 17 | features-slider-multicolumn | product-detail | [ ] | [x] | reuse | [ ] |
| 18 | faq-collapsible-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 19 | blog-list-main | product-detail | [ ] | [x] | reuse | [ ] |
| 20 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 21 | search-results | search | [ ] | [x] | reuse | [ ] |
| 22 | editorial-rich-text | about-brand | [ ] | [x] | reuse | [ ] |
| 23 | editorial-image-with-text | about-brand | [ ] | [x] | reuse | [ ] |
| 24 | faq-collapsible-tabs | faq-support | [ ] | [x] | reuse | [ ] |
| 25–26 | contact (2) | contact | [ ] | [x] | reuse | [ ] |
| 27–30 | subscribe (4) | landing-campaign | [ ] | [x] | reuse | [ ] |
| 31–34 | cookbook (4) | landing-campaign | [ ] | [x] | reuse | [ ] |
| 35 | commerce-tools-products-bundle | landing-campaign | [ ] | [x] | reuse | [ ] |
| 36–37 | recipes list + post | blog-* | [ ] | [x] | reuse | [ ] |
| 38 | page-content-main | policy | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişecekler)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop hover |
| global-predictive-search | initial, input | `spritz` |
| global-cart-drawer | initial, filled | Original Apéritif ATC |
| global-menu-drawer | open | 375+768 |
| faq-collapsible-tabs (PDP) | changed | What is an Apéritif? |
| faq-collapsible-tabs (FAQ) | changed | There’s Really No Alcohol? |

---

## Aday / leftover

[`candidates/ghia-leftovers.md`](../candidates/ghia-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / mega / cart / search / menu / FAQ interact
- [ ] Newsletter / contact / referral submit — **yapılmayacak** (PII)
