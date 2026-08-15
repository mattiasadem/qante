# VEGAMOUR leftovers / adaylar

*Store:* https://vegamour.com · *Tema (görülen):* `Collection Layout v2 | Scalp | StayAi` · `schema_name` Pivotmade theme · `schema_version` 2026-07-30-1 · custom (`theme_store_id` null)  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

Capture sonrası netleşen 404 / iframe / PII durakları buraya işlenecek.

---

ADAY: vegamour-okendo-reviews  
Gerekçe: PDP `#shopify-section-template--19977499312243__okendo_product_reviews_ArxT96` ve `/pages/reviews` `#…__okendo_site_reviews_ka3VwR` — 4.4 / 5725 ve 4.5 / 22675. Reviews ailesi yok.  
Örnekler: https://vegamour.com/products/gro-hair-serum · https://vegamour.com/pages/reviews  
Öneri: ertele — reviews şeması yok  
Karar: onay bekliyor

---

ADAY: vegamour-jebbit-quiz  
Gerekçe: `/pages/hair-quiz` `.jebbit-iframe` → `https://vegamour.jebbit.com/6aai3j6i`. `product-finder-quiz` observation var (zorlama). PII dur.  
Örnekler: https://vegamour.com/pages/hair-quiz  
Öneri: leftover iframe  
Karar: onay bekliyor

---

ADAY: vegamour-gorgias-contact  
Gerekçe: `/pages/contact-us` Gorgias embed `https://contact.gorgias.help/embed/forms/4od2y0x6`. Form doldurulmadı.  
Örnekler: https://vegamour.com/pages/contact-us  
Öneri: envanter dışı (PII)  
Karar: onay bekliyor

---

ADAY: vegamour-404  
Gerekçe: `copy-lockup` — “404 Page Not Found / Continue Shopping”. Taksonomide 404 pageType yok.  
Örnekler: https://vegamour.com/pages/this-page-does-not-exist-qante · `/pages/faq`  
Öneri: ertele / candidate — `page-content-main` observation var  
Karar: onay bekliyor

---

## 404 / ince sayfalar

`/pages/faq` · `/pages/faqs` · `/pages/help` — 404  
`/pages/science` — `/pages/our-story` 302  
`/pages/rewards` · `/pages/refer-a-friend` — PII  
`/account` — auth  
Eski influencer / CBD / GDPR LP’ler sitemap’te (capture yok)

## Bilinçli atlananlar

- Newsletter Submit / contact form / quiz e-posta  
- Checkout / kupon  
- Okendo “Write a Review”  
- About 2–5. split-media-copy (aynı tip)  
- Blog featured + filters (delta)  
- Reset LP tekrarlayan hero_lp / lifestyle_cards (hydrate boş olabilir)
