# Todo — Atelier (Shopify first-party, free)

*Kaynak:* https://theme-atelier-demo.myshopify.com  
*Preset:* `default` · Slug: `atelier`  
*Theme Store:* https://themes.shopify.com/themes/atelier  

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **Updated copy of Atelier demo store 3.2.0** · `id` `184916082986` · `schema_name` **Atelier** · `schema_version` **3.4.0** · `theme_store_id` **3621** · `role` `main` · shop `se-horizon4-en-umir.myshopify.com`

**Yanlış URL:** `atelier-theme-demo.myshopify.com` → `/password` (kullanılmadı).

**Durum:** ✅ Mod A walk + resmi 3vp + interact + CRO interact + validate  
**PR:** (bu tur — CRO interact)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/atelier/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** |
| Observation | **30** |
| PNG | **120** |
| Parallel | yalnız `observations/atelier/`, `evidence/atelier/`, `todo/atelier.md`, `candidates/atelier-*.md` |

**Kapsam satırı:**  
`Atelier · default · Updated copy of Atelier demo store 3.2.0 / Atelier 3.4.0 · theme_store_id 3621 · home→PDP→PLP→collections→search→cart→about→contact→blog→404 · 30 obs · 120 PNG · 0 yeni şema · CRO interact: before-after-slider + lead-capture-form · leftover: candidates/atelier-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero/collection-links/featured/grid/process/comparison/footer | [x] | [x] |
| Mega NEW IN 1440 | [x] | [x] SERA MIA / MONOLIT / NEO |
| Predictive search `bag` | [x] | [x] 375/768/1440 |
| Cart drawer empty/filled/qty | [x] | [x] $415 → $830 |
| Mobile menu 375 (+ Bags drill) | [x] | [x] · 768 hamburger 0px leftover |
| PDP Louise Slide Sandal Size 35→36 | [x] | [x] |
| PLP `/collections/shoulder-bags` | [x] | [x] |
| Collections index `/collections` | [x] | [x] |
| Search `/search?q=bag` | [x] | [x] 241 items |
| Cart `/cart` empty + filled + qty | [x] | [x] $415 → $830 |
| About `/pages/about-us` | [x] | [x] |
| Contact form (SUBMIT yok) | [x] | [x] |
| Shipping `/pages/shipping-policy` | [x] | [x] |
| Blog `/blogs/news` + Designer post | [x] | [x] |
| 404 leftover | [x] | [x] |
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
| mega | open 1440 | NEW IN → SERA MIA / MONOLIT / NEO + 3 Monolit $475 |
| mobile menu | open/changed 375 | hamburger + Bags TYPE/COLLECTIONS/GIFTS (768 0px leftover) |
| global-predictive-search | initial, input | boş Atlas öneri; `bag` → Mini Flex / Louise + VIEW ALL |
| global-cart-drawer | initial, filled, changed | boş → Louise $415 adet 1 → adet 2 / $830 |
| product-info-main | initial, changed | Size 35 → 36 (fiyat $415) |
| cart-page-main | initial, filled, changed | boş → Louise $415 → $830 |
| **before-after-slider** | initial, changed | kol ortada → sağa sürükle; büyük çanta baskın |
| **lead-capture-form** | initial, input | boş form → Comment dolu (PII yok; SUBMIT yok) |

---

## Aday / şemaya sığmayan

- [`candidates/atelier-leftovers.md`](../candidates/atelier-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / menu 375 / PDP Size
- [x] CRO interact: before-after-slider (drag) + lead-capture-form (comment fill)
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
