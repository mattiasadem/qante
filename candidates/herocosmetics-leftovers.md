# Hero Cosmetics leftovers / adaylar

*Store:* https://herocosmetics.com → https://www.herocosmetics.us/  
*Tema (görülen, uydurulmadı):* **CleansersFullLaunch - 080426 M** · `schema_name` **Hero Cosmetics** 2.0.0 · custom (`theme_store_id` null) · id `149057110058` · shop `tbate.myshopify.com`  
*Tarih:* 2026-08-16

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.  
Eksik resmi 3vp capture leftover değildir — 375 boşluklar `capture-observation.mjs` ile kapatıldı.

---

ADAY: herocosmetics-com-redirect  
Gerekçe: `https://herocosmetics.com/` 302 → `https://herocosmetics.us/` 301 → `https://www.herocosmetics.us/`. Walk canonical US host.  
Örnekler: https://herocosmetics.com/  
Öneri: leftover — domain redirect  
Karar: onay bekliyor

---

ADAY: herocosmetics-cart-page-missing  
Gerekçe: `/cart` home'a `/?cart=true`. Sepet yalnız `#mocart` drawer. `cart-page-main` yazılmadı.  
Örnekler: https://www.herocosmetics.us/cart  
Öneri: leftover — drawer-only  
Karar: onay bekliyor

---

ADAY: herocosmetics-yotpo-reviews  
Gerekçe: PDP “Powered by / 4.8 / 5198 Reviews”. Reviews sayfası `#shopify-section-yotpo-reviews` (27970 Reviews). Taksonomide reviews yok.  
Örnekler: https://www.herocosmetics.us/products/mighty-patch-original · /pages/reviews  
Öneri: aday kategori / üçüncü parti  
Karar: onay bekliyor

---

ADAY: herocosmetics-zero-home-sections  
Gerekçe: `homepage_hero_desktop_full_width` 375'te 0px (768/1440 resmi). `homepage_hero_mobile_stacked` yalnız 375 (768/1440 0px). `mobile-rewards` / `ugc` 0px.  
Örnekler: https://www.herocosmetics.us/  
Öneri: cihaz-gizli — şema yok  
Karar: onay bekliyor

---

ADAY: herocosmetics-church-dwight-privacy  
Gerekçe: `/pages/privacy-policy` 302 → `https://churchdwight.com/privacy-policy.aspx` (0 Shopify section). Native metin `/policies/privacy-policy` (.rte) yazıldı.  
Örnekler: https://www.herocosmetics.us/pages/privacy-policy  
Öneri: leftover — dış domain  
Karar: onay bekliyor

---

ADAY: herocosmetics-404-routes  
Gerekçe: Aynı 404 hero: `/pages/about` `/pages/faqs` `/pages/contact` `/pages/shipping` `/blogs/journal` `/blogs/blog`.  
Örnekler: https://www.herocosmetics.us/pages/about  
Öneri: observation `not-found/page-content-main` yazıldı  
Karar: onay bekliyor

---

ADAY: herocosmetics-quiz-pii-stop  
Gerekçe: `/pages/quiz` ve `/pages/cleansers-quiz` intro + Start. Adım/email yok. Mobil menü quiz Start tıklanmadı.  
Örnekler: https://www.herocosmetics.us/pages/quiz  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: herocosmetics-recharge-subscribe  
Gerekçe: PDP Recharge One-time / Subscribe & save 20%. Subscribe tıklanmadı.  
Örnekler: Mighty Patch Original  
Öneri: üçüncü parti subscription  
Karar: onay bekliyor

---

ADAY: herocosmetics-shop-merchandised-plp  
Gerekçe: `/collections/shop` çoklu `plp_open_category` + `plp_collection_category` + banner. Klasik PLP `/collections/best-sellers` yazıldı.  
Örnekler: https://www.herocosmetics.us/collections/shop  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: herocosmetics-concern-stepped-plp  
Gerekçe: `/collections/treating-whiteheads` `plp_stepped_categories` (1 Target early-stage…). Best-sellers grid’ten farklı iskelet.  
Örnekler: https://www.herocosmetics.us/collections/treating-whiteheads  
Öneri: leftover / aday PLP varyant  
Karar: onay bekliyor

---

ADAY: herocosmetics-login-account  
Gerekçe: Join Skin Squad, cart Sign Up/In, Rewards, Skin Squad. PII.  
Örnekler: header / mocart / rewards  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: herocosmetics-footer-newsletter-pii  
Gerekçe: Footer email input görüldü; gönderilmedi.  
Örnekler: footer  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: herocosmetics-contact-form-pii  
Gerekçe: `/pages/contact-us` Reason you are reaching out. Form gönderilmedi.  
Örnekler: https://www.herocosmetics.us/pages/contact-us  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: herocosmetics-policies-empty-native  
Gerekçe: `/policies/refund-policy` main Shopify section yok (header+footer). İçerik `/pages/faq-returns`.  
Örnekler: https://www.herocosmetics.us/policies/refund-policy  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: herocosmetics-rewards-swell  
Gerekçe: Rewards sayfası + mocart “This could be yours” + `#swell-overlay`. Loyalty app.  
Örnekler: https://www.herocosmetics.us/pages/rewards  
Öneri: üçüncü parti  
Karar: onay bekliyor

---

ADAY: herocosmetics-bundle-hero  
Gerekçe: Bundle PDP üst `Build Your Own Bundle` ayrı section; builder `commerce-tools-products-bundle` yazıldı.  
Örnekler: https://www.herocosmetics.us/products/your-custom-bundle  
Öneri: leftover — hero tekrar  
Karar: onay bekliyor

---

ADAY: herocosmetics-attentive-popup  
Gerekçe: Gecikmeli Attentive “Score 10% off” email iframe (`#attentive_creative` / `#attentive_overlay`). Escape ile kapatıldı; form doldurulmadı. Kapanınca “Get 10% Off” tab kalıyor.  
Örnekler: home / PDP / cart kareleri  
Öneri: PII stop / üçüncü parti  
Karar: onay bekliyor

---

ADAY: herocosmetics-dismiss-375-nav  
Gerekçe: 375'te overlay dismiss (OneTrust Close / Close cart) bazen `/products/mighty-patch-original` veya cleansing-lineup yazısına kaçırıyor. `capture-interaction` settle bir kez geri alıp tekrar dismiss ediyor → selector kayboluyor. `capture-observation.mjs` 3 kez geri alıyor; 375 resmi oradan.  
Örnekler: PLP / search / blog / offers / collab / 404  
Öneri: leftover — script davranışı; capture var  
Karar: onay bekliyor

---

ADAY: herocosmetics-menu-accordion  
Gerekçe: Mobil drawer Shop by Concern / Category `+` açılmadı. Open kare 375/768 var. 1440 hamburger 0px (mega).  
Örnekler: `#shopify-section-header` hamburger  
Öneri: leftover — changed yok  
Karar: onay bekliyor

---

ADAY: herocosmetics-skin-school-duplicate-id  
Gerekçe: `#shopify-section-skin-school-101` iki kez. 375'te ilki 0px, ikincisi 479px. Capture en büyük kutuyu aldı.  
Örnekler: https://www.herocosmetics.us/blogs/news  
Öneri: leftover — duplicate id  
Karar: onay bekliyor
