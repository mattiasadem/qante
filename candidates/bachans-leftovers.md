# Bachan's leftovers / adaylar

*Store:* https://bachans.com · *Tema (görülen):* May Heritage Line RS: release/BACH-v2026.10 · schema_name Speedopz 9.3.2 · custom (`theme_store_id` null) · `bachans.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: bachans-404  
Gerekçe: `/pages/this-page-does-not-exist-qante` → 404 “Page not found”. Taksonomide 404 pageType yok.  
Örnekler: https://bachans.com/pages/this-page-does-not-exist-qante  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: bachans-pear-store-locator  
Gerekçe: Home `store-locator` + Find a store modal `#contentModal-b06d4c3c-64da-45cf-bf95-d155b22883a6` iframe `offers.pearcommerce.com/product-locator/…`. `/pages/find-us` custom_liquid + aynı Pear gömme. Taksonomide store-locator yok. Home perakende logo şeridi `social-proof-brand-logos` olarak alındı; modal/iframe alınmadı.  
Örnekler: https://bachans.com/ · https://bachans.com/pages/find-us  
Öneri: ertele — üçüncü parti locator  
Karar: onay bekliyor

---

ADAY: bachans-bazaarvoice  
Gerekçe: PDP `#shopify-section-template--17829509660852__1705984559e9a6479f` “Reviews” ~3138px + BV app blocks (`bazaarvoice_reviews_photos_*`). Buy box’ta 4.9 (2693) özet var; tam widget `testimonial-quote-carousel` zorlama.  
Örnekler: https://bachans.com/products/the-original-japanese-barbecue-sauce  
Öneri: ertele / commerce-tools  
Karar: onay bekliyor

---

ADAY: bachans-recipes-grid  
Gerekçe: `/blogs/recipes` ızgara section `1663148435a8719516` ~52471px. Banner + filter tab alındı; tam masonry kırpılamaz.  
Örnekler: https://bachans.com/blogs/recipes  
Öneri: leftover — yükseklik  
Karar: onay bekliyor

---

ADAY: bachans-header-search-absent  
Gerekçe: Header’da search ikonu / predictive overlay yok. `/search?q=original` 21 sonuç + üstte Recipes slideshow + recipe filters (search template kirli). Predictive observation yazılmadı.  
Örnekler: https://bachans.com/search?q=original  
Öneri: leftover  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- Speedopz iç kopya section’lar (`content_*`, UUID wrappers) — dış template alındı
- Home/PDP `custom_liquid` / `a_section` height 0–92
- `/blogs/news` recipes template’ine düşüyor
- Heritage + dipping landings (`/pages/heritage-japanese-barbecue-sauce`, `/pages/japanese-dipping-sauce`) BBQ landing ile aynı iskelet
- `/pages/where-to-buy` home-benzeri (hero + find store + flavorites + dream + ingredients + claims + reviews)
- `/pages/idme` ID.me “WE APPRECIATE ALL THAT YOU DO”
- `/pages/wholesale-direct` + wholesale-inquiry/form — PII
- Costco welcome sayfaları, partnerships, contest, QR, chef pages
- Policy Instagram “Follow us @trybachans” (`media-shop-the-feed` adayı; policy’de bırakıldı)
- Returns / terms aynı `page_CMeMx9` template (shipping alındı)
- Newsletter / contact form gönderilmedi
- Account login `/a/account/login` — dur
