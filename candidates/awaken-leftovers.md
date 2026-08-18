# Awaken leftovers / adaylar

*Store:* https://awaken-store-newdemo.myshopify.com  
*Theme Store:* https://themes.shopify.com/themes/awaken  
*Tema (görülen, uydurulmadı):* **Awaken** · `schema_name` **Awaken** · `schema_version` **1.0.0** · `theme_store_id` **null** · id `128258572334` · role `main` · shop `awaken-store-newdemo.myshopify.com`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: awaken-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. `schema_name` Awaken, `schema_version` 1.0.0, name `Awaken`. Sayısal Theme Store id uydurulmadı. Listing https://themes.shopify.com/themes/awaken.  
Örnekler: https://awaken-store-newdemo.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: awaken-announcement-in-header  
Gerekçe: Ayrı announcement-bar section yok. “At Essence Aura, we believe that fragrance…” header `.xo-header-base` içinde (224px). `promo-announcement-bar` yazılmadı.  
Örnekler: home `.xo-header-base`  
Öneri: leftover — header chrome  
Karar: onay bekliyor

---

ADAY: awaken-header-zero-wrapper  
Gerekçe: Home `#shopify-section-sections--15827504398382__header` 0px (absolute overlay). İç sayfada aynı id 224px. Observation selector `.xo-header-base`.  
Örnekler: https://awaken-store-newdemo.myshopify.com/  
Öneri: leftover — wrapper 0px  
Karar: onay bekliyor

---

ADAY: awaken-mega-template-sections  
Gerekçe: `__mega_menu_AApBnx` ve `__mega_menu_gczKaP` `<template>` 0px. Panel header’a enjekte. Ayrı observation yok.  
Örnekler: header-group  
Öneri: leftover — template host  
Karar: onay bekliyor

---

ADAY: awaken-menu-1440-hamburger  
Gerekçe: 1440 `.xo-menu-hamburger-icon` 0×0. Drawer yalnız 375/768.  
Örnekler: `xo-modal.xo-menu-hamburger-base__modal`  
Öneri: leftover — 1440 hamburger yok  
Karar: onay bekliyor

---

ADAY: awaken-quick-view  
Gerekçe: `#shopify-section-sections--15827504431150__quick-view` 0px, “Select options”. Walk’ta açılmadı.  
Örnekler: overlay-group  
Öneri: leftover — kapalı quick view  
Karar: onay bekliyor

---

ADAY: awaken-popup-promo  
Gerekçe: `xo-popup-promo` / `__popup_promo_QRBeKY` 0px. Görsel marquee-home2 + See more → /collections/bodycare. PII/e-posta dur.  
Örnekler: overlay  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: awaken-floating-sidebar  
Gerekçe: `xo-floating-sidebar` fixed sağ ~52×98, #top. Şema yok.  
Örnekler: home 1440  
Öneri: leftover — chrome  
Karar: onay bekliyor

---

ADAY: awaken-mobile-dock  
Gerekçe: `xo-mobile-dock` `d:none@md`, home’da 0px (xo-hidden). Linkler `/` + `/account/login`. Account dur.  
Örnekler: 375  
Öneri: leftover — dock / PII  
Karar: onay bekliyor

---

ADAY: awaken-about-empty-WUPmYi  
Gerekçe: About `#…__section_WUPmYi` ~1000px, metin/img yok (muhtemel CSS bg). Observation yazılmadı.  
Örnekler: https://awaken-store-newdemo.myshopify.com/pages/about-us  
Öneri: leftover — boş/bg kutu  
Karar: onay bekliyor

---

ADAY: awaken-collections-countdown-dup  
Gerekçe: `/collections` `__section_eYY8mU` home countdown ile aynı metin (WHEN YOU CHOOSE ESSENKE…). Home `promo-banner-countdown` yazıldı; index tekrar edilmedi.  
Örnekler: https://awaken-store-newdemo.myshopify.com/collections  
Öneri: leftover — duplicate  
Karar: onay bekliyor

---

ADAY: awaken-collections-spacer  
Gerekçe: `__section_nMUgAw` 24px boş.  
Örnekler: /collections  
Öneri: leftover — spacer  
Karar: onay bekliyor

---

ADAY: awaken-search-filter-sibling  
Gerekçe: Search `__main` sibling (Fragrance / Dispenser type / Occasion / Season / Material). Observation `main_search` tabs+count.  
Örnekler: /search?q=amber  
Öneri: leftover — facet sibling  
Karar: onay bekliyor

---

ADAY: awaken-collections-all  
Gerekçe: `/collections/all` aynı PLP tipi + banner. for-women yazıldı.  
Örnekler: https://awaken-store-newdemo.myshopify.com/collections/all  
Öneri: leftover — duplicate PLP  
Karar: onay bekliyor

---

ADAY: awaken-404-routes  
Gerekçe: Aynı 404 (`#…__main`): `/pages/about`, `/pages/contact`, `/pages/faq`. Observation `not-found/page-content-main`.  
Örnekler: https://awaken-store-newdemo.myshopify.com/pages/about  
Öneri: leftover — route kaydı  
Karar: onay bekliyor

---

ADAY: awaken-feature-pages  
Gerekçe: Nav Features: `/pages/basic`, `/pages/banners`, `/pages/blog`, `/pages/collections`, `/pages/products`, `/pages/storytelling`, `/pages/home-2`…`home-6`. Walk dışı.  
Örnekler: https://awaken-store-newdemo.myshopify.com/pages/basic  
Öneri: leftover — tema vitrin sayfaları  
Karar: onay bekliyor

---

ADAY: awaken-sticky-atc  
Gerekçe: PDP `xo-sticky-cart` / sticky variant modal (ikinci Size 30/50/100). `product-info-main` buy box. Sticky ayrı yazılmadı.  
Örnekler: /products/the-devil-s-kiss  
Öneri: leftover — sticky chrome  
Karar: onay bekliyor

---

ADAY: awaken-buy-it-now  
Gerekçe: PDP `Buy it now` / accelerated checkout. Checkout envanter dışı.  
Örnekler: /products/the-devil-s-kiss  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/pages/about`  
`/pages/contact`  
`/pages/faq`

---

## Bilinçli atlananlar

- `/account/login` — auth  
- Checkout / Buy it now / cart Check out  
- Newsletter / contact form submit (PII)  
- Features demo pages (basic/banners/home-2…)  
- `/collections/all` (aynı PLP tipi)  
- Policy pages (privacy/shipping/terms)  
- Quick view / popup promo  
