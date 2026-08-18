# Market leftovers / adaylar

*Store:* https://dev-market.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/704c0da7-16ad-4448-9dc7-7487d759145b  
*Tema (görülen, uydurulmadı):* **Market** · ikascom · UUID `704c0da7-16ad-4448-9dc7-7487d759145b`  
*demoLink (Theme Store):* `https://dev-market.ikas.shop/`  
*`window.Shopify` / `Shopify.theme`:* yok  
*`__IKAS_DATA__`:* pageType INDEX / SEARCH / CART / NOT_FOUND / LOGIN · storefrontThemeId `603d7c7f-e893-4904-bb45-2981d141ac34` · merchantName `dev-market` · config domain `dev-market.myikas.com` · locale `tr` · TRY  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: market-shop-handle  
Gerekçe: Walk URL `dev-market.ikas.shop`. `storefrontConfig.domain` = `dev-market.myikas.com`. İkisi de okundu; host uydurulmadı.  
Örnekler: https://dev-market.ikas.shop/  
Öneri: leftover — public host vs config domain  
Karar: onay bekliyor

---

ADAY: market-no-mega  
Gerekçe: Header kapak + logo + slogan. Nav link / mega panel / chevron yok. Kategori sekmeleri `.m-product-list__tab`.  
Örnekler: `.market-header`  
Öneri: leftover — mega yok  
Karar: onay bekliyor

---

ADAY: market-no-hamburger  
Gerekçe: 375 ve 768 üst chrome: Ara + Giriş yap. Burger / `#MenuDrawer` / `global-menu-drawer` yok.  
Örnekler: `.m-home-account-bar`  
Öneri: leftover — mobil menü yok  
Karar: onay bekliyor

---

ADAY: market-account-bar  
Gerekçe: Sibling `.m-home-account-bar` — Ara (`/search`) + Giriş yap. Login modal metinleri propValues'ta (E-posta/Şifre). Tıklanmadı.  
Örnekler: home header  
Öneri: leftover — account stop  
Karar: onay bekliyor

---

ADAY: market-predictive-search  
Gerekçe: Home Ara full page `/search` (pageType SEARCH). Overlay / anlık öneri yok. `global-predictive-search` zorlanmadı.  
Örnekler: `.m-home-account-bar__search` → https://dev-market.ikas.shop/search  
Öneri: leftover — sayfa arama ≠ predictive  
Karar: onay bekliyor

---

ADAY: market-plp-is-index  
Gerekçe: Katalog home INDEX. `/category/*` `/categories/*` `/kategori/*` `/c/*` HTTP 404 pageType NOT_FOUND. Tab tık scroll-to (İçecekler).  
Örnekler: https://dev-market.ikas.shop/  
Öneri: leftover — ayrı PLP yok  
Karar: onay bekliyor

---

ADAY: market-pdp-is-modal  
Gerekçe: `+` → `.m-product-modal`. `/product/avokado` `/products/avokado` `/urun/avokado` `/p/avokado` 404. Kart gövde tık URL değiştirmez.  
Örnekler: Salatalık / Avokado modal  
Öneri: leftover — PRODUCT rota yok  
Karar: onay bekliyor

---

ADAY: market-avokado-addon  
Gerekçe: Avokado modal checkbox **Ayrı poşete koy +0,50 TL**. Option interact = Salatalık Miktar 500 g → 1 kg.  
Örnekler: Avokado modal  
Öneri: leftover — addon  
Karar: onay bekliyor

---

ADAY: market-cart-rail-mobile  
Gerekçe: `.m-cart-rail` 1440 = 360×265. 375/768 kutu 0×0 (DOM dolu: 1 ürün…). Mobil sepet = `/cart`.  
Örnekler: `.m-product-list__rail`  
Öneri: leftover — rail yalnız masaüstü  
Karar: onay bekliyor

---

ADAY: market-view-cart-hidden  
Gerekçe: propValues `viewCartText` Sepeti Görüntüle — DOM count 1, `isVisible` false.  
Örnekler: cart rail  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: market-about-contact-faq  
Gerekçe: Footer Hakkımızda / İletişim / Sıkça Sorulan Sorular `href="/"`. `/pages/about` `/hakkimizda` `/iletisim` `/contact` `/faq` `/sss` `/pages/faq` 404.  
Örnekler: `.m-footer__link`  
Öneri: leftover — içerik sayfası yok  
Karar: onay bekliyor

---

ADAY: market-blog  
Gerekçe: `/blog` `/blogs` `/blog/all` 404. Footer'da blog yok.  
Örnekler: —  
Öneri: leftover — blog yok  
Karar: onay bekliyor

---

ADAY: market-404-blank  
Gerekçe: `/this-page-does-not-exist-qante-market` pageType `NOT_FOUND`, body text boş, section class yok. `/404` 200 + NOT_FOUND. `/sepet` `/arama` aynı boş 404. `page-content-main` zorlanmadı.  
Örnekler: https://dev-market.ikas.shop/this-page-does-not-exist-qante-market  
Öneri: leftover — boş 404  
Karar: onay bekliyor

---

ADAY: market-brand-pages  
Gerekçe: Theme Store metni marka sayfası der. `/brand` `/brands` `/marka` `/markalar` `/b/avokado` 404.  
Örnekler: —  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: market-account  
Gerekçe: `/account` → `/account/login` pageType LOGIN. `/account/register` REGISTER. `/account/orders` → LOGIN. Form doldurulmadı.  
Örnekler: https://dev-market.ikas.shop/account/login  
Öneri: PII / account stop  
Karar: onay bekliyor

---

ADAY: market-pii-stop  
Gerekçe: Giriş yap, newsletter (yok), contact submit (form yok), cart **Siparişi Tamamla**, `/checkout` → INDEX.  
Örnekler: header · cart rail · `/cart`  
Öneri: PII / checkout stop  
Karar: onay bekliyor

---

ADAY: market-policy-pages  
Gerekçe: Footer Kullanım / Gizlilik / KVKK / Çerez — hepsi `href="/"`.  
Örnekler: `.m-footer__col` Kurumsal  
Öneri: leftover — policy  
Karar: onay bekliyor

---

ADAY: market-search-empty  
Gerekçe: `zzzzz` → “Aramanızla eşleşen ürün bulunamadı.” Yazılan kare `avokado`.  
Örnekler: https://dev-market.ikas.shop/search?s=zzzzz&o=3&page=1  
Öneri: leftover — boş arama  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / boş NOT_FOUND)

`/this-page-does-not-exist-qante-market`  
`/sepet` `/arama` `/giris`  
`/blog` `/blogs` `/blog/all`  
`/pages/about` `/pages/hakkimizda` `/page/hakkimizda` `/hakkimizda`  
`/pages/contact` `/pages/iletisim` `/iletisim` `/contact`  
`/faq` `/sss` `/pages/faq` `/pages/sss`  
`/product/avokado` `/products/avokado` `/urun/avokado` `/p/avokado`  
`/category/meyve-sebze` `/categories/meyve-sebze` `/kategori/meyve-sebze` `/c/meyve`  
`/brand` `/brands` `/marka` `/markalar` `/b/avokado`

---

## Bilinçli atlananlar

- `/account/login` `/account/register` — auth  
- Checkout / Siparişi Tamamla / `/checkout`  
- Newsletter (yok) / contact submit (form yok)  
- Giriş yap modal  
- Avokado “Ayrı poşete koy” addon  
- `zzzzz` boş arama karesi  
- Policy / about / FAQ / blog (rota yok)  
- Ayrı PLP / PRODUCT URL  
