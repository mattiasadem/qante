# collection-nav-tabs — styleKnobs önerisi

*Evidence:* 3 PNG · hyper/default 1440/375 · hyper/nexvo 1440

## Mevcut

```json
"styleKnobs": {
  "layout": "media-left|media-right",
  "tabPozisyon": "top|side",
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `layout` | `media-left\|media-right` | RENAME → `gorselKonumu: left\|right` | Default ve Nexvo aynı: büyük görsel **sağ**, sol dikey koleksiyon listesi. `layout` iskelete ayrılmış; bu medya yeri (§3.2). |
| `tabPozisyon` | `top\|side` | KEEP | İki preset’te dikey liste = **side**. `top` karede yok. |
| `hizalama` | `left\|center` | KEEP | Başlık ve CTA sol. 375 CTA orta = `responsive`. |

375: liste üstte, görsel alta — otomatik istif, ikinci layout değil.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "gorselKonumu": "left|right",
  "tabPozisyon": "top|side",
  "hizalama": "left|center"
}
```

Bütçe: 3. `_knobNote` duruyor.

## Açık soru

- `tabPozisyon: top` ve `gorselKonumu: left` yalnız sözlük.
- `media-background` karede yok.
