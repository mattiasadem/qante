# Todo — Legal / policy (Kreis-shaped)

*Kaynak:* Kreis-001 remote (`mattiasadem/Kreis-001`) · *Preset:* `kreis-shaped` (referans, tema değil)  
*Canlı kanıt:* functionhealth · takearecess · minion footer (repo içi markalar)

**Durum:** policy pageType recipe + 3-col sticky layout (Main spec)  
**PR:** #317 — draft

---

## Meta

| | |
|---|---|
| Page recipe | `page-recipes/policy.json` — **three-column-sticky** |
| Layout wrapper | `sections/page-template/policy-page-layout.json` |
| Rails | `policy-toc-nav` (sol) · `policy-sibling-nav` (sağ) |
| Evidence | functionhealth/takearecess center body · im8health partial sibling nav · **3-col 3vp blocked** |

**Kapsam satırı:**  
`Legal/policy · Main 3-col sticky TOC|body|sibling · policy-page-layout + rails · Kreis Heading+Text center · footer yasalLinkler ayrı · 3-col live 3vp Açık soru`

---

## Checklist

| # | İş | Done |
|---|---|---|
| 1 | `page-recipes/policy.json` — 3-col shell (not single stack) | [x] |
| 2 | `policy-page-layout` page-template (kolon 3, solSticky, sagSticky) | [x] |
| 3 | `policy-toc-nav` — items etiket+anchor, sticky+side left | [x] |
| 4 | `policy-sibling-nav` — items etiket+link, sticky+side right | [x] |
| 5 | `page-content-main.bolumler[].anchor` ↔ TOC binding | [x] |
| 6 | im8health delta — partial sibling nav, 3-col blocked | [x] |
| 7 | Validator 0 error on touched schemas | [x] |

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
