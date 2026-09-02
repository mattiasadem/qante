# Todo — Luxora (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://jewelry-online-shop2.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/luxurious-jewelry-store-shopify-theme-os-2-0  
*Preset klasör:* `default` · slug `luxora`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Jewelry-online-shop2 V-1.5.0**  
`schema_name` = **Jewelry_online_shop2** · `schema_version` = **1.5.0** · `role` = **main** · theme id `176034677037`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
Walk host + `Shopify.shop` = `jewelry-online-shop2.myshopify.com` · locale/currency US / USD

**Password wall:** GET `/` → 302 `/password`. Title `Jewelry Online Shop2 (password: 1)`. Official Speedo Live Demo form POSTs `storefront_password` value `1` to this same host. **Başka host uydurulmadı.**

**Durum:** Mod A walk + observation roster yazıldı · 3vp capture + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/luxora/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **46** |
| Parallel | yalnız `observations/luxora/`, `evidence/luxora/`, `todo/luxora.md`, `candidates/luxora-leftovers.md`, unlock helper |

**Kapsam satırı:**  
`Luxora · default · Jewelry-online-shop2 V-1.5.0 / schema_name Jewelry_online_shop2 1.5.0 · theme_store_id null · shop jewelry-online-shop2.myshopify.com · home→PDP Ponte Vecchio→PLP bracelets→/collections→search ring→cart empty→our-story→about-us→contact-us→faqs→news+gemstones post→404 · 46 obs · 0 yeni şema · leftover: candidates/luxora-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Shop mega hover 1440 | [ ] interact | [ ] |
| Predictive search `ring` | [ ] interact | [ ] |
| Mobile menu 375 + 768 | [ ] interact | [ ] |
| Cart drawer empty + filled + qty | [ ] interact | [ ] |
| PDP Ponte Vecchio qty | [ ] interact | [ ] |
| PLP `/collections/bracelets` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=ring` | [x] obs | [ ] capture |
| Cart page empty + filled | [x] obs empty | [ ] capture / interact |
| Our Story `/pages/our-story` | [x] obs | [ ] capture |
| About `/pages/about-us` | [x] obs | [ ] capture |
| Contact `/pages/contact-us` (submit yok) | [x] obs | [ ] capture |
| FAQ `/pages/faqs` | [x] obs | [ ] capture |
| News + gemstones post | [x] obs | [ ] capture |
| 404 `/pages/about` | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar utility-bar | `promo-announcement-bar` | reuse |
| 2 | header mega | `navigation-header-mega` | reuse · interact |
| 3 | slideshow MADE FOR YOUR SHADE | `hero-slideshow` | reuse |
| 4 | rich-text Welcome to Pandora | `editorial-rich-text` | reuse |
| 5 | custom_icon Shop By Shape | `collection-nav-icon-buttons` | reuse |
| 6 | collection-list Trending 4-col | `collection-nav-cards` | reuse |
| 7 | collection-list Rings/Earrings | `collection-nav-image-cards` | reuse |
| 8 | home-page-tab New Arrivals | `product-showcase-tabs` | reuse · interact |
| 9 | collection-list Bracelets/Pendants | `collection-nav-image-cards.2` | reuse |
| 10 | rich-text Talk about your brand | `editorial-rich-text.2` | reuse |
| 11 | logo_bar | `social-proof-brand-logos` | reuse |
| 12 | collapsible FAQ's | `faq-collapsible-tabs` | reuse · interact |
| 13 | image-with-text Eco-Friendly | `editorial-image-with-text` | reuse |
| 14 | offer-banner PAN40 | `promo-scrolling-marquee` | reuse |
| 15 | custom_instagram | `media-shop-the-feed` | reuse |
| 16 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 17 | newsletter-popup | — | leftover PII h=0 |
| 18 | predictive-search | `global-predictive-search` | reuse · interact |
| 19 | menu-drawer | `global-menu-drawer` | reuse · 375/768 |
| 20 | CartDrawer | `global-cart-drawer` | reuse · interact |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–19 | home static + overlays | home | [ ] | [x] | reuse | [ ] |
| 20–23 | PDP main + IWT + banner + related | product-detail | [ ] | [x] | reuse | [ ] |
| 24–25 | hero + PLP grid | collection | [ ] | [x] | reuse | [ ] |
| 26 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 27–28 | cart empty + featured | cart | [ ] | [x] | reuse | [ ] |
| 29 | search-results | search | [ ] | [x] | reuse | [ ] |
| 30–37 | our-story | about-brand | [ ] | [x] | reuse | [ ] |
| 38–40 | about-us banner/IWT/mission | about-us | [ ] | [x] | reuse | [ ] |
| 41 | lead-capture-form | contact | [ ] | [x] | reuse | [ ] |
| 42–43 | FAQ page | faq-support | [ ] | [x] | reuse | [ ] |
| 44–45 | news + post | blog-* | [ ] | [x] | reuse | [ ] |
| 46 | 404 | not-found | [ ] | [x] | reuse | [ ] |

---

## Interact (plan)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | open | 1440 SHOP mega |
| global-predictive-search | input | `ring` |
| global-menu-drawer | open | 375 + 768 |
| global-cart-drawer | filled + changed | ATC if stock |
| cart-page-main | filled + changed | aynı |
| product-info-main | changed | qty (swatch yok bu SKU) |
| product-showcase-tabs | changed | Best seller |
| faq-collapsible-tabs | changed | accordion |

---

## Aday / leftover

[`candidates/luxora-leftovers.md`](../candidates/luxora-leftovers.md)
