# Eurus leftovers / adaylar

*Store:* https://eurus-breath-demo.myshopify.com/  
*Tema (görülen):* ** Breath 10.1.0** · `schema_name` **Eurus** · `schema_version` **10.1.0** · `theme_store_id` **null**  
*Tarih:* 2026-08-17

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: eurus-404  
Gerekçe: `/pages/this-page-does-not-exist-xyz-eurus` → “404 / Page not found / Continue shopping”. Taksonomide 404 pageType yok.  
Örnekler: https://eurus-breath-demo.myshopify.com/pages/this-page-does-not-exist-xyz-eurus  
Öneri: candidate — `page-content-main` observation var  
Karar: onay bekliyor

---

ADAY: eurus-store-locator  
Gerekçe: Home `multiple_stores_kywcpL` “Visit our stores” (6 görsel). Mevcut 18 kategoride store-locator yok. `features-multicolumn` zorlanmadı.  
Örnekler: https://eurus-breath-demo.myshopify.com/  
Öneri: leftover — yeni şema yok  
Karar: onay bekliyor

---

ADAY: eurus-product-quiz  
Gerekçe: Görev notu quiz/finder. Breath resmi preset’te `/pages/quiz`, `/pages/product-quiz`, `/pages/product-finder` **404**. Mega/theme-features/home-template’lerde quiz section yok. “recommend” eşleşmeleri testimonial + product-recommendations.  
Örnekler: yok (Breath)  
Öneri: ertele — başka Eurus preset’te aranabilir  
Karar: Breath’te yok

---

## 404 / boş / ince URL’ler

- `/pages/about` · `/pages/about-us` — 404 (about = `/pages/our-promises`)
- `/pages/quiz` · `/pages/product-quiz` · `/pages/product-finder` — 404
- `/pages/bundle` · `/pages/bundle-builder` — 404 (bundle = home `products_bundle`)
- `/pages/home-template-1` … `6` · `/pages/homepage-2` — ekstra home preset’ler; walk dışı leftover
- `/pages/theme-features` — Omni satış sayfası (walk dışı)
- `/pages/our-services` — boarding/grooming landing (walk dışı leftover)
- `recently-viewed` PLP — ilk ziyarette boş
- `main-collection-list-banner` — h=0
- `product-recommendations` grain-free PDP — h≈160 boş/ince
- `cart-footer` Estimate shipping — cart-items’tan ayrı; checkout/PII
- aside: cookie-banner, promotion-popup, store-selector, product-labels — h=0

## Bilinçli atlananlar

- `/account/login` — auth
- Checkout / Shop Pay / kupon `NEW-BREATH` kullanma
- Newsletter e-posta submit (footer SUBSCRIBE)
- Contact / FAQ form Send — PII
- Blog comment submit
- Buy it now
- Home-template 1–6 / theme-features / our-services tam envanter
- Other Industries (omnithemes.com) — storefront dışı
