# Lingerie leftovers / adaylar

*Store (walk):* https://fashion-store-clean-21.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/lingerie-best-bikini-themes-shopify-2-0-theme  
*Tema (görülen, uydurulmadı):* **Lingerie-v-1-5-0-latest-updates-new** · `schema_name` **Lingerie** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `176524362023` · role `main`  
*Shopify.shop:* `fashion-store-clean-21.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: lingerie-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Shopify Theme Store listing yok. Theme Store id uydurulmadı.  
Örnekler: https://fashion-store-clean-21.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: lingerie-storefront-password  
Gerekçe: Vendor ürün sayfasında demo password `1`. Aynı host `/password` — başka vitrin yok. Capture `storefrontPassword: "1"`.  
Örnekler: https://fashion-store-clean-21.myshopify.com/password  
Öneri: leftover — public storefront unlock  
Karar: onay bekliyor

---

ADAY: lingerie-about-us-404  
Gerekçe: `/pages/about-us` ve `/pages/about` 404. Tasarlanmış about `/pages/about-layout-1`. `/pages/our-story` düz page-content (envanterlenmedi). About layout 2–4 yürünmedi.  
Örnekler: https://fashion-store-clean-21.myshopify.com/pages/about-us  
Öneri: leftover — alias 404 / ekstra layout  
Karar: onay bekliyor

---

ADAY: lingerie-wishlist-compare  
Gerekçe: Header `.wishlist` → `/pages/wishlist`, Compare → `/pages/compare`. Wishlist şeması yok. Tıklanmadı.  
Örnekler: https://fashion-store-clean-21.myshopify.com/pages/wishlist  
Öneri: leftover — wishlist/compare  
Karar: onay bekliyor

---

ADAY: lingerie-pdp-related-empty  
Gerekçe: `#…__related-products` h≈136, metin yok. `product-showcase-related` yazılmadı.  
Örnekler: Maaji PDP  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: lingerie-pdp-zero-section  
Gerekçe: `#…__172137309121bf68f7` h=0.  
Örnekler: product template  
Öneri: leftover — boş wrapper  
Karar: onay bekliyor

---

ADAY: lingerie-contact-map  
Gerekçe: `/pages/contact` `#…__map_iqhHBB` h=680, metin yok (embed). Şema yok.  
Örnekler: https://fashion-store-clean-21.myshopify.com/pages/contact  
Öneri: leftover — harita  
Karar: onay bekliyor

---

ADAY: lingerie-contact-us-alt  
Gerekçe: `/pages/contact-us` sade form; inventory `/pages/contact` (layout 1). Layout 2–4 yürünmedi.  
Örnekler: https://fashion-store-clean-21.myshopify.com/pages/contact-us  
Öneri: leftover — alternatif layout  
Karar: onay bekliyor

---

ADAY: lingerie-cart-footer-split  
Gerekçe: Dawn `#…__cart-items` + `#…__cart-footer` ayrı. Boşken footer h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://fashion-store-clean-21.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: lingerie-quick-shop  
Gerekçe: Home featured kartlarda Quick shop. Overlay envanterlenmedi.  
Örnekler: Discover what's new  
Öneri: leftover — quick view  
Karar: onay bekliyor

---

ADAY: lingerie-newsletter-submit  
Gerekçe: Footer-group newsletter + form. PII, submit yok.  
Örnekler: `#…__newsletter_n43rgW`  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: lingerie-account-login  
Gerekçe: Header / drawer Log in → `/account/login`. Auth / PII.  
Örnekler: header  
Öneri: leftover — hesap  
Karar: onay bekliyor

---

ADAY: lingerie-sales-pop  
Gerekçe: Sabit karelerde sol alt “Someone liked and Buy … Verified” toast. Section değil; dismiss bazen kaçırıyor.  
Örnekler: home/PDP/PLP/footer evidence  
Öneri: leftover — social-proof toast  
Karar: onay bekliyor

---

ADAY: lingerie-search-1440-zero  
Gerekçe: Statik `details:has(#Search-In-Modal)` 1440’te 0px (skipped). 375/768 header search açık. Interact forceOpen.  
Örnekler: home search  
Öneri: leftover — masaüstü selector  
Karar: onay bekliyor

---

ADAY: lingerie-sports-404-link  
Gerekçe: Nav’da `https://sports-online-store-1.myshopify.com/pages/404` — başka host, yürünmedi.  
Örnekler: header Themes  
Öneri: leftover — yabancı host  
Karar: onay bekliyor
