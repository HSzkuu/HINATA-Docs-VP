import { defineConfig } from 'vitepress'
import { zh } from './zh.mjs'
import { en } from './en.mjs'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { 
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
        'vitepress', 
        '@nolebase/ui', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可 //
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
        '@nolebase/ui', 
        '@nolebase/vitepress-plugin-highlight-targeted-heading', 
      ], 
    }, 
  }, 
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico'}],
  ],
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
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
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en },
  }
})