# David Protein — 404 / CF / native olmayan rotalar

*Store:* https://davidprotein.com · *Tarih:* 2026-08-15

Taksonomide 404 pageType yok. Şema yazılmadı.

---

ADAY: davidprotein-cf-challenge-as-404  
Gerekçe: `/this-page-does-not-exist-qante` ve birkaç içerik rotası Cloudflare challenge (429, “Your connection needs to be verified”). Native 404 şablonu görülmedi.  
Örnekler: https://davidprotein.com/this-page-does-not-exist-qante  
Öneri: ertele — challenge ≠ 404 pageType  
Karar: onay bekliyor

---

ADAY: davidprotein-search-page-429  
Gerekçe: `/search?q=protein` 429 CF. Predictive overlay home’da var (`predictive-search`). `search-results` observation açılmadı.  
Örnekler: https://davidprotein.com/search?q=protein  
Öneri: overlay ile yetin; sayfa gelirse `search-results`  
Karar: onay bekliyor

---

ADAY: davidprotein-cart-page-429  
Gerekçe: `/cart` 429 CF. Drawer `/?modals=cart-drawer-dialog` + `cart-sections` çalışıyor. `cart-page-main` observation açılmadı.  
Örnekler: https://davidprotein.com/cart  
Öneri: drawer birincil  
Karar: onay bekliyor
