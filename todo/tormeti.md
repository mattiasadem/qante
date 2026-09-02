# Todo — Tormeti (Speedo Themes, third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://tormeti-fashi.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/speedo-pandora-jewellery-shopify-theme-os-2-0  
*Preset:* `default` · *Slug:* `tormeti`  
*Vendor:* Speedo Themes (Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Pandora-jewellery V-1.5.0 final**  
`schema_name` = **Pandora_Jewellery** · `schema_version` = **1.5.0** · `role` = **main** · theme id `143506604249`  
`theme_store_id` = **null**  
`Shopify.shop` = `tormeti-fashi.myshopify.com`  
locale `en` · country `US` · currency `USD`

**Password:** `/` **302** → `/password`. Speedo ürün sayfası: “Please enter password 1 to view demo.” Public storefront unlock `1` — hesap değil. Başka host yok.

**Durum:** Mod A walk + resmi 3vp + interact (devam)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/tormeti/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` · `unlock-storefront.mjs` (`storefrontPassword: "1"`) |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **36** |
| Parallel | yalnız `observations/tormeti/`, `evidence/tormeti/`, `todo/tormeti.md`, `candidates/tormeti-leftovers.md`, `scripts/unlock-storefront.mjs` |

**Kapsam satırı:**  
`Tormeti · default · Pandora-jewellery V-1.5.0 final / schema_name Pandora_Jewellery 1.5.0 · theme_store_id null · shop tormeti-fashi.myshopify.com · public /password 1 · home→PDP gold-and-diamond-stud-earrings Metal Gold→PLP /collections/best-seller 8→/collections→search gold→cart empty/filled→about-us→contact→faq→news+seasonal-trends→404 · 36 obs · 0 yeni şema · leftover: candidates/tormeti-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announce→footer) | [x] obs | [ ] capture |
| Desktop Jewellery mega 1440 | interact | [ ] |
| Predictive search `gold` | interact | [ ] |
| Mobile menu 375 + 768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact | [ ] |
| PDP Gold And Diamond Stud Earrings Metal Gold→ | interact | [ ] |
| PLP `/collections/best-seller` | [x] obs | [ ] |
| Collections `/collections` | [x] obs | [ ] |
| Search `/search?q=gold` | [x] obs | [ ] |
| Cart `/cart` empty + filled + qty | interact | [ ] |
| About `/pages/about-us` | [x] obs | [ ] |
| Contact `/pages/contact` (submit yok) | [x] obs | [ ] |
| FAQ `/pages/faq` | [x] obs | [ ] |
| News `/blogs/news` + Seasonal Trends post | [x] obs | [ ] |
| 404 | [x] obs | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Tormeti / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | slideshow 4ab34acd | `hero-slideshow` | reuse · 3 slayt |
| 4 | custom_icon SHOP BY SHAPE | `collection-nav-icon-buttons` | reuse |
| 5 | collection-list YOU MAY LOVE | `collection-nav-cards` | reuse |
| 6 | home-page-tab TRENDY | `product-showcase-tabs` | reuse · wishlist leftover |
| 7 | banner LAB GROWN | `editorial-image-with-text-overlay` | reuse |
| 8 | sub-banner EXCLUSIVE | `promo-grid-banner` | reuse · timer yok |
| 9 | blog OUR LATEST | `blog-list-main` | reuse · home instance |
| 10 | sectionreviews | `testimonial-quote-carousel` | reuse |
| 11 | custom_instagram @PANDORA | `media-shop-the-feed` | reuse |
| 12 | services 4 ikon | `trust-icon-row` | reuse |
| 13 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 14 | newsletter-popup | — | leftover h=0 |
| 15 | #CartDrawer | `global-cart-drawer` | reuse · interact |
| 16 | #menu-drawer | `global-menu-drawer` | reuse · 375/768 |
| 17 | details-modal.header__search | `global-predictive-search` | reuse · interact |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–17 | home + overlays | home | [ ] | [x] | reuse | [ ] |
| 18–19 | banner + PLP | collection | [ ] | [x] | reuse | [ ] |
| 20 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 21–25 | PDP + IWT + related | product-detail | [ ] | [x] | reuse | [ ] |
| 26–27 | cart + featured | cart | [ ] | [x] | reuse | [ ] |
| 28 | search-results | search | [ ] | [x] | reuse | [ ] |
| 29–31 | about | about-brand | [ ] | [x] | reuse | [ ] |
| 32–33 | contact | contact | [ ] | [x] | reuse | [ ] |
| 34 | faq | faq-support | [ ] | [x] | reuse | [ ] |
| 35 | blog list | blog-list | [ ] | [x] | reuse | [ ] |
| 36 | blog-post-main | blog-post | [ ] | [x] | reuse | [ ] |
| 37 | 404 | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | bekliyor |
| global-predictive-search | input | bekliyor · `gold` |
| global-menu-drawer | open | bekliyor 375/768 |
| global-cart-drawer | filled + changed | bekliyor |
| cart-page-main | filled + changed | bekliyor |
| product-info-main | changed | bekliyor · Metal Gold swatch |
| product-showcase-tabs | hover | bekliyor kart |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/tormeti-leftovers.md`](../candidates/tormeti-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Metal
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
