# Function Health leftovers / adaylar

*Store:* https://www.functionhealth.com  
*Tema (görülen, uydurulmadı):* custom Astro (`_astro/*.astro`) + Svelte biomarker/FAQ widgets. Shopify theme adı yok.  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa sapma `delta`'da.

---

ADAY: functionhealth-no-commerce-cart  
Gerekçe: `/cart` · `/products` · `/collections` · `/shop` 404. Header'da sepet ikonu yok. Satın alma `my.functionhealth.com/signup` (üyelik). `cart-page-main` / `global-cart-drawer` / `product-info-main` bağlanmadı.  
Örnekler: https://www.functionhealth.com/cart · https://www.functionhealth.com/pricing  
Öneri: leftover — üyelik checkout ayrı origin (PII)  
Karar: onay bekliyor

---

ADAY: functionhealth-no-search-page  
Gerekçe: `/search` ve `/search?q=` 404. Arama yalnız `.fh-search-modal` overlay (`/?search=ferritin`). `search-results` şeması yazılmadı.  
Örnekler: https://www.functionhealth.com/search  
Öneri: `global-predictive-search` observation yeterli  
Karar: onay bekliyor

---

ADAY: functionhealth-cta-band  
Gerekçe: `section.cta-section` (Life is short? We disagree.) taksonomide `cta-band` var, `sections/` altında şema yok. `editorial-rich-text` zorlandı.  
Örnekler: https://www.functionhealth.com/  
Öneri: cta-band şema adayı  
Karar: onay bekliyor

---

ADAY: functionhealth-ketch-consent  
Gerekçe: `#ketch-banner` / `#ketch-consent-banner` — Your Privacy Choices. "I understand" dismiss listesinde yok; cookie metni `dismissAllOverlays` isCookie ile gizlenebilir. Karede kalırsa leftover.  
Örnekler: https://www.functionhealth.com/  
Öneri: üçüncü parti consent  
Karar: onay bekliyor

---

ADAY: functionhealth-video-portal  
Gerekçe: `#video-card-floating-portal` fixed 1440×1000, boş, `pointer-events: none`, opacity 1. `dismissAllOverlays` coversCenter ile gizlemeli; aksi halde assertClean keser.  
Örnekler: https://www.functionhealth.com/  
Öneri: leftover empty portal  
Karar: onay bekliyor

---

ADAY: functionhealth-zeroparty-newsletter  
Gerekçe: Footer / journal `newsletter-signup` Submit. zeropartyforms.com / lightboxcdn. Form **gönderilmedi**.  
Örnekler: https://www.functionhealth.com/ · https://www.functionhealth.com/journal  
Öneri: PII — ertele  
Karar: onay bekliyor

---

ADAY: functionhealth-gifthealth-lp  
Gerekçe: `/gifthealth` home klonu + Gift health. Not stuff. hero. Ayrı observation yazılmadı (tekrar section'lar).  
Örnekler: https://www.functionhealth.com/gifthealth  
Öneri: leftover LP  
Karar: onay bekliyor

---

ADAY: functionhealth-b2b-creators  
Gerekçe: `/for-business` · `/practitioners-and-providers` · `/for-creators` · `/careers` · `/asp/join` partner/B2B/iş ilanı.  
Örnekler: https://www.functionhealth.com/for-business  
Öneri: leftover — DTC vitrin dışı  
Karar: onay bekliyor

---

ADAY: functionhealth-tcm-articles  
Gerekçe: `/tcm/articles` "Function for Articles of Interest's community" partner LP (hero-partners). `/tcm` 404. Journal asıl `/journal` + `/articles`.  
Örnekler: https://www.functionhealth.com/tcm/articles  
Öneri: leftover partner  
Karar: onay bekliyor

---

ADAY: functionhealth-biomarker-category  
Gerekçe: `/biomarker-categories/nutrients` kategori PDP analogu (header + items + add-ons). `/biomarkers` · `/biomarker/ferritin` 404. Hash `#biomarker-ferritin` modal bu turda açılmadı (`WhatWeTestModal.astro` CSS var).  
Örnekler: https://www.functionhealth.com/biomarker-categories/nutrients · https://www.functionhealth.com/what-we-test#biomarker-ferritin  
Öneri: leftover kategori şablonu / modal  
Karar: onay bekliyor

---

ADAY: functionhealth-logocarousel-motion  
Gerekçe: `section.logocarousel` PAUSE MOTION. Sözlükte motion toggle yok (styleProfile).  
Örnekler: https://www.functionhealth.com/  
Öneri: leftover kontrol  
Karar: onay bekliyor

---

ADAY: functionhealth-terms-consumer-health  
Gerekçe: `/legal/terms-of-service` privacy ile aynı `body-copy-section` iskelet — ikinci 3vp yazılmadı. Consumer Health Data policy ayrı.  
Örnekler: https://www.functionhealth.com/legal/terms-of-service  
Öneri: ertele — aynı tip  
Karar: onay bekliyor

---

ADAY: functionhealth-newsroom-security-locations  
Gerekçe: `/newsroom` article-listing; `/security` hero-5050 + narrative; `/testing-locations` (lab-locations redirect) "Explore testing options". Claiming walk'ta yok.  
Örnekler: https://www.functionhealth.com/newsroom  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: functionhealth-signup-login  
Gerekçe: Log in `/login` · Start testing / Join Function → `my.functionhealth.com`. Hesap ve ödeme **girilmedi**.  
Örnekler: https://my.functionhealth.com/signup  
Öneri: PII — yapılmayacak  
Karar: onay bekliyor
