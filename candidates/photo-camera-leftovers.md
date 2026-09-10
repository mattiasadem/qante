# Photo Camera leftovers / adaylar

*Store (walk):* https://photography-online-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/photo-camera-best-camera-store-shopify-2-0-theme  
*Tema (görülen, uydurulmadı):* **Photo-camera-v-1-5-0-latest-updates-new** · `schema_name` **Photo camera** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `168518320375` · role `main`  
*Shopify.shop:* `photography-online-store.myshopify.com`  
*Tarih:* 2026-09-10

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: photo-camera-storefront-password  
Gerekçe: `/` 302 → `/password`. Vendor ürün sayfası public `1`. Aynı host. Başka vitrin yok.  
Örnekler: https://photography-online-store.myshopify.com/password  
Öneri: leftover — vendor demo kilidi  
Karar: onay bekliyor

---

ADAY: photo-camera-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Theme Store listing id uydurulmadı.  
Örnekler: https://photography-online-store.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: photo-camera-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` GET THE NEWSLETTER GET 10% OFF — h=0 kapalı. Submit/PII yoklandı değil.  
Örnekler: https://photography-online-store.myshopify.com/  
Öneri: leftover — PII pop  
Karar: onay bekliyor

---

ADAY: photo-camera-wishlist-compare  
Gerekçe: Header Wishlist → `/pages/wishlist` (No products were added…). Compare → `/pages/compare` (There are no products available to compare). Favori/compare şeması yok. Tıklanmadı.  
Örnekler: https://photography-online-store.myshopify.com/pages/wishlist  
Öneri: leftover — wishlist/compare  
Karar: onay bekliyor

---

ADAY: photo-camera-pdp-related-empty  
Gerekçe: `#…__related-products` h≈136, başlık/ürün yok. `product-showcase-related` yazılmadı.  
Örnekler: https://photography-online-store.myshopify.com/products/melcam-hd-digital-camera  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: photo-camera-pdp-zero-section  
Gerekçe: `#…__172137309121bf68f7` h=0.  
Örnekler: Melcam / Lexar product template  
Öneri: leftover — boş wrapper  
Karar: onay bekliyor

---

ADAY: photo-camera-cart-footer-empty  
Gerekçe: `#…__cart-footer` boş sepetken h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://photography-online-store.myshopify.com/cart  
Öneri: leftover — boşken 0px  
Karar: onay bekliyor

---

ADAY: photo-camera-alt-layouts  
Gerekçe: `/pages/about-layout-1`…`4`, `/pages/contact-layout-1`…`4`, collection-layout-1…3 yürünmedi. Envanter typical about-us / contact / accessories.  
Örnekler: https://photography-online-store.myshopify.com/pages/about-layout-1  
Öneri: leftover — ekstra preset layout  
Karar: onay bekliyor

---

ADAY: photo-camera-account-login  
Gerekçe: Header Log in → `/account/login`. Hesap yoklandı/giriş yok.  
Örnekler: https://photography-online-store.myshopify.com/account/login  
Öneri: leftover — PII / hesap  
Karar: onay bekliyor

---

ADAY: photo-camera-newsletter-submit  
Gerekçe: Footer `#ContactFooter` / JOIN NOW + SUBSCRIBE. Submit yok (PII).  
Örnekler: https://photography-online-store.myshopify.com/  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: photo-camera-demo-copy-drift  
Gerekçe: Home rich_text “staying cool…hot weather”; about/PDP multicolumn “handcraft clothes”; FAQ giyim soruları; testimonials kamera sitesi. Demo kopya sapması.  
Örnekler: https://photography-online-store.myshopify.com/  
Öneri: leftover — demo kopya  
Karar: onay bekliyor

---

ADAY: photo-camera-hamburger-1440-hidden  
Gerekçe: `header-drawer data-breakpoint=tablet`. 1440 hamburger summary 0×0. Drawer yalnız 375/768.  
Örnekler: https://photography-online-store.myshopify.com/  
Öneri: leftover — breakpoint  
Karar: onay bekliyor
