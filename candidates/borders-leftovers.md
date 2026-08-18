# Borders leftovers (Shopify paid — Raw / default)

Walk: https://borders-theme-raw.myshopify.com/  
Theme Store: https://themes.shopify.com/themes/borders  
Slug: `borders` · Preset: `default` (Raw)

Live storefront JSON (`/?view=json` / theme object):

```json
{"name":"raw-build/raw","id":151504519457,"schema_name":"Borders","schema_version":"2.2.0","theme_store_id":null,"role":"main"}
```

`theme_store_id` **null**. Invent edilmedi.

Host: `/` 301 → `https://borders-theme-main.myshopify.com/`. Shopify.shop = `borders-theme-raw.myshopify.com`. Gözlem URL'leri walk host'ta bırakıldı.

Yeni schema **yok**. Eşleşmeyen chrome / template / 404 leftover.

## 404 (yürüyüşte denendi)

| URL | Durum |
|---|---|
| `/pages/about` | 404 — About `/pages/about-us` |
| `/pages/contact-us` | 404 — Contact `/pages/contact` |
| `/pages/faq` | 404 |
| `/pages/faqs` | 404 |
| `/pages/our-story` | 404 |
| `/blogs/blog` | 404 |
| `/blogs/journal` | 404 |
| `/pages/does-not-exist-qante-borders` | 404 — 404 şablonu envanterde (`page-content-main`) |

FAQ sayfası yok.

## Şablon / rota (ayrı gözlem yok)

| URL | Not |
|---|---|
| `/collections/all` | 200, knitwear ile aynı `main-collection` + `product-showcase-grid-plp` |
| `/products/bomber-jacket` | 200 **SOLD OUT** — PDP walk `/products/utility-overshirt` |
| `/blogs/news` | 200 — blog list |
| `/blogs/news/cute-embroidery-styles` | 200 — article |

## Home leftover (schema yok)

| Eleman | Not |
|---|---|
| `d22c6958-c00e-4c51-9d17-7c4c6f9e2e51` | RAW logo card, 0 ürün |
| `buttons_N8pp3j` | Instagram / sosyal |
| `#shopify-section-footer-bar` | 1440'te 0 yükseklik |
| `#modal-newsletter` | 0×0 — submit yok |
| Cookie popover | ACCEPT / DECLINE |
| `ROTATING-BADGES` | 1000px boş |

## Interact leftover

| Konu | Not |
|---|---|
| Mega | Playwright **hover** `.focus` eklemiyor. **Click** `#menu-item-shop-classic > a.menu-link` (href `#`) ile 800×1397 submenu. Shop dropdown'un altında **Vibrant Hues** + **City Trail AW 2025 LEARN MORE**. |
| Predictive | Drawer açılıyor; input `shirt`. **Ürün önerisi yok** (`#search-results.predictive-search` h=0). Sadece POPULAR: Bottoms / Embroidery / Outerwear / Shirts. Tam sayfa `/search?q=shirt` = 21 ürün (ayrı obs). |
| Cart drawer | PDP `addToCart` UI sık **Shopify bot challenge** ("Just a moment") — varyant id timeout. **`addToCart` + `selector: null`** → `/cart/add.js`. Drawer DOM yenilenmiyor ta ki **home reload** + `a.cart-button`. Qty: `button.qty-plus`. Checkout tıklanmadı. |
| Cart page | Qty 2'de **SALE10 −$20** otomatik (kupon yazılmadı). |
| PDP 375 | Color swatch değişti; stok metni bazen "10 left" kalıyor (1440 "Low stock 4"). |
| Menu 1440 | `.mobile-menu-button` 0×0 — 375+768 only. |

## Dur

E-posta, hesap, checkout, newsletter submit, PII — yok.
