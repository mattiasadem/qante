# Todo — Nécessaire (necessaire.com)

*Kaynak:* https://necessaire.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **`[NEC-1.59.0] NPL Moisture`** · `schema_name`: **Necessaire** · `schema_version`: **1.59.0** · `theme_store_id`: **796** · theme id `145036017777` · `necessaireinc.myshopify.com`

**Durum:** Mod A walk — observation dosyaları yazıldı; resmi 3vp + interact sırada  
**PR:** (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/necessaire/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/necessaire/`, `evidence/necessaire/`, `todo/necessaire.md`, `candidates/necessaire-*.md` |

**Kapsam satırı:**  
`Nécessaire · default · [NEC-1.59.0] NPL Moisture / schema_name Necessaire 1.59.0 · theme_store_id 796 · home→PDP→PLP→search→cart-drawer→content→footer→mobile · 36 obs · 3vp sırada · 0 yeni şema`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/quick-nav | ⬜ capture | ⬜ |
| Mega / search overlay / cart drawer / mobile menu | ⬜ interact | ⬜ |
| PDP `/products/the-body-retinol` | ⬜ + subscribe | ⬜ |
| PLP `/collections/body` | ⬜ | ⬜ |
| Search `/search?q=body` | ⬜ | ⬜ |
| Cart `/cart` | ⛔ Rebuy drawer (`/?mini-cart=open`) | — |
| Awards `/pages/awards` | ⬜ | ⬜ |
| Footprint `/pages/footprint` | ⬜ | ⬜ |
| FAQ `/pages/faq` | ⬜ + Orders tab | ⬜ |
| Contact `/pages/contact` | ⬜ form **gönderilmedi** | ⬜ |
| Subscribe `/pages/subscribe` | ⬜ | ⬜ |
| Blog list + redesign-partners article | ⬜ | ⬜ |
| Policy privacy | ⬜ | ⬜ |
| Scent LP (1 banner + 1×50/50 + 1 grid) | ⬜ | ⬜ |
| 404 / locator / referrals / reviews-app | ⛔ candidates | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | [x] | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | [x] | [ ] |
| 3 | global-menu-drawer | home | [ ] 375+768 | [x] | [x] | [ ] |
| 4 | global-predictive-search | home | [ ] | [x] | [x] | [ ] |
| 5 | global-cart-drawer | home | [ ] Rebuy | [x] | [x] | [ ] |
| 6 | hero-slideshow | home | [ ] | [x] | [x] | [ ] |
| 7 | product-showcase-grid-featured | home | [ ] | [x] | [x] | [ ] |
| 8 | editorial-image-with-text | home | [ ] | [x] | [x] | [ ] |
| 9 | product-showcase-grid-featured-2 | home | [ ] | [x] | [x] | [ ] |
| 10 | editorial-image-with-text-2 | home | [ ] | [x] | [x] | [ ] |
| 11 | product-showcase-grid-featured-3 | home | [ ] | [x] | [x] | [ ] |
| 12 | hero-slideshow-2 | home | [ ] image-only | [x] | [x] | [ ] |
| 13 | footer-columns-newsletter | home | [ ] | [x] | [x] | [ ] |
| 14 | collection-nav-icon-buttons | home | [ ] 375 şerit | [x] | [x] | [ ] |
| 15 | product-info-main | product-detail | [ ] + subscribe | [x] | [x] | [ ] |
| 16 | product-info-tabs | product-detail | [ ] spec + Rebuy | [x] | [x] | [ ] |
| 17 | faq-collapsible-tabs | product-detail | [ ] | [x] | [x] | [ ] |
| 18 | navigation-breadcrumbs | collection | [ ] | [x] | [x] | [ ] |
| 19 | collection-banner | collection | [ ] | [x] | [x] | [ ] |
| 20 | product-showcase-grid-plp | collection | [ ] | [x] | [x] | [ ] |
| 21 | search-results | search | [ ] | [x] | [x] | [ ] |
| 22 | page-content-main | about-brand | [ ] awards | [x] | [x] | [ ] |
| 23–25 | footprint (3) | about-brand | [ ] | [x] | [x] | [ ] |
| 26 | faq-collapsible-tabs | faq-support | [ ] + Orders | [x] | [x] | [ ] |
| 27 | lead-capture-form | contact | [ ] | [x] | [x] | [ ] |
| 28 | page-content-main | policy | [ ] | [x] | [x] | [ ] |
| 29–31 | subscribe (3) | subscribe | [ ] | [x] | [x] | [ ] |
| 32 | blog-list-main | blog-list | [ ] ince | [x] | [x] | [ ] |
| 33 | blog-post-main | blog-post | [ ] | [x] | [x] | [ ] |
| 34–36 | scent LP (3) | landing-campaign | [ ] | [x] | [x] | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Beklenen |
|---|---|---|
| navigation-header-mega | initial, open | 1440 Shop → siyah mega + 2 promo kart |
| global-predictive-search | initial, input | Üst drawer; `retinol` |
| global-cart-drawer | initial, filled, changed | Rebuy boş → Retinol → qty 2 |
| global-menu-drawer | open | 375/768 hamburger |
| product-info-main | initial, changed | One Time $65 → Subscribe $55.25 |
| faq-collapsible-tabs (PDP) | initial, changed | Accordion toggle |
| faq-collapsible-tabs (FAQ) | initial, changed | Orders kategori |

PLP chip tıkı başka koleksiyon URL — in-page filter değil.

---

## Aday / leftover

[`candidates/necessaire-leftovers.md`](../candidates/necessaire-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / FAQ / subscribe / cart interact
- [ ] Capture sonrası PNG bak
