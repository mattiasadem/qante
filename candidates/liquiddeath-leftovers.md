# Liquid Death leftovers / adaylar

*Store:* https://liquiddeath.com · *Slug:* liquiddeath  
*Platform:* Canlı Shopify (Theme Store demo değil) · theme id `743` (`/cdn/shop/t/743/`)  
*Tarih:* 2026-08-20

Şema icat edilmedi. Observation yazılan tipler burada tekrarlanmaz.

---

ADAY: liquiddeath-search-absent  
Gerekçe: Header’da arama ikonu / input yok. `/search?q=water&type=product` → `/` redirect. `global-predictive-search` / `search-results` observation yazılmadı.  
Örnekler: https://liquiddeath.com/search?q=water  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: liquiddeath-no-cart-page  
Gerekçe: `/cart` → `/?viewcart=true` (home redirect). Sepet yalnız Rebuy Smart Cart `.rebuy-cart__flyout` drawer. `cart-page-main` yok.  
Örnekler: https://liquiddeath.com/cart  
Öneri: leftover — drawer obs yeterli  
Karar: onay bekliyor

---

ADAY: liquiddeath-bazaarvoice-reviews  
Gerekçe: PDP `#shopify-section-template--16998070911185__apps_AyDm9L` Bazaarvoice reviews widget (`data-bv-show=reviews`). Yıldızlar product-info içinde; tam reviews bloğu apps section. `testimonial-quote-carousel` değil.  
Örnekler: https://liquiddeath.com/products/scary-strawberry  
Öneri: reviews-app varyant veya aday kategori  
Karar: onay bekliyor

---

ADAY: liquiddeath-empty-blog  
Gerekçe: `/blogs/news` “News” başlığı + boş grid (yazı yok). Observation `blog-list-main` alındı; içerik yok.  
Örnekler: https://liquiddeath.com/blogs/news  
Öneri: leftover — boş blog  
Karar: onay bekliyor

---

ADAY: liquiddeath-rebuy-smartcart  
Gerekçe: Sepet + cross-sell Rebuy app (`rebuy-smartcart`, `rebuy_widget` section’ları). `global-cart-drawer` + `product-showcase-related` en yakın; tam Rebuy UX farklı (progress bar, upsell grid).  
Örnekler: https://liquiddeath.com/ (cart icon)  
Öneri: leftover — delta yeterli  
Karar: onay bekliyor

---

ADAY: liquiddeath-orbe-geolocation  
Gerekçe: Orbe geolocation extension CSS preload (`md-app-modal.min.css`). Walk sırasında modal görünmedi; bazen locale redirect riski.  
Örnekler: https://liquiddeath.com/  
Öneri: leftover — overlay dismiss  
Karar: onay bekliyor

---

ADAY: liquiddeath-country-club-closed  
Gerekçe: `/pages/country-club` “temporarily closed for greens maintenance” + waitlist form. PII doldurulmadı / gönderilmedi.  
Örnekler: https://liquiddeath.com/pages/country-club  
Öneri: leftover — lead-capture-form obs + PII notu  
Karar: onay bekliyor

---

ADAY: liquiddeath-mobile-responsive-sections  
Gerekçe: Home mobilde farklı shopify section id’leri (featured_cans_mdK7K6, featured_pages_fAHQAQ/Rebx6R); desktop section’ları h=0. Attribute selector ile çözüldü; delta’da not.  
Örnekler: https://liquiddeath.com/ (375)  
Öneri: leftover — selector workaround  
Karar: onay bekliyor

---

ADAY: liquiddeath-faq-multi-section  
Gerekçe: FAQ `/pages/faq` 7 ayrı shopify section (Product Info, Orders, Payments, Shipping, Rewards, Account, Amazon). Yalnız 2 instance observation (Product Info + Orders). Accordion tıklanmadı — statik.  
Örnekler: https://liquiddeath.com/pages/faq  
Öneri: leftover — tekrar eden FAQ grupları  
Karar: onay bekliyor

---

ADAY: liquiddeath-manifesto-category-pairs  
Gerekçe: `/pages/manifesto` 4 kategori için tekrarlayan rich_text + image_hero çifti (energy/soda/tea/water). Yalnız energy hero alındı; diğer 3 çift aynı şablon.  
Örnekler: https://liquiddeath.com/pages/manifesto  
Öneri: leftover — tekrar  
Karar: onay bekliyor

---

ADAY: liquiddeath-404-pages  
Gerekçe: `/pages/about` 404. About → `/pages/manifesto`. Taksonomide 404 pageType yok.  
Örnekler: https://liquiddeath.com/pages/about  
Öneri: ertele — `page-content-main` zorlama  
Karar: onay bekliyor

---

## Diğer leftover (aday değil)

- Timewaster 5000 `/pages/timewaster-5000` — interaktif oyun; walk dışı
- Death Peddlers `/pages/death-peddlers` — B2B; home kartından link
- Klaviyo global section (`shopify-section-global-klaviyo`) h=0 — popup, açılmadı
- Checkout / payment — duruldu (PII)
- Newsletter footer form — doldurulmadı (PII)
- Gorgias / chat widget — görülmedi; şema yok
- Menu drawer 1440 opener `lg:hidden` — statik 1440 yok (hiyo/bandit deseni)
- Cloudflare rate limit — yoğun capture batch’te 429; retry gecikmeli
