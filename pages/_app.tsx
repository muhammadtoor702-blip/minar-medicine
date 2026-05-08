import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useState } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="nav">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="nav-brand" onClick={() => setMenuOpen(false)}>
            Minar Medicine
          </Link>

          {/* Desktop links */}
          <div className="nav-links hidden md:flex items-center gap-6">
            <Link href="/systems">Systems</Link>
            <a href="https://minar-medicine-ai.vercel.app/chat" target="_blank" rel="noopener noreferrer">AI Tutor</a>
            <Link href="/about">About</Link>
          </div>

          {/* Hamburger button - mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <span style={{ fontSize: '20px', lineHeight: 1, color: '#111' }}>✕</span>
            ) : (
              <>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
              </>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden w-full border-t border-gray-100 mt-3 pt-3 flex flex-col gap-4 pb-2">
            <Link href="/systems" onClick={() => setMenuOpen(false)} className="text-sm text-gray-700">Systems</Link>
            <a href="https://minar-medicine-ai.vercel.app/chat" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="text-sm text-gray-700">AI Tutor</a>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-sm text-gray-700">About</Link>
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
