<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

import ProjectTag from './ProjectTag.vue'
import { markSeen, useChangelog } from '../changelog/useChangelog'

// The latest update, in a card at the bottom corner of every page until it
// is dismissed or the timeline is opened. A newer update brings it back.
// The home page lists the updates itself, so the card stays off there.
const { latest, unseen, lang, timelineLink, projectName, projectShort, entryLink } = useChangelog()
const { frontmatter } = useData()
const route = useRoute()

const visible = computed(
  () =>
    unseen.value &&
    frontmatter.value.layout !== 'home' &&
    route.path.replace(/\.html$/, '') !== timelineLink.value,
)

const text = computed(() =>
  lang.value === 'zh'
    ? { label: '新动态', open: '查看更新', dismiss: '关闭' }
    : { label: "What's new", open: 'See the update', dismiss: 'Dismiss' },
)
</script>

<template>
  <Transition name="whats-new-card">
    <aside v-if="visible && latest" class="whats-new-card" :aria-label="text.label">
      <div class="whats-new-card__meta">
        <span class="whats-new-card__label">{{ text.label }}</span>
        <ProjectTag :project="latest.project" :label="projectShort(latest)" />
        <time :datetime="latest.date">{{ latest.date }}</time>
      </div>
      <p class="whats-new-card__title">{{ projectName(latest) }} {{ latest.version }}</p>
      <p class="whats-new-card__summary">{{ latest.summary[lang] }}</p>
      <a class="whats-new-card__open" :href="entryLink(latest)" @click="markSeen">{{ text.open }} →</a>
      <button
        class="whats-new-card__close"
        type="button"
        :aria-label="text.dismiss"
        :title="text.dismiss"
        @click="markSeen"
      >
        ×
      </button>
    </aside>
  </Transition>
</template>

<style scoped>
.whats-new-card {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: var(--vp-z-index-layout-top, 40);
  width: 340px;
  padding: 16px 18px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
}

.whats-new-card__meta {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 24px;
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.whats-new-card__label {
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.whats-new-card__title {
  margin: 8px 0 4px;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  color: var(--vp-c-text-1);
}

.whats-new-card__summary {
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  font-size: 14px;
  line-height: 22px;
  color: var(--vp-c-text-2);
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.whats-new-card__open {
  display: inline-block;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.whats-new-card__open:hover {
  color: var(--vp-c-brand-2);
}

.whats-new-card__close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  font-size: 18px;
  line-height: 1;
  color: var(--vp-c-text-3);
}

.whats-new-card__close:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-default-soft);
}

.whats-new-card-enter-active,
.whats-new-card-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}

.whats-new-card-enter-from,
.whats-new-card-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (max-width: 640px) {
  .whats-new-card {
    right: 12px;
    bottom: 12px;
    left: 12px;
    width: auto;
  }
}
</style>
