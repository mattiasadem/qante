# Vivobarefoot leftovers / adaylar

*Store:* https://vivobarefoot.com → https://www.vivobarefoot.com/us/  
*Tema (görülen, uydurulmadı):* Magento 2 / Adobe Commerce Cloud · `frontend/vivo/theme-frontend-vivo` · body `pl-thm-vivo pl-thm-vivo-theme-frontend-vivo` · static `version1786509155`  
*Shopify.theme / schema_name / schema_version / theme_store_id:* **yok** (gözlendi)  
*Tarih:* 2026-08-15

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: vivobarefoot-not-shopify  
Gerekçe: Canlı vitrin Shopify Liquid/Hydrogen değil. DNS `prod.magentocloud.map.fastly.net`. Asset ` /static/version…/frontend/vivo/theme-frontend-vivo/`. `Shopify.theme` undefined. AU (`vivobarefoot.com.au`) ve ME (`vivobarefoot.me`) ayrı Shopify vitrinler — bu walk **vivobarefoot.com** Magento US.  
Öneri: tema kaydı Magento custom; Theme Store id uydurma  
Karar: leftover — gözlenen platform notu

---

ADAY: vivobarefoot-datadome  
Gerekçe: Bu egress (datacenter IP, örn. 3.13.7.76) DataDome 403. Playwright Chromium/Chrome channel, headed, computerUse slider captcha, curl — hepsi `x-datadome: protected` + `ct.captcha-delivery.com`. Homepage HTML bir kez Jina reader ile alındı; sonraki path’ler aynı interstitial.  
Öneri: resmi `capture-observation.mjs` / `capture-interaction.mjs` 375/768/1440 **bu IP’den yeşil değil**. Missing official captures leftover sayılmaz — burada erişim engeli.  
Karar: leftover — residential/farklı egress ile yeniden çek

---

ADAY: vivobarefoot-404  
Gerekçe: `/us/this-page-does-not-exist-qante-xyz` gövdesi bu egress’ten doğrulanamadı (Jina/DataDome interstitial; indeks home’a düştü). Magento `cms-no-route` beklenir.  
Örnekler: https://www.vivobarefoot.com/us/this-page-does-not-exist-qante-xyz  
Öneri: 404 kopyası görünce `page-content-main` parent; şema yok  
Karar: leftover — kare yok

---

ADAY: vivobarefoot-zendesk  
Gerekçe: FAQS & Contact → `support.vivobarefoot.com/hc/en-us` (Zendesk). Primus Bot / WhatsApp Vivi / telefon +1 855 719 2092. Contact formu PII. Footer Zendesk snippet `zdassets.com`.  
Öneri: overlay/help center; section değil  
Karar: leftover — dismiss; şema yok

---

ADAY: vivobarefoot-alchemer  
Gerekçe: Homepage `alchemer-survey-btn` + checkout-exit survey iframe (`Vivo_Alchemer`). Overlay.  
Karar: leftover — şema yok

---

ADAY: vivobarefoot-amasty-search  
Gerekçe: Predictive `section.amsearch-wrapper-block` (Amasty Xsearch). Observation `global-predictive-search` yazıldı; input karesi DataDome.  
Karar: leftover — interact yeniden

---

ADAY: vivobarefoot-foot-assessment  
Gerekçe: `/us/foot-assessment-tool` VivoHealth quiz. PII / tavsiye formu riski — duruldu. `product-finder-quiz` zorlanmadı.  
Örnekler: https://www.vivobarefoot.com/us/foot-assessment-tool  
Karar: leftover — PII

---

ADAY: vivobarefoot-reviews  
Gerekçe: PDP’de üçüncü parti review feed bu walk’ta görülmedi (ambassador carousel home’da ayrı tip). Stamped/Yotpo yoklandı değil.  
Karar: leftover

---

ADAY: vivobarefoot-store-finder  
Gerekçe: `/us/store-finder` locator. Tip yok.  
Karar: leftover

---

ADAY: vivobarefoot-extra-cms  
Gerekçe: vivo-rewards, recycle-and-upcycle, fake-site-awareness, franchise_partner, wholesale, the-business-of-barefoot, policies-standards, accessibility-statement, cookie-settings, student-discounts, share/refer, unknow-yourself, gettingstarted, vivohealth-courses. Çoğu aynı CMS/editorial aile.  
Karar: leftover — temsilciler (about / whybarefoot / 100-day / discover / size / returns / delivery) yeterli

---

ADAY: vivobarefoot-plp-filters  
Gerekçe: Mens PLP 50 results + “Show Results” — filtre/sort paneli kare yok.  
Karar: leftover

---

ADAY: vivobarefoot-country-currency  
Gerekçe: Header International Shipping ülke + para birimi listesi (uzun select). Locale knob değil; Magento store switch.  
Karar: leftover — `dilGosterim` zorlama

---

## Bilinçli atlananlar

- `/us/customer/account` / login / register / forgot password (PII)  
- Newsletter subscribe + notify-me email (PII)  
- Checkout / kupon  
- Zendesk ticket form  
- Foot assessment sonrası  
- AU/ME Shopify vitrinleri (farklı shop)  
- Divider / Page Builder boş kolonlar  
