# Spotlight leftovers / adaylar

*Store:* https://theme-spotlight-demo.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Spotlight-8.0.0** · `schema_name` **Spotlight** · `schema_version` **8.0.0** · `theme_store_id` **null** · role `main` · id `130861334584` · shop `theme-spotlight-demo.myshopify.com`  
*Theme Store listing (beklenen, storefront alanı değil):* Spotlight · [themes.shopify.com/themes/spotlight](https://themes.shopify.com/themes/spotlight)  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: spotlight-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. `schema_name` Spotlight, `schema_version` 8.0.0, `name` Spotlight-8.0.0. Theme Store slug spotlight; storefront sayı yazmıyor.  
Örnekler: https://theme-spotlight-demo.myshopify.com/  
Öneri: leftover — gözlenen alan  
Karar: onay bekliyor

---

ADAY: spotlight-404-routes  
Gerekçe: Aynı 404 (404 / Page not found / Continue shopping): `/pages/about` `/pages/about-us` `/pages/faq` `/pages/faqs` `/pages/shipping` `/policies/privacy-policy` `/policies/refund-policy` `/blogs/journal` `/blogs/spotlight`. Observation `not-found/page-content-main`. Taksonomide 404 pageType yok.  
Örnekler: https://theme-spotlight-demo.myshopify.com/pages/about  
Öneri: leftover — yok sayfa  
Karar: onay bekliyor

---

ADAY: spotlight-no-mega-no-hamburger  
Gerekçe: Header yalnız logo + arama + Cart. `header__inline-menu` linki yok. Mega panel yok. `header-drawer` / `.header__icon--menu` 375/768/1440 yok. `global-menu-drawer` observation yazılmadı.  
Örnekler: https://theme-spotlight-demo.myshopify.com/  
Öneri: leftover — header delta  
Karar: onay bekliyor

---

ADAY: spotlight-cart-notification-not-drawer  
Gerekçe: `cart-drawer` yok. Add → `#cart-notification` popup. Sepet ikonu `/cart`. `global-cart-drawer` observation + delta. Qty cart sayfasında.  
Örnekler: https://theme-spotlight-demo.myshopify.com/products/ebbets-corduroy-cap-yellow  
Öneri: leftover — overlay tipi  
Karar: observation yazıldı

---

ADAY: spotlight-no-variant-picker  
Gerekçe: `/products.json` 12 ürün, hepsi `Default Title`. `variant-radios` / `variant-selects` yok. Renk ayrı handle (`ebbets-corduroy-cap-yellow`, `copy-of-ebbets-wool-c-cap-navy` sold out). PDP `changed` yok.  
Örnekler: https://theme-spotlight-demo.myshopify.com/products/ebbets-corduroy-cap-yellow  
Öneri: leftover — katalog modeli  
Karar: onay bekliyor

---

ADAY: spotlight-related-products-zero  
Gerekçe: PDP `template--15939470196792__related-products` h≈36, metin yok. Şema yazılmadı.  
Örnekler: https://theme-spotlight-demo.myshopify.com/products/ebbets-corduroy-cap-yellow  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: spotlight-empty-blog  
Gerekçe: `/blogs/news` yalnız “News” başlığı; article sitemap/JSON yok. `blog-list-main` observation var. `blog-post` yok.  
Örnekler: https://theme-spotlight-demo.myshopify.com/blogs/news  
Öneri: leftover — boş liste  
Karar: observation yazıldı

---

ADAY: spotlight-collections-text-list  
Gerekçe: `/collections` `#collections-listing` (shopify-section yok): “Product Collections” + tek satır Home page products. Görsel kart yok. `collection-nav-grid` + delta. Tek koleksiyon API: `frontpage` (Home page, 5 ürün). `/collections/all` Products PLP.  
Örnekler: https://theme-spotlight-demo.myshopify.com/collections  
Öneri: leftover — ince index  
Karar: observation yazıldı

---

ADAY: spotlight-frontpage-plp-sibling  
Gerekçe: `/collections/frontpage` aynı banner+grid template (`Collection: Home page`). 3vp `/collections/all` kanonik; frontpage tekrar çekilmedi.  
Örnekler: https://theme-spotlight-demo.myshopify.com/collections/frontpage  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: spotlight-no-announcement  
Gerekçe: `promo-announcement-bar` DOM’da yok.  
Örnekler: https://theme-spotlight-demo.myshopify.com/  
Öneri: leftover — section yok  
Karar: onay bekliyor

---

ADAY: spotlight-pii-stop  
Gerekçe: Contact Send ve e-posta/account/checkout/Buy it now tıklanmadı. Newsletter alanı yok.  
Örnekler: https://theme-spotlight-demo.myshopify.com/pages/contact  
Öneri: PII stop  
Karar: onay bekliyor
