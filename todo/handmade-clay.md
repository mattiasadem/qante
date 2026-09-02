# Todo — Handmade Clay (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://luxury-handmade-ultimate.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/shopify-jewelry-template-for-handmade  
*Preset:* `default` · slug `handmade-clay`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Luxury-handmade-ultimate V-1-5-0**  
`schema_name` = **luxury_handmade_ultimate** · `schema_version` = **1.5.0** · `role` = **main** · theme id `173445611830`  
`theme_store_id` = **null**  
`Shopify.shop` = `luxury-handmade-ultimate.myshopify.com`

**Unlock:** Vendor ürün sayfası “Please enter password 1 to view demo.” Public storefront password `1` girildi → `/` açıldı.

**Durum:** Mod A + interact **bitti**  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/handmade-clay/default/` |
| Capture | `scripts/run-handmade-clay-captures.mjs` + `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** (10 interact) |
| Parallel | `observations/handmade-clay/`, `evidence/handmade-clay/`, `todo/handmade-clay.md`, `candidates/handmade-clay-leftovers.md` |

**Kapsam satırı:**  
`Handmade Clay · default · Luxury-handmade-ultimate V-1-5-0 / schema_name luxury_handmade_ultimate 1.5.0 · theme_store_id null · password 1 (vendor-published) · home→PLP all→PDP floral-leaf-clay-drop-earrings→cart→search clay→collections→our-story/contact/faq→news+post · 39 obs · 0 yeni şema · leftover: candidates/handmade-clay-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] static |
| Header Shop dropdown 1440 | [x] interact | [x] hover open |
| Predictive search `clay` | [x] interact | [ ] input missingStates (probe OK) |
| Mobile menu 375 + 768 | [x] interact | [x] open+changed |
| Cart drawer empty + filled + qty | [x] interact | [x] 3vp |
| Featured collection hover | [x] interact | [x] hover |
| Home FAQ accordion | [x] interact | [x] changed |
| PDP Floral Leaf (accordion) | [x] obs + interact | [x] |
| PLP `/collections/all` | [x] obs + Availability filter | [x] static; 1440 filter |
| Collections `/collections` | [x] obs | [x] static |
| Search `/search?q=clay` | [x] obs | [x] static |
| Cart page empty + filled + qty | [x] interact | [x] 3vp |
| Our Story `/pages/our-story` | [x] obs | [x] static |
| Contact form (submit yok) | [x] obs | [x] static |
| FAQ `/pages/faq` | [x] obs + accordion | [x] static |
| News + blog post | [x] obs | [x] static |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Block | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header-announcement | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | f67164a2 free ship | `promo-announcement-bar.2` | reuse |
| 4 | slideshow HI FRIENDS | `hero-slideshow` | reuse |
| 5 | Welcome rich text | `editorial-rich-text` | reuse |
| 6 | featured_collection | `product-showcase-grid-featured` | reuse · hover |
| 7 | polymer clay quote | `editorial-rich-text.2` | reuse |
| 8 | Handmade Collection grid | `collection-nav-grid` | reuse |
| 9 | Maria image-with-text | `editorial-image-with-text` | reuse |
| 10 | Latest Blog | `blog-list-main` | reuse |
| 11 | testimonials | `testimonial-quote-carousel` | reuse |
| 12 | newsletter | `lead-capture-newsletter-band` | reuse |
| 13 | FAQ home | `faq-collapsible-tabs` | reuse · accordion |
| 14 | 3 kolon trust | `features-multicolumn` | reuse |
| 15 | @LuxuryJewelry | `media-shop-the-feed` | reuse |
| 16 | footer | `footer-columns-newsletter` | reuse |
| 17 | CartDrawer | `global-cart-drawer` | reuse · interact |
| 18 | menu-drawer | `global-menu-drawer` | reuse · interact |
| 19 | predictive-search | `global-predictive-search` | reuse · interact |
| — | newsletter-popup h=0 | — | leftover PII |

---

## Aday / leftover

[`candidates/handmade-clay-leftovers.md`](../candidates/handmade-clay-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static + interact (142 PNG)
- [x] `node scripts/validate-schemas.mjs` — 0 error
