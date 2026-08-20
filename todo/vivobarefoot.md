# Todo — Vivobarefoot (vivobarefoot.com)

*Kaynak:* https://vivobarefoot.com · *walk URL:* https://www.vivobarefoot.com/us/  
*Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **Magento 2 / Adobe Commerce Cloud** · `frontend/vivo/theme-frontend-vivo` · body `pl-thm-vivo pl-thm-vivo-theme-frontend-vivo` · CMS `cms-hp-redesign-demo` · static `version1786509155`  
*Shopify.theme / schema_name / schema_version / theme_store_id:* **yok** (gözlendi, uydurulmadı)  
*CNAME:* `prod.magentocloud.map.fastly.net`

**Durum:** Mod A walk (HTML + indexed sayfalar) · resmi 3vp **DataDome 403** · interact adımları yazıldı, kare yok  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/vivobarefoot/default/` |
| Capture | resmi script **denendi** — DataDome kesti; PNG uydurulmadı |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/vivobarefoot/`, `evidence/vivobarefoot/`, `todo/vivobarefoot.md`, `candidates/vivobarefoot-*.md` |

**Kapsam satırı:**  
`Vivobarefoot · default · Magento theme-frontend-vivo (Shopify.theme yok) · home→PDP Primus Lite IV→PLP mens→search primus→cart→about/why→size/returns/delivery→privacy→blog→100-day/discover · 32 obs · 0 PNG · 0 yeni şema · leftover: DataDome/404/Zendesk/Alchemer/assessment/PII`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + USP/header/hero/tabs/activity/benefits/promo/ambassador/rehab/footer | ✅ HTML | ⛔ DataDome |
| Mens mega 1440 / Amasty search `primus` / minicart empty+filled / mobile hamburger | adım yazıldı | ⛔ |
| PDP `/us/primus-lite-iv-mens` (+ Sensus kardeş metin) | ✅ indexed | ⛔ swatch |
| PLP `/us/mens` (50) | ✅ indexed | ⛔ filtre |
| Search `/us/catalogsearch/result/?q=primus` | ✅ URL kanıtlı | ⛔ |
| Cart `/us/checkout/cart/` + minicart | ✅ URL | ⛔ dolu/qty |
| About `/us/about-us-vivo` + Why `/us/whybarefoot` | ✅ indexed | ⛔ |
| Size / returns / delivery | ✅ nav+indexed | ⛔ |
| Privacy `/us/privacy-policy` | ✅ indexed | ⛔ |
| Blog `/us/blog` + beginners-guide | ✅ indexed | ⛔ |
| 100-day + discover | ✅ indexed | ⛔ PII yok |
| 404 | ⛔ leftover | ⛔ |
| Newsletter / account / checkout / assessment submit | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | ⛔ | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | ⛔ mega | [x] | reuse | [x] |
| 3 | hero-slideshow | home | ⛔ | [x] | reuse | [x] |
| 4 | product-showcase-tabs | home | ⛔ tab | [x] | reuse | [x] |
| 5 | collection-nav-image-cards | home | ⛔ | [x] | reuse | [x] |
| 6 | editorial-rich-text | home | ⛔ | [x] | reuse | [x] |
| 7 | promo-grid-banner | home | ⛔ | [x] | reuse | [x] |
| 8 | testimonial-quote-carousel | home | ⛔ | [x] | reuse | [x] |
| 9 | editorial-image-with-text | home | ⛔ | [x] | reuse | [x] |
| 10 | footer-columns-newsletter | home | ⛔ | [x] PII yok | reuse | [x] |
| 11 | global-cart-drawer | home | ⛔ | [x] | reuse | [x] |
| 12 | global-predictive-search | home | ⛔ | [x] Amasty | reuse | [x] |
| 13 | global-menu-drawer | home | ⛔ | [x] 1440 N/A | reuse | [x] |
| 14–17 | PDP Primus Lite IV | product-detail | ⛔ | [x] | reuse | [x] |
| 18–19 | PLP mens | collection | ⛔ | [x] | reuse | [x] |
| 20 | search-results | search | ⛔ | [x] | reuse | [x] |
| 21 | cart-page-main | cart | ⛔ | [x] | reuse | [x] |
| 22–24 | About + Why | about-brand | ⛔ | [x] | reuse | [x] |
| 25–27 | size / returns / delivery | faq-support | ⛔ | [x] | reuse | [x] |
| 28 | page-content-main | policy | ⛔ | [x] | reuse | [x] |
| 29–30 | blog list + post | blog-* | ⛔ | [x] | reuse | [x] |
| 31–32 | 100-day + discover | landing-campaign | ⛔ | [x] | reuse | [x] |

---

## Interact (yazıldı, piksel yok)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | Mens mega HTML; kare DataDome |
| global-predictive-search | initial, input | `primus`; Amasty |
| global-cart-drawer | initial, filled | boş metin indexed; ATC koşmadı |
| global-menu-drawer | open | hamburger 375/768 |
| product-showcase-tabs | initial, changed | WOMENS tab HTML |
| product-info-main | initial, changed | swatch koşmadı |

---

## Aday / leftover

[`candidates/vivobarefoot-leftovers.md`](../candidates/vivobarefoot-leftovers.md)

---

## Evidence backlog

- [ ] Resmi 3vp — DataDome kalkınca `capture-observation.mjs` + `capture-interaction.mjs`
- [ ] 404 gövde
- [ ] PLP filtre / cart qty / PDP swatch
- [ ] Newsletter / account / assessment / Zendesk — **yapılmayacak** (PII)
