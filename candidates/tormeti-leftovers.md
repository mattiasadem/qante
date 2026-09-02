# Tormeti leftovers / adaylar

*Store (walk):* https://tormeti-fashi.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/speedo-pandora-jewellery-shopify-theme-os-2-0  
*Tema (görülen, uydurulmadı):* **Pandora-jewellery V-1.5.0 final** · `schema_name` **Pandora_Jewellery** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `143506604249` · role `main`  
*Shop:* `tormeti-fashi.myshopify.com`  
*Preset:* default  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: tormeti-password-wall  
Gerekçe: `/` 302 → `/password`. Speedo ürün sayfası public şifreyi yazar: “Please enter password 1 to view demo.” Storefront title `tormeti-fashi (password: 1)`. Hesap değil.  
Örnekler: https://tormeti-fashi.myshopify.com/password  
Öneri: leftover — public demo unlock  
Karar: onay bekliyor

---

ADAY: tormeti-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo üçüncü taraf; Shopify Theme Store id uydurulmadı.  
Örnekler: home `Shopify.theme`  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: tormeti-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0 kapalı. Email submit PII stop.  
Örnekler: home  
Öneri: leftover — timed/hidden popup  
Karar: onay bekliyor

---

ADAY: tormeti-wishlist  
Gerekçe: Kart ve PDP `ADD TO WISHLIST` / `Add To Wishlist`. Ayrı overlay yoklandı değil; account değil.  
Örnekler: TRENDY COLLECTION · PDP · PLP  
Öneri: leftover — wishlist  
Karar: onay bekliyor

---

ADAY: tormeti-pdp-social-proof-timer  
Gerekçe: PDP buy box: “People are viewing this right now” · Availability 2 item(s) · Estimated delivery · “Hurry up! Sales End In” gün/saat/dk/sn. `product-info-main` delta; ayrı countdown şeması açılmadı (buy box parçası).  
Örnekler: `/products/gold-and-diamond-stud-earrings`  
Öneri: leftover — PDP chrome  
Karar: onay bekliyor

---

ADAY: tormeti-buy-it-now  
Gerekçe: PDP `BUY IT NOW` checkout kısayolu. Tıklanmadı.  
Örnekler: product-info-main  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: tormeti-size-guide  
Gerekçe: PDP `Size-Guide` link/popup. Açılmadı.  
Örnekler: product-info-main  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: tormeti-about-100-percent-iwt  
Gerekçe: `/pages/about-us` dört tekrar IWT: 100% ETHICAL / REAL / QUALITY / THERE FOR YOU. OUR STORY + VISION envanterlendi; bu dörtlü aynı aile.  
Örnekler: about-us  
Öneri: leftover — tekrar IWT  
Karar: onay bekliyor

---

ADAY: tormeti-faq-main-title  
Gerekçe: `#shopify-section-template--18185184575705__main` yalnız “Faq” başlık. Accordion ayrı `faq-collapsible-tabs`.  
Örnekler: `/pages/faq`  
Öneri: leftover — ince başlık  
Karar: onay bekliyor

---

ADAY: tormeti-pdp-empty-section  
Gerekçe: `#shopify-section-template--18185184706777__16572629707050636d` h=0 (`scroll-trigger--offscreen`).  
Örnekler: PDP  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: tormeti-cart-footer-empty  
Gerekçe: `#shopify-section-template--18185183920345__cart-footer` boş sepette h=0.  
Örnekler: `/cart`  
Öneri: leftover — boş hâl  
Karar: onay bekliyor

---

ADAY: tormeti-gold-plp-banner-tall  
Gerekçe: `/collections/gold` banner h≈530 (görsel + lorem); best-seller banner h≈159. Aynı `collection-banner` tipi; gold ayrı obs yok.  
Örnekler: `/collections/gold`  
Öneri: leftover — preset/layout farkı  
Karar: onay bekliyor
