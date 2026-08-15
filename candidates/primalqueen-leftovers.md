# Primal Queen leftovers / adaylar

*Store:* https://primalqueen.com · *Tema (görülen):* Dev By Vasta - Main · schema_name Sense 11.0.0 · custom (`theme_store_id` null) · shop `3be06b-2.myshopify.com`  
*Tarih:* 2026-08-15 · 38 obs · resmi 3vp

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: primalqueen-404  
Gerekçe: `/this-page-does-not-exist-qante` ve `/pages/our-story` `/pages/faq` → Sense 404 “Page not found / Continue shopping”. Taksonomide 404 pageType yok. Observation `not-found/page-content-main` yazıldı.  
Örnekler: https://primalqueen.com/this-page-does-not-exist-qante  
Öneri: leftover — yeni pageType yok  
Karar: onay bekliyor

---

ADAY: primalqueen-stamped-reviews  
Gerekçe: Home/PDP/shop-all/clinical `stamped_keyword_filters` + büyük Stamped widget (4.6 / ~25k reviews). `/pages/reviews` yalnız başlık + aynı widget. Reviews şeması yok.  
Örnekler: https://primalqueen.com/ · https://primalqueen.com/pages/reviews  
Öneri: ertele — testimonial-quote-carousel (home `reviews_showcase`) ayrı; Stamped üçüncü parti  
Karar: onay bekliyor

---

ADAY: primalqueen-sticky-cta  
Gerekçe: `sticky_footer_dPygXY` section h=0; iç `.sticky-footer__section` `position:fixed` + `is-hidden` (scroll sonrası ANNIVERSARY SALE / GET 1ST MONTH FREE / UNLOCK NOW!). Feature / sticky CTA tipi yok.  
Öneri: leftover — promo-announcement-bar ikinci instance zorlama  
Karar: onay bekliyor

---

ADAY: primalqueen-no-predictive-search  
Gerekçe: Header’da arama ikonu yok. Sonuç yalnız `/search?q=…`. `global-predictive-search` observation yok.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: primalqueen-no-cart-drawer  
Gerekçe: `header-pq__bag-link` → `/cart`. Native Sense cart page var (`cart-page-main`). Drawer yok.  
Öneri: leftover — `global-cart-drawer` zorlama  
Karar: onay bekliyor

---

ADAY: primalqueen-gorgias-help-center  
Gerekçe: `/pages/contact?hcUrl=%2Fen-US` — host metin + iframe `#il6gw5fm` `help-center.gorgias.help` (Hi, how can I help you? / Search / FAQ). Form doldurulmadı (PII).  
Örnekler: https://primalqueen.com/pages/contact  
Öneri: ertele — `lead-capture-form` değil  
Karar: onay bekliyor

---

ADAY: primalqueen-privacy-offsite  
Gerekçe: Privacy / CA notice / opt-out → `privacy.primalqueen.com` (Shopify section yok).  
Örnekler: https://privacy.primalqueen.com/privacy-policy  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: primalqueen-empty-terms  
Gerekçe: `/policies/terms-of-service` title “Terms of service” ama main section yok — yalnız countdown + footer.  
Örnekler: https://primalqueen.com/policies/terms-of-service  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: primalqueen-empty-retail  
Gerekçe: `/pages/retail` (Store Locator footer) — countdown/header/footer dışında section yok.  
Örnekler: https://primalqueen.com/pages/retail  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: primalqueen-empty-blog  
Gerekçe: `/blogs/news` “News” 108px boş liste. `/pages/blog-page` section yok. `blogs.json` boş.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: primalqueen-advertorial-lps  
Gerekçe: Onlarca pages.json advertorial (adv, 7-myths, beef-organs-lander, pq7-quiz, mid-year-reset…). PQ7 `video_reviews` ~18k px; Goddess devamı. Tip yok / aynı long-form tekrar.  
Öneri: leftover — hero/buy observation yazılanlar hariç  
Karar: onay bekliyor

---

ADAY: primalqueen-marrow-redirect  
Gerekçe: `/pages/marrow` artık sabit şablon değil — 1440/375 `/pages/marrow-5-point-test` (marrow_lp4 0px), 768 `whennothingworked.com/marrow-5-point-test` (off-site). İlk walk’taki buy_box/faq id’leri yok. Observation silindi.  
Örnekler: https://primalqueen.com/pages/marrow  
Öneri: leftover — A/B / harici LP  
Karar: onay bekliyor

---

ADAY: primalqueen-loop-subscription  
Gerekçe: Manage Subscription → `/a/loop_subscriptions/get-subscription-link` (Loop). Hesap/e-posta — PII.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: primalqueen-partnership-form  
Gerekçe: `/pages/referal-signup-form` affiliate. PII.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: primalqueen-sale-ticker  
Gerekçe: Hero/buy-box karelerinde “Anniversary Sale: 35% Off + 4 Free Gifts” kayan şerit. Ayrı shopify-section id yok; overlay/ticker. `promo-scrolling-marquee` zorlanmadı.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: primalqueen-merch-filter-mobile  
Gerekçe: `/collections/merch` Hoodies pill 1440’ta grid’i 2 karta indirdi. 375/768 `button[data-merch-filter=hoodies]` DOM’da 0×0 / not visible.  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: primalqueen-pdp-clones  
Gerekçe: Beef Organs PDP home ile aynı custom blokları tekrarlıyor (founder, timeline, how-to, UVP, Stamped, FAQ). Yalnız main + comparison + who-is + not-for observation.  
Öneri: leftover tekrar  
Karar: onay bekliyor
