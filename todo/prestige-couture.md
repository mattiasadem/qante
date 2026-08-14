# Todo — Prestige (Shopify) · Couture

*Kaynak:* https://prestige-theme-couture.myshopify.com/  
*Preset:* `couture` · Maestrooo Prestige · Auguste The Label

**Şu anki odak:** Couture tam tur bitti

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/prestige/couture/` |
| Walkthrough / not | Theme Store: https://themes.shopify.com/themes/prestige/presets/couture |
| Kapsam satırı (bitince) | Prestige · Couture · 11 sayfa · 64 gözlem · 0 yeni şema · dolu sepet / newsletter-popup / sticky ATC açık |

---

## Faz durumu

- [x] F1 Home
- [x] F2 Collection / PLP
- [x] F3 PDP
- [x] F4 Search / cart (boş)
- [x] F5 About / sustainability / faq / contact / blog

---

## Sayfa haritası

| sayfa | URL |
|---|---|
| home | `/` |
| collection | `/collections/dresses` |
| product-detail | `/products/edie-cascade-wrap-mini-dress-black` |
| search | `/search?q=dress` |
| cart | `/cart` |
| about-brand | `/pages/about` |
| sustainability | `/pages/sustainability` |
| faq-support | `/pages/faq` |
| contact | `/pages/contact-us-1` |
| blog-list | `/blogs/news` |
| blog-post | `/blogs/news/meet-the-team-jaimee-lee` |

Aynı tip = şemaya dokunma, observation + delta.

Kanıt sonrası remap:
- DESIGNED IN AUSTRALIA / 1% FOR THE PLANET kart-üzeri-görsel → `editorial-image-with-text-overlay`
- OUR STUNNING MUSES (başlık karosu + @handle) → `editorial-dynamic-grid`
- PDP THE ROAD TO SUSTAINABILITY (görsel \| metin+CTA \| görsel) → `editorial-dynamic-grid`
- logo-list AS FEATURED IN / OUR PARTNERS → `social-proof-brand-logos` (kalır)
- collection-list overlay + SHOP NOW → `collection-nav-image-cards` (kalır)
- timeline butik / etki sekmeleri → `editorial-timeline` + delta (tabPozisyon:bottom uydurulmadı)

---

## Aday / şemaya sığmayan

- newsletter-popup (overlay; capture script kapatıyor)
- privacy-banner (yok/boş)
- cart-drawer (Signature’da zero-size; burada da atlandı)
- sticky ATC (PDP kesitlerine sızıyor)

---

## Evidence backlog

- [x] Couture 11 sayfa 3vp capture (64 obs · 192 PNG)
- [x] Dolu cart / drawer — Allure’da çekildi (aynı chrome)
- [ ] Newsletter popup
