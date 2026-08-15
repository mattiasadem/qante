# Starface leftovers / adaylar

*Store:* https://starface.world  
*Tema (görülen):* **Starface Live** · `schema_name` **Dawn** 7.0.0 · custom (`theme_store_id` null)  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: starface-about-empty  
Gerekçe: `/pages/about` title “About Us” ama shopify main section yok — yalnız header + footer. İçerik kanıtı 0.  
Örnekler: https://starface.world/pages/about  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: starface-star-corner-vite  
Gerekçe: `/pages/star-corner` `#shopify-section-template--18852407869511__main-vite` 0×0. Header/footer/predictive yok — ayrı Vite SPA.  
Örnekler: https://starface.world/pages/star-corner  
Öneri: aday (UGC/community app)  
Karar: onay bekliyor

---

ADAY: starface-rewards-yotpo  
Gerekçe: `/pages/rewards` “big lil rewards” + Sign up / Log in (Yotpo Loyalty / Swell `#swell-popup`). PII form — doldurulmadı.  
Örnekler: https://starface.world/pages/rewards  
Öneri: üçüncü parti loyalty — şema yok  
Karar: onay bekliyor

---

ADAY: starface-quiz-empty  
Gerekçe: `/pages/quiz` title “Big Yellow Quiz” / H1 “big lil quiz” — 112px, iframe/adım yok.  
Örnekler: https://starface.world/pages/quiz  
Öneri: ertele — quiz kırık/boş  
Karar: onay bekliyor

---

ADAY: starface-yotpo-reviews  
Gerekçe: PDP `#shopify-section-template--18852408393799__1673300713118ffd64` ~1770px “4.9 star rating / 15 reviews / WRITE A REVIEW” (star-strips). Taksonomide reviews yok; `testimonial-quote-carousel` histogram + form değil. Consent gate (Pandectes) Yotpo’yu gizleyebilir.  
Örnekler: https://starface.world/products/star-strips  
Öneri: aday kategori / üçüncü parti (Yotpo)  
Karar: onay bekliyor

---

ADAY: starface-store-locator  
Gerekçe: `/pages/where-to-shop` özel `where-to-shop` section — “find starface near you” + CVS + Google Maps directions. `page-content-main` zorlandı.  
Örnekler: https://starface.world/pages/where-to-shop  
Öneri: locator tipi yok — aday  
Karar: onay bekliyor

---

ADAY: starface-careers-greenhouse  
Gerekçe: `/pages/careers` open roles → `job-boards.greenhouse.io/starfaceworld`. Perks/Splide `page-content-main` yazıldı.  
Örnekler: https://starface.world/pages/careers  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: starface-gorgias-chat  
Gerekçe: PDP/contact `#chat-button` iframe “Gorgias live chat messenger” 80×74. PII — tıklanmadı.  
Örnekler: https://starface.world/pages/contact-us  
Öneri: global overlay değil, üçüncü parti  
Karar: onay bekliyor

---

ADAY: starface-free-product-modal  
Gerekçe: `#shopify-section-free-product-modal` / `#free-product-modal` “congrats! you’re getting a free gift :)” + **Liquid error**. Height 0.  
Örnekler: her sayfa  
Öneri: kırık theme section — şema yok  
Karar: onay bekliyor

---

ADAY: starface-category-menu-zero  
Gerekçe: Home `#shopify-section-template--18852409114695__category_menu` height 0.  
Örnekler: https://starface.world/  
Öneri: ölü section  
Karar: onay bekliyor

---

ADAY: starface-policies-native  
Gerekçe: `/policies/privacy-policy` Dawn main section taşımıyor (yalnız header/footer). İçerik `/pages/privacy-policy` üzerinden yazıldı.  
Örnekler: https://starface.world/policies/privacy-policy  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: starface-blog-news-empty  
Gerekçe: `/blogs/news` H1 “news”, kart 0. SSS makaleleri `/blogs/faq`.  
Örnekler: https://starface.world/blogs/news  
Öneri: observation yazıldı (boş kare)  
Karar: onay bekliyor
