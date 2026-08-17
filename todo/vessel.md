# Todo — Vessel (Shopify first-party / Horizon family)

*Kaynak:* https://theme-vessel-demo.myshopify.com  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/vessel  
*Tema (storefront, uydurulmadı):* **Updated copy of Vessel demo store 3.2.0** · `schema_name`: **Vessel** · `schema_version`: **3.4.0** · `theme_store_id`: **3628** · role `main` · id `159183306809`  
*Shop:* `horizon-vessel.myshopify.com`

**Durum:** ✅ Mod A walk + resmi 3vp + interact + validate  
**PR:** draft https://github.com/mattiasadem/qante/pull/146 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/vessel/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **30** |
| Evidence PNG | **111** |
| Parallel | yalnız `observations/vessel/`, `evidence/vessel/`, `todo/vessel.md`, `candidates/vessel-*.md` |

**Kapsam satırı:**  
`Vessel · default · Updated copy of Vessel demo store 3.2.0 / schema_name Vessel 3.4.0 · theme_store_id 3628 · home→PDP→PLP→collections→search→cart→about/contact→journal→404 · 30 obs · 0 yeni şema · Horizon nested theme-blocks · leftover: mega yok / hamburger 768 / drawer qty / PLP filter 375`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero / bestsellers / featured×2 / essentials / collection-list / footer | [x] | [x] |
| Header kapalı + NEW IN hover 1440 | [x] | [x] mega yok |
| Predictive search `mug` | [x] | [x] 375/768/1440 |
| Cart drawer empty + filled | [x] | [x] qty leftover |
| Mobile hamburger 375 | [x] | [x] 768/1440 N/A |
| PDP Baum Neu Canister Size 450ml→800ml | [x] | [x] $25→$27.50 |
| PLP `/collections/coffee-tea` + AVAILABILITY | [x] | [x] 768/1440; 375 leftover |
| Collections index `/collections` | [x] | [x] |
| Search `/search?q=mug` | [x] | [x] 91 ITEMS |
| Cart `/cart` empty + filled + qty | [x] | [x] 1→2 · $25→$50 |
| About `/pages/about-our-brand` | [x] | [x] |
| Contact form (Submit yok) | [x] | [x] |
| Journal `/blogs/news` + Discovering donabes | [x] | [x] |
| 404 | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Interact (pixel-checked)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial / open | Mega yok — düz nav. Account ikonu var, tıklanmadı |
| global-predictive-search | initial / input | Boş: 4 öneri. `mug`: Nest/Oct/Terra + View all |
| global-menu-drawer | open | 375 liste + ürün kart. 768/1440 hamburger 0px |
| global-cart-drawer | initial / filled | Boş sheet. Filled 375/768 Cart 1 Canister $25. Qty leftover |
| cart-page-main | initial / filled / changed | Boş → qty1 $25 → qty2 $50 |
| product-info-main | initial / changed | 450ml $25 → 800ml $27.50 |
| product-showcase-grid-plp | open / changed | 768/1440 In stock 67→62. 375 leftover |

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

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / menu / PDP Size / PLP filter
- [x] PNG bak → stateFindings
- [x] `npm run validate`
