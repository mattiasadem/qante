# Todo — Pamos (pamos.com)

*Kaynak:* https://pamos.com · *Preset:* `default`  
*Tema (vitrinde, uydurulmadı):* **Pamos** 11.0.1 · Sage/Roots starter · text domain `pamos` · `/wp-content/themes/pamos/` · body `wp-theme-pamos theme-pamos`  
*Shopify.theme:* **yok** (WordPress + WooCommerce 10.7.0)  
*Age-gate:* `button.age-confirm` “I AM 21+” · cookie `ageVerified`

**Durum:** Mod A walk — observation taslakları yazıldı; resmi 3vp henüz çekilmedi  
**PR:** (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/pamos/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/pamos/`, `evidence/pamos/`, `todo/pamos.md`, `candidates/pamos-*.md` |

**Kapsam satırı:**  
`Pamos · default · Pamos 11.0.1 (Sage/WP, Shopify.theme yok) · home→PDP→PLP→search→FunnelKit cart→content→footer→mobile · obs taslak · 0 yeni şema`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/newsletter | ⬜ capture | ⬜ |
| Intersite announcement (nationwide) | ⬜ | ⬜ |
| Cart drawer boş + dolu (FunnelKit) | ⬜ interact | ⬜ |
| Mobile menu 375/768 | ⬜ interact | ⬜ |
| Predictive search | ⛔ header’da yok | — |
| Mega | ⛔ düz nav | — |
| PDP Signature Spirit | ⬜ | ⬜ |
| PLP `/nationwide/` + tabs | ⬜ interact tab | ⬜ |
| Search `/?s=spirit` | ⬜ | ⬜ |
| Cart `/cart/` boş | ⬜ | ⬜ |
| Learn FAQ | ⬜ + accordion | ⬜ |
| Recipes hub + Stoned Shirley | ⬜ | ⬜ |
| Why Pamos / manufacturing | ⬜ | ⬜ |
| Privacy + shipping | ⬜ | ⬜ |
| Landings spirits/spritz/bundles/dose | ⬜ | ⬜ |
| Locations intro (iframe leftover) | ⬜ | ⬜ |
| Contact form (PII yok) | ⬜ | ⬜ |
| 404 / age-gate / wholesale / locator iframe | ⛔ candidates | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 2 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 3–6 | editorial-image-with-text ×4 | home | [ ] | [x] | reuse | [ ] |
| 7 | lead-capture-newsletter-band | home | [ ] | [x] PII yok | reuse | [ ] |
| 8 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 9 | global-cart-drawer | home | [ ] | [x] FunnelKit | reuse | [ ] |
| 10 | global-menu-drawer | home 375 | [ ] | [x] | reuse | [ ] |
| 11 | promo-announcement-bar | collection | [ ] | [x] intersite | reuse | [ ] |
| 12–14 | banner / tabs / grid | collection | [ ] | [x] | reuse | [ ] |
| 15–17 | PDP buy box / related / recipe slider | product-detail | [ ] | [x] | reuse | [ ] |
| 18 | search-results | search | [ ] | [x] | reuse | [ ] |
| 19 | cart-page-main | cart | [ ] | [x] boş | reuse | [ ] |
| 20–22 | learn hero / FAQ / claims | faq-support | [ ] | [x] | reuse | [ ] |
| 23–25 | recipes + article | blog | [ ] | [x] | reuse | [ ] |
| 26–29 | privacy / shipping / why / mfg | content | [ ] | [x] | reuse | [ ] |
| 30–31 | locations intro + claims | locations | [ ] | [x] iframe leftover | reuse | [ ] |
| 32–35 | landings | landing-campaign | [ ] | [x] | reuse | [ ] |
| 36 | lead-capture-form | contact | [ ] | [x] PII yok | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Not |
|---|---|---|
| global-cart-drawer | initial, filled | FunnelKit. ATC UI (Shopify addToCart yok) |
| global-menu-drawer | open | 375/768 `button.toggle-menu` |
| collection-nav-tabs | initial, changed | All → SPIRITS |
| faq-collapsible-tabs | initial, changed | 2. soru |

---

## Aday / leftover

[`candidates/pamos-leftovers.md`](../candidates/pamos-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Cart boş+dolu / mobile menu / FAQ / shop tabs
- [ ] Newsletter / contact / wholesale submit — **yapılmayacak** (PII)
