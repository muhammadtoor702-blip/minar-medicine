export default function About(): JSX.Element {
  const rules: string[] = [
    'nobody knows where the ABG machine is',
    'potassium can ruin your entire day',
    'confidence is at least 30% of clinical medicine',
    'the cafeteria always closes when you need it most',
  ]

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: '#ffffff',
          borderBottom: '1px solid #e8e4dc',
        }}
      >
        <div
          style={{
            maxWidth: '980px',
            margin: '0 auto',
            padding: '5rem 1.5rem 4rem',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '12px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#1D9E75',
                marginBottom: '1rem',
              }}
            >
              The human behind Minar Medicine
            </p>

            <h1
              style={{
                fontSize: 'clamp(2.8rem, 7vw, 5rem)',
                lineHeight: 1,
                fontWeight: 700,
                color: '#111',
                marginBottom: '1.5rem',
              }}
            >
              Hi.
              <br />
              I&apos;m Wahab.
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.9,
                color: '#555',
                maxWidth: '620px',
                marginBottom: '1.5rem',
              }}
            >
              I made Minar Medicine because medical education has an incredible
              talent for making simple things feel deeply unnecessary.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.9,
                color: '#666',
                maxWidth: '620px',
              }}
            >
              You ask a normal question like “Why is the sodium low?” and
              suddenly somebody recommends three textbooks, two review articles,
              and a YouTube lecture recorded during the Mughal Empire.
            </p>
          </div>

          <div
            style={{
              background: '#f7f7f7',
              border: '1px solid #e8e4dc',
              borderRadius: '28px',
              overflow: 'hidden',
              height: '520px',
            }}
          >
            <img
              src="/wahab.jpg"
              alt="Muhammad Abdul Wahab Toor"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </div>
        </div>
      </section>

      {/* Main content */}
      <section
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: '4rem 1.5rem 6rem',
        }}
      >
        {/* Quote */}
        <div
          style={{
            background: '#f0faf6',
            border: '1px solid #d9efe7',
            borderLeft: '5px solid #1D9E75',
            borderRadius: '18px',
            padding: '2rem',
            marginBottom: '2rem',
          }}
        >
          <p
            style={{
              fontSize: '1.35rem',
              lineHeight: 1.8,
              color: '#124d3d',
              marginBottom: '0.75rem',
              fontStyle: 'italic',
            }}
          >
            “Most of medicine is pattern recognition, caffeine, and pretending
            you&apos;re calmer than you are.”
          </p>

          <span
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#1D9E75',
            }}
          >
            — probably said during a post-call delirium episode
          </span>
        </div>

        {/* Story card */}
        <div
          style={{
            background: '#fff',
            border: '1px solid #e8e4dc',
            borderRadius: '24px',
            padding: '2rem',
            marginBottom: '1.5rem',
          }}
        >
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 2,
              color: '#555',
              marginBottom: '1rem',
            }}
          >
            So I built the kind of resource I actually wanted during med school
            and house job: clean clinical notes, practical explanations, and
            medicine that sounds like a human being is teaching it.
          </p>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 2,
              color: '#555',
              marginBottom: '1rem',
            }}
          >
            Not a textbook.
            <br />
            Not a robot.
            <br />
            Not that one senior who says “it&apos;s easy” before disappearing for
            four hours.
          </p>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 2,
              color: '#555',
            }}
          >
            I&apos;m currently surviving ward rounds, night calls, surgical chaos,
            and the psychological warfare known as consultant questioning.
          </p>
        </div>

        {/* Rules */}
        <div
          style={{
            background: '#111',
            color: '#fff',
            borderRadius: '24px',
            padding: '2rem',
            marginBottom: '1.5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.82rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              opacity: 0.7,
              marginBottom: '1.2rem',
            }}
          >
            Things house job teaches you very quickly
          </p>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {rules.map((rule, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingBottom: '1rem',
                  borderBottom:
                    i !== rules.length - 1
                      ? '1px solid rgba(255,255,255,0.1)'
                      : 'none',
                }}
              >
                <span
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#1D9E75',
                  }}
                >
                  0{i + 1}
                </span>

                <span
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: '#ddd',
                  }}
                >
                  {rule}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Final card */}
        <div
          style={{
            background: '#fff',
            border: '1px solid #e8e4dc',
            borderRadius: '24px',
            padding: '2rem',
          }}
        >
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 2,
              color: '#555',
              marginBottom: '1rem',
            }}
          >
            The whole thing was built somewhere between Lahore traffic,
            hospital corridors, caffeine addiction, and sleep deprivation.
          </p>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 2,
              color: '#555',
              marginBottom: '1rem',
            }}
          >
            This website is for medical students trying to survive, house
            officers running on chai and denial, and anyone tired of notes
            written like ancient prophecy.
          </p>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 2,
              color: '#555',
            }}
          >
            Also yes, House MD was definitely an influence.
            <br />
            Barney Stinson too.
            <br />
            Which probably explains a lot.
          </p>

          <div
            style={{
              marginTop: '2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid #ececec',
            }}
          >
            <p
              style={{
                fontSize: '1.05rem',
                color: '#111',
                fontWeight: 600,
              }}
            >
              Anyway.
              <br />
              Enjoy the notes.
              <br />
              Try not to ignore the potassium.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
