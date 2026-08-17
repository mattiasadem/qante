# Todo — Horizon (Shopify first-party · free · Horizon family base)

*Kaynak:* https://theme-horizon-demo.myshopify.com  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/horizon  
*Tema (storefront, uydurulmadı):* **Horizon demo store 3.2.0** · `schema_name`: **Horizon** · `schema_version`: **3.2.0** · `theme_store_id`: **2481** · role `main` · id `182785212737`  
*Shop:* `se-horizon1-en-fk7v.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate (yazılıyor)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/horizon/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/horizon/`, `evidence/horizon/`, `todo/horizon.md`, `candidates/horizon-*` |

**Kapsam satırı:**  
`Horizon · default · Horizon demo store 3.2.0 / schema_name Horizon 3.2.0 (theme_store_id 2481) · home→PDP→PLP→collections index→search→cart→about→contact→blog→404 · 0 yeni şema · leftover: mega yok / 768 hamburger / search-header / footer-utilities / 404 routes`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero / featured product-list / footer newsletter | [x] obs | [ ] capture |
| Header kapalı + Shop hover 1440 (mega yok) | [x] obs | [ ] interact |
| Predictive search `wool` | [x] obs | [ ] interact 375/768/1440 |
| Mobile hamburger 375 | [x] obs | [ ] interact (768 leftover) |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| PDP Michael Shaggy Wool Cardigan Color Pumice→Black | [x] obs | [ ] interact |
| PLP `/collections/all` | [x] obs | [ ] capture |
| Collections index `/collections` | [x] obs | [ ] capture |
| Search `/search?q=wool` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/about` | [x] obs | [ ] capture |
| Contact form (submit yok) | [x] obs | [ ] capture |
| News list + Our flagship store | [x] obs | [ ] capture |
| Privacy policy (native) | [x] obs | [ ] capture |
| 404 leftover | [x] obs | [ ] capture |

---

## Home roster (DOM)

| # | Horizon / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header_section | `navigation-header-mega` | reuse · mega yok · delta |
| 2 | hero_TA4rQk | `hero-slideshow` | reuse · tek kare |
| 3 | product_list_qU3bEB | `product-showcase-grid-featured` | reuse · nested `product-price` block |
| 4 | migrated_footer_content | `footer-columns-newsletter` | reuse · submit yok |
| 5 | footer_utilities | — | leftover copyright |
| 6 | header-drawer | `global-menu-drawer` | reuse · 375 |
| 7 | #search-modal | `global-predictive-search` | reuse |
| 8 | cart-drawer-component | `global-cart-drawer` | reuse |

**Theme-blocks (gözlenen `data-block-id`):**  
`product-price` (`__price_yyMrWU` home kart; `__price_tVjtKg` PDP) · `variant-picker` (`__variant_picker_R3rGDr`) · `static-collection-card` (`__static-collection-card` ×7). Hero/header/footer’da `data-block-id` yok — nested custom elements (`header-drawer`, `email-signup-block`).

---

## Interact (pixel-check hedef)

- Header 1440 Shop hover — mega yok (dürüst)
- Hamburger 375: Shop + Contact + resource-card
- Predictive `wool`: sonuç listesi
- Cart drawer: empty → Michael Cardigan → qty
- Cart page: empty → filled → qty
- PDP Color: Pumice → Black

---

## Aday / leftover

[`candidates/horizon-leftovers.md`](../candidates/horizon-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / menu / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
