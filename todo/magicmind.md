# Todo — Magic Mind (magicmind.com)

*Kaynak:* https://magicmind.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **Copy of [DEV PEACHY] - Tire US Only** · `schema_name`: **Magic Mind Theme** · `schema_version`: **2.0.0** · `theme_store_id`: **null** (custom) · theme id `141790118022` · shop `getmagicmind.myshopify.com` · role `treatment`

**Durum:** Mod A walk kapandı — Kit A home 3vp + interact (mega / menu 375 / dolu cart / FAQ / Sleep tab)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/magicmind/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/magicmind/`, `evidence/magicmind/`, `todo/magicmind.md`, `candidates/magicmind-*.md` |

**Kapsam satırı:**  
`MagicMind · default · Copy of [DEV PEACHY] - Tire US Only (Magic Mind Theme 2.0.0 custom, role treatment) · home→PDP→PLP→search→cart drawer→learn→faq→content→footer→mobile · 0 yeni şema`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | Kit A | [x] |
| Shop mega 1440 | hover section | [x] |
| Cart drawer filled | ATC UI | [x] |
| Mobile menu 375 | Products list | [x] |
| PDP Original + FREE buy box | JSON | [x] |
| PLP `/collections/all` | JSON | [x] |
| Search `/search?q=shot` | JSON | [x] |
| `/cart` → `/?cart=open` (sayfa yok) | leftover boş | — |
| Learn `/pages/learn` | JSON + Sleep tab | [x] |
| FAQ `/pages/faq` Ordering | + accordion | [x] |
| Reviews / testimonials | JSON | [x] |
| Blog list + science article hero | JSON | [x] |
| Policy privacy | JSON | [x] |
| Loyalty / TrueMed | JSON | [x] |
| Store locator (Aisle iframe) | heading | [x] |
| Wholesale Faire / merch / creator Growi / 404 | ⛔ leftover | — |
| Predictive search | ⛔ header’da yok | leftover |
| Home Kit B only | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] mega hover | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] Kit A banner | reuse | [x] |
| 4 | promo-scrolling-marquee | home | [x] | [x] | reuse | [x] |
| 5 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 6–8 | editorial-image-with-text ×3 | home | [x] | [x] | reuse | [x] |
| 9 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 10 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 11 | features-multicolumn.2 | home | [x] | [x] absorption | reuse | [x] |
| 12 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 13 | global-cart-drawer | home | [x] | filled | reuse | [x] |
| 14 | global-menu-drawer | home | [x] | 375 | reuse | [x] |
| 15 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 16–26 | PDP kit + FREE buy box | product-detail | [x] | [x] | reuse | [x] |
| 27 | search-results | search | [x] | [x] | reuse | [x] |
| 28–38 | learn kit | about-brand | [x] | [x] Sleep tab | reuse | [x] |
| 39–40 | FAQ title + Ordering | faq-support | [x] | [x] accordion | reuse | [x] |
| 41–54 | reviews / testi / blog / policy / loyalty / truemed / store | — | [x] | [x] | reuse | [x] |

---

## Aday / şemaya sığmayan

→ `candidates/magicmind-leftovers.md`

---

## Evidence backlog

- [x] Home static 3vp (Kit A)
- [x] PDP / PLP / search 3vp
- [x] Content templates 3vp
- [x] Mega 1440 / menu 375 / cart filled
- [ ] Home Kit B only (treatment bu koşuda Kit A)
- [ ] PDP 15→30 pack (kontrol görünür değil)
