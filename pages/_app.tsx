import type { AppProps } from 'next/app'
import Link from 'next/link'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="nav flex items-center justify-between gap-3 sm:gap-6">
        <Link
          href="/"
          className="nav-brand min-w-0 max-w-[45vw] truncate text-[15px] sm:max-w-none sm:text-lg"
        >
          Minar Medicine
        </Link>
        <div className="nav-links flex items-center gap-2 text-[13px] sm:gap-4 sm:text-base">
          <Link href="/systems">Systems</Link>
          <a href="https://minar-medicine-ai.vercel.app/chat" target="_blank" rel="noopener noreferrer">AI Tutor</a>
          <Link href="/about">About</Link>
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
