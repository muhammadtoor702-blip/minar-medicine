import type { AppProps } from 'next/app'
import Link from 'next/link'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-brand">Minar Medicine</Link>
        <div className="nav-links">
          <Link href="/systems">Systems</Link>
          <Link href="/about">About</Link>
          <a href="https://minar-medicine-ai.vercel.app/chat" target="_blank" rel="noopener noreferrer">AI Tutor</a>
        </div>
      </nav>
      <Component {...pageProps} />
      <footer className="footer">
        <p>Minar Medicine — Clinical medicine, reasoned from first principles.</p>
        <p style={{ marginTop: '0.5rem' }}>From Lahore — for the world and AZ :)</p>
      </footer>
    </>
  )
}
