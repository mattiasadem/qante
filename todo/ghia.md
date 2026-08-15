# Todo — Ghia (ghia.com → drinkghia.com)

*Kaynak (liste):* https://ghia.com · *Canlı vitrin:* https://drinkghia.com · *Preset:* `default`  
*Tema (storefront):* **drink-ghia/main** · `schema_name`: Dawn · `schema_version`: 6.0.2 · `theme_store_id`: null (custom Dawn) · shop `drinkghia.myshopify.com` · theme id `140287115498`

**Durum:** Mod A walk kapandı — 38 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/33 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/ghia/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/ghia/`, `evidence/ghia/`, `todo/ghia.md`, `candidates/ghia-*.md` |

**Kapsam satırı:**  
`Ghia · default · drink-ghia/main / Dawn 6.0.2 custom · ghia.com parked → drinkghia.com · home→PDP→PLP→search→cart drawer→content→footer→mobile · 38 obs · 141 PNG · 0 yeni şema · leftover: parked / Hue+Okendo / stockists / 404 empty / cart page 0px / predictive empty`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/press | ✅ | ✅ |
| Mega / search / cart drawer / mobile menu | ✅ interact | ✅ (menu 1440 N/A · search öneri yok) |
| PDP `/products/ghia` | ✅ + Subscribe 15% | ✅ |
| PLP `/collections/all` | ✅ | ✅ |
| Search `/search?q=spritz` | ✅ 30 sonuç | ✅ |
| Cart `/cart` | ⛔ page 0px — drawer | ✅ empty + filled |
| About `/pages/our-story` | ✅ | ✅ |
| Careers `/pages/careers` | ✅ | ✅ |
| FAQ `/pages/faq` | ✅ + no-alcohol | ✅ |
| Contact `/pages/contact` | ✅ form **gönderilmedi** | ✅ |
| Subscribe `/pages/subscribe` | ✅ | ✅ |
| Cookbook `/pages/riviera-cookbook` | ✅ (tour leftover) | ✅ |
| Custom bundle `/pages/custom-bundle` | ✅ | ✅ |
| Recipes + watermelon spritz | ✅ | ✅ |
| Policy `/pages/privacy-policy` | ✅ | ✅ |
| Stockists / reviews / referral / 404 | ⛔ leftover | — |
| ghia.com parked | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | promo-scrolling-marquee | home | [x] | [x] | reuse | [x] |
| 5 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 6 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 7 | product-showcase-grid-featured.2 | home | [x] | [x] | reuse | [x] |
| 8 | hero-slideshow.2 | home | [x] | [x] | reuse | [x] |
| 9 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 10 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 11 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 12 | global-predictive-search | home | [x] | [x] | reuse | [x] leftover |
| 13 | global-menu-drawer | home | [x] 375+768 | [x] | reuse | [x] |
| 14 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 15 | promo-scrolling-marquee | product-detail | [x] | [x] | reuse | [x] |
| 16 | editorial-image-with-text | product-detail | [x] | [x] | reuse | [x] |
| 17 | features-slider-multicolumn | product-detail | [x] | [x] | reuse | [x] |
| 18 | faq-collapsible-tabs | product-detail | [x] | [x] | reuse | [x] |
| 19 | blog-list-main | product-detail | [x] | [x] | reuse | [x] |
| 20 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 21 | search-results | search | [x] | [x] | reuse | [x] |
| 22 | editorial-rich-text | about-brand | [x] | [x] | reuse | [x] |
| 23 | editorial-image-with-text | about-brand | [x] | [x] | reuse | [x] |
| 24 | faq-collapsible-tabs | faq-support | [x] | [x] | reuse | [x] |
| 25–26 | contact (2) | contact | [x] | [x] | reuse | [x] |
| 27–30 | subscribe (4) | landing-campaign | [x] | [x] | reuse | [x] |
| 31–34 | cookbook (4) | landing-campaign | [x] | [x] | reuse | [x] |
| 35 | commerce-tools-products-bundle | landing-campaign | [x] | [x] | reuse | [x] |
| 36–37 | recipes list + post | blog-* | [x] | [x] | reuse | [x] |
| 38 | page-content-main | policy | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop hover — CATEGORIES + 4 featured clover |
| global-predictive-search | initial, input | `spritz` header'da; **öneri listesi yok** |
| global-cart-drawer | initial, filled | boş $0; Original Apéritif $38; $22 to free ship |
| global-menu-drawer | open | 375/768 hamburger (1440 0px) |
| product-info-main | changed | Subscribe 15% — $32.30 / 3 Months |
| faq-collapsible-tabs (PDP) | changed | What is an Apéritif? açık |
| faq-collapsible-tabs (FAQ) | changed | There’s Really No Alcohol? |

---

## Aday / leftover

[`candidates/ghia-leftovers.md`](../candidates/ghia-leftovers.md)

- ghia.com parked GoDaddy lander
- Hue / Okendo reviews (home + PDP + `/pages/reviews`)
- Aisle stockists
- 404 template height 0
- `/cart` main 0px — drawer only
- Predictive öneri listesi yok
- Referral PII
- Cookbook book-tour
- Lightwidget Instagram 0px

---

## Evidence backlog

- [x] Claiming obs resmi 3vp — **141 PNG** (static + interact)
- [x] Overlay / mega / cart / search / menu / FAQ / subscribe interact
- [x] Predictive suggest yoklandı — liste yok (leftover)
- [ ] Cart qty `changed` (doldurulmadı)
- [ ] Bundle builder fill (doldurulmadı)
- [ ] Newsletter / contact / referral submit — **yapılmayacak** (PII)
