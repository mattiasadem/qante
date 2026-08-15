# David Protein leftovers / adaylar

*Store:* https://davidprotein.com · *Tema:* `[Production-2.8.1] 8.12.2026` · `schema_name` **David Protein** 2.8.1 · `theme_store_id` null · shop `1f74d5-3d.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz — yalnız kanıtsız / sığmayan / atlanan.

---

ADAY: davidprotein-klaviyo-goal-quiz  
Gerekçe: Gecikmeli tam ekran Klaviyo (`form.klaviyo-form`, `button.klaviyo-close-form`, “You've got 10% off and a free variety pack” / “Tell us your goal with David” / HIT MY PROTEIN TARGET… / No thanks). `role=dialog` fixed. Interact settle + scroll sonrası ~5 sn. Tema section değil. Escape / No thanks kapatır. İlk interact PNG’leri bunu yakaladı; recapture Escape sonrası temiz.  
Örnekler: https://davidprotein.com/  
Öneri: app popup — şema yok  
Karar: onay bekliyor

---

ADAY: davidprotein-yotpo-reviews  
Gerekçe: Home/PLP/subscribe `#liquid_*` “Real people. Real results.” Yotpo carousel `testimonial-quote-carousel`’a map edildi. PDP “Your words, not ours. 4.6 / 1194 reviews” + `/pages/reviews` Search/Rating/Sort tam widget — filtre/sort ailesi yok.  
Örnekler: https://davidprotein.com/products/salted-peanut-butter · https://davidprotein.com/pages/reviews  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: davidprotein-interactive-macro-chart  
Gerekçe: Home `#interactive_chart_kGbQqx` Calories from protein / Macros + rakip toggle (Built/Quest/Barebells). `comparison-quick-table` observation + 3vp + changed Macros kanıtı var; iskelet tablo değil grafik.  
Örnekler: https://davidprotein.com/  
Öneri: comparison ailesi / ayrı varyant  
Karar: onay bekliyor

---

ADAY: davidprotein-gorgias-help-contact  
Gerekçe: `/pages/contact` Gorgias form (gönderilmedi). `/pages/help-center` liquid Help Center. Her sayfada `gorgias-chat-key-*` — tıklanmadı.  
Örnekler: https://davidprotein.com/pages/contact · https://davidprotein.com/pages/help-center  
Öneri: ertele — iframe / PII  
Karar: onay bekliyor

---

ADAY: davidprotein-store-locator  
Gerekçe: `/pages/store-locator` başlık + locator section yakalandı; harita loading/kopya. PDP `find_in_store` 0×0. Taksonomide locator yok.  
Örnekler: https://davidprotein.com/pages/store-locator  
Öneri: map / locator ailesi  
Karar: onay bekliyor

---

ADAY: davidprotein-subscription-selling-plan  
Gerekçe: `/pages/subscription?selling_plan=` + PDP Subscribe $35.10 / $39. Fiyat motoru şemaya girmedi.  
Örnekler: https://davidprotein.com/pages/subscription  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: davidprotein-bundle-builder  
Gerekçe: `/products/build-a-bundle` Bronze/Gold seçici. `commerce-tools-products-bundle` 3vp var; kategori `candidates/commerce-tools.md`.  
Örnekler: https://davidprotein.com/products/build-a-bundle  
Öneri: commerce-tools  
Karar: onay bekliyor

---

ADAY: davidprotein-mega-panel  
Gerekçe: Header’da `Details-HeaderMenu-*` + `#tabpanel-*` class `hidden` 0×0. Shop all `<a>` `/collections/shop`’a gider. LI hover / tab button piksel açmadı. `missingStates.open`.  
Örnekler: https://davidprotein.com/  
Öneri: ertele — hover panel kanıtsız  
Karar: onay bekliyor

---

ADAY: davidprotein-pdp-anchor-zero  
Gerekçe: `#…__anchor_section_FxFcmk` resmi capture 3vp zero-size. “Built for Performance” metni `product-info-main` içinde. Observation boş evidence — claiming değil.  
Örnekler: https://davidprotein.com/products/salted-peanut-butter  
Öneri: sil veya product-info knob  
Karar: onay bekliyor

---

ADAY: davidprotein-pdp-comparison-1440  
Gerekçe: `#…__product_comparison_JkGAzy` 375/768 resmi; 1440 iki denemede zero-size.  
Örnekler: https://davidprotein.com/products/salted-peanut-butter  
Öneri: desktop hydrate  
Karar: onay bekliyor

---

ADAY: davidprotein-wholesale-wizard-pii  
Gerekçe: `/pages/wholesale` hero + `lead-capture-form` Step 1/4 Applicant Info 3vp (boş form). Continue/PII doldurulmadı. Adımlar 2–4 yok.  
Örnekler: https://davidprotein.com/pages/wholesale  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: davidprotein-cf-429-rate  
Gerekçe: Hızlı walk Cloudflare 429 (“Your connection needs to be verified”). Section ID kayması (212489→214174). Yavaş retry ile çoğu içerik 200.  
Örnekler: (geçici) /search?q=protein  
Öneri: yavaş capture  
Karar: onay bekliyor

---

## Bilinçli atlananlar

- `/account` / checkout / newsletter Email|SMS submit — PII  
- Wholesale Continue + Applicant Info doldurma — PII  
- Cookie consent metni (X / Escape)  
- Gorgias live chat — tıklanmadı  
- FAQ sayfasında Subscriptions / Wholesale / Cod / Pints — aynı `faq-collapsible-tabs`, 3 kategori obs  
- Theme Store adı — `theme_store_id` null, uydurulmadı  
- `exposed_nav` 1440 0×0 — yalnız 375/768  
- Mobile menu 1440 — hamburger `lg:hidden`  
- Kart quick-view (göz / plus) — piksel değişimi denenmedi  
- PDP FAQ ilk soru zaten açık — ekstra click yok  
