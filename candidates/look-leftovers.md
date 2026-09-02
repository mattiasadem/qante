# Look leftovers / adaylar

*Store (walk):* https://goggles-online-store.myshopify.com/  
*Ürün:* https://speedothemes.com/products/look-shopify-eyewear-theme-shopify-os-2-0  
*Tema (görülen, uydurulmadı):* **Look V-1.5.0** · `schema_name` **Look** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `143012102385` · role `main`  
*Shopify.shop:* `goggles-online-store.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: look-password-wall  
Gerekçe: GET `/` storefront password. Title `… (password: 1)`. Speedo Live Demo / ürün sayfası password `1` yayınlıyor. Aynı host `/password`.  
Örnekler: https://goggles-online-store.myshopify.com/password  
Öneri: leftover — official unlock, başka host yok  
Karar: onay bekliyor

---

ADAY: look-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo third-party; Theme Store id uydurulmadı.  
Örnekler: home `Shopify.theme`  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: look-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. Newsletter görseli + “Someone liked and Buy {ürün} 10 Minutes Ago From Paris Verified” (social-proof pop). PII / e-posta, dur.  
Örnekler: overlay newsletter-popup  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: look-related-products-empty  
Gerekçe: PDP `#shopify-section-template--18066270421233__related-products` h=180, metin/ürün yok.  
Örnekler: `/products/hipe-full-rim-ray-ban-frames`  
Öneri: leftover — boş sibling  
Karar: onay bekliyor

---

ADAY: look-cart-footer-zero  
Gerekçe: `#shopify-section-template--18066269798641__cart-footer` h=0 empty cart.  
Örnekler: `/cart`  
Öneri: leftover — boş sibling  
Karar: onay bekliyor

---

ADAY: look-contact-map  
Gerekçe: `#shopify-section-template--18066270224625__map_FmN3WK` h=700, innerText boş. Harita gömme; ayrı map şeması yok.  
Örnekler: `/pages/contact-us`  
Öneri: leftover — map  
Karar: onay bekliyor

---

ADAY: look-wishlist-page  
Gerekçe: `/pages/wishlist` — No products were added to your wishlist. Header 0 count. Ayrı wishlist şeması yok.  
Örnekler: https://goggles-online-store.myshopify.com/pages/wishlist  
Öneri: leftover — commerce-tools adayı  
Karar: onay bekliyor

---

ADAY: look-compare-page  
Gerekçe: `/pages/compare` — There are no products available to compare. Header compare 0.  
Örnekler: https://goggles-online-store.myshopify.com/pages/compare  
Öneri: leftover — commerce-tools / compare  
Karar: onay bekliyor

---

ADAY: look-size-guide  
Gerekçe: `/pages/size-guide` — breadcrumbs + `size-chart_480x480.jpg`. Taksonomide size-guide pageType yok.  
Örnekler: https://goggles-online-store.myshopify.com/pages/size-guide  
Öneri: leftover — içerik sayfa  
Karar: onay bekliyor

---

ADAY: look-quick-shop  
Gerekçe: Home BEST SELLERS kartlarında QUICK SHOP. Overlay ayrı çekilmedi (global-quick-view yoklandı interact turunda).  
Örnekler: featured_collection_h498CU  
Öneri: leftover — quick shop  
Karar: onay bekliyor

---

ADAY: look-locale-country  
Gerekçe: Header country/region (CAD/EUR/USD) + dil (EN/FR/DE/ES). `dilGosterim` knob header şemasında; ayrı section değil.  
Örnekler: header  
Öneri: leftover — chrome  
Karar: onay bekliyor

---

ADAY: look-you-may-like-sibling  
Gerekçe: ATC sonrası 1440'ta `#CartDrawer` yanı sıra ayrı "YOU MAY LIKE" çekmecesi (öneri + ADD TO CART). 375'te aynı başlık drawer içinde collapsible. `global-cart-drawer.onerilerBasligi` slotu var; ayrı schema yok.  
Örnekler: PDP ATC → filled cart drawer  
Öneri: leftover — sibling overlay  
Karar: onay bekliyor

---

ADAY: look-social-proof-toast  
Gerekçe: "Someone liked and Buy {ürün} … From {şehir} Verified" toast birçok kareye sızıyor. newsletter-popup ile aynı aile; dismiss-overlays öldürmüyor.  
Örnekler: home / PLP / PDP / blog  
Öneri: leftover — app toast  
Karar: onay bekliyor
