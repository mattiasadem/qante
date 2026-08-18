# Kumsal leftovers / adaylar

*Store (official Theme Store demo):* https://0esw4-dev-kumsal.myikas.com/  
*Theme Store:* https://themes.ikas.com/themes/79a4d272-c76f-49e1-aeb9-22ad3a5c5066  
*Tema:* **Kumsal** · developer **ikascom** · slug `kumsal` · preset `default`  
*Platform (okunan, uydurulmadı):* **ikas** · `window.Shopify` **yok** · `window.__IKAS_DATA__` var  
*Fingerprint:* host `0esw4-dev-kumsal.myikas.com` · `merchantId` `232ff515-76eb-4634-ba96-87fcdf0c5064` · `storeName` `dev-kumsal` · `salesChannelId` `df371fb7-ae8e-4a2f-a7ad-993a17e931af` · `storefrontId` `711b0133-dfba-4f0d-bdc0-7ef9e3c3d079` · `apiUrl` `https://api.myikas.com/api/sf/graphql` · locale `tr` · `TRY` ₺ · routing `5c580a7f-ea01-492e-b36d-08eae125b90a` · `logoText` Kumsal · Theme Store UUID `79a4d272-c76f-49e1-aeb9-22ad3a5c5066`  
*okunan ama yürünmedi:* `og:site_name` / `og:url` = `https://dev-alina.ikas.shop`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: kumsal-dual-hero  
Gerekçe: `section.hero` iki `.hero-panel` aynı karede (768+ `50vw`). Yaz Maceraları + Ronnie Romance. Ok/dot/autoplay yok. `hero-slideshow` yazıldı; delta: slayt değil.  
Örnekler: https://0esw4-dev-kumsal.myikas.com/ `section.hero`  
Öneri: leftover — dual panel  
Karar: onay bekliyor

---

ADAY: kumsal-empty-home-5  
Gerekçe: Home `#5` / `style_fEGyGLR8J8` kutu 0×0, metin yok. Hydrate yok. Observation yazılmadı.  
Örnekler: https://0esw4-dev-kumsal.myikas.com/ `[id='5']`  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: kumsal-empty-pdp-2  
Gerekçe: PDP `#2` 0×0, metin yok. Observation yazılmadı.  
Örnekler: https://0esw4-dev-kumsal.myikas.com/chukka-sweater-men-s?renk=600-oatmeal&beden=s  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: kumsal-search-is-page  
Gerekçe: Header ARA (`.hdr-search`) overlay/predictive değil — `/search` (`pageType` SEARCH). `global-predictive-search` yazıldı; delta: tam sayfa.  
Örnekler: https://0esw4-dev-kumsal.myikas.com/search  
Öneri: leftover — overlay yok  
Karar: onay bekliyor

---

ADAY: kumsal-blog-404  
Gerekçe: Footer BLOG → `/blog` `pageType` NOT_FOUND (aynı `section.nf` 404). Blog list/post yok.  
Örnekler: https://0esw4-dev-kumsal.myikas.com/blog  
Öneri: leftover — route kaydı  
Karar: onay bekliyor

---

ADAY: kumsal-faq-routes-404  
Gerekçe: `/faq` `/sss` `/pages/faq` `/pages/sss` hepsi 404. SSS yalnız home `section.faq`.  
Örnekler: https://0esw4-dev-kumsal.myikas.com/pages/sss  
Öneri: leftover — route kaydı  
Karar: onay bekliyor

---

ADAY: kumsal-policy-href-home  
Gerekçe: Footer Gizlilik Politikası / Kullanım Koşulları `href=/` — ayrı policy sayfası yok.  
Örnekler: https://0esw4-dev-kumsal.myikas.com/ `section.site-footer`  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: kumsal-stale-og-host  
Gerekçe: `og:site_name` / `og:url` = `https://dev-alina.ikas.shop`. Official demo host `0esw4-dev-kumsal.myikas.com`. O hosta gidilmedi.  
Örnekler: home `<meta property="og:site_name">`  
Öneri: leftover — fingerprint notu  
Karar: onay bekliyor

---

ADAY: kumsal-pdp-tabs-in-buybox  
Gerekçe: `.pd-tabs` (Açıklama) buy box (`.pd`) içinde. Ayrı `product-info-tabs` yazılmadı.  
Örnekler: https://0esw4-dev-kumsal.myikas.com/chukka-sweater-men-s?renk=600-oatmeal&beden=s  
Öneri: leftover — nested tabs  
Karar: onay bekliyor

---

ADAY: kumsal-account-checkout  
Gerekçe: `/account` `/account/login` `/account/orders` `/account/favorite-products` ve checkout walk dışı (PII / ödeme).  
Örnekler: footer GİRİŞ YAP / ÜYE OL  
Öneri: leftover — stop  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/blog`  
`/faq`  
`/sss`  
`/pages/faq`  
`/pages/sss`  
`/does-not-exist-qante`

---

## Bilinçli atlananlar

- `/account` · `/account/login` · sipariş · favori — auth  
- Checkout / ödeme  
- Newsletter GÖNDER / iletişim MESAJ GÖNDER (PII)  
- `https://dev-alina.ikas.shop` (og, official demo değil)  
- Home `#5` ve PDP `#2` boş kutular  
- Policy linkleri (`href=/`)  
