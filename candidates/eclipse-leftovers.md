# Eclipse leftovers

*Kaynak (resmi walk URL):* https://eclipse-theme-ripple.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/eclipse  
*Tema gözlemi:* **ripple-v5-1-2** · `schema_name` Eclipse · `schema_version` 5.1.2 · `theme_store_id` **null** · theme id `152737448101`  
`Shopify.shop` = `eclipse-theme-ripple.myshopify.com`

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id uydurulmadı.
- `schema_name` **Eclipse** (Dawn/Horizon değil; Fluorescent ailesi). role `main`.
- Preset klasörü `default` = Ripple walk URL (`eclipse-theme-ripple.myshopify.com`).
- Demo içerik: Petit Pli (footer credit).

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `/pages/about` | 404. About = `/pages/about-us` |
| `/pages/contact-us` | 200 ama `/pages/contact` ile aynı şablon (form+FAQ). Walk = `/pages/contact` |
| Account / `a.header__button--account` `/account` | Header + olası drawer — dur |
| Checkout | Drawer + cart + announcement SPRINGNOW — tıklanmadı |
| Newsletter THE WEEKLY / footer Newsletter / contact Send | PII — submit yok |
| Overlay `popups` | 0px kapalı. Signup PII — dur |
| Home boş rich-text (`wLV7gw`, `Lk6EpU`, `ii4Xph`, `NDNqeE`) | Metin yok / ~80–120px |
| PLP `rich_text_Rhkyq6` | 61px boş |
| About boş `rich_text_nfk3WQ` | 61px boş |
| About `multi_column_UGLRCG` | 903px, heading yok — leftover |
| About `scrolling_content_UpyLxc` | Made in London marquee — home tipi, ayrı capture yok |
| About `rich_text_2` / `rich_text_y3YHUL` | Metin var; home/about rich-text zaten envanterde |
| PDP `rich_text` / `multi_column` / `video_V8CMax` / `multi_column_gydLFa` / `image_hero_67hgaF` | Home tiplerinin tekrarı — ayrı capture yok |
| PDP Color sibling swatch | `button.swatch[aria-label=Red]` → `/products/versatile-jacket-red`. Size dropdown kullanıldı |
| Size Guide overlay | PDP leftover |
| Add a gift (Bean Wax / Computer Engineering) | PDP leftover |
| Sticky ATC | Kesite sızıyor; ayrı observation yok |
| Lookbook hotspot / Shop the look tık | `shop_the_look_*` envanterde; overlay leftover |
| Choose options / quick-add | Kart overlay. Interact listesinde yok |
| Mobile submenu `changed` | 375/768 Shop chevron; alt menü açılmadı |
| PLP filtre / sort | Kidswear 71 — interact zorunlu değil |
| `/collections/all-products` | Aynı PLP şablonu (`childwear` çekildi) |
| `/collections/all` | 200; merchandised PLP = childwear |
| `/pages/technology`, sustainability, our-materials, size-guide, gift-guide-2025, capsule-wardrobes-for-kids | Sitemap; walk dışı |
| `/blogs/guides` | Guides blog; walk = `/blogs/news` + Flagship post |
| Locale / region | yoklandı değil |

## Aday (yeni şema yok)

- **shoppable_feed** — müşteri görünüm + Shop the look. `media-shop-the-feed` + delta.
- **shop_the_look** — lookbook + Add. `media-lookbook-banner` + delta.
- **featured_links** — sayı etiketli kategori satırı. `collection-nav-icon-buttons` + delta.
- **video_hero** — SALE/GIFTS. `media-video-hero` + delta.
- **scrolling_content** — marquee. `promo-scrolling-marquee` + delta.
- **list-collections** — `collection-nav-grid`.
- **404 template** — taxonomy `pageTypes` içinde yok. `page-content-main` + delta.
- **predictive-search-drawer** — `dialog[data-fluco-dialog=predictiveSearchDrawer]`. `global-predictive-search` + delta.
- **cart-drawer** — `dialog[data-fluco-dialog=cartDrawer]`. `global-cart-drawer` + delta.
- **navigation checkbox hamburger** — `label.navigation__control` / `#navigation-control`. `global-menu-drawer` + delta.

## Interact notları

- Shop mega: `a.submenu__link.submenu__parent-item[href='/collections/all-products']` hover 1440. Tıklama `/collections/all-products`'a kaçar.
- Predictive: opener `a.header__button--search[data-action=show-predictive-search-drawer]`. Input `#search-input--sections--20338290458789__predictive-search-drawer`. katalog `jacket`.
- Cart: `a.cart-button[data-action=show-cart-drawer]` → `dialog[data-fluco-dialog=cartDrawer]`. ATC UI / `/cart/add.js` fallback. Checkout tıklanmadı.
- 1440 hamburger 0px. 375/768 `label.navigation__control`. Account dur.
- PDP: Size `select#option1` Small→Large. $146 aynı. Color sibling URL değiştirir — kullanılmadı.
