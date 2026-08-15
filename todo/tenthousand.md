# Todo — Ten Thousand (tenthousand.cc)

*Kaynak:* https://tenthousand.cc · *Preset:* `default`  
*Tema (storefront):* **PR 326** · `schema_name`: Shiro · `schema_version`: 1.0.0 · `theme_store_id`: null · role `main` · id `141341818967`  
*Shop:* `ten-thousand.myshopify.com`  
*Ayrıca görüldü (uydurulmadı):* `RC theme 08/12/2026 12:27PM EST | RK` · `RC theme 08/06/2026 05:08AM EST | RK` (bazı collection/shipping isteklerinde; envanter PR 326 section id `18860560…`)

**Durum:** Mod A walk yazıldı — resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/tenthousand/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Validator | henüz koşulmadı (capture öncesi) |
| Parallel | yalnız `observations/tenthousand/`, `evidence/tenthousand/`, `todo/tenthousand.md`, `candidates/tenthousand-*.md` |

**Kapsam satırı:**  
`Ten Thousand · default · PR 326 / Shiro 1.0.0 · home→PDP→PLP→search→cart→content→footer→mobile · 38 obs · 3vp bekleniyor · 0 yeni şema · leftover: 404 / Yotpo / Cartful / GovX / Shogun / about-redirect / RC theme`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ obs | ⬜ capture |
| Mega APPAREL 1440 | ✅ obs interact | ⬜ |
| Predictive search overlay | ✅ obs interact | ⬜ |
| Cart drawer boş + dolu | ✅ obs interact | ⬜ |
| Quick shop | ✅ obs interact | ⬜ |
| Mobile menu 375+768 | ✅ obs interact | ⬜ |
| PDP `/products/interval-short` | ✅ obs | ⬜ |
| PLP `/collections/shorts` | ✅ obs | ⬜ |
| Search `/search?q=interval` | ✅ obs | ⬜ |
| Cart `/cart` boş | ✅ obs | ⬜ |
| FAQ `/pages/faqs` | ✅ obs | ⬜ |
| Contact `/pages/contact` | ✅ obs · form yok | ⬜ |
| Privacy native | ✅ obs | ⬜ |
| Terms / quality / shipping / military / retailer / rewards / track | ✅ obs | ⬜ |
| Find Your Shorts quiz | ✅ obs interact | ⬜ |
| Training Hub social grid | ✅ obs | ⬜ |
| About `/pages/about` → home | ⛔ leftover | — |
| 404 custom (`/pages/about-us` template) | ⛔ candidate | — |
| Blog article slug | ⛔ yok — leftover | — |
| Newsletter / track submit / rewards signup / GovX | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home + mega | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | collection-nav-image-cards | home shop-by | [ ] | [x] | reuse | [ ] |
| 5 | editorial-image-with-text-overlay | home salt | [ ] | [x] | reuse | [ ] |
| 6 | product-showcase-grid-featured | home bestsellers | [ ] | [x] | reuse | [ ] |
| 7 | media-video-hero | home athlete | [ ] | [x] | reuse | [ ] |
| 8 | editorial-rich-text | home about | [ ] | [x] | reuse | [ ] |
| 9 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 10 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 11 | global-predictive-search | home 1440 | [ ] | [x] | reuse | [ ] |
| 12 | global-menu-drawer | home 375/768 | [ ] | [x] | reuse | [ ] |
| 13 | global-quick-view | home | [ ] | [x] | reuse | [ ] |
| 14–19 | PDP info/tabs/features/gallery/video/related | product-detail | [ ] | [x] | reuse | [ ] |
| 20–23 | PLP banner/cards/grid/seo | collection | [ ] | [x] | reuse | [ ] |
| 24 | search-results | search | [ ] | [x] | reuse | [ ] |
| 25 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 26–38 | FAQ/contact/policy/terms/quality/shipping/military/retailer/rewards/track/quiz/hub | content | [ ] | [x] | reuse | [ ] |

---

## Aday / şemaya sığmayan

- `candidates/tenthousand-leftovers.md`
- Yotpo reviews widget (14859) — `testimonial-quote-carousel` zorlama
- Cartful quiz üçüncü parti (şema reuse + leftover)
- GovX military verify
- Shogun helper/above/below
- Help sidebar `page_sidebar_9NGDKL`
- PDP comparison/faq/shogun height 0
- PLP hero/menu/accordion height 0
- `/pages/about` → home
- Training Hub’da geleneksel article yok
- RC theme A/B sızıntısı
- PII gönderilmedi

---

## Evidence backlog

- [ ] Home static 3vp
- [ ] Header mega / search 1440 / cart boş+dolu / quickshop / mobile menu
- [ ] PDP / PLP / search / cart 3vp
- [ ] Content templates 3vp
- [ ] Find-shorts quiz changed
