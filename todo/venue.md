# Todo — Venue (Safe As Milk, paid)

*Kaynak:* https://venue-theme-morning.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/venue  
*Preset:* `default` · Morning — resmi Theme Store preview  
*Slug:* `venue`  
*Yasak URL:* `venue-theme.myshopify.com` · `venue-morning.myshopify.com` (password) — kullanılmadı  
*Sunset:* `venue-theme-sunset` kardeş preset leftover — bu walk değil

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **venue-18-2-1** · `id` `142511603760` · `schema_name` **Venue** · `schema_version` **18.2.1** · `theme_store_id` **null** · `role` `main` · shop `venue-theme-morning.myshopify.com`

**Beklenen vs canlı:** Theme Store listing güncel Safe As Milk Venue. Canlı demo **Venue 18.2.1** ve `theme_store_id` **null**. null yazıldı; ID uydurulmadı.

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/venue/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** |
| Observation | **34** |
| Parallel | yalnız `observations/venue/`, `evidence/venue/`, `todo/venue.md`, `candidates/venue-leftovers.md` |

**Kapsam satırı:**  
`Venue · default · venue-18-2-1 / schema_name Venue 18.2.1 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 34 obs · 0 yeni şema · leftover: candidates/venue-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/tabs/countdown/quote/editorial/collections/features/footer | roster + capture | [ ] |
| Mega STORE 1440 | interact | [ ] |
| Predictive search `tee` | interact 3vp | [ ] |
| Mobile hamburger 375 | interact | [ ] |
| Mobile hamburger 768 | ⛔ inline nav | leftover |
| Cart drawer empty + filled + qty | interact | [ ] |
| PDP Tucker Wallet Color Tan→Brown | interact | [ ] |
| PLP `/collections/all` | roster + capture | [ ] |
| Collections index `/collections` | roster + capture | [ ] |
| Search `/search?q=tee` | roster + capture | [ ] |
| Cart `/cart` empty + filled + qty | interact | [ ] |
| About `/pages/about-us` | roster + capture | [ ] |
| Contact form (submit yok) | roster + capture | [ ] |
| FAQ `/pages/faq` | roster + capture | [ ] |
| News + article | roster + capture | [ ] |
| 404 | roster + capture | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 STORE hover |
| global-predictive-search | input | [ ] 3vp `tee` |
| global-menu-drawer | open | [ ] 375; 768 leftover |
| global-cart-drawer | filled + changed | [ ] |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed | [ ] Tan→Brown |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | utility-bar | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | STORE mega | reuse | [ ] |
| 3 | global-menu-drawer | home | [ ] | 375 | reuse | [ ] |
| 4 | global-predictive-search | home | [ ] | tee | reuse | [ ] |
| 5 | global-cart-drawer | home | [ ] | #modal-cart | reuse | [ ] |
| 6 | hero-slideshow | home | [ ] | Less but better | reuse | [ ] |
| 7 | product-showcase-tabs | home | [ ] | featured collections | reuse | [ ] |
| 8 | promo-banner-countdown | home | [ ] | sale timer | reuse | [ ] |
| 9 | testimonial-quote-carousel | home | [ ] | Jimmy | reuse | [ ] |
| 10 | editorial-image-with-text-overlay | home | [ ] | Parr | reuse | [ ] |
| 11 | editorial-layered-images | home | [ ] | Forged in Cali | reuse | [ ] |
| 12 | collection-nav-grid | home | [ ] | Ride your own wave | reuse | [ ] |
| 13 | features-multicolumn | home | [ ] | Speedy / carbon | reuse | [ ] |
| 14 | media-scrolling-gallery | home | [ ] | @morningco | reuse | [ ] |
| 15 | lead-capture-newsletter-band | home | [ ] | submit yok | reuse | [ ] |
| 16 | footer-columns-newsletter | home | [ ] | kolonlar | reuse | [ ] |
| 17 | collection-banner | collection | [ ] | The Store | reuse | [ ] |
| 18 | collection-nav-image-cards | collection | [ ] | subcollections | reuse | [ ] |
| 19 | product-showcase-grid-plp | collection | [ ] | 23 products | reuse | [ ] |
| 20 | collection-nav-grid | collections | [ ] | index | reuse | [ ] |
| 21 | search-results | search | [ ] | tee | reuse | [ ] |
| 22 | cart-page-main | cart | [ ] | boş+dolu+qty | reuse | [ ] |
| 23 | product-info-main | product-detail | [ ] | Color | reuse | [ ] |
| 24 | before-after-slider | product-detail | [ ] | Land/Sea | reuse | [ ] |
| 25 | promo-grid-banner | product-detail | [ ] | image-grid | reuse | [ ] |
| 26 | testimonial-quote-carousel | product-detail | [ ] | They love us | reuse | [ ] |
| 27 | product-showcase-related | product-detail | [ ] | You may also like | reuse | [ ] |
| 28 | editorial-custom-content | about-brand | [ ] | about-us | reuse | [ ] |
| 29 | faq-collapsible-tabs | faq-support | [ ] | Shipping/Returns | reuse | [ ] |
| 30 | page-content-main | contact | [ ] | intro | reuse | [ ] |
| 31 | lead-capture-form | contact | [ ] | submit yok | reuse | [ ] |
| 32 | blog-list-main | blog-list | [ ] | News | reuse | [ ] |
| 33 | blog-post-main | blog-post | [ ] | New tee collection | reuse | [ ] |
| 34 | page-content-main | not-found | [ ] | 404 | reuse | [ ] |

---

## Aday / leftover

[`candidates/venue-leftovers.md`](../candidates/venue-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
