# Envy leftovers

*Kaynak:* https://eight-boho-demo.myshopify.com/  
*Tema gözlemi:* **New Account Component - 9.6.26** · `schema_name` Envy · `schema_version` **36.0.4** · `theme_store_id` **null**  
theme id `143200747586` · role `main` · shop `envy-oslo.myshopify.com`

## Canlı tema vs Theme Store

- Vitrin `Shopify.theme.theme_store_id` **null**. Theme Store listing ID yazılmadı.
- `schema_version` **36.0.4** — canlı JSON’dan; uydurulmadı.
- Resmi walk URL yalnız `eight-boho-demo.myshopify.com` (Boho). `Shopify.shop` `envy-oslo.myshopify.com` (aynı vitrin, farklı shop handle).

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `/pages/about`, `/pages/about-us` | 404 (aynı 404 kabuğu). Yaşayan: `/pages/about-us-new` |
| `/pages/contact`, `/pages/faq` | 404. Yaşayan: `/pages/contact-us`, `/pages/faqs` |
| `/blogs/news`, `/blogs/journal` | 404. Blog = `/blogs/blog` |
| `#shopify-section-…__offers-drawer` | h=0 overlay. Offers drawer — leftover |
| `video_popup_EeRkKL` | h=0. Video popup — leftover |
| Home `footer-bottom` | © 2026 + USD $ + payment ikonları. `footer-columns-newsletter` kardeş; ayrı şema yok |
| About **Meet the team** | Daisy Anderson / Olivia Roberts / Ethan Thompson. Team şeması yok; zorlanmadı |
| Contact **Our store** map | 123 Fake St. Toronto + GET DIRECTIONS. Map şeması yok |
| PDP `product-recommendations` | 120px boş. Warmup sonrası da zayıf — leftover |
| Size guide drawer `#SizeGuideDrawer` | PDP Size guide — overlay leftover |
| Theme Features `/pages/theme-features` | Tema satış sayfası; walk dışı leftover |
| Size guide `/pages/size-guide`, Lookbook `/pages/lookbook` | Footer link; walk dışı |
| Header **Account** | `/account` — dur |
| Header **USD $** | Locale/currency — leftover |
| Newsletter Subscribe / contact Send / blog comment | PII — dur |
| Checkout / Buy it now | dur |
| PLP facet/sort interact | Filtre DOM’da var; walk zorunlu interact değil |
| Announcement Learn more | `/pages/faqs` — tıklandı sayfa olarak, bar CTA interact değil |

## Aday (yeni şema yok)

- **collage_builder** → `promo-grid-banner` / `promo-banner-countdown` / `editorial-image-with-text` (bağlama göre). Collage şeması açılmadı.
- **navigation_banner** → `collection-nav-icon-buttons` (ikon yok/zayıf).
- **shop_the_look** → `media-lookbook-slider` + delta.
- **social_proof** → `testimonial-quote-carousel` + delta.
- **list-collections** (`/collections`) → `collection-nav-grid` + delta (koleksiyon + ürün yığını, ~27k px).
- **404** → `page-content-main` + `collection-nav-image-cards`. `pageType` 404 listede yok.
- **search / cart / collections / blog-list** klasörleri taksonomi `pageTypes` dışında (diğer temalarla aynı pratik).
- **Meet the team / map / offers-drawer / video-popup** — overlay/aday; şema yok.

## Interact notları

- Mega: `ul#AccessibleNav li.mega-menu > a.site-nav__link` hover. href=`/collections` — tıklama sayfaya kaçar. Crop `#mega-menu-dropdown-shop` + forceOpen.
- Predictive: opener `a.search-button[aria-label=Search]`; fill `input.predictive-search__input[name=q]` katalog `dress` (26 sonuç sayfa).
- 375 **ve** 768 hamburger `button.hamburger-nav-button.js-drawer-open-left-link` 48×48. 1440 hamburger 0×0.
- Cart drawer `cart-drawer` (id yok). Trigger `a.js-drawer-open-right-link[aria-label=Cart]`. Qty `.js-qty__adjust--plus`.
- PDP Floral Dress Size `label[for=template--19414372581442__product-form-0-2]` = Medium. Extra Small varsayılan.
