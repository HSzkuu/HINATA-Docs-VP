import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  title: "HINATA Manual",
  description: "General-purpose Multifunctional Arcade Game Card Reader",

  themeConfig: {
    nav: [
    ],

    sidebar: [
      {
        text: 'Quick Start',
        items: [
          { text: 'Introduction & First Use', link: '/en/quickstart' },
          {
            text: 'Configuring the Game',
            items: [
              {
                text: 'SEGA Games',
                items: [
                  { text: 'Configuration Instructions', link: '/en/SEGA/' },
                  { text: 'Official Serial Protocol', link: '/en/SEGA/serial' },
                  { text: 'AimeIO', link: '/en/SEGA/aimeio' },
                  { text: 'In-Game Card Reader Test', link: '/en/SEGA/in_game_test' },
                  { text: 'Q & A', link: '/en/SEGA/qa' }
                ]
                
              },
              { text: 'KONAMI Games', link: '/en/KONAMI/' },
              { text: 'HINATA Control Panel', link: '/en/HCP/' },
              { text: 'Firmware Update', link: '/en/Update/' }
            ]
            
          }
        ]
        
      },
      { text: 'Purchase & Support', link: '/en/purchase_contact' }
    ]
  }
})
