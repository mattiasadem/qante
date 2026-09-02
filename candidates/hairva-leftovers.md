# Hairva leftovers / adaylar

*Store (walk):* https://pandora-hair-care-3.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/minimalist-shopify-hair-salon-theme  
*Tema (görülen, uydurulmadı):* **pandora-hair-care-layout-3-v-1-5-0** · `schema_name` **pandora_hair_care_3** · `schema_version` **15.2.0** · `theme_store_id` **null** · id `177754079531` · role `main`  
*Shopify.shop:* `pandora-hair-care-3.myshopify.com`  
*Preset:* default · slug `hairva`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: hairva-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Vendor Speedo Themes (Theme Store official değil). Listing id uydurulmadı. Ürün sayfası başlığı “MARIA”; storefront `schema_name` pandora_hair_care_3 / name pandora-hair-care-layout-3-v-1-5-0. QANTE slug `hairva` görev notu.  
Örnekler: https://pandora-hair-care-3.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: hairva-storefront-password  
Gerekçe: `/password` duvarı. Vendor: “Please enter password 1 to view demo.” Aynı host; başka demo uydurulmadı. Capture `unlock-storefront.mjs` + observation `storefrontPassword: "1"` (public unlock, hesap değil).  
Örnekler: https://pandora-hair-care-3.myshopify.com/password  
Öneri: leftover — walk notu  
Karar: onay bekliyor

---

ADAY: hairva-wishlist-page  
Gerekçe: `/pages/wishlist` · `#shopify-section-template--24519368638763__main` “No products were added to your wishlist. Continue shopping”. Header wishlist sayacı. Mevcut şema yok (compare/cart değil).  
Örnekler: https://pandora-hair-care-3.myshopify.com/pages/wishlist  
Öneri: leftover — aday sayfa  
Karar: onay bekliyor

---

ADAY: hairva-related-products-empty  
Gerekçe: PDP `#shopify-section-template--24519368704299__related-products` h=28, metin boş. `product-showcase-related` observation açılmadı (kanıtsız).  
Örnekler: https://pandora-hair-care-3.myshopify.com/products/victoria-silk-top-wig-blonde  
Öneri: leftover — boş related  
Karar: onay bekliyor

---

ADAY: hairva-cart-footer-empty-hidden  
Gerekçe: `#shopify-section-template--24519367786795__cart-footer` boş sepetten h=0. Dolu hâl interact’te bakılacak.  
Örnekler: https://pandora-hair-care-3.myshopify.com/cart  
Öneri: leftover — Dawn cart-footer  
Karar: onay bekliyor

---

ADAY: hairva-no-policy-pages  
Gerekçe: Footer NAVIGATION + OF INTEREST. Privacy / Terms / Shipping policy linki yok. About us → `/pages/our-story`.  
Örnekler: footer  
Öneri: leftover — policy pageType yok  
Karar: onay bekliyor

---

ADAY: hairva-menu-drawer-1440-hidden  
Gerekçe: `header-drawer` `@media (min-width: 990px) { display: none }`. 1440 hamburger/drawer 0-size.  
Örnekler: home 1440  
Öneri: leftover — capture skip beklenir  
Karar: onay bekliyor

---

ADAY: hairva-variants-sold-out-label  
Gerekçe: PDP Length/Color ve shampoo Size haplarında “Variant sold out or unavailable”. ATC `disabled=false`. Interact addToCart denenir; stok belirsiz.  
Örnekler: `/products/victoria-silk-top-wig-blonde`  
Öneri: leftover — demo stok  
Karar: onay bekliyor

---

ADAY: hairva-blog-comments-pii  
Gerekçe: Article şablonunda yorum formu olabilir. PII — submit yok.  
Örnekler: `/blogs/news/5-high-end-haircare-products-that-are-totally-worth-the-price`  
Öneri: leftover — PII  
Karar: onay bekliyor
