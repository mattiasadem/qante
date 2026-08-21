# Rare Beauty leftovers / adaylar

*Store:* https://www.rarebeauty.com · *Platform:* Shopify live · theme CDN `t/127`  
*Tarih:* 2026-08-21

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: rarebeauty-blog  
Gerekçe: `/blogs/news`, `/blogs/rare-beauty-blog` → 404. Blog list/post template yok.  
Örnekler: https://www.rarebeauty.com/blogs/news  
Öneri: ertele — blog route kapalı veya taşınmış  
Karar: onay bekliyor

---

ADAY: rarebeauty-gorgias-faq  
Gerekçe: `/pages/faqs` → Gorgias Help Center iframe (`help-center.gorgias.help/embed/help-centers/r151c3l3`). Tema accordion değil; `faq-collapsible-tabs` zorlama.  
Örnekler: https://www.rarebeauty.com/pages/faqs  
Öneri: `page-content-main` observation + delta yeterli  
Karar: onay bekliyor

---

ADAY: rarebeauty-yotpo-reviews  
Gerekçe: PDP `#shopify-section-template--15702481731719__product_review` — Yotpo widget (Loading reviews). Reviews şema ailesi yok.  
Örnekler: https://www.rarebeauty.com/products/soft-pinch-liquid-blush  
Öneri: ertele — üçüncü parti reviews  
Karar: onay bekliyor

---

ADAY: rarebeauty-cart-page  
Gerekçe: `/cart` → `/?cart=open` (homepage + bag drawer). `cart-page-main` yok.  
Örnekler: https://www.rarebeauty.com/cart  
Öneri: ertele — `global-cart-drawer` yeterli  
Karar: onay bekliyor

---

ADAY: rarebeauty-sephora-modal  
Gerekçe: `#shopify-section-shop-sephora-modal` — Sephora retail modal (height 0 public walk).  
Örnekler: home (gizli)  
Öneri: envanter dışı / geo-trigger  
Karar: onay bekliyor

---

ADAY: rarebeauty-account-auth  
Gerekçe: `/account` + header Account — login PII.  
Örnekler: https://www.rarebeauty.com/account  
Öneri: envanter dışı (PII stop)  
Karar: onay bekliyor

---

ADAY: rarebeauty-home-featured-video  
Gerekçe: `#shopify-section-template--15702248128647__home-featured-video` height 0 — kapalı section.  
Örnekler: home HTML  
Öneri: atlandı  
Karar: onay bekliyor

---

ADAY: rarebeauty-klaviyo-tracking  
Gerekçe: `#shopify-section-tracking-klaviyo` height 0 — analytics snippet.  
Öneri: envanter dışı  
Karar: onay bekliyor

---

ADAY: rarebeauty-predictive-search  
Gerekçe: Header `#search` overlay açılıyor; yazınca canlı öneri listesi DOM'da görülmedi. Sonuç `/search?q=` sayfasında.  
Örnekler: https://www.rarebeauty.com/  
Öneri: leftover — predictive kapalı veya JS hydrate yok  
Karar: onay bekliyor

---

## Capture leftover (3vp / interact)

- `global-menu-drawer` 1440 — hamburger 0px (beklenen; desktop mega header'da)
- Cart filled state — doldurulmadı (empty drawer 3vp yeterli Mod A)
- Header Shop mega panel açık interact — statik kapalı bar kanıtlandı
- FAQ iframe iç accordion — cross-origin; shell 3vp only
- Newsletter / SMS footer submit — PII stop

## Bilinçli atlananlar

- Checkout / login / newsletter submit / contact form submit  
- CookiePro / Attentive / Gorgias chat overlays (dismiss where possible)  
- Shade finder quiz flow (`/pages/true-to-myself-foundation-shade-finder`) — ayrı LP, Mod A walk dışı  
- Rare Impact subpages (`/pages/rare-impact/*`) — ayrı campaign LPs  
- Store locator (`/pages/international-store-locator`) — ayrı tool sayfası  
- Chat (`/pages/chat`) — üçüncü parti
