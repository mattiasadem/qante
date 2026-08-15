# Waterboy leftovers / adaylar

*Store:* https://www.waterboy.com · *Tema (görülen):* Waterboy/prod · schema_name Refresh · custom (`theme_store_id` null)  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: waterboy-gorgias-help-center  
Gerekçe: `/pages/help-center` ve `/pages/contact-us` → Gorgias iframe `#wact38f8` (`help-center.gorgias.help`). Arama + 6 kategori kartı + Track/Return/Cancel. `faq-collapsible-tabs` accordion değil; `lead-capture-form` tek form değil. Taksonomide help-center pageType yok (`faq-support` zorlama).  
Örnekler: https://www.waterboy.com/pages/help-center · https://www.waterboy.com/pages/contact-us  
Öneri: ertele / candidate — parent section `page-content-main` observation var  
Karar: onay bekliyor

---

ADAY: waterboy-store-locator  
Gerekçe: `/pages/store-locator-2-0` Stockist + Google Maps, 56 mağaza, SKU stok. `/pages/store-locator` eski widget “Loading store locator from Stockist…” (boş). Taksonomide locator yok.  
Örnekler: https://www.waterboy.com/pages/store-locator-2-0  
Öneri: ertele — `page-content-main` zorlama observation + bu aday  
Karar: onay bekliyor

---

ADAY: waterboy-sms-drop-alert  
Gerekçe: `/pages/waterboy-subscribe-page` telefon/SMS (“Put in your # below”). E-posta `lead-capture-newsletter-band` değil. PII — doldurulmadı.  
Örnekler: https://www.waterboy.com/pages/waterboy-subscribe-page  
Öneri: yeni varyant veya lead-capture-form delta  
Karar: onay bekliyor

---

ADAY: waterboy-pdp-reviews-app  
Gerekçe: PDP `#shopify-section-template--22761846341880__apps_hikn64` ~2300px yıldız dağılımı + yorum listesi (uygulama). Reviews şeması yok (Topicals Okendo ile aynı borç).  
Örnekler: https://www.waterboy.com/products/daily-hydration  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: waterboy-404  
Gerekçe: Refresh 404 “Page not found / CONTINUE SHOPPING” + newsletter. Taksonomide 404 pageType yok.  
Örnekler: https://www.waterboy.com/pages/this-page-does-not-exist-xyz  
Öneri: candidate — `page-content-main` observation var  
Karar: onay bekliyor

---

ADAY: waterboy-growi-affiliate  
Gerekçe: `/pages/affiliate` iframe `#growiSignupForm` → `growi.io/ambassador-program/31584`. Kayıt formu (PII).  
Örnekler: https://www.waterboy.com/pages/affiliate  
Öneri: ertele — observation yok  
Karar: onay bekliyor

---

ADAY: waterboy-cta-band  
Gerekçe: Thirsty Thoughts `#…__cta` “READY TO HYDRATE SMARTER?”. Taksonomide `cta-band` kategori var, `sections/` içinde schemaId yok. En yakın `editorial-image-with-text-overlay`.  
Örnekler: https://www.waterboy.com/pages/thirsty-thoughts  
Öneri: yeni schemaId veya map tartışması  
Karar: onay bekliyor

---

## 404 / boş / ince URL’ler

- `/pages/this-page-does-not-exist-xyz` — 404 template  
- `/blogs/news` — “0 articles / No articles found”  
- `/pages/store-locator` — Stockist load fail  
- `/pages/wholesale` — Typeform embed (Powered by Typeform); form PII, doldurulmadı  
- `/pages/waterboy-subscribe-page` — SMS, section id yok  
- `/pages/contact-us-2` — yoklanmadı  
- Landing LPs (`sports-landing-page`, `weekend-recovery-lp`, `workout-hydration-lp`, `samplepack`) — walk dışı leftover

## Bilinçli atlananlar

- `/account/login` — auth  
- Checkout / Shop Pay / kupon  
- Newsletter e-posta ve SMS submit  
- Gorgias chat / help form submit  
- Store locator adres yazma  
- Affiliate Growi kayıt  
- PDP reviews uygulaması  
- Custom liquid height 0 (home + PDP)  
- Accessibility widget (UserWay/eşit)  
- Partnerships → `app.onbrand.com` (dış)  
- PDP june `30 sticks` tık — iki resmi denemede kare değişmedi (`missingStates`)  
- Daily june UI ATC — form `[name=id]` yok; sepet GET `/cart/add` + merch drawer ile alındı  

