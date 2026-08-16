# True Classic leftovers / adaylar

*Store:* https://trueclassictees.com → https://www.trueclassictees.com/  
*Tema (görülen, uydurulmadı):* `Shopify.theme.name` **true-classic/main** · `id` `122041106504` · `schema_name` **True Classic Custom Theme** · `schema_version` **2.5.1** · `theme_store_id` **null** · `role` `main`  
*Shop:* `trueclassictees-com.myshopify.com`  
*Tarih:* 2026-08-16

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: trueclassictees-custom-theme  
Gerekçe: `schema_name` True Classic Custom Theme · `theme_store_id` null. Theme Store kimliği yok — uydurulmadı.  
Örnekler: https://www.trueclassictees.com/  
Öneri: leftover — platform notu  
Karar: onay bekliyor

---

ADAY: trueclassictees-404-is-home  
Gerekçe: `/pages/this-page-does-not-exist-qante-404` HTTP **404** ama gövde `template-index` (home section’ları). Taksonomide 404 pageType yok; ayrı 404 şablonu görünmedi.  
Örnekler: https://www.trueclassictees.com/pages/this-page-does-not-exist-qante-404  
Öneri: leftover — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: trueclassictees-no-cart-page  
Gerekçe: `/cart` → `/?cart-open=1` (home + drawer). `cart-page-main` observation yazılmadı.  
Örnekler: https://www.trueclassictees.com/cart  
Öneri: leftover — drawer obs yeterli  
Karar: onay bekliyor

---

ADAY: trueclassictees-no-hover-mega  
Gerekçe: 1440 `main-nav a[href="#"]` (Men) hover — Men altı çizili, kolonlu mega panel karede yok. Mega içerik `#nested_nav_menus` 375/768 hamburger drawer.  
Örnekler: https://www.trueclassictees.com/  
Öneri: leftover — header delta + menu-drawer  
Karar: onay bekliyor

---

ADAY: trueclassictees-okendo-reviews  
Gerekçe: PDP `#okendo_dynamic` ~1825px CUSTOMER REVIEWS 4.5 / 70,027. Üçüncü parti Okendo. `testimonial-quote-carousel` zorlanmadı.  
Örnekler: https://www.trueclassictees.com/products/white-crew-neck-tee  
Öneri: leftover — üçüncü parti  
Karar: onay bekliyor

---

ADAY: trueclassictees-faq-sibling-groups  
Gerekçe: Help Center ~18 `new_faq_accordion_group_*`. Yalnız Returns grubu alındı; Delivery/Products/Care/Sizing/… aynı şablon.  
Örnekler: https://www.trueclassictees.com/pages/help-center  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: trueclassictees-about-sibling-media  
Gerekçe: `/pages/about-us` = `/pages/our-story` aynı template. Founders Replo video + ikinci `video_qYBarC` alınmadı (kardeş medya).  
Örnekler: https://www.trueclassictees.com/pages/about-us  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: trueclassictees-contact-terms-429  
Gerekçe: `/pages/contact` ve `/pages/terms-conditions` probe’da Cloudflare **429** Just a moment. Observation yazılmadı.  
Örnekler: https://www.trueclassictees.com/pages/contact · https://www.trueclassictees.com/pages/terms-conditions  
Öneri: leftover — rate limit  
Karar: onay bekliyor

---

ADAY: trueclassictees-rivo-plinko  
Gerekçe: Arama overlay üstünde Rivo “Play for a chance to get UP TO 20% store credit” Plinko modal. Üçüncü parti; PII/oyun. Doldurulmadı.  
Örnekler: https://www.trueclassictees.com/  
Öneri: leftover — üçüncü parti / PII  
Karar: onay bekliyor

---

ADAY: trueclassictees-pii-forms  
Gerekçe: Footer newsletter e-posta; account `#rivo`; Insiders Club; SMS signup sayfaları; checkout. Doldurulmadı / gönderilmedi.  
Örnekler: https://www.trueclassictees.com/ · https://www.trueclassictees.com/pages/sms-signup  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: trueclassictees-empty-home-siblings  
Gerekçe: Home `product_family_cards_pdp_comparison_rNhWab` h=0; `custom_notification`; `country_selector` h=0; live-mini-player / live-streaming-popup / colorways. Görünür değil.  
Örnekler: https://www.trueclassictees.com/  
Öneri: leftover — boş/gizli  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- Privacy `data_requests_button` (Request Data Deletion) — PII / yasal form
- Quick-add modal / dynamic-modal / mobile-bottom-bar — kapalı overlay
- Women / Kids / clearance landing (`/pages/womens-clothing` vb.) — Men mega yok; ayrı walk değil
- `/pages/rewards` · gift-finder · fit-guarantee — kampanya; temsilci about/faq/policy alındı
- Checkout Shopify — duruldu
- Locale `/es/` — EN vitrin alındı
