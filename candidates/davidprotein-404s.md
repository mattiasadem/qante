# David Protein — 404 / native olmayan rotalar

*Store:* https://davidprotein.com · *Tarih:* 2026-08-15

Taksonomide 404 pageType yok. Şema yazılmadı.

---

ADAY: davidprotein-cf-challenge-as-404  
Gerekçe: `/this-page-does-not-exist-qante` Cloudflare challenge (429, “Your connection needs to be verified”). Native 404 şablonu görülmedi.  
Örnekler: https://davidprotein.com/this-page-does-not-exist-qante  
Öneri: ertele — challenge ≠ 404 pageType  
Karar: onay bekliyor

---

ADAY: davidprotein-cart-page-redirect  
Gerekçe: `/cart` home’a yönlendirir (CF 429 değil). Drawer `/?modals=cart-drawer-dialog` + `cart-sections` birincil. `cart-page-main` observation yok.  
Örnekler: https://davidprotein.com/cart  
Öneri: drawer birincil  
Karar: onay bekliyor

---

ADAY: davidprotein-search-page-ok  
Gerekçe: İlk walk `/search?q=protein` 429 CF. Retry `/search?q=blueberry` 200 — `search-results` + editorial 3vp. Overlay ayrı (`global-predictive-search`).  
Örnekler: https://davidprotein.com/search?q=blueberry  
Öneri: kapatıldı (obs var); 429 riski leftovers’ta  
Karar: kapatıldı
