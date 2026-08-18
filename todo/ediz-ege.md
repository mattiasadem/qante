# Todo — Ediz Ege (ikas Theme Store)

*Kaynak:* https://dev-edizege.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/97a7859b-38f3-40bd-8b9b-4020d7d2854b  
*Preset:* `default`  
*Tema (görülen, uydurulmadı):* **Ediz Ege** · developer **ikascom** · Theme Store UUID **`97a7859b-38f3-40bd-8b9b-4020d7d2854b`**  
*Platform:* **ikas** · `Shopify.theme` **yok** · `x-powered-by: ikas` · `__IKAS_DATA__`  
*Storefront (ikas, uydurulmadı):* `storefrontThemeId` `00a88f8a-20f8-4c8f-b91a-0d55c911315d` · `storefrontId` `a676df71-3345-4235-9f76-4ff2fbe56848` · `merchantId` `b35c5ed6-3df7-4dae-bffb-9c87204009e1` · `storeName` `dev-edizege` · domain `dev-edizege.ikas.shop` · locale `tr` · `TRY` ₺

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/ediz-ege/default/` |
| Observation | **24** |
| Yeni şema | **0** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Parallel | yalnız `observations/ediz-ege/`, `evidence/ediz-ege/`, `todo/ediz-ege.md`, `candidates/ediz-ege-leftovers.md` |

**Kapsam satırı:**  
`Ediz Ege · default · ikas Theme Store UUID 97a7859b-38f3-40bd-8b9b-4020d7d2854b · home→PDP dudak-balmi→PLP /yuz-bakimi→search?s=serum→cart empty/filled/qty→iletisim→404 · FAQ/about/blog 404 · 24 obs · 0 yeni şema · leftover: about/faq/blog/q=/track/kupon/quick-add`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + ann/hero/grid/brand/cats/spotlight/ingredients/slider/lookbook/press/newsletter/footer | [x] | [ ] capture |
| Header kapalı + Bakım dropdown hover 1440 | [x] | [ ] capture |
| Predictive search `serum` | [x] | [ ] capture 375/768/1440 |
| Mobile hamburger 375+768 + Bakım toggle | [x] | [ ] capture (1440 hamburger yok) |
| PDP Doğal Dudak Balmı Renk Naturel→Gül | [x] | [ ] capture |
| PLP `/yuz-bakimi` grid + filtre | [x] | [ ] capture |
| Search `/search?s=serum` | [x] | [ ] capture 3 sonuç |
| Cart `/cart` empty + filled + qty | [x] | [ ] capture |
| Cart drawer empty + filled + qty | [x] | [ ] capture |
| Contact `/pages/iletisim` | [x] | [ ] PII yok |
| 404 | [x] | [ ] capture |
| About / FAQ / blog | ⛔ 404 | leftover |

---

## Bileşen roster

24 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | dropdown (mega değil) | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | tek slayt split | [ ] |
| 4 | product-showcase-grid-featured | home | [ ] | [x] | Öne Çıkan | [ ] |
| 5 | editorial-image-with-text | home | [ ] | [x] | Hikâyemiz | [ ] |
| 6 | collection-nav-image-cards | home | [ ] | [x] | 3 koleksiyon | [ ] |
| 7 | product-showcase-featured | home | [ ] | [x] | Ayın ürünü | [ ] |
| 8 | features-multicolumn | home | [ ] | [x] | botanik | [ ] |
| 9 | product-showcase-grid-featured.2 | home | [ ] | [x] | slider | [ ] |
| 10 | media-lookbook-banner | home | [ ] | [x] | lookbook | [ ] |
| 11 | testimonial-quote-carousel | home | [ ] | [x] | 3 alıntı | [ ] |
| 12 | lead-capture-newsletter-band | home | [ ] | [x] | submit yok | [ ] |
| 13 | footer-columns-newsletter | home | [ ] | [x] | account/blog leftover | [ ] |
| 14 | global-predictive-search | home | [ ] | [x] | serum | [ ] |
| 15 | global-menu-drawer | home | [ ] | [x] | 375/768 | [ ] |
| 16 | global-cart-drawer | home | [ ] | [x] | `.ee-cartd` | [ ] |
| 17 | product-info-main | product-detail | [ ] | [x] | Renk Gül | [ ] |
| 18 | faq-collapsible-tabs | product-detail | [ ] | [x] | accordion | [ ] |
| 19 | trust-icon-row | product-detail | [ ] | [x] | güven 3’lü | [ ] |
| 20 | product-showcase-grid-plp | collection | [ ] | [x] | /yuz-bakimi | [ ] |
| 21 | search-results | search | [ ] | [x] | `?s=serum` | [ ] |
| 22 | cart-page-main | cart | [ ] | [x] | empty/filled/qty | [ ] |
| 23 | lead-capture-form | contact | [ ] | [x] | PII yok | [ ] |
| 24 | page-content-main | not-found | [ ] | [x] | 404 | [ ] |

---

## Interact (pixel-checked)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | 1440 Bakım **hover** — 4 link |
| global-predictive-search | input | `serum` → 3 serum varyantı + Tüm sonuçları göster |
| global-menu-drawer | open/changed | 375/768 hamburger; Bakım parent toggle |
| global-cart-drawer | initial/filled/changed | boş + Dudak Balmı + adet |
| cart-page-main | initial/filled/changed | boş → qty1 ₺140 → qty2 |
| product-info-main | changed | Renk Naturel → Gül |

---

## Aday / leftover

[`candidates/ediz-ege-leftovers.md`](../candidates/ediz-ege-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / menu / PDP Renk
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
