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
| Quiz `/pages/quiz` | `quiz_jhQfPz` + “What is your skin’s biggest midday cry for help?”. `product-finder-quiz` observation yok — icat edilmedi |
| Hot Offer / CRO `/pages/cro` | Alternative Homepage. `bundle_builder_M9GJaH` / shoppable_buy_all. countdown / compare section yok. Observation yok — icat edilmedi |
| Theme Features `/pages/theme-features` | Tema satış sayfası; walk dışı |
| Product Page CRO (Bakuchiol) | Ayrı PDP şablon (selling plan). Walk PDP = Default Body salt scrub |
| Product Page Ver 2 / Ver 3 | Nav layout linkleri; ayrı walk yok |
| `/collections/homepage-bestseller` | Bestseller PLP (slideshow + extra). Yazılan PLP = `/collections/all` |
| media-scrolling-gallery | Home `marquee_images` — kontrol yok (autoplay şerit). Interact yok |
| countdown / compare / bundle / quiz obs | Beauty walk’ta observation yok. `/pages/quiz` + `/pages/cro` bundle leftover; şema uydurulmadı |
| collection / PDP testimonial + PDP feed | Next çalışır; home testi + home feed aynı şema. İkinci instance leftover |
| 1440 hamburger | İlk `.wt-header__menu-trigger` 28×42 — aynı `#wt-drawer-nav`. Header mega `open` + menu drawer 1440 |
| Localization USD / Language | Header + drawer. Locale değiştirilmedi |
| Hover mega | Shop teaser hover panel açmaz. `mega-menu-section` drawer içinde x=-500 |
| Mobile/desktop submenu `changed` | Shop by `+` expander (CSS, text yok). Yazılı Shop `/collections`. Alt kolon açılmadı |
| Announcement close | Overlay dismiss/Escape + `wt-announcement-hidden`. Resmi capture 0px; 3vp `screenshot-section` dismiss olmadan |

## Aday (yeni şema yok)

- **header mega** — `mega-menu-section.mega-menu` + `a.wt-header__nav-teaser__link--parent`. `navigation-header-mega` + delta.
- **search-drawer** — `search-drawer.wt-drawer-search` + `#search-shop`. Overlay drawer, Impulse inline değil.
- **cart-drawer** — `#CartDrawer.wt-cart__drawer` (yan panel ~500px) + progress “Spend $ more for Free Delivery”.
- **mobile/desktop drawer-nav** — `#wt-drawer-nav` `drawer-nav.wt-drawer--mobile-nav`.
- **404 template** — taxonomy `pageTypes` içinde yok. `page-content-main` + delta (`Ooops!`).
- **shoppable_video / shoppable_image** — mevcut `media-lookbook-banner` + delta.
- **parallax-section** — 4000px+ kaydırma. `editorial-image-with-text-overlay` + delta.
- **standalone button section** — Wonder `button` section; şema açılmadı.

---

ADAY: wonder-cro-interact-2026-08-19  
Gerekçe: Discover-interact leftover. Var olan obs: faq-collapsible-tabs (FAQ + PDP), before-after-slider, testimonial-quote-carousel (home), media-shop-the-feed (home). lead-capture form/newsletter PII. scrolling-gallery kontrol yok. countdown / quiz / bundle / compare observation yok — icat edilmedi.  
Örnekler: `/pages/faq` · `/products/body-salt-scrub-cranberry-300-g` · home testimonials / video_reels  
Öneri: leftover — şema uydurma yok  
Karar: onay bekliyor

## Interact notları

- Mega: hover yok. 1440 hamburger → Shop by drawer (`mega-menu-section` içeride). Shop + expander leftover.
- Predictive: opener `.wt-header__search-trigger`; fill `#search-shop` katalog `serum` (13 sonuç sayfa).
- Cart: `a.wt-cart__trigger` → `#CartDrawer`. ATC Body salt scrub otomatik açar. Qty `button.js-counter-increase`.
- PDP Size: `label[for='template--18174410653896__main-1-1']` = 300 ml. Type Cranberry varsayılan.
- 375/768 hamburger: ikinci `.wt-header__menu-trigger` (birinci 0×0). 1440 birinci görünür — leftover.
- CRO leftover interact (2026-08-19): var olan obs — FAQ sayfa + PDP FAQ (`changed`), before-after After rozeti (`changed`), home testi Next (`changed`), home video_reels Next (`changed`). lead-capture form/newsletter input+submit PII dur. media-scrolling-gallery kontrol yok. collection/PDP testi + PDP feed — aynı şema, home/PDP FAQ zaten var. countdown / quiz / bundle / compare observation yok — icat edilmedi. PDP 375 FAQ karede sticky CHOOSE OPTIONS sızdı.
