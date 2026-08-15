# Kettle & Fire leftovers / adaylar

*Store:* https://kettleandfire.com · *Tema (görülen):* Qbrico | 23122025 | New Purchase Block · schema_name **wayfx sites** 1.0.0 · custom (`theme_store_id` null) · `kettleandfire.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: kettleandfire-404  
Gerekçe: `/pages/this-page-does-not-exist-qante` ve `/pages/contact` → 404 “Page Not Found” + `.wfx-404-error` + featured bestsellers. Taksonomide 404 pageType yok.  
Örnekler: https://www.kettleandfire.com/pages/this-page-does-not-exist-qante · https://www.kettleandfire.com/pages/contact  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: kettleandfire-store-locator-iframe  
Gerekçe: `/pages/store-locator` hero alındı; `.wfx-store-locator-container` ~1100px harita/iframe (üçüncü parti). `/pages/product-locator-new` buraya düşer. Taksonomide store-locator yok.  
Örnekler: https://www.kettleandfire.com/pages/store-locator  
Öneri: ertele — üçüncü parti locator  
Karar: onay bekliyor

---

ADAY: kettleandfire-bazaarvoice  
Gerekçe: PDP `#shopify-section-template--19561861284036__reviews` ~6500–6700px BV widget. Buy box’ta 4.8 (4119) özet var; tam feed `testimonial-quote-carousel` zorlama. Write a review PII.  
Örnekler: https://www.kettleandfire.com/products/chicken-bone-broth  
Öneri: ertele / commerce-tools  
Karar: onay bekliyor

---

ADAY: kettleandfire-help-faq  
Gerekçe: Nav FAQ → https://help.kettleandfire.com/en-US (Gorgias/helpdesk, harici). `/pages/faq` boş (h~18, section 0).  
Örnekler: https://help.kettleandfire.com/en-US · https://www.kettleandfire.com/pages/faq  
Öneri: leftover — harici  
Karar: onay bekliyor

---

ADAY: kettleandfire-learn-library  
Gerekçe: LEARN mega + “VISIT LEARNING LIBRARY” → https://learn.kettleandfire.com/ (harici). Recipes/benefits/product-guides orada. Home recipes slider theme içi alındı.  
Örnekler: https://learn.kettleandfire.com/  
Öneri: leftover — harici  
Karar: onay bekliyor

---

ADAY: kettleandfire-native-policies  
Gerekçe: `/policies/privacy-policy` ~28k px; `/policies/terms-of-service` ~18k px — resmi crop kırpılamaz. `/policies/shipping-policy` yalnız başlık 52px (gövde boş). `/policies/refund-policy` section yok. Accessibility alındı.  
Örnekler: https://www.kettleandfire.com/policies/privacy-policy  
Öneri: leftover — yükseklik / boş gövde  
Karar: onay bekliyor

---

ADAY: kettleandfire-blog-empty  
Gerekçe: `/blogs/news` “News / Recent Articles” — yazı kartı yok, ~844px chrome.  
Örnekler: https://www.kettleandfire.com/blogs/news  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: kettleandfire-pdp-zero-sections  
Gerekçe: PDP `comparison` + `social_proof` + `wrapper_*` + `extras` height 0. `home_stores` ~120px boş. Chicken `__faq` 248px yalnız “Still not sure? See our FAQ / Contact us” (Beef FAQ alındı).  
Örnekler: https://www.kettleandfire.com/products/chicken-bone-broth  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: kettleandfire-qbrico-plp  
Gerekçe: Tüm `/collections/*` → `/a/collections/products` (Qbrico Nuxt `#__nuxt` / hashed `s0Bv8R8y8K`). Observation `main` ile alındı; hash class kırılgan.  
Örnekler: https://www.kettleandfire.com/a/collections/products  
Öneri: leftover not — resmi 3vp `main` ile alındı; hash class kırılgan  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- Cookiebot consent + Boost cart docked birçok karede (PII yok, doldurulmadı)
- Klaviyo form `/a/collections` üzerinde — submit yok
- Account `/account` — dur
- SMS pages (`/pages/sms-messaging-opt-in`, `/pages/sms-landing-page`) — PII
- Refer / wholesale / careers / brand ambassador / healthcare ambassadors
- Subscribe landings (`guthealth-subscribe-page`, `brothvip-subscribe-page`, `newforyou-subscribe-page`, `kfpersonalshop-subscribe-page`)
- Amazon offer pages, master-template, metafields-test, sections-components-library
- Regenerative / sustainability (sustainability shopify-section yok)
- Bone broth benefits ~5.4k + cookbook email (PII)
- What-is-bone-broth ~4k — resmi 3vp alındı (`editorial-rich-text.2`)
- Loyalty refer section height 0
- Newsletter / coupon form gönderilmedi
- Flavor picker `#product-picker-trigger` başka PDP’ye gider — interact değil
- Boost docked bar birçok karede (PLP/search dahil); tam cart modal değil
- PDP accordion ilk-trigger tık Nutritional Facts’i kapatır — changed = Ingredients (stale ilk-panel silindi)
