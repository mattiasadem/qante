# Todo — XOXO / Odzi (Speedo Themes)

*Kaynak (resmi walk URL):* https://pandora-full-fashion.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/odzi-best-shopify-theme-for-clothing-store  
*Preset klasör:* `default`  
*Slug:* `xoxo`  
*Vendor:* Speedo Themes (üçüncü taraf Shopify 2.0 — Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Pandora-full-fashion V-1.5.0**  
`schema_name` = **Pandora_full_fashion** · `schema_version` = **1.5.0** · `role` = **main** · theme id `177674584370`  
`theme_store_id` = **null**  
`Shopify.shop` = `pandora-full-fashion.myshopify.com`  
Title: `Pandora Full Fashion (password: 1)`

**Password:** `/` **302** → `/password`. Vendor ürün sayfası: “Please enter password `1` to view demo.” Aynı host — başka vitrin yok. Auth: `observations/xoxo/_auth.json`.

**Durum:** Mod A walk + 3vp + shopper interact (stateFindings yazıldı)  
**PR:** draft — main’e merge yok

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/xoxo/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/xoxo/`, `evidence/xoxo/`, `todo/xoxo.md`, `candidates/xoxo-leftovers.md` + unlock host satırı |

**Kapsam satırı:**  
`XOXO · default · Pandora-full-fashion V-1.5.0 / schema_name Pandora_full_fashion 1.5.0 · theme_store_id null · pandora-full-fashion (password 1) · Speedo Odzi · home→PDP fashion-running-sneaker-shoes→PLP /collections/all→/collections→search shirt→cart→about-us→faq→contact→news+article→404 · 0 yeni şema`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster | [ ] capture |
| Mega | ⛔ yok (Dawn inline + hamburger) | leftover |
| Predictive search `shirt` | roster | [ ] interact |
| Mobile hamburger 375/768 | roster | [ ] interact |
| Cart drawer empty + filled + qty | roster | [ ] interact |
| PDP (swatch yok) + accordion | roster | [ ] interact |
| Kart hover 2. görsel | roster | [ ] interact |
| PLP `/collections/all` | roster | [ ] capture + filtre |
| Collections `/collections` | roster | [ ] capture |
| Search `/search?q=shirt` | roster | [ ] capture |
| Cart page empty + filled + qty | roster | [ ] interact |
| About `/pages/about-us` | roster | [ ] capture |
| Contact form (submit yok) | roster | [ ] capture |
| FAQ `/pages/faq` | roster | [ ] capture + interact |
| News + article | roster | [ ] capture |
| 404 | roster | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | XOXO / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega yok |
| 3 | offer-banner PAN40 | `promo-announcement-bar.2` | reuse · instance şerit |
| 4 | slideshow / image-banner | `hero-slideshow` | reuse · 1 slayt |
| 5 | isolate rich-text | `editorial-rich-text` | reuse · MADE FOR EVERYTHING YOU ARE |
| 6 | sub-banner Featured | `collection-nav-image-cards` | reuse |
| 7 | The Latest heading | `editorial-rich-text.2` | reuse |
| 8 | new-latest.png banner | `editorial-image-with-text-overlay` | reuse · metin görselde |
| 9 | Pegasus rich-text | `editorial-rich-text.3` | reuse |
| 10 | sub-banner Just In | `promo-grid-banner` | reuse |
| 11 | Don’t miss heading | `editorial-rich-text.4` | reuse |
| 12 | gym banner | `editorial-image-with-text-overlay.2` | reuse |
| 13 | FOR EVERY SIDE rich-text | `editorial-rich-text.5` | reuse |
| 14 | Your Festival | `product-showcase-grid-featured` | reuse + hover |
| 15 | custom_instagram @Pandora | `media-mosaic-grid` | reuse |
| 16 | footer | `footer-columns-newsletter` | reuse |
| 17 | newsletter-popup | — | leftover · PII / 0px |
| 18 | #CartDrawer | `global-cart-drawer` | reuse + interact |
| 19 | #header-search | `global-predictive-search` | reuse + interact |
| 20 | #menu-drawer | `global-menu-drawer` | reuse + interact |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–20 | home + overlays | home | [ ] | [x] | reuse | [ ] |
| 21–25 | PDP main/trust/IWT/banner/related | product-detail | [ ] | [x] | reuse | [ ] |
| 26–27 | banner + PLP grid | collection | [ ] | [x] | reuse | [ ] |
| 28 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 29 | search-results | search | [ ] | [x] | reuse | [ ] |
| 30–31 | cart + featured | cart | [ ] | [x] | reuse | [ ] |
| 32–37 | about banners / IWT / team / FAQ / eco | about-brand | [ ] | [x] | reuse | [ ] |
| 38–40 | contact banner / IWT / form | contact | [ ] | [x] | reuse | [ ] |
| 41–43 | FAQ banner + 2 accordion | faq-support | [ ] | [x] | reuse | [ ] |
| 44–46 | news + article + 404 | blog-* / not-found | [ ] | [x] | reuse | [ ] |

---

## Interact

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial / More | mega yok — More resmi karede yok (2 deneme) |
| global-menu-drawer | open | 375/768 kare homepage (2 deneme) |
| global-predictive-search | open / input | 1440 shirt PRODUCTS; 375/768 missing |
| global-cart-drawer | initial / filled / changed | boş → $229 → $458 |
| cart-page-main | initial / filled / changed | boş → satır → adet 2 |
| product-info-main | initial / changed | sweater Khakhi → Dark Red |
| product-showcase-grid-featured | hover | 2. görsel resmi karede yok |
| product-showcase-grid-plp | open / changed | 375 Filter drawer; 1440 Black 5/25 |
| faq-collapsible-tabs | initial / changed | ilk soru + lorem |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII / kupon PAN40 kullanma

---

## Aday / leftover

[`candidates/xoxo-leftovers.md`](../candidates/xoxo-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact cart / FAQ / PDP swatch / PLP 1440 + 375 filter open
- [x] PNG bak → stateFindings (menu/search 375 / hover / More missingStates)
- [x] `node scripts/validate-schemas.mjs` — 0 error
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
