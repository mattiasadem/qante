# Ghia leftovers / adaylar

*Liste URL:* https://ghia.com · *Canlı vitrin:* https://drinkghia.com  
*Tema (görülen):* drink-ghia/main · schema_name Dawn · schema_version 6.0.2 · custom (`theme_store_id` null)  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: ghia-parked-domain  
Gerekçe: https://ghia.com JS ile `/lander` → GoDaddy/Afternic forsale. Sitemap yalnız `/lander`. Marka vitrini `drinkghia.com` (`drinkghia.myshopify.com`).  
Örnekler: https://ghia.com · https://www.ghia.com/lander  
Öneri: liste URL’sini drinkghia.com olarak güncelle  
Karar: onay bekliyor

---

ADAY: ghia-hue-okendo-reviews  
Gerekçe: Home `#hue_mini_review_module` (SEE REAL REVIEWS) + PDP/variety `__custom_reviews` + `/pages/reviews` Okendo (`4.9 / 818`). Reviews ailesi yok; `testimonial-quote-carousel` press grid için kullanıldı.  
Örnekler: https://drinkghia.com/ · https://drinkghia.com/products/ghia · https://drinkghia.com/pages/reviews  
Öneri: ertele — reviews şeması yok  
Karar: onay bekliyor

---

ADAY: ghia-stockists  
Gerekçe: `/pages/stockists` `#aisle_store_locator_YhhHKE` (Aisle iframe/widget). Taksonomide store-locator yok.  
Örnekler: https://drinkghia.com/pages/stockists  
Öneri: ertele / candidate  
Karar: onay bekliyor

---

ADAY: ghia-404-empty  
Gerekçe: `template--17451695472874__main` height 0. Title “Ghia | 404 Not Found”. Görünür gövde yok (header+footer). Taksonomide 404 pageType yok.  
Örnekler: https://drinkghia.com/pages/this-page-does-not-exist-qante · `/pages/about` · `/pages/faqs` · `/products/le-spritz-ghia-soda`  
Öneri: ertele — `page-content-main` zorlanmadı (0px)  
Karar: onay bekliyor

---

ADAY: ghia-cart-page  
Gerekçe: `/cart` `template--17451694784746__main` height 0. Sepet `#CartDrawer`. `cart-page-main` yok.  
Örnekler: https://drinkghia.com/cart  
Öneri: ertele — drawer observation yeterli  
Karar: onay bekliyor

---

ADAY: ghia-referral  
Gerekçe: `/pages/referral` GIVE $20, GET $20 e-posta formu (PII). Altında clover product list.  
Örnekler: https://drinkghia.com/pages/referral  
Öneri: envanter dışı (PII)  
Karar: onay bekliyor

---

ADAY: ghia-cookbook-tour  
Gerekçe: `/pages/riviera-cookbook` `#cookbook_tour_1` — şehir/tarih/etkinlik (NYC Cherry Bomb…). `editorial-timeline` yıl sekmesi değil.  
Örnekler: https://drinkghia.com/pages/riviera-cookbook  
Öneri: yeni varyant veya leftover  
Karar: onay bekliyor

---

ADAY: ghia-instagram-lightwidget  
Gerekçe: PLP `#lightwidget_Mq78nk` height 0 + cross-origin `cdn.lightwidget.com` iframe.  
Örnekler: https://drinkghia.com/collections/all  
Öneri: ertele — kanıt yok  
Karar: onay bekliyor

---

## 404 / ince sayfalar

`/pages/this-page-does-not-exist-qante` — 404 boş  
`/pages/about` · `/pages/story` · `/pages/faqs` · `/pages/shipping` · `/pages/refer-for-20` · `/pages/find-us`  
`/products/le-spritz-ghia-soda` — 404 (handle `le-spritz-ghia-soda` yok)  
`/policies/privacy-policy` · `/policies/terms-of-service` — Shopify native, main section yok (`/pages/privacy-policy` envanterlendi)  
`/pages/ccpa` · `/pages/terms-conditions` · `/pages/accessibility`  
`/pages/check-gift-card-balance` · `/pages/my-subscriptions` — PII  
`/pages/amazon-offer` · `/pages/bonappetit` · `/pages/architectural-digest` · `/pages/melissawoodhealth` · `/pages/groovevolt` — kampanya  
`/pages/ghia-x-brightland-x-fishwife-giveaway` · `/pages/the-holiday-gift-shop` · `/pages/group-gifting` · `/pages/early-access-spritz` · `/pages/ghia-birthday` · `/pages/ghia-raisingthebar` · `/pages/sms-sign-up` · `/pages/tracking`  
`/blogs/news` — aynı blog template, neredeyse boş  
`/pages/reviews` — Okendo  
`/account` — auth

## Aynı şablon, ikinci capture yok

`/collections/bestsellers` · `/collections/le-spritz` · `/collections/all-of-the-spirit-none-of-the-booze` · `/collections/gifts` — PLP pill + grid  
`/products/le-spritz-variety-pack` — ikinci `main_product_v2` (HOW MANY? 16/24)  
Diğer 50+ ürün / mevsimsel koleksiyon

## Capture leftover

- `global-menu-drawer` 1440 — hamburger 0px (beklenen)
- Cart qty `changed` — doldurulmayacak (filled 3vp hedef)
- Predictive öneri — yoklanacak
- Cookbook tour / Hue reviews / stockists — şema yok

## Bilinçli atlananlar

- `/account` — auth  
- Checkout / e-posta form submit / newsletter SUBMIT / referral Next  
- Gift note / kupon  
- Cookie / accessibility overlay  
- Web-pixel sandbox iframe’ler (0px)
