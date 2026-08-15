# Javy leftovers / adaylar

*Store:* https://javycoffee.com → https://javvycoffee.com · *Tema:* görünmüyor (Hydrogen/Oxygen) · shop `drink-javy.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: javy-hydrogen-bio-404  
Gerekçe: Native olmayan rotalar (`/search`, `/pages/about`, `/policies/privacy-policy`, `/pages/faq`, `/pages/contact`…) 200 ile `/bio?utm_source=404&utm_medium=hydrogen` (“Better Coffee Made Easy.”) landing’e düşer. Taksonomide 404 pageType yok.  
Örnekler: https://javvycoffee.com/search?q=protein  
Öneri: ertele / candidate — `search-results` veya `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: javy-alia-scratch  
Gerekçe: `#alia-root-*` “Try your luck / Scratch below” overlay. Sepet tıklanınca da çıkabiliyor. E-posta/PII ve scratch oynanmadı.  
Örnekler: home overlay  
Öneri: üçüncü parti — şema yok  
Karar: onay bekliyor

---

ADAY: javy-okendo-reviews  
Gerekçe: PDP `#customer-reviews` + Reviews sayfası “Written Reviews 4.8 / 37,154” Okendo widget (`oke-w-header`). `testimonial-quote-carousel` ev yapımı quote bloğuna map edildi; Okendo filtre/sort ailesi yok.  
Örnekler: https://javvycoffee.com/products/protein-coffee · https://javvycoffee.com/reviews  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: javy-store-locator-map  
Gerekçe: `/store-locator` başlık + “Find Javvy near you” + ürün chip; iframe/harita height kanıtı yok.  
Örnekler: https://javvycoffee.com/store-locator  
Öneri: `page-content-main` gözlem var; widget aday  
Karar: onay bekliyor

---

ADAY: javy-gorgias-help-center  
Gerekçe: `/support` ayrı Help Center (Javvy Help Center / FAQ / ARE YOU JAVVY NOW?). Store `header#navbar_container` yok. Native contact/FAQ sayfası yok.  
Örnekler: https://javvycoffee.com/support  
Öneri: ertele — policy observation yalnız privacy gövdesi  
Karar: onay bekliyor

---

ADAY: javy-plp-volume-price-table  
Gerekçe: `/collections/all` düz grid değil — koleksiyon bloğu + `concentrates-price_table` (1/2/3+ bags). `product-showcase-grid-plp` delta’sında.  
Örnekler: https://javvycoffee.com/collections/all  
Öneri: map tartışması / commerce-tools  
Karar: onay bekliyor

---

ADAY: javy-subscription-selling-plan  
Gerekçe: `/pages/subscription` + PDP flavor/ATC selling-plan. commerce-tools adayı; fiyat motoru şemaya girmedi.  
Örnekler: https://javvycoffee.com/pages/subscription  
Öneri: ertele  
Karar: onay bekliyor

---

## Bilinçli atlananlar

- `/account` / checkout / newsletter submit / giveaway form — PII  
- Predictive search — header’da arama ikonu yok  
- Mega hover — Shop All `<a href="/collections/all">`; tık sayfaya gider  
- `/cart` sayfa — `/?openCart=true` drawer  
- `/products/gift-card` — `/collections/all`  
- `/pages/our-impact` (About Us) — client home  
- `/blogs/news` — 500 “Oh no!”  
- Theme Store adı — vitrinde yok, uydurulmadı
