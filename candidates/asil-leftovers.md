# Asil leftovers / adaylar

*Kaynak (resmi walk URL):* https://dev-asil.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/5ccb940d-3b48-487d-859b-f860a4a238e8  
*Tema (görülen, uydurulmadı):* Asil · ikascom · ikas Studio storefront  
`window.Shopify` **undefined** · `Shopify.theme` **ABSENT**  
`window.__IKAS_DATA__` · `IkasEvents` · `x-powered-by: ikas` · `x-cache-tag: dev-asil.ikas.shop`  
`storefrontThemeId` `fe564801-776f-4ae0-80b8-c405d7b3c292` · `storefrontId` `d8a8191d-05a9-47f7-9077-005d49b2b8e3` · `storefrontRoutingId` `a690309d-b4a3-45d3-9d4c-323f93b0602b` · `storefrontType` `STOREFRONT`  
`salesChannelId` `b8adf1cc-d298-4193-bd09-0f752127afad` · `merchantId` `fd8437de-0fa9-4e92-978c-4f690d3d974a` · `storeName`/`merchantName` `dev-asil`  
`apiUrl` `https://api.myikas.com/api/sf/graphql` · `domain` `dev-asil.ikas.shop` · locale `tr` · `TRY` · region `TR`  
`theme_store_id` **5ccb940d-3b48-487d-859b-f860a4a238e8** (Theme Store UUID; storefront’ta Shopify `theme_store_id` yok — uydurulmadı)  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: asil-no-shopify-theme-json  
Gerekçe: `window.Shopify` / `Shopify.theme` yok. Kimlik `__IKAS_DATA__` + `IkasEvents` + `x-powered-by: ikas` + `api.myikas.com`. Theme Store id listing UUID.  
Örnekler: https://dev-asil.ikas.shop/  
Öneri: leftover — platform parmak izi  
Karar: onay bekliyor

---

ADAY: asil-no-cart-drawer  
Gerekçe: `button.hdr__cart` `/cart` sayfasına gider. ATC sonrası drawer/dialog yok (`anyDialog` boş). `global-cart-drawer` yazılmadı; `cart-page-main` interact empty/filled/qty.  
Örnekler: home cart ikonu · `/cart`  
Öneri: leftover — drawer yok  
Karar: onay bekliyor

---

ADAY: asil-about-missing  
Gerekçe: `/pages/hakkimizda` `/about` `/pages/about` `/hakkimizda` = `NOT_FOUND`. Footer about linki yok. Theme Store “About Asil” listing metni; storefront about sayfası yok.  
Örnekler: https://dev-asil.ikas.shop/pages/hakkimizda  
Öneri: leftover — sayfa yok  
Karar: onay bekliyor

---

ADAY: asil-faq-page-missing  
Gerekçe: FAQ `section.faq` home’da (observation). `/pages/sss` `/pages/faq` `/sss` `/faq` = `NOT_FOUND`.  
Örnekler: https://dev-asil.ikas.shop/pages/sss  
Öneri: leftover — sayfa yok  
Karar: onay bekliyor

---

ADAY: asil-blog-404  
Gerekçe: `pages.xml` yalnız `https://dev-asil.ikas.shop/blog` listeler. Walk `/blog` `/blogs` `/pages/blog` `/journal` = `NOT_FOUND` (aynı `section.nf`). Blog post yok.  
Örnekler: https://dev-asil.ikas.shop/blog  
Öneri: leftover — sitemap yalan  
Karar: onay bekliyor

---

ADAY: asil-search-q-ignored  
Gerekçe: `/search?s=bag` filtreler (10 çanta). `/search?q=asil` tam katalog (q yok sayılıyor). `/search` boş = tüm ürünler.  
Örnekler: https://dev-asil.ikas.shop/search?q=asil  
Öneri: leftover — query param  
Karar: onay bekliyor

---

ADAY: asil-filter-unopened  
Gerekçe: PLP/search `button.plh__filter` “Filtrele”. Interact listesinde yok; panel açılmadı.  
Örnekler: https://dev-asil.ikas.shop/bags  
Öneri: leftover — interact dışı  
Karar: onay bekliyor

---

ADAY: asil-brand-plp  
Gerekçe: `/nuvora` `/tundro` `pageType` **BRAND** (CATEGORY değil). Aynı `section.pl` grid. Hero badge linkleri. Ayrı obs yazılmadı.  
Örnekler: https://dev-asil.ikas.shop/nuvora  
Öneri: leftover — brand listing  
Karar: onay bekliyor

---

ADAY: asil-bundle-pdp  
Gerekçe: `/build-your-own-travel-kit` (paket adet ±), `/laptop-work-set`, `/travel-essentials-bundle` PRODUCT + “PAKETTEKİ ÜRÜNLER”. Walk tek PDP: Medium Shoulder Bag.  
Örnekler: https://dev-asil.ikas.shop/build-your-own-travel-kit  
Öneri: leftover — bundle  
Karar: onay bekliyor

---

ADAY: asil-pdp-accordions  
Gerekçe: Buy box `button.pdp__acc-summary` Detaylar & Kalıp / Kumaş & Bakım / Kargo & İade. `product-info-tabs` ayrı yazılmadı.  
Örnekler: https://dev-asil.ikas.shop/medium-shoulder-bag  
Öneri: leftover — buy box içi  
Karar: onay bekliyor

---

ADAY: asil-sold-out-shorts  
Gerekçe: `/dikey-dokulu-shorts` Textured Shorts — swatch/size `is-out`, CTA “Tükendi”. Option interact stoklu Medium Shoulder’da.  
Örnekler: aynı PDP  
Öneri: leftover — stoksuz örnek  
Karar: onay bekliyor

---

ADAY: asil-card-size-swatches  
Gerekçe: Home/PLP `.pcard` üzerinde XS–XL (Textured/Premium Shorts). Kart hover interact yok.  
Örnekler: home `section.pl`  
Öneri: leftover — kart içi  
Karar: onay bekliyor

---

ADAY: asil-menu-col2-empty  
Gerekçe: `.menu__body--cols-2` ikinci kolon `aria-hidden` boş. Mega kolon+promo yok.  
Örnekler: 1440 `button.hdr__mark`  
Öneri: leftover — boş kolon  
Karar: onay bekliyor

---

ADAY: asil-collection-no-banner  
Gerekçe: CATEGORY `/bags` `/clothing` yalnız `plh` başlık + Filtrele. `collection-banner` yok.  
Örnekler: https://dev-asil.ikas.shop/bags  
Öneri: leftover — banner yok  
Karar: onay bekliyor

---

ADAY: asil-other-category  
Gerekçe: `collections.xml` `/other` + `/shoulder-bags` + `/waist-…`. Walk PLP `/bags`.  
Örnekler: sitemap collections  
Öneri: leftover — aynı grid ailesi  
Karar: onay bekliyor

---

ADAY: asil-pages-xml-sparse  
Gerekçe: `pages.xml` yalnız `/blog`. `/pages/iletisim` CUSTOM ama sitemap’te yok.  
Örnekler: https://dev-asil.ikas.shop/pages.xml  
Öneri: leftover — sitemap  
Karar: onay bekliyor

---

ADAY: asil-contact-mailto  
Gerekçe: Aside `mailto:merhaba@maison.com` · `tel:+902122451860`. Tıklanmadı (PII/iletişim).  
Örnekler: https://dev-asil.ikas.shop/pages/iletisim  
Öneri: leftover — dur  
Karar: onay bekliyor

---

ADAY: asil-375-cart-qty-overlap  
Gerekçe: 375 dolu sepet `button.qty__btn[aria-label='Increase quantity']` sticky `Ödemeye geç` ile örtüşüyor. Plus tık `/checkout`’a gider. Changed kare 768/1440 (qty 1→2, ₺24→₺48). 375 changed yok.  
Örnekler: `/cart` 375  
Öneri: leftover — compact qty  
Karar: onay bekliyor

---

ADAY: asil-768-menu-no-drilldown  
Gerekçe: 768 menü masaüstü serif overlay; `.menu__m-link--parent` görünmez. Clothing alt yalnız 375 (Geri / Shorts).  
Örnekler: home `button.hdr__mark` 768  
Öneri: leftover — tablet layout  
Karar: onay bekliyor

---

ADAY: asil-wishlist  
Gerekçe: PDP `button.pdp__wishlist`. Tıklanmadı.  
Örnekler: Medium Shoulder Bag  
Öneri: leftover — interact dışı  
Karar: onay bekliyor

---

## 404 / chrome-dışı URL’ler (şema yok)

`/pages/hakkimizda` · `/pages/about` · `/about` · `/hakkimizda`  
`/pages/sss` · `/pages/faq` · `/sss` · `/faq`  
`/blog` · `/blogs` · `/pages/blog` · `/journal` · `/yazilar`  
`/this-page-does-not-exist-xyz-asil` → observation `page-content-main`

## Sitemap’te duran, walk dışı

`/other` · `/shoulder-bags` · waist koleksiyonları · bundle PDP’ler · `/nuvora` `/tundro` (BRAND)

## Bilinçli atlananlar

- `/account/login` · `/account/register` · `/account` — auth  
- Checkout / `Ödemeye geç` / kupon `İNDİRİM KODU UYGULA`  
- Footer `Abone ol` + contact form submit (PII)  
- Popüler arama chip (Elbiseler / Ceketler / Keten)  
- Filtrele paneli  
- Wishlist  
