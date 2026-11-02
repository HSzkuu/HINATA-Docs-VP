<script setup lang="ts">
import { computed } from 'vue'

import ProjectTag from './ProjectTag.vue'
import { useChangelog } from '../changelog/useChangelog'

// The latest updates across every project, on the home page between the
// hero and the features.
const { entries, lang, timelineLink, projectName, projectShort, entryLink } = useChangelog()

const recent = computed(() => entries.value.slice(0, 5))
const text = computed(() =>
  lang.value === 'zh' ? { title: '最新动态', all: '全部更新动态' } : { title: "What's new", all: 'All updates' },
)
</script>

<template>
  <section v-if="recent.length" class="whats-new-home">
    <div class="whats-new-home__container">
      <div class="whats-new-home__header">
        <h2 class="whats-new-home__title">{{ text.title }}</h2>
        <a class="whats-new-home__all" :href="timelineLink">{{ text.all }} →</a>
      </div>
      <ul class="whats-new-home__list">
        <li v-for="entry in recent" :key="entry.id">
          <a class="whats-new-home__item" :href="entryLink(entry)" :title="`${projectName(entry)} ${entry.version}`">
            <span class="whats-new-home__heading">
              <ProjectTag :project="entry.project" :label="projectShort(entry)" />
              <strong>{{ entry.version }}</strong>
              <time :datetime="entry.date">{{ entry.date }}</time>
            </span>
            <span class="whats-new-home__summary">{{ entry.summary[lang] }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.whats-new-home {
  padding: 0 24px;
}

@media (min-width: 640px) {
  .whats-new-home {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .whats-new-home {
    padding: 0 64px;
  }
}

.whats-new-home__container {
  max-width: 1152px;
  margin: 0 auto 32px;
  padding: 20px 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
}

.whats-new-home__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 8px;
}

.whats-new-home__title {
  font-size: 20px;
  font-weight: 600;
}

.whats-new-home__all {
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.whats-new-home__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.whats-new-home__item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 0;
  border-top: 1px solid var(--vp-c-divider);
  color: inherit;
  text-decoration: none;
}

.whats-new-home__list li:first-child .whats-new-home__item {
  border-top: none;
}

.whats-new-home__heading {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 10px;
  font-size: 15px;
}

.whats-new-home__heading strong {
  font-weight: 600;
}

.whats-new-home__item:hover .whats-new-home__heading strong {
  color: var(--vp-c-brand-1);
}

.whats-new-home__heading time {
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.whats-new-home__summary {
  overflow: hidden;
  font-size: 14px;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
