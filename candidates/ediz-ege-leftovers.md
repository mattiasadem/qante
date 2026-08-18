# Ediz Ege leftovers / adaylar

*Store:* https://dev-edizege.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/97a7859b-38f3-40bd-8b9b-4020d7d2854b  
*Tema (görülen, uydurulmadı):* **Ediz Ege** · developer **ikascom** · Theme Store UUID **`97a7859b-38f3-40bd-8b9b-4020d7d2854b`**  
*Platform:* **ikas** · `Shopify.theme` **yok** · `__IKAS_DATA__` · `x-powered-by: ikas`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: ediz-ege-no-about  
Gerekçe: `/pages/hakkimizda` · `/pages/about` · `/about` → 404 `section.ee-nf`. Footer’da Hakkımızda yok. Hikâye `section.ee-brand` home’da (observation yazıldı). Theme Store metni “hikaye anlatımı” diyor; ayrı about şablonu yok.  
Örnekler: https://dev-edizege.ikas.shop/pages/hakkimizda  
Öneri: leftover — about şablonu yok  
Karar: onay bekliyor

---

ADAY: ediz-ege-no-faq-page  
Gerekçe: `/pages/sss` · `/pages/faq` · `/faq` → 404. PDP accordion (Ürün Detayı / Kargo & İade) `faq-collapsible-tabs` yazıldı. Storefront FAQ sayfası yok.  
Örnekler: https://dev-edizege.ikas.shop/pages/sss  
Öneri: leftover — FAQ sayfası yok  
Karar: onay bekliyor

---

ADAY: ediz-ege-blog-404  
Gerekçe: `pages.xml` `/blog` listeler; canlı `/blog` → 404 aynı `ee-nf`. Footer “Blog” `/blog`. Lookbook CTA “Rehberi Oku” hedefi doğrulanmadı.  
Örnekler: https://dev-edizege.ikas.shop/blog  
Öneri: leftover — sitemap/live sapması  
Karar: onay bekliyor

---

ADAY: ediz-ege-search-q-ignored  
Gerekçe: `/search?q=serum` H1 “Tüm Ürünlerimiz” (filtresiz katalog). Gerçek sorgu `?s=serum` (3 sonuç). Observation `search?s=serum`. Nav Mağaza → `/search`.  
Örnekler: https://dev-edizege.ikas.shop/search?q=serum  
Öneri: leftover — query param  
Karar: onay bekliyor

---

ADAY: ediz-ege-hero-hikaye-href  
Gerekçe: Hero ikincil CTA “Hikâyemiz” `<a>` href yok. Tıklanınca sayfa değişmedi (yoklandı).  
Örnekler: https://dev-edizege.ikas.shop/  
Öneri: leftover — ölü CTA  
Karar: onay bekliyor

---

ADAY: ediz-ege-guest-order-track  
Gerekçe: Footer “Sipariş Takibi” `/pages/siparis-takibi` `pageType CUSTOM` H1 “Siparişini takip et”. E-posta + sipariş no beklenir. PII; form doldurulmadı, observation yok.  
Örnekler: https://dev-edizege.ikas.shop/pages/siparis-takibi  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: ediz-ege-buy-now-coupon  
Gerekçe: Drawer/sayfa `Ödemeye Geç` / `ÖDEMEYE GEÇ` + `İNDİRİM KODU` / Uygula. Checkout ve kupon envanter dışı; tıklanmadı.  
Örnekler: https://dev-edizege.ikas.shop/cart  
Öneri: leftover — checkout / kupon  
Karar: onay bekliyor

---

ADAY: ediz-ege-card-quick-add  
Gerekçe: PLP/home kart `.ee-card__quick` / hover ikinci görsel. Section değil; kart chrome. ATC home grid’den denendi değil.  
Örnekler: https://dev-edizege.ikas.shop/  
Öneri: leftover — kart feature  
Karar: onay bekliyor

---

ADAY: ediz-ege-plp-filter-drawer  
Gerekçe: PLP `.ee-fdrawer` + sidebar filtre (Koku/Boyut/Renk) + sort. `product-showcase-grid-plp` içinde; ayrı şema yok.  
Örnekler: https://dev-edizege.ikas.shop/yuz-bakimi  
Öneri: leftover — PLP chrome  
Karar: onay bekliyor

---

ADAY: ediz-ege-no-collection-banner  
Gerekçe: CATEGORY sayfada ayrı banner section yok; başlık `section.ee-plp` içinde. `collection-banner` yazılmadı.  
Örnekler: https://dev-edizege.ikas.shop/yuz-bakimi  
Öneri: leftover — banner yok  
Karar: onay bekliyor

---

ADAY: ediz-ege-slider-repeat  
Gerekçe: `section.ee-slider` “Bunlarla Tamamla” home + cart + bazı PDP. Tek observation home `.2`. Diğerleri tekrar.  
Örnekler: https://dev-edizege.ikas.shop/cart  
Öneri: leftover — aynı tip  
Karar: onay bekliyor

---

ADAY: ediz-ege-tablet-no-hamburger  
Gerekçe: 768 `button.ee-nav__hamburger` `display:none`; Mağaza/Bakım/Koleksiyonlar masaüstü gibi. Drawer yalnız 375. User walk 375/768 istedi — 768 yoklandı, hamburger yok.  
Örnekler: https://dev-edizege.ikas.shop/  
Öneri: leftover — breakpoint  
Karar: onay bekliyor

---

ADAY: ediz-ege-dropdown-not-mega  
Gerekçe: 1440 Bakım/Koleksiyonlar `.ee-nav__dropdown` düz link listesi (220×154), görsel/tab/promo yok. `navigation-header-mega` yazıldı; delta dropdown.  
Örnekler: https://dev-edizege.ikas.shop/  
Öneri: leftover — mega varyantı zayıf  
Karar: onay bekliyor

---

ADAY: ediz-ege-policy-missing  
Gerekçe: `/pages/iade-kosullari` · `/pages/gizlilik` → 404. Footer’da policy linki yok.  
Örnekler: https://dev-edizege.ikas.shop/pages/gizlilik  
Öneri: leftover — policy yok  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/pages/hakkimizda` · `/pages/about` · `/about`  
`/pages/sss` · `/pages/faq` · `/faq`  
`/blog` (sitemap’te var)  
`/pages/iade-kosullari` · `/pages/gizlilik`  
`/sepet` · `/contact`  
`/404-qante-does-not-exist`

## Sitemap’te duran, walk dışı

Koleksiyon (aynı PLP tipi): `/vucut-bakimi` · `/sac-bakimi` · `/sabunlar` · `/makyaj` · `/hediye-setleri` · `/erkek-bakim` · `/aromaterapi` · `/edizege`  
Ürün (aynı PDP tipi): `/cay-agaci-esansiyel-yagi` · `/argan-sac-bakim-yagi` · `/gul-suyu-tonik` · `/zeytinyagli-kekik-sabunu` · `/komur-kil-arindirici-maske` · `/rahatlatici-bakim-seti` · `/lavanta-el-vucut-kremi` · `/sakal-bakim-yagi` · `/adacayi-zeytin-yuz-serumu`

## Bilinçli atlananlar

- `/account` · `/account/login` · `/account/register` · `/account/orders` · `/account/favorite-products` — auth  
- Checkout / Ödemeye Geç / ÖDEMEYE GEÇ  
- Newsletter / contact / order-track form submit (PII)  
- Kupon Uygula  
- Favoriler ikonu  
- Cookie bar yoktu (`.cookiebar` DOM’da yok)
