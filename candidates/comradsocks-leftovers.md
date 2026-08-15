# Comrad leftovers / adaylar

*Store:* https://comradsocks.com · *Tema (görülen):* comradsocks/main · schema_name Simplistic 3.0.26 · custom (`theme_store_id` null)  
*Shop:* comradsocks.myshopify.com · theme id 150078030041  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: comradsocks-404  
Gerekçe: `/products/varsity-knee-high-compression-socks` ve `/pages/this-page-does-not-exist-qante` → 404 “The dryer strikes again” + “These socks have gone missing…” + Shop All (`#shopify-section-template--19421943431385__banner_qzqqAg`). Taksonomide 404 pageType yok.  
Örnekler: https://www.comradsocks.com/pages/this-page-does-not-exist-qante  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: comradsocks-cart-page-redirect  
Gerekçe: GET `/cart` 200 ama vitrin home template’e düşer. Sepet `#side-cart` drawer. `cart-page-main` yok.  
Örnekler: https://www.comradsocks.com/cart  
Öneri: leftover — drawer observation home’da (boş / dolu / adet+)  
Karar: onay bekliyor

---

ADAY: comradsocks-alia-20-off  
Gerekçe: Home’da `#alia-root-245211` “You've Got 20% Off / What do you use compression socks for?” (Healthcare / Medical / Pregnancy / Travel). Shopify section değil. E-posta/PII — seçenek tıklanmadı.  
Örnekler: https://www.comradsocks.com/  
Öneri: ertele — lead-capture overlay  
Karar: onay bekliyor

---

ADAY: comradsocks-pdp-reviews-app  
Gerekçe: PDP `#…__custom_code_W7t8ej` 4.7 / 5,956 reviews + yıldız histogram. `type_Custom_Code_Snippet`. `testimonial-quote-carousel` zorlama (filtre/histogram).  
Örnekler: https://www.comradsocks.com/products/knee-high-compression-socks-solid  
Öneri: ertele / commerce-tools  
Karar: onay bekliyor

---

ADAY: comradsocks-quiz-steps  
Gerekçe: `/pages/sock-recommendation-quiz` yalnız landing (“Start Quiz Now” + %20). Quiz adımları Start sonrası; form/PII. `product-finder-quiz` landing observation var.  
Örnekler: https://www.comradsocks.com/pages/sock-recommendation-quiz  
Öneri: leftover — Start tıklanmadı  
Karar: onay bekliyor

---

ADAY: comradsocks-listicle-pages  
Gerekçe: `pages.json`’de “10 Reasons why…” / “6 Reasons…” reklam/listicle sayfaları. Chrome walk’ta tekrarlayan merch şablonları; ayrı 3vp yok.  
Örnekler: https://www.comradsocks.com/pages/10-reasons-why-200k-nurses-wear-comrad-socks-for-12-hour-shifts  
Öneri: ertele — roster  
Karar: onay bekliyor

---

ADAY: comradsocks-search-mobile  
Gerekçe: 375/768’de header `.embedded-search` ve `button.trigger-search` görünür değil. Arama `#mobile-menu` içinde. 1440 `input` (knee → PRODUCTS + See all 10) alındı; mobil ayrı overlay yok.  
Örnekler: https://www.comradsocks.com/  
Öneri: leftover — menu-drawer search  
Karar: onay bekliyor

---

ADAY: comradsocks-plp-filters  
Gerekçe: PLP Sorting + Filters + kolon toggle + Load More karede var; panel açılmadı, Load More tıklanmadı.  
Örnekler: https://www.comradsocks.com/collections/compression-socks-for-all-day-comfort  
Öneri: leftover — changed state  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok)

`/products/varsity-knee-high-compression-socks` (çalışan koleksiyon: `/collections/varsity-knee-high-compression`)  
`/pages/about` → `/pages/our-story`  
`/pages/about-us` → `/pages/our-story`

---

## Diğer leftover (aday değil)

- Home `separator_*` ve height-0 `richtext_UbwwLX` / `17404155682ec2a3ed` / `1749842880fe09bbcd`
- Home compact “Need Help?” FAQ/contact şeritleri (e-posta; form yok)
- About sonraki richtext’ler (Compassion / Perfect Takes Practice / Made to Last / biyografi / You Deserve This) — aynı `editorial-rich-text`
- HSA STEP 1–3 `image_text` — aynı tip, bir kare yeterli
- Journal `blog_hero` tag chip’leri; article `article_hero`
- Cookie consent height 0
- Wholesale Faire (harici); Returns Redo portal; Form C-AR PDF
- Newsletter footer — doldurulmadı
- Contact Submit — gönderilmedi
- `trust-icon-row` 375/768 height 0 (yalnız 1440)
- `global-menu-drawer` 1440 DOM’da yok (375/768 open var)
- Replo video testimonials (`__replo_video_testimonials_YijXHx`) — 3vp hydrate; leftover kapanır
