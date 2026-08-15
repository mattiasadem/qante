# Todo — Dieux (dieuxskin.com)

*Kaynak:* https://www.dieuxskin.com · *Preset:* `default`  
*Tema (storefront):* **Live Theme** · `schema_name`: Dieux · `schema_version`: 3.0 · `theme_store_id`: null (custom)

**Durum:** Mod A walk kapandı — 40 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/12 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/dieux/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/dieux/`, `evidence/dieux/`, `todo/dieux.md`, `candidates/dieux-*.md` |

**Kapsam satırı:**  
`Dieux · default · Live Theme / schema_name Dieux 3.0 · custom Shopify · home→PDP→PLP→search→cart drawer→content→footer→mobile · 40 obs · 161 PNG · 0 yeni şema · leftover: sunscreener tool / Stamped / /cart 302 / predictive empty / campaign LPs`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/press/UGC | ✅ | ✅ |
| Mega / search overlay / cart drawer / mobile menu | ✅ interact | ✅ (menu 1440 N/A · search 375 N/A) |
| PDP `/products/instant-angel` | ✅ + 100ML | ✅ |
| PLP `/collections/skincare` | ✅ filter/sort yok | ✅ |
| Search `/search?q=angel` | ✅ 11 sonuç | ✅ |
| Cart `/cart` | ⛔ home 302 — drawer | ✅ empty + filled 3vp |
| About `/pages/founders` | ✅ | ✅ |
| FAQ `/pages/faqs` | ✅ + ilk soru | ✅ |
| Clinical `/pages/clinical-studies` | ✅ | ✅ |
| Contact `/pages/contact-us` | ✅ form **gönderilmedi** | ✅ |
| Quiz `/pages/moisturizer-finder` | ✅ Octane same-origin | ✅ intro + adım1 |
| Sunscreener | ✅ tool + support + waitlist + FAQ | ✅ (tool = forced `page-content-main`) |
| Blog `/blogs/beauty` + photosensitivity | ✅ | ✅ |
| Policy privacy + FDA | ✅ | ✅ |
| 404 | ⛔ aday + `page-content-main` | ✅ |
| Moisturizer LP | ✅ hero/marquee/layer/FAQ | ✅ |
| Gift guide / deals / TikTok LP / opt-out | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 4 | global-predictive-search | home | [x] 768+1440 | [x] | reuse | [x] leftover |
| 5 | global-menu-drawer | home | [x] 375+768 | [x] | reuse | [x] |
| 6 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 7 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 8 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 9 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 10 | social-proof-brand-logos | home | [x] | [x] | reuse | [x] |
| 11 | media-shop-the-feed | home | [x] | [x] | reuse | [x] |
| 12 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 13 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 14 | editorial-image-with-text | product-detail | [x] | [x] | reuse | [x] |
| 15 | faq-collapsible-tabs | product-detail | [x] | [x] | reuse | [x] |
| 16 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 17 | features-multicolumn | product-detail | [x] | [x] | reuse | [x] |
| 18 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 19 | search-results | search | [x] | [x] | reuse | [x] |
| 20–22 | about (3) | about-brand | [x] | [x] | reuse | [x] |
| 23 | faq-collapsible-tabs | faq-support | [x] | [x] | reuse | [x] |
| 24–25 | clinical (2) | clinical-studies | [x] | [x] | reuse | [x] |
| 26 | lead-capture-form | contact | [x] | [x] | reuse | [x] |
| 27 | product-finder-quiz | landing-campaign | [x] | [x] | reuse | [x] |
| 28–31 | sunscreener (4) | landing-campaign | [x] | [x] | reuse | [x] leftover tool |
| 32–33 | blog list + post | blog-* | [x] | [x] | reuse | [x] |
| 34–35 | policy + FDA | policy | [x] | [x] | reuse | [x] |
| 36 | page-content-main | not-found | [x] | [x] | reuse | [x] leftover |
| 37–40 | moisturizer LP (4) | landing-campaign | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop hover — SKINCARE / EYE MASKS / BUNDLES / SHOP ALL + Featured 4 |
| global-predictive-search | initial, input | 768/1440 `angel` — öneri listesi yok; 375 N/A (menü içi) |
| global-cart-drawer | initial, filled | boş bestsellers; Instant Angel 50ML $45 + FREE Squeeze Key; 2 ITEMS; $45 |
| global-menu-drawer | open | 375/768 hamburger (1440 0px) |
| social-proof-brand-logos | changed | Cosmo/Vogue — “Dieux knows how to make a viral beauty product...” |
| product-info-main | changed | 100ML — $78 / subscribe $68.64 |
| faq-collapsible-tabs (PDP) | changed | aluminum tube cevabı açık |
| faq-collapsible-tabs (FAQ) | changed | “Where can I find Dieux products?” |
| product-finder-quiz | changed | Let's Go → PRIMARY SKIN FOCUS; **PII dur** |

---

## Aday / leftover

[`candidates/dieux-leftovers.md`](../candidates/dieux-leftovers.md)

- Sunscreener Vue tool (`page-content-main` zorlama)
- Stamped reviews (şema yok)
- `/cart` 302 → drawer only
- Predictive öneri listesi yok; 375 search menüde
- Account drawer (PII)
- Gift guide / deals / TikTok / opt-out / giveaway LPs
- `/products` list-collections
- Cart qty `changed` yok

---

## Evidence backlog

- [x] Claiming obs resmi 3vp — **161 PNG** (static + interact)
- [x] Overlay / mega / cart / quiz / FAQ / 100ML / press interact
- [x] Predictive suggest yoklandı — liste yok (leftover)
- [ ] Cart qty `changed` (doldurulmadı)
- [ ] Stamped reviews (şema yok)
- [ ] Newsletter / contact / waitlist submit — **yapılmayacak** (PII)
