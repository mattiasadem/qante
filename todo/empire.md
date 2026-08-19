# Todo — Empire (Pixel Union, paid)

*Kaynak:* https://empire-demo.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/empire  
*Preset:* `default` · Slug: `empire`  
*Yasak URL:* `empire-theme.myshopify.com` (password) — kullanılmadı

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **Copy of empire-v1-4-2** · `id` `32483901485` · `schema_name` **Empire** · `schema_version` **1.4.2** · `theme_store_id` **null** · `role` `main` · shop `empire-demo.myshopify.com`

**Beklenen vs canlı:** Theme Store listing güncel Pixel Union Empire. Canlı demo **Empire 1.4.2** ve `theme_store_id` **null**. null yazıldı; ID uydurulmadı.

**Durum:** Mod A walk + resmi 3vp + interact bitti · CRO leftover interact doğrulandı (2026-08-19)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/empire/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** |
| Observation | **17** |
| PNG | **64** |
| Parallel | yalnız `observations/empire/`, `evidence/empire/`, `todo/empire.md`, `candidates/empire-*.md` |

**Kapsam satırı:**  
`Empire · default · Copy of empire-v1-4-2 / schema_name Empire 1.4.2 · theme_store_id null · home→PDP→PLP→collections→search→cart→blog→policy→404 · 17 obs · 64 PNG · 0 yeni şema · leftover: candidates/empire-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + mosaic/grid/featured×2/blog/footer | ✅ | [x] |
| Mega | ⛔ yok (Home / Catalog düz link) | leftover |
| Predictive search `pen` | ✅ | [x] 375 overlay · 768/1440 flydown |
| Mobile hamburger 375+768 | ✅ | [x] open |
| Cart drawer | ⛔ yok (`/cart` sayfa) | leftover |
| Sticky ATC | ⛔ yok | leftover |
| Countdown / low-stock | ⛔ yok | leftover |
| PDP Super Pen Color red→blue | ✅ | [x] $15.85→$18.01 + görsel |
| PLP `/collections/all` sort (facet yok) | ✅ | [x] 375/768 modal · 1440 select |
| Collections index `/collections` | ✅ | [x] |
| Search `?q=pen` | ✅ | [x] |
| Cart `/cart` boş + dolu + qty | ✅ | [x] $15.85→$31.70 |
| About / contact / FAQ | ⛔ 404 | leftover |
| Blog `/blogs/news` (yazı yok) | ✅ | [x] |
| Policy privacy | ✅ | [x] |
| 404 | ✅ | [x] |
| Quick Order tablo | ⛔ şema yok | leftover |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [x] | mega yok | reuse | [x] |
| 2 | global-menu-drawer | home | [x] | 375/768 | reuse | [x] |
| 3 | global-predictive-search | home | [x] | pen | reuse | [x] |
| 4 | promo-grid-banner | home | [x] | mosaic foto | reuse | [x] |
| 5 | promo-grid-banner-2 | home | [x] | 4 Grid | reuse | [x] |
| 6 | product-showcase-grid-featured | home | [x] | placeholder | reuse | [x] |
| 7 | product-showcase-grid-featured-2 | home | [x] | placeholder | reuse | [x] |
| 8 | blog-list-main | home | [x] | placeholder | reuse | [x] |
| 9 | footer-columns-newsletter | home | [x] | form yok | reuse | [x] |
| 10 | product-showcase-grid-plp | collection | [x] | sort | reuse | [x] |
| 11 | collection-nav-grid | collections | [x] | 3 kart | reuse | [x] |
| 12 | product-info-main | product-detail | [x] | Color | reuse | [x] |
| 13 | search-results | search | [x] | pen | reuse | [x] |
| 14 | cart-page-main | cart | [x] | boş+dolu+qty | reuse | [x] |
| 15 | blog-list-main | blog-list | [x] | boş | reuse | [x] |
| 16 | page-content-main | not-found | [x] | 404 | reuse | [x] |
| 17 | page-content-main | policy | [x] | title | reuse | [x] |

---

## Interact (kareye bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| mega | ⛔ | Catalog düz `/collections/all`; hover panel yok |
| global-menu-drawer | open | 375/768: Login + USD + Close + Home/Catalog |
| global-predictive-search | input | 375: Cancel overlay + Super Pen. 1440: flydown + Pages & Posts boş |
| product-info-main | initial, changed | red $15.85 siyah stylus → blue $18.01 gümüş-mavi |
| product-showcase-grid-plp | initial, open, changed | facet yok; 375/768 sort modal; Oak $10.81 öne |
| cart-page-main | initial, filled, changed | boş → Super Pen red $15.85 → adet 2 / $31.70 |
| sticky ATC / countdown / low-stock | ⛔ | yok |

### CRO şemaları (observation yok → interact yok)

| schemaId | observation | interact |
|---|---|---|
| before-after-slider | ⛔ | — |
| commerce-tools-products-bundle | ⛔ | — |
| promo-banner-countdown | ⛔ | — |
| faq-collapsible-tabs | ⛔ | — (FAQ sayfası 404) |
| lead-capture-form | ⛔ | — |
| lead-capture-newsletter-band | ⛔ | — (`footer-columns-newsletter` ayrı şema) |
| comparison-quick-table | ⛔ | — |
| product-finder-quiz | ⛔ | — |
| testimonial-quote-carousel | ⛔ | — |
| media-shop-the-feed | ⛔ | — |
| media-scrolling-gallery | ⛔ | — |

Canlı doğrulama (2026-08-19): home section seti `home-promo-mosaic`, `home-promo-grid`, `home-featured-collection-1/2`, `home-blog-posts`, `home-twitter-feed`, `static-header/footer`. CRO DOM yok; footer `has-accordion` yalnız Main menu kolonu (FAQ değil). Newsletter form duruldu (PII).

---

## Aday / şemaya sığmayan

- [`candidates/empire-leftovers.md`](../candidates/empire-leftovers.md)

---

## Evidence backlog

- [x] Home static 3vp
- [x] PDP / PLP / collections / search 3vp
- [x] Cart / blog / policy / 404 3vp
- [x] Search / mobile menu / PDP renk / PLP sort / cart filled+qty
