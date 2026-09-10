# Hot Sauce leftovers / adaylar

*Store:* https://food-online-store-2.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Hot Sauce V-1.5.0** · `schema_name` **Hot Sauce** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `146022531235` · role `main` · shop `food-online-store-2.myshopify.com`  
*Unlock:* vendor-published password `1` (ürün sayfası)  
*Tarih:* 2026-09-10

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: hot-sauce-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Theme Store id uydurulmadı.  
Örnekler: https://food-online-store-2.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: hot-sauce-vendor-published-demo-password  
Gerekçe: Speedo ürün sayfası demo password `1`. Public storefront unlock; hesap değil. Capture `scripts/unlock-storefront.mjs` host map `food-online-store-2.myshopify.com`.  
Örnekler: https://speedothemes.com/products/hot-sauce-best-sauce-shop-shopify-2-0-theme  
Öneri: leftover — yayınlanmış demo şifresi  
Karar: onay bekliyor

---

ADAY: hot-sauce-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. GET THE NEWSLETTER GET 10% OFF. PII, dur.  
Örnekler: overlay-group newsletter-popup  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: hot-sauce-cart-footer-empty  
Gerekçe: `/cart` `#shopify-section-template--18878614274211__cart-footer` boşken h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://food-online-store-2.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: hot-sauce-wishlist-compare-empty  
Gerekçe: `/pages/wishlist` ve `/pages/compare` header sayaç 0. App/commerce overlay; yeni şema yok.  
Örnekler: https://food-online-store-2.myshopify.com/pages/wishlist · /pages/compare  
Öneri: leftover — boş app sayfası  
Karar: onay bekliyor

---

ADAY: hot-sauce-404  
Gerekçe: `/this-page-does-not-exist-qante` “404 · Page not found · BACK TO HOMEPAGE · CONTINUE SHOPPING”. `#shopify-section-template--18878614175907__main` 340px. `page-content-main` zorlanmadı.  
Örnekler: 404 template  
Öneri: leftover — 404 kabı  
Karar: onay bekliyor

---

ADAY: hot-sauce-related-products-empty  
Gerekçe: PDP `#shopify-section-template--18878615257251__related-products` 136px, metin/görsel yok. Kör `product-showcase-related` yazılmadı.  
Örnekler: `/products/chili-sauce-bottle-mockup`  
Öneri: leftover — boş related  
Karar: onay bekliyor

---

ADAY: hot-sauce-pdp-empty-section  
Gerekçe: `#shopify-section-template--18878615257251__172137309121bf68f7` h=0.  
Örnekler: PDP  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: hot-sauce-no-multi-variant  
Gerekçe: `products.json` 20 ürünün hepsi `Default Title`. Varyant swatch yok; PDP interact qty/tabs.  
Örnekler: `/products/chili-sauce-bottle-mockup`  
Öneri: leftover — varyant envanteri  
Karar: onay bekliyor

---

ADAY: hot-sauce-our-story-leaked-mains  
Gerekçe: `/pages/our-story` üç `__main`: `18878614864035` (Our Story) + `17003071078570` + `16960690290787` (aynı fashion placeholder). Yalnız birincisi `page-content-main`.  
Örnekler: https://food-online-store-2.myshopify.com/pages/our-story  
Öneri: leftover — şablon sızıntısı  
Karar: onay bekliyor

---

ADAY: hot-sauce-fashion-placeholder-copy  
Gerekçe: PDP multicolumn “handcraft clothes from soft natural fabrics”. Our Story “fashion-forward brand”.  
Örnekler: PDP / our-story  
Öneri: leftover — demo kopyası  
Karar: onay bekliyor

---

ADAY: hot-sauce-pdp-marquee-sibling  
Gerekçe: PDP `custom_announcement_bar_zqchrk` farklı kopya (Free shipping on orders over £75 / Kitchen ware / SPEEDO). Home marquee Secure Payments. Aynı tip ikinci kopya leftover.  
Örnekler: PDP  
Öneri: leftover — sibling marquee  
Karar: onay bekliyor

---

ADAY: hot-sauce-native-policy-empty-main  
Gerekçe: `/policies/privacy-policy` title Privacy policy; shopify-section listesinde gövde yok (yalnız announcement/header/newsletter/footer). Native policy kabı; `policy-page-layout` üç kolon değil.  
Örnekler: https://food-online-store-2.myshopify.com/policies/privacy-policy  
Öneri: leftover — native policy  
Karar: onay bekliyor

---

ADAY: hot-sauce-menu-drawer-1440-zero  
Gerekçe: `summary.header__icon--menu` 1440'te 0×0 beklenir. Open yalnız 375/768.  
Örnekler: home hamburger  
Öneri: leftover — masaüstü drawer host yok  
Karar: onay bekliyor

---

ADAY: hot-sauce-social-proof-toast  
Gerekçe: Birçok 3vp karede sol alt “Someone liked and Buy …” toast. Overlay dismiss etmedi. PII değil; app/social-proof overlay. Yeni şema yok.  
Örnekler: home/blog/PDP evidence  
Öneri: leftover — toast  
Karar: onay bekliyor

---

ADAY: hot-sauce-you-may-like-empty-drawer  
Gerekçe: `#CartDrawer` sağ panelde **YOU MAY LIKE** + Hot Sauces Smoky & Roasted ADD TO CART — hem boş hem dolu (Chili Sauce qty 1/2) drawer interact karelerinde. Food-drink leftover ile aynı aile.  
Örnekler: `global-cart-drawer.initial.cart-bos.1440.png` · `global-cart-drawer.filled.sepete-eklendi.1440.png`  
Öneri: leftover — drawer upsell  
Karar: onay bekliyor

---

ADAY: hot-sauce-about-contact-layout-pages  
Gerekçe: about-layout-1–4, contact-layout-1–4 Themes mega altında. Typical walk our-story + contact; layout varyantları açılmadı.  
Örnekler: `/pages/about-layout-1` …  
Öneri: leftover — ekstra layout sayfaları  
Karar: onay bekliyor
