# Boka leftovers / adaylar

*Store:* https://www.boka.com · *Tema (görülen):* Boka-new live Theme/Impact · schema_name Impact · 7.0.1 · theme_store_id 1190  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: boka-404  
Gerekçe: `/pages/about`, `/pages/faqs`, `/pages/contact`, `/pages/this-page-does-not-exist-xyz` → Impact 404 (`#shopify-section-template--26470592315435__main`, “Page not found” / Continue shopping). Taksonomide 404 pageType yok.  
Örnekler: https://www.boka.com/pages/about · https://www.boka.com/pages/contact  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: boka-empty-news-blog  
Gerekçe: `/blogs/news` → “This blog is empty / Back to home”. Guides (`/blogs/guides`) dolu; news şablonu boş.  
Örnekler: https://www.boka.com/blogs/news  
Öneri: leftover — `blog-list-main` Guides’ta alındı  
Karar: onay bekliyor

---

ADAY: boka-store-locator  
Gerekçe: `/pages/find-us-in-stores` yalnız H1 (“Find Us In Stores”), 206px, harita/liste yok. Header “Find In Store” bu sayfaya gider.  
Örnekler: https://www.boka.com/pages/find-us-in-stores  
Öneri: `page-content-main` leftover — widget yok  
Karar: onay bekliyor

---

ADAY: boka-tolstoy-carousel  
Gerekçe: Home `#shopify-section-template--26470592643115__17866334375be41fca` — `<tolstoy-carousel data-publish-id="ult1uqdfdzl9f">` app block. Headless 160px, metin/görsel yok.  
Örnekler: https://www.boka.com/  
Öneri: `media-shop-the-feed` observation var; hydrate olmazsa leftover  
Karar: onay bekliyor

---

ADAY: boka-kids-quiz-plus-grid  
Gerekçe: `/collections/kids` `#…__boka_kids_products_jP8KTR` tek section: 4 soruluk “Find Their Match” quiz + kids ürün vitrini (~5774px). `product-finder-quiz` en yakın; grid aynı kutuda.  
Örnekler: https://www.boka.com/collections/kids  
Öneri: map tartışması — ayrı şema yok  
Karar: onay bekliyor

---

ADAY: boka-mobile-home-nav  
Gerekçe: `#shopify-section-sections--26470593003563__mobile_home_nav_dfPUKg` CSS `display:none` except `max-width: 749px`. 1440/768 height 0. 3vp iddia edilmedi.  
Örnekler: https://www.boka.com/  
Öneri: leftover — hamburger drawer ayrı (`global-menu-drawer`)  
Karar: onay bekliyor

---

ADAY: boka-listicle-landings  
Gerekçe: Sitemap’te UGC/listicle ve Tolstoy TV sayfaları (`/pages/ela-mint-static-listicle`, `/pages/ugc-video-listicle-*`, `/pages/tolstoy-tv-channel*`, `/pages/ntb-*`). Chrome walk’ta tekrarlayan reklam şablonları; ayrı 3vp yok.  
Örnekler: https://www.boka.com/pages/ela-mint-static-listicle  
Öneri: ertele — roster  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok)

`/pages/about` (çalışan: `/pages/about-us`)  
`/pages/faqs` (çalışan: `/pages/faq`)  
`/pages/contact` (çalışan: `/pages/contact-us`)

---

ADAY: boka-cart-drawer-qty  
Gerekçe: Dolu drawer karesinde − 1 + görünür; native `#cart-drawer input.quantity-input` gizli. İki interact denemesi (fill input; click plus/has-text('+')) native/quick-buy gizli düğmeye düştü. Recharge stepper ayrı host.  
Örnekler: https://www.boka.com/ (cart drawer filled)  
Öneri: leftover — `changed` missingStates  
Karar: onay bekliyor

---

## Bilinçli atlananlar

- `/account/login` — auth, envanter dışı  
- Checkout / e-posta / contact form submit (PII)  
- Newsletter Sign up (PII)  
- Zendesk/messaging launcher  
- Sitemap XML agentic `/agents.md`  
- `/collections/all` boş banner + boş long-desc (best-sellers’ta alındı)  
- Home `custom_liquid_9iyizH` height 0  
- Committee `custom_liquid_dnJeVm` height 0  
- Gift card ingredients / long-desc / reviews 0–80px  
- Wholesale / dental-pros / affiliates / join-the-waitlist — roster, ayrı 3vp yok  
