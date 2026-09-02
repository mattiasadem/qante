# Luxora leftovers / adaylar

*Store (walk):* https://jewelry-online-shop2.myshopify.com/  
*Ürün:* https://speedothemes.com/products/luxurious-jewelry-store-shopify-theme-os-2-0  
*Tema (görülen, uydurulmadı):* **Jewelry-online-shop2 V-1.5.0** · `schema_name` **Jewelry_online_shop2** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `176034677037` · role `main`  
*Shopify.shop:* `jewelry-online-shop2.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: luxora-password-wall  
Gerekçe: GET `/` 302 `/password`. Title `Jewelry Online Shop2 (password: 1)`. Official Live Demo form on speedothemes.com POSTs password `1` to this host.  
Örnekler: https://jewelry-online-shop2.myshopify.com/password  
Öneri: leftover — official unlock, başka host yok  
Karar: onay bekliyor

---

ADAY: luxora-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo third-party; Theme Store id uydurulmadı. schema_name `Jewelry_online_shop2` (vitrin adı Luxora değil).  
Örnekler: home `Shopify.theme`  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: luxora-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. Get the newsletter Get 10% off + Subscribe. PII, dur.  
Örnekler: overlay `zenon_popup`  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: luxora-wishlist-page  
Gerekçe: `/pages/wishlist` — No products were added to your wishlist. Header 0 count. Ayrı wishlist şeması yok.  
Örnekler: https://jewelry-online-shop2.myshopify.com/pages/wishlist  
Öneri: leftover — commerce-tools adayı  
Karar: onay bekliyor

---

ADAY: luxora-cart-footer-zero  
Gerekçe: `#shopify-section-template--24163649716525__cart-footer` h=0 empty cart.  
Örnekler: `/cart`  
Öneri: leftover — boş sibling  
Karar: onay bekliyor

---

ADAY: luxora-pdp-zero-section  
Gerekçe: PDP `#…__16572629707050636d` h=0 page-width.  
Örnekler: Ponte Vecchio  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: luxora-about-us-extra-iwt  
Gerekçe: `/pages/about-us` üç ekstra Image with text (Button label) aynı tip. Yalnız bir IWT + banner + mission yazıldı.  
Örnekler: `__537f34e5…` `__eddc0a01…` `__1d1ca0ec…`  
Öneri: leftover — tekrar IWT  
Karar: onay bekliyor

---

ADAY: luxora-contact-alt-page  
Gerekçe: Footer Contact → `/pages/contact` (banner + form). Nav CONTACT US → `/pages/contact-us`. İkinci form envantere alınmadı.  
Örnekler: https://jewelry-online-shop2.myshopify.com/pages/contact  
Öneri: leftover — çift contact  
Karar: onay bekliyor

---

ADAY: luxora-faq-page-title  
Gerekçe: `/pages/faqs` `#…__main` h=160 "Faq's" title-only. FAQ gövdesi sonraki accordion.  
Örnekler: faqs main  
Öneri: leftover — ince başlık  
Karar: onay bekliyor

---

ADAY: luxora-contact-maria-instagram  
Gerekçe: contact-us Maria IWT + @JewelryShop IG — our-story / home ile aynı tipler, ikinci kopya yazılmadı.  
Örnekler: contact-us  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: luxora-account-login  
Gerekçe: `/account/login` görüldü. PII, dur.  
Öneri: leftover — hesap  
Karar: yapılmayacak

---

ADAY: luxora-sold-out-atc  
Gerekçe: Home New Arrivals kartlarında "Add to cart Sold out". Stok interact'i kısıtlar.  
Öneri: leftover — demo stok  
Karar: onay bekliyor

---

ADAY: luxora-placeholder-copy  
Gerekçe: Pandora leisure-wear, MADE FOR YOUR SHADE cosmetics, rental-closet FAQ, chupa-chups Maria, Button label. Demo içerik sapması.  
Öneri: leftover — içerik  
Karar: onay bekliyor

---

ADAY: luxora-sales-pop-toast  
Gerekçe: Birçok sayfada yüzen “Someone liked and Buy … Minutes Ago From …” toast. Section değil; envantere alınmadı.  
Örnekler: home / PDP / PLP sol alt  
Öneri: leftover — commerce-tools toast  
Karar: onay bekliyor

---

ADAY: luxora-dawn-overlay-capture  
Gerekçe: Probe'da hamburger drawer ve predictive search (`ring` SUGGESTIONS + PRODUCTS) açılıyor. `capture-interaction.mjs` 375/768/1440 karesi homepage / hidden `#Search-In-Modal-1` (çift id). Dawn transform + duplicate search ids. İki deneme; üçüncü yok.  
Öneri: leftover — overlay capture tuzağı  
Karar: onay bekliyor
