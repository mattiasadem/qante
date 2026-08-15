# Moom Health leftovers / adaylar

*Store:* https://moom.health · *Tema (görülen, uydurulmadı):* **[20260801] Moom x Kinetic (SG)** · `schema_name` Impact · `schema_version` 4.4.1 · `theme_store_id` null · shop `moomhealth.myshopify.com` · theme id `160979845333`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: moom-pdp-variant-swatch  
Gerekçe: Happy Hormones / Super Greens Impact `variant-picker` + `label.jsc-block-swatch` (Passion Fruit/Lemon/Birthday Cake/White Peach; Caffeinated/Mango) DOM'da var, bounding box **0×0**. Kinetic buy box native swatch'i gizliyor. Mama Water tek SKU. Görünür swatch karesi yok.  
Örnekler: https://moom.health/products/happy-hormones · https://moom.health/products/super-greens  
Öneri: leftover — force-click pixel değiştirmedi  
Karar: onay bekliyor

---

ADAY: moom-judgeme-reviews  
Gerekçe: PDP `section_productreviews` "Trust The Reviews" ~236px + Judge.me widget (`judgeme-707`). Reviews şeması yok.  
Örnekler: https://moom.health/products/mama-water  
Öneri: ertele — testimonial-quote-carousel değil (üçüncü parti)  
Karar: onay bekliyor

---

ADAY: moom-quiz-widget  
Gerekçe: `/pages/take-quiz` üst blok ~100px (muhtemel iframe) + testimonials + curated packs. Quiz adımları PII. Home/PLP yalnız CTA (`banner_inpage` → editorial-rich-text).  
Örnekler: https://moom.health/pages/take-quiz  
Öneri: leftover — product-finder-quiz zorlama  
Karar: onay bekliyor

---

ADAY: moom-club-loyalty  
Gerekçe: `/pages/club-moom` — CREATE ACCOUNT LOGIN, How It Works, Redeem/Earn tables, Level Up, FAQ. Home'da teaser features-multicolumn yazıldı. Auth/PII.  
Örnekler: https://moom.health/pages/club-moom  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: moom-stockists  
Gerekçe: `/pages/stockists` — "197 STOCKISTS FOUND" + adres/DIRECTION. Locator tipi yok.  
Örnekler: https://moom.health/pages/stockists  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: moom-clinical-studies  
Gerekçe: `/pages/clinical-studies` uzun LP (de/bloat + sleep/well protokol, istatistik, karşılaştırma). Home/PDP compare + features zaten var; bu sayfa ayrı bilim LP.  
Örnekler: https://moom.health/pages/clinical-studies  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: moom-menopause-lp  
Gerekçe: `/pages/menopause-essentials` — media+text, featured product Peri-Menopause Bundle, featured collection.  
Örnekler: https://moom.health/pages/menopause-essentials  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: moom-faq-extra-groups  
Gerekçe: `/pages/faq` Moom 101 observation yazıldı. Our Products / Subscription / de/bloat / sleep/well / cramp/less / Orders / Everything Else aynı `faq-collapsible-tabs` tekrarı. Üst TOC leftover page-anchor.  
Öneri: leftover — aynı tip  
Karar: onay bekliyor

---

ADAY: moom-blog-404  
Gerekçe: `/blogs/news` ve `/blogs/moom-u` → 404 "Page not found". Eğitim `/pages/moom-u` (obs yazıldı).  
Örnekler: https://moom.health/blogs/news  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: moom-privacy-banner  
Gerekçe: `privacy-bar` overlay-group, `hidden`, h=0.  
Öneri: leftover  
Karar: onay bekliyor

---

## 404 / boş / yönlenen URL’ler

`/pages/about-us` → 404  
`/blogs/news` → 404  
`/blogs/moom-u` → 404  
`/this-page-does-not-exist-qante` → 404 (obs: `not-found/page-content-main`)  
`/policies/privacy-policy` → native policy; gövde zayıf, footer var. Metin `/pages/privacy-policy`

---

## Bilinçli atlananlar

- `/account` / CREATE ACCOUNT — auth  
- Checkout / e-posta Subscribe / contact Send message / quiz PII  
- Chat widget  
- `temp_style_*` / `custom_liquid_*` sıfır yükseklik  
- `/collections/all` (bestsellers yürüdü; all ~6.7k px aynı main)  
- Happy Hormones / de-bloat / pack PDP (Mama Water stack yeterli)  
- Locale/currency form submit  
