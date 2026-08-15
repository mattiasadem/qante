# VEGAMOUR leftovers / adaylar

*Store:* https://vegamour.com · *Tema (görülen):* `Collection Layout v2 | Scalp | StayAi` · `schema_name` Pivotmade theme · `schema_version` 2026-07-30-1 · custom (`theme_store_id` null) · shop `vegalash.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: vegamour-okendo-reviews  
Gerekçe: PDP `#shopify-section-template--19977499312243__okendo_product_reviews_ArxT96` (4.4 / 5725) ve `/pages/reviews` `#…__okendo_site_reviews_ka3VwR` (4.5 / 22675). Reviews ailesi yok; `testimonial-quote-carousel` değil.  
Örnekler: https://vegamour.com/products/gro-hair-serum · https://vegamour.com/pages/reviews  
Öneri: ertele — reviews şeması yok  
Karar: onay bekliyor

---

ADAY: vegamour-stayai-pfv5  
Gerekçe: PDP ADD TO BAG `button.pfv5-trigger` → `.pfv5-drawer` (Choose Your Supply 1/3-Month + Subscribe / One-Time). StayAI purchase overlay. `product-info-main` changed karesi bu drawer. Yeni şema uydurulmadı.  
Örnekler: https://vegamour.com/products/gro-hair-serum  
Öneri: commerce-tools / offer-builder adayı  
Karar: onay bekliyor

---

ADAY: vegamour-jebbit-quiz  
Gerekçe: `/pages/hair-quiz` `iframe.jebbit-iframe` → `https://vegamour.jebbit.com/6aai3j6i`. `product-finder-quiz` observation var (zorlama). Thinning sonrası hormonal metin; e-posta yok — PII dur.  
Örnekler: https://vegamour.com/pages/hair-quiz  
Öneri: leftover iframe  
Karar: onay bekliyor

---

ADAY: vegamour-gorgias-contact  
Gerekçe: `/pages/contact-us` Gorgias embed `https://contact.gorgias.help/embed/forms/4od2y0x6` (ikinci section height 1040, metin boş). Form doldurulmadı.  
Örnekler: https://vegamour.com/pages/contact-us  
Öneri: envanter dışı (PII)  
Karar: onay bekliyor

---

ADAY: vegamour-searchanise-empty  
Gerekçe: Header Searchanise overlay. `serum` fill sonrası öneri listesi / ürün kartı yok. Sonuç `/search?q=serum` (27).  
Örnekler: https://vegamour.com/  
Öneri: leftover — tema predictive hydrate yok veya gecikmeli  
Karar: onay bekliyor

---

ADAY: vegamour-404  
Gerekçe: `copy-lockup` — “404 Page Not Found / Continue Shopping”. Taksonomide 404 pageType yok.  
Örnekler: https://vegamour.com/pages/this-page-does-not-exist-qante · `/pages/faq` · `/pages/faqs` · `/pages/help`  
Öneri: ertele / candidate — `page-content-main` observation var  
Karar: onay bekliyor

---

## 404 / ince sayfalar

`/pages/faq` · `/pages/faqs` · `/pages/help` — 404 (footer FAQ linki de buraya)  
`/pages/science` — `/pages/our-story` 302  
`/pages/rewards` · `/pages/refer-a-friend` · `/account` — PII / auth  
Eski influencer / CBD / GDPR / post-purchase LP’ler sitemap’te (capture yok)

## Aynı şablon, ikinci capture yok

`/collections/all` — `collection` şablonu bestsellers ile aynı  
About split-media-copy 2–5 (Powered by Plants’ten sonrası)  
Blog `blog_featured` + `blog_filters` (delta)  
Blog post altı `product_collection` Most Loved  
Reset LP tekrarlayan `hero_lp` / `lifestyle_cards` / `section_header` (bazıları hydrate boş)

## Capture leftover (3vp / interact)

- `global-menu-drawer` 1440 — hamburger 0px (beklenen; mega ayrı)  
- Searchanise öneri listesi — `serum` fill sonrası yok  
- Cart qty `changed` — doldurulmadı (filled 3vp yeterli)  
- Mega `open` yalnız 1440 (375/768 hamburger)  
- About / quiz / contact / reset / reviews — header group yok (landing)

## Bilinçli atlananlar

- Newsletter Submit / Gorgias form / quiz e-posta / account  
- Checkout / kupon Apply  
- Okendo “Write a Review”  
- Cookie / chat overlay  
- Quick view section height 0 (`shopify-section-quickview-product`)  
- `footer-disclaimer-override` height 0  
- product-showcase-tabs-2 Elevated Care tıklanmadı (Everyday kare yeterli)
