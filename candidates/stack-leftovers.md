# Stack leftovers

*Kaynak (resmi walk URL):* https://retailer-mass.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/stack  
*Tema gözlemi:* **retailer/mass** · `schema_name` Stack · `schema_version` **1.0.2** · `theme_store_id` **null** · theme id `150759768247` · role `main`  
`Shopify.shop` = `retailer-mass.myshopify.com`  
*Preset klasör:* `default` = Mass. Workbench / Gardenia / Setup / Lager **yürülmedi**.

## Canlı tema vs Theme Store

- Vitrin `Shopify.theme.theme_store_id` **null**. Theme Store listing ID yazılmadı.
- `schema_version` **1.0.2** — canlı Mass kopya. Başka sürüm uydurulmadı.
- Resmi walk URL yalnız `retailer-mass.myshopify.com`.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `/pages/about-us`, `/pages/contact-us` | 404 (aynı 404 kabuğu). Yaşayan: `/pages/about`, `/pages/contact`. |
| `/blogs/blog`, `/blogs/journal` | 404. Blog = `/blogs/news`. |
| `/pages/features` | Tema satış (5 presets, countdown, cart drawer… reklam). Walk dışı leftover. |
| Header **Contact** | `/pages/contact` — sayfa envanter; header tık yok. |
| Header Account | Yok / dur. |
| Announcement Country/region + Language | leftover. Footer locale aynı. |
| Newsletter Subscribe / contact Send | PII — dur. |
| Checkout / CartDrawer Checkout / Buy it now | dur. |
| Quick View (kart + lookbook) | leftover. Interact listesinde yok. |
| PDP sticky ATC | Kesite sızıyor; ayrı observation yok. |
| PDP Share | leftover. |
| PDP `slideshow_7ek7nD` | Metinsiz 3 görsel — `hero-slideshow` + delta. |
| About `media_banner_kWU7RD` | Metin yok, h=656. Leftover görsel. |
| Home/PLP/about/FAQ/cart **multicolumn** tekrarı | Home yazıldı. |
| Newsletter tekrarı (about/FAQ/blog/PDP) | Collections band yazıldı. |
| FAQ Show More | leftover. |
| Mobile Equipment chevron | `<a href=/collections/all>` kaçış — leftover. |
| PLP facet/sort interact | DOM’da var; walk zorunlu interact değil. |
| `/collections/all` | Aynı PLP şablonu (`cardio` çekildi; 31 vs 8 stok). |
| `/search?q=shirt` | 0 sonuç. Katalog `bike` yazıldı. |
| Ski Trainer Machine | Varyantsız. Interact PDP = Indoor Cycling Bike Color. |
| Policy pages | walk dışı; page-content kabuğu. |
| Workbench / Gardenia / Setup / Lager | Kullanıcı: bu PR’de yok. |

## Aday (yeni şema yok)

- **products_tabs** → `product-showcase-tabs` + delta.
- **media_cards** (home 2 promo) → `promo-grid-banner`.
- **media_cards** (PDP KEY FEATURES) → `features-multicolumn`.
- **product_markers** → `media-lookbook-banner` (kare hotspot + ürün slayt).
- **social_media** → `media-shop-the-feed` (pin yok).
- **featured_ticker** → `promo-scrolling-marquee`.
- **specifications** → `product-info-tabs`.
- **media_banner** → `editorial-image-with-text-overlay`.
- **404** → `page-content-main` + delta. `pageType` 404 listede yok.
- **search / cart / collections / blog-list** klasörleri taksonomi `pageTypes` dışında (diğer temalarla aynı pratik).

## Interact notları

- Mega: `a.header__menu-item[aria-label='Equipment']` hover 1440. Tıklama `/collections/all` kaçar.
- Predictive: katalog `bike`. 1440 `a.header__input-opener--wrapper` + `#Search-In-Modal-primary`. 375/768 `a.header__icon--search.multi-row` + `#Search-In-Modal-icons`.
- 375 **ve** 768 hamburger 24×24. 1440 hamburger 0×0.
- Cart drawer `#CartDrawer`. ATC Indoor Cycling Bike Black $849. Qty `button.quantity__button[name=plus]`.
- PDP Color `label.color-swatch[for=template--20149681553591__main-product-1-1-8552502689975]` Gray.
