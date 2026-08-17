# Horizon leftovers / adaylar

*Store:* https://theme-horizon-demo.myshopify.com  
*Tema (görülen, uydurulmadı):* **Horizon demo store 3.2.0** · `schema_name` **Horizon** 3.2.0 · `theme_store_id` **2481** · role `main` · id `182785212737` · shop `se-horizon1-en-fk7v.myshopify.com`  
*Theme Store listing:* https://themes.shopify.com/themes/horizon — Free · by Shopify · Horizon family base  
*Tarih:* 2026-08-17

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: horizon-no-image-mega  
Gerekçe: 1440/768 Shop ve Contact `a.menu-list__link`. Hover Shop panel açmadı. Görsel kolon / promo kart yok. `navigation-header-mega` + delta.  
Örnekler: https://theme-horizon-demo.myshopify.com/  
Öneri: leftover — düz link nav ≠ image mega  
Karar: onay bekliyor

---

ADAY: horizon-menu-768-desktop  
Gerekçe: 768 hamburger `summary[aria-label=Menu]` 0×0. Shop/Contact masaüstü nav. Drawer yalnız 375.  
Örnekler: `#Details-menu-drawer-container`  
Öneri: leftover — 768 hamburger yok  
Karar: onay bekliyor

---

ADAY: horizon-search-header-section  
Gerekçe: `/search?q=wool` sibling `#…__search` (search-page-input-component, “Search results” + input). Sonuç ızgarası `search-results` observation. Ayrı şema yok.  
Örnekler: https://theme-horizon-demo.myshopify.com/search?q=wool  
Öneri: leftover — Horizon `search-header.liquid`  
Karar: onay bekliyor

---

ADAY: horizon-footer-utilities  
Gerekçe: Sibling `#…__footer_utilities` — “© 2026 Horizon, Powered by Shopify”. Newsletter `footer-columns-newsletter`.  
Örnekler: home footer group  
Öneri: leftover — copyright bar  
Karar: onay bekliyor

---

ADAY: horizon-404-routes  
Gerekçe: Aynı 404 (`main-404` Page not found + Discover something new): `/pages/about-us` `/pages/contact-us` `/pages/faq` `/pages/faq-page` `/blogs/journal` `/blogs/blog` + rastgele path. Observation `not-found/page-content-main` + product-list.  
Örnekler: https://theme-horizon-demo.myshopify.com/pages/about-us  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

ADAY: horizon-search-zero-chair  
Gerekçe: `/search?q=chair` başlık 0 results; `__main` yine ürün ızgarası gösterdi. Yazılan sorgu `wool` (39).  
Örnekler: https://theme-horizon-demo.myshopify.com/search?q=chair  
Öneri: leftover — boş sonuç karesi ayrıca çekilmedi  
Karar: onay bekliyor

---

ADAY: horizon-plp-template-repeats  
Gerekçe: `/collections/mens-outerwear` (17) ve diğer kategori koleksiyonları aynı `section` + `main` şablon. Yazılan: `/collections/all` (176).  
Örnekler: https://theme-horizon-demo.myshopify.com/collections/mens-outerwear  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: horizon-quick-add-dialog  
Gerekçe: `quick-add-dialog` / `quick-add-component` kartta “Choose”. Overlay adayı; `global-quick-view` zorlanmadı.  
Örnekler: home featured / PLP kart  
Öneri: leftover — quick-add ≠ quick-view şema  
Karar: onay bekliyor

---

ADAY: horizon-account-drawer  
Gerekçe: Header Account → `account-drawer` / `anchored-popover-component` (Sign in / Orders / Profile). Tıklanmadı.  
Örnekler: header-actions  
Öneri: PII / account stop  
Karar: onay bekliyor

---

ADAY: horizon-pii-stop  
Gerekçe: Footer newsletter + contact Submit + checkout + login tıklanmadı.  
Örnekler: footer · `/pages/contact` · cart Check out  
Öneri: PII / checkout stop  
Karar: onay bekliyor

---

ADAY: horizon-generic-section-wrapper  
Gerekçe: PLP başlık, blog post, contact form Horizon `section.liquid` + nested theme-blocks. Tip `section` — yeni şema açılmadı; mevcut tipe map.  
Örnekler: `#…__section` Products; blog-post `#…__section`  
Öneri: leftover — generic wrapper, şema yok  
Karar: onay bekliyor
