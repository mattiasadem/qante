# Todo — Local (Krown, Shopify paid)

*Kaynak:* https://local-theme-main.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/local  
*Preset:* `default` · Light — resmi Theme Store preview (`local-build/light`)  
*Slug:* `local`  
*70-list:* View-demo-only **#61** — resmi main demo artık açık public shop

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **local-build/light** · `id` `139927814205` · `schema_name` **Local** · `schema_version` **4.2.0** · `theme_store_id` **null** · `role` `main`  
*Walk host:* `local-theme-main.myshopify.com`  
*Shopify.shop (JS):* `local-theme-light-demo.myshopify.com`

**Beklenen vs canlı:** Theme Store listing Krown Local $380. Canlı demo **Local 4.2.0** ve `theme_store_id` **null**. null yazıldı; ID uydurulmadı. Walk host ile `Shopify.shop` farklı — leftover.

**Durum:** Mod A walk + resmi 3vp + interact + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/local/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** |
| Observation | **45** |
| Evidence PNG | **154** |
| Parallel | yalnız `observations/local/`, `evidence/local/`, `todo/local.md`, `candidates/local-leftovers.md` |

**Kapsam satırı:**  
`Local · default · local-build/light / schema_name Local 4.2.0 · theme_store_id null · home→PDP hamburger→PLP fruits-berries→collections→search bread→cart→about/contact→FAQ→blog→404 · 45 obs · 154 PNG · 0 yeni şema · leftover: candidates/local-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/category/featured/promo/marquee/lifestyle/recipes/video/testimonials/blog/pickup/footer | roster | [x] |
| Mega Categories 1440 | interact | [x] |
| Predictive search `bread` | interact 3vp | [x] tuş; fill overlay yok |
| Mobile hamburger 375+768 | interact | [x] |
| Cart drawer empty + filled + qty | interact | [x] 1→2 / $4.50→$9.00 |
| PDP Hamburger Size Medium→Large | interact | [x] $4.50→$5.50 |
| PLP `/collections/fruits-berries` | roster | [x] |
| Collections index `/collections` | roster | [x] |
| Search `/search?q=bread` | roster | [x] |
| Cart `/cart` empty + filled + qty | interact | [x] 1→2 / $4.50→$9.00 |
| About `/pages/about-us` | roster | [x] |
| Contact form (submit yok) | roster | [x] |
| FAQ `/pages/faq` | roster | [x] |
| News + grilling article | roster | [x] |
| 404 | roster | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Categories mega |
| global-predictive-search | input | [x] 3vp `bread` öneri+ürün |
| global-menu-drawer | open | [x] 375+768; 1440 N/A |
| global-cart-drawer | filled + changed | [x] (1) $4.50 → (2) $9.00 |
| cart-page-main | filled + changed | [x] (1) $4.50 → (2) $9.00 |
| product-info-main | changed | [x] Medium $4.50 → Large $5.50 |

---

## Bileşen roster

45 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | BULKSAVE | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | Categories mega | reuse | [x] |
| 3 | hero-slideshow | home | [x] | Fresh Organic | reuse | [x] |
| 4 | collection-nav-image-cards | home | [x] | Shop by Category | reuse | [x] |
| 5 | product-showcase-grid-featured | home | [x] | Best Sellers | reuse | [x] |
| 6 | promo-grid-banner | home | [x] | Finest Bread | reuse | [x] |
| 7 | product-showcase-grid-featured.2 | home | [x] | Bread & Bakery | reuse | [x] |
| 8 | editorial-image-with-text-overlay | home | [x] | Locally sourced | reuse | [x] |
| 9 | promo-scrolling-marquee | home | [x] | New York | reuse | [x] |
| 10 | editorial-image-with-text-overlay.2 | home | [x] | Organic Food | reuse | [x] |
| 11 | product-showcase-featured | home | [x] | Keto Crunch | reuse | [x] |
| 12 | promo-grid-banner.2 | home | [x] | We promise | reuse | [x] |
| 13 | collection-nav-icon-buttons | home | [x] | Lifestyle | reuse | [x] |
| 14 | product-showcase-grid-featured.3 | home | [x] | Hot Meals | reuse | [x] |
| 15 | editorial-image-with-text | home | [x] | Delicious Recipes | reuse | [x] |
| 16 | product-showcase-grid-featured.4 | home | [x] | Kitchenware | reuse | [x] |
| 17 | media-shop-the-feed | home | [x] | shoppable video | reuse | [x] |
| 18 | media-lookbook-banner | home | [x] | Explore Organic hotspot | reuse | [x] |
| 19 | testimonial-quote-carousel | home | [x] | quotes | reuse | [x] |
| 20 | blog-list-main.2 | home | [x] | Latest Articles | reuse | [x] |
| 21 | features-multicolumn | home | [x] | Local Pickup | reuse | [x] |
| 22 | footer-columns-newsletter | home | [x] | submit yok | reuse | [x] |
| 23 | global-predictive-search | home | [x] | bread | reuse | [x] |
| 24 | global-menu-drawer | home | [x] | 375/768 | reuse | [x] |
| 25 | global-cart-drawer | home | [x] | hamburger | reuse | [x] |
| 26 | collection-banner | collection | [x] | fruits | reuse | [x] |
| 27 | product-showcase-grid-plp | collection | [x] | fruits | reuse | [x] |
| 28 | editorial-image-with-text-overlay | collection | [x] | Black Edition | reuse | [x] |
| 29 | collection-nav-grid | collections | [x] | index | reuse | [x] |
| 30 | search-results | search | [x] | bread | reuse | [x] |
| 31 | cart-page-main | cart | [x] | boş+dolu+qty | reuse | [x] |
| 32 | product-info-main | product-detail | [x] | Size | reuse | [x] |
| 33–37 | about title/rich/IWT×2/featured | about-brand | [x] | reuse | reuse | [x] |
| 38–39 | contact title + form | contact | [x] | PII yok | reuse | [x] |
| 40 | blog-list-main | blog-list | [x] | News | reuse | [x] |
| 41–42 | article + more | blog-post | [x] | reuse | reuse | [x] |
| 43–44 | FAQ title + accordion | faq-support | [x] | reuse | reuse | [x] |
| 45 | page-content-main | not-found | [x] | 404 | reuse | [x] |

---

## Aday / leftover

[`candidates/local-leftovers.md`](../candidates/local-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / menu / cart drawer / cart qty / PDP Size
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 65 temiz · **0 error** · 0 warn
