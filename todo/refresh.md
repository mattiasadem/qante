# Todo — Refresh (Shopify first-party, free)

*Kaynak:* https://theme-refresh-demo.myshopify.com  
*Preset:* `default` · Theme Store: [Refresh](https://themes.shopify.com/themes/refresh) · Free · by Shopify

**Şu anki odak:** Mod A walk — statik 3vp + interact (mega/dropdown · search · cart · menu · PDP scent)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/refresh/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Shop | `theme-refresh-demo.myshopify.com` |
| Tema (gözlenen) | `Shopify.theme.name` **refresh/refresh-demo-store** · `schema_name` **Dawn** 5.0.0 · `role` **main** · theme id `132932272380` · `theme_store_id` **null** (vitrinde yok; uydurulmadı) |
| Theme Store sayfası | https://themes.shopify.com/themes/refresh/presets/refresh — başlık Refresh · Free · by Shopify |
| Yeni şema | **0** |
| Kapsam satırı | Refresh · default · home/PDP/PLP/search/cart/about/faq/contact/blog/404 · 47 obs · 0 yeni şema · Shopify first-party free |

---

## Faz

- [x] F1 Sayfa haritası + section roster
- [x] F2 Observation JSON (47) — reuse only
- [ ] F3 Statik 3vp `capture-observation.mjs`
- [ ] F4 Interact: About dropdown · predictive search · cart empty/filled/qty · mobile menu · PDP Scent
- [ ] F5 `npm run validate`

---

## Sayfa özeti

| sayfa | URL | Durum |
|---|---|---|
| `home` | `/` | 18 obs — announcement, header, menu drawer, search, cart drawer, slideshow, 2× featured, press quotes, 4× IWT, rich-text, multicolumn, featured blog, newsletter, footer |
| `product-detail` | `/products/bar-soap-2-pack-2` | 8 obs — main (Scent) + accordion + quote + trust + routine + 3× IWT |
| `collection` | `/collections/hair` | 4 obs — banner + PLP + gift IWT + blog IWT |
| `search` | `/search?q=soap` | 1 obs — 8 sonuç |
| `cart` | `/cart` | 2 obs — boş/dolu sayfa + favorites |
| `about-brand` | `/pages/our-story` | 7 obs — 2× overlay banner, 3× IWT, rich-text, 2-kart features |
| `faq-support` | `/pages/shipping-and-returns` | 2 obs — hero + FAQ accordion |
| `contact` | `/pages/contact` | 2 obs — hero + form (gönderilmedi) |
| `blog-list` | `/blogs/news` | 1 obs — Bathroom reading |
| `blog-post` | `/blogs/news/certified-cruelty-free-huron-joins-the-leaping-bunny-program` | 1 obs |
| `not-found` | `/this-page-does-not-exist-qante-404` | 1 obs — 404 template |

---

## Interact (plan)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 About dropdown — mega kolon yok |
| global-menu-drawer | open, changed | 375/768 hamburger + About akordeon |
| global-predictive-search | open, input | ikon → modal → `soap` |
| global-cart-drawer | initial, filled, changed | boş / Bar Soap / adet+ |
| product-info-main | initial, changed | Scent Original → Sandalwood |
| cart-page-main | initial, filled | boş + dolu sayfa |

---

## Aday / şemaya sığmayan

→ [`candidates/refresh-leftovers.md`](../candidates/refresh-leftovers.md)

---

## Evidence backlog

- [ ] Home static 3vp
- [ ] PDP / PLP / search 3vp
- [ ] Cart / about / faq / contact / blog / 404 3vp
- [ ] Interact PNG
