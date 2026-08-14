# Todo — Prestige (Shopify) · Vogue

*Kaynak:* https://prestige-theme-vogue.myshopify.com/  
*Preset:* `vogue` · Maestrooo Prestige · Artifact Skin Co.

**Şu anki odak:** Vogue tam tur bitti

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/prestige/vogue/` |
| Walkthrough / not | Theme Store: https://themes.shopify.com/themes/prestige/presets/vogue |
| Kapsam satırı (bitince) | Prestige · Vogue · 10 sayfa · 40 gözlem · 0 yeni şema · dolu sepet / newsletter-popup / sticky ATC açık |

---

## Faz durumu

- [x] F1 Home
- [x] F2 Collection / PLP
- [x] F3 PDP
- [x] F4 Search / cart (boş)
- [x] F5 About / faq / contact / blog

---

## Sayfa haritası

| sayfa | URL |
|---|---|
| home | `/` |
| collection | `/collections/cleansers` |
| product-detail | `/products/bali-papaya-rice-masque` |
| search | `/search?q=mask` |
| cart | `/cart` |
| about-brand | `/pages/about-us` |
| faq-support | `/pages/faq` |
| contact | `/pages/contact` |
| blog-list | `/blogs/journal` |
| blog-post | `/blogs/journal/how-to-clean-makeup-brushes` |

Aynı tip = şemaya dokunma, observation + delta.

Kanıt sonrası remap:
- ANCIENT WISDOM kart-üzeri-görsel → `editorial-image-with-text-overlay`
- OUR INSPIRATIONS (başlık karosu + karışık span) → `editorial-dynamic-grid`
- collection-list overlay + VIEW PRODUCTS → `collection-nav-image-cards` (kalır)
- CLEANSERS görselli banner → `collection-banner` (kalır)
- About statik sayfa → `page-content-main` (kalır)

---

## Aday / şemaya sığmayan

- newsletter-popup (overlay; capture script kapatıyor)
- privacy-banner
- cart-drawer (önceki preset’lerde zero-size; atlandı)
- sticky ATC (PDP kesitlerine sızıyor)

---

## Evidence backlog

- [x] Vogue 10 sayfa 3vp capture (40 obs · 120 PNG)
- [x] Dolu cart / drawer — Allure’da çekildi (aynı chrome)
- [ ] Newsletter popup
