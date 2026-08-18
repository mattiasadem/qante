# Wonder leftovers

*Kaynak:* https://wonder-theme-beauty.myshopify.com/  
*Tema gözlemi:* **wonder-theme/wonder-demo-v2.5** · `schema_name` Wonder · `schema_version` 2.5.0 · `theme_store_id` **null** · theme id `142646771912`

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id uydurulmadı.
- `schema_name` **Wonder** (Dawn/Horizon değil). role `main`.
- Preset klasörü `default` = Beauty vitrin (NETHYPE).

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `/pages/about` | 404 (`Ooops!`). About = `/pages/about-us` |
| `/pages/contact-us` | 404. Contact = `/pages/contact` |
| `/blogs/news` | Yaşıyor ama nav Blog = `/blogs/beauty`. News leftover |
| `/blogs/journal`, `/blogs/blog` | 404 |
| Home `button_*` (VIEW ALL BESTSELLER / VIEW ALL PRODUCTS) | 108–116px standalone CTA. Şema yok; leftover |
| Home logo banner on inner pages | `page_header_logo_banner` yükseklik 0 (yalnız home) |
| About `map_address` | Our Store Ottawa + GET DIRECTIONS. Map şeması yok |
| FAQ 1px separator / PLP separator | boş çizgi; observation yok |
| Newsletter popup / Subscribe | PII — dur |
| Contact form Send | PII — dur |
| Account / Log in | Header + cart “Have an account?” — dur |
| Checkout / Check out | drawer + cart CTA — tıklanmadı |
| Cart Order Note / Discount Code / Shipping calculate | leftover; APPLY/SAVE/CALCULATE yok |
| Quiz `/pages/quiz` | product-finder adayı; walk dışı leftover |
| Hot Offer / CRO `/pages/cro` | Alternative Homepage; walk dışı |
| Theme Features `/pages/theme-features` | Tema satış sayfası; walk dışı |
| Product Page CRO (Bakuchiol) | Ayrı PDP şablon (selling plan). Walk PDP = Default Body salt scrub |
| Product Page Ver 2 / Ver 3 | Nav layout linkleri; ayrı walk yok |
| `/collections/homepage-bestseller` | Bestseller PLP (slideshow + extra). Yazılan PLP = `/collections/all` |
| 1440 hamburger | İlk `.wt-header__menu-trigger` 28×42 görünür. Interact listesi 375/768; 1440 leftover |
| Localization USD / Language | Header + drawer. Locale değiştirilmedi |
| Mega Shop `<a href=/collections>` | Tıklama koleksiyon indeksine kaçar; yalnız hover |
| Mobile submenu `changed` | Shop by expander görülebilir; alt menü açılmadı (yazılı `<a>` sayfaya gider) |

## Aday (yeni şema yok)

- **header mega** — `mega-menu-section.mega-menu` + `a.wt-header__nav-teaser__link--parent`. `navigation-header-mega` + delta.
- **search-drawer** — `search-drawer.wt-drawer-search` + `#search-shop`. Overlay drawer, Impulse inline değil.
- **cart-drawer** — `#CartDrawer.wt-cart__drawer` (yan panel ~500px) + progress “Spend $ more for Free Delivery”.
- **mobile/desktop drawer-nav** — `#wt-drawer-nav` `drawer-nav.wt-drawer--mobile-nav`.
- **404 template** — taxonomy `pageTypes` içinde yok. `page-content-main` + delta (`Ooops!`).
- **shoppable_video / shoppable_image** — mevcut `media-lookbook-banner` + delta.
- **parallax-section** — 4000px+ kaydırma. `editorial-image-with-text-overlay` + delta.
- **standalone button section** — Wonder `button` section; şema açılmadı.

## Interact notları

- Shop mega: `a.wt-header__nav-teaser__link--parent[href='/collections']` — tıklama `/collections`; yalnız hover 1440.
- Predictive: opener `.wt-header__search-trigger`; fill `#search-shop` katalog `serum` (13 sonuç sayfa).
- Cart: `a.wt-cart__trigger` → `#CartDrawer`. ATC Body salt scrub otomatik açar. Qty `button.js-counter-increase`.
- PDP Size: `label[for='template--18174410653896__main-1-1']` = 300 ml. Type Cranberry varsayılan.
- 375/768 hamburger: ikinci `.wt-header__menu-trigger` (birinci 0×0). 1440 birinci görünür — leftover.
