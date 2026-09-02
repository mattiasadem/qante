# Gifts Treasures leftovers / adaylar

*Store:* https://gift-online-shop-1.myshopify.com/  
*Tema (görülen, uydurulmadı):* **gifts-treasures-v-1-5-0-latest-updates-new** · `schema_name` **Gifts-treasures** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `175659352228` · role `main` · shop `gift-online-shop-1.myshopify.com`  
*Unlock:* vendor-published password `1` (ürün sayfası + title `(password: 1)`)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: gifts-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Theme Store id uydurulmadı.  
Örnekler: https://gift-online-shop-1.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: gifts-vendor-published-demo-password  
Gerekçe: Speedo ürün + title “password: 1”. Public storefront unlock; hesap değil. Capture `scripts/unlock-storefront.mjs` host map.  
Örnekler: https://speedothemes.com/products/gifts-treasures-shopify-gifts-themes-0s-2-0  
Öneri: leftover — yayınlanmış demo şifresi  
Karar: onay bekliyor

---

ADAY: gifts-no-product-variants  
Gerekçe: `products.json` (limit 250) tüm ürünler tek varyant (`Title` / Default Title). PDP swatch/dropdown yok. `product-info-main` `changed` varyant state yok — qty stepper var.  
Örnekler: `/products/wireless-headphones`  
Öneri: leftover — varyant interact yok  
Karar: onay bekliyor

---

ADAY: gifts-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. PII, dur.  
Örnekler: overlay-group newsletter-popup  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: gifts-related-products-empty  
Gerekçe: PDP `#…__related-products` h=132, metin yok. `product-showcase-related` yazılmadı.  
Örnekler: Wireless Headphones PDP  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: gifts-pdp-empty-section  
Gerekçe: `#shopify-section-template--24249644056740__172137309121bf68f7` h=0, metin yok.  
Örnekler: Wireless Headphones PDP  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: gifts-cart-footer-empty  
Gerekçe: `/cart` `#…__cart-footer` boşken h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://gift-online-shop-1.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: gifts-contact-map  
Gerekçe: `/pages/contact` `map_iqhHBB` 680px boş kutu (iframe harita). Şema yok.  
Örnekler: https://gift-online-shop-1.myshopify.com/pages/contact  
Öneri: leftover — gömülü harita  
Karar: onay bekliyor

---

ADAY: gifts-404-aliases  
Gerekçe: `/pages/about-us` · `/pages/about` · `/pages/faqs` **404**. Canlı: `/pages/our-story` · `/pages/faq`. 404 observation `not-found/page-content-main`.  
Örnekler: https://gift-online-shop-1.myshopify.com/pages/about-us  
Öneri: leftover — 404 alias  
Karar: onay bekliyor

---

ADAY: gifts-placeholder-copy  
Gerekçe: Home IWT lorem; testimonials John Doe; PDP multi “handcraft clothes”; Our Story `[Brand Name]` fashion placeholder; FAQ jewelry/style swap lorem. Hediye vitrin + başka sektör kopyası.  
Örnekler: home image_with_text / FAQ / our-story / PDP multi  
Öneri: leftover — demo kopyası  
Karar: onay bekliyor

---

ADAY: gifts-lead-capture-pii  
Gerekçe: Footer newsletter + contact form görünür; email/name fill/submit yok.  
Örnekler: home footer · `/pages/contact`  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: gifts-buy-it-now  
Gerekçe: PDP Shopify payment / checkout — tıklanmadı.  
Örnekler: Wireless Headphones buy box  
Öneri: leftover — ödeme  
Karar: onay bekliyor

---

ADAY: gifts-header-wishlist-compare  
Gerekçe: Header wishlist + compare ikonları. `/pages/wishlist` · `/pages/compare` custom sayfalar. Interact yok; drawer şeması uydurulmadı.  
Örnekler: home header  
Öneri: leftover — wishlist/compare  
Karar: onay bekliyor

---

ADAY: gifts-theme-demo-layouts  
Gerekçe: Header Themes mega: Product layout 1–6, Collection layouts (Vertical/Horizontal/Drawer). Demo vitrin menüsü, mağaza kategorisi değil.  
Örnekler: `#Details-HeaderMenu-4`  
Öneri: leftover — tema demo nav  
Karar: onay bekliyor

---

ADAY: gifts-about-contact-layout-pages  
Gerekçe: `pages.json` about-layout-1..4, contact-layout-1..5. Walk dışı (skill min home/PLP/PDP/cart + typical).  
Örnekler: `/pages/about-layout-1`  
Öneri: leftover — ekstra layout sayfaları  
Karar: onay bekliyor
