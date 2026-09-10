# Sports Equipment leftovers / adaylar

*Store (walk):* https://sports-online-store-1.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/sports-equipment-clothing-shopify-2-0-theme  
*Tema (görülen, uydurulmadı):* **Sports-v-1-5-0-latest-updates-new** · `schema_name` **Sports** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `139796873276` · role `main`  
*Shopify.shop:* `sports-online-store-1.myshopify.com`  
*Unlock:* vendor-published password `1`  
*Tarih:* 2026-09-10

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: sports-equipment-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Theme Store id uydurulmadı.  
Örnekler: https://sports-online-store-1.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: sports-equipment-vendor-published-demo-password  
Gerekçe: Speedo ürün sayfası demo şifresi `1`. Title host `sports-online-store-1`. Public storefront unlock; hesap değil. Capture `scripts/unlock-storefront.mjs` host map.  
Örnekler: https://speedothemes.com/products/sports-equipment-clothing-shopify-2-0-theme · https://sports-online-store-1.myshopify.com/password  
Öneri: leftover — yayınlanmış demo şifresi  
Karar: onay bekliyor

---

ADAY: sports-equipment-newsletter-popup-zenon  
Gerekçe: `#shopify-section-newsletter-popup` roster’da 0×0. GET THE NEWSLETTER GET 10% OFF + email. PII — submit yok. `dismiss-overlays.mjs` kapatır.  
Örnekler: overlay-group `newsletter-popup`  
Öneri: leftover — Speedo newsletter overlay  
Karar: onay bekliyor

---

ADAY: sports-equipment-scrolling-text-hidden  
Gerekçe: Home `#shopify-section-template--17923710386236__scrolling_text_yhqbBP` metin var (ALL EQUIPMENT UNIQUE FEATURES…) ama 1440’ta h=0. Görünür marquee `scrolling_text_K9pYia` observation.  
Örnekler: home scrolling_text_yhqbBP  
Öneri: leftover — sıfır yükseklik  
Karar: onay bekliyor

---

ADAY: sports-equipment-pdp-empty-section  
Gerekçe: PDP `#shopify-section-template--17923710976060__172137309121bf68f7` h=0, metin yok.  
Örnekler: product-detail  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: sports-equipment-related-products-empty  
Gerekçe: `#shopify-section-template--17923710976060__related-products` yükseklik var, metin/kart boş (hydrate yok). `product-showcase-related` yazılmadı.  
Örnekler: PDP related-products  
Öneri: leftover — boş related  
Karar: onay bekliyor

---

ADAY: sports-equipment-contact-map  
Gerekçe: Contact-layout-1 `#shopify-section-template--17923710648380__map_iqhHBB` harita embed. Taksonomide map tipi yok.  
Örnekler: https://sports-online-store-1.myshopify.com/pages/contact-layout-1  
Öneri: leftover — harita embed  
Karar: onay bekliyor

---

ADAY: sports-equipment-wishlist-compare  
Gerekçe: Header `0 Wishlist` → `/pages/wishlist`, `0 Compare` → `/pages/compare`. Wishlist şeması yok; compare drawer tetiklenmedi.  
Örnekler: /pages/wishlist · /pages/compare  
Öneri: leftover — wishlist/compare sayfa  
Karar: onay bekliyor

---

ADAY: sports-equipment-about-contact-layout-variants  
Gerekçe: Nav’da about-layout-2/3/4, our-story, contact-layout-2/3/4, /pages/contact. Yürünen typical: about-layout-1 + contact-layout-1. our-story düz `main-page` lorem.  
Örnekler: /pages/our-story · /pages/about-layout-2  
Öneri: leftover — alternatif layout  
Karar: onay bekliyor

---

ADAY: sports-equipment-404-other-host  
Gerekçe: Footer/nav `https://fashion-store-clean-21.myshopify.com/pages/404` — başka host. Yürünmedi. 404 bu hostta `/pages/this-page-does-not-exist-qante`.  
Örnekler: lingerie leftover çapraz link  
Öneri: leftover — dış host  
Karar: onay bekliyor

---

ADAY: sports-equipment-you-may-like-empty-cart  
Gerekçe: Boş `#CartDrawer` karesinde YOUR CART IS EMPTY + CONTINUE SHOPPING yanında YOU MAY LIKE (Basketball Sport Orange Add To Cart). Ayrı schema yok. Checkout / Log in tıklanmadı.  
Örnekler: home `#CartDrawer`  
Öneri: leftover — boş sepet önerisi  
Karar: onay bekliyor

---

ADAY: sports-equipment-handle-title-mismatch  
Gerekçe: İlk featured PDP handle `veena-retailnet-hexagon-style-dumbbells`, vitrin başlığı **Basketball Sport Orange**. Observation URL handle; notlara title yazıldı.  
Örnekler: /products/veena-retailnet-hexagon-style-dumbbells  
Öneri: leftover — demo katalog sapması  
Karar: onay bekliyor
