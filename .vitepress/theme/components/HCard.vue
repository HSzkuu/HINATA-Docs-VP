<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

/**
 * HCard.vue
 * 1-3列自适应，且 cols=1 时字号自动放大
 */
interface Props {
  title: string;
  link: string;
  target?: string;
  cols?: number; 
}

const props = withDefaults(defineProps<Props>(), {
  target: '_self',
  cols: 3
});

const containerRef = ref<HTMLElement | null>(null);
let resizeObserver: ResizeObserver | undefined;

const syncRowHeights = () => {
  const cards = Array.from(document.querySelectorAll<HTMLElement>('.h-card-container'));
  const links = cards
    .map((card) => ({ card, link: card.querySelector<HTMLElement>('.fc-link') }))
    .filter((item): item is { card: HTMLElement; link: HTMLElement } => Boolean(item.link));

  links.forEach(({ card, link }) => {
    card.style.height = '';
    link.style.height = '';
    link.style.minHeight = '';
  });

  if (window.matchMedia('(max-width: 640px)').matches) return;

  const rows = new Map<number, Array<{ card: HTMLElement; link: HTMLElement }>>();
  links.forEach(({ card, link }) => {
    if (card.dataset.cols === '1') return;

    const rowTop = Math.round(card.offsetTop);
    const row = rows.get(rowTop) ?? [];
    row.push({ card, link });
    rows.set(rowTop, row);
  });

  rows.forEach((row) => {
    if (row.length < 2) return;

    const maxHeight = Math.max(...row.map(({ card }) => card.offsetHeight));
    row.forEach(({ card, link }) => {
      card.style.height = `${maxHeight}px`;
      link.style.height = '100%';
    });
  });
};

const scheduleSyncRowHeights = () => {
  void nextTick(() => {
    requestAnimationFrame(syncRowHeights);
  });
};

onMounted(() => {
  scheduleSyncRowHeights();
  window.addEventListener('resize', scheduleSyncRowHeights);
  window.addEventListener('load', scheduleSyncRowHeights);

  if ('ResizeObserver' in window) {
    resizeObserver = new ResizeObserver(scheduleSyncRowHeights);
    if (containerRef.value) resizeObserver.observe(containerRef.value);
    resizeObserver.observe(document.body);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', scheduleSyncRowHeights);
  window.removeEventListener('load', scheduleSyncRowHeights);
  resizeObserver?.disconnect();
});
</script>

<template>
  <ClientOnly>
    <div ref="containerRef" class="h-card-container" :data-cols="props.cols">
      <a :href="props.link" :target="props.target" class="fc-link">
        <div class="fc-box">
          <div class="fc-title">{{ props.title }}</div>
          <div class="fc-body">
            <slot></slot>
          </div>
        </div>
      </a>
    </div>
  </ClientOnly>
</template>

<style scoped>
/* --- 布局基础 --- */
.h-card-container {
  display: inline-flex;
  vertical-align: top;
  box-sizing: border-box;
  padding: 8px;
  /* 默认宽度计算 */
  width: calc(100% / 3 - 0.1px); 
}

/* 动态宽度控制 */
.h-card-container[data-cols="1"] { width: 100%; }
.h-card-container[data-cols="2"] { width: 50%; }
.h-card-container[data-cols="3"] { width: 33.33%; }

.fc-link {
  display: flex;
  width: 100%;
  text-decoration: none !important;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.25s ease;
  height: 100%;
}

.fc-link:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-mute);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.fc-box {
  box-sizing: border-box;
  width: 100%;
  padding: 1.5rem;
  transition: padding 0.2s ease;
}

/* --- 字号逻辑 (关键部分) --- */

/* 默认样式：针对 2-3 列 (紧凑型) */
.fc-title {
  font-weight: 600;
  color: var(--vp-c-text-1) !important;
  margin-bottom: 0.5rem !important;
  /* 默认小字号 */
  font-size: 0.95rem !important; 
  line-height: 1.4 !important;
}

.fc-body {
  color: var(--vp-c-text-2);
  /* 默认小字号 */
  font-size: 0.85rem !important;
  line-height: 1.6 !important;
}

/* --- 当 cols 为 1 时的字号放大逻辑 --- */
.h-card-container[data-cols="1"] .fc-box {
  padding: 1.5rem; 
}

.h-card-container[data-cols="1"] .fc-title {
  font-size: 1.5rem !important; /* 显著放大标题 */
  margin-bottom: 1rem !important;
}

.h-card-container[data-cols="1"] .fc-body {
  font-size: 1rem !important; /* 显著放大正文 */
}

/* --- 移动端适配 --- */
@media (max-width: 640px) {
  .h-card-container {
    width: 100% !important;
    padding: 8px 0;
  }
  /* 手机上自动用中等字号，避免太小看不清 */
  .fc-title { font-size: 1.2rem !important; }
  .fc-body { font-size: 1rem !important; }
}

/* 禁用外部链接图标 */
.fc-link::after { content: none !important; }
</style>
