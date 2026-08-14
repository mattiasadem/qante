# Todo — interact geçişi (mevcut Shopify envanter)

Discover bitti. Bu dosya **yalnız kapalı kare yalanı** için: mega, arama, sepet, QV, compare, filtre, swatch, akordeon, lookbook hotspot.

Aynı chrome’u preset’te tekrar çekme (Allure drawer = diğer Prestige). Yeni şema yok. Şema uydurma / sürükleme / ödeme yok.

**Şu anki odak:** 64 şema temsilcisi interact’ten geçti. Yeni tur yok; kullanıcı istemeden chrome tekrarı / styleKnobs yok.

---

## Zaten interact (tekrarlama)

| Tema | Bileşen |
|---|---|
| Hyper default | mega · search · cart drawer · QV · featured hover · compare dolu · cart sayfa · PLP filtre · FAQ · PDP swatch · PDP tabs · slideshow · lookbook 3 etiketi · favori 1/3→2/3 · features slayt · related hover · recently-viewed dolu · footer locale + 375 Company |
| Impulse Fashion | mega · search · cart drawer · QV · featured hover · FAQ · cart sayfa · PLP filtre · shoppable hero + VIEW PRODUCT QV · PDP size |
| Impulse Dune / Terrain | lookbook / spec hotspot `changed` |
| Prestige Allure | mega · cart sayfa · cart drawer · search · PLP filtre · PDP swatch · FAQ · lookbook hotspot · WOMEN/MEN sekme · GQ/FARFETCH alıntı |
| Impact Sound | mega · search · cart drawer · featured hover · cart sayfa · PLP filtre · FAQ · PDP swatch · lookbook Read more · alıntı Next · timeline 2017 |

---

## Sıra (bir temsilci / tema)

### Prestige · Allure

- [x] `global-predictive-search` — dalia: Suggestions + 4 ürün
- [x] `product-showcase-grid-plp` — Filter çekmece + Mini bags 65→13
- [x] `product-info-main` — Ivory swatch → linked PDP
- [x] `faq-collapsible-tabs` — ilk soru açık
- [x] `media-lookbook-slider` — 1440 hotspot → Primo $420
- [x] featured hover / QV — Allure kartta QV yok; lookbook VIEW PRODUCT / Add to cart ayrı
- [x] `product-showcase-tabs` — WOMEN çanta → MEN evrak (Slim Briefcase $420)

### Impact · Sound

- [x] `product-showcase-grid-plp` — Color Galactic White → MG20 $449
- [x] `faq-collapsible-tabs` — ilk soru açık
- [x] `product-info-main` — Black swatch (768/1440; 375 sepet sızdı)
- [x] `media-lookbook-slider` — Read more → Inductive Wireless Charging

### Hyper · default

- [x] `cart-page-main` — boş koleksiyon ızgarası + Arc Chair $699
- [x] `product-showcase-grid-plp` — 1440 sidebar / 375 çekmece; Out of stock 98→2
- [x] `faq-collapsible-tabs` — ilk açık → track order
- [x] `product-info-main` — Yellow swatch, stok 3→12
- [x] `product-info-tabs` — Specifications → About Brand / Danish Design
- [x] `hero-slideshow` — Spoke Sofa → Dining & Kitchen (ok)
- [x] `media-lookbook-slider` — 3 etiketi → Shop this look (375 çekmece)
- [x] `collection-nav-tabs` — Haven tık aria değiştirmedi; changed yok
- [x] `promo-spotlight-tab` — açıcı yok; discover açık kare duruyor
- [x] `global-menu-drawer` — hamburger mega 375/768'de; tekrar yok

### Impulse · Fashion (ince)

- [x] `product-info-main` — SIZE XS → S, $286 aynı
- [x] `hero-slideshow` — atlandı: ok/nokta/changer yok (tek slayt veya gizliler)
- [x] shoppable hero VIEW PRODUCT — 1440 Lena Midi QV; 375/768 PDP'ye kaçar

---

## Bilerek dışarıda

- Newsletter popup (şema yok)
- Checkout / form gönder
- Before-after sürükleme
- Prestige drawer adet (shadow)
- Signature / Couture / Vogue / Strass chrome tekrarı
- Impulse Dune/Terrain/Apothecary chrome tekrarı (hotspot hariç)
- Impact Sound PDP swatch 375 (iki fail)
- Hyper `collection-nav-tabs` in-page sekme yok
- Hyper spotlight açıcı yok

---

## Şema boşluk turu (2026-08-14)

Temsilci + unique preset yalancıları. Tam tema yeniden yürüyüşü değil.

- [x] Allure `product-showcase-tabs`
- [x] Hyper `hero-slideshow` + `media-lookbook-slider` + `product-info-tabs`
- [x] Nexvo `promo-banner-tabs` — Headphones → Phone Cases
- [x] Ceramide `commerce-tools-products-bundle` — 512ml → 946ml
- [x] Spotlight / collection-nav-tabs / menu-drawer notları
- [x] Impact `testimonial-quote-carousel` + `editorial-timeline`
- [x] Allure `testimonial-quote-carousel` FARFETCH
- [x] Hyper `product-showcase-favorites` + `features-slider-multicolumn`

---

## Şema turu 2 (interact’siz yalancılar)

Temsilci only. Form gönder / sürükleme / chrome tekrarı yok.

- [x] Allure `product-showcase-featured` — galeri item 2 (`:has-text`); tek swatch
- [x] Hyper `search-results` — View as list (1440 satır + Choose Options)
- [x] Hyper PDP `editorial-custom-content` — pin tık popover yok; not
- [x] Fashion `media-video-hero` — play button yok; not
- [x] Allure `product-showcase-related` — QV yok; Hyper related hover temsilci; Next tık başlık değiştirmedi
- [x] Hyper `blog-list-main` — Advice & Reviews tagged URL
- [x] Allure `editorial-images-scroll` — 375 #1 DESIGN → #2 COMMITMENTS
- [x] Hyper `collection-nav-slider` — görünür ok yok; kartlar koleksiyona gider
- [x] Nexvo / Impact `comparison-quick-table` — Impact swatch PDP’ye kaçar; Nexvo statik; Hyper PDP swatch dekoratif
- [x] Ceramide `media-shop-the-feed` — play timeout (üçüncü yok; not duruyor)

---

## Şema turu 3 (kalan 30 + related/recently/footer)

Temsilci tarandı. Şema uydurulmadı. Form / kupon / ülke seçimi gönderilmedi.

### Çekilen

- [x] Hyper `product-showcase-related` — 1440 Atella Jug Choose Options
- [x] Hyper `product-showcase-recently-viewed` — boş collapse (zero-size); dolu Arc Chair $699
- [x] Hyper `footer-columns-newsletter` — locale ülke listesi; 375 Company − About us…

### Tarandı, in-page state yok (not)

- [x] collection-nav-* (slider / grid / banners / cards / icon-buttons / image-cards) — ok tık seti değiştirmedi veya kart navigate
- [x] editorial-* (dynamic-grid / highlight / image-with-text / overlay / layered / rich-text) — layered Next src değiştirmedi
- [x] media-scrolling-gallery · media-mosaic-grid · features-multicolumn
- [x] blog-post-main · collection-banner · page-content-main · navigation-breadcrumbs
- [x] promo-announcement-bar (locale footer ile aynı) · countdown (kupon yok) · grid-banner · marquee
- [x] social-proof-brand-logos · trust-icon-row · trust-contact-icon-band
- [x] lead-capture-form · lead-capture-newsletter-band — gönderilmedi
