# PAW leftovers / adaylar

*Store (walk):* https://petz-online-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/speedo-petz-shopify-theme-os-2-0  
*Tema (görülen, uydurulmadı):* **petz-online-store-v-1-5-0** · `schema_name` **petz_online_store** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `176281059615` · role `main`  
*Shopify.shop:* `petz-online-store.myshopify.com`  
*Vendor:* Speedo Themes (third-party, Theme Store resmi değil)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: paw-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo ürün sayfası Theme Store id vermiyor; uydurulmadı.  
Örnekler: https://petz-online-store.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: paw-password-in-shop-name  
Gerekçe: Title/shop adı `petz online store (password: 1)`. Vendor ürün sayfasında demo şifresi `1`. Walk'ta `/password` formu yoktu (mağaza açıktı). Başka host denenmedi.  
Örnekler: document.title  
Öneri: leftover — branding / unlock notu  
Karar: onay bekliyor

---

ADAY: paw-no-mega  
Gerekçe: `.mega-menu` yok. 1440 SHOP ALL = `#Details-HeaderMenu-2` + `header__submenu` dikey liste (görsel/promo kolon yok). `navigation-header-mega` yazıldı; delta: dropdown.  
Örnekler: https://petz-online-store.myshopify.com/ `#Details-HeaderMenu-2`  
Öneri: leftover — mega yok  
Karar: onay bekliyor

---

ADAY: paw-wishlist-translation-missing  
Gerekçe: Drawer/header wishlist `Translation missing: en.general.wishli…` → `/pages/wishlist`. Wishlist şeması yok; observation yazılmadı.  
Örnekler: `#menu-drawer`  
Öneri: leftover — i18n + wishlist sayfası  
Karar: onay bekliyor

---

ADAY: paw-related-products-empty  
Gerekçe: PDP `#…__related-products` h≈28, metin yok. Hydrate yok. `product-showcase-related` yazılmadı.  
Örnekler: `/products/cat-costumes-clothes-spring-summer-pet-clothing`  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: paw-instagram-repeat  
Gerekçe: INSTAGRAM FEED home + PDP + about + contact + faq + blog-list. Yalnız home `media-shop-the-feed` yazıldı.  
Örnekler: `#…__1664542365da5428c5` ve kardeş section id'ler  
Öneri: leftover — tekrar instance  
Karar: onay bekliyor

---

ADAY: paw-about-count-down-stats  
Gerekçe: About `#…__51224879-088d-4d75-a2a2-2d091349b037` class `count-down` ama timer değil: 225 / 375 / 375 / 140 sayı kartları (Times in top 10 Chats, Media Partners…). `promo-banner-countdown` timer+ürün; uymuyor. Şema icat edilmedi.  
Örnekler: https://petz-online-store.myshopify.com/pages/about-us  
Öneri: leftover — stats/counter  
Karar: onay bekliyor

---

ADAY: paw-meet-the-team  
Gerekçe: About `meet-the-team` (Jacob Jones / Arlene McCoy / Leslie Alexander + alıntı + sosyal). `features-multicolumn` reuse + delta. Ayrı team şeması yok.  
Örnekler: `#…__d86fa93f-c47c-4470-b4f4-ff3d051a8848`  
Öneri: leftover — özel Speedo section  
Karar: onay bekliyor

---

ADAY: paw-empty-image-banners  
Gerekçe: Contact/FAQ üst banner (≈501px) metinsiz. About banner observation yazıldı; contact/faq tekrar yazılmadı.  
Örnekler: `/pages/contact` `__16648751928ffa5a25` · `/pages/faq` `__d7eb4dd2-…`  
Öneri: leftover — tekrar boş banner  
Karar: onay bekliyor

---

ADAY: paw-cart-footer-split  
Gerekçe: `#…__cart-items` + `#…__cart-footer` ayrı section. Boşken footer h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://petz-online-store.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: paw-pretty-cat-size-sold-out  
Gerekçe: `/products/2pcs-set-pretty-cat-clothing` Size XS–XL “Variant sold out or unavailable”. Interact Color için `/products/cat-costumes-clothes-spring-summer-pet-clothing` Pink→White seçildi. Chicken Pulao varyantsız ATC.  
Örnekler: PDP Size radios  
Öneri: leftover — sold-out size set  
Karar: onay bekliyor

---

ADAY: paw-pages-about-faqs-404  
Gerekçe: `/pages/about` ve `/pages/faqs` ve `/pages/contact-us` 404. Yaşayan: `/pages/about-us` · `/pages/faq` · `/pages/contact`.  
Örnekler: 404 main  
Öneri: leftover — yanlış slug  
Karar: onay bekliyor

---

ADAY: paw-newsletter-pii  
Gerekçe: Home newsletter + footer `#ContactFooter` + contact Send. PII — dur.  
Örnekler: form#contact_form · form#ContactFooter  
Öneri: leftover — submit yok  
Karar: onay bekliyor

---

ADAY: paw-account-checkout  
Gerekçe: Checkout / Log in / account yoklandı değil.  
Örnekler: #CartDrawer-Checkout · header  
Öneri: leftover — PII/ödeme dur  
Karar: onay bekliyor
