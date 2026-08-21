# HexClad leftovers / adaylar

*Store:* https://hexclad.com · *Tema (görülen):* Vaan UAT - 2026-07-30 | Evergreen 2026-08-11 · schema_name Shiro 1.0.0 · custom (`theme_store_id` null)  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: hexclad-404-kitchen  
Gerekçe: `/pages/this-page-does-not-exist-qante` → 404 “Oops, this isn’t the kitchen” + 30% SAVINGS merch. Taksonomide 404 pageType yok.  
Örnekler: https://hexclad.com/pages/this-page-does-not-exist-qante  
Öneri: ertele / candidate — `page-content-main` zorlama  
Karar: onay bekliyor

---

ADAY: hexclad-replo-pages  
Gerekçe: `/pages/contact` ve `/pages/affiliate` Shopify section taşımıyor; gövde `#replo-fullpage-element` (Replo). Contact “Need assistance? / Get started” support portal CTA. Affiliate “Become a HexClad partner” + How it Works + FAQ. Contact için `page-content-main` observation yazıldı (kanıtlı gövde); affiliate ayrı observation yok.  
Örnekler: https://hexclad.com/pages/contact · https://hexclad.com/pages/affiliate  
Öneri: Replo page-builder varyantı veya candidate  
Karar: onay bekliyor

---

ADAY: hexclad-rivo-referral  
Gerekçe: `/pages/refer-a-friend` Replo + iframe `#rivo-referral-container-167` (1280×650). Sign-up formu PII — gönderilmedi.  
Örnekler: https://hexclad.com/pages/refer-a-friend  
Öneri: ertele — üçüncü parti referral  
Karar: onay bekliyor

---

ADAY: hexclad-junip-reviews  
Gerekçe: PDP `#shopify-section-template--19206419906694__junip_widget_2_0_kytkNN` — 4.82 / 3,128 reviews. Junip widget. Taksonomide third-party reviews pageType/kategori yok; `testimonial-quote-carousel` zorlama (yıldız histogram + filtre).  
Örnekler: https://hexclad.com/products/12-hexclad-pan-with-lid  
Öneri: ertele / commerce-tools tartışması  
Karar: onay bekliyor

---

ADAY: hexclad-entry-discount-popup  
Gerekçe: Home’da dairesel tava yüzeyli “YOU’VE GOT $75 OFF / Claim Discount” overlay. Shopify section değil. E-posta/PII — Claim tıklanmadı. `dismiss-overlays` Close ile kapanıyor olmalı.  
Örnekler: https://hexclad.com/  
Öneri: ertele — lead-capture overlay, kanıt PII’siz  
Karar: onay bekliyor

---

ADAY: hexclad-press-redirect  
Gerekçe: `/pages/press` 200 ama gövde home template (aynı hero/category/quadrant). Ayrı press şablonu yok.  
Örnekler: https://hexclad.com/pages/press  
Öneri: leftover — home alias  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- PDP `product_sticky_nav` + `product_whats_included` height 0
- Care sayfası birden fazla accordion section height 0
- Cart template ikinci section height 0
- About `text-and-image` ~180px zayıf
- Science `hero2` + shop/newsletter (about’ta temsil edildi)
- Gordon `endorsement` / `recommendations` / üçüncü editorial
- Recipes hub alt şeritler (What to Cook Tonight / Learn Skills / New Recipes)
- Best-sellers PLP (`/collections/best-sellers`) hybrid-cookware’den sade — ayrı roster yok
- UGC `dialog.Video Modal` + `FreeGiftProgressBarPopup` boş dialog
- Help Center `https://support.hexclad.com` dış host
- Restaurant `https://hexcladrestaurant.com/` · Careers dış
- Newsletter / warranty activate / contact portal — PII yok

---

ADAY: hexclad-listicle-fathers-day-readmore  
Gerekçe: `/blogs/posts/fathers-day-gift-ideas-for-home-cooks` altında `#shopify-section-template--19294934892678__14295a1e-*` “Read more” blog carousel. Listicle gövdesinden ayrı Shopify section.  
Örnekler: https://hexclad.com/blogs/posts/fathers-day-gift-ideas-for-home-cooks  
Öneri: `blog-list-main` reuse — bu tur listicle-fathers-day obs setine dahil edilmedi  
Karar: onay bekliyor

---

## Listicle-advertorial (2026-08-21)

- `observations/hexclad/default/listicle-fathers-day/` — 5 obs · 15 PNG · `candidates/listicle-advertorial.md`
- URL: https://hexclad.com/blogs/posts/fathers-day-gift-ideas-for-home-cooks
- `product-showcase-featured` yok (inline link only) · FAQ statik · listicle maddeleri tek article richtext
