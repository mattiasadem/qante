# Todo — Seabikini (Speedo Themes, third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://fashion-store-clean-11.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/seabikini-shopify-bikini-themes-shopify-2-0  
*Preset:* `default` · *Slug:* `seabikini`  
*Vendor:* Speedo Themes (Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Seabikini-v-1-5-0**  
`schema_name` = **Seabikini** · `schema_version` = **1.5.0** · `role` = **main** · theme id `171062952255`  
`theme_store_id` = **null**  
`Shopify.shop` = `fashion-store-clean-11.myshopify.com`  
Title: `Seabikini - Best Shopify Bikini Store – Fashion Store Clean 11 (password: 1)`  
Storefront password (ürün sayfasında yayın): **`1`** — aynı host `/password`, başka vitrin yok.

**Durum:** Mod A walk + resmi 3vp + interact (pixel-check)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/seabikini/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| Evidence | **162 PNG** (117 static 3vp + 45 interact) |
| Parallel | yalnız `observations/seabikini/`, `evidence/seabikini/`, `todo/seabikini.md`, `candidates/seabikini-leftovers.md` + `dismiss-overlays` zenon |

**Kapsam satırı:**  
`Seabikini · default · Seabikini-v-1-5-0 / schema_name Seabikini 1.5.0 · theme_store_id null · shop fashion-store-clean-11.myshopify.com · Speedo Themes · home→PDP summer-swimwear→PLP /collections/all→/collections→search bikini→cart empty+filled→about-us→faqs→contact→news+article→404 · 39 obs · 162 PNG · 0 yeni şema · leftover: candidates/seabikini-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/hero/featured/rich/marquee/cats/best/multirow/trust/IWT-2/news/footer | roster | [x] capture |
| Mega | ⛔ yok (Dawn drawer-menu, hamburger 1440) | leftover |
| Predictive search `bikini` | roster | [x] interact |
| Mobile + 1440 hamburger | roster | [x] interact |
| Cart drawer empty + filled + qty | roster | [x] interact |
| PDP Size S→M | roster | [x] interact |
| PLP `/collections/all` | roster | [x] capture |
| Collections `/collections` | roster | [x] capture |
| Search `/search?q=bikini` | roster | [x] capture |
| Cart page empty + filled + qty | roster | [x] interact |
| About `/pages/about-us` | roster | [x] capture |
| Contact form (submit yok) | roster | [x] capture |
| FAQ `/pages/faqs` (`/pages/faq` 404) | roster | [x] capture + interact |
| News + launching-a-new-collection | roster | [x] capture |
| 404 | roster | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Seabikini / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement swiper `__c46903b8` | `promo-announcement-bar` | reuse · marquee 4 mesaj |
| 2 | header | `navigation-header-mega` | reuse · mega yok · drawer-menu |
| 3 | `__3b7cb796` slideshow | `hero-slideshow` | reuse |
| 4 | featured_collection | `product-showcase-grid-featured` | reuse |
| 5 | `__f585c67b` rich-text | `editorial-rich-text` | reuse · başlık yok |
| 6 | `__68b5f9b2` marquee | `promo-scrolling-marquee` | reuse |
| 7 | `__07468762` category | `collection-nav-image-cards` | reuse · 3 kart |
| 8 | `__74b4724b` BEST SELLING | `product-showcase-grid-featured.2` | reuse |
| 9 | `__9523e883` multirow | `editorial-image-with-text` | reuse · Dawn multirow |
| 10 | `__27810045` icons | `trust-icon-row` | reuse |
| 11 | `__b4e42d3d` image-banner | `editorial-image-with-text.2` | reuse · overlay değil, yan yana IWT |
| 12 | `__1f806fa0` LATEST NEWS | `blog-list-main` | reuse |
| 13 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 14 | newsletter-popup | — | leftover · canlı zenon / PII |
| 15 | #menu-drawer | `global-menu-drawer` | reuse · 375/768/**1440** |
| 16 | .search-modal | `global-predictive-search` | reuse |
| 17 | #CartDrawer | `global-cart-drawer` | reuse |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–17 | home + overlays | home | [x] | [x] | reuse | [x] |
| 18–22 | PDP main/tabs/IWT/banner/related | product-detail | [x] | [x] | reuse | [x] |
| 23–24 | banner + PLP grid | collection | [x] | [x] | reuse | [x] |
| 25 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 26 | search-results | search | [x] | [x] | reuse | [x] |
| 27 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 28–32 | about banners / IWT / team | about-brand | [x] | [x] | reuse | [x] |
| 33–34 | FAQ banner + accordion | faq-support | [x] | [x] | reuse | [x] |
| 35–37 | contact banner / office / form | contact | [x] | [x] | reuse | [x] |
| 38–39 | news + article + 404 | blog-* / not-found | [x] | [x] | reuse | [x] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial | mega yok — hamburger 1440 |
| global-menu-drawer | open / changed | [x] 375/768/1440 + Shop nested Classic/Designer/String/Retro |
| global-predictive-search | initial + input | [x] boş modal + `bikini` SUGGESTIONS/PRODUCTS |
| global-cart-drawer | initial / filled / changed | [x] boş → $59 qty1 → $118 qty2 · UI addToCart |
| cart-page-main | initial / filled / changed | [x] boş → $59 qty1 → $118 qty2 |
| product-info-main | initial / changed | [x] Size S→M (`label[for=…main-2-1]`) |
| faq-collapsible-tabs | initial / changed | [x] Q1 default açık; Q2 açılınca Q1 kapanmıyor |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/seabikini-leftovers.md`](../candidates/seabikini-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact hamburger / search / cart / PDP Size / FAQ
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs`
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
