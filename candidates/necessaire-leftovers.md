# Nécessaire leftovers / adaylar

*Store:* https://necessaire.com · *Tema (görülen):* `[NEC-1.59.0] NPL Moisture` · `schema_name` Necessaire 1.59.0 · `theme_store_id` 796  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: necessaire-404  
Gerekçe: `/pages/this-page-does-not-exist-qante` → 404 · `#shopify-section-404` (HOME 404 NOT FOUND · Need help finding your way?). Taksonomide 404 pageType yok.  
Örnekler: https://necessaire.com/pages/this-page-does-not-exist-qante  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: necessaire-store-locator  
Gerekçe: `/pages/store-locator` · page-content neredeyse boş (harita/widget hydrate?). Locator mevcut tiplere oturmuyor.  
Örnekler: https://necessaire.com/pages/store-locator  
Öneri: ertele — commerce/locator  
Karar: onay bekliyor

---

ADAY: necessaire-referrals  
Gerekçe: `/pages/referrals` · Give $10. Get $10. e-posta formu (PII). Referral widget.  
Örnekler: https://necessaire.com/pages/referrals  
Öneri: ertele — form doldurulmadı  
Karar: onay bekliyor

---

ADAY: necessaire-reviews-app  
Gerekçe: PDP `#shopify-section-template--19863517757553__17297940727d479316` Shopify app block — AI reviews summary + 4.4 stars (Judge.me/benzeri). `testimonial-quote-carousel` zorlama.  
Örnekler: https://necessaire.com/products/the-body-retinol  
Öneri: reviews-app / UGC widget varyantı  
Karar: onay bekliyor

---

ADAY: necessaire-cart-page  
Gerekçe: `/cart` → `https://necessaire.com/?mini-cart=open` (home + Rebuy drawer). `cart-page-main` yok.  
Örnekler: https://necessaire.com/cart  
Öneri: leftover — asıl sepet `global-cart-drawer` (Rebuy `.rebuy-cart__flyout`)  
Karar: onay bekliyor

---

ADAY: necessaire-pdp-tout-banners  
Gerekçe: PDP `product-tout-banners` — Packaging / Recycling Instructions expandable (2 satır). FAQ değil.  
Örnekler: https://necessaire.com/products/the-body-retinol  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: necessaire-pdp-buy-it-with  
Gerekçe: PDP `product-features` üstünde Rebuy BUY IT WITH (The Body Wash | Multi-Mineral). Aynı section spec accordion (`product-info-tabs` alındı).  
Örnekler: https://necessaire.com/products/the-body-retinol  
Öneri: leftover — Rebuy app  
Karar: onay bekliyor

---

ADAY: necessaire-hair-set-contains  
Gerekçe: Hair Moisture Duo PDP `step-by-step` — SET CONTAINS (Shampoo + Conditioner satırları). Bundle builder değil.  
Örnekler: https://necessaire.com/products/the-hair-moisture-duo  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: necessaire-scent-repeats  
Gerekçe: `/pages/scent` 7× `section_50_50` + 7× `index_product_grid` (Eucalyptus…Fragrance-Free). İlk trio alındı; kalanı aynı iskelet.  
Örnekler: https://necessaire.com/pages/scent  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: necessaire-community-404  
Gerekçe: Footer “Community” → `/pages/community` 404.  
Örnekler: https://necessaire.com/pages/community  
Öneri: leftover — kırık link  
Karar: onay bekliyor

---

## 404 / harici

- `/pages/this-page-does-not-exist-qante` — 404 (yukarı)  
- `/pages/community` — 404  
- https://www.instagram.com/necessaire/ · https://www.tiktok.com/@necessaire — harici  
- https://app.onbrand.com/brand/necessaire/ — harici creators  
- https://necessaire.com/tools/tracking — sipariş takip (PII)  
- https://necessaire.com/tools/sitemap  

---

## Bilinçli atlananlar (aynı tip / PII / auth)

- `/account` · checkout · e-posta/SMS form submit · newsletter fill (`#newsletter-modal`, footer Sign Up)  
- Cookie “Do not sell” / “OK” — dismiss-overlays; PII yok  
- Chat bubble (sağ alt) — PII; birçok karede kalabilir  
- Recharge subscribe form dışında satınalma yok  
- Subscribe sayfası banner1/banner3 — editorial tekrar  
- Terms / Accessibility — `page-content-main` aynı page-text ailesi  
- Corporate gifting / gift card — kampanya; PDP ailesi veya leftover  
- Shoplift `sl_quick_nav` 1440 height 0 — 375 şerit observation  
- Web-pixel / Rebuy tracker iframe — dokunulmadı  
- Spacers (`index_spacer_*`) — section değil  
