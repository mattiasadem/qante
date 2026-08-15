# IM8 Health leftovers / adaylar

*Store:* https://im8health.com · *Tema (görülen):* shopify-im8-ui/develop · schema_name Dawn · schema_version 15.0.2 · custom (`theme_store_id` null) · shop `im8store.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. Walk sırasında görülen, mevcut tipe sığmayan veya 404 olanlar.

---

ADAY: im8health-404  
Gerekçe: `/pages/about` · `/pages/faq` · `/pages/faqs` · `/pages/contact` · `/pages/this-page-does-not-exist-qante` — 404. Taksonomide 404 pageType yok.  
Örnekler: https://im8health.com/pages/this-page-does-not-exist-qante  
Öneri: ertele / candidate — `page-content-main` observation yazılacaksa oraya  
Karar: onay bekliyor

---

ADAY: im8health-trustpilot-iframe  
Gerekçe: Home `#shopify-section-template--17653238890663__social_proof_reviews` Trustpilot widget iframe. Reviews ailesi yok; `testimonial-quote-carousel` merchant slot değil, üçüncü parti.  
Örnekler: https://im8health.com/  
Öneri: leftover — iframe; contentFrame ile bakılacak, PII yoksa kare  
Karar: onay bekliyor

---

ADAY: im8health-frontrow-iframe  
Gerekçe: Home FrontrowMD brand widget (`iframe-frontrow-brand`) + clinician modal. Taksonomide clinician-endorsement yok.  
Örnekler: https://im8health.com/  
Öneri: leftover  
Karar: onay bekliyor

---

## Sitemap leftover (kampanya / listicle LP)

Çok sayıda `/pages/7-reasons-*` · `/pages/8-reasons-*` · athlete editorial · quiz (`/pages/quiz`, `/pages/octane-quiz`) · vs-competitor · seasonal offer. Temsilî 1–2 LP envanterlenecek; kalan leftover.

## Bilinçli atlananlar

- `/account` — auth  
- Checkout / e-posta form submit / newsletter  
- Cookie overlay (dismiss script)
