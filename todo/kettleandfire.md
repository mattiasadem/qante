# Todo — Kettle & Fire (kettleandfire.com)

*Kaynak:* https://kettleandfire.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **Qbrico | 23122025 | New Purchase Block** · `schema_name`: **wayfx sites** · `schema_version`: 1.0.0 · `theme_store_id`: null (custom) · theme id `148928495812` · role `main`  
*Shop:* `kettleandfire.myshopify.com`

**Durum:** Mod A walk — observation yazıldı; resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/kettleandfire/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/kettleandfire/`, `evidence/kettleandfire/`, `todo/kettleandfire.md`, `candidates/kettleandfire-*.md` |

**Kapsam satırı:**  
`Kettle & Fire · default · Qbrico | 23122025 | New Purchase Block (wayfx sites 1.0.0, custom) · home→PDP→PLP→search→cart/Boost drawer→content→footer→mobile · obs yazıldı · 0 yeni şema`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ⬜ capture | ⬜ |
| Mega SHOP 1440 | ⬜ interact | ⬜ |
| Predictive search | ⬜ interact | ⬜ |
| Cart drawer boş + dolu + qty | ⬜ interact | ⬜ |
| Mobile menu 375+768 | ⬜ interact | ⬜ |
| PDP `/products/chicken-bone-broth` | ⬜ + pack change | ⬜ |
| PDP accordion + Beef FAQ | ⬜ interact | ⬜ |
| PLP `/a/collections/products` (Qbrico) | ⬜ | ⬜ |
| Search `/search?q=chicken` | ⬜ | ⬜ |
| Cart `/cart` boş | ⬜ | ⬜ |
| About `/pages/about-us` | ⬜ | ⬜ |
| Why / What is bone broth | ⬜ | ⬜ |
| Customer stories | ⬜ | ⬜ |
| Subscriptions LP | ⬜ | ⬜ |
| Loyalty + FAQ | ⬜ | ⬜ |
| Accessibility policy | ⬜ | ⬜ |
| Store locator heading | ⬜ iframe leftover | ⬜ |
| Blog `/blogs/news` | ⛔ boş | leftover |
| Contact / /pages/faq | ⛔ 404/boş | leftover |
| Privacy/Terms/Shipping body | ⛔ | leftover |
| Newsletter / SMS / account | ⛔ PII | — |

---

## Bileşen roster

Yazıldı — capture sonrası `[x]`.

---

## Interact (piksel değişince)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 SHOP hover |
| global-predictive-search | open, input | chicken |
| global-cart-drawer | initial, filled, changed | Boost |
| global-menu-drawer | open | 375/768 |
| product-info-main | initial, changed | one-time 24-pack |
| product-info-tabs | initial, changed | ilk accordion |
| faq-collapsible-tabs (beef + loyalty) | initial, changed | ilk soru |

---

## Aday / leftover

[`candidates/kettleandfire-leftovers.md`](../candidates/kettleandfire-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Mega / search / cart / menu / PDP pack / accordion / FAQ
- [ ] Newsletter / contact submit — **yapılmayacak** (PII)
