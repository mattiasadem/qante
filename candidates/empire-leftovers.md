# Empire leftovers

*Kaynak:* https://empire-demo.myshopify.com/ · *Tema:* Copy of empire-v1-4-2 · `schema_name` **Empire** · `schema_version` **1.4.2** · `theme_store_id` **null** (uydurulmadı)

Şemaya sokulmayan / durulan şeyler. Kanıtsız tip uydurulmadı. Resmi demo seyrek: 2 ürün, 3 koleksiyon, blog yazısı yok.

## Canlı tema vs Theme Store

- Vitrin `Shopify.theme.theme_store_id` **null**. Theme Store listing ID yazılmadı.
- `schema_version` **1.4.2** — güncel Pixel Union Empire major’ından eski kopya (`Copy of empire-v1-4-2`).
- `empire-theme.myshopify.com` password; walk edilmedi.

## CRO şemaları (diskte var, demo'da observation yok)

Resmi demo'da aşağıdaki CRO şemalarının hiçbiri için observation açılmadı; interact çekilmedi. HTML sınıf eşleşmeleri (footer newsletter, footer accordion) farklı şemalara ait (`footer-columns-newsletter`).

| schemaId | Demo durumu |
|---|---|
| `before-after-slider` | Yok |
| `commerce-tools-products-bundle` | Yok (`/collections/quick-order` tablo — farklı tip, aşağıda) |
| `promo-banner-countdown` | Yok |
| `faq-collapsible-tabs` | Yok (`/pages/faq` 404) |
| `lead-capture-form` | Yok |
| `lead-capture-newsletter-band` | Yok (footer newsletter `footer-columns-newsletter` olarak envanterlendi; submit duruldu) |
| `comparison-quick-table` | Yok |
| `product-finder-quiz` | Yok |
| `testimonial-quote-carousel` | Yok |
| `media-shop-the-feed` | Yok (`home-twitter-feed` placeholder — şema yok) |
| `media-scrolling-gallery` | Yok |

Ek conversion sinyalleri de yok: sticky ATC, low-stock/scarcity, quick view, reviews carousel.

## Chrome / conversion (istenip görülmeyen)

- **Mega menü yok.** 1440 nav: Home + Catalog (`/collections/all`) düz link. Kolon / promo panel yok.
- **Cart drawer yok.** Header `a.site-header-cart--button` → `/cart`. ATC sonrası sayfada kalır; mini-cart / notification yok. `global-cart-drawer` observation açılmadı.
- **Koleksiyon facet filtresi yok.** PLP’de Sort + Show 24/36/48. `emit:filter.change` tetiklenmedi; sort `changed` olarak çekildi.
- **Sticky ATC yok.** Sticky yalnız header (`body.site-header-sticky`).
- **Countdown / low-stock yok.**
- **Quick View yok.**

## Large-catalog conversion (ilginç, şema yok)

- **`/collections/quick-order`** — `main #collection` tablo: Item / SKU / Price / Qty. Super Pen “Show variants” + from $22.00; Oak $15.00. `shopify-section` yok (yalnız header+footer). `commerce-tools-products-bundle` paket builder — uymaz. Yeni tip yazılmadı.
- PLP **Show 24/36/48** (`?view=view-24` …) — sayfa başına ürün. Knob/şema yok; leftover.
- Header **para birimi** CAD/INR/GBP/USD/AUD/EUR/JPY. Locale/currency şeması yok; tıklanmadı.

## Home / içerik

- **`#shopify-section-home-twitter-feed`** — “Twitter feed / @username” placeholder. Sosyal feed şeması yok.
- Home featured + blog kartları **placeholder** (`Product title` $14.40, `Article title`, href `#`). Katalogdaki Super Pen / Oak değil.
- Promo mosaic + grid kartlarında **görsel yok**, href yok (metin kutusu).

## Sayfa / form

- `/pages/about`, `/pages/about-us`, `/pages/contact`, `/pages/contact-us`, `/pages/faq` → 404 (aynı `.fourohfour--container`).
- `/blogs/news` var; yayınlanmış yazı yok → blog-post observation yok.
- `/policies/privacy-policy` yalnız başlık “Privacy policy”. refund + terms aynı boş kabuk. shipping-policy 404.
- Newsletter **gönderilmedi** (PII). Footer “Sign Up” duruldu.
- `/account/login` duruldu (hesap/PII).
- Checkout / Calculate Shipping formu doldurulmadı.

## Taksonomi

- 404 `fourohfour--container` → `page-content-main` reuse; `pageType` 404 listede yok.
- `search` / `cart` / `collections` / `blog-list` sayfa klasörleri taksonomi `pageTypes` dışında (diğer temalarla aynı pratik).

## Açık soru

- Resmi demo mi güncel Empire vitrini mi? Canlı 1.4.2 + `theme_store_id` null. Theme Store’daki güncel Empire section seti bu kopyada yok.
