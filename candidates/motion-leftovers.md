# Motion leftovers / adaylar

*Kaynak (bu leftover):* https://motion-theme-adventure.myshopify.com/  
*Kardeş (yürünmedi bu turda):* Satchel https://motion-theme-accessories.myshopify.com/ · Memo https://motion-theme-home.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/motion  
*Tarih:* 2026-08-19 · CRO leftover interact (official Adventure only)

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: motion-cro-interact-2026-08-19  
Gerekçe: Discover-interact leftover. Var olan obs: faq-collapsible-tabs (ilk soru), promo-banner-countdown (saniye tick), testimonial-quote-carousel (Flickity nokta 4 Cole). lead-capture-form / newsletter-band tarandı, doldurulmadı. before-after / bundle / compare / quiz / shop-the-feed / scrolling-gallery observation yok — icat edilmedi.  
Örnekler: `/pages/faq` · home countdown · home testimonials  
Öneri: leftover — şema uydurma yok  
Karar: onay bekliyor

---

ADAY: motion-newsletter-popup  
Gerekçe: `#shopify-section-sections--19291127087155__newsletter-popup` kapalıyken h=0. Hydrate scroll “GO FURTHER / New drops…” modal açar (`#NewsletterPopup-…`). Escape ile kapatıldı. Email + SUBSCRIBE gönderilmedi (PII). Observation yok.  
Örnekler: home popup  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: motion-early-access-tab  
Gerekçe: FAQ karelerinde solda mavi “EARLY ACCESS” yan sekme (X). promo-spotlight-tab adayı; observation yok. Tıklanmadı / gönderilmedi.  
Örnekler: `/pages/faq`  
Öneri: leftover — chrome  
Karar: onay bekliyor

---

ADAY: motion-lead-capture-pii  
Gerekçe: About + contact aynı `#…__contact_form_egjJ7d` GET IN TOUCH (name / email / message). Home JOIN THE LIST email + SUBSCRIBE. Doldurulmadı, gönderilmedi.  
Örnekler: `/pages/about` · `/pages/contact-us` · home newsletter band  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: motion-contact-404  
Gerekçe: `/pages/contact` 404. Canlı form `/pages/contact-us`.  
Örnekler: https://motion-theme-adventure.myshopify.com/pages/contact  
Öneri: leftover — route  
Karar: onay bekliyor

---

ADAY: motion-cro-absent  
Gerekçe: Adventure demoda before-after-slider · commerce-tools-products-bundle · comparison-quick-table · product-finder-quiz · media-shop-the-feed · media-scrolling-gallery section yok. Observation da yok.  
Örnekler: home section listesi  
Öneri: leftover — yok  
Karar: onay bekliyor

---

ADAY: motion-sticky-atc-absent  
Gerekçe: PDP Merino Quarter-Zip kaydırınca ayrı fixed sticky ATC bar yok. Buy box sticky CSS değil / bar yok. “Only N left” scarcity metni yok (“In stock, ready to ship”).  
Örnekler: `/products/merino-wool-quarter-zip`  
Öneri: leftover — observation icat edilmedi  
Karar: onay bekliyor

---

ADAY: motion-pdp-size-guide  
Gerekçe: PDP “Size guide” accordion (`Product-content-tab7867341340723`) US/UK/Europe tablo. product-info-main vitrine; bu CRO leftover’da çekilmedi. Ask a question formu PII.  
Örnekler: product-info-main  
Öneri: leftover — accordion  
Karar: onay bekliyor

---

ADAY: motion-countdown-cta  
Gerekçe: BUY 1 GET 1 FREE “SHOP COLLECTION” → `/collections/new-in`. Tıklanmadı (sayfa kaçar).  
Örnekler: home `#…__countdown_A3AJ9j`  
Öneri: leftover — navigate  
Karar: onay bekliyor

---

ADAY: motion-satchel-memo-cro  
Gerekçe: Satchel/Memo FAQ + testimonial obs var; bu tur yalnız official Adventure. Kardeş preset interact yok.  
Örnekler: motion-theme-accessories · motion-theme-home  
Öneri: leftover — sibling  
Karar: onay bekliyor

---

ADAY: motion-lookbook-404  
Gerekçe: `/pages/lookbook` 404 (önceki walk).  
Örnekler: nav  
Öneri: leftover — 404  
Karar: onay bekliyor

---

## Bilinçli atlananlar

- Account / login  
- Checkout / Buy it now  
- Newsletter / contact submit (PII)  
- Mega / arama / sepet drawer (Impulse chrome, bu leftover dışı)  
- Theme Features satış sayfası  
- Kupon yok (countdown’da kod yok)  
