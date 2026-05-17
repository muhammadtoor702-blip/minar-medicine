import Head from 'next/head'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found — Minar Medicine</title>
      </Head>
      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '64px', marginBottom: '1rem' }}>404</div>
        <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: '28px', fontWeight: 600, marginBottom: '1rem' }}>
          Page not found
        </h1>
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
          This page doesn't exist. Much like the ABG machine at 3am.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ background: '#1D9E75', color: 'white', padding: '10px 24px', borderRadius: '8px', fontSize: '15px', fontWeight: 500 }}>
            Go home
          </Link>
          <Link href="/systems" style={{ background: 'white', color: '#1a1a1a', padding: '10px 24px', borderRadius: '8px', fontSize: '15px', border: '1px solid #e8e4dc' }}>
            Browse topics
          </Link>
        </div>
      </div>
    </>
  )
}
