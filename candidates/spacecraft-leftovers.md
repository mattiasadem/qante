# Spacecraft leftovers / adaylar

*Kaynak:* https://pandora-furniture-3.myshopify.com/  
*Ürün:* https://speedothemes.com/products/home-decor-shopify-theme  
*Tema (görülen, uydurulmadı):* **Pandora-furniture-3 V-1.5.0** · `schema_name` **pandora_furniture_3** · `schema_version` **1.5.0** · `theme_store_id` **null** · role `main` · id `170818404632`  
*Walk host / Shopify.shop:* `pandora-furniture-3.myshopify.com`  
*Listing slug:* spacecraft (Speedo)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: spacecraft-password-wall  
Gerekçe: `/` 302 → `/password`. Vendor ürün sayfasında yayınlı şifre `1`. Vitrin title “Pandora Furniture 3 (password: 1)”. Başka host yok.  
Örnekler: storefront title + `/password`  
Öneri: leftover — resmi demo kapısı  
Karar: onay bekliyor

---

ADAY: spacecraft-listing-slug-vs-schema  
Gerekçe: Speedo listing / görev slug **spacecraft**. Canlı `schema_name` **pandora_furniture_3** 1.5.0. `theme_store_id` null.  
Örnekler: `Shopify.theme`  
Öneri: leftover — slug ≠ schema_name  
Karar: onay bekliyor

---

ADAY: spacecraft-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. E-posta popup.  
Örnekler: home footer group sibling  
Öneri: leftover — PII / 0-size  
Karar: onay bekliyor

---

ADAY: spacecraft-pdp-empty-section  
Gerekçe: `#shopify-section-template--23211688493336__16572629707050636d` h=0 / boş metin.  
Örnekler: product-detail Landskrona  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: spacecraft-cart-footer-empty  
Gerekçe: `#shopify-section-template--23211687706904__cart-footer` h=0 boş sepetken. Dolu halde cart-page-main ile birlikte.  
Örnekler: `/cart` boş  
Öneri: leftover — Dawn cart-footer boşken  
Karar: onay bekliyor

---

ADAY: spacecraft-instagram-repeats  
Gerekçe: `@PandoraFurniture` media-shop-the-feed home’da envanterlendi; contact / our-story / faqs aynı şerit tekrar. Ayrı observation yazılmadı.  
Örnekler: `0d314181…` · `395b258d…` · `e078f0f2…`  
Öneri: leftover — tekrar chrome  
Karar: onay bekliyor

---

ADAY: spacecraft-living-room-redirect  
Gerekçe: `/collections/living-room` home şablonuna düştü (aynı home section id’leri). PLP olarak `/collections/all` + `/collections/home-office-decor` kullanıldı.  
Örnekler: living-room → home DOM  
Öneri: leftover — koleksiyon handle home’a düşüyor  
Karar: onay bekliyor

---

ADAY: spacecraft-wishlist  
Gerekçe: `/pages/wishlist` “No products were added…”. Wishlist uygulaması; ayrı şema yok.  
Örnekler: header Wishlist  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: spacecraft-account-checkout-newsletter  
Gerekçe: Log in / Check out / BUY IT NOW / footer Subscribe — PII / ödeme. Tıklanmadı.  
Örnekler: header Log in · cart Check out · footer GET THE NEWSLETER  
Öneri: leftover — dur  
Karar: onay bekliyor
