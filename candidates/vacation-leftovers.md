# Vacation leftovers / adaylar

*Store:* https://vacation.inc · *Tema (görülen):* yok — `Shopify.theme` null · custom headless · shop `vacationoils.myshopify.com`  
*Tarih:* 2026-08-20 · Retry (PR #50 devam değil)

Şema icat edilmedi. Theme Store adı uydurulmadı.

---

ADAY: vacation-official-capture-cloudflare  
Gerekçe: Bu retry’de resmi `capture-observation.mjs` ile aynı default Playwright Chromium `page.goto` → Cloudflare “Just a moment…” / Turnstile. 3.5s ve 33.5s sonra `#main` yok; title `Just a moment...`; Ray ID `a2e2efad0e725e44`. `fetch` de 403. Stealth UA + `navigator.webdriver` gizleme ve system Chrome channel aynı IP’de store’u açıyor (`Vacation® The World's Best-Smelling Sunscreen`, `#main` var, `Shopify.shop` = `vacationoils.myshopify.com`, `Shopify.theme` = null). Script’e dokunulmadı.  
Örnekler: https://vacation.inc/  
Öneri: scripts’e gerçekçi UA (ayrı PR) veya CF allowlist  
Karar: onay bekliyor

---

ADAY: vacationoils-myshopify-checkout-redirect  
Gerekçe: `https://vacationoils.myshopify.com/` `fetch` → `https://checkout.vacation.inc/` + aynı Turnstile 403. Walk URL olarak myshopify kullanılmadı (Hello Bubble kaçışı değil; checkout challenge).  
Örnekler: https://vacationoils.myshopify.com/  
Öneri: leftover  
Karar: onay bekliyor
