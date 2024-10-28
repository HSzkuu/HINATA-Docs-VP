import { defineConfig } from 'vitepress'
import { zh } from './zh.mjs'
import { en } from './en.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico'}],
  ],
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  },
  locales: {
    zh: { label: '简体中文', ...zh },
    en: { label: 'English', ...en },
  }
})