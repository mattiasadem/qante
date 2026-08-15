# Todo — Waterboy (waterboy.com)

*Kaynak:* https://www.waterboy.com · *Preset:* `default`  
*Tema (vitrinde görülen):* **Waterboy/prod** · `schema_name`: Refresh · `theme_store_id`: null (custom Refresh) · shop `waterboycan.myshopify.com`

**Durum:** Mod A walk yazıldı — resmi 3vp + interact sırada / kısmi  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/waterboy/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/waterboy/`, `evidence/waterboy/`, `todo/waterboy.md`, `candidates/waterboy-*.md` |

**Kapsam satırı:**  
`Waterboy · default · Waterboy/prod (Refresh custom) · home→PDP→PLP→search→cart→content→footer→mobile · obs yazıldı · 0 yeni şema · leftover: Gorgias/Stockist/SMS/Growi/reviews`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/brag/tabs/compare/ugc | ✅ roster | ⬜ capture |
| Mega | ⛔ yok (düz link) | — |
| Search overlay | ✅ interact adımları | ⬜ |
| Cart notification (drawer yok) | ✅ interact adımları | ⬜ |
| Mobile menu 375/768 | ✅ interact adımları | ⬜ |
| PDP `/products/daily-hydration` | ✅ + pack `changed` | ⬜ |
| PLP hydration (formül kartları) | ✅ | ⬜ |
| PLP merch (ürün grid) | ✅ | ⬜ |
| Search `?q=hydration` | ✅ | ⬜ |
| Cart `/cart` boş + dolu | ✅ interact | ⬜ |
| About `/pages/our-story` | ✅ | ⬜ |
| Learn `/pages/thirsty-thoughts` | ✅ hub | ⬜ |
| Help / Contact (Gorgias) | ⛔ aday + obs parent | ⬜ |
| Policy privacy | ✅ | ⬜ |
| Blog Daily Drip + article | ✅ | ⬜ |
| Store locator 2.0 | ⛔ aday + obs | ⬜ |
| Subscribe SMS | ⛔ PII yok — obs | ⬜ |
| Wholesale ince sayfa | ⛔ leftover | ⬜ |
| 404 | ⛔ aday + obs | ⬜ |
| Footer | ✅ | ⬜ |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | editorial-image-with-text | home | [ ] | [x] | reuse | [ ] |
| 4 | social-proof-brand-logos | home | [ ] | [x] | reuse | [ ] |
| 5 | promo-banner-tabs | home | [ ] | [x] | reuse + changed | [ ] |
| 6 | comparison-quick-table | home | [ ] | [x] | reuse + changed | [ ] |
| 7 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 8 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 9 | media-shop-the-feed | home | [ ] | [x] | reuse | [ ] |
| 10 | product-showcase-grid-featured.2 | home | [ ] | [x] | reuse | [ ] |
| 11 | editorial-image-with-text.2 | home | [ ] | [x] | reuse | [ ] |
| 12 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 13 | global-predictive-search | home | [ ] | [x] | reuse + input | [ ] |
| 14 | global-menu-drawer | home | [ ] | [x] | reuse 375/768 | [ ] |
| 15 | global-cart-drawer | home/PDP | [ ] | [x] | notification | [ ] |
| 16 | product-info-main | product-detail | [ ] | [x] | reuse + 30 sticks | [ ] |
| 17 | promo-banner-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 18 | comparison-quick-table | product-detail | [ ] | [x] | reuse | [ ] |
| 19 | testimonial-quote-carousel | product-detail | [ ] | [x] | reuse | [ ] |
| 20 | faq-collapsible-tabs | product-detail | [ ] | [x] | reuse + changed | [ ] |
| 21 | collection-banner | collection | [ ] | [x] | reuse | [ ] |
| 22 | collection-nav-cards | collection | [ ] | [x] | reuse | [ ] |
| 23 | collection-banner | merch | [ ] | [x] | reuse | [ ] |
| 24 | product-showcase-grid-plp | merch | [ ] | [x] | reuse | [ ] |
| 25 | search-results | search | [ ] | [x] | reuse | [ ] |
| 26 | lead-capture-newsletter-band | search | [ ] | [x] | reuse | [ ] |
| 27 | cart-page-main | cart | [ ] | [x] | reuse + filled | [ ] |
| 28 | product-showcase-grid-featured | cart | [ ] | [x] | reuse | [ ] |
| 29 | page-content-main | about-brand | [ ] | [x] | reuse | [ ] |
| 30–33 | thirsty-thoughts (4) | thirsty-thoughts | [ ] | [x] | reuse | [ ] |
| 34 | page-content-main | policy | [ ] | [x] | reuse | [ ] |
| 35 | blog-list-main | blog-list | [ ] | [x] | reuse | [ ] |
| 36 | blog-post-main | blog-post | [ ] | [x] | reuse | [ ] |
| 37 | page-content-main | faq-support | [ ] | [x] | Gorgias | [ ] |
| 38 | page-content-main | store-locator | [ ] | [x] | Stockist | [ ] |
| 39 | lead-capture-form | subscribe | [ ] | [x] | SMS PII yok | [ ] |
| 40 | page-content-main | not-found | [ ] | [x] | 404 aday | [ ] |
| 41 | page-content-main | wholesale | [ ] | [x] | ince | [ ] |

---

## Interact (piksel değişen)

| Bileşen | State | Not |
|---|---|---|
| promo-banner-tabs | changed | WEEKENDS → DAILY |
| comparison-quick-table | changed | Daily satırı |
| global-predictive-search | input | `daily` |
| global-menu-drawer | open | 375/768 hamburger |
| global-cart-drawer | filled | Add+ → ADD TO CART → `#cart-notification` |
| product-info-main | changed | 30 sticks |
| faq-collapsible-tabs | changed | Is Waterboy safe? |
| cart-page-main | filled | `/cart/add.js` fallback serbest |

---

## Aday / leftover

[`candidates/waterboy-leftovers.md`](../candidates/waterboy-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / tab / pack / FAQ interact
- [ ] PDP Judge.me/reviews app (şema yok)
- [ ] Thirsty Thoughts alt grid ×2 (sweat/recovery — aynı tip)
- [ ] `/blogs/news` 0 article
- [ ] Newsletter / SMS / Gorgias / chat submit — **yapılmayacak** (PII)
