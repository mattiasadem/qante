# Todo — Onnit (DTC-69 #58)

*Kaynak (liste):* https://onnit.com · *Canlı vitrin:* https://www.onnit.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **[RC 1.10.0] [NMN Launch]** · `id`: **189555966242** · `schema_name`: **Onnit Shopify Theme** · `schema_version`: **1.10.0** · `theme_store_id`: **null** (custom) · `role`: **main** · shop `ygjcwg-0q.myshopify.com`

**Durum:** Mod A walk kapandı — 40 observation · resmi 3vp (çoğu) · interact yazıldı  
**PR:** https://github.com/mattiasadem/qante/pull/105 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/onnit/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/onnit/`, `evidence/onnit/`, `todo/onnit.md`, `candidates/onnit-*.md` |

**Kapsam satırı:**  
`Onnit · default · [RC 1.10.0] [NMN Launch] (Onnit Shopify Theme 1.10.0, custom, ygjcwg-0q.myshopify.com, theme 189555966242) · home→PDP Alpha BRAIN 60ct→PLP shop-all→search→Rebuy cart→about→content→footer→mobile · 40 obs · 0 yeni şema · leftover: candidates/onnit-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer | ✅ | ✅ |
| Mega Shop All 1440 | ✅ interact | ✅ bar 3vp + open 1440 |
| Cart drawer boş | ✅ interact | ✅ |
| Cart filled / qty | ⛔ 3 deneme | leftover |
| Predictive search | ✅ interact | ✅ open+input; `alpha` ürün/yazı |
| Mobile menu 375/768 | ✅ interact | ✅ (1440 N/A) |
| PDP `/products/alpha-brain-60-ct` | ✅ + dosage/90ct | ✅ 375/768 · 1440 CF |
| PDP extras (how-to / ingredients / compare / related) | ✅ | ✅ 375/768 · 1440 CF |
| PLP `/collections/shop-all` | ✅ | ✅ (1440 Rebuy bleed) |
| Search `/search?q=alpha` | ✅ | ✅ |
| Cart `/cart` | ⛔ `/?viewcart=true` leftover | — |
| About `/pages/about-us` | ✅ | ✅ |
| Contact `/pages/contact` | ✅ · PII yok | ✅ |
| Prop 65 policy | ✅ | ✅ |
| Blog The Edge + 1 yazı | ✅ | ✅ |
| Subscription LP | ✅ | ✅ |
| 404 | ✅ | ✅ |
| Help / privacy / quiz / ingredients explorer | leftover | — |
| Newsletter / account / checkout | ⛔ PII yok | — |

---

## Bileşen roster (40)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home + mega | [x] | [x] | reuse | [x] |
| 2 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 3 | social-proof-brand-logos | home | [x] | [x] | reuse | [x] |
| 4 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 5 | editorial-image-with-text-overlay | home slim | [x] | [x] | reuse | [x] |
| 6 | editorial-image-with-text | home | [x] | [x] | reuse | [x] |
| 7 | testimonial-quote-carousel | home | [x] | [x] | reuse | [x] |
| 8 | editorial-image-with-text-overlay.2 | home | [x] | [x] | reuse | [x] |
| 9 | features-multicolumn | home | [x] | [x] | reuse | [x] |
| 10 | product-showcase-featured | home | [x] | [x] | reuse | [x] |
| 11 | editorial-rich-text | home | [x] | [x] | reuse | [x] |
| 12 | testimonial-quote-carousel.2 | home | [x] | [x] | reuse | [x] |
| 13 | editorial-image-with-text.2 | home | [x] | [x] | reuse | [x] |
| 14 | collection-nav-cards | home | [x] | [x] | reuse | [x] |
| 15 | faq-collapsible-tabs | home | [x] Q2 | [x] | reuse | [x] |
| 16 | editorial-rich-text.2 | home FDA | [x] | [x] | reuse | [x] |
| 17 | footer-columns-newsletter | home | [x] | [x] PII yok | reuse | [x] |
| 18 | global-cart-drawer | home | [x] boş | [x] filled missing | reuse | [x] |
| 19 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 20 | global-menu-drawer | home | [x] 375/768 | [x] | reuse | [x] |
| 21 | product-info-main | product-detail | [x] 375/768 | [x] 1440 CF | reuse | [x] |
| 22–26 | PDP extras | product-detail | [x] 375/768 | [x] 1440 CF | reuse | [x] |
| 27–28 | PLP banner + grid | collection | [x] | [x] | reuse | [x] |
| 29 | search-results | search | [x] | [x] | reuse | [x] |
| 30–33 | About | about-brand | [x] | [x] | reuse | [x] |
| 34 | page-content-main | contact | [x] | [x] | reuse | [x] |
| 35 | page-content-main | policy | [x] Prop65 | [x] | reuse | [x] |
| 36–37 | blog hero + list | blog-list | [x] | [x] | reuse | [x] |
| 38 | blog-post-main | blog-post | [x] | [x] | reuse | [x] |
| 39 | page-content-main | not-found | [x] | [x] | reuse | [x] |
| 40 | page-content-main | landing-campaign | [x] sub | [x] | reuse | [x] |

---

## Interact (piksel değişince)

| Bileşen | State | 3vp | Not |
|---|---|---|---|
| navigation-header-mega | initial, open | ✅ bar 3vp + open 1440 | Shop All 6 kart |
| global-predictive-search | open, input | ✅ | `alpha` → pages/articles/products |
| global-cart-drawer | initial | ✅ | boş + similar. filled/changed ⛔ |
| global-menu-drawer | open | ✅ 375/768 | SHOP/LEARN tab |
| product-info-main | initial, changed | ✅ 375/768 | 1 capsule + 90 CT. 1440 CF |
| faq-collapsible-tabs | initial, changed | ✅ | Q1 openFirst; Q2 + Q1 açık |

---

## Aday / leftover

[`candidates/onnit-leftovers.md`](../candidates/onnit-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (29 tam · PDP extras 375/768)
- [x] Mega / search / menu / FAQ / PDP size 375/768
- [ ] Cart filled / qty — 3 deneme, üçüncü yok
- [ ] PDP 1440 — dismiss Account → CF
- [x] Validator
- [ ] Newsletter / contact submit / account — **yapılmayacak** (PII)
