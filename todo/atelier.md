# Todo — Atelier (Shopify first-party, free)

*Kaynak:* https://theme-atelier-demo.myshopify.com  
*Preset:* `default` · Slug: `atelier`  
*Theme Store:* https://themes.shopify.com/themes/atelier  

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **Updated copy of Atelier demo store 3.2.0** · `id` `184916082986` · `schema_name` **Atelier** · `schema_version` **3.4.0** · `theme_store_id` **3621** · `role` `main` · shop `se-horizon4-en-umir.myshopify.com`

**Yanlış URL:** `atelier-theme-demo.myshopify.com` → `/password` (kullanılmadı).

**Durum:** Mod A walk + resmi 3vp + interact (yazılıyor)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/atelier/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** |
| Observation | **30** |
| Parallel | yalnız `observations/atelier/`, `evidence/atelier/`, `todo/atelier.md`, `candidates/atelier-*.md` |

**Kapsam satırı:**  
`Atelier · default · Updated copy of Atelier demo store 3.2.0 / Atelier 3.4.0 · theme_store_id 3621 · home→PDP→PLP→collections→search→cart→about→contact→blog→404 · 30 obs · 0 yeni şema · leftover: candidates/atelier-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero/collection-links/featured/grid/process/comparison/footer | [x] obs | [ ] capture |
| Mega NEW IN 1440 | [x] obs | [ ] interact |
| Predictive search `bag` | [x] obs | [ ] interact |
| Cart drawer empty/filled/qty | [x] obs | [ ] interact |
| Mobile menu 375 (+ Bags drill) | [x] obs | [ ] interact · 768 hamburger 0px leftover |
| PDP Louise Slide Sandal Size 35→36 | [x] obs | [ ] interact |
| PLP `/collections/shoulder-bags` | [x] obs | [ ] capture |
| Collections index `/collections` | [x] obs | [ ] capture |
| Search `/search?q=bag` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/about-us` | [x] obs | [ ] capture |
| Contact form (SUBMIT yok) | [x] obs | [ ] capture |
| Shipping `/pages/shipping-policy` | [x] obs | [ ] capture |
| Blog `/blogs/news` + Designer post | [x] obs | [ ] capture |
| 404 leftover | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Horizon / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header_section | `navigation-header-mega` | reuse · overlay + mega |
| 2 | hero_iyt6zg | `hero-slideshow` | reuse · tek slayt |
| 3 | collection_links_Ut4aMz | `collection-nav-image-cards` | reuse |
| 4 | featured_product_mTUbKC | `product-showcase-featured` | reuse |
| 5 | product_list_UwRqN4 | `product-showcase-grid-featured` | reuse |
| 6 | hero_MVUtj6 | `editorial-image-with-text-overlay` | reuse |
| 7 | section_K7gyKH | `before-after-slider` | reuse · comparison-slider |
| 8 | migrated_footer_content | `footer-columns-newsletter` | reuse · submit yok |
| 9 | footer_utilities | — | leftover 60px |
| 10 | header-drawer | `global-menu-drawer` | reuse · 375 |
| 11 | predictive-search | `global-predictive-search` | reuse |
| 12 | cart-drawer-component | `global-cart-drawer` | reuse |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| mega | open 1440 | NEW IN → SERA MIA / MONOLIT / NEO (capture sonrası bak) |
| mobile menu | open/changed 375 | hamburger + Bags (768 0px leftover) |
| global-predictive-search | open, input | `bag` |
| global-cart-drawer | initial, filled, changed | Louise $415 adet |
| product-info-main | initial, changed | Size 35 → 36 |
| cart-page-main | initial, filled, changed | boş → Louise → adet |

---

## Aday / şemaya sığmayan

- [`candidates/atelier-leftovers.md`](../candidates/atelier-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu 375 / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
