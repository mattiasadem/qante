# Todo — VEGAMOUR (vegamour.com)

*Kaynak:* https://vegamour.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **`Collection Layout v2 | Scalp | StayAi`** · `schema_name`: **Pivotmade theme** · `schema_version`: **2026-07-30-1** · `theme_store_id`: **null** (custom) · theme id `146867650675` · role `main` · shop `vegalash.myshopify.com`

**Durum:** Mod A walk kapandı — 45 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/90 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/vegamour/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/vegamour/`, `evidence/vegamour/`, `todo/vegamour.md`, `candidates/vegamour-*.md` |

**Kapsam satırı:**  
`VEGAMOUR · default · Collection Layout v2 | Scalp | StayAi / schema_name Pivotmade theme 2026-07-30-1 · custom Shopify · home→PDP→PLP→search→cart→content→footer→mobile · 45 obs · 186 PNG · 0 yeni şema · leftover: Okendo / StayAI pfv5 / Jebbit / Gorgias / Searchanise empty / 404`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | ✅ | ✅ |
| Mega / search / cart drawer / mobile menu | ✅ interact | ✅ (menu 1440 N/A · search öneri yok) |
| PDP `/products/gro-hair-serum` | ✅ + 3-Month pfv5 | ✅ |
| PLP `/collections/best-sellers` | ✅ | ✅ |
| Search `/search?q=serum` | ✅ 27 sonuç | ✅ |
| Cart `/cart` + drawer | ✅ empty + filled | ✅ |
| About `/pages/our-story` | ✅ header yok | ✅ |
| Quiz `/pages/hair-quiz` Jebbit | ✅ Thinning; **PII dur** | ✅ |
| Reset LP `/pages/hair-wellness-reset` | ✅ + FAQ | ✅ |
| Reviews `/pages/reviews` | ✅ Okendo leftover | ✅ |
| Blog list + GRO vs GRO+ | ✅ | ✅ |
| Contact `/pages/contact-us` | ✅ Gorgias **gönderilmedi** | ✅ |
| Returns + privacy | ✅ | ✅ |
| 404 | ⛔ aday + `page-content-main` | ✅ |
| `/pages/science` | ⛔ → our-story | — |
| `/pages/faq` | ⛔ 404 | leftover |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 4 | global-predictive-search | home | [x] | [x] | reuse | [x] leftover |
| 5 | global-menu-drawer | home | [x] 375+768 | [x] | reuse | [x] |
| 6 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 7 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 8 | collection-nav-tabs | home | [x] + Concern | [x] | reuse | [x] |
| 9–10 | editorial-image-with-text ×2 | home | [x] | [x] | reuse | [x] |
| 11 | promo-scrolling-marquee | home | [x] | [x] | reuse | [x] |
| 12 | before-after-slider | home | [x] | [x] | reuse | [x] |
| 13–14 | product-showcase-tabs ×2 | home | [x] + Volume | [x] | reuse | [x] |
| 15 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 16 | hero-slideshow-2 quiz CTA | home | [x] | [x] | reuse | [x] |
| 17 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 18 | product-info-main | product-detail | [x] + 3-Month | [x] | reuse | [x] |
| 19 | features-multicolumn | product-detail | [x] | [x] | reuse | [x] |
| 20 | promo-scrolling-marquee | product-detail | [x] | [x] | reuse | [x] |
| 21 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 22 | faq-collapsible-tabs | product-detail | [x] + ilk soru | [x] | reuse | [x] |
| 23 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 24 | hero-slideshow | collection | [x] | [x] | reuse | [x] |
| 25 | search-results | search | [x] | [x] | reuse | [x] |
| 26 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 27–30 | about (4) | about-brand | [x] | [x] | reuse | [x] |
| 31 | product-finder-quiz | landing-campaign | [x] + Thinning | [x] | reuse | [x] leftover iframe |
| 32–36 | reset LP (5) | landing-campaign | [x] + FAQ | [x] | reuse | [x] |
| 37–39 | reviews LP (3) | landing-campaign | [x] | [x] | reuse | [x] |
| 40–41 | blog list + post | blog-* | [x] | [x] | reuse | [x] |
| 42 | features-multicolumn | contact | [x] | [x] | reuse | [x] leftover form |
| 43–44 | returns + privacy | policy | [x] | [x] | reuse | [x] |
| 45 | page-content-main | not-found | [x] | [x] | reuse | [x] leftover |

---

## Interact (piksel doğrulandı)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop All — Featured / Category / Concern + görseller |
| global-predictive-search | initial, input | `serum` yazıldı; öneri listesi yok (leftover) |
| global-cart-drawer | initial, filled | GRO Hair Serum 1-Month One-Time $64; CHECKOUT |
| global-menu-drawer | open | 375/768 hamburger (1440 N/A) |
| collection-nav-tabs | changed | Shop by Concern — Shedding / Volume / Dryness |
| product-showcase-tabs | changed | Volume + UPLIFT foam |
| product-info-main | changed | pfv5 3-Month $139 seçili |
| faq-collapsible-tabs (PDP) | changed | 3–4 months cevabı |
| faq-collapsible-tabs (Reset) | changed | 90-Day Reset cevabı |
| product-finder-quiz | changed | Thinning → hormonal metin; **PII dur** |

---

## Aday / leftover

[`candidates/vegamour-leftovers.md`](../candidates/vegamour-leftovers.md)

- Okendo reviews (şema yok)
- StayAI pfv5 purchase drawer
- Jebbit quiz iframe
- Gorgias contact (PII)
- Searchanise öneri listesi yok
- 404 / `/pages/faq` / `/pages/science` 302
- Cart qty `changed` yok

---

## Evidence backlog

- [x] Claiming obs resmi 3vp — **186 PNG** (static + interact)
- [x] Overlay / mega / cart / menu / supply / FAQ / quiz / tabs
- [x] Predictive suggest yoklandı — liste yok (leftover)
- [ ] Cart qty `changed` (doldurulmadı)
- [ ] Okendo reviews (şema yok)
- [ ] Newsletter / contact / quiz email — **yapılmayacak** (PII)
