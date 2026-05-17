import Head from 'next/head'

export default function About(): JSX.Element {
  const rules: string[] = [
    'nobody knows where the ABG machine is',
    'potassium can ruin your entire day',
    'confidence is at least 30% of clinical medicine',
    'the cafeteria always closes when you need it most',
  ]

  return (
    <>
      <Head>
        <title>About — Minar Medicine</title>
        <meta name="description" content="Minar Medicine was built by Muhammad Abdul Wahab Toor — a house officer in Lahore who wanted clinical notes that sound like a human being is teaching medicine." />
      </Head>
      {/* Hero */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e8e4dc' }}>
        <div style={{
          maxWidth: '980px',
          margin: '0 auto',
          padding: '4rem 2rem',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
        }}>
          <div style={{ flex: '1 1 320px', minWidth: '280px' }}>
            <p style={{ fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: '1rem' }}>
              The human behind Minar Medicine
            </p>
            <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', lineHeight: 1.05, fontWeight: 700, color: '#111', marginBottom: '1.5rem' }}>
              Hi.<br />I&apos;m Muhammad.
            </h1>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#555', marginBottom: '1.25rem' }}>
              I made Minar Medicine because medical education has an incredible talent for making simple things feel deeply unnecessary.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.9, color: '#666' }}>
              You ask a normal question like &ldquo;Why is the sodium low?&rdquo; and suddenly somebody recommends three textbooks, two review articles, and a YouTube lecture recorded during the Mughal Empire.
            </p>
          </div>

          <div style={{ flex: '1 1 280px', minWidth: '260px', maxWidth: '420px' }}>
            <img
              src="/wahab.jpg"
              alt="Muhammad Abdul Wahab Toor"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '20px', border: '1px solid #e8e4dc' }}
            />
          </div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ maxWidth: '820px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>

        {/* Quote */}
        <div style={{ background: '#f0faf6', border: '1px solid #d9efe7', borderLeft: '5px solid #1D9E75', borderRadius: '18px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#124d3d', marginBottom: '0.75rem', fontStyle: 'italic' }}>
            &ldquo;The labs were normal. Which honestly made things worse.&rdquo;
          </p>
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1D9E75' }}>
            — charted mentally at 3:17am
          </span>
        </div>

        {/* Story card */}
        <div style={{ background: '#fff', border: '1px solid #e8e4dc', borderRadius: '24px', padding: '2rem', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '1rem', lineHeight: 2, color: '#555', marginBottom: '1rem' }}>
            So I built the kind of resource I actually wanted during med school and house job: clean clinical notes, practical explanations, and medicine that sounds like a human being is teaching it.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 2, color: '#555', marginBottom: '1rem' }}>
            Not a textbook.<br />
            Not a robot.<br />
            Not that one senior who says &ldquo;it&apos;s easy&rdquo; before disappearing for four hours.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 2, color: '#555' }}>
            I&apos;m currently surviving ward rounds, night calls, surgical chaos, and the psychological warfare known as consultant questioning.
          </p>
        </div>

        {/* Rules */}
        <div style={{ background: '#111', color: '#fff', borderRadius: '24px', padding: '2rem', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.82rem', letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '1.2rem' }}>
            Things house job teaches you very quickly
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {rules.map((rule, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingBottom: '1rem', borderBottom: i !== rules.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1D9E75', flexShrink: 0 }}>0{i + 1}</span>
                <span style={{ fontSize: '1rem', lineHeight: 1.7, color: '#ddd' }}>{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final card */}
        <div style={{ background: '#fff', border: '1px solid #e8e4dc', borderRadius: '24px', padding: '2rem' }}>
          <p style={{ fontSize: '1rem', lineHeight: 2, color: '#555', marginBottom: '1rem' }}>
            The whole thing was built somewhere between Lahore traffic, hospital corridors, caffeine addiction, and sleep deprivation.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 2, color: '#555', marginBottom: '1rem' }}>
            This website is for medical students trying to survive, house officers running on chai and denial, and anyone tired of notes written like ancient prophecy.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 2, color: '#555' }}>
            Kids, this website exists because I wanted to get your mother a birthday gift.<br />
            Most men buy jewelry.<br />
            I built a medicine website during house job.<br />
            In hindsight, this explains a lot about me.
          </p>
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #ececec' }}>
            <p style={{ fontSize: '1.05rem', color: '#111', fontWeight: 600 }}>
              Anyway.<br />
              Enjoy the notes.<br />
              Try not to ignore the potassium.
            </p>
          </div>
        </div>

      </section>
    </>
  )
}
