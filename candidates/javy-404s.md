# Javy / Javvy — 404 ve düşen rotalar

*2026-08-15 · Hydrogen `utm_medium=hydrogen`*

Şema yazılmadı.

| İstenen | Landed | Not |
|---|---|---|
| `/search?q=coffee` | `/bio?utm_source=404&utm_medium=hydrogen` | “Better Coffee Made Easy.” |
| `/search?q=protein` | aynı `/bio` | |
| `/pages/about` | `/bio` 404 | |
| `/pages/about-us` | `/bio` 404 | |
| `/pages/faq` `/pages/faqs` | `/bio` 404 | |
| `/pages/contact` `/pages/contact-us` | `/bio` 404 | |
| `/policies/privacy-policy` | `/bio` 404 | Legal: `/support/privacy-policy` |
| `/pages/our-story` `/about` `/pages/about-javvy` | `/bio` 404 | |
| `/pages/our-impact` | 200 sonra **home** | About Us nav hedefi |
| `/blogs/news` | 500 “Oh no!” | Liste: `/blog/category/all` |
| `/products/gift-card` | `/collections/all` | |
| `/cart` | `/?openCart=true` | sayfa yok |
| `/products/all` | `/collections/all` | breadcrumb Products |

Native 404 şablonu ayrı envanterlenmedi — `/bio` kampanya landing.
