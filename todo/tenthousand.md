# Todo — Ten Thousand (tenthousand.cc)

*Kaynak:* https://tenthousand.cc · *Preset:* `default`  
*Tema (storefront):* **PR 326** · `schema_name`: Shiro · `schema_version`: 1.0.0 · `theme_store_id`: null · role `main` · id `141341818967`  
*Shop:* `ten-thousand.myshopify.com`  
*Ayrıca görüldü (uydurulmadı):* `RC theme 08/12/2026 12:27PM EST | RK` · `RC theme 08/06/2026 05:08AM EST | RK`

**Durum:** Mod A walk kapandı — 38 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/53 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/tenthousand/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Validate | `validate-schemas.mjs` → 65 temiz · 0 error · 0 warn |
| Gözlem / kanıt | 38 obs · 120 PNG |
| Parallel | yalnız tenthousand paths |

**Kapsam satırı:**  
`Ten Thousand · default · PR 326 / Shiro 1.0.0 · home→PDP→PLP→search→cart→content→footer→mobile · 38 obs · 120 PNG · 0 yeni şema · leftover: 404 / Yotpo / GovX / Shogun / about-redirect / RC theme / 375-768 filled cart`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ |
| Mega APPAREL 1440 | ✅ interact | ✅ (375/768 N/A) |
| Predictive search overlay | ✅ 1440 open+input | ✅ (375/768 menüde) |
| Cart drawer boş | ✅ 3vp | ✅ |
| Cart drawer dolu | ✅ 1440 | 375/768 leftover |
| Quick shop | ✅ interact | ✅ |
| Mobile menu 375+768 | ✅ interact | ✅ (1440 N/A) |
| PDP `/products/interval-short` | ✅ | ✅ |
| PLP `/collections/shorts` | ✅ | ✅ |
| Search `/search?q=interval` | ✅ | ✅ |
| Cart `/cart` boş | ✅ | ✅ |
| FAQ / contact / privacy / terms / quality / shipping / military / retailer / rewards / track | ✅ | ✅ |
| Find Your Shorts quiz + RUNNING | ✅ interact | ✅ |
| Training Hub social grid | ✅ | ✅ |
| About `/pages/about` → home | ⛔ leftover | — |
| 404 (`/pages/about-us` template) | ⛔ candidate | — |
| Blog article slug | ⛔ yok | — |
| Newsletter / track / rewards / GovX / checkout | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home + APPAREL mega | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | collection-nav-image-cards | home shop-by | [x] | [x] | reuse | [x] |
| 5 | editorial-image-with-text-overlay | home salt | [x] | [x] | reuse | [x] |
| 6 | product-showcase-grid-featured | home bestsellers | [x] | [x] | reuse | [x] |
| 7 | media-video-hero | home athlete | [x] | [x] | reuse | [x] |
| 8 | editorial-rich-text | home about | [x] | [x] | reuse | [x] |
| 9 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 10 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 11 | global-predictive-search | home 1440 | [x] | [x] | reuse | [x] |
| 12 | global-menu-drawer | home 375/768 | [x] | [x] | reuse | [x] |
| 13 | global-quick-view | home | [x] | [x] | reuse | [x] |
| 14–19 | PDP info/tabs/features/gallery/video/related | product-detail | [x] | [x] | reuse | [x] |
| 20–23 | PLP banner/cards/grid/seo | collection | [x] | [x] | reuse | [x] |
| 24 | search-results | search | [x] | [x] | reuse | [x] |
| 25 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 26–38 | FAQ/contact/policy/terms/quality/shipping/military/retailer/rewards/track/quiz/hub | content | [x] | [x] | reuse | [x] |

---

## Aday / şemaya sığmayan

- `candidates/tenthousand-leftovers.md`
- 1440 FEATURED mega bazı static kırpımlarda açık (hover/default)
- Drawer Shopify-section h=0 → inner `.is-expanded`
- Cart filled 375/768: ATC sonrası cart ikonu viewport dışı
- Yotpo 14859 / Cartful / GovX / Shogun
- Help sidebar tekrarları
- PDP comparison/faq height 0
- PII gönderilmedi

---

## Evidence backlog

- [x] Home static 3vp
- [x] Header mega / search 1440 / cart boş+1440 dolu / quickshop / mobile menu
- [x] PDP / PLP / search / cart 3vp
- [x] Content templates 3vp
- [x] Find-shorts quiz changed
