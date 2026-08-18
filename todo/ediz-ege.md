# Todo — Ediz Ege (ikas Theme Store)

*Kaynak:* https://dev-edizege.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/97a7859b-38f3-40bd-8b9b-4020d7d2854b  
*Preset:* `default`  
*Tema (görülen, uydurulmadı):* **Ediz Ege** · developer **ikascom** · Theme Store UUID **`97a7859b-38f3-40bd-8b9b-4020d7d2854b`**  
*Platform:* **ikas** · `Shopify.theme` **yok** · `x-powered-by: ikas` · `__IKAS_DATA__`  
*Storefront (ikas, uydurulmadı):* `storefrontThemeId` `00a88f8a-20f8-4c8f-b91a-0d55c911315d` · `storefrontId` `a676df71-3345-4235-9f76-4ff2fbe56848` · `merchantId` `b35c5ed6-3df7-4dae-bffb-9c87204009e1` · `storeName` `dev-edizege` · domain `dev-edizege.ikas.shop` · locale `tr` · `TRY` ₺

**Durum:** Mod A walk + resmi 3vp + interact kapandı  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/ediz-ege/default/` |
| Observation | **24** |
| Yeni şema | **0** |
| Evidence PNG | **89** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Parallel | yalnız `observations/ediz-ege/`, `evidence/ediz-ege/`, `todo/ediz-ege.md`, `candidates/ediz-ege-leftovers.md` |

**Kapsam satırı:**  
`Ediz Ege · default · ikas Theme Store UUID 97a7859b-38f3-40bd-8b9b-4020d7d2854b · home→PDP dudak-balmi→PLP /yuz-bakimi→search?s=serum→cart empty/filled/qty→iletisim→404 · FAQ/about/blog 404 · 24 obs · 89 PNG · 0 yeni şema · leftover: about/faq/blog/q=/track/kupon/768-hamburger`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + ann/hero/grid/brand/cats/spotlight/ingredients/slider/lookbook/press/newsletter/footer | done | [x] |
| Header kapalı + Bakım dropdown hover 1440 | done | [x] (375/768 mega N/A) |
| Predictive search `serum` | done | [x] 375/768/1440 |
| Mobile hamburger 375 | done | [x] (768 hamburger display:none) |
| PDP Doğal Dudak Balmı Renk Naturel→Gül | done | [x] |
| PLP `/yuz-bakimi` grid + filtre | done | [x] |
| Search `/search?s=serum` | done | [x] 3 sonuç |
| Cart `/cart` empty + filled + qty | done | [x] |
| Cart drawer empty + filled + qty | done | [x] |
| Contact `/pages/iletisim` | done | [x] PII yok |
| 404 | done | [x] |
| About / FAQ / blog | ⛔ 404 | leftover |

---

## Bileşen roster

24 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | dropdown | [x] |
| 3 | hero-slideshow | home | [x] | [x] | tek slayt split | [x] |
| 4 | product-showcase-grid-featured | home | [x] | [x] | Öne Çıkan | [x] |
| 5 | editorial-image-with-text | home | [x] | [x] | Hikâyemiz | [x] |
| 6 | collection-nav-image-cards | home | [x] | [x] | 3 koleksiyon | [x] |
| 7 | product-showcase-featured | home | [x] | [x] | Ayın ürünü | [x] |
| 8 | features-multicolumn | home | [x] | [x] | botanik | [x] |
| 9 | product-showcase-grid-featured.2 | home | [x] | [x] | slider | [x] |
| 10 | media-lookbook-banner | home | [x] | [x] | lookbook | [x] |
| 11 | testimonial-quote-carousel | home | [x] | [x] | 3 alıntı | [x] |
| 12 | lead-capture-newsletter-band | home | [x] | [x] | submit yok | [x] |
| 13 | footer-columns-newsletter | home | [x] | [x] | account/blog leftover | [x] |
| 14 | global-predictive-search | home | [x] | [x] | serum | [x] |
| 15 | global-menu-drawer | home | [x] | [x] | 375 only | [x] |
| 16 | global-cart-drawer | home | [x] | [x] | `.ee-cartd` | [x] |
| 17 | product-info-main | product-detail | [x] | [x] | Renk Gül | [x] |
| 18 | faq-collapsible-tabs | product-detail | [x] | [x] | accordion | [x] |
| 19 | trust-icon-row | product-detail | [x] | [x] | güven 3’lü | [x] |
| 20 | product-showcase-grid-plp | collection | [x] | [x] | /yuz-bakimi | [x] |
| 21 | search-results | search | [x] | [x] | `?s=serum` | [x] |
| 22 | cart-page-main | cart | [x] | [x] | empty/filled/qty | [x] |
| 23 | lead-capture-form | contact | [x] | [x] | PII yok | [x] |
| 24 | page-content-main | not-found | [x] | [x] | 404 | [x] |

---

## Interact (pixel-checked)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | 1440 Bakım hover — 4 link |
| global-predictive-search | input | `serum` → 3 serum varyantı ₺480 + Tüm sonuçları göster |
| global-menu-drawer | open | 375 drawer; 768 hamburger yok; changed yok (gruplar hep açık) |
| global-cart-drawer | initial/filled/changed | boş → qty1 ₺140 → qty2 ₺280 |
| cart-page-main | initial/filled/changed | boş → qty1 ₺140 → qty2 ₺280 / 2 ürün |
| product-info-main | changed | Renk Naturel → Gül; ana görsel gül ten |

---

## Aday / leftover

[`candidates/ediz-ege-leftovers.md`](../candidates/ediz-ege-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact header / search / cart / menu / PDP Renk
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
- [ ] Email / account / checkout / newsletter submit — **yapılmayacak**
