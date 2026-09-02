# Todo — PMG (Speedo Themes)

*Kaynak:* https://gamming-store-1.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/pmg-shopify-gaming-theme-shopify-os-2-0  
*Preset:* `default` · *Slug:* `pmg`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **PMG Game Store V-1.5.0** · `id` `123907113009` · `schema_name` **PMG game store** · `schema_version` **1.5.0** · `theme_store_id` **null** · `role` `main` · `handle` `"null"`  
*Walk host:* `gamming-store-1.myshopify.com`  
*Shopify.shop:* `gamming-store-1.myshopify.com`

**Storefront password:** vendor ürün sayfasında yayınlanan `1`. Aynı host `/password` — başka host yok.

**Durum:** Mod A walk + resmi 3vp + interact (devam)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/pmg/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| Parallel | yalnız `observations/pmg/`, `evidence/pmg/`, `todo/pmg.md`, `candidates/pmg-leftovers.md`, unlock helper |

**Kapsam satırı:**  
`PMG · default · PMG Game Store V-1.5.0 / schema_name PMG game store 1.5.0 · theme_store_id null · host gamming-store-1 · password 1 · home→PDP keyboard→PLP gaming-console→collections→search game→cart→about→faq→contact→blog→footer · 39 obs · 0 yeni şema · leftover: candidates/pmg-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/hero/categories/featured/banner/quotes/editorial/blog/footer | roster | [ ] |
| Mega SHOP ALL 1440 | interact | [ ] |
| Predictive search `keyboard` | interact | [ ] |
| Mobile hamburger 375+768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact | [ ] |
| PDP `/products/gaming-keyboard` | roster | [ ] |
| PLP `/collections/gaming-console` | roster | [ ] |
| Collections index `/collections` | roster | [ ] |
| Search `/search?q=game` | roster | [ ] |
| Cart `/cart` empty + filled | interact | [ ] |
| About `/pages/about` | roster | [ ] |
| FAQ `/pages/faqs` | roster | [ ] |
| Contact form (submit yok) | roster | [ ] |
| News + article | roster | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Bileşen roster (39 obs · 0 yeni şema)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] | SHOP ALL mega | reuse | [ ] |
| 2 | hero-slideshow | home | [ ] | BEST PRO GAMING | reuse | [ ] |
| 3 | collection-nav-image-cards | home | [ ] | GAME CATEGORIES | reuse | [ ] |
| 4 | product-showcase-grid-featured | home | [ ] | KEY ACCESSORIES | reuse | [ ] |
| 5 | editorial-image-with-text-overlay | home | [ ] | PRO GAMES | reuse | [ ] |
| 6 | testimonial-quote-carousel | home | [ ] | players say | reuse | [ ] |
| 7 | editorial-image-with-text | home | [ ] | best gaming company | reuse | [ ] |
| 8 | editorial-rich-text | home | [ ] | Dawn placeholder | reuse | [ ] |
| 9 | blog-list-main | home | [ ] | gaming blog | reuse | [ ] |
| 10 | footer-columns-newsletter | home | [ ] | newsletter yok | reuse | [ ] |
| 11 | global-cart-drawer | home | [ ] | #CartDrawer | reuse | [ ] |
| 12 | global-predictive-search | home | [ ] | #Search-In-Modal | reuse | [ ] |
| 13 | global-menu-drawer | home | [ ] | hamburger | reuse | [ ] |
| 14 | product-info-main | product-detail | [ ] | keyboard | reuse | [ ] |
| 15 | product-info-tabs | product-detail | [ ] | 3 tab | reuse | [ ] |
| 16 | editorial-image-with-text | product-detail | [ ] | fashion leftover copy | reuse | [ ] |
| 17 | editorial-image-with-text-overlay | product-detail | [ ] | Discover Sweats | reuse | [ ] |
| 18 | product-showcase-related | product-detail | [ ] | you may also like | reuse | [ ] |
| 19 | testimonial-quote-carousel | product-detail | [ ] | Customer Reviews | reuse | [ ] |
| 20 | collection-banner | collection | [ ] | GAMING CONSOLE | reuse | [ ] |
| 21 | product-showcase-grid-plp | collection | [ ] | FILTERS + grid | reuse | [ ] |
| 22 | collection-nav-grid | collections | [ ] | index | reuse | [ ] |
| 23 | search-results | search | [ ] | q=game | reuse | [ ] |
| 24 | cart-page-main | cart | [ ] | empty | reuse | [ ] |
| 25–31 | about blocks | about-brand | [ ] | overlay/iwt/stats/mission/logos/VR/CTA | reuse | [ ] |
| 32–34 | faq banner + tabs + CTA | faq-support | [ ] | tab_faq | reuse | [ ] |
| 35–37 | contact banner + form + icons | contact | [ ] | submit yok | reuse | [ ] |
| 38 | blog-list-main | blog-list | [ ] | News | reuse | [ ] |
| 39 | blog-post-main | blog-post | [ ] | journeying | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 SHOP ALL mega |
| global-predictive-search | input | [ ] katalog `keyboard` |
| global-menu-drawer | open | [ ] 375+768 |
| global-cart-drawer | filled + changed | [ ] |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed | [ ] qty (swatch yok) |
| faq-collapsible-tabs | changed | [ ] kategori / accordion |

---

## Aday / leftover

[`candidates/pmg-leftovers.md`](../candidates/pmg-leftovers.md)

---

## Stop kuralları

Checkout · account login · contact/newsletter submit · PII · gerçek ödeme yok. Sepete ekleme serbest.
