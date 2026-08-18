# Ali leftovers / adaylar

*Store:* https://dev-alitheme.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/4857cf85-064f-42ba-afc6-9aba4d5b8a43  
*Tema (görülen, uydurulmadı):* **Ali** · developer **ikascom** · Theme Store UUID **`4857cf85-064f-42ba-afc6-9aba4d5b8a43`**  
*Theme Store title:* **Ali | ikas Theme Store**  
*Platform:* **ikas** · `Shopify.theme` **yok** · `__IKAS_DATA__` · `x-powered-by: ikas`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

**Fingerprint (okundu):** `storefrontThemeId` `74f53e77-93a4-4e2f-b000-749142d53f82` · `storefrontId` `d61280e7-8d90-4733-a630-98bcd92d60ba` · `merchantId` `2a064ff8-b678-4f35-b163-20e70e5eec4d` · `storeName` `dev-alitheme` · locale `tr` · `TRY` · `logoText` ALİ

---

ADAY: ali-no-mega  
Gerekçe: 1440’te yatay mega yok. `button.ali-header__icon-btn[aria-label=Menü]` hamburger **375/768/1440**. Drawer `.ali-nav`. `navigation-header-mega` kapalı kare + leftover.  
Örnekler: https://dev-alitheme.ikas.shop/  
Öneri: leftover — mega yok  
Karar: onay bekliyor

---

ADAY: ali-announcement-in-header  
Gerekçe: Ayrı `promo-announcement-bar` section yok. “250 TL üzeri siparişlerde ücretsiz kargo” `section.ali-header` içinde `.ali-ann`.  
Örnekler: home `.ali-ann`  
Öneri: leftover — header chrome  
Karar: onay bekliyor

---

ADAY: ali-no-about-page  
Gerekçe: `/pages/hakkimizda` · `/pages/about` · `/about` → 404 `section.ali-nf`. Hikâye home `section.ali-srt` (`editorial-rich-text`). Footer “hakkında” kolon metni, link değil.  
Örnekler: https://dev-alitheme.ikas.shop/pages/hakkimizda  
Öneri: leftover — about şablonu yok  
Karar: onay bekliyor

---

ADAY: ali-no-cookiebar  
Gerekçe: Walk’ta `.cookiebar` / cookie overlay yok (null). `prepareClick` yazılmadı.  
Örnekler: https://dev-alitheme.ikas.shop/  
Öneri: leftover — overlay yok  
Karar: onay bekliyor

---

ADAY: ali-search-q-ignored  
Gerekçe: `/search?q=kahve` ve `/search?q=ali` input boş, “Ürün ara”. Gerçek sorgu `?s=`. `/search?s=ali` 0 ürün; `?s=kahve` 1 ürün.  
Örnekler: https://dev-alitheme.ikas.shop/search?q=kahve  
Öneri: leftover — query param  
Karar: onay bekliyor

---

ADAY: ali-kahve-atc-empty  
Gerekçe: `/kahve-paketi` `button.ali-pd__atc` tık → drawer `.ali-cart` **boş** kaldı (bundle/zorunlu seçim?). Doldurma `/puffer-laptop-sleeve-14-` ile yapıldı.  
Örnekler: https://dev-alitheme.ikas.shop/kahve-paketi  
Öneri: leftover — ATC  
Karar: onay bekliyor

---

ADAY: ali-pdp-bundle-xsell  
Gerekçe: PDP `section.ali-pd` içinde Paket İçeriği / Birlikte Al / Özel Teklif + ikinci COLOR swatch grubu. `commerce-tools-products-bundle` yakın; buy-box içi widget, ayrı observation yok.  
Örnekler: https://dev-alitheme.ikas.shop/kahve-paketi · sleeve PDP  
Öneri: leftover — bundle  
Karar: onay bekliyor

---

ADAY: ali-buy-now-checkout  
Gerekçe: Drawer `ÖDEME YAP` · sayfa `ÖDEMEYE GEÇ` · sticky `ali-satc__btn`. Checkout envanter dışı; tıklanmadı.  
Örnekler: `.ali-cart__checkout` · `section.ali-cp`  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: ali-pd-reviews  
Gerekçe: PDP `section.ali-pr` “Değerlendirmeler / Değerlendirme Yaz” + form. Yaz PII. `testimonial-quote-carousel` değil. Observation yok.  
Örnekler: https://dev-alitheme.ikas.shop/kahve-paketi  
Öneri: leftover — reviews / PII  
Karar: onay bekliyor

---

ADAY: ali-pd-instagram  
Gerekçe: PDP `section.ali-ig` TOPLULUK / @ali / #ikas. `media-shop-the-feed` yakın; shop-the-look tıklanmadı, observation yok.  
Örnekler: Kahve Paketi PDP  
Öneri: leftover — UGC  
Karar: onay bekliyor

---

ADAY: ali-plp-no-banner  
Gerekçe: `/tum-urunler` `section.ali-cl` başlık+grid; `collection-banner` / `ali-pbanner` yok.  
Örnekler: https://dev-alitheme.ikas.shop/tum-urunler  
Öneri: leftover — banner yok  
Karar: onay bekliyor

---

ADAY: ali-plp-filter-drawer  
Gerekçe: PLP `aside.ali-fd__panel` Filtrele. Walk’ta açılmadı; observation yok.  
Örnekler: `/tum-urunler`  
Öneri: leftover — filtre  
Karar: onay bekliyor

---

ADAY: ali-hm-no-href  
Gerekçe: Home `section.ali-hm` dört karo (EKİPMAN / FİLTRE KAHVE…) walk’ta `<a href>` boş.  
Örnekler: home Koleksiyonlar  
Öneri: leftover — ölü karo  
Karar: onay bekliyor

---

ADAY: ali-cats-label-repeat  
Gerekçe: `section.ali-cats` kart altı hepsi “kahveler”.  
Örnekler: home  
Öneri: leftover — demo copy  
Karar: onay bekliyor

---

ADAY: ali-footer-label-mismatch  
Gerekçe: Footer “Espresso” → `/bags` · “Filtre Kahve” → `/accessories`. Kahve kopyası, katalog çanta/aksesuar.  
Örnekler: `footer.ali-ft`  
Öneri: leftover — etiket  
Karar: onay bekliyor

---

ADAY: ali-footer-no-newsletter  
Gerekçe: Footer’da e-posta input yok. `footer-columns-newsletter` yine de en yakın tip (kolon + hakkında). Submit yok.  
Örnekler: https://dev-alitheme.ikas.shop/  
Öneri: leftover — newsletter yok  
Karar: onay bekliyor

---

ADAY: ali-policy-accordion  
Gerekçe: `/pages/iade-kosullari` altında ikinci `section.ali-acc` (İademi nasıl kargolayabilirim?). `page-content-main` legal kutu yazıldı; accordion tekrar edilmedi.  
Örnekler: https://dev-alitheme.ikas.shop/pages/iade-kosullari  
Öneri: leftover — duplicate FAQ  
Karar: onay bekliyor

---

ADAY: ali-blog-category  
Gerekçe: `/blog/evde-barista-ekipman-soslar` `pageType` **BLOG_CATEGORY** `section.ali-blogcat`. Liste + post yazıldı; kategori şablonu yok.  
Örnekler: https://dev-alitheme.ikas.shop/blog/evde-barista-ekipman-soslar  
Öneri: leftover — kategori  
Karar: onay bekliyor

---

ADAY: ali-guest-order-track  
Gerekçe: Menü “Sipariş Takip” button. PII; tıklanmadı, observation yok.  
Örnekler: `.ali-nav__sublink`  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: ali-login-landed  
Gerekçe: Keşifte `/account` → `/account/login` `pageType` LOGIN `section.ali-login` görüldü. Auth; observation yazılmadı, form doldurulmadı.  
Örnekler: https://dev-alitheme.ikas.shop/account/login  
Öneri: leftover — account dur  
Karar: onay bekliyor

---

ADAY: ali-nav-buttons-not-links  
Gerekçe: Drawer satırları `<button class="ali-nav__link">` (YENİ/KAHVE…). İlk tık paneli kapatabilir. Yazılı `<a>` değil.  
Örnekler: `.ali-nav--open`  
Öneri: leftover — submenu  
Karar: onay bekliyor

---

ADAY: ali-coupon  
Gerekçe: Drawer/sayfa “Kupon kodu” / örn. YAZ25. Açılmadı / uygulanmadı.  
Örnekler: `.ali-cart__coupon-head`  
Öneri: leftover — kupon  
Karar: onay bekliyor

---

ADAY: ali-hashed-css-modules  
Gerekçe: Birçok node’da `_3RG0seZZnJ` / `_5xNj7KNPTg` hash class. Selector’da **kullanılmadı** — `section.ali-*` / aria-label.  
Örnekler: home sections  
Öneri: leftover — not  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/pages/hakkimizda`  
`/pages/about`  
`/pages/contact`  
`/pages/faq`  
`/about` · `/contact` · `/faq`  
`/404-qante-does-not-exist`

## Sitemap’te duran, walk dışı

Koleksiyon: `/bags` · `/accessories` · `/handbags` · `/waist-bags` · `/duffel-bags` · `/backpacks` · `/laptop-sleeves` · `/organizers` · `/shoulder-bags` · `/other` · `/hats---caps` · `/clothing` (aynı PLP tipi)  
Ürün: `/kahve-paketi` · `/dikey-dokulu-shorts` · `/sports-shoulder-bag` · `/traveler-waist-bag` · `/basic-cap` · diğerleri  
Blog kategori + diğer yazılar — aynı `blog-post-main` / kategori leftover  
`pages.xml` yalnız `/blog` listeliyor (iletisim/sss/iade footer’da)

## Bilinçli atlananlar

- `/account` · `/account/login` — auth  
- Checkout / ÖDEME YAP / ÖDEMEYE GEÇ  
- Newsletter / contact / review / coupon submit (PII)  
- Favori  
- Sipariş Takip  
- Filtre drawer  
- Bundle / Birlikte Al işaretleme  
- Sticky ATC  
- Instagram feed tık  
