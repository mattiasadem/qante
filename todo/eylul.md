# Todo — Eylül (ikas Theme Store)

*Kaynak:* https://dev-eylul.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/ef88b30d-7c1c-4474-b03f-dff5ef4c6453  
*Preset:* `default`  
*Tema (görülen, uydurulmadı):* **Eylül** · developer **ikascom** · Theme Store UUID **`ef88b30d-7c1c-4474-b03f-dff5ef4c6453`** · logoText **eylül**  
*Platform:* **ikas** · `Shopify.theme` **yok** · `x-powered-by: ikas` · `__IKAS_DATA__`  
*Storefront (ikas, uydurulmadı):* `storefrontThemeId` `a1b55030-52e1-46ac-9b2c-ec238b9b442d` · `storefrontId` `29fd0757-66fa-4007-bd68-7ad43c43c58f` · `merchantId` `fd24ec01-cb21-4b82-9ad0-d238e7619d37` · `storeName` `dev-eylul` · `salesChannelId` `f53bfbe3-2200-4f62-bff8-0f70626b4177` · `storefrontRoutingId` `052bf91a-54a5-4786-983e-33b24ebe9b54` · domain `dev-eylul.ikas.shop` · `x-cache-tag` `8assj-dev-eylul.myikas.com` · TRY · locale `tr`

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/eylul/default/` |
| Observation | **27** |
| Yeni şema | **0** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Parallel | yalnız `observations/eylul/`, `evidence/eylul/`, `todo/eylul.md`, `candidates/eylul-leftovers.md` |

**Kapsam satırı:**  
`Eylül · default · ikas Theme Store UUID ef88b30d-7c1c-4474-b03f-dff5ef4c6453 · home→PDP Carbonator 3 Copper→Matte Black→PLP /mutfak→search?s=carbonator→cart empty/filled/qty→hakkimizda→iletisim→FAQ home-only→blog empty→404 · 27 obs · 0 yeni şema · leftover: tek slayt / FAQ sayfa 404 / blog boş / reviews / ?q= / media-only / gizlilik 404`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announce/hero/pslider/ipair×3/txtb×2/mtrio/faq/footer | [x] | [x] |
| Header kapalı + Mağaza mega hover 1440 | [x] | [x] |
| Predictive search `carbonator` | [x] | [x] 375/768/1440 |
| Mobile hamburger 375+768 + Mağaza toggle | [x] | [x] (1440 panel yok) |
| PDP Carbonator 3 Renk Copper→Matte Black | [x] | [x] |
| PLP `/mutfak` 13 ürün | [x] | [x] |
| Search `/search?s=carbonator` | [x] | [x] 3 sonuç |
| Cart `/cart` empty + filled + qty | [x] | [x] |
| Cart drawer empty + filled + qty | [x] | [x] |
| About `/pages/hakkimizda` | [x] | [x] |
| Contact `/pages/iletisim` | [x] | [x] PII yok |
| FAQ | home `section.faq` | [x] · `/pages/sss` 404 leftover |
| Blog `/blog` | [x] | boş liste |
| 404 | [x] | [x] |
| İade `/pages/iade-politikasi` | [x] | [x] |

---

## Bileşen roster

27 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse (hmi mega) | [x] |
| 3 | hero-slideshow | home | [x] | [x] | tek slayt | [x] |
| 4 | product-showcase-grid-featured | home | [x] | [x] | pslider | [x] |
| 5–7 | promo-grid-banner ×3 | home | [x] | [x] | ipair | [x] |
| 8–9 | editorial-rich-text ×2 | home | [x] | [x] | txtb | [x] |
| 10 | features-slider-multicolumn | home | [x] | [x] | mtrio | [x] |
| 11 | faq-collapsible-tabs | home | [x] | [x] | FAQ home | [x] |
| 12 | footer-columns-newsletter | home | [x] | [x] | e-posta yok | [x] |
| 13 | global-predictive-search | home | [x] | [x] | carbonator | [x] |
| 14 | global-menu-drawer | home | [x] | [x] | 375/768 | [x] |
| 15 | global-cart-drawer | home | [x] | [x] | `.cdr` | [x] |
| 16 | product-info-main | product-detail | [x] | [x] | Renk | [x] |
| 17 | product-showcase-related | product-detail | [x] | [x] | ptabs | [x] |
| 18 | product-showcase-grid-plp | collection | [x] | [x] | /mutfak | [x] |
| 19 | search-results | search | [x] | [x] | `?s=` | [x] |
| 20 | cart-page-main | cart | [x] | [x] | empty/filled/qty | [x] |
| 21–23 | IWT×2 + rich-text | about-brand | [x] | [x] | hakkimizda | [x] |
| 24 | lead-capture-form | contact | [x] | [x] | PII yok | [x] |
| 25 | blog-list-main | blog-list | [x] | [x] | boş | [x] |
| 26 | page-content-main | not-found | [x] | [x] | 404 | [x] |
| 27 | page-content-main | policy | [x] | [x] | iade | [x] |

---

## Interact (pixel-checked)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | 1440 Mağaza **hover** (tık `/mutfak`) — 3 kolon + kart |
| global-predictive-search | input | `carbonator` → Çelik Şişe + Pro + Carbonator 3 + Tümünü gör |
| global-menu-drawer | open/changed | 375/768 hamburger; Mağaza boş toggle |
| global-cart-drawer | initial/filled/changed | boş + Carbonator 3 Copper + adet |
| cart-page-main | initial/filled/changed | boş → qty1 ₺10,500 → qty2 |
| product-info-main | changed | Renk Copper → Matte Black |

---

## Aday / leftover

[`candidates/eylul-leftovers.md`](../candidates/eylul-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / menu / PDP Renk
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
