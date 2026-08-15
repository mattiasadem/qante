# IM8 Health leftovers / adaylar

*Store:* https://im8health.com  
*Tema (görülen, uydurulmadı):* **shopify-im8-ui/develop** · `schema_name` **Dawn** · `schema_version` **15.0.2** · custom (`theme_store_id` null) · shop `im8store.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz — sapma `delta`'da.

---

ADAY: im8health-404  
Gerekçe: `/pages/about` · `/pages/faq` · `/pages/faqs` · `/pages/contact` · `/pages/this-page-does-not-exist-qante` — 404. Taksonomide 404 pageType yok.  
Örnekler: https://im8health.com/pages/this-page-does-not-exist-qante  
Öneri: `page-content-main` observation yazıldı (`not-found/`). pageType standarda aday.  
Karar: onay bekliyor

---

ADAY: im8health-rebuy-cart  
Gerekçe: Gerçek sepet Rebuy `#rebuy-cart` / `.rebuy-cart__flyout`. Native Dawn `#CartDrawer` 0px. `/cart` 200 → `/?viewcart=true` (index). `cart-page-main` yok.  
Örnekler: https://im8health.com/ · https://im8health.com/cart  
Öneri: `global-cart-drawer` observation yazıldı. Üçüncü parti; şema yok.  
Karar: onay bekliyor

---

ADAY: im8health-gorgias-faq  
Gerekçe: `/pages/frequently-asked-questions` Gorgias help center. 768/1440: Shopify `custom_liquid` + `iframe#sdxd9sqe`. 375: `im8health-copy-1.gorgias.help/en-US` (`.ghc-app`) — ayrı origin. Merchant accordion değil.  
Örnekler: https://im8health.com/pages/frequently-asked-questions  
Öneri: `page-content-main` zorlama yazıldı. leftover iframe / help-center tipi.  
Karar: onay bekliyor

---

ADAY: im8health-trustpilot-iframe  
Gerekçe: Home `#shopify-section-template--17653238890663__social_proof_reviews` Trustpilot widget iframe. Reviews ailesi yok; `testimonial-quote-carousel` merchant slot değil, üçüncü parti.  
Örnekler: https://im8health.com/  
Öneri: leftover — iframe  
Karar: onay bekliyor

---

ADAY: im8health-frontrow-iframe  
Gerekçe: Home FrontrowMD brand widget (`iframe-frontrow-brand`) + clinician modal. Taksonomide clinician-endorsement yok.  
Örnekler: https://im8health.com/  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: im8health-no-predictive-search  
Gerekçe: Header'da arama ikonu yok. Sonuç yalnız `/search?q=essentials` sayfa (`search-results`). `global-predictive-search` observation yazılmadı.  
Örnekler: https://im8health.com/  
Öneri: ertele — overlay yok  
Karar: onay bekliyor

---

ADAY: im8health-shop-now-bar  
Gerekçe: `#shopify-section-shop-now-bar` home'da 0×0. Sticky ATC bazı şablonlarda scroll sonrası görünebilir; claiming observation yok.  
Örnekler: https://im8health.com/  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: im8health-press-ticker-crop  
Gerekçe: PDP `.im8-press-ticker` 49px. 375 resmi crop okunur. 768/1440 sticky header altında `invalid-clip` (gri şerit, height −5/−12). Section var.  
Örnekler: https://im8health.com/products/the-beckham-stack-pro  
Öneri: recapture / leftover crop  
Karar: onay bekliyor

---

ADAY: im8health-ingredients-tab-catalog  
Gerekçe: `/pages/ingredients` ~12k-px tabbed ingredient list `product-info-tabs` zorlaması — PDP tab şeridi değil.  
Örnekler: https://im8health.com/pages/ingredients  
Öneri: leftover / aday tip  
Karar: onay bekliyor

---

ADAY: im8health-rebuy-overlay-on-evidence  
Gerekçe: Rebuy flyout auto-open. `dismissAllOverlays` Escape kapatır ama bazı erken 3vp (footer, search, PLP) flyout'u içeriyor. Cart observation bilinçli viewport.  
Örnekler: `evidence/im8health/default/home/footer-columns-newsletter.1440.png` · `search/search-results.1440.png`  
Öneri: recapture close-first veya leftover not  
Karar: onay bekliyor

---

## Sitemap leftover (kampanya / listicle / quiz LP)

`/pages/daily-health-quiz` · `/pages/wall-of-health` · `/pages/quiz` · `/pages/octane-quiz` · `/pages/why-im8-daily-essentials-is-the-best-multivitamin-for-men` · `/pages/im8-essentials-vs-ag1` · `/pages/david-beckham-im8` · `/pages/nutrition-for-athletes` · `/pages/7-reasons-*` · `/pages/8-reasons-*` · vs-competitor · seasonal. Quiz/wall bu turda 429. Temsilî sweep yok.

## Bilinçli atlananlar

- `/account` · Log in — PII  
- Checkout / Shop Pay — PII  
- Newsletter / contact form submit — PII  
- Cookie overlay (dismiss script)  
- Flavor quick-add ATC interact (3vp var; piksel değişimi denenmedi)  
- Discover mega hover (`#Details-HeaderMenu-3`)  
- PDP FAQ ikinci soru (custom accordion; `<details>` yok)  
- Cart empty 375 (flyout hidden; dolu 375 var)  
- PLP `trust-icon-row` 375 (0×0)  
- Menu drawer 1440 (hamburger 0px, beklenen)
