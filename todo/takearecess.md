# Todo — Recess (takearecess.com)

*Kaynak:* https://takearecess.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* `window.Shopify` / `Shopify.theme` / `schema_name` / `schema_version` / `theme_store_id` **yok**.  
*Platform:* **Nuxt (Netlify)** + **Sanity CMS** (`projectId=umoebutk` · `dataset=production`) + **Shopify Storefront API** `takearecess.myshopify.com` (`/api/2023-07/graphql.json`). Repo string `Day Job / recess`. `#shopify-section-*` yok.

**Durum:** Mod A walk yazıldı — resmi 3vp + interact + validate sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/takearecess/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/takearecess/`, `evidence/takearecess/`, `todo/takearecess.md`, `candidates/takearecess-*.md` |

**Kapsam satırı:**  
`Recess · default · Nuxt/Netlify + Sanity + Shopify Storefront (tema adı yok) · home→PDP→PLP→cart dialog→content→footer→mobile · 41 obs · 0 yeni şema · leftover: 404/search/no-mega-hover/destini/PII-forms`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/newsletter | ✅ yazıldı | ⬜ resmi |
| Shop menu / cart dialog / mobile menu | ✅ interact adımları | ⬜ |
| Predictive search | ⛔ header’da yok · `/search` 404 | leftover |
| Mega hover | ⛔ click dialog | leftover |
| PDP `/shop/recess-mood/blood-orange-mood` | ✅ + subscribe→single | ⬜ |
| PLP `/shop/recess-mood` | ✅ | ⬜ |
| Shop all `/shop/collections/shopall` | ✅ header + Mood blok | ⬜ |
| Search / cart page | ⛔ 404 | leftover |
| FAQ `/faq` | ✅ rich-text (accordion yok) | ⬜ |
| Contact / support | ✅ mailto + form (PII yok) | ⬜ |
| Privacy / terms / shipping | ✅ | ⬜ |
| What’s inside / press / lab / wholesale / where | ✅ (Destini leftover) | ⬜ |
| Subscribe landing | ✅ | ⬜ |
| Blog | ⛔ sitemap’te yok | leftover |
| 404 | ⛔ leftover | — |
| Newsletter / account / checkout | ⛔ PII | — |

---

## Bileşen roster (41)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] | shop dialog | reuse | [ ] |
| 2–3 | editorial-image-with-text-overlay ×2 | home | [ ] | featured + splash | reuse | [ ] |
| 4 | editorial-rich-text | home | [ ] | #intro | reuse | [ ] |
| 5–9 | product-showcase-grid-featured ×5 | home | [ ] | samplers→hemp | reuse | [ ] |
| 10–11 | testimonial-quote-carousel ×2 | home | [ ] | press + UGC | reuse | [ ] |
| 12 | lead-capture-newsletter-band | home | [ ] | PII yok | reuse | [ ] |
| 13 | footer-columns-newsletter | home | [ ] | | reuse | [ ] |
| 14 | global-cart-drawer | home | [ ] | #cart dialog | reuse | [ ] |
| 15 | global-menu-drawer | home | [ ] | 375/768 | reuse | [ ] |
| 16–17 | banner + grid | collection Mood | [ ] | | reuse | [ ] |
| 18–19 | header + Mood blok | shopall | [ ] | | reuse | [ ] |
| 20 | product-info-main | product-detail | [ ] | + changed | reuse | [ ] |
| 21–26 | PDP below-fold ×6 | product-detail | [ ] | | reuse | [ ] |
| 27 | faq-collapsible-tabs | faq-support | [ ] | düz metin | reuse | [ ] |
| 28–30 | privacy / terms / shipping | policy | [ ] | | reuse | [ ] |
| 31–32 | contact + support form | contact | [ ] | PII yok | reuse | [ ] |
| 33–38 | where / press / wholesale / inside / lab | about-brand | [ ] | | reuse | [ ] |
| 39–41 | subscribe hero / features / faq | landing-campaign | [ ] | | reuse | [ ] |

---

## Interact (plan)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 shop dialog |
| global-menu-drawer | open, changed | 375/768 + Mood expander |
| global-cart-drawer | initial, filled, changed | boş / ATC Mood / qty |
| product-info-main | initial, changed | subscribe → single |

---

## Aday / leftover

[`candidates/takearecess-leftovers.md`](../candidates/takearecess-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Interact 3vp (PNG bakılacak)
- [ ] `npm run validate`
- [ ] Newsletter / account / checkout / form submit — **yapılmayacak** (PII)
