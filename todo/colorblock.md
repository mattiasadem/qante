# Todo — Colorblock (Shopify first-party)

*Kaynak:* https://theme-colorblock-demo.myshopify.com  
*Preset:* `default` · *Slug:* `colorblock`

**Tema (gözlemlendi, uydurulmadı):**  
`Shopify.theme.name` = **[Colorblock] Theme store demo (latest)**  
`schema_name` = **Dawn** · `schema_version` = **4.0.0** · `role` = **main** · theme id `168341930006`  
`theme_store_id` = **null** (beklenen 1376 vitrinde yok)

**Durum:** Mod A walk kapandı · 52 obs · statik 3vp + mega/search/cart/menu/PDP Color  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/colorblock/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/colorblock/`, `evidence/colorblock/`, `todo/colorblock.md`, `candidates/colorblock-*` |

**Kapsam satırı:**  
`Colorblock · default · Dawn 4.0.0 first-party demo · theme_store_id null · home→PDP→PLP→search→cart→about→contact→blog→404 · 52 obs · 0 yeni şema · leftover: drawer/faq/policy/1376`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer/newsletter | done | [x] |
| Mega Shop 1440 | done | [x] (375/768 N/A) |
| Predictive search `cardi` | done | [x] 375/768/1440 |
| Mobile menu 375+768 | done | [x] (1440 N/A) |
| PDP Pocket Cardi + Color Purple | done | [x] |
| PLP `/collections/mens-cardigans` | done | [x] |
| Search `/search?q=cardi` | done | [x] |
| Cart empty + filled + qty 1→2 | done | [x] (drawer yok) |
| About `/pages/about-us` | done | [x] |
| Contact form (submit yok) | done | [x] |
| Magazine + Herbie article | done | [x] |
| Collections index `/collections` | done | [x] |
| 404 leftover | done | [x] |
| FAQ / policy / account / checkout / email | ⛔ leftover | — |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Shop 4 kolon |
| global-predictive-search | input | [x] 3vp `cardi` PRODUCTS 4 kart |
| cart-page-main | filled + changed | [x] Pocket Cardi qty 1→2 / $245→$490 |
| global-menu-drawer | open | [x] 375/768 Shop/Magazine/About |
| product-info-main | changed | [x] Color Green→Purple; ana görsel mor |

---

## Aday / leftover

[`candidates/colorblock-leftovers.md`](../candidates/colorblock-leftovers.md)

---

## Evidence backlog

- [x] Statik 3vp (50 obs)
- [x] Mega / search / cart empty+filled+qty / mobile menu / PDP Color
- [ ] Email / account / checkout / newsletter submit / comment submit — **yapılmayacak**
