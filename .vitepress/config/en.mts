import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  title: "HINATA Manual",
  description: "idk",
  head: [
    ['link', { rel: 'icon', href: '../favicon.ico'}],
  ],

  themeConfig: {
    nav: [
    ],

    sidebar: [
      {
        text: 'Quick Start',
        items: [
          { text: 'Introduction & Debut', link: '/en/quickstart' },
          {
            text: 'Configuring Games',
            items: [
              {
                text: 'SEGA Games',
                items: [
                  { text: '配置说明', link: '/en/SEGA/' },
                  { text: '串口方式连接', link: '/en/SEGA/serial' },
                  { text: 'AimeIO 连接', link: '/en/SEGA/aimeio' },
                  { text: '游戏内测试读卡器', link: '/en/SEGA/in_game_test' },
                  { text: '常见问题', link: '/en/SEGA/qa' }
                ]
                
              },
              { text: 'KONAMI 游戏', link: '/en/KONAMI/' },
              { text: 'HINATA 控制中心', link: '/en/HCP/' },
              { text: '固件更新说明', link: '/en/Update/' }
            ]
            
          }
        ]
        
      },
      { text: '购买 & 售后', link: '/en/purchase_contact' }
    ]
  }
})
