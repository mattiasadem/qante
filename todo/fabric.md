# Todo — Fabric (Shopify first-party · free · Horizon family)

*Kaynak:* https://theme-fabric-demo.myshopify.com/  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/fabric  
*Tema (storefront, uydurulmadı):* **Updated copy of Fabric demo store 3.2.0** · `schema_name`: **Fabric** · `schema_version`: **3.4.0** · `theme_store_id`: **3622** · role `main` · id `145077665845`  
*Shop:* `se-horizon5-en-624k.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact (yazılı; capture sırada)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/fabric/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **31** |
| Parallel | yalnız `observations/fabric/`, `evidence/fabric/`, `todo/fabric.md`, `candidates/fabric-leftovers.md` |

**Kapsam satırı:**  
`Fabric · default · Updated copy of Fabric demo store 3.2.0 / schema_name Fabric 3.4.0 (theme_store_id 3622) · home→PDP→PLP→collections index→search→cart→our-story/contact→blog→404 · 0 yeni şema · leftover: 768 hamburger / search-header / footer-utilities / divider / 404 routes / PDP related hydrate`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero / lookbook carousel / collections / marquee / video / arrivals / IWT / footer | [x] obs | [ ] capture |
| Header kapalı + Womenswear mega 1440 | [x] obs | [ ] interact |
| Predictive search `tefnut` | [x] obs | [ ] interact 375/768/1440 |
| Mobile hamburger 375 | [x] obs | [ ] interact (768 leftover) |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| PDP Tefnut Beach Vest Color Black→Olive | [x] obs | [ ] interact |
| PLP `/collections/all` | [x] obs | [ ] capture |
| Collections index `/collections` | [x] obs | [ ] capture |
| Search `/search?q=tefnut` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/our-story` | [x] obs | [ ] capture |
| Contact form (submit yok) | [x] obs | [ ] capture |
| FAQ (düz Q&A) | [x] obs | [ ] capture |
| Stories list + Our materials | [x] obs | [ ] capture |
| 404 leftover | [x] obs | [ ] capture |

---

## Home roster (DOM)

| # | Fabric / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header_section / `#header-component` | `navigation-header-mega` | reuse · mega **var** |
| 2 | hero_HPEeBq | `hero-slideshow` | reuse · tek kare |
| 3 | carousel_LeVxwU | `media-lookbook-slider` | reuse · hotspot yok · delta |
| 4 | collection_list_mcURmi | `collection-nav-cards` | reuse · Home/Menswear/Womenswear |
| 5 | marquee_izzYrQ | `promo-scrolling-marquee` | reuse |
| 6 | section_8zY7P4 | `media-video-hero` | reuse · Play video |
| 7 | divider_WDCL3k | — | leftover 1px |
| 8 | product_list_4jqyPz | `product-showcase-grid-featured` | reuse · New Arrivals |
| 9 | media_with_content_aF6TTD | `editorial-image-with-text` | reuse · INSTANT CLASSICS |
| 10 | section_YWC48a | `footer-columns-newsletter` | reuse · submit yok |
| 11 | footer_utilities | — | leftover copyright |
| 12 | header-drawer | `global-menu-drawer` | reuse · 375 |
| 13 | #search-modal | `global-predictive-search` | reuse |
| 14 | cart-drawer-component | `global-cart-drawer` | reuse |

**Theme-blocks (gözlenen `data-block-id`):**  
`static-collection-card` (home ×3) · `product-price` (`__price_VMXYYz` home; `__price_PMxen8` PLP) · PDP `variant-picker`. Divider / hero / footer’da `data-block-id` yok.

---

## Interact (pixel-check)

- Header 1440 Womenswear hover — mega kolon + koleksiyon kartları
- Hamburger 375; 768 hamburger 0px leftover
- Predictive `tefnut` 375/768/1440
- Cart drawer: empty → Tefnut Vest qty 1 → qty 2
- Cart page: empty → filled → qty
- PDP Color: Black → Olive

Stop: email, account, checkout, newsletter submit, contact Send, PII

---

## Aday / leftover

[`candidates/fabric-leftovers.md`](../candidates/fabric-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header mega / search / cart / menu / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
