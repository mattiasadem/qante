# Todo — Shine (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://women-beauty-9.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/shine-new-beauty-store-shopify-2-0-theme  
*Preset:* `default` · *Slug:* `shine`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Shine V-1.5.0**  
`schema_name` = **Shine** · `schema_version` = **1.5.0** · `role` = **main** · theme id `151002284288`  
`theme_store_id` = **null**  
shop `women-beauty-9.myshopify.com` · locale `en` · currency `USD`  
Sayfa başlığı: **Shine - New Beauty Store – women-beauty-9**

**Password:** Speedo ürün sayfası “Please enter password `1` to view demo.” Aynı host `/password` — public storefront-unlock. Başka host yok.

**Durum:** Mod A walk + resmi 3vp + interact **bitti** (0 error)  
**PR:** draft #426 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/shine/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `unlock-storefront.mjs` |
| Unlock | `/password` + `1` (`women-beauty-9.myshopify.com` PUBLIC_DEMO_PASSWORDS) |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **49** |
| Evidence | **188** PNG (147 statik 3vp + interact) |
| Parallel | yalnız `observations/shine/`, `evidence/shine/`, `todo/shine.md`, `candidates/shine-leftovers.md` + unlock host |

**Kapsam satırı:**  
`Shine · default · Shine V-1.5.0 / schema_name Shine 1.5.0 · theme_store_id null · shop women-beauty-9.myshopify.com · password 1 · home→PDP beauty-liquid-matte Color Antique White→White Chocolate (350→290)→PLP skincare hover→/collections→search cream→cart empty/filled/qty $89→$178→drawer→about-layout-1+our-story→contact-layout-1 (submit yok)→faq Q1+Q2→news+natural-beauty post→404 · 49 obs · 188 PNG · 0 yeni şema · leftover: candidates/shine-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer + overlays) | [x] obs | [x] capture |
| Shop mega 1440 | [x] interact | [x] 6 kolon |
| Predictive search `cream` | [x] interact | [x] 375/768/1440 |
| Mobile menu 375+768+1440 | [x] static open | leftover flat links |
| Cart drawer empty + filled + qty | [x] interact | [x] $89→$178 |
| PDP Beauty Liquid Matte Color Antique White→White Chocolate | [x] interact | [x] 350→290 |
| PLP `/collections/skincare` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=cream` | [x] obs | [x] capture |
| Cart `/cart` empty + filled | [x] interact | [x] $89→$178 |
| About `/pages/about-layout-1` | [x] obs | [x] capture |
| Our Story `/pages/our-story` | [x] obs | [x] capture |
| Contact `/pages/contact-layout-1` (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faq` accordion | [x] interact | [x] Q1+Q2 |
| News + Natural Beauty Tips post | [x] obs | [x] capture |
| 404 `/pages/this-page-does-not-exist-qante` | [x] obs | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · Shop/Shop By details |
| 3 | 3b7cb796 slideshow | `hero-slideshow` | reuse |
| 4 | logo_slider_ebLLt4 | `social-proof-brand-logos` | reuse |
| 5 | 07468762 categories | `collection-nav-image-cards` | reuse |
| 6 | 0617c2f2 Our Best Sellers | `product-showcase-grid-featured` | reuse · quick shop |
| 7 | multicolumn_video_text Glow from Within | `editorial-image-with-text` | reuse · iki video |
| 8 | text_with_image_pw6YLT Empower | `editorial-image-with-text.2` | reuse |
| 9 | before_after_yLGr3p | `before-after-slider` | reuse |
| 10 | section_reviews_9KT7pk | `testimonial-quote-carousel` | reuse |
| 11 | 588ae6a9 Latest Blog | `blog-list-main` | reuse |
| 12 | shopable_videos_gwWM7G | `media-shop-the-feed` | reuse |
| 13 | service_icon_cRV7DD | `trust-icon-row` | reuse · ikon-only |
| 14 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 15 | #CartDrawer | `global-cart-drawer` | reuse |
| 16 | #menu-drawer | `global-menu-drawer` | reuse · 375/768 |
| 17 | details-modal.header__search | `global-predictive-search` | reuse |
| — | newsletter-popup h=0 | leftover | — |
| — | Our Team / wishlist / compare / Themes mega | leftover | — |

---

## Diğer şablonlar

| sayfa | URL | schemaId |
|---|---|---|
| product-detail | `/products/beauty-liquid-matte` | `product-info-main` · tabs · video · features · overlay · IWT multirow · trust.2 · promo-grid · FAQ · marquee · related |
| collection | `/collections/skincare` | `collection-banner` · `collection-nav-slider` · `product-showcase-grid-plp` |
| collections | `/collections` | `collection-nav-grid` |
| search | `/search?q=cream` | `search-results` |
| cart | `/cart` | `cart-page-main` |
| about-brand | `/pages/about-layout-1` | overlay · IWT About Me · features ×2 · overlay.2 · logos |
| about-brand | `/pages/our-story` | `page-content-main` |
| contact | `/pages/contact-layout-1` | overlay · features office · `lead-capture-form` |
| faq-support | `/pages/faq` | overlay · `faq-collapsible-tabs` |
| blog-list | `/blogs/news` | `blog-list-main` |
| blog-post | `/blogs/news/natural-beauty-tips-for-your-daily-body-skin-care` | `blog-post-main` |
| not-found | `/pages/this-page-does-not-exist-qante` | `page-content-main` |

Aynı tip = şemaya dokunma, observation + delta. Yeni şema yok.

---

## Interact

Shop 1440: 6 kolon görsel mega (Skincare…Accessories). Search `cream` → PRODUCTS listesi 375/768/1440. Menu hamburger statik open (düz link, drill yok). Cart drawer+sayfa Beauty Liquid Matte $89→$178. PDP Color Antique White→White Chocolate / stok 350→290 / galeri değişti. FAQ Q1+Q2 açık (allowMultipleOpen). PLP hover: wishlist/compare + ok. Şema değişmedi.

---

## Aday / leftover

[`candidates/shine-leftovers.md`](../candidates/shine-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 49/49 · 147 PNG
- [x] Interact mega / search cream / cart drawer+page $89→$178 / PDP Color / FAQ Q2 / PLP hover — 188 PNG toplam
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs` — 0 error · şema dokunulmadı
