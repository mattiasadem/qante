# Kerem leftovers / adaylar

*Kaynak (resmi walk URL):* https://dev-kerem.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/5bfeca45-4f60-44d7-aef8-c280be7db7c2  
*Theme Store title (read):* **Kerem | ikas Theme Store** · ikascom · TRY 15,999.00  
*Tema (görülen, uydurulmadı):* Kerem · ikas Studio storefront  
`window.Shopify` **yok** · `Shopify.theme` **yok** · `x-powered-by: ikas`  
`window.__IKAS_DATA__` · `storefrontThemeId` `e0e11d6b-d4ef-46c6-bdab-5912cdd1cfc4` · `storefrontId` `f0022564-b0a6-4568-b4c0-268715f1cded` · `storefrontRoutingId` `909356fb-0dd4-49b9-9d3b-8d3b8cadeb25` · `storefrontType` `STOREFRONT` · `salesChannelId` `fb519b2f-b246-4207-abf8-9c6e055a19d0` · `domain` `dev-kerem.ikas.shop` · `apiUrl` `https://api.myikas.com/api/sf/graphql` · `merchantId` `70d6ab17-775e-4c3b-9840-7aeb37587d3f` · `merchantName`/`storeName` `dev-kerem` · locale `tr` · region `TR` · `TRY`  
`window.IkasEvents` var  
`theme_store_id` **5bfeca45-4f60-44d7-aef8-c280be7db7c2** (Theme Store UUID; storefront’ta Shopify `theme_store_id` yok — uydurulmadı)  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: kerem-no-shopify-theme-json  
Gerekçe: `window.Shopify` ve `Shopify.theme` yok. Kimlik `__IKAS_DATA__` + `IkasEvents` + `x-powered-by: ikas` + `api.myikas.com`. Theme Store id listing UUID.  
Örnekler: https://dev-kerem.ikas.shop/  
Öneri: leftover — platform parmak izi  
Karar: onay bekliyor

---

ADAY: kerem-about-contact-faq-pages-missing  
Gerekçe: Footer’da Hakkımızda / İletişim / SSS yok. `/about` `/hakkimizda` `/pages/about` `/pages/hakkimizda` `/contact` `/iletisim` `/pages/contact` `/pages/iletisim` `/faq` `/sss` `/pages/faq` `/pages/sss` = aynı `NOT_FOUND`. FAQ yalnız home `section.content-acc`. Contact form yok.  
Örnekler: https://dev-kerem.ikas.shop/pages/iletisim  
Öneri: leftover — sayfa yok  
Karar: onay bekliyor

---

ADAY: kerem-search-q-ignored  
Gerekçe: `/search?s=canta` 12 sonuç. `/search?s=bag` “BAG” 0. `/search?q=bag` 87 ürün — `q` yok sayıldı, süzülmemiş katalog.  
Örnekler: https://dev-kerem.ikas.shop/search?q=bag  
Öneri: leftover — `?q=`  
Karar: onay bekliyor

---

ADAY: kerem-cookie-bar  
Gerekçe: `.hcookie.is-open` ÇEREZLER / KABUL ET / REDDET. Capture dismiss overlay. Ayrı şema yok. Çerez Politikası `/cerez-politikasi` 404.  
Örnekler: home  
Öneri: leftover — overlay  
Karar: onay bekliyor

---

ADAY: kerem-pdp-reviews-empty  
Gerekçe: PDP `section.rv` “0 YORUM / Henüz yorum yok”. Observation yazılmadı.  
Örnekler: https://dev-kerem.ikas.shop/medium-shoulder-bag  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: kerem-pdp-finder-repeat  
Gerekçe: `section.pf` home + PDP aynı “Sana uygun çantayı bulalım”. Home yazıldı; PDP tekrar leftover. BAŞLAYALIM tıklanmadı.  
Örnekler: PDP + home  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: kerem-hemen-al-checkout  
Gerekçe: PDP `HEMEN AL` + drawer/sayfa `ÖDEMEYE GEÇ`. Checkout envanter dışı.  
Örnekler: PDP buy box  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: kerem-cart-promo  
Gerekçe: Drawer `UYGULA` indirim kodu. Uygulanmadı.  
Örnekler: cart drawer  
Öneri: leftover — kupon  
Karar: onay bekliyor

---

ADAY: kerem-order-tracking  
Gerekçe: `/pages/order-tracking` CUSTOM “Siparişini takip et”. Walk dışı; PII.  
Örnekler: footer Sipariş Takibi  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: kerem-blog-empty  
Gerekçe: `/blog` BLOG_INDEX “Henüz yazı yok.” Yazı URL yok. `/blogs` 404.  
Örnekler: https://dev-kerem.ikas.shop/blog  
Öneri: leftover — boş journal  
Karar: onay bekliyor

---

ADAY: kerem-plp-repeats  
Gerekçe: `/clothing` `/shoulder-bags` `/hats---caps` … aynı CATEGORY + `section.col`. Yazılan: `/bags` (11).  
Örnekler: https://dev-kerem.ikas.shop/clothing  
Öneri: leftover — aynı tip  
Karar: onay bekliyor

---

ADAY: kerem-lookbook-hotspot-unclicked  
Gerekçe: `section.shop-look` “Noktalara dokun”. Interact listesinde yok; hotspot tıklanmadı.  
Örnekler: home  
Öneri: leftover — interact dışı  
Karar: onay bekliyor

---

ADAY: kerem-quiz-unclicked  
Gerekçe: `section.pf` BAŞLAYALIM. Adımlar yoklandı değil.  
Örnekler: home  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: kerem-catalog-mix  
Gerekçe: Home “yeni gelenler” kozmetik (Dermé Lab / Lumira / Botanica); nav/PLP çanta-şort (Nuvora). Demo katalog karışık.  
Örnekler: home product-slider  
Öneri: leftover — demo veri  
Karar: onay bekliyor

---

ADAY: kerem-social-href-typo  
Gerekçe: Footer sosyal `www.instagmram.com/ikas` (protokol yok + typo). Tıklanmadı.  
Örnekler: footer  
Öneri: leftover — demo link  
Karar: onay bekliyor

---

ADAY: kerem-account-login  
Gerekçe: `a.vheader__tool--account` HESABIM `/account` + footer Kayıt Ol / Giriş Yap. Auth dur.  
Örnekler: header  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: kerem-404-page-type  
Gerekçe: taxonomy `pageTypes` içinde 404 yok. `page-content-main` + delta.  
Örnekler: https://dev-kerem.ikas.shop/does-not-exist-qante-kerem  
Öneri: leftover — tax  
Karar: onay bekliyor

---

## 404 URL’ler (aynı `section.not-found`)

`/about`  
`/hakkimizda`  
`/pages/about`  
`/pages/hakkimizda`  
`/contact`  
`/iletisim`  
`/pages/contact`  
`/pages/iletisim`  
`/faq`  
`/sss`  
`/pages/faq`  
`/pages/sss`  
`/sepet`  
`/blogs`  
`/pages/blog`  
`/cerez-politikasi`  
`/does-not-exist-qante-kerem`

---

## Bilinçli atlananlar

- `/account` / Hesabım / Kayıt Ol / Giriş Yap — auth  
- Checkout / Hemen Al / Ödemeye Geç  
- Newsletter KATIL submit (PII)  
- Cookie KABUL ET / REDDET  
- Quiz BAŞLAYALIM adımları  
- Lookbook hotspot tık  
- Before-after drag  
- `/pages/order-tracking`  
- Diğer PLP şablonları (`/clothing` …)  
- PDP `section.rv` boş yorum  
