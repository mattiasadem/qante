# Poppi — leftovers & aday (Mod A)

*Kaynak:* https://drinkpoppi.com · *Preset:* default · *Walk:* 2026-08-21

---

## Bot-block / kırık rota

| Rota | Durum | Not |
|---|---|---|
| `/pages/about-us` | 404 | Gerçek rota `/pages/our-story` |
| `/pages/faq` | 404 | FAQ `/pages/whypoppi` accordion içinde |
| `/blogs/news.json` | 404 | Blog list HTML var; article deep-link çıkmadı |

---

## Şemaya sığmayan / üçüncü parti

| Bileşen | Nerede | Neden leftover |
|---|---|---|
| **SmartCommerce SmartCart** | `#smart-cart`, `.sc-btn-ec`, `.cart-icon` | Üçüncü parti sepet; `global-cart-drawer` değil. Header cart icon h=0; checkout PII stop. |
| **Attentive SMS overlay** | `#attentive_overlay` iframe | Newsletter/SMS popup; dismiss-overlays temizliyor; form submit yok. |
| **Firework shoppable video** | PDP `module_pdp_firework` | `media-video-hero` delta ile sarmalandı; tam app şeması yok. |
| **Store locator widget** | `/pages/find-poppi` dropdown + map | Harita iframe/SDK aday; `page-content-main` wrapper. |
| **Locksmith** | `<head>` script | Erişim açık; public'te etkisiz. |

---

## Home — tekrarlayan / atlanan modüller

Aşağıdaki `module_product_carousel_lifestyle_*` blokları ayrı 3vp alınmadı (aynı kabı tekrar ediyor):

- `CtX4rA`, `kinML6`, `29b7f4f1`, `cHJaMP` — flavor lifestyle carousel
- `module_custom_liquid_PQNB9M` — h=0
- `global--countdown-announcement-bar` — h=0 / boş
- `template--27769274237218__1747081803d2a9529b` — h=0 spaced-section

---

## Chrome eksikleri

| Beklenen | Durum |
|---|---|
| `global-predictive-search` | Header'da arama input/ikon yok; yalnız `/search?q=` tam sayfa |
| `global-cart-drawer` | SmartCart app; native drawer yok |
| `global-menu-drawer` 1440 | Hamburger yalnız 375/768; 1440 capture skip/zero-size beklenir |
| `navigation-header-mega` 375 | Nav-tab gizli; mobil menü ayrı observation |

---

## Blog

- `/blogs/news` list render oluyor ama kart görselleri **"Image object is required for this component"**
- Article URL bulunamadı → `blog-post-main` observation yok

---

## PII stop (uygulandı)

- Checkout / login / newsletter submit / store locator form submit yapılmadı
- Contact form bu temada ayrı sayfa yok (whypoppi "Contact Us" link metni var)

---

## Açık soru

1. Tab-nav header (`nav-tab` × 4) `navigation-header-mega` delta yeterli mi, yoksa yeni `navigation-header-tabs` varyantı mı?
2. Lifestyle product carousel (`module_product_carousel_lifestyle`) `product-showcase-grid-featured` mi `media-lookbook-slider` mi — ikisi de kısmen uyuyor.
