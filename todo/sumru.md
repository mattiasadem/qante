# Todo — Sumru (ikas Theme Store)

*Kaynak (resmi walk URL):* https://dev-sumru.myikas.com/  
*Canlı (HTTP 301 sonrası, üçüncü host yok):* https://dev-sumru.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/cfeb78d2-89b1-4c09-9496-04089a07ec18  
*Preset klasör:* `default`  
*Slug:* `sumru`  
*Geliştirici (listing):* ikascom

**Tema (vitrinde okundu, uydurulmadı):**  
`window.Shopify` **yok**  
`window.__IKAS_DATA__` var · `pageType` INDEX/CATEGORY/BRAND/PRODUCT/SEARCH/CART/CUSTOM/LOGIN/NOT_FOUND  
`storefrontThemeId` = `d96fc0bb-bfdd-4813-b9b3-2f3f5b6d5909`  
`storefrontId` = `76990161-78d3-414c-8ff8-125eedb8073d`  
`storefrontType` = `STOREFRONT`  
`domain` (config) = `dev-sumru.ikas.shop` · listed host `dev-sumru.myikas.com` → 301  
`merchantId` = `24aaa627-acd3-48e8-9da0-0530a3e43ace`  
`merchantName` / `storeName` = `dev-sumru` · locale `tr` · `TRY` ₺  
`salesChannelId` = `7a969667-380a-42c8-99cb-c04d380a738a`  
`storefrontRoutingId` = `8cee84d1-4020-49db-b404-2ea0b60a6b44`  
`apiUrl` = `https://api.myikas.com/api/sf/graphql`  
`window.IkasEvents` = `{subscribe, unsubscribe}`  
`theme_store_id` = **cfeb78d2-89b1-4c09-9496-04089a07ec18** (Theme Store UUID; storefront JSON’da Shopify id yok)

**Durum:** Mod A walk + resmi 3vp + interact + validate  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/sumru/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **16** |
| PNG | (capture sonrası) |
| Validator | (validate sonrası) |
| Parallel | yalnız `observations/sumru/`, `evidence/sumru/`, `todo/sumru.md`, `candidates/sumru-leftovers.md` |

**Kapsam satırı:**  
`Sumru · default · ikas Studio · listed dev-sumru.myikas.com 301→dev-sumru.ikas.shop · theme_store_id cfeb78d2-89b1-4c09-9496-04089a07ec18 · home→PDP Kiryu Kase galeri1→2→PLP /kiryu 7→search kiryu→cart empty/filled/qty ₺405/İlk Sipariş -₺20.25→iletisim→FAQ/blog/about yok→404 · 16 obs · 0 yeni şema · leftover: candidates/sumru-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + capture | [x] |
| Desktop nav mega (Özel Koleksiyonlar) | interact | [x] |
| Predictive search `kiryu` | interact 3vp | [x] |
| Mobile menu 375 | interact | [x] |
| Mobile menu 768 | interact | [x] |
| Cart drawer empty + filled + qty | interact 3vp | [x] |
| PDP Kiryu Kase galeri 1→2 | interact 3vp | [x] |
| PLP `/kiryu` | roster + capture | [x] |
| Search `/search?q=kiryu` | roster + capture | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| Contact `/pages/iletisim` | roster + capture | [x] PII yok |
| About | ⛔ Markamız → `/sumru` BRAND PLP | leftover |
| FAQ dedicated | ⛔ `/faq` `/sss` `/pages/faq` 404 | leftover |
| Blog `/blog` | leftover 404 | leftover |
| 404 | roster + capture (`.cp-ps` Sayfa Bulunamadı) | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM + `__IKAS_DATA__.propValues`)

| # | Sumru type | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement `.cp-announcements` | `promo-announcement-bar` | reuse |
| 2 | header / navbar `.cp-navbar` | `navigation-header-mega` | reuse · mega var · interact |
| 3 | hero `.cp-hero` | `hero-slideshow` | reuse |
| 4 | marquee `.cp-marquee` | `promo-scrolling-marquee` | reuse |
| 5 | tip `.cp-tip` Yedi ürün, tek koleksiyon | — | leftover |
| 6 | product showcase `.cp-ps` | `product-showcase-grid-featured` | reuse |
| 7 | footer `.cp-footer` | `footer-columns-newsletter` | reuse · submit yok |
| 8 | cart drawer `.cp-cart-drawer` | `global-cart-drawer` | reuse · interact |
| 9 | search modal `.cp-search-modal` | `global-predictive-search` | reuse · interact |
| 10 | mobile menu `.cp-navbar__mobile-panel` | `global-menu-drawer` | reuse · 375/768 |
| 11 | cookie `.cp-cookie-bar` | — | leftover |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial + open | 1440 Özel Koleksiyonlar hover — 3 kolon Antigo/Coco/Sandy Loam |
| global-predictive-search | input | `kiryu` → Kiryu kase/tabak listesi + Tümünü gör |
| global-menu-drawer | open/changed | 375/768 hamburger; Özel Koleksiyonlar → Antigo/Coco/Sandy Loam. Login tıklanmadı |
| global-cart-drawer | empty/filled/qty | boş → ATC toast → bag · qty1 ₺405 / ₺384.75 → Arttır |
| cart-page-main | empty/filled/qty | Sofranız henüz kurulmamış → kuruluyor · aynı fiyat |
| product-info-main | changed | Galeri 1→2; renk/beden swatch yok |

---

## Aday / leftover

[`candidates/sumru-leftovers.md`](../candidates/sumru-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact header / search / cart / menu / PDP galeri
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
