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

**Durum:** Mod A roster yazıldı · 3vp + interact **sırada** · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/shrilahome/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` + `unlock-storefront.mjs` (`storefrontPassword: "1"`) |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **38** |
| Parallel | yalnız `observations/shrilahome/`, `evidence/shrilahome/`, `todo/shrilahome.md`, `candidates/shrilahome-leftovers.md`, kaynak/endüstri map, unlock helper |

**Kapsam satırı (hedef):**  
`Shrilahome · default · Shrilahome-Furniture-v-1-5-0 / schema_name shrilahome 1.5.0 · theme_store_id null · shop pandora-furniture-5.myshopify.com · password 1 · home→PDP circle-lounge-chairs→PLP armchairs→/collections→search sofa→cart→about/contact/faqs→404 · 38 obs · 0 yeni şema · leftover: candidates/shrilahome-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster | [ ] capture |
| Header kapalı + 1440 menu | roster | [ ] interact |
| Predictive search `sofa` | roster | [ ] interact |
| Mobile hamburger 375+768 | roster | [ ] interact |
| Cart drawer / notification filled | roster | [ ] interact |
| PDP Circle Lounge Brown→Gray | roster | [ ] interact |
| PLP `/collections/armchairs` | roster | [ ] capture |
| Collections index `/collections` | roster | [ ] capture |
| Search `/search?q=sofa` | roster | [ ] capture |
| Cart `/cart` empty + filled + qty | roster | [ ] interact |
| About `/pages/about-us` | roster | [ ] capture |
| Contact form (submit yok) | roster | [ ] interact initial |
| FAQ accordion | roster | [ ] interact |
| 404 | roster | [ ] capture |
| Blog `/blogs/news` | leftover — home'a düşer | — |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Shrilahome / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · sticky h=0 wrapper |
| 3 | slideshow 3b7cb796 | `hero-slideshow` | reuse · 3 slayt |
| 4 | categories_slider_1 | `collection-nav-slider` | reuse · daire ikon |
| 5 | rich_text_wDFqxx | `editorial-rich-text` | reuse |
| 6 | image-banner 8b5479f1 | `editorial-image-with-text-overlay` | reuse · metinsiz |
| 7 | categories_slider_2 | `collection-nav-slider.2` | reuse · foto+CTA |
| 8 | multirow 7722eea3 | `editorial-image-with-text` | reuse · 2 satır |
| 9 | custom_collection_list_3FaNcq | `collection-nav-image-cards` | reuse |
| 10 | image_with_text_rQFUNp | `editorial-image-with-text.2` | reuse |
| 11 | custom_collection_list_yy7wYU | `collection-nav-image-cards.2` | reuse |
| 12 | image_with_text_EVYkJc | `editorial-image-with-text.3` | reuse |
| 13 | custom_announcement_bar_jQffkk | `promo-scrolling-marquee` | reuse · mid-page |
| 14 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 15 | #menu-drawer | `global-menu-drawer` | reuse · 375/768 |
| 16 | details-modal.header__search | `global-predictive-search` | reuse |
| 17 | #CartDrawer | `global-cart-drawer` | reuse |
| 18 | newsletter-popup | — | leftover + fake purchase toast |

---

## Aday / leftover

[`candidates/shrilahome-leftovers.md`](../candidates/shrilahome-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / menu / PDP Color / FAQ / hero next
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
- [ ] Newsletter / account / checkout — **yapılmayacak** (PII)
