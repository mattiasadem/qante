# Serel leftovers / adaylar

*Kaynak (Theme Store “Go to Demo Store”):* https://dev-serel.myikas.com/  
*Canlı (yönlendirme, üçüncü host yok):* https://dev-serel.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/7e1f7850-46d1-4a83-9d6b-a12cdc033e8b  
*Tema (görülen, uydurulmadı):* Serel · ikascom · ikas Studio storefront  
`window.Shopify` **yok** · `Shopify.theme` **ABSENT**  
`x-powered-by` **ikas** · `x-cache-tag` **dev-serel.ikas.shop**  
`window.__IKAS_DATA__` · `storefrontThemeId` `e3b5fc65-ad07-402e-8380-2599504c38fb` · `storefrontId` `ef023962-e737-4119-9cb1-c1f489d080ce` · `storefrontRoutingId` `993f48b4-cddd-4c7b-8c8d-278192788e0e` · `storefrontType` `STOREFRONT` · `salesChannelId` `aad6374f-a5d3-46e8-a483-d1dad510da62` · `domain` `dev-serel.ikas.shop` · `apiUrl` `https://api.myikas.com/api/sf/graphql` · `merchantSettings.merchantId` `155a3907-5bfb-4070-b6ef-3b030caf4da3` · `merchantName`/`storeName` `dev-serel` · locale `tr` · region `TR` · `TRY` ₺  
JSON içinde ikinci `merchantId` `33718d27-93f2-4da2-a805-d86fa8896ede` (bazı sosyal/özellik component kayıtları) — uydurulmadı, storefront merchantSettings değil.  
`window.IkasEvents` var  
`theme_store_id` **7e1f7850-46d1-4a83-9d6b-a12cdc033e8b** (Theme Store UUID; storefront’ta Shopify `theme_store_id` yok — uydurulmadı)  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: serel-no-shopify-theme-json  
Gerekçe: `window.Shopify` / `Shopify.theme` yok. Kimlik `__IKAS_DATA__` + `IkasEvents` + `x-powered-by: ikas` + `*.ikas.shop` / `api.myikas.com`. Theme Store id listing UUID.  
Örnekler: https://dev-serel.ikas.shop/  
Öneri: leftover — platform parmak izi  
Karar: onay bekliyor

---

ADAY: serel-listed-host-redirect  
Gerekçe: Theme Store “Go to Demo Store” `https://dev-serel.myikas.com/` Playwright’ta `https://dev-serel.ikas.shop/` oldu (üçüncü host yok).  
Örnekler: https://dev-serel.myikas.com/  
Öneri: leftover — host kaydı  
Karar: onay bekliyor

---

ADAY: serel-cookiebar  
Gerekçe: İlk yüklemede `div.style_C3T35aeF9B` overlay + “Anladım”. Header Studio bloğunun çocuğu. Ayrı observation yazılmadı.  
Örnekler: home  
Öneri: leftover — overlay  
Karar: onay bekliyor

---

ADAY: serel-no-mega  
Gerekçe: Anasayfa ok + hover `div.style_sOiHicsDBX` 200×108, iki satır “Anasayfa”. Kategori/Markalar hover panel açmadı. `navigation-header-mega` yazıldı; delta dropdown.  
Örnekler: https://dev-serel.ikas.shop/  
Öneri: leftover — mega yok  
Karar: onay bekliyor

---

ADAY: serel-single-slide-hero  
Gerekçe: `afisListesi` components(1), `sliderOklari` false. Tek kare hero. `hero-slideshow` yazıldı.  
Örnekler: home `div.style_KdoOHg1J0i`  
Öneri: leftover — tek slayt  
Karar: onay bekliyor

---

ADAY: serel-plp-on-home  
Gerekçe: Home `id=4` `div.style_A8VmSDklAj` “(20 ürün)” + sort + 4 kolon + sayfalama 1/2. PLP ile aynı class. `/dekorasyon` yazıldı; home kopya yazılmadı.  
Örnekler: https://dev-serel.ikas.shop/  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: serel-about-missing  
Gerekçe: `/pages/hakkimizda` `/hakkimizda` `/about` `/pages/about` `/pages/about-us` `/pages/hakkinda` `/pages/biz-kimiz` `/pages/kurumsal` = `NOT_FOUND`. Footer about yok.  
Örnekler: https://dev-serel.ikas.shop/pages/hakkimizda  
Öneri: leftover — sayfa yok  
Karar: onay bekliyor

---

ADAY: serel-cart-page-404  
Gerekçe: `/cart` ve `/sepet` `NOT_FOUND`. Sepet yalnız `div.style_po6dey2tLa` overlay. `cart-page-main` yazılmadı.  
Örnekler: https://dev-serel.ikas.shop/cart  
Öneri: leftover — sayfa yok  
Karar: onay bekliyor

---

ADAY: serel-no-pdp-option  
Gerekçe: Yürünen PDP’lerde `optionName` / `variantValueName` yok; `variants[].attributes` []. Swatch/beden UI yok. Interact `changed` yok.  
Örnekler: `/serel-stoneware-servis-tabagi-seti` · `/serel-zeytin-yesili-cam-vazo` · `/serel-orme-pamuklu-battaniye`  
Öneri: leftover — seçenek yok  
Karar: onay bekliyor

---

ADAY: serel-search-q-unfiltered  
Gerekçe: `/search?s=vazo` → 1 ürün. `/search?q=vazo` → 20 ürün (katalog gibi). Overlay `vazo` yazıldı.  
Örnekler: https://dev-serel.ikas.shop/search?q=vazo  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: serel-search-mobile-input-hidden  
Gerekçe: 375/768 arama overlay ürün grid (büyüteç + X). `input.style_9pSncokZRq` attached ama gizli. `vazo` yalnız 1440 (Zeytin Yeşili Cam Vazo ₺459 + Tümünü Gör).  
Örnekler: home search overlay  
Öneri: leftover — mobil input yok  
Karar: onay bekliyor

---

ADAY: serel-blog-empty  
Gerekçe: `/blog` BLOG_INDEX, başlık “Blog Başlığı”, `blogListesi.count` 0, yazı href yok.  
Örnekler: https://dev-serel.ikas.shop/blog  
Öneri: leftover — boş listing  
Karar: onay bekliyor

---

ADAY: serel-faq-extra-blocks  
Gerekçe: `/pages/sss` Kargo accordion yazıldı. Sibling İade accordion (`k8sBaC9fxq`) + İade richText (`R85RbJpu9x`) aynı sayfa; ayrı observation yok.  
Örnekler: https://dev-serel.ikas.shop/pages/sss  
Öneri: leftover — aynı tip  
Karar: onay bekliyor

---

ADAY: serel-pdp-related-cok-satanlar  
Gerekçe: PDP `yrsfzwbOTD` “Çok Satanlar” (home featured ile aynı slot haritası). Home yazıldı; PDP tekrar edilmedi.  
Örnekler: Stoneware PDP  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: serel-pdp-breadcrumb-inside  
Gerekçe: Anasayfa / Sofra & Mutfak buy box `div.style_yTQFWACr05` içinde. Ayrı `navigation-breadcrumbs` yok.  
Örnekler: Stoneware PDP  
Öneri: leftover — buy box içi  
Karar: onay bekliyor

---

ADAY: serel-no-collection-banner  
Gerekçe: PLP’de koleksiyon hero/banner yok; yalnız sayaç + sort + grid.  
Örnekler: https://dev-serel.ikas.shop/dekorasyon  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: serel-plp-mobile-filters  
Gerekçe: 375 PLP’de **Filtreler** butonu (1440’ta Sütun). Filtre drawer açılmadı.  
Örnekler: `/dekorasyon` 375  
Öneri: leftover — interact yok  
Karar: onay bekliyor

---

ADAY: serel-duplicate-plp  
Gerekçe: `/banyo` `/ev-tekstili` `/sofra---mutfak` aynı CATEGORY şablon. `/dekorasyon` yazıldı.  
Örnekler: https://dev-serel.ikas.shop/banyo  
Öneri: leftover — duplicate PLP  
Karar: onay bekliyor

---

ADAY: serel-sold-out-pdp  
Gerekçe: `/serel-el-yapimi-stoneware-kase-seti` “Tükendi”. Walk ATC tabak seti.  
Örnekler: aynı PDP  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: serel-cart-price-delta  
Gerekçe: PDP list ₺1,049.00; sepete eklenince satır ₺1,029.00 + “20$ Discount for 350$”. Demo bağ.  
Örnekler: cart overlay  
Öneri: leftover — demo fiyat  
Karar: onay bekliyor

---

ADAY: serel-order-tracking  
Gerekçe: Footer `/pages/order-tracking` CUSTOM. Walk dışı (guest track / PII).  
Örnekler: https://dev-serel.ikas.shop/pages/order-tracking  
Öneri: leftover — dur  
Karar: onay bekliyor

---

ADAY: serel-account-login  
Gerekçe: Header hesap → `/account/login` LOGIN. Mobil Üye Ol / Giriş Yap. Auth dur.  
Örnekler: https://dev-serel.ikas.shop/account/login  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: serel-favorites  
Gerekçe: Header kalp `/account/favorite-products`. Tıklanmadı.  
Örnekler: header  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: serel-hashed-studio-classes  
Gerekçe: Semantic `section.hero` yok. Sınırlar `div.style_*` + `[data-critical][id]`.  
Örnekler: home  
Öneri: leftover — Studio DOM  
Karar: onay bekliyor

---

ADAY: serel-footer-your-logo  
Gerekçe: Footer karesinde **YOUR LOGO** + lorem; header **SEREL**. Newsletter formu yok.  
Örnekler: home footer  
Öneri: leftover — demo placeholder  
Karar: onay bekliyor

---

## 404 URL’ler (aynı `div.style_SMMkfRwCtj` 404 karesi)

`/cart`  
`/sepet`  
`/about`  
`/hakkimizda`  
`/pages/hakkimizda`  
`/pages/about`  
`/pages/about-us`  
`/pages/hakkinda`  
`/pages/biz-kimiz`  
`/pages/kurumsal`  
`/contact`  
`/iletisim`  
`/pages/contact`  
`/faq`  
`/sss`  
`/pages/faq`  
`/arama`  
`/blogs`  
`/pages/blog`  
`/giris`  
`/hesabim`  
`/does-not-exist-qante-serel`

---

## Bilinçli atlananlar

- `/account` / Giriş Yap / Üye Ol / Kayıt Ol — auth  
- Checkout / Alışverişi Tamamla  
- Newsletter (footer’da form yok) / iletişim GÖNDER  
- Cookie Anladım (yalnız dismiss, observation yok)  
- Home id=4 katalog (PLP kopya)  
- `/banyo` `/ev-tekstili` `/sofra---mutfak`  
- PDP Çok Satanlar tekrar  
- FAQ İade sibling  
- `/pages/order-tracking`  
- Favoriler  
