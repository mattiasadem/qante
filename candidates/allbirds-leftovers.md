# Allbirds leftovers / adaylar

*Store:* https://www.allbirds.com · *Platform:* Shopify custom (theme id ~4159)  
*Tarih:* 2026-08-21

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: allbirds-product-reviews-widget  
Gerekçe: PDP `#shopify-section-template--16476865921104__product_reviews_BTfBq7` — Reviews accordion paneli app widget (Judge.me/Yotpo benzeri). `product-info-tabs` accordion iskeleti; puan dağılımı + liste ayrı tip.  
Örnekler: https://www.allbirds.com/products/mens-tree-runner-nz-medium-grey  
Öneri: reviews ailesi aday — şema icat yok  
Karar: onay bekliyor

---

ADAY: allbirds-post-atc-modal  
Gerekçe: Header-group `#shopify-section-sections--16476871000144__post_atc_modal_section_abc123` — sepete ekleme sonrası modal (Vue). `global-cart-drawer` ayrı.  
Örnekler: PDP add-to-cart sonrası  
Öneri: promo/modal aday  
Karar: onay bekliyor

---

ADAY: allbirds-geofencing-banner  
Gerekçe: Footer-group `#shopify-section-sections--16476870967376__geofencing` — bölgesel yönlendirme / locale gate. `promo-announcement-bar` değil.  
Örnekler: footer-group (US walk)  
Öneri: trust/promo aday  
Karar: onay bekliyor

---

ADAY: allbirds-pdp-comparison-table  
Gerekçe: PDP `product_comparison_ayzYaX` / `product_comparison_qKenae` / `style_panel_jYNPUp` / `side_by_side_kAejcU` — ürün karşılaştırma ve stil paneli. `comparison-quick-table` yakın ama kanıtlanmadı.  
Örnekler: https://www.allbirds.com/products/mens-tree-runner-nz-medium-grey (lazy/hydrate)  
Öneri: comparison varyant aday  
Karar: onay bekliyor

---

ADAY: allbirds-help-center-app  
Gerekçe: `/pages/help` yalnız `full_width_banner` + email; tam FAQ/help center harici app olabilir (Gorgias). `/pages/faq` → 404.  
Örnekler: https://www.allbirds.com/pages/help · footer FAQ/Contact Us → /pages/help  
Öneri: `page-content-main` banner kanıtlandı; app shell aday  
Karar: onay bekliyor

---

## Rota / chrome notları

| Rota | Durum |
|---|---|
| `/pages/holiday-gift-guide` | Walk skipped — listicle/advertorial not in Mod A batch |
| `/cart` | 302/JS → `/?openCartDrawer=true` — native `cart-page-main` yok |
| `/pages/faq` | 404 (Uh-Oh template) |
| `/search?q=tree` (type yok) | 500 — `type=product` ile 200 |
| Search header icon | `/search` sayfasına gider; `global-predictive-search` overlay yok |
| `/blogs/allbirds` | 404 — blog: `/blogs/the-perch`, `/blogs/news` |

## Bilinçli atlananlar

- Checkout / account login — PII  
- Footer newsletter SIGN UP submit — PII  
- Product Reviews accordion tıklanmadı (app widget)  
- Geofencing / post-ATC modal — interact yok  
- Home `large_product_carousel_us` — HTML'de var, render h=0 (kaldırılmış veya koşullu)  
- Materials / shoe-care / community-offers sayfaları — walk dışı (about/help yeterli)
