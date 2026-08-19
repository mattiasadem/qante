# Industries (Endüstri)

Viewer facet for the official **ikas Theme Marketplace** industry chips.  
This is a **kaynak → industry** map. SCHEMA `kategori` (navigation / hero / promo) is a different dimension.

*Verified chips:* [themes.ikas.com](https://themes.ikas.com/) Filter · 2026-08-19  
*Param:* `endustri` (comma-separated, same as other facets)  
*UI label:* Endüstri  
*Untagged token:* `—`

Code: `viewer/lib/industries.mjs` (consumed by inventory + facets). Observation JSON is not rewritten.

## Closed list

Do not invent extra categories, rename, or translate:

1. Art & Handcraft
2. Beauty & Health
3. Books, Music & Video
4. Electronics & Software
5. Fashion & Clothing
6. Flowers & Gifts
7. Food & Beverage
8. Hardware & Automotive
9. Home & Furniture
10. Jewelry & Accessories
11. Pet Care
12. Sports & Activities

A store may belong to **more than one** industry (ikas filters work that way).

## ikas official 12 — marketplace `categoryIds`

Read from the Theme Marketplace listing HTML (astro-island theme props), not inferred.

| Kaynak | Industries | Evidence |
|---|---|---|
| ali | Sports & Activities, Fashion & Clothing, Electronics & Software, Food & Beverage | official tags |
| alina | Hardware & Automotive, Electronics & Software | official tags |
| asil | Fashion & Clothing, Jewelry & Accessories, Home & Furniture, Beauty & Health, Art & Handcraft | official tags |
| ata | Beauty & Health, Fashion & Clothing, Flowers & Gifts, Jewelry & Accessories, Home & Furniture | official tags |
| ediz-ege | Jewelry & Accessories, Beauty & Health | official tags |
| eylul | Home & Furniture, Fashion & Clothing, Hardware & Automotive, Sports & Activities | official tags |
| kerem | Fashion & Clothing, Sports & Activities, Electronics & Software | official tags |
| kumsal | Fashion & Clothing, Home & Furniture, Art & Handcraft, Books, Music & Video | official tags |
| market | Flowers & Gifts, Food & Beverage | official tags |
| selim | Fashion & Clothing, Home & Furniture, Beauty & Health, Flowers & Gifts, Art & Handcraft | official tags |
| serel | Home & Furniture, Pet Care, Art & Handcraft, Jewelry & Accessories, Fashion & Clothing | official tags |
| sumru | Art & Handcraft | official tags |

## Live DTC brands

Mapped by what they sell (live store / leftover catalog). Not Theme Store preset names.

| Kaynak | Industries | Evidence |
|---|---|---|
| amberjack | Fashion & Clothing, Sports & Activities | The Court footwear |
| atoms | Fashion & Clothing | sneakers + crew socks |
| bachans | Food & Beverage | Japanese BBQ sauce |
| bandit | Fashion & Clothing, Sports & Activities | running apparel |
| beardbrand | Beauty & Health | beard / hair / body |
| bleame | Beauty & Health | crystal hair eraser |
| boka | Beauty & Health | toothpaste / kids oral care |
| brez | Food & Beverage | functional drinks |
| buckmason | Fashion & Clothing | menswear |
| chamberlaincoffee | Food & Beverage | coffee + matcha |
| chomps | Food & Beverage | meat sticks |
| cometeer | Food & Beverage | flash-frozen coffee |
| comradsocks | Fashion & Clothing, Sports & Activities | compression socks |
| cuts | Fashion & Clothing, Sports & Activities | athletic apparel |
| cymbiotika | Beauty & Health | supplements |
| davidprotein | Food & Beverage | protein bars |
| desoi | Food & Beverage | non-alcoholic aperitif |
| dieux | Beauty & Health | skincare |
| drinktrip | Food & Beverage | alcohol-alternative drinks |
| dukecannon | Beauty & Health | men's soap / grooming |
| fellow | Home & Furniture, Food & Beverage | coffee hardware + coffee |
| flamingoestate | Food & Beverage, Beauty & Health, Home & Furniture | farm organics, soaps, candles |
| flybyjing | Food & Beverage | chili crisp / sauces |
| functionhealth | Beauty & Health | 160+ lab tests |
| ghia | Food & Beverage | aperitif |
| graza | Food & Beverage | extra virgin olive oil |
| greatjonesgoods | Home & Furniture | cookware |
| gruns | Beauty & Health | daily gummy packs |
| hellobubble | Beauty & Health | glow / skincare |
| herocosmetics | Beauty & Health | makeup / skin school |
| hexclad | Home & Furniture | hybrid cookware |
| hiyo | Food & Beverage | no-booze drinks |
| im8health | Beauty & Health | daily supplement drink |
| javy | Food & Beverage | protein coffee |
| kettleandfire | Food & Beverage | bone broth |
| kizik | Fashion & Clothing | hands-free shoes |
| lemme | Beauty & Health | NAD+ / aging supplements |
| madeincookware | Home & Furniture | cookware |
| magicmind | Beauty & Health, Food & Beverage | mental-performance shot |
| magicspoon | Food & Beverage | high-protein cereal |
| materialkitchen | Home & Furniture | kitchen tools |
| moom | Beauty & Health, Food & Beverage | mama water / tea |
| moonjuice | Beauty & Health | women's supplements |
| necessaire | Beauty & Health | bodycare |
| novoslabs | Beauty & Health | longevity supplements |
| obvi | Beauty & Health | collagen |
| omsom | Food & Beverage | sauces |
| onceuponafarm | Food & Beverage | organic kids' snacks |
| onnit | Beauty & Health, Sports & Activities | NMN / creatine + fitness brand |
| pamos | Food & Beverage | cannabis spirit |
| partakefoods | Food & Beverage | cookies |
| primalqueen | Beauty & Health | hormone / energy supplements |
| representclo | Fashion & Clothing | streetwear |
| rhone | Fashion & Clothing, Sports & Activities | athletic apparel |
| shinesty | Fashion & Clothing | novelty apparel |
| starface | Beauty & Health | acne patches |
| takearecess | Food & Beverage, Beauty & Health | calm drinks & powders |
| tenthousand | Fashion & Clothing, Sports & Activities | training shorts |
| topicals | Beauty & Health | skincare |
| trueclassictees | Fashion & Clothing | tees |
| vegamour | Beauty & Health | hair wellness |
| vessi | Fashion & Clothing | waterproof shoes |
| vollebak | Fashion & Clothing, Sports & Activities | technical outdoor clothing |
| waterboy | Food & Beverage | electrolyte packets |
| westernrise | Fashion & Clothing | travel clothing (password store; known brand) |
| xeroshoes | Fashion & Clothing, Sports & Activities | barefoot shoes |

## Official Shopify theme demos

Mapped from the **walked demo catalog** or an obvious official preset vertical. Generic first-party demos stay untagged (see Awaiting).

| Kaynak | Industries | Evidence |
|---|---|---|
| atelier | Fashion & Clothing | Horizon “Elements of Style” apparel |
| atlas | Electronics & Software | devices / audio / accessories |
| awaken | Beauty & Health | Essence Aura fragrance copy |
| be-yours | Home & Furniture | roomscapes / plant drop |
| blockshop | Beauty & Health | official Beauty preset (cleanse / tone / moisturize) |
| borders | Fashion & Clothing | puffer / crewneck catalog |
| bricks | Fashion & Clothing | women & men apparel |
| broadcast | Beauty & Health | Bold preset — ashwagandha / mood boosters |
| canopy | Food & Beverage | Natural preset **live catalog** is BBQ / meat / fish / veg (not home/beauty) |
| colorblock | Fashion & Clothing, Home & Furniture | Shop mega: Clothing + Homeware |
| combine | Home & Furniture | planters / glassware |
| concept | Beauty & Health | cosmetics / skincare collections |
| craft | Home & Furniture, Art & Handcraft | Fable ceramics |
| crave | Food & Beverage | pantry / meal starters |
| dawn | Fashion & Clothing | Bags / Shoes nav |
| district | Fashion & Clothing | tees / lookbook |
| dwell | Home & Furniture | Bedding / Bath / Decor |
| eclipse | Fashion & Clothing | kids clothing |
| envy | Fashion & Clothing | boho tops / accessories |
| eurus | Food & Beverage | Breath preset — healthy meals (toys leftover, not a chip) |
| expanse | Home & Furniture | official Furniture preset |
| fabric | Fashion & Clothing, Home & Furniture | Womenswear / Menswear / Home |
| flow | Food & Beverage, Beauty & Health | Nourish — plant-powered food |
| heritage | Fashion & Clothing | Shop Men / Women |
| homage | Fashion & Clothing | alpine knitwear |
| horizon | Fashion & Clothing | latest sweater collection |
| hyper | Fashion & Clothing, Beauty & Health, Electronics & Software, Food & Beverage | kaynak-level union of official presets: pillar moda, ceramide beauty, nexvo teknoloji, trove market |
| impact | Electronics & Software | official Sound preset (headphones) |
| impulse | Fashion & Clothing, Beauty & Health | Fashion + Apothecary presets |
| kingdom | Home & Furniture | home / garden / night light |
| local | Food & Beverage, Home & Furniture | Fresh Organic Delivered + Kitchen & Dining |
| maker | Food & Beverage | official Food preset (juices) |
| minion | Electronics & Software | phones / tablets / drones |
| motion | Sports & Activities, Fashion & Clothing | Adventure + Satchel accessories |
| palo-alto | Fashion & Clothing | wardrobe / new arrivals |
| pebble | Fashion & Clothing | Little kids apparel |
| pipeline | Fashion & Clothing | official Fashion preset |
| pitch | Beauty & Health | “Skincare, simplified” |
| prestige | Fashion & Clothing, Beauty & Health, Jewelry & Accessories | Allure beauties + fashion presets + Strass jewelry |
| publisher | Fashion & Clothing, Books, Music & Video | apparel tote + magazine demo |
| purevea | Beauty & Health | lip mask / glow |
| refresh | Beauty & Health | Hair / Body / Face |
| ride | Sports & Activities | surf / team athlete demo |
| rise | Fashion & Clothing | essentials / white hoodie catalog |
| ritual | Fashion & Clothing | tops / fashion-forward panels |
| savor | Food & Beverage | dipping sauces |
| sense | Beauty & Health | Skin / Body / Nail Polish |
| showcase | Home & Furniture | Betty — silicone / spill-proof home |
| sleek | Beauty & Health | “Blend Beauty In You” |
| stack | Sports & Activities | Mass — cardio / indoor cycling bike |
| stiletto | Fashion & Clothing | Vogue apparel (Stevie / Margot) |
| stretch | Fashion & Clothing, Beauty & Health | Snow apparel + Sand skincare |
| studio | Art & Handcraft | Prints / Originals / Art Objects |
| symmetry | Fashion & Clothing, Jewelry & Accessories, Art & Handcraft | Chantilly swim + Amara precious materials + Beatnik handcrafted |
| taiga | Sports & Activities, Fashion & Clothing | Savotta backpacks |
| taste | Food & Beverage | drinks catalog |
| tinker | Home & Furniture | desk / newest arrivals organizers |
| trade | Home & Furniture | towels / robes / pillows / rugs |
| triumph | Fashion & Clothing, Sports & Activities | activewear |
| venue | Fashion & Clothing | Morning — tees / knits / wallet / pullover |
| vessel | Food & Beverage, Home & Furniture | Coffee & Tea / Drinkware / Kitchenware |
| warehouse | Electronics & Software | Metal — headphones / speakers / TVs |
| wonder | Beauty & Health | official Beauty preset |
| woodstock | Electronics & Software | speakers / cellphones |
| zest | Fashion & Clothing | Flairy — tops / bras / shorts / leggings |

## Awaiting user approval

These `kaynak` stay **untagged** (`—`) until someone confirms. Do not block the viewer on them.

| Kaynak | Proposed | Why |
|---|---|---|
| empire | — | Sparse Empire demo is placeholder merch (Super Pen / Oak); no real vertical. |
| highlight | Fashion & Clothing, Home & Furniture, Food & Beverage | One demo mixes sweatshirt/tote, birdhouse, and “Home & food”. Force-fit would lie. |
| origin | — | First-party Origin demo has no nav catalog; generic Dawn-family chrome. |
| spotlight | — | Spotlight demo is generic “creative culture” chrome; no product vertical. |

## Notes

- **Hyper** is one `kaynak` with five official presets (moda / beauty / teknoloji / market). Industry is stored on the store, so the row is the union. Filtering `?endustri=Fashion%20%26%20Clothing` includes all Hyper observations, including ceramide/nexvo/trove.
- **Canopy** Theme Store preset is named Natural; the walked demo sells food. Mapped Food & Beverage from disk, not the preset nickname.
- **Eurus** also merchandises toys; that is not an official chip, so it is not added.
- Schema-only inventory rows (no `kaynak`) count as `—`.
