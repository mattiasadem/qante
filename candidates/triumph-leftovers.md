# Triumph leftovers / adaylar

*Store:* https://triumph-theme.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Designer check** · `schema_name` **Triumph** · `schema_version` **1.0.0** · `theme_store_id` **null** · id `184658100489` · role `main` · shop `triumph-theme.myshopify.com`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: triumph-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Theme Store listing id uydurulmadı. `schema_name` Triumph · `schema_version` 1.0.0 · name `Designer check`.  
Örnekler: https://triumph-theme.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: triumph-mobile-catalog-button  
Gerekçe: Home `#shopify-section-template--26010642481417__mobile_catalog_button_J4MaMb` 0×0. Product catalog butonu yalnız mobil CSS; 1440 görünmez.  
Örnekler: https://triumph-theme.myshopify.com/  
Öneri: leftover — 0px  
Karar: onay bekliyor

---

ADAY: triumph-newsletter-popup  
Gerekçe: `#shopify-section-sections--26010642972937__popup_7HVQ3V` “Get 20% Off”. Kapalı h=0. Email / PII — açılmadı, submit yok.  
Örnekler: https://triumph-theme.myshopify.com/  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: triumph-utilities-bar  
Gerekçe: `#shopify-section-sections--26010642907401__utilities` 44px: locale USD/EN + © 2026 + Privacy/Terms + payment ikonları. Footer’dan ayrı strip.  
Örnekler: https://triumph-theme.myshopify.com/  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: triumph-call-to-action  
Gerekçe: Home `__call_to_action_UX3tyj` ~156px, görünür metin yok, link `/collections/womens`. About `__call_to_action_4DL94N` ~210px aynı aile. Standalone CTA şeması yok.  
Örnekler: https://triumph-theme.myshopify.com/  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: triumph-discount-coupon  
Gerekçe: Home `__discount_coupon_9zjPN6` USE CODE: TRIUMPH / GET 50% OFF. Kupon / checkout komşu. PDP’de de “TRIUMPH” kupon bloğu. Uygulanmadı.  
Örnekler: https://triumph-theme.myshopify.com/  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: triumph-media-tabs-locations  
Gerekçe: Home `__media_tabs_F643C7` SAN FRANCISCO / LOS ANGELES / NEW YORK mağaza sekmeleri. Store locator / city tabs — mevcut şemaya zorlanmadı.  
Örnekler: https://triumph-theme.myshopify.com/  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: triumph-pdp-variant-dom  
Gerekçe: `/products/flexmotion-leggings` JSON Color Blue/Green + Size XS–2XL, fiyat $14.89. Page HTML’de `variant-selects` + “Add to cart” string var. Playwright `querySelectorAll('variant-selects'|'product-form'|'.product-form__submit')` = 0. Size S bulunamadı. Option change interact leftover. Sepet `/cart/add.js` fallback.  
Örnekler: https://triumph-theme.myshopify.com/products/flexmotion-leggings  
Öneri: leftover — buy box canlı node  
Karar: onay bekliyor

---

ADAY: triumph-ask-a-question  
Gerekçe: PDP `#ModalOpener-Info-…__question-form` ASK A QUESTION (Name/Email/Phone). PII — açılmadı.  
Örnekler: https://triumph-theme.myshopify.com/products/flexmotion-leggings  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: triumph-1440-hamburger  
Gerekçe: `summary.header__icon--menu` tablet-down. 1440 `#menu-drawer` 0px. Interact yalnız 375/768.  
Örnekler: https://triumph-theme.myshopify.com/  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: triumph-quick-view  
Gerekçe: Home featured tab kartlarında “Quick view”. Interact listesinde yok; leftover.  
Örnekler: https://triumph-theme.myshopify.com/  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: triumph-walk-disi-sayfalar  
Gerekçe: `/pages/man-landing`, `/pages/kids-landing`, `/pages/location`, `/pages/help` nav/footer’da var. Zorunlu walk dışı.  
Örnekler: https://triumph-theme.myshopify.com/pages/location  
Öneri: leftover — walk dışı  
Karar: onay bekliyor

---

ADAY: triumph-blogs-women  
Gerekçe: Footer BLOG = `/blogs/news`. Home/nav kartları `/blogs/women/…` yazılarına gider. `/blogs/women` 200, aynı şablon. Walk blog = `/blogs/news` + bir women article.  
Örnekler: https://triumph-theme.myshopify.com/blogs/women  
Öneri: leftover  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/pages/about`  
`/pages/contact-us`  
`/blogs/journal`  
`/blogs/blog`  
`/pages/does-not-exist-qante`

About = `/pages/about-us`. Contact = `/pages/contact`. Blog = `/blogs/news`.

---

## Bilinçli atlananlar

- `/account` / header Account — auth  
- Checkout / Check out / cart Check out / Coupon apply  
- Newsletter Subscribe / contact Send / blog comment (PII)  
- Localization country/language değiştirilmedi  
- Size guide / Men’s–Women’s Cosplay Sizing Chart (PDP)  
- Gift / Buy it now yoklandı değil  
