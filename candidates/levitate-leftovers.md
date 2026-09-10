# Levitate leftovers / adaylar

*Store (walk):* https://backpack-online-store-2.myshopify.com/  
*Ürün:* https://speedothemes.com/products/levitate-purse-bags-shopify-2-0-template  
*Tema (görülen, uydurulmadı):* **Levitate V-1.5.0** · `schema_name` **Purse & Bags** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `178196283681` · role `main`  
*Shopify.shop:* `backpack-online-store-2.myshopify.com`  
*Tarih:* 2026-09-10

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: levitate-password-wall  
Gerekçe: GET `/` storefront password. Speedo ürün sayfası password `1` yayınlıyor. Aynı host `/password`.  
Örnekler: https://backpack-online-store-2.myshopify.com/password  
Öneri: leftover — official unlock, başka host yok  
Karar: onay bekliyor

---

ADAY: levitate-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo third-party; Theme Store id uydurulmadı.  
Örnekler: home `Shopify.theme`  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: levitate-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. PII / e-posta, dur.  
Örnekler: overlay newsletter-popup  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: levitate-storefront-search-empty  
Gerekçe: `/search?q=bag|leather|messenger|bowling|woman|ANDIBRO` ürün 0. Predictive + `suggest.json` aynı sorguda ürün döner. `q=*` yalnız sayfa (Contact layout, Size guide…).  
Örnekler: https://backpack-online-store-2.myshopify.com/search?q=ANDIBRO  
Öneri: leftover — vitrin arama indeksi boş  
Karar: onay bekliyor

---

ADAY: levitate-related-products-empty  
Gerekçe: PDP `#shopify-section-template--24569858916641__related-products` h=136, ürün yok.  
Örnekler: `/products/sports-charms-bogg-bag`  
Öneri: leftover — boş sibling  
Karar: onay bekliyor

---

ADAY: levitate-pdp-empty-section  
Gerekçe: Bazı PDP’de `__172137309121bf68f7` h=0.  
Örnekler: `/products/womans-strap-messenger-bag`  
Öneri: leftover — boş sibling  
Karar: onay bekliyor

---

ADAY: levitate-cart-footer-zero  
Gerekçe: `#shopify-section-template--24569857769761__cart-footer` h=0 empty cart.  
Örnekler: `/cart`  
Öneri: leftover — boş sibling  
Karar: onay bekliyor

---

ADAY: levitate-wishlist-page  
Gerekçe: `/pages/wishlist` — No products were added to your wishlist. Header 0 count. Ayrı wishlist şeması yok.  
Örnekler: https://backpack-online-store-2.myshopify.com/pages/wishlist  
Öneri: leftover — commerce-tools adayı  
Karar: onay bekliyor

---

ADAY: levitate-compare-page  
Gerekçe: `/pages/compare` — There are no products available to compare. Header compare 0.  
Örnekler: https://backpack-online-store-2.myshopify.com/pages/compare  
Öneri: leftover — commerce-tools / compare  
Karar: onay bekliyor

---

ADAY: levitate-size-guide  
Gerekçe: `/pages/size-guide` — breadcrumbs + ince sayfa. Taksonomide size-guide pageType yok.  
Örnekler: https://backpack-online-store-2.myshopify.com/pages/size-guide  
Öneri: leftover — içerik sayfa  
Karar: onay bekliyor

---

ADAY: levitate-about-extra-layouts  
Gerekçe: Footer About Us = `/pages/about-layout-1`. `/pages/about` home’a düşer. `/pages/about-us` 404. `about-layout-2` / `about-layout-3` / `our-story` ekstra preset sayfalar.  
Örnekler: /pages/about-layout-2 · /pages/about-layout-3 · /pages/our-story  
Öneri: leftover — ekstra about varyant  
Karar: onay bekliyor

---

ADAY: levitate-contact-layout-1  
Gerekçe: `/pages/contact` basit form. `/pages/contact-layout-1` parallax + ofis + form+görsel + map (h=680, innerText boş).  
Örnekler: https://backpack-online-store-2.myshopify.com/pages/contact-layout-1  
Öneri: leftover — map + extra contact  
Karar: onay bekliyor

---

ADAY: levitate-cross-theme-copy  
Gerekçe: PDP `sub_banner` WOODEN BLOCK ANIMALS / TERRA SPECKLE COTTA; multicolumn “handcraft clothes” — çanta vitrini değil, başka Speedo demo kopyası.  
Örnekler: `/products/sports-charms-bogg-bag`  
Öneri: leftover — kopya sapması (şema değil)  
Karar: onay bekliyor

---

ADAY: levitate-about-empty-logos  
Gerekçe: about-layout-1 `brand_logo_k3ngrY` h=211, innerText boş.  
Örnekler: `/pages/about-layout-1`  
Öneri: leftover — boş sibling  
Karar: onay bekliyor
