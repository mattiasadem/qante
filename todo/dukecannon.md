# Todo — Duke Cannon (dukecannon.com)

*Kaynak:* https://dukecannon.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **[Rollback] Production | Accenture 8.12.2026** · `schema_name`: **Duke Cannon Shopify Theme** · `schema_version`: 1.23.1 · `theme_store_id`: null · role `main` · id `147550273651`  
*Shop:* `duke-cannon.myshopify.com`

**Durum:** Mod A walk kapandı — 43 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/75 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/dukecannon/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/dukecannon/`, `evidence/dukecannon/`, `todo/dukecannon.md`, `candidates/dukecannon-*.md` |

**Kapsam satırı:**  
`Duke Cannon · default · [Rollback] Production | Accenture 8.12.2026 (Duke Cannon Shopify Theme 1.23.1) · home→PDP→PLP→search→Rebuy cart→content→footer→mobile · 43 obs · 0 yeni şema · leftover: 404 / Yotpo / locator / native policies / GovX / Rebuy bleed`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ |
| Mega SHOP ALL 1440 | ✅ interact | ✅ (375/768 N/A) |
| Predictive search overlay | ✅ open + soap | ✅ |
| Cart drawer boş + dolu (Rebuy) | ✅ interact | ✅ |
| Mobile menu 375+768 | ✅ interact | ✅ (1440 N/A) |
| PDP PSL brick + 4-pack | ✅ + changed | ✅ |
| PLP `/collections/shop-all` | ✅ | ✅ (Rebuy bleed) |
| Search `/search?q=soap` | ✅ | ✅ (Rebuy bleed) |
| Cart `/cart` → `/?viewcart=true` | ⛔ leftover | — |
| About `/pages/about-us` | ✅ | ✅ |
| Veterans | ✅ | ✅ |
| Heroes | ✅ | ✅ |
| Rewards FAQ (Yotpo hero leftover) | ✅ | ✅ |
| Privacy + shipping pages | ✅ | ✅ |
| Journal + fall-colors article | ✅ | ✅ |
| Promotions + press | ✅ | ✅ |
| 404 / contact / FAQ / locator / reviews / native policies | ⛔ leftover | — |

---

## Bileşen roster (43)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home + mega | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | editorial-rich-text | home | [x] | [x] | reuse | [x] |
| 5 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 6–8 | editorial-image-with-text ×3 | home | [x] | [x] | reuse | [x] |
| 9 | testimonial-quote-carousel | home shoppable reviews | [x] | [x] | reuse | [x] |
| 10 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 11 | global-cart-drawer | home Rebuy | [x] | [x] | reuse | [x] |
| 12 | global-predictive-search | home | [x] | [x] | reuse | [x] |
| 13 | global-menu-drawer | home 375/768 | [x] | [x] | reuse | [x] |
| 14 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 15 | commerce-tools-products-bundle | product-detail FBT | [x] | [x] | reuse | [x] |
| 16 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 17–18 | PLP banner + grid | collection | [x] | [x] | reuse | [x] |
| 19 | search-results | search | [x] | [x] | reuse | [x] |
| 20–22 | about overlay/main/giving-back | about-brand | [x] | [x] | reuse | [x] |
| 23–28 | veterans promo/main/partners | veterans | [x] | [x] | reuse | [x] |
| 29–32 | heroes overlay/copy/steps | heroes | [x] | [x] | reuse | [x] |
| 33 | faq-collapsible-tabs | rewards | [x] | [x] | reuse | [x] |
| 34–35 | privacy + shipping | policy/shipping | [x] | [x] | reuse | [x] |
| 36–39 | journal + article | blog-list/blog-post | [x] | [x] | reuse | [x] |
| 40–43 | promotions + press | promotions/press | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişince — bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 | SHOP ALL 5×2 görselli mega (Jeep/Thermos dahil) |
| global-predictive-search | open + input soap | default Best Damn beard → soap bricks + soap collections |
| global-cart-drawer | empty / filled | Rebuy; PSL $9; $41 to free ship; CHECKOUT tıklanmadı |
| global-menu-drawer | open 375/768 | Shop All/New/Rewards/About + social. 1440 N/A |
| product-info-main | changed 4-pack | $31 / SAVE $5 / 4 kutu görsel |

---

## Aday / şemaya sığmayan

- `candidates/dukecannon-leftovers.md`

---

## Evidence backlog

- [x] Home static 3vp
- [x] Header mega / search / cart boş+dolu / mobile menu
- [x] PDP / PLP / search 3vp
- [x] Content templates 3vp
- [x] Validator clean
