# Canopy leftovers / adaylar

*Store:* https://canopy-theme-natural.myshopify.com  
*Tema (görülen, uydurulmadı):* **canopy-v7.3.0** · `schema_name` **Canopy** 7.3.0 · `theme_store_id` **null** · id `142543028424` · shop `canopy-theme-natural.myshopify.com`  
*Preset:* default (Natural)  
*Tarih:* 2026-08-17

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: canopy-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. `schema_name` Canopy · `schema_version` 7.3.0 · `name` canopy-v7.3.0. Theme Store listing Canopy; storefront alanı id yazmıyor.  
Örnekler: https://canopy-theme-natural.myshopify.com/  
Öneri: leftover — gözlenen alan  
Karar: onay bekliyor

---

ADAY: canopy-age-verification-popup  
Gerekçe: Overlay `age-verification-pop-up` (`#shopify-section-sections--18143730663624__age_verification_popup_JdH4iY`). Class `invisible` ama computed `visibility:visible` + `pointer-events:auto` + 1440×1000; hover’ı keser. `dismiss-overlays` kill ediyor (assertClean geçer). “I am over 18” tıklanmadı.  
Örnekler: https://canopy-theme-natural.myshopify.com/  
Öneri: leftover — overlay  
Karar: onay bekliyor

---

ADAY: canopy-cart-drawer-docked  
Gerekçe: 1440 `body.cart-drawer-docked` — sağda 360px sepet her zaman açık. İçerik ~1080px. `#cart-icon` 1440’ta `/cart` sayfasına gider. 375/768 ikon drawer açar.  
Örnekler: https://canopy-theme-natural.myshopify.com/  
Öneri: leftover — chrome delta (`global-cart-drawer`)  
Karar: onay bekliyor

---

ADAY: canopy-hamburger-1440-zero  
Gerekçe: `button.main-menu__toggle.md:hidden` 1440’ta 0×0. 375/768 44×44.  
Örnekler: https://canopy-theme-natural.myshopify.com/  
Öneri: leftover — beklenen  
Karar: onay bekliyor

---

ADAY: canopy-product-main-zero-height  
Gerekçe: PDP `#shopify-section-template--18143730139336__main` h=18; `.product.js-product` h=0. Görünür kutu `.product-info` + `#product-media` (kardeş). Observation `.product-info`. Gift card main de h=18.  
Örnekler: https://canopy-theme-natural.myshopify.com/products/soured-cream  
Öneri: leftover — layout  
Karar: onay bekliyor

---

ADAY: canopy-product-compare-zero  
Gerekçe: `#shopify-section-sections--18143730663624__product-compare` h=0, metin yok.  
Örnekler: https://canopy-theme-natural.myshopify.com/  
Öneri: leftover — boş overlay  
Karar: onay bekliyor

---

ADAY: canopy-pop-up-empty  
Gerekçe: `#shopify-section-sections--18143730663624__pop_up_QRmXP6` h=0, metin yok.  
Örnekler: https://canopy-theme-natural.myshopify.com/  
Öneri: leftover — boş popup  
Karar: onay bekliyor

---

ADAY: canopy-judgeme-or-reviews  
Gerekçe: PDP `1709915179a2aca9de` Customer Reviews 4.00/5 (2) — Clare Edwards 04/04/2023. App widget. `testimonial-quote-carousel` değil.  
Örnekler: https://canopy-theme-natural.myshopify.com/products/soured-cream  
Öneri: leftover — reviews ailesi  
Karar: onay bekliyor

---

ADAY: canopy-quick-add  
Gerekçe: Kart `+ Cart` / `js-quick-add` / `quick-add-drawer`. Quick view şemasına zorlanmadı.  
Örnekler: https://canopy-theme-natural.myshopify.com/  
Öneri: leftover — `global-quick-view` adayı  
Karar: onay bekliyor

---

ADAY: canopy-404-routes  
Gerekçe: Aynı 404 (404 / Page not found / Back to home + Start Shopping list): `/pages/about` `/pages/contact` `/pages/shipping` `/pages/journal` `/policies/privacy-policy`. Observation `not-found/page-content-main`.  
Örnekler: https://canopy-theme-natural.myshopify.com/pages/about  
Öneri: leftover — yok sayfa  
Karar: onay bekliyor

---

ADAY: canopy-policy-pages  
Gerekçe: Sitemap `/pages/privacy-policy` `/pages/returns-policy` `/pages/shipping-returns` `/pages/delivery` `/pages/returns` — walk dışı (aynı page kabuğu / 404 kardeş). `/policies/*` 404.  
Örnekler: https://canopy-theme-natural.myshopify.com/pages/privacy-policy  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: canopy-faq-page-vs-faqs  
Gerekçe: `/pages/faq` page-content accordion (Do you ship overseas?). `/pages/faqs` dedicated `faqs` section — observation yazıldı. `/pages/your-questions-answered` sitemap.  
Örnekler: https://canopy-theme-natural.myshopify.com/pages/faq  
Öneri: leftover — kardeş şablon  
Karar: onay bekliyor

---

ADAY: canopy-blog-siblings  
Gerekçe: `/blogs/news` + `/blogs/field-notes` + `/blogs/inspiration`. Walk inspiration. News/field-notes aynı `blog-list-main`.  
Örnekler: https://canopy-theme-natural.myshopify.com/blogs/news  
Öneri: leftover — aynı tip  
Karar: onay bekliyor

---

ADAY: canopy-article-comments-pii  
Gerekçe: Article comments: Name / Email / Comment / Post comment. Doldurulmadı.  
Örnekler: https://canopy-theme-natural.myshopify.com/blogs/inspiration/buying-fresh-buying-sustainable  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: canopy-presets-nav  
Gerekçe: Header Presets → `/theme-willow` `/theme-cedar` `/theme-canopy`. Başka preset walk yok (görev default/Natural).  
Örnekler: https://canopy-theme-natural.myshopify.com/  
Öneri: leftover — diğer resmi preset  
Karar: onay bekliyor

---

ADAY: canopy-promo-strip-repeat  
Gerekçe: Global footer `promo_strip_EDmEcb` + sayfa içi kopyalar (cart/blog/PDP). Home header strip + mid-page yazıldı.  
Örnekler: https://canopy-theme-natural.myshopify.com/  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: canopy-newsletter-repeat  
Gerekçe: "Recipes & Inspiration" bant about/contact/blog/faq/PDP. Home observation. Submit yok.  
Örnekler: https://canopy-theme-natural.myshopify.com/pages/about-us  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: canopy-alternate-product-gift-card  
Gerekçe: Gift card template main h=18 + denominations. Walk PDP Soured Cream (Weight).  
Örnekler: https://canopy-theme-natural.myshopify.com/products/canopy-natural-gift-card  
Öneri: leftover — alternatif PDP  
Karar: onay bekliyor

---

ADAY: canopy-sitemap-pages-skipped  
Gerekçe: `curbside-pickup-now-available` · `delivery-and-returns` · `our-collections` · `our-story` · `onboarding-default-1/2` · `quick-order` · `contact-us-1`. Chrome dışı / tekrar.  
Örnekler: https://canopy-theme-natural.myshopify.com/pages/our-story  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: canopy-pii-stop  
Gerekçe: Newsletter Subscribe, contact Send, account, checkout, Buy it now, comment Post — tıklanmadı.  
Örnekler: https://canopy-theme-natural.myshopify.com/pages/contact-us  
Öneri: PII stop  
Karar: onay bekliyor

---

## Bilinçli atlananlar

- Account ikonu  
- Checkout / Shop Pay  
- Newsletter / contact / comment submit  
- Preset switcher (Willow / Cedar)  
- `/collections/all` (148 ürün) — PLP olarak Fresh Produce  
- Fransızca sitemap (`/fr/`)
