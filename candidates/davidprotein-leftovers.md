# David Protein leftovers / adaylar

*Store:* https://davidprotein.com · *Tema:* `[Production-2.8.1] 8.12.2026` · `schema_name` **David Protein** 2.8.1 · `theme_store_id` null · shop `1f74d5-3d.myshopify.com`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: davidprotein-cloudflare-429  
Gerekçe: Hızlı walk sonrası Cloudflare “Your connection needs to be verified” 429. Etkilenen: `/search?q=protein`, `/cart`, `/pages/about-our-bar`, `/blogs/the-column` + article, `/pages/store-locator`, `/pages/privacy-policy`, `/pages/terms-of-service`, `/pages/wholesale`, `/pages/satisfaction-guarantee`, `/pages/third-party-testing`, 404, sitemap query. Overlay/drawer home’dan alındı.  
Örnekler: https://davidprotein.com/search?q=protein  
Öneri: yavaş retry; native search-results / cart-page-main / blog zorlama  
Karar: onay bekliyor

---

ADAY: davidprotein-yotpo-reviews  
Gerekçe: Home/PLP/subscribe `#liquid_*` “Real people. Real results.” Yotpo carousel `testimonial-quote-carousel`’a map edildi. PDP `#…__17533868038e2a8705` “Your words, not ours. 4.6 / 1194 reviews” + Reviews sayfası `#liquid_arRwGt` (Search reviews / Rating / Sort) tam Yotpo widget — filtre/sort ailesi yok.  
Örnekler: https://davidprotein.com/products/salted-peanut-butter · https://davidprotein.com/pages/reviews  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: davidprotein-interactive-macro-chart  
Gerekçe: Home `#interactive_chart_kGbQqx` Calories from protein / Macros + Protein|Sugar. David vs Built/Barebells/Quest dipnotu. `comparison-quick-table` observation + geniş delta; iskelet tablo değil grafik.  
Örnekler: https://davidprotein.com/  
Öneri: comparison ailesi / ayrı varyant  
Karar: onay bekliyor

---

ADAY: davidprotein-gorgias-help-contact  
Gerekçe: `/pages/contact` ~1427px boş metin section + `/pages/help-center` liquid ~1395px boş. Gorgias chat iframe (`gorgias-chat-key-*`) her sayfada. Form/PII yoklandı değil.  
Örnekler: https://davidprotein.com/pages/contact · https://davidprotein.com/pages/help-center  
Öneri: ertele — iframe  
Karar: onay bekliyor

---

ADAY: davidprotein-store-locator  
Gerekçe: Nav + footer “Store locator” `/pages/store-locator`. PDP `find_in_store_hQa9Hk` 0×0. Sayfa CF 429. Taksonomide locator yok.  
Örnekler: https://davidprotein.com/pages/store-locator  
Öneri: map / locator ailesi  
Karar: onay bekliyor

---

ADAY: davidprotein-subscription-selling-plan  
Gerekçe: `/pages/subscription?selling_plan=` + PDP Subscribe $35.10 / $39. commerce-tools adayı; fiyat motoru şemaya girmedi.  
Örnekler: https://davidprotein.com/pages/subscription  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: davidprotein-bundle-builder  
Gerekçe: `/products/build-a-bundle` `#…__bundle` Bronze/Gold seçici. `commerce-tools-products-bundle` observation var; aday kategori zaten `candidates/commerce-tools.md`.  
Örnekler: https://davidprotein.com/products/build-a-bundle  
Öneri: commerce-tools  
Karar: onay bekliyor

---

## Bilinçli atlananlar

- `/account` / checkout / newsletter Email|SMS submit — PII  
- Cookie consent metni (X ile kapanır; form yok)  
- Gorgias live chat — tıklanmadı  
- FAQ sayfasında Subscriptions / Wholesale / Cod / Pints blokları — aynı `faq-collapsible-tabs`, 3 kategori obs yeter  
- Theme Store adı — `theme_store_id` null, uydurulmadı  
- `exposed_nav` 1440 0×0 — yalnız mobil
