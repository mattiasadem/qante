# Vacation leftovers / adaylar

*Store:* https://vacation.inc · *Tema (görülen):* yok — `Shopify.theme` null · custom headless (Next.js / CSS modules / hashed fonts) · shop `vacationoils.myshopify.com`  
*Tarih:* 2026-08-20 · Retry (PR #50 devam değil)

Şema icat edilmedi. Theme Store adı uydurulmadı. URL’ler bu oturumda görüldü.

---

ADAY: vacation-official-capture-cloudflare  
Gerekçe: Resmi `capture-observation.mjs` (`hero-slideshow`) → `Selector eşleşmedi (375): main#main > div.h-lvh` (Turnstile sayfasında `#main` yok). Resmi `capture-interaction.mjs` (`global-menu-drawer`) 375/768/1440 → Menu selector yok, `newEvidence: 0`. Probe: default Chromium 33.5s sonra hâlâ “Just a moment…”; Ray ID `a2e2efad0e725e44`. `fetch` 403. Stealth UA + `navigator.webdriver` gizleme ve system Chrome channel aynı IP’de store’u açıyor. Script’e dokunulmadı — resmi 3vp **0 PNG**.  
Örnekler: https://vacation.inc/  
Öneri: scripts’e gerçekçi UA (ayrı PR) veya CF allowlist  
Karar: onay bekliyor

---

ADAY: vacationoils-myshopify-checkout-redirect  
Gerekçe: `https://vacationoils.myshopify.com/` `fetch` → `https://checkout.vacation.inc/` + Turnstile 403. Walk URL olarak myshopify kullanılmadı.  
Örnekler: https://vacationoils.myshopify.com/  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: vacation-404  
Gerekçe: `/this-page-does-not-exist-qante` özel “Page Not Found” + Scuba-Certified Data Diver + BACK TO HOME (`section:has-text("Page Not Found")`). `/blogs/news` title `Not Found` / headings Page not found — `#main` çocukları boş. Taksonomide 404 pageType yok.  
Örnekler: https://vacation.inc/this-page-does-not-exist-qante · https://vacation.inc/blogs/news  
Öneri: candidate — custom 404 için `page-content-main` observation yazıldı (zorlama)  
Karar: onay bekliyor

---

ADAY: vacation-pepsi-sweepstakes  
Gerekçe: `/pepsi` VACATION® x PEPSI® Summer Sweepstakes (kod kutusu, How it works, ödül ızgarası). Kod **girilmedi**.  
Örnekler: https://vacation.inc/pepsi  
Öneri: landing-campaign adayı  
Karar: onay bekliyor

---

ADAY: vacation-store-locator  
Gerekçe: Menü `/store-locator`. “Find your favorite Vacation® Brand products in a retail location near you.” + testimonial. Harita/locator mevcut tipe oturmuyor.  
Örnekler: https://vacation.inc/store-locator  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: vacation-campaign-lps  
Gerekçe: `/orange-gelee` (100 Years of Orange Gelée®) ve `/ravenrun50` (Raven Run 50th) menüde görüldü; tam section envanteri yazılmadı (editorial overlay ailesi).  
Örnekler: https://vacation.inc/orange-gelee · https://vacation.inc/ravenrun50  
Öneri: leftover LP  
Karar: onay bekliyor

---

ADAY: vacation-bazaarvoice  
Gerekçe: PDP Classic Whip buy box 4.9 (402). Bazaarvoice script (`apps.bazaarvoice`) home dump’ta. Tam review widget `testimonial-quote-carousel` değil.  
Örnekler: https://vacation.inc/products/classic-whip-spf-30  
Öneri: reviews-app adayı  
Karar: onay bekliyor

---

ADAY: vacation-business-card  
Gerekçe: `#business-card` SHUFFLE / CLAIM / Check your Title. `editorial-image-with-text` + büyük delta. PII yok.  
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
Gerekçe: `#doormatt` “Sign up with your email to receive the discount code” + cookie banner (ACCEPT/DECLINE). E-posta doldurulmadı.  
Örnekler: https://vacation.inc/  
Öneri: leftover overlay  
Karar: onay bekliyor

---

ADAY: vacation-userway  
Gerekçe: UserWay `uwy userway_p5` / `uw-open-accessibility`.  
Öneri: ignore  
Karar: onay bekliyor

---

ADAY: vacation-wholesale-jobs  
Gerekçe: https://wholesale.vacation.inc/ · Greenhouse `boards.greenhouse.io/vacationinc`.  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: vacation-filled-cart  
Gerekçe: Boş bag + bestsellers görüldü. PDP `ADD TO BAG` tık bu oturumda `.cart` satırı üretmedi. Resmi interact CF.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: vacation-terms  
Gerekçe: `/terms-of-service` (Last Updated: September 17, 2025) ve `/sweepstakes-terms` görüldü; observation yalnız privacy + returns.  
Örnekler: https://vacation.inc/terms-of-service · https://vacation.inc/sweepstakes-terms  
Öneri: leftover — aynı `page-content-main`  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- Direct `page.goto` iç sayfalara (aynı stealth context, robots/sitemap sonrası) Turnstile 403; client-side `<a>` tıklayınca 200.
- Footer / `#doormatt` / contact form e-posta **gönderilmedi**.
- Account / checkout dur.
- `/information` · `/accessibility` · `/business` footer’da; walk yok.
- Sitemap ürünleri (ör. `/products/lobby-candle`) tek tek çekilmedi.
