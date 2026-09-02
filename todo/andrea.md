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

**Durum:** Mod A walk + resmi 3vp + shopper interact (devam)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/andrea/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` (`storefrontPassword: "1"`) |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **41** |
| Parallel | yalnız `observations/andrea/`, `evidence/andrea/`, `todo/andrea.md`, `candidates/andrea-leftovers.md`, unlock host satırı |

**Kapsam satırı:**  
`Andrea · default · Andrea V-1.5.0 / schema_name Andrea 1.5.0 · theme_store_id null · shop women-beauty-7.myshopify.com · Speedo Themes · password 1 · home→PDP glitter-nail-polish Color→PLP /collections/all→/collections→search cream→cart empty+filled→about-us→contact→faqs→news+article→404 · 41 obs · 0 yeni şema · leftover: candidates/andrea-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Shop mega hover 1440 | [ ] interact | [ ] |
| Predictive search `cream` | [ ] interact | [ ] |
| Mobile menu 375 + 768 | [ ] interact | [ ] |
| Cart drawer empty + filled + qty | [ ] interact | [ ] |
| PDP glitter nail Color Chic Grey→Dirty Purple | [ ] interact | [ ] |
| PLP `/collections/all` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=cream` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled | [x] obs | [ ] interact |
| About `/pages/about-us` | [x] obs | [ ] capture |
| Contact `/pages/contact` (submit yok) | [x] obs | [ ] capture |
| FAQ `/pages/faqs` | [x] obs | [ ] capture |
| News + ETIAM article | [x] obs | [ ] capture |
| 404 `/pages/about` | [x] obs | [ ] capture |
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
| 17 | #menu-drawer | `global-menu-drawer` | reuse · 375/768 |
| 18 | details-modal.header__search | `global-predictive-search` | reuse · interact |
| 19 | newsletter-popup | — | leftover 0px / PII |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–18 | home static + overlays | home | [ ] | [x] | reuse | [ ] |
| 19–23 | PDP main/tabs/IWT/overlay/related | product-detail | [ ] | [x] | reuse | [ ] |
| 24–25 | banner + PLP | collection | [ ] | [x] | reuse | [ ] |
| 26 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 27 | search-results | search | [ ] | [x] | reuse | [ ] |
| 28 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 29–33 | overlay / IWT / team / overlay / IWT | about-brand | [ ] | [x] | reuse | [ ] |
| 34–36 | overlay + trust + form | contact | [ ] | [x] | reuse | [ ] |
| 37–38 | overlay + FAQ | faq-support | [ ] | [x] | reuse | [ ] |
| 39–40 | list + post | blog-post | [ ] | [x] | reuse | [ ] |
| 41 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (shopper-state)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 | [ ] Shop mega |
| global-predictive-search | input | [ ] `cream` |
| global-menu-drawer | open + changed 375/768 | [ ] hamburger |
| global-cart-drawer | filled + changed | [ ] glitter ATC |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed | [ ] Color Dirty Purple |
| product-info-tabs | changed | [ ] ADDITIONAL INFORMATION |
| faq-collapsible-tabs | changed | [ ] accordion |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/andrea-leftovers.md`](../candidates/andrea-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Color / tabs / FAQ
- [ ] PNG bak → stateFindings
- [ ] `node scripts/validate-schemas.mjs` — 0 error (şema dokunulmadı)
