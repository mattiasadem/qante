# Selim leftovers

*Kaynak:* https://dev-selimtheme.ikas.shop  
*Theme Store:* https://themes.ikas.com/themes/cd45021d-2f96-4fc4-afe2-229ea0fd7b49  
*Tema:* **Selim** · ikascom · slug `selim` · preset `default`  
*Platform:* **ikas** — `Shopify.theme` / `schema_name` / Shopify Theme Store id **yok** (uydurulmadı)

**Fingerprint (okundu):**  
`window.__IKAS_DATA__` · `IkasEvents` subscribe/unsubscribe  
storefrontId `59b21621-cd0c-4bae-94f2-d0ddf3154adc` · storefrontThemeId `b16764ac-ef37-4683-b598-61c72fb5b2f6` · storefrontRoutingId `4b99701f-6745-4417-a8cf-d903245060d9` · storefrontType `STOREFRONT` · salesChannelId `da5ff479-e38f-4fb4-9dd2-ba7e6e6b7930` · merchantId `d2e5754b-2da4-4526-80e6-ce75fc6be32f` · storeName `dev-selimtheme` · locale `tr` · TRY `₺` · region `TR` · Theme Store UUID `cd45021d-2f96-4fc4-afe2-229ea0fd7b49`

Şema icat edilmedi. Storefront alanları uydurulmadı. `apiKey` JWT envantere yazılmadı.

---

## Tema kimliği

- Platform **ikas** storefront (`__IKAS_DATA__`, `/sf/p/…`, `api.myikas.com/api/sf/graphql`).
- `window.Shopify` **undefined**.
- Theme Store adı **Selim** / geliştirici **ikascom** — themes.ikas.com sayfasından; canlı JS’te `Shopify.theme.name` yok.
- `storefrontThemeId` ≠ Theme Store UUID — ikisi de okundu, karıştırılmadı.

---

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `/about` · `/pages/about` · `/pages/hakkimizda` | 404 `NOT_FOUND`. About şablonu yok |
| `/blog` | Footer link — 404. Blog list/post yok |
| `/faq` · `/contact` · `/pages/contact` | 404. FAQ=`/pages/sss` · Contact=`/pages/iletisim` |
| `/search?q=canta` | Sonuç bulunamadı. Katalog `bag` (10) |
| Newsletter footer `KATIL` | input var — submit PII, dur |
| Contact `GÖNDER` | PII, dur |
| Account `/account/login` · header hesap · drawer “Giriş yap” | dur |
| Checkout / Ödemeye geç | drawer + cart sayfa — tıklanmadı |
| Cart kupon (`İndirim kodum var`) | dur |
| Favorilere Ekle | PDP — account, dur |
| Değerlendirme Yaz | PDP içinde boş “Henüz değerlendirme yok” — yazma PII, dur |
| Kart `fab-card__qa` / `plp-card__qa` Sepete Ekle | quick-add leftover (interact listesinde yok) |
| `/bags` parent kategori | walk PLP = `/shoulder-bags` |
| `/pages/iade-kosullari` | footer policy — walk dışı leftover |
| `/pages/siparis-takip` | sipariş no PII — dur |
| Cookie `TÜMÜNÜ KABUL ET` | kabul (PII yok); banner şema değil |
| Harita (iletişim) | leftover |
| Kişiselleştirme (`personalizationTitle`) | PLP/search prop — UI yoklandı değil |

---

## Aday (yeni şema yok)

ADAY: selim-not-shopify  
Gerekçe: Storefront `window.Shopify` undefined. Kimlik `__IKAS_DATA__.storefrontConfig` (storefrontId / storefrontThemeId / merchantId). QANTE walk mevcut section tiplerine observation bağladı.  
Örnekler: https://dev-selimtheme.ikas.shop/  
Öneri: leftover — platform notu  
Karar: onay bekliyor

---

ADAY: selim-404  
Gerekçe: `/this-page-does-not-exist-qante` → “Hata 404 / Sayfa bulunamadı”. Taksonomide 404 pageType yok. `page-content-main` + delta.  
Örnekler: https://dev-selimtheme.ikas.shop/this-page-does-not-exist-qante  
Öneri: ertele — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: selim-about-absent  
Gerekçe: About walk hedefi 404.  
Örnekler: https://dev-selimtheme.ikas.shop/about · https://dev-selimtheme.ikas.shop/pages/hakkimizda  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: selim-blog-404  
Gerekçe: Footer `/blog` 404. `blog-list-main` / `blog-post-main` observation yok.  
Örnekler: https://dev-selimtheme.ikas.shop/blog  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: selim-mega-cards  
Gerekçe: ÇANTA mega = link listesi + 2 görsel kart. `navigation-header-mega` + delta.  
Örnekler: https://dev-selimtheme.ikas.shop/  
Öneri: leftover — mevcut mega  
Karar: onay bekliyor

---

ADAY: selim-shop-the-look-hotspots  
Gerekçe: `section.stl` hotspot + ürün kartı. `media-shop-the-feed` + delta.  
Örnekler: https://dev-selimtheme.ikas.shop/  
Öneri: leftover — mevcut shop-the-look  
Karar: onay bekliyor

---

## Interact notları

- Mega: `a:text-is("ÇANTA")` hover 1440. Tıklama `#`.
- Predictive: `button[aria-label="Ara"]` → `input.ethm-search__input`. Katalog `bag`.
- Cart drawer: `button[aria-label="Sepet"]` → `.ethm-cart`. ATC UI `button.pd-atc__cta` (Shopify `addToCart` / `/cart/add.js` yok).
- 1440 hamburger gizlenebilir. 375/768 `button[aria-label="Menü"]` → `.ethm-nav__menu`.
- PDP Color: `button.pd-variants__swatch[aria-label="Beige"]`.
- Qty: `.ethm-cart button[aria-label="+"]` / `.cartx button[aria-label="+"]` (kanıt sonrası doğrulanacak).
