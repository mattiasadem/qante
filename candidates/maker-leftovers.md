# Maker leftovers / adaylar

*Store:* https://maker-theme-food.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/maker  
*Tema (görülen, uydurulmadı):* **Maker - current** · `schema_name` **Maker** · `schema_version` **5.2.0** · `theme_store_id` **null** · id `74552705096` · role `main` · shop `maker-theme-food.myshopify.com`  
*Preset:* Food (`default`)  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: maker-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Theme Store sayısal id uydurulmadı.  
Örnekler: https://maker-theme-food.myshopify.com/  
Öneri: leftover — null id  
Karar: onay bekliyor

---

ADAY: maker-no-mega  
Gerekçe: 1440 nav düz `<a>`: HOME / JUICES / BOXES / ABOUT / BLOG. `.x-menu` dropdown/mega kolon/promo yok. `navigation-header-mega` yazıldı; delta: mega yok.  
Örnekler: https://maker-theme-food.myshopify.com/ `header.layout--header`  
Öneri: leftover — mega yok  
Karar: onay bekliyor

---

ADAY: maker-map-section  
Gerekçe: Home `#shopify-section-1520360150159` `.map--root`. Empress Juice Bar · 91 Victoria St, Nelson BC · saatler · OPEN IN MAPS + greyscale Google Map. Mevcut şemaya sığmıyor.  
Örnekler: https://maker-theme-food.myshopify.com/  
Öneri: leftover — map  
Karar: onay bekliyor

---

ADAY: maker-newsletter-popup  
Gerekçe: `.popup--root` auto “Sign up to our newsletter…”. Email + ENTER + FOLLOW US sosyal. Submit PII. Observation yazılmadı. FOLLOW header link aynı popup.  
Örnekler: home overlay  
Öneri: leftover — popup  
Karar: onay bekliyor

---

ADAY: maker-search-overlay  
Gerekçe: Header SEARCH tam ekran `.search--root[data-view=modal]` FrameworkSearch. 375/768/1440 `empress` yazınca yalnız metin + X; ürün/öneri kartı yok. `/search?q=empress` ayrı sayfa (8 sonuç) yazıldı.  
Örnekler: header SEARCH  
Öneri: leftover — predictive yok (submit-only overlay)  
Karar: onay bekliyor

---

ADAY: maker-cart-drawer-375-empty  
Gerekçe: 375 header’da cart kontrolü 0×0 (yalnız hamburger). forceOpen drawer kaydırmadı. Filled+changed 375 ATC ile OK. Boş sepet `/cart` 375 yazıldı.  
Örnekler: home 375  
Öneri: leftover — mobil boş drawer opener  
Karar: onay bekliyor

---

ADAY: maker-faq-404  
Gerekçe: `/pages/faq` 404 (`main .page-wrapper` Page not found). FAQ walk yok.  
Örnekler: https://maker-theme-food.myshopify.com/pages/faq  
Öneri: leftover — 404  
Karar: onay bekliyor

---

ADAY: maker-contact-routes  
Gerekçe: Contact handle `/pages/frontpage` (Contact Empress Juice Co). `/pages/contact` ve `/pages/contact-us` 404.  
Örnekler: https://maker-theme-food.myshopify.com/pages/frontpage  
Öneri: leftover — route  
Karar: onay bekliyor

---

ADAY: maker-delivery-page  
Gerekçe: `/pages/delivery` template--page + kurye haritası metni. `page-content-main` ile aynı iskelet; about yazıldı, delivery tekrar edilmedi.  
Örnekler: https://maker-theme-food.myshopify.com/pages/delivery  
Öneri: leftover — duplicate page  
Karar: onay bekliyor

---

ADAY: maker-plp-repeats  
Gerekçe: `/collections/all` (Products) ve `/collections/frontpage` (Boxes, 1 ürün) aynı collection section. Yazılan: `/collections/empress-juice-collection`.  
Örnekler: https://maker-theme-food.myshopify.com/collections/all  
Öneri: leftover — duplicate PLP  
Karar: onay bekliyor

---

ADAY: maker-collections-single-card  
Gerekçe: `/collections` tek kart (Empress Juice Collection · 5 PRODUCTS). frontpage koleksiyonu index’te yok. `collection-nav-image-cards` (şema min 2) yazıldı.  
Örnekler: https://maker-theme-food.myshopify.com/collections  
Öneri: leftover — 1 kart  
Karar: onay bekliyor

---

ADAY: maker-process-empty-href  
Gerekçe: Home IWT “OUR PROCESS” `href=""`.  
Örnekler: `#shopify-section-1522330492385`  
Öneri: leftover — boş CTA  
Karar: onay bekliyor

---

ADAY: maker-buy-it-now  
Gerekçe: Home featured-product + PDP `BUY IT NOW` / accelerated checkout. Checkout envanter dışı.  
Örnekler: https://maker-theme-food.myshopify.com/products/empress-box-5-day-detox  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: maker-404-routes  
Gerekçe: Aynı 404 (`main .page-wrapper`): `/pages/contact` `/pages/contact-us` `/pages/faq` `/pages/does-not-exist-qante`.  
Örnekler: https://maker-theme-food.myshopify.com/pages/faq  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/pages/contact`  
`/pages/contact-us`  
`/pages/faq`

---

## Bilinçli atlananlar

- `/account/login` — auth  
- Checkout / BUY IT NOW / cart CHECKOUT  
- Newsletter popup ENTER / contact SEND (PII)  
- Delivery page (aynı page tipi)  
- `/collections/all` + `/collections/frontpage` (aynı PLP tipi)  
- Map section (şema yok)  
