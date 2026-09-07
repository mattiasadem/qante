# Todo — Lingerie (Speedo Themes, third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://fashion-store-clean-21.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/lingerie-best-bikini-themes-shopify-2-0-theme  
*Preset:* `default` · *Slug:* `lingerie`  
*Vendor:* Speedo Themes (Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Lingerie-v-1-5-0-latest-updates-new**  
`schema_name` = **Lingerie** · `schema_version` = **1.5.0** · `role` = **main** · theme id `176524362023`  
`theme_store_id` = **null**  
`Shopify.shop` = `fashion-store-clean-21.myshopify.com`  
Title: `Lingerie - Best Shopify Lingerie Store – fashion-store-clean-21`  
Storefront password (ürün sayfasında yayın): **`1`** — aynı host `/password`, başka vitrin yok.  
Auth: `observations/lingerie/_auth.json`.

**Durum:** Mod A walk + resmi 3vp + interact (stateFindings yazıldı)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/lingerie/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **48** |
| Parallel | yalnız `observations/lingerie/`, `evidence/lingerie/`, `todo/lingerie.md`, `candidates/lingerie-leftovers.md` + `unlock-storefront` host satırı |

**Kapsam satırı:**  
`Lingerie · default · Lingerie-v-1-5-0-latest-updates-new / schema_name Lingerie 1.5.0 · theme_store_id null · shop fashion-store-clean-21.myshopify.com · Speedo Themes · password 1 · home→PDP Maaji White→Orange→PLP /collections/all→/collections→search bikini→cart empty+filled→about-layout-1→faq→contact→news+article→404 · 48 obs · ~187 PNG · 0 yeni şema · leftover: candidates/lingerie-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) + overlays | roster | 3vp |
| Mega Shop / Category 1440 | roster | 3vp + interact |
| Predictive search `bikini` | roster | 3vp + interact |
| Mobile + 1440 hamburger | roster | 3vp + interact |
| Cart drawer empty + filled + qty | roster | 3vp + interact |
| PDP Color White→Orange (Maaji) | roster | 3vp + interact |
| PLP `/collections/all` | roster | 3vp |
| Collections `/collections` | roster | 3vp |
| Search `/search?q=bikini` | roster | 3vp |
| Cart page empty + filled + qty | roster | 3vp + interact |
| About `/pages/about-layout-1` (`/pages/about-us` 404) | roster | 3vp |
| Contact form (submit yok) | roster | 3vp |
| FAQ `/pages/faq` | roster | 3vp + interact |
| News + sweetness-and-comfort article | roster | 3vp |
| 404 | roster | 3vp |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Lingerie / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega + hamburger 1440 |
| 3 | categories_slider_9iqKQM | `collection-nav-slider` | reuse |
| 4 | `__3b7cb796` slideshow | `hero-slideshow` | reuse |
| 5 | `__0617c2f2` featured-product | `product-showcase-grid-featured` | reuse · tab yok |
| 6 | multicolumn_HXzQac | `features-multicolumn` | reuse |
| 7 | `__07468762` collections | `collection-nav-image-cards` | reuse |
| 8 | image_with_text_YbdP9F | `editorial-image-with-text` | reuse |
| 9 | featured_collection_4r8wtD | `product-showcase-grid-featured.2` | reuse |
| 10 | brand_with_text_8aGt8x | `editorial-custom-content` | reuse · metin+sayaç, logo yok |
| 11 | `__588ae6a9` Latest news | `blog-list-main` | reuse |
| 12 | shopable_videos_AM8fTe | `media-shop-the-feed` | reuse |
| 13 | custom_instagram_N8fnnR | `media-mosaic-grid` | reuse |
| 14 | newsletter_n43rgW | `lead-capture-newsletter-band` | reuse · submit yok |
| 15 | footer | `footer-columns-newsletter` | reuse |
| 16 | #menu-drawer | `global-menu-drawer` | reuse · 375/768/1440 |
| 17 | #Search-In-Modal | `global-predictive-search` | reuse |
| 18 | #CartDrawer | `global-cart-drawer` | reuse |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–18 | home + overlays | home | [x] | [x] | reuse | [x] |
| 19–27 | PDP main/tabs/video/IWT/trust/banner/FAQ/marquee | product-detail | [x] | [x] | reuse | [x] |
| 28–30 | banner + slider + PLP grid | collection | [x] | [x] | reuse | [x] |
| 31 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 32 | search-results | search | [x] | [x] | reuse | [x] |
| 33 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 34–40 | about-layout-1 | about-brand | [x] | [x] | reuse | [x] |
| 41–42 | FAQ banner + accordion | faq-support | [x] | [x] | reuse | [x] |
| 43–45 | contact banner / office / form | contact | [x] | [x] | reuse | [x] |
| 46–48 | news + article + 404 | blog-* / not-found | [x] | [x] | reuse | [x] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial / open / changed | Shop mega 6 kart + Category mega liste 1440 |
| global-menu-drawer | open | hamburger 375/768/1440 — Shop accordion yok (link leftover) |
| global-predictive-search | open + input | `bikini` PRODUCTS; 1440 `#Search-In-Template` |
| global-cart-drawer | initial / filled / changed | boş → Maaji White $80 → qty 2 / $160 |
| cart-page-main | initial / filled / changed | boş → Maaji qty 1 → qty 2 / $160 |
| product-info-main | initial / changed | Color White→Orange (görsel değişti) |
| faq-collapsible-tabs | initial / changed | Q1 açık; Q2 de açıldı |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/lingerie-leftovers.md`](../candidates/lingerie-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / hamburger / search / cart / PDP Color / FAQ
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs`
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
