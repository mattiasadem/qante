# Todo — Prestige (Shopify) · Allure

*Kaynak:* https://prestige-theme-allure.myshopify.com/  
*Preset:* `allure` · Maestrooo Prestige

**Şu anki odak:** Allure CRO leftover interact (resmi demo) — envanter zaten vardı

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/prestige/allure/` |
| Walkthrough / not | Theme Store: https://themes.shopify.com/themes/prestige |
| Kapsam satırı (bitince) | Prestige · Allure · 9 sayfa · 66 gözlem · 0 yeni şema (CRO leftover interact) · leftover: candidates/prestige-leftovers.md |
| Tema (görülen) | Prestige · schema_name Prestige 11.4.0 · theme_store_id null · id 124951035967 · role main |

---

## Faz durumu

- [x] F1 Home roster + evidence
- [x] F2 Collection / PLP
- [x] F3 PDP
- [x] F4 Search / cart (dolu sayfa + drawer)
- [x] F5 Content / blog / about / faq / contact
- [x] F6 Signature tam tur: [`prestige-signature.md`](./prestige-signature.md)
- [x] F7 Couture tam tur: [`prestige-couture.md`](./prestige-couture.md)
- [x] F8 Vogue tam tur: [`prestige-vogue.md`](./prestige-vogue.md)
- [x] F9 Strass tam tur: [`prestige-strass.md`](./prestige-strass.md)
- [x] CRO leftover interact (Allure resmi): slider + FAQ + reviews + contact Subject

---

## Home roster (DOM)

Prestige section class → QANTE şema. Aynı tip varsa **şemaya dokunma**, observation + delta.

| # | Prestige class | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | countdown-condensed | `promo-announcement-bar` | reuse · delta: timer + shop now |
| 2 | header | `navigation-header-mega` | reuse |
| 3 | cart-drawer | `global-cart-drawer` | reuse · boş + Mini Dalia $350 |
| 4 | newsletter-popup | aday overlay | şema yok · sonra |
| 5 | privacy-banner | atla | boş |
| 6 | slideshow | `hero-slideshow` | reuse |
| 7 | featured-collections (best sellers + WOMEN/MEN) | `product-showcase-tabs` | reuse |
| 8 | image-with-text-overlay (backpack) | `editorial-image-with-text-overlay` | reuse |
| 9 | rich-text | `editorial-rich-text` | reuse |
| 10 | media-grid | `collection-nav-image-cards` | reuse |
| 11 | scrolling-content ×2 | `promo-scrolling-marquee` | reuse · 2 instance |
| 12 | featured-collections (weekend bag) | `product-showcase-grid-featured` | reuse |
| 13 | video | `media-video-hero` | reuse |
| 14 | shop-the-look | `media-lookbook-slider` | reuse |
| 15 | countdown | `promo-banner-countdown` | reuse |
| 16 | multiple-media-with-text | `editorial-layered-images` | reuse · bakılacak |
| 17 | before-after-image | `before-after-slider` | reuse |
| 18 | images-with-text-scroll | **yeni** `editorial-images-scroll` | evidence sonra şema |
| 19 | blog-posts | `blog-list-main` | reuse · delta: home featured |
| 20 | featured-product | **yeni** `product-showcase-featured` | evidence sonra şema |
| 21 | image-with-text-block | `editorial-image-with-text` | reuse |
| 22 | testimonials | `testimonial-quote-carousel` | reuse |
| 23 | timeline | **yeni** `editorial-timeline` | evidence sonra şema |
| 24 | image-with-text-overlay (couple) | `editorial-image-with-text-overlay` | reuse · `.2` |
| 25 | multi-column | `features-multicolumn` | reuse |
| 26 | newsletter | `lead-capture-newsletter-band` | reuse |
| 27 | footer multi-column (IG) | `media-scrolling-gallery` | reuse · bakılacak |
| 28 | text-with-icons | `trust-icon-row` | reuse |
| 29 | footer | `footer-columns-newsletter` | reuse |

---

## Bileşen checklist

| # | Bileşen / id | scope | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | global | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | global | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | instance | [x] | [x] | reuse | [x] |
| 4 | product-showcase-tabs | instance | [x] | [x] | reuse | [x] |
| 5 | editorial-image-with-text-overlay | instance | [x] | [x] | reuse | [x] |
| 6 | editorial-rich-text | instance | [x] | [x] | reuse | [x] |
| 7 | collection-nav-image-cards | instance | [x] | [x] | reuse | [x] |
| 8 | promo-scrolling-marquee | instance | [x] | [x] | reuse | [x] |
| 9 | promo-scrolling-marquee.2 | instance | [x] | [x] | reuse | [x] |
| 10 | product-showcase-grid-featured | instance | [x] | [x] | reuse | [x] |
| 11 | media-video-hero | instance | [x] | [x] | reuse | [x] |
| 12 | media-lookbook-slider | instance | [x] | [x] | reuse | [x] |
| 13 | promo-banner-countdown | instance | [x] | [x] | reuse | [x] |
| 14 | editorial-layered-images | instance | [x] | [x] | reuse | [x] |
| 15 | before-after-slider | instance | [x] | [x] | reuse | [x] |
| 16 | editorial-images-scroll | instance | [x] | [x] | yeni | [x] |
| 17 | blog-list-main | instance | [x] | [x] | reuse | [x] |
| 18 | product-showcase-featured | instance | [x] | [x] | yeni | [x] |
| 19 | editorial-image-with-text | instance | [x] | [x] | reuse | [x] |
| 20 | testimonial-quote-carousel | instance | [x] | [x] | reuse | [x] |
| 21 | editorial-timeline | instance | [x] | [x] | yeni | [x] |
| 22 | editorial-image-with-text-overlay.2 | instance | [x] | [x] | reuse | [x] |
| 23 | features-multicolumn | instance | [x] | [x] | reuse | [x] |
| 24 | lead-capture-newsletter-band | instance | [x] | [x] | reuse | [x] |
| 25 | media-scrolling-gallery | instance | [x] | [x] | reuse | [x] |
| 26 | trust-icon-row | instance | [x] | [x] | reuse | [x] |
| 27 | footer-columns-newsletter | instance | [x] | [x] | reuse | [x] |
| 28 | global-cart-drawer | global | [x] | dolu | reuse | [x] |

### F2 Collection / PLP

| # | Bileşen / id | Screenshot | JSON | Done |
|---|---|---|---|---|
| 29 | collection-banner | [x] | reuse | [x] |
| 30 | product-showcase-grid-plp | [x] | reuse | [x] |
| 31 | promo-banner-countdown | [x] | reuse | [x] |
| 32 | editorial-rich-text | [x] | reuse | [x] |
| 33 | collection-nav-image-cards | [x] | reuse | [x] |

### F3 PDP

| # | Bileşen / id | Screenshot | JSON | Done |
|---|---|---|---|---|
| 34 | product-info-main | [x] | reuse | [x] |
| 35 | editorial-image-with-text-overlay | [x] | reuse | [x] |
| 36 | media-mosaic-grid | [x] | **yeni** | [x] |
| 37 | promo-scrolling-marquee | [x] | reuse | [x] |
| 38 | editorial-timeline | [x] | reuse | [x] |
| 39 | testimonial-quote-carousel | [x] | reuse | [x] |
| 40 | media-lookbook-slider | [x] | reuse | [x] |
| 41 | editorial-layered-images | [x] | reuse | [x] |
| 42 | collection-nav-image-cards | [x] | reuse (collection-list) | [x] |
| 43 | product-showcase-related | [x] | reuse | [x] |

### F4 Search / cart

| # | Bileşen / id | Screenshot | JSON | Done |
|---|---|---|---|---|
| 44 | search-results | [x] | reuse | [x] |
| 45 | cart-page-main | [x] | reuse · boş | [x] |

### F5 Content / blog

| # | Bileşen / id | Screenshot | JSON | Done |
|---|---|---|---|---|
| 46 | about-brand (11 obs) | [x] | reuse + mosaic ×2 | [x] |
| 47 | faq-collapsible-tabs | [x] | reuse | [x] |
| 48 | lead-capture-form ×2 | [x] | reuse | [x] |
| 49 | blog-list-main | [x] | reuse | [x] |
| 50 | blog-post-main | [x] | reuse | [x] |
| 51 | prev-next → blog-list-main.2 | [x] | reuse + delta | [x] |

---

## Aday / şemaya sığmayan

- Leftover dosyası: [`candidates/prestige-leftovers.md`](../candidates/prestige-leftovers.md)
- newsletter-popup (global overlay, Hyper’da yok)
- privacy-banner (boş)
- sticky ATC (product-info feature; diğer kesitlere sızıyor)
- FAQ sol kategori nav → `kategoriTabGoster` şemaya eklenmedi
- Search PRODUCTS/BLOG/PAGES tip sekmeleri
- editorial-timeline year rail altta; sözlük `tabPozisyon` yalnız `top|side`

---

## Evidence backlog

- [x] Allure 9 sayfa 3vp + cart drawer interact (66 obs)
- [x] Dolu cart / drawer — Mini Dalia $350 (sayfa + drawer). Adet + shadow, changed yok
- [ ] Newsletter popup overlay

## Interact

- `navigation-header-mega` — Women/Men mega + mobil hamburger (önceki tur)
- `cart-page-main` — boş / Mini Dalia $350 + ESTIMATE SHIPPING
- `global-cart-drawer` — boş / Mini Dalia $350 + COMPLETE WITH. Adet changed yok (shadow)
- `global-predictive-search` — dalia: Suggestions + 4 ürün + View all
- `product-showcase-grid-plp` — Filter çekmece + Mini bags 65→13
- `product-info-main` — Ivory swatch → /products/le-mini-dalia-ivory-liege $350
- `faq-collapsible-tabs` — How to add a FAQ… açık (önceki tur)
- `media-lookbook-slider` — 1440 hotspot Nova $450 → Primo $420
- `product-showcase-tabs` — WOMEN Mini Dalia → MEN Slim Briefcase $420
- `testimonial-quote-carousel` — GQ → FARFETCH Le Petit Violette (önceki tur)

### CRO leftover interact (Allure · 2026-08-19)

| schemaId | states | Sonuç |
|---|---|---|
| before-after-slider | initial · changed | cursor + 12× ArrowRight (range yok) |
| faq-collapsible-tabs | initial · changed | mevcut 3vp — ilk soru açık |
| testimonial-quote-carousel | initial · changed | mevcut 3vp — FARFETCH |
| lead-capture-form (contact) | initial · changed | Subject → Order; PII yok |
| promo-banner-countdown | — | leftover — 00:00 / Shop now sayfa değiştirir |
| lead-capture-newsletter-band | — | leftover — e-posta PII |
| media-scrolling-gallery | — | leftover — kontrol yok |
| commerce-tools-products-bundle · comparison-quick-table · product-finder-quiz · media-shop-the-feed | — | leftover — Allure’da observation yok |
