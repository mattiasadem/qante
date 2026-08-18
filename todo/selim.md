# Todo — Selim (ikas Theme Store) · ikascom · default

*Kaynak (yalnız resmi walk):* https://dev-selimtheme.ikas.shop  
*Theme Store:* https://themes.ikas.com/themes/cd45021d-2f96-4fc4-afe2-229ea0fd7b49  
*Tema adı:* **Selim** · *Developer:* **ikascom** · *Slug:* `selim` · *Preset:* `default`  
*Platform:* **ikas** — `Shopify.theme` **yok** (uydurulmadı)

**Storefront fingerprint (okundu, uydurulmadı):**  
`window.__IKAS_DATA__` · `window.IkasEvents` (`subscribe` / `unsubscribe`)  
`pageType` home=`INDEX` · PDP=`PRODUCT` · PLP=`CATEGORY` · search=`SEARCH` · cart=`CART` · pages=`CUSTOM` · 404=`NOT_FOUND`  
`storefrontId` = **59b21621-cd0c-4bae-94f2-d0ddf3154adc**  
`storefrontThemeId` = **b16764ac-ef37-4683-b598-61c72fb5b2f6**  
`storefrontRoutingId` = **4b99701f-6745-4417-a8cf-d903245060d9**  
`storefrontType` = **STOREFRONT**  
`salesChannelId` = **da5ff479-e38f-4fb4-9dd2-ba7e6e6b7930**  
`merchantId` = **d2e5754b-2da4-4526-80e6-ce75fc6be32f**  
`merchantName` / `storeName` = **dev-selimtheme**  
`domain` = **dev-selimtheme.ikas.shop**  
`locale` = **tr** · `currencyCode` = **TRY** · `currencySymbol` = **₺** · `region` = **TR**  
`html lang` = **tr**  
Theme Store UUID (katalog, vitrin JS’te yok): **cd45021d-2f96-4fc4-afe2-229ea0fd7b49**  
Script: `/sf/p/{storefrontId}/{storefrontThemeId}/p0gbk-y4yfc/`

**Durum:** Mod A walk yazıldı — 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/selim/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **22** |
| Parallel | yalnız `observations/selim/`, `evidence/selim/`, `todo/selim.md`, `candidates/selim-leftovers.md` |

**Kapsam satırı:**  
`Selim · default · ikas · Shopify.theme yok · storefrontThemeId b16764ac-ef37-4683-b598-61c72fb5b2f6 · Theme Store UUID cd45021d-2f96-4fc4-afe2-229ea0fd7b49 · host dev-selimtheme.ikas.shop · home→PDP Medium Shoulder Bag Black→Beige→PLP /shoulder-bags→search bag→cart empty/filled/qty→/pages/iletisim→/pages/sss→blog 404 leftover→404 · 22 obs · 0 yeni şema · leftover: candidates/selim-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announce→footer) | [x] obs | [ ] capture |
| ÇANTA mega hover 1440 | [x] obs | [ ] interact |
| Predictive search `bag` | [x] obs | [ ] interact 3vp |
| Mobile menu 375 + 768 | [x] obs | [ ] interact |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| PDP Medium Shoulder Bag Color Black→Beige | [x] obs | [ ] interact |
| PLP `/shoulder-bags` | [x] obs | [ ] capture |
| Search `/search?q=bag` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [ ] interact |
| Contact `/pages/iletisim` (submit yok) | [x] obs | [ ] capture |
| FAQ `/pages/sss` | [x] obs | [ ] capture |
| About `/about` `/pages/hakkimizda` | ⛔ 404 leftover | — |
| Blog `/blog` | ⛔ 404 leftover | — |
| 404 `/this-page-does-not-exist-qante` | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Selim / class | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `.ethm-announce--marquee` | `promo-announcement-bar` | reuse · kayan |
| 2 | `section.ethm-header` + `.ethm-nav` | `navigation-header-mega` | reuse · interact |
| 3 | `section.ethm-hero` | `hero-slideshow` | reuse · tek kare |
| 4 | `section.fab` Özel Kumaşlar | `product-showcase-tabs` | reuse |
| 5 | `section.slook--img-left` | `media-lookbook-banner` | reuse |
| 6 | `section.slook--img-right` | `media-lookbook-banner.2` | reuse |
| 7 | `section.pl` Çok Satanlar | `product-showcase-grid-featured` | reuse |
| 8 | `section.stl` Look'u Keşfet | `media-shop-the-feed` | reuse |
| 9 | `section.cgrid` | `collection-nav-image-cards` | reuse |
| 10 | `.ethm-trust` | `trust-icon-row` | reuse |
| 11 | `footer.ftr` | `footer-columns-newsletter` | reuse · submit yok |
| 12 | `.ethm-nav__menu` | `global-menu-drawer` | reuse · 375/768 |
| 13 | `.ethm-search` | `global-predictive-search` | reuse · interact |
| 14 | `.ethm-cart` | `global-cart-drawer` | reuse · interact |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 ÇANTA hover |
| global-predictive-search | input | [ ] `bag` 3vp |
| global-menu-drawer | open | [ ] 375/768 |
| global-cart-drawer | filled + changed | [ ] empty → ATC → qty |
| cart-page-main | filled + changed | [ ] empty → ATC → qty |
| product-info-main | changed | [ ] Black → Beige |

Stop: email / account / checkout / newsletter submit / contact GÖNDER / PII

---

## Aday / leftover

[`candidates/selim-leftovers.md`](../candidates/selim-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
