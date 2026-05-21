import Link from 'next/link'
import Head from 'next/head'
import { getAllTopics } from '../../lib/topics'
import { GetStaticProps } from 'next'

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
  { name: 'Paediatrics', icon: '👶', slug: 'paediatrics' },
  { name: 'Obstetrics & Gynaecology', icon: '🤰', slug: 'obstetrics-and-gynaecology' },
  { name: 'Surgery', icon: '🔧', slug: 'surgery' },
  { name: 'Emergency Medicine', icon: '🚨', slug: 'emergency-medicine' },
]

export default function SystemsPage({ counts }: { counts: Record<string, number> }) {
  return (
    <>
    <Head>
      <title>Browse by System — Minar Medicine</title>
      <meta name="description" content="Browse 68 internal medicine topics by system: Cardiology, Pulmonology, Neurology, Gastroenterology, and more." />
    </Head>
    <div className="container" style={{ paddingTop: '3rem' }}>
      <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: '32px', marginBottom: '2rem' }}>All Systems</h1>
      <div className="system-grid">
        {SYSTEMS.map(s => (
          <Link key={s.slug} href={`/systems/${s.slug}`} className="system-card">
            <div className="system-icon">{s.icon}</div>
            <div className="system-name">{s.name}</div>
            <div className="system-count">{counts[s.name] || 0} topics</div>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const topics = getAllTopics()
  const counts: Record<string, number> = {}
  topics.forEach(t => { counts[t.system] = (counts[t.system] || 0) + 1 })
  return { props: { counts } }
}
