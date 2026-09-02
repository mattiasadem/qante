# Electronics leftovers / adaylar

*Store:* https://speedo-electro-dropship.myshopify.com/  
*Tema (görülen, uydurulmadı):* **speedo-electro-dropship-v-1-5-0** · `schema_name` **speedo-electro-dropship** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `173189267776` · role `main` · shop `speedo-electro-dropship.myshopify.com`  
*Vendor:* Speedo Themes (üçüncü taraf; Theme Store resmi değil)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: electronics-storefront-password  
Gerekçe: `/` 302 → `/password`. Title *speedo-electro-dropship (password: 1)*. Vendor ürün sayfası public `1`. Aynı host.  
Örnekler: https://speedo-electro-dropship.myshopify.com/password  
Öneri: leftover — vendor demo kilidi  
Karar: onay bekliyor

---

ADAY: electronics-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Theme Store listing id uydurulmadı.  
Örnekler: https://speedo-electro-dropship.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: electronics-header-timer-zero  
Gerekçe: `#shopify-section-sections--23643442544960__9fc4c78d-f7de-4687-9250-e5edfbe01a6f` header grubunda timer-section.css + FlipClock; h=0, metin yok.  
Örnekler: https://speedo-electro-dropship.myshopify.com/  
Öneri: leftover — 0px countdown  
Karar: onay bekliyor

---

ADAY: electronics-thin-catalog  
Gerekçe: `products.json` tek ürün `jbl-xtreme-5-waterproof-bluetooth-speaker`. `collections.json` yalnız `frontpage` (1 ürün).  
Örnekler: https://speedo-electro-dropship.myshopify.com/products.json  
Öneri: leftover — demo katalog  
Karar: onay bekliyor

---

ADAY: electronics-pdp-related-empty  
Gerekçe: `#shopify-section-template--23643419148608__related-products` h=64, metin/görsel yok.  
Örnekler: https://speedo-electro-dropship.myshopify.com/products/jbl-xtreme-5-waterproof-bluetooth-speaker  
Öneri: leftover — 0 içerik related  
Karar: onay bekliyor

---

ADAY: electronics-cart-footer-empty  
Gerekçe: `#shopify-section-template--23643418591552__cart-footer` boş sepetken h=0.  
Örnekler: https://speedo-electro-dropship.myshopify.com/cart  
Öneri: leftover — boşken 0px  
Karar: onay bekliyor

---

ADAY: electronics-wishlist  
Gerekçe: `/pages/wishlist` — WISHLIST başlığı, ürün yok. Favori şeması yok.  
Örnekler: https://speedo-electro-dropship.myshopify.com/pages/wishlist  
Öneri: leftover — wishlist page  
Karar: onay bekliyor

---

ADAY: electronics-404  
Gerekçe: `/pages/about-us`, `/pages/faqs`, `/policies/*`, rastgele path → 404 PAGE NOT FOUND / CONTINUE SHOPPING. 404 şeması yok.  
Örnekler: https://speedo-electro-dropship.myshopify.com/pages/about-us  
Öneri: leftover — 404  
Karar: onay bekliyor

---

ADAY: electronics-policy-404  
Gerekçe: `/policies/privacy-policy` · refund · terms → 404 (native policy sayfası yok).  
Örnekler: https://speedo-electro-dropship.myshopify.com/policies/privacy-policy  
Öneri: leftover — policy route  
Karar: onay bekliyor

---

ADAY: electronics-account-login  
Gerekçe: Header Log in → `/account/login`. Hesap yoklandı/giriş yok.  
Örnekler: https://speedo-electro-dropship.myshopify.com/account/login  
Öneri: leftover — PII / hesap  
Karar: onay bekliyor

---

ADAY: electronics-newsletter-submit  
Gerekçe: Footer `#ContactFooter` newsletter. Submit yok (PII).  
Örnekler: https://speedo-electro-dropship.myshopify.com/  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: electronics-search-icon-hidden  
Gerekçe: `summary.header__icon--search` ve `#Search-In-Modal` DOM'da; 375/768/1440 kutu 0×0. details `open` + fill hâlâ 0px. Mobil drawer'da arama yok. `/search?q=jbl` sayfa ayrı.  
Örnekler: https://speedo-electro-dropship.myshopify.com/  
Öneri: leftover — gizli predictive search  
Karar: onay bekliyor

---

ADAY: electronics-atc-hidden  
Gerekçe: PDP `button.product-form__submit` (Add to cart) 0×0. Görünür CTA `BUY IT NOW` Shopify payment button — tıklanmadı. Sepet `/cart/add.js` ile dolduruldu.  
Örnekler: https://speedo-electro-dropship.myshopify.com/products/jbl-xtreme-5-waterproof-bluetooth-speaker  
Öneri: leftover — gizli ATC / ödeme CTA  
Karar: onay bekliyor

---

ADAY: electronics-testimonial-detergent-copy  
Gerekçe: Home testimonials “laundry detergent” kopyası; elektronik ürüne ait değil.  
Örnekler: https://speedo-electro-dropship.myshopify.com/  
Öneri: leftover — demo kopya sapması (observation delta’da da yazılı)  
Karar: onay bekliyor
