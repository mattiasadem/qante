# Function Health 404 / boş şablonlar

*URL:* https://www.functionhealth.com  
*Tema:* custom Astro (theme store adı yok)  
*Tarih:* 2026-08-15

Taksonomide `404` pageType yok. Gövde varsa `page-content-main` (`not-found/`).

---

ADAY: functionhealth-404-template  
Gerekçe: Custom `section.not-found-section`. H1 “Page not found”. Tipografi 4 · 4. HTTP 404.  
Örnekler: https://www.functionhealth.com/this-page-does-not-exist-qante · https://www.functionhealth.com/pages/this-page-does-not-exist-qante  
Öneri: `page-content-main` observation yazıldı. pageType standarda aday.  
Karar: onay bekliyor

---

ADAY: functionhealth-shopify-routes-404  
Gerekçe: Shopify varsayılan yollar 404 (aynı not-found gövde):  
`/products` · `/collections` · `/collections/all` · `/shop` · `/cart` · `/search` · `/search?q=test` · `/pages/about` · `/pages/faq` · `/pages/contact` · `/blogs/news` · `/membership` · `/labs` · `/tests` · `/learn` · `/tcm` · `/biomarkers` · `/biomarker/ferritin` · `/what-we-test/ferritin`  
Örnekler: https://www.functionhealth.com/cart · https://www.functionhealth.com/search  
Öneri: leftover — platform Shopify değil  
Karar: onay bekliyor
