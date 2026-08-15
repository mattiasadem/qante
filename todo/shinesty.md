# Todo — Shinesty (shinesty.com)

*Kaynak:* https://shinesty.com → https://www.shinesty.com/  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **www.shinesty.com** üzerinde `Shopify.theme` / `schema_name` **yok** (Next.js + Vercel headless).  
*Shopify.theme (shinesty.myshopify.com `/account/login`):* **[Scoutside] Portal Theme** · `schema_name`: **Skeleton theme** · `schema_version`: **1.0.0** · `theme_store_id`: null · role `main` · id `122209206341` · CDN `t/79`  
*Shop:* `shinesty.myshopify.com` · CMS home `cmsVersion` **v2** (Hero / CategoryPreview / FlyersFeature / CategoryTiles / LinkList)

**Durum:** Mod A walk **bitti** · draft PR · **main'e merge yok**  
**PR:** https://github.com/mattiasadem/qante/pull/94

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/shinesty/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/shinesty/`, `evidence/shinesty/`, `todo/shinesty.md`, `candidates/shinesty-*.md` |

**Kapsam satırı:**  
`Shinesty · default · Next.js headless (www) · Shopify.theme [Scoutside] Portal Theme / Skeleton theme 1.0.0 (myshopify login) · home→PDP→PLP→search→cart→content→footer→mobile · 34 obs · 0 yeni şema · 3vp + interact · leftover: Klaviyo/PII / KeepCart / customerdesk / reviews / workable`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero/trust/3-up/flyers/tiles/linklist/footer | [x] obs | [x] capture |
| Header kapalı + Featured mega 1440 | [x] obs | [x] interact |
| Search overlay / Searchspring | [x] obs | [x] interact |
| Cart drawer empty + filled | [x] obs | [x] interact |
| Mobile hamburger 375+768 | [x] obs | [x] interact |
| PDP Trouser Snake Boa + size changed | [x] obs | [x] interact (OOS notify) |
| PLP `/collections/all-mens-underwear` | [x] obs | [x] |
| Search `/search?q=ball` | [x] obs | [x] |
| Cart `/cart` boş | [x] obs | [x] |
| About `/pages/pinnacle-of-fashion` | [x] obs | [x] |
| Returns `/pages/returns-and-exchanges` | [x] obs | [x] |
| Privacy + terms | [x] obs | [x] |
| Blog list + WFH post | [x] obs | [x] |
| Locations | [x] obs | [x] |
| Cooling LP + subscriptions LP | [x] obs | [x] |
| 404 | [x] obs | [x] |
| Contact / Help customerdesk | ⛔ leftover | — |
| Newsletter / refer / account | ⛔ PII | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 2 | editorial-image-with-text-overlay | home | [x] | [x] | reuse | [x] |
| 3 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 4 | promo-grid-banner | home | [x] | [x] | reuse | [x] |
| 5 | promo-grid-banner.2 | home | [x] | [x] | reuse | [x] |
| 6 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 7 | collection-nav-slider | home | [x] | [x] | reuse | [x] |
| 8 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 9 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 10 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 11 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 12 | navigation-breadcrumbs | collection | [x] | [x] | reuse | [x] |
| 13 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 14 | editorial-rich-text | collection | [x] | [x] | reuse | [x] |
| 15 | navigation-breadcrumbs | product-detail | [x] | [x] | reuse | [x] |
| 16 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 17 | features-multicolumn | product-detail | [x] | [x] | reuse | [x] |
| 18 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 19 | search-results | search | [x] | [x] | reuse | [x] |
| 20 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 21 | editorial-image-with-text-overlay | about-brand | [x] | [x] | reuse | [x] |
| 22 | blog-list-main | blog-list | [x] | [x] | reuse | [x] |
| 23 | blog-post-main | blog-post | [x] | [x] | reuse | [x] |
| 24 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 25 | page-content-main.2 | policy | [x] | [x] | reuse | [x] |
| 26 | page-content-main | faq-support | [x] | [x] | reuse | [x] |
| 27 | page-content-main | contact | [x] | [x] | reuse | [x] |
| 28 | page-content-main | not-found | [x] | [x] | reuse | [x] |
| 29–34 | cooling + subscriptions LP | landing-campaign | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Featured hover — New Arrivals / collabs / best sellers |
| global-predictive-search | input | [x] Ask Jeeves… → blender (The Blender kartları) |
| global-cart-drawer | filled | [x] The Blender M Subscribe 19.99 (Boa OOS). KeepCart. /cart.js 404 |
| global-menu-drawer | open | [x] 375/768 hamburger |
| product-info-main | changed | [x] Boa M → He Gone notify (PII yok) |

---

## Aday / leftover

[`candidates/shinesty-leftovers.md`](../candidates/shinesty-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp
- [x] Mega / search / cart / menu / PDP size interact
- [x] PNG bak → stateFindings
- [x] Newsletter / refer / account — **yapılmayacak** (PII)
