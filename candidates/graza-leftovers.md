# Graza leftovers / adaylar

*Store:* https://www.graza.co · *Tema (görülen):* baggy – production · schema_name Graza · custom  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: graza-404-dance  
Gerekçe: `/pages/contact`, `/collections/refills`, `/blogs/glog`, `/pages/shipping`, `/pages/glug-club` → `#shopify-section-404-template` (“Heyyy, how’d you get here? You’ve interrupted my dance routine”). Taksonomide 404 pageType yok.  
Örnekler: https://www.graza.co/pages/contact  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: graza-store-locator  
Gerekçe: `/pages/store-locator` section `#store-locator` height 0. About nav “Where to Find Us” hedefi boş.  
Örnekler: https://www.graza.co/pages/store-locator  
Öneri: ertele — kanıt yok  
Karar: onay bekliyor

---

ADAY: graza-page-anchor-nav  
Gerekçe: About `#shopify-section-template--16889120784598__nav` — masaüstü sticky in-page anchors (Meet Graza / Sourcing / Our Olives / Read the Glog / Where to Find Us). `collection-nav-tabs` koleksiyon vitrini; bu sayfa içi TOC.  
Örnekler: https://www.graza.co/pages/about-us  
Öneri: yeni varyant veya map tartışması  
Karar: onay bekliyor

---

ADAY: graza-search-page-hydrate  
Gerekçe: `/search?q=drizzle` document title sonuç sayıyor; Vue mount `#search` headless 8s + networkidle sonrası boş. Canlı arama `#search-modal` (observation `global-predictive-search`).  
Örnekler: https://www.graza.co/search?q=drizzle  
Öneri: search-results leftover — chrome/headless farkı  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok)

`/pages/contact` (footer Contact = mailto:hello@graza.co)  
`/collections/refills` (Get Refills → `/products/duo-refill-can`)  
`/blogs/glog` (`/pages/glog` çalışır)  
`/pages/shipping`  
`/pages/glug-club`

---

## Bilinçli atlananlar

- `/account/login` — auth, envanter dışı  
- Account / checkout / e-posta form submit  
- Store locator widget (0px)  
- Sitemap XML chrome’da boş döndü; ürün/blog loc’lar okundu
