# Website MBH structuur verbeterslag

_Started 2026-06-01 13:26 UTC_

---

## User

Het verhaal wat scherper krijgend in de website:

1. MBH gaat ook eigen klanten werven. De huidige bureau's zijn natuurlijk goede entry points, maar zeker niet de enige. New business is dus ook een entry point. Dit zit vooral in sectie 4.

2. Ik mis de 'what's in it for me'. Wat voor voordelen krijgt de AI label voor de medewerker? En voor de huidige bureaus; Elephant, RAFT, MSQT en Verkenners. 

3. Machine, be Human is de definitieve naam. In sectie 3 staat dat we dit uittesten, maar dit is al besloten. 

4. Ik mis de services. En de pijnpunten die we ermee oplossen. Dit past bij sectie 5, maar deze sectie werkt momenteel technisch niet. En heeft een omslachtig verhaal. Focus meer op de marktbehoeften en concrete services zoals we ze nu hebben. 

Pijnpunten:
* Wat doen we nu met AI en wat zouden we kunnen doen? (FOMO effect). Hier leveren we concrete oplossingen voor zoals agents, LLM inrichting en customization, waarbij we altijd starten met een discovery fase (zie mgrt site voor investeerders).
* Ik heb geen zicht op hoe AI gebruikt wordt, of; wat levert AI ons nou eigenlijk op? (geen grip door leiderschap). Hier focussen we ons op het maken van een AI beleid voor de organisatie. Welke tools, op welke manier gebruiken? etc. Ook startend met een discovery.
* AI hebben we geprobeerd, maar dat werkt niet (sceptisch). Deze groep dient eerst overtuigd te worden. Daarvoor bieden we workshops en hebben we cases nodig. 

5. Ik mis de human positionering. Wat maakt ons uniek in de markt? Onderdeel van groep, geen eendagsvlieg vibe, mensgericht in plaats van toolgericht. Helpen organisaties met adoptie, niet alleen met implementatie. 

6. Tijdlijn onderin werkt niet lekker in de interactie. 

7. Haal sectie 7 er toch maar uit. Haal 6 er ook uit.

## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: show_html]_

I've read the full codebase. Let me quickly see the current state of the two sections you flagged as broken (5 and the timeline) before rebuilding.

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: update_todos]_

The scroll keeps resetting in the capture tool, but I have a complete understanding of the code and your feedback. I won't burn more time on screenshots — let me lay out the plan and rebuild.

Here's how I'm interpreting your 7 points and what I'll do:

_[tool: str_replace_edit]_

I have everything I need. Let me execute. Starting with the small fixes in `sections-a.jsx` (nav links + section 3 name is definitive), then I'll rebuild `sections-b.jsx` (positioning, entry points incl. new business, services) and `sections-c.jsx` (timeline).

**Point 3 — name is definitive + nav:**

_[tool: str_replace_edit]_

Now remove the old `VoorWie` from sections-a (I'm rebuilding it as `EntryPoints` in sections-b):

_[tool: write_file]_

Now the full rebuild of `sections-b.jsx` — human positioning (04), entry points with new business (05), and pain-points→services (06), plus WIIFM (07):

_[tool: str_replace_edit]_

Now rebuild the timeline (point 6) as a robust vertical layout — removing the janky horizontal-scroll/click interaction entirely:

_[tool: str_replace_edit]_

Now update the main HTML — the section list and scroll chrome:

_[tool: str_replace_edit]_

Now add the CSS for all the new components and the vertical timeline:

_[tool: update_todos]_

Let me mark the todos done and verify the page loads cleanly:

_[tool: done]_

_[tool: fork_verifier_agent]_

No console errors. Let me fork a verifier to check the new sections render correctly.Klaar. Ik heb de site herzien op al je punten:

1. **New business als entry point** — sectie 5 heet nu "Vier bureaus als entry point. En onze eigen new business." De bureaus zijn entry points, maar een aparte coral-kaart maakt expliciet dat MBH ook zélf werft (eigen positionering, content, events, outreach).

2. **What's in it for me** — nieuwe sectie 7 "Wat het jou en de bureaus oplevert", met twee kolommen: voor de medewerker (als eerste Jetpacks, makkelijker werk, AI-geletterdheid, ruimte om mee te bouwen) en voor Elephant/Raft/Mosquito/Verkenners (sterkere relaties, omzet zonder zelf expert te worden, eigen eerste klant, één centrale AI-kracht).

3. **Naam is definitief** — sectie 3 zegt nu "De definitieve naam. Vastgesteld."

4. **Diensten + pijnpunten** — sectie 6 herbouwd (technisch nu stabiel, geen fragiele accordions). Drie pijnpunten — FOMO, geen grip/leiderschap, sceptisch — elk met de concrete oplossing (agents/LLM-customization, AI-beleid, workshops+cases), een discovery-band die benadrukt dat we altijd met discovery starten, en daaronder de vier concrete diensten + MGRT Dashboard + retainer.

5. **Human-positionering** — nieuwe sectie 4 "Onze positie": onderdeel van de groep (geen eendagsvlieg), mensgericht i.p.v. tool-gericht, adoptie i.p.v. alleen implementatie.

6. **Tijdlijn** — vervangen door een rustige verticale tijdlijn waarin alle stappen direct zichtbaar zijn (geen horizontaal scrollen/klikken meer).

7. **Secties 6 en 7 verwijderd** ("Eigen eerste klant" en de "Voor jou"-tabs) — hun sterke punten zijn opgenomen in de nieuwe WIIFM-sectie.

Eén keuze om te bevestigen: ik heb de **Verkenners** als vierde bureau-entry point toegevoegd naast Mosquito, Elephant en Raft — zeg het als je die eruit wilt. De verifier checkt nu nog even de rendering; ik laat het weten als er iets uitkomt.

## User

Verifier agent check completed

## Assistant

De verifier bevestigt dat alles correct rendert — alle nieuwe en herziene secties zijn zichtbaar, geen overlap of resten van de oude secties. De site staat klaar.

## User

Save this design as a PDF: Machine, be Human.html

## Assistant

I'll create a print-ready version. The site is a long-scroll React page with accordions/scroll-reveals, so I need to force all reveals visible, neutralize animations, and ensure section page breaks.

Let me copy the file first, then adapt it for print.

_[tool: copy_files]_

_[tool: str_replace_edit]_

Now let me add print styles and the auto-print script to the print copy:

_[tool: str_replace_edit]_

Now add the auto-print script that waits for fonts, render, and a safety delay:Let me verify the print file loads cleanly before triggering print:

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: open_for_print]_

Clean — only the standard Babel notice. Opening the print dialog now:De print-versie is klaar en de printdialoog zou moeten openen — kies daar **"Opslaan als PDF"**. Opent het niet vanzelf? [Open de printversie hier](https://89a87da1-2d5c-4feb-8839-6ae73430e5b1.claudeusercontent.com/v1/design/projects/89a87da1-2d5c-4feb-8839-6ae73430e5b1/serve/Machine%2C%20be%20Human-print.html?t=fb66e5626344c5ce7f18a26d8f4b8e5cf0a0d94c63a23b59fe998abd104a8a19.cea2fc3d-b9b6-4f62-879b-48f54e7d838c.5d86da41-e7a6-4c38-830e-86afc884c5a6.1780323802&direct=1) en druk op Cmd/Ctrl+P.

## User

Bij 8 - Wie het runt:
* Het team zoals we dit naar buiten willen communiceren. Daar moet dit om gaan. Zodat de medewerkers zien dat we hebben nagedacht over hoe we ons gaan profileren. We gebruiken ons huidige teamleden om dit goed uit te zetten, Mike is de motor in het begin. 

* Team:
1. Mike - Managing Director
2. Alen - AI Consultant
3. Bart - AI Engineer
4. Thijs - AI Engineer
5. Koen - Creative Director
6. Lilian - Office manager
7. Tessa - AI Creator

Maak even placeholders...

9 - Sectie aanpassingen:
"hoe we dit serieus nemen" aanpassen naar "Dit staat er bij lancering"

Titel "Geen logo en een launch event. Een fundament." aanpassen naar "We zorgen direct voor een volwaardige start"

Geef vervolgens iedere blok net even iets meer context waarom het bijdraagt aan het geheel. Met 1 of twee zinnen eronder. 

Afsluitende zin "Dit is geen experiment. Geen hobbyproject. Geen “we kijken hoe het loopt”." verwijderen. 

Zet het team blok hieronder.

## Assistant

_[tool: str_replace_edit]_

Helder. Ik ga sectie 8 en 9 aanpassen:
- **Team (sectie 8 → wordt 9):** vervang door het definitieve 7-koppige team met foto-placeholders, Mike als motor.
- **Sectie 9 → wordt 8 "Dit staat er bij lancering":** nieuwe eyebrow + titel, context onder elk blok, slotzin weg.
- **Volgorde:** team-blok onder het launch-blok.

Let me rebuild both in `sections-c.jsx`:

_[tool: str_replace_edit]_

Now update the main HTML — swap order (launch block above team), drop the now-unused tweaks, and fix scroll chrome:

_[tool: str_replace_edit]_

Now update the CSS for the new commit-card structure, the featured team card, and the team footnote:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now style the featured Mike card (full-width, horizontal) and add the team footnote:

_[tool: done]_

_[tool: fork_verifier_agent]_

No errors. Let me have the verifier check the two changed sections visually:Aangepast. Sectie 8 en 9 zijn omgewisseld en herzien:

- **Sectie 8 "Dit staat er bij lancering"** — nieuwe eyebrow + titel "We zorgen direct voor een volwaardige start", elk van de 9 blokken heeft nu 1–2 zinnen context waarom het bijdraagt, en de slotzin "Dit is geen experiment…" is verwijderd.
- **Sectie 9 "Wie het runt"** — nu onder het launch-blok, met het definitieve team: Mike als uitgelichte motor (MD) bovenaan, gevolgd door Alen, Bart, Thijs, Koen, Lilian en Tessa — allemaal met foto-placeholders. De tekst benadrukt dat dit het team is zoals jullie je naar buiten profileren.

De A/B-team-tweak en de oude slotzin-tweak zijn weg; de Tweaks-knoppen voor de klantzin en de ask-kop blijven. De verifier checkt nu de weergave — ik laat het weten als er iets uitkomt. Wil je dat ik daarna de PDF opnieuw genereer?

## User

Verifier agent check completed

## Assistant

De verifier bevestigt dat beide secties correct renderen — sectie 8 staat boven sectie 9, alle commit-blokken tonen titel + context, de slotzin is weg, en het team toont Mike uitgelicht met de zes teamleden eronder. Alles staat goed. Laat maar weten als je de PDF wilt bijwerken of nog iets wilt aanpassen.

## User

Top! 

Laatste tweaks:
* Mike van den Burg verdient een korte introductie. Sluit zich aan als managing director, met ervaring bij o.a. Bitfactory, Dept en Redkiwi. Start half juni. 
* Benadruk nog even de nuance dat het team ook een uithangbord is. Deze mensen verdwijnen niet uit de huidige teams, maar doen mee in projecten van MBH. 
* Footer: Bij vragen kunnen ze terecht bij Alen & Koen (niet fabian dus).

## Assistant

I'll apply these three tweaks.

_[tool: read_file]_

_[tool: str_replace_edit]_

Now the footer — Alen & Koen instead of Fabian:

_[tool: grep]_

_[tool: str_replace_edit]_

Footer says "Alen of Fabian". I'll update it to Alen & Koen, and align the matching "questions routing" line in section 11 (both are where-to-go-with-questions). The directors' signatures stay as-is.

_[tool: done]_

Klaar — drie laatste tweaks doorgevoerd:

- **Mike** heeft nu een korte introductie: sluit half juni aan als Managing Director, motor in de opstartfase, met ervaring bij o.a. Bitfactory, Dept en Redkiwi.
- **Team als uithangbord:** de lead benadrukt nu dat deze mensen níet uit hun huidige teams verdwijnen, maar meedoen in de projecten van MBH.
- **Footer:** vragen gaan nu naar Alen & Koen (Fabian eruit) — ook de doorverwijsregel in sectie 11 aangepast voor consistentie.

Geen console-fouten. Dit waren tekstuele tweaks, dus ik laat de verifier achterwege. Wil je dat ik de PDF opnieuw genereer met de laatste versie?

## User

Ten slotte:
Licht de 4 diensten visueel iets harder uit. De titels verdienen misschien iets groter te zijn. De MGRT dashboard is het AI Dashboard (Fase 2). Een omgeving waarin de klant kan zien hoe hun AI adoptie en gebruik eruit ziet.

## Assistant

_[tool: str_replace_edit]_

Two final touches: stronger visual treatment for the 4 service cards (bigger titles + bolder numbers), and updating the dashboard note. First the dashboard copy:Now beef up the service cards visually — bigger bold titles and a large display numeral:

_[tool: str_replace_edit]_

_[tool: done]_

Laatste tweaks doorgevoerd:

- **De 4 diensten** zijn visueel sterker uitgelicht — grote vetgedrukte titels, een fors coral-displaynummer per kaart, ruimere padding, een coral hover-rand en een hairline boven de opsomming.
- **AI Dashboard (Fase 2):** de oude "MGRT Dashboard"-notitie is vervangen door "AI Dashboard · Fase 2" met de nieuwe omschrijving — een omgeving waarin de klant ziet hoe hun AI-adoptie en -gebruik eruitzien.

Geen console-fouten. Wil je dat ik de PDF nu opnieuw genereer met alle laatste wijzigingen?

