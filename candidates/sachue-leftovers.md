# Sachue leftovers / adaylar

*Store:* https://pandora-beauty-store.myshopify.com  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/best-shopify-cosmetics-theme-for-product  
*Tema (görülen, uydurulmadı):* **Pandora-beauty-store-v-1-5-0** · `schema_name` **pandora_beauty_store** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `139259805895` · shop `pandora-beauty-store.myshopify.com`  
*Preset:* default · *Slug:* sachue  
*Vendor:* Speedo Themes (üçüncü taraf OS 2.0)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: sachue-storefront-password  
Gerekçe: `/` 302 → `/password`. Ürün sayfası “Please enter password 1 to view demo.” Aynı host’ta `1` ile açıldı. Title hâlâ “Pandora Beauty Store (password: 1)”.  
Örnekler: https://pandora-beauty-store.myshopify.com/ · https://speedothemes.com/products/best-shopify-cosmetics-theme-for-product  
Öneri: leftover — public demo unlock, hesap değil  
Karar: onay bekliyor

---

ADAY: sachue-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. `schema_name` pandora_beauty_store · `schema_version` 1.5.0 · `name` Pandora-beauty-store-v-1-5-0. Theme Store listing yok (Speedo üçüncü taraf).  
Örnekler: https://pandora-beauty-store.myshopify.com/  
Öneri: leftover — gözlenen alan  
Karar: onay bekliyor

---

ADAY: sachue-wishlist  
Gerekçe: Header wishlist sayacı + `/pages/wishlist` + kartlarda ADD TO WISHLIST. Sayfa envanterlenmedi (app/özellik).  
Örnekler: header · product cards · /pages/wishlist  
Öneri: leftover — wishlist overlay/sayfa  
Karar: onay bekliyor

---

ADAY: sachue-pdp-zero-section  
Gerekçe: PDP `#shopify-section-template--17492995342535__16572629707050636d` h=0, metin yok.  
Örnekler: /products/stunna-lip-paint-longwear-fluid-lip-color  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: sachue-policy-native  
Gerekçe: `/policies/privacy-policy` içerik shopify-section değil (native policy body). Footer’da Privacy Policy / Shipping & Return Policy link.  
Örnekler: https://pandora-beauty-store.myshopify.com/policies/privacy-policy  
Öneri: leftover — page-content-main / policy-page-layout adayı, 3vp yok  
Karar: onay bekliyor

---

ADAY: sachue-cart-footer-empty  
Gerekçe: `#shopify-section-template--17492994621639__cart-footer` boş sepette h=0 (Estimated total gizli).  
Örnekler: /cart  
Öneri: leftover — dolu cart interact’te görünebilir  
Karar: onay bekliyor

---

ADAY: sachue-pdp-coupons-viewers  
Gerekçe: Buy box içinde “People are viewing this right now”, Sales End In countdown, FLAT15/FLAT30 kupon şeritleri. `product-info-main` delta; ayrı şema yok.  
Örnekler: Stunna Lip Paint PDP  
Öneri: observation delta — yeni şema değil  
Karar: onay bekliyor

---

ADAY: sachue-quick-view-absent  
Gerekçe: Kartlarda QV butonu görülmedi (ADD TO CART / ADD TO WISHLIST). `product-showcase-*` şemaları QV action taşır; bu demoda tetiklenmedi.  
Örnekler: home Trendy Collection · PLP · related  
Öneri: leftover — QV yok  
Karar: onay bekliyor

---

ADAY: sachue-newsletter-submit  
Gerekçe: Footer GET THE NEWSLETER + SUBSCRIBE. Email submit PII stop.  
Örnekler: footer  
Öneri: leftover — form gönderilmedi  
Karar: onay bekliyor
