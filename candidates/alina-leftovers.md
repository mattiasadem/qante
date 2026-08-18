# Alina leftovers / adaylar

*Store:* https://dev-alina.ikas.shop  
*Theme Store:* https://themes.ikas.com/themes/7f5c4b83-e6fa-4cdd-a35b-72eb1911a8e3  
*Tema (görülen, uydurulmadı):* **Alina** · developer **ikascom** · Theme Store UUID **`7f5c4b83-e6fa-4cdd-a35b-72eb1911a8e3`**  
*Platform:* **ikas** · `Shopify.theme` **yok** · `__IKAS_DATA__` · `x-powered-by: ikas`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: alina-contact-map  
Gerekçe: `/pages/iletisim` form + info kartlarının altında gömülü harita (ikas pin, Ankara). `lead-capture-form` yazıldı; harita ayrı şema değil.  
Örnekler: https://dev-alina.ikas.shop/pages/iletisim  
Öneri: leftover — map widget  
Karar: onay bekliyor

---

ADAY: alina-no-about  
Gerekçe: Footer “Hakkımızda” accordion linki `/` (home). `/pages/hakkimizda` ve `/pages/about` → 404 `section.nf` (aynı not-found karesi). Walk about/contact’tan contact yazıldı; about yok.  
Örnekler: https://dev-alina.ikas.shop/ · https://dev-alina.ikas.shop/pages/hakkimizda  
Öneri: leftover — about şablonu yok  
Karar: onay bekliyor

---

ADAY: alina-cookiebar  
Gerekçe: Home’da `div.cookiebar` — “Reddet / Tümünü Kabul Et”. Header sibling; section değil. Capture öncesi tıklandı (PII yok).  
Örnekler: https://dev-alina.ikas.shop/  
Öneri: leftover — chrome overlay  
Karar: onay bekliyor

---

ADAY: alina-pdp-bundle-offers  
Gerekçe: PDP `section.pd` içinde “Birlikte Al / Size Özel Teklif” checkbox satırları. `commerce-tools-products-bundle` yakın ama buy-box içi widget; ayrı observation yazılmadı.  
Örnekler: https://dev-alina.ikas.shop/daily-backpack  
Öneri: leftover — bundle  
Karar: onay bekliyor

---

ADAY: alina-buy-now  
Gerekçe: PDP `Hemen Satın Al` + drawer/sayfa `Ödemeye Geç` / `ÖDEME YAP`. Checkout envanter dışı; tıklanmadı.  
Örnekler: https://dev-alina.ikas.shop/daily-backpack  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: alina-pd-reviews-empty  
Gerekçe: PDP `section.pd-reviews` “Müşteri Yorumları / Henüz yorum yok. İlk yorumu sen yaz!”. Yaz formu login ister. `testimonial-quote-carousel` alıntı şeridi değil. Observation yazılmadı.  
Örnekler: https://dev-alina.ikas.shop/daily-backpack  
Öneri: leftover — boş reviews  
Karar: onay bekliyor

---

ADAY: alina-search-q-ignored  
Gerekçe: `/search?q=backpack` input boş, 31 ürün (tüm katalog). Gerçek sorgu `?s=backpack` (2 sonuç). Observation `search?s=backpack`.  
Örnekler: https://dev-alina.ikas.shop/search?q=backpack  
Öneri: leftover — query param  
Karar: onay bekliyor

---

ADAY: alina-guest-order-track  
Gerekçe: `/pages/siparis-takip` `section.guest-track` — e-posta + sipariş no. PII; form doldurulmadı, observation yok.  
Örnekler: https://dev-alina.ikas.shop/pages/siparis-takip  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: alina-iade-title-mismatch  
Gerekçe: `/pages/iade-kosullari` H1 “Gizlilik Politikası”, gövde 15 gün iade. `page-content-main` yazıldı; başlık/URL sapması.  
Örnekler: https://dev-alina.ikas.shop/pages/iade-kosullari  
Öneri: leftover — copy  
Karar: onay bekliyor

---

ADAY: alina-faq-placeholder  
Gerekçe: PDP + `/pages/sss` accordion etiketi “Soru başlığı” (lorem). `faq-collapsible-tabs` yazıldı.  
Örnekler: https://dev-alina.ikas.shop/pages/sss  
Öneri: leftover — demo içerik  
Karar: onay bekliyor

---

ADAY: alina-related-missing  
Gerekçe: PDP `__IKAS_DATA__` productList alanı var; ayrı related `section` DOM’da yok / boş. `product-showcase-related` yazılmadı.  
Örnekler: https://dev-alina.ikas.shop/daily-backpack  
Öneri: leftover — boş/yok  
Karar: onay bekliyor

---

ADAY: alina-mobnav-chevron-navigates  
Gerekçe: 375/768 `.mobnav` Çantalar satırı `<a href="/bags">` + `.navmega__chevron`. Chevron tık `/bags` PLP; drawer kapanır. Ayrı boş ok yok. `changed` yazılmadı.  
Örnekler: https://dev-alina.ikas.shop/  
Öneri: leftover — yazılı link  
Karar: onay bekliyor

---

ADAY: alina-mobnav-chevron-navigates  
Gerekçe: 375/768 `.mobnav` Çantalar satırı `<a href="/bags">` + `.navmega__chevron`. Chevron tık `/bags` PLP; drawer kapanır. Ayrı boş ok yok. `changed` yazılmadı.  
Örnekler: https://dev-alina.ikas.shop/  
Öneri: leftover — yazılı link  
Karar: onay bekliyor

---

ADAY: alina-mega-variants  
Gerekçe: Dört mega tipi: `--strip` (Öne Çıkanlar), `--tabs` (Çantalar), `--grid` (Aksesuarlar), `--links` (Servis). Tek observation Çantalar hover.  
Örnekler: https://dev-alina.ikas.shop/  
Öneri: leftover — aynı schemaId  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/pages/hakkimizda`  
`/pages/about`  
`/about` · `/about-us` · `/contact` · `/faq` · `/sepet` · `/arama`  
`/404-qante-does-not-exist`

## Sitemap’te duran, walk dışı

Koleksiyon: `/backpacks` · `/handbags` · `/accessories` · `/organizers` · `/clothing` · `/other` · `/shorts` · `/duffel-bags` · `/shoulder-bags` · `/laptop-sleeves` · `/hats---caps` · `/tum-urunler` (aynı PLP tipi)  
Blog kategori: `/blog/ipuclari` · `/blog/kamp-ve-outdoor` · `/blog/rehberler`  
Diğer yazılar — aynı `blog-post-main`

## Bilinçli atlananlar

- `/account` · `/account/login` — auth  
- Checkout / Hemen Satın Al / ÖDEME YAP / Ödemeye Geç  
- Newsletter / contact / order-track form submit (PII)  
- Cookie kabul (Reddet tıklandı, tercih saklanmadı iddia edilmez)  
- Kupon alanı  
- Favori / hesabım ikonu  
