import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <>
      <nav className="nav" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Link href="/" className="nav-brand" onClick={() => setMenuOpen(false)} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src="/logo.png" alt="Minar Medicine" style={{ height: "28px", width: "auto" }} />
            Minar Medicine
          </Link>

          {/* Desktop links */}
          {!isMobile && (
            <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <Link href="/systems">Systems</Link>
<a href="https://minar-medicine-ai.vercel.app" target="_blank" rel="noopener noreferrer">AI Tutor</a>
              <Link href="/about">About</Link>
            </div>
          )}

          {/* Hamburger button - mobile only */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              {menuOpen ? (
                <span style={{ fontSize: '20px', lineHeight: 1, color: '#111' }}>✕</span>
              ) : (
                <>
                  <span style={{ display: 'block', width: '22px', height: '2px', background: '#111' }}></span>
                  <span style={{ display: 'block', width: '22px', height: '2px', background: '#111' }}></span>
                  <span style={{ display: 'block', width: '22px', height: '2px', background: '#111' }}></span>
                </>
              )}
            </button>
          )}
        </div>

     {/* Mobile dropdown */}
        {isMobile && menuOpen && (
          <div style={{ borderTop: '1px solid #eee', marginTop: '12px', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '8px', background: '#fff', width: '100%', zIndex: 50, position: 'relative' }}>
            <Link href="/systems" onClick={() => setMenuOpen(false)} style={{ fontSize: '15px', color: '#333' }}>Systems</Link>
            <a href="https://minar-medicine-ai.vercel.app" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} style={{ fontSize: '15px', color: '#333' }}>AI Tutor</a>
            <Link href="/about" onClick={() => setMenuOpen(false)} style={{ fontSize: '15px', color: '#333' }}>About</Link>
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
