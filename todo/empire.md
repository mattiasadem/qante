# Todo — Empire (Pixel Union, paid)

*Kaynak:* https://empire-demo.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/empire  
*Preset:* `default` · Slug: `empire`  
*Yasak URL:* `empire-theme.myshopify.com` (password) — kullanılmadı

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **Copy of empire-v1-4-2** · `id` `32483901485` · `schema_name` **Empire** · `schema_version` **1.4.2** · `theme_store_id` **null** · `role` `main` · shop `empire-demo.myshopify.com`

**Beklenen vs canlı:** Theme Store listing Pixel Union Empire (güncel major). Canlı demo **Empire 1.4.2** ve `theme_store_id` **null**. null yazıldı; ID uydurulmadı.

**Durum:** Mod A walk + resmi 3vp + interact (yazılıyor)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/empire/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/empire/`, `evidence/empire/`, `todo/empire.md`, `candidates/empire-*.md` |

**Kapsam satırı:**  
`Empire · default · Copy of empire-v1-4-2 / schema_name Empire 1.4.2 · theme_store_id null · home→PDP→PLP→collections→search→cart→blog→policy→404 · 0 yeni şema · leftover: candidates/empire-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + mosaic/grid/featured×2/blog/footer | [ ] | [ ] |
| Mega | ⛔ yok (Home / Catalog düz link) | leftover |
| Predictive search `pen` | [ ] | [ ] 375/768/1440 |
| Mobile hamburger 375+768 | [ ] | [ ] open |
| Cart drawer | ⛔ yok (`/cart` sayfa) | leftover |
| Sticky ATC | ⛔ yok | leftover |
| Countdown / low-stock | ⛔ yok | leftover |
| PDP Super Pen Color red→blue | [ ] | [ ] |
| PLP `/collections/all` sort (filtre yok) | [ ] | [ ] |
| Collections index `/collections` | [ ] | [ ] |
| Search `?q=pen` | [ ] | [ ] |
| Cart `/cart` boş + dolu + qty | [ ] | [ ] |
| About / contact / FAQ | ⛔ 404 | leftover |
| Blog `/blogs/news` (yazı yok) | [ ] | [ ] |
| Policy privacy | [ ] | [ ] |
| 404 | [ ] | [ ] |
| Quick Order tablo | ⛔ şema yok | leftover |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] | mega yok | reuse | [ ] |
| 2 | global-menu-drawer | home | [ ] | 375/768 | reuse | [ ] |
| 3 | global-predictive-search | home | [ ] | pen | reuse | [ ] |
| 4 | promo-grid-banner | home | [ ] | mosaic | reuse | [ ] |
| 5 | promo-grid-banner-2 | home | [ ] | 4 Grid | reuse | [ ] |
| 6 | product-showcase-grid-featured | home | [ ] | placeholder | reuse | [ ] |
| 7 | product-showcase-grid-featured-2 | home | [ ] | placeholder | reuse | [ ] |
| 8 | blog-list-main | home | [ ] | placeholder | reuse | [ ] |
| 9 | footer-columns-newsletter | home | [ ] | form yok | reuse | [ ] |
| 10 | product-showcase-grid-plp | collection | [ ] | sort | reuse | [ ] |
| 11 | collection-nav-grid | collections | [ ] | 3 kart | reuse | [ ] |
| 12 | product-info-main | product-detail | [ ] | Color | reuse | [ ] |
| 13 | search-results | search | [ ] | pen | reuse | [ ] |
| 14 | cart-page-main | cart | [ ] | boş+dolu+qty | reuse | [ ] |
| 15 | blog-list-main | blog-list | [ ] | boş | reuse | [ ] |
| 16 | page-content-main | not-found | [ ] | 404 | reuse | [ ] |
| 17 | page-content-main | policy | [ ] | title | reuse | [ ] |

---

## Interact

| Bileşen | State | Not |
|---|---|---|
| mega | ⛔ | Home/Catalog düz `<a>` — panel yok |
| global-menu-drawer | open | 375/768: Login + para + Home/Catalog |
| global-predictive-search | input | `pen` → Super Pen $15.85 + Pages & Posts boş |
| product-info-main | initial, changed | Color red $15.85 → blue $18.01 |
| product-showcase-grid-plp | initial, changed | Sort Featured → Price: Low to High (facet yok) |
| cart-page-main | initial, filled, changed | boş → Super Pen red → adet 2 |
| sticky ATC / countdown / low-stock | ⛔ | yok |

---

## Aday / şemaya sığmayan

- [`candidates/empire-leftovers.md`](../candidates/empire-leftovers.md)

---

## Evidence backlog

- [ ] Home static 3vp
- [ ] PDP / PLP / collections / search 3vp
- [ ] Cart / blog / policy / 404 3vp
- [ ] Search / mobile menu / PDP renk / PLP sort / cart filled+qty
