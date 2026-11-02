import { computed, effectScope, onMounted, ref, watchEffect } from 'vue'
import { useData, withBase } from 'vitepress'

import { defaultFeedUrl, projects, type Feed, type FeedEntry, type Lang } from '../../../changelog/feed'
import { data } from './changelog.data'

const feedUrl = import.meta.env.VITE_CHANGELOG_FEED_URL || defaultFeedUrl
const seenKey = 'hinata-whats-new-seen'

// Shared by the bar, the home page list and the timeline, so the live feed
// is fetched once per visit.
const feed = ref<Feed>(data)
const seen = ref<string | null>(null)
const mounted = ref(false)
let started = false

function readSeen(): string | null {
  try {
    return localStorage.getItem(seenKey)
  } catch {
    return null
  }
}

function start() {
  if (started) return
  started = true
  seen.value = readSeen()
  mounted.value = true
  fetch(feedUrl)
    .then((response) => (response.ok ? response.json() : null))
    .then((live: Feed | null) => {
      if (live && Array.isArray(live.entries) && live.entries.length) feed.value = live
    })
    .catch(() => {})
  // Detached, so the nav dot keeps following the state after the component
  // that started it unmounts.
  effectScope(true).run(() => {
    watchEffect(() => {
      document.documentElement.classList.toggle('whats-new-unseen', unseen.value)
    })
  })
}

const latest = computed<FeedEntry | undefined>(() => feed.value.entries[0])
// Only known after mount, so server-rendered pages never show the unseen
// state.
const unseen = computed(() => mounted.value && !!latest.value && seen.value !== latest.value.id)

export function markSeen() {
  if (!latest.value) return
  seen.value = latest.value.id
  try {
    localStorage.setItem(seenKey, latest.value.id)
  } catch {
    // Without storage the bar comes back on the next visit.
  }
}

export function entryAnchor(entry: FeedEntry): string {
  return entry.id.replace(/[^A-Za-z0-9]+/g, '-')
}

export function useChangelog() {
  const { lang: siteLang } = useData()
  const lang = computed<Lang>(() => (siteLang.value.startsWith('zh') ? 'zh' : 'en'))
  const timelineLink = computed(() => withBase(lang.value === 'zh' ? '/whats-new' : '/en/whats-new'))

  onMounted(start)

  const project = (id: string) => projects.find((item) => item.id === id)
  const projectName = (entry: FeedEntry) => project(entry.project)?.name[lang.value] ?? entry.project
  const projectShort = (entry: FeedEntry) => project(entry.project)?.short[lang.value] ?? entry.project

  return {
    entries: computed(() => feed.value.entries),
    latest,
    unseen,
    lang,
    timelineLink,
    projectName,
    projectShort,
    entryLink: (entry: FeedEntry) => `${timelineLink.value}#${entryAnchor(entry)}`,
  }
}
