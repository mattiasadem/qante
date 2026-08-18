# Stiletto leftovers

*Kaynak (resmi walk URL):* https://stiletto-theme-vogue.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/stiletto  
*Tema gözlemi:* **stiletto-v6-1-0** · `schema_name` Stiletto · `schema_version` 6.1.0 · `theme_store_id` **null** · theme id `160008405141`  
`Shopify.shop` = `stiletto-theme-vogue.myshopify.com`

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id uydurulmadı.
- `schema_name` **Stiletto** (Dawn/Horizon değil). role `main`.
- Preset klasörü `default` = Vogue walk URL. Theme Store listing hâlâ `stiletto-theme-vogue.myshopify.com` gösteriyor.
- **301:** `stiletto-theme-vogue.myshopify.com` → `stiletto-theme-stiletto.myshopify.com` (`x-redirect-reason: primary_domain_redirection`). Aynı shop, aynı theme JSON. Gözlem URL’leri resmi Vogue host’ta bırakıldı.
- Theme Store preset isimleri (listing): stiletto / luster / linen / glimmer / tapestry. **Vogue ayrı preset path yok**; kullanıcı `default (Vogue)` dedi, klasör `default`.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `/pages/about` | 404. About = `/pages/about-us` |
| `/pages/contact-us` | 404. Contact = `/pages/contact` |
| Newsletter popup (`data-section-type=popup`, `data-is-signup=true`) | yükseklik 0 (scroll-delay 75). PII — dur |
| Account / login | Header’da yok veya dur |
| Checkout | drawer/sayfa Check out — tıklanmadı |
| Footer / popup Subscribe, contact SUBMIT, blog comment | PII — dur |
| `/pages/lookbook`, `/pages/shoppable-sections`, `/pages/theme`, grids/heros/promos… | Tema satış / section demo sayfaları; walk dışı leftover |
| `/pages/fit-guide`, `/pages/size-guide`, `/pages/stockists` | Walk dışı leftover |
| About 80px boş rich-text (`rich_text_ki99Er`, `rich_text_TyWcVm`) | Metin yok; şema yok |
| FAQ `promotion-bar` (“DIDN'T FIND YOUR ANSWER?” / CONTACT US) | CTA bant; `cta-band` şeması yok. leftover |
| PDP `scrolling-content` END OF SEASON SALE | Home’da zaten envanter |
| PDP sticky ATC | Kesite sızıyor; ayrı observation yok |
| Quick view / Choose options overlay | Kart + lookbook. Interact listesinde yok; leftover |
| Mobile submenu `changed` | 375/768 expander görülebilir; alt menü açılmadı |
| SECTIONS mega | Tema satış linkleri; hover/tık yok |
| `/collections/all` | Aynı PLP şablonu (`dresses-1` çekildi). Ayrı walk yok |

## Aday (yeni şema yok)

- **shoppable-hero** — video/görsel + ürün rayı. `media-video-hero` / `media-lookbook-banner` + delta.
- **shoppable-videos** — `media-shop-the-feed` + delta.
- **sales-banner / grid** — `promo-grid-banner` + delta.
- **scrolling-text-banner** — görselli marquee. `promo-scrolling-marquee` + delta.
- **gallery-carousel** — özellik slaytları. `features-slider-multicolumn` + delta.
- **list-collections** — `collection-nav-grid` (max 16; canlı sayı PNG).
- **404 template** — taxonomy `pageTypes` içinde yok. `page-content-main` + delta.
- **quick-cart** — overlay modal. `global-cart-drawer` + delta.
- **#MainQuickSearch** — overlay. `global-predictive-search` + delta.
- **header menu modal** — `button[data-js-menu-button]`. `global-menu-drawer` + delta.

## Interact notları

- CLOTHING mega: `[data-meganav-handle=clothing]` `<a href=/collections/all-clothing-1>` — tıklama sayfaya kaçar; yalnız hover.
- Predictive: opener `a[data-search][aria-controls=MainQuickSearch]`; `input#search` kapalıda 0px. katalog `dress`.
- Cart: `a[data-js-cart-icon=cart]` → `.quick-cart`. ATC Behati ADD TO BAG. Checkout tıklanmadı.
- 1440 hamburger yok (masaüstü nav). 375/768 `button[data-js-menu-button]`.
- PDP Size: XS seçili $249 → S chip. Color yok.
