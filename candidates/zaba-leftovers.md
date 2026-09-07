# ZABA leftovers / adaylar

*Store (walk):* https://speedo-toys-dropship.myshopify.com/  
*Vendor:* https://speedothemes.com/products/speedo-toys-dropshipping-theme  
*Tema (görülen, uydurulmadı):* **speedo-toys-dropship-v-1-5-0** · `schema_name` **speedo_toys_dropship** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `175126708505` · role `main`  
*Shopify.shop:* `speedo-toys-dropship.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: zaba-not-theme-store  
Gerekçe: Speedo Themes third-party OS 2.0. Canlı `theme_store_id` **null**. Shopify Theme Store listing yok.  
Örnekler: https://speedo-toys-dropship.myshopify.com/ · https://speedothemes.com/products/speedo-toys-dropshipping-theme  
Öneri: leftover — künye  
Karar: onay bekliyor

---

ADAY: zaba-storefront-password  
Gerekçe: Vendor ürün sayfası “Please enter password 1 to view demo.” Aynı host `/password` — public storefront unlock.  
Örnekler: https://speedo-toys-dropship.myshopify.com/password  
Öneri: leftover — demo kapısı  
Karar: onay bekliyor

---

ADAY: zaba-single-product-landing  
Gerekçe: Demo tek SKU dropship landing — home `#simple_product` embedded `product-info-main`; Shop nav `#simple_product` anchor; PLP yalnızca 1 ürün.  
Örnekler: https://speedo-toys-dropship.myshopify.com/ · https://speedo-toys-dropship.myshopify.com/collections/all  
Öneri: leftover — preset davranışı (şema reuse)  
Karar: onay bekliyor

---

ADAY: zaba-no-cart-drawer  
Gerekçe: `cart-drawer` / `#CartDrawer` DOM'da yok; sepet yalnız `/cart` sayfası. `global-cart-drawer` observation açılmadı.  
Örnekler: https://speedo-toys-dropship.myshopify.com/cart  
Öneri: leftover — overlay yok  
Karar: onay bekliyor

---

ADAY: zaba-search-icon-hidden  
Gerekçe: `details-modal.header__search` summary tüm viewport'larda `display:none`; predictive input görünür değil. `/search?q=` sayfa observation ayrı.  
Örnekler: https://speedo-toys-dropship.myshopify.com/search?q=monster  
Öneri: leftover — interact input missingStates  
Karar: onay bekliyor

---

ADAY: zaba-social-placeholders  
Gerekçe: Footer/header sosyal linkler `href="#"` (Twitter, Facebook, Pinterest, Instagram, YouTube).  
Örnekler: https://speedo-toys-dropship.myshopify.com/  
Öneri: leftover — demo placeholder  
Karar: onay bekliyor

---

ADAY: zaba-global-countdown-every-page  
Gerekçe: `promo-banner-countdown` + `promo-announcement-bar` her şablonda global; observation yalnız home'da (reuse kuralı).  
Örnekler: PDP / cart / blog  
Öneri: leftover — global tekrar  
Karar: onay bekliyor
