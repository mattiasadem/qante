# Vivobarefoot leftovers / adaylar

*Store:* https://vivobarefoot.com → https://www.vivobarefoot.com/us/  
*Tema (Jina + DNS bu koşu, uydurulmadı):* Magento 2 / Adobe Commerce Cloud · `frontend/vivo/theme-frontend-vivo` · static `version1787208597` (home) ve `version1786509155` (search asset)  
*Shopify.theme / schema_name / schema_version / theme_store_id:* **gözlenmedi** — Playwright interstitial’da yok; Jina HTML Magento path + `mage-*` / `form_key` / `X-Magento-Vary` cookie metni  
*CNAME (bu koşu):* `www.vivobarefoot.com` → `prod.magentocloud.map.fastly.net`  
*Tarih:* 2026-08-20 · **retry** (PR #114 devam edilmedi; yeni branch)

Şema icat edilmedi. Claiming observation yazılmadı — resmi 3vp yok.

---

ADAY: vivobarefoot-datadome  
Gerekçe: Bu egress (datacenter IP `3.142.101.169`) DataDome 403. `curl` `x-datadome: protected` + `ct.captcha-delivery.com` / `geo.captcha-delivery.com`. Playwright Chromium headless 403 (title `vivobarefoot.com`, `hasDd`). Playwright `channel: chrome` headless 403. Resmi `scripts/capture-observation.mjs` 375’te `Selector eşleşmedi: header` — interstitial’da mağaza DOM yok. `capture-interaction.mjs` koşulmadı (aynı Playwright yığını; sayfa hidrate olmadı). Jina reader bazı path’lerde HTML verdi; o kareler resmi evidence değil. Elle PNG yok.  
Örnekler: https://www.vivobarefoot.com/us/  
Öneri: resmi `capture-observation.mjs` / `capture-interaction.mjs` 375/768/1440 **bu IP’den yeşil değil**. Missing official captures leftover sayılmaz — erişim engeli.  
Karar: leftover — residential / farklı egress ile yeniden çek

---

ADAY: vivobarefoot-not-shopify  
Gerekçe: Canlı vitrin Shopify Liquid/Hydrogen değil. DNS `prod.magentocloud.map.fastly.net`. Jina asset `/static/version…/frontend/vivo/theme-frontend-vivo/`. `Shopify.theme` bu koşuda Playwright’da görülmedi (interstitial). AU/ME Shopify vitrinleri bu walk’ta açılmadı.  
Öneri: tema kaydı Magento custom; Theme Store id / `schema_name` uydurma  
Karar: leftover — gözlenen platform notu

---

ADAY: vivobarefoot-jina-indexed-not-captured  
Gerekçe: Jina (resmi script değil) bu koşuda gövde verdi. Observation/selector yazılmadı — canlı DOM yok.  
Örnekler:  
https://www.vivobarefoot.com/us/  
https://www.vivobarefoot.com/us/primus-lite-iv-mens  
https://www.vivobarefoot.com/us/mens  
https://www.vivobarefoot.com/us/catalogsearch/result/?q=primus  
https://www.vivobarefoot.com/us/privacy-policy  
Öneri: residential egress’te aynı URL’lere resmi 3vp  
Karar: leftover — kare yok

---

ADAY: vivobarefoot-unconfirmed-this-retry  
Gerekçe: Jina bu koşuda 401 döndü; gövde doğrulanmadı. URL uydurulmadı — PR #114 / Mens nav linkleri.  
Örnekler:  
https://www.vivobarefoot.com/us/about-us-vivo  
https://www.vivobarefoot.com/us/whybarefoot  
https://www.vivobarefoot.com/us/checkout/cart/  
https://www.vivobarefoot.com/us/size-guide  
Karar: leftover — kare yok; icat observation yok

---

ADAY: vivobarefoot-mens-nav-links  
Gerekçe: `/us/mens` Jina nav’da görülen hedefler (gövde bu koşuda çekilmedi): Foot Assessment `/us/foot-assessment-tool` (PII — dur), Size Guide, Delivery, Returns, Repairs, FAQS Zendesk `support.vivobarefoot.com/hc/en-us`, Track My Order `/us/sales/order/history/` (hesap — dur), Blog `/us/blog`.  
Karar: leftover — temsilci çekimi yok

---

ADAY: vivobarefoot-zendesk  
Gerekçe: Mens Jina “FAQS & Contact” → `support.vivobarefoot.com/hc/en-us`. Overlay/help center; section değil.  
Karar: leftover — dismiss; şema yok

---

ADAY: vivobarefoot-foot-assessment  
Gerekçe: Mens Jina link `/us/foot-assessment-tool`. PII / tavsiye formu — duruldu. `product-finder-quiz` zorlanmadı.  
Örnekler: https://www.vivobarefoot.com/us/foot-assessment-tool  
Karar: leftover — PII

---

ADAY: vivobarefoot-plp-filters  
Gerekçe: Mens Jina filtre satırları (Black 29 items, Mens 40 items, Trainer 24 items…). Panel karesi yok.  
Karar: leftover

---

ADAY: vivobarefoot-404  
Gerekçe: 404 gövdesi bu egress’ten doğrulanamadı. Bilinçli 404 path denenmedi (DataDome).  
Öneri: 404 kopyası görünce `page-content-main` parent; şema yok  
Karar: leftover — kare yok

---

## Bilinçli atlananlar

- `/us/customer/account` / login / register (PII)  
- Newsletter subscribe + notify-me email (PII)  
- Checkout / kupon  
- Zendesk ticket form  
- Foot assessment submit  
- AU (`vivobarefoot.com.au`) / ME (`vivobarefoot.me`) Shopify vitrinleri  
- PR #114’teki 32 observation kopyası — kanıtsız tekrar yazılmadı  
