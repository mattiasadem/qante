# Todo — Obvi (myobvi.com)

*Kaynak:* https://myobvi.com · *Preset:* default · *Tema:* Platter custom (Theme Store skin değil)

**Şu anki odak:** İlk envanter — desktop interact pass tamamlandı

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/obvi/default/` |
| Walkthrough / not | Desktop interact pass; **capture-observation.mjs 3vp çalıştırılmadı** |
| Kapsam satırı | Obvi · default · home + product-detail + quiz · 9 obs · 1 yeni şema · Platter custom |

### Capture sınırlaması

Tüm kanıtlar **tek viewport (1440)** desktop interact pass ile alındı. `capture.method = desktop-interact-pass`. Resmi `capture-observation.mjs` üç viewport (375/768/1440) akışı bu tema için **henüz koşulmadı** — validator WARN beklenen.

---

## Bileşen checklist

| # | Bileşen / id | scope | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | global | [x] | FREE SHIPPING $75 | [x] | [x] |
| 2 | navigation-header-mega | global | [x] | SHOP vs LEARN mega hover | [x] | [x] |
| 3 | hero-slideshow | instance | [x] | BACK IN STOCK hero | [x] | [x] |
| 4 | global-predictive-search | global | [x] | collagen input | [x] | [x] |
| 5 | product-showcase-tabs | instance | [x] | COLLAGEN tab changed | [x] | [x] |
| 6 | media-shop-the-feed | instance | [x] | UGC tags navigate | [x] | [x] |
| 7 | global-cart-drawer | global | [x] | filled + qty changed | [x] | [x] |
| 8 | product-info-main | instance | [x] | Detox subscribe PDP | [x] | [x] |
| 9 | product-finder-quiz | instance | [x] | quiz screen 1 only | [x] | [x] |

---

## Aday / şemaya sığmayan

- **Scratch-card %20 popup + CLAIM 20% OFF sticky pill** — ilk oturumda görüldü, ikinci oturumda yok; kanıt yok → [`candidates/obvi-gamified-offer.md`](../candidates/obvi-gamified-offer.md)
- **product-finder kategori** — şema `product-showcase` + `quiz` varyantı; taksonomi adayı → [`candidates/obvi-product-finder.md`](../candidates/obvi-product-finder.md)
- **Boş sepet merchandised goal kartları + quiz CTA** — ilk pass'te görüldü, bu pass'te kare yok (global-cart-drawer missingState)

---

## Evidence backlog

- [ ] 3vp `capture-observation.mjs` yeniden koş (375/768/1440)
- [ ] Scratch-card popup yeniden yakala (koşullu görünürlük)
- [ ] Boş sepet drawer + goal kartları
- [ ] Quiz adım 2+ (seçenek tıklanınca)
- [ ] PDP supply 60/90 + one-time radio changed state
- [ ] UGC carousel next-arrow changed kare
- [ ] Home sayfasının geri kalan section'ları (footer, testimonials, vb.)

---

## Notlar

- Quiz CTA birinci sınıf: header pill, hero CTA, mega tile, boş sepet (görüldü, kare yok)
- Hero before/after kolaj = hero görseli, `before-after-slider` section değil
- Cart satırında abonelik sıklığı dropdown — observation delta, yeni cart şeması açılmadı
