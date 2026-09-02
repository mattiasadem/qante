# Todo — Beautifly (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://women-beauty-6.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/beautifly-beauty-care-shopify-beauty-themes-shopify-2-0  
*Preset:* `default` · *Slug:* `beautifly`  
*Vendor:* Speedo Themes (third-party Shopify 2.0 — Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Beautifly-v-1-5-0**  
`schema_name` = **Beautifly** · `schema_version` = **1.5.0** · `role` = **main** · theme id `141669368035`  
`theme_store_id` = **null**  
shop `women-beauty-6.myshopify.com` · locale `en` · currency `USD`  
Sayfa başlığı: **Beautifly - Beauty and Cosmetics Theme – Women Beauty 6 (password: 1)**

**Password:** Speedo ürün sayfası “Please enter password `1` to view demo.” Aynı host `/password` — public storefront-unlock. Başka host yok.

**Durum:** 🟡 Mod A observations yazıldı · 3vp capture + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/beautifly/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `unlock-storefront.mjs` |
| Unlock | `/password` + `1` (`women-beauty-6.myshopify.com` PUBLIC_DEMO_PASSWORDS) |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **41** |
| Parallel | yalnız `observations/beautifly/`, `evidence/beautifly/`, `todo/beautifly.md`, `candidates/beautifly-leftovers.md`, unlock host |

**Kapsam satırı:**  
`Beautifly · default · Beautifly-v-1-5-0 / schema_name Beautifly 1.5.0 · theme_store_id null · shop women-beauty-6.myshopify.com · password 1 · home→PDP perfume Size 50/100/200ml→PLP makeup→/collections→search cream→cart→about-us (IWT×2+overlay×2)·contact·faqs accordion→news+makeup post→404 · 41 obs · 0 yeni şema · leftover: candidates/beautifly-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Shop All mega 1440 | [ ] interact | [ ] |
| Predictive search `cream` | [ ] interact | [ ] |
| Mobile menu 375+768 | [ ] interact | [ ] |
| Cart drawer empty + filled + qty | [ ] interact | [ ] |
| PDP Perfume Size 50→100ml | [ ] interact | [ ] |
| PLP `/collections/makeup` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=cream` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled | [ ] interact | [ ] |
| About `/pages/about-us` | [x] obs | [ ] capture |
| Contact `/pages/contact` (submit yok) | [x] obs | [ ] capture |
| FAQ `/pages/faqs` | [x] obs | [ ] interact |
| Blog `/blogs/news` + makeup post | [x] obs | [ ] capture |
| 404 | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Beautifly / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · Shop All mega |
| 3 | 3b7cb796 slideshow | `hero-slideshow` | reuse |
| 4 | custom_announcement_bar_jQffkk | `promo-scrolling-marquee` | reuse |
| 5 | categories_slider_1_MCRmQd | `collection-nav-icon-buttons` | reuse · SVG |
| 6 | rich_text_wDFqxx | `editorial-rich-text` | reuse |
| 7 | 8b5479f1 image-banner | `editorial-image-with-text-overlay` | reuse · görsel-only |
| 8 | categories_slider_2_XVAMGw | `collection-nav-slider` | reuse · foto kart |
| 9 | 7722eea3 Natural / Smooth | `promo-grid-banner` | reuse |
| 10 | custom_collection_list_3FaNcq | `collection-nav-image-cards` | reuse |
| 11 | image_with_text_rQFUNp | `editorial-image-with-text` | reuse |
| 12 | custom_collection_list_yy7wYU | `collection-nav-image-cards.2` | reuse · I’m Looking For |
| 13 | image_with_text_EVYkJc | `editorial-image-with-text.2` | reuse |
| 14 | multicolumn_DzqrmH | `trust-icon-row` | reuse |
| 15 | newsletter_FTtdp6 | `lead-capture-newsletter-band` | reuse · submit yok |
| 16 | footer | `footer-columns-newsletter` | reuse |
| 17 | #CartDrawer | `global-cart-drawer` | reuse · interact |
| 18 | #menu-drawer | `global-menu-drawer` | reuse · interact |
| 19 | predictive-search | `global-predictive-search` | reuse · inline 1440 |
| — | newsletter-popup | leftover | h=0 |
| — | Meet The Team / wishlist / compare | leftover | — |

---

## Diğer şablonlar

| sayfa | URL | schemaId |
|---|---|---|
| product-detail | `/products/bottle-of-perfume-with-flowers-on-color` | `product-info-main` · tabs · IWT · overlay · related |
| collection | `/collections/makeup` | `collection-banner` · `product-showcase-grid-plp` |
| collections | `/collections` | `collection-nav-grid` |
| search | `/search?q=cream` | `search-results` |
| cart | `/cart` | `cart-page-main` |
| about-brand | `/pages/about-us` | overlay · IWT About Me! · overlay.2 · IWT.2 Our Work |
| contact | `/pages/contact` | overlay · features-multicolumn · `lead-capture-form` |
| faq-support | `/pages/faqs` | overlay · `faq-collapsible-tabs` |
| blog-list | `/blogs/news` | `blog-list-main` |
| blog-post | `/blogs/news/top-high-end-makeup-picks-…` | `blog-post-main` |
| not-found | `/pages/this-page-does-not-exist-qante` | `page-content-main` |

Aynı tip = şemaya dokunma, observation + delta. Yeni şema yok.

---

## Aday / leftover

[`candidates/beautifly-leftovers.md`](../candidates/beautifly-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu / cart / PDP size / FAQ / PLP hover
- [ ] PNG bak → stateFindings
- [ ] `node scripts/validate-schemas.mjs` — şema dokunulmadı
