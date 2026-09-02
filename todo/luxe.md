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
Logo: **LUXE BY BOUTIQUE**

**Password:** Speedo ürün sayfası “Please enter password `1` to view demo.” Aynı host `/password` — public storefront-unlock. Başka host yok.

**Bu Luxe Luxuries değil.** `luxe-luxuries` / `watchez-online-store` ayrı envanter. Yalnız `women-beauty-3.myshopify.com`.

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft #376 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/luxe/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **42** |
| Evidence | **166** PNG (125 statik 3vp + interact) |
| Parallel | yalnız `observations/luxe/`, `evidence/luxe/`, `todo/luxe.md`, `candidates/luxe-leftovers.md` + Speedo password helper |

**Kapsam satırı:**  
`LUXE / Josiane · default · women-beauty-3-v-1-5-0 / schema_name women_beauty_3 1.5.0 · theme_store_id null · shop women-beauty-3.myshopify.com · password 1 · home→PDP Natural oils Size 50→100ml ($130→$250)→PLP best-seller→/collections→search cream→cart empty/filled/qty→drawer→our-story→faqs accordion→contact (submit yok)→news+skincare post→404 · 42 obs · 166 PNG · 0 yeni şema · leftover: candidates/luxe-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer + overlays) | [x] obs | [x] capture |
| Shop disclosure 1440 | [x] obs | [x] interact |
| Predictive search `natural` | [x] obs | [x] interact |
| Mobile menu 375+768 + Shop drill | [x] obs | [x] interact |
| Cart drawer empty + filled + qty | [x] obs | [x] interact |
| PDP Natural oils Size 50→100 | [x] obs | [x] interact |
| PLP `/collections/best-seller` | [x] obs | [x] capture + hover |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=cream` | [x] obs | [x] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [x] interact |
| About `/pages/our-story` | [x] obs | [x] capture |
| FAQ `/pages/faqs` accordion | [x] obs | [x] interact |
| Contact form (submit yok) | [x] obs | [x] capture |
| News + Seasonal skincare post | [x] obs | [x] capture |
| 404 | [x] obs | [x] capture |
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
| 20 | #QuickAdd-8306237767960 | `global-quick-view` | reuse |

---

## Interact

Shop 1440 disclosure (görsel mega yok). Search `natural` → SUGGESTIONS + PRODUCTS. Menu 375/768 + Shop drill. Cart drawer Natural oils $130→$260. PDP Size 50→100 ml $130→$250 / stok 500→200. Cart sayfa adet 1→2. FAQ ilk soru açık (jewelry leftover). QV Natural oils modal. PLP hover PNG var; ikinci görsel grid kırpında net değil. Şema değişmedi.

---

## Aday / leftover

[`candidates/luxe-leftovers.md`](../candidates/luxe-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 125 PNG; menu 1440 skip
- [x] Interact (`capture-interaction.mjs`) — mega / menu / search natural / cart drawer+page / PDP Size / FAQ / PLP hover / QV
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs` — 0 error
