# Shrilahome leftovers / adaylar

*Store:* https://pandora-furniture-5.myshopify.com/  
*Vendor:* https://speedothemes.com/products/shrilahome-best-shopify-furniture-themes-os-2-0  
*Tema (görülen, uydurulmadı):* **Shrilahome-Furniture-v-1-5-0** · `schema_name` **shrilahome** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `169736438070` · role `main` · shop `pandora-furniture-5.myshopify.com`  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: shrilahome-password-wall  
Gerekçe: `/` 302 → `/password`. Vendor: *Please enter password "1" to view demo.* Aynı host POST. Public storefront-unlock.  
Örnekler: https://pandora-furniture-5.myshopify.com/password  
Öneri: leftover — demo kapısı  
Karar: onay bekliyor

---

ADAY: shrilahome-not-theme-store  
Gerekçe: Speedo Themes third-party OS 2.0. `theme_store_id` null. Theme Store official değil. Kaynak tipi yine `shopify` (tema demo; DTC marka değil; dördüncü kaynak yok).  
Örnekler: https://speedothemes.com/products/shrilahome-best-shopify-furniture-themes-os-2-0  
Öneri: leftover — vendor notu  
Karar: onay bekliyor

---

ADAY: shrilahome-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. GET THE NEWSLETTER GET 10% OFF + e-posta. PII.  
Örnekler: home her sayfa  
Öneri: leftover — overlay  
Karar: onay bekliyor

---

ADAY: shrilahome-fake-purchase-toast  
Gerekçe: Aynı popup section içinde “Someone liked and Buy {ürün} 10 Minutes Ago From Paris Verified”. Sosyal kanıt toast. Yeni şema yok.  
Örnekler: home / PDP  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: shrilahome-blog-missing  
Gerekçe: Footer Blog → `/blogs/news`. `blogs.json` 404. `/blogs/news` home'a düşer. Article yok. `blog-list-main` yazılmadı.  
Örnekler: https://pandora-furniture-5.myshopify.com/blogs/news  
Öneri: leftover — blog yok  
Karar: onay bekliyor

---

ADAY: shrilahome-compare-page  
Gerekçe: `/pages/compare` — “There are no products available to compare.” `global-compare-drawer` değil; boş page.  
Örnekler: https://pandora-furniture-5.myshopify.com/pages/compare  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: shrilahome-wishlist-page  
Gerekçe: `/pages/wishlist` — “No products were added to your wishlist.”  
Örnekler: https://pandora-furniture-5.myshopify.com/pages/wishlist  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: shrilahome-cart-footer-split  
Gerekçe: Dawn gibi `#…__cart-items` + `#…__cart-footer` ayrı. Boşken footer h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://pandora-furniture-5.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: shrilahome-sticky-atc  
Gerekçe: PDP’de id’siz `ADD TO CART` kutusu (h=41). Sticky ATC feature — `product-info-main` knob adayı, ayrı section değil.  
Örnekler: https://pandora-furniture-5.myshopify.com/products/circle-lounge-chairs  
Öneri: leftover — feature  
Karar: onay bekliyor

---

ADAY: shrilahome-image-banner-empty  
Gerekçe: Home `#…__8b5479f1…` image-banner, başlık/CTA yok. Mobil CSS `Liquid error divided by 0`. `editorial-image-with-text-overlay` yazıldı; metin yok.  
Örnekler: home  
Öneri: leftover — boş overlay  
Karar: onay bekliyor

---

ADAY: shrilahome-size-chart-page  
Gerekçe: `/pages/size-cart` (handle typo) “Size Chart” pages.json’da var. Yürünmedi.  
Örnekler: https://pandora-furniture-5.myshopify.com/pages/size-cart  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: cro-absent  
Gerekçe: Home’da featured product grid, countdown, quiz, before-after, lookbook, shop-the-feed yok.  
Örnekler: https://pandora-furniture-5.myshopify.com/  
Öneri: leftover — CRO tipi yok  
Karar: onay bekliyor
