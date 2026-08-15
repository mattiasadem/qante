# Todo — Vollebak (vollebak.com)

*Kaynak:* https://vollebak.com · *Preset:* `default`  
*Tema (storefront):* **Vollebak [LIVE]** · `schema_name`: Horizon · `schema_version`: 3.1.0 · `theme_store_id`: 2481

**Durum:** Mod A walk kapandı — 39 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/13 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/vollebak/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Validate | `validate-schemas.mjs` → 65 temiz · 0 error · 0 warn |
| Gözlem / kanıt | 39 obs · 134 PNG |
| Parallel | yalnız vollebak paths |

**Kapsam satırı:**  
`Vollebak · default · Vollebak [LIVE] / Horizon 3.1.0 · home→PDP→PLP→search→cart→content→footer→mobile · 39 obs · 134 PNG · 0 yeni şema · leftover: tekrar overlay / FWAHBL / boş blog / 404`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/newsletter | ✅ | ✅ |
| Mega / search overlay / cart drawer / mobile menu | ✅ interact | ✅ (menu 1440 N/A) |
| PDP `/products/full-metal-jacket-copper-edition` | ✅ | ✅ |
| PLP `/collections/all` | ✅ | ✅ |
| Search `/search?q=jacket` | ✅ | ✅ |
| Cart `/cart` boş + drawer boş/dolu | ✅ | ✅ |
| About `/pages/about-us` | ✅ 2 temsilci | ✅ |
| Materials `/pages/material-technology` | ✅ 2 temsilci | ✅ |
| Lab `/pages/welcome-to-our-human-futures-lab` | ✅ 2 temsilci | ✅ |
| Spaceshop `/pages/spaceshop` | ✅ 2 temsilci | ✅ |
| FAQ `/pages/faqs` | ✅ + countries `changed` | ✅ |
| Contact `/pages/contact` | ✅ form **gönderilmedi** | ✅ |
| Shipping / returns / guarantee / size-guide | ✅ | ✅ |
| Policy privacy | ✅ Shopify native | ✅ |
| Blog `/blogs/lab` | ✅ boş index | ✅ |
| 404 / contact-us / blogs/news | ⛔ candidates | — |
| Newsletter / contact submit | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 2 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 3 | editorial-image-with-text-overlay | home stacked | [x] | [x] | reuse | [x] |
| 4 | editorial-image-with-text-overlay.2 | home Humanoids | [x] | [x] | reuse | [x] |
| 5 | editorial-image-with-text-overlay.3 | home product banner | [x] | [x] | reuse | [x] |
| 6 | lead-capture-newsletter-band | home You're in | [x] | [x] | reuse | [x] |
| 7 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 8 | testimonial-quote-carousel | home press | [x] | [x] | reuse | [x] |
| 9 | editorial-rich-text | footer band | [x] | [x] | reuse | [x] |
| 10 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 11 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 12 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 13 | global-menu-drawer | home 375/768 | [x] | [x] | reuse | [x] |
| 14 | collection-banner | collection | [x] | [x] | reuse | [x] |
| 15 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 16 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 17 | editorial-rich-text | PDP tech | [x] | [x] | reuse | [x] |
| 18 | editorial-image-with-text-overlay | PDP story | [x] | [x] | reuse | [x] |
| 19 | product-showcase-related | PDP | [x] | [x] | reuse | [x] |
| 20 | search-results | search | [x] | [x] | reuse | [x] |
| 21 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 22 | product-showcase-grid-featured | cart | [x] | [x] | reuse | [x] |
| 23–24 | about editorial | about-brand | [x] | [x] | reuse | [x] |
| 25–26 | materials | materials | [x] | [x] | reuse | [x] |
| 27–28 | lab | lab | [x] | [x] | reuse | [x] |
| 29–30 | spaceshop | spaceshop | [x] | [x] | reuse | [x] |
| 31 | faq-collapsible-tabs | faq-support | [x] | [x] | reuse | [x] |
| 32–33 | contact | contact | [x] | [x] | reuse | [x] |
| 34–37 | shipping/returns/guarantee/size | content | [x] | [x] | reuse | [x] |
| 38 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 39 | blog-list-main | blog-list | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop hover → 3 kolon mega |
| global-predictive-search | initial, input | boş overlay; `jacket` → 18 sonuç + View all |
| global-cart-drawer | initial, filled | boş; FMJ Copper S £1,495 (beden S sonra ATC UI) |
| global-menu-drawer | open | 375/768 hamburger (1440 N/A) |
| faq-collapsible-tabs | changed | countries → worldwide / checkout address |

---

## Aday / leftover

[`candidates/vollebak-leftovers.md`](../candidates/vollebak-leftovers.md) · [`candidates/vollebak-404s.md`](../candidates/vollebak-404s.md)

---

## Evidence backlog

- [x] Claiming 39 obs resmi 3vp — **134 PNG**
- [x] Overlay / mega / FAQ interact
- [ ] Home tekrar ai-hero-banner’lar (aynı tip)
- [ ] FMJ kalan hikâye + Size+Fit
- [ ] FWAHBL campaign PDP
- [ ] Cart qty `changed`
- [ ] PLP filter panel `changed`
- [ ] Shop accordion 375 (yazılı Shop koleksiyona gider)
- [ ] Newsletter / contact submit — **yapılmayacak** (PII)
