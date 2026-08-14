# collection-nav-banners — styleKnobs önerisi

*Evidence:* 2 PNG · hyper/trove 1440/375

## Mevcut

```json
"styleKnobs": {
  "kolon": [2, 4],
  "gorselKonumu": "left|right",
  "hizalama": "left|center"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `kolon` | `[2, 4]` | KEEP | 375 kategori ızgarası **4**. 1440 sidebar 2×4. Banner sırası 3 kart — `kolon` kategori tarafı. |
| `gorselKonumu` | `left\|right` | KEEP | 1440 kategori **sol**, bannerlar sağ. Küçük kartlarda görsel sağda. |
| `hizalama` | `left\|center` | KEEP | Metin/CTA sol. |

Tek preset. İkinci iskelet yok — `layout` uydurulmadı. 375 banner istif + kategori alta = `responsive`.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "kolon": [2, 4],
  "gorselKonumu": "left|right",
  "hizalama": "left|center"
}
```

Bütçe: 3. `_knobNote` duruyor.

## Açık soru

- Banner sırası 3 kart merchant `kolon` mı? Şimdilik kategori ızgarasına bağlı.
