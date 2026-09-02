# Coffee Culture leftovers / adaylar

*Store:* https://coffee-prime-2.myshopify.com/  
*Tema (görülen, uydurulmadı):* **coffee-culture-v-1-5-0-latest-updates-new** · `schema_name` **Coffee culture** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `178172789019` · role `main` · shop `coffee-prime-2.myshopify.com`  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/coffee-culture-best-coffee-theme-shopify-2-0-theme  
*Unlock:* vendor-published password `1` (ürün sayfası + title)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: coffee-culture-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Theme Store id uydurulmadı.  
Örnekler: https://coffee-prime-2.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: coffee-culture-vendor-published-demo-password  
Gerekçe: Speedo ürün sayfası “Please enter password 1 to view demo.” Title `(password: 1)`. Public storefront unlock; hesap değil. Capture `scripts/unlock-storefront.mjs` host map.  
Örnekler: https://speedothemes.com/products/coffee-culture-best-coffee-theme-shopify-2-0-theme  
Öneri: leftover — yayınlanmış demo şifresi  
Karar: onay bekliyor

---

ADAY: coffee-culture-home-header-section-zero  
Gerekçe: Home `#shopify-section-…__header` h=0 (sticky overlay / slideshow). İç `sticky-header` 101px. Observation selector `sticky-header` + `captureMode: viewport`.  
Örnekler: https://coffee-prime-2.myshopify.com/  
Öneri: leftover — home section 0px  
Karar: onay bekliyor

---

ADAY: coffee-culture-home-image-banner-empty  
Gerekçe: Home `#…__image_banner_hx7LAA` h=333, 2 img, **metin yok**. Şema yazılmadı.  
Örnekler: home image_banner  
Öneri: leftover — boş kopya  
Karar: onay bekliyor

---

ADAY: coffee-culture-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. PII, dur.  
Örnekler: overlay-group newsletter-popup  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: coffee-culture-pdp-empty-section  
Gerekçe: Mushroom Chaga / Espresso bag `#…__172137309121bf68f7` h=0, metin yok.  
Örnekler: `/products/solve-labs-mushroom-coffee-chaga`  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: coffee-culture-related-products-empty  
Gerekçe: PDP `__related-products` h=132, metin yok. Şema yazılmadı.  
Örnekler: mushroom-chaga · espresso-coffee-beans-bag  
Öneri: leftover — boş related  
Karar: onay bekliyor

---

ADAY: coffee-culture-cart-footer-empty  
Gerekçe: `/cart` `#…__cart-footer` boşken h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://coffee-prime-2.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: coffee-culture-extra-about-layouts  
Gerekçe: Footer About Us = `/pages/about-layout-1` (envanter). `/pages/about-layout-2` `/pages/about-layout-3` `/pages/about-layout-4` `/pages/our-story` aynı tip ailesi, ayrı observation yok.  
Örnekler: /pages/about-layout-2 · /pages/our-story  
Öneri: leftover — ekstra layout  
Karar: onay bekliyor

---

ADAY: coffee-culture-extra-contact-layouts  
Gerekçe: Footer Contact Us = `/pages/contact-layout-1`. `/pages/contact-layout-2`–`4` + `/pages/contact-us` envanter dışı. Map section leftover.  
Örnekler: /pages/contact-layout-2 · /pages/contact-us  
Öneri: leftover — ekstra layout  
Karar: onay bekliyor

---

ADAY: coffee-culture-contact-map  
Gerekçe: contact-layout-1 `#…__map_iqhHBB` h=680, metin yok (gömülü harita). Şema yok.  
Örnekler: /pages/contact-layout-1  
Öneri: leftover — harita  
Karar: onay bekliyor

---

ADAY: coffee-culture-about-image-with-icons  
Gerekçe: about-layout-1 `#…__image_with_icons_MDF73t` “Coffee Culture Work and Quality” + Always Fresh / Best Beans / Responsible Farming. Hibrit IWT+ikon; en yakın features ama ayrı observation yazılmadı (bütçe).  
Örnekler: /pages/about-layout-1  
Öneri: leftover — hibrit  
Karar: onay bekliyor

---

ADAY: coffee-culture-compare-empty  
Gerekçe: `/pages/compare` “There are no products available to compare.” Compare drawer yok.  
Örnekler: /pages/compare  
Öneri: leftover — boş compare  
Karar: onay bekliyor

---

ADAY: coffee-culture-wishlist-empty  
Gerekçe: `/pages/wishlist` “No products were added to your wishlist.” Header wishlist ikon 1440’ta 0px.  
Örnekler: /pages/wishlist  
Öneri: leftover — boş wishlist  
Karar: onay bekliyor

---

ADAY: coffee-culture-policy-pages  
Gerekçe: Footer Terms / Return / Shipping / Privacy / Contact information. Kreis policy recipe’ye bakılmadı (Sprint 0 typical walk dışı).  
Örnekler: /policies/privacy-policy  
Öneri: leftover — yasal  
Karar: onay bekliyor

---

ADAY: coffee-culture-faq-alias-404  
Gerekçe: `/pages/faq` ve `/blogs/blog` 404 (`Page not found`). Canlı FAQ `/pages/faqs`, blog `/blogs/news`.  
Örnekler: /pages/faq · /blogs/blog  
Öneri: leftover — yok rota  
Karar: onay bekliyor

---

ADAY: coffee-culture-menu-drawer-1440-zero  
Gerekçe: 1440 `summary.header__icon--menu` 0×0. Hamburger yalnız 375/768.  
Örnekler: home header  
Öneri: leftover — 1440 N/A  
Karar: onay bekliyor
