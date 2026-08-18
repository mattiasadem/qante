# Rise leftovers / adaylar

*Store:* https://theme-rise-demo.myshopify.com  
*Walk:* `/en` (hreflang en; default `/` = ja)  
*Tema (görülen, uydurulmadı):* **rise/rise/demo-store** · `schema_name` **Rise** · `schema_version` **1.0.0** · `theme_store_id` **null** · role `main` · id `163183165462` · shop `a7c44a-4.myshopify.com`  
*Theme Store listing:* https://themes.shopify.com/themes/rise — Free · by Shopify  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: rise-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. `schema_name` Rise, `schema_version` 1.0.0, name `rise/rise/demo-store`. Sayısal Theme Store id uydurulmadı.  
Örnekler: https://theme-rise-demo.myshopify.com/  
Öneri: leftover — gözlenen değer null  
Karar: onay bekliyor

---

ADAY: rise-default-locale-ja  
Gerekçe: Resmi host default `/` `lang=ja` (カタログ / ブログ). `hreflang` en → `/en`. Walk `/en` (görev: locale-prefix OK). Aynı tema id / schema.  
Örnekler: https://theme-rise-demo.myshopify.com/ · https://theme-rise-demo.myshopify.com/en  
Öneri: leftover — default Japonca  
Karar: onay bekliyor

---

ADAY: rise-no-image-mega  
Gerekçe: 1440 Catalog/Blog/Contact düz `.header__inline-menu a`. Hover Catalog panel açmadı. Görsel kolon / promo kart yok. `navigation-header-mega` + delta.  
Örnekler: https://theme-rise-demo.myshopify.com/en/  
Öneri: leftover — düz link nav ≠ image mega  
Karar: onay bekliyor

---

ADAY: rise-menu-1440-hamburger  
Gerekçe: 1440 `summary.header__icon--menu` 0×0. Drawer yalnız 375/768 (44×44). Accordion yok — Catalog/Blog/Contact + Language.  
Örnekler: `#Details-menu-drawer-container`  
Öneri: leftover — 1440 hamburger yok; drill-down yok  
Karar: onay bekliyor

---

ADAY: rise-cart-notification  
Gerekçe: `cart-drawer` yok. ATC sonrası `#cart-notification` popup. Cart ikon `/en/cart`. Boş notification yok; adet stepper notification’da yok.  
Örnekler: White hoodie ATC  
Öneri: leftover — Dawn notification ≠ side drawer  
Karar: onay bekliyor

---

ADAY: rise-about-404  
Gerekçe: `/en/pages/about` `/pages/about` `/en/pages/about-us` 404. Sitemap tek sayfa: `/pages/contact`. About içeriği yok.  
Örnekler: https://theme-rise-demo.myshopify.com/en/pages/about  
Öneri: leftover — about şablonu yok  
Karar: onay bekliyor

---

ADAY: rise-policy-404  
Gerekçe: `/policies/privacy-policy` ve `/en/policies/privacy-policy` 404 (aynı `main-404`). Native policy gövdesi yok.  
Örnekler: https://theme-rise-demo.myshopify.com/en/policies/privacy-policy  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: rise-blog-handle-news  
Gerekçe: `/en/blogs/news` `/blogs/news` `/blogs/journal` 404. Gerçek handle `ニュース` (`/en/blogs/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9`).  
Örnekler: https://theme-rise-demo.myshopify.com/en/blogs/news  
Öneri: leftover — İngilizce /news yok  
Karar: onay bekliyor

---

ADAY: rise-no-collection-banner  
Gerekçe: PLP yalnız `#…__product-grid` (sort + filter + ızgara). Ayrı collection-banner section yok.  
Örnekler: https://theme-rise-demo.myshopify.com/en/collections/all  
Öneri: leftover — Dawn collection title ızgara içinde  
Karar: onay bekliyor

---

ADAY: rise-related-empty  
Gerekçe: PDP `#…__related-products` ~64px, metin/kart yok (`product-recommendations`).  
Örnekler: `/en/products/sand-shorts`  
Öneri: leftover — boş rec, observation yazılmadı  
Karar: onay bekliyor

---

ADAY: rise-cart-footer-empty  
Gerekçe: `#…__cart-footer` boş sepette 0px. Dolu sepette totals. Featured “Shop our best sellers” ayrı obs.  
Örnekler: `/en/cart`  
Öneri: leftover — footer section boşken 0  
Karar: onay bekliyor

---

ADAY: rise-footer-no-newsletter  
Gerekçe: Footer Language + Payment methods + © 2026 Rise. Newsletter input yok. `footer-columns-newsletter` + delta.  
Örnekler: home footer  
Öneri: leftover — newsletter band yok  
Karar: onay bekliyor

---

ADAY: rise-image-banner-no-copy  
Gerekçe: Home image-banner iki yarım görsel, heading/CTA boş.  
Örnekler: `#…__image-banner`  
Öneri: leftover — metinsiz banner  
Karar: onay bekliyor

---

ADAY: rise-collections-cart-sku  
Gerekçe: `/en/collections` kartları arasında “Cart” koleksiyonu (`/en/collections/cart`). Template koleksiyon, sepet değil.  
Örnekler: https://theme-rise-demo.myshopify.com/en/collections  
Öneri: leftover — isim çakışması  
Karar: onay bekliyor

---

ADAY: rise-plp-template-repeats  
Gerekçe: `/en/collections/mens` (9) ve diğerleri aynı `product-grid` şablon. Yazılan: `/en/collections/all` (19).  
Örnekler: https://theme-rise-demo.myshopify.com/en/collections/mens  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: rise-search-zero-chair  
Gerekçe: `/search?q=chair` 0 results (ja title). Claiming sorgu `hoodie` (17).  
Örnekler: https://theme-rise-demo.myshopify.com/en/search?q=chair  
Öneri: leftover — boş sonuç karesi ayrıca çekilmedi  
Karar: onay bekliyor

---

ADAY: rise-search-iro-facet  
Gerekçe: `/en/search?q=hoodie` facet etiketi `色` (renk, çeviri kalıntısı).  
Örnekler: search main  
Öneri: leftover — locale karışımı  
Karar: onay bekliyor

---

ADAY: rise-404-routes  
Gerekçe: Aynı 404 (`__main` Page not found + Continue shopping): `/en/pages/about` `/en/blogs/news` `/en/policies/privacy-policy` + rastgele path.  
Örnekler: https://theme-rise-demo.myshopify.com/en/pages/this-does-not-exist-xyz-rise  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

ADAY: rise-pii-stop  
Gerekçe: Contact Send + checkout + language switch submit + account yok (ikon da yok). Newsletter yok.  
Örnekler: `/en/pages/contact` · cart Check out  
Öneri: PII / checkout stop  
Karar: onay bekliyor
