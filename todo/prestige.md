# Todo — Prestige (Shopify) · Allure

*Kaynak:* https://prestige-theme-allure.myshopify.com/  
*Preset:* `allure` · Maestrooo Prestige

**Şu anki odak:** Allure sayfa turu bitti · F6 diğer preset'ler bekliyor

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/prestige/allure/` |
| Walkthrough / not | Theme Store: https://themes.shopify.com/themes/prestige |
| Kapsam satırı (bitince) | Prestige · Allure · 9 sayfa · 65 gözlem · 4 yeni şema · dolu sepet / newsletter-popup açık |

---

## Faz durumu

- [x] F1 Home roster + evidence
- [x] F2 Collection / PLP
- [x] F3 PDP
- [x] F4 Search / cart (drawer boş — home'da)
- [x] F5 Content / blog / about / faq / contact
- [ ] F6 Diğer preset delta (Couture, Vogue, Signature, Strass)

---

## Home roster (DOM)

Prestige section class → QANTE şema. Aynı tip varsa **şemaya dokunma**, observation + delta.

| # | Prestige class | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | countdown-condensed | `promo-announcement-bar` | reuse · delta: timer + shop now |
| 2 | header | `navigation-header-mega` | reuse |
| 3 | cart-drawer | `global-cart-drawer` | reuse · boş sepet (henüz doldurulmadı) |
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
| 28 | global-cart-drawer | global | [ ] | boş | reuse | [ ] |

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

- newsletter-popup (global overlay, Hyper’da yok)
- privacy-banner (boş)
- sticky ATC (product-info feature; diğer kesitlere sızıyor)
- FAQ sol kategori nav → `kategoriTabGoster` şemaya eklenmedi
- Search PRODUCTS/BLOG/PAGES tip sekmeleri
- editorial-timeline year rail altta; sözlük `tabPozisyon` yalnız `top|side`

---

## Evidence backlog

- [x] Allure 9 sayfa 3vp capture (home 27 + diğer 38 = 65 obs)
- [ ] Dolu cart / drawer (araç henüz sepete ürün atmıyor)
- [ ] Newsletter popup overlay
