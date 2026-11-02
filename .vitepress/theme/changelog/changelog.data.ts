import { defineLoader } from 'vitepress'

import { defaultFeedUrl, type Feed } from '../../../changelog/feed'

declare const data: Feed
export { data }

// A snapshot of the feed taken at build time, so the pages have content
// before the live feed answers, and still have it if it never does.
export default defineLoader({
  async load(): Promise<Feed> {
    const url = process.env.VITE_CHANGELOG_FEED_URL || defaultFeedUrl
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(15000) })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const feed = (await response.json()) as Feed
      if (!Array.isArray(feed.entries)) throw new Error('no entries')
      return feed
    } catch (error) {
      console.warn(`[changelog] could not load ${url} at build time:`, error)
      return { generatedAt: '', entries: [], errors: ['build'] }
    }
  },
})
