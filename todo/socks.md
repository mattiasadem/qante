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

**Durum:** Mod A walk + 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/socks/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **46** |
| PNG | (capture sonrası) |
| Parallel | yalnız `observations/socks/`, `evidence/socks/`, `todo/socks.md`, `candidates/socks-leftovers.md`, unlock host satırı |

**Kapsam satırı:**  
`Socks · default · socks-online-store-v-1-5-0-latest-updates-new / schema_name Socks 1.5.0 · theme_store_id null · shop socks-online-store-1.myshopify.com · Speedo Themes · password 1 · home→PDP nintendo-donkey-kong→PLP /collections/all→/collections→search sock→cart empty+filled→about-layout-1→contact→faq→news+article→404 · 46 obs · 0 yeni şema · leftover: candidates/socks-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (header→footer) | [x] obs | [ ] capture |
| Shop mega hover 1440 | [ ] interact | #Details-HeaderMenu-2 |
| Predictive search `sock` | [ ] interact | #Search-In-Modal |
| Mobile menu 375 + 768 | [ ] interact | #menu-drawer |
| Cart drawer empty + filled + qty | [ ] interact | #CartDrawer |
| PDP Nintendo Color | [ ] interact | Red → başka renk |
| PLP `/collections/all` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=sock` | [x] obs | [ ] capture |
| Cart page empty + filled | [x] obs | [ ] capture / interact |
| About `/pages/about-layout-1` | [x] obs | [ ] capture |
| Contact `/pages/contact` (submit yok) | [x] obs | [ ] capture |
| FAQ `/pages/faq` | [x] obs | [ ] capture · interact |
| News + blooming gardens article | [x] obs | [ ] capture |
| 404 `/pages/404` | [x] obs | [ ] capture |
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
| 1–16 | home static + overlays | home | [ ] | [x] | reuse | [ ] |
| 17–25 | PDP main/tabs/video/cols/multirow/icons/banner/faq/ticker | product-detail | [ ] | [x] | reuse | [ ] |
| 26–28 | banner + slider + PLP grid | collection | [ ] | [x] | reuse | [ ] |
| 29 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 30 | search-results | search | [ ] | [x] | reuse | [ ] |
| 31 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 32–38 | about parallax/IWT/cols/icons/rich/team/logos | about-brand | [ ] | [x] | reuse | [ ] |
| 39–41 | contact parallax/office/form | contact | [ ] | [x] | reuse | [ ] |
| 42–43 | FAQ parallax + accordion | faq-support | [ ] | [x] | reuse | [ ] |
| 44–46 | news + article + 404 | blog-* / not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (plan)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | open 1440 | Shop `#Details-HeaderMenu-2` |
| global-predictive-search | input `sock` | katalogSorgu |
| global-menu-drawer | open 375/768 | hamburger |
| global-cart-drawer | initial / filled / changed | Nintendo ATC |
| cart-page-main | initial / filled / changed | boş + dolu |
| product-info-main | changed Color | Red → başka |
| faq-collapsible-tabs | changed | Q2 |
| product-showcase-grid-plp | changed Color | filtre |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/socks-leftovers.md`](../candidates/socks-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact: mega · search · cart empty/filled/qty · PDP Color · FAQ · PLP filter · hamburger
- [ ] `node scripts/validate-schemas.mjs`
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
