# Bleame leftovers / adaylar

*URL:* https://bleame.com  
*Tema (görülen):* **Bleame 2.0 [Loox] - OPT** · schema_name Focal · schema_version 11.1.0 · theme_store_id 714 · theme id `149117534383` · shop `bleame-com.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: bleame-loox-reviews  
Gerekçe: PDP `#shopify-section-template--19666883510447__177282297269dfbc58` Loox iframe (`loox.io/widget/...`, ~3475px). `/pages/reviews` app section 4135px + scoring. Reviews ailesi yok.  
Örnekler: https://bleame.com/products/crystal-hair-eraser · https://bleame.com/pages/reviews  
Öneri: ertele — reviews şeması yok  
Karar: onay bekliyor

---

ADAY: bleame-help-center-404  
Gerekçe: Header/footer Help Center → https://help.bleame.com/en-US title `404: This page could not be found`.  
Örnekler: https://help.bleame.com/en-US  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: bleame-empty-pages  
Gerekçe: `/pages/about-us` · `/pages/our-erasers` · `/pages/scrub-launch` main-page yalnız başlık (~107px).  
Örnekler: https://bleame.com/pages/about-us  
Öneri: ertele — `page-content-main` zorlanmadı  
Karar: onay bekliyor

---

ADAY: bleame-404  
Gerekçe: `/pages/this-page-does-not-exist-qante` title 404 Not Found · `shopify-section--404` 630px (404 / Page not found / BACK TO HOME). Taksonomide 404 pageType yok.  
Örnekler: https://bleame.com/pages/this-page-does-not-exist-qante  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: bleame-sms-vip-pii  
Gerekçe: `/pages/join-sms` · `/pages/15-off-when-you-join-our-sms-list` · `/pages/black-friday-vip-list` · `/pages/track-your-order` e-posta/SMS/sipariş (PII).  
Örnekler: https://bleame.com/pages/join-sms  
Öneri: envanter dışı (PII)  
Karar: onay bekliyor

---

ADAY: bleame-predictive-opener-hidden  
Gerekçe: `#search-drawer` DOM'da; header Search `a[aria-controls=search-drawer]` 375/768/1440 görünür değil. forceOpen: "What are you looking for?" — öneri listesi yok. Sonuç `/search?q=crystal`.  
Örnekler: https://bleame.com/  
Öneri: leftover — opener gizli / predictive kapalı  
Karar: onay bekliyor

---

ADAY: bleame-header-countdown  
Gerekçe: SUMMER SALE countdown + LIMITED TIME 48% `#header` içinde (`.count-down`). Ayrı Shopify section değil. `promo-announcement-bar` altında Free Shipping şeridi.  
Örnekler: https://bleame.com/  
Öneri: header delta yeterli  
Karar: onay bekliyor

---

## 404 / ince sayfalar

`/pages/this-page-does-not-exist-qante` — 404 gövde var  
`/pages/about` · `/pages/faq` · `/pages/faqs` — 404  
`/pages/about-us` · `/pages/our-erasers` · `/pages/scrub-launch` — yalnız başlık  
`/pages/faq` 301 → `/pages/faq` sonra 404  
https://help.bleame.com/en-US — 404  
`/account` — auth

## Aynı şablon, ikinci capture yok

`/pages/terms-conditions` · `/pages/shipping` · `/pages/return-policy` — aynı `main-page`  
`/products/gleam-body-scrub` · `/products/bundle-save` · `/products/booty-boost-mask` · `/products/face-roller-guasha-stone-set` — ikinci PDP  
`/collections/frontpage` · seasonal collections  
Partner 3 ek image-with-text  
Blog post banner + prev-next  
Diğer 50+ blog yazısı

## Capture leftover

- `global-menu-drawer` 1440 — hamburger gizli (beklenen)
- Predictive fill — opener yok
- Cart qty `changed` — doldurulmadı (filled 3vp yeterli)
- PDP 1 Pack / 2 Pack radio — CLAIM OFFER default 2-pack; pack `changed` yoklandı değil
- custom_liquid / custom_html 0px
- Newsletter / contact / SMS submit — PII

## Bilinçli atlananlar

- `/account` — auth  
- Checkout / e-posta form submit / newsletter Subscribe  
- Cookie overlay  
- Loox iframe içi (cross-origin)
