# Food & Drink leftovers / adaylar

*Store:* https://food-online-store-1.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Food & Drink V-1.5.0** · `schema_name` **Food & Drink** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `138021077169` · role `main` · shop `food-online-store-1.myshopify.com`  
*Unlock:* vendor-published password `1` (ürün sayfası + title `(password: 1)`)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: food-drink-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Theme Store id uydurulmadı.  
Örnekler: https://food-online-store-1.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: food-drink-vendor-published-demo-password  
Gerekçe: Speedo ürün sayfası demo password `1`. Title `(password: 1)`. Public storefront unlock; hesap değil. Capture `scripts/unlock-storefront.mjs` host map.  
Örnekler: https://speedothemes.com/products/food-drink-shopify-restaurant-theme-shopify-os-2-0  
Öneri: leftover — yayınlanmış demo şifresi  
Karar: onay bekliyor

---

ADAY: food-drink-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. PII, dur.  
Örnekler: overlay-group newsletter-popup  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: food-drink-cart-footer-empty  
Gerekçe: `/cart` `#shopify-section-template--17265142399153__cart-footer` boşken h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://food-online-store-1.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: food-drink-wishlist-compare-empty  
Gerekçe: `/pages/wishlist` “No products were added to your wishlist.” `/pages/compare` “There are no products available to compare.” Header sayaç 0. App/commerce overlay; yeni şema yok.  
Örnekler: https://food-online-store-1.myshopify.com/pages/wishlist · /pages/compare  
Öneri: leftover — boş app sayfası  
Karar: onay bekliyor

---

ADAY: food-drink-404  
Gerekçe: `/this-page-does-not-exist-qante` “404 · Page not found · CONTINUE SHOPPING”. `#shopify-section-template--17265142300849__main` 219px. `page-content-main` zorlanmadı.  
Örnekler: 404 template  
Öneri: leftover — 404 kabı  
Karar: onay bekliyor

---

ADAY: food-drink-hero-placeholder-links  
Gerekçe: Hero SHOP NOW → `/collections/all` ama slayt linkleri `/collections/women-collection` ve `/collections/men-collection` (moda placeholder).  
Örnekler: home slideshow  
Öneri: leftover — demo kopyası  
Karar: onay bekliyor

---

ADAY: food-drink-sub-banner-empty-href  
Gerekçe: Home sub-banner SHOP NOW `href` boş.  
Örnekler: `#shopify-section-template--17265142694065__sub_banner_HBn9KN`  
Öneri: leftover — ölü CTA  
Karar: onay bekliyor

---

ADAY: food-drink-menu-drawer-1440-zero  
Gerekçe: `summary.header__icon--menu` 1440'te 0×0 beklenir. Open yalnız 375/768.  
Örnekler: home hamburger  
Öneri: leftover — masaüstü drawer host yok  
Karar: onay bekliyor

---

ADAY: food-drink-single-multi-variant  
Gerekçe: `products.json` 40 üründen yalnız `natural-cows-milk` çoklu varyant (Fat-free / Full fat / Low fat). Diğerleri Default Title.  
Örnekler: `/products/natural-cows-milk`  
Öneri: leftover — varyant envanteri  
Karar: onay bekliyor

---

ADAY: food-drink-quick-view-unconfirmed  
Gerekçe: Home DOM taraması `[id*='quick']` true döndü; açık modal/selector doğrulanmadı. Kör `global-quick-view` observation yazılmadı.  
Örnekler: home featured ADD TO CART  
Öneri: leftover — QV yoklandıktan sonra  
Karar: onay bekliyor

---

ADAY: food-drink-native-policy  
Gerekçe: Policy sayfası walk'ta açılmadı. Native `/policies/*` gövdesi beklenir; `policy-page-layout` üç kolon değil.  
Örnekler: (açılmadı)  
Öneri: leftover — native policy varsayımı  
Karar: onay bekliyor
