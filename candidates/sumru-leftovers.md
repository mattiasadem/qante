# Sumru leftovers / adaylar

*Kaynak (resmi walk URL):* https://dev-sumru.myikas.com/  
*Canlı (HTTP 301, üçüncü host yok):* https://dev-sumru.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/cfeb78d2-89b1-4c09-9496-04089a07ec18  
*Tema (görülen, uydurulmadı):* Sumru · ikascom · ikas Studio storefront  
`window.Shopify` **yok**  
`window.__IKAS_DATA__` · `storefrontThemeId` `d96fc0bb-bfdd-4813-b9b3-2f3f5b6d5909` · `storefrontId` `76990161-78d3-414c-8ff8-125eedb8073d` · `storefrontType` `STOREFRONT` · config `domain` `dev-sumru.ikas.shop` · listed host `dev-sumru.myikas.com` · `merchantId` `24aaa627-acd3-48e8-9da0-0530a3e43ace` · `merchantName`/`storeName` `dev-sumru` · locale `tr` · `TRY`  
`window.IkasEvents` var  
`theme_store_id` **cfeb78d2-89b1-4c09-9496-04089a07ec18** (Theme Store UUID; storefront’ta Shopify `theme_store_id` yok — uydurulmadı)  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: sumru-no-shopify-theme-json  
Gerekçe: `window.Shopify` yok. Kimlik `__IKAS_DATA__` + `IkasEvents` + `*.ikas.shop` / `api.myikas.com`. Theme Store id listing UUID.  
Örnekler: https://dev-sumru.ikas.shop/  
Öneri: leftover — platform parmak izi  
Karar: onay bekliyor

---

ADAY: sumru-listed-host-301  
Gerekçe: Theme Store “Go to Demo Store” `https://dev-sumru.myikas.com/` HTTP 301 `Location: https://dev-sumru.ikas.shop/`. Üçüncü host yok.  
Örnekler: https://dev-sumru.myikas.com/  
Öneri: leftover — redirect kaydı  
Karar: onay bekliyor

---

ADAY: sumru-tip-seven-products  
Gerekçe: Home `section.cp-tip` “Yedi ürün, tek koleksiyon.” Kiryu adım listesi (Kase Ø 12.5/14/17 · Tabak…) + görsel + Sepete ekle. editorial-timeline (yıl hikâyesi) ve features-multicolumn uymadı. Observation yazılmadı.  
Örnekler: https://dev-sumru.ikas.shop/ `section.cp-tip`  
Öneri: leftover — yeni tip adayı  
Karar: onay bekliyor

---

ADAY: sumru-pdp-reviews  
Gerekçe: PDP `section.cp-pr` “Sofranızdan kareler.” 0 yorum + Yorum yaz formu. `testimonial-quote-carousel` değil. Yorum yaz tıklanmadı (PII).  
Örnekler: https://dev-sumru.ikas.shop/kiryu-kase-12-5-cm  
Öneri: leftover — review bloğu  
Karar: onay bekliyor

---

ADAY: sumru-no-variant-swatch  
Gerekçe: Walk PDP’lerde (Kiryu/Antigo/Cecil/Wisteria) renk/beden swatch yok. Her çap/renk ayrı ürün. Interact galeri thumb 1→2.  
Örnekler: https://dev-sumru.ikas.shop/kiryu-kase-12-5-cm  
Öneri: leftover — variant yok  
Karar: onay bekliyor

---

ADAY: sumru-about-is-brand-plp  
Gerekçe: Footer Markamız → `/sumru` `pageType` BRAND · 120 ürün · `section.cp-pl`. `/about` `/hakkimizda` `/pages/hakkimizda` `/pages/about` = NOT_FOUND.  
Örnekler: https://dev-sumru.ikas.shop/sumru  
Öneri: leftover — about yok  
Karar: onay bekliyor

---

ADAY: sumru-faq-blog-404  
Gerekçe: `/faq` `/sss` `/pages/faq` `/pages/sss` `/blog` `/blogs` aynı NOT_FOUND + `section.cp-ps` “Sayfa Bulunamadı”. Dedicated FAQ/blog yok.  
Örnekler: https://dev-sumru.ikas.shop/blog  
Öneri: leftover — route kaydı  
Karar: onay bekliyor

---

ADAY: sumru-404-is-featured-grid  
Gerekçe: NOT_FOUND ayrı `not-found` section değil — home ile aynı `section.cp-ps` (“— Sayfa Bulunamadı / En çok sevilen ürünleri incele.”). `product-showcase-grid-featured` yazıldı.  
Örnekler: https://dev-sumru.ikas.shop/does-not-exist-qante-sumru  
Öneri: leftover — 404 şablon  
Karar: onay bekliyor

---

ADAY: sumru-cookie-bar  
Gerekçe: Sağ `div.cp-cookie-bar` “çerezler kullanıyoruz” + Kabul ediyorum. Section değil. Kapatıldı (PII değil); çerez politikası `/cookies` 404.  
Örnekler: home  
Öneri: leftover — chrome  
Karar: onay bekliyor

---

ADAY: sumru-quick-add  
Gerekçe: Kart `button.cp-pcard__qa` “Hızlı sepete ekle”. Interact listesinde yok; tıklanmadı.  
Örnekler: home `section.cp-ps`  
Öneri: leftover — interact dışı  
Karar: onay bekliyor

---

ADAY: sumru-cart-promo  
Gerekçe: Drawer/sayfa “İndirim kodu / Uygula”. Uygulanmadı.  
Örnekler: https://dev-sumru.ikas.shop/cart  
Öneri: leftover — kupon  
Karar: onay bekliyor

---

ADAY: sumru-first-order-discount  
Gerekçe: Dolu sepet “İlk Sipariş! ₺ -20.25” (₺405 → ₺384.75). Demo kampanya.  
Örnekler: cart drawer / `/cart`  
Öneri: leftover — demo fiyat  
Karar: onay bekliyor

---

ADAY: sumru-account-login  
Gerekçe: Header Hesabım → `/account/login` LOGIN “Tekrar hoş geldiniz.” Google/Facebook/e-posta. Auth dur. `/giris` `/hesabim` 404.  
Örnekler: https://dev-sumru.ikas.shop/account/login  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: sumru-order-tracking  
Gerekçe: `/pages/order-tracking` CUSTOM “Siparişini bul” e-posta + sipariş no. Submit yok.  
Örnekler: https://dev-sumru.ikas.shop/pages/order-tracking  
Öneri: leftover — PII form  
Karar: onay bekliyor

---

ADAY: sumru-kvkk-policy  
Gerekçe: `/pages/kvkk` CUSTOM “KVKK Aydınlatma Metni” lorem. Walk policy değil.  
Örnekler: https://dev-sumru.ikas.shop/pages/kvkk  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: sumru-search-nav-aliases  
Gerekçe: Nav Özel Koleksiyonlar + Koleksiyonlar `href=/search` (mega var). `/arama` 404.  
Örnekler: header  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: sumru-search-page-unfiltered  
Gerekçe: `/search?q=kiryu` pageType SEARCH ama `section.cp-pl` Cecil/Wisteria/Sandy Loam grid — sorgu süzülmemiş. Overlay `kiryu` süzüyor.  
Örnekler: https://dev-sumru.ikas.shop/search?q=kiryu  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: sumru-atc-toast-not-drawer  
Gerekçe: PDP `button.cp-pdp__atc` toast “Ürün sepete eklendi / Sepeti Gör”; drawer bag tık ile.  
Örnekler: Kiryu PDP  
Öneri: leftover — davranış  
Karar: onay bekliyor

---

## 404 URL’ler (aynı `section.cp-ps` Sayfa Bulunamadı)

`/about`  
`/hakkimizda`  
`/pages/about`  
`/pages/hakkimizda`  
`/contact`  
`/iletisim`  
`/pages/contact`  
`/faq`  
`/sss`  
`/pages/faq`  
`/pages/sss`  
`/blog`  
`/blogs`  
`/sepet`  
`/giris`  
`/hesabim`  
`/arama`  
`/cookies`  
`/does-not-exist-qante-sumru`

---

## Bilinçli atlananlar

- `/account` / Giriş yap / Hesap aç — auth  
- Checkout / Ödemeye geç  
- Newsletter Abone ol / contact Gönder (PII)  
- Yorum yaz  
- İndirim kodu Uygula  
- Hızlı sepete ekle  
- Favori  
- `section.cp-tip` (yeni tip)  
- `/sumru` BRAND (Markamız; PLP değil about)  
- `/pages/kvkk` · `/pages/order-tracking`  
- İkinci PLP’ler (`/antigo`, `/indirimli-urunler`, `/light-blue-sea`)
