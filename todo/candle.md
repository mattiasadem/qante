# Todo — Candle (Speedo Themes · third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://speedo-candles-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/candle-luxurious-candle-shopify-theme-o-s-2-0  
*Preset:* `default` · slug `candle`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Speedo-candles-store-v-1-5-0**  
`schema_name` = **Speedo candles Store** · `schema_version` = **1.5.0** · `role` = **main** · theme id `171992645913`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`Shopify.shop` = `speedo-candles-store.myshopify.com` · locale `en` · country `US` · currency `USD`

**Unlock:** Vendor ürün sayfası “Please enter password 1 to view demo.” Public storefront password `1` girildi → `/` açıldı. Başka host yok.

**Durum:** Mod A 41 obs + 122 static 3vp yazıldı · interact adımları yazıldı · capture sırada  
**PR:** https://github.com/mattiasadem/qante/pull/322 · draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/candle/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **41** (yazıldı) |
| Parallel | `observations/candle/`, `evidence/candle/`, `todo/candle.md`, `candidates/candle-leftovers.md`, `scripts/unlock-storefront.mjs` |

**Kapsam satırı:**  
`Candle · default · Speedo-candles-store-v-1-5-0 / schema_name Speedo candles Store 1.5.0 · theme_store_id null · password 1 (vendor-published) · home→PDP Glass Jars→PLP shop-all→collections→search candle→cart→our-story/contact/faqs→news+post · 41 obs · 0 yeni şema · leftover: candidates/candle-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] static |
| Header Candles dropdown 1440 | [x] steps | [ ] interact capture |
| Predictive search `candles` | [x] steps | [ ] interact capture |
| Mobile menu 375 + 768 | [x] steps | [ ] interact capture |
| Cart drawer empty + filled + qty | [x] steps | [ ] interact capture |
| PDP Glass Jars (varyant yok) | [x] obs + steps | [x] static |
| PLP `/collections/shop-all` | [x] obs + filter steps | [x] static |
| Collections `/collections` | [x] obs | [x] static |
| Search `/search?q=candle` | [x] obs | [x] static |
| Cart page empty + filled + qty | [x] obs + steps | [x] static empty |
| Our Story `/pages/our-story` | [x] obs | [x] static |
| Contact form (submit yok) | [x] obs | [x] static |
| FAQ `/pages/faqs` | [x] obs | [x] static |
| News + Candlefind post | [x] obs | [x] static |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Candle / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `__b0b94611…` ticker | `promo-announcement-bar` | reuse |
| 2 | `__header` | `navigation-header-mega` | reuse · mega yok |
| 3 | `__b8129664…` free ship + social | `promo-announcement-bar.2` | reuse |
| 4 | `__8c77ee53…` HI FRIENDS | `hero-slideshow` | reuse |
| 5 | `__bd1f6a88…` Welcome | `editorial-rich-text` | reuse |
| 6 | `__featured_collection` | `product-showcase-grid-featured` | reuse · quick-add |
| 7 | `__cc09d110…` earrings quote | `editorial-rich-text.2` | reuse |
| 8 | `__1740af2e…` Product Collection | `collection-nav-grid` | reuse |
| 9 | `__5ba28c9e…` NEW/HANDMADE | `promo-grid-banner` | reuse |
| 10 | `__4c3d8f88…` Maria | `editorial-image-with-text` | reuse |
| 11 | `__a5bd3b43…` Latest Blog | `blog-list-main` | reuse |
| 12 | `__d835426e…` testimonials | `testimonial-quote-carousel` | reuse |
| 13 | `__fefc41c9…` newsletter | `lead-capture-newsletter-band` | reuse · PII yok |
| 14 | `__fe3efae2…` FAQ | `faq-collapsible-tabs` | reuse |
| 15 | `__627eb6c8…` 3 kolon | `features-multicolumn` | reuse |
| 16 | `__09bbe40a…` @clothingfashion | `media-shop-the-feed` | reuse |
| 17 | `__footer` | `footer-columns-newsletter` | reuse |
| 18 | `#CartDrawer` | `global-cart-drawer` | reuse · interact |
| 19 | `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |
| 20 | `predictive-search` | `global-predictive-search` | reuse · interact |
| — | `#newsletter-popup` h=0 | — | leftover PII |

---

## Aday / leftover

[`candidates/candle-leftovers.md`](../candidates/candle-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (122 PNG)
- [x] Interact steps (header / search / menu / cart / featured / FAQ / PDP / PLP)
- [ ] Interact capture + stateFindings (PNG bak)
- [x] PDP variant — **yok** (products.json tek varyant)
- [ ] `node scripts/validate-schemas.mjs`
