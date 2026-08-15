# TRIP leftovers / adaylar

*Store:* https://drink-trip.com · *Tema (görülen):* Trip-UK/main · schema_name Focal 10.2.0 · custom  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: drinktrip-404-bundles  
Gerekçe: Footer “Bundles” → `/pages/bundles` HTTP 404. `#shopify-section-template--24793842745730__main` (“404 / Page not found / Sorry, this page does not exist.”). Taksonomide 404 pageType yok.  
Örnekler: https://drink-trip.com/pages/bundles  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: drinktrip-rebuy-smart-cart  
Gerekçe: `/cart` home’a düşer (`/?viewcart=true`, `rebuy-cart-visible`). Asıl sepet Rebuy `.rebuy-cart__flyout`. Focal `#mini-cart` / `CART-DRAWER` 0×0. Observation `global-cart-drawer` (selector flyout). `cart-page-main` yok.  
Örnekler: https://drink-trip.com/cart  
Öneri: leftover — şema yok; Rebuy widget  
Karar: onay bekliyor

---

ADAY: drinktrip-mention-me-referral  
Gerekçe: `/pages/referral` Mention Me iframe `#mmContentReferrerStage1` (`mention-me.com/…`, title `Mention Me Offer`, 960×630). Shopify main 68px breadcrumb.  
Örnekler: https://drink-trip.com/pages/referral  
Öneri: referral-widget — iframe, form PII  
Karar: onay bekliyor

---

ADAY: drinktrip-bundle-builder  
Gerekçe: `/pages/bundle-builder-v2?step=1` özel şablon: `#shopify-section-bundle-builder-header` + `__finish` (“Your Delivery / Add 20 more cans”) + `__sidebar` 0px. Standart header/footer yok. Pick & Mix.  
Örnekler: https://drink-trip.com/pages/bundle-builder-v2  
Öneri: commerce-tools / custom builder — yeni şema yok  
Karar: onay bekliyor

---

ADAY: drinktrip-pdp-reviews-app  
Gerekçe: Variety PDP `#…__17749490091f7a9eac` (`shopify-section--apps`) 5.00 / 2 reviews / Write Review / Sort / Search / Product Reviews / Questions. `testimonial-quote-carousel` yalnız `review_highlight` alıntı.  
Örnekler: https://drink-trip.com/products/variety-pack-value  
Öneri: reviews-app varyant  
Karar: onay bekliyor

---

ADAY: drinktrip-nutritional-slideout  
Gerekçe: PDP `#…__nutritional_slideout_elvn` height 0 (Nutritional Facts / Sicilian Lemon…). Overlay, statikte kapalı.  
Örnekler: https://drink-trip.com/products/variety-pack-value  
Öneri: leftover — açılmadı  
Karar: onay bekliyor

---

ADAY: drinktrip-loudcrowd-affiliate  
Gerekçe: `/pages/affiliate-programme` PageFly gövde observation `page-content-main`. `#lc-modal-iframe` Loudcrowd (`members.loudcrowd.com/campaign/…`) 0×0.  
Örnekler: https://drink-trip.com/pages/affiliate-programme  
Öneri: apply-modal iframe  
Karar: onay bekliyor

---

ADAY: drinktrip-native-policy-stubs  
Gerekçe: `/policies/terms-of-service` ve `/policies/privacy-policy` `.shopify-policy__container` yalnız “For our … click here.” Asıl metin `/pages/privacy-policy` + `/pages/terms-of-service` + `/pages/cookie-policy` (aynı main-page template; 3vp yalnız privacy).  
Örnekler: https://drink-trip.com/policies/privacy-policy  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: drinktrip-landing-429  
Gerekçe: `/pages/shop`, `/pages/calm`, `/pages/dry-january`, `/pages/drinks-new-lp`, `/blogs/how-to-calm-down` bu koşuda Cloudflare 429. Sitemap’te var.  
Öneri: tekrar dene / leftover  
Karar: onay bekliyor

---

ADAY: drinktrip-mango-pdp-kit  
Gerekçe: `/products/tropical-mango` variety ile aynı Focal kit (product_highlight, benefits, how_it_works, ugc, logos, apps reviews, FAQ). Ayrı 3vp yok.  
Öneri: leftover — variety primary  
Karar: onay bekliyor

---

ADAY: drinktrip-newsletter-popup  
Gerekçe: Header envelope `button` “Newsletter” / `aria-label=newsletter-popup`. PII — açılmadı/gönderilmedi.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: drinktrip-search-page-capture-crash  
Gerekçe: `/search?q=mango` probe 200, 10 ürün, Filters, `#…__main` 1657px. Resmi `capture-observation.mjs` `dismissAllOverlays` içinde `TypeError: Cannot read properties of null (reading 'style')` — iki deneme. Script’e dokunulmadı. Predictive drawer mango 3vp home’da.  
Örnekler: https://drink-trip.com/search?q=mango  
Öneri: leftover — script bug; observation JSON duruyor, evidence[] boş  
Karar: onay bekliyor

---

ADAY: drinktrip-rebuy-bleed-on-static  
Gerekçe: Rebuy `.rebuy-cart__flyout` bazı resmi section karelerinin sağına biniyor (PDP buy box, FAQ, ingredients, affiliate). Kapalı flyout x=2380; yine de 1440 kırpımda YOUR CART görülebiliyor. Script’e dokunulmadı. İçerik okunur; sepet kendi obs’unda.  
Öneri: leftover — moonjuice/brez ile aynı aile  
Karar: onay bekliyor

---

ADAY: drinktrip-logo-list-is-celebs  
Gerekçe: Home/PDP `logo_list_large` karede marka logosu yok — Joe Jonas / Ambrosio / Wesley / Mackintosh alıntı kartları. Observation `testimonial-quote-carousel` (+ PDP `.2`).  
Öneri: leftover not — şema uydurulmadı  
Karar: onay bekliyor
