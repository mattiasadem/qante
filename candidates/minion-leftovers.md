# Minion leftovers

*Kaynak:* https://minion-theme-red.myshopify.com/  
*Tema gözlemi:* **Devices 29-Jun 6a15611** · `schema_name` Minion · `schema_version` 4.2.0 · `theme_store_id` **null** · theme id `161916420354`  
*Preset:* default (Red)

Şema icat edilmedi. Storefront alanları uydurulmadı.

---

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id uydurulmadı.
- `schema_name` **Minion** · `schema_version` **4.2.0** · role `main`.
- `name` **Devices 29-Jun 6a15611** (preset klasörü `default` = Red vitrin).

---

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `/pages/about` | 404. About = `/pages/about-us` |
| `/pages/contact-us` | 404. Contact = `/pages/contact` |
| `/pages/faq` | 404. FAQ şablonu yok |
| `/blogs/journal` | 404. Blog = `/blogs/news` |
| `/blogs/blog` | 200, aynı `template--22435917299970` — ikinci blog; walk dışı leftover |
| `/pages/shipping-returns` | Header link; walk dışı leftover |
| `/pages/customer-service` | Header link; walk dışı leftover |
| `/pages/theme-features` | Tema satış sayfası; walk dışı leftover |
| Newsletter footer / blog band | input var — submit PII, dur · initial 3vp |
| Contact Submit | PII, dur · initial 3vp |
| Account / Log in / Sign in with shop | Header + 768 drawer — dur |
| Checkout / Buy it now / View Cart | drawer + PDP — tıklanmadı |
| Cart discount (`DISCOUNT` / `#cart-discount`) | dur |
| Terms checkbox | cart drawer — işaretlenmedi |
| Quick view | kart `btn-quickview` — interact listesinde yok |
| PDP `product-recommendations` / `1648018242bd6448c3` | yükseklik 0 ilk ziyarette |
| PLP `description` | yükseklik 0 |
| Cart `cart-footer` | boşken h=0; doluyken totals/checkout kardeş section — items crop dışında leftover |
| Search `q=shirt` | 0 sonuç; katalog `phone` (13) |
| Mobile submenu `changed` | Phones chevron görüldü; alt menü açılmadı |

---

## Aday (yeni şema yok)

- **tiles-menu + megamenu** — `ul.tiles-menu` + `li.submenu--megamenu`. `navigation-header-mega` + delta.
- **header cart** — `#cart-icon-bubble` Dawn `#CartDrawer`. `global-cart-drawer` + delta.
- **header-drawer mobile** — `summary.main-menu-button` + `.menu-drawer`. `global-menu-drawer` + delta.
- **404 template** — taxonomy `pageTypes` içinde yok. `page-content-main` + delta.
- **popular_categories** — 3 kolon + ürün listesi. `collection-nav-image-cards` + delta.
- **collections index** — ~28 kart; `collection-nav-grid` items.max 16. Delta.
- **cart 50% OFF** — drawer/sayfada $1,199→$600; PDP’de $1,199. Promo leftover, şema değil.

---

## Interact notları

- Phones mega: `a.tiles-menu-item[href="/collections/phones"]` hover. Tıklama `/collections/phones`.
- Predictive: 1440 `input#Search-In-Modal`; 375 `input#Search-In-Modal-mobile`. Katalog `phone`.
- Cart: `#cart-icon-bubble` / `#cart-icon-bubble--mobile` drawer. ATC UI (`filled/addToCart → ui`).
- 1440 hamburger 0×0. 375/768 `summary.main-menu-button`.
- PDP Storage: `label[for="template--22435922837762__main-2-1"]` 512GB SSD $1,899.
- Qty: `button[name=plus]` / `.quantity__button[name=plus]`.
- FAQ: `details.chm-toggle` Electronics store — kutu 299→450, URL aynı.
- Shop the Feed: 375 `button.slider__button[aria-label="Slide 2"]`; 768 `.slider-desktop__buttons__next`. 1440 ok hide.
- Hero: `li.big-slider__dots__item:nth-child(1)` Laptop PRO. Slayt `<a>` sayfa değiştirir.
- product-showcase-tabs: 4 kolon; New Arrival tık no-op.

## CRO observation yok (şema uydurulmadı)

`before-after-slider` · `commerce-tools-products-bundle` · `promo-banner-countdown` · `comparison-quick-table` · `product-finder-quiz` · `testimonial-quote-carousel` · `media-scrolling-gallery`

`social-proof-brand-logos` — `slider-component` 8 logo, tıklanır ok/nokta yok.
