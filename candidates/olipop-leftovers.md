# OLIPOP leftovers / adaylar

*Store:* https://drinkolipop.com · *Tema (görülen):* Production \| ehouse · schema_name Olipop 1.0 · custom (theme_store_id null)  
*Shop:* olipop-store.myshopify.com · *Tarih:* 2026-08-20

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: olipop-search-drawer-liquid-error  
Gerekçe: `#SearchDrawer` / `snippets/search-drawer` Liquid include hatası — overlay zero-size; header'da görünür arama ikonu yok. `global-predictive-search` obs açıldı ama **0 PNG** (capture-observation skip). Tam arama `/search?q=…` → `search-results` obs.  
Örnekler: https://drinkolipop.com/  
Öneri: map + tema bug notu  
Karar: onay bekliyor

---

ADAY: olipop-rebuy-smart-cart  
Gerekçe: Rebuy `.rebuy-cart__flyout` — Dawn cart-drawer yok. `/cart` → `/collections/drinks` redirect. Boş + dolu drawer iki obs (`global-cart-drawer`, `global-cart-drawer.2` warmupUrl cart/add). Checkout tıklanmadı.  
Örnekler: cart icon · https://drinkolipop.com/cart/add?id=37114287784095&quantity=1  
Öneri: map (mevcut global-cart-drawer)  
Karar: onay bekliyor

---

ADAY: olipop-collection-hybrid-meta  
Gerekçe: PLP tek section `collection_hybrid_meta` — banner + filtre + grid birleşik. `product-showcase-grid-plp` + `collection-banner` ayrımı yok.  
Örnekler: https://drinkolipop.com/collections/drinks  
Öneri: delta notu (mevcut şema)  
Karar: onay bekliyor

---

ADAY: olipop-pdp-gallery-split  
Gerekçe: PDP galeri `#shopify-section-oli-product-gallery` ve form `#shopify-section-oli-product-form` ayrı section'lar. `product-info-main` yalnız form; galeri carousel ayrı obs yok.  
Örnekler: https://drinkolipop.com/products/blackberry-vanilla  
Öneri: delta veya ikinci obs  
Karar: onay bekliyor

---

ADAY: olipop-store-locator-ambient  
Gerekçe: Home `ambient_retailers_section` → `social-proof-brand-logos` map. `/pages/store-locator` ayrı walk yapılmadı (Mod A footer/content yeterli).  
Örnekler: https://drinkolipop.com/pages/store-locator  
Öneri: ertele / page-content-main  
Karar: onay bekliyor

---

ADAY: olipop-klaviyo-cookieyes  
Gerekçe: CookieYes banner + Klaviyo POPUP (375 menü tıkını bloke edebilir). `dismissAllOverlays` Accept All + Klaviyo remove. Form gönderilmedi / PII yok.  
Örnekler: tüm sayfalar  
Öneri: feature (section değil)  
Karar: onay bekliyor

---

ADAY: olipop-blog-news-404  
Gerekçe: `/blogs/news` 404. Canlı blog `/blogs/digest`.  
Örnekler: https://drinkolipop.com/blogs/news  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: olipop-privacy-policy-page  
Gerekçe: `/pages/privacy-policy` — `#MainContent` yok; gövde header mega dropdown DOM'u ile karışık. Policy metni meta/SEO'da var; section obs açılmadı.  
Örnekler: https://drinkolipop.com/pages/privacy-policy  
Öneri: ertele / page-content-main  
Karar: onay bekliyor

---

ADAY: olipop-subscription-interstitial  
Gerekçe: PDP `#shopify-section-switch-to-subscription-interstitial` h=0 (modal). Stay.ai / subscription upsell.  
Örnekler: PDP Add to Cart sonrası  
Öneri: interact sonrası  
Karar: onay bekliyor
