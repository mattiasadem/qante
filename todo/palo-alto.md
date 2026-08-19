# Todo — Palo Alto (Shopify paid) · default

*Kaynak:* https://palo-alto-theme-main.myshopify.com/  
*Yasak URL:* `palo-alto-demo.myshopify.com` (password) — **kullanılmadı**  
*Preset:* `default` (Palo Alto main / clothing) · *Slug:* `palo-alto`  
*Theme Store:* https://themes.shopify.com/themes/palo-alto · Presidio

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **PA 9.2.0**  
`schema_name` = **Palo Alto** · `schema_version` = **9.2.0** · `role` = **main** · theme id `157413572796`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `palo-alto-theme-main.myshopify.com`

**Durum:** ✅ Mod A walk + resmi 3vp + interact (nav/cart/PDP + CRO) + validate  
**PR:** draft (CRO interact) · önceki walk PR #152 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/palo-alto/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **57** |
| Evidence PNG | **252** |
| Parallel | yalnız `observations/palo-alto/`, `evidence/palo-alto/`, `todo/palo-alto.md`, `candidates/palo-alto-leftovers.md` |

**Kapsam satırı:**  
`Palo Alto · default · PA 9.2.0 / schema_name Palo Alto 9.2.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 57 obs · 0 yeni şema · leftover: candidates/palo-alto-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion blocks | [x] | [x] |
| Mega Apparel 1440 | [x] | [x] open (375/768 hamburger) |
| Predictive search `shirt` | [x] | [x] initial + input |
| Mobile menu 375 + 768 | [x] | [x] 1440 N/A |
| Cart drawer empty + filled + qty | [x] | [x] 1→2 · $150→$300 |
| PDP Revive Dress Color Checkered→Black | [x] | [x] fiyat $150 |
| PLP `/collections/all` | [x] | [x] 304 products |
| Collections index `/collections` | [x] | [x] Shop All Collections |
| Search `/search?q=shirt` | [x] | [x] Results for 'shirt' |
| Cart page empty + filled + qty | [x] | [x] 1→2 · $150→$300 |
| About `/pages/about` | [x] | [x] |
| Contact form (SEND yok) | [x] | [x] |
| FAQ `/pages/faq` | [x] | [x] |
| News + Ultimate Gift Guide | [x] | [x] |
| 404 `/404-qante-not-found` | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Interact (pixel-checked)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | 1440 Apparel hover: Clothing / Featured / Shop All + Knitwear / Fall looks. `a.navlink--toplevel` — `<a>` tıklanmadı |
| global-predictive-search | input | `shirt` → Suggestions + Amalfi / Zay / Kassandra / Meg Shirt + View All Results. Enter yok |
| global-menu-drawer | open | 375 + 768 hamburger. Clothing ağacı + Log in / Create account / SHOP ALL. Account dur |
| global-cart-drawer | filled + changed | ATC `is-open`. 1 item $150 → qty 2 / CHECKOUT $300. cart__toggle filled'da yok (kapatır) |
| cart-page-main | filled + changed | /cart 1 item $150 → qty 2 / SUBTOTAL $300 |
| product-info-main | changed | Color Black tikli. Fiyat $150. Sticky bar Color Black. SIZE GUIDE / BUY IT NOW dur |
| promo-banner-countdown | initial + changed | 42 DAYS timer · 3sn SEC tick |
| faq-collapsible-tabs (home + FAQ ×4) | initial + changed | İlk soru açık — teslimat / iade / garanti / ödeme |
| lead-capture-form | initial | Boş form; SEND yok · input PII dur |
| lead-capture-newsletter-band | initial | Your email + SIGN UP; submit dur |
| testimonial-quote-carousel (home) | initial + changed | Flickity quote→görsel; 375 swipe / 768+1440 Next |
| testimonial-quote-carousel (PDP) | initial | Statik grid — ok/dot yok |
| media-shop-the-feed | initial + hover | UGC kart hover → Shop the look vurgusu |
| media-scrolling-gallery | initial + changed | spring style ticker + zoomOut · waitFor kayma |

---

## Aday / leftover

[`candidates/palo-alto-leftovers.md`](../candidates/palo-alto-leftovers.md)

---

## Evidence backlog

- [x] Statik 3vp (51 observation × 3)
- [x] Mega / search / cart empty+filled+qty / mobile menu 375+768 / PDP Color
- [x] CRO interact: countdown / FAQ×5 / forms (initial) / testimonials / shop-the-feed / scrolling gallery
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
