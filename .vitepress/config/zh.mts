import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const zh = defineConfig({
  lang: 'zh-Hans',
  title: "HINATA 使用文档",
  description: "泛用多功能街机游戏读卡器",
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico'}],
  ],

  themeConfig: {
    nav: [
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '介绍 & 初次使用', link: '/quickstart' },
          {
            text: '配置游戏',
            items: [
              {
                text: 'SEGA 游戏',
                items: [
                  { text: '配置说明', link: '/SEGA/' },
                  { text: '串口方式连接', link: '/SEGA/serial' },
                  { text: 'AimeIO 连接', link: '/SEGA/aimeio' },
                  { text: '游戏内测试读卡器', link: '/SEGA/in_game_test' },
                  { text: '常见问题', link: '/SEGA/qa' }
                ]
                
              },
              { text: 'KONAMI 游戏', link: '/KONAMI/' },
              { text: 'HINATA 控制中心', link: '/HCP/' },
              { text: '固件更新说明', link: '/Update/' }
            ]
            
          }
        ]
        
      },
      { text: '购买 & 售后', link: '/purchase_contact' }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
