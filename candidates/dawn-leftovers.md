# Dawn leftovers / adaylar

*Store:* https://theme-dawn-demo.myshopify.com  
*Theme Store:* https://themes.shopify.com/themes/dawn  
*Tema (görülen, uydurulmadı):* **Dawn** · `schema_name` **Dawn** · `schema_version` **15.0.0** · `theme_store_id` **887** · id `129690763353` · role `main` · shop `theme-dawn-demo.myshopify.com`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: dawn-no-mega  
Gerekçe: `.mega-menu` yok. Bags / Shoes = `details-disclosure` + `header__submenu` dikey liste (görsel/promo kolon yok). `navigation-header-mega` yazıldı; delta: dropdown.  
Örnekler: https://theme-dawn-demo.myshopify.com/ `#Details-HeaderMenu-1`  
Öneri: leftover — mega yok  
Karar: onay bekliyor

---

ADAY: dawn-cart-notification  
Gerekçe: `cart-drawer` yok. Add to cart → `#cart-notification` popup (Item added / View my cart / Check out / Continue shopping). Sepet `/cart` sayfası. `global-cart-drawer` yazıldı; delta: popup, drawer değil.  
Örnekler: https://theme-dawn-demo.myshopify.com/products/puff-olive-leaf  
Öneri: leftover — Dawn cart-notification  
Karar: onay bekliyor

---

ADAY: dawn-cart-footer-split  
Gerekçe: Dawn `#…__cart-items` + `#…__cart-footer` ayrı section. Boşken footer h=0; doluyken Subtotal + Check out beklenir. `cart-page-main` yalnız cart-items.  
Örnekler: https://theme-dawn-demo.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: dawn-related-products-empty  
Gerekçe: PDP `#…__related-products` h≈64, metin yok. Hydrate yok. `product-showcase-related` yazılmadı.  
Örnekler: https://theme-dawn-demo.myshopify.com/products/puff-olive-leaf  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: dawn-puff-olive-leaf-sold-out  
Gerekçe: Handle `puff-olive-leaf` ama Color Olive Leaf “Variant sold out or unavailable”; varsayılan seçili Emerald. Interact Emerald→Chocolate.  
Örnekler: https://theme-dawn-demo.myshopify.com/products/puff-olive-leaf  
Öneri: leftover — default SKU  
Karar: onay bekliyor

---

ADAY: dawn-lookbook-pages  
Gerekçe: Nav Lookbook → `/pages/lookbook-summer`. `/pages/lookbook` aynı şablon: 5 collage (`__collage` … `__collage-5`, “Summer inspiration”) + featured-collection “Featured”. Walk dışı; observation yazılmadı.  
Örnekler: https://theme-dawn-demo.myshopify.com/pages/lookbook-summer  
Öneri: leftover — lookbook  
Karar: onay bekliyor

---

ADAY: dawn-policy-pages  
Gerekçe: `/pages/shipping` (Shipping — worldwide, free) ve `/pages/returns` (14 gün) Dawn `main-page` — `page-content-main` ile aynı iskelet. About/contact yazıldı; shipping/returns tekrar edilmedi. Ayrıca `/pages/shipping-returns`, `/pages/shoe-care-instructions`, `/pages/size-guide`, `/pages/style-guide`.  
Örnekler: https://theme-dawn-demo.myshopify.com/pages/shipping  
Öneri: leftover — duplicate page  
Karar: onay bekliyor

---

ADAY: dawn-404-routes  
Gerekçe: Aynı 404 (`#shopify-section-template--15968257540185__main`): `/pages/about-us`, `/pages/contact`, `/pages/faq`, `/policies/privacy-policy`, `/pages/does-not-exist-qante`. Observation `not-found/page-content-main` bir kare.  
Örnekler: https://theme-dawn-demo.myshopify.com/pages/about-us  
Öneri: leftover — route kaydı  
Karar: onay bekliyor

---

ADAY: dawn-collections-all  
Gerekçe: `/collections/all` (Products) aynı PLP tipi + banner. Bags PLP yazıldı; all tekrar edilmedi.  
Örnekler: https://theme-dawn-demo.myshopify.com/collections/all  
Öneri: leftover — duplicate PLP  
Karar: onay bekliyor

---

ADAY: dawn-buy-it-now  
Gerekçe: PDP `Buy it now` / accelerated checkout. Checkout envanter dışı; tıklanmadı.  
Örnekler: https://theme-dawn-demo.myshopify.com/products/puff-olive-leaf  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: dawn-country-selector  
Gerekçe: Header + footer localization (ülke/para listesi). Ayrı şema yok; header/footer delta. Değiştirilmedi.  
Örnekler: https://theme-dawn-demo.myshopify.com/  
Öneri: leftover — localization chrome  
Karar: onay bekliyor

---

ADAY: dawn-featured-collection-no-title  
Gerekçe: Home `#…__featured_collection` 8 kart (4×2) ama section başlığı boş. Sold out/Sale rozetleri var.  
Örnekler: https://theme-dawn-demo.myshopify.com/  
Öneri: leftover — boş başlık  
Karar: onay bekliyor

---

ADAY: dawn-search-empty-snowboard  
Gerekçe: `/search?q=snowboard` 0 results (eski Dawn snowboard kataloğu bu demoda yok). Observation `puff` (2). Boş-sonuç karesi çekilmedi.  
Örnekler: https://theme-dawn-demo.myshopify.com/search?q=snowboard  
Öneri: leftover  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/pages/about-us`  
`/pages/contact`  
`/pages/faq`  
`/policies/privacy-policy`

---

## Bilinçli atlananlar

- `/account/login` — auth  
- Checkout / Buy it now / cart Check out  
- Newsletter / contact form submit (PII)  
- Lookbook collage sayfaları (walk dışı)  
- Shipping / returns / size-guide / style-guide / shoe-care (aynı page tipi)  
- PDP related-products boş kutu  
