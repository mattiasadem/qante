# CRO / funnel section tipleri

Viewer **CRO** sekmesi (`?view=cro`) bu kapalı tipi tarar. Status walk listesi değil — envanterde hangi funnel bloğunun durduğuna bakmak için katalog.

**Sayılar (on-disk şema, `_template` hariç):** 65 şema · **11 CRO** · **54 vitrine** · **18 awaiting**

Kaynak: `viewer/lib/cro-schemas.mjs` (schemaId allowlist). Sınıflandırıcı: `viewer/lib/cro.mjs`. `kategori` section ailesidir, “bu CRO mu?” değildir. Yeni tema yürüyüşü yok.

## Kapalı tip id’leri

**17 katalog:** `one-feature` · `us-vs-them` · `reviews-testimonials` · `whats-inside` · `back-in-stock` · `how-its-made` · `sneak-peeks` · `one-benefit` · `recipes` · `bestsellers-trending` · `faqs-qnas` · `product-guides` · `before-after` · `myth-vs-fact` · `sourcing` · `product-comparison` · `lets-talk-numbers`

**Extras:** `quiz` · `lead-capture` · `countdown` · `guarantee` · `ugc-grid` · `ingredients` · `bundle`

`bundle` extras’a eklendi: `commerce-tools-products-bundle` dönüşüm aracı ve 17’de yeri yok.

## Allowlist kuralı

1. Şema `cro` → tek tip (aşağıdaki grup).
2. Şema `vitrine` → CRO filtresi **eşleşmez** (başlıkta “Bestsellers” / “Recipes” olsa bile).
3. Keyword fallback **yalnız** allowlist’te olmayan (yetim) `schemaId` için. Chrome / PDP buy-box adları o yolda da atlanır.

Boş tip UI’da kalır: **henüz yok** — o tipin henüz ayrı şeması yok (editorial/grid reuse). Leftover keyword’ü vitrine şemaya geri bağlama.

## CRO şemaları (11)

| type | schemaId |
|---|---|
| `before-after` | `before-after-slider` |
| `bundle` | `commerce-tools-products-bundle` |
| `countdown` | `promo-banner-countdown` |
| `faqs-qnas` | `faq-collapsible-tabs` |
| `lead-capture` | `lead-capture-form` · `lead-capture-newsletter-band` |
| `product-comparison` | `comparison-quick-table` |
| `quiz` | `product-finder-quiz` |
| `reviews-testimonials` | `testimonial-quote-carousel` |
| `ugc-grid` | `media-shop-the-feed` · `media-scrolling-gallery` |

Katalogda şeması olmayan tipler (henüz yok): `one-feature` · `us-vs-them` · `whats-inside` · `back-in-stock` · `how-its-made` · `sneak-peeks` · `one-benefit` · `recipes` · `bestsellers-trending` · `product-guides` · `myth-vs-fact` · `sourcing` · `lets-talk-numbers` · extras `guarantee` · `ingredients`.

## Vitrine şemaları (54)

Chrome: `cart-page-main` · `footer-columns-newsletter` · `global-cart-drawer` · `global-compare-drawer` · `global-menu-drawer` · `global-predictive-search` · `global-quick-view` · `navigation-breadcrumbs` · `navigation-header-mega` · `search-results`

PDP commerce (buy box, CRO tipi değil): `product-info-main` · `product-info-tabs`

Hero / promo: `hero-slideshow` · `media-lookbook-banner` · `media-lookbook-slider` · `media-mosaic-grid` · `media-video-hero` · `promo-announcement-bar` · `promo-banner-tabs` · `promo-grid-banner` · `promo-scrolling-marquee` · `promo-spotlight-tab`

Editorial / blog: `blog-list-main` · `blog-post-main` · `editorial-custom-content` · `editorial-dynamic-grid` · `editorial-highlight-text-image` · `editorial-image-with-text` · `editorial-image-with-text-overlay` · `editorial-images-scroll` · `editorial-layered-images` · `editorial-rich-text` · `editorial-timeline` · `page-content-main`

Features / trust / basın: `features-multicolumn` · `features-slider-multicolumn` · `social-proof-brand-logos` · `trust-contact-icon-band` · `trust-icon-row`

Koleksiyon + ürün vitrini: `collection-banner` · `collection-nav-banners` · `collection-nav-cards` · `collection-nav-grid` · `collection-nav-icon-buttons` · `collection-nav-image-cards` · `collection-nav-slider` · `collection-nav-tabs` · `product-showcase-favorites` · `product-showcase-featured` · `product-showcase-grid-featured` · `product-showcase-grid-plp` · `product-showcase-recently-viewed` · `product-showcase-related` · `product-showcase-tabs`

## Awaiting user approval (18)

Default seçildi; emin olunamayanlar. Onay sonrası allowlist’i düzelt.

| schemaId | default | Neden |
|---|---|---|
| `media-scrolling-gallery` | cro / `ugc-grid` | Amac UGC/galeri; aynı şerit düz vitrin galerisi de oluyor. |
| `media-shop-the-feed` | cro / `ugc-grid` | UGC shop-the-look CRO; bazı kullanımlar lookbook / recipes sayfası vitrini. |
| `comparison-quick-table` | cro / `product-comparison` | Güçlü iş karşılaştırma tablosu; birkaç gözlem us-vs-them kopyası. |
| `promo-banner-countdown` | cro / `countdown` | Şema işi geri sayım; bir coming-soon landing aynı zamanda sneak-peeks. |
| `commerce-tools-products-bundle` | cro / `bundle` | Paket builder net CRO; `bundle` orijinal 6 extra’da yoktu. |
| `lead-capture-newsletter-band` | cro / `lead-capture` | Sayfa ortası bant CRO; ikinci footer gibi durabiliyor. |
| `trust-icon-row` | vitrine | Kargo/iade/garanti ikonları şüphe düşürür; extras ikon satırını guarantee saymaz. |
| `social-proof-brand-logos` | vitrine | Basın logosu (yorum yok) vitrine kuralı; `social-proof` ≠ reviews. |
| `product-info-main` | vitrine | PDP buy box; sticky ATC / scarcity / accordion ayrı şemaya bölünmedi. |
| `product-info-tabs` | vitrine | PDP sekmeleri sık How to use / Ingredients; split uydurulmadı. |
| `product-showcase-grid-featured` | vitrine | Genel featured grid; birçok gözlem bestsellers başlığı. |
| `product-showcase-tabs` | vitrine | Sekmeli vitrin; Best Sellers çoğu kez sekme etiketi. |
| `blog-list-main` | vitrine | Blog chrome; tarif hub’ı bu listeyi reuse ediyor. |
| `features-multicolumn` | vitrine | Genel fayda ızgarası; what's-inside / ingredients / rehber / rakam reuse. |
| `editorial-image-with-text` | vitrine | Editorial split; how-it's-made / sourcing / how-to reuse. |
| `page-content-main` | vitrine | Generic sayfa gövdesi; guarantee sayfaları bunu reuse ediyor. |
| `hero-slideshow` | vitrine | Hero vitrine; birkaç slayt back-in-stock kopyası, scarcity section değil. |
| `promo-spotlight-tab` | vitrine | Kenar teklif sekmesi scarcity olabilir; tip/şema yok. |

## 17 tip (sözlük)

| id | EN | TR | Ne arar |
|---|---|---|---|
| `one-feature` | One Feature | Tek özellik | Tek özellik bloğu — çok kolonlu features-benefits değil |
| `us-vs-them` | Us vs Them | Biz vs onlar | us vs them / vs classic / stack up |
| `reviews-testimonials` | Reviews & Testimonials | Yorum / sosyal kanıt | `testimonial-quote-carousel` |
| `whats-inside` | What's Inside? | İçinde ne var | what's inside metni veya URL |
| `back-in-stock` | Back In Stock | Stoka döndü | Stoka dönüş duyurusu (PDP/PLP rozeti değil) |
| `how-its-made` | How It's Made | Nasıl üretiliyor | how it's made / craftsmanship editorial |
| `sneak-peeks` | Sneak Peeks | Ön izleme | sneak peek / coming soon teaser |
| `one-benefit` | One Benefit | Tek fayda | Tek fayda bloğu — genel features ızgarası değil |
| `recipes` | Recipes | Tarif / kullanım | Tarif hub / yazı (nav Recipes değil) |
| `bestsellers-trending` | Bestsellers & Trending | Çok satan / trend | Vitrin başlığı bestsellers / trending |
| `faqs-qnas` | FAQs & QnAs | SSS | `faq-collapsible-tabs` |
| `product-guides` | Product Guides | Ürün rehberi | How to use / how it works / product guide |
| `before-after` | Before & After | Önce / sonra | `before-after-slider` |
| `myth-vs-fact` | Myth vs Fact | Efsane vs gerçek | myth vs fact / efsane vs |
| `sourcing` | Sourcing | Kaynak / tedarik | sourcing / tedarik editorial (alıntı değil) |
| `product-comparison` | Product Comparison | Ürün karşılaştırması | `comparison-quick-table` |
| `lets-talk-numbers` | Let's Talk Numbers | Rakamlar | percentage_stats / by the numbers |

## Diğer funnel

quiz · lead-capture · countdown · guarantee · ugc-grid · ingredients · bundle

Leftover aday notları (şeması yazılmamış quiz/ingredients/recipes/…) allowlist’te vitrine kalan şemadan eşleşme üretmez — sonraki şema veya onay.
