# Todo — Partake Foods (partakefoods.com)

*Kaynak:* https://partakefoods.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **`partakefoods-new/main`** · `schema_name`: **Partake (hasmerit.co)** · `schema_version`: **1.0.0** · `theme_store_id`: **null** (custom) · theme id `142385545314` · role `main`  
*Shop:* `partake-foods.myshopify.com`

**Durum:** Mod A walk complete — 37 obs · 126 resmi PNG · interact doğrulandı · validator  
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
`Partake Foods · default · partakefoods-new/main (Partake hasmerit.co 1.0.0, custom) · home→PDP→PLP→search→cart→FAQ/contact/policy/find-us/blog→404 leftover · 37 obs · 126 PNG · 0 yeni şema`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/marquee | [x] obs | [x] capture |
| Mega 1440 / hamburger 375+768 | [x] interact | [x] |
| Predictive search graham | [x] interact | [x] |
| Cart empty + GET-add filled/qty | [x] interact | [x] 375/768/1440 |
| PDP `/products/birthday-cake-cookies` | [x] + Mini/INGREDIENTS | [x] |
| PLP `/collections/full-lineup` | [x] | [x] |
| Search `/search?q=cookie` | [x] | [x] |
| FAQ `/pages/faq` | [x] + suppliers | [x] |
| Contact form (PII yok) | [x] | [x] |
| Privacy policy | [x] | [x] |
| Find-us heading + ızgara | [x] locator leftover | [x] |
| Blog `/blogs/all` + ice box cake | [x] | [x] |
| About `/pages/about` | ⛔ 404 leftover | — |
| 404 generic | ⛔ leftover | — |
| Newsletter / account / checkout | ⛔ PII | — |

---

## Bileşen roster (37)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [x] + mega 1440 | reuse | [x] | [x] |
| 2 | global-menu-drawer | home | [x] 375+768 | reuse | [x] | [x] |
| 3 | global-predictive-search | home | [x] open+input | reuse | [x] | [x] |
| 4 | hero-slideshow | home | [x] | reuse | [x] | [x] |
| 5 | promo-scrolling-marquee | home | [x] | reuse | [x] | [x] |
| 6 | product-showcase-grid-featured | home | [x] | reuse | [x] | [x] |
| 7 | editorial-image-with-text | home | [x] find-us | reuse | [x] | [x] |
| 8 | editorial-image-with-text-overlay | home | [x] falling cookies | reuse | [x] | [x] |
| 9 | editorial-image-with-text.2 | home | [x] split | reuse | [x] | [x] |
| 10 | testimonial-quote-carousel | home | [x] | reuse | [x] | [x] |
| 11 | editorial-rich-text | home | [x] | reuse | [x] | [x] |
| 12 | promo-scrolling-marquee.2 | home | [x] footer group | reuse | [x] | [x] |
| 13 | footer-columns-newsletter | home | [x] PII yok | reuse | [x] | [x] |
| 14 | product-info-main | product-detail | [x] + mini/ingredients | reuse | [x] | [x] |
| 15 | trust-icon-row | product-detail | [x] badges | reuse | [x] | [x] |
| 16 | testimonial-quote-carousel | product-detail | [x] | reuse | [x] | [x] |
| 17 | product-showcase-grid-featured | product-detail | [x] | reuse | [x] | [x] |
| 18 | collection-banner | collection | [x] | reuse | [x] | [x] |
| 19 | collection-nav-icon-buttons | collection | [x] URL nav | reuse | [x] | [x] |
| 20 | editorial-rich-text | collection | [x] | reuse | [x] | [x] |
| 21 | product-showcase-grid-plp | collection | [x] | reuse | [x] | [x] |
| 22 | editorial-image-with-text-overlay | collection | [x] | reuse | [x] | [x] |
| 23 | search-results | search | [x] | reuse | [x] | [x] |
| 24 | cart-page-main | cart | [x] boş+dolu+qty | reuse | [x] | [x] |
| 25 | product-showcase-grid-featured | cart | [x] | reuse | [x] | [x] |
| 26–30 | FAQ (5) | faq-support | [x] + suppliers | reuse | [x] | [x] |
| 31–32 | contact (2) | contact | [x] form PII yok | reuse | [x] | [x] |
| 33 | page-content-main | policy | [x] | reuse | [x] | [x] |
| 34–35 | find-us (2) | about-brand | [x] locator leftover | reuse | [x] | [x] |
| 36 | blog-list-main | blog-list | [x] | reuse | [x] | [x] |
| 37 | blog-post-main | blog-post | [x] | reuse | [x] | [x] |

---

## Interact (kare bakıldı)

| Bileşen | State | Kare |
|---|---|---|
| navigation-header-mega | initial, open | 1440 mega: PRODUCTS/ABOUT/FAQ/BLOG + 5 kategori. 375/768 N/A |
| global-menu-drawer | open | 375/768 hamburger. 1440 N/A |
| global-predictive-search | initial, input | graham → GRAHAMS / CLASSIC GRAHAMS |
| product-info-main | initial, changed | Mini Snack Packs + INGREDIENTS açık; FIND NEAR YOU |
| cart-page-main | initial, filled, changed | boş; Grahams $16.99 adet 4; plus → 5. Checkout yok |
| faq-collapsible-tabs | initial, changed | Q1 açık + suppliers “Yup, 100% nut-free.” |

PDP flavor kartı başka ürüne gider — tıklanmadı. ATC UI yok. GET `/cart/add` settle retry adeti 4’e şişiriyor.

---

## Aday / leftover

[`candidates/partakefoods-leftovers.md`](../candidates/partakefoods-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp
- [x] Overlay / FAQ / pack-tab / cart interact
- [x] Capture sonrası PNG bak
