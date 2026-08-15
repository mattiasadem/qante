# Todo — Partake Foods (partakefoods.com)

*Kaynak:* https://partakefoods.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **`partakefoods-new/main`** · `schema_name`: **Partake (hasmerit.co)** · `schema_version`: **1.0.0** · `theme_store_id`: **null** (custom) · theme id `142385545314` · role `main`  
*Shop:* `partake-foods.myshopify.com`

**Durum:** Mod A walk yazıldı — 37 obs · resmi 3vp + interact sırada  
**PR:** draft (main'e merge yok)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/partakefoods/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/partakefoods/`, `evidence/partakefoods/`, `todo/partakefoods.md`, `candidates/partakefoods-*.md` |

**Kapsam satırı:**  
`Partake Foods · default · partakefoods-new/main (Partake hasmerit.co 1.0.0, custom) · home→PDP→PLP→search→cart→FAQ/contact/policy/find-us/blog→404 leftover · 37 obs · 0 yeni şema`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/marquee | ✅ obs | ⬜ capture |
| Mega 1440 / hamburger 375+768 | ✅ interact yazıldı | ⬜ |
| Predictive search graham | ✅ interact yazıldı | ⬜ |
| Cart empty + GET-add filled/qty | ✅ interact yazıldı | ⬜ |
| PDP `/products/birthday-cake-cookies` | ✅ + tab/ingredients | ⬜ |
| PLP `/collections/full-lineup` | ✅ | ⬜ |
| Search `/search?q=cookie` | ✅ | ⬜ |
| FAQ `/pages/faq` | ✅ + suppliers | ⬜ |
| Contact form (PII yok) | ✅ | ⬜ |
| Privacy policy | ✅ | ⬜ |
| Find-us heading + ızgara | ✅ locator leftover | ⬜ |
| Blog `/blogs/all` + ice box cake | ✅ | ⬜ |
| About `/pages/about` | ⛔ 404 leftover | — |
| 404 generic | ⛔ leftover | — |
| Newsletter / account / checkout | ⛔ PII | — |

---

## Bileşen roster (37)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] + mega 1440 | reuse | [x] | [ ] |
| 2 | global-menu-drawer | home | [ ] 375+768 | reuse | [x] | [ ] |
| 3 | global-predictive-search | home | [ ] open+input | reuse | [x] | [ ] |
| 4 | hero-slideshow | home | [ ] | reuse | [x] | [ ] |
| 5 | promo-scrolling-marquee | home | [ ] | reuse | [x] | [ ] |
| 6 | product-showcase-grid-featured | home | [ ] | reuse | [x] | [ ] |
| 7 | editorial-image-with-text | home | [ ] find-us | reuse | [x] | [ ] |
| 8 | editorial-image-with-text-overlay | home | [ ] falling cookies | reuse | [x] | [ ] |
| 9 | editorial-image-with-text.2 | home | [ ] split | reuse | [x] | [ ] |
| 10 | testimonial-quote-carousel | home | [ ] | reuse | [x] | [ ] |
| 11 | editorial-rich-text | home | [ ] | reuse | [x] | [ ] |
| 12 | promo-scrolling-marquee.2 | home | [ ] footer group | reuse | [x] | [ ] |
| 13 | footer-columns-newsletter | home | [ ] PII yok | reuse | [x] | [ ] |
| 14 | product-info-main | product-detail | [ ] + mini/ingredients | reuse | [x] | [ ] |
| 15 | trust-icon-row | product-detail | [ ] badges | reuse | [x] | [ ] |
| 16 | testimonial-quote-carousel | product-detail | [ ] | reuse | [x] | [ ] |
| 17 | product-showcase-grid-featured | product-detail | [ ] | reuse | [x] | [ ] |
| 18 | collection-banner | collection | [ ] | reuse | [x] | [ ] |
| 19 | collection-nav-icon-buttons | collection | [ ] URL nav | reuse | [x] | [ ] |
| 20 | editorial-rich-text | collection | [ ] | reuse | [x] | [ ] |
| 21 | product-showcase-grid-plp | collection | [ ] | reuse | [x] | [ ] |
| 22 | editorial-image-with-text-overlay | collection | [ ] | reuse | [x] | [ ] |
| 23 | search-results | search | [ ] | reuse | [x] | [ ] |
| 24 | cart-page-main | cart | [ ] boş+dolu+qty | reuse | [x] | [ ] |
| 25 | product-showcase-grid-featured | cart | [ ] | reuse | [x] | [ ] |
| 26–30 | FAQ (5) | faq-support | [ ] + suppliers | reuse | [x] | [ ] |
| 31–32 | contact (2) | contact | [ ] form PII yok | reuse | [x] | [ ] |
| 33 | page-content-main | policy | [ ] | reuse | [x] | [ ] |
| 34–35 | find-us (2) | about-brand | [ ] locator leftover | reuse | [x] | [ ] |
| 36 | blog-list-main | blog-list | [ ] | reuse | [x] | [ ] |
| 37 | blog-post-main | blog-post | [ ] | reuse | [x] | [ ] |

---

## Interact (yazıldı — kare sonra)

| Bileşen | State | Beklenen |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Menu → Products + kategori mega |
| global-menu-drawer | open | 375/768 hamburger |
| global-predictive-search | initial, input | graham; öneri karede |
| product-info-main | initial, changed | Mini Snack Packs + INGREDIENTS |
| cart-page-main | initial, filled, changed | GET add Classic Grahams + qty |
| faq-collapsible-tabs | initial, changed | suppliers sorusu |

PDP flavor kartı başka ürüne gider — tıklanmadı. ATC UI yok.

---

## Aday / leftover

[`candidates/partakefoods-leftovers.md`](../candidates/partakefoods-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / FAQ / pack-tab / cart interact
- [ ] Capture sonrası PNG bak
