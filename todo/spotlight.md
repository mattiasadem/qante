# Todo — Spotlight (Shopify free)

*Kaynak:* https://theme-spotlight-demo.myshopify.com/  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/spotlight  
*Tema (storefront, uydurulmadı):* **`Spotlight-8.0.0`** · `schema_name`: **Spotlight** · `schema_version`: **8.0.0** · `theme_store_id`: **null** · role `main` · id `130861334584`  
*Shop:* `theme-spotlight-demo.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/spotlight/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/spotlight/`, `evidence/spotlight/`, `todo/spotlight.md`, `candidates/spotlight-leftovers.md` |

**Kapsam satırı:**  
`Spotlight · default · Spotlight-8.0.0 / schema_name Spotlight 8.0.0 (theme_store_id null) · home→PDP→PLP→collections→search→cart→contact→blog→404 · 15 obs · 0 yeni şema · leftover: mega/hamburger yok · variant yok · empty blog · 404 routes`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header / featured / footer | [x] | [ ] |
| Mega | ⛔ yok | — |
| Predictive search `cap` | [x] | [ ] |
| Cart notification (drawer yok) | [x] | [ ] |
| Mobile hamburger 375+768 | ⛔ yok | — |
| PDP Cap Ebbets Corduroy (variant yok) | [x] | [ ] |
| PLP `/collections/all` | [x] | [ ] |
| Collections index `/collections` | [x] | [ ] |
| Search `/search?q=cap` | [x] | [ ] |
| Cart `/cart` boş + dolu + qty | [x] | [ ] |
| About | ⛔ 404 | leftover |
| Contact form (Send yok) | [x] | [ ] |
| Blog `/blogs/news` (yazı yok) | [x] | [ ] |
| 404 | [x] | [ ] |
| Footer | [x] | [ ] |

---

## Bileşen roster

15 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] | mega yok | reuse | [ ] |
| 2 | product-showcase-grid-featured | home | [ ] | başlıksız grid | reuse | [ ] |
| 3 | footer-columns-newsletter | home | [ ] | form yok | reuse | [ ] |
| 4 | global-predictive-search | home | [ ] | cap | reuse | [ ] |
| 5 | global-cart-drawer | home | [ ] | notification | reuse | [ ] |
| 6 | collection-banner | collection | [ ] | Products | reuse | [ ] |
| 7 | product-showcase-grid-plp | collection | [ ] | filtre yok | reuse | [ ] |
| 8 | collection-nav-grid | collections | [ ] | metin liste | reuse | [ ] |
| 9 | product-info-main | product-detail | [ ] | variant yok | reuse | [ ] |
| 10 | search-results | search | [ ] | cap ×4 | reuse | [ ] |
| 11 | cart-page-main | cart | [ ] | boş+dolu+qty | reuse | [ ] |
| 12 | page-content-main | contact | [ ] | başlık | reuse | [ ] |
| 13 | lead-capture-form | contact | [ ] | PII yok | reuse | [ ] |
| 14 | blog-list-main | blog-list | [ ] | boş News | reuse | [ ] |
| 15 | page-content-main | not-found | [ ] | 404 | reuse | [ ] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | **yok** — mega / nav link yok |
| global-menu-drawer | open | **yok** — hamburger/header-drawer yok (375/768/1440) |
| global-predictive-search | open/input | `cap` — kare bakılacak |
| global-cart-drawer | filled | cart-notification Cap Ebbets |
| cart-page-main | initial/filled/changed | boş → satır → qty+ |
| product-info-main | changed | **yok** — Default Title; renk ayrı handle |

Stop: email / account / checkout / newsletter submit / contact Send / PII

---

## Aday / leftover

[`candidates/spotlight-leftovers.md`](../candidates/spotlight-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact search / cart notification / cart qty
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
