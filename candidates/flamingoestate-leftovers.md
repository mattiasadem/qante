# Flamingo Estate leftovers / adaylar

*Store:* https://flamingoestate.com · *Tema (görülen):* flamingo-estate-web/master · schema_name Prestige 8.3.0 · custom (`theme_store_id` null)  
*Shop:* flamingo-estate-organics.myshopify.com · theme id 140426608808 · role main  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: flamingoestate-404  
Gerekçe: `/pages/about-us`, `/pages/faqs`, `/blogs/news` → 404 “Holy basil! This isn’t the page you were looking for.” Taksonomide 404 pageType yok. Footer “About Us” aslında `/pages/the-estate`.  
Örnekler: https://flamingoestate.com/pages/about-us  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: flamingoestate-candles-lp  
Gerekçe: `/collections/candles` Prestige collection template değil; `#shopify-section-lp-candles` + `lp-candles-r2` + `lp-candles-collection` merchandising LP (ROSEMARY / JASMINE hero satırları + Shop More Candles grid). Standart PLP `/collections/all`.  
Örnekler: https://flamingoestate.com/collections/candles  
Öneri: map tartışması veya ikinci collection observation  
Karar: onay bekliyor

---

ADAY: flamingoestate-stockists  
Gerekçe: `/pages/stockists` Mapbox + `stockist-search-form` (“Where to Find Us”). Taksonomide store-locator yok.  
Örnekler: https://flamingoestate.com/pages/stockists  
Öneri: ertele — graza-store-locator ile aynı aile  
Karar: onay bekliyor

---

ADAY: flamingoestate-pdp-reviews  
Gerekçe: PDP `#shopify-section-template--17811497484456__product_reviews_YNtNnC` — 4.9 / 288 reviews + müşteri foto. `testimonial-quote-carousel` merchant alıntısı; bu UGC widget.  
Örnekler: https://flamingoestate.com/products/climbing-tuscan-rosemary-soy-wax-candle  
Öneri: aday / Base reviews  
Karar: onay bekliyor

---

ADAY: flamingoestate-featured-in  
Gerekçe: Home `#shopify-section-template--17716101480616__featured_in_HxLhJj` type `featured-blocks-custom` — “As featured in” metni var, kutu 0×0.  
Öneri: ertele — kanıt yok  
Karar: onay bekliyor

---

ADAY: flamingoestate-gorgias-contact  
Gerekçe: `/pages/contact` gövde `page-content-main`; form `iframe[title='Gorgias Contact Form']` → `contact.gorgias.help` (680×844). Cross-origin pierce yok. PII gönderilmedi.  
Öneri: iframe leftover  
Karar: onay bekliyor

---

## 404 / yönlendirme

| URL | Sonuç |
|---|---|
| `/pages/about-us` | 404 Holy basil |
| `/pages/faqs` | 404 Holy basil |
| `/pages/about` | homepage |
| `/blogs/news` | homepage |
| `/cart` | `/?viewcart=true` homepage — sepet Rebuy drawer |
| sitemap.xml | index (5 loc) — ürün/sayfa loc yok |

## Bilinçli atlananlar

- `/account/login` — auth
- Checkout / e-posta / Klaviyo SUBMIT / Gorgias form
- Gorgias chat bubble
- Refer-a-friend / Get $20 (PII)
- Membership Sign in
- `/pages/the-soap-shop-2`, fund, pop-ups, wholesale — roster dışı; 200 ise sonraki tur
- `featured_in` 0px
- PDP review widget
- `/collections/candles` custom LP
- Stockists map
