# Rothy's leftovers / adaylar

*Store:* https://rothys.com · *Tema (görülen):* rothys/production · DNA 26.08.19 · theme_store_id null  
*Shop:* rothys.myshopify.com · theme id 141189120094 · role main  
*Tarih:* 2026-08-20

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: rothys-yotpo-reviews  
Gerekçe: PDP `#shopify-section-template--*__171440765484a8f2a6` Yotpo Customer Reviews app block (~1500px). Taksonomide reviews section yok.  
Örnek: https://rothys.com/products/womens-daily-flat-black  
Karar: leftover — şema yok

---

ADAY: rothys-filled-cart-drawer  
Gerekçe: `/cart/add.js` sonrası dna-mini-cart shadow `cart--empty` class'ında kalıyor; filled state 3vp alınamadı. Boş drawer OK.  
Karar: leftover — üçüncü deneme yok

---

ADAY: rothys-search-mobile  
Gerekçe: 375/768 header search tık sonrası `dna-search` host bounding box 0×0 (içerik shadow'da). prepareForceOpen yeterli değil. 1440 overlay OK.  
Karar: leftover

---

ADAY: rothys-mega-hover  
Gerekçe: Desktop mega `.desktop-nav__menu-wrapper` hover (WOMEN 1440) — capture-observation hover desteklemiyor; statik header obs var.  
Karar: leftover — interact backlog

---

ADAY: rothys-product-diagram  
Gerekçe: `dna-product-diagram` custom element bazı PDP'lerde (The Point). Mevcut şema yok.  
Karar: leftover — candidate only

---

ADAY: rothys-video-player  
Gerekçe: Ivy LP `video_player_*` section (~811px). media-video-hero yakın ama embed kontrolleri farklı; ayrı walk gerekir.  
Örnek: https://rothys.com/pages/meet-the-ivy-sneaker  
Karar: leftover

---

ADAY: rothys-plp-filters  
Gerekçe: PLP filtre/sort paneli `changed` state açılmadı; statik grid kanıtı var.  
Karar: leftover

---

ADAY: rothys-cart-page  
Gerekçe: `/cart` → homepage redirect. Sepet yalnız `global-cart-drawer` (dna-mini-cart). `cart-page-main` yok.  
Karar: leftover + delta parent obs

---

ADAY: rothys-gladly-chat  
Gerekçe: FAQ size-chart / footer Live Chat Gladly widget. Overlay, section değil.  
Karar: leftover — dismiss; şema yok

---

ADAY: rothys-swym-wishlist  
Gerekçe: Header wishlist + PDP Swym buttons. Third-party; şema yok.  
Karar: leftover

---

ADAY: rothys-blog-related-articles  
Gerekçe: Blog post `main_blog_*` Related Articles bandı — blog-list-main'e yakın; ayrı obs açılmadı (blog-post-main + product carousel yeterli).  
Karar: leftover

---

ADAY: rothys-landing-pages  
Gerekçe: `/pages/meet-the-ivy-sneaker`, `/pages/sustainability`, `/pages/the-fall-edit` vb. campaign LP'ler — Mod A walk dışı (home/about/blog/FAQ/policy yeterli).  
Karar: leftover

---

ADAY: rothys-contact-form  
Gerekçe: `/pages/contact` form — PII / submit yok. Mod A walk kapsamında contact sayfası envanterlenmedi.  
Karar: leftover

---

ADAY: rothys-announcement-terms  
Gerekçe: Announcement bar "Terms Apply" button — dismiss/toggle leftover; statik 3vp alındı.  
Karar: leftover
