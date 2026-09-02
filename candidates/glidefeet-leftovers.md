# Glidefeet leftovers / adaylar

*Store (walk):* https://glidefeet.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/clean-glidefeet-best-shoes-shopify-templates-o-s-2-0  
*Tema (görülen, uydurulmadı):* **Glidefeet-v-1-5-0** · `schema_name` **Glidefeet** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `170474012955` · role `main`  
*Shopify.shop:* `glidefeet.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: glidefeet-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Theme Store id uydurulmadı.  
Örnekler: https://glidefeet.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: glidefeet-storefront-password  
Gerekçe: Host `/password` duvarı. Vendor ürün sayfasında demo şifre `1`. Aynı hostta girildi; başka host uydurulmadı.  
Örnekler: https://glidefeet.myshopify.com/password  
Öneri: leftover — public storefront-unlock  
Karar: onay bekliyor

---

ADAY: glidefeet-drawer-menu-desktop  
Gerekçe: `header.drawer-menu` — hamburger **1440**'ta da birincil nav. Mega / inline dropdown yok. `navigation-header-mega` + `global-menu-drawer` yazıldı; delta: desktop drawer.  
Örnekler: `#Details-menu-drawer-container`  
Öneri: leftover — Dawn drawer-menu setting  
Karar: onay bekliyor

---

ADAY: glidefeet-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. Get the newsletter Get 10% off. zenon_popup. PII, dur.  
Örnekler: overlay `newsletter-popup`  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: glidefeet-pdp-countdown-stock  
Gerekçe: Buy-box içinde `Ending In` timer + `150 in stock`. Ayrı section değil; `product-info-main` delta.  
Örnekler: https://glidefeet.myshopify.com/products/mens-air-huarache-casual-shoes  
Öneri: leftover — buy-box eki  
Karar: onay bekliyor

---

ADAY: glidefeet-cart-footer-split  
Gerekçe: `#…__cart-items` + `#…__cart-footer` ayrı section. Boşken footer h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://glidefeet.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: glidefeet-multirow-two-rows  
Gerekçe: Tek `multirow` section = CASUAL SNEAKERS + SANDALS & SLIDES. `editorial-image-with-text` tek çift; 2 satır delta.  
Örnekler: home `#shopify-section-template--23179412242715__9523e883-4fdf-4ceb-a649-5dc38f874eec`  
Öneri: leftover — Dawn multirow  
Karar: onay bekliyor

---

ADAY: glidefeet-wishlist-page  
Gerekçe: Header `/pages/wishlist`. Yürünmedi (hesap/app yüzeyi).  
Örnekler: https://glidefeet.myshopify.com/pages/wishlist  
Öneri: leftover — wishlist  
Karar: onay bekliyor

---

ADAY: glidefeet-policies  
Gerekçe: Footer Terms / Return / Shipping / Privacy (`/policies/*`). Dawn policy şablonu; ayrı observation yazılmadı (404/content walk yeterli).  
Örnekler: https://glidefeet.myshopify.com/policies/privacy-policy  
Öneri: leftover — policy template  
Karar: onay bekliyor

---

ADAY: glidefeet-color-single-swatch  
Gerekçe: Huarache Color fieldset yalnız **Black**. Size 8–12 pills. İkinci renk yok; changed Size denenecek.  
Örnekler: PDP Color swatch  
Öneri: leftover — tek renk  
Karar: onay bekliyor
