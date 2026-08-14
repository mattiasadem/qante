# Todo — Prestige (Shopify) · Strass

*Kaynak:* https://prestige-theme-strass2.myshopify.com/  
*Preset:* `strass` · Maestrooo Prestige · mücevher  
*(Theme Store `prestige-theme-strass` şifreli; canlı demo `strass2`)*

**Şu anki odak:** Strass tam tur bitti

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/prestige/strass/` |
| Walkthrough / not | Theme Store: https://themes.shopify.com/themes/prestige/presets/strass |
| Kapsam satırı (bitince) | Prestige · Strass · 11 sayfa · 61 gözlem · 0 yeni şema · dolu sepet / newsletter-popup / sticky ATC açık |

---

## Faz durumu

- [x] F1 Home
- [x] F2 Collection / PLP
- [x] F3 PDP
- [x] F4 Search / cart (boş)
- [x] F5 About / mineral-alliance / faq / contact / blog

---

## Sayfa haritası

| sayfa | URL |
|---|---|
| home | `/` |
| collection | `/collections/earrings` |
| product-detail | `/products/mineral-alliance-green-aventurine-necklace` |
| search | `/search?q=gold` |
| cart | `/cart` |
| about-brand | `/pages/about` |
| landing-campaign | `/pages/mineral-alliance` |
| faq-support | `/pages/faq` |
| contact | `/pages/contact` |
| blog-list | `/blogs/news` |
| blog-post | `/blogs/news/gold-in-the-wild-where-high-jewelry-meets-raw-nature` |

Aynı tip = şemaya dokunma, observation + delta.

Kanıt sonrası remap:
- HANDMADE WITH PASSION (home / collection / about) kart-üzeri-görsel → `editorial-image-with-text-overlay`
- NECKLACES kampanya bento (karışık span) → `editorial-dynamic-grid`
- RINGS / home media-grid overlay + Shop → `collection-nav-image-cards` (kalır)
- EARRINGS multi-column (etiket altta) → `features-multicolumn` (kalır)
- FAQ Product / Order / Delivery grupları → `faq-collapsible-tabs` + delta
- Search PRODUCTS / BLOG POSTS → `search-results` + delta

---

## Aday / şemaya sığmayan

- newsletter-popup (overlay; capture script kapatıyor)
- cart-drawer (önceki preset’lerde zero-size; atlandı)
- sticky ATC (PDP kesitlerine sızıyor)

---

## Evidence backlog

- [x] Strass 11 sayfa 3vp capture (61 obs · 183 PNG)
- [x] Dolu cart / drawer — Allure’da çekildi (aynı chrome)
- [ ] Newsletter popup
