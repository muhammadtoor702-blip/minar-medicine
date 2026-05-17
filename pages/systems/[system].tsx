import Link from 'next/link'
import Head from 'next/head'
import { getTopicsBySystem, getAllTopics } from '../../lib/topics'
import { GetStaticProps, GetStaticPaths } from 'next'

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

interface Topic { slug: string; title: string; system: string }

export default function SystemPage({ system, topics }: { system: string; topics: Topic[] }) {
  const s = SYSTEMS.find(x => x.name === system)
  return (
    <>
    <Head>
      <title>{system} — Minar Medicine</title>
      <meta name="description" content={`${topics.length} ${system} topics including ${topics.slice(0,3).map(t=>t.title).join(', ')} and more. Clinical medicine from first principles.`} />
    </Head>
    <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}>
      <span className="breadcrumb"><Link href="/">Home</Link> › <Link href="/systems">Systems</Link> › {system}</span>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '32px', marginBottom: '0.5rem' }}>{s?.icon}</div>
        <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: '32px', fontWeight: 600 }}>{system}</h1>
        <p style={{ color: '#999', marginTop: '0.5rem' }}>{topics.length} {topics.length === 1 ? 'topic' : 'topics'}</p>
      </div>
      {topics.length === 0 ? (
        <div className="card" style={{ color: '#999', textAlign: 'center', padding: '3rem' }}>
          Topics coming soon.
        </div>
      ) : (
        <div className="topic-list">
          {topics.map(t => (
            <Link key={t.slug} href={`/topics/${t.slug}`} className="topic-card">
              <div className="topic-title">{t.title}</div>
              <span style={{ color: '#ccc' }}>›</span>
            </Link>
          ))}
        </div>
      )}
    </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: SYSTEMS.map(s => ({ params: { system: s.slug } })), fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.system as string
  const s = SYSTEMS.find(x => x.slug === slug)
  if (!s) return { notFound: true }
  const topics = getTopicsBySystem(s.name)
  return { props: { system: s.name, topics } }
}
