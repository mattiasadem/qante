# NOVOS Labs leftovers / adaylar

*URL:* https://novoslabs.com  
*Tema (görülen):* NOVOS Blocks 0.9.101 · FSE · WooCommerce · parent yok  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: novoslabs-jetpack-instant-search  
Gerekçe: `#nvSearchTrigger` Jetpack Instant Search overlay (`.jetpack-instant-search__overlay`) açar. Native `#nvSearchModal` 0px. `/?s=core` home’a düşer. Taksonomide üçüncü parti search overlay yok; `global-predictive-search` observation’a bağlandı.  
Örnekler: https://novoslabs.com/  
Öneri: leftover — Jetpack widget  
Karar: onay bekliyor

---

ADAY: novoslabs-product-finder  
Gerekçe: Nav `/#finder` + class `cc-product-finder`. DOM `#novos-product-finder-css` height 0. `product-finder-quiz` zorlanmadı.  
Örnekler: https://novoslabs.com/#finder  
Öneri: ertele — 0px  
Karar: onay bekliyor

---

ADAY: novoslabs-site-reviews  
Gerekçe: PDP `#reviews` “Verified customer reviews. 4.9 / 1,331 ratings · Ziizi”. REST `site-reviews/v1`. Reviews ailesi yok. Observation yazılmadı.  
Örnekler: https://novoslabs.com/product/novos-core/  
Öneri: ertele — Site Reviews eklentisi  
Karar: onay bekliyor

---

ADAY: novoslabs-frontrow-clinicians  
Gerekçe: Home “See clinician endorsements” `/product/novos-core/#frontrow-badge`. PDP `#clinician-reviews` testimonial observation’a bağlandı; widget Frontrow izi.  
Örnekler: https://novoslabs.com/ · https://novoslabs.com/product/novos-core/  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: novoslabs-reamaze-faq  
Gerekçe: `/faq/` → `/frequently-asked-questions/` Reamaze help archive (“Welcome to the NOVOS Help Site”). REST `reamaze/v1`. Home/PDP native `#faq` ayrı observation.  
Örnekler: https://novoslabs.com/faq/ · https://novoslabs.com/frequently-asked-questions/  
Öneri: ertele — üçüncü parti helpdesk  
Karar: onay bekliyor

---

ADAY: novoslabs-learn-subdomain  
Gerekçe: Mega Benefits → `https://learn.novoslabs.com/cardiovascular` (ve energy/skin). Ana vitrin dışı.  
Örnekler: https://learn.novoslabs.com/cardiovascular  
Öneri: kapsam dışı  
Karar: onay bekliyor

---

ADAY: novoslabs-ingredient-library  
Gerekçe: `/ingredients/` tek ~37k px çocuk. Ingredient encyclopedia. `page-content-main` zorlanmadı (ölçek).  
Örnekler: https://novoslabs.com/ingredients/  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: novoslabs-scientists-press-evidence  
Gerekçe: `/scientists/`, `/press/` (Customer Spotlight), `/scientific-evidence-behind-novos/` uzun editorial. About + PDP scientists observation var.  
Örnekler: https://novoslabs.com/scientists/ · https://novoslabs.com/press/ · https://novoslabs.com/scientific-evidence-behind-novos/  
Öneri: ertele — aynı editorial aile  
Karar: onay bekliyor

---

ADAY: novoslabs-regimen-redirect  
Gerekçe: `/regimen/` → blog `longevity-guide-workouts-diets-supplements`.  
Örnekler: https://novoslabs.com/regimen/  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: novoslabs-professionals  
Gerekçe: Header “Healthcare Providers” `/professionals/`. B2B landing; gezilmedi.  
Örnekler: https://novoslabs.com/professionals/  
Öneri: ertele  
Karar: onay bekliyor

---

ADAY: novoslabs-my-account  
Gerekçe: `/my-account/` Woo hesap (PII). robots Disallow.  
Örnekler: https://novoslabs.com/my-account/  
Öneri: yapılmayacak — PII  
Karar: onay bekliyor

---

ADAY: novoslabs-klaviyo-10-off  
Gerekçe: Zamanlı “Get 10% off your first month’s subscription” modal (email + Yes, I Want In). Home comparison / protocol / scientists / clinicians / servings / FAQ / CTA / footer / menu-static-1440 karelerini örttü. Recapture sonrası da durdu. Form doldurulmadı (PII).  
Örnekler: https://novoslabs.com/  
Öneri: leftover — Klaviyo popup  
Karar: onay bekliyor

---

ADAY: novoslabs-cookie-notice  
Gerekçe: Cookie Notice eklentisi (`cookie-notice/v1`). Overlay dismiss. Şema değil.  
Örnekler: https://novoslabs.com/  
Öneri: ignore  
Karar: onay bekliyor

---

ADAY: novoslabs-userway  
Gerekçe: UserWay a11y widget (“Enable accessibility for low vision”). REST `userway/v1`.  
Örnekler: https://novoslabs.com/product/novos-core/  
Öneri: ignore  
Karar: onay bekliyor

---

ADAY: novoslabs-reamaze-chat  
Gerekçe: Sağ alt siyah daire chat launcher (Reamaze). Help archive ayrı leftover. Widget tıklanmadı.  
Örnekler: https://novoslabs.com/  
Öneri: ignore  
Karar: onay bekliyor

---

ADAY: novoslabs-faq-accordion-open  
Gerekçe: Home + PDP `#faq` `details.nv-faq__item` — 2 interact denemesi. Changed karelerde tüm sorular hâlâ `+`; açık panel yok. Home 768/1440 changed Klaviyo örtüsü.  
Örnekler: https://novoslabs.com/ · https://novoslabs.com/product/novos-core/  
Öneri: leftover — accordion-open doğrulanamadı  
Karar: onay bekliyor

---

ADAY: novoslabs-menu-drawer-375  
Gerekçe: `button.nv-nav__toggle` 375’te 2 deneme; open kare hâlâ hero. 768 open WORKS (X + Shop… + Shop now / Product Finder).  
Örnekler: https://novoslabs.com/  
Öneri: leftover — 375 menü listesi boyanmadı  
Karar: onay bekliyor

---

ADAY: novoslabs-search-375  
Gerekçe: Jetpack overlay 375 initial kare hero; input `#nvSearchInput` hidden (timeout). 768/1440 initial + `core` (334 results) WORKS.  
Örnekler: https://novoslabs.com/  
Öneri: leftover — 375 overlay  
Karar: onay bekliyor
