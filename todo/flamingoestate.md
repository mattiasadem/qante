# Todo — Flamingo Estate

*Kaynak:* https://flamingoestate.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **flamingo-estate-web/master** · `schema_name`: Prestige · `schema_version`: 8.3.0 · `theme_store_id`: null · role `main` · id `140426608808`  
*Shop:* `flamingo-estate-organics.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact (piksel doğrulandı)  
**PR:** https://github.com/mattiasadem/qante/pull/61 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/flamingoestate/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/flamingoestate/`, `evidence/flamingoestate/`, `todo/flamingoestate.md`, `candidates/flamingoestate-*.md` |

**Kapsam satırı:**  
`Flamingo Estate · default · flamingo-estate-web/master (Prestige 8.3.0 custom, theme_store_id null) · home→PDP→PLP→search→Rebuy cart-drawer→content→footer→mobile · 53 obs · 3vp alındı · 0 yeni şema`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/2-up/featured/press/fund/recipes/footer | [x] | [x] |
| Header kapalı + Shop flyout 1440 (click, hover değil) | [x] interact | [x] |
| Search overlay `soap` (predictive liste yok) | [x] interact | [x] |
| Cart Rebuy drawer empty 3vp + filled 375/1440 | [x] interact | [x] 768 filled ⛔ |
| Mobile hamburger 375+768 | [x] interact | [x] (1440 hamburger yok) |
| PDP Tuscan Rosemary | [x] | [x] |
| PLP `/collections/all` | [x] | [x] |
| Search `/search?q=soap` | [x] | [x] |
| About `/pages/the-estate` | [x] | [x] |
| FAQ `/pages/faq` (düz metin) | [x] | [x] |
| Contact + Gorgias iframe | [x] | [x] (pierce/PII yok) |
| Recipes + Sights list | [x] | [x] |
| Recipe post + Martha article | [x] | [x] |
| Privacy + shipping | [x] | [x] |
| Membership + Subscriptions landings | [x] | [x] |
| `/collections/candles` custom LP | ⛔ leftover | — |
| Stockists map | ⛔ leftover | — |
| 404 `/pages/about-us` `/pages/faqs` | ⛔ leftover | — |
| `/cart` page | ⛔ drawer only | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | [x] | [x] |
| 2 | navigation-header-mega | home | [x] kapalı 3vp + Shop click 1440 | [x] | [x] | [x] |
| 3 | hero-slideshow | home | [x] | [x] | [x] | [x] |
| 4 | product-showcase-grid-featured | home | [x] | [x] | [x] | [x] |
| 5 | product-showcase-grid-featured-2 | home | [x] | [x] | [x] | [x] |
| 6 | product-showcase-grid-featured-3 | home | [x] | [x] | [x] | [x] |
| 7 | product-showcase-grid-featured-4 | home | [x] | [x] | [x] | [x] |
| 8 | promo-grid-banner | home | [x] | [x] | [x] | [x] |
| 9 | promo-grid-banner-2 | home | [x] | [x] | [x] | [x] |
| 10 | promo-grid-banner-3 | home | [x] | [x] | [x] | [x] |
| 11 | testimonial-quote-carousel | home | [x] | [x] | [x] | [x] |
| 12 | editorial-image-with-text-overlay | home | [x] | [x] | [x] | [x] |
| 13 | blog-list-main | home | [x] | [x] | [x] | [x] |
| 14 | footer-columns-newsletter | home | [x] FOOTER child | [x] | [x] | [x] |
| 15 | global-cart-drawer | home | [x] empty 3vp + filled 375/1440 | [x] | [x] | [x] 768 filled ⛔ |
| 16 | global-predictive-search | home | [x] bos+soap 3vp | [x] | [x] | [x] liste yok |
| 17 | global-menu-drawer | home | [x] 375+768 | [x] | [x] | [x] accordion ⛔ |
| 18 | product-info-main | product-detail | [x] | [x] | [x] | [x] |
| 19 | product-showcase-related | product-detail | [x] | [x] | [x] | [x] |
| 20 | blog-list-main | product-detail | [x] | [x] | [x] | [x] |
| 21 | collection-nav-icon-buttons | product-detail | [x] text pills | [x] | [x] | [x] |
| 22 | collection-banner | collection | [x] | [x] | [x] | [x] |
| 23 | product-showcase-grid-plp | collection | [x] | [x] | [x] | [x] |
| 24 | search-results | search | [x] | [x] | [x] | [x] |
| 25 | editorial-rich-text | about-brand | [x] | [x] | [x] | [x] |
| 26 | editorial-image-with-text-overlay | about-brand | [x] | [x] | [x] | [x] |
| 27 | editorial-layered-images | about-brand | [x] | [x] | [x] | [x] |
| 28 | editorial-layered-images-2 | about-brand | [x] | [x] | [x] | [x] |
| 29 | editorial-image-with-text | about-brand | [x] | [x] | [x] | [x] |
| 30 | editorial-image-with-text-2 | about-brand | [x] | [x] | [x] | [x] |
| 31 | lead-capture-newsletter-band | about-brand | [x] Klaviyo gönderilmedi | [x] | [x] | [x] |
| 32 | collection-nav-image-cards | about-brand | [x] | [x] | [x] | [x] |
| 33 | page-content-main | faq-support | [x] düz metin | [x] | [x] | [x] |
| 34 | page-content-main | contact | [x] Gorgias iframe | [x] | [x] | [x] |
| 35 | page-content-main | policy | [x] privacy | [x] | [x] | [x] |
| 36 | page-content-main-2 | policy | [x] shipping | [x] | [x] | [x] |
| 37 | blog-list-main | blog-list | [x] recipes | [x] | [x] | [x] |
| 38 | blog-list-main-2 | blog-list | [x] sights-sounds | [x] | [x] | [x] |
| 39 | blog-post-main | blog-post | [x] salsa-macha | [x] | [x] | [x] |
| 40 | blog-list-main | blog-post | [x] related | [x] | [x] | [x] |
| 41 | blog-post-main-2 | blog-post | [x] Martha | [x] | [x] | [x] |
| 42 | media-video-hero | landing-campaign | [x] membership | [x] | [x] | [x] |
| 43 | features-multicolumn | landing-campaign | [x] benefits | [x] | [x] | [x] |
| 44 | editorial-image-with-text | landing-campaign | [x] | [x] | [x] | [x] |
| 45 | editorial-image-with-text-overlay | landing-campaign | [x] gift | [x] | [x] | [x] |
| 46 | product-showcase-grid-featured | landing-campaign | [x] exclusive | [x] | [x] | [x] |
| 47 | social-proof-brand-logos | landing-campaign | [x] | [x] | [x] | [x] |
| 48 | editorial-image-with-text-overlay-2 | landing-campaign | [x] subs hero | [x] | [x] | [x] |
| 49 | features-multicolumn-2 | landing-campaign | [x] 1-2-3 | [x] | [x] | [x] |
| 50 | features-multicolumn-3 | landing-campaign | [x] perks | [x] | [x] | [x] |
| 51 | product-showcase-grid-featured-2 | landing-campaign | [x] subscribe grid | [x] | [x] | [x] |
| 52 | testimonial-quote-carousel-2 | landing-campaign | [x] subscribers | [x] | [x] | [x] |
| 53 | faq-collapsible-tabs | landing-campaign | [x] 28 details | [x] | [x] | [x] |

---

## Aday / leftover

[`candidates/flamingoestate-leftovers.md`](../candidates/flamingoestate-leftovers.md)

---

## Evidence backlog

- [x] Home static 3vp (instance slug çakışması düzeltildi, recapture)
- [x] PDP / PLP / search 3vp
- [x] Content templates 3vp
- [x] Drawer / search / mega / mobile interact
- [ ] 768 cart filled (2 deneme, dur)
- [ ] Predictive ürün listesi (DOM’da yok)
- [ ] Shop by Room / Projects accordion
