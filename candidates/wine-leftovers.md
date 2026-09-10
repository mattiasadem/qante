# Wine leftovers / adaylar

*Store:* https://wineshop-online-store.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Wine-v-1-5-0-new** · `schema_name` **Wine** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `142703067292` · role `main` · shop `wineshop-online-store.myshopify.com`  
*Unlock:* vendor-published password `1` (ürün sayfası + `/password`)  
*Tarih:* 2026-09-10

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: wine-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Theme Store id uydurulmadı.  
Örnekler: https://wineshop-online-store.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: wine-vendor-published-demo-password  
Gerekçe: Speedo ürün sayfası demo password `1`. Public storefront unlock; hesap değil. Capture `scripts/unlock-storefront.mjs` host map.  
Örnekler: https://speedothemes.com/products/wine-best-wine-store-shopify-2-0-theme  
Öneri: leftover — yayınlanmış demo şifresi  
Karar: onay bekliyor

---

ADAY: wine-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. PII, dur.  
Örnekler: overlay-group newsletter-popup  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: wine-home-map  
Gerekçe: Home `#…__map_XxftPg` 552px, metin boş, `iframe` harita. Mağaza haritası şeması yok; `editorial-custom-content` zorlanmadı.  
Örnekler: https://wineshop-online-store.myshopify.com/  
Öneri: leftover — harita kabı  
Karar: onay bekliyor

---

ADAY: wine-pdp-reviews  
Gerekçe: PDP `#…__17575803848ed9ffe8` Customer Reviews 4.50 / 2 reviews. Ürün yorum şeması yok; `testimonial-quote-carousel` zorlanmadı.  
Örnekler: `/products/ridge-vineyard-bohemian-bliss-natural-red-wine`  
Öneri: leftover — yorum kabı  
Karar: onay bekliyor

---

ADAY: wine-pdp-no-variants  
Gerekçe: Bohemian Bliss ve örneklenen diğer PDP’lerde `variant-radios` yok. `changed` varyant yok; qty + sekme.  
Örnekler: `/products/ridge-vineyard-bohemian-bliss-natural-red-wine`  
Öneri: leftover — demo varyantsız  
Karar: onay bekliyor

---

ADAY: wine-cart-footer-empty  
Gerekçe: `/cart` `#…__cart-footer` boşken h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://wineshop-online-store.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: wine-wishlist-compare-empty  
Gerekçe: `/pages/wishlist` “No products were added to your wishlist.” `/pages/compare` “There are no products available to compare.” Header sayaç 0. App/commerce overlay; yeni şema yok.  
Örnekler: /pages/wishlist · /pages/compare  
Öneri: leftover — boş app sayfası  
Karar: onay bekliyor

---

ADAY: wine-404  
Gerekçe: `/this-page-does-not-exist-qante` “404 · Page not found · Back To Homepage · Continue Shopping”. `#…__main` 356px. `page-content-main` zorlanmadı. `/pages/about` ve `/pages/about-us` de 404.  
Örnekler: 404 template  
Öneri: leftover — 404 kabı  
Karar: onay bekliyor

---

ADAY: wine-placeholder-fashion-copy  
Gerekçe: PDP/about “handcraft clothes”, FAQ “styles I want”, Our Story “[Brand Name] fashion-forward”, hero-altı smoothie metni. Demo kopyası şarap vitrine uymuyor.  
Örnekler: home image_banner_9XKg9z · PDP multicolumn · /pages/our-story  
Öneri: leftover — demo kopyası  
Karar: onay bekliyor

---

ADAY: wine-menu-drawer-1440-zero  
Gerekçe: `summary.header__icon--menu` 1440’te 0×0 beklenir. Open yalnız 375/768.  
Örnekler: home hamburger  
Öneri: leftover — masaüstü drawer host yok  
Karar: onay bekliyor

---

ADAY: wine-cart-you-may-like  
Gerekçe: Cart drawer boş ve dolu hâlinde YOU MAY LIKE (Dolcetto 2018… / dolu 1440 overlay). Upsell; `global-cart-drawer` şemasına alan eklenmedi.  
Örnekler: `#CartDrawer` empty + filled  
Öneri: leftover — drawer upsell  
Karar: onay bekliyor

---

ADAY: wine-plp-mobile-filters  
Gerekçe: 375 PLP `Filters` butonu; Dry checkbox `Filter-filter.v.t.shopify.wine-sweetness-mobile-1`. 1440 sidebar `changed` kanıtlı; 375/768 drawer çekilmedi.  
Örnekler: `/collections/red-wine`  
Öneri: leftover — mobil filtre  
Karar: onay bekliyor
