# Todo — Everlane

*Kaynak:* https://www.everlane.com/ · *Preset:* default · *Tema (storefront):* `everlane/MAIN` · Dawn 15.3.0 · shop `m34kzg-ke.myshopify.com`

**Şu anki odak:** Mod A walk kapalı — statik 3vp + chrome drawer/menu

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/everlane/default/` |
| Capture | resmi `capture-observation.mjs` |
| Platform | Canlı Shopify (Theme Store demo değil) · Builder.io home/about |
| Kapsam satırı | Everlane · default · Dawn 15.3.0 + Builder.io · home→PDP→PLP→search→cart→content→footer · 27 obs · 80 PNG · 0 yeni şema |

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home announcement + header + footer | [x] | [x] |
| Home Builder.io blocks (hero, scroll, categories, promos, bestsellers, stores, UGC, impact) | [x] | [x] |
| Cart drawer empty (#cart-icon-bubble) | [x] | [x] |
| Mobile menu drawer 375/768 | [x] | [x] |
| PDP Way-High Jean 2.0 Dark Indigo | [x] | [x] |
| PLP `/collections/womens-jeans` | [x] | [x] |
| Search `/search?q=denim` | [x] | [x] |
| About `/pages/about` (Builder.io temsilci) | [x] | [x] |
| Blog list `/blogs/news` | [x] | [x] |
| Policy `/policies/privacy-policy` | [x] | [x] |
| Predictive search overlay | ⛔ leftover | — |
| PDP reviews widget | ⛔ leftover | — |
| Blog post | ⛔ leftover (404/boş) | — |
| Cart filled / mega interact | ⛔ interact backlog | — |

---

## Bileşen roster (27)

| # | id | sayfa | scope | Done |
|---|---|---|---|---|
| 1 | promo-announcement-bar | home | global | [x] |
| 2 | navigation-header-mega | home | global | [x] |
| 3 | footer-columns-newsletter | home | global | [x] |
| 4 | global-cart-drawer | home | global | [x] |
| 5 | global-menu-drawer | home | global | [x] |
| 6 | editorial-image-with-text-overlay | home | instance | [x] |
| 7 | editorial-images-scroll | home | instance | [x] |
| 8 | collection-nav-icon-buttons | home | instance | [x] |
| 9 | promo-grid-banner | home | instance | [x] |
| 10 | product-showcase-grid-featured | home | instance | [x] |
| 11 | editorial-image-with-text-overlay.2 | home | instance | [x] |
| 12 | media-shop-the-feed | home | instance | [x] |
| 13 | editorial-image-with-text-overlay.3 | home | instance | [x] |
| 14 | product-info-main | product-detail | instance | [x] |
| 15 | editorial-image-with-text | product-detail | instance | [x] |
| 16 | editorial-image-with-text.2 | product-detail | instance | [x] |
| 17 | collection-nav-tabs | product-detail | instance | [x] |
| 18 | navigation-breadcrumbs | collection | instance | [x] |
| 19 | collection-banner | collection | instance | [x] |
| 20 | collection-nav-icon-buttons | collection | instance | [x] |
| 21 | product-showcase-grid-plp | collection | instance | [x] |
| 22 | collection-nav-tabs | collection | instance | [x] |
| 23 | faq-collapsible-tabs | collection | instance | [x] |
| 24 | search-results | search | instance | [x] |
| 25 | page-content-main | policy | instance | [x] |
| 26 | editorial-custom-content | about-brand | instance | [x] |
| 27 | blog-list-main | blog-list | instance | [x] |

---

## Aday / şemaya sığmayan

→ `candidates/everlane-leftovers.md`

---

## Evidence backlog

- [x] Home static 3vp (chrome + builder)
- [x] PDP / PLP / search 3vp
- [x] About / blog / policy 3vp
- [x] Cart drawer + mobile menu (prepareClick)
