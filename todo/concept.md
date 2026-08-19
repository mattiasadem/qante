# Todo — Concept (RoarTheme, paid) · Beauty Blossom / default

*Kaynak (yalnız resmi walk):* https://concept-theme.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/concept  
*Preset klasör:* `default` · slug `concept`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Concept-1-1-2-sections-ready (Beauty Blossom)**  
`schema_name` = **Concept** · `schema_version` = **1.1.2** · `role` = **main** · theme id `137476276463`  
`theme_store_id` = **null** (canlıda yok; Theme Store id uydurulmadı)  
shop `concept-theme.myshopify.com`

**Diğer preset'ler (THEME DEMO mega, yürünmedi):** Luxe Beauty `137577660655` · Accessories Avenue `137622028527` · Furniture Fusion `137322856687` · Cosmetic Harmony `138330046703` · Furniture Finesse `137894789359` · Dreamy Decor `139085644015` · Vogue Vault `141404373231`

**Durum:** Mod A walk + resmi 3vp + interact + **CRO leftover interact** + validate **bitti** (0 error)  
**PR:** draft https://github.com/mattiasadem/qante/pull/168 — **main'e merge yok** · CRO interact PR ayrı branch

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/concept/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **43** |
| PNG | **164** (+15 CRO interact) |
| Parallel | yalnız `observations/concept/`, `evidence/concept/`, `todo/concept.md`, `candidates/concept-leftovers.md` |

**Kapsam satırı:**  
`Concept · default (Beauty Blossom) · Concept-1-1-2-sections-ready · schema_name Concept 1.1.2 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 43 obs · 164 PNG · 0 yeni şema · CRO interact: faq + testimonial×2 · leftover: candidates/concept-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + capture | [x] |
| Mega SHOPS 1440 | interact | [x] |
| Predictive search `cream` | interact 3vp | [x] |
| Mobile menu 375 + 768 | interact | [x] |
| Cart drawer empty + filled + qty | interact 3vp | [x] |
| PDP Vita-Botanical White→Blue | interact 3vp | [x] |
| PLP `/collections/skincare` | roster + capture | [x] |
| Collections `/collections` | roster + capture | [x] |
| Search `/search?q=cream` | roster + capture | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| About `/pages/about-us` | roster + capture | [x] |
| Contact form (submit yok) | roster + capture | [x] |
| FAQ `/pages/theme-faqs` | roster + capture | [x] |
| Blog list + Beauty Lab post | roster + capture | [x] |
| 404 | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Concept / class | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | slideshow | `hero-slideshow` | reuse |
| 4 | f-collection What's New | `product-showcase-grid-featured` | reuse |
| 5 | spotl-products | `media-lookbook-banner` | reuse · 1/2/3 hotspot (kare) |
| 6 | i-banner | `editorial-image-with-text-overlay` | reuse |
| 7 | marquee | `promo-scrolling-marquee` | reuse |
| 8 | f-collection Enchanté | `product-showcase-grid-featured.2` | reuse |
| 9 | db-banner | `editorial-image-with-text-overlay.2` | reuse |
| 10 | f-collection Essentials | `product-showcase-grid-featured.3` | reuse |
| 11 | f-product-tab | `product-showcase-tabs` | reuse |
| 12 | quotes | `testimonial-quote-carousel` | reuse |
| 13 | f-blog | `blog-list-main` | reuse |
| 14 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 15 | newsletter-popup | — | leftover 0px / PII |
| 16 | recently-purchased | — | leftover 0×0 |
| 17 | before-you-leave | — | leftover 0×0 |
| 18 | predictive-search | `global-predictive-search` | reuse · interact |
| 19 | menu-drawer | `global-menu-drawer` | reuse · 375/768 |
| 20 | CartDrawer | `global-cart-drawer` | reuse · interact |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–17 | home static + overlays | home | [x] | [x] | reuse | [x] |
| 18 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 19–22 | trust / collage / tabs / related | product-detail | [x] | [x] | reuse | [x] |
| 23–24 | grid-plp + collage | collection | [x] | [x] | reuse | [x] |
| 25 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 26 | search-results | search | [x] | [x] | reuse | [x] |
| 27 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 28–36 | about ×9 | about-brand | [x] | [x] | reuse | [x] |
| 37–38 | contact | contact | [x] | [x] | reuse | [x] |
| 39–40 | faq | faq-support | [x] | [x] | reuse | [x] |
| 41–42 | blog list + post | blog-* | [x] | [x] | reuse | [x] |
| 43 | 404 | not-found | [x] | [x] | reuse | [x] |

---

## Interact (kareye bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 SHOPS mega — Collection List + feature kolonları + fırça görseli |
| global-predictive-search | input | [x] 3vp `cream` — Brazilian Blowout $103.90 / Adaptogen $124 / Golden Hour $126.50 |
| global-menu-drawer | open | [x] 375 + 768 |
| global-cart-drawer | filled + changed | [x] qty 1→2 · satır $70→$63 · subtotal $126 |
| cart-page-main | filled + changed | [x] $63 → $126 |
| product-info-main | changed | [x] White $70 (-29%) → Blue $72 (-27%) |
| faq-collapsible-tabs | changed | [x] refund sorusu açık — 7-14 business days |
| testimonial-quote-carousel (home) | changed | [x] ELLE → FENTY (pagination 1440 next / 375·768 dash) |
| testimonial-quote-carousel (about) | initial only | [x] tek slide; changed yok |
| lead-capture-form | — | ⛔ PII — fill/submit yok |

Stop: email / account / checkout / newsletter submit / contact Send / PII

---

## Aday / leftover

[`candidates/concept-leftovers.md`](../candidates/concept-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / menu 375+768 / cart empty+filled+qty / PDP Color
- [x] CRO leftover interact: faq-collapsible-tabs · home testimonial-quote-carousel · about testimonial initial
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error · 0 warn
- [x] Newsletter / account / checkout — **yapılmayacak** (PII)
