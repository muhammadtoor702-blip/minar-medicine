export default function About() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem', maxWidth: '680px' }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', marginBottom: '2rem' }}>About</h1>
      <div className="card">
        <p style={{ fontSize: '17px', lineHeight: 1.8, marginBottom: '1.25rem' }}>
          I&apos;m Muhammad Abdul Wahab Toor. I&apos;m a house officer at Jinnah Hospital Lahore, MBBS grad, and I made this. You&apos;re welcome.
        </p>
        <p style={{ fontSize: '17px', lineHeight: 1.8, marginBottom: '1.25rem' }}>
          Minar Medicine is a free, open clinical reference built around how clinicians actually think — not just what they memorise. Every topic starts with a real patient, works through the pathophysiology, and ends with what you actually do.
        </p>
        <p style={{ fontSize: '17px', lineHeight: 1.8 }}>
          From Lahore — for the world.
        </p>
      </div>
    </div>
  )
}
