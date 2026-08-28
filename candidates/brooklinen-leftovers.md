# Brooklinen leftovers / adaylar

*Store:* https://www.brooklinen.com · *Tema (görülen):* Release 2026-Q-1 · schema_name Dawn · 7.0.0 · theme_store_id null · shop brooklinen2.myshopify.com  
*Tarih:* 2026-08-21

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: brooklinen-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Dawn tabanlı özel fork (Release 2026-Q-1); Theme Store ID uydurulmadı.  
Örnekler: home `Shopify.theme`  
Öneri: leftover — ID uydurma  
Karar: onay bekliyor

---

ADAY: brooklinen-pdp-yotpo-reviews  
Gerekçe: `#shopify-section-template--21538440773722__reviews` — Yotpo REVIEWS/Q&A widget (~2700px). Taksonomide native reviews section şeması yok; `testimonial-quote-carousel` uymaz.  
Örnekler: https://www.brooklinen.com/products/luxe-core-sheet-set  
Öneri: leftover — yeni tip / app katmanı  
Karar: onay bekliyor

---

ADAY: brooklinen-duo-shop-module  
Gerekçe: `#…__module_duo_shop_8zErep` — `duo-shop-module` web component; 4 ürün kartı + Shop Now. En yakın `promo-grid-banner` observation yazıldı; özel layout delta'da.  
Örnekler: https://www.brooklinen.com/  
Öneri: map tartışması — ayrı varyant?  
Karar: onay bekliyor

---

ADAY: brooklinen-nudge-offer  
Gerekçe: Header `.nudge-trigger` “Claim Your Offer” + `content-drawer` Offer Terms (20% bed / 40% bundles). Kampanya nudge; mevcut promo şemalarına tam uymuyor.  
Örnekler: home navigation  
Öneri: leftover — spotlight/nudge  
Karar: onay bekliyor

---

ADAY: brooklinen-external-account  
Gerekçe: Account `header__account-trigger` → harici `account.brooklinen.com` + Sign In / Create Account / My Rewards / Wishlist. Login tıklanmadı (PII).  
Örnekler: home header  
Öneri: leftover — harici auth  
Karar: onay bekliyor

---

ADAY: brooklinen-cart-filled-interact  
Gerekçe: Mod A yalnız boş cart drawer + boş `/cart` sayfası. Dolu sepet / qty değişimi interact yok.  
Örnekler: https://www.brooklinen.com/cart · cart drawer  
Öneri: sıradaki tur — `capture-interaction.mjs`  
Karar: onay bekliyor

---

ADAY: brooklinen-mega-hover-interact  
Gerekçe: Desktop mega `content-drawer` + `drawer-wrapper` kolonları (Sheets/Bed/Bath/Bundle/Home) hover ile açılıyor; Mod A statik header kanıtı var, açık mega interact yok.  
Örnekler: home `#shopify-section-navigation`  
Öneri: sıradaki tur — navigation-header-mega open state  
Karar: onay bekliyor

---

ADAY: brooklinen-search-query-interact  
Gerekçe: Predictive search boş sorgu kanıtlandı; `sheets` fill + sonuç overlay interact yok.  
Örnekler: home search button  
Öneri: sıradaki tur — global-predictive-search input state  
Karar: onay bekliyor

---

ADAY: brooklinen-empty-dy-sliders  
Gerekçe: Search `#…__module_collection_gEfVLQ` h≈80px boş. PDP `#…__product_recommendations_dy_fz8BGa` h≈80px boş. Dynamic Yield placeholder.  
Örnekler: search?q=sheets · luxe-core-sheet-set PDP  
Öneri: leftover — boş section  
Karar: onay bekliyor

---

ADAY: brooklinen-content-pages-not-walked  
Gerekçe: Mod A rota blog ile kapandı. About/FAQ/policy/contact sayfaları bu turda taranmadı.  
Örnekler: `/pages/about-us` · `/pages/faq` · `/policies/privacy-policy`  
Öneri: sıradaki tur veya Mod A genişletme  
Karar: onay bekliyor

---

## PII dur (observation yok)

Checkout · newsletter submit · account login · Ometria email capture · OneTrust tercih paneli derinliği
