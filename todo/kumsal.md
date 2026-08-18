# Todo — Kumsal (ikas Theme Store official demo)

*Kaynak:* https://0esw4-dev-kumsal.myikas.com/  
*Theme Store:* https://themes.ikas.com/themes/79a4d272-c76f-49e1-aeb9-22ad3a5c5066  
*Preset:* `default`  
*Tema:* **Kumsal** · developer **ikascom** · slug `kumsal`  
*Platform (storefront, uydurulmadı):* **ikas** · `window.Shopify` **yok** · `window.__IKAS_DATA__`  
*Fingerprint:* host `0esw4-dev-kumsal.myikas.com` · `merchantId` `232ff515-76eb-4634-ba96-87fcdf0c5064` · `storeName` `dev-kumsal` · `salesChannelId` `df371fb7-ae8e-4a2f-a7ad-993a17e931af` · `storefrontId` `711b0133-dfba-4f0d-bdc0-7ef9e3c3d079` · `apiUrl` `https://api.myikas.com/api/sf/graphql` · locale `tr` · `TRY` ₺ · routing `5c580a7f-ea01-492e-b36d-08eae125b90a` · `logoText` Kumsal · Theme Store UUID `79a4d272-c76f-49e1-aeb9-22ad3a5c5066`

**Durum:** Mod A walk + resmi 3vp + interact + validate (devam)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/kumsal/default/` |
| Observation | **19** |
| Evidence PNG | (capture sonrası) |
| Yeni şema | **0** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Parallel | yalnız `observations/kumsal/`, `evidence/kumsal/`, `todo/kumsal.md`, `candidates/kumsal-leftovers.md` |

**Kapsam satırı:**  
`Kumsal · default · ikas / Shopify yok / __IKAS_DATA__ / merchantId 232ff515-76eb-4634-ba96-87fcdf0c5064 / storeName dev-kumsal / Theme Store 79a4d272-c76f-49e1-aeb9-22ad3a5c5066 · home→PDP Chukka Oatmeal→Stormy Blue→PLP /erkek→/search chukka→cart empty/filled→about hakkimizda→iletisim→FAQ home only→blog 404→404 · 19 obs · 0 yeni şema · leftover: dual-hero / search-is-page / blog-404 / faq-routes`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/slider/triple/IWT/FAQ/footer | [x] obs | [ ] capture |
| Header kapalı + Erkek mega 1440 | [x] obs | [ ] interact |
| Search `/search` + `chukka` | [x] obs | [ ] interact 375/768/1440 |
| Mobile hamburger 375+768 + Erkek nested | [x] obs | [ ] interact |
| PDP Chukka renk Oatmeal→Stormy Blue | [x] obs | [ ] interact |
| PLP `/erkek` | [x] obs | [ ] capture |
| Search page | [x] obs | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [ ] interact |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/hakkimizda` | [x] obs | [ ] capture |
| Contact `/pages/iletisim` form | [x] obs | [ ] capture PII yok |
| FAQ dedicated | leftover 404 — home `section.faq` | — |
| Blog `/blog` | leftover 404 | — |
| 404 | [x] obs | [ ] capture |

---

## Bileşen roster

19 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse (mega var) | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse (dual panel) | [ ] |
| 4 | product-showcase-grid-featured | home | [ ] | [x] | slider + ATC | [ ] |
| 5 | promo-grid-banner | home | [ ] | [x] | triple | [ ] |
| 6 | editorial-image-with-text | home | [ ] | [x] | Şort Rehberi | [ ] |
| 7 | faq-collapsible-tabs | home | [ ] | [x] | home only | [ ] |
| 8 | footer-columns-newsletter | home | [ ] | [x] | submit yok | [ ] |
| 9 | global-predictive-search | home | [ ] | [x] | /search page | [ ] |
| 10 | global-menu-drawer | home | [ ] | [x] | 375/768 | [ ] |
| 11 | global-cart-drawer | home | [ ] | [x] | .cdw-panel | [ ] |
| 12 | product-info-main | product-detail | [ ] | [x] | renk | [ ] |
| 13 | product-showcase-related | product-detail | [ ] | [x] | reuse slider | [ ] |
| 14 | product-showcase-grid-plp | collection | [ ] | [x] | /erkek 32 | [ ] |
| 15 | search-results | search | [ ] | [x] | 53 | [ ] |
| 16 | cart-page-main | cart | [ ] | [x] | empty/filled | [ ] |
| 17 | editorial-image-with-text | about-brand | [ ] | [x] | sticky | [ ] |
| 18 | lead-capture-form | contact | [ ] | [x] | PII yok | [ ] |
| 19 | page-content-main | not-found | [ ] | [x] | 404 | [ ] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | 1440 Erkek mega (kolon+promo) — çekilecek |
| global-predictive-search | input | `/search` + `chukka` — overlay yok |
| global-menu-drawer | open/changed | 375/768 hamburger + Erkek alt |
| global-cart-drawer | initial/filled/changed | boş → Chukka ATC → adet |
| cart-page-main | initial/filled/changed | boş → dolu → adet |
| product-info-main | changed | Oatmeal → Stormy Blue |

---

## Aday / leftover

[`candidates/kumsal-leftovers.md`](../candidates/kumsal-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / menu / PDP renk
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
