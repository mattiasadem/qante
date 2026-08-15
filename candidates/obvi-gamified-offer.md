# ADAY: promo-scratch-card / gamified offer

**Durum:** bekliyor · **yeniden yakalanmadı**  
**Kaynak:** Obvi (myobvi.com) · desktop interact pass · 2026-08-15

## Gerekçe

İlk oturumda scratch-card %20 popup görüldü; kapanınca CLAIM 20% OFF sticky pill kaldı. İkinci oturumda popup ve pill **ikisi de yoktu**. Tek viewport kanıt yok; şema yazılmadı.

## Görülen davranış (bellek dışı — kullanıcı raporu)

- Tam ekran scratch-card overlay, %20 indirim
- Kapatınca köşede sticky "CLAIM 20% OFF" pill
- Oturum/koşula bağlı görünürlük (A/B veya frequency cap)

## Öneri

- `promo-scratch-card` veya `promo-gamified-offer` varyantı adayı
- Kategori: `promo`
- Yeniden yakalanana kadar observation/şema açılmaz

## Karar

- [ ] Onayla → yeni şema + interact yeniden koş
- [ ] Reddet
- [ ] Ertele — Obvi todo'da missingState olarak işaretlendi
