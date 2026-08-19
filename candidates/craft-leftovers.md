# Craft leftovers / adaylar

*Store:* https://theme-craft-demo.myshopify.com  
*Tema (görülen, uydurulmadı):* **[Craft] Theme store demo (latest)** · `schema_name` **Dawn** 2.5.0 · `theme_store_id` **null** · id `144021061886` · shop `theme-craft-demo.myshopify.com`  
*Tarih:* 2026-08-17

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: craft-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. `schema_name` Dawn (Craft Dawn tabanı). Theme Store slug Craft; storefront alanı 1368 yazmıyor.  
Örnekler: https://theme-craft-demo.myshopify.com/  
Öneri: leftover — gözlenen alan  
Karar: onay bekliyor

---

ADAY: craft-404-routes  
Gerekçe: Aynı 404 (404 / Page not found / Continue shopping): `/pages/about` `/pages/faq` `/pages/faqs` `/blogs/journal` `/blogs/blog` `/pages/shipping`. Observation `not-found/page-content-main`.  
Örnekler: https://theme-craft-demo.myshopify.com/pages/about  
Öneri: leftover — yok sayfa  
Karar: onay bekliyor

---

ADAY: craft-cart-notification-not-drawer  
Gerekçe: `cart-drawer` yok. Add → `cart-notification` popup. Sepet ikonu `/cart`. `global-cart-drawer` observation + delta. Qty cart sayfasında.  
Örnekler: https://theme-craft-demo.myshopify.com/cart  
Öneri: leftover — overlay tipi  
Karar: onay bekliyor

---

ADAY: craft-product-recommendations-zero  
Gerekçe: PDP `product-recommendations` h=0 (Carafe Set + Everything Bowls). Şema yazılmadı.  
Örnekler: https://theme-craft-demo.myshopify.com/products/ceramic-carafe-set  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: craft-alternate-product-template  
Gerekçe: Carafe Set template `18214085099774` (variant + image-with-text). Everything Bowls / Dinner Plates template `18214085165310` (image-banner OUR MISSION, variant yok — renk ayrı handle). İkinci template 3vp yazılmadı.  
Örnekler: https://theme-craft-demo.myshopify.com/products/the-everything-bowls  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: craft-newsletter-repeat  
Gerekçe: "Don't miss out" bant home dışında collection / collections / search / cart / about / contact / magazine / 404. Home observation yazıldı; diğer id'ler tekrar çekilmedi. Submit yok.  
Örnekler: https://theme-craft-demo.myshopify.com/collections/dinnerware  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: craft-policy-siblings  
Gerekçe: Privacy yazıldı (`.shopify-policy__container`). Refund / shipping / terms aynı kabuk.  
Örnekler: https://theme-craft-demo.myshopify.com/policies/refund-policy  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: craft-color-as-separate-products  
Gerekçe: Çoğu renk ayrı handle (`cereal-bowl-dove-gray`). Variant picker yalnız bazı ürünlerde (Carafe Set Color).  
Örnekler: https://theme-craft-demo.myshopify.com/products/cereal-bowl  
Öneri: leftover — katalog modeli  
Karar: onay bekliyor

---

ADAY: craft-pii-stop  
Gerekçe: Newsletter Email ve contact Send tıklanmadı. Account / checkout / Buy it now yok.  
Örnekler: https://theme-craft-demo.myshopify.com/pages/contact  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: craft-cro-schemas-not-observed  
Gerekçe: CRO disk şemaları gözlenmedi — observation yazılmadı: `before-after-slider` · `commerce-tools-products-bundle` · `promo-banner-countdown` · `faq-collapsible-tabs` · `comparison-quick-table` · `product-finder-quiz` · `media-shop-the-feed` · `media-scrolling-gallery`. Gözlenen CRO: `testimonial-quote-carousel` · `lead-capture-newsletter-band` · `lead-capture-form`.  
Örnekler: https://theme-craft-demo.myshopify.com/  
Öneri: leftover — şema uydurulmadı  
Karar: onay bekliyor

---

ADAY: craft-no-image-mega  
Gerekçe: Dinnerware details submenu (renk koleksiyon linkleri). Kolon/görsel/promo mega yok.  
Örnekler: https://theme-craft-demo.myshopify.com/  
Öneri: leftover — header delta  
Karar: onay bekliyor
