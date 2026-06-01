# Machine, be Human — interne microsite

Een interne scroll-microsite voor medewerkers van The HERD Group, ter introductie van het AI-label **Machine, be Human (MBH)**. Donker "launch"-thema op de HERD-huisstijl (Rubik, navy + koraal).

> ⚠️ **Intern.** Niet extern delen vóór 18 juni. De pagina staat op `noindex,nofollow`, maar afscherming gebeurt verder via een onvindbare URL — deel de link alleen binnen de groep.

---

## 1. Bestanden — waar zit wat

| Bestand | Inhoud |
|---|---|
| `Machine, be Human.html` | Hoofdbestand. Laadt alles, regelt scroll-animatie, nav en het Tweaks-paneel. Open dit. |
| `mbh.css` | Alle styling (donker thema bovenop de HERD-tokens). |
| `colors_and_type.css` | HERD-merk-tokens (kleuren, Rubik-fonts). Niet aanpassen. |
| `sections-a.jsx` | **Sectie 1–4**: opener · waarom nu · wat we bouwen · voor wie. |
| `sections-b.jsx` | **Sectie 5–7**: hoe het werkt (entry points + diensten) · eigen eerste klant · voor jou (tabs). |
| `sections-c.jsx` | **Sectie 8–12 + footer**: team · serieus · tijdlijn · klanten (kopieer-zin) · open vragen + ask. |
| `tweaks-panel.jsx` | Het in-pagina Tweaks-paneel (zie §3). |
| `image-slot.js` | Maakt de foto-vakken bij het team sleepbaar. |
| `fonts/`, `assets/` | Rubik-fonts en HERD-logo's. |

**De content per sectie zit in het JSX-bestand dat erbij hoort.** Wil je tekst van sectie 9 aanpassen? Open `sections-c.jsx`, zoek op `function Serieus`. De koppen, alinea's en lijsten staan daar als gewone tekst — pas ze aan en sla op.

---

## 2. Tekst aanpassen — kort

1. Open het juiste `sections-*.jsx`-bestand (zie tabel hierboven).
2. Zoek de functie van de sectie (`Opener`, `WaaromNu`, `HoeHetWerkt`, `VoorJou`, `WieRunt`, `Tijdlijn`, …).
3. Pas de tekst tussen de tags aan. Laat de tags (`<p>`, `<h2>`, `class="…"`) staan.
4. Opslaan en de pagina verversen.

De **entry points** (Mosquito/Elephant/Raft), **diensttegels**, **tijdlijn-stappen** en **open vragen** staan elk als een lijstje (`array`) bovenin hun functie — dat is de makkelijkste plek om iets toe te voegen of te wijzigen.

---

## 3. Snel finetunen zonder code — het Tweaks-paneel

Zet **Tweaks** aan in de werkbalk. Je kunt dan zonder code:

- **Team-variant A / B** wisselen (sectie 8):
  - **B** (standaard) = "team in opbouw", nog niet bevestigd.
  - **A** = toont Bart en Thijs met naam en rol — pas zodra zij bevestigd hebben.
- **Kernzinnen herschrijven**: de zin-voor-klanten (sectie 11), de slotzin van "serieus" (sectie 9) en de kop van de ask (sectie 12).

Wijzigingen blijven bewaard in de browser. Voor definitieve teksten: pas ze ook in de JSX aan (zie §2), zodat ze voor iedereen kloppen.

---

## 4. Teamfoto's toevoegen

Bij het team (sectie 8) zitten **foto-vakken**. Sleep een afbeelding op een vak, of klik om te bladeren. De foto blijft bewaard. Geen foto = nette placeholder met instructie. Er zijn vakken voor Mike, Alen, de directie (groepsfoto), en — in variant A — Bart en Thijs.

---

## 5. ⛳ Open punten — door Alen aan te leveren/bevestigen vóór publicatie

Deze plekken wachten nog op input (uit sectie 9 van de briefing):

1. **Bevestiging Bart & Thijs** → bepaalt team-variant A of B (sectie 8). Nu staat **B** aan.
2. **Invulling AI-geletterdheid faciliteren** (sectie 7, tab 1) — nu een aside met "wordt uitgewerkt door Alen". Vervang door concrete invulling (kennismomenten, tools, trainingsbudget).
3. **Tijdlijn na maand 8** (sectie 10, laatste stap "Daarna") — nu "wordt aangevuld door Alen".
4. **Aanvullende open vragen** (sectie 12) — voeg toe aan de `qs`-lijst in `function OpenEnAsk` in `sections-c.jsx`.
5. **Teamfoto's** (sectie 8) — sleep echte foto's in de vakken.

---

## 6. Publiceren

Statische bundel — werkt op GitHub Pages of elke statische host. Upload de hele map (inclusief `fonts/`, `assets/`, alle `.jsx`/`.css`/`.js`). Geen build-stap, geen login. Voor een echt afgeschermde URL: zet er desgewenst basic-auth voor (buiten deze bundel om).
