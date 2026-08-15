# Material Kitchen leftovers / adaylar

*Store:* https://materialkitchen.com · *Tema (görülen, uydurulmadı):* **08/10 - RC Variant Change Asset [EDIT HERE]** · `schema_name` Themekit template theme · `schema_version` 1.0.0 · `theme_store_id` null · role `main` · theme.id `141671563326`  
*Shop:* `material-kitchen.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: materialkitchen-okendo-reviews  
Gerekçe: PDP `#shopify-section-product-default` içinde Okendo widget ~1709px (4.8 / 111 reviews). `/pages/reviews` `#shopify-section-page-reviews-reviews` yalnız “Reviews” 269px. Reviews ailesi yok; ticker + quote ayrı observation.  
Örnekler: https://materialkitchen.com/products/the-mk-free-board · https://materialkitchen.com/pages/reviews  
Öneri: ertele — reviews şeması yok  
Karar: onay bekliyor

---

ADAY: materialkitchen-pdp-you-may-also-like  
Gerekçe: PDP “You may also like” ~681px unnamed `div` (Rebuy). Unique class/id yok. `.morefor` ayrı observation.  
Örnekler: https://materialkitchen.com/products/the-mk-free-board  
Öneri: leftover — selector netleşince  
Karar: onay bekliyor

---

ADAY: materialkitchen-reading-articles-grid  
Gerekçe: `/pages/reading-material` `#shopify-section-blog-articles` ~22723px. Element SS pratik değil; hero observation var.  
Örnekler: https://materialkitchen.com/pages/reading-material  
Öneri: leftover — ilk satır/viewport veya şema `infiniteScroll`  
Karar: onay bekliyor

---

ADAY: materialkitchen-help-empty  
Gerekçe: `/pages/help` 200 — `main.content.help` yalnız H1 “Help” (102px). `/pages/about-us` 200 — H1 “About Us”, gövde 0. Asıl about `/pages/about`, asıl FAQ `/pages/faq`.  
Örnekler: https://materialkitchen.com/pages/help · https://materialkitchen.com/pages/about-us  
Öneri: leftover — boş şablon  
Karar: onay bekliyor

---

ADAY: materialkitchen-store-locator  
Gerekçe: `/pages/store-locator` `#store-locator-wrapper` — Ace General Store / All Good Things… Taksonomide store-locator yok.  
Örnekler: https://materialkitchen.com/pages/store-locator  
Öneri: ertele / candidate  
Karar: onay bekliyor

---

ADAY: materialkitchen-external-returns-wholesale  
Gerekçe: Footer Returns → `https://material.loopreturns.com/#/` (Loop). Wholesale → Faire. Custom Inquiry → Google Form.  
Öneri: envanter dışı (ayrı host)  
Karar: onay bekliyor

---

ADAY: materialkitchen-search-liquid-error  
Gerekçe: `/search?q=knife` her kartta `Liquid error (templates/search line 9): Could not find asset snippets/bold-product.liquid`. 17 sonuç yine render.  
Örnekler: https://materialkitchen.com/search?q=knife  
Öneri: leftover — tema asset eksiği  
Karar: onay bekliyor

---

ADAY: materialkitchen-predictive-static  
Gerekçe: `#search` fill `knife` → Suggested listesi değişmedi (Bestsellers / Knives + Stand / reBoard / Ceramics / Gift Card) + “Unfortunately, we couldn’t find any results for your search.” Canlı ürün kartı yok.  
Öneri: leftover — predictive gerçek sonuç değil  
Karar: onay bekliyor

---

ADAY: materialkitchen-404-pages  
Gerekçe: HTTP 404 + custom `#shopify-section-404` (observation var): `/pages/our-story`, `/pages/shipping`, `/pages/returns`, `/pages/warranty`, `/blogs/news`, `/blogs/journal`, `/blogs/reading-material`. Blog asıl `/blogs/recipes` + `/pages/reading-material`. Returns Loop.  
Öneri: leftover kayıt — 404 şablon tek  
Karar: onay bekliyor

---

ADAY: materialkitchen-gifts-hospitality-registry  
Gerekçe: `/pages/gifts-for-everyone-on-your-list` gift-guide (Bestsellers / Entertainer / Wellness). `/pages/hospitality`, `/pages/registry` gezilmedi (PII/form riski). Bestsellers LP observation var.  
Öneri: leftover — ikinci gift-guide  
Karar: onay bekliyor

---

ADAY: materialkitchen-account  
Gerekçe: Header’da account/login görünmedi bu walk’ta. Register footer → `/pages/registry`. Auth / PII.  
Öneri: envanter dışı  
Karar: onay bekliyor

---

ADAY: materialkitchen-menu-1440  
Gerekçe: `button.header__menu-toggle` 1440’te 0px. Mega `a.nav__link.js-shop`.  
Öneri: leftover — beklenen  
Karar: onay bekliyor

---

ADAY: materialkitchen-cart-qty  
Gerekçe: Dolu drawer karesinde qty stepper (minus / 2 / plus) var. `button[name=plus]` / `.cart__qty-plus` / `has-text('+')` eşleşmedi — `changed` PNG yok. Native boş: “You have no items in your cart.” + We recommend.  
Örnekler: aside.cart.cart-slider  
Öneri: leftover — qty selector  
Karar: onay bekliyor

---

ADAY: materialkitchen-cart-mobile-sca  
Gerekçe: `/cart` `#sca_fg_cart` 1440 ~808px; 375/768 h=0 — sayfa native drawer’ı dolduruyor. Observation `#main-content` viewport.  
Öneri: leftover — mobil cart sayfa = drawer  
Karar: onay bekliyor

---

## İnce / tekrar

- Home Best Sellers Rebuy `#rebuy-widget-118304` — observation var; aynı widget id header/cart dump’ta da geçti.  
- PDP sticky ATC `.product-sticky-add-cart-new` — `product-info-main` delta; ayrı kare yok.  
- `/policies/privacy-policy` Shopify policy — `/pages/privacy-policy` `.legal` claim edildi.  
- Cookie class `cookie-visible` body’de; ayrı cookie banner elementi yoklandı değil.  
- Newsletter / contact submit — PII, yapılmayacak.
