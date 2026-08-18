# Todo — Fabric (Shopify first-party · free · Horizon family)

*Kaynak:* https://theme-fabric-demo.myshopify.com/  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/fabric  
*Tema (storefront, uydurulmadı):* **Updated copy of Fabric demo store 3.2.0** · `schema_name`: **Fabric** · `schema_version`: **3.4.0** · `theme_store_id`: **3622** · role `main` · id `145077665845`  
*Shop:* `se-horizon5-en-624k.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/fabric/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **31** |
| Evidence PNG | **110** |
| Parallel | yalnız `observations/fabric/`, `evidence/fabric/`, `todo/fabric.md`, `candidates/fabric-leftovers.md` |

**Kapsam satırı:**  
`Fabric · default · Updated copy of Fabric demo store 3.2.0 / schema_name Fabric 3.4.0 (theme_store_id 3622) · home→PDP→PLP→collections index→search→cart→our-story/contact→blog→404 · 31 obs · 110 PNG · 0 yeni şema · leftover: 768 hamburger / search-header / footer-utilities / divider / 404 routes`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero / lookbook carousel / collections / marquee / video / arrivals / IWT / footer | [x] obs | [x] capture |
| Header kapalı + Womenswear mega 1440 | [x] obs | [x] interact |
| Predictive search `tefnut` | [x] obs | [x] interact 375/768/1440 |
| Mobile hamburger 375 | [x] obs | [x] interact (768 leftover) |
| Cart drawer empty + filled + qty | [x] obs | [x] interact |
| PDP Tefnut Beach Vest Color Black→Olive | [x] obs | [x] interact |
| PLP `/collections/all` | [x] obs | [x] capture |
| Collections index `/collections` | [x] obs | [x] capture |
| Search `/search?q=tefnut` | [x] obs | [x] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [x] interact |
| About `/pages/our-story` | [x] obs | [x] capture |
| Contact form (submit yok) | [x] obs | [x] capture |
| FAQ (düz Q&A) | [x] obs | [x] capture |
| Stories list + Our materials | [x] obs | [x] capture |
| 404 leftover | [x] obs | [x] capture |

---

## Home roster (DOM)

| # | Fabric / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header_section / `#header-component` | `navigation-header-mega` | reuse · mega **var** |
| 2 | hero_HPEeBq | `hero-slideshow` | reuse · tek serif “Fabric” |
| 3 | carousel_LeVxwU | `media-lookbook-slider` | reuse · hotspot yok · delta |
| 4 | collection_list_mcURmi | `collection-nav-cards` | reuse · Home/Menswear/Womenswear |
| 5 | marquee_izzYrQ | `promo-scrolling-marquee` | reuse |
| 6 | section_8zY7P4 | `media-video-hero` | reuse · metin below |
| 7 | divider_WDCL3k | — | leftover 1px |
| 8 | product_list_4jqyPz | `product-showcase-grid-featured` | reuse · New Arrivals |
| 9 | media_with_content_aF6TTD | `editorial-image-with-text` | reuse · 6 kesik ürün |
| 10 | section_YWC48a | `footer-columns-newsletter` | reuse · 4 kolon · submit yok |
| 11 | footer_utilities | — | leftover copyright |
| 12 | header-drawer | `global-menu-drawer` | reuse · 375 |
| 13 | #search-modal | `global-predictive-search` | reuse |
| 14 | cart-drawer-component | `global-cart-drawer` | reuse |

---

## Interact (pixel-check)

- Header 1440 Womenswear: sol 6 link + Womenswear / T-Shirts & Tanks kartları — OK
- Hamburger 375: nested Womenswear/Menswear/Home — OK; 768 hamburger 0px leftover
- Predictive `tefnut`: Best Sellers → chip + 6 ürün + View all — OK
- Cart drawer: empty → Vest qty 1 $128 → qty 2 $256 — OK
- Cart page: empty → filled $128 → qty 2 $256 — OK
- PDP Color: Black → Olive (swatch + 375 galeri) — OK

Stop: email, account, checkout, newsletter submit, contact Send, PII

---

## Aday / leftover

[`candidates/fabric-leftovers.md`](../candidates/fabric-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 25/25
- [x] Interact header mega / search / cart / menu 375 / PDP Color
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
