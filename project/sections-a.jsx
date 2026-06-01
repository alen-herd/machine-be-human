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
          <span className="ln">AI doet wat mensen doen.</span>
          <span className="ln muted">Mensen doen wat AI moet doen.</span>
          <span className="ln" style={{ marginTop: '0.18em' }}>
            Dat moet <span className="hero__strike">andersom</span>.
          </span>
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
            <div className="tldr-card__v">Een AI-label dat diensten ontwikkelt en beheert voor onze klanten.</div>
          </div>
          <div className="tldr-card">
            <div className="tldr-card__k">Wat het niet is</div>
            <div className="tldr-card__v">Geen vervanger van je werk. Geen experiment. Geen losse club.</div>
          </div>
          <div className="tldr-card">
            <div className="tldr-card__k">Wat we van jou vragen</div>
            <div className="tldr-card__v">Signaleer als een klant met AI worstelt. Meer niet. Wij pakken het op.</div>
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
  return (
    <section className="section" id="waarom" data-screen-label="02 Waarom nu">
      <div className="shell">
        <div className="reveal">
          <div className="eyebrow"><span className="eyebrow__num">02</span><span className="eyebrow__bar"></span>Waarom dit, waarom nu</div>
          <h2 className="sec-title">Twee redenen. Eén naar binnen, één naar buiten.</h2>
          <p className="sec-lead">
            Dit komt niet uit de lucht vallen. Er zijn twee heel concrete dingen die we beter willen doen —
            en MBH is hoe we dat aanpakken.
          </p>
        </div>

        <div className="duo">
          <article className="duo-card reveal" data-d="1">
            <span className="duo-card__tag">Naar binnen</span>
            <h3>We werken langs elkaar heen met AI.</h3>
            <div className="prose">
              <p>
                Op dit moment is iedereen binnen de groep op zijn eigen manier met AI bezig. Mensen experimenteren,
                leren, bouwen iets — vaak los van elkaar. We zijn onvoldoende op de hoogte van wat er bij collega's en
                andere labels speelt.
              </p>
              <p>
                Dat moet anders. Door AI in één label te centraliseren <strong>versnellen we elkaar</strong>, in plaats
                van langs elkaar heen te werken.
              </p>
            </div>
          </article>

          <article className="duo-card reveal" data-d="2">
            <span className="duo-card__tag">Naar buiten</span>
            <h3>Het brengt ons anders aan tafel. En vaker.</h3>
            <div className="prose">
              <p>
                Klanten die met AI worstelen krijgen één plek waar ze terechtkunnen. De relatie wordt sterker — ook met
                klanten die al van Elephant, Mosquito of Raft afnemen.
              </p>
              <p>
                Dat versterkt de groep als geheel. En daarmee ook <strong>het werk van alle labels</strong>.
              </p>
            </div>
          </article>
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
