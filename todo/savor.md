# Todo — Savor (Shopify first-party · free · Horizon family)

*Kaynak:* https://savor-theme-demo.myshopify.com  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/savor  
*Tema (storefront, uydurulmadı):* **Updated copy of Savor demo store 3.2.0** · `schema_name`: **Savor** · `schema_version`: **3.4.0** · `theme_store_id`: **3626** · role `main` · id `141564117043`  
*Shop:* `se-horizon7-en-erc6.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact (yazıldı; capture sırada)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/savor/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/savor/`, `evidence/savor/`, `todo/savor.md`, `candidates/savor-*.md` |

**Kapsam satırı:**  
`Savor · default · Updated copy of Savor demo store 3.2.0 / schema_name Savor 3.4.0 · theme_store_id 3626 · home→PDP→PLP→collections→search→cart/drawer→about/contact→faq→blog→404 · 27 obs · 0 yeni şema · leftover: candidates/savor-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero / product_list / video / footer | [x] obs | [ ] capture |
| Header kapalı + Shop mega 768/1440 | [x] obs | [ ] interact |
| Predictive search `sauce` | [x] obs | [ ] interact 375/768/1440 |
| Cart drawer empty/filled/qty | [x] obs | [ ] interact |
| Mobile hamburger 375 (768 0×0 leftover) | [x] obs | [ ] interact |
| PDP The Original Bottle Pack Size 1→2 | [x] obs | [ ] interact |
| PLP `/collections/barbecue-sauces` | [x] obs | [ ] capture |
| Collections index `/collections` | [x] obs | [ ] capture |
| Search `/search?q=sauce` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/about-us` | [x] obs | [ ] capture |
| Contact form (submit yok) | [x] obs | [ ] capture |
| FAQ RTE | [x] obs | [ ] capture |
| Recipes `/blogs/news` + Sweet Honey Party Ribs | [x] obs | [ ] capture |
| 404 leftover | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Horizon / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header_section / `#header-component` | `navigation-header-mega` | reuse · transparent overlay |
| 2 | hero_RkimKJ | `hero-slideshow` | reuse · tek slayt |
| 3 | product_list_X8Q7bi | `product-showcase-grid-featured` | reuse · product-card + CHOOSE |
| 4 | section_RhpYRt | `media-video-hero` | reuse · deferred-media |
| 5 | custom_section_76dqAh | `footer-columns-newsletter` | reuse · e-posta submit yok |
| 6 | footer_utilities | — | leftover © |
| 7 | search-modal | `global-predictive-search` | reuse |
| 8 | header-drawer | `global-menu-drawer` | reuse · 375 |
| 9 | cart-drawer-component | `global-cart-drawer` | reuse |

Horizon nested theme-blocks (görülen custom elements): `header-component` · `header-menu` · `header-drawer` · `slideshow-component` · `product-card` · `quick-add-component` · `predictive-search-component` · `cart-drawer-component` · `deferred-media` · `shopify-block` (blog/RTE).

---

## Interact (yazıldı; pixel-check capture sonrası)

- Header 768/1440 Shop hover → `#submenu-1` BARBECUE/DIPPING/GIFTS/MERCH + koleksiyon kartları
- Hamburger 375: SHOP çocukları düz liste
- Predictive `sauce`: 13 overlay sonuç (The Original / Gluten-Free…)
- Cart drawer: boş → ATC The Original → plus
- Cart page: boş → dolu → qty
- PDP: 1 Bottle $9.49 → 2 Bottles $18.98

---

## Aday / leftover

[`candidates/savor-leftovers.md`](../candidates/savor-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP pack / cart qty
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
