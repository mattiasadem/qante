# Todo — Electronics (Speedo Themes, Theme for Electronics)

*Kaynak (yalnız resmi walk):* https://speedo-electro-dropship.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/shopify-drop-shipping-electronics-theme  
*Preset klasör:* `default` · slug `electronics`  
*Vendor:* Speedo Themes (üçüncü taraf Shopify 2.0; Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **speedo-electro-dropship-v-1-5-0**  
`schema_name` = **speedo-electro-dropship** · `schema_version` = **1.5.0** · `role` = **main** · theme id `173189267776`  
`theme_store_id` = **null** (canlıda yok; Theme Store id uydurulmadı)  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
Walk host = `Shopify.shop` = **speedo-electro-dropship.myshopify.com**  
`/` **302** → `/password` · title `speedo-electro-dropship (password: 1)`  
Public storefront-unlock `1` — başka host yok.

**Durum:** ✅ Mod A + interact — 0 yeni şema  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/electronics/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **40** |
| Parallel | yalnız `observations/electronics/`, `evidence/electronics/`, `todo/electronics.md`, `candidates/electronics-leftovers.md` + unlock host satırı |

**Kapsam satırı:**  
`Electronics · default · speedo-electro-dropship-v-1-5-0 / schema_name speedo-electro-dropship 1.5.0 · theme_store_id null · shop speedo-electro-dropship.myshopify.com · password 1 · home→PDP jbl-xtreme-5→PLP frontpage→/collections→search jbl→cart empty/filled/qty→our-story→contact→faq-s→news+article→404 · 40 obs · 0 yeni şema · leftover: candidates/electronics-leftovers.md · interact: EXPLORE/hamburger/PDP Blue/FAQ/cart qty; search+notification missingStates`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announce→footer) | [x] obs | [x] capture |
| EXPLORE dropdown 1440 | [x] interact | OUR STORY / FAQ’S / CONTACT |
| Predictive search | missingStates | ikon 0×0 |
| Mobile hamburger 375+768 | [x] interact | Shop/Blogs/Explore |
| Cart notification filled | missingStates | ATC 0×0 |
| Cart page filled + qty | [x] interact | $50 → $100 · add.js |
| PDP COLOR Black→Blue | [x] interact | blue_jbl |
| PLP `/collections/frontpage` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=jbl` | [x] obs | [x] capture |
| Cart `/cart` empty | [x] obs | [x] capture |
| Our Story `/pages/our-story` | [x] obs | [x] capture |
| Contact form (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faq-s` | [x] obs | [x] capture |
| News + article | [x] obs | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Electronics / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | 9fc4c78d timer-section h=0 | — | leftover |
| 2 | announcement-bar | `promo-announcement-bar` | reuse |
| 3 | header | `navigation-header-mega` | reuse · mega yok, EXPLORE dropdown |
| 4 | 1c2699d0 PLAY IT ONE MORE TIME | `hero-slideshow` | reuse |
| 5 | ae13ffe7 USE CODE:0FF3O | `promo-scrolling-marquee` | reuse |
| 6 | f05e110d HELLO JBL | `editorial-image-with-text` | reuse |
| 7 | 8829acf2 A MUCH BETTER WAY | `editorial-rich-text` | reuse |
| 8 | 02d9f824 featured-product | `product-showcase-featured` | reuse |
| 9 | 7afa7c53 4 ikon | `trust-icon-row` | reuse |
| 10 | 42a38f7b TOP QUALITY | `editorial-image-with-text.2` | reuse |
| 11 | c0964771 QUALITY MATERIALS | `editorial-image-with-text.3` | reuse |
| 12 | 83d22694 video | `media-video-hero` | reuse |
| 13 | bc7b3f22 testimonials | `testimonial-quote-carousel` | reuse |
| 14 | b7dee698 3 kolon | `features-multicolumn` | reuse |
| 15 | 5397d42c GET UNLIMITED FUN | `editorial-rich-text.2` | reuse |
| 16 | d1990b9b video | `media-video-hero.2` | reuse |
| 17 | f0ba1f6c VIDEO | `media-video-hero.3` | reuse |
| 18 | 05f55687 VIDEO | `media-video-hero.4` | reuse |
| 19 | footer | `footer-columns-newsletter` | reuse |
| 20 | predictive-search | `global-predictive-search` | reuse |
| 21 | #menu-drawer | `global-menu-drawer` | reuse |
| 22 | #cart-notification | `global-cart-drawer` | reuse · drawer yok |

---

## Aday / şemaya sığmayan

- `candidates/electronics-leftovers.md`

---

## Evidence backlog

- [x] resmi 3vp `capture-observation.mjs` (115 PNG)
- [x] interact: EXPLORE 1440 / hamburger 375+768 / PDP Blue / FAQ / cart filled+qty
- [x] search overlay + cart-notification filled → missingStates
