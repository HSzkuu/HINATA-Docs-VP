<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import ProjectTag from './ProjectTag.vue'
import { projects } from '../../../changelog/feed'
import { entryAnchor, markSeen, useChangelog } from '../changelog/useChangelog'

// Every update of every project, newest first, with a project filter.
const { entries, lang, projectName, projectShort } = useChangelog()
const filter = ref<string>('all')

onMounted(markSeen)

const shown = computed(() =>
  filter.value === 'all' ? entries.value : entries.value.filter((entry) => entry.project === filter.value),
)
const filters = computed(() => [
  { id: 'all', label: lang.value === 'zh' ? '全部' : 'All' },
  ...projects.map((project) => ({ id: project.id, label: project.short[lang.value] })),
])
const empty = computed(() =>
  lang.value === 'zh' ? '暂时无法加载更新动态，请稍后再试。' : "Updates couldn't be loaded. Try again later.",
)
</script>

<template>
  <div class="whats-new-timeline">
    <div class="whats-new-timeline__filters" role="group">
      <button
        v-for="item in filters"
        :key="item.id"
        type="button"
        class="whats-new-timeline__filter"
        :class="{ 'is-active': filter === item.id }"
        :aria-pressed="filter === item.id"
        @click="filter = item.id"
      >
        {{ item.label }}
      </button>
    </div>

    <p v-if="!entries.length" class="whats-new-timeline__empty">{{ empty }}</p>

    <ol class="whats-new-timeline__list">
      <li v-for="entry in shown" :id="entryAnchor(entry)" :key="entry.id" class="whats-new-timeline__entry">
        <div class="whats-new-timeline__meta">
          <time :datetime="entry.date">{{ entry.date }}</time>
          <ProjectTag :project="entry.project" :label="projectShort(entry)" />
        </div>
        <h3 class="whats-new-timeline__title">
          {{ projectName(entry) }} {{ entry.version }}
          <a class="header-anchor" :href="`#${entryAnchor(entry)}`" aria-hidden="true">&#8203;</a>
        </h3>
        <div class="whats-new-timeline__body" v-html="entry.html[lang]" />
      </li>
    </ol>
  </div>
</template>

<style scoped>
.whats-new-timeline__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0 24px;
}

.whats-new-timeline__filter {
  padding: 4px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  transition: color 0.2s, border-color 0.2s, background-color 0.2s;
}

.whats-new-timeline__filter:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}

.whats-new-timeline__filter.is-active {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.whats-new-timeline__empty {
  color: var(--vp-c-text-2);
}

.whats-new-timeline__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.whats-new-timeline__entry {
  position: relative;
  margin: 0;
  padding: 0 0 28px 24px;
  border-left: 2px solid var(--vp-c-divider);
  scroll-margin-top: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 24px);
}

.whats-new-timeline__entry::before {
  content: '';
  position: absolute;
  top: 6px;
  left: -7px;
  width: 12px;
  height: 12px;
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 50%;
  background-color: var(--vp-c-bg);
}

.whats-new-timeline__entry:first-child::before {
  background-color: var(--vp-c-brand-1);
}

.whats-new-timeline__entry:last-child {
  border-left-color: transparent;
}

.whats-new-timeline__meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.vp-doc .whats-new-timeline__title {
  margin: 6px 0 8px;
  padding-top: 0;
  border-top: none;
  font-size: 18px;
}

.vp-doc .whats-new-timeline__body :deep(p),
.vp-doc .whats-new-timeline__body :deep(ul),
.vp-doc .whats-new-timeline__body :deep(ol) {
  margin: 8px 0;
}

.vp-doc .whats-new-timeline__body :deep(li + li) {
  margin-top: 4px;
}
</style>
