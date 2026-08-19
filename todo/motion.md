# Todo — Motion (Shopify) · Motion + Satchel + Memo

*Kaynak Motion:* https://motion-theme-adventure.myshopify.com/  
*Kaynak Satchel:* https://motion-theme-accessories.myshopify.com/  
*Kaynak Memo:* https://motion-theme-home.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/motion

**Şu anki odak:** ✅ üç resmi preset + official CRO leftover interact — 69 obs · 231 kare · 0 yeni şema

| Preset | Demo |
|---|---|
| motion | https://motion-theme-adventure.myshopify.com/ |
| satchel | https://motion-theme-accessories.myshopify.com/ |
| memo | https://motion-theme-home.myshopify.com/ |

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/motion/{motion,satchel,memo}/` |
| Observation | **69** |
| Evidence PNG | **231** |
| Yeni şema | **0** |
| Atlandı | newsletter-popup · theme-features · `/pages/lookbook` 404 · Motion `/pages/contact` 404 (`/pages/contact-us`) |
| Leftover | [`candidates/motion-leftovers.md`](../candidates/motion-leftovers.md) |

**Kapsam satırı:**  
`Motion · 3 preset · 69 gözlem · 231 kanıt · 0 yeni şema · WEAR/CARRY + CRO leftover interact`

---

## Faz

- [x] F1 Motion home + globals
- [x] F2 Motion PLP / PDP / search / cart
- [x] F3 Motion about / faq / contact / journal
- [x] F4 Satchel delta
- [x] F5 Memo delta
- [x] F6 Interact — WEAR → CARRY (768/1440)
- [x] F7 CRO leftover interact — FAQ / countdown / reviews (official)

---

## Sayfa haritası — Motion

| sayfa | URL | Not |
|---|---|---|
| home | `/` | slideshow · WEAR/CARRY · video · countdown |
| collection | `/collections/all` | |
| product-detail | `/products/merino-wool-quarter-zip` | |
| search | `/search?q=jacket` | 4 sonuç |
| cart | `/cart` | Popular picks |
| about-brand | `/pages/about` | form + IWT |
| faq-support | `/pages/faq` | |
| contact | `/pages/contact-us` | `/pages/contact` 404 |
| blog-list | `/blogs/journal` | |
| blog-post | `/blogs/journal/a-better-weekend-kit` | |

## Interact

- `product-showcase-tabs` — WEAR Quarter-Zip → CARRY Hip Pack (375 değişmedi)
- `faq-collapsible-tabs` — initial kapalı → changed ilk soru açık (3vp)
- `promo-banner-countdown` — initial → changed saniye tick (3vp). Shop Collection tıklanmadı
- `testimonial-quote-carousel` — initial MARCUS (hydrate) → changed COLE nokta 4 (3vp). Escape popup
- `lead-capture-form` / `lead-capture-newsletter-band` — tarandı, doldurulmadı (PII)

## Bilinçli boşluklar

1. Newsletter popup — şema yok
2. Theme Features satış sayfası
3. Lookbook sayfası 404; Memo “2026 lookbook” overlay IWT
4. Mega / arama / sepet drawer — Impulse chrome tekrarı, bu turda yok
5. Header shopify-section home’da 0; `#SiteHeader` viewport
