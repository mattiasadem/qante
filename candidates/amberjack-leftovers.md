# Amberjack leftovers / adaylar

*Store:* https://amberjack.shop · *Tema (görülen):* amberjack-theme/main · schema_name Themekit template theme · custom  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: amberjack-404-home  
Gerekçe: `/pages/contact`, `/pages/contact-us`, `/pages/this-does-not-exist-xyz` → HTTP 404 ama URL home'a düşer (hero The Court). Taksonomide 404 pageType yok; ayrı 404 şablonu görünmedi.  
Örnekler: https://www.amberjack.shop/pages/contact  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: amberjack-judgeme-reviews  
Gerekçe: PDP section `1765888870aec57e2a` — Judge.me “Customer Reviews” 4.9 (22) / Original 4.8 (4,200). Rating bar + app widget. `testimonial-quote-carousel` alıntı şeridi; bu puan dağılımı + liste.  
Örnekler: https://www.amberjack.shop/products/the-court-ivory  
Öneri: yeni varyant veya reviews ailesi (Wine Store atlas) — şema icat yok  
Karar: onay bekliyor

---

ADAY: amberjack-store-locator-map  
Gerekçe: `/pages/store-locator-2` başlık + “Please call your nearest store…”. İlk probe'da `#MainContent iframe` yok (geç hydrate / app). Sitemap'te `/pages/store-locator`, `store-locator-3`.  
Örnekler: https://www.amberjack.shop/pages/store-locator-2  
Öneri: map widget ayrı tip; observation `page-content-main` + bu aday  
Karar: onay bekliyor

---

ADAY: amberjack-replo-landing  
Gerekçe: `/pages/shoe-guide` Replo `#replo-fullpage-element` (observation `editorial-custom-content`). Sitemap'te başka LP: `fall-lp`, `gifting-guides`, `dress-shoes-for-foot-pain`, `5-reasons-pilots-love-amberjack`, `affiliate-landing-page`, `free-discount`, `best-dress-shoes-for-travel-01`, `portugal`, `6-reasons-service-members-love-amberjack-v2`… Chrome dışı / tekrarlayan Replo.  
Örnekler: https://www.amberjack.shop/pages/fall-lp  
Öneri: ertele — shoe-guide örnek; her LP'ye ayrı şema yok  
Karar: onay bekliyor

---

ADAY: amberjack-sms-subscribe-pages  
Gerekçe: `/pages/amber-subscribe-page` (observation, form doldurulmadı). Sitemap kopyaları: `amberjack-subscribe-page`, `amberjacksave10-subscribe-page`, `amberjacksubscribe-subscribe-page`. PII.  
Örnekler: https://www.amberjack.shop/pages/amber-subscribe-page  
Öneri: tek lead-capture örneği yeter  
Karar: onay bekliyor

---

## 404 / chrome-dışı URL’ler (şema yok)

`/pages/contact` · `/pages/contact-us` (footer Contact = mailto:help@amberjack.shop)  
Bilinmeyen path → home (404 status, index içeriği)

## Sitemap’te duran, walk dışı

`/pages/_go_` · `/pages/usizy_feed` · `/pages/shoe-care-info` · `/pages/amberjack-recommends` · `/pages/amberjack-email-newsletter` · koleksiyon varyantları (`the-chelsea`, `the-original`, `gift-card`…) — aynı `collection_grid` ailesi

## Bilinçli atlananlar

- `/account/login` — auth  
- Checkout / kupon / iade portalı (Redo) / hesap  
- Footer Klaviyo + SMS form submit (PII)  
- Gorgias chat widget (`#chat-button`) — section değil  
- 1px `separator_*` section  
- Header predictive search — DOM'da yok  
