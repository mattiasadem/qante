# Todo — Andrea Beauty Care (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://women-beauty-7.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/andrea-beauty-care-shopify-beauty-themes-shopify-2-0  
*Preset klasör:* `default` · slug `andrea`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Andrea V-1.5.0**  
`schema_name` = **Andrea** · `schema_version` = **1.5.0** · `role` = **main** · theme id `169140224280`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
Walk host + `Shopify.shop` = `women-beauty-7.myshopify.com` · locale `en` · country `US` · currency `USD`

**Password wall:** GET `/` → `/password`. Speedo ürün sayfası: “Please enter password `1` to view demo.” Public storefront-unlock `1` — hesap değil. **Başka host uydurulmadı.**

**Durum:** Mod A walk + resmi 3vp + shopper interact bitti  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/andrea/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` (`storefrontPassword: "1"`) |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **41** |
| PNG | 3vp static + interact (mega / search / cart / PDP Color / tabs / FAQ). Menu `open` missingStates. |
| Parallel | yalnız `observations/andrea/`, `evidence/andrea/`, `todo/andrea.md`, `todo/interact.md`, `candidates/andrea-leftovers.md`, unlock host satırı |

**Kapsam satırı:**  
`Andrea · default · Andrea V-1.5.0 / schema_name Andrea 1.5.0 · theme_store_id null · shop women-beauty-7.myshopify.com · Speedo Themes · password 1 · home→PDP glitter-nail-polish Color→PLP /collections/all→/collections→search cream→cart empty+filled→about-us→contact→faqs→news+article→404 · 41 obs · 0 yeni şema · leftover: candidates/andrea-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Shop mega hover 1440 | [x] interact | [x] forceOpen 6 kolon |
| Predictive search `cream` | [x] interact | [x] 375 modal + 768/1440 inline |
| Mobile menu 375 + 768 | [x] denendi | [ ] open missingStates |
| Cart drawer empty + filled + qty | [x] interact | [x] $60→$120 |
| PDP glitter nail Color Chic Grey→Dirty Purple | [x] interact | [x] |
| PLP `/collections/all` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=cream` | [x] obs | [x] capture |
| Cart `/cart` empty + filled | [x] obs | [x] interact |
| About `/pages/about-us` | [x] obs | [x] capture |
| Contact `/pages/contact` (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faqs` | [x] obs | [x] capture + accordion |
| News + ETIAM article | [x] obs | [x] capture |
| 404 `/pages/about` | [x] obs | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · Shop mega 1440 |
| 3 | 3b7cb796 slideshow | `hero-slideshow` | reuse · 3 slayt |
| 4 | custom_announcement_bar_g3ANjX | `promo-scrolling-marquee` | reuse |
| 5 | categories_slider_KGcU6V | `collection-nav-slider` | reuse |
| 6 | 0617c2f2 SHOP SERUM | `product-showcase-grid-featured` | reuse · QUICK SHOP |
| 7 | offer_banner_g7W7Wb | `promo-grid-banner` | reuse · timer yok |
| 8 | 07468762 SHOP BY CATEGORY | `collection-nav-image-cards` | reuse |
| 9 | featured_collection BEST SELLING | `product-showcase-grid-featured.2` | reuse |
| 10 | 7722eea3 DISCOVER BRUSHES/BEAUTY | `editorial-image-with-text` | reuse · stacked 2 |
| 11 | 8b5479f1 TRENDING | `editorial-image-with-text-overlay` | reuse |
| 12 | 588ae6a9 LATEST NEWS | `blog-list-main` | reuse |
| 13 | 6ce4ce05 USP | `trust-icon-row` | reuse |
| 14 | custom_announcement_bar_4n3XyK | `promo-scrolling-marquee.2` | reuse |
| 15 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 16 | #CartDrawer | `global-cart-drawer` | reuse · interact |
| 17 | #menu-drawer | `global-menu-drawer` | reuse · open missingStates |
| 18 | details-modal.header__search | `global-predictive-search` | reuse · cream |
| 19 | newsletter-popup | — | leftover 0px / PII |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–18 | home static + overlays | home | [x] | [x] | reuse | [x] |
| 19–23 | PDP main/tabs/IWT/overlay/related | product-detail | [x] | [x] | reuse | [x] |
| 24–25 | banner + PLP | collection | [x] | [x] | reuse | [x] |
| 26 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 27 | search-results | search | [x] | [x] | reuse | [x] |
| 28 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 29–33 | overlay / IWT / team / overlay / IWT | about-brand | [x] | [x] | reuse | [x] |
| 34–36 | overlay + trust + form | contact | [x] | [x] | reuse | [x] |
| 37–38 | overlay + FAQ | faq-support | [x] | [x] | reuse | [x] |
| 39–40 | list + post | blog-post | [x] | [x] | reuse | [x] |
| 41 | page-content-main | not-found | [x] | [x] | reuse | [x] |

---

## Interact (shopper-state)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 | [x] 6 kolon FACECARE…NAILS |
| global-predictive-search | input | [x] `cream` 8 PRODUCTS |
| global-menu-drawer | open + changed 375/768 | [ ] missingStates — kare homepage |
| global-cart-drawer | filled + changed | [x] glitter $60→$120 |
| cart-page-main | filled + changed | [x] empty / $60 / $120 |
| product-info-main | changed | [x] Color Dirty Purple |
| product-info-tabs | changed | [x] ADDITIONAL INFORMATION |
| faq-collapsible-tabs | changed | [x] Q2 açık; Q1 kaldı |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/andrea-leftovers.md`](../candidates/andrea-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / PDP Color / tabs / FAQ
- [x] Menu open — bir retry; missingStates
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs` — 0 error (şema dokunulmadı)
