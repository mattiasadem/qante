# Atelier leftovers / adaylar

*Store:* https://theme-atelier-demo.myshopify.com  
*Tema (görülen, uydurulmadı):* **Updated copy of Atelier demo store 3.2.0** · `schema_name` **Atelier** · `schema_version` **3.4.0** · `theme_store_id` **3621** · role `main` · id `184916082986` · shop `se-horizon4-en-umir.myshopify.com`  
*Theme Store listing:* https://themes.shopify.com/themes/atelier — Free · by Shopify · Horizon ailesi  
*Tarih:* 2026-08-17

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: atelier-wrong-demo-password  
Gerekçe: `https://atelier-theme-demo.myshopify.com/` → `/password` (200, title atelier-theme-demo). Walk resmi `theme-atelier-demo.myshopify.com`.  
Örnekler: https://atelier-theme-demo.myshopify.com/password  
Öneri: leftover — yanlış host  
Karar: onay bekliyor

---

ADAY: atelier-horizon-nested-theme-blocks  
Gerekçe: Horizon `product-information__grid` + `media-gallery` + `group-block` iç içe. PDP `__main` Sera Mia ~10620px (galeri tek kolon), Louise ~2655px. Blog list `shopify-block` kart (static-blog-post-card + image + content). Home featured/product_list birkaç `product-price` block; çoğu section’da `shopify-block` 0.  
Örnekler: `/products/sera-mia-black` · `/blogs/news`  
Öneri: leftover — nested theme-block; buy box `.product-details` yazıldı  
Karar: onay bekliyor

---

ADAY: atelier-768-hamburger-zero  
Gerekçe: 768 `summary.header__icon--menu` 0×0. Header-menu `NEW IN BAGS SHOES MORE` (desktop nav). Hamburger yalnız 375 (46×46).  
Örnekler: `/collections/all` 768  
Öneri: leftover — 768 hamburger yok  
Karar: onay bekliyor

---

ADAY: atelier-pdp-gallery-tall  
Gerekçe: `#…__main` media-gallery Sera Mia ~10k px, Louise ~2.6k. Observation buy box `.product-details` (~605px). Related `#…__product_recommendations_iK4dxB` yalnız “You may also like” (~588px, kart yok).  
Örnekler: `/products/sera-mia-black` · `/products/louise-slide-sandal-south-america`  
Öneri: leftover — yükseklik / boş rec  
Karar: onay bekliyor

---

ADAY: atelier-color-as-separate-products  
Gerekçe: Sera Mia Black/Earth/Vanilla/Tan ayrı handle. Size varyantı Louise’de (35–41). Renk swatch bu walk’ta yok; claiming variant Size.  
Örnekler: `/products/sera-mia-black` → `/products/sera-mia-earth`  
Öneri: leftover — combined listing  
Karar: onay bekliyor

---

ADAY: atelier-plp-template-repeats  
Gerekçe: `/collections/all` (264 item) ve kategori koleksiyonları aynı `section` + `main` şablon. Yazılan: `/collections/shoulder-bags` (12 item).  
Örnekler: https://theme-atelier-demo.myshopify.com/collections/all  
Öneri: leftover — aynı tip tekrar  
Karar: onay bekliyor

---

ADAY: atelier-search-dress-mismatch  
Gerekçe: `/search?q=dress` title “1 result” ama main “No products found.” Claiming sorgu `bag` (241). Search başlık section (~126px “Search”) ayrı leftover.  
Örnekler: https://theme-atelier-demo.myshopify.com/search?q=dress  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: atelier-404-routes  
Gerekçe: Aynı 404 (`__main` Page not found + product_list): `/pages/about` `/pages/shipping` `/pages/returns` `/pages/shipping-and-returns` `/policies/shipping-policy` `/policies/refund-policy`. `/pages/about-us` 200.  
Örnekler: https://theme-atelier-demo.myshopify.com/pages/about  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

ADAY: atelier-native-privacy  
Gerekçe: `/policies/privacy-policy` 200, metin `main` içinde; shopify-section yok (header/footer hariç).  
Örnekler: https://theme-atelier-demo.myshopify.com/policies/privacy-policy  
Öneri: leftover — native policy  
Karar: onay bekliyor

---

ADAY: atelier-faq-same-page-template  
Gerekçe: `/pages/faq` 200, `__main` düz metin (accordion/details yok). Aynı template id shipping/return (`26420035977514__main`). Claiming: shipping-policy.  
Örnekler: https://theme-atelier-demo.myshopify.com/pages/faq  
Öneri: leftover — aynı page-content  
Karar: onay bekliyor

---

ADAY: atelier-return-policy-repeat  
Gerekçe: `/pages/return-policy` 200, aynı `__main` şablon shipping ile. Yazılan: shipping-policy.  
Örnekler: https://theme-atelier-demo.myshopify.com/pages/return-policy  
Öneri: leftover — aynı tip  
Karar: onay bekliyor

---

ADAY: atelier-footer-utilities  
Gerekçe: `#…__footer_utilities` 60px “© 2026 Atelier, Powered by Shopify”. Claiming footer `migrated_footer_content`.  
Örnekler: home footer  
Öneri: leftover — ince bar  
Karar: onay bekliyor

---

ADAY: atelier-cart-divider  
Gerekçe: Cart `#…__divider_aaknnG` ~101px boş.  
Örnekler: `/cart`  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: atelier-quick-add-dialog  
Gerekçe: `quick-add-dialog` / `quick-add-component` DOM’da. Interact istenmedi; ATC drawer/sayfa yazıldı.  
Örnekler: home product_list CHOOSE/ADD  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: atelier-announcement-none  
Gerekçe: announcement-bar yok.  
Örnekler: home  
Öneri: leftover — chrome yok  
Karar: onay bekliyor

---

ADAY: atelier-pii-stop  
Gerekçe: Footer newsletter + contact SUBMIT + cart Check out + header account (`shopify-account`) tıklanmadı.  
Örnekler: footer · `/pages/contact` · cart drawer  
Öneri: PII / checkout stop  
Karar: onay bekliyor

---

## Interact not (capture sonrası güncellenecek)

- Mega 1440 NEW IN: SERA MIA / MONOLIT / NEO + Monolit kartları (hover probe).
- 375 hamburger: New in / Bags / Shoes / Accessories.
- Search `#cmdk-input` + `bag`.
- Cart drawer `dialog.cart-drawer__dialog`.
- PDP Size 35 → 36 Louise $415.
