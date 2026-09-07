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

**Durum:** Mod A walk + resmi 3vp + interact (2. deneme bitti)  
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
`PMG · default · PMG Game Store V-1.5.0 / schema_name PMG game store 1.5.0 · theme_store_id null · host gamming-store-1 · password 1 · home→PDP keyboard→PLP gaming-console→collections→search game→cart→about→faq→contact→blog→footer · 39 obs · 0 yeni şema · leftover: candidates/pmg-leftovers.md · interact: mega/search/cart/chair/FAQ kanıtlı; hamburger+hero changed missingStates`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/hero/categories/featured/banner/quotes/editorial/blog/footer | roster | [x] |
| Mega SHOP ALL 1440 | interact | [x] |
| Predictive search `keyboard` | interact | [x] |
| Mobile hamburger 375+768 | missingStates (2 deneme) | [ ] |
| Cart drawer empty + filled + qty | interact | [x] |
| PDP `/products/gaming-keyboard` | roster | [x] |
| PLP `/collections/gaming-console` | roster | [x] |
| Collections index `/collections` | roster | [x] |
| Search `/search?q=game` | roster | [x] |
| Cart `/cart` empty + filled | interact | [x] |
| About `/pages/about` | roster | [x] |
| FAQ `/pages/faqs` | roster | [x] |
| Contact form (submit yok) | roster | [x] |
| News + article | roster | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Bileşen roster (39 obs · 0 yeni şema)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [x] | SHOP ALL mega 1440 | reuse | [x] |
| 2 | hero-slideshow | home | [x] | BEST PRO GAMING; changed missing | reuse | [x] |
| 3 | collection-nav-image-cards | home | [x] | GAME CATEGORIES | reuse | [x] |
| 4 | product-showcase-grid-featured | home | [x] | hover overlay yok | reuse | [x] |
| 5 | editorial-image-with-text-overlay | home | [x] | PRO GAMES | reuse | [x] |
| 6 | testimonial-quote-carousel | home | [x] | players say | reuse | [x] |
| 7 | editorial-image-with-text | home | [x] | best gaming company | reuse | [x] |
| 8 | editorial-rich-text | home | [x] | Dawn placeholder | reuse | [x] |
| 9 | blog-list-main | home | [x] | gaming blog | reuse | [x] |
| 10 | footer-columns-newsletter | home | [x] | newsletter yok | reuse | [x] |
| 11 | global-cart-drawer | home | [x] | boş + dolu + qty | reuse | [x] |
| 12 | global-predictive-search | home | [x] | keyboard 5 ürün | reuse | [x] |
| 13 | global-menu-drawer | home | [x] | open missingStates | reuse | [x] |
| 14 | product-info-main | product-detail | [x] | keyboard statik; chair interact | reuse | [x] |
| 15 | product-info-tabs | product-detail | [x] | 3 tab | reuse | [x] |
| 16 | editorial-image-with-text | product-detail | [x] | fashion leftover copy | reuse | [x] |
| 17 | editorial-image-with-text-overlay | product-detail | [x] | Discover Sweats | reuse | [x] |
| 18 | product-showcase-related | product-detail | [x] | you may also like | reuse | [x] |
| 19 | testimonial-quote-carousel | product-detail | [x] | Customer Reviews | reuse | [x] |
| 20 | collection-banner | collection | [x] | GAMING CONSOLE | reuse | [x] |
| 21 | product-showcase-grid-plp | collection | [x] | FILTERS + grid | reuse | [x] |
| 22 | collection-nav-grid | collections | [x] | index | reuse | [x] |
| 23 | search-results | search | [x] | q=game | reuse | [x] |
| 24 | cart-page-main | cart | [x] | boş + dolu + qty | reuse | [x] |
| 25–31 | about blocks | about-brand | [x] | overlay/iwt/stats/mission/logos/VR/CTA | reuse | [x] |
| 32–34 | faq banner + tabs + CTA | faq-support | [x] | INSTALLATION GUIDE | reuse | [x] |
| 35–37 | contact banner + form + icons | contact | [x] | submit yok | reuse | [x] |
| 38 | blog-list-main | blog-list | [x] | News | reuse | [x] |
| 39 | blog-post-main | blog-post | [x] | journeying | reuse | [x] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 6 koleksiyon kartı |
| global-predictive-search | input | [x] katalog `keyboard` · 5 ürün |
| global-menu-drawer | open | missingStates — 2 deneme kapalı homepage |
| global-cart-drawer | initial + filled + changed | [x] boş / $449 qty1 / $898 qty2 |
| cart-page-main | filled + changed | [x] $449 → $898 |
| product-info-main | changed | [x] chair Color Blue→White |
| faq-collapsible-tabs | changed | [x] INSTALLATION GUIDE |
| hero-slideshow | changed | missingStates — 2 deneme byte-aynı |
| product-showcase-grid-featured | hover | kart overlay yok (375 aynı; toast olası) |

---

## Aday / leftover

[`candidates/pmg-leftovers.md`](../candidates/pmg-leftovers.md)

---

## Stop kuralları

Checkout · account login · contact/newsletter submit · PII · gerçek ödeme yok. Sepete ekleme serbest.
