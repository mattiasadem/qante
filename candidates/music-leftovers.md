# Music leftovers / adaylar

*Store (walk):* https://musical-online-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/music-musical-instruments-store-shopify-2-0-theme  
*Tema (görülen, uydurulmadı):* **Music-v-1-5-0-latest-updates-new** · `schema_name` **Music** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `135699103818` · role `main`  
*Shopify.shop:* `musical-online-store.myshopify.com`  
*Unlock:* vendor-published password `1` — “Please enter password "1" to view demo.”  
*Tarih:* 2026-09-10

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: music-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Theme Store id uydurulmadı.  
Örnekler: https://musical-online-store.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: music-vendor-published-demo-password  
Gerekçe: Speedo ürün sayfası “Please enter password "1" to view demo.” Public storefront unlock; hesap değil. Capture `scripts/unlock-storefront.mjs` host map `musical-online-store.myshopify.com`.  
Örnekler: https://speedothemes.com/products/music-musical-instruments-store-shopify-2-0-theme · https://musical-online-store.myshopify.com/password  
Öneri: leftover — yayınlanmış demo şifresi  
Karar: onay bekliyor

---

ADAY: music-newsletter-popup-zenon  
Gerekçe: `#shopify-section-newsletter-popup` roster’da h=0. GET THE NEWSLETTER GET 10% OFF. PII — submit yok. `dismiss-overlays.mjs` kapatır.  
Örnekler: overlay-group `newsletter-popup`  
Öneri: leftover — Speedo newsletter overlay  
Karar: onay bekliyor

---

ADAY: music-contact-map  
Gerekçe: Contact `#shopify-section-template--17181904076874__map_iqhHBB` yükseklik ~680, metin yok (iframe harita). Taksonomide map tipi yok; `editorial-custom-content` zorlama.  
Örnekler: https://musical-online-store.myshopify.com/pages/contact  
Öneri: leftover — harita embed  
Karar: onay bekliyor

---

ADAY: music-wishlist  
Gerekçe: Header/drawer → `/pages/wishlist`. "No products were added to your wishlist." Wishlist şeması yok.  
Örnekler: https://musical-online-store.myshopify.com/pages/wishlist  
Öneri: leftover — wishlist sayfası  
Karar: onay bekliyor

---

ADAY: music-compare-page  
Gerekçe: `/pages/compare` "There are no products available to compare." `global-compare-drawer` tetiklenmedi; sayfa leftover.  
Örnekler: https://musical-online-store.myshopify.com/pages/compare  
Öneri: leftover — compare boş sayfa  
Karar: onay bekliyor

---

ADAY: music-about-contact-layout-pages  
Gerekçe: CMS `about-layout-1..4`, `contact-layout-1..4`, `contact-us`, `our-story`. Header/footer linkleri layout varyantlarına gidiyor. Walk `/pages/about-us` + `/pages/contact` (zengin şablon). Layout kopyaları envanterlenmedi.  
Örnekler: https://musical-online-store.myshopify.com/pages/about-layout-1  
Öneri: leftover — ekstra page layout  
Karar: onay bekliyor

---

ADAY: music-pdp-empty-section  
Gerekçe: PDP `#shopify-section-template--17181904404554__172137309121bf68f7` yükseklik 0, metin yok.  
Örnekler: https://musical-online-store.myshopify.com/products/guitar-flamenco-guitar  
Öneri: leftover — boş placeholder  
Karar: onay bekliyor

---

ADAY: music-related-empty  
Gerekçe: PDP `#shopify-section-template--17181904404554__related-products` h≈116, kart 0, metin boş. `product-showcase-related` observation yazılmadı.  
Örnekler: guitar-flamenco-guitar  
Öneri: leftover — boş related  
Karar: onay bekliyor

---

ADAY: music-about-fashion-placeholder  
Gerekçe: About “Our Team” Evelyn Fashion Designer / Maverick Director / Sophia Marketing Manager. Müzik vitrininde leftover giyim kopyası. Observation `features-multicolumn-2` olarak alındı.  
Örnekler: https://musical-online-store.myshopify.com/pages/about-us  
Öneri: leftover — demo kopya  
Karar: onay bekliyor

---

ADAY: music-footer-bed-links  
Gerekçe: Footer Shop kolonu Single / Double / Queen / King / Custom (yatak bedenleri). Müzik temasında leftover menü.  
Örnekler: footer  
Öneri: leftover — demo menü  
Karar: onay bekliyor

---

ADAY: music-you-may-like-empty-drawer  
Gerekçe: Boş `#CartDrawer` 1440 karede YOUR CART boş + CONTINUE SHOPPING + Log in + altta YOU MAY LIKE (Latin percussion Drum $146). ATC olmadan upsell. Ayrı schema yok.  
Örnekler: home `#CartDrawer`  
Öneri: leftover — upsell  
Karar: onay bekliyor

---

ADAY: music-search-1440-inline  
Gerekçe: 1440 header’da `Search...` inline. `details:has(#Search-In-Modal)` zero-size skip. 375/768 search overlay bar açıldı. Desktop modal ayrı değil.  
Örnekler: home header  
Öneri: leftover — cihaz kırılımı  
Karar: onay bekliyor

---

ADAY: music-instagram-typo  
Gerekçe: Instagram bandı başlığı “Follow us on Intsagram @Music”. Hotspot yok; link `#`.  
Örnekler: home `custom_instagram_3eM9FD`  
Öneri: leftover — kopya yazım  
Karar: onay bekliyor
