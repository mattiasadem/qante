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

**Durum:** Mod A walk + resmi 3vp + interact (devam)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/seabikini/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| Parallel | yalnız `observations/seabikini/`, `evidence/seabikini/`, `todo/seabikini.md`, `candidates/seabikini-leftovers.md` + capture password helper |

**Kapsam satırı:**  
`Seabikini · default · Seabikini-v-1-5-0 / schema_name Seabikini 1.5.0 · theme_store_id null · shop fashion-store-clean-11.myshopify.com · Speedo Themes · home→PDP summer-swimwear→PLP /collections/all→/collections→search bikini→cart empty→about-us→faqs→contact→news+article→404 · 39 obs · 0 yeni şema · leftover: candidates/seabikini-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/hero/featured/rich/marquee/cats/best/multirow/trust/banner/news/footer | roster | [ ] capture |
| Mega | ⛔ yok (Dawn drawer-menu, hamburger 1440) | leftover |
| Predictive search `bikini` | roster | [ ] interact |
| Mobile + 1440 hamburger | roster | [ ] interact |
| Cart drawer empty + filled + qty | roster empty | [ ] interact |
| PDP Size S→M | roster | [ ] interact |
| PLP `/collections/all` | roster | [ ] capture |
| Collections `/collections` | roster | [ ] capture |
| Search `/search?q=bikini` | roster | [ ] capture |
| Cart page empty + filled + qty | roster empty | [ ] interact |
| About `/pages/about-us` | roster | [ ] capture |
| Contact form (submit yok) | roster | [ ] capture |
| FAQ `/pages/faqs` (`/pages/faq` 404) | roster | [ ] capture |
| News + launching-a-new-collection | roster | [ ] capture |
| 404 | roster | [ ] capture |
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
| 11 | `__b4e42d3d` image-banner | `editorial-image-with-text-overlay` | reuse |
| 12 | `__1f806fa0` LATEST NEWS | `blog-list-main` | reuse |
| 13 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 14 | newsletter-popup | — | leftover h=0 / PII |
| 15 | #menu-drawer | `global-menu-drawer` | reuse · 375/768/**1440** |
| 16 | .search-modal | `global-predictive-search` | reuse |
| 17 | #CartDrawer | `global-cart-drawer` | reuse |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–17 | home + overlays | home | [ ] | [x] | reuse | [ ] |
| 18–22 | PDP main/tabs/IWT/banner/related | product-detail | [ ] | [x] | reuse | [ ] |
| 23–24 | banner + PLP grid | collection | [ ] | [x] | reuse | [ ] |
| 25 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 26 | search-results | search | [ ] | [x] | reuse | [ ] |
| 27 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 28–32 | about banners / IWT / team | about-brand | [ ] | [x] | reuse | [ ] |
| 33–34 | FAQ banner + accordion | faq-support | [ ] | [x] | reuse | [ ] |
| 35–37 | contact banner / office / form | contact | [ ] | [x] | reuse | [ ] |
| 38–39 | news + article + 404 | blog-* / not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | mega yok — hamburger drawer |
| global-menu-drawer | open / changed | [ ] 375/768/1440 + Shop nested |
| global-predictive-search | input | [ ] `bikini` |
| global-cart-drawer | filled + changed | [ ] |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed | [ ] Size S→M |
| faq-collapsible-tabs | changed | [ ] |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/seabikini-leftovers.md`](../candidates/seabikini-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact hamburger / search / cart / PDP Size / FAQ
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
- [ ] Email / account / checkout / newsletter submit — **yapılmayacak**
