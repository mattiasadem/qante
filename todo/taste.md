# Todo — Taste (Shopify first-party · free)

*Kaynak:* https://theme-taste-demo.myshopify.com  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/taste  
*Tema (storefront, uydurulmadı):* **Taste** · `schema_name`: **Dawn** · `schema_version`: **3.0.0** · `theme_store_id`: **null** · role `main` · id `168341897238`  
*Shop:* `theme-taste-demo.myshopify.com`

**Durum:** Mod A walk — observations yazıldı; resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/taste/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/taste/`, `evidence/taste/`, `todo/taste.md`, `candidates/taste-*.md` |

**Kapsam satırı:**  
`Taste · default · Taste / schema_name Dawn 3.0.0 (theme_store_id null) · home→PDP→PLP→search→cart→about→contact→recipes→404 · 31 obs · 0 yeni şema`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement / IWT / grids / slideshow / footer | [x] obs | [ ] capture |
| Header kapalı + Drinks details 1440 | [x] obs | [ ] interact |
| Search modal + predictive `ginger` | [x] obs | [ ] interact |
| Cart notification filled (drawer yok) | [x] obs | [ ] interact |
| Mobile hamburger 375+768 | [x] obs | [ ] interact |
| PDP Fiery Ginger Booster + Size Six Pack | [x] obs | [ ] interact |
| PLP `/collections/all-drinks` | [x] obs | [ ] capture |
| Search `/search?q=ginger` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/about-us` | [x] obs | [ ] capture |
| Contact form (submit yok) | [x] obs | [ ] capture |
| Recipes list + Grapefruit Kombucha Float | [x] obs | [ ] capture |
| 404 leftover | [x] obs | [ ] capture |

---

## Home roster (DOM)

Taste/Dawn section → QANTE şema. Aynı tip varsa **şemaya dokunma**.

| # | Dawn / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · details dropdown, görselli mega yok |
| 3 | image-with-text Take a sip | `editorial-image-with-text` | reuse |
| 4 | featured_collection bestsellers | `product-showcase-grid-featured` | reuse |
| 5 | slideshow-component mid-page | `hero-slideshow` | reuse · delta mid-page |
| 6 | collection-list 3 kart | `collection-nav-image-cards` | reuse |
| 7 | image-with-text Jane S. | `editorial-image-with-text.2` | reuse · alıntı başlık |
| 8 | featured-product Fiery Ginger | `product-showcase-featured` | reuse |
| 9 | multicolumn Keeping it green | `features-multicolumn` | reuse |
| 10 | featured-collection bundles | `product-showcase-grid-featured.2` | reuse |
| 11 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 12 | header-drawer | `global-menu-drawer` | reuse |
| 13 | details-modal search | `global-predictive-search` | reuse |
| 14 | cart-notification | `global-cart-drawer` | reuse · delta: popup, drawer değil |

---

## Bileşen checklist

| # | Bileşen / id | scope | Screenshot | JSON | Done |
|---|---|---|---|---|---|
| 1 | promo-announcement-bar | global | [ ] | reuse | [ ] |
| 2 | navigation-header-mega | global | [ ] | reuse | [ ] |
| 3 | editorial-image-with-text | instance | [ ] | reuse | [ ] |
| 4 | product-showcase-grid-featured | instance | [ ] | reuse | [ ] |
| 5 | hero-slideshow | instance | [ ] | reuse | [ ] |
| 6 | collection-nav-image-cards | instance | [ ] | reuse | [ ] |
| 7 | editorial-image-with-text.2 | instance | [ ] | reuse | [ ] |
| 8 | product-showcase-featured | instance | [ ] | reuse | [ ] |
| 9 | features-multicolumn | instance | [ ] | reuse | [ ] |
| 10 | product-showcase-grid-featured.2 | instance | [ ] | reuse | [ ] |
| 11 | footer-columns-newsletter | global | [ ] | reuse | [ ] |
| 12 | global-menu-drawer | global | [ ] | reuse | [ ] |
| 13 | global-predictive-search | global | [ ] | reuse | [ ] |
| 14 | global-cart-drawer | global | [ ] | reuse | [ ] |
| 15 | collection-banner | instance | [ ] | reuse | [ ] |
| 16 | product-showcase-grid-plp | instance | [ ] | reuse | [ ] |
| 17 | product-info-main | instance | [ ] | reuse | [ ] |
| 18 | faq-collapsible-tabs | instance | [ ] | reuse | [ ] |
| 19 | product-showcase-related | instance | [ ] | reuse | [ ] |
| 20 | search-results | instance | [ ] | reuse | [ ] |
| 21 | cart-page-main | instance | [ ] | reuse | [ ] |
| 22 | about hero-slideshow | instance | [ ] | reuse | [ ] |
| 23 | about features-multicolumn | instance | [ ] | reuse | [ ] |
| 24 | about hero-slideshow.2 | instance | [ ] | reuse | [ ] |
| 25 | about editorial-image-with-text | instance | [ ] | reuse | [ ] |
| 26 | contact page-content-main | instance | [ ] | reuse | [ ] |
| 27 | lead-capture-form | instance | [ ] | reuse | [ ] |
| 28 | blog-list-main | instance | [ ] | reuse | [ ] |
| 29 | blog-post-main | instance | [ ] | reuse | [ ] |
| 30 | blog-post product-showcase-featured | instance | [ ] | reuse | [ ] |
| 31 | not-found page-content-main | instance | [ ] | reuse | [ ] |

---

## Aday / leftover

[`candidates/taste-leftovers.md`](../candidates/taste-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
