# SKIMS leftovers / adaylar

*Store:* https://skims.com · *Platform:* Shopify Hydrogen/Oxygen (headless). `shopify-section` / `data-section-id` yok. `Shopify.theme` meta yok.  
*Tarih:* 2026-08-20

Şema icat edilmedi. Observation yazılan tipler burada tekrarlanmaz.

---

ADAY: skims-predictive-search-overlay  
Gerekçe: Header'da search trigger var (`Search closed` aria) ama overlay bu walk'ta açılmadı. `/search?q=` doğrudan results sayfasına gider. `global-predictive-search` obs yok.  
Örnekler: https://skims.com/ (header search icon)  
Karar: leftover — interact turu gerekir

---

ADAY: skims-mega-menu-open  
Gerekçe: HeadlessUI popover mega paneller (New, Clothing, Bras, …) kapalı state'te kanıtlandı. Hover/open state 1440 interact yok.  
Örnekler: https://skims.com/  
Karar: leftover — navigation-header-mega delta'da not edildi

---

ADAY: skims-mobile-menu-drawer  
Gerekçe: 375/768'de hamburger + `global-menu-drawer` açılmadı. Mega desktop-only.  
Karar: leftover

---

ADAY: skims-plp-filters-panel  
Gerekçe: FILTERS (0) pill şeridi kanıtlandı; filtre paneli `changed` state çekilmedi.  
Örnekler: https://skims.com/collections/best-sellers  
Karar: leftover

---

ADAY: skims-cart-page  
Gerekçe: `/cart` test edilmedi; sepet HeadlessUI drawer (`section.cart-main`). Klasik cart-page-main muhtemelen yok.  
Karar: leftover

---

ADAY: skims-split-tout-full-bleed  
Gerekçe: `section.split-tout` bbox ~150px — BRAS/UNDERWEAR görselleri overflow/crop. Tam split layout kanıtı zayıf.  
Örnekler: https://skims.com/  
Karar: leftover — promo-grid-banner obs var, interact scroll gerekebilir

---

ADAY: skims-blog-post  
Gerekçe: Blog list kanıtlandı; tekil blog post (`blog-post-main`) walk dışında kaldı.  
Örnekler: https://skims.com/blogs/solutions (article linkleri)  
Karar: leftover

---

ADAY: skims-policy-faq-pages  
Gerekçe: Footer'da FAQ, Privacy, Terms linkleri var; content page walk yapılmadı.  
Karar: leftover

---

ADAY: skims-nikeskims-collection  
Gerekçe: NikeSKIMS nav linki + koleksiyon `/collections/nikeskims` — ayrı landing/editorial olabilir.  
Karar: leftover

---

ADAY: skims-waitlist-band-cup  
Gerekçe: Bra PDP band/cup HeadlessUI radio; otomasyon flaky (LI click). T-shirt M seçimi de tutarsız. Accessory OS ürün cart fill için kullanıldı.  
Karar: leftover — interact stabilizasyon

---

ADAY: skims-gorgias-chat  
Gerekçe: Chat widget görülürse overlay dismiss; şema yok.  
Karar: leftover

---

ADAY: skims-newsletter-submit  
Gerekçe: Footer newsletter form — PII submit yapılmadı (kural).  
Karar: leftover — form görünür, submit yok
