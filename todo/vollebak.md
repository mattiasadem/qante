# Todo — Vollebak (vollebak.com)

*Kaynak:* https://vollebak.com · *Preset:* `default`  
*Tema (storefront):* **Vollebak [LIVE]** · `schema_name`: Horizon · `schema_version`: 3.1.0 · `theme_store_id`: 2481

**Durum:** Mod A walk + claiming obs yazıldı — resmi 3vp / interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/vollebak/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/vollebak/`, `evidence/vollebak/`, `todo/vollebak.md`, `candidates/vollebak-*.md` |

**Kapsam satırı:**  
`Vollebak · default · Vollebak [LIVE] / Horizon 3.1.0 · home→PDP→PLP→search→cart→content→footer→mobile · 39 obs · 0 yeni şema · leftover: tekrar overlay’ler / FWAHBL campaign / boş blog / 404`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/newsletter | ✅ obs | ⬜ capture |
| Mega / search overlay / cart drawer / mobile menu | ✅ obs + interact adımları | ⬜ |
| PDP `/products/full-metal-jacket-copper-edition` | ✅ obs | ⬜ |
| PLP `/collections/all` | ✅ obs | ⬜ |
| Search `/search?q=jacket` | ✅ obs | ⬜ |
| Cart `/cart` boş + drawer | ✅ obs | ⬜ |
| About `/pages/about-us` | ✅ 2 temsilci | ⬜ |
| Materials `/pages/material-technology` | ✅ 2 temsilci | ⬜ |
| Lab `/pages/welcome-to-our-human-futures-lab` | ✅ 2 temsilci | ⬜ |
| Spaceshop `/pages/spaceshop` | ✅ 2 temsilci | ⬜ |
| FAQ `/pages/faqs` | ✅ + changed adım | ⬜ |
| Contact `/pages/contact` | ✅ form **gönderilmedi** | ⬜ |
| Shipping / returns / guarantee / size-guide | ✅ | ⬜ |
| Policy privacy | ✅ Shopify native | ⬜ |
| Blog `/blogs/lab` | ✅ boş index | ⬜ |
| 404 / contact-us / blogs/news | ⛔ candidates | — |
| Newsletter / contact submit | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 2 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 3 | editorial-image-with-text-overlay | home stacked | [ ] | [x] | reuse | [ ] |
| 4 | editorial-image-with-text-overlay.2 | home Humanoids | [ ] | [x] | reuse | [ ] |
| 5 | editorial-image-with-text-overlay.3 | home product banner | [ ] | [x] | reuse | [ ] |
| 6 | lead-capture-newsletter-band | home You're in | [ ] | [x] | reuse | [ ] |
| 7 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 8 | testimonial-quote-carousel | home press | [ ] | [x] | reuse | [ ] |
| 9 | editorial-rich-text | footer band | [ ] | [x] | reuse | [ ] |
| 10 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 11 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 12 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 13 | global-menu-drawer | home 375/768 | [ ] | [x] | reuse | [ ] |
| 14 | collection-banner | collection | [ ] | [x] | reuse | [ ] |
| 15 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 16 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 17 | editorial-rich-text | PDP tech | [ ] | [x] | reuse | [ ] |
| 18 | editorial-image-with-text-overlay | PDP story | [ ] | [x] | reuse | [ ] |
| 19 | product-showcase-related | PDP | [ ] | [x] | reuse | [ ] |
| 20 | search-results | search | [ ] | [x] | reuse | [ ] |
| 21 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 22 | product-showcase-grid-featured | cart | [ ] | [x] | reuse | [ ] |
| 23–24 | about editorial | about-brand | [ ] | [x] | reuse | [ ] |
| 25–26 | materials | materials | [ ] | [x] | reuse | [ ] |
| 27–28 | lab | lab | [ ] | [x] | reuse | [ ] |
| 29–30 | spaceshop | spaceshop | [ ] | [x] | reuse | [ ] |
| 31 | faq-collapsible-tabs | faq-support | [ ] | [x] | reuse | [ ] |
| 32–33 | contact | contact | [ ] | [x] | reuse | [ ] |
| 34–37 | shipping/returns/guarantee/size | content | [ ] | [x] | reuse | [ ] |
| 38 | page-content-main | policy | [ ] | [x] | reuse | [ ] |
| 39 | blog-list-main | blog-list | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop hover mega |
| global-predictive-search | input | `jacket` |
| global-cart-drawer | initial, filled | boş + FMJ ATC |
| global-menu-drawer | open | 375/768 hamburger |
| faq-collapsible-tabs | changed | ilk soru |

---

## Aday / leftover

[`candidates/vollebak-leftovers.md`](../candidates/vollebak-leftovers.md) · [`candidates/vollebak-404s.md`](../candidates/vollebak-404s.md)

---

## Evidence backlog

- [ ] Claiming 39 obs resmi 3vp
- [ ] Overlay / mega / FAQ interact
- [ ] Home tekrar ai-hero-banner’lar (aynı tip)
- [ ] FMJ kalan hikâye blokları + Size+Fit
- [ ] FWAHBL campaign PDP
- [ ] Cart qty `changed`
- [ ] PLP filter panel `changed`
- [ ] Newsletter / contact submit — **yapılmayacak** (PII)
