# Rhone leftovers / adaylar

*Store:* https://www.rhone.com · *Tema (görülen):* Theme Store / `Shopify.theme.name` / `schema_name` yok · custom Nuxt + Nacelle + Shopify (`rhone.myshopify.com`)  
*Tarih:* 2026-08-15

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: rhone-404  
Gerekçe: Taksonomide 404 pageType yok. `/blogs/news` ve `/blogs/the-pursuit` ve `/blogs/journal` → 404 “Go Home” (`.page-not-found`). `/pages/this-page-does-not-exist-qante` SPA 200 (gövde boş / home chrome).  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: rhone-blog-missing  
Gerekçe: `/blogs/news` · `/blogs/journal` · `/blogs/the-pursuit` 404. Blog envanteri yok.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: rhone-faq-contact-resale-empty  
Gerekçe: `/pages/faq/` · `/pages/contact/` · `/pages/resale/` 200 ama `main-content` ~101px (yalnız header chrome + “Return to main content”). Hydrate boş.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: rhone-support-gladly  
Gerekçe: Footer / Help center → `/pages/support/` title “help center”; Gladly chat SDK (`cdn.gladly.com`). Form/PII yok.  
Öneri: leftover — dış helpdesk  
Karar: onay bekliyor

---

ADAY: rhone-privacy-external  
Gerekçe: Privacy Notice → `https://privacy.rhone.com/` (TrueVault Polaris). Terms observation `page-content-main` (`/pages/terms-of-use/`).  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: rhone-newsletter-pii  
Gerekçe: Home `.modal-outer` “15% off your first order” + email* + Men’s/Women’s/Both. Footer newsletter görünmedi. Doldurulmadı/gönderilmedi. Cookie “Okay” / Polaris consent.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: rhone-account-wishlist  
Gerekçe: Header account + heart (Save to favorites). `/account` login — PII, yürünmedi.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: rhone-return-portal  
Gerekçe: `/pages/returns/` “Start my return” portal. U.S. returns metin observation çekildi. Portal form PII.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: rhone-about-stack  
Gerekçe: About Forever Forward sbs, Hear from our customers quotes, extra kartlar. 3 temsilci çekildi (banner + rich text + What drives us).  
Öneri: leftover — aynı aile  
Karar: onay bekliyor

---

ADAY: rhone-mental-nyc-pursuits-new  
Gerekçe: `/pages/mental-fitness/` (1 visual-nav temsilci), `/pages/a-love-letter-to-nyc/` (banner + letter + 3 mosaic + product carousel), `/pages/12-pursuits/` (video + signup PII + calendar + month scroller), `/pages/mens-new-to-rhone/` (offer + grids + mosaics). Tipler home/about’ta var.  
Öneri: leftover — ek instance  
Karar: onay bekliyor

---

ADAY: rhone-bazaarvoice-reviews  
Gerekçe: PDP Bazaarvoice 4.6 / 18 reviews (Write a review). Reviews ailesi yok; `testimonial-quote-carousel` değil.  
Örnekler: https://www.rhone.com/products/mens-origin-tee-slim-fit/  
Öneri: reviews-app varyant  
Karar: onay bekliyor

---

ADAY: rhone-quick-shop  
Gerekçe: Kartlarda `.quickshop-button`. Overlay `global-quick-view` adayı; bu koşuda open karesi henüz yok.  
Öneri: interact leftover — piksel değişince çek  
Karar: onay bekliyor

---

ADAY: rhone-search-mobile  
Gerekçe: 375/768 masaüstü `.desktop-search-wrapper input` gizli. Mobil Search `.nav-flyout` satırında. 1440 Algolia overlay 3vp resmi (trending + Origin Tee). Mobil predictive 3vp yok.  
Öneri: leftover  
Karar: leftover

---

ADAY: rhone-plp-dy-related  
Gerekçe: `#dy-recommendations-656481` “We think you'd like” yalnız derin scroll sonrası DOM’a giriyor. `capture-observation` 4vp tavanına sığmıyor (selector 1440 eşleşmedi). Aynı tip PDP’de 3vp var.  
Öneri: leftover — recapture tavanı yetmedi, şema uydurulmadı  
Karar: leftover

---

ADAY: rhone-plp-filters  
Gerekçe: PLP Filter by / Sort by. Panel `changed` çekilmedi. In-grid promo “The finishing touches” grid kabında.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: rhone-store-locator-widget  
Gerekçe: `/store-locator/` heading observation. Harita/directory iframe veya üçüncü parti tam doğrulanmadı.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: rhone-third-party  
Gerekçe: Dynamic Yield recs, Tolstoy UGC, Stylitics outfits, Algolia search, Bazaarvoice, Klaviyo, Gladly, TrueVault Polaris, bglobale cross-border, swatches.rhone.com.  
Öneri: leftover — şema yok  
Karar: onay bekliyor

---

ADAY: rhone-375-hydrate  
Gerekçe: Home DY tabs 375 iskelet + For her underline taşımadı (768/1440 değişti). PDP 375 swatch tık sonrası hâlâ White Onyx / Loading Price (768/1440 Vintage Indigo $54). Resmi kareler var; piksel değişmedi.  
Öneri: leftover — ikinci deneme  
Karar: leftover

---

## Bilinçli atlananlar

- `/account` / login / checkout  
- Newsletter / return portal / promo code (PII)  
- Email / SMS  
- Wholesale `/pages/wholesale-greengrass/`  
- Cart page promo code alanı (görüldü, doldurulmadı)  
