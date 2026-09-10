# Todo — Vivobarefoot (vivobarefoot.com)

*Kaynak:* https://vivobarefoot.com · *walk URL:* https://www.vivobarefoot.com/us/  
*Preset:* `default`  
*Tema (Jina + DNS bu koşu, uydurulmadı):* **Magento 2 / Adobe Commerce Cloud** · `frontend/vivo/theme-frontend-vivo` · static `version1787208597` (home Jina)  
*Shopify.theme / schema_name / schema_version / theme_store_id:* **gözlenmedi** (uydurulmadı)  
*CNAME:* `www.vivobarefoot.com` → `prod.magentocloud.map.fastly.net`

**Durum:** 2026-08-20 retry — resmi 3vp **DataDome 403** · observation yazılmadı · PR #114 devam edilmedi  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/vivobarefoot/default/` |
| Capture | resmi `capture-observation.mjs` **denendi** — interstitial; PNG uydurulmadı |
| Şema | **0 yeni** |
| Gözlem / kanıt | **0 obs · 0 PNG** |
| Parallel | yalnız `observations/vivobarefoot/`, `evidence/vivobarefoot/`, `todo/vivobarefoot.md`, `candidates/vivobarefoot-*.md` |

**Kapsam satırı:**  
`Vivobarefoot · default · Magento theme-frontend-vivo (Shopify.theme yok) · retry 2026-08-20 · official 3vp DataDome 403 · 0 obs · 0 PNG · 0 yeni şema · leftover: hâlâ blocked`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home `https://www.vivobarefoot.com/us/` | Jina HTML · Playwright 403 | ⛔ DataDome |
| PDP `/us/primus-lite-iv-mens` | Jina HTML | ⛔ |
| PLP `/us/mens` | Jina HTML | ⛔ |
| Search `/us/catalogsearch/result/?q=primus` | Jina title + sonuç listesi | ⛔ |
| Cart `/us/checkout/cart/` | Jina 401 bu koşu | ⛔ |
| About `/us/about-us-vivo` | Jina 401 bu koşu | ⛔ |
| Why `/us/whybarefoot` | Jina 401 bu koşu | ⛔ |
| Size guide | Mens nav link; Jina 401 | ⛔ |
| Policy `/us/privacy-policy` | Jina HTML | ⛔ |
| Mega / search overlay / minicart / hamburger | koşulmadı | ⛔ |
| 404 | denenmedi | ⛔ |
| Newsletter / account / checkout / assessment submit | ⛔ PII yok | — |

---

## Bileşen roster

Resmi capture yeşil değil. Selector / observation yazılmadı (kanıtsız şema/obs yok).

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| — | — | — | ⛔ | DataDome | — | [ ] |

---

## Aday / leftover

[`candidates/vivobarefoot-leftovers.md`](../candidates/vivobarefoot-leftovers.md)

---

## Evidence backlog

- [ ] Resmi 3vp — DataDome kalkınca `capture-observation.mjs` + `capture-interaction.mjs` (375/768/1440)
- [ ] Home / PDP Primus Lite IV / PLP mens / search primus / cart / about / policy
- [ ] Interact: mega, Amasty/search, minicart, hamburger, tabs, swatch — yalnız sayfa hidrate olursa
- [ ] Newsletter / account / assessment / Zendesk — **yapılmayacak** (PII)
