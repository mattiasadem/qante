# Todo — Pebble (Shopify paid) · FoxEcom · Little

*Kaynak:* https://pebble-little.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/pebble  
*Preset:* `default` (Little) · *Slug:* `pebble`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **[Live] Pebble-1-0-0**  
`schema_name` = **Pebble** · `schema_version` = **1.3.0** · `role` = **main** · theme id `152827625610`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `pebble-little.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact — devam  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/pebble/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/pebble/`, `evidence/pebble/`, `todo/pebble.md`, `candidates/pebble-leftovers.md` |

**Kapsam satırı:**  
`Pebble · default (Little) · [Live] Pebble-1-0-0 · schema_name Pebble 1.3.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→our-story/contact→blog→404 · 0 yeni şema · leftover: candidates/pebble-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster + announcement/header/footer | roster yazıldı | [ ] capture |
| Mega Shop 1440 | interact yazıldı | [ ] |
| Predictive search `polo` | interact yazıldı | [ ] |
| Mobile menu 375 | interact yazıldı | [ ] |
| Mobile menu 768 | interact yazıldı | [ ] |
| Cart drawer empty + filled + qty | interact yazıldı | [ ] |
| PDP Logo Polo Red Size 3Y→8Y | interact yazıldı | [ ] |
| PLP `/collections/all` | roster yazıldı | [ ] |
| Collections index `/collections` | roster yazıldı | [ ] |
| Search `/search?q=polo` | roster yazıldı | [ ] |
| Cart page empty + filled + qty | interact yazıldı | [ ] |
| About `/pages/our-story` (`/pages/about` 404) | roster yazıldı | [ ] |
| Contact `/pages/contact` (submit yok) | roster yazıldı | [ ] |
| News + article | roster yazıldı | [ ] |
| 404 leftover | roster yazıldı | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Pebble / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header | `navigation-header-mega` | reuse · interact |
| 2 | slideshow_DqmGRC | `hero-slideshow` | reuse |
| 3 | collection_tabs_DM9Rwj | `collection-nav-image-cards` | reuse |
| 4 | scrolling_cards_aPwhgj | `editorial-images-scroll` | reuse · delta |
| 5 | collection_highlight_YV6p8F | `collection-nav-tabs` | reuse |
| 6 | product_tabs_VFRpjk | `product-showcase-tabs` | reuse |
| 7 | scrolling_card_layered_hwEqKR | `editorial-layered-images` | reuse · delta |
| 8 | custom_section_8WifFy | `promo-scrolling-marquee` | reuse |
| 9 | highlight_text_with_image_zV4HWH | `editorial-highlight-text-image` | reuse |
| 10 | custom_section_jEHjk8 | `media-lookbook-slider` | reuse · lookbook leftover |
| 11 | products_highlight_mTi6q7 | `product-showcase-featured` | reuse |
| 12 | product_suggestion_kmXGYN | `product-showcase-grid-featured` | reuse |
| 13 | products_bundle_mnDxAG | `commerce-tools-products-bundle` | reuse |
| 14 | testimonials_parallax_8FqTjk | `testimonial-quote-carousel` | reuse · parallax delta |
| 15 | custom_section_cjGfXN | `editorial-image-with-text` | reuse |
| 16 | custom_section_AYwNN4 | `promo-scrolling-marquee.2` | reuse |
| 17 | flex_carousel_8kBgwA | `promo-grid-banner` | reuse |
| 18 | custom_section_4yLVt7 | `trust-icon-row` | reuse · global |
| 19 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 20 | menu-drawer | `global-menu-drawer` | reuse · 375/768 |
| 21 | search-drawer / header search | `global-predictive-search` | reuse |
| 22 | #cart-drawer-dialog | `global-cart-drawer` | reuse |
| 23 | popup newsletter | — | leftover PII |
| 24 | quick-add-drawer | — | leftover |

---

## Aday / leftover

[`candidates/pebble-leftovers.md`](../candidates/pebble-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
