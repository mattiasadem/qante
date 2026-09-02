# Bevaria leftovers / adaylar

*Store:* https://beverages-online-store.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Bevaria-v-1-5-0-latest-updates-new** · `schema_name` **Bevaria** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `150290759935` · role `main` · shop `beverages-online-store.myshopify.com`  
*Unlock:* vendor-published password `1` (ürün sayfası + title)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: bevaria-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Theme Store id uydurulmadı.  
Örnekler: https://beverages-online-store.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: bevaria-vendor-published-demo-password  
Gerekçe: Speedo ürün sayfası + title `(password: 1)`. Public storefront unlock; hesap değil. Capture `scripts/unlock-storefront.mjs` host map.  
Örnekler: https://speedothemes.com/products/bevaria-sophisticated-beverage-shopify-template-o-s-2-0  
Öneri: leftover — yayınlanmış demo şifresi  
Karar: onay bekliyor

---

ADAY: bevaria-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. GET THE NEWSLETTER GET 10% OFF. PII, dur.  
Örnekler: overlay-group newsletter-popup  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: bevaria-pdp-related-empty  
Gerekçe: `#…__related-products` 136px, metin boş. `product-showcase-related` yazılmadı.  
Örnekler: `/products/pura-mixed-flavors-low-sugar-soda-300ml`  
Öneri: leftover — boş/lazy kutu  
Karar: onay bekliyor

---

ADAY: bevaria-cart-footer-empty  
Gerekçe: `/cart` `#…__cart-footer` boşken h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://beverages-online-store.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: bevaria-native-policies-no-main  
Gerekçe: `/policies/privacy-policy` · refund · shipping · terms — başlık var, main shopify-section yok (yalnız header+footer).  
Örnekler: native Shopify policy URL  
Öneri: leftover — gövde yok  
Karar: onay bekliyor

---

ADAY: bevaria-about-layouts-2-4  
Gerekçe: `/pages/about-layout-2`–`4` vitrin varyantı. Footer About Us = layout-1 (envanterlendi).  
Örnekler: about-layout-2/3/4  
Öneri: leftover — aynı aile tekrar  
Karar: onay bekliyor

---

ADAY: bevaria-contact-layouts  
Gerekçe: `/pages/contact-layout-2`–`4`, `/pages/contact-us` ayrı form iskeleti. Footer Contact Us = `/pages/contact` (envanterlendi). layout-1 = contact ile aynı template. Map `map_iqhHBB` 680px — harita şeması yok.  
Örnekler: contact-layout-2 custom_contact_form · contact-us contact_form_TQQ3Yn  
Öneri: leftover — form/map varyant  
Karar: onay bekliyor

---

ADAY: bevaria-compare-wishlist-empty  
Gerekçe: `/pages/compare` “There are no products available to compare.” `/pages/wishlist` boş. Header 0 Wishlist / 0 Compare. Dolu hâl yoklandı değil.  
Örnekler: `/pages/compare` · `/pages/wishlist`  
Öneri: leftover — boş sayfa  
Karar: onay bekliyor

---

ADAY: bevaria-size-guide  
Gerekçe: `/pages/size-guide` kısa page main. İçecek demosu; ölçü tablosu anlamlı değil.  
Örnekler: `/pages/size-guide`  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: bevaria-collection-layout-1-3  
Gerekçe: `/collections/collection-layout-1` banner+grid (slider yok). Typical PLP `best-selling` (banner+slider+grid).  
Örnekler: collection-layout-1/2/3  
Öneri: leftover — PLP varyant  
Karar: onay bekliyor

---

ADAY: bevaria-404  
Gerekçe: `/blogs/blog` 404 “Page not found / Back To Homepage”.  
Örnekler: template--19375490662655__main  
Öneri: leftover — 404  
Karar: onay bekliyor

---

ADAY: bevaria-blogs-json-404  
Gerekçe: `/blogs.json` 404; `/blogs/news` HTML açık.  
Örnekler: GET /blogs.json  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: bevaria-fashion-leftover-copy  
Gerekçe: İçecek vitrininde giyim lorem: PDP/about “Made with Love / handcraft clothes”; Our Story “fashion-forward brand”; FAQ “whichever styles”.  
Örnekler: multicolumn_JJN6DY · /pages/our-story · /pages/faq  
Öneri: leftover — demo kopya sapması  
Karar: onay bekliyor

---

ADAY: bevaria-home-categories-slider-375-zero  
Gerekçe: Home `categories_slider_txebkg` 375'te bounding box 0 — capture skip. 768/1440 daire şerit var.  
Örnekler: home collection-nav-slider  
Öneri: leftover — mobil gizli  
Karar: onay bekliyor

---

ADAY: bevaria-sales-toast  
Gerekçe: Köşe “Someone liked and Buy …” toast (Verified). Overlay dismiss kaçırdı; PII/app. Şema yok.  
Örnekler: blog-post / PDP / PLP 1440 kareleri  
Öneri: leftover — üçüncü taraf toast  
Karar: onay bekliyor

---

ADAY: bevaria-overlay-static-closed  
Gerekçe: Static prepareClick cart/search/menu drawer açmadı (Dawn details). Kapalı homepage kare. Interact forceOpen.  
Örnekler: global-cart-drawer · global-predictive-search · global-menu-drawer  
Öneri: leftover — kapalı kare yalan  
Karar: onay bekliyor

---

ADAY: bevaria-search-wine-empty  
Gerekçe: `/search?q=wine` 0 sonuç. Envanter `q=energy` (8 sonuç).  
Örnekler: /search?q=wine  
Öneri: leftover — boş arama  
Karar: onay bekliyor
