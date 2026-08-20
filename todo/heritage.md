# Todo — Heritage (Shopify first-party · free · Horizon family)

*Kaynak:* https://theme-heritage-demo.myshopify.com/  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/heritage  
*Tema (storefront, uydurulmadı):* **Updated copy of Heritage demo store 3.2.0** · `schema_name`: **Heritage** · `schema_version`: **3.4.0** · `theme_store_id`: **3624** · role `main` · id `149503737910`  
*Shop:* `se-horizon8-en-0xw5.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + CRO leftover interact + validate  
**PR:** draft https://github.com/mattiasadem/qante/pull/270 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/heritage/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **33** |
| Evidence PNG | **129** |
| Parallel | yalnız `observations/heritage/`, `evidence/heritage/`, `todo/heritage.md`, `candidates/heritage-leftovers.md` |

**Kapsam satırı:**  
`Heritage · default · Updated copy of Heritage demo store 3.2.0 / schema_name Heritage 3.4.0 (theme_store_id 3624) · home→PDP→PLP→collections index→search→cart→about/contact→blog→404 · 33 obs · 129 PNG · 0 yeni şema · leftover: candidates/heritage-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + heading / collection bento / IWT / bestsellers / footer | [x] obs | [x] capture |
| Header kapalı + Men hover mega 768/1440 | [x] obs | [x] interact |
| Predictive search `wool` | [x] obs | [x] interact 375/768/1440 |
| Mobile hamburger 375 (768 0×0 leftover) | [x] obs | [x] interact |
| Cart drawer empty + filled + qty | [x] obs | [x] interact $105→$210 |
| PDP The Terry Short Color Pelican→Navy | [x] obs | [x] interact $105→$109 |
| PLP `/collections/all` + Britannia IWT | [x] obs | [x] capture |
| Collections index `/collections` | [x] obs | [x] capture |
| Search `/search?q=wool` | [x] obs | [x] capture 43 items |
| Cart `/cart` empty + filled + qty | [x] obs | [x] interact $105→$210 |
| About `/pages/about-us` (`/pages/about` 404) | [x] obs | [x] capture |
| Contact form (submit yok) | [x] obs | [x] capture |
| FAQ | [x] obs | [x] capture |
| Field notes + Embracing wool | [x] obs | [x] capture |
| Privacy policy (native) | [x] obs | [x] capture |
| 404 leftover | [x] obs | [x] capture |
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

- Header 768/1440 Men hover — #submenu-1 kolon + 3 ürün kartı — OK
- Hamburger 375: Men/Women çocukları düz + ürün şeridi — OK; 768 hamburger 0px leftover
- Predictive `wool`: Latest öneri → wool + chip + View all — OK
- Cart drawer: empty → Terry Short qty 1 $105 → qty 2 $210 — OK (ATC UI)
- Cart page: empty → filled $105 → qty 2 $210 — OK
- PDP Color: Pelican $105 → Navy $109 (galeri önde Navy) — OK
- FAQ `/pages/faq` RTE düz (accordion yok) — `initial.rte-duz` 375/768/1440
- Contact form boş — `initial.bos-form` (PII, fill/submit yok)
- Footer newsletter yok — `initial.newsletter-yok`
- About hero tek kare (orman yolu) — `initial.tek-kare`; ok/nokta yok

---

## Aday / leftover

[`candidates/heritage-leftovers.md`](../candidates/heritage-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 81 PNG
- [x] Interact header / search / cart / menu / PDP Color — 36 PNG
- [x] CRO leftover interact FAQ / form / footer / about hero — 12 PNG
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
