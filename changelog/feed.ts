// Shared by the changelog Worker (workers/changelog) and the docs theme.
//
// Each project keeps a CHANGELOG.md in its own repository:
//
//   ## <version> - <YYYY-MM-DD>
//
//   ### 中文
//   ...markdown...
//
//   ### English
//   ...markdown...
//
// The Worker parses every project's file into one feed, newest first, which
// the docs show as the What's New bar, the home page list and the timeline.

export type Lang = 'zh' | 'en'

export interface Project {
  id: string
  repo: string
  name: Record<Lang, string>
  // The tag on the bar, the home page list and the timeline filter.
  short: Record<Lang, string>
}

export const projects: Project[] = [
  {
    id: 'go',
    repo: 'Project-HINATA/hinata_go',
    name: { zh: 'HINATA Go', en: 'HINATA Go' },
    short: { zh: 'HINATA Go', en: 'HINATA Go' },
  },
  {
    id: 'firmware',
    repo: 'nerimoe/hinata-neo',
    name: { zh: 'HINATA & HINATA Lite', en: 'HINATA & HINATA Lite' },
    short: { zh: '固件', en: 'Firmware' },
  },
  {
    id: 'io',
    repo: 'nerimoe/hinata-aimeio-rs',
    name: { zh: 'HINATA IO', en: 'HINATA IO' },
    short: { zh: 'HINATA IO', en: 'HINATA IO' },
  },
  {
    id: 'client',
    repo: 'nerimoe/hinata_client',
    name: { zh: 'HINATA Client', en: 'HINATA Client' },
    short: { zh: 'HINATA Client', en: 'HINATA Client' },
  },
]

export const defaultFeedUrl = 'https://changelog.neri.moe/changelog.json'

export interface FeedEntry {
  id: string
  project: string
  version: string
  date: string
  html: Record<Lang, string>
  summary: Record<Lang, string>
}

export interface Feed {
  generatedAt: string
  entries: FeedEntry[]
  errors: string[]
}

const headingPattern = /^## (\S+) - (\d{4}-\d{2}-\d{2})\s*$/
const sectionHeadings: Record<string, Lang> = { '### 中文': 'zh', '### English': 'en' }

export function parseChangelog(project: string, markdown: string): FeedEntry[] {
  const entries: FeedEntry[] = []
  let current: { version: string; date: string; sections: Record<Lang, string[]> } | null = null
  let lang: Lang | null = null

  const finish = () => {
    if (!current) return
    const zh = current.sections.zh.join('\n').trim()
    const en = current.sections.en.join('\n').trim()
    // An entry written in one language only still shows in the other.
    const text = { zh: zh || en, en: en || zh }
    if (text.zh) {
      entries.push({
        id: `${project}@${current.version}`,
        project,
        version: current.version,
        date: current.date,
        html: { zh: renderMarkdown(text.zh), en: renderMarkdown(text.en) },
        summary: { zh: summarize(text.zh), en: summarize(text.en) },
      })
    }
    current = null
    lang = null
  }

  for (const line of markdown.replace(/\r\n?/g, '\n').split('\n')) {
    const heading = headingPattern.exec(line)
    if (heading) {
      finish()
      current = { version: heading[1], date: heading[2], sections: { zh: [], en: [] } }
      continue
    }
    if (line.startsWith('## ')) {
      finish()
      continue
    }
    if (!current) continue
    const section = sectionHeadings[line.trim()]
    if (section) {
      lang = section
      continue
    }
    if (lang) current.sections[lang].push(line)
  }
  finish()
  return entries
}

export function mergeEntries(lists: FeedEntry[][]): FeedEntry[] {
  const order = new Map(projects.map((project, index) => [project.id, index]))
  return lists.flat().sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1
    return (order.get(a.project) ?? 99) - (order.get(b.project) ?? 99)
  })
}

// The first paragraph or list item, as plain text, for the bar and the home
// page list.
function summarize(markdown: string): string {
  for (const raw of markdown.split('\n')) {
    const line = raw.trim()
    if (!line || line.startsWith('>')) continue
    return stripInline(line.replace(/^(?:[-*]|\d+\.)\s+/, ''))
  }
  return ''
}

function stripInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    .replace(/<(https?:\/\/[^>\s]+)>/g, '$1')
    .trim()
}

const escapes: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (char) => escapes[char])
}

function link(href: string, label: string): string {
  return `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`
}

// Inline markdown: code, bold, links and bare URLs. Everything else is
// escaped, so a changelog cannot inject markup into the docs.
function renderInline(text: string): string {
  const codes: string[] = []
  let html = text.replace(/`([^`]+)`/g, (_, code: string) => {
    codes.push(`<code>${escapeHtml(code)}</code>`)
    return `\u0000${codes.length - 1}\u0000`
  })
  html = escapeHtml(html)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, (_, label: string, href: string) => link(href, label))
    .replace(/&lt;(https?:\/\/[^\s]+?)&gt;/g, (_, href: string) => link(href, href))
    .replace(/(^|[\s(（])(https?:\/\/[^\s<)）]+)/g, (_, lead: string, href: string) => lead + link(href, href))
  return html.replace(/\u0000(\d+)\u0000/g, (_, index: string) => codes[Number(index)])
}

// The block markdown the changelogs use: paragraphs, quotes and nested
// bullet or numbered lists. Lines inside a paragraph keep their breaks.
export function renderMarkdown(markdown: string): string {
  const out: string[] = []
  const lists: { indent: number; tag: string }[] = []
  let paragraph: string[] = []

  const flushParagraph = () => {
    if (paragraph.length) out.push(`<p>${paragraph.map(renderInline).join('<br>')}</p>`)
    paragraph = []
  }
  const closeLists = (indent: number) => {
    while (lists.length && lists[lists.length - 1].indent >= indent) {
      out.push(`</li></${lists.pop()!.tag}>`)
    }
  }

  for (const raw of markdown.split('\n')) {
    const line = raw.replace(/\s+$/, '')
    const item = /^(\s*)([-*]|\d+\.)\s+(.*)$/.exec(line)
    if (item) {
      flushParagraph()
      const indent = item[1].length
      const tag = /\d/.test(item[2]) ? 'ol' : 'ul'
      const top = lists[lists.length - 1]
      if (top && top.indent > indent) closeLists(indent + 1)
      if (lists.length && lists[lists.length - 1].indent === indent && lists[lists.length - 1].tag !== tag) {
        closeLists(indent)
      }
      const same = lists[lists.length - 1]
      if (same && same.indent === indent) {
        out.push('</li><li>')
      } else {
        lists.push({ indent, tag })
        out.push(`<${tag}><li>`)
      }
      out.push(renderInline(item[3]))
      continue
    }
    if (!line.trim()) {
      flushParagraph()
      continue
    }
    if (lists.length && /^\s+/.test(line)) {
      // A continuation line of the current list item.
      out.push(' ' + renderInline(line.trim()))
      continue
    }
    closeLists(0)
    if (line.startsWith('>')) {
      flushParagraph()
      out.push(`<blockquote><p>${renderInline(line.replace(/^>\s?/, ''))}</p></blockquote>`)
      continue
    }
    paragraph.push(line.trim())
  }
  flushParagraph()
  closeLists(0)
  return out.join('')
}
