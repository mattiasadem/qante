# Local leftovers / adaylar

*Kaynak:* https://local-theme-main.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/local — paid · Krown · $380  
*Tema (görülen, uydurulmadı):* **local-build/light** · `schema_name` **Local** · `schema_version` **4.1.0** · `theme_store_id` **null** · role `main` · id `139927814205`  
*Walk host:* `local-theme-main.myshopify.com`  
*Shopify.shop (JS):* `local-theme-light-demo.myshopify.com`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: local-theme-store-id-null  
Gerekçe: Vitrin `Shopify.theme.theme_store_id` **null**. Theme Store listing ID yazılmadı.  
Örnekler: storefront `Shopify.theme`  
Öneri: leftover — ID uydurma  
Karar: onay bekliyor

---

ADAY: local-shop-host-mismatch  
Gerekçe: Walk URL `local-theme-main.myshopify.com`. `Shopify.shop` **local-theme-light-demo.myshopify.com**. Görev notu shop=main; canlı JS light-demo.  
Örnekler: home `Shopify.shop`  
Öneri: leftover — host/shop farkı  
Karar: onay bekliyor

---

ADAY: local-empty-slideshow  
Gerekçe: Home `#shopify-section-template--18571816665149__slideshow_eYTB7f` 0px / boş metin.  
Örnekler: home slideshow_eYTB7f  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: local-popups  
Gerekçe: `#shopify-section-popups` · `popup-age-verification` · `exit-intent-popup` 0px. Age/exit/e-posta PII — dur. Observation yok.  
Örnekler: home popup group  
Öneri: leftover — PII / 0px  
Karar: onay bekliyor

---

ADAY: local-store-selector  
Gerekçe: `#shopify-section-store-selector` “Select pickup location” 0px. Header “Picking up? Select store” / “Need delivery? See estimates”. PDP “Choose a store to see local availability”. Tıklanmadı. Store locator şeması yok.  
Örnekler: header utility + store-selector  
Öneri: leftover — yeni tip gerekebilir  
Karar: onay bekliyor

---

ADAY: local-upcoming-events  
Gerekçe: Home Upcoming Events (WINE TASTING / Free cooking class / Pumpkin carving contest + Register). `editorial-timeline` yıl sekmeleri — uymaz. Observation yazılmadı.  
Örnekler: `#shopify-section-template--18571816665149__166124485020a4ae62`  
Öneri: leftover — event/register  
Karar: onay bekliyor

---

ADAY: local-theme-features  
Gerekçe: `/pages/theme-features` Krown pazarlama (starter sites Light/Caffeine/Lively, 25+ sections). Walk dışı.  
Örnekler: `/pages/theme-features`  
Öneri: leftover — tema satış sayfası  
Karar: onay bekliyor

---

ADAY: local-our-stores-map  
Gerekçe: `/pages/our-stores` Google map Champs Élysées / Saint Germain + ikinci contact form. Store locator şeması yok.  
Örnekler: `/pages/our-stores`  
Öneri: leftover — yeni tip gerekebilir  
Karar: onay bekliyor

---

ADAY: local-delivery-page  
Gerekçe: `/pages/delivery` Shipping & Delivery (Local Delivery / Domestic US / Express DHL). Policy-benzeri; walk about/contact sonrası leftover.  
Örnekler: `/pages/delivery`  
Öneri: leftover — policy/shipping  
Karar: onay bekliyor

---

ADAY: local-image-comparison  
Gerekçe: `/pages/image-comparison` sayfa var. Walk edilmedi.  
Örnekler: pages.json handle `image-comparison`  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: local-register-event  
Gerekçe: `/pages/register-for-an-event`. Contact form metni event kaydı. Submit PII — dur.  
Örnekler: pages.json  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: local-sibling-blogs  
Gerekçe: `/blogs/recipes` + `/blogs/events` sitemap’te. Walk birincil News + bir yazı. Recipes home “Delicious Recipes” ile bağlandı.  
Örnekler: sitemap_blogs_1.xml  
Öneri: leftover — kardeş blog  
Karar: onay bekliyor

---

ADAY: local-article-comments  
Gerekçe: Article `main-article-comments` Comments (2) Kyle / Justin. Yorum formu PII — dur. Observation yok.  
Örnekler: `/blogs/news/11-top-chef-grilling-recipes-to-make-this-summer`  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: local-404-pagetype  
Gerekçe: `/pages/this-page-does-not-exist-xyz-local` + `/pages/about` + `/pages/contact-us` → “Page not found / Continue browsing”. Taksonomide 404 pageType yok. `page-content-main` observation var.  
Örnekler: template--18571815977021__main  
Öneri: candidate — pageType  
Karar: onay bekliyor

---

ADAY: local-cart-upsell-shipping  
Gerekçe: Drawer “Often bought together”. Cart page Related products + Estimate shipping (Country France). Upsell/kargo hesap leftover.  
Örnekler: `#site-cart-sidebar` · `/cart`  
Öneri: leftover — upsell / shipping estimator  
Karar: onay bekliyor

---

ADAY: local-hamburger-small-disabled  
Gerekçe: PDP Hamburger Size Small (7 oz) `disabled`. Interact Medium → Large.  
Örnekler: `/products/hamburger`  
Öneri: leftover — disabled variant  
Karar: onay bekliyor

---

## 404 / boş / ince URL’ler

- `/pages/about` — 404 (about `/pages/about-us`)
- `/pages/contact-us` — 404 (contact `/pages/contact`)
- `/blogs/journal` — yok (`/blogs/news` var)
- `/collections/all` — All products PLP (fruits-berries birincil)
- `/products/gift-card` — Value $10–$100; walk PDP hamburger

## Bilinçli atlananlar

- `/account/login` — auth
- Checkout / Shop Pay / Buy it now
- Newsletter e-posta submit (footer)
- Contact / our-stores / register form Submit — PII
- Kupon `BULKSAVE` / “25% OFF YOUR ORDER!!!” kopyala
- Locale English değiştirme
- Select store / See estimates
- Age / exit popup
- Theme features / image-comparison / register-for-an-event
- Local Pickup bloğu PLP/PDP kopyası (home kanonik)
- Empty slideshow_eYTB7f
