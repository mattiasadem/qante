# Şema borç raporu

*Üretim: `node scripts/validate-schemas.mjs` · 2026-08-13 · taksonomi v0.1.0.json*

**59 şema · 45 error · 214 warn · 1 temiz**

Sözleşme: [`schema-standard.md`](../../schema-standard.md) · [`styleknobs-standard.md`](../../styleknobs-standard.md)

> Bu dosya **üretilmiştir** — elle düzenleme. Düzeltmeyi şemada yap, sonra raporu yeniden üret.

---

## 1. ERROR — sözleşme ihlali (önce bunlar)

### `global/global-cart-drawer` — 10 error
- zorunlu alan eksik: "kategori"
- zorunlu alan eksik: "varyant"
- bilinmeyen üst alan "tur" — standart dışı (not ise "_tur" yaz)
- bilinmeyen üst alan "filterOrnegi" — standart dışı (not ise "_filterOrnegi" yaz)
- bilinmeyen üst alan "platformNotu" — standart dışı (not ise "_platformNotu" yaz)
- slot "kargoBar" kaldırılmış tip "progress" → number slot + *Goster knob
- slot "notAlani" kaldırılmış tip "toggle+textarea" → *Goster knob + text slot
- slot "hediyePaketi" kaldırılmış tip "toggle" → styleKnob (*Goster)
- slot adı "crossSell" emekli → oneriler (standart §3.5)
- slot "crossSell" kaldırılmış tip "productMiniList" → array + ref, veya dataBinding

### `global/footer-columns-newsletter` — 4 error
- slot adı "newsletter.aciklama" emekli → metin (text) veya icerik (richtext) (standart §3.5)
- slot adı "localeSwitcher" emekli → dilSecici (standart §3.5)
- action "subscribe" → emit:newsletter.subscribe
- action "changeLocale" → emit:locale.change

### `instance/media-lookbook-slider` — 4 error
- slot adı "slides" emekli → slaytlar (standart §3.5)
- slot "slides.urunler.urun" kaldırılmış tip "product" → ref (hedef: product)
- slot "slides.urunler.hotspot" object ama "alanlar" yok
- hook "mount:hotspot" biçimi yanlış — mount:{bolge}.{konum} (iki parça zorunlu)

### `instance/lead-capture-form` — 3 error
- slot adı "alanlar" emekli → formAlanlari (alanlar meta anahtar adı) (standart §3.5)
- slot adı "alanlar.tip" emekli → tur (tip meta anahtar adı) (standart §3.5)
- slot adı "alanlar.zorunlu" emekli → zorunluMu (zorunlu meta anahtar adı) (standart §3.5)

### `global/navigation-header-mega` — 3 error
- slot "menu" kaldırılmış tip "menuRef" → ref (hedef: menu)
- slot "megaPaneller.kolonlar" obje değil — { "tip": ..., "zorunlu": ... } yaz
- slot "megaPaneller.promoKarti" kaldırılmış tip "promoRef" → ref (hedef: promo)

### `instance/editorial-custom-content` — 2 error
- slot adı "bloklar.tip" emekli → tur (tip meta anahtar adı) (standart §3.5)
- slot "bloklar.urun" kaldırılmış tip "product" → ref (hedef: product)

### `instance/lead-capture-newsletter-band` — 2 error
- slot adı "aciklama" emekli → metin (text) veya icerik (richtext) (standart §3.5)
- action "subscribe" → emit:newsletter.subscribe

### `instance/media-lookbook-banner` — 2 error
- slot "hotspotlar.urun" kaldırılmış tip "product" → ref (hedef: product)
- hook "mount:hotspot" biçimi yanlış — mount:{bolge}.{konum} (iki parça zorunlu)

### `instance/media-shop-the-feed` — 2 error
- slot adı "items.urunRef" emekli → urun (standart §3.5)
- slot "items.urunRef" kaldırılmış tip "productRef" → ref (hedef: product)

### `instance/promo-banner-countdown` — 2 error
- slot adı "eyebrow" emekli → ustEtiket (standart §3.5)
- slot adı "aciklama" emekli → metin (text) veya icerik (richtext) (standart §3.5)

### `instance/collection-banner` — 1 error
- slot adı "aciklama" emekli → metin (text) veya icerik (richtext) (standart §3.5)

### `instance/collection-nav-cards` — 1 error
- slot adı "items.aciklama" emekli → metin (text) veya icerik (richtext) (standart §3.5)

### `instance/collection-nav-tabs` — 1 error
- slot adı "sekmeler.aciklama" emekli → metin (text) veya icerik (richtext) (standart §3.5)

### `instance/commerce-tools-products-bundle` — 1 error
- hook "mount:bundle.afterItems" konumu "afterItems" emekli → "belowItems" (§6)

### `instance/comparison-quick-table` — 1 error
- slot "urunler.urun" kaldırılmış tip "product" → ref (hedef: product)

### `instance/editorial-image-with-text` — 1 error
- slot adı "badge" emekli → rozet (standart §3.5)

### `global/global-menu-drawer` — 1 error
- dataBinding "menu" kaldırılmış source "DataSource.navigationMenu" → DataSource.navigation

### `instance/hero-slideshow` — 1 error
- slot adı "slaytlar.eyebrow" emekli → ustEtiket (standart §3.5)

### `instance/product-info-main` — 1 error
- slot adı "aciklama" emekli → metin (text) veya icerik (richtext) (standart §3.5)

### `global/promo-spotlight-tab` — 1 error
- hook "mount:spotlight" biçimi yanlış — mount:{bolge}.{konum} (iki parça zorunlu)

### `instance/trust-icon-row` — 1 error
- slot adı "items.aciklama" emekli → metin (text) veya icerik (richtext) (standart §3.5)

---

## 2. WARN — kategori dağılımı

| # | Uyarı |
|---|---|
| 137 | slot X içinde X yok (standart §N.N) |
| 46 | styleKnobs N adet — instance için tipik N–N (gerekçe için X ekle) |
| 16 | styleKnob X sözlükte yok (styleknobs §N.N–N.N) — mevcut bir adla ifade et veya §N  |
| 8 | slot X array ama min/max eksik |
| 2 | slot X çekirdek ad ama tipi X — X için beklenen: text (§N.N) |
| 2 | bagimlilik X için şema bulunamadı |
| 1 | slot X text ama X yok |
| 1 | slots boş — bu bölümde gerçekten editable içerik yok mu? |
| 1 | styleKnob X tek string X — enum ≥N değer olmalı veya boolean/sayı yap |

---

## 3. styleKnobs bütçe borcu

styleknobs-standard §5: instance tipik **4–8**. §2.1 toplama taraması uygulanmadan kapanmaz.

| knob | şema |
|---|---|
| 1 | 11 |
| 2 | 26 |
| 3 | 9 |
| 4 | 2 |
| 5 | 1 |

**46/49 instance şema bütçenin altında.**

<details><summary>Liste</summary>

- `blog-post-main` — 1 knob · 1 obs
- `cart-page-main` — 1 knob · 1 obs
- `collection-nav-cards` — 1 knob · 1 obs
- `comparison-quick-table` — 1 knob · 2 obs
- `faq-collapsible-tabs` — 1 knob · 4 obs
- `lead-capture-form` — 1 knob · 1 obs
- `media-lookbook-banner` — 1 knob · 1 obs
- `navigation-breadcrumbs` — 1 knob · 8 obs
- `page-content-main` — 1 knob · 1 obs
- `product-showcase-recently-viewed` — 1 knob · 1 obs
- `search-results` — 1 knob · 1 obs
- `before-after-slider` — 2 knob · 1 obs
- `blog-list-main` — 2 knob · 1 obs
- `collection-banner` — 2 knob · 1 obs
- `collection-nav-banners` — 2 knob · 1 obs
- `collection-nav-icon-buttons` — 2 knob · 2 obs
- `collection-nav-image-cards` — 2 knob · 2 obs
- `collection-nav-tabs` — 2 knob · 2 obs
- `commerce-tools-products-bundle` — 2 knob · 4 obs
- `editorial-custom-content` — 2 knob · 3 obs
- `editorial-highlight-text-image` — 2 knob · 1 obs
- `editorial-image-with-text-overlay` — 2 knob · 1 obs
- `editorial-layered-images` — 2 knob · 1 obs
- `editorial-rich-text` — 2 knob · 2 obs
- `features-multicolumn` — 2 knob · 4 obs
- `features-slider-multicolumn` — 2 knob · 1 obs
- `lead-capture-newsletter-band` — 2 knob · 2 obs
- `media-lookbook-slider` — 2 knob · 1 obs
- `media-scrolling-gallery` — 2 knob · 2 obs
- `media-shop-the-feed` — 2 knob · 1 obs
- `product-info-main` — 2 knob · 1 obs
- `product-showcase-related` — 2 knob · 1 obs
- `product-showcase-tabs` — 2 knob · 1 obs
- `promo-banner-tabs` — 2 knob · 1 obs
- `promo-grid-banner` — 2 knob · 2 obs
- `social-proof-brand-logos` — 2 knob · 3 obs
- `trust-icon-row` — 2 knob · 4 obs
- `collection-nav-grid` — 3 knob · 1 obs
- `collection-nav-slider` — 3 knob · 1 obs
- `editorial-image-with-text` — 3 knob · 5 obs
- `media-video-hero` — 3 knob · 1 obs
- `product-showcase-favorites` — 3 knob · 1 obs
- `product-showcase-grid-plp` — 3 knob · 1 obs
- `promo-banner-countdown` — 3 knob · 1 obs
- `promo-scrolling-marquee` — 3 knob · 9 obs
- `testimonial-quote-carousel` — 3 knob · 3 obs

</details>

---

## 4. Dosya bazlı özet

| Şema | scope | error | warn | knob | obs |
|---|---|---|---|---|---|
| `global-cart-drawer` | global | 10 |  | 0 | 1 |
| `footer-columns-newsletter` | global | 4 | 18 | 3 | 1 |
| `media-lookbook-slider` | instance | 4 | 7 | 2 | 1 |
| `navigation-header-mega` | global | 3 | 7 | 3 | 1 |
| `lead-capture-form` | instance | 3 | 6 | 1 | 1 |
| `media-lookbook-banner` | instance | 2 | 4 | 1 | 1 |
| `media-shop-the-feed` | instance | 2 | 4 | 2 | 1 |
| `editorial-custom-content` | instance | 2 | 3 | 2 | 3 |
| `lead-capture-newsletter-band` | instance | 2 | 3 | 2 | 2 |
| `promo-banner-countdown` | instance | 2 | 1 | 3 | 1 |
| `product-info-main` | instance | 1 | 7 | 2 | 1 |
| `collection-nav-tabs` | instance | 1 | 6 | 2 | 2 |
| `collection-nav-cards` | instance | 1 | 5 | 1 | 1 |
| `editorial-image-with-text` | instance | 1 | 5 | 3 | 5 |
| `global-menu-drawer` | global | 1 | 4 | 1 | 1 |
| `hero-slideshow` | instance | 1 | 4 | 5 | 1 |
| `commerce-tools-products-bundle` | instance | 1 | 3 | 2 | 4 |
| `comparison-quick-table` | instance | 1 | 3 | 1 | 2 |
| `trust-icon-row` | instance | 1 | 3 | 2 | 4 |
| `collection-banner` | instance | 1 | 2 | 2 | 1 |
| `promo-spotlight-tab` | global | 1 | 1 | 1 | 1 |
| `collection-nav-banners` | instance |  | 5 | 2 | 1 |
| `collection-nav-grid` | instance |  | 5 | 3 | 1 |
| `collection-nav-image-cards` | instance |  | 5 | 2 | 2 |
| `editorial-layered-images` | instance |  | 5 | 2 | 1 |
| `features-slider-multicolumn` | instance |  | 5 | 2 | 1 |
| `media-video-hero` | instance |  | 5 | 3 | 1 |
| `promo-banner-tabs` | instance |  | 5 | 2 | 1 |
| `before-after-slider` | instance |  | 4 | 2 | 1 |
| `collection-nav-icon-buttons` | instance |  | 4 | 2 | 2 |
| `collection-nav-slider` | instance |  | 4 | 3 | 1 |
| `faq-collapsible-tabs` | instance |  | 4 | 1 | 4 |
| `features-multicolumn` | instance |  | 4 | 2 | 4 |
| `media-scrolling-gallery` | instance |  | 4 | 2 | 2 |
| `product-showcase-tabs` | instance |  | 4 | 2 | 1 |
| `promo-grid-banner` | instance |  | 4 | 2 | 2 |
| `social-proof-brand-logos` | instance |  | 4 | 2 | 3 |
| `testimonial-quote-carousel` | instance |  | 4 | 3 | 3 |
| `trust-contact-icon-band` | global |  | 4 | 2 | 1 |
| `blog-post-main` | instance |  | 3 | 1 | 1 |
| `editorial-image-with-text-overlay` | instance |  | 3 | 2 | 1 |
| `editorial-rich-text` | instance |  | 3 | 2 | 2 |
| `navigation-breadcrumbs` | instance |  | 3 | 1 | 8 |
| `page-content-main` | instance |  | 3 | 1 | 1 |
| `product-info-tabs` | instance |  | 3 | 4 | 1 |
| `promo-announcement-bar` | global |  | 3 | 2 | 1 |
| `promo-scrolling-marquee` | instance |  | 3 | 3 | 9 |
| `cart-page-main` | instance |  | 2 | 1 | 1 |
| `editorial-highlight-text-image` | instance |  | 2 | 2 | 1 |
| `global-quick-view` | global |  | 2 | 1 | 1 |
| `product-showcase-related` | instance |  | 2 | 2 | 1 |
| `blog-list-main` | instance |  | 1 | 2 | 1 |
| `global-compare-drawer` | global |  | 1 | 0 | 1 |
| `product-showcase-favorites` | instance |  | 1 | 3 | 1 |
| `product-showcase-grid-featured` | instance |  | 1 | 4 | 2 |
| `product-showcase-grid-plp` | instance |  | 1 | 3 | 1 |
| `product-showcase-recently-viewed` | instance |  | 1 | 1 | 1 |
| `search-results` | instance |  | 1 | 1 | 1 |
| `global-predictive-search` | global |  |  | 0 | 1 |
