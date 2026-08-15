# Xero Shoes leftovers / adaylar

*Store:* https://xeroshoes.com · *Tema (görülen):* xeroshoes-com-theme/main · Feel the World 1.2.0 · theme_store_id null  
*Tarih:* 2026-08-15

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: xeroshoes-404s  
Gerekçe: Bilinçli 404 — `/this-page-does-not-exist-xyz` (404 template). Yanlış tahmin URL'leri de 404: `/pages/find-a-store`, `/pages/help`, `/pages/faq`, `/pages/faqs`, `/pages/5000-mile-sole-warranty`. Gerçek store `/pages/stores`, warranty `/pages/warranty`. `/pages/about` ve `/pages/our-story` home'a düşer; about `/pages/about-us`.  
Örnekler: https://xeroshoes.com/this-page-does-not-exist-xyz  
Öneri: 404 gövde `global_collections_list` + Go Home — `page-content-main` zorlama parent obs  
Karar: leftover + parent obs

---

ADAY: xeroshoes-stamped-reviews  
Gerekçe: PDP `#template--20200621867186__17544008023632510e` Stamped widget (4.6 / 9,632 Reviews). Taksonomide reviews section yok.  
Öneri: şema yok  
Karar: leftover

---

ADAY: xeroshoes-gorgias  
Gerekçe: Gorgias chat iframe (`chat-button` 74×80). Overlay, section değil.  
Karar: leftover — dismiss; şema yok

---

ADAY: xeroshoes-cart-bought-together  
Gerekçe: `/cart` `#template--20200622915762__79f02e93-823b-4744-bd69-c74d3d1fb46a` "Bought Together" ~13046px. Tip ailesi product-showcase-related; kutu şişik.  
Öneri: leftover — cart-page-main yeterli  
Karar: leftover

---

ADAY: xeroshoes-inflated-home-tabs  
Gerekçe: `custom-tabs` inaktif panelleri yükseklik tutuyor (product tabs ~9933px; collections-list 4912 / 6698). Görünür ızgara daha kısa.  
Öneri: delta'da not; yeni şema yok  
Karar: leftover

---

ADAY: xeroshoes-zero-sections  
Gerekçe: `featured-mobile-header` 0px; PDP `product_media_banner` 0px; Coast Suede'de comfort/barefoot 0px; blog featured collection 0px; app_optimization 0px.  
Karar: leftover — çekilmedi

---

ADAY: xeroshoes-why-barefoot  
Gerekçe: `/pages/why-barefoot-shoes` ~12322px tek `main` + product tabs 7913px. Editorial + showcase tekrarı.  
Öneri: leftover  
Karar: leftover

---

ADAY: xeroshoes-extra-pages  
Gerekçe: joinus, loyalty-program, basketball, make, barefoot-myths, press-blog, shipping, xerocircle form submit, why-barefoot. Çoğu aynı editorial/FAQ ailesi.  
Karar: leftover — temsilciler (about/warranty/returns/sizing/stores/circle) yeterli

---

ADAY: xeroshoes-help-center-gorgias  
Gerekçe: `/pages/help-center` Shopify `main` metinsiz; içerik `iframe#lmtkceil` (gorgias.help embed). Parent obs `page-content-main.2` viewport.  
Öneri: yeni FAQ şeması yok  
Karar: leftover + parent 3vp

---

ADAY: xeroshoes-quickshop  
Gerekçe: `#quickshop-drawer` DOM'da. Statik prepareClick drawer açmadı. BEST SELLERS hover Quick Add beden ızgarası kart üzerinde (drawer değil).  
Karar: leftover — `open` missing

---

ADAY: xeroshoes-teaser-375  
Gerekçe: Coast Suede teaser 375'te zero-size (bu koşu). 768/1440 çekildi.  
Karar: leftover

---

ADAY: xeroshoes-15-off-tab  
Gerekçe: Sabit “GET 15% OFF!” tab (Attentive/popup). Overlay; section değil.  
Karar: leftover — şema yok

---

## Bilinçli atlananlar

- `/account` / login / checkout  
- Newsletter Sign up + warranty claim + Circle form (PII)  
- Divider / 0px section'lar  
- Quiz Next sonrası (e-posta riski)  
