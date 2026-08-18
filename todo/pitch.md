# Todo — Pitch (Shopify first-party · free · Horizon family)

*Kaynak:* https://theme-pitch-demo.myshopify.com/  
*Preset:* `default`  
*Slug:* `pitch`  
*Theme Store:* https://themes.shopify.com/themes/pitch  

*Tema (storefront, uydurulmadı):* `Shopify.theme.name` **Updated copy of Pitch demo store 3.2.0** · `id` `183686005031` · `schema_name` **Pitch** · `schema_version` **3.4.0** · `theme_store_id` **3620** · `role` `main`  
*Shop:* `se-horizon2-en-2v6j.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate **devam** (pre-capture PR)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/pitch/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **34** |
| PNG | *(capture sonrası)* |
| Parallel | yalnız `observations/pitch/`, `evidence/pitch/`, `todo/pitch.md`, `candidates/pitch-leftovers.md` |

**Kapsam satırı:**  
`Pitch · default · Updated copy of Pitch demo store 3.2.0 / schema_name Pitch 3.4.0 · theme_store_id 3620 · home→PDP Gentle Body Wash→PLP skincare→collections→search serum→cart→about-us/contact→blog→404 · 34 obs · 0 yeni şema · leftover: candidates/pitch-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/IWT×2/bestsellers/collection pair/footer | [x] obs | [ ] capture |
| Mega Shop 768/1440 | [x] obs | [ ] interact |
| Predictive search `serum` | [x] obs | [ ] interact 375/768/1440 |
| Mobile menu 375 | [x] obs | [ ] interact |
| Mobile menu 768 | [x] obs | [ ] interact (0×0 beklenir) |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| PDP Gentle Body Wash Scent Rose+Oud→Orange Blossom+Neroli | [x] obs | [ ] interact |
| PLP `/collections/skincare` | [x] obs | [ ] capture |
| Collections index `/collections` | [x] obs | [ ] capture |
| Search `/search?q=serum` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/about-us` | [x] obs | [ ] capture |
| Contact form (submit yok) | [x] obs | [ ] capture |
| Blog `/blogs/news` + Why clean ingredients matter | [x] obs | [ ] capture |
| Privacy `/policies/privacy-policy` | [x] obs | [ ] capture |
| 404 leftover | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Horizon / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header_announcements_kcHY6p | `promo-announcement-bar` | reuse |
| 2 | header_section / `#header-component` | `navigation-header-mega` | reuse · Shop mega |
| 3 | section_6PnLrM | `hero-slideshow` | reuse · tek kare |
| 4 | media_with_content_E7M3aJ | `editorial-image-with-text` | reuse |
| 5 | media_with_content_MUN3P3 | `editorial-image-with-text.2` | reuse |
| 6 | product_list_z7QLNk | `product-showcase-grid-featured` | reuse · CHOOSE leftover |
| 7 | section_eeFGpP | `collection-nav-image-cards` | reuse · 2 kart |
| 8 | migrated_footer_content | `footer-columns-newsletter` | reuse · submit yok |
| 9 | footer_utilities | — | leftover © |
| 10 | header-drawer | `global-menu-drawer` | reuse · 375 |
| 11 | #search-modal | `global-predictive-search` | reuse |
| 12 | cart-drawer-component | `global-cart-drawer` | reuse |

Horizon nested theme-blocks (görülen custom elements): `header-component` · `header-menu` · `header-drawer` · `announcement-bar-component` · `slideshow-component` · `product-card` · `quick-add-component` · `predictive-search-component` · `cart-drawer-component` · `variant-picker` · `product-price` · `media-gallery` · `facets-form-component` · `marquee-component` · `accordion-custom` · `jumbo-text`.

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] Shop hover 768/1440 — #submenu-1 |
| global-predictive-search | initial / input `serum` | [ ] 375/768/1440 |
| global-menu-drawer | open 375/768 | [ ] 375; 768 0×0 beklenir |
| global-cart-drawer | initial / filled / changed | [ ] empty → Body Wash $36 → qty 2 |
| cart-page-main | initial / filled / changed | [ ] aynı |
| product-info-main | changed Scent | [ ] Rose + Oud → Orange Blossom + Neroli |

---

## Aday / leftover

[`candidates/pitch-leftovers.md`](../candidates/pitch-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu / cart / PDP Scent
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
