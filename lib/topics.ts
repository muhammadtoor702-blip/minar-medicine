import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const TOPICS_DIR = path.join(process.cwd(), 'content/topics')

export interface Topic {
  slug: string
  title: string
  system: string
  scenario: string
  keywords: string[]
  sources: string[]
  summary: string
  content: string
}

export function getAllTopics(): Omit<Topic, 'content'>[] {
  if (!fs.existsSync(TOPICS_DIR)) return []
  const files = fs.readdirSync(TOPICS_DIR).filter(f => f.endsWith('.md'))
  return files.map(filename => {
    const raw = fs.readFileSync(path.join(TOPICS_DIR, filename), 'utf8')
    const { data, content } = matter(raw)
    const keywordsRaw = (data as any).keywords
    const keywords = Array.isArray(keywordsRaw)
      ? keywordsRaw.map(String)
      : typeof keywordsRaw === 'string'
        ? keywordsRaw.split(',').map(s => s.trim()).filter(Boolean)
        : []
    return {
      slug: filename.replace('.md', ''),
      title: data.title || filename,
      system: data.system || 'General',
      scenario: data.scenario || '',
      keywords,
      sources: data.sources || [],
      summary: String(content || '').trim().slice(0, 2000),
    }
  })
}

export function getTopicBySlug(slug: string): Topic | null {
  const filePath = path.join(TOPICS_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const keywordsRaw = (data as any).keywords
  const keywords = Array.isArray(keywordsRaw)
    ? keywordsRaw.map(String)
    : typeof keywordsRaw === 'string'
      ? keywordsRaw.split(',').map(s => s.trim()).filter(Boolean)
      : []
  return {
    slug,
    title: data.title || slug,
    system: data.system || 'General',
    scenario: data.scenario || '',
    keywords,
    sources: data.sources || [],
    summary: String(content || '').trim().slice(0, 2000),
    content,
  }
}

export function getTopicsBySystem(system: string): Omit<Topic, 'content'>[] {
  return getAllTopics().filter(t => t.system.toLowerCase() === system.toLowerCase())
}
