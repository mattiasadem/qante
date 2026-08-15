# Todo — Western Rise (westernrise.com)

*Kaynak:* https://westernrise.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **03.06.26|ID - Wind down: Store closed** · `id` `190987993456` · `schema_name` **Impact** · `schema_version` **4.4.0** · `theme_store_id` **1190** · `role` `main` · shop `western-rise.myshopify.com`  
*Sayfa:* `data-template="password"` · `pageType` password · `/` **302** → `/password`

**Durum:** Mod A walk kapandı — store closed. 1 obs · resmi 3vp · interact yok (piksel değişecek kontrol yok) · leftover kayıtlı  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/westernrise/default/` |
| Capture | resmi `scripts/capture-observation.mjs` |
| Şema | **0 yeni** — `hero-slideshow` reuse + delta |
| Parallel | yalnız `observations/westernrise/`, `evidence/westernrise/`, `todo/westernrise.md`, `candidates/westernrise-*.md` |

**Kapsam satırı:**  
`Western Rise · default · Impact 4.4.0 (theme_store_id 1190) · store closed password · 1 obs · 3 PNG · 0 yeni şema · leftover: walk gated / no chrome / no 404 template / mailto PII`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home `/` → `/password` slideshow | ✅ | resmi |
| Mega hover | ⛔ header yok | leftover |
| Predictive search | ⛔ yok | leftover |
| Cart empty/filled/qty | ⛔ `/cart` 302 · `cart.js` 401 | leftover |
| Mobile menu | ⛔ hamburger yok | leftover |
| PDP / PLP / search page | ⛔ 302 password | leftover |
| About / help / policy / blog | ⛔ 302 password | leftover |
| 404 | ⛔ da 302 password | leftover |
| Newsletter / account / checkout | ⛔ form yok; mailto PII | — |

---

## Bileşen roster (1)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | hero-slideshow | home | [x] | store closed + logo + mailto | reuse | [x] |

---

## Interact (yoklandı — piksel değişmedi)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | — | Header/nav yok |
| global-predictive-search | — | Arama ikonu/form yok |
| global-cart-drawer / cart-page-main | — | Sepet UI yok |
| global-menu-drawer | — | Hamburger yok |
| product-info-main | — | PDP 302 |

---

## Aday / leftover

[`candidates/westernrise-leftovers.md`](../candidates/westernrise-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (1 × 3vp)
- [x] Interact yoklandı — kontrol yok, PNG yok
- [x] `npm run validate`
- [ ] Newsletter / account / checkout / mailto — **yapılmayacak** (PII / yok)
