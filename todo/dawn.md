# Todo — Dawn (Shopify free / Theme Store official demo)

*Kaynak:* https://theme-dawn-demo.myshopify.com  
*Theme Store:* https://themes.shopify.com/themes/dawn  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **Dawn** · `schema_name`: **Dawn** · `schema_version`: **15.0.0** · `theme_store_id`: **887** · role `main` · id `129690763353`  
*Shop:* `theme-dawn-demo.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact (capture sırada)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/dawn/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/dawn/`, `evidence/dawn/`, `todo/dawn.md`, `candidates/dawn-leftovers.md` |

**Kapsam satırı:**  
`Dawn · default · Dawn / schema_name Dawn 15.0.0 / theme_store_id 887 · home→PDP Puff→PLP bags→/collections→search puff→cart→about→contact-us→news+origin story→404 · 29 obs · PNG TBD · 0 yeni şema`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/banner/rich-text/featured/collage/video/quotes/footer | [x] JSON | [ ] capture |
| Header kapalı + Bags dropdown 1440 | [x] JSON | [ ] (mega yok) |
| Predictive search `puff` | [x] JSON | [ ] |
| Mobile hamburger 375+768 + Bags nested | [x] JSON | [ ] (1440 menu-drawer 0px) |
| PDP Puff Color Emerald→Chocolate | [x] JSON | [ ] |
| PLP `/collections/bags` | [x] JSON | [ ] |
| Collections index `/collections` | [x] JSON | [ ] |
| Search `/search?q=puff` | [x] JSON | [ ] |
| Cart `/cart` empty + filled + qty | [x] JSON | [ ] |
| Cart notification (drawer yok) | [x] JSON | [ ] |
| About `/pages/about` | [x] JSON | [ ] |
| Contact `/pages/contact-us` form | [x] JSON | [ ] PII yok |
| News list + Mlouye origin story | [x] JSON | [ ] |
| 404 | [x] JSON | [ ] |

---

## Bileşen roster

29 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse (mega yok) | [ ] |
| 3 | editorial-image-with-text-overlay | home | [ ] | [x] | reuse | [ ] |
| 4 | editorial-rich-text | home | [ ] | [x] | reuse | [ ] |
| 5 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 6 | media-mosaic-grid | home | [ ] | [x] | collage | [ ] |
| 7 | media-video-hero | home | [ ] | [x] | reuse | [ ] |
| 8 | features-multicolumn | home | [ ] | [x] | quotes | [ ] |
| 9 | footer-columns-newsletter | home | [ ] | [x] | e-posta yok | [ ] |
| 10 | global-predictive-search | home | [ ] | [x] | puff | [ ] |
| 11 | global-menu-drawer | home | [ ] | [x] | 375/768 | [ ] |
| 12 | global-cart-drawer | home | [ ] | [x] | notification | [ ] |
| 13 | product-info-main | product-detail | [ ] | [x] | Color | [ ] |
| 14–15 | IWT + multi | product-detail | [ ] | [x] | reuse | [ ] |
| 16–17 | banner + PLP | collection | [ ] | [x] | reuse | [ ] |
| 18 | collection-nav-grid | collections | [ ] | [x] | 14 kart | [ ] |
| 19 | search-results | search | [ ] | [x] | puff 2 | [ ] |
| 20–21 | cart-page + featured | cart | [ ] | [x] | reuse | [ ] |
| 22–24 | multi / page / rich-text | about-brand | [ ] | [x] | reuse | [ ] |
| 25–26 | page + form | contact | [ ] | [x] | PII yok | [ ] |
| 27–28 | blog-list + post | blog | [ ] | [x] | reuse | [ ] |
| 29 | page-content-main | not-found | [ ] | [x] | 404 | [ ] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | mega **yok** — Bags `header__submenu` (capture sırada) |
| global-predictive-search | input | `puff` (Puff / Puff Large) |
| global-menu-drawer | open/changed | 375/768 + Bags nested |
| global-cart-drawer | filled | cart-notification |
| cart-page-main | initial/filled/changed | boş → Puff qty1 → plus |
| product-info-main | changed | Emerald → Chocolate |

---

## Aday / leftover

[`candidates/dawn-leftovers.md`](../candidates/dawn-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / menu / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
