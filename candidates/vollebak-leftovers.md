# Vollebak leftovers / adaylar

*Store:* https://vollebak.com · *Tema (görülen):* Vollebak [LIVE] · Horizon 3.1.0 · theme_store_id 2481  
*Tarih:* 2026-08-15

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: vollebak-home-repeat-banners  
Gerekçe: Home’da `ai-hero-banner` / Horizon blocks ~820px ürün+hikâye overlay’leri onlarca kez (Full Metal, Cymatic, Graphene, Sashiko, EM bomber, Mycelium iki-up, Field jacket, Belt, Sonic, Spaceshop premiere, quote bantları 2–3, product-list 2 ek). Tip `editorial-image-with-text-overlay` / `product-showcase-grid-featured` / `testimonial-quote-carousel` — temsilci çekildi.  
Örnekler: `#shopify-section-template--22487216455769__blocks_j6rqfH`  
Öneri: aynı schemaId, ek instance obs isteğe bağlı  
Karar: leftover — 3vp temsilciler yeterli

---

ADAY: vollebak-fwahbl-campaign-pdp  
Gerekçe: `/products/for-when-all-hell-breaks-loose-jacket` ayrı template (`22940924444761`): pre-order £2,995, 10k px boş story, VIDEO GAME COMING SOON, WATCH THE TRAILER, `#fwahbl-takeover` height 0. Tip ailesi product-info + editorial/media; yeni şema yok.  
Örnekler: https://vollebak.com/products/for-when-all-hell-breaks-loose-jacket  
Öneri: campaign PDP leftover; takeover 0px kanıtsız  
Karar: onay bekliyor

---

ADAY: vollebak-pdp-story-stack  
Gerekçe: FMJ Copper PDP’de ~15 editorial/media blok + Size+Fit chart. Size+Fit `comparison-quick-table` değil (tek ürün ölçü tablosu).  
Örnekler: `#shopify-section-template--22487225958489__blocks_wshQsx`  
Öneri: page-content / yeni chart varyantı tartışması  
Karar: leftover

---

ADAY: vollebak-spaceshop-landing  
Gerekçe: `/pages/spaceshop` ~20 full-bleed media/metin (B&O, SAGA, tour). Taksonomide `landing-campaign` var; mevcut editorial overlay reuse.  
Örnekler: https://vollebak.com/pages/spaceshop  
Öneri: ek instance’lar isteğe bağlı  
Karar: 2 temsilci çekildi

---

ADAY: vollebak-empty-blogs  
Gerekçe: `/blogs/lab` ve `/blogs/the-vollebak-island` yalnız H1 (~192px), yazı kartı yok. `/blogs/news` 404.  
Örnekler: https://vollebak.com/blogs/lab  
Öneri: blog-list-main boş kare + candidate  
Karar: obs yazıldı (boş)

---

ADAY: vollebak-footer-country  
Gerekçe: Copyright + Country: United Kingdom (GBP £) ayrı `section_jihaqe`. Footer selector’da yok.  
Öneri: footer delta; ayrı şema yok  
Karar: leftover

---

ADAY: vollebak-extra-pages  
Gerekçe: Sitemap sayfaları (timeline, wholesale, work-for-us, sign-up, enter-the-humanoids, spaceshop-* , the-v-prize, porsche-vollebak, mineral-range, eiderdown, thermal, mars-billboard…). Çoğu aynı editorial overlay ailesi.  
Öneri: ertele — tip tekrarı  
Karar: leftover

---

ADAY: vollebak-cart-qty-changed  
Gerekçe: Dolu drawer’da Decrease/Increase quantity var; `changed` çekilmedi (2 deneme kuralı — ATC+size yeterli).  
Öneri: leftover  
Karar: leftover

---

## Bilinçli atlananlar

- `/account` / login / checkout  
- Newsletter Sign up + contact/size-guide Submit (PII)  
- `#fwahbl-takeover` 0px  
- Divider section’lar  
