# Todo — Prestige (Shopify) · Signature

*Kaynak:* https://prestige-theme-signature.myshopify.com/  
*Preset:* `signature` · Maestrooo Prestige · ayakkabı

**Şu anki odak:** Signature tam tur bitti

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/prestige/signature/` |
| Walkthrough / not | Theme Store: https://themes.shopify.com/themes/prestige/presets/signature |
| Kapsam satırı (bitince) | Prestige · Signature · 14 sayfa · 85 gözlem · 1 yeni şema (`editorial-dynamic-grid`) · dolu sepet / newsletter-popup açık |

---

## Faz durumu

- [x] F1 Home roster + evidence
- [x] F2 Collection / PLP
- [x] F3 PDP
- [x] F4 Search / cart (boş)
- [x] F5 Lookbook / about / boutiques / care / faq / contact / blog
- [x] F6 (yok — bu dosya yalnız Signature)

---

## Sayfa haritası

| sayfa | URL |
|---|---|
| home | `/` |
| collection | `/collections/pumps` |
| product-detail | `/products/simone-pumps-110-red` |
| search | `/search?q=pump` |
| cart | `/cart` |
| lookbook | `/pages/lookbook` |
| about-brand | `/pages/la-maison` |
| boutiques | `/pages/boutiques` |
| landing-campaign | `/pages/all-collections` |
| care-tips | `/pages/care-tips` |
| faq-support | `/pages/faq` |
| contact | `/pages/contact` |
| blog-list | `/blogs/news` |
| blog-post | `/blogs/news/the-simone-our-iconic-model` |

Aynı tip = şemaya dokunma, observation + delta.

Kanıt sonrası remap:
- `dynamic-grid` kampanya/lookbook → **yeni** `editorial-dynamic-grid`
- `dynamic-grid` / tek görsel + VIEW PRODUCT → `editorial-image-with-text-overlay`
- `multi-column` kategori kiremitleri (görsel altı etiket) → `collection-nav-grid`
- all-collections kategori intro → `editorial-image-with-text`

---

## Aday / şemaya sığmayan

- newsletter-popup (overlay; capture script kapatıyor)
- privacy-banner (yok/boş)
- sticky ATC (PDP kesitlerine sızıyor)

---

## Evidence backlog

- [x] Signature 14 sayfa 3vp capture (85 obs)
- [x] Dolu cart / drawer — Allure’da çekildi (aynı chrome)
- [ ] Newsletter popup
