# collection-nav-icon-buttons — styleKnobs önerisi

*Evidence:* 2 PNG · hyper/default home 1440 · hyper/default collection 1440

## Mevcut

```json
"styleKnobs": {
  "layout": "row|wrap|marquee",
  "ikonGoster": true,
  "okGoster": true,
  "gorselBoyut": "sm|md"
}
```

## Öneri

| Knob | Değer | Aksiyon | Kanıt |
|---|---|---|---|
| `layout` | `row\|wrap\|marquee` | KEEP | Home ve PLP: tek satır hap = **row**. wrap/marquee karede yok. |
| `ikonGoster` | boolean | KEEP | Hap içinde daire thumb. |
| `okGoster` | boolean | KEEP | Home karesinde sol/sağ chevron. Collection “Popular Search”te ok yok. |
| `gorselBoyut` | `sm\|md` | KEEP | Küçük daire thumb. |

İki sayfa aynı şekil (oda / saksı hapları). `hizalama` eklenmedi — şerit soldan doluyor, ikinci değer yok.

## Uygulanacak JSON (onay sonrası)

```json
"styleKnobs": {
  "layout": "row|wrap|marquee",
  "ikonGoster": true,
  "okGoster": true,
  "gorselBoyut": "sm|md"
}
```

Bütçe: 4. Değişmedi.

## Açık soru

- `wrap` / `marquee` bizim editörde olsun mu? Atlas marquee ayrı şema (`promo-scrolling-marquee`).
