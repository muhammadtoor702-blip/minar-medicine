import Link from 'next/link'
import Head from 'next/head'
import { getAllTopics } from '../lib/topics'
import { GetStaticProps } from 'next'
import { useState, useEffect, useRef } from 'react'

const SYSTEMS = [
  { name: 'Cardiology', icon: '♥', slug: 'cardiology' },
  { name: 'Pulmonology', icon: '💨', slug: 'pulmonology' },
  { name: 'Gastroenterology', icon: '🌿', slug: 'gastroenterology' },
  { name: 'Neurology', icon: '🧠', slug: 'neurology' },
  { name: 'Endocrinology', icon: '⚡', slug: 'endocrinology' },
  { name: 'Nephrology', icon: '💧', slug: 'nephrology' },
  { name: 'Haematology', icon: '🩸', slug: 'haematology' },
  { name: 'Rheumatology', icon: '🦴', slug: 'rheumatology' },
  { name: 'Infectious Disease', icon: '🦠', slug: 'infectious-disease' },
  { name: 'Dermatology', icon: '🩹', slug: 'dermatology' },
]

interface Topic { slug: string; title: string; system: string; scenario: string; summary: string; keywords: string[] }

export default function Home({ topics }: { topics: Topic[] }) {
  const [query, setQuery] = useState('')
  const [aiSlugs, setAiSlugs] = useState<string[]>([])
  const [searching, setSearching] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const debounceRef = useRef<NodeJS.Timeout | null>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.key === '/' || (e.key === 'k' && (e.metaKey || e.ctrlKey))) && document.activeElement !== searchRef.current) {
        e.preventDefault()
        searchRef.current?.focus()
      }
      if (e.key === 'Escape') {
        searchRef.current?.blur()
        setDropdownOpen(false)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // AI search debounce
  useEffect(() => {
    if (query.length < 2) {
      setAiSlugs([])
      setDropdownOpen(false)
      return
    }
    setDropdownOpen(true)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(async () => {
      setSearching(true)
      try {
        const res = await fetch('/api/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query })
        })
        const data = await res.json()
        setAiSlugs(data.slugs || [])
      } catch {
        setAiSlugs([])
      }
      setSearching(false)
    }, 500)
  }, [query])

  const filtered = query.length > 1
    ? topics.filter(t => {
        const q = query.toLowerCase()
        return (
          t.title.toLowerCase().includes(q) ||
          t.system.toLowerCase().includes(q) ||
          (t.scenario || '').toLowerCase().includes(q) ||
          (t.summary || '').toLowerCase().includes(q) ||
          (t.keywords || []).some(k => k.toLowerCase().includes(q)) ||
          aiSlugs.includes(t.slug)
        )
      })
    : []

  return (
    <>
    <Head>
      <title>Minar Medicine — Clinical medicine, reasoned from first principles</title>
      <meta name="description" content="Free clinical medicine reference covering 68 topics in internal medicine. Written for medical students and junior doctors who want to understand, not just memorise." />
      <meta property="og:title" content="Minar Medicine" />
      <meta property="og:description" content="Clinical medicine, reasoned from first principles. Free reference for medical students and junior doctors." />
      <meta property="og:type" content="website" />
    </Head>
    <main>
      <div className="hero">
        <h1>Clinical medicine,<br /><em>reasoned</em> from first principles</h1>
        <p>A free, open reference built around how clinicians actually think — not just what they memorise.</p>

        {/* Search box with dropdown */}
        <div className="search-box" ref={boxRef}>
          <span className="search-icon">⌕</span>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search a condition, symptom, or system..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => { if (query.length > 1) setDropdownOpen(true) }}
            aria-label="Search topics"
            aria-expanded={dropdownOpen}
            aria-haspopup="listbox"
            autoComplete="off"
          />

          {/* Dropdown */}
          {dropdownOpen && query.length > 1 && (
            <div className="search-dropdown" role="listbox">
              {searching ? (
                <div className="search-dropdown-status">Searching…</div>
              ) : filtered.length === 0 ? (
                <div className="search-dropdown-status">No results for &ldquo;{query}&rdquo;</div>
              ) : (
                filtered.slice(0, 8).map(t => (
                  <Link
                    key={t.slug}
                    href={`/topics/${t.slug}`}
                    className="search-dropdown-item"
                    role="option"
                    onClick={() => { setDropdownOpen(false); setQuery('') }}
                  >
                    <span className="search-dropdown-title">{t.title}</span>
                    <span className="search-dropdown-system">{t.system}</span>
                  </Link>
                ))
              )}
              {!searching && filtered.length > 8 && (
                <div className="search-dropdown-more">
                  +{filtered.length - 8} more results — keep typing to narrow down
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main content — always visible, never affected by search */}
      <div className="container">
        <div className="section">
          <span className="section-label">Browse by system</span>
          <div className="system-grid">
            {SYSTEMS.map(s => {
              const count = topics.filter(t => t.system.toLowerCase() === s.name.toLowerCase()).length
              return (
                <Link key={s.slug} href={`/systems/${s.slug}`} className="system-card">
                  <div className="system-icon">{s.icon}</div>
                  <div className="system-name">{s.name}</div>
                  <div className="system-count">{count} {count === 1 ? 'topic' : 'topics'}</div>
                </Link>
              )
            })}
          </div>
        </div>

      </div>
    </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const topics = getAllTopics().map(({ slug, title, system, scenario, summary, keywords }) => ({
    slug, title, system, scenario, summary, keywords
  }))
  return { props: { topics } }
}
