# Boutique leftovers / adaylar

*Store (walk):* https://fashion-store-clean-10.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/clean-fashion-boutique-best-fashion-shopify-templates-o-s-2-0  
*Tema (görülen, uydurulmadı):* **Boutique-v-1-5-0** · `schema_name` **Boutique** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `170605216055` · role `main`  
*Shopify.shop:* `fashion-store-clean-10.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: boutique-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Shopify Theme Store listing yok. Theme Store id uydurulmadı.  
Örnekler: https://fashion-store-clean-10.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: boutique-storefront-password  
Gerekçe: Title `Fashion Store Clean 10 (password: 1)`. Vendor ürün sayfasında demo password `1`. Dawn `/password` alanı kapalı `<details>` içinde; `unlock-storefront.mjs` summary açıp görünür input’a yazar. Aynı host — başka vitrin yok.  
Örnekler: https://fashion-store-clean-10.myshopify.com/password  
Öneri: leftover — public storefront unlock  
Karar: onay bekliyor

---

ADAY: boutique-no-mega  
Gerekçe: `.mega-menu` yok. `header.drawer-menu` — hamburger **1440** dahil. Shop = `#menu-drawer` nested details (`#HeaderDrawer-shop`). `navigation-header-mega` yazıldı; delta: mega yok.  
Örnekler: https://fashion-store-clean-10.myshopify.com/ `#Details-menu-drawer-container`  
Öneri: leftover — mega yok / desktop drawer  
Karar: onay bekliyor

---

ADAY: boutique-newsletter-popup  
Gerekçe: Overlay-group `#shopify-section-newsletter-popup` roster’da h=0. “Get the newsletter Get 10% off.” PII — submit yok.  
Örnekler: overlay-group `newsletter-popup`  
Öneri: leftover — Speedo newsletter overlay  
Karar: onay bekliyor

---

ADAY: boutique-wishlist  
Gerekçe: Header / drawer `.wishlist` → `/pages/wishlist`. Wishlist şeması yok.  
Örnekler: https://fashion-store-clean-10.myshopify.com/pages/wishlist  
Öneri: leftover — wishlist sayfası  
Karar: onay bekliyor

---

ADAY: boutique-cart-footer-split  
Gerekçe: Dawn `#…__cart-items` + `#…__cart-footer` ayrı. Boşken footer h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://fashion-store-clean-10.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: boutique-announcement-marquee-max  
Gerekçe: Announcement 4 dönen mesaj (FREE SHIPPING / SALE 20% / 100-DAY / JOIN EMAIL). Şema `mesajlar.max` 3. Observation yazıldı; şema dokunulmadı.  
Örnekler: `#shopify-section-sections--23180236751159__c46903b8-b556-4b1c-b67b-6a54d0a61ac8`  
Öneri: leftover — slot max  
Karar: onay bekliyor

---

ADAY: boutique-faq-alias-404  
Gerekçe: `/pages/faq` 404. Canlı FAQ `/pages/faqs`. `/pages/about` ve `/pages/contact-us` 404; about `/pages/about-us`, contact `/pages/contact`.  
Örnekler: https://fashion-store-clean-10.myshopify.com/pages/faq  
Öneri: leftover — alias 404  
Karar: onay bekliyor

---

ADAY: boutique-account-login  
Gerekçe: Drawer `menu-drawer__account` → `/account/login`. Auth / PII.  
Örnekler: header drawer  
Öneri: leftover — hesap  
Karar: onay bekliyor
