/* ============================================================
   Machine, be Human — Sections C
   8 Wie het runt · 9 Serieus · 10 Tijdlijn · 11 Klanten (copy) · 12 Open + ask · Footer
   ============================================================ */

/* ============================== 8 — DIT STAAT ER BIJ LANCERING ============================== */
function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function Serieus() {
  const commitments = [
    ['Eigen entiteit / BV', null,
      'Een eigen rechtsvorm betekent echt eigenaarschap en verantwoordelijkheid — geen los projectje binnen de groep.'],
    ['Eigen Managing Director', 'Mike, full-time vanaf medio juni',
      'Met Mike fulltime aan het roer heeft MBH vanaf dag één een motor die er elke dag mee bezig is.'],
    ['Eigen budget', 'Voor opstart en de eerste 18 maanden',
      'Geïnvesteerd kapitaal geeft de ruimte om te bouwen zonder dat elke euro zich meteen moet terugverdienen.'],
    ['Eigen locatie', 'In Dordrecht',
      'Een eigen plek geeft het team focus en een thuis om klanten te ontvangen.'],
    ['Hybride aansluiting vanuit Elephant en Raft', 'De mensen die het meest ver zijn met AI',
      'Onze sterkste AI-mensen versterken MBH zonder hun huidige team los te laten — kennis stroomt direct door.'],
    ['Concrete launch-deadline', '18 juni sneak peek · Q3 2026 officiële launch',
      'Een harde datum dwingt scherpte af en maakt het tastbaar, in plaats van "ooit".'],
    ['Top-10 klantenlijst klaar', 'Eerste gesprekken gepland',
      'We weten al wie we als eerste benaderen — de pijplijn begint niet bij nul.'],
    ['Directie van de groep verbonden', 'Alen, Fabian, Roy, Koen',
      'Commitment vanuit de top zorgt dat MBH door de hele groep gedragen wordt, niet door één persoon.'],
    ['Strategische roadmap uitgewerkt', 'Voor de eerste 8 maanden na launch',
      'Een uitgewerkt plan geeft richting en maakt voortgang vanaf de eerste maand meetbaar.'],
  ];
  return (
    <section className="section section--panel" id="serieus" data-screen-label="08 Dit staat er bij lancering">
      <div className="shell">
        <div className="reveal">
          <div className="eyebrow"><span className="eyebrow__num">08</span><span className="eyebrow__bar"></span>Dit staat er bij lancering</div>
          <h2 className="sec-title">We zorgen direct voor een volwaardige start.</h2>
          <p className="sec-lead">
            Een nieuw bedrijf opzetten betekent veel meer dan een naam en een feestje. Dit is wat er bij de lancering
            staat — geen geruststelling, wel bewijs.
          </p>
        </div>

        <div className="commit-grid">
          {commitments.map(([title, sub, ctx], i) => (
            <div key={i} className="commit reveal" data-d={(i % 3) + 1}>
              <span className="commit__check"><IconCheck /></span>
              <div className="commit__body">
                <p className="commit__title">{title}{sub && <small>{sub}</small>}</p>
                <p className="commit__ctx">{ctx}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== 9 — WIE HET RUNT (TEAM) ============================== */
function Person({ slotId, role, name, line, featured }) {
  return (
    <article className={`person reveal ${featured ? 'person--feature' : ''}`}>
      <div className="person__photo">
        <image-slot id={slotId} shape="rect" placeholder={`Foto ${name.split(' ')[0]} (placeholder)`}></image-slot>
      </div>
      <div className="person__body">
        <div className="person__role">{role}</div>
        <h4 className="person__name">{name}</h4>
        <p className="person__line">{line}</p>
      </div>
    </article>
  );
}

function WieRunt() {
  const lead = { slotId: 'team-mike', role: 'Managing Director · start half juni', name: 'Mike van den Burg',
    line: 'Sluit half juni aan als Managing Director en wordt de motor van MBH in de opstartfase. Eerder bouwde hij mee bij onder andere Bitfactory, Dept en Redkiwi.' };
  const team = [
    { slotId: 'team-alen', role: 'AI Consultant', name: 'Alen', line: 'Vertaalt klantvraag naar de juiste AI-aanpak en begeleidt de discovery.' },
    { slotId: 'team-bart', role: 'AI Engineer', name: 'Bart', line: 'Bouwt agents, integraties en de techniek onder de oplossingen.' },
    { slotId: 'team-thijs', role: 'AI Engineer', name: 'Thijs', line: 'Ontwikkelt en onderhoudt de Jetpacks en custom implementaties.' },
    { slotId: 'team-koen', role: 'Creative Director', name: 'Koen', line: 'Bewaakt het verhaal, de positionering en het mensgerichte gezicht van MBH.' },
    { slotId: 'team-lilian', role: 'Office Manager', name: 'Lilian', line: 'Houdt de organisatie soepel draaiend, zodat het team kan bouwen.' },
    { slotId: 'team-tessa', role: 'AI Creator', name: 'Tessa', line: 'Maakt content en concepten waarin AI en menselijke creativiteit samenkomen.' },
  ];
  return (
    <section className="section" id="team" data-screen-label="09 Wie het runt">
      <div className="shell">
        <div className="reveal">
          <div className="eyebrow"><span className="eyebrow__num">09</span><span className="eyebrow__bar"></span>Wie het runt</div>
          <h2 className="sec-title">Dit is het team — zoals we het naar buiten brengen.</h2>
          <p className="sec-lead team-lead">
            We hebben nagedacht over hoe we ons profileren. MBH start met mensen die we al kennen uit de groep, met
            Mike als motor in de opstartfase. Dit team is ook een uithangbord: deze mensen verdwijnen <strong>niet</strong>
            uit hun huidige teams, maar doen mee in de projecten van MBH.
          </p>
        </div>

        <div className="team-grid">
          {[lead, ...team].map(p => <Person key={p.slotId} {...p} featured={p === lead} />)}
        </div>
        <p className="team-foot reveal">Dit team bouwt MBH op. Hybride, van verschillende labels, maar volledig committed.</p>
      </div>
    </section>
  );
}

/* ============================== 10 — TIJDLIJN ============================== */
function Tijdlijn() {
  const steps = [
    { date: '4 juni 2026', title: 'Het interne moment', detail: 'Stel je vragen, denk mee. Dit is waar we jullie als eersten meenemen — vóór de buitenwereld.', state: 'now' },
    { date: 'Half juni', title: 'Mike start als MD', detail: 'De Managing Director begint full-time met het bouwen en runnen van MBH.', state: 'future' },
    { date: '18 juni 2026', title: 'Sneak peek op het jubileum', detail: 'Eerste publieke aankondiging richting klanten en relaties. Vanaf nu mag de naam naar buiten.', state: 'future' },
    { date: 'Q3 2026', title: 'Officiële launch', detail: 'Eigen website live, eerste klanten via The HERD.', state: 'future' },
    { date: 'Maand 1–2', title: 'Fundament en pipeline', detail: 'Positionering vastleggen, propositie testen bij bestaande klanten, referral-programma opzetten, persoonlijke outreach.', state: 'future' },
    { date: 'Maand 3–4', title: 'Momentum en credibility', detail: 'Eerste content op LinkedIn en media-platforms, eerste podcast-episode, outreach opschalen.', state: 'future' },
    { date: 'Maand 5–6', title: 'Betrokkenheid en conversie', detail: 'Eerste event, tweede podcast-episode, speaking engagements activeren.', state: 'future' },
    { date: 'Maand 7–8', title: 'Versnelling en schaal', detail: 'Tweede event, derde podcast, kanalen optimaliseren op basis van data, fase 2-strategie definiëren.', state: 'future' },
    { date: 'Daarna', title: 'Nog in te vullen', detail: 'Wordt aangevuld door Alen na de strategische roadmap van 8 maanden.', state: 'open' },
  ];
  return (
    <section className="section" id="tijdlijn" data-screen-label="10 Tijdlijn">
      <div className="shell">
        <div className="reveal">
          <div className="eyebrow"><span className="eyebrow__num">10</span><span className="eyebrow__bar"></span>Tijdlijn</div>
          <h2 className="sec-title">Wanneer wat.</h2>
          <p className="sec-lead">Van het interne moment vandaag tot de roadmap voor de eerste acht maanden na launch.</p>
        </div>

        <ol className="tlv reveal" data-d="1">
          {steps.map((s, i) => (
            <li key={i} className={`tlv__item tlv__item--${s.state}`}>
              <span className="tlv__node" aria-hidden="true"></span>
              <div className="tlv__body">
                <div className="tlv__date">
                  {s.date}
                  {s.state === 'now' && <span className="tlv__badge">Vandaag</span>}
                </div>
                <h4 className="tlv__title">{s.title}</h4>
                <p className="tlv__detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================== 11 — WAT JE TEGEN KLANTEN ZEGT ============================== */
function Klanten({ t }) {
  const [copied, setCopied] = React.useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(t.clientQuote);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = t.clientQuote; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (_) {}
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };
  const dont = ['De naam Machine, be Human (vóór 18 juni)', 'Namen van het team', 'Prijzen of concrete diensten', 'De officiële launch-datum'];
  return (
    <section className="section section--panel" id="klanten" data-screen-label="11 Wat je tegen klanten zegt">
      <div className="shell">
        <div className="reveal">
          <div className="eyebrow"><span className="eyebrow__num">11</span><span className="eyebrow__bar"></span>Wat je tegen klanten kunt zeggen</div>
          <h2 className="sec-title">Een klant vraagt ernaar. Wat zeg je?</h2>
          <p className="sec-lead">
            Klanten kunnen er na 18 juni naar vragen. Misschien hoor je het zelf eerder. Dit kun je gewoon vertellen —
            kopieer het en plak het waar je 'm nodig hebt.
          </p>
        </div>

        <div className="say-quote reveal" data-d="1">
          <span className="say-quote__mark" aria-hidden="true">“</span>
          <p className="say-quote__text">{t.clientQuote}</p>
          <button className={`copy-btn ${copied ? 'is-copied' : ''}`} onClick={copy}>
            {copied ? (
              <React.Fragment>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Gekopieerd!
              </React.Fragment>
            ) : (
              <React.Fragment>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                Kopieer deze zin
              </React.Fragment>
            )}
          </button>
        </div>

        <div className="dont-share reveal">
          <div className="dont-share__k">Wat je nog niet deelt</div>
          <ul>{dont.map((d, i) => <li key={i}>{d}</li>)}</ul>
          <div className="dont-share__foot">Voor concrete vervolgvragen: <b>verwijs door naar Alen of Koen.</b></div>
        </div>
      </div>
    </section>
  );
}

/* ============================== 12 — OPEN + ASK ============================== */
function OpenQ({ q, a }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const [h, setH] = React.useState(0);
  React.useEffect(() => { if (ref.current) setH(open ? ref.current.scrollHeight : 0); }, [open]);
  return (
    <div className={`open-q ${open ? 'is-open' : ''}`}>
      <button className="open-q__head" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="open-q__q">{q}</span>
        <span className="open-q__icon"><IconPlus /></span>
      </button>
      <div className="open-q__panel" style={{ maxHeight: h + 'px' }}>
        <div className="open-q__panel-inner" ref={ref}><p>{a}</p></div>
      </div>
    </div>
  );
}
function OpenEnAsk({ t }) {
  const qs = [
    ['Welke concrete eisen stellen we aan medewerkers die willen aanhaken?', 'Hier werken we nog aan. We weten de richting — interesse, omgaan met onzekerheid, ruimte in overleg met je leidinggevende — maar de exacte invulling volgt.'],
    ['Hoe breidt het team verder uit in Q3?', 'De eerste hybride aansluitingen zijn er; hoe het team daarna groeit bepalen we gaandeweg, op basis van wat de eerste klanten vragen.'],
    ['Wat is de exacte planning na de roadmap van 8 maanden?', 'De eerste 8 maanden zijn uitgewerkt. Wat daarna komt, vullen we in zodra we zien hoe fase 1 loopt — wordt aangevuld door Alen.'],
    ['Mis je iets?', 'Goede kans. Dat is precies waarom we dit nu intern delen. Neem je vraag mee naar donderdag — hoe scherper, hoe beter.'],
  ];
  return (
    <section className="section" id="open" data-screen-label="12 Open + ask">
      <div className="shell">
        <div className="reveal">
          <div className="eyebrow"><span className="eyebrow__num">12</span><span className="eyebrow__bar"></span>Wat we nog niet weten</div>
          <h2 className="sec-title">Niet alles is uitgewerkt. Dat is bewust.</h2>
          <p className="sec-lead">
            Een nieuw bedrijf opzetten is ook ontdekken. Hieronder de vragen waar we zelf het antwoord nog op zoeken.
          </p>
        </div>

        <div className="open-grid">
          {qs.map(([q, a], i) => <OpenQ key={i} q={q} a={a} />)}
        </div>

        <div className="ask reveal" data-d="1">
          <h3>{t.askHeadline}</h3>
          <div className="ask__rows">
            <div className="ask__row">
              <b>Aan iedereen</b>
              <p>Kom donderdag, stel je vragen, denk mee. Wees scherp. Wees eerlijk. Mopper als nodig.</p>
            </div>
            <div className="ask__row">
              <b>Aan wie wil aanhaken</b>
              <p>Laat het weten — dan plannen we een gesprek over wat past. Neem het gerust mee naar donderdag.</p>
            </div>
          </div>
          <div className="ask__sign">— Alen, Fabian, Roy, Koen</div>
        </div>
      </div>
    </section>
  );
}

/* ============================== FOOTER ============================== */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <img className="footer__logo" src="assets/herd-logotype-coral.png" alt="the HERD" />
        <span className="intern-flag"><span className="dot"></span>Intern document — niet extern delen vóór 18 juni</span>
      </div>
      <div className="footer__bot">
        <span><b>Machine, be Human</b> · een label van The HERD Group</span>
        <span>Vragen? Alen of Koen · Q&amp;A donderdag 4 juni</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Person, WieRunt, Serieus, Tijdlijn, Klanten, OpenQ, OpenEnAsk, Footer });
