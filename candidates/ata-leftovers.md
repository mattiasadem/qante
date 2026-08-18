# Ata leftovers / adaylar

*Kaynak (resmi walk URL):* https://g5jhl-themes.myikas.com/  
*Theme Store:* https://themes.ikas.com/themes/1863f1b9-8002-4446-8c3c-1436db3d47bc  
*Tema (görülen, uydurulmadı):* Ata · ikascom · ikas Studio storefront  
`window.Shopify` **yok**  
`window.__IKAS_DATA__` · `storefrontThemeId` `90e6a44f-b183-44d4-b141-55b49c09e75d` · `storefrontId` `f726bf61-68c8-4758-afb3-206ea66e32e7` · `storefrontType` `STOREFRONT` · config `domain` `themes.myikas.com` · walk host `g5jhl-themes.myikas.com` · `merchantName` `themes` · locale `tr` · `TRY`  
`window.IkasEvents` var  
`theme_store_id` **1863f1b9-8002-4446-8c3c-1436db3d47bc** (Theme Store UUID; storefront’ta Shopify `theme_store_id` yok — uydurulmadı)  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: ata-no-shopify-theme-json  
Gerekçe: `window.Shopify` yok. Kimlik `__IKAS_DATA__` + `IkasEvents` + `*.myikas.com` / `api.myikas.com`. Theme Store id listing UUID.  
Örnekler: https://g5jhl-themes.myikas.com/  
Öneri: leftover — platform parmak izi  
Karar: onay bekliyor

---

ADAY: ata-about-contact-faq-missing  
Gerekçe: Footer Hakkımızda / Blog / Mağaza `href=#`. `/hakkimizda` `/about` `/iletisim` `/contact` `/sss` `/faq` `/pages/*` = `NOT_FOUND` (aynı 404). Contact form yok. Footer “BİZE ULAŞIN” yalnız bülten (submit yok).  
Örnekler: https://g5jhl-themes.myikas.com/about  
Öneri: leftover — sayfa yok  
Karar: onay bekliyor

---

ADAY: ata-inner-hero-strip  
Gerekçe: PLP/PDP/cart’ta `section.hero-banner-slider` h≈88, İngilizce “SAVE NOW ON / Up to 30% off … SAVE30”. Home’da aynı class tam hero. Ayrı observation yazılmadı.  
Örnekler: https://g5jhl-themes.myikas.com/kadin  
Öneri: leftover — iç sayfa şerit  
Karar: onay bekliyor

---

ADAY: ata-duplicate-home-blocks  
Gerekçe: İkinci `product-carousel` (yine YENİLERİ KEŞFET) ve ikinci `shop-by-collection` (yine İkili Set ×3) home’da kopya. İlk instance yazıldı.  
Örnekler: https://g5jhl-themes.myikas.com/  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: ata-quick-shop-modal  
Gerekçe: Kart `button.product-card-quickshop` “Hızlı Satın Al”. Theme Store metni “hızlı satın alma modalı”. Interact listesinde yok; tıklanmadı. `global-quick-view` şema var; kare yok.  
Örnekler: home product-carousel  
Öneri: leftover — interact dışı  
Karar: onay bekliyor

---

ADAY: ata-pdp-pdesc-and-tabs  
Gerekçe: `section.pdesc` “Detaylar” ince kutu. Details / Contact us / Delivery info `section.pd` içinde accordion + `#` link. Ayrı `product-info-tabs` yazılmadı.  
Örnekler: https://g5jhl-themes.myikas.com/as-98-agatea-kadin-el-cantasi  
Öneri: leftover — buy box içi  
Karar: onay bekliyor

---

ADAY: ata-pdp-slug-mismatch  
Gerekçe: Handle `/as-98-agatea-kadin-el-cantasi` (çanta) ama ürün adı **Metalic Lipstick**, marka Benetton. Demo katalog karışık.  
Örnekler: aynı PDP  
Öneri: leftover — demo veri  
Karar: onay bekliyor

---

ADAY: ata-bundle-pdp  
Gerekçe: `/bundle-product` PRODUCT. Ek: product-carousel, `pr`, shop-by-collection, `nis`. Walk tek PDP (lipstick).  
Örnekler: https://g5jhl-themes.myikas.com/bundle-product  
Öneri: leftover — ikinci PDP  
Karar: onay bekliyor

---

ADAY: ata-buy-it-now  
Gerekçe: PDP `button.pd-buy-now` “Buy it now”. Checkout envanter dışı; tıklanmadı.  
Örnekler: lipstick PDP  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: ata-search-unfiltered  
Gerekçe: `/search?q=ruj` h1 “Shop”, ~6146 products — sorgu süzülmemiş göründü. Overlay popüler chip ayrı. `/arama` 404.  
Örnekler: https://g5jhl-themes.myikas.com/search?q=ruj  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: ata-blog-banner  
Gerekçe: `/blog` sibling `section.blog-banner` h≈431, metin boş (görsel?). `blog-listing` yazıldı.  
Örnekler: https://g5jhl-themes.myikas.com/blog  
Öneri: leftover — boş/görsel bant  
Karar: onay bekliyor

---

ADAY: ata-blog-category  
Gerekçe: `/blog/blog-kategorisi` listingde link. Walk tek index + bir yazı (`/blog/hikaye`).  
Örnekler: https://g5jhl-themes.myikas.com/blog/blog-kategorisi  
Öneri: leftover — kategori  
Karar: onay bekliyor

---

ADAY: ata-yazlik-terlik-plp  
Gerekçe: `/yazlik-terlik` aynı CATEGORY + `category-list` (carousel view-all). `/kadin` yazıldı.  
Örnekler: https://g5jhl-themes.myikas.com/yazlik-terlik  
Öneri: leftover — duplicate PLP  
Karar: onay bekliyor

---

ADAY: ata-no-mega  
Gerekçe: `navigationItems.subLinks` []. 1440 düz link. `navigation-header-mega` yazıldı; delta mega yok.  
Örnekler: home `nav.navbar`  
Öneri: leftover — mega yok  
Karar: onay bekliyor

---

ADAY: ata-account-login  
Gerekçe: `button.nav-icon-btn[aria-label='Giriş Yap']` + mobil “Giriş Yap / Hesap Oluştur”. `/giris` `/hesabim` 404. Auth dur.  
Örnekler: header  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: ata-cart-page-unit-price-zero  
Gerekçe: `/cart` dolu karede satır birim fiyat ₺0.00; satır toplam qty1 ₺20.999 / qty2 ₺41.998. Demo bağ.  
Örnekler: https://g5jhl-themes.myikas.com/cart  
Öneri: leftover — demo fiyat  
Karar: onay bekliyor

---

ADAY: ata-cart-promo  
Gerekçe: Drawer “İndirim Kodu Uygula”. Uygulanmadı.  
Örnekler: cart drawer  
Öneri: leftover — kupon  
Karar: onay bekliyor

---

## 404 URL’ler (aynı `section.not-found`)

`/about`  
`/hakkimizda`  
`/contact`  
`/iletisim`  
`/faq`  
`/sss`  
`/pages/about`  
`/pages/contact`  
`/pages/faq`  
`/sepet`  
`/giris`  
`/hesabim`  
`/arama`  
`/blogs`  
`/does-not-exist-qante-ata`

---

## Bilinçli atlananlar

- `/account` / Giriş Yap — auth  
- Checkout / Buy it now / Ödemeye Geç  
- Newsletter / footer Katıl submit (PII)  
- Quick shop modal  
- İkinci home carousel + ikinci shop-by-collection  
- Bundle PDP ekstraları  
- `/yazlik-terlik` (aynı PLP tipi)  
- Blog kategori sayfası  
