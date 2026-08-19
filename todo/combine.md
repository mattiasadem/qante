# Todo — Combine (Krown Themes · paid · bundles)

*Kaynak (görev URL):* https://combine-theme.myshopify.com/ — **eski Lift “combine-round-2”** (schema_name null · theme_store_id null). Krown değil.  
*Walk URL (Krown resmi demo):* https://combine-theme-main.myshopify.com/  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/combine  
*Tema (storefront, uydurulmadı):* **combine-build/home** · `schema_name`: **Combine** · `schema_version`: **4.0.0** · `theme_store_id`: **null** · role `main` · id `159816614121`  
*Shop:* `bundle-theme-demo.myshopify.com` (host `combine-theme-main.myshopify.com`)

**Durum:** ✅ Mod A walk + resmi 3vp + interact (CRO leftover) + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/combine/default/` |
| Observation | **39** |
| Evidence PNG | **162** |
| Yeni şema | **0** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Parallel | yalnız `observations/combine/`, `evidence/combine/`, `todo/combine.md`, `candidates/combine-*.md` |

**Kapsam satırı:**  
`Combine · default · combine-build/home / schema_name Combine 4.0.0 (theme_store_id null) · home→PDP→PLP→collections→search→cart→Our Story→contact→News→404 + Build Your Set + lookbook · 39 obs · 162 kanıt · 0 yeni şema · leftover: candidates/combine-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + slideshow / sets / kit cards / collections / IWT / set-of-3 / marquee / bundler / footer | [x] | [x] |
| Header kapalı + Shop mega 1440 | [x] | [x] |
| Predictive search `carafe` | [x] | [x] drawer açık; sonuç listesi leftover |
| Cart drawer empty + filled + qty 1→2 | [x] | [x] $55→$110 |
| Mobile hamburger 375+768 | [x] | [x] (1440 N/A) |
| PDP Carafe Color Clear → Amber + sticky ATC | [x] | [x] |
| PLP `/collections/all` | [x] | [x] |
| Collections index `/collections` | [x] | [x] |
| Search `/search?q=bundle` | [x] | [x] 10 results |
| Cart `/cart` empty + filled + qty 1→2 | [x] | [x] $55→$110 |
| About `/pages/our-story` (`/pages/about` 404) | [x] | [x] |
| Contact form (submit yok) | [x] | [x] |
| News blog (boş) | [x] | [x] |
| 404 | [x] | [x] |
| Build Your Set bundle (1 ürün eklendi) | [x] | [x] |
| Lookbook | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Interact (pixel-checked)

- `navigation-header-mega` — 1440 Shop mega: Sets & Bundles + Trending/Bestseller görselleri
- `global-menu-drawer` — 375 tam ekran / 768 sağ drawer
- `global-predictive-search` — drawer + `carafe`; öneri listesi boş leftover
- `global-cart-drawer` — boş → Carafe qty1 $55 → qty2 $110
- `cart-page-main` — aynı 1→2
- `product-info-main` — Clear → Amber; 375 sticky Choose options
- `lead-capture-form` — Subject + Message (`input`); Name/Email/Phone boş; Submit yok
- `commerce-tools-products-bundle` (home curated) — Carafe Clear → Amber swatch (`changed`)
- `commerce-tools-products-bundle-2` (home BYOB) — Boulder Bookend slot 1 (`changed`)
- `commerce-tools-products-bundle` (Build Your Set) — initial → 1 ürün (`changed`) → 2 ürün ATC enabled (`filled`)

---

## Aday / leftover

[`candidates/combine-leftovers.md`](../candidates/combine-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 32/32
- [x] Interact mega / search / cart / menu / PDP / bundle / sticky ATC
- [x] CRO leftover interact: `lead-capture-form`, `commerce-tools-products-bundle` (home + landing filled)
- [x] PNG bak → stateFindings
- [x] `npm run validate`
- [ ] Predictive ürün kartı — boş (leftover)
- [ ] Bundle ATC tıklama / checkout — **yapılmayacak**
- [ ] Newsletter / account / contact submit — **yapılmayacak** (PII)
