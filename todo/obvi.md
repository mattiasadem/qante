# Todo — Obvi (myobvi.com)

*Kaynak:* https://myobvi.com · *Preset:* default · *Tema:* Platter custom

**Durum:** ✅ **KAPALI** — chrome-ulaşılır şablonlar + resmi 3vp; 404/scratch-card/policy native kayıtlı

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/obvi/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Validate | `npm run validate` → 65 temiz · 0 error · 0 warn |
| Gözlem / kanıt | 51 obs · 169 PNG |
| PR | https://github.com/mattiasadem/qante/pull/2 (review-ready, **main'e merge yok**) |
| PR #1 | merged (quiz iframe piercing) |

---

## Checklist — chrome şablonları

| Şablon | Durum | 3vp |
|---|---|---|
| Home (section kit + header/cart/search) | ✅ mevcut şemalar | ✅ |
| PDP Detox + Collagenic Burn | ✅ `product-info-main` + before-after | ✅ |
| PLP shop-all / weight-loss / collagen / Daily Health | ✅ grid + tabs (Daily Health aynı tip) | ✅ |
| Search `/search?q=collagen` | ✅ `search-results` | ✅ |
| Cart + drawer | ✅ `cart-page-main` + `global-cart-drawer` | ✅ |
| Quiz `/pages/supplement-quiz` | ✅ `product-finder-quiz` (iframe pierce) | ✅ |
| Blog list `/blogs/news` + `/pages/blogs` | ✅ `blog-list-main` | ✅ |
| Article news + weightloss + Collagen 101 | ✅ `blog-post-main` (+ overlay news) | ✅ |
| Recipes list + post | ✅ aynı blog şemaları | ✅ |
| Our Story `/pages/about-us-1` | ✅ editorial + marquee | ✅ |
| How To Start | ✅ `page-content-main` + cards | ✅ |
| Bundle `/pages/bundle-builder` | ✅ `commerce-tools-products-bundle` | ✅ |
| Mobile 375 drawer | ✅ `global-menu-drawer` | ✅ 375+768 (1440 N/A) |
| Rewards | ✅ `rewards/page-content-main` (Influence.io; points şeması yok) | ✅ |
| Community `/pages/community` | ✅ `page-content-main` + editorial | ✅ |
| Meet the Team | ✅ `page-content-main` + slider (team cards) | ✅ |
| FAQ | ✅ `faq-collapsible-tabs` | ✅ |
| Contact + Return/Exchange CTA | ✅ `lead-capture-form` (gönderilmedi; Return aynı form) | ✅ |
| Policy `/policies/*` | ✅ `policy/page-content-main` (Shopify native; yeni şema yok) | ✅ |
| 404'ler | ⛔ kayıtlı | — |
| Scratch-card | ⛔ candidate (görülmedi) | — |
| Sitemap ad LPs (burn-elite, weight-loss-v*, GLP-1…) | ⛔ chrome dışı; şema icat yok | — |

---

## 404 (şema yok)

`/pages/join-obvi-community` · `/pages/bundler` · `/pages/wholesale-inquiries` · `/pages/tracking` · `/pages/how-to-use` · `/pages/career-opportunities`

---

## Açık iş

*Yok — checklist kapalı.* Scratch-card ve 404'ler blocker/aday.
