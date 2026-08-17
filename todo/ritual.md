# Todo — Ritual (Shopify first-party, Horizon family)

*Kaynak:* https://theme-ritual-demo.myshopify.com  
*Preset:* `default` · Slug: `ritual` · Theme Store: https://themes.shopify.com/themes/ritual

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **Updated copy of Ritual demo store** · `id` `152770511037` · `schema_name` **Ritual** · `schema_version` **3.4.0** · `theme_store_id` **3625** · `role` `main` · shop `horizon-reborn.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact (yazılıyor)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/ritual/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **31** |
| Parallel | yalnız `observations/ritual/`, `evidence/ritual/`, `todo/ritual.md`, `candidates/ritual-*.md` |

**Kapsam satırı:**  
`Ritual · default · Updated copy of Ritual demo store / Ritual 3.4.0 · theme_store_id 3625 · Horizon (horizon-reborn) · home→PDP→PLP→collections→search→cart/drawer→about→contact→blog→404 · 31 obs · 0 yeni şema · leftover: candidates/ritual-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/hero/collections/featured/arrivals/layered/marquee/footer | [x] obs | [ ] capture |
| Mega | ⛔ yok | leftover |
| Predictive search `tee` | [x] obs | [ ] interact |
| Cart drawer empty/filled/qty | [x] obs | [ ] interact |
| Mobile menu 375 (768 hamburger 0×0) | [x] obs | [ ] interact |
| PDP `/products/rose-11-bag-1` Color Red→Ivory | [x] obs | [ ] interact |
| PLP `/collections/tops` | [x] obs | [ ] capture |
| Collections index `/collections` | [x] obs | [ ] capture |
| Search `/search?q=tee` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/about-us` | [x] obs | [ ] capture |
| Contact form (submit yok) | [x] obs | [ ] capture |
| Shipping & Returns | [x] obs | [ ] capture |
| Blog `/blogs/news` + Celeb Style | [x] obs | [ ] capture |
| 404 leftover + Discover something new | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Bileşen roster

31 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] | [x] | reuse (mega yok) | [ ] |
| 2 | editorial-image-with-text-overlay | home | [ ] | [x] | reuse | [ ] |
| 3 | collection-nav-cards | home | [ ] | [x] | reuse | [ ] |
| 4 | product-showcase-featured | home | [ ] | [x] | reuse | [ ] |
| 5 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 6 | hero-slideshow | home | [ ] | [x] | layered | [ ] |
| 7 | promo-scrolling-marquee | home | [ ] | [x] | reuse | [ ] |
| 8 | footer-columns-newsletter | home | [ ] | [x] | form yok | [ ] |
| 9 | global-predictive-search | home | [ ] | [x] | tee | [ ] |
| 10 | global-menu-drawer | home | [ ] | [x] | 375 | [ ] |
| 11 | global-cart-drawer | home | [ ] | [x] | empty/filled/qty | [ ] |
| 12 | product-info-main | product-detail | [ ] | [x] | Color | [ ] |
| 13 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 14 | collection-nav-slider | product-detail | [ ] | [x] | links | [ ] |
| 15 | collection-banner | collection | [ ] | [x] | reuse | [ ] |
| 16 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 17 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 18 | search-results | search | [ ] | [x] | reuse | [ ] |
| 19 | cart-page-main | cart | [ ] | [x] | empty+filled+qty | [ ] |
| 20 | product-showcase-grid-featured | cart | [ ] | [x] | reuse | [ ] |
| 21–24 | about rich / hero / cards | about-brand | [ ] | [x] | reuse | [ ] |
| 25–26 | contact copy + form | contact | [ ] | [x] | PII yok | [ ] |
| 27 | page-content-main | policy | [ ] | [x] | shipping | [ ] |
| 28 | blog-list-main | blog-list | [ ] | [x] | reuse | [ ] |
| 29 | blog-post-main | blog-post | [ ] | [x] | reuse | [ ] |
| 30–31 | 404 + discover | not-found | [ ] | [x] | leftover | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | ⛔ mega yok |
| global-predictive-search | open + input `tee` | [ ] |
| global-menu-drawer | open 375 | [ ] 768 leftover |
| global-cart-drawer | initial / filled / changed | [ ] |
| cart-page-main | initial / filled / changed | [ ] |
| product-info-main | changed Color Red→Ivory | [ ] |

---

## Aday / leftover

[`candidates/ritual-leftovers.md`](../candidates/ritual-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact search / menu / cart / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
