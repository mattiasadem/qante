# Outdoor Voices — leftovers & adaylar

*Kaynak:* https://www.outdoorvoices.com/ · *Preset:* `default`  
*Tema:* Outdoor Voices Theme **0.1.0** · `theme_store_id` null · shop `outdoor-voices.myshopify.com` · handle August OV Outdoors_Kindred

---

## Platform / üçüncü taraf

| Parça | Not |
|---|---|
| Doofinder search | `.dfd-layer` overlay — `global-predictive-search` observation + delta (Shopify predictive değil) |
| Okendo reviews | PDP `#shopify-section-template--21402058784846__1739205950b7d8f4e0` ~1892px — filtre, Q&A, Write a Review |
| Okendo post-ATC modal | `.oke-modal` ATC sonrası cart tıklamasını bloklar — interact Escape ile kapatıldı |
| Sticky footer home | `#shopify-section-footer` home scroll'da h=0; footer observation blog-list URL'den |

---

## ADAY: outdoorvoices-okendo-reviews

**Gerekçe:** PDP reviews section Okendo widget (4.6 / 21 reviews, Reviews + Questions tabs, histogram). `testimonial-quote-carousel` merchant alıntısı değil; reviews ailesi yok.

**Örnek:** https://www.outdoorvoices.com/products/w-rectrek-zip-pant-pink-dust

**Öneri:** ertele — reviews şeması yok (Chomps/Cuts leftover ile aynı borç)

---

## ADAY: outdoorvoices-faq-help-center

**Gerekçe:** `/pages/faq` yalnızca başlık (~84px). Gövde Help Center / harici widget veya lazy embed — accordion section yok.

**Örnek:** https://www.outdoorvoices.com/pages/faq

**Öneri:** leftover — `faq-collapsible-tabs` zorlama

---

## Walk dışı / PII

| URL / akış | Sebep |
|---|---|
| `/cart` sayfa | Drawer-only; ayrı cart page yok |
| Checkout / payment | PII yok |
| Account login / register | PII yok |
| Newsletter submit footer | PII yok — footer'da form yok |
| OV Extra Sale filtre URL'leri | Walk'ta temsilci PLP yeterli |

---

## Interact eksikleri

| Bileşen | Eksik |
|---|---|
| navigation-header-mega open | Men hover mega — Women yalnız 1440 |
| global-menu-drawer | 1440 N/A (desktop mega) |
| product-info-main changed | Beden pill piksel değişimi minimal olabilir |
