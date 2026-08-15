# Cymbiotika leftovers / adaylar

*Store:* https://cymbiotika.com · *Tema (görülen):* cym-theme-com/live · schema_name Sprout 0.01 · custom (`theme_store_id` null) · `mitolife.myshopify.com` · theme id `129492189231`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: cymbiotika-404  
Gerekçe: `/pages/this-page-does-not-exist-qante` → 404 “Oops! We can't seem to find the page you're looking for.” Taksonomide 404 pageType yok. Observation `page-content-main` reuse.  
Örnekler: https://cymbiotika.com/pages/this-page-does-not-exist-qante  
Öneri: ertele / candidate  
Karar: onay bekliyor

---

ADAY: cymbiotika-store-locator  
Gerekçe: `/pages/store-locator` Stockist/Leaflet (`stockist-element-14`, retailer: Sprouts / Target / Raley's / Ulta / Whole Foods). Taksonomide store-locator yok.  
Örnekler: https://cymbiotika.com/pages/store-locator  
Öneri: ertele — üçüncü parti locator  
Karar: onay bekliyor

---

ADAY: cymbiotika-frontrow-reviews  
Gerekçe: PDP `#shopify-section-template--15656904687663__16678545464cb73fbb` 4.9 + iframe `#frontrow-testimonials` (~1096px). Native testimonial değil.  
Örnekler: https://cymbiotika.com/products/glutathione  
Öneri: ertele / commerce-tools  
Karar: onay bekliyor

---

ADAY: cymbiotika-firework  
Gerekçe: Home “Invest in yourself” `fw-player-deck` / `fw-storyblock` (Firework). PDP `product-firework-playlist`. Observation `media-shop-the-feed` reuse; player iframe.  
Örnekler: https://cymbiotika.com/ · https://cymbiotika.com/products/glutathione  
Öneri: leftover — üçüncü parti UGC  
Karar: onay bekliyor

---

ADAY: cymbiotika-no-cart-page  
Gerekçe: `/cart` → `/?cart=` home + `#drawer-cart`. `cart-page-main` yok.  
Örnekler: https://cymbiotika.com/cart  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: cymbiotika-vue-landings  
Gerekçe: `/pages/liposomal-delivery` (liposomes), `/pages/brecka-protocol`, `/pages/quiz` — `#layout-main` custom/Vue, shopify-section yok. Quiz observation denendi; adımlar PII ise dur.  
Örnekler: https://cymbiotika.com/pages/liposomal-delivery · https://cymbiotika.com/pages/brecka-protocol · https://cymbiotika.com/pages/quiz  
Öneri: leftover  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- Home 0px: `category_carousel_N3Q4BH`, `homepage_banner_b_HVT9HB`, `homepage_banner_c_43fWBJ`
- PDP 0px: `product-image-left`, `product-specific-2`, `pdp-video-faq` (~1px), `product-liposomal`, `product-specific`
- `/blogs/articles` (Press) + `/blogs/recipes` — news ile aynı `template--15656900821039__main`
- `/pages/contact-us-new` — contact kardeşi
- Privacy ~18839px — resmi crop dener; olmazsa yükseklik leftover
- FAQ ~6880px — resmi crop dener
- Geo `shop-redirect-popup` (CA/UK/AE/AU) — overlay, envanter değil
- Newsletter / contact / account — PII stop
- Wholesale `wholesale.cymbiotika.com`, Arise rewards, create-your-bundle, knowledge-center, supplement-guide, livestreams, careers, gift-card-balance
- UserWay a11y + Cym chatbot
