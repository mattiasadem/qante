# BREZ leftovers / adaylar

*Store:* https://www.drinkbrez.com · *Tema (görülen):* BREZ Original Production · schema_name Dawn 9.0.0 · custom  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: brez-age-gate  
Gerekçe: `agecheckerVsARddsz9` / `#agp_row` — “Please confirm your age / Are you at least 21 Years Old?”. Taksonomide age-gate yok. Capture `dismissAllOverlays` merkez overlay olarak gizliyor; cookie set edilmedi.  
Örnekler: her sayfa  
Öneri: ertele / feature (section değil)  
Karar: onay bekliyor

---

ADAY: brez-okendo-reviews  
Gerekçe: Home `#okendo_reviews_carousel` + PDP Judge.me/`1681950726974b5d80` tam reviews widget (~1814px). Reviews şeması yok. Home carousel `testimonial-quote-carousel` ile map edildi; PDP widget observation yazılmadı.  
Örnekler: https://www.drinkbrez.com/ · https://www.drinkbrez.com/products/og  
Öneri: yeni kategori veya testimonial varyant  
Karar: onay bekliyor

---

ADAY: brez-rebuy-smart-cart  
Gerekçe: Rebuy flyout (`#rebuy-cart`, `.rebuy-cart__flyout`) kargo eşiği + You may also like. Dawn `cart-drawer` 0px. `global-cart-drawer` observation + delta.  
Örnekler: cart icon  
Öneri: map (mevcut global)  
Karar: onay bekliyor

---

ADAY: brez-store-locator-stockist  
Gerekçe: `/pages/storelocator` custom liquid + Stockist.co widget. İlk taramada iframe/harita hydrate olmadı (yalnız başlık + call-ahead).  
Örnekler: https://www.drinkbrez.com/pages/storelocator  
Öneri: ertele — harita kanıtı zayıf  
Karar: onay bekliyor

---

ADAY: brez-gorgias-contact  
Gerekçe: `/pages/contact` form `iframe[title="Gorgias Contact Form"]` (`contact.gorgias.help`). `lead-capture-form` parent section. Gönderilmedi.  
Örnekler: https://www.drinkbrez.com/pages/contact  
Öneri: map + iframe notu  
Karar: onay bekliyor

---

ADAY: brez-404-region  
Gerekçe: `/pages/this-page-does-not-exist-xyz` ve `/blogs/news` → Dawn 404 “Page not found / Continue shopping”. Title: “This product or page is not available in your region”. Taksonomide 404 pageType yok.  
Örnekler: https://www.drinkbrez.com/blogs/news  
Öneri: ertele / candidate — `page-content-main` zorlama (yine de 404 karesi alındı)  
Karar: onay bekliyor

---

ADAY: brez-lab-coa-grid  
Gerekçe: `/pages/lab-test-results` `custom_products_w_coas` — ürün × COA listesi. Başlık `editorial-rich-text`. Izgara mevcut tipe sığmıyor.  
Örnekler: https://www.drinkbrez.com/pages/lab-test-results  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: brez-rivo-account  
Gerekçe: Header/footer “Log in” / “My account” → `#rivo` (Rivo loyalty/account). Auth/PII — yoklandı değil.  
Öneri: envanter dışı  
Karar: atlandı

---

## 404 / boş URL’ler

`/blogs/news` — 404 (blog list yok)  
`/pages/this-page-does-not-exist-xyz` — Dawn 404

## Bilinçli atlananlar

- `/account/login` ve Rivo login — auth  
- Newsletter Submit / Gorgias form submit / checkout  
- Age-gate “Yes” ile cookie (dismiss yeterli)  
- Wholesale `wholesale.drinkbrez.com` (ayrı vitrin)  
- Referrals, manufacturer-information, accessibility — policy-benzeri, öncelik düşük  
