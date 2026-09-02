# Bicycle leftovers / adaylar

*Store (walk):* https://bicycle-online-store-1.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/bicycle-best-shopify-bicycle-store-os-2-0  
*Tema (görülen, uydurulmadı):* **Bicycle V-1.5.0** · `schema_name` **Bicycle** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `130165440647` · role `main`  
*Shopify.shop:* `bicycle-online-store-1.myshopify.com`  
*Unlock:* vendor-published password `1` — “Please enter password "1" to view demo.”  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: bicycle-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Theme Store id uydurulmadı.  
Örnekler: https://bicycle-online-store-1.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: bicycle-vendor-published-demo-password  
Gerekçe: Speedo ürün sayfası “Please enter password "1" to view demo.” Title `(password: 1)`. Public storefront unlock; hesap değil. Capture `scripts/unlock-storefront.mjs` host map.  
Örnekler: https://speedothemes.com/products/bicycle-best-shopify-bicycle-store-os-2-0 · https://bicycle-online-store-1.myshopify.com/password  
Öneri: leftover — yayınlanmış demo şifresi  
Karar: onay bekliyor

---

ADAY: bicycle-newsletter-popup-zenon  
Gerekçe: `#shopify-section-newsletter-popup` roster’da h=0. `.zenon_popup` / `.popup_inside` / `img.close_popup` + GET THE NEWSLETTER GET 10% OFF. PII — submit yok. `dismiss-overlays.mjs` kapatır.  
Örnekler: overlay-group `newsletter-popup`  
Öneri: leftover — Speedo newsletter overlay  
Karar: onay bekliyor

---

ADAY: bicycle-social-proof-toast  
Gerekçe: Newsletter section metninde “Someone liked and Buy {product} 10 Minutes Ago From Paris Verified”. Sosyal kanıt toast; ayrı section değil.  
Örnekler: `#shopify-section-newsletter-popup`  
Öneri: leftover — toast  
Karar: onay bekliyor

---

ADAY: bicycle-contact-map  
Gerekçe: Contact `#shopify-section-template--16095886737543__map_FmN3WK` Google Maps iframe (Ames, IA / WebFilings). Taksonomide map tipi yok; `editorial-custom-content` zorlama.  
Örnekler: https://bicycle-online-store-1.myshopify.com/pages/contact  
Öneri: leftover — harita embed  
Karar: onay bekliyor

---

ADAY: bicycle-wishlist  
Gerekçe: Header/drawer `.wishlist` → `/pages/wishlist`. "No products were added to your wishlist." Wishlist şeması yok.  
Örnekler: https://bicycle-online-store-1.myshopify.com/pages/wishlist  
Öneri: leftover — wishlist sayfası  
Karar: onay bekliyor

---

ADAY: bicycle-compare-page  
Gerekçe: `/pages/compare` "There are no products available to compare." Header Compare 0. `global-compare-drawer` tetiklenmedi; sayfa leftover.  
Örnekler: https://bicycle-online-store-1.myshopify.com/pages/compare  
Öneri: leftover — compare boş sayfa  
Karar: onay bekliyor

---

ADAY: bicycle-quick-shop-no-quick-view  
Gerekçe: Featured/PLP kartlarda QUICK SHOP yazısı (6). `#QuickView` / `quick-view` overlay DOM’da yok. Hover interact — overlay yoksa leftover.  
Örnekler: home `featured_collection_h498CU`  
Öneri: leftover — quick-view overlay yok  
Karar: onay bekliyor

---

ADAY: bicycle-about-fashion-placeholder  
Gerekçe: About “Meet The Team” Freya Fashion Designer; “New Blanks Just Dropped” giyim kopyası. Bisiklet vitrininde leftover içerik.  
Örnekler: https://bicycle-online-store-1.myshopify.com/pages/about-us  
Öneri: leftover — demo kopya  
Karar: onay bekliyor

---

ADAY: bicycle-hamburger-tablet-only  
Gerekçe: `header-drawer data-breakpoint="tablet"`. 1440 hamburger display:none; inline menu + mega. 375/768 hamburger. Seabikini 1440 hamburger’den fark.  
Örnekler: `#Details-menu-drawer-container`  
Öneri: leftover — cihaz kırılımı  
Karar: onay bekliyor
