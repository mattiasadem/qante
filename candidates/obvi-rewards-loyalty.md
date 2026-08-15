# ADAY: Obvi rewards / loyalty embed

**Kaynak:** Obvi (myobvi.com) · preset `default` · 2026-08-15

## Canlı

| URL | Durum | Not |
|---|---|---|
| `/pages/obvis-rewards-program` | **200 public** | "Welcome to the club" / Join program — third-party loyalty embed |

## Karar

- Mevcut `page-content-main` (başlık + richtext) loyalty motorunu tutmaz.
- **Yeni points-engine şeması yazılmadı** (talimat).
- Observation açılmadı — embed seçici kararsız (geç hydrate / app iframe).
- Aday: `lead-capture` veya `loyalty-rewards-embed` varyantı, yeniden yakalanınca.

## Karar kutusu

- [ ] Onayla → şema + 3vp observation
- [ ] Reddet
- [x] Ertele — candidate; points engine icat etme
