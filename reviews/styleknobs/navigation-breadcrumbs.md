# navigation-breadcrumbs — styleKnobs önerisi

*Evidence:* 2 PNG · hyper/default collection 1440 · impulse/dune collection 1440 (banner karesinde)

## Mevcut

```json
"styleKnobs": {
  "separator": "slash|chevron",
  "hizalama": "left|right"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `separator` | `slash\|chevron` | KEEP | Dune `Home / Collections`. Hyper dikey pipe — sözlükte slash\|chevron. |
| `hizalama` | `left\|center` | KEEP (değer +center, −right) | Hyper sol. Dune orta. `right` karede yok. |

## Uygulanacak JSON

```json
"styleKnobs": {
  "separator": "slash|chevron",
  "hizalama": "left|center"
}
```

Bütçe: 2. `_knobNote` duruyor.
