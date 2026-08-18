# Todo — Local (Krown, Shopify paid)

*Kaynak:* https://local-theme-main.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/local  
*Preset:* `default` · Light — resmi Theme Store preview (`local-build/light`)  
*Slug:* `local`  
*70-list:* View-demo-only **#61** — resmi main demo artık açık public shop

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **local-build/light** · `id` `139927814205` · `schema_name` **Local** · `schema_version` **4.1.0** · `theme_store_id` **null** · `role` `main`  
*Walk host:* `local-theme-main.myshopify.com`  
*Shopify.shop (JS):* `local-theme-light-demo.myshopify.com`

**Beklenen vs canlı:** Theme Store listing Krown Local $380. Canlı demo **Local 4.1.0** ve `theme_store_id` **null**. null yazıldı; ID uydurulmadı. Walk host ile `Shopify.shop` farklı — leftover.

**Durum:** Mod A walk + resmi 3vp + interact + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/local/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** |
| Observation | (capture sonrası) |
| Evidence PNG | (capture sonrası) |
| Parallel | yalnız `observations/local/`, `evidence/local/`, `todo/local.md`, `candidates/local-leftovers.md` |

**Kapsam satırı:**  
`Local · default · local-build/light / schema_name Local 4.1.0 · theme_store_id null · home→PDP hamburger→PLP fruits-berries→collections→search bread→cart→about/contact→FAQ→blog→404 · obs/PNG capture sonrası · 0 yeni şema · leftover: candidates/local-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/category/featured/promo/marquee/lifestyle/recipes/video/testimonials/blog/pickup/footer | roster | [ ] |
| Mega Categories 1440 | interact | [ ] |
| Predictive search `bread` | interact 3vp | [ ] |
| Mobile hamburger 375+768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact | [ ] |
| PDP Hamburger Size Medium→Large | interact | [ ] |
| PLP `/collections/fruits-berries` | roster | [ ] |
| Collections index `/collections` | roster | [ ] |
| Search `/search?q=bread` | roster | [ ] |
| Cart `/cart` empty + filled + qty | interact | [ ] |
| About `/pages/about-us` | roster | [ ] |
| Contact form (submit yok) | roster | [ ] |
| FAQ `/pages/faq` | roster | [ ] |
| News + grilling article | roster | [ ] |
| 404 | roster | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 Categories mega |
| global-predictive-search | input | [ ] 3vp `bread` |
| global-menu-drawer | open | [ ] 375+768 |
| global-cart-drawer | filled + changed | [ ] Hamburger qty |
| cart-page-main | filled + changed | [ ] Hamburger qty |
| product-info-main | changed | [ ] Medium → Large |

---

## Bileşen roster

45 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | BULKSAVE | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | Categories mega | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | Fresh Organic | reuse | [ ] |
| 4 | collection-nav-image-cards | home | [ ] | Shop by Category | reuse | [ ] |
| 5 | product-showcase-grid-featured | home | [ ] | Best Sellers | reuse | [ ] |
| 6 | promo-grid-banner | home | [ ] | Finest Bread | reuse | [ ] |
| 7 | product-showcase-grid-featured.2 | home | [ ] | Bread & Bakery | reuse | [ ] |
| 8 | editorial-image-with-text-overlay | home | [ ] | Locally sourced | reuse | [ ] |
| 9 | promo-scrolling-marquee | home | [ ] | New York | reuse | [ ] |
| 10 | editorial-image-with-text-overlay.2 | home | [ ] | Organic Food | reuse | [ ] |
| 11 | product-showcase-featured | home | [ ] | Keto Crunch | reuse | [ ] |
| 12 | promo-grid-banner.2 | home | [ ] | We promise | reuse | [ ] |
| 13 | collection-nav-icon-buttons | home | [ ] | Lifestyle | reuse | [ ] |
| 14 | product-showcase-grid-featured.3 | home | [ ] | Hot Meals | reuse | [ ] |
| 15 | blog-list-main | home | [ ] | Delicious Recipes | reuse | [ ] |
| 16 | product-showcase-grid-featured.4 | home | [ ] | Kitchenware | reuse | [ ] |
| 17 | media-shop-the-feed | home | [ ] | shoppable video | reuse | [ ] |
| 18 | collection-nav-slider | home | [ ] | Explore Organic | reuse | [ ] |
| 19 | testimonial-quote-carousel | home | [ ] | quotes | reuse | [ ] |
| 20 | blog-list-main.2 | home | [ ] | Latest Articles | reuse | [ ] |
| 21 | features-multicolumn | home | [ ] | Local Pickup | reuse | [ ] |
| 22 | footer-columns-newsletter | home | [ ] | submit yok | reuse | [ ] |
| 23 | global-predictive-search | home | [ ] | bread | reuse | [ ] |
| 24 | global-menu-drawer | home | [ ] | 375/768 | reuse | [ ] |
| 25 | global-cart-drawer | home | [ ] | hamburger | reuse | [ ] |
| 26 | collection-banner | collection | [ ] | fruits | reuse | [ ] |
| 27 | product-showcase-grid-plp | collection | [ ] | fruits | reuse | [ ] |
| 28 | editorial-image-with-text-overlay | collection | [ ] | Black Edition | reuse | [ ] |
| 29 | collection-nav-grid | collections | [ ] | index | reuse | [ ] |
| 30 | search-results | search | [ ] | bread | reuse | [ ] |
| 31 | cart-page-main | cart | [ ] | boş+dolu+qty | reuse | [ ] |
| 32 | product-info-main | product-detail | [ ] | Size | reuse | [ ] |
| 33–37 | about title/rich/IWT×2/featured | about-brand | [ ] | reuse | reuse | [ ] |
| 38–39 | contact title + form | contact | [ ] | PII yok | reuse | [ ] |
| 40 | blog-list-main | blog-list | [ ] | News | reuse | [ ] |
| 41–42 | article + more | blog-post | [ ] | reuse | reuse | [ ] |
| 43–44 | FAQ title + accordion | faq-support | [ ] | reuse | reuse | [ ] |
| 45 | page-content-main | not-found | [ ] | 404 | reuse | [ ] |

---

## Aday / leftover

[`candidates/local-leftovers.md`](../candidates/local-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu / cart drawer / cart qty / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
