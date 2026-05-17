import Link from 'next/link'
import Head from 'next/head'
import { getAllTopics } from '../lib/topics'
import { GetStaticProps } from 'next'
import { useState, useEffect, useRef } from 'react'

const SYSTEMS = [
  { name: 'Cardiology', icon: '♥', slug: 'cardiology' },
  { name: 'Pulmonology', icon: '🫁', slug: 'pulmonology' },
  { name: 'Gastroenterology', icon: '🫃', slug: 'gastroenterology' },
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
  const debounceRef = useRef<NodeJS.Timeout | null>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.key === '/' || (e.key === 'k' && (e.metaKey || e.ctrlKey))) && document.activeElement !== searchRef.current) {
        e.preventDefault()
        searchRef.current?.focus()
      }
      if (e.key === 'Escape') searchRef.current?.blur()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (query.length < 2) {
      setAiSlugs([])
      return
    }

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
    : topics

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
        <div className="search-box">
          <span className="search-icon">⌕</span>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search a condition, symptom, or system..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search topics"
          />
          {!query && <span className="search-kbd">/</span>}
          {searching && (
            <span style={{ fontSize: '12px', color: '#999', marginLeft: '8px' }}>searching...</span>
          )}
        </div>
      </div>
      <div className="container">
        {!query && (
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
        )}
        <div className="section">
          <span className="section-label">{query ? `Results for "${query}"` : 'All topics'}</span>
          <div className="topic-list">
            {filtered.map(t => (
              <Link key={t.slug} href={`/topics/${t.slug}`} className="topic-card">
                <div>
                  <div className="topic-title">{t.title}</div>
                  <div className="topic-system">{t.system}</div>
                </div>
                <span style={{ color: '#ccc' }}>›</span>
              </Link>
            ))}
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
