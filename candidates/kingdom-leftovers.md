# Kingdom leftovers / adaylar

*Store:* https://kingdom-theme.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/kingdom  
*Tema (görülen, uydurulmadı):* **Kingdom** · `schema_name` **Dragon Drop Kingdom Theme** · `schema_version` **1.00** · `theme_store_id` **null** · id `38278856768` · role `main`  
*`Shopify.shop`:* `kingdom-theme.myshopify.com` · handle `"null"` · style.id / style.handle **null**  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

Live storefront JSON:

```json
{"name":"Kingdom","id":38278856768,"schema_name":"Dragon Drop Kingdom Theme","schema_version":"1.00","theme_store_id":null,"role":"main"}
```

---

ADAY: kingdom-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Theme Store numeric id uydurulmadı. `schema_name` string **Dragon Drop Kingdom Theme** (Dawn/Horizon değil).  
Örnekler: https://kingdom-theme.myshopify.com/  
Öneri: leftover — kimlik  
Karar: onay bekliyor

---

ADAY: kingdom-spacers  
Gerekçe: Home boş margin section’lar: `#shopify-section-1543366239305` (21px), `#1543366211641` (21px), `#1533518284207` (31px), `#1533512252957` (51px). Metin/görsel yok.  
Örnekler: home  
Öneri: leftover — spacer  
Karar: onay bekliyor

---

ADAY: kingdom-gift-tiles-unlinked  
Gerekçe: Home isotope 6 kare (babies/her/him/kids 8–12 / 4–7 / toddlers). Canlıda `<a>` yok. `collection-nav-image-cards` + delta.  
Örnekler: https://kingdom-theme.myshopify.com/ `#shopify-section-1543384696781`  
Öneri: leftover — link yok  
Karar: onay bekliyor

---

ADAY: kingdom-shop-not-mega  
Gerekçe: 1440 Shop hover = `ul.sub-menu` tek satır **Sub nav** (href `#`). Kolon/görsel/promo yok. `navigation-header-mega` yazıldı; delta dropdown.  
Örnekler: home `nav.site-menu li.has-children`  
Öneri: leftover — mega yok  
Karar: onay bekliyor

---

ADAY: kingdom-nav-hash  
Gerekçe: Header/footer **Blog / About / Contact** `href="#"`. `/blogs/news` sitemap’te var ama nav gitmiyor. About/contact sayfası yok.  
Örnekler: https://kingdom-theme.myshopify.com/  
Öneri: leftover — ölü nav  
Karar: onay bekliyor

---

ADAY: kingdom-cart-mega  
Gerekçe: `cart-drawer` yok. Hover `.toolbar-dropdown.cart-dropdown`; ATC `.mega-menu.cart-mega.show-mega` (Added). `global-cart-drawer` + delta. Qty +/- drawer’da yok.  
Örnekler: header `.cart` · PDP ATC  
Öneri: leftover — dropdown/mega ≠ drawer  
Karar: onay bekliyor

---

ADAY: kingdom-about-contact-faq-404  
Gerekçe: `/pages/about` `/pages/about-us` `/pages/contact` `/pages/contact-us` `/pages/faq` `/pages/faqs` HTTP 404 — aynı `body.template-404`. pages.json `[]`.  
Örnekler: https://kingdom-theme.myshopify.com/pages/about  
Öneri: leftover — sayfa yok  
Karar: onay bekliyor

---

ADAY: kingdom-404-routes  
Gerekçe: Aynı 404 (404 Page Not Found + continue shopping): about/contact/faq + `/blogs/blog` + `/policies/privacy-policy` + `/pages/does-not-exist-qante-kingdom`. Observation `not-found/page-content-main` bir kare.  
Örnekler: https://kingdom-theme.myshopify.com/pages/does-not-exist-qante-kingdom  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

ADAY: kingdom-404-featured-placeholder  
Gerekçe: Cart + 404 sibling `#shopify-section-homepage-featured-collection` — “Our Best Sellers” + “Your product’s name” $19.99 (placeholder). Envanter yazılmadı.  
Örnekler: https://kingdom-theme.myshopify.com/cart  
Öneri: leftover — placeholder  
Karar: onay bekliyor

---

ADAY: kingdom-blog-empty  
Gerekçe: `/blogs/news` 200 ama 0 article. Sidebar Categories boş. `blog-list-main` yazıldı; `blog-post-main` yok.  
Örnekler: https://kingdom-theme.myshopify.com/blogs/news  
Öneri: leftover — article yok  
Karar: onay bekliyor

---

ADAY: kingdom-collections-single  
Gerekçe: `/collections` yalnız **Interesting Stuff** (23). `frontpage` (Home page, 1 ürün) listede yok. Şema `collection-nav-cards` items min 2 — 1 kart.  
Örnekler: https://kingdom-theme.myshopify.com/collections  
Öneri: leftover — tek kart  
Karar: onay bekliyor

---

ADAY: kingdom-collections-all  
Gerekçe: `/collections/all` (Products) aynı PLP şablonu `#shopify-section-collection`. interesting-stuff yazıldı; all tekrar edilmedi.  
Örnekler: https://kingdom-theme.myshopify.com/collections/all  
Öneri: leftover — duplicate PLP  
Karar: onay bekliyor

---

ADAY: kingdom-email-popup  
Gerekçe: `#dd-email-popup` modal fade email-popup h=0. PII — açılmadı / submit yok.  
Örnekler: home  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: kingdom-newsletter-contact  
Gerekçe: Footer `#footer-email-subscribe-form` → dragondropthemes.com/api/form-submit + `#contact_form` /contact. PII — dur.  
Örnekler: footer  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: kingdom-currency  
Gerekçe: Topbar `.currency-picker` AUD/INR/GBP/CAD/USD/EUR/JPY. Değiştirilmedi.  
Örnekler: header topbar  
Öneri: leftover — localization chrome  
Karar: onay bekliyor

---

ADAY: kingdom-countdown-zero  
Gerekçe: Home “Hurry! sale ends in” 00:00:00:00. BUY NOW tıklanmadı.  
Örnekler: `#shopify-section-1533535964713`  
Öneri: leftover — bitmiş sayaç  
Karar: onay bekliyor

---

ADAY: kingdom-search-empty  
Gerekçe: `/search` (q yok) header+footer; sonuç kutusu yok. Observation `?q=owl`.  
Örnekler: https://kingdom-theme.myshopify.com/search  
Öneri: leftover — boş search  
Karar: onay bekliyor

---

ADAY: kingdom-no-section-templates  
Gerekçe: Search / collections index / cart / 404 ana içerik `shopify-section-*` değil (eski Dragon Drop liquid). Observation body.template-* selector.  
Örnekler: `body.template-search` · `body.template-cart` · `body.template-list-collections` · `body.template-404`  
Öneri: leftover — sectionless template  
Karar: onay bekliyor

---

ADAY: kingdom-outofstock-modal  
Gerekçe: `#outofstock-modal` 0×0. Self-Watering Veggie Kit SOLD OUT home carousel’da. Modal açılmadı.  
Örnekler: home featured  
Öneri: leftover — overlay  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok / aynı 404)

`/pages/about`  
`/pages/about-us`  
`/pages/contact`  
`/pages/contact-us`  
`/pages/faq`  
`/pages/faqs`  
`/blogs/blog`  
`/policies/privacy-policy`  
`/pages/does-not-exist-qante-kingdom`

---

## Bilinçli atlananlar

- Newsletter / contact / email popup submit (PII)  
- Account — nav’da yok  
- Checkout / cart Check Out / mega Check Out  
- Currency değiştirme  
- `/collections/all` (aynı PLP)  
- Blog article (0)  
- About / contact / FAQ (404)  
- Cart/404 placeholder featured  
- PLP filter modal / sort interact (zorunlu interact değil)  
- Home spacer section’lar  
