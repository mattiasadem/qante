# Todo — Boutique (Speedo Themes, third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://fashion-store-clean-10.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/clean-fashion-boutique-best-fashion-shopify-templates-o-s-2-0  
*Preset:* `default` · *Slug:* `boutique`  
*Vendor:* Speedo Themes (Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Boutique-v-1-5-0**  
`schema_name` = **Boutique** · `schema_version` = **1.5.0** · `role` = **main** · theme id `170605216055`  
`theme_store_id` = **null**  
`Shopify.shop` = `fashion-store-clean-10.myshopify.com`  
Title: `Latest Shopify Fashion Store – Fashion Store Clean 10 (password: 1)`  
Storefront password (ürün sayfasında yayın): **`1`** — aynı host `/password`, başka vitrin yok.

**Durum:** Mod A walk + resmi 3vp (capture devam) + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/boutique/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **38** |
| Parallel | yalnız `observations/boutique/`, `evidence/boutique/`, `todo/boutique.md`, `candidates/boutique-leftovers.md` + `unlock-storefront` host |

**Kapsam satırı:**  
`Boutique · default · Boutique-v-1-5-0 / schema_name Boutique 1.5.0 · theme_store_id null · shop fashion-store-clean-10.myshopify.com · Speedo Themes · home→PDP party-wear-long-floral-dress→PLP /collections/all→/collections→search dress→cart empty+filled→about-us→faqs→contact→news+article→404 · 38 obs · 0 yeni şema · leftover: candidates/boutique-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/hero/featured/rich/cats/best/multirow/trust/IWT-2/news/footer | roster | [ ] capture |
| Mega | ⛔ yok (Dawn drawer-menu, hamburger 1440) | leftover |
| Predictive search `dress` | roster | [ ] interact |
| Mobile + 1440 hamburger | roster | [ ] interact |
| Cart drawer empty + filled + qty | roster | [ ] interact |
| PDP Color Pink→Yellow / Size S→M | roster | [ ] interact |
| PLP `/collections/all` | roster | [ ] capture |
| Collections `/collections` | roster | [ ] capture |
| Search `/search?q=dress` | roster | [ ] capture |
| Cart page empty + filled + qty | roster | [ ] interact |
| About `/pages/about-us` | roster | [ ] capture |
| Contact form (submit yok) | roster | [ ] capture |
| FAQ `/pages/faqs` (`/pages/faq` 404) | roster | [ ] capture + interact |
| News + favorite-looks-from-fashion-week | roster | [ ] capture |
| 404 | roster | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Boutique / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement swiper `__c46903b8` | `promo-announcement-bar` | reuse · marquee 4 mesaj |
| 2 | header | `navigation-header-mega` | reuse · mega yok · drawer-menu |
| 3 | `__3b7cb796` slideshow | `hero-slideshow` | reuse |
| 4 | featured_collection | `product-showcase-grid-featured` | reuse |
| 5 | `__f585c67b` rich-text | `editorial-rich-text` | reuse · başlık yok |
| 6 | `__07468762` category | `collection-nav-image-cards` | reuse · 3 kart |
| 7 | `__74b4724b` BEST SELLING | `product-showcase-grid-featured.2` | reuse |
| 8 | `__9523e883` multirow | `editorial-image-with-text` | reuse · Dawn multirow |
| 9 | `__27810045` icons | `trust-icon-row` | reuse |
| 10 | `__b4e42d3d` image-banner | `editorial-image-with-text.2` | reuse · overlay değil, yan yana IWT |
| 11 | `__1f806fa0` LATEST NEWS | `blog-list-main` | reuse |
| 12 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 13 | newsletter-popup | — | leftover · canlı zenon / PII |
| 14 | #menu-drawer | `global-menu-drawer` | reuse · 375/768/**1440** |
| 15 | .search-modal | `global-predictive-search` | reuse |
| 16 | #CartDrawer | `global-cart-drawer` | reuse |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–16 | home + overlays | home | [ ] | [x] | reuse | [ ] |
| 17–21 | PDP main/tabs/IWT/banner/related | product-detail | [ ] | [x] | reuse | [ ] |
| 22–23 | banner + PLP grid | collection | [ ] | [x] | reuse | [ ] |
| 24 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 25 | search-results | search | [ ] | [x] | reuse | [ ] |
| 26 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 27–31 | about banners / IWT / team | about-brand | [ ] | [x] | reuse | [ ] |
| 32–33 | FAQ banner + accordion | faq-support | [ ] | [x] | reuse | [ ] |
| 34–36 | contact banner / office / form | contact | [ ] | [x] | reuse | [ ] |
| 37–38 | news + article + 404 | blog-* / not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial | mega yok — hamburger 1440 |
| global-menu-drawer | open / changed | [ ] 375/768/1440 + Shop nested |
| global-predictive-search | initial + input | [ ] boş modal + `dress` |
| global-cart-drawer | initial / filled / changed | [ ] boş → dolu → qty |
| cart-page-main | initial / filled / changed | [ ] boş → dolu → qty |
| product-info-main | initial / changed | [ ] Color Pink→Yellow |
| faq-collapsible-tabs | initial / changed | [ ] Q2 açık |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/boutique-leftovers.md`](../candidates/boutique-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact hamburger / search / cart / PDP variant / FAQ
- [ ] PNG bak → stateFindings
- [ ] `node scripts/validate-schemas.mjs`
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
