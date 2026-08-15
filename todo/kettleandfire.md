# Todo — Kettle & Fire (kettleandfire.com)

*Kaynak:* https://kettleandfire.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **Qbrico | 23122025 | New Purchase Block** · `schema_name`: **wayfx sites** · `schema_version`: 1.0.0 · `theme_store_id`: null (custom) · theme id `148928495812` · role `main`  
*Shop:* `kettleandfire.myshopify.com`

**Durum:** Mod A walk kapandı — 52 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/88 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/kettleandfire/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/kettleandfire/`, `evidence/kettleandfire/`, `todo/kettleandfire.md`, `candidates/kettleandfire-*.md` |

**Kapsam satırı:**  
`Kettle & Fire · default · Qbrico | 23122025 | New Purchase Block (wayfx sites 1.0.0, custom) · home→PDP→Qbrico PLP→search→cart/Boost drawer→content→footer→mobile · 52 obs · 178 PNG · 0 yeni şema · leftover: candidates/kettleandfire-leftovers.md`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ |
| Mega SHOP 1440 | ✅ interact | ✅ (yalnız 1440) |
| Predictive search | ✅ interact | ✅ open+input; öneri listesi yok |
| Cart drawer boş + dolu + tallow | ✅ interact | ✅ (qty stepper yok) |
| Mobile menu 375+768 | ✅ interact | ✅ (1440 N/A) |
| PDP `/products/chicken-bone-broth` | ✅ + pack change | ✅ Subscribe 6 → one-time 24 |
| PDP accordion + Beef FAQ | ✅ interact | ✅ Ingredients; FAQ Q2 shipping |
| PLP `/a/collections/products` (Qbrico) | ✅ | ✅ docked bar bleed |
| Search `/search?q=chicken` | ✅ | ✅ docked bar bleed |
| Cart `/cart` boş | ✅ | ✅ |
| About `/pages/about-us` | ✅ | ✅ YouTube story |
| Why / What is bone broth | ✅ | ✅ (~2.9k / ~4k) |
| Customer stories | ✅ | ✅ |
| Subscriptions LP | ✅ | ✅ |
| Loyalty + FAQ | ✅ interact | ✅ Q3 points-expire |
| Accessibility policy | ✅ | ✅ |
| Store locator heading | ✅ iframe leftover | ✅ heading |
| Blog `/blogs/news` | ⛔ boş | leftover |
| Contact / /pages/faq | ⛔ 404/boş | leftover |
| Privacy/Terms/Shipping body | ⛔ | leftover |
| Newsletter / SMS / account | ⛔ PII | — |

---

## Bileşen roster (52)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home + mega | [x] + SHOP 1440 | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 5 | features-slider-multicolumn | home | [x] | [x] | reuse | [x] |
| 6 | promo-scrolling-marquee | home | [x] | [x] | reuse | [x] |
| 7 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 8 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 9 | editorial-image-with-text.2 | home | [x] | [x] | reuse | [x] |
| 10 | promo-scrolling-marquee.2 | home | [x] | [x] | reuse | [x] |
| 11 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 12 | blog-list-main | home | [x] | [x] recipes | reuse | [x] |
| 13 | media-shop-the-feed | home | [x] | [x] | reuse | [x] |
| 14 | social-proof-brand-logos | home | [x] | [x] | reuse | [x] |
| 15 | lead-capture-newsletter-band | home | [x] | [x] PII yok | reuse | [x] |
| 16 | footer-columns-newsletter | home | [x] | [x] PII yok | reuse | [x] |
| 17 | global-cart-drawer | home | [x] boş+dolu+tallow | [x] Boost | reuse | [x] |
| 18 | global-predictive-search | home | [x] open/input 3vp | [x] öneri yok | reuse | [x] |
| 19 | global-menu-drawer | home | [x] 375/768 | [x] 1440 N/A | reuse | [x] |
| 20 | product-info-main | product-detail | [x] + pack | [x] | reuse | [x] |
| 21 | product-info-tabs | product-detail | [x] Ingredients | [x] openFirst | reuse | [x] |
| 22 | social-proof-brand-logos | product-detail | [x] | [x] | reuse | [x] |
| 23 | testimonial-quote-carousel | product-detail | [x] | [x] | reuse | [x] |
| 24 | features-multicolumn | product-detail | [x] | [x] | reuse | [x] |
| 25 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 26 | faq-collapsible-tabs | product-detail | [x] Beef Q2 | [x] Chicken CTA leftover | reuse | [x] |
| 27 | lead-capture-newsletter-band | product-detail | [x] | [x] PII yok | reuse | [x] |
| 28 | product-showcase-grid-plp | collection | [x] | [x] Qbrico | reuse | [x] |
| 29 | search-results | search | [x] | [x] | reuse | [x] |
| 30 | cart-page-main | cart | [x] boş | [x] | reuse | [x] |
| 31 | product-showcase-grid-featured | cart | [x] | [x] | reuse | [x] |
| 32 | editorial-rich-text | about-brand | [x] | [x] mission | reuse | [x] |
| 33 | media-video-hero | about-brand | [x] | [x] YouTube | reuse | [x] |
| 34 | features-multicolumn | about-brand | [x] | [x] | reuse | [x] |
| 35 | editorial-image-with-text | about-brand | [x] | [x] Learn | reuse | [x] |
| 36 | collection-nav-image-cards | about-brand | [x] | [x] | reuse | [x] |
| 37 | page-content-main | about-brand | [x] | [x] why-broth | reuse | [x] |
| 38 | editorial-rich-text.2 | about-brand | [x] | [x] what-is | reuse | [x] |
| 39–41 | customer-stories ×3 | customer-stories | [x] | [x] | reuse | [x] |
| 42–46 | subscriptions LP ×5 | landing-campaign | [x] | [x] | reuse | [x] |
| 47–50 | loyalty ×4 | loyalty | [x] + FAQ Q3 | [x] | reuse | [x] |
| 51 | page-content-main | policy | [x] | [x] accessibility | reuse | [x] |
| 52 | editorial-rich-text | store-locator | [x] heading | [x] iframe leftover | reuse | [x] |

---

## Interact (piksel değişince)

| Bileşen | State | 3vp | Not |
|---|---|---|---|
| navigation-header-mega | initial, open | ✅ bar 3vp + open 1440 | SHOP hover Best Sellers + Categories |
| global-predictive-search | open, input | ✅ | `chicken` yazıldı; öneri dropdown yok |
| global-cart-drawer | initial, filled, changed | ✅ | boş 2×2 → Chicken 6-pack $40.74 → + tallow $60.73 |
| global-menu-drawer | open | ✅ 375/768 | 1440 N/A |
| product-info-main | initial, changed | ✅ | Subscribe 6-pack $40.74 → one-time 24 $173.20 |
| product-info-tabs | initial, changed | ✅ | Nutrition açık → + Ingredients |
| faq-collapsible-tabs (beef) | initial, changed | ✅ | Q2 shipping açıldı (Q1 değil) |
| faq-collapsible-tabs (loyalty) | initial, changed | ✅ | Q3 points-expire açıldı (Q1 değil) |

---

## Aday / leftover

[`candidates/kettleandfire-leftovers.md`](../candidates/kettleandfire-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp
- [x] Mega / search / cart / menu / PDP pack / accordion / FAQ
- [x] Validator
- [ ] Newsletter / contact submit — **yapılmayacak** (PII)
