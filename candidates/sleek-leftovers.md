# Sleek leftovers / adaylar

*Store:* https://sleek-theme-demo.myshopify.com/  
*Tema (görülen, uydurulmadı):* **[Update Theme Store] Sleek** · `schema_name` **Sleek** · `schema_version` **2.3.0** · `theme_store_id` **null** · id `179881967905` · role `main` · shop `sleek-glossy.myshopify.com`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

## CRO şema listesi (observation yok — şema icat edilmedi)

Aşağıdaki CRO tipleri Sleek vitrinde **gözlenmedi**; en yakın mevcut tipe yazılmadı:

- `before-after-slider`
- `promo-banner-countdown` (yerine `promo-announcement-bar` + `promo-scrolling-marquee`)
- `lead-capture-newsletter-band` (yerine `footer-columns-newsletter` — submit yok)
- `comparison-quick-table`
- `product-finder-quiz`
- `media-shop-the-feed`
- `media-scrolling-gallery`

---

ADAY: sleek-cro-testimonial-375-changed
Gerekçe: `testimonial-quote-carousel` home — 375'te Slide right/left 0×0; swipe tetiklenmedi. changed yalnız 768/1440.
Örnekler: https://sleek-theme-demo.myshopify.com/ `#shopify-section-template--24914044125473__testimonials_8JHr3L`
Öneri: leftover — mobil carousel nav
Karar: onay bekliyor

---

ADAY: sleek-cro-lead-capture-form-pii
Gerekçe: `lead-capture-form` contact sayfasında var; email/name/message PII — fill/submit yok, yalnız statik 3vp.
Örnekler: https://sleek-theme-demo.myshopify.com/pages/contact
Öneri: leftover — PII
Karar: onay bekliyor

---

ADAY: sleek-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Theme Store listing id uydurulmadı. `schema_name` Sleek · `schema_version` 2.3.0 · name `[Update Theme Store] Sleek`.  
Örnekler: https://sleek-theme-demo.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: sleek-presets-external  
Gerekçe: Header **Presets** mega (`#Mega-menu-item-custom_card_mrKkA6`) Wildpeak / Jumped / Sleek / Modiva / Glint kartları — `sleek-wildpeak.myshopify.com` vb. Resmi walk URL yalnız `sleek-theme-demo.myshopify.com`. Dış vitrin gezilmedi.  
Örnekler: https://sleek-theme-demo.myshopify.com/ `#Mega-menu-item-custom_card_mrKkA6`  
Öneri: leftover — Theme Store satış / diğer preset  
Karar: onay bekliyor

---

ADAY: sleek-newsletter-popup  
Gerekçe: overlay `#shopify-section-sections--24914039275809__popup` → `subscription-popup` (`SubscriptionModal-…`). Kapalı h=0. Email / PII — açılmadı, submit yok.  
Örnekler: https://sleek-theme-demo.myshopify.com/  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: sleek-quick-view  
Gerekçe: overlay `__quick-view` h=0. Mega/Shop kartlarında QuickView close id görüldü. Interact listesinde yok; leftover.  
Örnekler: https://sleek-theme-demo.myshopify.com/  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: sleek-sticky-atc  
Gerekçe: PDP `#shopify-section-sticky-atc-bar` ilk DOM h=0; scroll sonrası `product-info-main` karelerinde görünür (thumbnail + Size + qty + ATC). Ayrı şema yok.  
Örnekler: https://sleek-theme-demo.myshopify.com/products/water-lock-moisturizer  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: sleek-1440-hamburger  
Gerekçe: `button.menu-drawer-button` `lg:hidden`. 1440 `#MenuDrawer` 0px — viewport capture zero-size. Interact yalnız 375/768.  
Örnekler: https://sleek-theme-demo.myshopify.com/  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: sleek-menu-presets-first  
Gerekçe: Mobil drawer ilk `details > summary` = Presets (Wildpeak/Jumped/Sleek/Modiva). Shop expander ikinci. changed karesi Presets paneli.  
Örnekler: https://sleek-theme-demo.myshopify.com/ `#MenuDrawer`  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: sleek-buy-it-now  
Gerekçe: PDP `Buy It Now` / accelerated checkout. Checkout envanter dışı; tıklanmadı.  
Örnekler: https://sleek-theme-demo.myshopify.com/products/water-lock-moisturizer  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: sleek-lookbook-find-store  
Gerekçe: `/pages/lookbook` (image overlay, featured collection, highlight, media_with_collection, lookbook_banner) ve `/pages/find-a-store` sitemap'te var. Zorunlu walk dışı.  
Örnekler: https://sleek-theme-demo.myshopify.com/pages/lookbook  
Öneri: leftover — walk dışı sayfa  
Karar: onay bekliyor

---

ADAY: sleek-shop-all-extra  
Gerekçe: `/collections/all` Accessories PLP'den farklı: banner alt metin + `custom_content_RecVe9` (Eye care / Accessories / Moisturizers / Treatments chip). PLP walk = `/collections/accessories`.  
Örnekler: https://sleek-theme-demo.myshopify.com/collections/all  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: sleek-news-empty  
Gerekçe: `/blogs/news` 200 ama yalnız başlık "News" (256px, kart yok). Asıl blog `/blogs/our-journey`.  
Örnekler: https://sleek-theme-demo.myshopify.com/blogs/news  
Öneri: leftover  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/pages/about-us`  
`/pages/contact-us`  
`/blogs/journal`  
`/pages/does-not-exist-qante`

About = `/pages/about`. Contact = `/pages/contact`. Blog = `/blogs/our-journey`.

---

## Bilinçli atlananlar

- `/account` / header Account — auth  
- Checkout / Buy it now / cart Check out / Coupon / Order note  
- Newsletter Subscribe / contact Send / blog comment (PII)  
- Gift card PDP (`/products/sleek-gift-card`) — Denominations $100–$500; walk PDP = Water Lock Size  
- Preset vitrinleri (Wildpeak, Jumped, Modiva, Glint)  
- Ask a question (PDP form) — PII  
