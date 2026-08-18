# Eylül leftovers / adaylar

*Store:* https://dev-eylul.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/ef88b30d-7c1c-4474-b03f-dff5ef4c6453  
*Tema (görülen, uydurulmadı):* **Eylül** · developer **ikascom** · Theme Store UUID **`ef88b30d-7c1c-4474-b03f-dff5ef4c6453`** · logoText **eylül**  
*Platform:* **ikas** · `Shopify.theme` **yok** · `__IKAS_DATA__` · `x-powered-by: ikas`  
*Storefront:* `storefrontThemeId` `a1b55030-52e1-46ac-9b2c-ec238b9b442d` · `storefrontId` `29fd0757-66fa-4007-bd68-7ad43c43c58f` · `merchantId` `fd24ec01-cb21-4b82-9ad0-d238e7619d37` · `storeName` `dev-eylul` · `x-cache-tag` `8assj-dev-eylul.myikas.com`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: eylul-hero-single-slide  
Gerekçe: `section.hero` tek görsel + tek başlık (Eylül Kahve Sistemleri). Ok/nokta/ikinci slayt yok. `hero-slideshow` yazıldı; delta: tek slayt.  
Örnekler: https://dev-eylul.ikas.shop/  
Öneri: leftover — slideshow değil  
Karar: onay bekliyor

---

ADAY: eylul-faq-page-404  
Gerekçe: FAQ `section.faq` yalnız home. `/pages/sss` · `/pages/faq` → 404 `section.nf`. Walk FAQ home karesi.  
Örnekler: https://dev-eylul.ikas.shop/pages/sss  
Öneri: leftover — dedicated FAQ yok  
Karar: onay bekliyor

---

ADAY: eylul-blog-empty  
Gerekçe: `/blog` `section.blist` “Burada henüz bir yazı yok.” `blog-list-main` yazıldı. `blog-post-main` yok — yazı URL’si yok.  
Örnekler: https://dev-eylul.ikas.shop/blog  
Öneri: leftover — boş blog  
Karar: onay bekliyor

---

ADAY: eylul-pdp-reviews-empty  
Gerekçe: PDP `section.rv` “Müşteri Değerlendirmeleri / Henüz değerlendirme yok.” Yaz formu yoklandı değil. `testimonial-quote-carousel` alıntı şeridi değil. Observation yazılmadı.  
Örnekler: https://dev-eylul.ikas.shop/aarke-carbonator-3  
Öneri: leftover — boş reviews  
Karar: onay bekliyor

---

ADAY: eylul-pdp-renk-768  
Gerekçe: Carbonator 3 Renk Copper→Matte Black 375/1440’ta galeri siyah makineye döndü. 768’de chip tık + scrollTo sonrası legend/galeri Copper kaldı (iki capture). `product-info-main` missingStates.  
Örnekler: https://dev-eylul.ikas.shop/aarke-carbonator-3  
Öneri: leftover — 768 variant  
Karar: onay bekliyor

---

ADAY: eylul-pdp-no-qty  
Gerekçe: PDP `section.pdp` adet stepper yok. Adet yalnız drawer/sayfa (`Adedi artır`).  
Örnekler: https://dev-eylul.ikas.shop/aarke-carbonator-3  
Öneri: leftover — qty buy-box dışı  
Karar: onay bekliyor

---

ADAY: eylul-related-ptabs  
Gerekçe: `section.ptabs` başlık “Önerilen ürünler” + tek kart (Carbonator Pro). Sekme UI yok. `product-showcase-related` yazıldı.  
Örnekler: https://dev-eylul.ikas.shop/aarke-carbonator-3  
Öneri: leftover — class ptabs / tek grup  
Karar: onay bekliyor

---

ADAY: eylul-search-q-ignored  
Gerekçe: `/search?q=vazo` ve çıplak `/search` 13 ürün (katalog). Gerçek sorgu `?s=carbonator` (3 sonuç). Observation `search?s=carbonator`.  
Örnekler: https://dev-eylul.ikas.shop/search?q=vazo  
Öneri: leftover — query param  
Karar: onay bekliyor

---

ADAY: eylul-no-collection-banner  
Gerekçe: PLP `section.pl` başlık+chip+grid tek kabuk. Ayrı `collection-banner` / `section.pbanner` yok.  
Örnekler: https://dev-eylul.ikas.shop/mutfak  
Öneri: leftover — banner yok  
Karar: onay bekliyor

---

ADAY: eylul-pld-filter-drawer  
Gerekçe: `section.pld-sec` filtre/sort overlay (boş kutu, açılmadı). PLP/search içinde. Ayrı observation yok.  
Örnekler: https://dev-eylul.ikas.shop/mutfak  
Öneri: leftover — filter overlay  
Karar: onay bekliyor

---

ADAY: eylul-about-media-only  
Gerekçe: `/pages/hakkimizda` dördüncü `section.abt.abt--media-only` — metin/başlık yok, yalnız medya. `editorial-image-with-text` zorlanmadı.  
Örnekler: https://dev-eylul.ikas.shop/pages/hakkimizda  
Öneri: leftover — media-only  
Karar: onay bekliyor

---

ADAY: eylul-about-duplicate-copy  
Gerekçe: İlk iki split (`abt--split` + `abt--image-left`) aynı H2/gövde “Sıradanı Yeniden Tanımlamak”. İki observation; kopya sapması.  
Örnekler: https://dev-eylul.ikas.shop/pages/hakkimizda  
Öneri: leftover — demo kopya  
Karar: onay bekliyor

---

ADAY: eylul-gunluk-hmc  
Gerekçe: Nav “Günlük” `.hmc` / `.hmc-toggle` (blog). Mağaza mega `.hmi-panel` yazıldı. İkinci mega tipi yoklandı değil.  
Örnekler: https://dev-eylul.ikas.shop/  
Öneri: leftover — aynı schemaId  
Karar: onay bekliyor

---

ADAY: eylul-cart-threshold-split  
Gerekçe: Drawer qty1 Carbonator ₺10,500 → “Ücretsiz kargoya ₺7,500 kaldı”. Aynı satır `/cart` sayfasında “Ücretsiz kargoyu kazandın”. Threshold metni drawer≠sayfa.  
Örnekler: https://dev-eylul.ikas.shop/cart  
Öneri: leftover — kargo eşiği  
Karar: onay bekliyor

---

ADAY: eylul-checkout-odeme  
Gerekçe: Drawer/sayfa `Ödemeye geç`. Checkout envanter dışı; tıklanmadı.  
Örnekler: https://dev-eylul.ikas.shop/cart  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: eylul-gizlilik-404  
Gerekçe: Footer “Gizlilik Politikamızı” / `/pages/gizlilik-politikasi` → 404. `/pages/iade-politikasi` ve `/pages/gonderim-politikasi` `section.txtp` (iade yazıldı).  
Örnekler: https://dev-eylul.ikas.shop/pages/gizlilik-politikasi  
Öneri: leftover — 404 policy  
Karar: onay bekliyor

---

ADAY: eylul-gonderim-duplicate  
Gerekçe: `/pages/gonderim-politikasi` aynı `section.txtp` iskelet (hafta içi 16:00 kargo). İade yazıldı; gönderim tekrar edilmedi.  
Örnekler: https://dev-eylul.ikas.shop/pages/gonderim-politikasi  
Öneri: leftover — duplicate page  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/pages/sss`  
`/pages/faq`  
`/pages/about`  
`/pages/contact`  
`/pages/iade-kosullari`  
`/pages/gizlilik-politikasi`  
`/about` · `/contact` · `/faq`  
`/404-qante-does-not-exist`

## Sitemap / nav’de duran, walk dışı

Koleksiyon (aynı `section.pl`): `/ev---yasam` · `/soda-makinesi` · `/kahve-makinesi` · `/su-isiticisi` · `/su-aritma` · `/surahi` · `/bardak` · `/sise` · `/kahve-ekipmani`  
Ürün (aynı `section.pdp`): diğer `/aarke-*` handle’lar

## Bilinçli atlananlar

- `/account` · `/account/login` · `/account/orders` — auth  
- Checkout / Ödemeye geç  
- Newsletter / contact form submit (PII)  
- Kupon  
- Hesabım ikonu  
- Favori yok (görülmedi)
