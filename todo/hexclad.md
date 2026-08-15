# Todo — HexClad (hexclad.com)

*Kaynak:* https://hexclad.com · *Preset:* `default`  
*Tema (storefront):* **Vaan UAT - 2026-07-30 | Evergreen 2026-08-11** · `schema_name`: Shiro · `schema_version`: 1.0.0 · `theme_store_id`: null · role `main`  
*Shop:* `hexclad-cookware.myshopify.com`

**Durum:** Mod A walk yazılı — resmi 3vp + interact kuyrukta  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/hexclad/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/hexclad/`, `evidence/hexclad/`, `todo/hexclad.md`, `candidates/hexclad-*.md` |

**Kapsam satırı:**  
`Hexclad · default · Vaan UAT / Evergreen / Shiro 1.0.0 · home→PDP→PLP→search→cart→content→footer→mobile · 54 obs (3vp pending) · 0 yeni şema`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | roster [x] | [ ] |
| Mega / search overlay / cart drawer / mobile menu | roster [x] | [ ] interact |
| PDP `/products/12-hexclad-pan-with-lid` | roster [x] | [ ] |
| PLP `/collections/hybrid-cookware` | roster [x] | [ ] |
| Search `/search?q=pan` | roster [x] | [ ] |
| Cart `/cart` boş | roster [x] | [ ] |
| About `/pages/about-us` | roster [x] | [ ] |
| Science `/pages/hexclad-science` | roster [x] | [ ] |
| Recipes hub + `/blogs/recipes` + article | roster [x] | [ ] |
| FAQ `/pages/faq` | roster [x] | [ ] |
| Contact Replo | roster [x] | [ ] |
| Warranty / privacy | roster [x] | [ ] |
| Gordon Ramsay | roster [x] | [ ] |
| Care | roster [x] | [ ] |
| Affiliate / refer / 404 / press / Junip | ⛔ candidates | — |
| Newsletter / contact / warranty form | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | collection-nav-slider | home | [ ] | [x] | reuse | [ ] |
| 5 | product-showcase-grid-featured | home quadrant | [ ] | [x] | reuse | [ ] |
| 6 | product-showcase-featured | home BBQ | [ ] | [x] | reuse | [ ] |
| 7 | media-video-hero | home | [ ] | [x] | reuse | [ ] |
| 8 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 9 | testimonial-quote-carousel | home reviews | [ ] | [x] | reuse | [ ] |
| 10 | product-showcase-grid-featured.2 | home bestsellers | [ ] | [x] | reuse | [ ] |
| 11 | product-showcase-featured.2 | home knives | [ ] | [x] | reuse | [ ] |
| 12 | media-shop-the-feed | home UGC | [ ] | [x] | reuse | [ ] |
| 13 | editorial-image-with-text-overlay | home lifestyle | [ ] | [x] | reuse | [ ] |
| 14 | social-proof-brand-logos | culinary council | [ ] | [x] | reuse | [ ] |
| 15–16 | blog-list-main ×2 | home recipes/articles | [ ] | [x] | reuse | [ ] |
| 17 | editorial-image-with-text | founder | [ ] | [x] | reuse | [ ] |
| 18 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 19 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 20 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 21 | global-menu-drawer | home 375/768 | [ ] | [x] | reuse | [ ] |
| 22 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 23–29 | PDP features/video/reviews/hero/ugc/cats/media | product-detail | [ ] | [x] | reuse | [ ] |
| 30–34 | PLP banner/nav/grid/faq/slider | collection | [ ] | [x] | reuse | [ ] |
| 35 | search-results | search | [ ] | [x] | reuse | [ ] |
| 36 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 37–40 | about overlay/features/newsletter/shop | about-brand | [ ] | [x] | reuse | [ ] |
| 41–42 | science | science | [ ] | [x] | reuse | [ ] |
| 43–47 | recipes/blog/article | recipes + blog | [ ] | [x] | reuse | [ ] |
| 48–54 | FAQ/contact/warranty/policy/gordon/care | content | [ ] | [x] | reuse | [ ] |

---

## Aday / şemaya sığmayan

- Replo contact/affiliate + Rivo refer → `candidates/hexclad-leftovers.md`
- 404 kitchen page
- Junip reviews widget
- Entry discount circular popup (PII — Claim Discount yoklandı değil)
- `/pages/press` home’a düşer
- PDP sticky nav / what’s included h=0
- Care accordion h=0
- UGC video modal / FreeGiftProgressBarPopup

---

## Evidence backlog

- [ ] Home static 3vp
- [ ] Header mega / search / cart / mobile interact
- [ ] PDP / PLP / search / cart 3vp
- [ ] Content templates 3vp
