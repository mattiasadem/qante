# Todo — Vessel (Shopify first-party / Horizon family)

*Kaynak:* https://theme-vessel-demo.myshopify.com  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/vessel  
*Tema (storefront, uydurulmadı):* **Updated copy of Vessel demo store 3.2.0** · `schema_name`: **Vessel** · `schema_version`: **3.4.0** · `theme_store_id`: **3628** · role `main` · id `159183306809`  
*Shop:* `horizon-vessel.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact (devam)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/vessel/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/vessel/`, `evidence/vessel/`, `todo/vessel.md`, `candidates/vessel-*.md` |

**Kapsam satırı:**  
`Vessel · default · Updated copy of Vessel demo store 3.2.0 / schema_name Vessel 3.4.0 · theme_store_id 3628 · home→PDP→PLP→collections→search→cart→about/contact→journal→404 · 30 obs · 0 yeni şema · Horizon nested theme-blocks`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero / bestsellers / featured×2 / essentials / collection-list / footer | [x] obs | [ ] capture |
| Header kapalı + NEW IN hover 1440 | [x] obs | [ ] interact |
| Predictive search `mug` | [x] obs | [ ] interact 375/768/1440 |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| Mobile hamburger 375 (+768 yoklanacak) | [x] obs | [ ] interact |
| PDP Baum Neu Canister Size 450ml→800ml | [x] obs | [ ] interact |
| PLP `/collections/coffee-tea` + AVAILABILITY | [x] obs | [ ] interact |
| Collections index `/collections` | [x] obs | [ ] capture |
| Search `/search?q=mug` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/about-our-brand` | [x] obs | [ ] capture |
| Contact form (Submit yok) | [x] obs | [ ] capture |
| Journal `/blogs/news` + Discovering donabes | [x] obs | [ ] capture |
| 404 | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Bileşen roster

30 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 2 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 3 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 4–5 | product-showcase-featured ×2 | home | [ ] | [x] | reuse | [ ] |
| 6 | product-showcase-grid-featured.2 | home | [ ] | [x] | reuse | [ ] |
| 7 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 8 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 9 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 10 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 11 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 12 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 13 | editorial-image-with-text | product-detail | [ ] | [x] | reuse | [ ] |
| 14 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 15 | collection-banner | collection | [ ] | [x] | reuse | [ ] |
| 16 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 17 | collection-nav-image-cards | collections | [ ] | [x] | reuse | [ ] |
| 18 | search-results | search | [ ] | [x] | reuse | [ ] |
| 19–20 | cart-page-main + featured | cart | [ ] | [x] | reuse | [ ] |
| 21–24 | about rich-text / IWT×2 / links | about-brand | [ ] | [x] | reuse | [ ] |
| 25–26 | page-content + form | contact | [ ] | [x] | reuse | [ ] |
| 27–28 | blog-list + blog-post | journal | [ ] | [x] | reuse | [ ] |
| 29–30 | 404 + discover grid | not-found | [ ] | [x] | reuse | [ ] |

---

## Horizon nested theme-blocks

Canlı HTML’de `<shopify-block>` yok. Section sarmalayıcı + iç web component:

- `header-component` / `header-drawer` / `header-menu`
- `product-card` + `slideshow-component` / `slideshow-slides`
- `variant-picker`
- `cart-drawer-component` + `dialog-component`
- `predictive-search-component`
- `facets-form-component` / `accordion-custom` / `floating-panel-component`
- `collection-links-component`

---

## Aday / leftover

[`candidates/vessel-leftovers.md`](../candidates/vessel-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Size / PLP filter
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
