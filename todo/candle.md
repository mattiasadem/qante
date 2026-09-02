# Todo — Candle (Speedo Themes · third-party Shopify 2.0)

*Kaynak (yalnız resmi walk, başka host yok):* https://speedo-candles-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/candle-luxurious-candle-shopify-theme-o-s-2-0  
*Preset klasör:* `default` · slug `candle`  
*Vendor:* Speedo Themes (Theme Store resmi değil)

**Durum:** ⛔ **STOP** — resmi demo password wall. Section envanteri / interact / şema **yazılmadı**. Başka host uydurulmadı.  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/candle/` — **boş** (walk yok) |
| Capture | yapılmadı |
| Şema | **0 yeni** — şemaya dokunulmadı |
| Observation | **0** |
| PNG | **0** |
| Parallel | `todo/candle.md`, `candidates/candle-leftovers.md`, `todo/README.md` satırı |

**Kapsam satırı:**  
`Candle · default · Speedo Themes · resmi host speedo-candles-store.myshopify.com → /password (200) · Shopify.theme okunamadı · 0 obs · 0 PNG · 0 yeni şema · leftover: candidates/candle-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home `/` | ⛔ 200 → `/password` | — |
| PDP | ⛔ password | — |
| PLP / collection | ⛔ password | — |
| Search | ⛔ password | — |
| Cart / drawer | ⛔ password | — |
| Content / blog / footer | ⛔ password | — |
| Interact (hover / menu / filled cart / variant) | ⛔ walk yok | — |
| Email / account / checkout | ⛔ dur | — |

---

## Probe (password sayfası — içeri girilmedi)

Playwright headless, resmi URL:

- Status **200**
- Final URL `https://speedo-candles-store.myshopify.com/password`
- Title: `speedo-candles-store (password: 1)`
- Metin: “This store is password protected. Use the password to enter the store.”
- `form[action='/password']` var · Enter store password
- `window.Shopify.theme` / `Shopify.shop` **null** (künye okunamadı — uydurulmadı)
- Password girilmedi (görev: password wall → STOP)

Speedo ürün sayfası ayrıca “Please enter password "1" to view demo.” yazıyor. Bu yayınlanmış not leftover’da; **giriş denenmedi**.

---

## Bileşen checklist

| # | Bileşen / id | scope | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| — | (yok — wall) | — | [ ] | [x] leftover | — | ⛔ |

---

## Aday / leftover

[`candidates/candle-leftovers.md`](../candidates/candle-leftovers.md)

---

## Evidence backlog

- [ ] Resmi 3vp — password kalkınca
- [ ] Interact — password kalkınca
- [ ] `node scripts/validate-schemas.mjs` — şema değişmedi; koşulmadı
