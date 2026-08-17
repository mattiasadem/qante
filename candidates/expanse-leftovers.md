# Expanse leftovers

*Kaynak:* https://expanse-theme-furniture.myshopify.com/  
*Yasak:* https://expanse-theme.myshopify.com/ — password wall, kullanılmadı.  
*Tema gözlemi:* **expanse/classic/production** · `schema_name` Expanse · `schema_version` 6.1.0 · `theme_store_id` **null** · theme id `138453090501`

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id uydurulmadı.
- `schema_name` **Expanse** (Dawn/Horizon değil). role `main`.
- Preset klasörü `default` = Furniture vitrin.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `/pages/about`, `/pages/about-us` | 404. About = `/pages/our-story` |
| `/pages/contact` | 404. Contact = `/pages/contact-us` |
| `/blogs/journal` | 404. Blog = `/blogs/news` |
| Newsletter popup (`__newsletter-popup`) | yükseklik 0 — gizli. PII, dur |
| Account / login | Header Account — dur |
| Checkout | drawer/sayfa Check out — tıklanmadı |
| Newsletter Subscribe / contact Send / blog comment | PII — dur |
| `/pages/theme-features` | Tema satış sayfası; walk dışı leftover |
| `/pages/our-services` | `/pages/our-story` ile aynı şablon (aynı section id) — ayrı walk yok |
| Our-story ilk blok (`__162799838289542160`) | 518px, metin yok — muhtemel görsel/harita; kanıtsız şema yok |
| Blog sidebar (`__sidebar`) | Explore more / Popular posts / share — leftover, zorlanmadı |
| PDP `recently-viewed` / `more-products-collection` / `collection-return` | yükseklik 0 ilk ziyarette |
| Cart `recently-viewed` | yükseklik 0 |
| PLP countdown (`__53849aa3-…`) | yalnız 12 DAYS sayaç; home/PDP countdown zaten envanterde |
| Quick shop / `#QuickShopModal` | kart + lookbook overlay. Interact listesinde yok; leftover |
| Hotspot tık | Shop the look + → Quick shop. Overlay leftover |
| Mobile submenu `changed` | Expand submenu görüldü; akordeon açılmadı |
| Map “View map” | lokasyon kartı; map şeması yok |

## Aday (yeni şema yok)

- **header cart dropdown** — `.site-header__drawer.site-header__cart` (yan drawer değil). `global-cart-drawer` + delta.
- **header-drawer mobile nav** — `header-drawer.site-header__mobile-nav` (Impulse `#NavDrawer` değil). `global-menu-drawer` + delta.
- **featured-collections 12 kart** — `collection-nav-image-cards` items.max 8; canlı 12. Delta.
- **Catalog `/collections`** — onlarca koleksiyon satırı; `collection-nav-grid` max 16. Delta.
- **404 template** — taxonomy `pageTypes` içinde yok. `page-content-main` + delta + Popular picks featured.
- **vendor-products** — More from Kikkerland → `product-showcase-related.2`.

## Interact notları

- Homestyle mega: `details#site-nav-item--1` + `summary` (`data-link=/collections/homestyle`) — tıklama sayfaya kaçar; yalnız hover.
- Predictive: katalog `chair` (OH Chair $75). Üç `input#Search`; fill görünür olanı alır.
- Cart: `#HeaderCartTrigger` → header dropdown. ATC sonrası otomatik açılır. Qty `.js-qty__adjust--plus`.
- 1440 hamburger yok (masaüstü nav). 375/768 `button.mobile-nav-trigger` resmi.
- PDP Size: Small $25 → X-Large $40 (Save $10, Low stock 4).
