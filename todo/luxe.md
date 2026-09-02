# Todo — LUXE / Josiane (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://women-beauty-3.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/josiane-best-shopify-beauty-theme-0s-2-0  
*Preset:* `default` · *Slug:* `luxe`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **women-beauty-3-v-1-5-0**  
`schema_name` = **women_beauty_3** · `schema_version` = **1.5.0** · `role` = **main** · theme id `170888986904`  
`theme_store_id` = **null**  
shop `women-beauty-3.myshopify.com` · locale `en` · currency `USD`

**Password:** Speedo ürün sayfası “Please enter password `1` to view demo.” Aynı host `/password` — public storefront-unlock. Başka host yok.

**Bu Luxe Luxuries değil.** `luxe-luxuries` / `watchez-online-store` ayrı envanter. Yalnız `women-beauty-3.myshopify.com`.

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/luxe/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **42** |
| Parallel | yalnız `observations/luxe/`, `evidence/luxe/`, `todo/luxe.md`, `candidates/luxe-leftovers.md` + Speedo password helper |

**Kapsam satırı:**  
`LUXE / Josiane · default · women-beauty-3-v-1-5-0 / schema_name women_beauty_3 1.5.0 · theme_store_id null · shop women-beauty-3.myshopify.com · password 1 · home→PDP Natural oils Size 50→100ml→PLP best-seller→/collections→search cream→cart empty/filled→drawer→our-story→faqs accordion→contact (submit yok)→news+skincare post→404 · 42 obs · 0 yeni şema · leftover: candidates/luxe-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer + overlays) | [x] obs | [ ] capture |
| Shop disclosure 1440 | [x] obs | [ ] interact |
| Predictive search | [x] obs | [ ] interact |
| Mobile menu 375+768 | [x] obs | [ ] interact |
| Cart drawer empty + filled | [x] obs | [ ] interact |
| PDP Natural oils Size | [x] obs | [ ] interact |
| PLP `/collections/best-seller` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=cream` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled | [x] obs | [ ] interact |
| About `/pages/our-story` | [x] obs | [ ] capture |
| FAQ `/pages/faqs` | [x] obs | [ ] interact |
| Contact form (submit yok) | [x] obs | [ ] capture |
| News + Seasonal skincare post | [x] obs | [ ] capture |
| 404 | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Section id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | b0b94611 announcement swiper | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · Shop details |
| 3 | 238ce8cd FREE shipping | `promo-announcement-bar.2` | reuse |
| 4 | 8c77ee53 slideshow | `hero-slideshow` | reuse |
| 5 | bd1f6a88 Welcome | `editorial-rich-text` | reuse |
| 6 | 1740af2e You Love It | `collection-nav-image-cards` | reuse |
| 7 | cc09d110 quote | `editorial-rich-text.2` | reuse |
| 8 | 4c3d8f88 Maria | `editorial-image-with-text` | reuse |
| 9 | featured_collection | `product-showcase-grid-featured` | reuse |
| 10 | a5bd3b43 Latest Blog | `blog-list-main` | reuse |
| 11 | d835426e testimonials | `testimonial-quote-carousel` | reuse |
| 12 | fefc41c9 newsletter | `lead-capture-newsletter-band` | reuse · PII yok |
| 13 | fe3efae2 FAQ | `faq-collapsible-tabs` | reuse |
| 14 | 627eb6c8 USP | `features-multicolumn` | reuse |
| 15 | 09bbe40a @josianeboutique | `media-mosaic-grid` | reuse |
| 16 | footer | `footer-columns-newsletter` | reuse |
| 17 | CartDrawer | `global-cart-drawer` | reuse |
| 18 | menu-drawer | `global-menu-drawer` | reuse · 375/768 |
| 19 | details-modal.header__search | `global-predictive-search` | reuse |
| 20 | quick-add-modal | `global-quick-view` | reuse |

---

## Interact

| Bileşen | State | Durum |
|---|---|---|
| navigation-header-mega | open Shop 1440 | [ ] |
| global-menu-drawer | open 375/768 + Shop drill | [ ] |
| global-predictive-search | input katalog | [ ] |
| global-cart-drawer | filled + qty | [ ] |
| cart-page-main | filled + qty | [ ] |
| product-info-main | changed Size 50→100 | [ ] |
| product-showcase-grid-plp | hover | [ ] |
| faq-collapsible-tabs | changed accordion | [ ] |
| global-quick-view | open | [ ] |

---

## Aday / leftover

[`candidates/luxe-leftovers.md`](../candidates/luxe-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / menu / cart / PDP / FAQ / QV
- [ ] PNG bak → stateFindings
- [ ] `node scripts/validate-schemas.mjs`
