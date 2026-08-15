# Todo — Pamos (pamos.com)

*Kaynak:* https://pamos.com → https://www.pamos.com · *Preset:* `default`  
*Tema (vitrinde, uydurulmadı):* **Pamos** 11.0.1 · Sage/Roots starter · text domain `pamos` · `/wp-content/themes/pamos/` · body `wp-theme-pamos theme-pamos`  
*Shopify.theme / schema_name:* **yok** (WordPress + WooCommerce 10.7.0)  
*Age-gate:* `#age-gate` · `button.age-confirm` “I AM 21+” · cookie `ageVerified`

**Durum:** Mod A walk kapandı — 37 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/86 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/pamos/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/pamos/`, `evidence/pamos/`, `todo/pamos.md`, `candidates/pamos-*.md` |

**Kapsam satırı:**  
`Pamos · default · Pamos 11.0.1 (Sage/WP, Shopify.theme yok) · home→PDP→PLP→search→FunnelKit cart→content→footer→mobile · 37 obs · 122 PNG · 0 yeni şema · leftover: 404/age-gate/locator-iframe/wholesale/no-search/no-mega`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer/newsletter | ✅ | ✅ |
| Intersite + VPACK bar | ✅ | ✅ |
| Cart drawer boş + dolu (FunnelKit) | ✅ interact | ✅ |
| Mobile menu 375/768 | ✅ interact | ✅ (1440 N/A) |
| Predictive search | ⛔ header’da yok | — |
| Mega | ⛔ düz nav | — |
| PDP Signature Spirit + case varyant | ✅ + changed | ✅ |
| PLP `/nationwide/` + tabs All→SPIRITS | ✅ interact | ✅ |
| Search `/?s=spirit` | ✅ metin listesi | ✅ |
| Cart `/cart/` boş | ✅ | ✅ |
| Learn FAQ + accordion | ✅ + changed | ✅ |
| Recipes hub + Stoned Shirley | ✅ | ✅ |
| Why Pamos `/cannabis`→twist | ✅ | ✅ |
| Manufacturing COA | ✅ | ✅ |
| Privacy + shipping | ✅ | ✅ |
| Landings spirits/spritz/bundles/dose | ✅ | ✅ |
| Locations intro (iframe leftover) | ✅ | ✅ |
| Contact form (PII yok) | ✅ | ✅ |
| 404 / age-gate / wholesale / locator iframe | ⛔ candidates | — |

---

## Bileşen roster (37)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] intersite+VPACK | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] mega yok | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4–7 | editorial-image-with-text ×4 | home | [x] | [x] | reuse | [x] |
| 8 | lead-capture-newsletter-band | home | [x] | [x] PII yok | reuse | [x] |
| 9 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 10 | global-cart-drawer | home | [x] boş+dolu | [x] FunnelKit | reuse | [x] |
| 11 | global-menu-drawer | home 375/768 | [x] | [x] 1440 N/A | reuse | [x] |
| 12 | promo-announcement-bar | collection | [x] | [x] intersite | reuse | [x] |
| 13–15 | banner / tabs / grid | collection | [x] | [x] | reuse | [x] |
| 16–18 | PDP buy box / related / recipe slider | product-detail | [x] + case | [x] | reuse | [x] |
| 19 | search-results | search | [x] | [x] text list | reuse | [x] |
| 20 | cart-page-main | cart | [x] | [x] boş | reuse | [x] |
| 21–23 | learn hero / FAQ / claims | faq-support | [x] | [x] | reuse | [x] |
| 24–25 | recipes hero + grid | blog-list | [x] | [x] | reuse | [x] |
| 26 | blog-post-main | blog-post | [x] | [x] Stoned Shirley | reuse | [x] |
| 27–28 | privacy + shipping | policy | [x] | [x] | reuse | [x] |
| 29–30 | why-twist + manufacturing | about-brand | [x] | [x] | reuse | [x] |
| 31–32 | locations intro + claims | locations | [x] | [x] iframe leftover | reuse | [x] |
| 33–36 | landings ×4 | landing-campaign | [x] | [x] | reuse | [x] |
| 37 | lead-capture-form | contact | [x] | [x] PII yok | reuse | [x] |

---

## Interact (piksel değişince — bakıldı)

| Bileşen | State | Not |
|---|---|---|
| global-cart-drawer | initial, filled | Boş drawer + Signature Spirit 1×$45. Qty +/− göründü, changed çekilmedi. ATC **ui** (Shopify addToCart yok). |
| global-menu-drawer | open | 375/768 hamburger → tam ekran nav + X. 1440 N/A. |
| collection-nav-tabs | initial, changed | All → SPIRITS underline. |
| faq-collapsible-tabs | initial, changed | SHIPPING TIMES açık → IS HEMP-DERIVED THC LEGAL? |
| product-info-main | initial, changed | SINGLE $45 → 1 CASE $225. |

---

## Aday / leftover

[`candidates/pamos-leftovers.md`](../candidates/pamos-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp
- [x] Cart boş+dolu / mobile menu / FAQ / shop tabs / PDP case
- [ ] Cart qty `changed` (plus göründü, çekilmedi)
- [ ] Newsletter / contact / wholesale submit — **yapılmayacak** (PII)
