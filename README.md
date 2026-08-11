# QANTE — Agent rehberi

Bu klasör, e-ticaret temalarını **şema + örnek envanter** olarak tanımlar. Amaç şu an kod/tema üretmek değil; gerçek sitelerden section dilbilgisini çıkarmak (Sprint 0 / İş Paketi A).

Platform hedefi: önce ikas Studio; IR/şema platform-bağımsız tutulur.

---

## Önce bunları oku (sırayla)

1. Bu README
2. **Lokal UI:** `cd qante/viewer && node server.mjs` → http://localhost:3456
3. `todo/` — tema bazlı ilerleme (`todo/hyper.md` şu an aktif)
3. `qante-teknik-ekip-brief.md` — terimler, şema boyutları, iş paketleri
4. `qante-ornek-calisma-hyper.md` — Hyper üzerinden “nasıl envanterlenir” walkthrough
5. `sprint-0-task-listesi.md` — Sprint 0 checklist (ihtiyaca göre)
6. `tema-fabrikasi-master-plan-v02.md` — büyük vizyon (yalnız bağlam gerekirken)

---

## Klasör haritası

```
qante/
├── taxonomy/v0.1.0.json
├── sections/                # ŞEMA (tip sözleşmesi) — tip başına TEK dosya
│   ├── _template.json
│   ├── global/
│   └── instance/
├── observations/            # GÖZLEM (hangi temada gördük) — her sighting ayrı dosya
│   ├── _template.json
│   └── {tema}/{preset}/{sayfa}/{schemaId}.json
├── evidence/                # screenshot — evidence/{tema}/{preset}/{sayfa}/
├── todo/                    # saha takibi (tema başına md)
├── viewer/                  # lokal web UI — node server.mjs
├── candidates/
└── *.md
```

**İki kimlik:**
| | Nerede | Örnek |
|---|---|---|
| Şema | `sections/.../before-after-slider.json` | `id: before-after-slider` |
| Gözlem | `observations/hyper/ceramide/home/before-after-slider.json` | `observationId: hyper.ceramide.home.before-after-slider` |

İkinci before-after görürsen: **aynı şema dosyasına yazma.** Yeni gözlem dosyası aç, örn. `observations/ozy/v2/home/before-after-slider.json`. Şema yoksa önce `sections/`’a tip ekle.

---

## Yeni kayıt nasıl eklenir

1. Demo gez → section sınırını çiz.
2. Bu tip `sections/`’ta var mı?
   - **Yok** → `sections/_template.json` → şema oluştur.
   - **Var** → şemaya dokunma (veya `delta` ile genişletmeyi tartış).
3. `observations/_template.json` kopyala → `observations/{tema}/{preset}/{sayfa}/{schemaId}.json`
4. `observationId` = `{tema}.{preset}.{sayfa}.{schemaId}` (1, 2, 3 yok).
5. Evidence (3 viewport — **manuel SS yok**):
   ```bash
   cd qante/scripts && node capture-observation.mjs ../observations/{tema}/{preset}/{sayfa}/{schemaId}.json
   ```
   Çıktı: `evidence/.../{slug}.375.png` · `.768.png` · `.1440.png`  
   Observation’da zorunlu: `selector` (+ `url` veya bilinen tema).  
   Script: overlay kapat → margin-box kırp → `evidence[]` güncelle. Ayrıntı: `scripts/README.md`.
6. Kategori uymuyorsa `candidates/`.

Örnek çiftler:
- `sections/instance/hero-slideshow.json` ↔ `observations/hyper/default/home/hero-slideshow.json`
- `sections/instance/testimonial-quote-carousel.json` ↔ `observations/hyper/default/home/testimonial-quote-carousel.json`

---

## Sert kurallar

| Yap | Yapma |
|---|---|
| Soyut `DataSource.*` kullan | Platform adı yaz (`Shopify collection` değil) |
| Stil için `styleKnobs` (kolon, hizalama, yoğunluk…) | Renk / font / spacing token’ı şemaya koy |
| `scope`: `global` \| `page-template` \| `instance` | Her şeyi `instance` say |
| Action’ları yaz (`emit:` / `listen:` / `navigate`) | Tıklanabilirleri atla |
| Kanıt (URL + screenshot) bağla | Sadece hayali şema uydur |
| Altın örnekleri dondur; iddiayı ölçüme bağla | “Sayaca bak” — yayınlanmış vitrine bak |

**AI / agent rolü burada:** şema doldur, envanter çıkar. Serbest komponent kodu / stil üretme. Hard-coded stil yasak ilkesi Base/Preset aşamasına da taşınır.

---

## Sözlük (kısa)

- **Section** — sayfanın bağımsız yapı taşı (şemayla tanımlı)
- **Slot** — içerik alanı (text, image, array…)
- **styleKnob** — yapısal ayar (token değil)
- **DataSource** — soyut veri bağı; compiler platforma çevirir
- **Scope** — `global` (her yer) · `page-template` · `instance` (sayfa satırı)
- **Hook** — `mount:` / `event:` / `filter:` genişleme noktaları
- **Preset** — Base üstünde tokens + styleProfile + reçete (şimdilik kapsam dışı)

---

## Sprint 0 odağı (agent için)

Hedef: şablon + gerçek örneklerle **en az 8 tam section kaydı** (bir kısmı `global`).  
Hook PoC, QANTE Base, Preset → Sprint 1+.

Şüphede kalınca: `qante-ornek-calisma-hyper.md` “Sık düşülecek 6 hata” bölümüne bak.
