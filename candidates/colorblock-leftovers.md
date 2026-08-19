# Colorblock leftovers

*Kaynak:* https://theme-colorblock-demo.myshopify.com  
*Tema gözlemi:* `[Colorblock] Theme store demo (latest)` · `schema_name` Dawn 4.0.0 · `theme_store_id` **null**

## Tema kimliği

- Beklenen Theme Store id **1376** canlı `Shopify.theme.theme_store_id` alanında yok (null).
- `schema_name` Dawn — Colorblock Dawn üstü first-party demo.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `cart-drawer` | Yok. Cart ikon `#cart-icon-bubble` → `/cart`. ATC sonrası `cart-notification` popup (header içinde). Drawer şemasına zorlanmadı. |
| `product-recommendations` | PDP `#…__product-recommendations` yükseklik 0 — boş leftover. |
| `/pages/faq` | 404 |
| `/pages/about` | 404; about = `/pages/about-us` |
| `/policies/*` | Nav/footer'da yok |
| Account / login | Header'da yok — dur |
| Checkout | `Check out` butonu cart-footer'da; tıklanmadı |
| Newsletter / contact / blog comment submit | PII — dur |
| `theme_store_id` 1376 | Gözlemlenmedi |

## CRO disk şemaları — envanterde yok (interact yapılmadı)

| schemaId | Durum |
|---|---|
| `before-after-slider` | Demo'da section yok |
| `commerce-tools-products-bundle` | Bundle UI yok |
| `promo-banner-countdown` | Countdown yok (`promo-announcement-bar` statik metin) |
| `faq-collapsible-tabs` | FAQ sayfası 404; accordion section yok |
| `comparison-quick-table` | Karşılaştırma tablosu yok |
| `product-finder-quiz` | Quiz flow yok |
| `testimonial-quote-carousel` | Testimonial carousel yok |
| `media-shop-the-feed` | Shop-the-feed / UGC grid yok |
| `media-scrolling-gallery` | Yatay scroll gallery yok |

## CRO interact — PII sınırı

| schemaId | State | Not |
|---|---|---|
| `lead-capture-newsletter-band` | initial 3vp | Email fill + Subscribe submit dur → `input` missing |
| `lead-capture-form` | initial 3vp | Name/Email/Phone/Comment fill + Send dur → `input` missing |

## Aday (yeni şema yok)

- **cart-notification** — Dawn ATC popup. `global-cart-drawer` değil (drawer yok). Overlay adayı; şema açılmadı.
- **404 template** — taxonomy `pageTypes` içinde yok. `page-content-main` + delta.
