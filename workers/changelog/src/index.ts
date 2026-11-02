// Serves every project's CHANGELOG.md as one JSON feed for the docs.
//
// GET /changelog.json -> Feed (see changelog/feed.ts)
//
// Several repositories are private, so the files are read with GITHUB_TOKEN,
// a fine-grained token with read-only Contents access to them. The feed is
// cached at the edge for CACHE_SECONDS, so a pushed changelog shows up on the
// docs within that time without rebuilding them.

import { mergeEntries, parseChangelog, projects, type Feed, type FeedEntry } from '../../../changelog/feed'

interface Env {
  GITHUB_TOKEN: string
  ALLOWED_ORIGINS?: string
}

const CACHE_SECONDS = 600
// A feed missing a project is retried sooner.
const PARTIAL_CACHE_SECONDS = 60

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url)
    const cors = corsHeaders(request, env)

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors })
    }
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method not allowed', { status: 405, headers: cors })
    }
    if (url.pathname !== '/changelog.json' && url.pathname !== '/') {
      return new Response('Not found', { status: 404, headers: cors })
    }

    const cache = caches.default
    const cacheKey = new Request(`${url.origin}/changelog.json`)
    const cached = await cache.match(cacheKey)
    if (cached) return withHeaders(cached, cors)

    const feed = await buildFeed(env)
    const maxAge = feed.errors.length ? PARTIAL_CACHE_SECONDS : CACHE_SECONDS
    const response = new Response(JSON.stringify(feed), {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': `public, max-age=${maxAge}`,
      },
    })
    ctx.waitUntil(cache.put(cacheKey, response.clone()))
    return withHeaders(response, cors)
  },
}

async function buildFeed(env: Env): Promise<Feed> {
  const errors: string[] = []
  const results = await Promise.all(
    projects.map(async (project): Promise<FeedEntry[]> => {
      try {
        const markdown = await fetchChangelog(project.repo, env.GITHUB_TOKEN)
        return parseChangelog(project.id, markdown)
      } catch (error) {
        console.error(`changelog of ${project.repo}`, error)
        errors.push(project.id)
        return []
      }
    }),
  )
  return { generatedAt: new Date().toISOString(), entries: mergeEntries(results), errors }
}

async function fetchChangelog(repo: string, token: string): Promise<string> {
  const response = await fetch(`https://api.github.com/repos/${repo}/contents/CHANGELOG.md`, {
    headers: {
      Accept: 'application/vnd.github.raw+json',
      Authorization: `Bearer ${token}`,
      'User-Agent': 'hinata-changelog-worker',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })
  if (!response.ok) throw new Error(`GitHub answered ${response.status}`)
  return response.text()
}

function corsHeaders(request: Request, env: Env): Headers {
  const headers = new Headers({ 'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS', Vary: 'Origin' })
  const origin = request.headers.get('Origin')
  const allowed = (env.ALLOWED_ORIGINS ?? '*').split(',').map((item) => item.trim())
  if (allowed.includes('*')) {
    headers.set('Access-Control-Allow-Origin', '*')
  } else if (origin && allowed.includes(origin)) {
    headers.set('Access-Control-Allow-Origin', origin)
  }
  return headers
}

function withHeaders(response: Response, extra: Headers): Response {
  const copy = new Response(response.body, response)
  extra.forEach((value, key) => copy.headers.set(key, value))
  return copy
}
