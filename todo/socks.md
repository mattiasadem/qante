# Todo — Socks And Fashion (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://socks-online-store-1.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/socks-and-fashion-shopify-2-0-theme  
*Preset klasör:* `default` · slug `socks`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **socks-online-store-v-1-5-0-latest-updates-new**  
`schema_name` = **Socks** · `schema_version` = **1.5.0** · `role` = **main** · theme id `132680483023`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`handle` = `"null"`  
Walk host + `Shopify.shop` = `socks-online-store-1.myshopify.com` · locale `en` · country `US` · currency `USD`

**Password wall:** GET `/` → `/password`. Title `Socks Online Store 1 (password: 1)`. Speedo ürün sayfası: “Please enter password `1` to view demo.” Public storefront-unlock — hesap değil. **Başka host uydurulmadı.**

**Durum:** Mod A walk + 3vp + interact (pixel-check)  
**PR:** draft #389 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/socks/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **46** |
| PNG | **183** (137 static + 46 interact) |
| Parallel | yalnız `observations/socks/`, `evidence/socks/`, `todo/socks.md`, `candidates/socks-leftovers.md`, unlock host satırı |

**Kapsam satırı:**  
`Socks · default · socks-online-store-v-1-5-0-latest-updates-new / schema_name Socks 1.5.0 · theme_store_id null · shop socks-online-store-1.myshopify.com · Speedo Themes · password 1 · home→PDP nintendo-donkey-kong→PLP /collections/all→/collections→search sock→cart empty+filled→about-layout-1→contact→faq→news+article→404 · 46 obs · 183 PNG · 0 yeni şema · leftover: candidates/socks-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (header→footer) | [x] obs | [x] capture |
| Shop mega hover 1440 | [x] interact | #Details-HeaderMenu-2 → 6 kart |
| Predictive search `socks` | [x] interact | PRODUCTS listesi |
| Mobile menu 375 + 768 | [x] interact | hamburger open |
| Cart drawer empty + filled + qty | [x] interact | forceOpen · ATC UI · qty 1→2 |
| PDP Nintendo Color | [x] interact | Red → Razzmatazz Lips |
| PLP `/collections/all` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=sock` | [x] obs | [x] capture |
| Cart page empty + filled | [x] interact | boş + Nintendo qty1 + qty2 |
| About `/pages/about-layout-1` | [x] obs | [x] capture |
| Contact `/pages/contact` (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faq` | [x] interact | Q1 açık · Q2 açıldı |
| News + blooming gardens article | [x] obs | [x] capture |
| 404 `/pages/404` | [x] obs | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header `sections--16195360882895__header` | `navigation-header-mega` | reuse · mega `#Details-HeaderMenu-2` Shop |
| 2 | `__3b7cb796` slideshow | `hero-slideshow` | reuse |
| 3 | `__07468762` collection-list Shop by Style | `collection-nav-image-cards` | reuse |
| 4 | `__0617c2f2` Best Selling | `product-showcase-grid-featured` | reuse |
| 5 | `video_Y7LRAF` | `media-video-hero` | reuse · metin boş |
| 6 | `image_with_text_NWG7wh` | `editorial-image-with-text` | reuse |
| 7 | `custom_testimonial_N46ngq` | `testimonial-quote-carousel` | reuse |
| 8 | `featured_collection_Hxw6WX` New Arrivals | `product-showcase-grid-featured.2` | reuse |
| 9 | `shopable_videos_4mTGqd` | `media-shop-the-feed` | reuse |
| 10 | `__588ae6a9` Latest Blog | `blog-list-main` | reuse |
| 11 | `brand_logo_MTFHEh` | `social-proof-brand-logos` | reuse |
| 12 | `instagram_7EAfEb` @Socks | `media-shop-the-feed.2` | reuse |
| 13 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 14 | #CartDrawer | `global-cart-drawer` | reuse · interact |
| 15 | #Search-In-Modal | `global-predictive-search` | reuse · interact |
| 16 | #menu-drawer | `global-menu-drawer` | reuse · 375/768 |

Home announcement section yok (PDP ticker ayrı).

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–16 | home static + overlays | home | [x] | [x] | reuse | [x] |
| 17–25 | PDP main/tabs/video/cols/multirow/icons/banner/faq/ticker | product-detail | [x] | [x] | reuse | [x] |
| 26–28 | banner + slider + PLP grid | collection | [x] | [x] | reuse | [x] |
| 29 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 30 | search-results | search | [x] | [x] | reuse | [x] |
| 31 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 32–38 | about parallax/IWT/cols/icons/rich/team/logos | about-brand | [x] | [x] | reuse | [x] |
| 39–41 | contact parallax/office/form | contact | [x] | [x] | reuse | [x] |
| 42–43 | FAQ parallax + accordion | faq-support | [x] | [x] | reuse | [x] |
| 44–46 | news + article + 404 | blog-* / not-found | [x] | [x] | reuse | [x] |

---

## Interact (plan)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | open 1440 | 6 koleksiyon kartı |
| global-predictive-search | input `socks` | PRODUCTS |
| global-menu-drawer | open 375/768 | hamburger |
| global-cart-drawer | initial / filled / changed | Nintendo $215 → $430 |
| cart-page-main | initial / filled / changed | boş + dolu |
| product-info-main | changed Color | Red → Razzmatazz Lips |
| faq-collapsible-tabs | changed | Q2 açık; Q1 kaldı |
| product-showcase-grid-plp | changed Color | Black 8 of 25 |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/socks-leftovers.md`](../candidates/socks-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 137 PNG · menu 1440 zero-size
- [x] Interact steps yazıldı (scan+probe)
- [x] Interact capture + pixel-check / stateFindings (46 PNG · 0 missingStates)
- [x] `node scripts/validate-schemas.mjs` — 8 şema · 0 error · 0 warn
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
