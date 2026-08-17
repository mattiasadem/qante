# Todo — Sense (Shopify first-party / Theme Store)

*Kaynak:* https://theme-sense-demo.myshopify.com  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **[Sense] Theme Store demo (latest)** · `schema_name`: **Dawn** · `schema_version`: **2.5.0** · `theme_store_id`: **null** · role `main` · id `133090279632`  
*Beklenen (görev notu, storefront’ta yok):* Sense · theme_store_id 1356 · Shopify first-party  
*Shop:* `theme-sense-demo.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/sense/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/sense/`, `evidence/sense/`, `todo/sense.md`, `candidates/sense-*.md` |

**Kapsam satırı:**  
`Sense · default · [Sense] Theme Store demo (latest) / schema_name Dawn 2.5.0 (theme_store_id null) · home→PDP→PLP→search→cart/notification→about/contact→policy→blog→404 · 37 obs · 0 yeni şema · leftover: 404 / policies 404 / FAQ 404 / mega yok / cart-notification`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/IWT/featured/quote/collage/multicolumn/collection-list/newsletter/footer | [x] | [ ] capture |
| Mega | ⛔ yok | — |
| Predictive search `oil` | [x] | [ ] interact |
| Cart notification (drawer yok) | [x] | [ ] filled |
| Mobile hamburger 375+768 | [x] | [ ] open |
| PDP Lip Balm Flavor Lime→Berries | [x] | [ ] changed |
| PLP `/collections/skin` | [x] | [ ] capture |
| Search `/search?q=oil` | [x] | [ ] capture |
| Cart `/cart` boş + dolu + qty | [x] | [ ] interact |
| About+contact `/pages/about-us` | [x] | [ ] capture · form PII yok |
| Returns / Shipping | [x] | [ ] capture |
| Blog list + self-care article | [x] | [ ] capture |
| 404 | [x] | [ ] leftover + obs |
| Footer | [x] | [ ] capture |

---

## Bileşen roster

37 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse (mega yok) | [ ] |
| 3 | editorial-image-with-text | home | [ ] | [x] | reuse | [ ] |
| 4 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 5 | editorial-rich-text | home | [ ] | [x] | reuse | [ ] |
| 6 | media-mosaic-grid | home | [ ] | [x] | collage | [ ] |
| 7 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 8 | collection-nav-cards | home | [ ] | [x] | collection-list | [ ] |
| 9 | lead-capture-newsletter-band | home | [ ] | [x] | e-posta yok | [ ] |
| 10 | footer-columns-newsletter | home | [ ] | [x] | footer form yok | [ ] |
| 11 | global-predictive-search | home | [ ] | [x] | oil | [ ] |
| 12 | global-menu-drawer | home | [ ] | [x] | 375/768 | [ ] |
| 13 | global-cart-drawer | home | [ ] | [x] | notification | [ ] |
| 14 | collection-banner | collection | [ ] | [x] | reuse | [ ] |
| 15 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 16 | media-mosaic-grid | collection | [ ] | [x] | collage | [ ] |
| 17 | product-info-main | product-detail | [ ] | [x] | Flavor | [ ] |
| 18–22 | PDP quote / multi / IWT / video / related | product-detail | [ ] | [x] | reuse | [ ] |
| 23 | search-results | search | [ ] | [x] | reuse | [ ] |
| 24 | cart-page-main | cart | [ ] | [x] | boş+dolu+qty | [ ] |
| 25 | product-showcase-grid-featured | cart | [ ] | [x] | reuse | [ ] |
| 26–32 | about rich-text / multi / IWT / form | about-brand | [ ] | [x] | reuse | [ ] |
| 33 | page-content-main | policy | [ ] | [x] | returns | [ ] |
| 34 | page-content-main | shipping | [ ] | [x] | shipping | [ ] |
| 35 | blog-list-main | blog-list | [ ] | [x] | reuse | [ ] |
| 36 | blog-post-main | blog-post | [ ] | [x] | reuse | [ ] |
| 37 | page-content-main | not-found | [ ] | [x] | 404 aday | [ ] |

---

## Interact (piksel değişen / olmayan)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | **yok** — mega panel yok |
| global-predictive-search | input | `oil` (beklenen) |
| global-menu-drawer | open | 375/768; 1440 N/A |
| global-cart-drawer | filled | cart-notification (drawer yok) |
| cart-page-main | initial/filled/changed | boş → Lime satır → qty + |
| product-info-main | changed | Lime → Berries |

---

## Aday / leftover

[`candidates/sense-leftovers.md`](../candidates/sense-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact search / menu / cart notification / cart qty / PDP Flavor
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
