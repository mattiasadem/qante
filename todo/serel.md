# Todo — Serel (ikas Theme Store)

*Kaynak (Theme Store “Go to Demo Store”):* https://dev-serel.myikas.com/  
*Canlı (HTTP yönlendirme, üçüncü host yok):* https://dev-serel.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/7e1f7850-46d1-4a83-9d6b-a12cdc033e8b  
*Preset klasör:* `default`  
*Slug:* `serel`  
*Geliştirici (listing):* ikascom

**Tema (vitrinde okundu, uydurulmadı):**  
`window.Shopify` **undefined** · `Shopify.theme` **ABSENT**  
`x-powered-by` **ikas** · `x-cache-tag` **dev-serel.ikas.shop**  
`window.__IKAS_DATA__` var · `pageType` INDEX / PRODUCT / CATEGORY / SEARCH / CUSTOM / BLOG_INDEX / NOT_FOUND / LOGIN  
`window.IkasEvents` = `{subscribe, unsubscribe}`  
`storefrontThemeId` = `e3b5fc65-ad07-402e-8380-2599504c38fb`  
`storefrontId` = `ef023962-e737-4119-9cb1-c1f489d080ce`  
`storefrontRoutingId` = `993f48b4-cddd-4c7b-8c8d-278192788e0e`  
`storefrontType` = `STOREFRONT`  
`salesChannelId` = `aad6374f-a5d3-46e8-a483-d1dad510da62`  
`domain` = `dev-serel.ikas.shop`  
`apiUrl` = `https://api.myikas.com/api/sf/graphql`  
`merchantSettings.merchantId` = `155a3907-5bfb-4070-b6ef-3b030caf4da3`  
`merchantName` / `storeName` = `dev-serel`  
locale `tr` · region `TR` · `TRY` ₺ · `html lang=tr`  
`logoText` yok  
`theme_store_id` = **7e1f7850-46d1-4a83-9d6b-a12cdc033e8b** (Theme Store UUID; storefront JSON’da Shopify id yok)

**Durum:** Mod A walk yazıldı · resmi 3vp + interact sırada  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/serel/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **18** |
| PNG | pending official 3vp + interact |
| Parallel | yalnız `observations/serel/`, `evidence/serel/`, `todo/serel.md`, `candidates/serel-leftovers.md` |

**Kapsam satırı:**  
`Serel · default · ikas Studio · theme_store_id 7e1f7850-46d1-4a83-9d6b-a12cdc033e8b · listed dev-serel.myikas.com → live dev-serel.ikas.shop · home→PDP Stoneware Tabağı (seçenek yok)→PLP /dekorasyon→search ?s=vazo→cart overlay empty/filled/qty→contact /pages/iletisim→FAQ /pages/sss→blog boş→404 · about yok · 18 obs · 0 yeni şema · leftover: candidates/serel-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announce→footer) | obs | pending capture |
| Desktop nav (Anasayfa dropdown, mega yok) | interact adımları | pending |
| Predictive search `vazo` | interact adımları | pending |
| Mobile menu 375 | interact adımları | pending |
| Mobile menu 768 | interact adımları | pending |
| Cart overlay empty + filled + qty | interact adımları | pending |
| PDP Stoneware Tabağı (seçenek yok) | interact initial | pending |
| PLP `/dekorasyon` | obs | pending |
| Search `/search?s=vazo` | obs | pending |
| Cart page `/cart` | ⛔ NOT_FOUND | leftover |
| About | ⛔ 404 | leftover |
| Contact `/pages/iletisim` | obs | pending |
| FAQ `/pages/sss` | obs | pending |
| Blog `/blog` (boş) | obs | pending |
| 404 | obs | pending |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM `id` + `__IKAS_DATA__.propValues`)

| # | Serel / class | QANTE schemaId | Karar |
|---|---|---|---|
| 0a | `style_GvtEmI0d1a` duyurular | `promo-announcement-bar` | reuse |
| 0b | `style_rkUXpuksdy` navbar | `navigation-header-mega` | reuse · mega yok · interact |
| 1 | `style_KdoOHg1J0i` hero | `hero-slideshow` | reuse · tek slayt leftover |
| 2 | `style_fuqAtc1pyc` Öne Çıkanlar | `collection-nav-image-cards` | reuse |
| 3 | `style_eEdfC6bBSg` Çok Satanlar | `product-showcase-grid-featured` | reuse |
| 4 | `style_A8VmSDklAj` 20 ürün | — | leftover (PLP-on-home) |
| 5 | `style_FTBdXKmCJQ` En Popüler | `collection-nav-image-cards.2` | reuse |
| 6 | `style_OaNPwmvULI` güven | `trust-icon-row` | reuse |
| 7 | `style_QsKHHfPRTg` footer | `footer-columns-newsletter` | reuse · newsletter yok |
| — | `style_po6dey2tLa` sepet | `global-cart-drawer` | reuse · interact |
| — | `style_Myt5yr9T3y` arama | `global-predictive-search` | reuse · interact |
| — | `style_SdV7qJlFUz` menü | `global-menu-drawer` | reuse · 375/768 |

---

## Interact (beklenen)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial + open | 1440 Anasayfa hover — 2 satır Anasayfa |
| global-predictive-search | initial + input | `vazo` |
| global-menu-drawer | open | 375/768 hamburger |
| global-cart-drawer | empty/filled/qty | ATC `div.style_Ne1PdIXGDb` · qty `style_sIXvEhPK2F` |
| product-info-main | initial | changed yok — swatch yok |

---

## Aday / leftover

[`candidates/serel-leftovers.md`](../candidates/serel-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / menu / PDP
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — expect 0 error
