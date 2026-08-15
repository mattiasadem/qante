# Todo — Bandit Running

*Kaynak:* https://banditrunning.com · *Preset:* default · *Tema (storefront):* `bandit-ecomm/main` (Shopify.theme.name; Theme Store adı yok)

**Şu anki odak:** Mod A ilk envanter — home → PDP → PLP → search → cart/drawer → content → footer → mobile

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/bandit/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Shop | `bandit-run-club.myshopify.com` · theme id `145025564822` · role `main` |
| Platform | Canlı Shopify (Theme Store demo değil) |
| Kapsam satırı | Bandit · default · (devam) |

---

## Checklist — chrome şablonları

| Şablon | Durum | 3vp |
|---|---|---|
| Home (announcement, header, drop hero, shop tabs, editorial, footer) | [ ] | [ ] |
| PDP Stamina-V 5" compression short | [ ] | [ ] |
| Gift card PDP (ikinci product-info) | [ ] | [ ] |
| PLP `/collections/womens` + `/collections/summer-2026` | [ ] | [ ] |
| Search `/search?q=tights` | [ ] | [ ] |
| Cart drawer empty + filled (`/cart` home'a düşer) | [ ] | [ ] |
| Predictive search | [ ] | [ ] |
| Mega menu 1440 | [ ] | [ ] |
| Mobile menu 375+768 | [ ] | [ ] |
| About `/pages/about` | [ ] | [ ] |
| Blog list `/blogs/the-b-mail` | [ ] | [ ] |
| Blog post (eyewear collab) | [ ] | [ ] |
| FAQ `/pages/faq` | [ ] | [ ] |
| Unsponsored `/pages/unsponsored-project` | [ ] | [ ] |
| Policy `/policies/privacy-policy` | [ ] | [ ] |
| Footer (home'da) | [ ] | [ ] |
| Lovable/iframe landings | ⛔ candidate | — |

---

## Aday / şemaya sığmayan

- Cross-origin iframe landings → `candidates/bandit-iframe-landings.md`
- `/cart` → homepage (drawer-only; `cart-page-main` yok)
- `global-header-lockdown` ("GET EARLY ACCESS") public'te off-screen — şema yok
- Header `0.000 KM` scroll tracker — feature, section değil
- Gorgias chat — görülürse overlay dismiss; şema yok

---

## Evidence backlog

- [ ] Home 3vp
- [ ] PDP / PLP / search 3vp
- [ ] Drawer / search / mega / mobile interact
- [ ] Content templates 3vp
