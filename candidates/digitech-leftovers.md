# Digitech leftovers / adaylar

*Store (walk):* https://digital-gallery-shop.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/digital-gallery-shop-shopify-digital-gallery-themes-shopify-2-0  
*Tema (görülen, uydurulmadı):* **Digital Gallery Shop V-1.5.0** · `schema_name` **Digital gallery shop** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `143567782103` · role `main`  
*Shopify.shop:* `digital-gallery-shop.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: digitech-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Shopify Theme Store listing yok.  
Örnekler: https://digital-gallery-shop.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: digitech-storefront-password  
Gerekçe: Title `Digital Gallery Shop (password: 1)`. Vendor ürün sayfasında demo password `1`. Aynı host `/password` — başka vitrin yok.  
Örnekler: https://digital-gallery-shop.myshopify.com/password  
Öneri: leftover — public storefront unlock  
Karar: onay bekliyor

---

ADAY: digitech-newsletter-popup  
Gerekçe: Overlay-group newsletter-popup DOM'da. Canlıda zenon/popup overlay tıklamayı keser; `dismiss-overlays.mjs` kapatır. PII — submit yok.  
Örnekler: overlay-group `newsletter-popup`  
Öneri: leftover — Speedo newsletter overlay  
Karar: onay bekliyor

---

ADAY: digitech-wishlist-compare  
Gerekçe: Header `0 Wishlist` + `0 Compare`. `/pages/wishlist` ve compare drawer mevcut; ayrı şema yok.  
Örnekler: header chrome  
Öneri: leftover — wishlist/compare chrome  
Karar: onay bekliyor

---

ADAY: digitech-country-language-bar  
Gerekçe: Header üst şerit: 6 ülke/para + 4 dil seçici (Canada CAD, UK GBP, US USD, English, Français…). `navigation-header-mega` delta'da not; ayrı şema yok.  
Örnekler: `#shopify-section-sections--18138755563735__header` üst localization  
Öneri: leftover — localization chrome  
Karar: onay bekliyor

---

ADAY: digitech-desktop-hamburger  
Gerekçe: 1440'da mega olsa da hamburger görünür (`Details-menu-drawer-container`). Desktop drawer + mega birlikte.  
Örnekler: 1440 header  
Öneri: leftover — desktop drawer coexistence  
Karar: onay bekliyor

---

ADAY: digitech-digital-product-no-variants  
Gerekçe: PDP'lerde size/color swatch yok; yalnız qty. `product-info-main` interact `changed` = qty 1→2.  
Örnekler: PDP digital-planner-email-templates-for-digital-branding  
Öneri: leftover — digital SKU davranışı  
Karar: onay bekliyor

---

ADAY: digitech-cart-footer-split  
Gerekçe: Dawn `#…__cart-items` + `#…__cart-footer` ayrı. Boşken footer h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://digital-gallery-shop.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: digitech-custom-announcement-bar  
Gerekçe: Cart/404'te `custom_announcement_bar_bb4t4c` h=92 boş şerit. Ana announcement değil.  
Örnekler: cart page section-group  
Öneri: leftover — boş custom bar  
Karar: onay bekliyor
