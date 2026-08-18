# Todo — Heritage (Shopify first-party · free · Horizon family)

*Kaynak:* https://theme-heritage-demo.myshopify.com/  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/heritage  
*Tema (storefront, uydurulmadı):* **Updated copy of Heritage demo store 3.2.0** · `schema_name`: **Heritage** · `schema_version`: **3.4.0** · `theme_store_id`: **3624** · role `main` · id `149503737910`  
*Shop:* `se-horizon8-en-0xw5.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate **devam**  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/heritage/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **33** |
| Evidence PNG | (capture sonrası) |
| Parallel | yalnız `observations/heritage/`, `evidence/heritage/`, `todo/heritage.md`, `candidates/heritage-leftovers.md` |

**Kapsam satırı:**  
`Heritage · default · Updated copy of Heritage demo store 3.2.0 / schema_name Heritage 3.4.0 (theme_store_id 3624) · home→PDP→PLP→collections index→search→cart→about/contact→blog→404 · 33 obs · 0 yeni şema · leftover: candidates/heritage-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + heading / collection bento / IWT / bestsellers / footer | [x] obs | [ ] capture |
| Header kapalı + Men hover mega 768/1440 | [x] obs | [ ] interact |
| Predictive search `wool` | [x] obs | [ ] interact 375/768/1440 |
| Mobile hamburger 375 (768 0×0 leftover) | [x] obs | [ ] interact |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| PDP The Terry Short Color Pelican→Navy | [x] obs | [ ] interact |
| PLP `/collections/all` + Britannia IWT | [x] obs | [ ] capture |
| Collections index `/collections` | [x] obs | [ ] capture |
| Search `/search?q=wool` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/about-us` (`/pages/about` 404) | [x] obs | [ ] capture |
| Contact form (submit yok) | [x] obs | [ ] capture |
| FAQ | [x] obs | [ ] capture |
| Field notes + Embracing wool | [x] obs | [ ] capture |
| Privacy policy (native) | [x] obs | [ ] capture |
| 404 leftover | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Heritage / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header_section | `navigation-header-mega` | reuse · Men mega |
| 2 | section_jW4eNe | `editorial-rich-text` | reuse · heading-only |
| 3 | collection_list_Ge6pfb | `collection-nav-cards` | reuse · bento 3 kart |
| 4 | media_with_content_CwFqjm | `editorial-image-with-text` | reuse · Wool Blanket |
| 5 | product_list_4HyKBg | `product-showcase-grid-featured` | reuse · nested price |
| 6 | media_with_content_xUctDh | `editorial-image-with-text.2` | reuse · Cozy Beanie |
| 7 | migrated_footer_content | `footer-columns-newsletter` | reuse · newsletter yok |
| 8 | footer_utilities | — | leftover © |
| 9 | header-drawer | `global-menu-drawer` | reuse · 375 |
| 10 | #search-modal | `global-predictive-search` | reuse |
| 11 | cart-drawer-component | `global-cart-drawer` | reuse |

**Theme-blocks (gözlenen `data-block-id`):**  
`static-collection-card` (home ×3; collections ×16; about ×3) · `product-price` (home / PLP / cart / 404 / PDP) · `variant-picker` (PDP). Hero/header/footer’da `data-block-id` yok — nested custom elements (`header-drawer`, `cart-drawer-component`).

---

## Interact (pixel-check)

- Header 768/1440 Men hover — #submenu-1 kolon + ürün kartları (PNG bakılacak)
- Hamburger 375: drawer; 768 hamburger 0px leftover
- Predictive `wool`: 375/768/1440 (PNG bakılacak)
- Cart drawer: empty → Terry Short qty 1 → qty 2 (PNG bakılacak)
- Cart page: empty → filled → qty
- PDP Color: Pelican → Navy

---

## Aday / leftover

[`candidates/heritage-leftovers.md`](../candidates/heritage-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / menu / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
