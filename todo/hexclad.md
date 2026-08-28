# Todo — HexClad (hexclad.com)

*Kaynak:* https://hexclad.com · *Preset:* `default`  
*Tema (storefront):* **Vaan UAT - 2026-07-30 | Evergreen 2026-08-11** · `schema_name`: Shiro · `schema_version`: 1.0.0 · `theme_store_id`: null · role `main`  
*Shop:* `hexclad-cookware.myshopify.com`

**Durum:** Mod A walk kapandı — 54 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/22 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/hexclad/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Validate | `validate-schemas.mjs` → 65 temiz · 0 error · 0 warn |
| Gözlem / kanıt | 54 obs · 170 PNG |
| Parallel | yalnız hexclad paths |

**Kapsam satırı:**  
`Hexclad · default · Vaan UAT / Evergreen / Shiro 1.0.0 · home→PDP→PLP→search→cart→content→footer→mobile · 54 obs · 170 PNG · 0 yeni şema · leftover: 404 / Replo / Rivo / Junip / entry popup / press`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ |
| Mega Hybrid Cookware 1440 | ✅ interact | ✅ (375/768 N/A) |
| Predictive search overlay | ✅ 1440 open+input | ✅ (375/768 menüde) |
| Cart drawer boş + dolu | ✅ interact | ✅ |
| Mobile menu 375+768 | ✅ interact | ✅ (1440 N/A) |
| PDP `/products/12-hexclad-pan-with-lid` | ✅ | ✅ |
| PLP `/collections/hybrid-cookware` | ✅ | ✅ |
| Search `/search?q=pan` | ✅ | ✅ |
| Cart `/cart` boş | ✅ | ✅ |
| About `/pages/about-us` | ✅ | ✅ |
| Science `/pages/hexclad-science` | ✅ | ✅ |
| Recipes hub + `/blogs/recipes` + Niçoise | ✅ | ✅ |
| FAQ `/pages/faq` | ✅ | ✅ |
| Contact Replo | ✅ `page-content-main` | ✅ |
| Warranty / privacy | ✅ | ✅ |
| Gordon Ramsay | ✅ | ✅ |
| Care | ✅ | ✅ |
| Affiliate / refer / 404 / press / Junip | ⛔ candidates | — |
| Newsletter / warranty form / Claim Discount | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home + mega | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | collection-nav-slider | home | [x] | [x] | reuse | [x] |
| 5 | product-showcase-grid-featured | home quadrant | [x] | [x] | reuse | [x] |
| 6 | product-showcase-featured | home BBQ | [x] | [x] | reuse | [x] |
| 7 | media-video-hero | home | [x] | [x] | reuse | [x] |
| 8 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 9 | testimonial-quote-carousel | home reviews | [x] | [x] | reuse | [x] |
| 10 | product-showcase-grid-featured.2 | home bestsellers | [x] | [x] | reuse | [x] |
| 11 | product-showcase-featured.2 | home knives | [x] | [x] | reuse | [x] |
| 12 | media-shop-the-feed | home UGC | [x] | [x] | reuse | [x] |
| 13 | editorial-image-with-text-overlay | home lifestyle | [x] | [x] | reuse | [x] |
| 14 | social-proof-brand-logos | culinary council | [x] | [x] | reuse | [x] |
| 15–16 | blog-list-main ×2 | home recipes/articles | [x] | [x] | reuse | [x] |
| 17 | editorial-image-with-text | founder | [x] | [x] | reuse | [x] |
| 18 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 19 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 20 | global-predictive-search | home 1440 | [x] | [x] | reuse | [x] |
| 21 | global-menu-drawer | home 375/768 | [x] | [x] | reuse | [x] |
| 22–29 | PDP info + 7 section | product-detail | [x] | [x] | reuse | [x] |
| 30–34 | PLP banner/nav/grid/faq/slider | collection | [x] | [x] | reuse | [x] |
| 35 | search-results | search | [x] | [x] | reuse | [x] |
| 36 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 37–40 | about | about-brand | [x] | [x] | reuse | [x] |
| 41–42 | science | science | [x] | [x] | reuse | [x] |
| 43–47 | recipes/blog/article | content | [x] | [x] | reuse | [x] |
| 48–54 | FAQ/contact/warranty/policy/gordon/care | content | [x] | [x] | reuse | [x] |

---

## Aday / şemaya sığmayan

- `candidates/hexclad-leftovers.md` — 404 kitchen, Replo contact/affiliate, Rivo refer, Junip, entry $75 popup, press→home
- PDP sticky nav / what’s included h=0
- Care accordion h=0
- Search overlay 375/768 (menü içi)
- Mega hover piksel vermedi; tık verdi
- Cart: dismiss-overlays aside’ı gizliyor → forceOpen
- Search fill öneri listesini değiştirmedi (statik suggested)
- FAQ accordion `changed` yoklandı değil
- PLP filtre paneli açılmadı
- Mobil menü alt akordeon açılmadı
- UGC video modal / FreeGiftProgressBarPopup
- PII gönderilmedi

---

## Evidence backlog

- [x] Home static 3vp
- [x] Header mega / search 1440 / cart boş+dolu / mobile menu
- [x] PDP / PLP / search / cart 3vp
- [x] Content templates 3vp
- [x] Listicle `/blogs/posts/fathers-day-gift-ideas-for-home-cooks` · `listicle-fathers-day` · 5 obs · 15 PNG
