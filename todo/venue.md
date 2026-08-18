# Todo — Venue (Safe As Milk, paid)

*Kaynak:* https://venue-theme-morning.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/venue  
*Preset:* `default` · Morning — resmi Theme Store preview  
*Slug:* `venue`  
*Yasak URL:* `venue-theme.myshopify.com` · `venue-morning.myshopify.com` (password) — kullanılmadı  
*Sunset:* `venue-theme-sunset` kardeş preset leftover — bu walk değil

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **venue-18-2-1** · `id` `142511603760` · `schema_name` **Venue** · `schema_version` **18.2.1** · `theme_store_id` **null** · `role` `main` · shop `venue-theme-morning.myshopify.com`

**Beklenen vs canlı:** Theme Store listing güncel Safe As Milk Venue. Canlı demo **Venue 18.2.1** ve `theme_store_id` **null**. null yazıldı; ID uydurulmadı.

**Durum:** Mod A walk + resmi 3vp + interact + CRO leftover interact + validate  
**PR:** draft https://github.com/mattiasadem/qante/pull/213 · walk PR 158 ayrı · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/venue/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** |
| Observation | **34** (5 CRO interact güncellendi) |
| Evidence PNG | **148** |
| Parallel | yalnız `observations/venue/`, `evidence/venue/`, `todo/venue.md`, `candidates/venue-leftovers.md` |

**Kapsam satırı:**  
`Venue · default · venue-18-2-1 / schema_name Venue 18.2.1 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 34 obs · 148 PNG · 0 yeni şema · leftover: candidates/venue-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/tabs/countdown/quote/editorial/collections/features/footer | roster + capture | [x] |
| Mega STORE 1440 | interact | [x] |
| Predictive search `tee` | interact 3vp | [x] |
| Mobile hamburger 375 | interact | [x] |
| Mobile hamburger 768 | ⛔ inline nav | leftover |
| Cart drawer empty + filled + qty | interact | [x] 768 filled leftover |
| PDP Tucker Wallet Color Tan→Brown | interact | [x] |
| PLP `/collections/all` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=tee` | roster + capture | [x] |
| Cart `/cart` empty + filled + qty | interact | [x] $70→$140 |
| About `/pages/about-us` | roster + capture | [x] |
| Contact form (submit yok) | roster + capture | [x] |
| FAQ `/pages/faq` | roster + capture + accordion | [x] |
| News + article | roster + capture | [x] |
| 404 | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 STORE — 3 link kolon + ON SALE / NEW ARRIVALS |
| global-predictive-search | input | [x] 3vp `tee` — SUGGESTIONS + Home Tee $18 |
| global-menu-drawer | open | [x] 375; 768 leftover |
| global-cart-drawer | filled + changed | [x] (1) $70 → (2) $140; 768 filled leftover |
| cart-page-main | filled + changed | [x] (1) $70 → (2) $140 |
| product-info-main | changed | [x] Tan Only 2 → Brown In stock |
| before-after-slider | changed | [x] 3vp End → Land kaplar (Sea değil) |
| promo-banner-countdown | changed | [x] saniye tick (dismiss yok) |
| faq-collapsible-tabs | changed | [x] Do you ship overseas? açık |
| testimonial-quote-carousel | changed | [x] home Linda + PDP Brett; 375/768 nokta |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | utility-bar | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | STORE mega | reuse | [x] |
| 3 | global-menu-drawer | home | [x] | 375 | reuse | [x] |
| 4 | global-predictive-search | home | [x] | tee | reuse | [x] |
| 5 | global-cart-drawer | home | [x] | #modal-cart | reuse | [x] |
| 6 | hero-slideshow | home | [x] | Less but better | reuse | [x] |
| 7 | product-showcase-tabs | home | [x] | featured collections | reuse | [x] |
| 8 | promo-banner-countdown | home | [x] | sale timer | reuse | [x] |
| 9 | testimonial-quote-carousel | home | [x] | Jimmy | reuse | [x] |
| 10 | editorial-image-with-text-overlay | home | [x] | Parr | reuse | [x] |
| 11 | editorial-layered-images | home | [x] | Forged in Cali | reuse | [x] |
| 12 | collection-nav-grid | home | [x] | Ride your own wave | reuse | [x] |
| 13 | features-multicolumn | home | [x] | Speedy / carbon | reuse | [x] |
| 14 | media-scrolling-gallery | home | [x] | @morningco | reuse | [x] |
| 15 | lead-capture-newsletter-band | home | [x] | submit yok | reuse | [x] |
| 16 | footer-columns-newsletter | home | [x] | kolonlar | reuse | [x] |
| 17 | collection-banner | collection | [x] | The Store | reuse | [x] |
| 18 | collection-nav-image-cards | collection | [x] | subcollections | reuse | [x] |
| 19 | product-showcase-grid-plp | collection | [x] | 23 products | reuse | [x] |
| 20 | collection-nav-grid | collections | [x] | index | reuse | [x] |
| 21 | search-results | search | [x] | tee | reuse | [x] |
| 22 | cart-page-main | cart | [x] | boş+dolu+qty | reuse | [x] |
| 23 | product-info-main | product-detail | [x] | Color | reuse | [x] |
| 24 | before-after-slider | product-detail | [x] | Land/Sea | reuse | [x] |
| 25 | promo-grid-banner | product-detail | [x] | image-grid | reuse | [x] |
| 26 | testimonial-quote-carousel | product-detail | [x] | They love us | reuse | [x] |
| 27 | product-showcase-related | product-detail | [x] | You may also like | reuse | [x] |
| 28 | editorial-custom-content | about-brand | [x] | about-us | reuse | [x] |
| 29 | faq-collapsible-tabs | faq-support | [x] | Shipping/Returns | reuse | [x] |
| 30 | page-content-main | contact | [x] | intro | reuse | [x] |
| 31 | lead-capture-form | contact | [x] | submit yok | reuse | [x] |
| 32 | blog-list-main | blog-list | [x] | News | reuse | [x] |
| 33 | blog-post-main | blog-post | [x] | New tee collection | reuse | [x] |
| 34 | page-content-main | not-found | [x] | 404 | reuse | [x] |

---

## Aday / leftover

[`candidates/venue-leftovers.md`](../candidates/venue-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / menu / PDP Color
- [x] CRO leftover: slider / countdown / FAQ / reviews
- [x] PNG bak → stateFindings
- [x] `npm run validate`
