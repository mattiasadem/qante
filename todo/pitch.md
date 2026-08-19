# Todo — Pitch (Shopify first-party · free · Horizon family)

*Kaynak:* https://theme-pitch-demo.myshopify.com/  
*Preset:* `default`  
*Slug:* `pitch`  
*Theme Store:* https://themes.shopify.com/themes/pitch  

*Tema (storefront, uydurulmadı):* `Shopify.theme.name` **Updated copy of Pitch demo store 3.2.0** · `id` `183686005031` · `schema_name` **Pitch** · `schema_version` **3.4.0** · `theme_store_id` **3620** · `role` `main`  
*Shop:* `se-horizon2-en-2v6j.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + CRO leftover interact + validate  
**PR:** draft https://github.com/mattiasadem/qante/pull/272 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/pitch/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **34** (CRO interact: 5 dosya güncellendi) |
| PNG | **142** |
| Parallel | yalnız `observations/pitch/`, `evidence/pitch/`, `todo/pitch.md`, `candidates/pitch-leftovers.md` |

**Kapsam satırı:**  
`Pitch · default · Updated copy of Pitch demo store 3.2.0 / schema_name Pitch 3.4.0 · theme_store_id 3620 · home→PDP Gentle Body Wash→PLP skincare→collections→search serum→cart→about-us/contact→blog→404 · 34 obs · 142 PNG · 0 yeni şema · CRO interact: form/footer/slideshow/tabs/announcement · leftover: candidates/pitch-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/IWT×2/bestsellers/collection pair/footer | [x] obs | [x] capture |
| Mega Shop 768/1440 | [x] obs | [x] interact |
| Predictive search `serum` | [x] obs | [x] interact 375/768/1440 |
| Mobile menu 375 | [x] obs | [x] interact |
| Mobile menu 768 | [x] obs | leftover 0×0 |
| Cart drawer empty + filled + qty | [x] obs | [x] $36 → $72 |
| PDP Gentle Body Wash Scent Rose+Oud→Orange Blossom+Neroli | [x] obs | [x] pill değişti; fiyat/galeri aynı |
| PLP `/collections/skincare` | [x] obs | [x] capture |
| Collections index `/collections` | [x] obs | [x] capture |
| Search `/search?q=serum` | [x] obs | [x] 17 items |
| Cart `/cart` empty + filled + qty | [x] obs | [x] $36 → $72 |
| About `/pages/about-us` | [x] obs | [x] capture |
| Contact form (submit yok) | [x] obs | [x] interact `initial` (PII) |
| Blog `/blogs/news` + Why clean ingredients matter | [x] obs | [x] capture |
| Privacy `/policies/privacy-policy` | [x] obs | [x] capture |
| 404 leftover | [x] obs | [x] capture |
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
| navigation-header-mega | open | [x] 1440 iki kart; 768 bir Skincare kart |
| global-predictive-search | initial / input `serum` | [x] öneri 4 kart → chips + 8 serum + View all |
| global-menu-drawer | open 375/768 | [x] 375 Shop çocukları + kart; 768 0×0 leftover |
| global-cart-drawer | initial / filled / changed | [x] empty → qty1 $36 → qty2 $72 |
| cart-page-main | initial / filled / changed | [x] aynı |
| product-info-main | changed Scent | [x] Rose + Oud → Orange Blossom + Neroli; $36 aynı |
| lead-capture-form | initial | [x] boş form; Submit yok |
| footer-columns-newsletter | initial / changed 375 | [x] Email boş; 375 Skincare − Cleansers/Moisturizers/Bundles |
| hero-slideshow | initial | [x] tek kare; ok/nokta yok |
| product-info-tabs | initial / changed | [x] üç + → Natural ingredients açık |
| promo-announcement-bar | initial / changed | [x] newsletter → bundles; timer yok |

---

## Aday / leftover

[`candidates/pitch-leftovers.md`](../candidates/pitch-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 28/28
- [x] Interact mega / search / menu 375 / cart / PDP Scent
- [x] CRO leftover interact: form / footer 375 accordion / hero tek kare / PDP accordion / announcement Next
- [x] PNG bak → stateFindings
- [x] `npm run validate`
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
