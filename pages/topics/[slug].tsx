import { getTopicBySlug, getAllTopics } from '../../lib/topics'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'

const BASE_URL = 'https://minar-medicine.vercel.app'

interface Topic {
  slug: string; title: string; system: string
  scenario: string; sources: string[]; content: string
}

function slugify(text: string, seen: Map<string, number>): string {
  const base = text.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-')
  const count = seen.get(base) ?? 0
  seen.set(base, count + 1)
  return count === 0 ? base : `${base}-${count}`
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

export default function TopicPage({ topic, prevTopic, nextTopic }: {
  topic: Topic
  prevTopic: { slug: string; title: string } | null
  nextTopic: { slug: string; title: string } | null
}) {
  const systemSlug = topic.system.toLowerCase().replace(/ /g, '-')
  const contentWithoutComments = topic.content.replace(/<!--[\s\S]*?-->/g, '')
  const readingTime = estimateReadingTime(contentWithoutComments)
  const description = topic.scenario
    ? topic.scenario.slice(0, 160)
    : `${topic.title} — clinical overview, pathophysiology, diagnosis, and management. Part of the ${topic.system} section.`
  const canonicalUrl = `${BASE_URL}/topics/${topic.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: topic.title,
    description,
    url: canonicalUrl,
    about: { '@type': 'MedicalCondition', name: topic.title },
    publisher: { '@type': 'Organization', name: 'Minar Medicine', url: BASE_URL },
  }

  // Fresh seen map per render so slugify IDs are per-page consistent
  const seenIds = new Map<string, number>()

  return (
    <>
      <Head>
        <title>{topic.title} — Minar Medicine</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Open Graph */}
        <meta property="og:title" content={`${topic.title} — Minar Medicine`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${BASE_URL}/logo.png`} />
        {/* Twitter card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${topic.title} — Minar Medicine`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${BASE_URL}/logo.png`} />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}>
        <span className="breadcrumb">
          <Link href="/">Home</Link> › <Link href={`/systems/${systemSlug}`}>{topic.system}</Link> › {topic.title}
        </span>

        {/* Prev / Next within system — shown at top */}
        {(prevTopic || nextTopic) && (
          <div className="article-nav" style={{ marginTop: '0.5rem', marginBottom: '1.5rem', paddingTop: 0, borderTop: 'none' }}>
            <div className="article-nav-inner">
              {prevTopic ? (
                <Link href={`/topics/${prevTopic.slug}`} className="article-nav-item article-nav-prev">
                  <span className="article-nav-label">← Previous in {topic.system}</span>
                  <span className="article-nav-title">{prevTopic.title}</span>
                </Link>
              ) : <div />}
              {nextTopic ? (
                <Link href={`/topics/${nextTopic.slug}`} className="article-nav-item article-nav-next">
                  <span className="article-nav-label">Next in {topic.system} →</span>
                  <span className="article-nav-title">{nextTopic.title}</span>
                </Link>
              ) : <div />}
            </div>
          </div>
        )}

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <div style={{ marginBottom: '0.75rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px' }}>
            <span className="badge badge-green">{topic.system}</span>
            <span style={{ fontSize: '12px', color: '#aaa', marginLeft: '4px' }}>{readingTime} min read</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: '30px', fontWeight: 600, lineHeight: 1.2, marginBottom: topic.sources.length ? '1rem' : 0 }}>
            {topic.title}
          </h1>
          {topic.sources.length > 0 && (
            <div style={{ marginTop: '0.75rem', borderTop: '1px solid #f0ede8', paddingTop: '0.75rem' }}>
              <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', display: 'block', marginBottom: '0.4rem' }}>Sources</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {topic.sources.map(s => <span key={s} className="badge badge-gray">{s}</span>)}
              </div>
            </div>
          )}
        </div>

        {topic.scenario && (
          <div className="scenario">
            <span className="scenario-label">Clinical scenario</span>
            <p>{topic.scenario}</p>
          </div>
        )}

        <div className="card">
          <div className="topic-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2({ children }) {
                  const id = slugify(String(children), seenIds)
                  return <h2 id={id}><a href={`#${id}`} className="heading-anchor">{children}</a></h2>
                },
                h3({ children }) {
                  const id = slugify(String(children), seenIds)
                  return <h3 id={id}>{children}</h3>
                },
              }}
            >
              {contentWithoutComments}
            </ReactMarkdown>
          </div>
        </div>

        {/* Back to top */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ↑ Back to top
          </button>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const topics = getAllTopics()
  return { paths: topics.map(t => ({ params: { slug: t.slug } })), fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const topic = getTopicBySlug(params!.slug as string)
  if (!topic) return { notFound: true }

  // Prev/Next within the same system only
  const systemTopics = getAllTopics().filter(t => t.system === topic.system)
  const idx = systemTopics.findIndex(t => t.slug === topic.slug)
  const prevTopic = idx > 0 ? { slug: systemTopics[idx - 1].slug, title: systemTopics[idx - 1].title } : null
  const nextTopic = idx < systemTopics.length - 1 ? { slug: systemTopics[idx + 1].slug, title: systemTopics[idx + 1].title } : null

  return { props: { topic, prevTopic, nextTopic } }
}
