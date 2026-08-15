# Todo — Waterboy (waterboy.com)

*Kaynak:* https://www.waterboy.com · *Preset:* `default`  
*Tema (vitrinde görülen):* **Waterboy/prod** · `schema_name`: Refresh · `theme_store_id`: null (custom Refresh) · shop `waterboycan.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact bitti  
**PR:** draft https://github.com/mattiasadem/qante/pull/14 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/waterboy/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| PNG | **149** (`evidence/waterboy/`) |
| Parallel | yalnız `observations/waterboy/`, `evidence/waterboy/`, `todo/waterboy.md`, `candidates/waterboy-*.md` |

**Kapsam satırı:**  
`Waterboy · default · Waterboy/prod (Refresh custom) · home→PDP→PLP→search→cart→content→footer→mobile · 41 obs · 0 yeni şema · 149 PNG · leftover: Gorgias/Stockist/SMS/Growi/reviews/404/cta-band`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/brag/tabs/compare/ugc | ✅ | [x] |
| Mega | ⛔ yok (düz link) | — |
| Search overlay | ✅ boş + `daily` (öneri yok) | [x] |
| Cart drawer (merch ATC) | ✅ Your Cart · 1 | [x] filled |
| Mobile menu 375/768 | ✅ | [x] open; 1440 N/A |
| PDP `/products/daily-hydration` | ✅; 30 sticks `missingStates` | [x] |
| PLP hydration (formül kartları) | ✅ | [x] |
| PLP merch (ürün grid) | ✅ | [x] |
| Search `?q=hydration` | ✅ | [x] |
| Cart `/cart` boş + dolu | ✅ GET `/cart/add` | [x] |
| About `/pages/our-story` | ✅ | [x] |
| Learn `/pages/thirsty-thoughts` | ✅ hub | [x] |
| Help / Contact (Gorgias) | ⛔ aday + parent obs | [x] parent |
| Policy privacy | ✅ | [x] |
| Blog Daily Drip + article | ✅ | [x] |
| Store locator 2.0 | ⛔ aday + obs | [x] |
| Subscribe SMS | ⛔ PII yok — obs | [x] |
| Wholesale Typeform | ⛔ leftover + obs | [x] |
| 404 | ⛔ aday + obs | [x] |
| Footer | ✅ CONTACT US, e-posta yok | [x] |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse (mega yok) | [x] |
| 3 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 4 | social-proof-brand-logos | home | [x] | [x] | reuse | [x] |
| 5 | promo-banner-tabs | home | [x] | [x] | reuse + DAILY changed | [x] |
| 6 | comparison-quick-table | home | [x] | [x] | reuse + Daily kolon toggle | [x] |
| 7 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 8 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 9 | media-shop-the-feed | home | [x] | [x] | reuse | [x] |
| 10 | product-showcase-grid-featured.2 | home | [x] | [x] | reuse | [x] |
| 11 | editorial-image-with-text.2 | home | [x] | [x] | reuse | [x] |
| 12 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 13 | global-predictive-search | home | [x] | [x] | overlay; öneri yok | [x] |
| 14 | global-menu-drawer | home | [x] | [x] | 375/768 open | [x] |
| 15 | global-cart-drawer | merch PDP | [x] | [x] | merch ATC drawer | [x] |
| 16 | product-info-main | product-detail | [x] | [x] | 30 sticks missing | [x] |
| 17 | promo-banner-tabs | product-detail | [x] | [x] | reuse | [x] |
| 18 | comparison-quick-table | product-detail | [x] | [x] | reuse | [x] |
| 19 | testimonial-quote-carousel | product-detail | [x] | [x] | reuse | [x] |
| 20 | faq-collapsible-tabs | product-detail | [x] | [x] | safe-soru changed | [x] |
| 21 | collection-banner | collection | [x] | [x] | reuse | [x] |
| 22 | collection-nav-cards | collection | [x] | [x] | reuse | [x] |
| 23 | collection-banner | merch | [x] | [x] | reuse | [x] |
| 24 | product-showcase-grid-plp | merch | [x] | [x] | reuse | [x] |
| 25 | search-results | search | [x] | [x] | reuse | [x] |
| 26 | lead-capture-newsletter-band | search | [x] | [x] | e-posta yok | [x] |
| 27 | cart-page-main | cart | [x] | [x] | boş + Daily satır | [x] |
| 28 | product-showcase-grid-featured | cart | [x] | [x] | reuse | [x] |
| 29 | page-content-main | about-brand | [x] | [x] | reuse | [x] |
| 30–33 | thirsty-thoughts (4) | thirsty-thoughts | [x] | [x] | reuse | [x] |
| 34 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 35 | blog-list-main | blog-list | [x] | [x] | reuse | [x] |
| 36 | blog-post-main | blog-post | [x] | [x] | reuse | [x] |
| 37 | page-content-main | faq-support | [x] | [x] | Gorgias parent | [x] |
| 38 | page-content-main | store-locator | [x] | [x] | Stockist | [x] |
| 39 | lead-capture-form | subscribe | [x] | [x] | SMS PII yok | [x] |
| 40 | page-content-main | not-found | [x] | [x] | 404 aday | [x] |
| 41 | page-content-main | wholesale | [x] | [x] | Typeform | [x] |

---

## Interact (piksel değişen / olmayan)

| Bileşen | State | Sonuç |
|---|---|---|
| promo-banner-tabs | changed | DAILY kırmızı panel + SHOP DAILY HYDRATION |
| comparison-quick-table | changed | DAILY tık Daily kolonunu kapattı (odak değil) |
| global-predictive-search | input | `daily` yazıldı; öneri listesi yok |
| global-menu-drawer | open | 375/768 liste; 1440 hamburger yok |
| global-cart-drawer | filled | merch baby-tee UI ATC → sağ drawer |
| product-info-main | changed | **missing** — 30 sticks tık kareyi değiştirmedi |
| faq-collapsible-tabs | changed | Is Waterboy safe? Absolutely… |
| cart-page-main | filled | GET `/cart/add` Daily Cucumber Citrus + SAVE15 |

---

## Aday / leftover

[`candidates/waterboy-leftovers.md`](../candidates/waterboy-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp
- [x] Overlay / tab / compare / search / menu / FAQ / cart interact
- [ ] PDP june 30-sticks (2 deneme, kare aynı)
- [ ] PDP reviews app (şema yok)
- [ ] `/blogs/news` 0 article
- [ ] Newsletter / SMS / Gorgias / chat / Typeform / Growi submit — **yapılmayacak** (PII)
