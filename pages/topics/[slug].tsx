import { getTopicBySlug, getAllTopics } from '../../lib/topics'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import MermaidDiagram from '../../components/MermaidDiagram'
import { Children, isValidElement } from 'react'

interface Topic {
  slug: string; title: string; system: string
  scenario: string; sources: string[]; content: string
}

export default function TopicPage({ topic }: { topic: Topic }) {
  const systemSlug = topic.system.toLowerCase().replace(/ /g, '-')
  const contentWithoutComments = topic.content.replace(/<!--[\s\S]*?-->/g, '')

  return (
    <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}>
      <span className="breadcrumb">
        <Link href="/">Home</Link> › <Link href={`/systems/${systemSlug}`}>{topic.system}</Link> › {topic.title}
      </span>
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <span className="badge badge-green">{topic.system}</span>
          {topic.sources.map(s => <span key={s} className="badge badge-gray">{s}</span>)}
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '30px', fontWeight: 600, lineHeight: 1.2 }}>
          {topic.title}
        </h1>
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
              pre({ children }) {
                const child = Children.only(children)

                if (
                  isValidElement<{ className?: string; children?: React.ReactNode }>(child) &&
                  child.props.className?.includes('language-mermaid')
                ) {
                  const code = String(child.props.children).replace(/\n$/, '')
                  return <MermaidDiagram chart={code} />
                }

                return <pre>{children}</pre>
              },
              code({ className, children, ...props }) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {contentWithoutComments}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const topics = getAllTopics()
  return { paths: topics.map(t => ({ params: { slug: t.slug } })), fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const topic = getTopicBySlug(params!.slug as string)
  if (!topic) return { notFound: true }
  return { props: { topic } }
}
