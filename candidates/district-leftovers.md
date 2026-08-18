# District leftovers

*Kaynak:* https://district-theme-demo.myshopify.com/  
*Tema gözlemi:* **LIVE - district/live/district-theme-demo** · `schema_name` District · `schema_version` **7.1.1** · `theme_store_id` **null**  
theme id `122133119029` · role `main` · shop `district-theme-demo.myshopify.com`

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id uydurulmadı.
- `schema_name` **District** · `schema_version` **7.1.1**. role `main`.
- Preset klasörü `default` = resmi demo vitrin.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `/pages/about`, `/pages/contact`, `/pages/faq` | 404. Yaşayan: `/pages/about-us`, `/pages/contact-us`, `/pages/faqs` |
| `/blogs/journal`, `/blogs/blog` | 404. Blog = `/blogs/news` |
| `header-top` | Utility: Search / USD / Log in / Create account / Cart. Şema yok; leftover |
| `custom_liquid_w7ik7A` | h=0 |
| PDP `product-recommendations` | h=0 ilk ziyarette |
| Cart `cart-footer` | Boşken h=0. Dolu: special instructions + terms + CHECK OUT — leftover |
| Cart drawer | Yok. `#cart-button` ve ATC `/cart` sayfasına gider |
| 768 hamburger | `button.header-top__menu` display:none. Masaüstü nav (SHOP mega) |
| Newsletter popup JOIN & SAVE | E-posta — dur. Capture dismiss |
| District Updates şerit | 375 predictive açıkken altta e-posta barı — PII, dur |
| Footer Newsletter GO / contact SEND / blog comment | PII — dur |
| Header Log in / Create account | `/account` — dur |
| Currency USD $ | leftover |
| Buy it now / SIZE GUIDE | leftover |
| `/pages/theme-features` | Tema satış; walk dışı |
| `/pages/lookbook` | Home preview CTA. Walk dışı leftover |
| Iceland CTA `href=#` | ölü link |
| Shop the look hotspot tık | leftover |
| Mobile Shop chevron | kaçış riski — leftover |
| PLP facet/sort interact | Filtre DOM’da; walk zorunlu değil |
| Slideshow autoplay | 3vp farklı slayt (Gather / New Classics) — tek kare |

## Aday (yeni şema yok)

- **header-top utility** — search opener + cart link + currency. Overlay/aday.
- **looks / Shop The Look** → `media-shop-the-feed` (Instagram kartları).
- **gallery 5 kart** → `collection-nav-image-cards` (1 kart blog).
- **FAQs** → `page-content-main` (accordion yok).
- **404** → `page-content-main` + delta. `pageType` 404 listede yok.
- **search / cart / collections / blog-list** klasörleri taksonomi `pageTypes` dışında (diğer temalarla aynı pratik).

## Interact notları

- Mega: `#DetailsMenu-header-menu-1 > summary` hover + `forceOpen` details. Tıklama sayfaya kaçabilir. 1440 açık kare: 5 kolon CLOTHING / WOMENS / EVERYDAY CARRY / WORKSPACE / TEES + görsel.
- Predictive: `button.header-top__search` → `#PredictiveSearch`. Katalog `shirt` → Do A Lot With A Little $28. `dismiss-overlays` `#ModalPredictiveSearch > div.fixed` üzerine display:none basıyor; adımda `forceOpen` ile geri alındı.
- 375 hamburger `button.header-top__menu` → `.menu-drawer` (Shop chevron / Best Sellers / Blog / About / More + Log in). 768/1440 hamburger yok — tek 375 PNG.
- Cart: ATC `#AddToCart-template--17215441403957__product` → `/cart`. Empty: Your cart is empty. Filled: Enjoy The Journey COLOR BLACK SIZE SMALL qty 1 $28. Qty plus → 2 / $56. CHECK OUT tıklanmadı.
- PDP Color: `label.swatch-item__label[for='template--17215441403957__product-1-1']` White. $28 aynı; görsel siyah→beyaz tisort.
