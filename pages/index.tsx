import Link from 'next/link'
import { getAllTopics, getTopicBySlug } from '../lib/topics'
import { GetStaticProps } from 'next'
import { useState } from 'react'

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

interface Topic { slug: string; title: string; system: string; scenario: string; summary: string; content: string }

export default function Home({ topics }: { topics: Topic[] }) {
  const [query, setQuery] = useState('')
  const filtered = query.length > 1
    ? topics.filter(t => {
      const q = query.toLowerCase()
      return (
        t.title.toLowerCase().includes(q) ||
        t.system.toLowerCase().includes(q) ||
        (t.scenario || '').toLowerCase().includes(q) ||
        (t.summary || '').toLowerCase().includes(q) ||
        (t.content || '').toLowerCase().includes(q)
      )
    })
    : topics

  return (
    <main>
      <div className="hero">
        <h1>Clinical medicine,<br /><em>reasoned</em> from first principles</h1>
        <p>A free, open reference built around how clinicians actually think — not just what they memorise.</p>
        <div className="search-box">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search a condition, symptom, or system..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
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
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const topics = getAllTopics().map(t => ({
    ...t,
    content: getTopicBySlug(t.slug)?.content || ''
  }))
  return { props: { topics } }
}
