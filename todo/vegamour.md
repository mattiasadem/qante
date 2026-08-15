# Todo — VEGAMOUR (vegamour.com)

*Kaynak:* https://vegamour.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **`Collection Layout v2 | Scalp | StayAi`** · `schema_name`: **Pivotmade theme** · `schema_version`: **2026-07-30-1** · `theme_store_id`: **null** (custom) · theme id `146867650675` · role `main` · shop `vegalash.myshopify.com`

**Durum:** Mod A walk — observation yazıldı; resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/vegamour/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/vegamour/`, `evidence/vegamour/`, `todo/vegamour.md`, `candidates/vegamour-*.md` |

**Kapsam satırı:**  
`VEGAMOUR · default · Collection Layout v2 | Scalp | StayAi / schema_name Pivotmade theme 2026-07-30-1 · custom Shopify · home→PDP→PLP→search→cart→content→footer→mobile · 45 obs · 0 yeni şema`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | [x] obs | [ ] |
| Mega / search / cart drawer / mobile menu | [x] obs | [ ] interact |
| PDP `/products/gro-hair-serum` | [x] obs | [ ] + supply changed |
| PLP `/collections/best-sellers` | [x] obs | [ ] |
| Search `/search?q=serum` | [x] obs | [ ] |
| Cart `/cart` + drawer | [x] obs | [ ] empty + filled |
| About `/pages/our-story` | [x] obs | [ ] (header yok) |
| Quiz `/pages/hair-quiz` Jebbit | [x] obs | [ ] PII dur |
| Reset LP `/pages/hair-wellness-reset` | [x] obs | [ ] |
| Reviews `/pages/reviews` | [x] obs | [ ] Okendo leftover |
| Blog list + GRO vs GRO+ | [x] obs | [ ] |
| Contact `/pages/contact-us` | [x] obs | [ ] Gorgias PII |
| Returns + privacy | [x] obs | [ ] |
| 404 | [x] obs | [ ] leftover |
| `/pages/science` | ⛔ → our-story | — |
| `/pages/faq` | ⛔ 404 | leftover |

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
| 8 | collection-nav-tabs | home | [ ] | [x] | reuse | [ ] |
| 9–10 | editorial-image-with-text ×2 | home | [ ] | [x] | reuse | [ ] |
| 11 | promo-scrolling-marquee | home | [ ] | [x] | reuse | [ ] |
| 12 | before-after-slider | home | [ ] | [x] | reuse | [ ] |
| 13–14 | product-showcase-tabs ×2 | home | [ ] | [x] | reuse | [ ] |
| 15 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 16 | hero-slideshow-2 quiz CTA | home | [ ] | [x] | reuse | [ ] |
| 17 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 18 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 19 | features-multicolumn | product-detail | [ ] | [x] | reuse | [ ] |
| 20 | promo-scrolling-marquee | product-detail | [ ] | [x] | reuse | [ ] |
| 21 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 22 | faq-collapsible-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 23 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 24 | hero-slideshow | collection | [ ] | [x] | reuse | [ ] |
| 25 | search-results | search | [ ] | [x] | reuse | [ ] |
| 26 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 27–30 | about (4) | about-brand | [ ] | [x] | reuse | [ ] |
| 31 | product-finder-quiz | landing-campaign | [ ] | [x] | reuse | [ ] |
| 32–36 | reset LP (5) | landing-campaign | [ ] | [x] | reuse | [ ] |
| 37–39 | reviews LP (3) | landing-campaign | [ ] | [x] | reuse | [ ] |
| 40–41 | blog list + post | blog-* | [ ] | [x] | reuse | [ ] |
| 42 | features-multicolumn | contact | [ ] | [x] | reuse | [ ] |
| 43–44 | returns + privacy | policy | [ ] | [x] | reuse | [ ] |
| 45 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | open | 1440 Shop All hover — Featured / Category / Concern |
| global-predictive-search | input | Searchanise `serum` — öneri listesi yoklanacak |
| global-cart-drawer | initial, filled | GRO Hair Serum ATC; /cart de var |
| global-menu-drawer | open | 375/768 hamburger |
| product-info-main | changed | 3-Month Supply |
| faq-collapsible-tabs | changed | ilk soru |
| collection-nav-tabs | changed | Shop by Concern |
| product-finder-quiz | changed | Jebbit ilk adım; **PII dur** |

---

## Aday / leftover

[`candidates/vegamour-leftovers.md`](../candidates/vegamour-leftovers.md) — capture sonrası doldurulacak.

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / mega / cart / search / menu / supply interact
- [ ] Newsletter / contact / quiz email — **yapılmayacak** (PII)
