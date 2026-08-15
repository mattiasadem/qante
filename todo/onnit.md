# Todo — Onnit (DTC-69 #58)

*Kaynak (liste):* https://onnit.com · *Canlı vitrin:* https://www.onnit.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **[RC 1.10.0] [NMN Launch]** · `id`: **189555966242** · `schema_name`: **Onnit Shopify Theme** · `schema_version`: **1.10.0** · `theme_store_id`: **null** (custom) · `role`: **main** · shop `ygjcwg-0q.myshopify.com`

**Durum:** Mod A observation yazıldı — resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/onnit/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/onnit/`, `evidence/onnit/`, `todo/onnit.md`, `candidates/onnit-*.md` |

**Kapsam satırı:**  
`Onnit · default · [RC 1.10.0] [NMN Launch] (Onnit Shopify Theme 1.10.0, custom, ygjcwg-0q.myshopify.com, theme 189555966242) · home→PDP Alpha BRAIN 60ct→PLP shop-all→search→Rebuy cart→about→content→footer→mobile · 40 obs · 0 yeni şema`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer | obs | [ ] |
| Mega Shop All 1440 | obs | [ ] interact |
| Cart drawer boş + dolu + qty | obs | [ ] interact |
| Predictive search | obs | [ ] interact |
| Mobile menu 375/768 | obs | [ ] interact |
| PDP `/products/alpha-brain-60-ct` | obs | [ ] + size/dosage |
| PLP `/collections/shop-all` | obs | [ ] |
| Search `/search?q=alpha` | obs | [ ] |
| Cart `/cart` | ⛔ `/?viewcart=true` leftover | — |
| About `/pages/about-us` | obs | [ ] |
| Contact `/pages/contact` | obs · PII yok | [ ] |
| Prop 65 policy | obs | [ ] |
| Blog The Edge + 1 yazı | obs | [ ] |
| Subscription LP | obs | [ ] |
| 404 | obs | [ ] |
| Help / privacy / quiz / ingredients explorer | leftover | — |
| Newsletter / account / checkout | ⛔ PII yok | — |

---

## Bileşen roster (40)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home + mega | [ ] | [ ] | reuse | [ ] |
| 2 | hero-slideshow | home | [ ] | [ ] | reuse | [ ] |
| 3 | social-proof-brand-logos | home | [ ] | [ ] | reuse | [ ] |
| 4 | collection-nav-image-cards | home | [ ] | [ ] | reuse | [ ] |
| 5 | editorial-image-with-text-overlay | home slim | [ ] | [ ] | reuse | [ ] |
| 6 | editorial-image-with-text | home | [ ] | [ ] | reuse | [ ] |
| 7 | testimonial-quote-carousel | home | [ ] | [ ] | reuse | [ ] |
| 8 | editorial-image-with-text-overlay.2 | home | [ ] | [ ] | reuse | [ ] |
| 9 | features-multicolumn | home | [ ] | [ ] | reuse | [ ] |
| 10 | product-showcase-featured | home | [ ] | [ ] | reuse | [ ] |
| 11 | editorial-rich-text | home | [ ] | [ ] | reuse | [ ] |
| 12 | testimonial-quote-carousel.2 | home | [ ] | [ ] | reuse | [ ] |
| 13 | editorial-image-with-text.2 | home | [ ] | [ ] | reuse | [ ] |
| 14 | collection-nav-cards | home | [ ] | [ ] | reuse | [ ] |
| 15 | faq-collapsible-tabs | home | [ ] | [ ] | reuse | [ ] |
| 16 | editorial-rich-text.2 | home FDA | [ ] | [ ] | reuse | [ ] |
| 17 | footer-columns-newsletter | home | [ ] | [ ] PII yok | reuse | [ ] |
| 18 | global-cart-drawer | home | [ ] | [ ] Rebuy | reuse | [ ] |
| 19 | global-predictive-search | home | [ ] | [ ] | reuse | [ ] |
| 20 | global-menu-drawer | home | [ ] | [ ] 375/768 | reuse | [ ] |
| 21–26 | PDP Alpha BRAIN | product-detail | [ ] | [ ] | reuse | [ ] |
| 27–28 | PLP banner + grid | collection | [ ] | [ ] | reuse | [ ] |
| 29 | search-results | search | [ ] | [ ] | reuse | [ ] |
| 30–33 | About | about-brand | [ ] | [ ] | reuse | [ ] |
| 34 | page-content-main | contact | [ ] | [ ] | reuse | [ ] |
| 35 | page-content-main | policy | [ ] | [ ] Prop65 | reuse | [ ] |
| 36–37 | blog hero + list | blog-list | [ ] | [ ] | reuse | [ ] |
| 38 | blog-post-main | blog-post | [ ] | [ ] | reuse | [ ] |
| 39 | page-content-main | not-found | [ ] | [ ] | reuse | [ ] |
| 40 | page-content-main | landing-campaign | [ ] | [ ] sub | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 Shop All |
| global-predictive-search | open / input | [ ] `alpha` |
| global-cart-drawer | initial / filled / changed | [ ] boş · Alpha BRAIN · qty |
| global-menu-drawer | open | [ ] 375/768 |
| product-info-main | changed | [ ] dosage / 90 Count |
| faq-collapsible-tabs | changed | [ ] ilk panel |

---

## Aday / leftover

[`candidates/onnit-leftovers.md`](../candidates/onnit-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Mega / search / cart / menu / PDP size / FAQ
- [ ] Validator
- [ ] Newsletter / contact submit / account — **yapılmayacak** (PII)
