# Todo — Nécessaire (necessaire.com)

*Kaynak:* https://necessaire.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **`[NEC-1.59.0] NPL Moisture`** · `schema_name`: **Necessaire** · `schema_version`: **1.59.0** · `theme_store_id`: **796** · theme id `145036017777` · `necessaireinc.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact (piksel doğrulandı)  
**PR:** https://github.com/mattiasadem/qante/pull/42 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/necessaire/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/necessaire/`, `evidence/necessaire/`, `todo/necessaire.md`, `candidates/necessaire-*.md` |

**Kapsam satırı:**  
`Nécessaire · default · [NEC-1.59.0] NPL Moisture / schema_name Necessaire 1.59.0 · theme_store_id 796 · home→PDP→PLP→search→cart-drawer→content→footer→mobile · 35 obs · 3vp alındı · 0 yeni şema`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer | [x] | [x] |
| Mega / search overlay / cart drawer / mobile menu | [x] interact | [x] |
| PDP `/products/the-body-retinol` | [x] + subscribe 768/1440 | [x] |
| PLP `/collections/body` | [x] | [x] (breadcrumb 375 zero-size) |
| Search `/search?q=body` | [x] | [x] |
| Cart `/cart` | ⛔ Rebuy drawer (`/?mini-cart=open`) | — |
| Awards `/pages/awards` | [x] | [x] |
| Footprint `/pages/footprint` | [x] | [x] |
| FAQ `/pages/faq` | [x] + Orders | [x] |
| Contact `/pages/contact` | [x] form **gönderilmedi** | [x] |
| Subscribe `/pages/subscribe` | [x] | [x] |
| Blog list + redesign-partners article | [x] | [x] |
| Policy privacy | [x] | [x] |
| Scent LP (1 banner + 1×50/50 + 1 grid) | [x] | [x] |
| 404 / locator / referrals / reviews-app | ⛔ candidates | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | [x] | [x] |
| 2 | navigation-header-mega | home | [x] + Shop mega 1440 | [x] | [x] | [x] |
| 3 | global-menu-drawer | home | [x] 375+768 | [x] | [x] | [x] |
| 4 | global-predictive-search | home | [x] + retinol | [x] | [x] | [x] |
| 5 | global-cart-drawer | home | [x] boş/dolu/qty2 | [x] | [x] | [x] |
| 6 | hero-slideshow | home | [x] | [x] | [x] | [x] |
| 7 | product-showcase-grid-featured | home | [x] | [x] | [x] | [x] |
| 8 | editorial-image-with-text | home | [x] | [x] | [x] | [x] |
| 9 | product-showcase-grid-featured-2 | home | [x] | [x] | [x] | [x] |
| 10 | editorial-image-with-text-2 | home | [x] | [x] | [x] | [x] |
| 11 | product-showcase-grid-featured-3 | home | [x] | [x] | [x] | [x] |
| 12 | hero-slideshow-2 | home | [x] image-only | [x] | [x] | [x] |
| 13 | footer-columns-newsletter | home | [x] | [x] | [x] | [x] |
| 14 | product-info-main | product-detail | [x] 768/1440 subscribe | [x] | [x] | [x] |
| 15 | product-info-tabs | product-detail | [x] spec (+ search chrome) | [x] | [x] | [x] |
| 16 | faq-collapsible-tabs | product-detail | [x] initial only | [x] | [x] | [x] |
| 17 | navigation-breadcrumbs | collection | [x] 768+1440 | [x] 375=0 | [x] | [x] |
| 18 | collection-banner | collection | [x] | [x] | [x] | [x] |
| 19 | product-showcase-grid-plp | collection | [x] | [x] | [x] | [x] |
| 20 | search-results | search | [x] | [x] | [x] | [x] |
| 21 | page-content-main | about-brand | [x] awards | [x] | [x] | [x] |
| 22–24 | footprint (3) | about-brand | [x] | [x] | [x] | [x] |
| 25 | faq-collapsible-tabs | faq-support | [x] + Orders | [x] | [x] | [x] |
| 26 | lead-capture-form | contact | [x] | [x] | [x] | [x] |
| 27 | page-content-main | policy | [x] | [x] | [x] | [x] |
| 28–30 | subscribe (3) | subscribe | [x] | [x] | [x] | [x] |
| 31 | blog-list-main | blog-list | [x] ince | [x] | [x] | [x] |
| 32 | blog-post-main | blog-post | [x] | [x] | [x] | [x] |
| 33–35 | scent LP (3) | landing-campaign | [x] | [x] | [x] | [x] |

Shoplift `collection-nav-icon-buttons` **silindi** — 3vp yok; leftover.

---

## Interact (piksel)

| Bileşen | State | Karede görülen |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop → siyah mega: Shop All / New / Bestsellers / By Scent + New + Bestsellers kartları |
| global-predictive-search | initial, input | Üst drawer; `retinol` → Suggestions + Product Matches |
| global-cart-drawer | initial, filled, changed | Boş $75 → Retinol ×1 $65 ($10 to ship) → qty 2 $130 (qualifies). 375/768 `/cart/add.js`; 1440 UI ATC |
| global-menu-drawer | open | 375/768 siyah drawer: Shop accordion + Body/Hair/Sets/Travel/About + My Account + Hair Moisture Duo |
| product-info-main | initial, changed | 768/1440 One Time $65 → Subscribe $55.25. **375** karede One Time + ATC $65 (sticky örtüyor) |
| faq-collapsible-tabs (PDP) | initial | Her zaman açık Q&A; changed yok (toggle yok) |
| faq-collapsible-tabs (FAQ) | initial, changed | Orders + → − + Q&A listesi |

PLP/search filtre paneli açılmadı — leftover. Chip tıkı denenmedi.

---

## Aday / leftover

[`candidates/necessaire-leftovers.md`](../candidates/necessaire-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (breadcrumb 375 zero-size skipped)
- [x] Overlay / FAQ / subscribe / cart interact
- [x] Capture sonrası PNG bak
- [ ] PDP spec kesitinde search chrome (Escape yetmedi)
- [ ] 375 PDP subscribe fiyatı
- [ ] PLP/search filtre `changed`
