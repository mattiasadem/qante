# Todo — Hairva (Speedo Themes) · default / Pandora Hair Care 3

*Kaynak (yalnız resmi walk):* https://pandora-hair-care-3.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/minimalist-shopify-hair-salon-theme  
*Preset:* `default` · *Slug:* `hairva`  
*Vendor:* Speedo Themes (third-party Shopify 2.0 — Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **pandora-hair-care-layout-3-v-1-5-0**  
`schema_name` = **pandora_hair_care_3** · `schema_version` = **15.2.0** · `role` = **main** · theme id `177754079531`  
`theme_store_id` = **null**  
shop `pandora-hair-care-3.myshopify.com` · locale `en` · currency `USD`

**Password:** vendor product page “Please enter password 1 to view demo.” Aynı host `/password` — public storefront unlock. Başka host yok.

**Durum:** Mod A walk + resmi 3vp + interact (devam)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/hairva/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **48** |
| Parallel | yalnız `observations/hairva/`, `evidence/hairva/`, `todo/hairva.md`, `candidates/hairva-leftovers.md`, capture unlock helper |

**Kapsam satırı:**  
`Hairva · default · pandora-hair-care-layout-3-v-1-5-0 / schema_name pandora_hair_care_3 15.2.0 · theme_store_id null · shop pandora-hair-care-3.myshopify.com · home→PDP Victoria wig→PLP wigs→/collections→search wig→cart empty/drawer→our-story→faq→contact→news+post→404 · 48 obs · 0 yeni şema · leftover: candidates/hairva-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Shop All dropdown 1440 | [x] obs | [ ] interact |
| Predictive search `wig` | [x] obs | [ ] interact |
| Mobile menu 375 + 768 | [x] obs | [ ] interact |
| Cart drawer empty + filled | [x] obs | [ ] interact |
| PDP Victoria Length 12→18 | [x] obs | [ ] interact |
| PLP `/collections/wigs` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=wig` | [x] obs | [ ] capture |
| Cart page empty + filled | [x] obs | [ ] interact |
| About `/pages/our-story` | [x] obs | [ ] capture |
| FAQ `/pages/faq` | [x] obs | [ ] interact accordion |
| Contact form (submit yok) | [x] obs | [ ] capture |
| News + High-end Haircare post | [x] obs | [ ] capture |
| 404 | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Hairva / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · dropdown (mega görsel yok) |
| 3 | header search | `global-predictive-search` | reuse · prepareClick |
| 4 | header-drawer | `global-menu-drawer` | reuse · 375/768 |
| 5 | CartDrawer | `global-cart-drawer` | reuse · #cart-icon-bubble |
| 6 | slide-show | `hero-slideshow` | reuse · 2 slayt görsel |
| 7 | Welcome rich-text | `editorial-rich-text` | reuse |
| 8 | collection-list 3 kart | `collection-nav-image-cards` | reuse |
| 9 | featured_collection wigs | `product-showcase-grid-featured` | reuse |
| 10 | featured_collection best | `product-showcase-grid-featured.2` | reuse |
| 11 | newsletter | `lead-capture-newsletter-band` | reuse · PII yok |
| 12 | BLOG POSTS | `blog-list-main` | reuse |
| 13 | Hi I am Maria | `editorial-image-with-text` | reuse |
| 14 | Our Customers | `testimonial-quote-carousel` | reuse |
| 15 | video | `media-video-hero` | reuse |
| 16 | multicolumn USP | `features-multicolumn` | reuse |
| 17 | INSTAGRAM FEED | `media-mosaic-grid` | reuse |
| 18 | footer | `footer-columns-newsletter` | reuse |

---

## Aday / leftover

[`candidates/hairva-leftovers.md`](../candidates/hairva-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / menu / cart / PDP / FAQ
- [ ] PNG bak → stateFindings
- [ ] `node scripts/validate-schemas.mjs`
