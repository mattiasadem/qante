# Listicle-advertorial — cross-theme adaylar

*Taksonomi pageType:* `listicle-advertorial`  
*Amaç:* Reklam/listicle LP'lerde tekrarlayan persona/ürün blokları — şema reuse notları.

---

## Away · best-travel-gifts

*URL:* https://www.awaytravel.com/blogs/the-away-pages/best-travel-gifts  
*Observations:* `observations/away/default/listicle-best-travel-gifts/`  
*Kanıt:* 3 obs · 9 PNG · 0 yeni şema

| Görülen blok | schemaId | Karar |
|---|---|---|
| Article shell (title, meta, kapak, breadcrumbs) | `blog-post-main` | reuse · `.blog-article` |
| Persona h2 segmentleri (4× + intro/outro) | `blog-post-main` · `icerik` items | reuse · tek `.blog-article__content`; ayrı DOM kabı yok |
| Inline `/products/` linkleri | — | leftover · `product-showcase-featured` kart yok |
| You may also like | `blog-list-main` | reuse · `.related-articles` |
| Share footer (Facebook/Twitter/Pinterest) | — | leftover · şema yok |

**Persona örnekleri (richtext item, ayrı observation yok):**
- For the Frequent Flyer: The Bigger Carry-On
- For the Organized Packer: The Insider Packing Cubes
- For the Weekend Warrior: The Featherlight Weekender
- For the Everyday Explorer: The Mini Crossbody

---

## Diğer temalar (henüz claiming yok)

| Tema | URL örneği | Not |
|---|---|---|
| Boka | `/pages/ela-mint-static-listicle` | `candidates/boka-leftovers.md` |
| Comrad | pages.json listicle LP'leri | `candidates/comradsocks-leftovers.md` |
| IM8 | sitemap kampanya/listicle | `candidates/im8health-leftovers.md` |
