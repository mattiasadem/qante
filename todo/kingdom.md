# Todo — Kingdom (Shopify paid) · Dragon Drop · default

*Kaynak (yalnız resmi walk):* https://kingdom-theme.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/kingdom  
*Preset klasör:* `default` · slug `kingdom`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Kingdom**  
`schema_name` = **Dragon Drop Kingdom Theme** · `schema_version` = **1.00** · `role` = **main** · theme id `38278856768`  
`theme_store_id` = **null** (canlıda yok; Theme Store id uydurulmadı)  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
`Shopify.shop` = `kingdom-theme.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error · 0 warn)  
**PR:** draft https://github.com/mattiasadem/qante/pull/196 — **main'e merge yok** (koordinatör birleştirir)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/kingdom/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **18** |
| PNG | **67** |
| Parallel | yalnız `observations/kingdom/`, `evidence/kingdom/`, `todo/kingdom.md`, `candidates/kingdom-leftovers.md` |

**Kapsam satırı:**  
`Kingdom · default · schema_name Dragon Drop Kingdom Theme 1.00 · theme_store_id null · home→PDP owl-mug White→Brown→PLP interesting-stuff 23→/collections→search owl 2→cart empty/filled/qty2 $50→about/contact/faq 404→news 0 article→404 · 18 obs · 67 PNG · 0 yeni şema · leftover: candidates/kingdom-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (header→footer) | roster + capture | [x] |
| Shop submenu 1440 | interact | [x] Sub nav |
| Predictive search `owl` | interact 3vp | [x] Owl Mug + Steampunk (press o/w/l) |
| Mobile menu 375 + 768 | interact | [x] |
| Cart mega/dropdown empty + filled | interact | [x] empty 1440 · filled 3vp · qty drawer yok |
| PDP Owl Mug White→Brown | interact 3vp | [x] |
| PLP `/collections/interesting-stuff` | roster + capture | [x] 23 items |
| Collections `/collections` | roster + capture | [x] |
| Search `/search?q=owl` | roster + capture | [x] 2 ürün |
| Cart page empty + filled + qty | interact 3vp | [x] qty2 + Update Cart $50 |
| About / contact / FAQ | ⛔ 404 | leftover |
| Blog `/blogs/news` | roster + capture | [x] 0 article |
| Blog article | ⛔ yok | leftover |
| 404 | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Kingdom / class | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header `#shopify-section-header` | `navigation-header-mega` | reuse · interact |
| 2 | spacer `1543366239305` (21px) | — | leftover |
| 3 | Popular Brands owl `1533512331819` | `trust-icon-row` | reuse · crop sticky leftover |
| 4 | spacer `1543366211641` (21px) | — | leftover |
| 5 | hero-slider-section `1533200321729` | `hero-slideshow` | reuse |
| 6 | spacer `1533518284207` (31px) | — | leftover |
| 7 | isotope gift tiles `1543384696781` | `collection-nav-image-cards` | reuse |
| 8 | spacer `1533512252957` (51px) | — | leftover |
| 9 | DIY Kits rich text `1533511817134` | `editorial-rich-text` | reuse |
| 10 | featured-collection-section `1533202289237` | `product-showcase-grid-featured` | reuse |
| 11 | countdown fw-section `1533535964713` | `promo-banner-countdown` | reuse |
| 12 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 13 | `#mobile-menu` | `global-menu-drawer` | reuse · 375/768 |
| 14 | center / `#search_bar` | `global-predictive-search` | reuse · interact |
| 15 | `.cart-dropdown` / `.cart-mega` | `global-cart-drawer` | reuse · interact |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | 1440 Shop hover: Sub nav (tek satır). Mega kolon yok |
| global-predictive-search | input | press o/w/l → Owl Mug $25 + Steampunk $92. fill() yalnız Quick Links |
| global-menu-drawer | open | 375/768 offcanvas HOME…CONTACT. Shop chevron |
| global-cart-drawer | initial / filled | boş 1440 hover; 375/768 boş 0px leftover. ATC mega Added 3vp |
| cart-page-main | empty / filled / changed | Owl Mug $25 → qty 2 + Update Cart $50 |
| product-info-main | changed | White → Brown (swatch checked). Ana görsel 3 kupa |

---

## Aday / şemaya sığmayan

`candidates/kingdom-leftovers.md` — 404 about/contact/faq, boş blog, null theme_store_id, spacer’lar, cart-mega ≠ drawer, boş cart 375/768, trust crop sticky, placeholder featured.
