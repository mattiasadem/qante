# Saffron leftovers / adaylar

*Store:* https://midnight-perfume.myshopify.com/  
*Password:* `1` (Speedo ürün sayfasında yayınlı storefront şifresi)  
*Tema (görülen, uydurulmadı):* **Midnight-perfume V-1.5.0** · `schema_name` **midnight_perfume** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `171347706169` · role `main` · shop `midnight-perfume.myshopify.com`  
*Vendor:* Speedo Themes (üçüncü taraf OS 2.0; Shopify Theme Store resmi değil)  
*Tarih:* 2026-09-02

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: saffron-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Theme Store listing id uydurulmadı. `schema_name` midnight_perfume · `schema_version` 1.5.0 · name `Midnight-perfume V-1.5.0`. Kullanıcı slug `saffron` (sayfa başlığı Saffron Perfume).  
Örnekler: https://midnight-perfume.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: saffron-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` → “Be with Touch! Get 10% Off” / GET 10% OFF. Kapalı h=0. Email / PII — açılmadı, submit yok.  
Örnekler: https://midnight-perfume.myshopify.com/  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: saffron-quick-add  
Gerekçe: Home featured collection `CHOOSE OPTIONS` → `#QuickAdd-{id}` modal (Dawn quick-add). `global-quick-view` ile yakın ama ATC varyant seçici; ayrı şema yazılmadı.  
Örnekler: https://midnight-perfume.myshopify.com/ `#QuickAdd-8337895489849`  
Öneri: leftover — QuickAdd overlay  
Karar: onay bekliyor

---

ADAY: saffron-wishlist  
Gerekçe: Header “Add to wishlish” (yazım vitrinde böyle). Ayrı drawer/sayfa envanterlenmedi; hesap/wishlist PII sınırı.  
Örnekler: https://midnight-perfume.myshopify.com/ header  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: saffron-policy-no-section  
Gerekçe: `/policies/privacy-policy`, `/refund-policy`, `/terms-of-service` başlık 200 ama `shopify-section` main yok (yalnız header/footer). `page-content-main` / `policy-page-layout` yazılmadı — kanıtsız gövde.  
Örnekler: https://midnight-perfume.myshopify.com/policies/privacy-policy  
Öneri: leftover — Shopify policy template  
Karar: onay bekliyor

---

ADAY: saffron-404  
Gerekçe: `/pages/this-page-does-not-exist-qante` → “404 Page not found CONTINUE SHOPPING” (`template--23390875451705__main`). Yeni şema yok.  
Örnekler: https://midnight-perfume.myshopify.com/pages/this-page-does-not-exist-qante  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: saffron-about-404  
Gerekçe: `/pages/about` ve `/pages/about-us` 404. Footer “ABOUT” bu URL’lere gidiyor olabilir. Canlı hikâye: `/pages/our-story`.  
Örnekler: https://midnight-perfume.myshopify.com/pages/about  
Öneri: leftover — kırık footer  
Karar: onay bekliyor

---

ADAY: saffron-contact-form-pii  
Gerekçe: `lead-capture-form` contact’ta var; fill/submit PII stop.  
Örnekler: https://midnight-perfume.myshopify.com/pages/contact  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: saffron-buy-it-now  
Gerekçe: PDP `BUY IT NOW` checkout’a gider — tıklanmadı.  
Örnekler: https://midnight-perfume.myshopify.com/products/jasmine-and-ambretta-floral-fragrance-for-women  
Öneri: leftover — checkout  
Karar: onay bekliyor
