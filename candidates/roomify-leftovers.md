# Roomify leftovers / adaylar

*Store:* https://pandora-furniture.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Pandora-furniture V-1.5.0** · `schema_name` **Pandora_furniture** · `schema_version` **1.5.0** · `theme_store_id` **null** · role `main` · id `140750651549` · shop `pandora-furniture.myshopify.com`  
*Vendor listing:* https://speedothemes.com/products/speedo-furniture-shopify-theme-os-2-0 — Speedo Themes · Roomify (Furniture)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: roomify-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Vendor Speedo (Theme Store resmi değil). `schema_name` **Pandora_furniture** · `schema_version` **1.5.0**. Slug `roomify` görevden; vitrin adı Pandora-furniture.  
Örnekler: https://pandora-furniture.myshopify.com/  
Öneri: leftover — listing id yok  
Karar: onay bekliyor

---

ADAY: roomify-password-wall  
Gerekçe: Host `/password` duvarı. Vendor ürün sayfasında demo şifre `1`. Aynı host; başka demo uydurulmadı. Observation `storefrontPassword: "1"`.  
Örnekler: https://pandora-furniture.myshopify.com/password  
Öneri: leftover — public storefront unlock  
Karar: onay bekliyor

---

ADAY: roomify-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. E-posta popup.  
Örnekler: home footer group sibling  
Öneri: leftover — PII / 0-size  
Karar: onay bekliyor

---

ADAY: roomify-pdp-empty-section  
Gerekçe: `#shopify-section-template--17748080263325__16572629707050636d` h=0.  
Örnekler: https://pandora-furniture.myshopify.com/products/thompson-bed  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: roomify-cart-footer-empty  
Gerekçe: `#shopify-section-template--17748079542429__cart-footer` boş cart’ta h=0. Satırlar `cart-items`.  
Örnekler: https://pandora-furniture.myshopify.com/cart  
Öneri: leftover — Dawn cart-footer  
Karar: onay bekliyor

---

ADAY: roomify-about-iwt-repeats  
Gerekçe: About 100% Ethical yazıldı. Sibling 100% Real / 100% Quality / 100% There For You aynı IWT.  
Örnekler: https://pandora-furniture.myshopify.com/pages/about-us  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: roomify-faq-page-404  
Gerekçe: `/pages/faq` = 404 kabuğu (`page-content-main`). FAQ accordion yalnız home.  
Örnekler: https://pandora-furniture.myshopify.com/pages/faq  
Öneri: leftover — sayfa yok  
Karar: onay bekliyor

---

ADAY: roomify-wishlist-account  
Gerekçe: `/pages/wishlist` + header Log in `/account/login`. Hesap / PII.  
Örnekler: header utility  
Öneri: leftover — dur  
Karar: onay bekliyor

---

ADAY: roomify-header-no-mega  
Gerekçe: `.mega-menu` 0. Shop = `details#Details-HeaderMenu-2`. Interact 1440: Home Office / Living room / kitchen / Bedroom / Small furniture — kolon/görsel yok.  
Örnekler: header Shop  
Öneri: leftover — mega yok; dropdown kanıtlandı  
Karar: onay bekliyor

---

ADAY: roomify-home-tab-empty-panels  
Gerekçe: Trendy Collection `home-page-tab`. NEW ARRIVALS `#…-tab-2` display:none; iç HTML CSS dump (ürün yok). Click / probe piksel değiştirmedi.  
Örnekler: https://pandora-furniture.myshopify.com/ home product-showcase-tabs  
Öneri: leftover — boş sekme paneli  
Karar: onay bekliyor

---

ADAY: roomify-buy-it-now-checkout  
Gerekçe: PDP BUY IT NOW + drawer checkout. Ödeme.  
Örnekler: Thompson Bed  
Öneri: leftover — dur  
Karar: onay bekliyor
