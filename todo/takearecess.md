# Todo — Recess (takearecess.com)

*Kaynak:* https://takearecess.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* `window.Shopify` / `Shopify.theme` / `schema_name` / `schema_version` / `theme_store_id` **yok**.  
*Platform:* **Nuxt (Netlify)** + **Sanity CMS** (`projectId=umoebutk` · `dataset=production`) + **Shopify Storefront API** `takearecess.myshopify.com` (`/api/2023-07/graphql.json`). Repo string `Day Job / recess`. `#shopify-section-*` yok.

**Durum:** Mod A walk kapandı — 42 obs · resmi 3vp (149 PNG) · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/109 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/takearecess/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/takearecess/`, `evidence/takearecess/`, `todo/takearecess.md`, `candidates/takearecess-*.md` |

**Kapsam satırı:**  
`Recess · default · Nuxt/Netlify + Sanity + Shopify Storefront (tema adı yok) · home→PDP→PLP→cart dialog→content→footer→mobile · 42 obs · 149 PNG · 0 yeni şema · leftover: 404/search/no-cart-page/no-hover-mega/destini/PII-forms`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer/newsletter | ✅ | ✅ resmi |
| Shop menu 1440 + mobile drawer + Mood expander | ✅ interact | ✅ (menu 1440 N/A) |
| Predictive search | ⛔ ikon/overlay yok · `/search` 404 | leftover |
| Mega hover | ⛔ click dialog | leftover |
| PDP `/shop/recess-mood/blood-orange-mood` | ✅ + subscribe→single | ✅ |
| PLP `/shop/recess-mood` | ✅ | ✅ |
| Shop all `/shop/collections/shopall` | ✅ header + Mood blok | ✅ |
| Search / cart page | ⛔ 404 | leftover |
| FAQ `/faq` | ✅ rich-text (accordion yok) | ✅ |
| Contact / support | ✅ mailto + form (PII yok) | ✅ |
| Privacy / terms / shipping | ✅ | ✅ |
| What’s inside / press / lab / wholesale / where | ✅ (Destini leftover) | ✅ |
| Subscribe landing | ✅ | ✅ |
| Blog | ⛔ sitemap’te yok | leftover |
| 404 | ⛔ leftover | — |
| Newsletter / account / checkout | ⛔ PII | — |

---

## Bileşen roster (42)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | TAKE10 marquee | reuse | [x] |
| 2 | navigation-header-mega | home | [x] + open 1440 | shop dialog | reuse | [x] |
| 3–4 | editorial-image-with-text-overlay ×2 | home | [x] | featured + splash | reuse | [x] |
| 5 | editorial-rich-text | home | [x] | #intro | reuse | [x] |
| 6–10 | product-showcase-grid-featured ×5 | home | [x] | samplers→hemp | reuse | [x] |
| 11–12 | testimonial-quote-carousel ×2 | home | [x] | press + UGC | reuse | [x] |
| 13 | lead-capture-newsletter-band | home | [x] | PII yok | reuse | [x] |
| 14 | footer-columns-newsletter | home | [x] | Day Job credit | reuse | [x] |
| 15 | global-cart-drawer | home | [x] boş/dolu/qty2 | #cart dialog | reuse | [x] |
| 16 | global-menu-drawer | home | [x] 375/768 | Mood expander | reuse | [x] |
| 17–18 | banner + grid | collection Mood | [x] | | reuse | [x] |
| 19–20 | header + Mood blok | shopall | [x] | | reuse | [x] |
| 21 | product-info-main | product-detail | [x] + changed | subscribe→single | reuse | [x] |
| 22–27 | PDP below-fold ×6 | product-detail | [x] | | reuse | [x] |
| 28 | faq-collapsible-tabs | faq-support | [x] | düz metin | reuse | [x] |
| 29–31 | privacy / terms / shipping | policy | [x] | | reuse | [x] |
| 32–33 | contact + support form | contact | [x] | PII yok | reuse | [x] |
| 34–39 | where / press / wholesale / inside / lab | about-brand | [x] | Destini leftover | reuse | [x] |
| 40–42 | subscribe hero / features / faq | landing-campaign | [x] | | reuse | [x] |

---

## Interact (piksel değişince — bakıldı)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 shop dialog sol panel. Hover mega yok. |
| global-menu-drawer | open, changed | 375/768 tam ekran + Recess Mood lezzet listesi. 1440 N/A. |
| global-cart-drawer | initial, filled, changed | Boş clouds; Blood Orange $37.99 QTY 1→2; Rebuy-benzeri upsell. ATC **ui**. |
| product-info-main | initial, changed | Subscribe $29.67 → single $37.99. Swatch yok (lezzet URL). |

---

## Aday / leftover

[`candidates/takearecess-leftovers.md`](../candidates/takearecess-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (42 × 3vp + interact)
- [x] Interact yoklandı — PNG bakıldı
- [x] `npm run validate` — 65 temiz · 0 error · 0 warn
- [ ] Newsletter / account / checkout / form submit — **yapılmayacak** (PII)
