# Moon Juice leftovers / adaylar

*Store:* https://moonjuice.com · *Tema (görülen):* v1.0.2 - Moonjuice Horizon · schema_name Moonjuice Horizon · custom (`theme_store_id` null)  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: moonjuice-cart-page-redirect  
Gerekçe: `/cart` document title “Your Shopping Cart” değil — walk home template’e düştü (`smart-cart--enabled`). Asıl sepet Rebuy `#rebuy-cart` / `.rebuy-cart__flyout`. Recharge `#recharge-storefront-experiences__cart-drawer` height 0.  
Örnekler: https://moonjuice.com/cart  
Öneri: leftover — `cart-page-main` zorlama  
Karar: onay bekliyor

---

ADAY: moonjuice-404  
Gerekçe: `/this-page-does-not-exist-qante` → 404 “Page not found / The link may be incorrect… CONTINUE SHOPPING” + `product_list` “Discover something new”. Taksonomide 404 pageType yok.  
Örnekler: https://moonjuice.com/this-page-does-not-exist-qante  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: moonjuice-pdp-reviews  
Gerekçe: PDP `#shopify-section-template--20552723169363__1777932667350a6df7` — 4.8 / 3,859 reviews + Questions 58, FILTERS, WRITE A REVIEW (yeni pencere). Reviews şeması yok.  
Örnekler: https://moonjuice.com/products/magnesi-om-magnesium-supplement  
Öneri: ertele — testimonial-quote-carousel değil (üçüncü parti widget)  
Karar: onay bekliyor

---

ADAY: moonjuice-rewards  
Gerekçe: `/pages/rewards` — Welcome/Membership SIGN UP, How It Works (Join/Earn/Redeem), Ways to Earn, point table. Loyalty/rewards tipi yok. SIGN UP hesap — PII.  
Örnekler: https://moonjuice.com/pages/rewards  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: moonjuice-store-locator  
Gerekçe: `/pages/store-locator` ve `/pages/stockists` — mağaza adresi listesi + Online Retailers (Sephora, Nordstrom…). Harita widget yok (düz liste).  
Örnekler: https://moonjuice.com/pages/store-locator · https://moonjuice.com/pages/stockists  
Öneri: ertele — `page-content-main` adres defteri değil  
Karar: onay bekliyor

---

ADAY: moonjuice-ingredients-glossary  
Gerekçe: `/pages/ingredients` — hero + ABOUT\|INGREDIENTS\|SUSTAINABILITY + trust copy + “Traceable Ingredients” 3’lü kart grid’leri (Organic Acerola Cherry Brazil Details Products…). Glossary/directory tipi yok.  
Örnekler: https://moonjuice.com/pages/ingredients  
Öneri: yeni varyant veya map tartışması  
Karar: onay bekliyor

---

ADAY: moonjuice-why-it-works-compare  
Gerekçe: `/pages/why-it-works` intro + Magnesi-Om/SuperYou/SuperHair “+bioavailable +traceable…” satırları featured product ile çift. `comparison-quick-table` PDP’de var; bu sayfa artı-madde listesi.  
Örnekler: https://moonjuice.com/pages/why-it-works  
Öneri: leftover — featured + rich-text obs yazıldı  
Karar: onay bekliyor

---

ADAY: moonjuice-page-anchor-nav  
Gerekçe: About / Ingredients / Sustainability üst bant `ABOUT INGREDIENTS SUSTAINABILITY`. `collection-nav-tabs` koleksiyon vitrini; bu sayfa içi TOC.  
Örnekler: https://moonjuice.com/pages/about  
Öneri: graza-page-anchor-nav ile aynı sınıf  
Karar: onay bekliyor

---

ADAY: moonjuice-klaviyo-popup  
Gerekçe: “30% OFF YOUR FIRST SUBSCRIPTION ORDER” e-posta modal (Klaviyo). PII — doldurulmadı. Arama tıkını kesebilir.  
Öneri: üçüncü parti; dismiss  
Karar: onay bekliyor

---

## 404 / boş / yönlenen URL’ler

`/cart` → home (Rebuy)  
`/pages/contact` → `/pages/contact-us`  
`/pages/shops-quiz` → `/pages/quiz`  
`/this-page-does-not-exist-qante` → 404

## Bilinçli atlananlar

- `/account/login` — auth  
- Checkout / e-posta form submit / quiz PII  
- Chat floating widget (Gorgias-benzeri)  
- Sitemap XML chrome  
- `en-ca` localized storefront  
- Zero-height header `custom_liquid_gjdRrD`  
- PDP zero-height carousel/media siblings  
