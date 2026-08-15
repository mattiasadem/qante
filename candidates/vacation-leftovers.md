# Vacation leftovers / adaylar

*Store:* https://vacation.inc · *Tema (görülen):* yok — `Shopify.theme` null · custom headless (Next/portabletext/Mux) · shop `vacationoils.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. Theme Store adı uydurulmadı.

---

ADAY: vacation-cloudflare-turnstile  
Gerekçe: Apex `/` Playwright + gerçek UA ile 200. `/products/*`, `/collections/*`, `/search`, `/cart`, `/about-us`, `/faq` tam `page.goto` → Cloudflare “Performing security verification” / Turnstile. WebFetch (markdown) inner sayfaları okuyabiliyor; resmi `capture-observation.mjs` her viewport’ta yeni goto yaptığı için inner 3vp CF’ye takılabilir.  
Örnekler: https://vacation.inc/products/classic-whip-spf-30  
Öneri: leftover — home session click + WebFetch ile içerik görüldü; resmi 3vp CF geçerse tamamla  
Karar: onay bekliyor

---

ADAY: vacation-404-blog  
Gerekçe: `/blogs/news` ve `/pages/this-page-does-not-exist-qante` → HTTP 404. Taksonomide 404 pageType yok.  
Örnekler: https://vacation.inc/blogs/news  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: vacation-pepsi-sweepstakes  
Gerekçe: `/pepsi` · VACATION® x PEPSI® Summer Sweepstakes (kod girişi, ödül listesi). Kampanya/landing mevcut tiplere oturmuyor; PII/kod girilmedi.  
Örnekler: https://vacation.inc/pepsi  
Öneri: landing-campaign adayı  
Karar: onay bekliyor

---

ADAY: vacation-business-card  
Gerekçe: Home `#business-card` — honorary role SHUFFLE / CLAIM / “Check your Title”. En yakın `editorial-image-with-text` observation + büyük delta. Lead form/PII’ye girilmedi.  
Örnekler: https://vacation.inc/  
Öneri: leftover widget — yeni schemaId yok  
Karar: onay bekliyor

---

ADAY: vacation-cart-page  
Gerekçe: `/cart` WebFetch home + Bag paneli döndü. Canlı drawer `?cart=true` + `.cart`. `cart-page-main` yok.  
Örnekler: https://vacation.inc/cart · https://vacation.inc/?cart=true  
Öneri: leftover — asıl sepet `global-cart-drawer`  
Karar: onay bekliyor

---

ADAY: vacation-entry-popup  
Gerekçe: Home’da `Close popup` / `Close promotion` + “Get 10% off” (WebFetch her sayfa sonunda). E-posta/PII doldurulmadı.  
Örnekler: https://vacation.inc/  
Öneri: leftover overlay  
Karar: onay bekliyor

---

ADAY: vacation-userway  
Gerekçe: UserWay accessibility iframe (`uwif userway_p5`). Şema değil.  
Öneri: ignore  
Karar: onay bekliyor

---

ADAY: vacation-wholesale-jobs  
Gerekçe: https://wholesale.vacation.inc/ · Greenhouse jobs · harici.  
Öneri: ertele  
Karar: onay bekliyor
