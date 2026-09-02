# Seabikini leftovers / adaylar

*Store (walk):* https://fashion-store-clean-11.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/seabikini-shopify-bikini-themes-shopify-2-0  
*Tema (görülen, uydurulmadı):* **Seabikini-v-1-5-0** · `schema_name` **Seabikini** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `171062952255` · role `main`  
*Shopify.shop:* `fashion-store-clean-11.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: seabikini-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Shopify Theme Store listing yok. Theme Store id uydurulmadı.  
Örnekler: https://fashion-store-clean-11.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: seabikini-storefront-password  
Gerekçe: Title `Fashion Store Clean 11 (password: 1)`. Vendor ürün sayfasında demo password `1`. Aynı host `/password` — başka vitrin yok. Capture `storefrontPassword: "1"`.  
Örnekler: https://fashion-store-clean-11.myshopify.com/password  
Öneri: leftover — public storefront unlock  
Karar: onay bekliyor

---

ADAY: seabikini-no-mega  
Gerekçe: `.mega-menu` yok. `header.drawer-menu` — hamburger **1440** dahil. Shop = `#menu-drawer` nested details (`#HeaderDrawer-shop`). `navigation-header-mega` yazıldı; delta: mega yok.  
Örnekler: https://fashion-store-clean-11.myshopify.com/ `#Details-menu-drawer-container`  
Öneri: leftover — mega yok / desktop drawer  
Karar: onay bekliyor

---

ADAY: seabikini-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. "Get the newsletter Get 10% off." PII, dur.  
Örnekler: overlay-group `newsletter-popup`  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: seabikini-wishlist  
Gerekçe: Header `.wishlist` → `/pages/wishlist`. "No products were added to your wishlist." Continue shopping. Wishlist şeması yok.  
Örnekler: https://fashion-store-clean-11.myshopify.com/pages/wishlist  
Öneri: leftover — wishlist sayfası  
Karar: onay bekliyor

---

ADAY: seabikini-cart-footer-split  
Gerekçe: Dawn `#…__cart-items` + `#…__cart-footer` ayrı. Boşken footer h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://fashion-store-clean-11.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: seabikini-announcement-marquee-max  
Gerekçe: Announcement 4 dönen mesaj (FREE SHIPPING / SALE 20% / 100-DAY / JOIN EMAIL). Şema `mesajlar.max` 3. Observation yazıldı; şema dokunulmadı.  
Örnekler: `#shopify-section-sections--23256779915583__c46903b8-b556-4b1c-b67b-6a54d0a61ac8`  
Öneri: leftover — slot max  
Karar: onay bekliyor

---

ADAY: seabikini-faq-alias-404  
Gerekçe: `/pages/faq` 404. Canlı FAQ `/pages/faqs`. `/pages/about` 404; about `/pages/about-us`.  
Örnekler: https://fashion-store-clean-11.myshopify.com/pages/faq  
Öneri: leftover — alias 404  
Karar: onay bekliyor

---

ADAY: seabikini-account-login  
Gerekçe: Drawer `menu-drawer__account` → `/account/login`. Auth / PII.  
Örnekler: header drawer  
Öneri: leftover — hesap  
Karar: onay bekliyor
