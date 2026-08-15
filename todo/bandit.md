# Todo — Bandit Running

*Kaynak:* https://banditrunning.com · *Preset:* default · *Tema (storefront):* `bandit-ecomm/main` (Shopify.theme.name; Theme Store adı yok)

**Şu anki odak:** Interact (mega / hamburger / predictive search / cart drawer) — statik walk bitti

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/bandit/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Shop | `bandit-run-club.myshopify.com` · theme id `145025564822` · role `main` |
| Platform | Canlı Shopify (Theme Store demo değil) |
| Kapsam satırı | Bandit · default · statik 3vp tamam · interact açık |

---

## Checklist — chrome şablonları

| Şablon | Durum | 3vp |
|---|---|---|
| Home (announcement, drop hero, shop tabs, editorial, footer) | [x] | [x] |
| Header kapalı kare | [ ] | interact `navigation-header-mega` |
| PDP Stamina-V 5" compression short | [x] | [x] |
| Gift card PDP (ikinci product-info) | [x] | [x] |
| PLP `/collections/womens` banner + pills + filter + you-may-also-like | [x] | [x] |
| PLP `/collections/summer-2026` banner | [x] | [x] |
| Search `/search?q=tights` | [x] | [x] |
| Cart drawer empty + filled (`/cart` home'a düşer) | [ ] | interact |
| Predictive search | [ ] | interact |
| Mega menu 1440 | [ ] | interact |
| Mobile menu 375+768 | [ ] | interact |
| About `/pages/about` | [x] | [x] |
| Unsponsored `/pages/unsponsored-project` | [x] | [x] |
| Blog list `/blogs/the-b-mail` | [x] | [x] |
| Blog post (eyewear collab) | [x] | [x] |
| FAQ `/pages/faq` | [x] | [x] |
| Policy `/policies/privacy-policy` | [x] | [x] |
| Footer (home'da) | [x] | [x] |
| Lovable/iframe landings | ⛔ candidate | — |

---

## Aday / şemaya sığmayan

- Cross-origin iframe landings → `candidates/bandit-iframe-landings.md`
- `/cart` → homepage. Sepet yalnız `global-minicart` drawer; `cart-page-main` yok
- `global-header-lockdown` ("GET EARLY ACCESS") public'te off-screen — şema yok
- Header `0.000 KM` scroll tracker — feature, section değil
- Gorgias chat — görülürse overlay dismiss; şema yok
- `collection-additional` h=0 / boş
- Blog article Shopify section id taşımıyor; gövde `main#main`
- Email/PII gönderilmedi (Unsponsored form)

---

## Evidence backlog

- [x] Home static 3vp (header kapalı kare interact'te)
- [x] PDP / PLP / search 3vp
- [x] Content templates 3vp (about, unsponsored, blog, FAQ, policy)
- [ ] Drawer / search / mega / mobile interact
