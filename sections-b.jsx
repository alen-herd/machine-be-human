/* ============================================================
   Machine, be Human — Sections B
   4 Waarom wij (positionering) · 5 Entry points · 6 Marktbehoeften + diensten · 7 Wat het oplevert
   ============================================================ */

/* ============================== 4 — ONZE POSITIE (MATRIX) ============================== */
function PositieMatrix() {
  const competitors = [
    { name: 'MBH', x: 72, y: 72, color: 'coral', size: 'large' },
    { name: 'Accenture / McKinsey', x: 75, y: 20, color: 'text-3', size: 'small' },
    { name: 'Quickwin tools (ChatGPT plugins)', x: 25, y: 15, color: 'text-3', size: 'small' },
    { name: 'Regional agencies (traditioneel)', x: 20, y: 65, color: 'text-3', size: 'small' },
  ];

  return (
    <section className="section section--panel" id="positie" data-screen-label="04 Onze positie">
      <div className="shell">
        <div className="reveal">
          <div className="eyebrow"><span className="eyebrow__num">04</span><span className="eyebrow__bar"></span>Onze positie</div>
          <h2 className="sec-title">Waar we staan. Waarom we anders zijn.</h2>
          <p className="sec-lead">
            De markt vol aanbieders — van techgericht tot regionaal. MBH positioneert zich als mensgerichte, internationale partner.
          </p>
        </div>

        <div className="matrix-container reveal" data-d="1">
          <svg className="matrix-chart" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            {/* Grid lines */}
            <line x1="50" y1="5" x2="50" y2="95" stroke="var(--mbh-hair)" strokeWidth="0.5" />
            <line x1="5" y1="50" x2="95" y2="50" stroke="var(--mbh-hair)" strokeWidth="0.5" />

            {/* Axis labels */}
            <text x="95" y="48" fontSize="3.5" fill="var(--mbh-text-3)" textAnchor="end">Mensgericht</text>
            <text x="10" y="48" fontSize="3.5" fill="var(--mbh-text-3)" textAnchor="start">Techniek-gericht</text>
            <text x="52" y="8" fontSize="3.5" fill="var(--mbh-text-3)" textAnchor="start">Internationaal</text>
            <text x="52" y="97" fontSize="3.5" fill="var(--mbh-text-3)" textAnchor="start">Regionaal</text>

            {/* Competitors */}
            {competitors.map((comp, i) => {
              const radius = comp.size === 'large' ? 4 : 2.2;
              const fillColor = comp.color === 'coral' ? 'var(--mbh-coral)' : 'var(--mbh-text-3)';
              return (
                <g key={i}>
                  <circle cx={comp.x} cy={comp.y} r={radius} fill={fillColor} opacity={comp.color === 'coral' ? 1 : 0.4} />
                  {comp.color === 'coral' && (
                    <text x={comp.x} y={comp.y + 8} fontSize="2.8" fill="var(--mbh-coral)" fontWeight="bold" textAnchor="middle">
                      {comp.name}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Legend / Explanation */}
          <div className="matrix-legend">
            <div className="matrix-legend__item reveal" data-d="1">
              <span className="matrix-legend__dot" style={{ background: 'var(--mbh-coral)' }}></span>
              <div>
                <strong>MBH</strong>
                <p>Mensgericht + Internationaal = sterke partner voor groepsklanten</p>
              </div>
            </div>
          </div>
        </div>

        {/* Positioning pillars below matrix */}
        <div className="positioning-cards reveal" data-d="2">
          {[
            {
              icon: <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />,
              title: 'Onderdeel van de groep',
              body: 'Geen eendagsvlieg. MBH staat op het fundament van Mosquito, Elephant, Raft en de Verkenners — met eigen entiteit, budget en MD.'
            },
            {
              icon: <path d="M12 2a5 5 0 015 5c0 2-1 3-2 4s-1 2-1 3H10c0-1 0-2-1-3s-2-2-2-4a5 5 0 015-5zM9 21h6M10 18h4" />,
              title: 'Mensgericht, niet tool-gericht',
              body: 'We beginnen bij de mens en het werk, niet bij de tool. AI is het middel; menselijk contact is het doel.'
            },
            {
              icon: <path d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3" />,
              title: 'Adoptie, niet alleen implementatie',
              body: 'De meeste AI-trajecten stranden ná oplevering. Wij blijven: met beleid, begeleiding en workshops.'
            },
          ].map((c, i) => (
            <article key={i} className="pos-card reveal" data-d={i + 1}>
              <div className="pos-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
              </div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== 5 — HOE HET WERKT (FLOW + FAQ) ============================== */
function HoeHetWerkt() {
  const [openQ, setOpenQ] = React.useState(null);
  const faqs = [
    {
      q: 'Gaat mijn klant nu naar MBH in plaats van naar ons?',
      a: 'Nee. De klant blijft bij jouw bureau. MBH is de specialist die jij inzet — net als je any other expert. Jij behoudt de relatie, jij voert uit, jij factuurt.'
    },
    {
      q: 'Waarom zou mijn bureau hiermee willen werken?',
      a: 'Omdat je sterker aan tafel zit, omdat je omzet genereert zonder zelf AI-expert te moeten zijn, en omdat het werk beter wordt. MBH haalt repetitief werk eraf, jij concentreert je op strategie en relatie.'
    },
    {
      q: 'Hoe verdient MBH geld als het allemaal via bureaus gaat?',
      a: 'MBH werft ook zelf. Bureaus zijn sterke entry points, maar niet de enige weg. MBH bouwt een eigen positionering, content en outreach — klanten kunnen rechtstreeks binnenkomen.'
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
      num: '01', title: 'AI Consultancy & Discovery',
      body: 'Het startpunt voor vrijwel elke klant: in kaart brengen waar de organisatie staat en waar AI echt waarde toevoegt.',
      items: ['Discovery — scan van de organisatie', 'AI Maturity Scan', 'AI Act Scan', 'AI-beleid & guidelines']
    },
    {
      num: '02', title: 'AI Agents — “Jetpacks”',
      body: 'Geconfigureerde AI-agents per afdeling of functie. Klaar voor gebruik, afgestemd op de rol — geconfigureerd en onderhouden door MBH.',
      items: ['Per afdeling of functie', 'Configuratie en onderhoud door MBH', 'Bijv. copy, performance, development, strategie']
    },
    {
      num: '03', title: 'Custom Implementaties',
      body: 'Maatwerk voor wat niet uit de plank komt: LLM-inrichting, customization en koppelingen die wél op de organisatie passen.',
      items: ['LLM-inrichting & customization', 'Integraties op maat', 'Gebouwd bovenop de discovery']
    },
    {
      num: '04', title: 'AI Workshops & Trainingen',
      body: 'Kennis overdragen en drempels verlagen — onmisbaar om sceptici te overtuigen en adoptie op gang te brengen.',
      items: ['Incompany', 'Open inschrijving', 'Verdiepingssessies']
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
          <p>Een omgeving waarin de klant kan zien hoe hun AI-adoptie en -gebruik eruitzien — inzicht in wat AI de organisatie oplevert.</p>
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

Object.assign(window, { PositieMatrix, HoeHetWerkt, Diensten, WatHetOplevert });
