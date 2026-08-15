# Grüns leftovers / adaylar

*Store:* https://gruns.co  
*Tema (görülen, uydurulmadı):* **Live Theme (May 18 2026)** · `schema_name` **Gruns** · `schema_version` **1.0.0** · custom (`theme_store_id` null) · shop `grunsnutrition.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz — sapma `delta`'da.

---

ADAY: gruns-404  
Gerekçe: `/pages/about-us` · `/pages/privacy-policy` · `/pages/this-page-does-not-exist-qante` — 404. Native policy `/policies/privacy-policy` çalışır. Taksonomide 404 pageType yok.  
Örnekler: https://gruns.co/pages/this-page-does-not-exist-qante  
Öneri: `page-content-main` observation yazıldı (`not-found/`). pageType standarda aday.  
Karar: onay bekliyor

---

ADAY: gruns-broken-search  
Gerekçe: `/search?q=gruns` title “20 results” diyor; `#main` HTML `<!-- Failed to render section "main": section file "main-search.liquid" does not exist -->`. Yükseklik 0. Claiming 3vp yok. Header'da arama ikonu / predictive overlay yok.  
Örnekler: https://gruns.co/search?q=gruns  
Öneri: `search-results` + `global-predictive-search` yazılmadı. leftover.  
Karar: onay bekliyor

---

ADAY: gruns-keepcart-no-drawer  
Gerekçe: Keepcart CSS preload var; cart drawer DOM yok. `#cart-icon-bubble` href=`/cart` ama home tık URL değiştirmiyor (JS intercept). Native `/cart` sayfa çalışır (`cart-page-main`).  
Örnekler: https://gruns.co/ · https://gruns.co/cart  
Öneri: `global-cart-drawer` observation yok. cart page claiming.  
Karar: onay bekliyor

---

ADAY: gruns-hark-contact  
Gerekçe: `/pages/contact` Hark iframe `app.sendhark.com`. Shopify contact form değil. Form gönderilmedi (PII).  
Örnekler: https://gruns.co/pages/contact  
Öneri: `page-content-main` zorlama yazıldı. leftover iframe.  
Karar: onay bekliyor

---

ADAY: gruns-junip-reviews  
Gerekçe: PDP + `/pages/reviews` Junip widget (puan / sort / auto-summary). Merchant testimonial slot değil, üçüncü parti.  
Örnekler: https://gruns.co/products/gruns · https://gruns.co/pages/reviews  
Öneri: `testimonial-quote-carousel` zorlama + leftover widget.  
Karar: onay bekliyor

---

ADAY: gruns-storelocators  
Gerekçe: `/pages/store-locator` StoreLocators widget (iframe). Zip/PII girilmedi.  
Örnekler: https://gruns.co/pages/store-locator  
Öneri: `editorial-custom-content` zorlama. leftover harita tipi.  
Karar: onay bekliyor

---

ADAY: gruns-socialsnowball-referrals  
Gerekçe: `/pages/referrals` SocialSnowball iframe `#affiliate-sign-up-form`. Form doldurulmadı.  
Örnekler: https://gruns.co/pages/referrals  
Öneri: `page-content-main` intro claiming; widget leftover.  
Karar: onay bekliyor

---

ADAY: gruns-third-party-widgets  
Gerekçe: Siena chat iframe · Light Labs lab widget (home/PDP buybox) · Vimeo UGC (`fto_ugc_testimonials`) · EqualWeb a11y metni · web-pixels.  
Örnekler: https://gruns.co/ · https://gruns.co/products/gruns  
Öneri: leftover — iframe / app.  
Karar: onay bekliyor

---

ADAY: gruns-zero-px-sticky  
Gerekçe: Home `usnacks_anchor_target_*` 0px. PDP sticky CTA (`Save 55% + Free Shipping`) statik bounding box 0; buybox'a scroll / interact karelerinde görünür. Claiming yok.  
Örnekler: https://gruns.co/ · https://gruns.co/products/gruns  
Öneri: ertele — scroll-dependent feature  
Karar: onay bekliyor

---

ADAY: gruns-merch-header  
Gerekçe: `/collections/merch` (Ü Snacks Shack) standart `header_v2` yok; ayrı merch header + hero.  
Örnekler: https://gruns.co/collections/merch  
Öneri: merch hero + grid claiming; header leftover / ayrı chrome.  
Karar: onay bekliyor

---

ADAY: gruns-usnacks-no-header  
Gerekçe: `/pages/usnacks` brand LP — announcement/header yok. Çok marka vitrin (Nütrops / Immün / Jüced off-site).  
Örnekler: https://gruns.co/pages/usnacks  
Öneri: landing observations yazıldı.  
Karar: onay bekliyor

---

ADAY: gruns-campaign-lp-family  
Gerekçe: Sitemap'te düzinelerce `/pages/first-order-*`, `*-gwp`, quiz. Temsilî `/pages/first-order-minions` claiming. Kardeşler envanterlenmedi.  
Örnekler: https://gruns.co/pages/first-order-minions  
Öneri: leftover sweep  
Karar: onay bekliyor

---

ADAY: gruns-help-custom-liquid  
Gerekçe: `/pages/help-center` + contact altı FAQ `custom_liquid` link index (`?a=`), merchant `<details>` accordion değil. `/pages/faq` → help-center.  
Örnekler: https://gruns.co/pages/help-center  
Öneri: `faq-collapsible-tabs` zorlama.  
Karar: onay bekliyor

---

ADAY: gruns-pii-skip  
Gerekçe: Checkout · `/a/account/login` · footer SMS (Postscript) / email (Klaviyo) · Hark / SocialSnowball / locator zip — gönderilmedi.  
Örnekler: https://gruns.co/  
Öneri: yapılmayacak  
Karar: onay bekliyor

---

ADAY: gruns-science-extra-blocks  
Gerekçe: `/pages/science` claiming: hero + intro + comparison + flavor grid. Aynı şablonda `gruns_science_charts` (Better Taste, Better Absorption) · `gruns_science_cards` (State of the Grünion, ~3k px) · iki `gruns_science_image_w_faqs` (Just the Bear Necessities / The Stuff We Leave Out) envanterlenmedi — mevcut tipe zorlamadan leftover.  
Örnekler: https://gruns.co/pages/science  
Öneri: leftover sweep / aday bilim-chart tipi  
Karar: onay bekliyor

---

ADAY: gruns-exclusives-extra-blocks  
Gerekçe: `/pages/exclusives` claiming: hero + tier compare + FAQ. `brry_why_subscribe` · `brry_member_benefits` · `brry_member_ugc` + 0px `usnacks_anchor_target` leftover.  
Örnekler: https://gruns.co/pages/exclusives  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: gruns-page-types-folder  
Gerekçe: `sayfa` klasörleri `merch` · `our-story` · `science` · `reviews` · `store-locator` · `blog-list` · `usnacks` · `exclusives` · `referrals` · `not-found` · `cart` taksonomi `pageTypes` dışında (observation `sayfa`, şema değil).  
Öneri: taxonomy adayı değil; klasör adlandırma.  
Karar: not
