# Coffee Prime leftovers

Speedo Themes · `coffee-prime` · official demo https://coffee-prime.myshopify.com/ · password `1`

## Şemaya sığmayan / kapsam dışı

| Bileşen | Neden | Karar |
|---|---|---|
| `#shopify-section-newsletter-popup` | Newsletter popup — PII, submit yok | leftover · zenon |
| `/pages/wishlist` | Boş wishlist sayfası — ayrı commerce feature | leftover · candidates |
| `#category-box` All Categories | Header'da ayrı kategori kutusu — mega değil, drawer değil | delta navigation-header-mega · Açık soru: ayrı global schema? |
| PDP countdown `HURRY UP! SALES END IN` | Buy-box içi timer — product-info-main delta | promo-banner-countdown değil (section değil) |
| Compare | Tema compare yok | — |
| Mega menu | Mega class/panel yok — Shop details dropdown + All Categories | delta navigation-header-mega |
| `/pages/faqs` | 404 — canonical `/pages/faq` | delta faq-support |
| `/pages/our-story` | 404 | — |
| Account / checkout / newsletter submit | ⛔ interact dur | — |
| `#shopify-section-template--23278859944242__16572629707050636d` | PDP h=0 boş section | DOM noise |

## Açık sorular

1. **All Categories (`#category-box`)** — 1440+375 görünür; tıklanınca kategori listesi mi açılıyor? Ayrı `global-category-drawer` adayı mı?
2. **Cart icon** — Header `Cart` linki `/cart` sayfasına gidiyor; drawer her zaman açılıyor mu?
3. **PDP countdown** — Merchant slot mu theme setting mi? product-info-main içinde.
