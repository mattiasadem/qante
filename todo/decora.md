# Todo — Decora (Speedo Themes · third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://pandora-furniture-2.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/shopify-furniture-theme-store  
*Preset:* `default` · slug `decora`

**Storefront password:** `/` **302** → `/password`. Vendor yayınlı şifre **1** (ürün sayfası: “Please enter password 1 to view demo.” + `<title>` Pandora Furniture (password: 1)). Başka host uydurulmadı. `pandora-furniture-6` (Furnix listing) ayrı demo — bu walk değil.

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Pandora-furniture-2-v-1-5-0**  
`schema_name` = **Pandora furniture 2** · `schema_version` = **1.5.0** · `role` = **main** · theme id `178511216952`  
`theme_store_id` = **null** · `handle` = `"null"` · `style.id` / `style.handle` = **null**  
Walk host = `Shopify.shop` = `pandora-furniture-2.myshopify.com` · locale `en` · country `US` · currency `USD`

**Durum:** Mod A 38 obs + resmi 3vp + interact (mega / search 1440 / cart drawer+page / PDP Color) — menu drawer, tabs, home FAQ `missingStates`  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/decora/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **38** |
| Parallel | yalnız `observations/decora/`, `evidence/decora/`, `todo/decora.md`, `candidates/decora-leftovers.md`, unlock host map |

**Kapsam satırı:**  
`Decora · default · Pandora-furniture-2-v-1-5-0 / schema_name Pandora furniture 2 1.5.0 · theme_store_id null · shop pandora-furniture-2.myshopify.com · password 1 (vendor-published) · home→PLP /collections/all→PDP Wembley Dining Table→search chair→collections→cart→about/contact/faqs→news+post · 38 obs · 0 yeni şema · interact: mega open · search chair 1440 · cart drawer empty/filled/qty · cart page empty/filled/qty · PDP Color Gray · leftover: candidates/decora-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Shop mega hover 1440 | [x] interact | [x] open (forceOpen image mega) |
| Predictive search `chair` | [x] interact | [x] 1440 · 375/768 missing |
| Mobile menu 375 + 768 | [x] denendi | missingStates — karede drawer yok |
| Cart drawer empty + filled + qty | [x] interact | [x] |
| PDP Wembley Color Brown→Gray | [x] interact | [x] |
| PLP `/collections/all` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=chair` | [x] obs | [x] capture |
| Cart page empty + filled + qty | [x] interact | [x] |
| About `/pages/about-us` | [x] obs | [x] capture |
| Contact form (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faqs` | [x] obs | [x] capture |
| News + open-concept post | [x] obs | [x] capture |
| Map / account / checkout / newsletter submit | ⛔ leftover / dur | — |

---

## Home roster (DOM)

| # | Decora / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header_1 / #site-header | `navigation-header-mega` | reuse · viewport |
| 3 | slideshow 165665788459900955 | `hero-slideshow` | reuse · 3 slayt kopya |
| 4 | categories_slider_LqWKH6 | `collection-nav-icon-buttons` | reuse |
| 5 | f8b1a7c1… home_collection_grid | `collection-nav-image-cards` | reuse · mozaik |
| 6 | 166367820573a5e22c Our Story | `editorial-rich-text` | reuse |
| 7 | 165666442841fa5a70 Shop By Category | `collection-nav-grid` | reuse |
| 8 | 165666889162d379a4 Trendy | `product-showcase-tabs` | reuse |
| 9 | 16570220444d9ed8e2 Exclusive | `promo-grid-banner` | reuse |
| 10 | 1656658688fda267ab reviews | `testimonial-quote-carousel` | reuse |
| 11 | 16566582873b027b44 Latest Blog | `blog-list-main` | reuse |
| 12 | 1663676130f16e8b3b Faqs | `faq-collapsible-tabs` | reuse |
| 13 | 1660652947e3543e1b parallax | `editorial-image-with-text-overlay` | reuse |
| 14 | 1659001743407f50e5 icons | `trust-icon-row` | reuse |
| 15 | footer_2 | `footer-columns-newsletter` | reuse · submit yok |
| 16 | newsletter-popup | — | leftover h=0 |
| — | #CartDrawer | `global-cart-drawer` | reuse |
| — | #menu-drawer | `global-menu-drawer` | reuse |
| — | predictive-search | `global-predictive-search` | reuse |

---

## Other templates

| # | id | sayfa | JSON | Done |
|---|---|---|---|---|
| 1 | collection-banner | collection | [x] | [x] 3vp |
| 2 | product-showcase-grid-plp | collection | [x] | [x] 3vp |
| 3 | collection-nav-grid | collections | [x] | [x] 3vp |
| 4 | search-results | search | [x] | [x] 3vp |
| 5 | cart-page-main | cart | [x] | [x] 3vp · empty/filled/qty |
| 6 | product-showcase-grid-featured | cart | [x] | [x] 3vp |
| 7 | product-info-main | product-detail | [x] | [x] 3vp · Color Brown→Gray |
| 8 | features-multicolumn | product-detail | [x] | [x] 3vp |
| 9 | editorial-image-with-text | product-detail | [x] | [x] 3vp |
| 10 | editorial-image-with-text-overlay | product-detail | [x] | [x] 3vp |
| 11 | product-showcase-related | product-detail | [x] | [x] 3vp |
| 12 | about/contact/faq/blog | content | [x] | [x] 3vp |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 6 image+text kart |
| global-predictive-search | input | [x] 1440 `chair` · 375/768 missing |
| global-menu-drawer | open | missingStates — 375 0px · 768 homepage |
| global-cart-drawer | initial + filled + changed | [x] boş / Wembley 1 / adet 2 |
| cart-page-main | initial + filled + changed | [x] boş / Wembley 1 / adet 2 |
| product-info-main | changed | [x] Color Brown→Gray |
| product-showcase-tabs | changed | missingStates — kare BEST SELLERS kaldı |
| faq-collapsible-tabs | changed | missingStates — PNG byte-eş |

---

## Aday / şemaya sığmayan

- [`candidates/decora-leftovers.md`](../candidates/decora-leftovers.md)

---

## Evidence backlog

- [x] Resmi 3vp `capture-observation.mjs` (38 obs · 110 PNG; menu 1440 + search 375/768 zero-size → interact)
- [x] Interact capture (mega / search 1440 / cart drawer+page / PDP; menu/tabs/FAQ missingStates)
- [x] `node scripts/validate-schemas.mjs`
