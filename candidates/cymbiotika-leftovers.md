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
Gerekçe: `/pages/store-locator` Stockist/Leaflet (`stockist-element-14`, Sprouts / Target / Raley's / Ulta / Whole Foods). Taksonomide store-locator yok.  
Örnekler: https://cymbiotika.com/pages/store-locator  
Öneri: ertele — üçüncü parti locator  
Karar: onay bekliyor

---

ADAY: cymbiotika-frontrow-reviews  
Gerekçe: PDP `#…__16678545464cb73fbb` 4.9 + iframe `#frontrow-testimonials`. Observation `testimonial-quote-carousel` reuse; widget üçüncü parti.  
Örnekler: https://cymbiotika.com/products/glutathione  
Öneri: ertele / commerce-tools  
Karar: onay bekliyor

---

ADAY: cymbiotika-firework  
Gerekçe: Home “Invest in yourself” Firework `fw-player-deck` / `fw-storyblock`. PDP `product-firework-playlist`. Observation `media-shop-the-feed` reuse.  
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
Gerekçe: `/pages/liposomal-delivery`, `/pages/brecka-protocol` — `#layout-main` custom/Vue, shopify-section yok. Quiz landing observation yazıldı; adımlar PII.  
Örnekler: https://cymbiotika.com/pages/liposomal-delivery · https://cymbiotika.com/pages/brecka-protocol  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: cymbiotika-pdp-seals-chrome  
Gerekçe: PDP `product-seals` (Gluten Free / GMP / Keto / Made In USA, 88px). Resmi section crop sticky header’a oturdu (1440 = yalnız nav). Observation yazılmadı.  
Örnekler: https://cymbiotika.com/products/glutathione  
Öneri: leftover — chrome crop  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- Home 0px: `category_carousel_N3Q4BH`, `homepage_banner_b_HVT9HB`, `homepage_banner_c_43fWBJ`
- PDP 0px: `product-image-left`, `product-specific-2`, `pdp-video-faq` (~1px), `product-liposomal`, `product-specific`
- `/blogs/articles` (Press) + `/blogs/recipes` — news ile aynı `template--15656900821039__main`
- `/pages/contact-us-new` — contact kardeşi
- Collection `banner` 103px — resmi crop header + “All Products” sızıntısı
- Predictive `input` (glutathione yazısı) piksel değiştirmedi — açık drawer popular+recommended alındı
- Cart filled/changed **375** — `/cart.js` bot-wall + ATC UI eklemedi; 768/1440 UI ATC + qty 2 doğrulandı
- Geo `shop-redirect-popup` (CA/UK/AE/AU)
- Cookie GOT IT + Cym chatbot birçok karede (dismiss main-içinde atlıyor)
- Newsletter / contact / account / quiz adımları — PII stop
- Wholesale, Arise, create-your-bundle, knowledge-center, supplement-guide, livestreams, careers, gift-card-balance
- UserWay a11y
- Shop by Benefit / Learn mega bu turda yoklandı değil
