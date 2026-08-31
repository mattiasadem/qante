# Vacation leftovers / adaylar

*Store:* https://vacation.inc · *Tema (görülen):* yok — `Shopify.theme` null · custom headless (portabletext / Mux / CSS modules) · shop `vacationoils.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. Theme Store adı uydurulmadı.

---

ADAY: vacation-official-capture-cloudflare  
Gerekçe: Resmi `capture-observation.mjs` / `capture-interaction.mjs` default Playwright Chromium (stealth yok) → her `page.goto` Cloudflare “Just a moment…” / Turnstile. 30s beklese de `#main` gelmiyor. Stealth UA + `navigator.webdriver` gizleme ile aynı IP’de home+PDP+PLP+search+content 200. Script’e dokunulmadı — resmi 3vp **0 PNG**.  
Örnekler: https://vacation.inc/  
Öneri: scripts’e gerçekçi UA (ayrı PR) veya CF allowlist  
Karar: onay bekliyor

---

ADAY: vacation-404  
Gerekçe: `/this-page-does-not-exist-qante` özel “Page Not Found” + BACK TO HOME (`section:has-text("Page Not Found")`). `/blogs/news` ham Shopify “Not Found” (200 değil, 404). Taksonomide 404 pageType yok.  
Örnekler: https://vacation.inc/this-page-does-not-exist-qante · https://vacation.inc/blogs/news  
Öneri: candidate — `page-content-main` observation yazıldı (zorlama)  
Karar: onay bekliyor

---

ADAY: vacation-pepsi-sweepstakes  
Gerekçe: `/pepsi` VACATION® x PEPSI® Summer Sweepstakes (kod kutusu, ödül ızgarası). Kod **girilmedi**.  
Örnekler: https://vacation.inc/pepsi  
Öneri: landing-campaign adayı  
Karar: onay bekliyor

---

ADAY: vacation-store-locator  
Gerekçe: Menü `/store-locator`. Harita/locator mevcut tipe oturmuyor (Graza/Chomps ailesi).  
Örnekler: https://vacation.inc/store-locator  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: vacation-campaign-lps  
Gerekçe: `/orange-gelee` (100 Years of Gelée), `/ravenrun50` menüde. Tam walk yok.  
Örnekler: https://vacation.inc/orange-gelee · https://vacation.inc/ravenrun50  
Öneri: leftover LP  
Karar: onay bekliyor

---

ADAY: vacation-bazaarvoice  
Gerekçe: PDP Reviews — Bazaarvoice (4.9 / 402, Rating Snapshot, Load More). `testimonial-quote-carousel` press alıntıları ayrı; BV widget şema değil.  
Örnekler: https://vacation.inc/products/classic-whip-spf-30  
Öneri: reviews-app adayı  
Karar: onay bekliyor

---

ADAY: vacation-business-card  
Gerekçe: `#business-card` SHUFFLE / CLAIM / Check your Title. `editorial-image-with-text-2` + büyük delta. PII yok.  
Örnekler: https://vacation.inc/  
Öneri: leftover widget  
Karar: onay bekliyor

---

ADAY: vacation-cart-page  
Gerekçe: `/cart` → `/?cart=true` (home + `.cart`). `cart-page-main` yok.  
Örnekler: https://vacation.inc/cart  
Öneri: leftover — asıl sepet `global-cart-drawer`  
Karar: onay bekliyor

---

ADAY: vacation-entry-popup  
Gerekçe: “Get 10% off” / SIGN UP overlay + cookie banner (ACCEPT/DECLINE). E-posta doldurulmadı.  
Örnekler: https://vacation.inc/  
Öneri: leftover overlay  
Karar: onay bekliyor

---

ADAY: vacation-userway  
Gerekçe: UserWay `uwif userway_p5`.  
Öneri: ignore  
Karar: onay bekliyor

---

ADAY: vacation-wholesale-jobs  
Gerekçe: https://wholesale.vacation.inc/ · Greenhouse jobs.  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: vacation-filled-cart  
Gerekçe: Boş bag + bestsellers görüldü. ATC → filled resmi interact CF.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: vacation-terms  
Gerekçe: `/terms-of-service` (Last Updated: September 17, 2025) görüldü; observation yalnız privacy + returns.  
Örnekler: https://vacation.inc/terms-of-service  
Öneri: leftover — aynı `page-content-main`  
Karar: onay bekliyor
