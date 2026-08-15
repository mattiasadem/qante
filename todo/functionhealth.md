# functionhealth — keşif todo

Kaynak: https://www.functionhealth.com/ · slug `functionhealth` · preset `default`
Tema: **görünür theme-store adı yok** (custom Astro + Svelte; Vercel `dpl_7mvL1Czvfn4yQvDNfopMVfgteSq7`). Uydurulmadı.
Tarih: 2026-08-15
Mod: A (keşif) · DTC-69 #40

## Durum

Walk **tamam**. Claiming observation'larda resmi 3vp PNG var (menu 1440 hariç — surface 0×0 leftover). Cart / PDP-SKU / PLP-ürün / search-results **yok** (custom 404). Yeni şema yok. Validator: 65 temiz · 0 error · 0 warn.

## Walk (home → PDP → PLP → search → cart → content → footer → mobile)

| Adım | URL | Sonuç |
|---|---|---|
| home | `/` | 18 observation |
| PDP analog | `/pricing` | membership $365 / $1 day — SKU yok |
| PLP analog | `/what-we-test` | biomarker library (~17k px) |
| search | overlay `/?search=ferritin` | `.fh-search-modal` — `/search` 404 |
| cart | `/cart` `/products` `/collections` `/shop` | custom 404 |
| content | how-it-works, imaging, about, journal, article, faq, contact, privacy, 404, what-people-say | claimed |
| footer | her sayfada (home kare) | `footer-columns-newsletter` |
| mobile | 375 hamburger | drawer 375/768; 1440 surface 0px |

## Interact (piksel değişince)

| Section | State | 375 | 768 | 1440 | Not |
|---|---|---|---|---|---|
| global-predictive-search | overlay-bos + ferritin | ✓ | ✓ | ✓ | All 8 / Biomarkers 2 / Articles 2 / FAQs 0; Testimonials tab 1440 |
| global-menu-drawer | menu-acik | ✓ | ✓ | — | 1440 0×0 leftover |
| faq-collapsible-tabs | soru-2-acik | ✓ | ✓ | ✓ | Q2 Why was Function created? |

Cookie: Ketch `#ketch-banner` “I understand”. `#video-card-floating-portal` boş (`pointer-events: none`). Newsletter / signup / login **PII — girilmedi**.

## Evidence

`evidence/functionhealth/default/` — `capture-observation.mjs` + `capture-interaction.mjs`.
**178 PNG.** 55 observation × 3vp = 165; menu base 375+768 (1440 yok); interact +11 (search 6 + menu open 2 + FAQ 3).

## Şema

Yeni şema **yok**. Hepsi mevcut tipe reuse + `delta`.

## Aday / leftover

`candidates/functionhealth-leftovers.md` · `candidates/functionhealth-404s.md`

- Cart, PDP SKU, PLP ürün, search-results sayfası
- Gift `/gifthealth`, B2B, TCM, careers, creators, labs, results, clinician
- Desktop mega yok; 1440 drawer 0px
- Checkout `my.functionhealth.com/signup` — PII dur
- `cta-band` taksonomide var, `sections/` yok → `editorial-rich-text` zorlandı
- Biomarker kategori `/biomarker-categories/nutrients` + hash modal açılmadı

## Validate

`node scripts/validate-schemas.mjs` → 65 temiz · 0 error · 0 warn. Şema dosyası değişmedi.

## Sıradaki

Yok (walk kapanış). Gift/B2B ayrı tur.
