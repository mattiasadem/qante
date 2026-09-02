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
| PNG | **172** |
| Parallel | yalnız `observations/look/`, `evidence/look/`, `todo/look.md`, `candidates/look-leftovers.md`, unlock host satırı |

**Kapsam satırı:**  
`Look · default · Look V-1.5.0 / schema_name Look 1.5.0 · theme_store_id null · shop goggles-online-store.myshopify.com · Speedo Themes · password 1 · home→PDP hipe-full-rim-ray-ban-frames→PLP sunglasses→/collections→search goggle→cart empty+filled→about-us→contact-us→faqs→news+your-vision-is-our-mission→404 · 41 obs · 0 yeni şema · leftover: candidates/look-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Shop mega hover 1440 | [x] interact | 6 kart POLARIZED…SUNGLASSES |
| Predictive search `goggle` | [x] interact | boş çubuk + goggle/PRODUCTS |
| Mobile menu 375 + 768 | [x] missingStates | 2 fail — overlay durmadı |
| Cart drawer empty + filled + qty | [x] interact | boş + HIPE $90→$180 |
| PDP HIPE Color Charcoal | [x] interact | Antique sold out |
| PLP `/collections/sunglasses` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=goggle` | [x] obs | [x] capture |
| Cart page empty + filled | [x] obs | [x] empty 3vp · filled interact |
| About `/pages/about-us` | [x] obs | [x] capture |
| Contact `/pages/contact-us` (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faqs` | [x] obs | [x] capture · interact |
| News + YOUR VISION IS OUR MISSION | [x] obs | [x] capture |
| 404 | [x] obs | [x] capture |
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
| 1–16 | home static + overlays | home | [x] | [x] | reuse | [x] |
| 17–21 | PDP main/tabs/icons/multirow/banner | product-detail | [x] | [x] | reuse | [x] |
| 22–23 | banner + PLP grid | collection | [x] | [x] | reuse | [x] |
| 24 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 25 | search-results | search | [x] | [x] | reuse | [x] |
| 26 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 27–34 | about breadcrumbs/rich/banner/stats/why/quote/multirow/logos | about-brand | [x] | [x] | reuse | [x] |
| 35–37 | contact crumbs/form/icons | contact | [x] | [x] | reuse | [x] |
| 38–39 | FAQ crumbs + accordion | faq-support | [x] | [x] | reuse | [x] |
| 40–41 | news + article + 404 | blog-* / not-found | [x] | [x] | reuse | [x] |

---

## Interact (plan)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | open 1440 | 6 kart — alındı |
| global-predictive-search | input `goggle` | PRODUCTS başlığı — alındı |
| global-menu-drawer | open 375/768 | missingStates (2 fail) |
| global-cart-drawer | initial / filled / changed | boş + HIPE $90→$180 |
| cart-page-main | initial / filled / changed | boş + HIPE $90→$180 |
| product-info-main | changed Color | Charcoal (Antique sold out) |
| faq-collapsible-tabs | changed | Q1+Q2 birlikte açık |
| product-showcase-grid-plp | changed Color | 16→6 Black |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/look-leftovers.md`](../candidates/look-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 121 PNG
- [x] Interact: mega 6 kart · search goggle · cart empty/filled/qty · PDP Charcoal · FAQ Q2 · tabs · PLP Black
- [x] `global-menu-drawer` open missingStates (2 fail)
- [x] `node scripts/validate-schemas.mjs`
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
