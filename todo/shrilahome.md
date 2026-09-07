# Todo — Shrilahome (Speedo Themes · third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://pandora-furniture-5.myshopify.com/  
*Vendor product:* https://speedothemes.com/products/shrilahome-best-shopify-furniture-themes-os-2-0  
*Catalog:* https://speedothemes.com/collections/shopify-themes  
*Preset:* `default` · *Slug:* `shrilahome`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Shrilahome-Furniture-v-1-5-0**  
`schema_name` = **shrilahome** · `schema_version` = **1.5.0** · `role` = **main** · theme id `169736438070`  
`theme_store_id` = **null** (Theme Store official değil — Speedo third-party OS 2.0)  
shop `pandora-furniture-5.myshopify.com`

**Password:** `/` **302** → `/password`. Vendor product page: *Please enter password "1" to view demo.* Hidden input `value="1"` posts to **this same host**. Public storefront-unlock. Başka host yok.

**Durum:** Mod A + interact kapandı · **38 obs · 166 PNG · 0 yeni şema** · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/shrilahome/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` + `unlock-storefront.mjs` (`storefrontPassword: "1"`) |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **38** |
| Evidence | **166 PNG** |
| Parallel | yalnız `observations/shrilahome/`, `evidence/shrilahome/`, `todo/shrilahome.md`, `candidates/shrilahome-leftovers.md`, kaynak/endüstri map, unlock helper |

**Kapsam satırı:**  
`Shrilahome · default · Shrilahome-Furniture-v-1-5-0 / schema_name shrilahome 1.5.0 · theme_store_id null · shop pandora-furniture-5.myshopify.com · password 1 · home→PDP circle-lounge-chairs→PLP armchairs→/collections→search sofa→cart→about/contact/faqs→404 · 38 obs · 166 PNG · 0 yeni şema · leftover: candidates/shrilahome-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | done | [x] 3vp |
| Header kapalı + 1440 menu | initial kanıtlı; open kare homepage | [x] interact · open missing |
| Predictive search `sofa` | overlay input missing; `/search?q=sofa` var | [x] interact · input missing |
| Mobile hamburger 375+768 | DOM açılıyor; PNG drawer göstermedi | [x] interact · open/changed missing |
| Cart drawer filled | Circle Lounge + YOU MAY LIKE | [x] |
| PDP Circle Lounge Brown→Gray | Color etiketi + galeri 1440 | [x] |
| PLP `/collections/armchairs` | banner + grid | [x] |
| Collections index `/collections` | 15 kart | [x] |
| Search `/search?q=sofa` | grid | [x] |
| Cart `/cart` empty + filled + qty | $120 → $240 | [x] |
| About `/pages/about-us` | 5 obs | [x] |
| Contact form (submit yok) | initial | [x] |
| FAQ accordion | açık→kapalı | [x] |
| 404 | Page not found | [x] |
| Hero dots slayt 3 | Christmas → Cushion | [x] |
| PDP tabs Description→Additional | kırmızı sekme + metin | [x] |
| Blog `/blogs/news` | leftover — home'a düşer | — |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Shrilahome / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · sticky h=0 wrapper · always hamburger |
| 3 | slideshow 3b7cb796 | `hero-slideshow` | reuse · 3 slayt · ok gizli |
| 4 | categories_slider_1 | `collection-nav-slider` | reuse · daire ikon |
| 5 | rich_text_wDFqxx | `editorial-rich-text` | reuse |
| 6 | image-banner 8b5479f1 | `editorial-image-with-text-overlay` | reuse · metinsiz |
| 7 | categories_slider_2 | `collection-nav-slider.2` | reuse · foto+SHOP NOW |
| 8 | multirow 7722eea3 | `editorial-image-with-text` | reuse · 2 satır |
| 9 | custom_collection_list_3FaNcq | `collection-nav-image-cards` | reuse |
| 10 | image_with_text_rQFUNp | `editorial-image-with-text.2` | reuse |
| 11 | custom_collection_list_yy7wYU | `collection-nav-image-cards.2` | reuse |
| 12 | image_with_text_EVYkJc | `editorial-image-with-text.3` | reuse |
| 13 | custom_announcement_bar_jQffkk | `promo-scrolling-marquee` | reuse · mid-page |
| 14 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 15 | #menu-drawer | `global-menu-drawer` | reuse · open PNG yok |
| 16 | details-modal.header__search | `global-predictive-search` | reuse · overlay input yok |
| 17 | #CartDrawer | `global-cart-drawer` | reuse · filled |
| 18 | newsletter-popup | — | leftover + fake purchase toast |

---

## Aday / leftover

[`candidates/shrilahome-leftovers.md`](../candidates/shrilahome-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact cart / PDP Color / FAQ / hero dots / tabs / contact initial / footer
- [x] PNG bak → stateFindings (+ missingStates: header open, menu open/changed, search input)
- [x] `node scripts/validate-schemas.mjs` — 0 error · 13 warn (önceden; şema yazılmadı)
- [x] Newsletter / account / checkout — **yapılmadı** (PII)
