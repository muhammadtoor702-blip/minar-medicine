import Head from 'next/head'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useState } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Minar Medicine</title>
        <meta name="description" content="Clinical medicine, reasoned from first principles." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-brand" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="Minar Medicine" className="nav-logo" />
            Minar Medicine
          </Link>

          {/* Desktop links — hidden on mobile via CSS */}
          <div className="nav-links">
            <Link href="/systems">Systems</Link>
            <a href="https://minar-medicine-ai.vercel.app" target="_blank" rel="noopener noreferrer">AI Tutor</a>
            <Link href="/about">About</Link>
          </div>

          {/* Hamburger button — visible on mobile via CSS */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <span className="nav-hamburger-x">✕</span>
            ) : (
              <>
                <span className="nav-hamburger-bar" />
                <span className="nav-hamburger-bar" />
                <span className="nav-hamburger-bar" />
              </>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="nav-mobile-menu">
            <Link href="/systems" onClick={() => setMenuOpen(false)}>Systems</Link>
            <a href="https://minar-medicine-ai.vercel.app" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>AI Tutor</a>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </div>
        )}
      </nav>

      <Component {...pageProps} />

      <footer className="footer">
        <p>Minar Medicine — Clinical medicine, reasoned from first principles.</p>
        <p style={{ marginTop: '0.5rem' }}>From Lahore — for the world and AZ :)</p>
      </footer>
    </>
  )
}
