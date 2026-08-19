# Sense leftovers / adaylar

*Store:* https://theme-sense-demo.myshopify.com  
*Tema (görülen):* **[Sense] Theme Store demo (latest)** · `schema_name` Dawn · `schema_version` 2.5.0 · `theme_store_id` **null** (görev notu 1356 storefront’ta yok)  
*Tarih:* 2026-08-17

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: sense-404  
Gerekçe: `/pages/this-page-does-not-exist-xyz-sense` → Dawn `template-404` “404 Page not found / Continue shopping” + newsletter. Taksonomide 404 pageType yok.  
Örnekler: https://theme-sense-demo.myshopify.com/pages/this-page-does-not-exist-xyz-sense  
Öneri: candidate — `page-content-main` observation var  
Karar: onay bekliyor

---

ADAY: sense-cart-notification  
Gerekçe: `cart-drawer` yok. ATC sonrası Dawn `#cart-notification` popup (“Item added to your cart”). `global-cart-drawer` observation + delta ile kaydedildi; iskelet yan çekmece değil.  
Örnekler: https://theme-sense-demo.myshopify.com/products/natural-vegan-lip-balm-lemon-lime  
Öneri: mevcut şema + delta (yeni schemaId değil)  
Karar: observation yazıldı

---

## 404 / boş / ince URL’ler

- `/pages/about` — 404 (about içeriği `/pages/about-us`, title Contact)
- `/pages/faq` — 404
- `/pages/contact` — `/pages/about-us` (Contact)
- `/blogs/journal` — 404 (`/blogs/news` var)
- `/policies/privacy-policy` — 404 (aynı 404 template)
- `/products` — koleksiyon indeksi (“Collections”), PDP değil
- `/collections/all` — Products PLP (skin ile aynı template ailesi; skin birincil)

## Bilinçli atlananlar

- `/account/login` — auth
- Checkout / Shop Pay / kupon `15OFF` kullanma
- Newsletter e-posta submit (home + tekrarlayan bant)
- Contact form Send (Name/Email/Phone/Comment) — PII
- Mega hover — panel yok
- Newsletter bandı her şablonda tekrar (home kanonik; collection/PDP/search/cart/about/blog/404 kopya çekilmedi)
- Body Lotion sold-out / Passionfruit varyant (ATC yok)
- `/pages/returns` newsletter tekrarı

## CRO şema leftover (disk’te var, Sense’te observation yok)

| schemaId | Gerekçe |
|---|---|
| before-after-slider | Storefront’ta before/after karşılaştırma bloğu yok |
| commerce-tools-products-bundle | Bundle / kit builder yok |
| promo-banner-countdown | Countdown timer yok (`promo-announcement-bar` var, countdown değil) |
| faq-collapsible-tabs | `/pages/faq` 404; accordion FAQ yok |
| comparison-quick-table | Karşılaştırma tablosu yok |
| product-finder-quiz | Quiz / finder akışı yok |
| testimonial-quote-carousel | Tek alıntı `editorial-rich-text`; carousel/ok yok |
| media-shop-the-feed | Shop-the-feed / UGC grid yok |
| media-scrolling-gallery | Yatay kaydırmalı galeri yok (`media-mosaic-grid` collage) |

## CRO interact (observation var)

| schemaId | sayfa | States | Not |
|---|---|---|---|
| lead-capture-newsletter-band | home | initial | Email fill/submit PII — input missing |
| lead-capture-form | about-brand | initial | 4 alan PII; Send dur — input missing |
