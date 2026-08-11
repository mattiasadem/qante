# Todo — Hyper (Shopify) · tam tema envanteri

*Kaynak (default):* https://hyper-theme-demo.myshopify.com/  
*Ceramide:* https://hyper-ceramide.myshopify.com/ (before-after için denendi)  
*Walkthrough:* `../qante-ornek-calisma-hyper.md`  
*Evidence:* `evidence/hyper/{preset}/{sayfa}/`

**Şu anki odak:** ✅ Hyper **default tam envanter bitti** — sonraki tema veya preset delta

**Evidence kuralı:** `selector` + url → `capture-observation.mjs` (3vp) · drawer/modal: `captureMode: viewport` + `prepareClick` / `prepareFill` / `prepareScroll`

---

## Meta

| | |
|---|---|
| Preset | `default` ✅ |
| Observation | **81** (80 tam 3vp · 1 blokeli) |
| Şema | **46** (`sections/instance` + `sections/global`) |
| Sayfa tipleri | home · collection · product-detail · search · cart · cart-drawer · about-brand · contact · faq-support · blog-list · blog-post |
| Blokeli | `before-after-slider` — temada var, canlı preset home’larda yok |

**Kapsam satırı:**  
`Hyper (default) · 11 sayfa · 46 şema · 80/81 evidence · 1 demo-gap (before-after) · Shopify`

---

## Faz durumu

- [x] F0 Sprint 0 örnek seti  
- [x] F1 Sayfa haritası + roster  
- [x] F2 Home 23/23  
- [x] F3 Collection / PLP  
- [x] F4 PDP  
- [x] F5 Search / Cart / Content / Blog / FAQ  
- [x] Global overlay’ler (cart · menu · compare · quick-view · predictive-search · spotlight)  
- [ ] F6 Preset delta (ceramide/pillar/trove/nexvo) — opsiyonel sonraki iş  
- [ ] `before-after-slider` canlı instance bulununca capture  

---

## Sayfa özeti

| sayfa | Durum |
|---|---|
| `home` | ✅ 23 section + globals |
| `collection` | ✅ breadcrumbs · banner · PLP grid · rich-text · icon-buttons · marquee |
| `product-detail` | ✅ main · tabs · comparison · related · lookbook · … |
| `search` | ✅ search-results |
| `cart` | ✅ main-cart · recently-viewed · marquee |
| `cart-drawer` | ✅ global-cart-drawer (viewport) |
| `about-brand` | ✅ overlay · IWT · FAQ · team multicolumn · … |
| `contact` | ✅ page-main · form · marquee |
| `faq-support` | ✅ 3× accordion · trust icons |
| `blog-list` / `blog-post` | ✅ |

---

## Bilinçli boşluklar

1. **before-after-slider** — FoxEcom docs’ta section var; default/ceramide/pillar/trove/nexvo home’da yok → `capture.blocked`  
2. **Preset delta** henüz yok (aynı şemaların ceramide vb. farkları)  
3. Policy sayfaları düşük öncelik, taranmadı  

---

## Aday (şimdilik kapalı)

- commerce-tools / products-bundle → Ceramide’de görülmüştü; default inventory dışı  
- topbar vs announcement ayrımı → delta ile promo altında kaldı  

---

## Sonraki tema

- [ ] `todo/_template.md` → örn. `ozy.md`
