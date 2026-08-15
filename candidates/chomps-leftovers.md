# Chomps leftovers / adaylar

*Store:* https://chomps.com · *Tema (görülen):* `[📆 Back to Routine] PRODUCTION THEME v2.9.4` · custom (`theme_store_id` null)  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: chomps-404  
Gerekçe: `/pages/this-page-does-not-exist-qante` → 404 · `#shopify-section-template--21247583518789__main` (`.four-o-four`, RETURN HOME). Taksonomide 404 pageType yok.  
Örnekler: https://chomps.com/pages/this-page-does-not-exist-qante  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: chomps-store-locator  
Gerekçe: `/pages/beef-jerky-near-me` · `.store-locator` + STORE REQUEST FORM. Harita/locator mevcut tiplere oturmuyor (Graza leftover ile aynı aile).  
Örnekler: https://chomps.com/pages/beef-jerky-near-me  
Öneri: ertele — yeni varyant veya commerce/locator tartışması  
Karar: onay bekliyor

---

ADAY: chomps-rewards-loyalty  
Gerekçe: `/pages/rewards` · `hero-rewards` + `rewards-program` + puan tablosu + SIGN IN/SIGN UP. Obvi rewards adayı ile aynı sınıf; `features-multicolumn` zorlama.  
Örnekler: https://chomps.com/pages/rewards  
Öneri: aday kategori (loyalty)  
Karar: onay bekliyor

---

ADAY: chomps-help-center  
Gerekçe: Footer FAQs → https://help.chomps.com/en-US (Gorgias, Shopify section yok). Contact “portal” aynı yere.  
Örnekler: https://help.chomps.com/en-US  
Öneri: ertele — harici helpdesk, `faq-collapsible-tabs` değil  
Karar: onay bekliyor

---

ADAY: chomps-refer-a-friend  
Gerekçe: `/pages/refer` · utility-block Join now / Log in ($5/$5). Referral widget.  
Örnekler: https://chomps.com/pages/refer  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: chomps-reviews-app  
Gerekçe: PDP `#shopify-section-template--21247592595525__reviews` Yotpo (filtre, Q&A, 2730 review). En yakın `testimonial-quote-carousel` observation + büyük delta.  
Örnekler: https://chomps.com/products/gluten-free-snack-beef-jerky-stick-original  
Öneri: reviews-app / UGC widget varyantı  
Karar: onay bekliyor

---

ADAY: chomps-cart-page  
Gerekçe: `/cart` → `/?viewcart=true` (home + drawer). `cart-page-main` yok.  
Örnekler: https://chomps.com/cart  
Öneri: leftover — asıl sepet `global-cart-drawer`  
Karar: onay bekliyor

---

## 404 / harici / rate-limit

- `/pages/this-page-does-not-exist-qante` — 404 (yukarı)  
- `/collections/beef-jerky` — bir taramada **429** Cloudflare “Just a moment…” (PLP `/collections/chomps` 200)  
- https://help.chomps.com/en-US — harici  
- https://wholesale.chomps.com/ — harici  
- https://privacy.chomps.com/ — harici (Do Not Sell / Privacy Choices)

---

## Bilinçli atlananlar (aynı tip / PII / auth)

- `/account` · checkout · e-posta/SMS form submit · newsletter fill  
- Mission `image_content_*` ×4 — `editorial-image-with-text` tekrarı (hero + FAQ alındı)  
- About “We got to work / The Result / Our community / Take Bigger Bites” — aynı editorial aile  
- Recipes / Chompians blog list — `blog-list-main` aynı template  
- Product Guarantee / Terms / Accessibility — `page-content-main` aynı page template  
- Careers / 4ocean / B-Corp / Press / Studentbeans / Recall — kampanya/HR; envanter dışı veya aynı editorial  
- Gorgias chat iframe (`chat-input` / `chat-button`) — PII  
- Visually.io / Loomi A/B anti-flicker — tema değil  
- Web-pixel sandbox iframe’leri — tracker, dokunulmadı
