# Dieux leftovers / adaylar

*Store:* https://www.dieuxskin.com · *Tema (görülen):* Live Theme · schema_name Dieux · schema_version 3.0 · custom (`theme_store_id` null)  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: dieux-sunscreener  
Gerekçe: `/pages/sunscreen-ingredient-checker` Vue `#sunscreener-app` — textarea + ANALYZE ile içerik listesi çözümler. Taksonomide decoder/tool yok. En yakın `page-content-main` observation var (zorlama).  
Örnekler: https://www.dieuxskin.com/pages/sunscreen-ingredient-checker  
Öneri: yeni varyant veya tool adayı — `page-content-main` yeterli değil  
Karar: onay bekliyor

---

ADAY: dieux-stamped-reviews  
Gerekçe: PDP `#shopify-section-template--17652491255901__pdp-product-reviews` / `#stamped-main-widget` (4.6 / 2350 Instant Angel). `testimonial-quote-carousel` değil; reviews ailesi yok.  
Örnekler: https://www.dieuxskin.com/products/instant-angel  
Öneri: ertele — reviews şeması yok  
Karar: onay bekliyor

---

ADAY: dieux-404  
Gerekçe: `template-404` — “404 Page Not Found / Continue shopping”. Taksonomide 404 pageType yok.  
Örnekler: https://www.dieuxskin.com/pages/this-page-does-not-exist-qante  
Öneri: ertele / candidate — `page-content-main` observation var  
Karar: onay bekliyor

---

ADAY: dieux-cart-page  
Gerekçe: `/cart` → home 302. Sepet yalnız `.cart-drawer`. `cart-page-main` yok.  
Örnekler: https://www.dieuxskin.com/cart  
Öneri: ertele — drawer observation yeterli  
Karar: onay bekliyor

---

ADAY: dieux-account-drawer  
Gerekçe: `.account-drawer` Sign In (email/password). Auth / PII.  
Örnekler: header MY ACCOUNT  
Öneri: envanter dışı  
Karar: onay bekliyor

---

ADAY: dieux-predictive-empty  
Gerekçe: Header `#search_text_header` 768/1440 açılıyor; `angel` fill sonrası öneri listesi DOM’da yok. Sonuç `/search?q=angel` (11). 375’te form header’da 0px — arama `global-menu-drawer` içinde.  
Örnekler: https://www.dieuxskin.com/  
Öneri: leftover — tema predictive kapalı veya hydrate yok  
Karar: onay bekliyor

---

## 404 / ince sayfalar (şema yok veya leftover)

`/pages/this-page-does-not-exist-qante` — 404  
`/pages/deals-dieux-jour` — “THAT'S A WRAP” + waitlist  
`/pages/dieux-gift-guide-2025` — mevsimsel LP (bir slider Liquid error)  
`/pages/instant-angel-tik-tok-holy-grail-for-dewy-skin` — kampanya LP  
`/pages/data-sharing-opt-out` — privacy choices (PII form, doldurulmadı)  
`/pages/eu-withdrawal` — yasal metin  
`/pages/terms-conditions-ethereal-giveaway` · `/pages/emijay-summer-giveaway` · collab LPs  
`/pages/google-product-feed`  
`/apps/customers/portal` — subscription (üçüncü parti)

## Aynı şablon, ikinci capture yok

`/collections/all` · `/collections/eye-masks` · `/collections/bundles` — `collection-template`  
`/products` — `list-collections-template` (sekmeli Shop All; PLP’den farklı kabuk, leftover)  
`/blogs/news` — aynı `blog-template` (eski yazılar)

## Capture leftover (3vp / interact)

- `global-menu-drawer` 1440 — hamburger 0px (beklenen)
- `global-predictive-search` 375 — form header’da 0px; arama mobil menüde
- Predictive öneri listesi — `angel` fill sonrası yok
- Cart qty `changed` — doldurulmadı (filled 3vp yeterli)
- Mega `open` yalnız 1440 (375/768 hamburger + drawer)

## Bilinçli atlananlar

- `/account` — auth  
- Checkout / e-posta form submit / waitlist submit / newsletter Initiate Me  
- Stamped “Write a Review”  
- Cookie / accessibility overlay  
- PDP height-0 `image_video` / boş UUID section  
- `shopify-section-custom-liquid` height 0  
- Cart kupon Apply — doldurulmadı  
