# BREZ leftovers / adaylar

*Store:* https://www.drinkbrez.com · *Tema (görülen):* BREZ Original Production · schema_name Dawn 9.0.0 · custom  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: brez-age-gate  
Gerekçe: `agecheckerVsARddsz9` / `#agp_row` — “Please confirm your age / Are you at least 21 Years Old?”. Taksonomide age-gate yok. Capture `dismissAllOverlays` merkez overlay olarak gizliyor.  
Örnekler: her sayfa  
Öneri: ertele / feature (section değil)  
Karar: onay bekliyor

---

ADAY: brez-okendo-judgeme-reviews  
Gerekçe: Home Okendo carousel `testimonial-quote-carousel` ile map edildi. PDP Judge.me/`1681950726974b5d80` tam reviews widget (~1814px) observation yazılmadı — reviews şeması yok.  
Örnekler: https://www.drinkbrez.com/ · https://www.drinkbrez.com/products/og  
Öneri: yeni kategori veya testimonial varyant  
Karar: onay bekliyor

---

ADAY: brez-rebuy-smart-cart  
Gerekçe: Rebuy flyout (`#rebuy-cart`) kargo eşiği + You may also like + Checkout+. Dawn `cart-drawer` 0px. `global-cart-drawer` observation + interact (boş / OG qty1 / qty2). PLP/search/bundle statik karelerde flyout bazen binebiliyor (localStorage open).  
Örnekler: cart icon  
Öneri: map (mevcut global)  
Karar: onay bekliyor

---

ADAY: brez-store-locator-stockist  
Gerekçe: `/pages/storelocator` Stockist.co widget — harita + filtre (THC-INFUSED / FUNCTIONAL) + mağaza listesi (Ohio civarı bu oturumda). Taksonomide locator yok. `page-content-main` ile yakalandı.  
Örnekler: https://www.drinkbrez.com/pages/storelocator  
Öneri: yeni varyant veya ertele  
Karar: onay bekliyor

---

ADAY: brez-gorgias-contact  
Gerekçe: `/pages/contact` form `iframe[title="Gorgias Contact Form"]` (`contact.gorgias.help`). Parent section `lead-capture-form` 3vp aldı (iframe pikselleri). Gönderilmedi.  
Örnekler: https://www.drinkbrez.com/pages/contact  
Öneri: map + iframe notu  
Karar: onay bekliyor

---

ADAY: brez-404-region  
Gerekçe: `/pages/this-page-does-not-exist-xyz` ve `/blogs/news` → Dawn 404 “Page not found / Continue shopping”. Title: “This product or page is not available in your region”. Taksonomide 404 pageType yok.  
Örnekler: https://www.drinkbrez.com/blogs/news  
Öneri: ertele / candidate  
Karar: onay bekliyor

---

ADAY: brez-lab-coa-grid  
Gerekçe: `/pages/lab-test-results` `custom_products_w_coas` — ürün × COA listesi. Başlık `editorial-rich-text`. Izgara mevcut tipe sığmıyor.  
Örnekler: https://www.drinkbrez.com/pages/lab-test-results  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: brez-search-no-predictive  
Gerekçe: Header search ikonu 0px. forceOpen Dawn üst bar; `og` fill öneri listesi üretmedi. Asıl sonuç `/search?q=og` (18 results).  
Öneri: leftover — predictive yok  
Karar: onay bekliyor

---

ADAY: brez-rivo-account  
Gerekçe: Header/footer “Log in” / “My account” → `#rivo`. Auth/PII — yoklandı değil.  
Öneri: envanter dışı  
Karar: atlandı

---

## 404 / boş URL’ler

`/blogs/news` — 404 (blog list yok)  
`/pages/this-page-does-not-exist-xyz` — Dawn 404

## Bilinçli atlananlar

- `/account/login` ve Rivo login — auth  
- Newsletter Submit / Gorgias form submit / checkout  
- Strength 10mg (`/products/og-extra-strength`) — sayfa değişir  
- Wholesale `wholesale.drinkbrez.com` (ayrı vitrin)  
- Referrals, manufacturer-information, accessibility — policy-benzeri  
