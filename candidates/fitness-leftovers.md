# Fitness leftovers / adaylar

*Store:* https://fitness-online-store-1.myshopify.com/  
*Tema (görülen, uydurulmadı):* **fitness-v-1-5-0-latest-updates-new** · `schema_name` **Fitness** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `144062316591` · role `main` · shop `fitness-online-store-1.myshopify.com`  
*Vendor:* Speedo Themes (üçüncü taraf; Theme Store resmi değil)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: fitness-storefront-password  
Gerekçe: `/` 302 → `/password`. Ürün sayfası *Please enter password "1" to view demo.* Public storefront-unlock `1` — private hesap değil. Aynı host.  
Örnekler: https://fitness-online-store-1.myshopify.com/password  
Öneri: leftover — vendor demo kilidi  
Karar: onay bekliyor

---

ADAY: fitness-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Theme Store listing id uydurulmadı. `schema_name` Fitness · `schema_version` 1.5.0.  
Örnekler: https://fitness-online-store-1.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: fitness-pricing-plan  
Gerekçe: Home `#shopify-section-template--18492662186031__pricing_plan_QpaLNR` — Choose your plan / $49 $99 PER MONTH / 3–6 MONTH UNLIMITED / Buy now. Gym üyelik fiyat kartları. Taksonomide pricing/plan yok; comparison-quick-table ürün karşılaştırması. Şema açılmadı.  
Örnekler: https://fitness-online-store-1.myshopify.com/  
Öneri: leftover — aday kategori  
Karar: onay bekliyor

---

ADAY: fitness-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. GET THE NEWSLETTER GET 10% OFF. Email / PII — açılmadı, submit yok.  
Örnekler: https://fitness-online-store-1.myshopify.com/  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: fitness-no-announcement-bar  
Gerekçe: Home shopify-section listesinde announcement-bar yok. PDP `custom_announcement_bar_zqchrk` marquee olarak `promo-scrolling-marquee` yazıldı.  
Örnekler: https://fitness-online-store-1.myshopify.com/  
Öneri: leftover — home duyuru yok  
Karar: onay bekliyor

---

ADAY: fitness-quick-add-no-modal  
Gerekçe: Kartlarda Quick shop / quick-add__submit. `#QuickView` / `.quick-view` overlay yok. `global-quick-view` observation açılmadı.  
Örnekler: home Top Brand Products / PLP Add to cart  
Öneri: leftover — kart quick-add  
Karar: onay bekliyor

---

ADAY: fitness-pdp-empty-section  
Gerekçe: PDP `#shopify-section-template--18492662775855__172137309121bf68f7` h=0, metin yok.  
Örnekler: https://fitness-online-store-1.myshopify.com/products/direct-alpine-thermal-pants-tonale-lady  
Öneri: leftover — 0px placeholder  
Karar: onay bekliyor

---

ADAY: fitness-pdp-related-empty  
Gerekçe: `#shopify-section-template--18492662775855__related-products` h=128, innerText boş. `product-showcase-related` yazılmadı.  
Örnekler: aynı PDP  
Öneri: leftover — boş related  
Karar: onay bekliyor

---

ADAY: fitness-cart-footer-empty  
Gerekçe: `#shopify-section-template--18492661792815__cart-footer` boş sepetken h=0. Apply Coupon / Check out metni var, kutu 0.  
Örnekler: https://fitness-online-store-1.myshopify.com/cart  
Öneri: leftover — boşken 0px  
Karar: onay bekliyor

---

ADAY: fitness-contact-map  
Gerekçe: `/pages/contact` `#shopify-section-template--18492662448175__map_iqhHBB` h=680, metin yok (gömülü harita). Map şeması yok.  
Örnekler: https://fitness-online-store-1.myshopify.com/pages/contact  
Öneri: leftover — native/embed map  
Karar: onay bekliyor

---

ADAY: fitness-native-policy  
Gerekçe: `/policies/privacy-policy` title Privacy policy; shopify-section yalnız header/newsletter/footer. Gövde native policy kabı.  
Örnekler: https://fitness-online-store-1.myshopify.com/policies/privacy-policy  
Öneri: leftover — native policy  
Karar: onay bekliyor

---

ADAY: fitness-wishlist  
Gerekçe: `/pages/wishlist` — No products were added to your wishlist. Header/drawer wishlist. Favori şeması yok.  
Örnekler: https://fitness-online-store-1.myshopify.com/pages/wishlist  
Öneri: leftover — wishlist page  
Karar: onay bekliyor

---

ADAY: fitness-compare-page  
Gerekçe: `/pages/compare` katalogda var; walk yok. Drawer Compare link.  
Örnekler: https://fitness-online-store-1.myshopify.com/pages/compare  
Öneri: leftover — compare  
Karar: onay bekliyor

---

ADAY: fitness-account-login  
Gerekçe: Header Log in → `/account/login`. Hesap yoklandı/giriş yok.  
Örnekler: https://fitness-online-store-1.myshopify.com/account/login  
Öneri: leftover — PII / hesap  
Karar: onay bekliyor

---

ADAY: fitness-layout-demos  
Gerekçe: `/pages/about-layout-2..4`, `/pages/contact-layout-1..4`, `/pages/contact-us` (basit form), `/collections/collection-layout-1..3` — tema satış layout vitrini. Walk: about-layout-1 + `/pages/contact` + `/collections`.  
Örnekler: https://fitness-online-store-1.myshopify.com/pages/about-layout-2  
Öneri: leftover — layout demo  
Karar: onay bekliyor
