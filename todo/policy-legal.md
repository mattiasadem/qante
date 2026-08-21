# Todo — Legal / policy (Kreis-shaped)

*Kaynak:* Kreis-001 remote (`mattiasadem/Kreis-001`) · *Preset:* `kreis-shaped` (referans, tema değil)  
*Canlı kanıt:* functionhealth · takearecess · minion footer (repo içi markalar)

**Durum:** policy pageType recipe + şema zenginleştirme  
**PR:** `cursor/legal-policy-page-recipe-f5d2` — draft

---

## Meta

| | |
|---|---|
| Page recipe | `page-recipes/policy.json` |
| Evidence kökü | `evidence/functionhealth/default/policy/` · `evidence/takearecess/default/policy/` |
| Şema | **1 yeni** (`editorial-separator`) · **3 güncellenen** (`page-content-main`, `lead-capture-form`, `footer-columns-newsletter`) |
| Validate | `node scripts/validate-schemas.mjs` → 0 error |

**Kapsam satırı:**  
`Legal/policy · Kreis CUSTOM recipe · page-content-main + editorial-separator + footer yasalLinkler + contact onayMaddeleri · functionhealth/takearecess/minion kanıt · Kreis contact SS blocked`

---

## Checklist

| # | İş | Done |
|---|---|---|
| 1 | `page-recipes/policy.json` — Kreis Header→Heading→Text→Footer stack | [x] |
| 2 | `taxonomy/v0.1.0.json` — pageTypeLabels policy=Legal/Yasal | [x] |
| 3 | `page-content-main` — sonGuncelleme, bolumler, 6 knob | [x] |
| 4 | `editorial-separator` — yeni şema | [x] |
| 5 | `lead-capture-form.onayMaddeleri` + onayGoster knob | [x] |
| 6 | `footer-columns-newsletter.yasalLinkler` locale notu | [x] |
| 7 | Viewer — policy facet Legal / Yasal | [x] |
| 8 | Observations + 3vp capture (functionhealth terms, waterboy privacy refresh) | [x] |
| 9 | Kreis contact onay — blocked (page-recipes/policy.json) | [x] |

---

## Evidence

| Observation | URL | 3vp |
|---|---|---|
| functionhealth policy privacy | `/legal/privacy-policy` | mevcut |
| functionhealth policy terms | `/legal/terms-of-service` | capture |
| takearecess policy terms | `/terms-and-conditions` | mevcut |
| minion home footer yasalLinkler | minion-theme-red | mevcut |
| Kreis contact onay | Kreis remote | ⛔ blocked (page-recipes only) |

---

## Açık soru

- Kreis Cookie CUSTOM page theme.json'da yok — yalnız footer legalLinks adayı.
- Impressum/KVKK/GDPR şablonları bilinçli dışarıda (Kreis'te yok).
