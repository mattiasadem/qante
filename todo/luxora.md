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

**Durum:** Mod A + 3vp + interact kapandı · 46 obs · 182 PNG · 0 yeni şema  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/luxora/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **46** |
| PNG | **182** |
| Parallel | yalnız `observations/luxora/`, `evidence/luxora/`, `todo/luxora.md`, `candidates/luxora-leftovers.md`, unlock helper |

**Kapsam satırı:**  
`Luxora · default · Jewelry-online-shop2 V-1.5.0 / schema_name Jewelry_online_shop2 1.5.0 · theme_store_id null · shop jewelry-online-shop2.myshopify.com · home→PDP Ponte Vecchio→PLP bracelets→/collections→search ring→cart→our-story→about-us→contact-us→faqs→news+gemstones post→404 · 46 obs · 182 PNG · 0 yeni şema · leftover: candidates/luxora-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Shop mega hover 1440 | [x] interact | [x] open (forceOpen; hover durmadı) |
| Predictive search `ring` | [x] interact | [x] missingStates input (modal hidden) |
| Mobile menu 375 + 768 | [x] interact | [x] missingStates open (kare homepage) |
| Cart drawer empty + filled + qty | [x] interact | [x] filled+changed; initial empty missing |
| PDP Ponte Vecchio qty | [x] interact | [x] qty 1→2 |
| PLP `/collections/bracelets` | [x] obs | [x] capture; Color Apply missingStates |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=ring` | [x] obs | [x] capture |
| Cart page empty + filled | [x] obs + interact | [x] empty / qty1 $100 / qty2 $200 |
| Our Story `/pages/our-story` | [x] obs | [x] capture |
| About `/pages/about-us` | [x] obs | [x] capture |
| Contact `/pages/contact-us` (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faqs` | [x] obs | [x] capture |
| News + gemstones post | [x] obs | [x] capture |
| 404 `/pages/about` | [x] obs | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar utility-bar | `promo-announcement-bar` | reuse |
| 2 | header mega | `navigation-header-mega` | reuse · open 1440 alındı |
| 3 | slideshow MADE FOR YOUR SHADE | `hero-slideshow` | reuse |
| 4 | rich-text Welcome to Pandora | `editorial-rich-text` | reuse |
| 5 | custom_icon Shop By Shape | `collection-nav-icon-buttons` | reuse |
| 6 | collection-list Trending 4-col | `collection-nav-cards` | reuse |
| 7 | collection-list Rings/Earrings | `collection-nav-image-cards` | reuse |
| 8 | home-page-tab New Arrivals | `product-showcase-tabs` | reuse · Best seller missingStates |
| 9 | collection-list Bracelets/Pendants | `collection-nav-image-cards.2` | reuse |
| 10 | rich-text Talk about your brand | `editorial-rich-text.2` | reuse |
| 11 | logo_bar | `social-proof-brand-logos` | reuse |
| 12 | collapsible FAQ's | `faq-collapsible-tabs` | reuse · accordion missingStates |
| 13 | image-with-text Eco-Friendly | `editorial-image-with-text` | reuse |
| 14 | offer-banner PAN40 | `promo-scrolling-marquee` | reuse |
| 15 | custom_instagram | `media-shop-the-feed` | reuse |
| 16 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 17 | newsletter-popup | — | leftover PII h=0 |
| 18 | predictive-search | `global-predictive-search` | reuse · input missingStates |
| 19 | menu-drawer | `global-menu-drawer` | reuse · open missingStates |
| 20 | CartDrawer | `global-cart-drawer` | reuse · filled+changed |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–19 | home static + overlays | home | [x] | [x] | reuse | [x] |
| 20–23 | PDP main + IWT + banner + related | product-detail | [x] | [x] | reuse | [x] |
| 24–25 | hero + PLP grid | collection | [x] | [x] | reuse | [x] |
| 26 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 27–28 | cart empty + featured | cart | [x] | [x] | reuse | [x] |
| 29 | search-results | search | [x] | [x] | reuse | [x] |
| 30–37 | our-story | about-brand | [x] | [x] | reuse | [x] |
| 38–40 | about-us banner/IWT/mission | about-us | [x] | [x] | reuse | [x] |
| 41 | lead-capture-form | contact | [x] | [x] | reuse | [x] |
| 42–43 | FAQ page | faq-support | [x] | [x] | reuse | [x] |
| 44–45 | news + post | blog-* | [x] | [x] | reuse | [x] |
| 46 | 404 | not-found | [x] | [x] | reuse | [x] |

---

## Interact (sonuç)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 | alındı — 5 mega kart (forceOpen; hover durmadı) |
| global-predictive-search | input ring | missingStates — `#Search-In-Modal-1` hidden |
| global-menu-drawer | open 375/768 | missingStates — kare homepage |
| global-cart-drawer | filled + changed | alındı — Ponte $100 → qty2 $200; eşik $500/$800 |
| global-cart-drawer | initial empty | missingStates — cart ikon homepage karesi |
| cart-page-main | initial + filled + changed | alındı — empty / $100 / $200 |
| product-info-main | changed qty | alındı — qty 1→2; BUY IT NOW yok |
| product-showcase-tabs | changed Best seller | missingStates — New Arrival kaldı |
| faq-collapsible-tabs | changed | missingStates — dört soru kapalı |
| product-showcase-grid-plp | changed Color | missingStates — facet görünür değil |

---

## Aday / leftover

[`candidates/luxora-leftovers.md`](../candidates/luxora-leftovers.md)
