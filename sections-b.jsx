/* ============================================================
   Machine, be Human — Sections B
   4 Waarom wij (positionering) · 5 Entry points · 6 Marktbehoeften + diensten · 7 Wat het oplevert
   ============================================================ */

/* ============================== 5 — HOE HET WERKT (FLOW + FAQ) ============================== */
function HoeHetWerkt() {
  const [openQ, setOpenQ] = React.useState(null);
  const faqs = [
    {
      q: 'Gaat mijn klant nu naar MBH in plaats van naar ons?',
      a: 'Alle klanten zijn van de groep, dus daarmee ook van elk label. Of een klant primair naar Machine, be Human gaat, hangt af van de scope van het werk. Dit zal alleen gebeuren als het merendeel van het work daar afnemen — en dan is het voor de klant ook logischer.'
    },
    {
      q: 'Wat levert het mijn bureau op wanneer we een klant naar Machine, be Human verwijzen?',
      a: 'Het gaat erom dat we onze klanten zo goed mogelijk helpen. Wanneer je merkt dat een klant uitdagingen of vragen heeft rondom AI, dan is het krachtig dat je daar als bureau antwoord op hebt. Je versterkt daarmee je relatie en je waarde.'
    },
    {
      q: 'Hoe kan ik een klant doorverwijzen, en wanneer doe ik dit?',
      a: 'Hier werken we nog aan — we zullen concrete herkenningspunten en richtlijnen ontwikkelen. Wanneer onze diensten en proposities concreter worden, delen we die met jullie. Tot die tijd: neem het gerust op in je gesprekken.'
    },
  ];

  return (
    <section className="section" id="entry" data-screen-label="05 Hoe het werkt">
      <div className="shell">
        <div className="reveal">
          <div className="eyebrow"><span className="eyebrow__num">05</span><span className="eyebrow__bar"></span>Hoe het werkt</div>
          <h2 className="sec-title">Bureau + MBH. Dit is de samenwerking.</h2>
          <p className="sec-lead">
            De bureaus signaleren klanten met AI-vragen. MBH mee-onderzoekt en bouwt. Bureau voert uit en behoudt relatie. Simpel.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="flow-diagram reveal" data-d="1">
          <div className="flow-step">
            <div className="flow-step__icon">1</div>
            <div className="flow-step__body">
              <h4>Bureau signaleert</h4>
              <p>Je klant vraagt naar AI of worstelt ermee. Jij signaleert — dat is alles.</p>
            </div>
          </div>

          <div className="flow-arrow" aria-hidden="true">→</div>

          <div className="flow-step">
            <div className="flow-step__icon">2</div>
            <div className="flow-step__body">
              <h4>MBH onderzoekt & bouwt</h4>
              <p>MBH doet discovery, adviseert, implementeert. Bureau ziet voortgang.</p>
            </div>
          </div>

          <div className="flow-arrow" aria-hidden="true">→</div>

          <div className="flow-step">
            <div className="flow-step__icon">3</div>
            <div className="flow-step__body">
              <h4>Bureau voert uit</h4>
              <p>Bureau integreert MBH's oplossing, behoudt klantrelatie, beheert voortaan.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="entry-faq reveal" data-d="2">
          <h3 className="entry-faq__head">Veel gestelde vragen</h3>
          {faqs.map((item, i) => (
            <div key={i} className={`entry-faq__item ${openQ === i ? 'is-open' : ''}`}>
              <button
                className="entry-faq__q"
                onClick={() => setOpenQ(openQ === i ? null : i)}
                aria-expanded={openQ === i}
              >
                {item.q}
                <span className="entry-faq__icon" aria-hidden="true">+</span>
              </button>
              {openQ === i && (
                <div className="entry-faq__a">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== 6 — MARKTBEHOEFTEN + DIENSTEN ============================== */
function Diensten() {
  const pains = [
    {
      mood: 'FOMO',
      quote: '“Wat doen we nú met AI — en wat zouden we eigenlijk kunnen doen?”',
      title: 'Ze willen vooruit, maar weten niet hoe',
      solve: 'We leveren concrete oplossingen: AI-agents, LLM-inrichting en customization. Altijd startend met een discovery, zodat we bouwen wat écht waarde toevoegt.'
    },
    {
      mood: 'Geen grip',
      quote: '“Ik heb geen zicht op hoe AI gebruikt wordt. Wat levert het ons eigenlijk op?”',
      title: 'Leiderschap mist grip en richting',
      solve: 'We maken een helder AI-beleid voor de organisatie: welke tools, op welke manier, met welke kaders. Ook hier beginnen we met een discovery.'
    },
    {
      mood: 'Sceptisch',
      quote: '“AI hebben we geprobeerd. Werkt niet voor ons.”',
      title: 'Eerst overtuigd worden',
      solve: 'Deze groep moet je laten zien dat het wél kan. Daarvoor bieden we workshops en bouwen we aan tastbare cases die het bewijs leveren.'
    },
  ];
  const services = [
    {
      num: '01', title: 'Strategie',
      body: 'Wat moet de mens blijven doen? En wat besteed je uit aan AI? Dat begint niet bij implementeren van agents, maar bij een scherpe discovery. We brengen in kaart wat jouw organisatie doet, hoe AI daar nu in werkt en waar het vooral aan kan bijdragen. Van beleid, tot aan implementatie. Dit is het plan.',
      items: ['Discovery van AI-mogelijkheden', 'In kaart brengen huidige situatie', 'Beleid & implementatieplan']
    },
    {
      num: '02', title: 'Visie & beleid',
      body: 'Hoe wordt de data door AI verwerkt? Welke LLM gebruiken medewerkers? Hoe faciliteert jouw bedrijf dit gebruik? Voldoen we aan wetgeving (AI Act) en hebben we richtlijnen rondom AI gebruik in onze processen? Machine, be Human helpt het leiderschap dit scherp te stellen en uit te rollen in de organisatie.',
      items: ['Data governance & LLM selectie', 'AI Act compliance', 'Richtlijnen voor AI gebruik']
    },
    {
      num: '03', title: 'Implementatie',
      body: 'Welke tool-stack kies je als organisatie en hoe richt je dit in? Machine, be Human helpt je de juiste tools en processen op te zetten zodat je team direct kan starten.',
      items: ['Tool-stack selectie', 'Inrichting & configuratie', 'Technische integratie']
    },
    {
      num: '04', title: 'Jetpacks',
      body: 'Wij zien een jetpack als een versneller voor jouw werk. Denk aan een web-copywriter, een lead qualifier, een offerte-builder. Een jetpack verricht een specifieke taak volgens de richtlijnen van de klant. Iets wat mensen in staat stelt sneller te werken terwijl de kwaliteit hoog blijft.',
      items: ['Task-specifieke AI-agents', 'Per rol of functie', 'Klaar voor direct gebruik']
    },
    {
      num: '05', title: 'Consultancy, support & training',
      body: 'Steeds meer mensen in het bedrijf gebruiken nu AI. Waar lopen ze tegenaan? Wat werkt wel en niet goed? Welke medewerkers tonen weerstand of vinden het lastig? Machine, be Human blijft als partner ondersteuning bieden om de AI adoptie te borgen.',
      items: ['Workshops & trainingen', 'Helpdesk & support', 'Change management']
    },
  ];
  return (
    <section className="section section--panel" id="diensten" data-screen-label="06 Marktbehoeften & diensten">
      <div className="shell">
        <div className="reveal">
          <div className="eyebrow"><span className="eyebrow__num">06</span><span className="eyebrow__bar"></span>Marktbehoefte &amp; diensten</div>
          <h2 className="sec-title">Drie pijnpunten. Concrete oplossingen.</h2>
          <p className="sec-lead">
            We bouwen niet vanuit de techniek, maar vanuit wat organisaties tegenkomen. Dit zijn de drie pijnpunten die
            we het vaakst horen — en wat we ertegenover zetten.
          </p>
        </div>

        <div className="pain-grid">
          {pains.map((p, i) => (
            <article key={i} className="pain-card reveal" data-d={i + 1}>
              <span className="pain-card__mood">{p.mood}</span>
              <p className="pain-card__quote">{p.quote}</p>
              <div className="pain-card__solve">
                <span className="pain-card__solve-k">Wat wij doen</span>
                <p>{p.solve}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="discovery-band reveal" data-d="1">
          <span className="discovery-band__k">Altijd het startpunt</span>
          <p>
            Welk pijnpunt ook: we beginnen met een <strong>discovery</strong>. Eerst begrijpen waar de organisatie staat
            en wat er speelt — daarna pas bouwen. Zo voorkomen we losse experimenten zonder richting.
          </p>
        </div>

        <div className="svc-head reveal">
          <h3>De diensten, concreet</h3>
          <p>Zoals we ze nu aanbieden</p>
        </div>
        <div className="svc2-grid">
          {services.map((s) => (
            <article key={s.num} className="svc2 reveal" data-d="1">
              <div className="svc2__top">
                <span className="svc2__num">{s.num}</span>
                <h4 className="svc2__title">{s.title}</h4>
              </div>
              <p className="svc2__body">{s.body}</p>
              <ul className="svc2__items">
                {s.items.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="dashboard-note reveal">
          <span className="dashboard-note__k">AI Dashboard · Fase 2</span>
          <p>Een omgeving waarin de klant kan zien hoe hun AI-adoptie en -gebruik eruitzien. Inzicht in wat AI de organisatie oplevert, waar medewerkers tegenaan lopen, en waar ondersteuning nodig is. Het dashboard helpt het leiderschap te begrijpen waar trainingen, consultancy en support het meest impact hebben.</p>
        </div>
        <p className="retainer-note reveal">
          Veel klanten nemen meerdere diensten doorlopend af — bijvoorbeeld een Discovery + vier Agents + het Dashboard +
          AI Act-bewaking. <b>Dat heet bij ons een retainer.</b>
        </p>
      </div>
    </section>
  );
}

/* ============================== 7 — WAT HET OPLEVERT (WIIFM) ============================== */
function WatHetOplevert() {
  const jou = [
    ['Als eerste werkende agents', 'Jij krijgt Jetpacks voor je eigen vakgebied — vóór klanten. Niet abstract, onderdeel van het launch-plan.'],
    ['Je werk wordt makkelijker', 'Repetitief werk eruit, meer tijd voor het werk dat er echt toe doet. AI vervangt je niet, het ondersteunt je.'],
    ['AI-geletterdheid', 'Kennismomenten, toegang tot tools en eventueel trainingsbudget — zodat je vertrouwd raakt met wat steeds meer de basis wordt.'],
    ['Ruimte om mee te bouwen', 'Wil je meer? Dan kun je aanhaken bij MBH — nieuwe rol, nieuwe skills, zonder je huidige werk op te geven.'],
  ];
  const bureaus = [
    ['Sterkere klantrelaties', 'Je komt op een nieuw, relevant onderwerp aan tafel — ook bij klanten die je al kent.'],
    ['Omzet zonder AI-expert te worden', 'Niemand in je team hoeft AI-specialist te worden. MBH ontwikkelt en levert; jij signaleert.'],
    ['Je eigen eerste klant', 'De bureaus krijgen zelf Jetpacks. Eten we ons eigen voer, dan werk je sneller en scherper.'],
    ['Eén centrale AI-kracht', 'Geen los experimenteren meer. Gebundelde kennis versnelt Elephant, Raft, Mosquito én de Verkenners.'],
  ];
  return (
    <section className="section" id="kudde" data-screen-label="07 Wat het oplevert">
      <div className="shell">
        <div className="reveal">
          <div className="eyebrow"><span className="eyebrow__num">07</span><span className="eyebrow__bar"></span>What&rsquo;s in it for me</div>
          <h2 className="sec-title">Wat het jou en de bureaus oplevert.</h2>
          <p className="sec-lead">
            MBH is er niet ondanks de groep, maar voor de groep. Dit is concreet wat het oplevert — voor jou persoonlijk,
            en voor Elephant, Raft, Mosquito en de Verkenners.
          </p>
        </div>

        <div className="wiifm-grid">
          <div className="wiifm-col reveal" data-d="1">
            <div className="wiifm-col__head">
              <span className="wiifm-col__k">Voor jou</span>
              <h3>Als medewerker</h3>
            </div>
            <ul className="wiifm-list">
              {jou.map(([t, d], i) => (
                <li key={i}><b>{t}</b><span>{d}</span></li>
              ))}
            </ul>
          </div>

          <div className="wiifm-col reveal" data-d="2">
            <div className="wiifm-col__head">
              <span className="wiifm-col__k">Voor de bureaus</span>
              <h3>Elephant · Raft · Mosquito · Verkenners</h3>
            </div>
            <ul className="wiifm-list">
              {bureaus.map(([t, d], i) => (
                <li key={i}><b>{t}</b><span>{d}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ask-band reveal">
          <div className="ask-band__l">
            <span className="ask-band__k">Wat we van jou vragen</span>
            <p>Eén ding: als een klant met AI worstelt of ernaar vraagt, <strong>signaleer het</strong>. Meer niet. Wij pakken het op.</p>
          </div>
          <div className="ask-band__r">
            <span className="notdo-k">Wat we níet doen</span>
            <p>Jouw werk vervangen. Jouw klanten overnemen. Een aparte club zijn die los van de groep opereert.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HoeHetWerkt, Diensten, WatHetOplevert });
