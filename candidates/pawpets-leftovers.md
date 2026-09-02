# PawPets leftovers / adaylar

*Store (walk):* https://petz-online-store-2.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/pawpets-shop-best-shopify-pet-themes-store-os-2-0  
*Tema (görülen, uydurulmadı):* **Mightypetz V-1.5.0** · `schema_name` **Mightypetz** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `171030774048` · role `main`  
*Shopify.shop:* `petz-online-store-2.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: pawpets-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo üçüncü taraf; Theme Store id uydurulmadı. Künye `Mightypetz` (ürün adı PawPets).  
Örnekler: https://petz-online-store-2.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: pawpets-storefront-password  
Gerekçe: Demo `/password` duvarı. Vendor ürün sayfasında yayınlanan şifre `1`. Bu hostta girildi; başka host uydurulmadı.  
Örnekler: https://petz-online-store-2.myshopify.com/password  
Öneri: leftover — public storefront-unlock  
Karar: onay bekliyor

---

ADAY: pawpets-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` / `.zenon_popup`. Get the newsletter Get 10% off + Subscribe. PII, dur. Görünür kutu kapanınca `body.popup-active` kalırsa tüm tıklamalar BODY'ye gider (search/menu/hero). Capture `img.close_popup` + class kaldırma.  
Örnekler: home overlay  
Öneri: leftover — gizli popup + pointer trap  
Karar: onay bekliyor

---

ADAY: pawpets-related-products-empty  
Gerekçe: PDP `#…__related-products` h≈136, kart/görsel yok.  
Örnekler: https://petz-online-store-2.myshopify.com/products/max-omega-3-soft-chews-for-dogs  
Öneri: leftover — boş related  
Karar: onay bekliyor

---

ADAY: pawpets-contact-map  
Gerekçe: Contact `#…__c4395b90…` h=266, innerText boş (muhtemel harita embed).  
Örnekler: https://petz-online-store-2.myshopify.com/pages/contact  
Öneri: leftover — boş/harita  
Karar: onay bekliyor

---

ADAY: pawpets-policy-no-main  
Gerekçe: `/policies/privacy-policy` yalnızca announcement + header + footer + popup. Policy gövde `shopify-section` değil.  
Örnekler: https://petz-online-store-2.myshopify.com/policies/privacy-policy  
Öneri: leftover — policy gövde yok  
Karar: onay bekliyor

---

ADAY: pawpets-wishlist  
Gerekçe: `/pages/wishlist` `#…__main` — No products were added to your wishlist. Wishlist şeması yok; hesap/PII değil ama tip yok.  
Örnekler: https://petz-online-store-2.myshopify.com/pages/wishlist  
Öneri: leftover — wishlist sayfası  
Karar: onay bekliyor

---

ADAY: pawpets-cart-footer-empty  
Gerekçe: `/cart` `#…__cart-footer` h=0 (Estimated total) boş sepetken. Dolu state interact.  
Örnekler: https://petz-online-store-2.myshopify.com/cart  
Öneri: leftover — boş footer section  
Karar: onay bekliyor

---

ADAY: pawpets-pdp-countdown-in-buybox  
Gerekçe: Buy box içinde `⚡ Ending In:` — ayrı `promo-banner-countdown` section değil. product-info-main delta.  
Örnekler: Max Omega-3 PDP  
Öneri: leftover — buy box timer  
Karar: onay bekliyor

---

ADAY: pawpets-quick-view-yok  
Gerekçe: Kartlarda Choose options / Add to cart / wishlist. `global-quick-view` DOM'da yok.  
Örnekler: home featured  
Öneri: leftover — QV yok  
Karar: onay bekliyor

---

ADAY: pawpets-account-login  
Gerekçe: Header Log in → customer_authentication. Hesap yoklandı değil.  
Örnekler: header  
Öneri: leftover — hesap  
Karar: onay bekliyor
