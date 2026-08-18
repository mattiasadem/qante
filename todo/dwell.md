# Todo — Dwell (Shopify first-party · free · Horizon family)

*Kaynak:* https://theme-dwell-demo.myshopify.com/  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/dwell  
*Tema (storefront, uydurulmadı):* **dwell-100-0-0** · `schema_name`: **Dwell** · `schema_version`: **100.0.0** · `theme_store_id`: **null** · role `main` · id `153150455997`  
*Shop:* `se-horizon10-en-q73c.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/dwell/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **36** |
| Evidence PNG | **126** |
| Parallel | yalnız `observations/dwell/`, `evidence/dwell/`, `todo/dwell.md`, `candidates/dwell-leftovers.md` |

**Kapsam satırı:**  
`Dwell · default · dwell-100-0-0 / schema_name Dwell 100.0.0 (theme_store_id null) · home→PDP→PLP→collections index→search→cart→about/contact→blog→404 · 36 obs · 126 PNG · 0 yeni şema · leftover: footer-utilities / search-header / 768 hamburger / 404 routes / quick-add / hotspot`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement / hero / featured / shop-the-look / collections / footer | [x] obs | [x] capture |
| Header kapalı + Bedding mega 1440/768 | [x] obs | [x] interact |
| Predictive search `linen` | [x] obs | [x] interact 375/768/1440 |
| Mobile hamburger 375 (+ 768 yoklama) | [x] obs | [x] interact (768 leftover) |
| Cart drawer empty + filled + qty | [x] obs | [x] interact |
| PDP Down Pillow Size Standard→King | [x] obs | [x] interact |
| PLP `/collections/bedding-1` | [x] obs | [x] capture |
| Collections index `/collections` | [x] obs | [x] capture |
| Search `/search?q=linen` | [x] obs | [x] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [x] interact |
| About `/pages/about-us` | [x] obs | [x] capture |
| Contact form (submit yok) | [x] obs | [x] capture |
| News list + Art of Sheet Folding | [x] obs | [x] capture |
| FAQ + Shipping policy | [x] obs | [x] capture |
| 404 leftover | [x] obs | [x] capture |

---

## Home roster (DOM)

| # | Dwell / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header_announcements_pbXTDf | `promo-announcement-bar` | reuse |
| 2 | header_section | `navigation-header-mega` | reuse · Bedding mega |
| 3 | hero_G7CAX9 | `hero-slideshow` | reuse · tek kare |
| 4 | section (essentials) | `editorial-rich-text` | reuse |
| 5 | product_list_YidTcf | `product-showcase-grid-featured` | reuse · slider |
| 6 | section_mAEqNR | `editorial-rich-text-2` | reuse · Shop the look heading |
| 7 | product_hotspots_HXKqqD | `media-lookbook-banner` | reuse |
| 8 | collection_list_3ejxRy | `collection-nav-image-cards` | reuse |
| 9 | collection_list_XaY9C3 | `collection-nav-slider` | reuse |
| 10 | media_with_content_HP7Qpp | `editorial-image-with-text` | reuse |
| 11 | migrated_footer_content | `footer-columns-newsletter` | reuse · submit yok |
| 12 | footer_utilities | — | leftover copyright |
| 13 | header-drawer | `global-menu-drawer` | reuse · 375 |
| 14 | #search-modal | `global-predictive-search` | reuse |
| 15 | cart-drawer-component | `global-cart-drawer` | reuse |

**Theme-blocks (gözlenen `data-block-id`):**  
`product-price` (home featured + PDP) · `variant-picker` (`__variant_picker_R3rGDr`) · `static-collection-card` (home + collections + about).

---

## Interact (pixel-check)

- Header 1440/768 Bedding hover — mega: Pillows & Duvets / Sheets / Quilts & Comforters + görsel kartlar
- Hamburger 375: nested koleksiyon + köpek görseli. 768 hamburger 0px leftover
- Predictive `linen`: empty Bestsellers (Birch/Boucle) → chips + linen ürünler + View all
- Cart drawer: empty → Down Pillow Standard/Firm qty 1 $250 → qty 2 $500
- Cart page: empty → filled $250 → qty 2 $500
- PDP Size: Standard $250 → King $310 (Density Firm)

Stop: email / account / checkout / newsletter submit / contact Submit / PII

---

## Aday / leftover

[`candidates/dwell-leftovers.md`](../candidates/dwell-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 30/30
- [x] Interact header / search / cart / menu / PDP Size
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
- [x] Newsletter / account / checkout — **yapılmayacak** (PII)
