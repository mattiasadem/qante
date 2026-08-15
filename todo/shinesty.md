# Todo — Shinesty (shinesty.com)

*Kaynak:* https://shinesty.com → https://www.shinesty.com/  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **www.shinesty.com** üzerinde `Shopify.theme` / `schema_name` **yok** (Next.js + Vercel headless).  
*Shopify.theme (shinesty.myshopify.com `/account/login`):* **[Scoutside] Portal Theme** · `schema_name`: **Skeleton theme** · `schema_version`: **1.0.0** · `theme_store_id`: null · role `main` · id `122209206341` · CDN `t/79`  
*Shop:* `shinesty.myshopify.com` · CMS home `cmsVersion` **v2** (Hero / CategoryPreview / FlyersFeature / CategoryTiles / LinkList)

**Durum:** Mod A walk açık · draft PR · **main'e merge yok**  
**PR:** (açılacak)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/shinesty/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/shinesty/`, `evidence/shinesty/`, `todo/shinesty.md`, `candidates/shinesty-*.md` |

**Kapsam satırı:**  
`Shinesty · default · Next.js headless (www) · Shopify.theme [Scoutside] Portal Theme / Skeleton theme 1.0.0 (myshopify login) · home→PDP→PLP→search→cart→content→footer→mobile · obs yazıldı · 0 yeni şema · leftover: Klaviyo/PII / customerdesk / reviews / workable`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero/trust/3-up/flyers/tiles/linklist/footer | [x] obs | [ ] capture |
| Header kapalı + Featured mega 1440 | [x] obs | [ ] interact |
| Search overlay / Searchspring | [x] obs | [ ] interact |
| Cart drawer empty + filled | [x] obs | [ ] interact |
| Mobile hamburger 375+768 | [x] obs | [ ] interact |
| PDP Trouser Snake Boa + size changed | [x] obs | [ ] |
| PLP `/collections/all-mens-underwear` | [x] obs | [ ] |
| Search `/search?q=ball` | [x] obs | [ ] |
| Cart `/cart` boş | [x] obs | [ ] |
| About `/pages/pinnacle-of-fashion` | [x] obs | [ ] |
| Returns `/pages/returns-and-exchanges` | [x] obs | [ ] |
| Privacy + terms | [x] obs | [ ] |
| Blog list + WFH post | [x] obs | [ ] |
| Locations | [x] obs | [ ] |
| Cooling LP + subscriptions LP | [x] obs | [ ] |
| 404 | [x] obs | [ ] |
| Contact / Help customerdesk | ⛔ leftover | — |
| Newsletter / refer / account | ⛔ PII | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 2 | editorial-image-with-text-overlay | home | [ ] | [x] | reuse | [ ] |
| 3 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 4 | promo-grid-banner | home | [ ] | [x] | reuse | [ ] |
| 5 | promo-grid-banner.2 | home | [ ] | [x] | reuse | [ ] |
| 6 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 7 | collection-nav-slider | home | [ ] | [x] | reuse | [ ] |
| 8 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 9 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 10 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 11 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 12 | navigation-breadcrumbs | collection | [ ] | [x] | reuse | [ ] |
| 13 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 14 | editorial-rich-text | collection | [ ] | [x] | reuse | [ ] |
| 15 | navigation-breadcrumbs | product-detail | [ ] | [x] | reuse | [ ] |
| 16 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 17 | features-multicolumn | product-detail | [ ] | [x] | reuse | [ ] |
| 18 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 19 | search-results | search | [ ] | [x] | reuse | [ ] |
| 20 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 21 | editorial-image-with-text-overlay | about-brand | [ ] | [x] | reuse | [ ] |
| 22 | blog-list-main | blog-list | [ ] | [x] | reuse | [ ] |
| 23 | blog-post-main | blog-post | [ ] | [x] | reuse | [ ] |
| 24 | page-content-main | policy | [ ] | [x] | reuse | [ ] |
| 25 | page-content-main.2 | policy | [ ] | [x] | reuse | [ ] |
| 26 | page-content-main | faq-support | [ ] | [x] | reuse | [ ] |
| 27 | page-content-main | contact | [ ] | [x] | reuse | [ ] |
| 28 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |
| 29–34 | cooling + subscriptions LP | landing-campaign | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 Featured/Men's hover |
| global-predictive-search | input | [ ] katalog kelimesi |
| global-cart-drawer | filled | [ ] ATC Boa / fallback |
| global-menu-drawer | open | [ ] 375/768 |
| product-info-main | changed | [ ] size |

---

## Aday / leftover

[`candidates/shinesty-leftovers.md`](../candidates/shinesty-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Mega / search / cart / menu / PDP size interact
- [ ] PNG bak → stateFindings
- [ ] Newsletter / refer / account — **yapılmayacak** (PII)
