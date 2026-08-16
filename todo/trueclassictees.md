# Todo — True Classic Tees (trueclassictees.com)

*Kaynak:* https://trueclassictees.com → https://www.trueclassictees.com/  
*Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **true-classic/main** · `id` `122041106504` · `schema_name` **True Classic Custom Theme** · `schema_version` **2.5.1** · `theme_store_id` **null** · `role` `main` · shop `trueclassictees-com.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate tamam  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/trueclassictees/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/trueclassictees/`, `evidence/trueclassictees/`, `todo/trueclassictees.md`, `candidates/trueclassictees-*.md` |
| PNG | **104** (25 obs × 3vp = 75 + 29 interact) |
| Validator | 65 temiz · 0 error · 0 warn |

**Kapsam satırı:**  
`True Classic · default · True Classic Custom Theme 2.5.1 (theme_store_id null) · home→PDP→PLP→search→cart-drawer→about→help→policy→blog→404 leftover · 25 obs · 104 PNG · 0 yeni şema · leftover: candidates/trueclassictees-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/hero/tee-finder/pillar/footer | [x] obs | [x] capture |
| Mega hover 1440 | [x] yoklandı — panel yok | leftover |
| Predictive search overlay | [x] obs | [x] interact |
| Cart drawer empty/filled/qty | [x] obs | [x] interact |
| Mobile hamburger 375+768 | [x] obs | [x] interact |
| PDP `/products/white-crew-neck-tee` + size M | [x] obs | [x] interact |
| PLP `/collections/best-sellers` | [x] obs | [x] capture |
| Search `/search?q=tee` | [x] obs | [x] capture |
| Cart `/cart` sayfa | ⛔ `/?cart-open=1` | leftover |
| About `/pages/about-us` (= our-story) | [x] 3 temsilci | [x] capture |
| Help `/pages/help-center` | [x] 3 temsilci | [x] capture |
| Privacy `/pages/privacy-policy` | [x] obs | [x] capture |
| Blog list + fit-guide post | [x] obs | [x] capture |
| 404 custom | ⛔ 404 ama home gövde | leftover |
| Contact / terms | ⛔ 429 | leftover |
| Newsletter / account / checkout | ⛔ PII | — |

---

## Bileşen roster (25)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | Flash Deals | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | hover mega yok | reuse | [x] |
| 3 | media-video-hero | home | [x] | Videowise | reuse | [x] |
| 4 | product-showcase-tabs | home | [x] | menu_with_pdp | reuse | [x] |
| 5 | features-multicolumn | home | [x] | Why TC | reuse | [x] |
| 6 | footer-columns-newsletter | home | [x] | PII yok | reuse | [x] |
| 7 | global-cart-drawer | home | [x] | boş/dolu/adet | reuse | [x] |
| 8 | global-predictive-search | home | [x] | crew | reuse | [x] |
| 9 | global-menu-drawer | home | [x] | 375/768 | reuse | [x] |
| 10 | product-info-main | product-detail | [x] | + M | reuse | [x] |
| 11 | collection-nav-image-cards | product-detail | [x] | aile | reuse | [x] |
| 12 | comparison-quick-table | product-detail | [x] | Compare Styles | reuse | [x] |
| 13 | product-showcase-related | product-detail | [x] | Rebuy | reuse | [x] |
| 14 | features-multicolumn | product-detail | [x] | pillar | reuse | [x] |
| 15 | product-showcase-grid-plp | collection | [x] | bestsellers | reuse | [x] |
| 16 | search-results | search | [x] | tee | reuse | [x] |
| 17–19 | about editorial ×3 | about-brand | [x] | split / mosaic delta | reuse | [x] |
| 20–22 | FAQ header/anchors/accordion | faq-support | [x] | Returns | reuse | [x] |
| 23 | page-content-main | policy | [x] | privacy | reuse | [x] |
| 24 | blog-list-main | blog-list | [x] | | reuse | [x] |
| 25 | blog-post-main | blog-post | [x] | | reuse | [x] |

---

## Interact (PNG bakıldı)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Men hover — kolonlu mega yok |
| global-predictive-search | initial, input | 375/768: 10 results; 1440: chip |
| global-cart-drawer | initial, filled, changed | Medium $34.99; qty `<select>` 2 |
| global-menu-drawer | open, changed | 375/768 Short Sleeves → Crew/V/Polo/Henley/Sleeveless |
| product-info-main | initial, changed | Size Medium + Add To Cart |

---

## Aday / leftover

[`candidates/trueclassictees-leftovers.md`](../candidates/trueclassictees-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp — 75 PNG
- [x] Interact resmi 3vp — 29 PNG
- [x] `npm run validate` — 65 temiz · 0 error · 0 warn
- [x] Newsletter / account / checkout — **yapılmadı** (PII)

## Açık sorular

- Theme Store id is null — custom theme. Identity recorded as observed: `True Classic Custom Theme` 2.5.1 / `true-classic/main`.
- Homepage `menu_with_pdp` embeds a full PDP (gallery + ATC). Reused `product-showcase-tabs`.
- Cart lives only as a drawer (`/?cart-open=1`); no `/cart` page observation.
- 404 returns HTTP 404 but `template-index` homepage body. No 404-page observation.
- Contact + terms returned 429 during probe — leftover, no observation.
- Okendo reviews on PDP not captured as a separate observation (sibling leftover).
- Mega hover produced no panel — leftover stands.
- Cart qty is a `<select>`, not plus. Official changed state used the dropdown; total in crop stayed $34.99.

## Sıradaki

Inventory complete for Mod A. Optional later: retry contact/terms after 429, Okendo reviews sibling, homepage empty siblings.
