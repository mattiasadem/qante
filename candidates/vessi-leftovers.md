# Vessi leftovers / adaylar

*Store:* https://vessi.com · *Tema (görülen):* vessi-storefront/main-us · Vessi 1.0.0 · theme_store_id null  
*Shop:* vessi-footwear.myshopify.com · theme id 129927970901 · role main  
*Tarih:* 2026-08-15

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: vessi-404s  
Gerekçe: Bilinçli 404 — `/this-page-does-not-exist-xyz` (404 template: THIS PAGE DOESN’T EXIST… Return Home). Yanlış tahmin URL’leri de 404: `/pages/about`, `/pages/stores`, `/pages/find-a-store`, `/blogs/blog`. `/pages/about-us` → `/pages/vegan`. `/pages/faq` ve `/pages/faqs` → `/a/faq`.  
Örnekler: https://vessi.com/this-page-does-not-exist-xyz  
Öneri: 404 gövde `page-content-main` parent obs  
Karar: leftover + parent obs

---

ADAY: vessi-gorgias-faq-app  
Gerekçe: `/a/faq` Shopify section gövdesi yok (yalnız chrome + footer). İlk dump’ta shopify main boş; ikinci istek 429. Contact’ta Gorgias chat iframe (`chat-button` 80×74). Overlay, section değil.  
Karar: leftover — dismiss; şema yok

---

ADAY: vessi-reviews-app  
Gerekçe: PDP `#template--16074643898453__reviews_wrapper_zpPi8T` Customer reviews 4.67 / 25,182. Taksonomide reviews section yok.  
Öneri: şema yok  
Karar: leftover

---

ADAY: vessi-store-locator  
Gerekçe: PDP `stores` “FIND A STORE · BELLEVUE SQUARE, WASHINGTON” ~373px. `/pages/stores` ve `/pages/find-a-store` 404.  
Karar: leftover — yeni şema yok

---

ADAY: vessi-quick-add  
Gerekçe: `#quick-add-drawer` / `#shopify-section-quick-add-drawer` DOM’da (empty, translateX off-screen). Size-guide-modal + product-size-guide-override 0px.  
Karar: leftover — `open` yoklandı değil

---

ADAY: vessi-cart-page  
Gerekçe: `/cart` → `https://vessi.com/#cart`. Sepet yalnız `cart-drawer`. `cart-page-main` yok.  
Karar: leftover

---

ADAY: vessi-zero-sections  
Gerekçe: `header-search` kapalı 0px; PDP `marquee_CnaRtr` 0px; PLP `custom_liquid` / `richtext_seo_footer` 0px; our-story `banner_n3jqk6` 0px; first-time-localization 0px.  
Karar: leftover — çekilmedi

---

ADAY: vessi-extra-pages  
Gerekçe: vegan (ince headline), healthcare-heroes (ID.me PII), refer-a-friend (hesap), innovation, sustainability (interactive_map), careers-retail, press, order-tracking (order # PII), back-to-school LP (home ile aynı aile). Temsilciler (our-story / help / returns / warranty / sizing) yeterli.  
Karar: leftover

---

ADAY: vessi-healthcare-idme  
Gerekçe: `/pages/healthcare-heroes` e-posta + mobil + ID.me verify. **PII dur.**  
Karar: leftover — şema yok

---

ADAY: vessi-interactive-map  
Gerekçe: `/pages/sustainability` `interactive_map_bNTyzG` “Our clean water projects” 1–4. Taksonomide map yok.  
Karar: leftover

---

ADAY: vessi-rate-limit  
Gerekçe: İlk walk’ta `/collections/sale`, `/collections/women`, `/a/faq` (2.), `/blogs/the-forecast` (2.) 429 “Just a moment…”. Women sonraki curl’de 200.  
Karar: leftover — capture aralıklı

---

ADAY: vessi-localization  
Gerekçe: Header “USD | EN” + Choices dropdown (AUD/CAD/JPY…). Feature, section değil.  
Karar: leftover

---

## Bilinçli atlananlar

- `/account` / login / checkout  
- Newsletter Subscribe + warranty Start Claim + order tracking + ID.me + refer-a-friend (PII)  
- Divider / 0px section’lar  
- Blog related + ikinci forecast carousel  
- Our-story kalan two_column / banner tekrarları  
- Help-centre support_tiles (contact tiles ile aynı aile)
