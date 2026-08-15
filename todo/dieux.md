# Todo — Dieux (dieuxskin.com)

*Kaynak:* https://www.dieuxskin.com · *Preset:* `default`  
*Tema (storefront):* **Live Theme** · `schema_name`: Dieux · `schema_version`: 3.0 · `theme_store_id`: null (custom)

**Durum:** Mod A walk yazıldı — resmi 3vp + interact sırada / kısmi  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/dieux/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/dieux/`, `evidence/dieux/`, `todo/dieux.md`, `candidates/dieux-*.md` |

**Kapsam satırı:**  
`Dieux · default · Live Theme / schema_name Dieux 3.0 · custom Shopify · home→PDP→PLP→search→cart drawer→content→footer→mobile · 40 obs · 0 yeni şema · leftover: sunscreener tool / Stamped reviews / /cart 302 / campaign LPs`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/press/UGC | ✅ obs | ⬜ capture |
| Mega / search overlay / cart drawer / mobile menu | ✅ interact adımları | ⬜ |
| PDP `/products/instant-angel` | ✅ + 100ML | ⬜ |
| PLP `/collections/skincare` | ✅ | ⬜ |
| Search `/search?q=angel` | ✅ 11 sonuç | ⬜ |
| Cart `/cart` | ⛔ home 302 — drawer | ⬜ drawer |
| About `/pages/founders` | ✅ | ⬜ |
| FAQ `/pages/faqs` | ✅ + ilk soru | ⬜ |
| Clinical `/pages/clinical-studies` | ✅ | ⬜ |
| Contact `/pages/contact-us` | ✅ form **gönderilmedi** | ⬜ |
| Quiz `/pages/moisturizer-finder` | ✅ Octane same-origin | ⬜ |
| Sunscreener | ✅ tool + support + waitlist + FAQ | ⬜ |
| Blog `/blogs/beauty` + photosensitivity | ✅ | ⬜ |
| Policy privacy + FDA | ✅ | ⬜ |
| 404 | ⛔ aday + `page-content-main` | ⬜ |
| Moisturizer LP | ✅ hero/marquee/layer/FAQ | ⬜ |
| Gift guide / deals / TikTok LP / opt-out | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 4 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 5 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 6 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 7 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 8 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 9 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 10 | social-proof-brand-logos | home | [ ] | [x] | reuse | [ ] |
| 11 | media-shop-the-feed | home | [ ] | [x] | reuse | [ ] |
| 12 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 13 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 14 | editorial-image-with-text | product-detail | [ ] | [x] | reuse | [ ] |
| 15 | faq-collapsible-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 16 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 17 | features-multicolumn | product-detail | [ ] | [x] | reuse | [ ] |
| 18 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 19 | search-results | search | [ ] | [x] | reuse | [ ] |
| 20–22 | about (3) | about-brand | [ ] | [x] | reuse | [ ] |
| 23 | faq-collapsible-tabs | faq-support | [ ] | [x] | reuse | [ ] |
| 24–25 | clinical (2) | clinical-studies | [ ] | [x] | reuse | [ ] |
| 26 | lead-capture-form | contact | [ ] | [x] | reuse | [ ] |
| 27 | product-finder-quiz | landing-campaign | [ ] | [x] | reuse | [ ] |
| 28–31 | sunscreener (4) | landing-campaign | [ ] | [x] | reuse | [ ] |
| 32–33 | blog list + post | blog-* | [ ] | [x] | reuse | [ ] |
| 34–35 | policy + FDA | policy | [ ] | [x] | reuse | [ ] |
| 36 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |
| 37–40 | moisturizer LP (4) | landing-campaign | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop hover — mega |
| global-predictive-search | initial, input | `angel` — öneri yoksa leftover |
| global-cart-drawer | initial, filled | boş + Instant Angel ATC |
| global-menu-drawer | open | 375/768 hamburger |
| social-proof-brand-logos | changed | Cosmo logo → alıntı |
| product-info-main | changed | 100ML |
| faq-collapsible-tabs (PDP + FAQ) | changed | ilk soru |
| product-finder-quiz | changed | Let's Go — PII dur |

---

## Aday / leftover

[`candidates/dieux-leftovers.md`](../candidates/dieux-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / mega / cart / quiz interact
- [ ] Predictive suggest (yoklandı, liste yok)
- [ ] Cart qty `changed`
- [ ] Stamped reviews (şema yok)
- [ ] Newsletter / contact / waitlist submit — **yapılmayacak** (PII)
