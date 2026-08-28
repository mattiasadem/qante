# Aday — listicle-advertorial

Sayfa tipi `listicle-advertorial` için şemaya sığmayan veya tek şema ile tam karşılanmayan gözlemler.

---

ADAY: listicle-numbered-best-of
Gerekçe: Caraway `/blog/best-kitchen-gifts` — numaralı 1–11 luxury best-of maddeleri kendi marka SKU’larına inline prose linklerle blog gövdesinde (`blog-post-main.icerik`). Ayrı `product-showcase-featured` / grid section yok; her madde H3 + paragraf + ürün adı linki.
Örnekler: https://www.carawayhome.com/blog/best-kitchen-gifts
Öneri: `blog-post-main` reuse + delta; veya gelecekte `editorial-listicle-ranked` varyantı (numara slot + ref product min/max)
Karar: onay bekliyor — bu turda yeni schemaId açılmadı

---

ADAY: inline-empty-cart-sidebar
Gerekçe: Sayfa yüklenince `main > div` (600px genişlik) sağda boş sepet + ürün öneri kartları (Cookware Set, Food Storage, Bundles). 1440’ta viewport dışında (x=1440); mobilde overlay. `global-cart-drawer` partial fit — her zaman açık sidebar, raffle promo üstünde.
Örnekler: https://www.carawayhome.com/blog/best-kitchen-gifts
Öneri: interact pass veya ayrı obs `global-cart-drawer` + `captureMode: viewport` + prepareClick cart icon
Karar: onay bekliyor — bu turda 3VP capture edilmedi

---

ADAY: caraway-custom-react-platform
Gerekçe: Caraway headless/custom React; `#shopify-section-*` yok. Selector’lar `#global-promo-bar`, `#main-nav`, `section:has(h1)`, `footer`.
Örnekler: https://www.carawayhome.com/blog/best-kitchen-gifts
Öneri: `kaynak` map’te platform notu; selector stabilitesi için data-testid PR (merchant)
Karar: onay bekliyor
