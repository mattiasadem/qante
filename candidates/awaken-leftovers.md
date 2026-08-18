# Awaken leftovers / adaylar

*Store:* https://awaken-store-newdemo.myshopify.com  
*Theme Store:* https://themes.shopify.com/themes/awaken  
*Tema (görülen, uydurulmadı):* **Awaken** · `schema_name` **Awaken** · `schema_version` **1.0.0** · `theme_store_id` **null** · id `128258572334` · role `main` · shop `awaken-store-newdemo.myshopify.com`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

**Capture özeti:** 32 observation · 106 PNG · 0 yeni `sections/*.json`  
Resmi 3vp. Interact pixel-check yazıldı. `theme_store_id` uydurulmadı.

---

ADAY: awaken-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. `schema_name` Awaken, `schema_version` 1.0.0, name `Awaken`. Sayısal Theme Store id uydurulmadı. Listing https://themes.shopify.com/themes/awaken.  
Örnekler: https://awaken-store-newdemo.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: awaken-announcement-in-header  
Gerekçe: Ayrı announcement-bar section yok. “At Essence Aura, we believe that fragrance…” 768/1440 header `.xo-header-base` içinde. 375’te announcement yok. `promo-announcement-bar` yazılmadı.  
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

ADAY: awaken-menu-768-1440-hamburger  
Gerekçe: 768 ve 1440 yatay Shop/Features/Blog. `.xo-menu-hamburger-icon` boundingBox null. Drawer yalnız 375 (yoklama 24×24).  
Örnekler: `xo-modal.xo-menu-hamburger-base__modal`  
Öneri: leftover — hamburger yok  
Karar: onay bekliyor

---

ADAY: awaken-menu-drawer-zero-png  
Gerekçe: Resmi `capture-interaction` 375 hamburger 2 deneme — modal zero-size. 0 menu PNG. Yoklama Shop/Features/Blog gördü; resmi kare yok. 3. deneme yok. Shop `<a href="/">` tık sayfaya kaçar.  
Örnekler: `observations/awaken/default/home/global-menu-drawer.json`  
Öneri: leftover — missing open  
Karar: onay bekliyor

---

ADAY: awaken-search-375-768  
Gerekçe: Predictive overlay yalnız 1440. 375/768 Search tık `#predictive-search` hidden. 2 deneme. 3. yok.  
Örnekler: `global-predictive-search`  
Öneri: leftover — missingStates  
Karar: onay bekliyor

---

ADAY: awaken-quick-view  
Gerekçe: `#shopify-section-sections--15827504431150__quick-view` 0px, “Select options”. Walk’ta açılmadı. PLP/cart kartında göz ikonu var.  
Örnekler: overlay-group  
Öneri: leftover — kapalı quick view  
Karar: onay bekliyor

---

ADAY: awaken-popup-promo  
Gerekçe: `xo-popup-promo` zamanlayıcı / scroll sonrası “Get 20% off your first order” + See more / Close. `dismiss-overlays` Close’u **w>200** diye atlar (geniş buton). prepareClick Close 0px iken yanlış Close’a gidebilir. PII/e-posta dur.  
Kirli resmi kareler (örnek): home collection-nav 1440 (1 recapture hâlâ kirli), lookbook 1440, featured-2 1440, footer 1440, PLP 1440, about overlay 1440, contact 1440, blog-list 1440, 404 1440+375. Erken home (hero / IWT / featured-1 / quotes / countdown) temiz.  
Örnekler: overlay  
Öneri: leftover — timed popup  
Karar: onay bekliyor

---

ADAY: awaken-floating-sidebar  
Gerekçe: `xo-floating-sidebar` fixed sağ ~52×98, ay / #top. Countdown 1440 karesinde görüldü. Şema yok.  
Örnekler: home 1440  
Öneri: leftover — chrome  
Karar: onay bekliyor

---

ADAY: awaken-mobile-dock  
Gerekçe: `xo-mobile-dock` 375 PDP karesinde buy box üstünde: Home / Menu / Search / Cart / Account. Account dur.  
Örnekler: PDP 375  
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
Gerekçe: Search `__main` sibling (Fragrance / Dispenser type / Occasion / Season / Material). Observation `main_search` tabs+count (“2 results found for amber”).  
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
Gerekçe: PDP `xo-sticky-cart` / sticky variant (ikinci Size 30/50/100, 0px). `product-info-main` buy box. Sticky ayrı yazılmadı.  
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

ADAY: awaken-cart-drawer-empty-desktop  
Gerekçe: Drawer empty open 768/1440 resmi capture zero-size `#xo-cart-mini` (2 deneme). 375 boş kare var. 3. yok.  
Örnekler: `global-cart-drawer`  
Öneri: leftover — missingStates  
Karar: onay bekliyor

---

ADAY: awaken-cart-drawer-qty-fill  
Gerekçe: Drawer qty input fill `"2"` rakamı değiştirir; Subtotal $239 kalır. Plus karede var. 2. deneme fill; 3. yok. Cart **sayfa** plus → $478.  
Örnekler: `#xo-cart-mini`  
Öneri: leftover — fill commit etmez  
Karar: onay bekliyor

---

ADAY: awaken-pdp-50ml-desktop  
Gerekçe: Size 50ml yoklama $259. Resmi changed: 375 $259; 768/1440 kare 30ml $239 (2. deneme, dosya ≈ initial). 3. yok.  
Örnekler: `product-info-main`  
Öneri: leftover — 768/1440 changed  
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
- Quick view  
- Popup See more / e-posta  
- Menu nested / 3. capture denemeleri  
