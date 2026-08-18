# Todo — Asil (ikas Theme Store)

*Kaynak (resmi walk URL):* https://dev-asil.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/5ccb940d-3b48-487d-859b-f860a4a238e8  
*Preset klasör:* `default`  
*Slug:* `asil`  
*Geliştirici (listing):* ikascom  
*Theme Store title (okundu):* **Asil | ikas Theme Store**

**Tema (vitrinde okundu, uydurulmadı):**  
`window.Shopify` **undefined** · `Shopify.theme` **ABSENT**  
`window.__IKAS_DATA__` var · `pageType` INDEX / PRODUCT / CATEGORY / BRAND / SEARCH / CART / CUSTOM / NOT_FOUND  
`window.IkasEvents` = `{subscribe, unsubscribe}`  
`x-powered-by` = **ikas** · `x-cache-tag` = `dev-asil.ikas.shop`  
`storefrontThemeId` = `fe564801-776f-4ae0-80b8-c405d7b3c292`  
`storefrontId` = `d8a8191d-05a9-47f7-9077-005d49b2b8e3`  
`storefrontRoutingId` = `a690309d-b4a3-45d3-9d4c-323f93b0602b`  
`storefrontType` = `STOREFRONT`  
`salesChannelId` = `b8adf1cc-d298-4193-bd09-0f752127afad`  
`merchantId` = `fd8437de-0fa9-4e92-978c-4f690d3d974a`  
`storeName` / `merchantName` = `dev-asil`  
`domain` = `dev-asil.ikas.shop`  
`apiUrl` = `https://api.myikas.com/api/sf/graphql`  
`currencyCode` = `TRY` · `defaultLocale` = `tr` · `region` = `TR` · `html lang=tr`  
`og:site_name` = `https://dev-asil.ikas.shop`  
`theme_store_id` = **5ccb940d-3b48-487d-859b-f860a4a238e8** (Theme Store UUID; storefront’ta Shopify id yok)

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/asil/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **15** |
| Parallel | yalnız `observations/asil/`, `evidence/asil/`, `todo/asil.md`, `candidates/asil-leftovers.md` |

**Kapsam satırı:**  
`Asil · default · ikas Studio · theme_store_id 5ccb940d-3b48-487d-859b-f860a4a238e8 · home→PDP Medium Shoulder Bag Black→Beige→PLP /bags→search s=bag→cart empty/filled/qty→/pages/iletisim→FAQ home→blog 404→404 · about yok · drawer yok · 15 obs · 0 yeni şema · leftover: candidates/asil-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (hdr→hero→grid→trust→FAQ→footer) | [x] obs | [ ] capture |
| Desktop menu overlay 1440 (hover mega yok) | interact | [ ] |
| Predictive search `bag` | interact 3vp | [ ] |
| Mobile menu 375 | interact | [ ] |
| Mobile menu 768 | interact | [ ] |
| Cart page empty + filled + qty | interact | [ ] |
| Cart drawer | ⛔ yok (`hdr__cart` → `/cart`) | leftover |
| PDP Medium Shoulder Bag Black→Beige | interact 3vp | [ ] |
| PLP `/bags` | roster | [ ] capture |
| Search `/search?s=bag` | roster | [ ] capture |
| About | ⛔ yok (`/pages/hakkimizda` 404) | leftover |
| Contact `/pages/iletisim` | roster | [ ] capture · PII yok |
| FAQ page | ⛔ `/pages/sss` 404 · home `section.faq` var | leftover + home obs |
| Blog `/blog` | ⛔ sitemap’te var, `NOT_FOUND` | leftover |
| 404 | roster | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM + `__IKAS_DATA__`)

| # | Asil type | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `section.hdr` | `navigation-header-mega` | reuse · hover mega **yok** · click overlay |
| 2 | `.menu` dialog | `global-menu-drawer` | reuse · 375/768 |
| 3 | `.srch` dialog | `global-predictive-search` | reuse · interact |
| 4 | `section.hero` | `editorial-dynamic-grid` | reuse · split NUVORA/TUNDRO + kategori |
| 5 | `section.pl` | `product-showcase-grid-featured` | reuse |
| 6 | `section.tb` | `trust-icon-row` | reuse |
| 7 | `section.faq` | `faq-collapsible-tabs` | reuse |
| 8 | `footer.ftr` | `footer-columns-newsletter` | reuse · submit yok |
| 9 | cart drawer | — | leftover — yok |
