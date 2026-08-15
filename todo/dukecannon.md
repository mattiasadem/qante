# Todo — Duke Cannon (dukecannon.com)

*Kaynak:* https://dukecannon.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **[Rollback] Production | Accenture 8.12.2026** · `schema_name`: **Duke Cannon Shopify Theme** · `schema_version`: 1.23.1 · `theme_store_id`: null · role `main` · id `147550273651`  
*Shop:* `duke-cannon.myshopify.com`

**Durum:** Mod A walk — observation roster yazıldı; resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/dukecannon/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/dukecannon/`, `evidence/dukecannon/`, `todo/dukecannon.md`, `candidates/dukecannon-*.md` |

**Kapsam satırı:**  
`Duke Cannon · default · [Rollback] Production | Accenture 8.12.2026 (Duke Cannon Shopify Theme 1.23.1) · home→PDP→PLP→search→drawer→content→footer→mobile · 43 obs · 0 yeni şema`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | roster | [ ] |
| Mega SHOP ALL 1440 | interact | [ ] |
| Predictive search overlay | interact | [ ] |
| Cart drawer boş + dolu | interact | [ ] |
| Mobile menu 375+768 | interact | [ ] |
| PDP `/products/basic-ass-pumpkin-spice-latte-brick-of-soap` | roster + variant | [ ] |
| PLP `/collections/shop-all` | roster | [ ] |
| Search `/search?q=soap` | roster | [ ] |
| Cart `/cart` → `/?viewcart=true` | ⛔ leftover | — |
| About `/pages/about-us` | roster | [ ] |
| Veterans `/pages/duke-cannon-supports-veterans` | roster | [ ] |
| Heroes `/pages/heroes-discount` | roster | [ ] |
| Rewards FAQ (Yotpo hero leftover) | roster | [ ] |
| Privacy + shipping pages | roster | [ ] |
| Journal + fall-colors article | roster | [ ] |
| Promotions + press | roster | [ ] |
| 404 / contact / FAQ / locator / reviews / native policies | ⛔ leftover | — |

---

## Bileşen roster (43)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home + mega | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | editorial-rich-text | home | [ ] | [x] | reuse | [ ] |
| 5 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 6–8 | editorial-image-with-text ×3 | home | [ ] | [x] | reuse | [ ] |
| 9 | testimonial-quote-carousel | home shoppable reviews | [ ] | [x] | reuse | [ ] |
| 10 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 11 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 12 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 13 | global-menu-drawer | home 375/768 | [ ] | [x] | reuse | [ ] |
| 14 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 15 | commerce-tools-products-bundle | product-detail FBT | [ ] | [x] | reuse | [ ] |
| 16 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 17–18 | PLP banner + grid | collection | [ ] | [x] | reuse | [ ] |
| 19 | search-results | search | [ ] | [x] | reuse | [ ] |
| 20–22 | about overlay/main/giving-back | about-brand | [ ] | [x] | reuse | [ ] |
| 23–28 | veterans promo/main/partners | veterans | [ ] | [x] | reuse | [ ] |
| 29–32 | heroes overlay/copy/steps | heroes | [ ] | [x] | reuse | [ ] |
| 33 | faq-collapsible-tabs | rewards | [ ] | [x] | reuse | [ ] |
| 34–35 | privacy + shipping | policy/shipping | [ ] | [x] | reuse | [ ] |
| 36–39 | journal + article | blog-list/blog-post | [ ] | [x] | reuse | [ ] |
| 40–43 | promotions + press | promotions/press | [ ] | [x] | reuse | [ ] |

---

## Aday / şemaya sığmayan

- `candidates/dukecannon-leftovers.md`

---

## Evidence backlog

- [ ] Home static 3vp
- [ ] Header mega / search / cart / mobile interact
- [ ] PDP / PLP / search 3vp
- [ ] Content templates 3vp
- [ ] Validator clean
