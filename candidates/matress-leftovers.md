# Matress leftovers / adaylar

*Store (walk):* https://mattress-online-store-1.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/matress-best-mattress-store-shopify-2-0-theme  
*Tema (görülen, uydurulmadı):* **matress-v-1-5-0-latest-updates-new** · `schema_name` **Matress** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `126821171258` · role `main` · handle `"null"`  
*Shopify.shop:* `mattress-online-store-1.myshopify.com`  
*Unlock:* vendor-published password `1` — “Please enter password "1" to view demo.”  
*Tarih:* 2026-09-10

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: matress-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Theme Store id uydurulmadı.  
Örnekler: https://mattress-online-store-1.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: matress-vendor-published-demo-password  
Gerekçe: Speedo ürün sayfası “Please enter password "1" to view demo.” GET `/` → `/password`. Public storefront unlock; hesap değil. Capture `scripts/unlock-storefront.mjs` host map.  
Örnekler: https://speedothemes.com/products/matress-best-mattress-store-shopify-2-0-theme · https://mattress-online-store-1.myshopify.com/password  
Öneri: leftover — yayınlanmış demo şifresi  
Karar: onay bekliyor

---

ADAY: matress-newsletter-popup-zenon  
Gerekçe: `#shopify-section-newsletter-popup` roster’da h=0. GET THE NEWSLETTER GET 10% OFF. PII — submit yok. `dismiss-overlays.mjs` kapatır.  
Örnekler: overlay-group `newsletter-popup`  
Öneri: leftover — Speedo newsletter overlay  
Karar: onay bekliyor

---

ADAY: matress-pdp-related-empty  
Gerekçe: PDP `#shopify-section-template--15527145701434__related-products` h=136, innerText boş. Ürün kartı hydrate olmadı.  
Örnekler: `/products/duo-plus-mattress`  
Öneri: leftover — boş sibling  
Karar: onay bekliyor

---

ADAY: matress-pdp-zero-section  
Gerekçe: `#shopify-section-template--15527145701434__172137309121bf68f7` h=0, metin yok.  
Örnekler: PDP main sonrası  
Öneri: leftover — boş sibling  
Karar: onay bekliyor

---

ADAY: matress-cart-footer-zero  
Gerekçe: `#shopify-section-template--15527144718394__cart-footer` h=0 empty cart.  
Örnekler: `/cart`  
Öneri: leftover — boş sibling  
Karar: onay bekliyor

---

ADAY: matress-contact-map  
Gerekçe: `/pages/contact` contact_form bloğunda iframe (map). Taksonomide map tipi yok; form observation’a zorlanmadı.  
Örnekler: https://mattress-online-store-1.myshopify.com/pages/contact  
Öneri: leftover — harita embed  
Karar: onay bekliyor

---

ADAY: matress-wishlist  
Gerekçe: Header/drawer `.wishlist` → `/pages/wishlist`. Wishlist şeması yok.  
Örnekler: https://mattress-online-store-1.myshopify.com/pages/wishlist  
Öneri: leftover — wishlist sayfası  
Karar: onay bekliyor

---

ADAY: matress-compare-page  
Gerekçe: `/pages/compare`. Header Compare 0. `global-compare-drawer` tetiklenmedi.  
Örnekler: https://mattress-online-store-1.myshopify.com/pages/compare  
Öneri: leftover — compare boş sayfa  
Karar: onay bekliyor

---

ADAY: matress-size-guide  
Gerekçe: `/pages/size-guide` menüde. Taksonomide size-guide pageType yok.  
Örnekler: https://mattress-online-store-1.myshopify.com/pages/size-guide  
Öneri: leftover — içerik sayfa  
Karar: onay bekliyor

---

ADAY: matress-extra-page-layouts  
Gerekçe: Footer/mega: about-layout-1..4, contact-layout-1..4, our-story. Typical walk `/pages/about-us` + `/pages/contact` aldı; ekstra layout’lar tekrar envanterlenmedi.  
Örnekler: `/pages/about-layout-1` · `/pages/contact-layout-1`  
Öneri: leftover — vendor layout varyantları  
Karar: onay bekliyor

---

ADAY: matress-clothing-copy-bleed  
Gerekçe: PDP/about/FAQ metinleri “handcraft clothes”, “10% OFF on all clothing”, “swap out my items” — yatak teması değil, Speedo giyim şablon kopyası.  
Örnekler: PDP `multicolumn_VH4Wqb` · FAQ accordion  
Öneri: leftover — demo içerik sapması  
Karar: onay bekliyor

---

ADAY: matress-quick-add-no-quick-view  
Gerekçe: Featured slider kartlarda `quick-add__submit`. `#QuickView` / `quick-view` overlay DOM’da yok.  
Örnekler: home `featured_product_slider_nxrkYp`  
Öneri: leftover — quick-view overlay yok  
Karar: onay bekliyor
