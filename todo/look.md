# Todo — Look (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://goggles-online-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/look-shopify-eyewear-theme-shopify-os-2-0  
*Preset klasör:* `default` · slug `look`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Look V-1.5.0**  
`schema_name` = **Look** · `schema_version` = **1.5.0** · `role` = **main** · theme id `143012102385`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`handle` = `"null"`  
Walk host + `Shopify.shop` = `goggles-online-store.myshopify.com` · locale `en` · country `US` · currency `USD`

**Password wall:** GET `/` → `/password`. Title `Look - Sunglasses and Eyewear Store – Goggles Online store (password: 1)`. Speedo ürün sayfası: “Please enter password `1` to view demo.” Public storefront-unlock — hesap değil. **Başka host uydurulmadı.**

**Durum:** Mod A walk + 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/look/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **41** |
| PNG | (capture) |
| Parallel | yalnız `observations/look/`, `evidence/look/`, `todo/look.md`, `candidates/look-leftovers.md`, unlock host satırı |

**Kapsam satırı:**  
`Look · default · Look V-1.5.0 / schema_name Look 1.5.0 · theme_store_id null · shop goggles-online-store.myshopify.com · Speedo Themes · password 1 · home→PDP hipe-full-rim-ray-ban-frames→PLP sunglasses→/collections→search goggle→cart empty+filled→about-us→contact-us→faqs→news+your-vision-is-our-mission→404 · 41 obs · 0 yeni şema · leftover: candidates/look-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Shop mega hover 1440 | [ ] interact | [ ] |
| Predictive search `goggle` | [ ] interact | [ ] |
| Mobile menu 375 + 768 | [ ] interact | [ ] |
| Cart drawer empty + filled + qty | [ ] interact | [ ] |
| PDP HIPE Color Antique | [ ] interact | [ ] |
| PLP `/collections/sunglasses` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=goggle` | [x] obs | [ ] capture |
| Cart page empty + filled | [x] obs | [ ] capture + interact |
| About `/pages/about-us` | [x] obs | [ ] capture |
| Contact `/pages/contact-us` (submit yok) | [x] obs | [ ] capture |
| FAQ `/pages/faqs` | [x] obs | [ ] capture + interact |
| News + YOUR VISION IS OUR MISSION | [x] obs | [ ] capture |
| 404 | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega `#Details-HeaderMenu-1` |
| 3 | `__3b7cb796` slideshow | `hero-slideshow` | reuse |
| 4 | `__07468762` collection-list | `collection-nav-image-cards` | reuse |
| 5 | featured_collection_h498CU BEST SELLERS | `product-showcase-grid-featured` | reuse |
| 6 | sub_banner_ML9a7j WOMEN/MEN LOOK | `promo-grid-banner` | reuse |
| 7 | featured_collection_Pj7eCK NEW ARRIVALS | `product-showcase-grid-featured.2` | reuse |
| 8 | image_banner_zUEwbC COSMOPOLIS | `editorial-image-with-text-overlay` | reuse |
| 9 | testimonials_tg4nyH | `testimonial-quote-carousel` | reuse |
| 10 | brand_logo_hFbNk9 | `social-proof-brand-logos` | reuse |
| 11 | custom_instagram_hbzkpd @LOOK | `media-shop-the-feed` | reuse |
| 12 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 13 | newsletter-popup | — | leftover PII / social-proof pop |
| 14 | #CartDrawer | `global-cart-drawer` | reuse · interact |
| 15 | #Search-In-Modal | `global-predictive-search` | reuse · interact |
| 16 | #menu-drawer | `global-menu-drawer` | reuse · 375/768 |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–16 | home static + overlays | home | [ ] | [x] | reuse | [ ] |
| 17–21 | PDP main/tabs/icons/multirow/banner | product-detail | [ ] | [x] | reuse | [ ] |
| 22–23 | banner + PLP grid | collection | [ ] | [x] | reuse | [ ] |
| 24 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 25 | search-results | search | [ ] | [x] | reuse | [ ] |
| 26 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 27–34 | about breadcrumbs/rich/banner/stats/why/quote/multirow/logos | about-brand | [ ] | [x] | reuse | [ ] |
| 35–37 | contact crumbs/form/icons | contact | [ ] | [x] | reuse | [ ] |
| 38–39 | FAQ crumbs + accordion | faq-support | [ ] | [x] | reuse | [ ] |
| 40–41 | news + article + 404 | blog-* / not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (plan)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | open 1440 | `#Details-HeaderMenu-1` SHOP mega |
| global-predictive-search | input `goggle` | `#Search-In-Modal` |
| global-menu-drawer | open 375/768 | hamburger; 1440 gizli |
| global-cart-drawer | initial / filled / changed | HIPE $90 → qty2 |
| cart-page-main | initial / filled / changed | boş + HIPE |
| product-info-main | changed Color | Antique (veya görünen swatch) |
| faq-collapsible-tabs | changed | ikinci soru |
| product-showcase-grid-plp | changed Color | facet — yoklanır |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/look-leftovers.md`](../candidates/look-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / hamburger / cart / PDP / FAQ
- [ ] PNG bak → stateFindings
- [ ] `node scripts/validate-schemas.mjs`
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
