# Partake Foods leftovers / adaylar

*Store:* https://partakefoods.com · *Tema (görülen):* `partakefoods-new/main` · `schema_name` **Partake (hasmerit.co)** · `schema_version` 1.0.0 · `theme_store_id` null (custom) · theme id `142385545314`  
*Shop:* `partake-foods.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: partakefoods-404  
Gerekçe: `/pages/this-page-does-not-exist-qante` → 404 · `#shopify-section-template--19018229842018__main` (404 / Page not found / CONTINUE SHOPPING). Taksonomide 404 pageType yok.  
Örnekler: https://partakefoods.com/pages/this-page-does-not-exist-qante  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: partakefoods-about-404  
Gerekçe: Header/mega **About Us** → `/pages/about` 404 (aynı 404 template). `/pages/about-us` ve `/pages/our-story` de 404. Kurucu hikâyesi home `split_content` + LEARN MORE aynı kırık hedef.  
Örnekler: https://partakefoods.com/pages/about  
Öneri: leftover — about pageType yok bu vitrinde  
Karar: onay bekliyor

---

ADAY: partakefoods-store-locator  
Gerekçe: `/pages/find-us` · `#shopify-section-template--19018229678178__store_locator_CgVNDA` (~890px iframe). Heading + featured collection observation yazıldı; harita/locator mevcut tiplere oturmuyor.  
Örnekler: https://partakefoods.com/pages/find-us  
Öneri: ertele — locator ailesi (Graza/Chomps leftover ile aynı sınıf)  
Karar: onay bekliyor

---

ADAY: partakefoods-no-atc  
Gerekçe: PDP (`birthday-cake-cookies`, `classic-grahams-6-75oz`, `ginger-snap-cookies`) `product-form` / Add to cart yok. CTA **FIND NEAR YOU** → find-us. `products.json` bazı varyantları `available:true` (Classic Grahams $16.99, Birthday Cake 3/6 Boxes) ama UI satmıyor.  
Örnekler: https://partakefoods.com/products/birthday-cake-cookies  
Öneri: leftover — vitrin retail-first; `product-info-main` delta  
Karar: onay bekliyor

---

ADAY: partakefoods-cart-notification  
Gerekçe: Dawn `#cart-notification` (Item added to your cart) var; `cart-drawer` yok. ATC UI olmadığı için bildirim tetiklenmedi. Sepet sayfası `cart-page-main`.  
Örnekler: https://partakefoods.com/  
Öneri: leftover — `global-cart-drawer` zorlama  
Karar: onay bekliyor

---

ADAY: partakefoods-faq-anchor-nav  
Gerekçe: `/pages/faq` `#shopify-section-template--19018229645410__anchor_links_fTxLyE` — ALLERGY-FRIENDLY / WHAT WE’RE MADE OF / SNACK STORAGE Q’S in-page TOC. `collection-nav-icon-buttons` koleksiyon vitrini.  
Örnekler: https://partakefoods.com/pages/faq  
Öneri: Graza page-anchor-nav ile aynı sınıf  
Karar: onay bekliyor

---

ADAY: partakefoods-custom-stickers  
Gerekçe: Home + PLP `custom_stickers_*` section height 0 (dekoratif/hydrate). Kanıt yok.  
Örnekler: https://partakefoods.com/  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: partakefoods-terms-bar  
Gerekçe: `#shopify-section-terms-acknowledgment-bar` — “We've recently updated our Terms & Conditions” + ACKNOWLEDGE & VIEW / DISMISS. İlk HTML’de göründü; Playwright’ta height 0. Announcement merchandising değil.  
Örnekler: https://partakefoods.com/  
Öneri: leftover — `promo-announcement-bar` zorlama  
Karar: onay bekliyor

---

ADAY: partakefoods-shopify-policies-empty  
Gerekçe: `/policies/privacy-policy`, `/policies/terms-of-service`, `/policies/refund-policy`, `/policies/shipping-policy` 200 ama main gövde yok (yalnız header + footer marquee). Asıl metin `/pages/privacy-policy` ve `/pages/terms-of-service`.  
Örnekler: https://partakefoods.com/policies/privacy-policy  
Öneri: leftover — aynı page template observation privacy’de  
Karar: onay bekliyor

---

## 404 / harici

- `/pages/this-page-does-not-exist-qante` — 404  
- `/pages/about` · `/pages/about-us` · `/pages/our-story` — 404  
- `/blogs/blog` — 404 (`/blogs/all` ve `/blogs/news` 200)  
- https://wonderkindco.co/ · https://www.hasmerit.co/ — tema kredi, harici  

---

## Bilinçli atlananlar (aynı tip / PII / auth)

- `/account` → Shopify Customer Account login (PII)  
- Checkout · e-posta/SMS submit · contact Send · blog comment · footer newsletter fill  
- `/pages/press` · `/pages/black-history-month` · `/pages/partake-doubletree-by-hilton-1` — ince `page-content-main` (privacy ile aynı template)  
- `/pages/request-us-at-your-store` — form/PDF; PII  
- `/pages/terms-of-service` — aynı page template, privacy alındı  
- Ambassador / CCPA / GDPR / reseller / charitable / sitemap / Google feed — legal tekrar  
- Home `social_icons_*` + boş `marquee_XMrpdV` (height 0/60, metin yok)  
- PLP `/collections/cookies-1` ve `/collections/all` — full-lineup ile aynı template  
- Flavor kartı tıkı başka PDP — in-page swatch değil  
- `/blogs/news` listesi — `/blogs/all` alındı (nav hedefi)  
