/* ============================================================
   Machine, be Human — Sections A
   Nav · 1 Opener · 2 Waarom nu · 3 Wat we bouwen · 4 Voor wie
   ============================================================ */

/* ---- small shared chevron / plus icons ---- */
function IconChevron({ className }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
function IconPlus({ className }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

/* ============================== NAV ============================== */
function Nav() {
  const [open, setOpen] = React.useState(false);
  const links = [
    ['#waarom', 'Waarom nu'],
    ['#diensten', 'Diensten'],
    ['#kudde', 'Voor de kudde'],
    ['#team', 'Team'],
    ['#tijdlijn', 'Tijdlijn'],
  ];
  return (
    <header className="nav" id="top">
      <div className="nav__inner">
        <a className="nav__brand" href="#top">
          <img className="nav__mono" src="assets/herd-monogram-coral.png" alt="the HERD" />
          <span className="nav__brandtxt">Machine, <b>be Human</b></span>
        </a>
        <button className="nav__menu-btn" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? 'Sluit' : 'Menu'}
        </button>
        <nav className={`nav__links ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)}>
          {links.map(([href, label]) => (
            <a key={href} href={href} className="nav__link" data-navlink={href}>{label}</a>
          ))}
        </nav>
        <div className="nav__progress" id="navProgress"></div>
      </div>
    </header>
  );
}

/* ============================== 1 — OPENER ============================== */
function Opener({ t }) {
  return (
    <section className="section hero" id="opener" data-screen-label="01 Opener">
      <img className="hero__mono" src="assets/herd-monogram-white.png" alt="" aria-hidden="true" />
      <div className="shell">
        <div className="hero__kicker reveal is-in">
          <span className="hero__chip-dot" aria-hidden="true"></span>
          <span className="hero__chip">Intern · voor de kudde · vóór 18 juni</span>
        </div>

        <h1 className="hero__display reveal is-in" data-d="1">
          <span className="ln">Machine, be Human</span>
          <span className="ln muted">lancering 18 juni</span>
        </h1>

        <div className="hero__sub reveal" data-d="2">
          <p>
            Onze groep krijgt er een vierde label bij. Het heet <span className="mbh-name">Machine, be Human</span> — een
            AI-label dat AI-oplossingen <strong>ontwikkelt en beheert</strong>, gevoed door de klantrelaties van
            Mosquito, Elephant en Raft.
          </p>
          <p>
            Het is geen vervanger van wat jij doet. Het is een aanvulling op wat de groep aankan. Op 18 juni geven we een
            eerste sneak peek aan de buitenwereld — we willen jullie eerder meenemen, zodat je niet voor verrassingen
            komt te staan.
          </p>
          <div className="hero__sign">— Alen, Fabian, Roy, Koen</div>
        </div>

        <div className="hero__tldr reveal" data-d="3">
          <div className="tldr-card">
            <div className="tldr-card__k">Wat het is</div>
            <div className="tldr-card__v">
              Een volwaardige AI agency dat onze klanten helpt in AI adoptie, kennis en implementatie.
              We bouwen oplossingen, we trainen teams, we zorgen dat AI ook echt gebruikt wordt.
            </div>
          </div>
          <div className="tldr-card">
            <div className="tldr-card__k">Wat het niet is</div>
            <div className="tldr-card__v">
              Geen project of initiatief dat we tijdelijk opzetten. Dit gaat ook niet jouw werk vervangen of alleen maar inspelen op efficiëntie.
              MBH is een eigen label met volwaardige zetel en ambities.
            </div>
          </div>
          <div className="tldr-card">
            <div className="tldr-card__k">Wat we van jou vragen</div>
            <div className="tldr-card__v">
              Wees nieuwsgierig. AI zal een basis vormen in alle vakgebieden, dus ook in die van jou.
              Machine, be Human is er ook om jou hierin te faciliteren — met kennis, tools en begeleiding.
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
      </div>
    </section>
  );
}

/* ============================== 2 — WAAROM NU ============================== */
function WaaromNu() {
  const [activeTab, setActiveTab] = React.useState('jou');

  const tabs = {
    jou: {
      label: 'Voor jou',
      left: {
        title: 'Wat moet dit jou kunnen bieden?',
        intro: 'AI is een realiteit waar jij als specialist niet meer omheen kan. Machine, be Human gaat jou helpen om AI onderdeel te maken van jouw werk.',
        paragraph: 'Je kunt meedoen in AI klantprojecten, workshops & trainingen volgen, of een specifiek vraagstuk vanuit je eigen bureau neerleggen bij Machine, be Human. Dit zal jouw ontwikkeling op AI ook in versnelling zetten.'
      },
      right: [
        { title: 'AI Agents voor jouw vakgebied', desc: 'We ontwikkelen agents die jouw werk sneller, makkelijker en beter kunnen maken. Dit ontwikkelen we samen met jouw input.' },
        { title: 'AI Helpdesk', desc: 'Welke tool moet je gebruiken? Op welke manier? Een klant die een kritische vraag stelt over AI? Machine, be Human is jouw vangnet om deze vragen op te vangen en je te ondersteunen.' },
        { title: 'AI Geletterdheid', desc: 'Hoe werken LLM\'s? Wat is de AI Act? Hoe bouw ik een agent? Doordat we meer met AI bezig zijn, gaan we ook steeds betere antwoorden geven. Dit zorgt dat jouw AI geletterdheid groeit — essentieel voor je persoonlijke ontwikkeling.' }
      ]
    },
    klant: {
      label: 'Voor de klant',
      left: {
        title: 'Wat bieden wij jouw organisatie?',
        intro: 'AI is inmiddels een kritische onderwerp voor bijna elke organisatie. Machine, be Human helpt jouw bedrijf AI verantwoord, effectief en mensgericht in te zetten.',
        paragraph: 'Je kunt ons inzetten voor discovery & strategieontwikkeling, het bouwen van AI-oplossingen, of trainingen van je team. Met Machine, be Human krijg je een partner die AI werkelijk laat werken in je organisatie.'
      },
      right: [
        { title: 'AI Strategy & Implementation', desc: 'Je krijgt partners die jouw organisatie helpen AI verantwoord in te zetten. Van discovery tot operationalisering.' },
        { title: 'Custom AI Solutions', desc: 'Maatwerk AI-tools en -agents die passen bij jouw specifieke uitdagingen en processen. Gebouwd in samenwerking met jouw team.' },
        { title: 'AI Adoption Support', desc: 'Implementatie is slechts het begin. We begeleiden je team in het daadwerkelijk gebruik van AI, met trainingen, ondersteuning en governance.' }
      ]
    },
    groep: {
      label: 'Voor The HERD',
      left: {
        title: 'Wat betekent dit voor onze groep?',
        intro: 'Machine, be Human versterkt de gehele groep. Dit label maakt de groep toekomstbestendig, versterkt klantrelaties en positioneert de groep als innovatief.',
        paragraph: 'Klanten kunnen nu volledig binnen de groep geholpen worden met hun AI-vragen. Elk label — Mosquito, Elephant, Raft, Verkenners — biedt méér waarde doordat Machine, be Human beschikbaar is. Dit maakt de groep sterker.'
      },
      right: [
        { title: 'Versterkte Klantrelaties', desc: 'Klanten hebben één plek binnen de groep voor al hun AI-vragen. Dit maakt de relatie dieper en de penetratie hoger.' },
        { title: 'Differentiatie in de Markt', desc: 'Terwijl anderen "AI-first" roepen, laten we zien dat we het écht kunnen. Dit onderscheidt ons van competitors.' },
        { title: 'Groei & Toekomstbestendigheid', desc: 'Machine, be Human is een nieuw inkomstenkanaal en zorgt dat de groep relevant blijft — in de markt en voor haar mensen.' }
      ]
    }
  };

  const current = tabs[activeTab];

  return (
    <section className="section" id="waarom" data-screen-label="02 Waarom nu">
      <div className="shell">
        <div className="reveal">
          <div className="eyebrow"><span className="eyebrow__num">02</span><span className="eyebrow__bar"></span>Waarom dit, waarom nu</div>
          <h2 className="sec-title">Machine, be Human werkt voor drie doelgroepen.</h2>
          <p className="sec-lead">
            Dit label biedt iets voor jou persoonlijk, voor onze klanten, en voor de groep als geheel.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="tab-buttons reveal" data-d="1">
          {Object.entries(tabs).map(([key, tab]) => (
            <button
              key={key}
              className={`tab-btn ${activeTab === key ? 'is-active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="tab-content reveal" data-d="2">
          <div className="tab-content__left">
            <h3>{current.left.title}</h3>
            <p className="tab-content__intro">{current.left.intro}</p>
            <p>{current.left.paragraph}</p>
          </div>

          <div className="tab-content__right">
            <div className="feature-list">
              {current.right.map((feature, i) => (
                <div key={i} className="feature-item">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== 3 — WAT WE BOUWEN ============================== */
function WatWeBouwen() {
  const [open, setOpen] = React.useState(false);
  const innerRef = React.useRef(null);
  const [h, setH] = React.useState(0);
  React.useEffect(() => { if (innerRef.current) setH(open ? innerRef.current.scrollHeight : 0); }, [open]);
  return (
    <section className="section section--panel" id="wat" data-screen-label="03 Wat we bouwen">
      <div className="shell">
        <div className="reveal">
          <div className="eyebrow"><span className="eyebrow__num">03</span><span className="eyebrow__bar"></span>Wat we bouwen</div>
        </div>
        <div className="name-block">
          <div className="reveal" data-d="1">
            <p className="name-mark">Machine,<br/><em>be Human.</em></p>
            <p className="name-note">De definitieve naam. Vastgesteld — dit is hoe we naar buiten gaan.</p>
          </div>
          <div className="reveal" data-d="2">
            <div className="prose">
              <p>
                De naam is ook het kompas. Wij geloven dat AI zijn waarde bewijst door mensen <strong>dichter bij elkaar
                te brengen</strong>, niet verder van elkaar af. Repetitieve taken weg, meer ruimte voor de gesprekken en
                het werk dat er echt toe doet.
              </p>
              <p>De technologie is het middel. <strong>Meer menselijk contact is het doel.</strong></p>
            </div>

            <div className={`disclosure ${open ? 'is-open' : ''}`} style={{ marginTop: '28px' }}>
              <button className="disclosure__btn" onClick={() => setOpen(o => !o)} aria-expanded={open}>
                <span>Waarom déze naam?</span>
                <span className="disclosure__icon"><IconPlus /></span>
              </button>
              <div className="disclosure__panel" style={{ maxHeight: h + 'px' }}>
                <div className="disclosure__panel-inner" ref={innerRef}>
                  <p>
                    "Machine, be Human" is een opdracht aan de techniek, niet aan de mens. We draaien de gangbare logica
                    om: niet de mens die zich aanpast aan de machine, maar de machine die het menselijke werk teruggeeft.
                  </p>
                  <p>
                    Dat is geen marketing-zin. Het is hoe we onze diensten inrichten en hoe we keuzes maken over wat we
                    wel en niet doen. Een dienst die mensen verder van elkaar af zet, bouwen we niet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== 4 — VOOR WIE moved to sections-b (EntryPoints) ============================== */

Object.assign(window, { IconChevron, IconPlus, Nav, Opener, WaaromNu, WatWeBouwen });
