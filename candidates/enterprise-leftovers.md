# Enterprise leftovers

*Kaynak:* https://enterprise-theme-digital.myshopify.com/  
*Preset:* `digital` (Digital) · Clean Canvas  
*Tema gözlemi:* **enterprise-v2.3.0** · `schema_name` Enterprise · `schema_version` 2.3.0 · `theme_store_id` **null** · theme id `187891679520`

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id uydurulmadı.
- `schema_name` **Enterprise** (Clean Canvas ailesi; Symmetry/Canopy/Showcase ile cc-* sınıfları paylaşır).
- Preset klasörü `digital` = resmi Digital vitrin.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `/blogs/news` | 404. Blog = `/blogs/reviews` |
| Account / login | Header Account — dur |
| Checkout | drawer/sayfa Check out — tıklanmadı |
| Newsletter submit / contact form / blog comment | PII — dur |
| Flash Sale popup modals (`cc-pop-up` ×3) | Gizli overlay; statik capture 0px veya dismiss. Interact leftover |
| `global-cart-drawer` | Kapalı drawer; Mod A statik yok. Interact leftover |
| `global-compare-drawer` | Kapalı compare overlay. Interact leftover |
| `global-predictive-search` | Header search interact gerekir. Interact leftover |
| `global-menu-drawer` | Mobil hamburger interact gerekir. Interact leftover |
| `global-quick-view` | PLP kart hover + quick view. Interact leftover |
| Blog `article-comments` | Yorum formu PII — dur |
| Cart dolu state / qty | Mod A yalnız boş `/cart`. Interact leftover |
| PDP `cc-product-details` | 1440'da yükseklik 0 — içerik main product blokta. 375/768 kanıt var |
| Mega menu hover 1440 | Interact leftover |
| `/pages/*` about/contact/faq | Home FAQ + footer linkleri yeterli; ayrı sayfa walk yok |

## Aday (yeni şema yok)

- **cc-promo-strip (header group)** — statik flash sale şeridi. `promo-scrolling-marquee` + delta (animasyon yok).
- **cc-product-details** — PDP alt blok. `product-info-tabs` + delta (variant-dependent section).
- **cc-quick-links** — pill buton satırı. `collection-nav-icon-buttons` + delta (ikon yok, metin pill).
- **cc-product-comparison-grid** — karşılaştırma tablosu. `comparison-quick-table` reuse.
- **cc-pop-up + countdown** — modal promo. Şema yok; interact leftover.
- **cc-compare overlay** — `global-compare-drawer` + delta.
- **cc-media-with-text (blog list)** — `editorial-image-with-text` + delta.

## Aday (CRO leftover interact)

ADAY: enterprise-cro-interact-2026-08-20  
Gerekçe: Mod A statik envanter sonrası davranış kanıtı. Mega · predictive search · menu drawer · cart drawer · compare · popup dismiss · PDP variant · FAQ accordion · testimonial yok · countdown tick.  
Örnekler: `/` · `/products/d3400` · `/collections/all-products`  
Öneri: leftover — şema uydurma yok
