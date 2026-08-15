# Hiyo leftovers / adaylar

*Store:* https://drinkhiyo.com · *Tema (görülen):* hiyo/main · schema_name Impact 6.2.0 · custom  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: hiyo-404  
Gerekçe: `/collections/shop-all`, `/pages/subscriptions` → `template-404` / `#shopify-section-template--21702818463964__main` (“page not found” + CONTINUE SHOPPING). Taksonomide 404 pageType yok.  
Örnekler: https://drinkhiyo.com/collections/shop-all · https://drinkhiyo.com/pages/subscriptions  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: hiyo-store-locator-pear  
Gerekçe: `/pages/store-locator` `shopify-section--store-locator` içinde Pear Commerce iframe (`offers.pearcommerce.com/product-locator/…`, title `pear-store-finder`). En yakın observation `page-content-main` (başlık + “PLEASE CALL AHEAD”). İkinci blok `#…__17798190346c9fb49b` boş shopify-block + Summer of Sound dış link.  
Örnekler: https://drinkhiyo.com/pages/store-locator  
Öneri: store-locator kategori / widget — harita şeması yok  
Karar: onay bekliyor

---

ADAY: hiyo-yotpo-reviews  
Gerekçe: PDP `#…__172796176298d1f56e` (`shopify-section--apps`) REVIEWS / Q&A sekmeli Yotpo widget (WRITE A REVIEW, 8248 reviews). `/pages/reviews` aynı aile, site-wide 4.8 / 11253. `testimonial-quote-carousel` alıntı slider; bu tam uygulama.  
Örnekler: https://drinkhiyo.com/products/variety-pack · https://drinkhiyo.com/pages/reviews  
Öneri: reviews-app varyant veya aday kategori  
Karar: onay bekliyor

---

ADAY: hiyo-yotpo-loyalty  
Gerekçe: `/pages/rewards` Shopify section yok. Hydrate sonrası `.yotpo-widget-loyalty-page` (join our inner circle / points). Observation `page-content-main` en yakın.  
Örnekler: https://drinkhiyo.com/pages/rewards  
Öneri: loyalty/points şeması yok — Influence/Yotpo gibi üçüncü parti  
Karar: onay bekliyor

---

ADAY: hiyo-wholesale-app-form  
Gerekçe: `/pages/wholesale` `#…__1763653318ff14de26` (`shopify-section--apps`) ~1320px, metin/iframe/form 4s sonra da boş. Başvuru formu hydrate olmadı.  
Örnekler: https://drinkhiyo.com/pages/wholesale  
Öneri: ertele — kanıt yok  
Karar: onay bekliyor

---

ADAY: hiyo-empty-blogs  
Gerekçe: `/blogs/news` ve `/blogs/recipes` “this blog is empty / BACK TO HOME”. Asıl liste `/blogs/all` (observation `blog-list-main`).  
Örnekler: https://drinkhiyo.com/blogs/news  
Öneri: leftover — ayrı şema yok  
Karar: onay bekliyor

---

ADAY: hiyo-landing-float-kit  
Gerekçe: `/pages/feel-the-float` ve `/pages/float` aynı template — home ile aynı Impact kit (testimonials, featured, social-feed, ingredients, overlay, marquee, founders). Yalnız hero 3vp alındı (`hero_v3`).  
Örnekler: https://drinkhiyo.com/pages/feel-the-float  
Öneri: tekrar 3vp yok; home observation + delta yeterli  
Karar: onay bekliyor

---

ADAY: hiyo-tracking-app  
Gerekçe: `/pages/tracking` apps section “track your package / SEARCH”. Sipariş no girilmedi (PII). Observation `page-content-main`.  
Örnekler: https://drinkhiyo.com/pages/tracking  
Öneri: kargo-takip widget — yeni şema yok  
Karar: onay bekliyor
