# Todo — Brooklinen

*Kaynak:* https://www.brooklinen.com · *Preset:* `default` · *Slug:* `brooklinen`  
*Tema (storefront):* **Release 2026-Q-1** · `schema_name` **Dawn** · `schema_version` **7.0.0** · `theme_store_id` **null** · shop `brooklinen2.myshopify.com` · theme id `152306090074` · role `main`

**Durum:** Mod A first inventory — walk + resmi 3vp · validate clean  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/brooklinen/default/` |
| Capture | resmi `scripts/capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **38** |
| Evidence PNG | **114** (38×3vp) |
| Parallel | yalnız `observations/brooklinen/` · `evidence/brooklinen/` · `todo/brooklinen.md` · `candidates/brooklinen-leftovers.md` |

**Kapsam satırı:**  
`Brooklinen · default · Release 2026-Q-1 / Dawn 7.0.0 · theme_store_id null · home→PDP luxe-core-sheet-set→PLP best-sellers→search sheets→cart empty→blog list+post→footer · 38 obs · 114 PNG · 0 yeni şema · leftover: candidates/brooklinen-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home (nano bar, nav, heroes, category, sliders, spotlight, reviews, value props, press, retail promo, footer) | [x] | [x] |
| Header + cart drawer empty + search open + mobile menu | [x] | [x] |
| PDP `/products/luxe-core-sheet-set` | [x] | [x] |
| PLP `/collections/best-sellers` | [x] | [x] |
| Search `/search?q=sheets` | [x] | [x] |
| Cart `/cart` empty | [x] | [x] |
| Blog list `/blogs/brookliving` + article | [x] | [x] |
| Footer (home) | [x] | [x] |
| Checkout / login / account / newsletter submit | ⛔ PII dur | — |
| Yotpo reviews block · filled cart · mega hover interact | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | nano bar | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | sticky header | reuse | [x] |
| 3 | hero-slideshow | home | [x] | Classic Percale hero | reuse | [x] |
| 4 | product-showcase-featured | home | [x] | Shop the Collection | reuse | [x] |
| 5 | collection-nav-tabs | home | [x] | Shop by Category | reuse | [x] |
| 6 | hero-slideshow.2 | home | [x] | New colors hero | reuse | [x] |
| 7 | product-showcase-featured.2 | home | [x] | New Arrivals slider | reuse | [x] |
| 8 | promo-grid-banner | home | [x] | duo shop 4 tiles | reuse | [x] |
| 9 | promo-grid-banner.2 | home | [x] | Waffle/Cooling/Bundles | reuse | [x] |
| 10 | testimonial-quote-carousel | home | [x] | 175k reviews | reuse | [x] |
| 11 | features-multicolumn | home | [x] | Why Brooklinen | reuse | [x] |
| 12 | social-proof-brand-logos | home | [x] | In the News | reuse | [x] |
| 13 | editorial-image-with-text-overlay | home | [x] | Come Say Hi IRL | reuse | [x] |
| 14 | footer-columns-newsletter | home | [x] | submit yok | reuse | [x] |
| 15 | global-cart-drawer | home | [x] | empty drawer | reuse | [x] |
| 16 | global-predictive-search | home | [x] | search open | reuse | [x] |
| 17 | global-menu-drawer | home | [x] | hamburger | reuse | [x] |
| 18 | navigation-breadcrumbs | product-detail | [x] | | reuse | [x] |
| 19 | product-info-main | product-detail | [x] | Luxe Core Sheet Set | reuse | [x] |
| 20 | product-info-tabs | product-detail | [x] | Why You'll Love It | reuse | [x] |
| 21 | product-showcase-related | product-detail | [x] | Our Most Loved DY | reuse | [x] |
| 22 | comparison-quick-table | product-detail | [x] | Compare sheets | reuse | [x] |
| 23 | editorial-image-with-text | product-detail | [x] | Why New Luxe Sateen | reuse | [x] |
| 24 | product-showcase-related.2 | product-detail | [x] | Shop the Collection | reuse | [x] |
| 25 | media-shop-the-feed | product-detail | [x] | Brooklinen in the wild | reuse | [x] |
| 26 | trust-icon-row | collection | [x] | 175k reviews strip | reuse | [x] |
| 27 | navigation-breadcrumbs | collection | [x] | | reuse | [x] |
| 28 | collection-banner | collection | [x] | Best Sellers H1 | reuse | [x] |
| 29 | product-showcase-grid-plp | collection | [x] | facet şeridi | reuse | [x] |
| 30 | promo-grid-banner | collection | [x] | More to Explore | reuse | [x] |
| 31 | editorial-rich-text | collection | [x] | SEO block | reuse | [x] |
| 32 | search-results | search | [x] | sheets 166 results | reuse | [x] |
| 33 | promo-grid-banner | search | [x] | spotlight | reuse | [x] |
| 34 | navigation-breadcrumbs | blog-list | [x] | | reuse | [x] |
| 35 | blog-list-main | blog-list | [x] | Brookliving | reuse | [x] |
| 36 | navigation-breadcrumbs | blog-post | [x] | | reuse | [x] |
| 37 | blog-post-main | blog-post | [x] | Pillow Perfection | reuse | [x] |
| 38 | cart-page-main | cart | [x] | empty cart page | reuse | [x] |

---

## Aday / şemaya sığmayan

→ `candidates/brooklinen-leftovers.md`

---

## Evidence backlog

- [x] Home static 3vp (17 section + 3 chrome)
- [x] PDP / PLP / search 3vp
- [x] Blog list + post 3vp
- [x] Cart page empty 3vp
- [x] Drawer / search / menu viewport captures
- [ ] Interact depth (filled cart, mega hover, search query) — sıradaki tur
