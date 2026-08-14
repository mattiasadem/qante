# Todo — Impact (Shopify) · default (Sound)

*Kaynak:* https://impact-theme-sound.myshopify.com/  
*Preset:* `impact` · Maestrooo Impact · ses / Master & Dynamic  
*Theme Store:* https://themes.shopify.com/themes/impact

**Şu anki odak:** ✅ default tur — 99 obs · 97 kare · 0 yeni şema · interact home bitti

Diğer preset’ler (sonra, ayrı tur):
| Preset | Demo |
|---|---|
| impact (default) | https://impact-theme-sound.myshopify.com/ |
| balance | https://impact-theme-shape.myshopify.com/ |
| cocoon | https://impact-theme-home.myshopify.com/ |

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/impact/impact/` |
| Walkthrough / not | Theme Store: https://themes.shopify.com/themes/impact/presets/impact |
| Kapsam satırı (bitince) | Impact (default/Sound) · 14 sayfa · 99 obs · 0 yeni şema · home interact |

---

## Faz durumu

- [x] F1 Home + globals — remap + interact
- [x] F2 Collection / PLP
- [x] F3 PDP
- [x] F4 Search / cart
- [x] F5 Story / Lamborghini / faq / contact / blog / compare / collaborations / theme-features

---

## Sayfa haritası

| sayfa | URL |
|---|---|
| home | `/` |
| collection | `/collections/headphones` |
| product-detail | `/products/mw08-sport-green-sapphire-glass-black-kevlar-r-case` |
| search | `/search?q=wireless` |
| cart | `/cart` |
| about-brand | `/pages/story` |
| landing-campaign | `/pages/automobili-lamborghini` |
| faq-support | `/pages/faq` |
| contact | `/pages/contact` |
| blog-list | `/blogs/news` |
| blog-post | `/blogs/news/master-dynamic-x-automobili-lamborghini` |
| compare | `/pages/compare` |
| collaborations | `/pages/collaborations` |
| theme-features | `/pages/theme-features` |

Aynı tip = şemaya dokunma, observation + delta. Yeni şema yalnız 1440/375 sonrası.

---

## Home remap (kanıt)

- image-link-blocks → `collection-nav-image-cards` (5 kare etiket)
- collection-list 3 lifestyle overlay → `collection-nav-image-cards` (dosya `collection-nav-grid.json`)
- media-grid bento → `editorial-dynamic-grid`
- impact-text MW08 filigran → `editorial-rich-text` + delta
- impact-text 6 / 5.2 → `features-multicolumn`
- press quote → `testimonial-quote-carousel` (logo listesi değil)
- revealed-image → kare yok (zero-size); aday

---

## Aday / şemaya sığmayan

- newsletter-popup (5sn sonra açılıyor)
- revealed-image (scroll-reveal — 3vp zero-size; home + story)

---

## Interact (home)

- [x] `navigation-header-mega` — Shop tık sol drawer; 375/768 hamburger + Shop drill
- [x] `global-predictive-search` — wireless → Products/Blog/Collections liste
- [x] `global-cart-drawer` — boş / MW08 $349 / adet 2 → $698
- [x] `product-showcase-grid-featured` — hover + Quick add (1440/375); dialog açılamadı; 768 hover = initial
- [x] `cart-page-main` — boş + MW08 Sport $349 (satır + özet + Checkout)
- [x] `product-showcase-grid-plp` — Color Galactic White → MG20 $449
- [x] `faq-collapsible-tabs` — What is the status of my order?
- [x] `product-info-main` — Black Sapphire (768/1440)
- [x] `media-lookbook-slider` — Read more Inductive Wireless Charging
- [x] `testimonial-quote-carousel` — Men's Health → Forbes MW08
- [x] `editorial-timeline` — 2014 NYC → 2017 Adjaye speaker

## Evidence backlog

- [x] Impact default 3vp capture (97/99; 2 revealed-image boş)
- [x] Dolu cart drawer + dolu cart sayfası
- [x] Balance / Cocoon delta — [`impact-balance.md`](./impact-balance.md) · [`impact-cocoon.md`](./impact-cocoon.md)
