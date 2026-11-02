<script setup lang="ts">
defineProps<{ project: string; label: string }>()
</script>

<template>
  <span class="project-tag" :class="`project-tag--${project}`">{{ label }}</span>
</template>

<style scoped>
.project-tag {
  display: inline-block;
  flex-shrink: 0;
  padding: 0 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-default-soft);
}

.project-tag--go {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.project-tag--firmware {
  color: var(--vp-c-warning-1);
  background-color: var(--vp-c-warning-soft);
}

.project-tag--io {
  color: var(--vp-c-success-1);
  background-color: var(--vp-c-success-soft);
}

.project-tag--client {
  color: var(--vp-c-important-1);
  background-color: var(--vp-c-important-soft);
}
</style>
