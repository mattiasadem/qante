# Todo — Represent Clo (representclo.com)

*Kaynak:* https://representclo.com · *Preset:* `default`  
*Tema (storefront):* **represent-us/main** (`Shopify.theme.name`) · `schema_name`: Blank Shopify Theme · `theme_store_id`: null (custom) · role `main` · id `131742433489`  
*Shop:* `representclo-us.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact (piksel değişen) — kapandı  
**PR:** https://github.com/mattiasadem/qante/pull/70 (draft) · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/representclo/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| PNG | **141** |
| Parallel | yalnız `observations/representclo/`, `evidence/representclo/`, `todo/representclo.md`, `candidates/representclo-*.md` |

**Kapsam satırı:**  
`Represent Clo · default · represent-us/main (custom Blank) · home→PDP→PLP→search→cart→content→footer→mobile · 43 obs · 141 PNG · 0 yeni şema · leftover: vault gate / prestige tiers / Yotpo / Tagalys / parallax clip / 404 / Zendesk / PII`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home split + header/footer | ✅ | [x] |
| Mega / search overlay / cart drawer / mobile menu | ✅ interact | [x] |
| PDP `/products/247-dna-oversized-t-shirt-jet-black-26` | ✅ | [x] |
| PLP `/collections/mens-247` | ✅ | [x] |
| Vault `/collections/vault` (kapalı) | ✅ | [x] |
| Search `/search?q=t-shirt` | ✅ | [x] |
| Cart `/cart` boş + drawer boş/dolu | ✅ | [x] |
| 247-home / represent-home landings | ✅ | [x] (parallax leftover kalite) |
| About `/pages/about` | ✅ | [x] |
| Prestige `/pages/prestige` + FAQ changed | ✅ | [x] |
| Retail / Reviews / Stockists / Press | ✅ | [x] |
| Policy accessibility + native privacy | ✅ | [x] |
| Blog list + post | ✅ | [x] |
| 404 `/pages/faq` `/pages/contact` | ⛔ candidate | — |
| Tracking / wishlist / login / newsletter | ⛔ PII / app | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 2 | promo-grid-banner | home | [x] | [x] | reuse | [x] |
| 3 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 4 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 5 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 6 | global-menu-drawer | home | [x] | [x] | reuse | [x] |
| 7 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 8 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 9 | testimonial-quote-carousel | product-detail | [x] | [x] | reuse | [x] |
| 10 | product-showcase-tabs | product-detail | [x] | [x] | reuse | [x] |
| 11 | collection-banner | collection | [x] | [x] | reuse | [x] |
| 12 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 13 | editorial-image-with-text-overlay | collection-vault | [x] | [x] | reuse | [x] |
| 14 | search-results | search | [x] | [x] | reuse | [x] |
| 15 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 16–19 | about editorial/timeline/hero | about-brand | [x] | [x] | reuse | [x] |
| 20–25 | 247-home heroes/grid/scroll | landing-247 | [x] | [x] | reuse | [x] |
| 26–29 | represent-home | landing-represent | [x] | [x] | reuse | [x] |
| 30–33 | prestige hero/split/FAQ | prestige | [x] | [x] | reuse | [x] |
| 34 | collection-nav-banners | retail | [x] | [x] | reuse | [x] |
| 35 | testimonial-quote-carousel | reviews | [x] | [x] | reuse | [x] |
| 36–37 | stockists | stockists | [x] | [x] | reuse | [x] |
| 38–39 | press | press | [x] | [x] | reuse | [x] |
| 40–41 | policy | policy | [x] | [x] | reuse | [x] |
| 42–43 | blog list + post | blog-* | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişen)

| Bileşen | State | 3vp | Not |
|---|---|---|---|
| navigation-header-mega | initial, open | [x] | 1440 Shop **hover** (click kapatır). 375/768 N/A |
| global-predictive-search | initial, input | [x] | `t-shirt` 375/768/1440 Tagalys |
| global-cart-drawer | initial, filled | [x] | DNA tee M via UI; qty leftover |
| global-menu-drawer | open | [x] | 375/768 hamburger. 1440 N/A |
| faq-collapsible-tabs | initial, changed | [x] | What is Prestige? |

---

## Aday / leftover

[`candidates/representclo-leftovers.md`](../candidates/representclo-leftovers.md) · [`candidates/representclo-404s.md`](../candidates/representclo-404s.md)

---

## Evidence backlog

- [x] Claiming 43 obs resmi 3vp (chrome interact dosya adıyla)
- [x] Overlay / mega / search / cart / menu / FAQ interact
- [ ] Cart qty `changed` — leftover
- [ ] PLP Filter & Sort panel — leftover
- [ ] 247 mega — leftover
- [ ] `hero_parallax` represent-home / 247-home — seyrek/komşu clip
- [ ] Newsletter / login / tracking form — **yapılmayacak** (PII)
